n.d(t, { Z: () => y });
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(10718),
    u = n(667204),
    d = n(826298),
    f = n(276022),
    _ = n(978983),
    p = n(430824),
    h = n(594174),
    m = n(981631),
    g = n(689079),
    E = n(388032),
    b = n(891628);
let y = (e) => {
    let t,
        { commandType: n, commandTargetId: o, channel: y, guildId: O, onHeightUpdate: v, context: I } = e,
        T = (0, s.e7)([p.Z], () => p.Z.getGuild(null != O ? O : y.guild_id)),
        S = (0, s.e7)([h.default], () => h.default.getUser(o)),
        A = (0, f.Z)({
            user: S,
            guildId: null == T ? void 0 : T.id,
            context: I,
        }),
        N = i.useMemo(
            () => ({
                channel: y,
                type: "channel",
            }),
            [y],
        ),
        {
            commands: C,
            sectionDescriptors: R,
            loading: P,
        } = c.wi({
            context: N,
            filters: { commandTypes: [n] },
            options: { limit: g.lr },
            allowFetch: !0,
        }),
        { sections: w } = i.useMemo(() => {
            let e = {};
            return (
                R.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [R]),
        D = i.useRef(P);
    i.useEffect(() => {
        P !== D.current && ((D.current = P), null == v || v());
    }, [P, v]);
    let L = i.useCallback(
        (e) => {
            a()(null != y, "menu item should not show if channel is null");
            let t = w[e.applicationId],
                n = null != t ? (0, d.ky)(t) : void 0;
            return (0, r.jsx)(
                l.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
                                  channel: y,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1,
                              })
                            : null,
                    action: () => {
                        (0, u.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: y,
                                guild: T,
                            },
                            commandTargetId: o,
                        });
                    },
                },
                e.id,
            );
        },
        [y, T, o, w],
    );
    if (
        (P
            ? (t = (0, r.jsx)(
                  l.sNh,
                  {
                      id: "menu-commands-placeholder",
                      render: () => (0, r.jsx)(_.Z, {}),
                      disabled: !0,
                  },
                  "menu-commands-placeholder",
              ))
            : ((t =
                  0 === C.length
                      ? (0, r.jsx)(
                            l.sNh,
                            {
                                id: "menu-commands-empty",
                                label: E.intl.string(E.t.YSNlV1),
                                disabled: !0,
                            },
                            "menu-commands-empty",
                        )
                      : C.map(L)),
              null != A &&
                  A.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(l.Clw, {}, "separator"), A],
                  }))),
        !m.TPd.TEXTUAL.has(y.type))
    )
        if (null == A) return null;
        else t = A;
    return (0, r.jsx)(l.sNh, {
        id: "apps",
        label: E.intl.string(E.t.PHjkRE),
        listClassName: b.list,
        children: t,
    });
};
