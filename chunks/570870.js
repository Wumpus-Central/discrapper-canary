var r = e(200651),
    i = e(192379),
    u = e(512722),
    l = e.n(u),
    a = e(442837),
    o = e(481060),
    d = e(10718),
    c = e(667204),
    s = e(826298),
    f = e(276022),
    E = e(978983),
    _ = e(430824),
    p = e(594174),
    m = e(981631),
    h = e(689079),
    A = e(388032),
    C = e(148562);
t.Z = (n) => {
    let t,
        { commandType: e, commandTargetId: u, channel: T, guildId: g, onHeightUpdate: N, context: I } = n,
        v = (0, a.e7)([_.Z], () => _.Z.getGuild(null != g ? g : T.guild_id)),
        R = (0, a.e7)([p.default], () => p.default.getUser(u)),
        O = (0, f.Z)({
            user: R,
            guildId: null == v ? void 0 : v.id,
            context: I
        }),
        P = i.useMemo(
            () => ({
                channel: T,
                type: 'channel'
            }),
            [T]
        ),
        {
            commands: S,
            sectionDescriptors: Z,
            loading: b
        } = d.wi({
            context: P,
            filters: { commandTypes: [e] },
            options: { limit: h.lr },
            allowFetch: !0
        }),
        { sections: y } = i.useMemo(() => {
            let n = {};
            return (
                Z.forEach((t) => {
                    n[t.id] = t;
                }),
                { sections: n }
            );
        }, [Z]),
        M = i.useRef(b.current);
    i.useEffect(() => {
        b.current !== M.current && ((M.current = b.current), null == N || N());
    }, [b, N]);
    let U = i.useCallback(
        (n) => {
            l()(null != T, 'menu item should not show if channel is null');
            let t = y[n.applicationId],
                e = null != t ? (0, s.ky)(t) : void 0;
            return (0, r.jsx)(
                o.MenuItem,
                {
                    id: n.id,
                    label: n.displayName,
                    iconLeft: () =>
                        null != e
                            ? (0, r.jsx)(e, {
                                  channel: T,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, c.Z)({
                            command: n,
                            optionValues: {},
                            context: {
                                channel: T,
                                guild: v
                            },
                            commandTargetId: u
                        });
                    }
                },
                n.id
            );
        },
        [T, v, u, y]
    );
    if (
        (b.current
            ? (t = (0, r.jsx)(
                  o.MenuItem,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === S.length
                      ? (0, r.jsx)(
                            o.MenuItem,
                            {
                                id: 'menu-commands-empty',
                                label: A.intl.string(A.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : S.map(U)),
              null != O &&
                  O.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(o.MenuSeparator, {}, 'separator'), O]
                  }))),
        !m.TPd.TEXTUAL.has(T.type))
    ) {
        if (null == O) return null;
        t = O;
    }
    return (0, r.jsx)(o.MenuItem, {
        id: 'apps',
        label: A.intl.string(A.t.PHjkRE),
        listClassName: C.list,
        children: t
    });
};
