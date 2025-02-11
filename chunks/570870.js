t.d(n, { Z: () => m });
var i = t(200651),
    l = t(192379),
    a = t(512722),
    r = t.n(a),
    o = t(442837),
    u = t(481060),
    d = t(10718),
    s = t(667204),
    c = t(826298),
    _ = t(276022),
    f = t(978983),
    p = t(430824),
    E = t(594174),
    g = t(981631),
    h = t(689079),
    v = t(388032),
    T = t(950274);
let m = (e) => {
    let n,
        { commandType: t, commandTargetId: a, channel: m, guildId: A, onHeightUpdate: b, context: I } = e,
        S = (0, o.e7)([p.Z], () => p.Z.getGuild(null != A ? A : m.guild_id)),
        M = (0, o.e7)([E.default], () => E.default.getUser(a)),
        C = (0, _.Z)({
            user: M,
            guildId: null == S ? void 0 : S.id,
            context: I
        }),
        N = l.useMemo(
            () => ({
                channel: m,
                type: 'channel'
            }),
            [m]
        ),
        {
            commands: Z,
            sectionDescriptors: y,
            loading: P
        } = d.wi({
            context: N,
            filters: { commandTypes: [t] },
            options: { limit: h.lr },
            allowFetch: !0
        }),
        { sections: x } = l.useMemo(() => {
            let e = {};
            return (
                y.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [y]),
        O = l.useRef(P);
    l.useEffect(() => {
        P !== O.current && ((O.current = P), null == b || b());
    }, [P, b]);
    let D = l.useCallback(
        (e) => {
            r()(null != m, 'menu item should not show if channel is null');
            let n = x[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                u.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: m,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: m,
                                guild: S
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [m, S, a, x]
    );
    if (
        (P
            ? (n = (0, i.jsx)(
                  u.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(f.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === Z.length
                      ? (0, i.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: v.intl.string(v.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : Z.map(D)),
              null != C &&
                  C.length > 0 &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(u.Clw, {}, 'separator'), C]
                  }))),
        !g.TPd.TEXTUAL.has(m.type))
    ) {
        if (null == C) return null;
        n = C;
    }
    return (0, i.jsx)(u.sNh, {
        id: 'apps',
        label: v.intl.string(v.t.PHjkRE),
        listClassName: T.list,
        children: n
    });
};
