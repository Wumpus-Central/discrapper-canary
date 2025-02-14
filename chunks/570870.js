t.d(n, { Z: () => I });
var i = t(200651),
    l = t(192379),
    a = t(512722),
    r = t.n(a),
    o = t(442837),
    u = t(481060),
    d = t(10718),
    s = t(667204),
    c = t(826298),
    f = t(276022),
    v = t(978983),
    p = t(430824),
    h = t(594174),
    A = t(981631),
    E = t(689079),
    Z = t(388032),
    m = t(913887);
let I = (e) => {
    let n,
        { commandType: t, commandTargetId: a, channel: I, guildId: C, onHeightUpdate: T, context: g } = e,
        N = (0, o.e7)([p.Z], () => p.Z.getGuild(null != C ? C : I.guild_id)),
        R = (0, o.e7)([h.default], () => h.default.getUser(a)),
        _ = (0, f.Z)({
            user: R,
            guildId: null == N ? void 0 : N.id,
            context: g
        }),
        S = l.useMemo(
            () => ({
                channel: I,
                type: 'channel'
            }),
            [I]
        ),
        {
            commands: y,
            sectionDescriptors: O,
            loading: P
        } = d.wi({
            context: S,
            filters: { commandTypes: [t] },
            options: { limit: E.lr },
            allowFetch: !0
        }),
        { sections: U } = l.useMemo(() => {
            let e = {};
            return (
                O.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [O]),
        j = l.useRef(P);
    l.useEffect(() => {
        P !== j.current && ((j.current = P), null == T || T());
    }, [P, T]);
    let b = l.useCallback(
        (e) => {
            r()(null != I, 'menu item should not show if channel is null');
            let n = U[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                u.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: I,
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
                                channel: I,
                                guild: N
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [I, N, a, U]
    );
    if (
        (P
            ? (n = (0, i.jsx)(
                  u.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(v.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === y.length
                      ? (0, i.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: Z.intl.string(Z.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : y.map(b)),
              null != _ &&
                  _.length > 0 &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(u.Clw, {}, 'separator'), _]
                  }))),
        !A.TPd.TEXTUAL.has(I.type))
    ) {
        if (null == _) return null;
        n = _;
    }
    return (0, i.jsx)(u.sNh, {
        id: 'apps',
        label: Z.intl.string(Z.t.PHjkRE),
        listClassName: m.list,
        children: n
    });
};
