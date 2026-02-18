t.d(n, { A: () => T });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    a = t.n(r),
    s = t(311907),
    d = t(397927),
    o = t(842209),
    c = t(210978),
    u = t(545152),
    h = t(664929),
    A = t(700210),
    g = t(718676),
    m = t(71393),
    p = t(287809),
    _ = t(822517),
    E = t(652215),
    f = t(73510),
    b = t(985018),
    x = t(329872);
let T = (e) => {
    let n,
        {
            commandType: t,
            commandTargetId: r,
            channel: T,
            guildId: v,
            onHeightUpdate: I,
            context: j,
            showIcon: C = !1,
        } = e,
        S = (0, s.bG)([m.A], () => m.A.getGuild(v ?? T.guild_id)),
        y = (0, s.bG)([p.default], () => p.default.getUser(r)),
        O = (0, A.A)({ user: y, guildId: S?.id, context: j }),
        R = l.useMemo(() => ({ channel: T, type: "channel" }), [T]),
        {
            newUIEnabled: w,
            searchEnabled: N,
            desktopSendIconEnabled: D,
        } = _.A.useConfig({ location: "useAppsCommandItems" }),
        [U, G] = l.useState(""),
        P = "" !== U,
        {
            commands: M,
            commandsByActiveSection: V,
            sectionDescriptors: k,
            loading: L,
        } = o.cu({
            context: R,
            filters: { text: P ? U : void 0, commandTypes: [t] },
            options: { limit: f.YC, includeFrecency: w && !P, scoreMethod: P ? c.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: B } = l.useMemo(() => {
            let e = {};
            return (
                k.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [k]),
        F = l.useRef(L);
    l.useEffect(() => {
        L !== F.current && ((F.current = L), I?.());
    }, [L, I]);
    let X = l.useCallback(
            (e, n) => {
                let { showAppIcon: t } = n;
                a()(null != T, "menu item should not show if channel is null");
                let l = B[e.applicationId],
                    s = t && null != l ? (0, h.Rg)(l) : void 0,
                    o =
                        null != s && null != l
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, i.jsx)("span", {
                                      className: n,
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
                    d.Drp,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: o,
                        leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
                        trailingIndicator: D ? { type: "icon", icon: d.lX7 } : void 0,
                        icon: D ? d.lX7 : void 0,
                        action: () => {
                            (0, u.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: T, guild: S },
                                commandTargetId: r,
                            });
                        },
                    },
                    e.id,
                );
            },
            [T, B, D, S, r],
        ),
        W = l.useCallback(
            (e) => {
                let { section: n, data: t } = e;
                return (0, i.jsx)(
                    d.rXV,
                    { label: b.intl.string(b.t.V0w2ap), children: t.map((e) => X(e, { showAppIcon: !0 })) },
                    n.id,
                );
            },
            [X],
        ),
        H = l.useCallback(
            (e) => {
                let { section: n, data: t } = e,
                    l = (0, h.Rg)(n),
                    r =
                        null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(l, {
                                          channel: T,
                                          section: n,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    d.Drp,
                    {
                        id: n.id,
                        label: n.name,
                        iconLeft: r,
                        leadingAccessory: null != r ? { type: "icon", icon: r } : void 0,
                        children: t.map((e) => X(e, { showAppIcon: !1 })),
                    },
                    n.id,
                );
            },
            [T, X],
        ),
        Y = (0, i.jsx)(
            d.aK1,
            {
                id: "command-search",
                control: (e, n) =>
                    (0, i.jsx)(d.VPO, { ...e, query: U, onChange: G, placeholder: b.intl.string(b.t.m1UwbP), ref: n }),
            },
            "command-search",
        );
    if (L)
        n = (0, i.jsx)(
            d.Drp,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(g.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === M.length)
            n = (0, i.jsxs)(i.Fragment, {
                children: [
                    P && (0, i.jsxs)(i.Fragment, { children: [Y, (0, i.jsx)(d.bXX, {})] }),
                    (0, i.jsx)(
                        d.Drp,
                        { id: "menu-commands-empty", label: b.intl.string(b.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (w)
            if (P)
                n = (0, i.jsxs)(i.Fragment, {
                    children: [Y, (0, i.jsx)(d.bXX, {}), M.map((e) => X(e, { showAppIcon: !0 }))],
                });
            else {
                let e = V.find((e) => {
                        let { section: n } = e;
                        return n.id === f.Ik.FRECENCY;
                    }),
                    t = V.filter((e) => {
                        let { section: n } = e;
                        return n.id !== f.Ik.FRECENCY;
                    });
                n = (0, i.jsxs)(i.Fragment, {
                    children: [
                        N && Y,
                        null != e && W(e),
                        (0, i.jsx)(d.rXV, { label: b.intl.string(b.t.PHjkRE), children: t.map((e) => H(e)) }),
                    ],
                });
            }
        else n = M.map((e) => X(e, { showAppIcon: !0 }));
        null != O &&
            O.length > 0 &&
            (n = (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(d.bXX, {}, "separator"), O] }));
    }
    if (!E.kvI.TEXTUAL.has(T.type))
        if (null == O) return null;
        else n = O;
    return (0, i.jsx)(d.Drp, {
        id: "apps",
        label: b.intl.string(b.t.PHjkRE),
        icon: C ? d.k9F : void 0,
        leadingAccessory: C ? { type: "icon", icon: d.k9F } : void 0,
        listClassName: x.p,
        children: n,
    });
};
