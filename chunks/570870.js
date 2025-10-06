n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(512722),
    o = n.n(i),
    c = n(442837),
    a = n(481060),
    s = n(10718),
    u = n(367790),
    d = n(667204),
    f = n(826298),
    p = n(276022),
    b = n(978983),
    h = n(430824),
    m = n(594174),
    g = n(959218),
    O = n(981631),
    y = n(689079),
    j = n(388032),
    v = n(386348);
let w = (e) => {
    let t,
        { commandType: n, commandTargetId: i, channel: w, guildId: E, onHeightUpdate: P, context: x } = e,
        S = (0, c.e7)([h.Z], () => h.Z.getGuild(null != E ? E : w.guild_id)),
        Z = (0, c.e7)([m.default], () => m.default.getUser(i)),
        C = (0, p.Z)({
            user: Z,
            guildId: null == S ? void 0 : S.id,
            context: x,
        }),
        A = l.useMemo(
            () => ({
                channel: w,
                type: "channel",
            }),
            [w],
        ),
        { newUIEnabled: I, searchEnabled: k } = g.Z.useConfig({ location: "useAppsCommandItems" }),
        [D, N] = l.useState(""),
        T = "" !== D,
        {
            commands: U,
            commandsByActiveSection: V,
            sectionDescriptors: F,
            loading: L,
        } = s.wi({
            context: A,
            filters: {
                text: T ? D : void 0,
                commandTypes: [n],
            },
            options: {
                limit: y.lr,
                includeFrecency: I && !T,
                scoreMethod: T ? u.p.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: M } = l.useMemo(() => {
            let e = {};
            return (
                F.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [F]),
        R = l.useRef(L);
    l.useEffect(() => {
        L !== R.current && ((R.current = L), null == P || P());
    }, [L, P]);
    let _ = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                o()(null != w, "menu item should not show if channel is null");
                let l = M[e.applicationId],
                    c = n && null != l ? (0, f.ky)(l) : void 0;
                return (0, r.jsx)(
                    a.sNh,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft:
                            null != c
                                ? () =>
                                      (0, r.jsx)(c, {
                                          channel: w,
                                          section: l,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        icon: I ? a.Uuj : void 0,
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
            [w, M, I, S, i],
        ),
        H = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, r.jsx)(
                    a.kSQ,
                    {
                        label: j.intl.string(j.t.V0w2am),
                        children: n.map((e) => _(e, { showAppIcon: !0 })),
                    },
                    t.id,
                );
            },
            [_],
        ),
        Y = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, f.ky)(t);
                return (0, r.jsx)(
                    a.sNh,
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
        K = (0, r.jsx)(
            a.II_,
            {
                id: "command-search",
                control: (e, t) => {
                    var n, l;
                    return (0, r.jsx)(
                        a.ne,
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
                                placeholder: j.intl.string(j.t.m1UwbG),
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
    if (L)
        t = (0, r.jsx)(
            a.sNh,
            {
                id: "menu-commands-placeholder",
                render: () => (0, r.jsx)(b.Z, {}),
                disabled: !0,
            },
            "menu-commands-placeholder",
        );
    else {
        if (0 === U.length)
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [K, (0, r.jsx)(a.Clw, {})],
                        }),
                    (0, r.jsx)(
                        a.sNh,
                        {
                            id: "menu-commands-empty",
                            label: j.intl.string(j.t.YSNlV1),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (I)
            if (T)
                t = (0, r.jsxs)(r.Fragment, {
                    children: [K, (0, r.jsx)(a.Clw, {}), U.map((e) => _(e, { showAppIcon: !0 }))],
                });
            else {
                let e = V.find((e) => {
                        let { section: t } = e;
                        return t.id === y.bi.FRECENCY;
                    }),
                    n = V.filter((e) => {
                        let { section: t } = e;
                        return t.id !== y.bi.FRECENCY;
                    });
                t = (0, r.jsxs)(r.Fragment, {
                    children: [
                        k && K,
                        null != e && H(e),
                        (0, r.jsx)(a.kSQ, {
                            label: j.intl.string(j.t.PHjkRE),
                            children: n.map((e) => Y(e)),
                        }),
                    ],
                });
            }
        else t = U.map((e) => _(e, { showAppIcon: !0 }));
        null != C &&
            C.length > 0 &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [t, (0, r.jsx)(a.Clw, {}, "separator"), C],
            }));
    }
    if (!O.TPd.TEXTUAL.has(w.type))
        if (null == C) return null;
        else t = C;
    return (0, r.jsx)(a.sNh, {
        id: "apps",
        label: j.intl.string(j.t.PHjkRE),
        listClassName: v.list,
        children: t,
    });
};
