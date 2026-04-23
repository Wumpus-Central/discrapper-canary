l.d(t, { A: () => B });
var n = l(627968),
    i = l(64700),
    s = l(989349),
    a = l.n(s),
    r = l(311907),
    d = l(983851),
    o = l(146151),
    c = l(451394),
    u = l(808107),
    x = l(783878),
    h = l(292666),
    m = l(116085),
    g = l(954197),
    v = l(192308),
    j = l(331322),
    A = l(534514),
    E = l(834730),
    p = l(47167),
    f = l(841937),
    N = l(734057),
    C = l(71393),
    y = l(576705),
    b = l(994500),
    S = l(287809),
    I = l(698441),
    T = l(770666),
    R = l(761836),
    D = l(232246),
    _ = l(530209),
    k = l(9448),
    G = l(181961),
    L = l(988794),
    M = l(652215),
    P = l(985018),
    U = l(723074);
let z = (e) => {
        let { guildId: t, channelType: l, channel: i, onSelectChannel: s, disabled: a, entityType: r } = e,
            h = l === M.rbe.GUILD_STAGE_VOICE,
            m = (0, _.D)(i, r),
            g = (0, R.pW)(t, l);
        return (0, n.jsx)(x.Z, {
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
                    let l = N.A.getChannel(e);
                    if (null == l) return null;
                    let i = l.type === M.rbe.GUILD_STAGE_VOICE,
                        s = (0, _.D)(l, t),
                        a = s ? d.H : o.t,
                        r = s ? c.q : u.D;
                    return (0, n.jsx)(i ? r : a, { color: "currentColor", size: "md", className: U.sr });
                })(e.id, r),
            })),
            onSelectionChange: (e) => {
                s(g.find((t) => t.id === e) ?? void 0);
            },
            disabled: a,
        });
    },
    V = (e, t) => (l) => {
        let n = { entityType: l, scheduledEndTime: void 0 };
        l === L.Ps.EXTERNAL && (n.scheduledEndTime = (a()(t.scheduledStartTime) ?? a()()).add(2, "hour").toISOString()),
            e(n);
    };
function F(e) {
    let { guildId: t, guildEvent: l, onChange: s, isFocusReady: a } = e,
        { entityType: d, channelId: o } = l,
        c = (0, r.bG)([N.A], () => N.A.getChannel(o), [o]),
        u = i.useRef(null),
        x = i.useRef(void 0);
    i.useEffect(() => {
        let e = a && !x.current;
        (x.current = a), e && d === L.Ps.EXTERNAL && u.current?.focus();
    }, [a, d]);
    let m = (e) => {
            s({ channelId: e?.id ?? null });
        },
        g = (0, k.k5)(l),
        v = (0, k.dy)(d),
        j = (0, I.Fd)(l);
    return null == d || d === L.Ps.NONE
        ? null
        : d === L.Ps.EXTERNAL
          ? (0, n.jsx)(h.k, {
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
            : (0, n.jsx)(z, { guildId: t, channelType: v, onSelectChannel: m, channel: c, entityType: d, disabled: j });
}
function w(e) {
    let { guildId: t, guildEvent: l, onChange: s } = e,
        a = (0, r.bG)([C.A], () => C.A.getGuild(t), [t]),
        o = (0, T.A)(t, void 0),
        u = (0, T.A)(t, M.rbe.GUILD_VOICE),
        x = (0, T.A)(t, M.rbe.GUILD_STAGE_VOICE),
        h = (0, R.pW)(t, M.rbe.GUILD_VOICE),
        v = (0, D.A)(a),
        j = a?.features.has(M.GuildFeatures.COMMUNITY),
        A = (0, I.Fd)(l),
        E = V(s, l),
        p = i.useMemo(() => {
            let e = !u || 0 === h.length,
                t = u ? P.intl.string(P.t["DkY+cO"]) : P.intl.string(P.t.HeF1kV),
                l = [
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
                    ...l,
                ];
            }
            return l;
        }, [o, u, x, j, h.length, v.length]);
    return (0, n.jsx)(g.z, {
        value: p.find((e) => e.value === l.entityType)?.value ?? null,
        options: p,
        onChange: E,
        disabled: A,
        helperText: A ? P.intl.string(P.t.yutP5U) : void 0,
    });
}
function B(e) {
    let { guildId: t, guildEvent: i, validationErrorMessage: s, onChange: a, isSlideReady: d = !1 } = e,
        { entityType: o } = i,
        c = (0, r.bG)([C.A], () => C.A.getGuild(t), [t]),
        u = (0, D.A)(c),
        x = (0, r.bG)([y.A], () => y.A.can(M.xBc.MANAGE_CHANNELS, c)),
        h = c?.features.has(M.GuildFeatures.COMMUNITY),
        m = V(a, i),
        g = h && o !== L.Ps.EXTERNAL && 0 === u.length && x && null != o;
    return (0, n.jsxs)("div", {
        className: U.kL,
        children: [
            (0, n.jsxs)(j.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(A.D, { variant: "heading-xl/semibold", children: P.intl.string(P.t["DC+Qm8"]) }),
                    (0, n.jsx)(E.E, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: P.intl.string(P.t.IwmXLP),
                    }),
                ],
            }),
            (0, n.jsx)(w, { guildId: t, guildEvent: i, onChange: a }),
            (0, n.jsx)(F, { guildId: t, guildEvent: i, isFocusReady: d, onChange: a }),
            g
                ? (0, n.jsx)(G.A, {
                      onClick: () => {
                          m(L.Ps.STAGE_INSTANCE),
                              (0, v.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      l.e("18496"),
                                      l.e("93142"),
                                      l.e("64233"),
                                      l.e("26481"),
                                  ]).then(l.bind(l, 409200));
                                  return (l) =>
                                      (0, n.jsx)(e, { ...l, channelType: M.rbe.GUILD_STAGE_VOICE, guildId: t });
                              });
                      },
                  })
                : null,
            L.Tn.has(i.entityType) && (0, n.jsx)(f.A, {}),
        ],
    });
}
