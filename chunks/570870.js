n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(10718),
    u = n(667204),
    d = n(826298),
    f = n(276022),
    g = n(978983),
    b = n(430824),
    p = n(594174),
    O = n(981631),
    y = n(689079),
    m = n(388032),
    h = n(891628);
let v = (e) => {
    let t,
        { commandType: n, commandTargetId: l, channel: v, guildId: j, onHeightUpdate: S, context: E } = e,
        P = (0, o.e7)([b.Z], () => b.Z.getGuild(null != j ? j : v.guild_id)),
        _ = (0, o.e7)([p.default], () => p.default.getUser(l)),
        Z = (0, f.Z)({
            user: _,
            guildId: null == P ? void 0 : P.id,
            context: E,
        }),
        T = i.useMemo(
            () => ({
                channel: v,
                type: "channel",
            }),
            [v],
        ),
        {
            commands: w,
            sectionDescriptors: I,
            loading: N,
        } = c.wi({
            context: T,
            filters: { commandTypes: [n] },
            options: { limit: y.lr },
            allowFetch: !0,
        }),
        { sections: A } = i.useMemo(() => {
            let e = {};
            return (
                I.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [I]),
        x = i.useRef(N);
    i.useEffect(() => {
        N !== x.current && ((x.current = N), null == S || S());
    }, [N, S]);
    let D = i.useCallback(
        (e) => {
            a()(null != v, "menu item should not show if channel is null");
            let t = A[e.applicationId],
                n = null != t ? (0, d.ky)(t) : void 0;
            return (0, r.jsx)(
                s.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
                                  channel: v,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1,
                              })
                            : null,
                    action: () => {
                        (0, u.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: v,
                                guild: P,
                            },
                            commandTargetId: l,
                        });
                    },
                },
                e.id,
            );
        },
        [v, P, l, A],
    );
    if (
        (N
            ? (t = (0, r.jsx)(
                  s.sNh,
                  {
                      id: "menu-commands-placeholder",
                      render: () => (0, r.jsx)(g.Z, {}),
                      disabled: !0,
                  },
                  "menu-commands-placeholder",
              ))
            : ((t =
                  0 === w.length
                      ? (0, r.jsx)(
                            s.sNh,
                            {
                                id: "menu-commands-empty",
                                label: m.intl.string(m.t.YSNlV1),
                                disabled: !0,
                            },
                            "menu-commands-empty",
                        )
                      : w.map(D)),
              null != Z &&
                  Z.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(s.Clw, {}, "separator"), Z],
                  }))),
        !O.TPd.TEXTUAL.has(v.type))
    )
        if (null == Z) return null;
        else t = Z;
    return (0, r.jsx)(s.sNh, {
        id: "apps",
        label: m.intl.string(m.t.PHjkRE),
        listClassName: h.list,
        children: t,
    });
};
