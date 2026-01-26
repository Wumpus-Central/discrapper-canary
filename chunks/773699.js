n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    o = n.n(i),
    a = n(311907),
    c = n(397927),
    s = n(842209),
    d = n(210978),
    u = n(545152),
    p = n(664929),
    b = n(700210),
    f = n(718676),
    y = n(71393),
    g = n(287809),
    m = n(822517),
    h = n(652215),
    O = n(73510),
    j = n(985018),
    A = n(329872);
let v = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: i,
            channel: v,
            guildId: w,
            onHeightUpdate: x,
            context: E,
            showIcon: P = !1,
        } = e,
        S = (0, a.bG)([y.A], () => y.A.getGuild(null != w ? w : v.guild_id)),
        C = (0, a.bG)([g.default], () => g.default.getUser(i)),
        I = (0, b.A)({
            user: C,
            guildId: null == S ? void 0 : S.id,
            context: E,
        }),
        k = l.useMemo(
            () => ({
                channel: v,
                type: "channel",
            }),
            [v],
        ),
        { newUIEnabled: D, searchEnabled: V } = m.A.useConfig({
            location: "useAppsCommandItems",
        }),
        [R, F] = l.useState(""),
        L = "" !== R,
        {
            commands: M,
            commandsByActiveSection: N,
            sectionDescriptors: X,
            loading: T,
        } = s.cu({
            context: k,
            filters: {
                text: L ? R : void 0,
                commandTypes: [n],
            },
            options: {
                limit: O.YC,
                includeFrecency: D && !L,
                scoreMethod: L ? d.M.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: U } = l.useMemo(() => {
            let e = {};
            return (
                X.forEach((t) => {
                    e[t.id] = t;
                }),
                {
                    sections: e,
                }
            );
        }, [X]),
        G = l.useRef(T);
    l.useEffect(() => {
        T !== G.current && ((G.current = T), null == x || x());
    }, [T, x]);
    let _ = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                o()(null != v, "menu item should not show if channel is null");
                let l = U[e.applicationId],
                    a = n && null != l ? (0, p.Rg)(l) : void 0,
                    s =
                        null != a && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, r.jsx)("span", {
                                      className: t,
                                      children: (0, r.jsx)(a, {
                                          channel: v,
                                          section: l,
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
                        iconLeft: s,
                        leadingAccessory:
                            null != s
                                ? {
                                      type: "icon",
                                      icon: s,
                                  }
                                : void 0,
                        trailingIndicator: D
                            ? {
                                  type: "icon",
                                  icon: c.lX7,
                              }
                            : void 0,
                        icon: D ? c.lX7 : void 0,
                        action: () => {
                            (0, u.A)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: v,
                                    guild: S,
                                },
                                commandTargetId: i,
                            });
                        },
                    },
                    e.id,
                );
            },
            [v, U, D, S, i],
        ),
        H = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, r.jsx)(
                    c.rXV,
                    {
                        label: j.intl.string(j.t.V0w2ap),
                        children: n.map((e) =>
                            _(e, {
                                showAppIcon: !0,
                            }),
                        ),
                    },
                    t.id,
                );
            },
            [_],
        ),
        B = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, p.Rg)(t),
                    i =
                        null != l
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, r.jsx)("span", {
                                      className: n,
                                      children: (0, r.jsx)(l, {
                                          channel: v,
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
                        iconLeft: i,
                        leadingAccessory:
                            null != i
                                ? {
                                      type: "icon",
                                      icon: i,
                                  }
                                : void 0,
                        children: n.map((e) =>
                            _(e, {
                                showAppIcon: !1,
                            }),
                        ),
                    },
                    t.id,
                );
            },
            [v, _],
        ),
        Y = (0, r.jsx)(
            c.aK1,
            {
                id: "command-search",
                control: (e, t) => {
                    var n, l;
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
                        (l = l =
                            {
                                query: R,
                                onChange: F,
                                placeholder: j.intl.string(j.t.m1UwbP),
                                ref: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                },
            },
            "command-search",
        );
    if (T)
        t = (0, r.jsx)(
            c.Drp,
            {
                id: "menu-commands-placeholder",
                render: () => (0, r.jsx)(f.A, {}),
                disabled: !0,
            },
            "menu-commands-placeholder",
        );
    else {
        if (0 === M.length)
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    L &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [Y, (0, r.jsx)(c.bXX, {})],
                        }),
                    (0, r.jsx)(
                        c.Drp,
                        {
                            id: "menu-commands-empty",
                            label: j.intl.string(j.t.YSNlV2),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (D)
            if (L)
                t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        Y,
                        (0, r.jsx)(c.bXX, {}),
                        M.map((e) =>
                            _(e, {
                                showAppIcon: !0,
                            }),
                        ),
                    ],
                });
            else {
                let e = N.find((e) => {
                        let { section: t } = e;
                        return t.id === O.Ik.FRECENCY;
                    }),
                    n = N.filter((e) => {
                        let { section: t } = e;
                        return t.id !== O.Ik.FRECENCY;
                    });
                t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        V && Y,
                        null != e && H(e),
                        (0, r.jsx)(c.rXV, {
                            label: j.intl.string(j.t.PHjkRE),
                            children: n.map((e) => B(e)),
                        }),
                    ],
                });
            }
        else
            t = M.map((e) =>
                _(e, {
                    showAppIcon: !0,
                }),
            );
        null != I &&
            I.length > 0 &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [t, (0, r.jsx)(c.bXX, {}, "separator"), I],
            }));
    }
    if (!h.kvI.TEXTUAL.has(v.type))
        if (null == I) return null;
        else t = I;
    return (0, r.jsx)(c.Drp, {
        id: "apps",
        label: j.intl.string(j.t.PHjkRE),
        icon: P ? c.k9F : void 0,
        leadingAccessory: P
            ? {
                  type: "icon",
                  icon: c.k9F,
              }
            : void 0,
        listClassName: A.p,
        children: t,
    });
};
