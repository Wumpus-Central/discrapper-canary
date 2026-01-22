n.d(t, { A: () => I });
var l = n(627968),
    r = n(64700),
    a = n(432022),
    i = n(66455),
    s = n(311907),
    o = n(397927),
    c = n(475743),
    u = n(775121),
    E = n(761640),
    d = n(706752),
    _ = n(290294),
    g = n(420775),
    A = n(684968),
    T = n(486974),
    f = n(652215);
function h(e, t) {
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
function I(e) {
    var t;
    let { userId: n, guildId: I, onClose: O, analyticsLocation: N, className: m } = e,
        S = (0, s.bG)([E.Ay], () => E.Ay.getGuildSidebarState(I), [I]),
        p = null != (t = null == S ? void 0 : S.details.modViewPanel) ? t : T.g.INFO,
        b = (0, c.A)(n),
        G = null == p ? null : p === T.g.INFO ? "backwards" : "forwards",
        R = (0, i.A)(G),
        { reducedMotion: D } = r.useContext(o.CZY),
        L = r.useCallback(
            (e) => {
                null != S && (0, d.z)(I, n, S.baseChannelId, { modViewPanel: e });
            },
            [S, I, n],
        ),
        x = r.useMemo(
            () => ({
                [f.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (p === T.g.INFO ? O() : L(T.g.INFO)),
                },
            }),
            [O, p, L],
        );
    r.useEffect(() => (u.A.enable(), u.A.enableTemp(x), () => u.A.disableTemp()), [x]);
    let C = (0, o.pnh)(
        p,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 },
        },
        b !== n ? "animate-never" : "animate-always",
    );
    return (0, l.jsx)(a.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: C((e, t, r) => {
            var i, s, o;
            let { key: c } = r;
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
                        D.enabled
                            ? { opacity: null == (i = e.value) ? void 0 : i.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (s = e.value) ? void 0 : s.to(h("left", R)),
                                  right: null == (o = e.value) ? void 0 : o.to(h("right", R)),
                              },
                    ),
                    children: (function (e) {
                        switch (e) {
                            case T.g.INFO:
                                return (0, l.jsx)(_.A, {
                                    userId: n,
                                    guildId: I,
                                    onNavigate: L,
                                    className: m,
                                });
                            case T.g.MESSAGE_HISTORY:
                                return (0, l.jsx)(g.A, {
                                    userId: n,
                                    guildId: I,
                                    onNavigate: () => L(T.g.INFO),
                                    className: m,
                                });
                            case T.g.PERMISSIONS:
                                return (0, l.jsx)(A.A, {
                                    userId: n,
                                    guildId: I,
                                    onNavigate: () => L(T.g.INFO),
                                    className: m,
                                });
                            default:
                                return null;
                        }
                    })(t),
                },
                c,
            );
        }),
    });
}
