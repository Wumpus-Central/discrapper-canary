n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    u = n(442837),
    a = n(481060),
    c = n(10718),
    d = n(667204),
    s = n(826298),
    f = n(276022),
    b = n(978983),
    g = n(430824),
    h = n(594174),
    p = n(981631),
    _ = n(689079),
    E = n(388032),
    y = n(891628);
let O = (e) => {
    let t,
        { commandType: n, commandTargetId: l, channel: O, guildId: m, onHeightUpdate: v, context: A } = e,
        S = (0, u.e7)([g.Z], () => g.Z.getGuild(null != m ? m : O.guild_id)),
        T = (0, u.e7)([h.default], () => h.default.getUser(l)),
        P = (0, f.Z)({
            user: T,
            guildId: null == S ? void 0 : S.id,
            context: A,
        }),
        j = i.useMemo(
            () => ({
                channel: O,
                type: "channel",
            }),
            [O],
        ),
        {
            commands: Z,
            sectionDescriptors: I,
            loading: M,
        } = c.wi({
            context: j,
            filters: { commandTypes: [n] },
            options: { limit: _.lr },
            allowFetch: !0,
        }),
        { sections: C } = i.useMemo(() => {
            let e = {};
            return (
                I.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [I]),
        D = i.useRef(M);
    i.useEffect(() => {
        M !== D.current && ((D.current = M), null == v || v());
    }, [M, v]);
    let w = i.useCallback(
        (e) => {
            o()(null != O, "menu item should not show if channel is null");
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
                                  selectable: !1,
                              })
                            : null,
                    action: () => {
                        (0, d.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: O,
                                guild: S,
                            },
                            commandTargetId: l,
                        });
                    },
                },
                e.id,
            );
        },
        [O, S, l, C],
    );
    if (
        (M
            ? (t = (0, r.jsx)(
                  a.sNh,
                  {
                      id: "menu-commands-placeholder",
                      render: () => (0, r.jsx)(b.Z, {}),
                      disabled: !0,
                  },
                  "menu-commands-placeholder",
              ))
            : ((t =
                  0 === Z.length
                      ? (0, r.jsx)(
                            a.sNh,
                            {
                                id: "menu-commands-empty",
                                label: E.intl.string(E.t.YSNlV1),
                                disabled: !0,
                            },
                            "menu-commands-empty",
                        )
                      : Z.map(w)),
              null != P &&
                  P.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(a.Clw, {}, "separator"), P],
                  }))),
        !p.TPd.TEXTUAL.has(O.type))
    )
        if (null == P) return null;
        else t = P;
    return (0, r.jsx)(a.sNh, {
        id: "apps",
        label: E.intl.string(E.t.PHjkRE),
        listClassName: y.list,
        children: t,
    });
};
