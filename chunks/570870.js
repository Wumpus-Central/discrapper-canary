t.d(n, { Z: () => C });
var i = t(200651),
    l = t(192379),
    a = t(512722),
    r = t.n(a),
    u = t(442837),
    o = t(481060),
    d = t(10718),
    s = t(667204),
    c = t(826298),
    f = t(276022),
    v = t(978983),
    p = t(430824),
    h = t(594174),
    A = t(981631),
    E = t(689079),
    m = t(388032),
    I = t(148562);
let C = (e) => {
    let n,
        { commandType: t, commandTargetId: a, channel: C, guildId: N, onHeightUpdate: R, context: Z } = e,
        _ = (0, u.e7)([p.Z], () => p.Z.getGuild(null != N ? N : C.guild_id)),
        T = (0, u.e7)([h.default], () => h.default.getUser(a)),
        g = (0, f.Z)({
            user: T,
            guildId: null == _ ? void 0 : _.id,
            context: Z
        }),
        y = l.useMemo(
            () => ({
                channel: C,
                type: 'channel'
            }),
            [C]
        ),
        {
            commands: P,
            sectionDescriptors: O,
            loading: S
        } = d.wi({
            context: y,
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
        j = l.useRef(S);
    l.useEffect(() => {
        S !== j.current && ((j.current = S), null == R || R());
    }, [S, R]);
    let F = l.useCallback(
        (e) => {
            r()(null != C, 'menu item should not show if channel is null');
            let n = U[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                o.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: C,
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
                                channel: C,
                                guild: _
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [C, _, a, U]
    );
    if (
        (S
            ? (n = (0, i.jsx)(
                  o.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(v.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === P.length
                      ? (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: m.intl.string(m.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : P.map(F)),
              null != g &&
                  g.length > 0 &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(o.Clw, {}, 'separator'), g]
                  }))),
        !A.TPd.TEXTUAL.has(C.type))
    ) {
        if (null == g) return null;
        n = g;
    }
    return (0, i.jsx)(o.sNh, {
        id: 'apps',
        label: m.intl.string(m.t.PHjkRE),
        listClassName: I.list,
        children: n
    });
};
