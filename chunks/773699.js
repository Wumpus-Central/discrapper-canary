n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(842209),
    c = n(210978),
    u = n(545152),
    g = n(664929),
    A = n(700210),
    m = n(718676),
    p = n(71393),
    f = n(287809),
    h = n(822517),
    y = n(652215),
    E = n(73510),
    S = n(985018),
    _ = n(936790);
let b = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: a,
            channel: b,
            guildId: I,
            onHeightUpdate: v,
            context: x,
            showIcon: j = !1,
        } = e,
        T = (0, s.bG)([p.A], () => p.A.getGuild(I ?? b.guild_id)),
        D = (0, s.bG)([f.default], () => f.default.getUser(a)),
        M = (0, A.A)({ user: D, guildId: T?.id, context: x }),
        C = l.useMemo(() => ({ channel: b, type: "channel" }), [b]),
        {
            newUIEnabled: N,
            searchEnabled: O,
            desktopSendIconEnabled: R,
        } = h.A.useConfig({ location: "useAppsCommandItems" }),
        [G, L] = l.useState(""),
        w = "" !== G,
        {
            commands: P,
            commandsByActiveSection: U,
            sectionDescriptors: k,
            loading: F,
        } = d.cu({
            context: C,
            filters: { text: w ? G : void 0, commandTypes: [n] },
            options: { limit: E.YC, includeFrecency: N && !w, scoreMethod: w ? c.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: X } = l.useMemo(() => {
            let e = {};
            return (
                k.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [k]),
        V = l.useRef(F);
    l.useEffect(() => {
        F !== V.current && ((V.current = F), v?.());
    }, [F, v]);
    let B = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                r()(null != b, "menu item should not show if channel is null");
                let l = X[e.applicationId],
                    s = n && null != l ? (0, g.Rg)(l) : void 0,
                    d =
                        null != s && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(s, {
                                          channel: b,
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
                        iconLeft: d,
                        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
                        trailingIndicator: R ? { type: "icon", icon: o.lX7 } : void 0,
                        icon: R ? o.lX7 : void 0,
                        action: () => {
                            (0, u.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: b, guild: T },
                                commandTargetId: a,
                            });
                        },
                    },
                    e.id,
                );
            },
            [b, X, R, T, a],
        ),
        H = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.rXV,
                    { label: S.intl.string(S.t.V0w2ap), children: n.map((e) => B(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [B],
        ),
        K = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, g.Rg)(t),
                    a =
                        null != l
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, i.jsx)("span", {
                                      className: n,
                                      children: (0, i.jsx)(l, {
                                          channel: b,
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
                        children: n.map((e) => B(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [b, B],
        ),
        q = (0, i.jsx)(
            o.aK1,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(o.VPO, { ...e, query: G, onChange: L, placeholder: S.intl.string(S.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (F)
        t = (0, i.jsx)(
            o.Drp,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(m.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === P.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    w && (0, i.jsxs)(i.Fragment, { children: [q, (0, i.jsx)(o.bXX, {})] }),
                    (0, i.jsx)(
                        o.Drp,
                        { id: "menu-commands-empty", label: S.intl.string(S.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (N)
            if (w)
                t = (0, i.jsxs)(i.Fragment, {
                    children: [q, (0, i.jsx)(o.bXX, {}), P.map((e) => B(e, { showAppIcon: !0 }))],
                });
            else {
                let e = U.find((e) => {
                        let { section: t } = e;
                        return t.id === E.Ik.FRECENCY;
                    }),
                    n = U.filter((e) => {
                        let { section: t } = e;
                        return t.id !== E.Ik.FRECENCY;
                    });
                t = (0, i.jsxs)(i.Fragment, {
                    children: [
                        O && q,
                        null != e && H(e),
                        (0, i.jsx)(o.rXV, { label: S.intl.string(S.t.PHjkRE), children: n.map((e) => K(e)) }),
                    ],
                });
            }
        else t = P.map((e) => B(e, { showAppIcon: !0 }));
        null != M &&
            M.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bXX, {}, "separator"), M] }));
    }
    if (!y.kvI.TEXTUAL.has(b.type))
        if (null == M) return null;
        else t = M;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: S.intl.string(S.t.PHjkRE),
        leadingAccessory: j ? { type: "icon", icon: o.k9F } : void 0,
        listClassName: _.p,
        children: t,
    });
};
