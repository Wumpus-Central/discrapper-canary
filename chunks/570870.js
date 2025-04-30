n.d(t, { Z: () => g });
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    u = n(481060),
    d = n(10718),
    s = n(667204),
    c = n(826298),
    f = n(276022),
    p = n(978983),
    v = n(430824),
    h = n(594174),
    E = n(981631),
    y = n(689079),
    O = n(388032),
    m = n(547607);
let g = (e) => {
    let t,
        { commandType: n, commandTargetId: l, channel: g, guildId: A, onHeightUpdate: b, context: Z } = e,
        C = (0, o.e7)([v.Z], () => v.Z.getGuild(null != A ? A : g.guild_id)),
        I = (0, o.e7)([h.default], () => h.default.getUser(l)),
        R = (0, f.Z)({
            user: I,
            guildId: null == C ? void 0 : C.id,
            context: Z
        }),
        T = r.useMemo(
            () => ({
                channel: g,
                type: 'channel'
            }),
            [g]
        ),
        {
            commands: P,
            sectionDescriptors: _,
            loading: S
        } = d.wi({
            context: T,
            filters: { commandTypes: [n] },
            options: { limit: y.lr },
            allowFetch: !0
        }),
        { sections: N } = r.useMemo(() => {
            let e = {};
            return (
                _.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [_]),
        j = r.useRef(S);
    r.useEffect(() => {
        S !== j.current && ((j.current = S), null == b || b());
    }, [S, b]);
    let U = r.useCallback(
        (e) => {
            a()(null != g, 'menu item should not show if channel is null');
            let t = N[e.applicationId],
                n = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
                u.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, i.jsx)(n, {
                                  channel: g,
                                  section: t,
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
                                channel: g,
                                guild: C
                            },
                            commandTargetId: l
                        });
                    }
                },
                e.id
            );
        },
        [g, C, l, N]
    );
    if (
        (S
            ? (t = (0, i.jsx)(
                  u.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(p.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === P.length
                      ? (0, i.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: O.intl.string(O.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : P.map(U)),
              null != R &&
                  R.length > 0 &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [t, (0, i.jsx)(u.Clw, {}, 'separator'), R]
                  }))),
        !E.TPd.TEXTUAL.has(g.type))
    )
        if (null == R) return null;
        else t = R;
    return (0, i.jsx)(u.sNh, {
        id: 'apps',
        label: O.intl.string(O.t.PHjkRE),
        listClassName: m.list,
        children: t
    });
};
