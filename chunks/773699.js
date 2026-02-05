n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    d = n(311907),
    o = n(397927),
    s = n(842209),
    u = n(210978),
    c = n(545152),
    A = n(664929),
    h = n(700210),
    E = n(718676),
    _ = n(71393),
    f = n(287809),
    g = n(822517),
    b = n(652215),
    p = n(73510),
    m = n(985018),
    S = n(329872);
let I = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: r,
            channel: I,
            guildId: T,
            onHeightUpdate: C,
            context: O,
            showIcon: y = !1,
        } = e,
        v = (0, d.bG)([_.A], () => _.A.getGuild(T ?? I.guild_id)),
        R = (0, d.bG)([f.default], () => f.default.getUser(r)),
        D = (0, h.A)({ user: R, guildId: v?.id, context: O }),
        N = l.useMemo(() => ({ channel: I, type: "channel" }), [I]),
        {
            newUIEnabled: x,
            searchEnabled: M,
            desktopSendIconEnabled: w,
        } = g.A.useConfig({ location: "useAppsCommandItems" }),
        [j, U] = l.useState(""),
        k = "" !== j,
        {
            commands: F,
            commandsByActiveSection: V,
            sectionDescriptors: L,
            loading: P,
        } = s.cu({
            context: N,
            filters: { text: k ? j : void 0, commandTypes: [n] },
            options: { limit: p.YC, includeFrecency: x && !k, scoreMethod: k ? u.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: G } = l.useMemo(() => {
            let e = {};
            return (
                L.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [L]),
        B = l.useRef(P);
    l.useEffect(() => {
        P !== B.current && ((B.current = P), C?.());
    }, [P, C]);
    let H = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                a()(null != I, "menu item should not show if channel is null");
                let l = G[e.applicationId],
                    d = n && null != l ? (0, A.Rg)(l) : void 0,
                    s =
                        null != d && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(d, {
                                          channel: I,
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
                                context: { channel: I, guild: v },
                                commandTargetId: r,
                            });
                        },
                    },
                    e.id,
                );
            },
            [I, G, w, v, r],
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
                    l = (0, A.Rg)(t),
                    r =
                        null != l
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, i.jsx)("span", {
                                      className: n,
                                      children: (0, i.jsx)(l, {
                                          channel: I,
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
                        iconLeft: r,
                        leadingAccessory: null != r ? { type: "icon", icon: r } : void 0,
                        children: n.map((e) => H(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [I, H],
        ),
        W = (0, i.jsx)(
            o.aK1,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(o.VPO, { ...e, query: j, onChange: U, placeholder: m.intl.string(m.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (P)
        t = (0, i.jsx)(
            o.Drp,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(E.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === F.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    k && (0, i.jsxs)(i.Fragment, { children: [W, (0, i.jsx)(o.bXX, {})] }),
                    (0, i.jsx)(
                        o.Drp,
                        { id: "menu-commands-empty", label: m.intl.string(m.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (x)
            if (k)
                t = (0, i.jsxs)(i.Fragment, {
                    children: [W, (0, i.jsx)(o.bXX, {}), F.map((e) => H(e, { showAppIcon: !0 }))],
                });
            else {
                let e = V.find((e) => {
                        let { section: t } = e;
                        return t.id === p.Ik.FRECENCY;
                    }),
                    n = V.filter((e) => {
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
        else t = F.map((e) => H(e, { showAppIcon: !0 }));
        null != D &&
            D.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bXX, {}, "separator"), D] }));
    }
    if (!b.kvI.TEXTUAL.has(I.type))
        if (null == D) return null;
        else t = D;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: m.intl.string(m.t.PHjkRE),
        icon: y ? o.k9F : void 0,
        leadingAccessory: y ? { type: "icon", icon: o.k9F } : void 0,
        listClassName: S.p,
        children: t,
    });
};
