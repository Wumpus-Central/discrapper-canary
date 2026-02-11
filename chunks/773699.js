n.d(t, { A: () => S });
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
    _ = n(718676),
    E = n(71393),
    g = n(287809),
    b = n(822517),
    f = n(652215),
    p = n(73510),
    m = n(985018),
    T = n(329872);
let S = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: a,
            channel: S,
            guildId: I,
            onHeightUpdate: y,
            context: C,
            showIcon: v = !1,
        } = e,
        R = (0, d.bG)([E.A], () => E.A.getGuild(I ?? S.guild_id)),
        O = (0, d.bG)([g.default], () => g.default.getUser(a)),
        x = (0, A.A)({ user: O, guildId: R?.id, context: C }),
        N = l.useMemo(() => ({ channel: S, type: "channel" }), [S]),
        {
            newUIEnabled: D,
            searchEnabled: M,
            desktopSendIconEnabled: w,
        } = b.A.useConfig({ location: "useAppsCommandItems" }),
        [j, k] = l.useState(""),
        U = "" !== j,
        {
            commands: V,
            commandsByActiveSection: G,
            sectionDescriptors: L,
            loading: P,
        } = s.cu({
            context: N,
            filters: { text: U ? j : void 0, commandTypes: [n] },
            options: { limit: p.YC, includeFrecency: D && !U, scoreMethod: U ? u.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: B } = l.useMemo(() => {
            let e = {};
            return (
                L.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [L]),
        F = l.useRef(P);
    l.useEffect(() => {
        P !== F.current && ((F.current = P), y?.());
    }, [P, y]);
    let H = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                r()(null != S, "menu item should not show if channel is null");
                let l = B[e.applicationId],
                    d = n && null != l ? (0, h.Rg)(l) : void 0,
                    s =
                        null != d && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(d, {
                                          channel: S,
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
                        trailingIndicator: w ? { type: "icon", icon: o.lX7 } : void 0,
                        icon: w ? o.lX7 : void 0,
                        action: () => {
                            (0, c.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: S, guild: R },
                                commandTargetId: a,
                            });
                        },
                    },
                    e.id,
                );
            },
            [S, B, w, R, a],
        ),
        q = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.rXV,
                    { label: m.intl.string(m.t.V0w2ap), children: n.map((e) => H(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [H],
        ),
        Y = l.useCallback(
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
                                          channel: S,
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
                        children: n.map((e) => H(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [S, H],
        ),
        W = (0, i.jsx)(
            o.aK1,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(o.VPO, { ...e, query: j, onChange: k, placeholder: m.intl.string(m.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (P)
        t = (0, i.jsx)(
            o.Drp,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(_.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === V.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    U && (0, i.jsxs)(i.Fragment, { children: [W, (0, i.jsx)(o.bXX, {})] }),
                    (0, i.jsx)(
                        o.Drp,
                        { id: "menu-commands-empty", label: m.intl.string(m.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (D)
            if (U)
                t = (0, i.jsxs)(i.Fragment, {
                    children: [W, (0, i.jsx)(o.bXX, {}), V.map((e) => H(e, { showAppIcon: !0 }))],
                });
            else {
                let e = G.find((e) => {
                        let { section: t } = e;
                        return t.id === p.Ik.FRECENCY;
                    }),
                    n = G.filter((e) => {
                        let { section: t } = e;
                        return t.id !== p.Ik.FRECENCY;
                    });
                t = (0, i.jsxs)(i.Fragment, {
                    children: [
                        M && W,
                        null != e && q(e),
                        (0, i.jsx)(o.rXV, { label: m.intl.string(m.t.PHjkRE), children: n.map((e) => Y(e)) }),
                    ],
                });
            }
        else t = V.map((e) => H(e, { showAppIcon: !0 }));
        null != x &&
            x.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bXX, {}, "separator"), x] }));
    }
    if (!f.kvI.TEXTUAL.has(S.type))
        if (null == x) return null;
        else t = x;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: m.intl.string(m.t.PHjkRE),
        icon: v ? o.k9F : void 0,
        leadingAccessory: v ? { type: "icon", icon: o.k9F } : void 0,
        listClassName: T.p,
        children: t,
    });
};
