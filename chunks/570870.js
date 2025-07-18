n.d(t, { Z: () => O });
var r = n(255367),
    l = n(73800),
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    u = n(481060),
    c = n(10718),
    d = n(667204),
    s = n(826298),
    f = n(276022),
    g = n(978983),
    _ = n(430824),
    p = n(594174),
    b = n(981631),
    E = n(689079),
    h = n(388032),
    y = n(547607);
let O = (e) => {
    let t,
        { commandType: n, commandTargetId: i, channel: O, guildId: v, onHeightUpdate: m, context: A } = e,
        T = (0, a.e7)([_.Z], () => _.Z.getGuild(null != v ? v : O.guild_id)),
        S = (0, a.e7)([p.default], () => p.default.getUser(i)),
        I = (0, f.Z)({
            user: S,
            guildId: null == T ? void 0 : T.id,
            context: A
        }),
        P = l.useMemo(
            () => ({
                channel: O,
                type: 'channel'
            }),
            [O]
        ),
        {
            commands: M,
            sectionDescriptors: Z,
            loading: j
        } = c.wi({
            context: P,
            filters: { commandTypes: [n] },
            options: { limit: E.lr },
            allowFetch: !0
        }),
        { sections: C } = l.useMemo(() => {
            let e = {};
            return (
                Z.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [Z]),
        D = l.useRef(j);
    l.useEffect(() => {
        j !== D.current && ((D.current = j), null == m || m());
    }, [j, m]);
    let N = l.useCallback(
        (e) => {
            o()(null != O, 'menu item should not show if channel is null');
            let t = C[e.applicationId],
                n = null != t ? (0, s.ky)(t) : void 0;
            return (0, r.jsx)(
                u.sNh,
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
                  u.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(g.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === M.length
                      ? (0, r.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: h.intl.string(h.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : M.map(N)),
              null != I &&
                  I.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(u.Clw, {}, 'separator'), I]
                  }))),
        !b.TPd.TEXTUAL.has(O.type))
    )
        if (null == I) return null;
        else t = I;
    return (0, r.jsx)(u.sNh, {
        id: 'apps',
        label: h.intl.string(h.t.PHjkRE),
        listClassName: y.list,
        children: t
    });
};
