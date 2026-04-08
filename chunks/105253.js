n.d(t, { A: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(311907),
    d = n(397927),
    c = n(47167),
    o = n(841937),
    u = n(734057),
    x = n(71393),
    h = n(576705),
    m = n(994500),
    g = n(287809),
    v = n(698441),
    j = n(770666),
    A = n(761836),
    N = n(232246),
    f = n(530209),
    E = n(9448),
    p = n(181961),
    C = n(988794),
    T = n(652215),
    y = n(985018),
    b = n(679835);
let I = (e) => {
        let { guildId: t, channelType: n, channel: i, onSelectChannel: s, disabled: a, entityType: r } = e,
            o = n === T.rbe.GUILD_STAGE_VOICE,
            x = (0, f.D)(i, r),
            h = (0, A.pW)(t, n);
        return (0, l.jsx)(d.ZiE, {
            selectionMode: "single",
            label: o ? y.intl.string(y.t.S7GjDz) : y.intl.string(y.t["7RYWCP"]),
            required: !0,
            helperText: x ? void 0 : y.intl.string(y.t.F3bDaX),
            value: i?.id,
            options: h.map((e) => ({
                id: e.id,
                value: e.id,
                label: (0, c.m1)(e, g.default, m.A, !0),
                leading: ((e, t) => {
                    let n = u.A.getChannel(e);
                    if (null == n) return null;
                    let i = n.type === T.rbe.GUILD_STAGE_VOICE,
                        s = (0, f.D)(n, t),
                        a = s ? d.HKD : d.trU,
                        r = s ? d.qux : d.DC;
                    return (0, l.jsx)(i ? r : a, { color: "currentColor", size: "md", className: b.sr });
                })(e.id, r),
            })),
            onSelectionChange: (e) => {
                s(h.find((t) => t.id === e) ?? void 0);
            },
            disabled: a,
        });
    },
    S = (e, t) => (n) => {
        let l = { entityType: n, scheduledEndTime: void 0 };
        n === C.Ps.EXTERNAL && (l.scheduledEndTime = (a()(t.scheduledStartTime) ?? a()()).add(2, "hour").toISOString()),
            e(l);
    };
function G(e) {
    let { guildId: t, guildEvent: n, onChange: s, isFocusReady: a } = e,
        { entityType: c, channelId: o } = n,
        x = (0, r.bG)([u.A], () => u.A.getChannel(o), [o]),
        h = i.useRef(null),
        m = i.useRef(void 0);
    i.useEffect(() => {
        let e = a && !m.current;
        (m.current = a), e && c === C.Ps.EXTERNAL && h.current?.focus();
    }, [a, c]);
    let g = (e) => {
            s({ channelId: e?.id ?? null });
        },
        j = (0, E.k5)(n),
        A = (0, E.dy)(c),
        N = (0, v.Fd)(n);
    return null == c || c === C.Ps.NONE
        ? null
        : c === C.Ps.EXTERNAL
          ? (0, l.jsx)(d.ksK, {
                label: y.intl.string(y.t.yx785A),
                required: !0,
                onChange: (e) => {
                    s({ entityMetadata: { location: e } });
                },
                placeholder: y.intl.string(y.t.mkCMia),
                maxLength: C.vj,
                value: j ?? "",
                inputRef: h,
            })
          : null == A
            ? null
            : (0, l.jsx)(I, { guildId: t, channelType: A, onSelectChannel: g, channel: x, entityType: c, disabled: N });
}
function k(e) {
    let { guildId: t, guildEvent: n, onChange: s } = e,
        a = (0, r.bG)([x.A], () => x.A.getGuild(t), [t]),
        c = (0, j.A)(t, void 0),
        o = (0, j.A)(t, T.rbe.GUILD_VOICE),
        u = (0, j.A)(t, T.rbe.GUILD_STAGE_VOICE),
        h = (0, A.pW)(t, T.rbe.GUILD_VOICE),
        m = (0, N.A)(a),
        g = a?.features.has(T.GuildFeatures.COMMUNITY),
        f = (0, v.Fd)(n),
        E = S(s, n),
        p = i.useMemo(() => {
            let e = !o || 0 === h.length,
                t = o ? y.intl.string(y.t["DkY+cO"]) : y.intl.string(y.t.HeF1kV),
                n = [
                    {
                        name: y.intl.string(y.t.BVZqJl),
                        value: C.Ps.VOICE,
                        desc: e ? t : y.intl.string(y.t["EV//4f"]),
                        leadingIcon: d.HKD,
                        disabled: e,
                    },
                    {
                        name: y.intl.string(y.t.w7ipbz),
                        value: C.Ps.EXTERNAL,
                        desc: c ? y.intl.string(y.t.DYxrHm) : y.intl.string(y.t.HeF1kV),
                        leadingIcon: d.BT6,
                        disabled: !c,
                    },
                ];
            if (g) {
                let e = !u || 0 === m.length,
                    t = u ? y.intl.string(y.t["DkY+cO"]) : y.intl.string(y.t.HeF1kV);
                return [
                    {
                        name: y.intl.string(y.t.EErMzA),
                        value: C.Ps.STAGE_INSTANCE,
                        desc: e ? t : y.intl.string(y.t.LgALpp),
                        leadingIcon: d.qux,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [c, o, u, g, h.length, m.length]);
    return (0, l.jsx)(d.z6M, {
        value: p.find((e) => e.value === n.entityType)?.value ?? null,
        options: p,
        onChange: E,
        disabled: f,
        helperText: f ? y.intl.string(y.t.yutP5U) : void 0,
    });
}
function _(e) {
    let { guildId: t, guildEvent: i, validationErrorMessage: s, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = i,
        m = (0, r.bG)([x.A], () => x.A.getGuild(t), [t]),
        g = (0, N.A)(m),
        v = (0, r.bG)([h.A], () => h.A.can(T.xBc.MANAGE_CHANNELS, m)),
        j = m?.features.has(T.GuildFeatures.COMMUNITY),
        A = S(a, i),
        f = j && u !== C.Ps.EXTERNAL && 0 === g.length && v && null != u;
    return (0, l.jsxs)("div", {
        className: b.kL,
        children: [
            (0, l.jsxs)(d.BJc, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.Heading, { variant: "heading-xl/semibold", children: y.intl.string(y.t["DC+Qm8"]) }),
                    (0, l.jsx)(d.Text, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: y.intl.string(y.t.IwmXLP),
                    }),
                ],
            }),
            (0, l.jsx)(k, { guildId: t, guildEvent: i, onChange: a }),
            (0, l.jsx)(G, { guildId: t, guildEvent: i, isFocusReady: c, onChange: a }),
            f
                ? (0, l.jsx)(p.A, {
                      onClick: () => {
                          A(C.Ps.STAGE_INSTANCE),
                              (0, d.mMO)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("11478"),
                                      n.e("8018"),
                                      n.e("93142"),
                                      n.e("64233"),
                                      n.e("73652"),
                                  ]).then(n.bind(n, 409200));
                                  return (n) =>
                                      (0, l.jsx)(e, { ...n, channelType: T.rbe.GUILD_STAGE_VOICE, guildId: t });
                              });
                      },
                  })
                : null,
            C.Tn.has(i.entityType) && (0, l.jsx)(o.A, {}),
        ],
    });
}
