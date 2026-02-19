"use strict";
s.d(t, { A: () => I });
var n = s(627968),
    i = s(64700),
    a = s(284009),
    r = s.n(a),
    l = s(311907),
    c = s(397927),
    o = s(842209),
    d = s(210978),
    p = s(545152),
    u = s(664929),
    g = s(700210),
    h = s(718676),
    f = s(71393),
    m = s(287809),
    A = s(822517),
    x = s(652215),
    E = s(73510),
    b = s(985018),
    T = s(329872);
let I = (e) => {
    let t,
        {
            commandType: s,
            commandTargetId: a,
            channel: I,
            guildId: _,
            onHeightUpdate: S,
            context: N,
            showIcon: v = !1,
        } = e,
        C = (0, l.bG)([f.A], () => f.A.getGuild(_ ?? I.guild_id)),
        y = (0, l.bG)([m.default], () => m.default.getUser(a)),
        j = (0, g.A)({ user: y, guildId: C?.id, context: N }),
        M = i.useMemo(() => ({ channel: I, type: "channel" }), [I]),
        {
            newUIEnabled: R,
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
            context: M,
            filters: { text: L ? D : void 0, commandTypes: [s] },
            options: { limit: E.YC, includeFrecency: R && !L, scoreMethod: L ? d.M.COMMAND_OR_APPLICATION : void 0 },
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
        H = i.useRef(U);
    i.useEffect(() => {
        U !== H.current && ((H.current = U), S?.());
    }, [U, S]);
    let V = i.useCallback(
            (e, t) => {
                let { showAppIcon: s } = t;
                r()(null != I, "menu item should not show if channel is null");
                let i = K[e.applicationId],
                    l = s && null != i ? (0, u.Rg)(i) : void 0,
                    o =
                        null != l && null != i
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, n.jsx)("span", {
                                      className: t,
                                      children: (0, n.jsx)(l, {
                                          channel: I,
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
                            (0, p.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: I, guild: C },
                                commandTargetId: a,
                            });
                        },
                    },
                    e.id,
                );
            },
            [I, K, P, C, a],
        ),
        X = i.useCallback(
            (e) => {
                let { section: t, data: s } = e;
                return (0, n.jsx)(
                    c.rXV,
                    { label: b.intl.string(b.t.V0w2ap), children: s.map((e) => V(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [V],
        ),
        B = i.useCallback(
            (e) => {
                let { section: t, data: s } = e,
                    i = (0, u.Rg)(t),
                    a =
                        null != i
                            ? (e) => {
                                  let { className: s } = e;
                                  return (0, n.jsx)("span", {
                                      className: s,
                                      children: (0, n.jsx)(i, {
                                          channel: I,
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
                        iconLeft: a,
                        leadingAccessory: null != a ? { type: "icon", icon: a } : void 0,
                        children: s.map((e) => V(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [I, V],
        ),
        Y = (0, n.jsx)(
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
                    L && (0, n.jsxs)(n.Fragment, { children: [Y, (0, n.jsx)(c.bXX, {})] }),
                    (0, n.jsx)(
                        c.Drp,
                        { id: "menu-commands-empty", label: b.intl.string(b.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (R)
            if (L)
                t = (0, n.jsxs)(n.Fragment, {
                    children: [Y, (0, n.jsx)(c.bXX, {}), G.map((e) => V(e, { showAppIcon: !0 }))],
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
                        O && Y,
                        null != e && X(e),
                        (0, n.jsx)(c.rXV, { label: b.intl.string(b.t.PHjkRE), children: s.map((e) => B(e)) }),
                    ],
                });
            }
        else t = G.map((e) => V(e, { showAppIcon: !0 }));
        null != j &&
            j.length > 0 &&
            (t = (0, n.jsxs)(n.Fragment, { children: [t, (0, n.jsx)(c.bXX, {}, "separator"), j] }));
    }
    if (!x.kvI.TEXTUAL.has(I.type))
        if (null == j) return null;
        else t = j;
    return (0, n.jsx)(c.Drp, {
        id: "apps",
        label: b.intl.string(b.t.PHjkRE),
        icon: v ? c.k9F : void 0,
        leadingAccessory: v ? { type: "icon", icon: c.k9F } : void 0,
        listClassName: T.p,
        children: t,
    });
};
