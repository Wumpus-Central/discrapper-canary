n.d(t, { A: () => B });
var l = n(627968),
    i = n(64700),
    s = n(989349),
    r = n.n(s),
    a = n(311907),
    d = n(983851),
    o = n(146151),
    c = n(451394),
    u = n(808107),
    x = n(783878),
    h = n(292666),
    m = n(116085),
    g = n(954197),
    v = n(192308),
    j = n(331322),
    A = n(534514),
    E = n(834730),
    p = n(47167),
    N = n(841937),
    C = n(734057),
    f = n(71393),
    y = n(576705),
    b = n(994500),
    S = n(287809),
    I = n(698441),
    T = n(770666),
    R = n(761836),
    _ = n(232246),
    k = n(530209),
    D = n(9448),
    G = n(181961),
    L = n(988794),
    M = n(652215),
    P = n(985018),
    U = n(723074);
let z = (e) => {
        let { guildId: t, channelType: n, channel: i, onSelectChannel: s, disabled: r, entityType: a } = e,
            h = n === M.rbe.GUILD_STAGE_VOICE,
            m = (0, k.D)(i, a),
            g = (0, R.pW)(t, n);
        return (0, l.jsx)(x.Z, {
            selectionMode: "single",
            label: h ? P.intl.string(P.t.S7GjDz) : P.intl.string(P.t["7RYWCP"]),
            required: !0,
            helperText: m ? void 0 : P.intl.string(P.t.F3bDaX),
            value: i?.id,
            options: g.map((e) => ({
                id: e.id,
                value: e.id,
                label: (0, p.m1)(e, S.default, b.A, !0),
                leading: ((e, t) => {
                    let n = C.A.getChannel(e);
                    if (null == n) return null;
                    let i = n.type === M.rbe.GUILD_STAGE_VOICE,
                        s = (0, k.D)(n, t),
                        r = s ? d.H : o.t,
                        a = s ? c.q : u.D;
                    return (0, l.jsx)(i ? a : r, { color: "currentColor", size: "md", className: U.sr });
                })(e.id, a),
            })),
            onSelectionChange: (e) => {
                s(g.find((t) => t.id === e) ?? void 0);
            },
            disabled: r,
        });
    },
    V = (e, t) => (n) => {
        let l = { entityType: n, scheduledEndTime: void 0 };
        n === L.Ps.EXTERNAL && (l.scheduledEndTime = (r()(t.scheduledStartTime) ?? r()()).add(2, "hour").toISOString()),
            e(l);
    };
function F(e) {
    let { guildId: t, guildEvent: n, onChange: s, isFocusReady: r } = e,
        { entityType: d, channelId: o } = n,
        c = (0, a.bG)([C.A], () => C.A.getChannel(o), [o]),
        u = i.useRef(null),
        x = i.useRef(void 0);
    i.useEffect(() => {
        let e = r && !x.current;
        (x.current = r), e && d === L.Ps.EXTERNAL && u.current?.focus();
    }, [r, d]);
    let m = (e) => {
            s({ channelId: e?.id ?? null });
        },
        g = (0, D.k5)(n),
        v = (0, D.dy)(d),
        j = (0, I.Fd)(n);
    return null == d || d === L.Ps.NONE
        ? null
        : d === L.Ps.EXTERNAL
          ? (0, l.jsx)(h.k, {
                label: P.intl.string(P.t.yx785A),
                required: !0,
                onChange: (e) => {
                    s({ entityMetadata: { location: e } });
                },
                placeholder: P.intl.string(P.t.mkCMia),
                maxLength: L.vj,
                value: g ?? "",
                inputRef: u,
            })
          : null == v
            ? null
            : (0, l.jsx)(z, { guildId: t, channelType: v, onSelectChannel: m, channel: c, entityType: d, disabled: j });
}
function w(e) {
    let { guildId: t, guildEvent: n, onChange: s } = e,
        r = (0, a.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = (0, T.A)(t, void 0),
        u = (0, T.A)(t, M.rbe.GUILD_VOICE),
        x = (0, T.A)(t, M.rbe.GUILD_STAGE_VOICE),
        h = (0, R.pW)(t, M.rbe.GUILD_VOICE),
        v = (0, _.A)(r),
        j = r?.features.has(M.GuildFeatures.COMMUNITY),
        A = (0, I.Fd)(n),
        E = V(s, n),
        p = i.useMemo(() => {
            let e = !u || 0 === h.length,
                t = u ? P.intl.string(P.t["DkY+cO"]) : P.intl.string(P.t.HeF1kV),
                n = [
                    {
                        name: P.intl.string(P.t.BVZqJl),
                        value: L.Ps.VOICE,
                        desc: e ? t : P.intl.string(P.t["EV//4f"]),
                        leadingIcon: d.H,
                        disabled: e,
                    },
                    {
                        name: P.intl.string(P.t.w7ipbz),
                        value: L.Ps.EXTERNAL,
                        desc: o ? P.intl.string(P.t.DYxrHm) : P.intl.string(P.t.HeF1kV),
                        leadingIcon: m.B,
                        disabled: !o,
                    },
                ];
            if (j) {
                let e = !x || 0 === v.length,
                    t = x ? P.intl.string(P.t["DkY+cO"]) : P.intl.string(P.t.HeF1kV);
                return [
                    {
                        name: P.intl.string(P.t.EErMzA),
                        value: L.Ps.STAGE_INSTANCE,
                        desc: e ? t : P.intl.string(P.t.LgALpp),
                        leadingIcon: c.q,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [o, u, x, j, h.length, v.length]);
    return (0, l.jsx)(g.z, {
        value: p.find((e) => e.value === n.entityType)?.value ?? null,
        options: p,
        onChange: E,
        disabled: A,
        helperText: A ? P.intl.string(P.t.yutP5U) : void 0,
    });
}
function B(e) {
    let { guildId: t, guildEvent: i, validationErrorMessage: s, onChange: r, isSlideReady: d = !1 } = e,
        { entityType: o } = i,
        c = (0, a.bG)([f.A], () => f.A.getGuild(t), [t]),
        u = (0, _.A)(c),
        x = (0, a.bG)([y.A], () => y.A.can(M.xBc.MANAGE_CHANNELS, c)),
        h = c?.features.has(M.GuildFeatures.COMMUNITY),
        m = V(r, i),
        g = h && o !== L.Ps.EXTERNAL && 0 === u.length && x && null != o;
    return (0, l.jsxs)("div", {
        className: U.kL,
        children: [
            (0, l.jsxs)(j.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(A.D, { variant: "heading-xl/semibold", children: P.intl.string(P.t["DC+Qm8"]) }),
                    (0, l.jsx)(E.E, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: P.intl.string(P.t.IwmXLP),
                    }),
                ],
            }),
            (0, l.jsx)(w, { guildId: t, guildEvent: i, onChange: r }),
            (0, l.jsx)(F, { guildId: t, guildEvent: i, isFocusReady: d, onChange: r }),
            g
                ? (0, l.jsx)(G.A, {
                      onClick: () => {
                          m(L.Ps.STAGE_INSTANCE),
                              (0, v.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("18496"),
                                      n.e("93142"),
                                      n.e("64233"),
                                      n.e("26481"),
                                  ]).then(n.bind(n, 409200));
                                  return (n) =>
                                      (0, l.jsx)(e, { ...n, channelType: M.rbe.GUILD_STAGE_VOICE, guildId: t });
                              });
                      },
                  })
                : null,
            L.Tn.has(i.entityType) && (0, l.jsx)(N.A, {}),
        ],
    });
}
