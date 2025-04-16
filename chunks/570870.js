n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
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
        { commandType: n, commandTargetId: l, channel: g, guildId: A, onHeightUpdate: b, context: N } = e,
        Z = (0, o.e7)([v.Z], () => v.Z.getGuild(null != A ? A : g.guild_id)),
        C = (0, o.e7)([h.default], () => h.default.getUser(l)),
        I = (0, f.Z)({
            user: C,
            guildId: null == Z ? void 0 : Z.id,
            context: N
        }),
        R = i.useMemo(
            () => ({
                channel: g,
                type: 'channel'
            }),
            [g]
        ),
        {
            commands: T,
            sectionDescriptors: P,
            loading: _
        } = d.wi({
            context: R,
            filters: { commandTypes: [n] },
            options: { limit: y.lr },
            allowFetch: !0
        }),
        { sections: S } = i.useMemo(() => {
            let e = {};
            return (
                P.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [P]),
        j = i.useRef(_);
    i.useEffect(() => {
        _ !== j.current && ((j.current = _), null == b || b());
    }, [_, b]);
    let U = i.useCallback(
        (e) => {
            a()(null != g, 'menu item should not show if channel is null');
            let t = S[e.applicationId],
                n = null != t ? (0, c.ky)(t) : void 0;
            return (0, r.jsx)(
                u.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
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
                                guild: Z
                            },
                            commandTargetId: l
                        });
                    }
                },
                e.id
            );
        },
        [g, Z, l, S]
    );
    if (
        (_
            ? (t = (0, r.jsx)(
                  u.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(p.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === T.length
                      ? (0, r.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: O.NW.string(O.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : T.map(U)),
              null != I &&
                  I.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(u.Clw, {}, 'separator'), I]
                  }))),
        !E.TPd.TEXTUAL.has(g.type))
    )
        if (null == I) return null;
        else t = I;
    return (0, r.jsx)(u.sNh, {
        id: 'apps',
        label: O.NW.string(O.t.PHjkRE),
        listClassName: m.list,
        children: t
    });
};
