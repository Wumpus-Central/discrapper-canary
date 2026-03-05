n.d(t, { A: () => S });
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
    h = n(652215),
    y = n(73510),
    E = n(985018),
    _ = n(329872);
let S = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: a,
            channel: S,
            guildId: b,
            onHeightUpdate: v,
            context: x,
            showIcon: I = !1,
        } = e,
        j = (0, s.bG)([p.A], () => p.A.getGuild(b ?? S.guild_id)),
        T = (0, s.bG)([f.default], () => f.default.getUser(a)),
        D = (0, A.A)({ user: T, guildId: j?.id, context: x }),
        M = l.useMemo(() => ({ channel: S, type: "channel" }), [S]),
        [C, N] = l.useState(""),
        O = "" !== C,
        {
            commands: R,
            commandsByActiveSection: G,
            sectionDescriptors: L,
            loading: w,
        } = d.cu({
            context: M,
            filters: { text: O ? C : void 0, commandTypes: [n] },
            options: { limit: y.YC, includeFrecency: !O, scoreMethod: O ? c.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: P } = l.useMemo(() => {
            let e = {};
            return (
                L.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [L]),
        U = l.useRef(w);
    l.useEffect(() => {
        w !== U.current && ((U.current = w), v?.());
    }, [w, v]);
    let F = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                r()(null != S, "menu item should not show if channel is null");
                let l = P[e.applicationId],
                    s = n && null != l ? (0, g.Rg)(l) : void 0,
                    d =
                        null != s && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(s, {
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
                        iconLeft: d,
                        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
                        trailingIndicator: { type: "icon", icon: o.lX7 },
                        icon: o.lX7,
                        action: () => {
                            (0, u.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: S, guild: j },
                                commandTargetId: a,
                            });
                        },
                    },
                    e.id,
                );
            },
            [S, P, j, a],
        ),
        k = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.rXV,
                    { label: E.intl.string(E.t.V0w2ap), children: n.map((e) => F(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [F],
        ),
        X = l.useCallback(
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
                        children: n.map((e) => F(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [S, F],
        ),
        V = (0, i.jsx)(
            o.aK1,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(o.VPO, { ...e, query: C, onChange: N, placeholder: E.intl.string(E.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (w)
        t = (0, i.jsx)(
            o.Drp,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(m.A, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === R.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    O && (0, i.jsxs)(i.Fragment, { children: [V, (0, i.jsx)(o.bXX, {})] }),
                    (0, i.jsx)(
                        o.Drp,
                        { id: "menu-commands-empty", label: E.intl.string(E.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (O)
            t = (0, i.jsxs)(i.Fragment, {
                children: [V, (0, i.jsx)(o.bXX, {}), R.map((e) => F(e, { showAppIcon: !0 }))],
            });
        else {
            let e = G.find((e) => {
                    let { section: t } = e;
                    return t.id === y.Ik.FRECENCY;
                }),
                n = G.filter((e) => {
                    let { section: t } = e;
                    return t.id !== y.Ik.FRECENCY;
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    V,
                    null != e && k(e),
                    (0, i.jsx)(o.rXV, { label: E.intl.string(E.t.PHjkRE), children: n.map((e) => X(e)) }),
                ],
            });
        }
        null != D &&
            D.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bXX, {}, "separator"), D] }));
    }
    if (!h.kvI.TEXTUAL.has(S.type))
        if (null == D) return null;
        else t = D;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: E.intl.string(E.t.PHjkRE),
        leadingAccessory: I ? { type: "icon", icon: o.k9F } : void 0,
        listClassName: _.p,
        children: t,
    });
};
