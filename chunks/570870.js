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
    b = n(430824),
    p = n(594174),
    _ = n(981631),
    E = n(689079),
    h = n(388032),
    y = n(547607);
let O = (e) => {
    let t,
        { commandType: n, commandTargetId: i, channel: O, guildId: m, onHeightUpdate: v, context: A } = e,
        S = (0, a.e7)([b.Z], () => b.Z.getGuild(null != m ? m : O.guild_id)),
        T = (0, a.e7)([p.default], () => p.default.getUser(i)),
        P = (0, f.Z)({
            user: T,
            guildId: null == S ? void 0 : S.id,
            context: A
        }),
        j = l.useMemo(
            () => ({
                channel: O,
                type: 'channel'
            }),
            [O]
        ),
        {
            commands: I,
            sectionDescriptors: Z,
            loading: M
        } = c.wi({
            context: j,
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
        w = l.useRef(M);
    l.useEffect(() => {
        M !== w.current && ((w.current = M), null == v || v());
    }, [M, v]);
    let D = l.useCallback(
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
                                guild: S
                            },
                            commandTargetId: i
                        });
                    }
                },
                e.id
            );
        },
        [O, S, i, C]
    );
    if (
        (M
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
                  0 === I.length
                      ? (0, r.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: h.intl.string(h.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : I.map(D)),
              null != P &&
                  P.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(u.Clw, {}, 'separator'), P]
                  }))),
        !_.TPd.TEXTUAL.has(O.type))
    )
        if (null == P) return null;
        else t = P;
    return (0, r.jsx)(u.sNh, {
        id: 'apps',
        label: h.intl.string(h.t.PHjkRE),
        listClassName: y.list,
        children: t
    });
};
