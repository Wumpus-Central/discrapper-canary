var i = t(200651),
    r = t(192379),
    l = t(512722),
    a = t.n(l),
    o = t(442837),
    d = t(481060),
    u = t(10718),
    s = t(667204),
    c = t(826298),
    f = t(276022),
    m = t(978983),
    p = t(430824),
    h = t(594174),
    g = t(981631),
    _ = t(689079),
    v = t(388032),
    E = t(148562);
n.Z = (e) => {
    let n,
        { commandType: t, commandTargetId: l, channel: Z, guildId: x, onHeightUpdate: T, context: I } = e,
        A = (0, o.e7)([p.Z], () => p.Z.getGuild(null != x ? x : Z.guild_id)),
        M = (0, o.e7)([h.default], () => h.default.getUser(l)),
        b = (0, f.Z)({
            user: M,
            guildId: null == A ? void 0 : A.id,
            context: I
        }),
        {
            commands: C,
            sectionDescriptors: S,
            loading: j
        } = u.wi({
            channel: Z,
            filters: { commandTypes: [t] },
            options: { limit: _.lr },
            allowFetch: !0
        }),
        { sections: N } = r.useMemo(() => {
            let e = {};
            return (
                S.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [S]),
        y = r.useRef(j.current);
    r.useEffect(() => {
        j.current !== y.current && ((y.current = j.current), null == T || T());
    }, [j, T]);
    let O = r.useCallback(
        (e) => {
            a()(null != Z, 'menu item should not show if channel is null');
            let n = N[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                d.MenuItem,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: Z,
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
                                channel: Z,
                                guild: A
                            },
                            commandTargetId: l
                        });
                    }
                },
                e.id
            );
        },
        [Z, A, l, N]
    );
    if (
        (j.current
            ? (n = (0, i.jsx)(
                  d.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(m.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === C.length
                      ? (0, i.jsx)(
                            d.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: v.intl.string(v.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : C.map(O)),
              null != b &&
                  b.length > 0 &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(d.MenuSeparator, {}, 'separator'), b]
                  }))),
        !g.TPd.TEXTUAL.has(Z.type))
    ) {
        if (null == b) return null;
        n = b;
    }
    return (0, i.jsx)(d.MenuItem, {
        id: 'apps',
        label: v.intl.string(v.t.PHjkRE),
        listClassName: E.list,
        children: n
    });
};
