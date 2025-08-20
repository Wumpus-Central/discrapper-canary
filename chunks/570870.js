n.d(t, { Z: () => T });
var s = n(951288),
    i = n(647438),
    r = n(512722),
    c = n.n(r),
    a = n(442837),
    o = n(481060),
    u = n(10718),
    l = n(667204),
    p = n(826298),
    f = n(276022),
    d = n(978983),
    g = n(430824),
    b = n(594174),
    h = n(981631),
    m = n(689079),
    x = n(388032),
    y = n(891628);
let T = (e) => {
    let t,
        { commandType: n, commandTargetId: r, channel: T, guildId: O, onHeightUpdate: _, context: v } = e,
        S = (0, a.e7)([g.Z], () => g.Z.getGuild(null != O ? O : T.guild_id)),
        E = (0, a.e7)([b.default], () => b.default.getUser(r)),
        j = (0, f.Z)({
            user: E,
            guildId: null == S ? void 0 : S.id,
            context: v,
        }),
        w = i.useMemo(
            () => ({
                channel: T,
                type: "channel",
            }),
            [T],
        ),
        {
            commands: I,
            sectionDescriptors: P,
            loading: Z,
        } = u.wi({
            context: w,
            filters: { commandTypes: [n] },
            options: { limit: m.lr },
            allowFetch: !0,
        }),
        { sections: N } = i.useMemo(() => {
            let e = {};
            return (
                P.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [P]),
        C = i.useRef(Z);
    i.useEffect(() => {
        Z !== C.current && ((C.current = Z), null == _ || _());
    }, [Z, _]);
    let R = i.useCallback(
        (e) => {
            c()(null != T, "menu item should not show if channel is null");
            let t = N[e.applicationId],
                n = null != t ? (0, p.ky)(t) : void 0;
            return (0, s.jsx)(
                o.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, s.jsx)(n, {
                                  channel: T,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1,
                              })
                            : null,
                    action: () => {
                        (0, l.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: T,
                                guild: S,
                            },
                            commandTargetId: r,
                        });
                    },
                },
                e.id,
            );
        },
        [T, S, r, N],
    );
    if (
        (Z
            ? (t = (0, s.jsx)(
                  o.sNh,
                  {
                      id: "menu-commands-placeholder",
                      render: () => (0, s.jsx)(d.Z, {}),
                      disabled: !0,
                  },
                  "menu-commands-placeholder",
              ))
            : ((t =
                  0 === I.length
                      ? (0, s.jsx)(
                            o.sNh,
                            {
                                id: "menu-commands-empty",
                                label: x.intl.string(x.t.YSNlV1),
                                disabled: !0,
                            },
                            "menu-commands-empty",
                        )
                      : I.map(R)),
              null != j &&
                  j.length > 0 &&
                  (t = (0, s.jsxs)(s.Fragment, {
                      children: [t, (0, s.jsx)(o.Clw, {}, "separator"), j],
                  }))),
        !h.TPd.TEXTUAL.has(T.type))
    )
        if (null == j) return null;
        else t = j;
    return (0, s.jsx)(o.sNh, {
        id: "apps",
        label: x.intl.string(x.t.PHjkRE),
        listClassName: y.list,
        children: t,
    });
};
