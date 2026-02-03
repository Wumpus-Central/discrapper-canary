n.d(t, {
    A: () => h,
});
var l = n(627968),
    r = n(64700),
    a = n(92674),
    i = n(66455),
    s = n(311907),
    o = n(397927),
    u = n(475743),
    c = n(775121),
    E = n(761640),
    _ = n(706752),
    d = n(290294),
    g = n(420775),
    A = n(684968),
    T = n(486974),
    I = n(652215);

function O(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let l = "forwards" === t.current,
            r = n > 0,
            a = !1;
        return (
            r && l && "left" === e && (a = !0),
            r && !l && "right" === e && (a = !0),
            !r && l && "right" === e && (a = !0),
            r || l || "left" !== e || (a = !0),
            a ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
        );
    };
}

function h(e) {
    var t;
    let { userId: n, guildId: h, onClose: N, analyticsLocation: m, className: f } = e,
        S = (0, s.bG)([E.Ay], () => E.Ay.getGuildSidebarState(h), [h]),
        p = null != (t = null == S ? void 0 : S.details.modViewPanel) ? t : T.g.INFO,
        G = (0, u.A)(n),
        R = null == p ? null : p === T.g.INFO ? "backwards" : "forwards",
        D = (0, i.A)(R),
        { reducedMotion: C } = r.useContext(o.CZY),
        L = r.useCallback(
            (e) => {
                null != S &&
                    (0, _.z)(h, n, S.baseChannelId, {
                        modViewPanel: e,
                    });
            },
            [S, h, n],
        ),
        x = r.useMemo(
            () => ({
                [I.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (p === T.g.INFO ? N() : L(T.g.INFO)),
                },
            }),
            [N, p, L],
        );
    r.useEffect(() => (c.A.enable(), c.A.enableTemp(x), () => c.A.disableTemp()), [x]);
    let b = (0, o.pnh)(
        p,
        {
            value: 0,
            from: {
                value: 1,
            },
            enter: {
                value: 0,
            },
            leave: {
                value: -1,
            },
        },
        G !== n ? "animate-never" : "animate-always",
    );
    return (0, l.jsx)(a.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: b((e, t, r) => {
            var i, s, o;
            let { key: u } = r;
            return (0, l.jsx)(
                a.animated.div,
                {
                    style: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })(
                        {
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            backfaceVisibility: "hidden",
                            width: "100%",
                            height: "100%",
                        },
                        C.enabled
                            ? {
                                  opacity: null == (i = e.value) ? void 0 : i.to((e) => 1 - Math.abs(e)),
                              }
                            : {
                                  left: null == (s = e.value) ? void 0 : s.to(O("left", D)),
                                  right: null == (o = e.value) ? void 0 : o.to(O("right", D)),
                              },
                    ),
                    children: (function (e) {
                        switch (e) {
                            case T.g.INFO:
                                return (0, l.jsx)(d.A, {
                                    userId: n,
                                    guildId: h,
                                    onNavigate: L,
                                    className: f,
                                });
                            case T.g.MESSAGE_HISTORY:
                                return (0, l.jsx)(g.A, {
                                    userId: n,
                                    guildId: h,
                                    onNavigate: () => L(T.g.INFO),
                                    className: f,
                                });
                            case T.g.PERMISSIONS:
                                return (0, l.jsx)(A.A, {
                                    userId: n,
                                    guildId: h,
                                    onNavigate: () => L(T.g.INFO),
                                    className: f,
                                });
                            default:
                                return null;
                        }
                    })(t),
                },
                u,
            );
        }),
    });
}
