n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(477782),
    c = n(559647),
    d = n(583650),
    u = n(323384),
    g = n(842209),
    h = n(210978),
    _ = n(545152),
    m = n(664929),
    p = n(700210),
    f = n(718676),
    A = n(71393),
    E = n(287809),
    x = n(652215),
    C = n(73510),
    N = n(985018),
    I = n(97231);
let T = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: r,
            channel: T,
            guildId: S,
            onHeightUpdate: M,
            context: b,
            showIcon: v = !1,
        } = e,
        R = (0, s.bG)([A.A], () => A.A.getGuild(S ?? T.guild_id)),
        y = (0, s.bG)([E.default], () => E.default.getUser(r)),
        j = (0, p.A)({ user: y, guildId: R?.id, context: b }),
        P = l.useMemo(() => ({ channel: T, type: "channel" }), [T]),
        [w, D] = l.useState(""),
        O = "" !== w,
        {
            commands: k,
            commandsByActiveSection: L,
            sectionDescriptors: F,
            loading: U,
        } = g.cu({
            context: P,
            filters: { text: O ? w : void 0, commandTypes: [n] },
            options: { limit: C.YC, includeFrecency: !O, scoreMethod: O ? h.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: G } = l.useMemo(() => {
            let e = {};
            return (
                F.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [F]),
        V = l.useRef(U);
    l.useEffect(() => {
        U !== V.current && ((V.current = U), M?.());
    }, [U, M]);
    let B = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                a()(null != T, "menu item should not show if channel is null");
                let l = G[e.applicationId],
                    s = n && null != l ? (0, m.Rg)(l) : void 0,
                    d =
                        null != s && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(s, {
                                          channel: T,
                                          section: l,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    o.Dr,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: d,
                        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
                        trailingIndicator: { type: "icon", icon: c.l },
                        icon: c.l,
                        action: () => {
                            (0, _.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: T, guild: R },
                                commandTargetId: r,
                            });
                        },
                    },
                    e.id,
                );
            },
            [T, G, R, r],
        ),
        H = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.rX,
                    { label: N.intl.string(N.t.V0w2ap), children: n.map((e) => B(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [B],
        ),
        K = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, m.Rg)(t),
                    r =
                        null != l
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, i.jsx)("span", {
                                      className: n,
                                      children: (0, i.jsx)(l, {
                                          channel: T,
                                          section: t,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    o.Dr,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft: r,
                        leadingAccessory: null != r ? { type: "icon", icon: r } : void 0,
                        children: n.map((e) => B(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [T, B],
        ),
        Y = (0, i.jsx)(
            o.aK,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(d.V, { ...e, query: w, onChange: D, placeholder: N.intl.string(N.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (U)
        t = (0, i.jsx)(
            o.Dr,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(f.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === k.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    O && (0, i.jsxs)(i.Fragment, { children: [Y, (0, i.jsx)(o.bX, {})] }),
                    (0, i.jsx)(
                        o.Dr,
                        { id: "menu-commands-empty", label: N.intl.string(N.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (O)
            t = (0, i.jsxs)(i.Fragment, {
                children: [Y, (0, i.jsx)(o.bX, {}), k.map((e) => B(e, { showAppIcon: !0 }))],
            });
        else {
            let e = L.find((e) => {
                    let { section: t } = e;
                    return t.id === C.Ik.FRECENCY;
                }),
                n = L.filter((e) => {
                    let { section: t } = e;
                    return t.id !== C.Ik.FRECENCY;
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    Y,
                    null != e && H(e),
                    (0, i.jsx)(o.rX, { label: N.intl.string(N.t.PHjkRE), children: n.map((e) => K(e)) }),
                ],
            });
        }
        null != j &&
            j.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bX, {}, "separator"), j] }));
    }
    if (!x.kvI.TEXTUAL.has(T.type))
        if (null == j) return null;
        else t = j;
    return (0, i.jsx)(o.Dr, {
        id: "apps",
        label: N.intl.string(N.t.PHjkRE),
        leadingAccessory: v ? { type: "icon", icon: u.k } : void 0,
        listClassName: I.p,
        children: t,
    });
};
