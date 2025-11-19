n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    c = n(481060),
    s = n(10718),
    u = n(367790),
    d = n(667204),
    p = n(826298),
    f = n(276022),
    b = n(978983),
    h = n(430824),
    g = n(594174),
    m = n(959218),
    O = n(981631),
    j = n(689079),
    y = n(388032),
    v = n(386348);
let w = (e) => {
    let t,
        { commandType: n, commandTargetId: i, channel: w, guildId: E, onHeightUpdate: P, context: x } = e,
        S = (0, a.e7)([h.Z], () => h.Z.getGuild(null != E ? E : w.guild_id)),
        Z = (0, a.e7)([g.default], () => g.default.getUser(i)),
        C = (0, f.Z)({
            user: Z,
            guildId: null == S ? void 0 : S.id,
            context: x,
        }),
        k = l.useMemo(
            () => ({
                channel: w,
                type: "channel",
            }),
            [w],
        ),
        { newUIEnabled: A, searchEnabled: I } = m.Z.useConfig({ location: "useAppsCommandItems" }),
        [D, N] = l.useState(""),
        U = "" !== D,
        {
            commands: V,
            commandsByActiveSection: F,
            sectionDescriptors: L,
            loading: T,
        } = s.wi({
            context: k,
            filters: {
                text: U ? D : void 0,
                commandTypes: [n],
            },
            options: {
                limit: j.lr,
                includeFrecency: A && !U,
                scoreMethod: U ? u.p.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: M } = l.useMemo(() => {
            let e = {};
            return (
                L.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [L]),
        R = l.useRef(T);
    l.useEffect(() => {
        T !== R.current && ((R.current = T), null == P || P());
    }, [T, P]);
    let _ = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                o()(null != w, "menu item should not show if channel is null");
                let l = M[e.applicationId],
                    a = n && null != l ? (0, p.ky)(l) : void 0;
                return (0, r.jsx)(
                    c.sNh,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft:
                            null != a
                                ? () =>
                                      (0, r.jsx)(a, {
                                          channel: w,
                                          section: l,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        icon: A ? c.Uuj : void 0,
                        action: () => {
                            (0, d.Z)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: w,
                                    guild: S,
                                },
                                commandTargetId: i,
                            });
                        },
                    },
                    e.id,
                );
            },
            [w, M, A, S, i],
        ),
        H = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, r.jsx)(
                    c.kSQ,
                    {
                        label: y.intl.string(y.t.V0w2ap),
                        children: n.map((e) => _(e, { showAppIcon: !0 })),
                    },
                    t.id,
                );
            },
            [_],
        ),
        B = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, p.ky)(t);
                return (0, r.jsx)(
                    c.sNh,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft:
                            null != l
                                ? () =>
                                      (0, r.jsx)(l, {
                                          channel: w,
                                          section: t,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        children: n.map((e) => _(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [w, _],
        ),
        Y = (0, r.jsx)(
            c.II_,
            {
                id: "command-search",
                control: (e, t) => {
                    var n, l;
                    return (0, r.jsx)(
                        c.ne,
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
                                query: D,
                                onChange: N,
                                placeholder: y.intl.string(y.t.m1UwbP),
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
            c.sNh,
            {
                id: "menu-commands-placeholder",
                render: () => (0, r.jsx)(b.Z, {}),
                disabled: !0,
            },
            "menu-commands-placeholder",
        );
    else {
        if (0 === V.length)
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    U &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [Y, (0, r.jsx)(c.Clw, {})],
                        }),
                    (0, r.jsx)(
                        c.sNh,
                        {
                            id: "menu-commands-empty",
                            label: y.intl.string(y.t.YSNlV2),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (A)
            if (U)
                t = (0, r.jsxs)(r.Fragment, {
                    children: [Y, (0, r.jsx)(c.Clw, {}), V.map((e) => _(e, { showAppIcon: !0 }))],
                });
            else {
                let e = F.find((e) => {
                        let { section: t } = e;
                        return t.id === j.bi.FRECENCY;
                    }),
                    n = F.filter((e) => {
                        let { section: t } = e;
                        return t.id !== j.bi.FRECENCY;
                    });
                t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        I && Y,
                        null != e && H(e),
                        (0, r.jsx)(c.kSQ, {
                            label: y.intl.string(y.t.PHjkRE),
                            children: n.map((e) => B(e)),
                        }),
                    ],
                });
            }
        else t = V.map((e) => _(e, { showAppIcon: !0 }));
        null != C &&
            C.length > 0 &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [t, (0, r.jsx)(c.Clw, {}, "separator"), C],
            }));
    }
    if (!O.TPd.TEXTUAL.has(w.type))
        if (null == C) return null;
        else t = C;
    return (0, r.jsx)(c.sNh, {
        id: "apps",
        label: y.intl.string(y.t.PHjkRE),
        listClassName: v.list,
        children: t,
    });
};
