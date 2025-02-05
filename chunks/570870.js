n.d(t, { Z: () => A });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    l = n.n(a),
    u = n(442837),
    o = n(481060),
    d = n(10718),
    s = n(667204),
    c = n(826298),
    f = n(276022),
    _ = n(978983),
    E = n(430824),
    p = n(594174),
    m = n(981631),
    h = n(689079),
    N = n(388032),
    C = n(148562);
let A = (e) => {
    let t,
        { commandType: n, commandTargetId: a, channel: A, guildId: T, onHeightUpdate: g, context: v } = e,
        I = (0, u.e7)([E.Z], () => E.Z.getGuild(null != T ? T : A.guild_id)),
        R = (0, u.e7)([p.default], () => p.default.getUser(a)),
        O = (0, f.Z)({
            user: R,
            guildId: null == I ? void 0 : I.id,
            context: v
        }),
        P = r.useMemo(
            () => ({
                channel: A,
                type: 'channel'
            }),
            [A]
        ),
        {
            commands: S,
            sectionDescriptors: Z,
            loading: b
        } = d.wi({
            context: P,
            filters: { commandTypes: [n] },
            options: { limit: h.lr },
            allowFetch: !0
        }),
        { sections: y } = r.useMemo(() => {
            let e = {};
            return (
                Z.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [Z]),
        G = r.useRef(b);
    r.useEffect(() => {
        b !== G.current && ((G.current = b), null == g || g());
    }, [b, g]);
    let U = r.useCallback(
        (e) => {
            l()(null != A, 'menu item should not show if channel is null');
            let t = y[e.applicationId],
                n = null != t ? (0, c.ky)(t) : void 0;
            return (0, i.jsx)(
                o.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, i.jsx)(n, {
                                  channel: A,
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
                                channel: A,
                                guild: I
                            },
                            commandTargetId: a
                        });
                    }
                },
                e.id
            );
        },
        [A, I, a, y]
    );
    if (
        (b
            ? (t = (0, i.jsx)(
                  o.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, i.jsx)(_.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === S.length
                      ? (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: N.intl.string(N.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : S.map(U)),
              null != O &&
                  O.length > 0 &&
                  (t = (0, i.jsxs)(i.Fragment, {
                      children: [t, (0, i.jsx)(o.Clw, {}, 'separator'), O]
                  }))),
        !m.TPd.TEXTUAL.has(A.type))
    ) {
        if (null == O) return null;
        t = O;
    }
    return (0, i.jsx)(o.sNh, {
        id: 'apps',
        label: N.intl.string(N.t.PHjkRE),
        listClassName: C.list,
        children: t
    });
};
