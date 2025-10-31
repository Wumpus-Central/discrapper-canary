t.d(n, { Z: () => y }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(512722),
    o = t.n(r),
    a = t(442837),
    s = t(481060),
    c = t(10718),
    d = t(367790),
    u = t(667204),
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
        v = (0, a.e7)([h.Z], () => h.Z.getGuild(null != C ? C : y.guild_id)),
        P = (0, a.e7)([b.default], () => b.default.getUser(r)),
        E = (0, f.Z)({
            user: P,
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
            commandsByActiveSection: R,
            sectionDescriptors: S,
            loading: H,
        } = c.wi({
            context: k,
            filters: {
                text: F ? N : void 0,
                commandTypes: [t],
            },
            options: {
                limit: x.lr,
                includeFrecency: Z && !F,
                scoreMethod: F ? d.p.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: U } = i.useMemo(() => {
            let e = {};
            return (
                S.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [S]),
        D = i.useRef(H);
    i.useEffect(() => {
        H !== D.current && ((D.current = H), null == I || I());
    }, [H, I]);
    let L = i.useCallback(
            (e, n) => {
                let { showAppIcon: t } = n;
                o()(null != y, "menu item should not show if channel is null");
                let i = U[e.applicationId],
                    a = t && null != i ? (0, p.ky)(i) : void 0;
                return (0, l.jsx)(
                    s.sNh,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft:
                            null != a
                                ? () =>
                                      (0, l.jsx)(a, {
                                          channel: y,
                                          section: i,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        icon: Z ? s.Uuj : void 0,
                        action: () => {
                            (0, u.Z)({
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
        Q = i.useCallback(
            (e) => {
                let { section: n, data: t } = e;
                return (0, l.jsx)(
                    s.kSQ,
                    {
                        label: _.intl.string(_.t.V0w2ap),
                        children: t.map((e) => L(e, { showAppIcon: !0 })),
                    },
                    n.id,
                );
            },
            [L],
        ),
        V = i.useCallback(
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
        W = (0, l.jsx)(
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
                                placeholder: _.intl.string(_.t.m1UwbP),
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
                            children: [W, (0, l.jsx)(s.Clw, {})],
                        }),
                    (0, l.jsx)(
                        s.sNh,
                        {
                            id: "menu-commands-empty",
                            label: _.intl.string(_.t.YSNlV2),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (Z)
            if (F)
                n = (0, l.jsxs)(l.Fragment, {
                    children: [W, (0, l.jsx)(s.Clw, {}), M.map((e) => L(e, { showAppIcon: !0 }))],
                });
            else {
                let e = R.find((e) => {
                        let { section: n } = e;
                        return n.id === x.bi.FRECENCY;
                    }),
                    t = R.filter((e) => {
                        let { section: n } = e;
                        return n.id !== x.bi.FRECENCY;
                    });
                n = (0, l.jsxs)(l.Fragment, {
                    children: [
                        T && W,
                        null != e && Q(e),
                        (0, l.jsx)(s.kSQ, {
                            label: _.intl.string(_.t.PHjkRE),
                            children: t.map((e) => V(e)),
                        }),
                    ],
                });
            }
        else n = M.map((e) => L(e, { showAppIcon: !0 }));
        null != E &&
            E.length > 0 &&
            (n = (0, l.jsxs)(l.Fragment, {
                children: [n, (0, l.jsx)(s.Clw, {}, "separator"), E],
            }));
    }
    if (!j.TPd.TEXTUAL.has(y.type))
        if (null == E) return null;
        else n = E;
    return (0, l.jsx)(s.sNh, {
        id: "apps",
        label: _.intl.string(_.t.PHjkRE),
        listClassName: w.list,
        children: n,
    });
};
