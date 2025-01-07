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
    v = t(689079),
    _ = t(388032),
    E = t(148562);
e.Z = (n) => {
    let e,
        { commandType: t, commandTargetId: l, channel: Z, guildId: x, onHeightUpdate: I, context: T } = n,
        A = (0, o.e7)([p.Z], () => p.Z.getGuild(null != x ? x : Z.guild_id)),
        b = (0, o.e7)([h.default], () => h.default.getUser(l)),
        M = (0, f.Z)({
            user: b,
            guildId: null == A ? void 0 : A.id,
            context: T
        }),
        {
            commands: S,
            sectionDescriptors: C,
            loading: j
        } = u.wi({
            channel: Z,
            filters: { commandTypes: [t] },
            options: { limit: v.lr },
            allowFetch: !0
        }),
        { sections: y } = r.useMemo(() => {
            let n = {};
            return (
                C.forEach((e) => {
                    n[e.id] = e;
                }),
                { sections: n }
            );
        }, [C]),
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
                                guild: A
                            },
                            commandTargetId: l
                        });
                    }
                },
                n.id
            );
        },
        [Z, A, l, y]
    );
    if (
        (j.current
            ? (e = (0, i.jsx)(
                  d.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(m.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((e =
                  0 === S.length
                      ? (0, i.jsx)(
                            d.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: _.intl.string(_.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : S.map(O)),
              null != M &&
                  M.length > 0 &&
                  (e = (0, i.jsxs)(i.Fragment, {
                      children: [e, (0, i.jsx)(d.MenuSeparator, {}, 'separator'), M]
                  }))),
        !g.TPd.TEXTUAL.has(Z.type))
    ) {
        if (null == M) return null;
        e = M;
    }
    return (0, i.jsx)(d.MenuItem, {
        id: 'apps',
        label: _.intl.string(_.t.PHjkRE),
        listClassName: E.list,
        children: e
    });
};
