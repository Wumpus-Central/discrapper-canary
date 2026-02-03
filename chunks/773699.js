n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    o = n.n(l),
    a = n(311907),
    c = n(397927),
    u = n(842209),
    s = n(210978),
    d = n(545152),
    b = n(664929),
    f = n(700210),
    p = n(718676),
    h = n(71393),
    g = n(287809),
    O = n(822517),
    y = n(652215),
    A = n(73510),
    E = n(985018),
    _ = n(329872);
let m = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: l,
            channel: m,
            guildId: v,
            onHeightUpdate: S,
            context: j,
            showIcon: T = !1,
        } = e,
        w = (0, a.bG)([h.A], () => h.A.getGuild(null != v ? v : m.guild_id)),
        I = (0, a.bG)([g.default], () => g.default.getUser(l)),
        P = (0, f.A)({
            user: I,
            guildId: null == w ? void 0 : w.id,
            context: j,
        }),
        C = i.useMemo(
            () => ({
                channel: m,
                type: "channel",
            }),
            [m],
        ),
        {
            newUIEnabled: R,
            searchEnabled: D,
            desktopSendIconEnabled: x,
        } = O.A.useConfig({
            location: "useAppsCommandItems",
        }),
        [N, k] = i.useState(""),
        M = "" !== N,
        {
            commands: V,
            commandsByActiveSection: U,
            sectionDescriptors: L,
            loading: G,
        } = u.cu({
            context: C,
            filters: {
                text: M ? N : void 0,
                commandTypes: [n],
            },
            options: {
                limit: A.YC,
                includeFrecency: R && !M,
                scoreMethod: M ? s.M.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: B } = i.useMemo(() => {
            let e = {};
            return (
                L.forEach((t) => {
                    e[t.id] = t;
                }),
                {
                    sections: e,
                }
            );
        }, [L]),
        F = i.useRef(G);
    i.useEffect(() => {
        G !== F.current && ((F.current = G), null == S || S());
    }, [G, S]);
    let H = i.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                o()(null != m, "menu item should not show if channel is null");
                let i = B[e.applicationId],
                    a = n && null != i ? (0, b.Rg)(i) : void 0,
                    u =
                        null != a && null != i
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, r.jsx)("span", {
                                      className: t,
                                      children: (0, r.jsx)(a, {
                                          channel: m,
                                          section: i,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, r.jsx)(
                    c.Drp,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: u,
                        leadingAccessory:
                            null != u
                                ? {
                                      type: "icon",
                                      icon: u,
                                  }
                                : void 0,
                        trailingIndicator: x
                            ? {
                                  type: "icon",
                                  icon: c.lX7,
                              }
                            : void 0,
                        icon: x ? c.lX7 : void 0,
                        action: () => {
                            (0, d.A)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: m,
                                    guild: w,
                                },
                                commandTargetId: l,
                            });
                        },
                    },
                    e.id,
                );
            },
            [m, B, x, w, l],
        ),
        W = i.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, r.jsx)(
                    c.rXV,
                    {
                        label: E.intl.string(E.t.V0w2ap),
                        children: n.map((e) =>
                            H(e, {
                                showAppIcon: !0,
                            }),
                        ),
                    },
                    t.id,
                );
            },
            [H],
        ),
        Y = i.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    i = (0, b.Rg)(t),
                    l =
                        null != i
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, r.jsx)("span", {
                                      className: n,
                                      children: (0, r.jsx)(i, {
                                          channel: m,
                                          section: t,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, r.jsx)(
                    c.Drp,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft: l,
                        leadingAccessory:
                            null != l
                                ? {
                                      type: "icon",
                                      icon: l,
                                  }
                                : void 0,
                        children: n.map((e) =>
                            H(e, {
                                showAppIcon: !1,
                            }),
                        ),
                    },
                    t.id,
                );
            },
            [m, H],
        ),
        q = (0, r.jsx)(
            c.aK1,
            {
                id: "command-search",
                control: (e, t) => {
                    var n, i;
                    return (0, r.jsx)(
                        c.VPO,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (i = i =
                            {
                                query: N,
                                onChange: k,
                                placeholder: E.intl.string(E.t.m1UwbP),
                                ref: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
                },
            },
            "command-search",
        );
    if (G)
        t = (0, r.jsx)(
            c.Drp,
            {
                id: "menu-commands-placeholder",
                render: () => (0, r.jsx)(p.A, {}),
                disabled: !0,
            },
            "menu-commands-placeholder",
        );
    else {
        if (0 === V.length)
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    M &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [q, (0, r.jsx)(c.bXX, {})],
                        }),
                    (0, r.jsx)(
                        c.Drp,
                        {
                            id: "menu-commands-empty",
                            label: E.intl.string(E.t.YSNlV2),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (R)
            if (M)
                t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        q,
                        (0, r.jsx)(c.bXX, {}),
                        V.map((e) =>
                            H(e, {
                                showAppIcon: !0,
                            }),
                        ),
                    ],
                });
            else {
                let e = U.find((e) => {
                        let { section: t } = e;
                        return t.id === A.Ik.FRECENCY;
                    }),
                    n = U.filter((e) => {
                        let { section: t } = e;
                        return t.id !== A.Ik.FRECENCY;
                    });
                t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        D && q,
                        null != e && W(e),
                        (0, r.jsx)(c.rXV, {
                            label: E.intl.string(E.t.PHjkRE),
                            children: n.map((e) => Y(e)),
                        }),
                    ],
                });
            }
        else
            t = V.map((e) =>
                H(e, {
                    showAppIcon: !0,
                }),
            );
        null != P &&
            P.length > 0 &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [t, (0, r.jsx)(c.bXX, {}, "separator"), P],
            }));
    }
    if (!y.kvI.TEXTUAL.has(m.type))
        if (null == P) return null;
        else t = P;
    return (0, r.jsx)(c.Drp, {
        id: "apps",
        label: E.intl.string(E.t.PHjkRE),
        icon: T ? c.k9F : void 0,
        leadingAccessory: T
            ? {
                  type: "icon",
                  icon: c.k9F,
              }
            : void 0,
        listClassName: _.p,
        children: t,
    });
};
