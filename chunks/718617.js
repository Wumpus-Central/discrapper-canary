n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    l = n(272573),
    o = n(442837),
    a = n(186325),
    s = n(481060),
    c = n(110924),
    u = n(714338),
    d = n(237617),
    p = n(433355),
    h = n(189432),
    f = n(727381),
    m = n(313692),
    g = n(596443),
    b = n(50493),
    _ = n(981631);
function y(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            i = n > 0,
            l = !1;
        return i && r && 'left' === e && (l = !0), i && !r && 'right' === e && (l = !0), !i && r && 'right' === e && (l = !0), i || r || 'left' !== e || (l = !0), l ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function x(e) {
    var t;
    let { userId: n, guildId: x, onClose: C, analyticsLocation: v, className: j } = e,
        O = (0, o.e7)([p.ZP], () => p.ZP.getGuildSidebarState(x), [x]),
        E = null != (t = null == O ? void 0 : O.details.modViewPanel) ? t : b.k.INFO,
        I = (0, c.Z)(n),
        P = null == E ? null : E === b.k.INFO ? 'backwards' : 'forwards',
        S = (0, d.Z)(P),
        { reducedMotion: Z } = i.useContext(a.S),
        N = i.useCallback(
            (e) => {
                null != O && (0, h.r)(x, n, O.baseChannelId, { modViewPanel: e });
            },
            [O, x, n]
        ),
        T = i.useMemo(
            () => ({
                [_.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action: () => (E === b.k.INFO ? C() : N(b.k.INFO))
                }
            }),
            [C, E, N]
        );
    i.useEffect(() => (u.Z.enable(), u.Z.enableTemp(T), () => u.Z.disableTemp()), [T]);
    let A = (0, s.Yzy)(
        E,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        I !== n ? 'animate-never' : 'animate-always'
    );
    return (0, r.jsx)(l.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: A((e, t, i) => {
            var o, a, s;
            let { key: c } = i;
            return (0, r.jsx)(
                l.animated.div,
                {
                    style: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
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
                        Z.enabled
                            ? { opacity: null == (o = e.value) ? void 0 : o.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (a = e.value) ? void 0 : a.to(y('left', S)),
                                  right: null == (s = e.value) ? void 0 : s.to(y('right', S))
                              }
                    ),
                    children: (function (e) {
                        switch (e) {
                            case b.k.INFO:
                                return (0, r.jsx)(f.Z, {
                                    userId: n,
                                    guildId: x,
                                    onNavigate: N,
                                    className: j
                                });
                            case b.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(m.Z, {
                                    userId: n,
                                    guildId: x,
                                    onNavigate: () => N(b.k.INFO),
                                    className: j
                                });
                            case b.k.PERMISSIONS:
                                return (0, r.jsx)(g.Z, {
                                    userId: n,
                                    guildId: x,
                                    onNavigate: () => N(b.k.INFO),
                                    className: j
                                });
                            default:
                                return null;
                        }
                    })(t)
                },
                c
            );
        })
    });
}
