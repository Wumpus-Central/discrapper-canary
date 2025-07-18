t.d(e, { Z: () => w });
var n = t(255367),
    r = t(73800),
    l = t(42133),
    i = t(442837),
    s = t(186325),
    a = t(481060),
    o = t(110924),
    g = t(714338),
    f = t(237617),
    c = t(433355),
    v = t(189432),
    h = t(727381),
    u = t(313692),
    E = t(596443),
    d = t(50493),
    C = t(981631);
function B(A, e) {
    return (t) => {
        if (0 === t) return 'auto';
        let n = 'forwards' === e.current,
            r = t > 0,
            l = !1;
        return (r && n && 'left' === A && (l = !0), r && !n && 'right' === A && (l = !0), !r && n && 'right' === A && (l = !0), r || n || 'left' !== A || (l = !0), l ? 'calc('.concat(100 * Math.abs(t), '% + ').concat(Math.round(12 * Math.abs(t)), 'px)') : 'auto');
    };
}
function w(A) {
    var e;
    let { userId: t, guildId: w, onClose: D, analyticsLocation: M, className: I } = A,
        p = (0, i.e7)([c.ZP], () => c.ZP.getGuildSidebarState(w), [w]),
        H = null != (e = null == p ? void 0 : p.details.modViewPanel) ? e : d.k.INFO,
        b = (0, o.Z)(t),
        Q = null == H ? null : H === d.k.INFO ? 'backwards' : 'forwards',
        O = (0, f.Z)(Q),
        { reducedMotion: P } = r.useContext(s.S),
        V = r.useCallback(
            (A) => {
                null != p && (0, v.r)(w, t, p.baseChannelId, { modViewPanel: A });
            },
            [p, w, t]
        ),
        j = r.useMemo(
            () => ({
                [C.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action: () => (H === d.k.INFO ? D() : V(d.k.INFO))
                }
            }),
            [D, H, V]
        );
    r.useEffect(() => (g.Z.enable(), g.Z.enableTemp(j), () => g.Z.disableTemp()), [j]);
    let T = (0, a.Yzy)(
        H,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        b !== t ? 'animate-never' : 'animate-always'
    );
    return (0, n.jsx)(l.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: T((A, e, r) => {
            var i, s, a;
            let { key: o } = r;
            return (0, n.jsx)(
                l.animated.div,
                {
                    style: (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(t);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                    })
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    ((n = t[e]),
                                        e in A
                                            ? Object.defineProperty(A, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[e] = n));
                                }));
                        }
                        return A;
                    })(
                        {
                            position: 'absolute',
                            display: 'flex',
                            flexDirection: 'column',
                            backfaceVisibility: 'hidden',
                            width: '100%',
                            height: '100%'
                        },
                        P.enabled
                            ? { opacity: null == (i = A.value) ? void 0 : i.to((A) => 1 - Math.abs(A)) }
                            : {
                                  left: null == (s = A.value) ? void 0 : s.to(B('left', O)),
                                  right: null == (a = A.value) ? void 0 : a.to(B('right', O))
                              }
                    ),
                    children: (function (A) {
                        switch (A) {
                            case d.k.INFO:
                                return (0, n.jsx)(h.Z, {
                                    userId: t,
                                    guildId: w,
                                    onNavigate: V,
                                    className: I
                                });
                            case d.k.MESSAGE_HISTORY:
                                return (0, n.jsx)(u.Z, {
                                    userId: t,
                                    guildId: w,
                                    onNavigate: () => V(d.k.INFO),
                                    className: I
                                });
                            case d.k.PERMISSIONS:
                                return (0, n.jsx)(E.Z, {
                                    userId: t,
                                    guildId: w,
                                    onNavigate: () => V(d.k.INFO),
                                    className: I
                                });
                            default:
                                return null;
                        }
                    })(e)
                },
                o
            );
        })
    });
}
