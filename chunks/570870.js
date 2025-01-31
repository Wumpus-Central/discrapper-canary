t.d(n, { Z: () => m });
var i = t(200651),
    l = t(192379),
    a = t(512722),
    r = t.n(a),
    d = t(442837),
    o = t(481060),
    u = t(10718),
    s = t(667204),
    c = t(826298),
    _ = t(276022),
    E = t(978983),
    f = t(430824),
    h = t(594174),
    g = t(981631),
    p = t(689079),
    A = t(388032),
    Z = t(148562);
let m = (e) => {
    let n,
        { commandType: t, commandTargetId: a, channel: m, guildId: T, onHeightUpdate: v, context: I } = e,
        S = (0, d.e7)([f.Z], () => f.Z.getGuild(null != T ? T : m.guild_id)),
        C = (0, d.e7)([h.default], () => h.default.getUser(a)),
        b = (0, _.Z)({
            user: C,
            guildId: null == S ? void 0 : S.id,
            context: I
        }),
        M = l.useMemo(
            () => ({
                channel: m,
                type: 'channel'
            }),
            [m]
        ),
        {
            commands: N,
            sectionDescriptors: x,
            loading: y
        } = u.wi({
            context: M,
            filters: { commandTypes: [t] },
            options: { limit: p.lr },
            allowFetch: !0
        }),
        { sections: O } = l.useMemo(() => {
            let e = {};
            return (
                x.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [x]),
        P = l.useRef(y);
    l.useEffect(() => {
        y !== P.current && ((P.current = y), null == v || v());
    }, [y, v]);
    let U = l.useCallback(
        (e) => {
            r()(null != m, 'menu item should not show if channel is null');
            let n = O[e.applicationId],
                t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
                o.sNh,
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
        [m, S, a, O]
    );
    if (
        (y
            ? (n = (0, i.jsx)(
                  o.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(E.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === N.length
                      ? (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: A.intl.string(A.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : N.map(U)),
              null != b &&
                  b.length > 0 &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(o.Clw, {}, 'separator'), b]
                  }))),
        !g.TPd.TEXTUAL.has(m.type))
    ) {
        if (null == b) return null;
        n = b;
    }
    return (0, i.jsx)(o.sNh, {
        id: 'apps',
        label: A.intl.string(A.t.PHjkRE),
        listClassName: Z.list,
        children: n
    });
};
