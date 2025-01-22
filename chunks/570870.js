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
    p = t(978983),
    m = t(430824),
    h = t(594174),
    g = t(981631),
    _ = t(689079),
    v = t(388032),
    E = t(148562);
e.Z = (n) => {
    let e,
        { commandType: t, commandTargetId: l, channel: Z, guildId: x, onHeightUpdate: I, context: T } = n,
        b = (0, o.e7)([m.Z], () => m.Z.getGuild(null != x ? x : Z.guild_id)),
        M = (0, o.e7)([h.default], () => h.default.getUser(l)),
        A = (0, f.Z)({
            user: M,
            guildId: null == b ? void 0 : b.id,
            context: T
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
        { sections: y } = r.useMemo(() => {
            let n = {};
            return (
                S.forEach((e) => {
                    n[e.id] = e;
                }),
                { sections: n }
            );
        }, [S]),
        N = r.useRef(j.current);
    r.useEffect(() => {
        j.current !== N.current && ((N.current = j.current), null == I || I());
    }, [j, I]);
    let O = r.useCallback(
        (n) => {
            a()(null != Z, 'menu item should not show if channel is null');
            let e = y[n.applicationId],
                t = null != e ? (0, c.ky)(e) : void 0;
            return (0, i.jsx)(
                d.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, i.jsx)(t, {
                                  channel: Z,
                                  section: e,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: n,
                            optionValues: {},
                            context: {
                                channel: Z,
                                guild: b
                            },
                            commandTargetId: l
                        });
                    }
                },
                n.id
            );
        },
        [Z, b, l, y]
    );
    if (
        (j.current
            ? (e = (0, i.jsx)(
                  d.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(p.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((e =
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
              null != A &&
                  A.length > 0 &&
                  (e = (0, i.jsxs)(i.Fragment, {
                      children: [e, (0, i.jsx)(d.MenuSeparator, {}, 'separator'), A]
                  }))),
        !g.TPd.TEXTUAL.has(Z.type))
    ) {
        if (null == A) return null;
        e = A;
    }
    return (0, i.jsx)(d.MenuItem, {
        id: 'apps',
        label: v.intl.string(v.t.PHjkRE),
        listClassName: E.list,
        children: e
    });
};
