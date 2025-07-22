t.d(n, { Z: () => _ });
var r = t(255367),
    i = t(73800),
    l = t(512722),
    o = t.n(l),
    a = t(442837),
    c = t(481060),
    s = t(10718),
    u = t(667204),
    d = t(826298),
    f = t(276022),
    h = t(978983),
    p = t(430824),
    g = t(594174),
    b = t(981631),
    m = t(689079),
    v = t(388032),
    y = t(547607);
let _ = (e) => {
    let n,
        { commandType: t, commandTargetId: l, channel: _, guildId: O, onHeightUpdate: E, context: Z } = e,
        j = (0, a.e7)([p.Z], () => p.Z.getGuild(null != O ? O : _.guild_id)),
        T = (0, a.e7)([g.default], () => g.default.getUser(l)),
        S = (0, f.Z)({
            user: T,
            guildId: null == j ? void 0 : j.id,
            context: Z
        }),
        x = i.useMemo(
            () => ({
                channel: _,
                type: 'channel'
            }),
            [_]
        ),
        {
            commands: A,
            sectionDescriptors: I,
            loading: P
        } = s.wi({
            context: x,
            filters: { commandTypes: [t] },
            options: { limit: m.lr },
            allowFetch: !0
        }),
        { sections: C } = i.useMemo(() => {
            let e = {};
            return (
                I.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [I]),
        w = i.useRef(P);
    i.useEffect(() => {
        P !== w.current && ((w.current = P), null == E || E());
    }, [P, E]);
    let N = i.useCallback(
        (e) => {
            o()(null != _, 'menu item should not show if channel is null');
            let n = C[e.applicationId],
                t = null != n ? (0, d.ky)(n) : void 0;
            return (0, r.jsx)(
                c.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, r.jsx)(t, {
                                  channel: _,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, u.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: _,
                                guild: j
                            },
                            commandTargetId: l
                        });
                    }
                },
                e.id
            );
        },
        [_, j, l, C]
    );
    if (
        (P
            ? (n = (0, r.jsx)(
                  c.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(h.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === A.length
                      ? (0, r.jsx)(
                            c.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: v.intl.string(v.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : A.map(N)),
              null != S &&
                  S.length > 0 &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(c.Clw, {}, 'separator'), S]
                  }))),
        !b.TPd.TEXTUAL.has(_.type))
    )
        if (null == S) return null;
        else n = S;
    return (0, r.jsx)(c.sNh, {
        id: 'apps',
        label: v.intl.string(v.t.PHjkRE),
        listClassName: y.list,
        children: n
    });
};
