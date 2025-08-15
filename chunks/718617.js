t.d(e, { Z: () => w });
var n = t(255367),
    r = t(73800),
    l = t(717976),
    i = t(442837),
    a = t(186325),
    s = t(481060),
    o = t(110924),
    g = t(714338),
    c = t(237617),
    f = t(433355),
    v = t(189432),
    u = t(727381),
    h = t(313692),
    d = t(596443),
    E = t(50493),
    C = t(981631);
function B(A, e) {
    return (t) => {
        if (0 === t) return "auto";
        let n = "forwards" === e.current,
            r = t > 0,
            l = !1;
        return (
            r && n && "left" === A && (l = !0),
            r && !n && "right" === A && (l = !0),
            !r && n && "right" === A && (l = !0),
            r || n || "left" !== A || (l = !0),
            l ? "calc(".concat(100 * Math.abs(t), "% + ").concat(Math.round(12 * Math.abs(t)), "px)") : "auto"
        );
    };
}
function w(A) {
    var e;
    let { userId: t, guildId: w, onClose: D, analyticsLocation: M, className: p } = A,
        I = (0, i.e7)([f.ZP], () => f.ZP.getGuildSidebarState(w), [w]),
        H = null != (e = null == I ? void 0 : I.details.modViewPanel) ? e : E.k.INFO,
        b = (0, o.Z)(t),
        O = null == H ? null : H === E.k.INFO ? "backwards" : "forwards",
        Q = (0, c.Z)(O),
        { reducedMotion: P } = r.useContext(a.S),
        j = r.useCallback(
            (A) => {
                null != I && (0, v.r)(w, t, I.baseChannelId, { modViewPanel: A });
            },
            [I, w, t],
        ),
        V = r.useMemo(
            () => ({
                [C.EkH.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (H === E.k.INFO ? D() : j(E.k.INFO)),
                },
            }),
            [D, H, j],
        );
    r.useEffect(() => (g.Z.enable(), g.Z.enableTemp(V), () => g.Z.disableTemp()), [V]);
    let m = (0, s.Yzy)(
        H,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 },
        },
        b !== t ? "animate-never" : "animate-always",
    );
    return (0, n.jsx)(l.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: m((A, e, r) => {
            var i, a, s;
            let { key: o } = r;
            return (0, n.jsx)(
                l.animated.div,
                {
                    style: (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                    }),
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    (n = t[e]),
                                        e in A
                                            ? Object.defineProperty(A, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (A[e] = n);
                                });
                        }
                        return A;
                    })(
                        {
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            backfaceVisibility: "hidden",
                            width: "100%",
                            height: "100%",
                        },
                        P.enabled
                            ? { opacity: null == (i = A.value) ? void 0 : i.to((A) => 1 - Math.abs(A)) }
                            : {
                                  left: null == (a = A.value) ? void 0 : a.to(B("left", Q)),
                                  right: null == (s = A.value) ? void 0 : s.to(B("right", Q)),
                              },
                    ),
                    children: (function (A) {
                        switch (A) {
                            case E.k.INFO:
                                return (0, n.jsx)(u.Z, {
                                    userId: t,
                                    guildId: w,
                                    onNavigate: j,
                                    className: p,
                                });
                            case E.k.MESSAGE_HISTORY:
                                return (0, n.jsx)(h.Z, {
                                    userId: t,
                                    guildId: w,
                                    onNavigate: () => j(E.k.INFO),
                                    className: p,
                                });
                            case E.k.PERMISSIONS:
                                return (0, n.jsx)(d.Z, {
                                    userId: t,
                                    guildId: w,
                                    onNavigate: () => j(E.k.INFO),
                                    className: p,
                                });
                            default:
                                return null;
                        }
                    })(e),
                },
                o,
            );
        }),
    });
}
