n.d(t, { Z: () => O });
var r = n(255367),
    l = n(73800),
    i = n(512722),
    o = n.n(i),
    u = n(442837),
    a = n(481060),
    c = n(10718),
    d = n(667204),
    s = n(826298),
    f = n(276022),
    g = n(978983),
    _ = n(430824),
    b = n(594174),
    p = n(981631),
    E = n(689079),
    h = n(388032),
    y = n(547607);
let O = (e) => {
    let t,
        { commandType: n, commandTargetId: i, channel: O, guildId: v, onHeightUpdate: m, context: A } = e,
        T = (0, u.e7)([_.Z], () => _.Z.getGuild(null != v ? v : O.guild_id)),
        S = (0, u.e7)([b.default], () => b.default.getUser(i)),
        P = (0, f.Z)({
            user: S,
            guildId: null == T ? void 0 : T.id,
            context: A
        }),
        I = l.useMemo(
            () => ({
                channel: O,
                type: 'channel'
            }),
            [O]
        ),
        {
            commands: Z,
            sectionDescriptors: M,
            loading: j
        } = c.wi({
            context: I,
            filters: { commandTypes: [n] },
            options: { limit: E.lr },
            allowFetch: !0
        }),
        { sections: C } = l.useMemo(() => {
            let e = {};
            return (
                M.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [M]),
        N = l.useRef(j);
    l.useEffect(() => {
        j !== N.current && ((N.current = j), null == m || m());
    }, [j, m]);
    let D = l.useCallback(
        (e) => {
            o()(null != O, 'menu item should not show if channel is null');
            let t = C[e.applicationId],
                n = null != t ? (0, s.ky)(t) : void 0;
            return (0, r.jsx)(
                a.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
                                  channel: O,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, d.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: O,
                                guild: T
                            },
                            commandTargetId: i
                        });
                    }
                },
                e.id
            );
        },
        [O, T, i, C]
    );
    if (
        (j
            ? (t = (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(g.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === Z.length
                      ? (0, r.jsx)(
                            a.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: h.intl.string(h.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : Z.map(D)),
              null != P &&
                  P.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(a.Clw, {}, 'separator'), P]
                  }))),
        !p.TPd.TEXTUAL.has(O.type))
    )
        if (null == P) return null;
        else t = P;
    return (0, r.jsx)(a.sNh, {
        id: 'apps',
        label: h.intl.string(h.t.PHjkRE),
        listClassName: y.list,
        children: t
    });
};
