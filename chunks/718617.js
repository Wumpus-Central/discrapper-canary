n.d(t, { Z: () => O });
var r = n(255367),
    l = n(73800),
    i = n(108542),
    s = n(442837),
    a = n(186325),
    o = n(481060),
    u = n(110924),
    c = n(714338),
    E = n(237617),
    d = n(433355),
    _ = n(189432),
    A = n(727381),
    T = n(313692),
    I = n(596443),
    g = n(50493),
    m = n(981631);
function f(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            l = n > 0,
            i = !1;
        return (l && r && 'left' === e && (i = !0), l && !r && 'right' === e && (i = !0), !l && r && 'right' === e && (i = !0), l || r || 'left' !== e || (i = !0), i ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto');
    };
}
function O(e) {
    var t;
    let { userId: n, guildId: O, onClose: N, analyticsLocation: h, className: R } = e,
        p = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(O), [O]),
        S = null != (t = null == p ? void 0 : p.details.modViewPanel) ? t : g.k.INFO,
        C = (0, u.Z)(n),
        b = null == S ? null : S === g.k.INFO ? 'backwards' : 'forwards',
        D = (0, E.Z)(b),
        { reducedMotion: v } = l.useContext(a.S),
        U = l.useCallback(
            (e) => {
                null != p && (0, _.r)(O, n, p.baseChannelId, { modViewPanel: e });
            },
            [p, O, n]
        ),
        L = l.useMemo(
            () => ({
                [m.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action: () => (S === g.k.INFO ? N() : U(g.k.INFO))
                }
            }),
            [N, S, U]
        );
    l.useEffect(() => (c.Z.enable(), c.Z.enableTemp(L), () => c.Z.disableTemp()), [L]);
    let M = (0, o.Yzy)(
        S,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        C !== n ? 'animate-never' : 'animate-always'
    );
    return (0, r.jsx)(i.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: M((e, t, l) => {
            var s, a, o;
            let { key: u } = l;
            return (0, r.jsx)(
                i.animated.div,
                {
                    style: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })(
                        {
                            position: 'absolute',
                            display: 'flex',
                            flexDirection: 'column',
                            backfaceVisibility: 'hidden',
                            width: '100%',
                            height: '100%'
                        },
                        v.enabled
                            ? { opacity: null == (s = e.value) ? void 0 : s.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (a = e.value) ? void 0 : a.to(f('left', D)),
                                  right: null == (o = e.value) ? void 0 : o.to(f('right', D))
                              }
                    ),
                    children: (function (e) {
                        switch (e) {
                            case g.k.INFO:
                                return (0, r.jsx)(A.Z, {
                                    userId: n,
                                    guildId: O,
                                    onNavigate: U,
                                    className: R
                                });
                            case g.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(T.Z, {
                                    userId: n,
                                    guildId: O,
                                    onNavigate: () => U(g.k.INFO),
                                    className: R
                                });
                            case g.k.PERMISSIONS:
                                return (0, r.jsx)(I.Z, {
                                    userId: n,
                                    guildId: O,
                                    onNavigate: () => U(g.k.INFO),
                                    className: R
                                });
                            default:
                                return null;
                        }
                    })(t)
                },
                u
            );
        })
    });
}
