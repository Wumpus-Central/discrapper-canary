n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    d = n(311907),
    o = n(397927),
    s = n(842209),
    u = n(210978),
    c = n(545152),
    h = n(664929),
    A = n(700210),
    b = n(718676),
    g = n(71393),
    f = n(287809),
    p = n(822517),
    E = n(652215),
    m = n(73510),
    _ = n(985018),
    S = n(329872);
let T = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: a,
            channel: T,
            guildId: y,
            onHeightUpdate: I,
            context: v,
            showIcon: C = !1,
        } = e,
        R = (0, d.bG)([g.A], () => g.A.getGuild(y ?? T.guild_id)),
        x = (0, d.bG)([f.default], () => f.default.getUser(a)),
        O = (0, A.A)({ user: x, guildId: R?.id, context: v }),
        w = l.useMemo(() => ({ channel: T, type: "channel" }), [T]),
        {
            newUIEnabled: j,
            searchEnabled: N,
            desktopSendIconEnabled: V,
        } = p.A.useConfig({ location: "useAppsCommandItems" }),
        [D, k] = l.useState(""),
        G = "" !== D,
        {
            commands: P,
            commandsByActiveSection: U,
            sectionDescriptors: L,
            loading: M,
        } = s.cu({
            context: w,
            filters: { text: G ? D : void 0, commandTypes: [n] },
            options: { limit: m.YC, includeFrecency: j && !G, scoreMethod: G ? u.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: F } = l.useMemo(() => {
            let e = {};
            return (
                L.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [L]),
        B = l.useRef(M);
    l.useEffect(() => {
        M !== B.current && ((B.current = M), I?.());
    }, [M, I]);
    let q = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                r()(null != T, "menu item should not show if channel is null");
                let l = F[e.applicationId],
                    d = n && null != l ? (0, h.Rg)(l) : void 0,
                    s =
                        null != d && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(d, {
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
                    o.Drp,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: s,
                        leadingAccessory: null != s ? { type: "icon", icon: s } : void 0,
                        trailingIndicator: V ? { type: "icon", icon: o.lX7 } : void 0,
                        icon: V ? o.lX7 : void 0,
                        action: () => {
                            (0, c.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: T, guild: R },
                                commandTargetId: a,
                            });
                        },
                    },
                    e.id,
                );
            },
            [T, F, V, R, a],
        ),
        W = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.rXV,
                    { label: _.intl.string(_.t.V0w2ap), children: n.map((e) => q(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [q],
        ),
        H = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, h.Rg)(t),
                    a =
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
                    o.Drp,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft: a,
                        leadingAccessory: null != a ? { type: "icon", icon: a } : void 0,
                        children: n.map((e) => q(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [T, q],
        ),
        X = (0, i.jsx)(
            o.aK1,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(o.VPO, { ...e, query: D, onChange: k, placeholder: _.intl.string(_.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (M)
        t = (0, i.jsx)(
            o.Drp,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(b.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === P.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    G && (0, i.jsxs)(i.Fragment, { children: [X, (0, i.jsx)(o.bXX, {})] }),
                    (0, i.jsx)(
                        o.Drp,
                        { id: "menu-commands-empty", label: _.intl.string(_.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (j)
            if (G)
                t = (0, i.jsxs)(i.Fragment, {
                    children: [X, (0, i.jsx)(o.bXX, {}), P.map((e) => q(e, { showAppIcon: !0 }))],
                });
            else {
                let e = U.find((e) => {
                        let { section: t } = e;
                        return t.id === m.Ik.FRECENCY;
                    }),
                    n = U.filter((e) => {
                        let { section: t } = e;
                        return t.id !== m.Ik.FRECENCY;
                    });
                t = (0, i.jsxs)(i.Fragment, {
                    children: [
                        N && X,
                        null != e && W(e),
                        (0, i.jsx)(o.rXV, { label: _.intl.string(_.t.PHjkRE), children: n.map((e) => H(e)) }),
                    ],
                });
            }
        else t = P.map((e) => q(e, { showAppIcon: !0 }));
        null != O &&
            O.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bXX, {}, "separator"), O] }));
    }
    if (!E.kvI.TEXTUAL.has(T.type))
        if (null == O) return null;
        else t = O;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: _.intl.string(_.t.PHjkRE),
        icon: C ? o.k9F : void 0,
        leadingAccessory: C ? { type: "icon", icon: o.k9F } : void 0,
        listClassName: S.p,
        children: t,
    });
};
