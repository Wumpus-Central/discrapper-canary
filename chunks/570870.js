t.d(n, { Z: () => y }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(512722),
    o = t.n(r),
    c = t(442837),
    s = t(481060),
    a = t(10718),
    u = t(367790),
    d = t(667204),
    p = t(826298),
    f = t(276022),
    m = t(978983),
    h = t(430824),
    b = t(594174),
    g = t(959218),
    j = t(981631),
    x = t(689079),
    _ = t(388032),
    w = t(891628);
let y = (e) => {
    let n,
        { commandType: t, commandTargetId: r, channel: y, guildId: C, onHeightUpdate: I, context: O } = e,
        v = (0, c.e7)([h.Z], () => h.Z.getGuild(null != C ? C : y.guild_id)),
        E = (0, c.e7)([b.default], () => b.default.getUser(r)),
        P = (0, f.Z)({
            user: E,
            guildId: null == v ? void 0 : v.id,
            context: O,
        }),
        k = i.useMemo(
            () => ({
                channel: y,
                type: "channel",
            }),
            [y],
        ),
        { newUIEnabled: Z, searchEnabled: T } = g.Z.useConfig({ location: "useAppsCommandItems" }),
        [N, A] = i.useState(""),
        F = "" !== N,
        {
            commands: M,
            commandsByActiveSection: S,
            sectionDescriptors: R,
            loading: H,
        } = a.wi({
            context: k,
            filters: {
                text: F ? N : void 0,
                commandTypes: [t],
            },
            options: {
                limit: x.lr,
                includeFrecency: Z && !F,
                scoreMethod: F ? u.p.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: U } = i.useMemo(() => {
            let e = {};
            return (
                R.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [R]),
        D = i.useRef(H);
    i.useEffect(() => {
        H !== D.current && ((D.current = H), null == I || I());
    }, [H, I]);
    let L = i.useCallback(
            (e, n) => {
                let { showAppIcon: t } = n;
                o()(null != y, "menu item should not show if channel is null");
                let i = U[e.applicationId],
                    c = t && null != i ? (0, p.ky)(i) : void 0;
                return (0, l.jsx)(
                    s.sNh,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft:
                            null != c
                                ? () =>
                                      (0, l.jsx)(c, {
                                          channel: y,
                                          section: i,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        icon: Z ? s.Uuj : void 0,
                        action: () => {
                            (0, d.Z)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: y,
                                    guild: v,
                                },
                                commandTargetId: r,
                            });
                        },
                    },
                    e.id,
                );
            },
            [y, U, Z, v, r],
        ),
        G = i.useCallback(
            (e) => {
                let { section: n, data: t } = e;
                return (0, l.jsx)(
                    s.kSQ,
                    {
                        label: _.intl.string(_.t.V0w2am),
                        children: t.map((e) => L(e, { showAppIcon: !0 })),
                    },
                    n.id,
                );
            },
            [L],
        ),
        Q = i.useCallback(
            (e) => {
                let { section: n, data: t } = e,
                    i = (0, p.ky)(n);
                return (0, l.jsx)(
                    s.sNh,
                    {
                        id: n.id,
                        label: n.name,
                        iconLeft:
                            null != i
                                ? () =>
                                      (0, l.jsx)(i, {
                                          channel: y,
                                          section: n,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        children: t.map((e) => L(e, { showAppIcon: !1 })),
                    },
                    n.id,
                );
            },
            [y, L],
        ),
        V = (0, l.jsx)(
            s.II_,
            {
                id: "command-search",
                control: (e, n) => {
                    var t, i;
                    return (0, l.jsx)(
                        s.ne,
                        ((t = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    l = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (n) {
                                        var l;
                                        (l = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = l);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (i = i =
                            {
                                query: N,
                                onChange: A,
                                placeholder: _.intl.string(_.t.m1UwbG),
                                ref: n,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, l);
                                  }
                                  return t;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        t),
                    );
                },
            },
            "command-search",
        );
    if (H)
        n = (0, l.jsx)(
            s.sNh,
            {
                id: "menu-commands-placeholder",
                render: () => (0, l.jsx)(m.Z, {}),
                disabled: !0,
            },
            "menu-commands-placeholder",
        );
    else {
        if (0 === M.length)
            n = (0, l.jsxs)(l.Fragment, {
                children: [
                    F &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [V, (0, l.jsx)(s.Clw, {})],
                        }),
                    (0, l.jsx)(
                        s.sNh,
                        {
                            id: "menu-commands-empty",
                            label: _.intl.string(_.t.YSNlV1),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (Z)
            if (F)
                n = (0, l.jsxs)(l.Fragment, {
                    children: [V, (0, l.jsx)(s.Clw, {}), M.map((e) => L(e, { showAppIcon: !0 }))],
                });
            else {
                let e = S.find((e) => {
                        let { section: n } = e;
                        return n.id === x.bi.FRECENCY;
                    }),
                    t = S.filter((e) => {
                        let { section: n } = e;
                        return n.id !== x.bi.FRECENCY;
                    });
                n = (0, l.jsxs)(l.Fragment, {
                    children: [
                        T && V,
                        null != e && G(e),
                        (0, l.jsx)(s.kSQ, {
                            label: _.intl.string(_.t.PHjkRE),
                            children: t.map((e) => Q(e)),
                        }),
                    ],
                });
            }
        else n = M.map((e) => L(e, { showAppIcon: !0 }));
        null != P &&
            P.length > 0 &&
            (n = (0, l.jsxs)(l.Fragment, {
                children: [n, (0, l.jsx)(s.Clw, {}, "separator"), P],
            }));
    }
    if (!j.TPd.TEXTUAL.has(y.type))
        if (null == P) return null;
        else n = P;
    return (0, l.jsx)(s.sNh, {
        id: "apps",
        label: _.intl.string(_.t.PHjkRE),
        listClassName: w.list,
        children: n,
    });
};
