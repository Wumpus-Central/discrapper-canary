"use strict";
s.d(t, { A: () => T });
var n = s(627968),
    i = s(64700),
    r = s(284009),
    a = s.n(r),
    l = s(311907),
    c = s(397927),
    o = s(842209),
    d = s(210978),
    u = s(545152),
    p = s(664929),
    g = s(700210),
    h = s(718676),
    f = s(71393),
    m = s(287809),
    A = s(822517),
    x = s(652215),
    E = s(73510),
    b = s(985018),
    _ = s(936790);
let T = (e) => {
    let t,
        {
            commandType: s,
            commandTargetId: r,
            channel: T,
            guildId: I,
            onHeightUpdate: S,
            context: v,
            showIcon: N = !1,
        } = e,
        C = (0, l.bG)([f.A], () => f.A.getGuild(I ?? T.guild_id)),
        y = (0, l.bG)([m.default], () => m.default.getUser(r)),
        j = (0, g.A)({ user: y, guildId: C?.id, context: v }),
        R = i.useMemo(() => ({ channel: T, type: "channel" }), [T]),
        {
            newUIEnabled: M,
            searchEnabled: O,
            desktopSendIconEnabled: P,
        } = A.A.useConfig({ location: "useAppsCommandItems" }),
        [D, k] = i.useState(""),
        L = "" !== D,
        {
            commands: G,
            commandsByActiveSection: w,
            sectionDescriptors: F,
            loading: U,
        } = o.cu({
            context: R,
            filters: { text: L ? D : void 0, commandTypes: [s] },
            options: { limit: E.YC, includeFrecency: M && !L, scoreMethod: L ? d.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: K } = i.useMemo(() => {
            let e = {};
            return (
                F.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [F]),
        V = i.useRef(U);
    i.useEffect(() => {
        U !== V.current && ((V.current = U), S?.());
    }, [U, S]);
    let H = i.useCallback(
            (e, t) => {
                let { showAppIcon: s } = t;
                a()(null != T, "menu item should not show if channel is null");
                let i = K[e.applicationId],
                    l = s && null != i ? (0, p.Rg)(i) : void 0,
                    o =
                        null != l && null != i
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, n.jsx)("span", {
                                      className: t,
                                      children: (0, n.jsx)(l, {
                                          channel: T,
                                          section: i,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, n.jsx)(
                    c.Drp,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: o,
                        leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
                        trailingIndicator: P ? { type: "icon", icon: c.lX7 } : void 0,
                        icon: P ? c.lX7 : void 0,
                        action: () => {
                            (0, u.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: T, guild: C },
                                commandTargetId: r,
                            });
                        },
                    },
                    e.id,
                );
            },
            [T, K, P, C, r],
        ),
        X = i.useCallback(
            (e) => {
                let { section: t, data: s } = e;
                return (0, n.jsx)(
                    c.rXV,
                    { label: b.intl.string(b.t.V0w2ap), children: s.map((e) => H(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [H],
        ),
        B = i.useCallback(
            (e) => {
                let { section: t, data: s } = e,
                    i = (0, p.Rg)(t),
                    r =
                        null != i
                            ? (e) => {
                                  let { className: s } = e;
                                  return (0, n.jsx)("span", {
                                      className: s,
                                      children: (0, n.jsx)(i, {
                                          channel: T,
                                          section: t,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, n.jsx)(
                    c.Drp,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft: r,
                        leadingAccessory: null != r ? { type: "icon", icon: r } : void 0,
                        children: s.map((e) => H(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [T, H],
        ),
        W = (0, n.jsx)(
            c.aK1,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, n.jsx)(c.VPO, { ...e, query: D, onChange: k, placeholder: b.intl.string(b.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (U)
        t = (0, n.jsx)(
            c.Drp,
            { id: "menu-commands-placeholder", render: () => (0, n.jsx)(h.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === G.length)
            t = (0, n.jsxs)(n.Fragment, {
                children: [
                    L && (0, n.jsxs)(n.Fragment, { children: [W, (0, n.jsx)(c.bXX, {})] }),
                    (0, n.jsx)(
                        c.Drp,
                        { id: "menu-commands-empty", label: b.intl.string(b.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (M)
            if (L)
                t = (0, n.jsxs)(n.Fragment, {
                    children: [W, (0, n.jsx)(c.bXX, {}), G.map((e) => H(e, { showAppIcon: !0 }))],
                });
            else {
                let e = w.find((e) => {
                        let { section: t } = e;
                        return t.id === E.Ik.FRECENCY;
                    }),
                    s = w.filter((e) => {
                        let { section: t } = e;
                        return t.id !== E.Ik.FRECENCY;
                    });
                t = (0, n.jsxs)(n.Fragment, {
                    children: [
                        O && W,
                        null != e && X(e),
                        (0, n.jsx)(c.rXV, { label: b.intl.string(b.t.PHjkRE), children: s.map((e) => B(e)) }),
                    ],
                });
            }
        else t = G.map((e) => H(e, { showAppIcon: !0 }));
        null != j &&
            j.length > 0 &&
            (t = (0, n.jsxs)(n.Fragment, { children: [t, (0, n.jsx)(c.bXX, {}, "separator"), j] }));
    }
    if (!x.kvI.TEXTUAL.has(T.type))
        if (null == j) return null;
        else t = j;
    return (0, n.jsx)(c.Drp, {
        id: "apps",
        label: b.intl.string(b.t.PHjkRE),
        icon: N ? c.k9F : void 0,
        leadingAccessory: N ? { type: "icon", icon: c.k9F } : void 0,
        listClassName: _.p,
        children: t,
    });
};
