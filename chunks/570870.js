n.d(t, { Z: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(10718),
    d = n(367790),
    u = n(667204),
    p = n(826298),
    h = n(276022),
    f = n(978983),
    g = n(430824),
    m = n(594174),
    b = n(959218),
    j = n(981631),
    x = n(689079),
    y = n(388032),
    v = n(18526);
let O = (e) => {
    let t,
        { commandType: n, commandTargetId: l, channel: O, guildId: E, onHeightUpdate: C, context: I } = e,
        P = (0, s.e7)([g.Z], () => g.Z.getGuild(null != E ? E : O.guild_id)),
        w = (0, s.e7)([m.default], () => m.default.getUser(l)),
        S = (0, h.Z)({
            user: w,
            guildId: null == P ? void 0 : P.id,
            context: I,
        }),
        Z = r.useMemo(
            () => ({
                channel: O,
                type: "channel",
            }),
            [O],
        ),
        { newUIEnabled: N, searchEnabled: M } = b.Z.useConfig({ location: "useAppsCommandItems" }),
        [T, _] = r.useState(""),
        A = "" !== T,
        {
            commands: D,
            commandsByActiveSection: k,
            sectionDescriptors: F,
            loading: R,
        } = c.wi({
            context: Z,
            filters: {
                text: A ? T : void 0,
                commandTypes: [n],
            },
            options: {
                limit: x.lr,
                includeFrecency: N && !A,
                scoreMethod: A ? d.p.COMMAND_OR_APPLICATION : void 0,
            },
            allowFetch: !0,
        }),
        { sections: L } = r.useMemo(() => {
            let e = {};
            return (
                F.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [F]),
        H = r.useRef(R);
    r.useEffect(() => {
        R !== H.current && ((H.current = R), null == C || C());
    }, [R, C]);
    let U = r.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                a()(null != O, "menu item should not show if channel is null");
                let r = L[e.applicationId],
                    s = n && null != r ? (0, p.ky)(r) : void 0;
                return (0, i.jsx)(
                    o.sNh,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft:
                            null != s
                                ? () =>
                                      (0, i.jsx)(s, {
                                          channel: O,
                                          section: r,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        icon: N ? o.Uuj : void 0,
                        action: () => {
                            (0, u.Z)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: O,
                                    guild: P,
                                },
                                commandTargetId: l,
                            });
                        },
                    },
                    e.id,
                );
            },
            [O, L, N, P, l],
        ),
        W = r.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.kSQ,
                    {
                        label: y.intl.string(y.t.V0w2ap),
                        children: n.map((e) => U(e, { showAppIcon: !0 })),
                    },
                    t.id,
                );
            },
            [U],
        ),
        G = r.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    r = (0, p.ky)(t);
                return (0, i.jsx)(
                    o.sNh,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft:
                            null != r
                                ? () =>
                                      (0, i.jsx)(r, {
                                          channel: O,
                                          section: t,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      })
                                : void 0,
                        children: n.map((e) => U(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [O, U],
        ),
        B = (0, i.jsx)(
            o.II_,
            {
                id: "command-search",
                control: (e, t) => {
                    var n, r;
                    return (0, i.jsx)(
                        o.ne,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r =
                            {
                                query: T,
                                onChange: _,
                                placeholder: y.intl.string(y.t.m1UwbP),
                                ref: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    );
                },
            },
            "command-search",
        );
    if (R)
        t = (0, i.jsx)(
            o.sNh,
            {
                id: "menu-commands-placeholder",
                render: () => (0, i.jsx)(f.Z, {}),
                disabled: !0,
            },
            "menu-commands-placeholder",
        );
    else {
        if (0 === D.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    A &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [B, (0, i.jsx)(o.Clw, {})],
                        }),
                    (0, i.jsx)(
                        o.sNh,
                        {
                            id: "menu-commands-empty",
                            label: y.intl.string(y.t.YSNlV2),
                            disabled: !0,
                        },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (N)
            if (A)
                t = (0, i.jsxs)(i.Fragment, {
                    children: [B, (0, i.jsx)(o.Clw, {}), D.map((e) => U(e, { showAppIcon: !0 }))],
                });
            else {
                let e = k.find((e) => {
                        let { section: t } = e;
                        return t.id === x.bi.FRECENCY;
                    }),
                    n = k.filter((e) => {
                        let { section: t } = e;
                        return t.id !== x.bi.FRECENCY;
                    });
                t = (0, i.jsxs)(i.Fragment, {
                    children: [
                        M && B,
                        null != e && W(e),
                        (0, i.jsx)(o.kSQ, {
                            label: y.intl.string(y.t.PHjkRE),
                            children: n.map((e) => G(e)),
                        }),
                    ],
                });
            }
        else t = D.map((e) => U(e, { showAppIcon: !0 }));
        null != S &&
            S.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [t, (0, i.jsx)(o.Clw, {}, "separator"), S],
            }));
    }
    if (!j.TPd.TEXTUAL.has(O.type))
        if (null == S) return null;
        else t = S;
    return (0, i.jsx)(o.sNh, {
        id: "apps",
        label: y.intl.string(y.t.PHjkRE),
        listClassName: v.list,
        children: t,
    });
};
