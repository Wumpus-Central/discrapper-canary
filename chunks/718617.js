n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(642128),
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
function C(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            i = n > 0,
            l = !1;
        return i && r && 'left' === e && (l = !0), i && !r && 'right' === e && (l = !0), !i && r && 'right' === e && (l = !0), i || r || 'left' !== e || (l = !0), l ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function y(e) {
    var t;
    let { userId: n, guildId: y, onClose: x, analyticsLocation: v, className: j } = e,
        O = (0, o.e7)([p.ZP], () => p.ZP.getGuildSidebarState(y), [y]),
        E = null != (t = null == O ? void 0 : O.details.modViewPanel) ? t : b.k.INFO,
        N = (0, c.Z)(n),
        I = null == E ? null : E === b.k.INFO ? 'backwards' : 'forwards',
        P = (0, d.Z)(I),
        { reducedMotion: S } = i.useContext(a.S),
        Z = i.useCallback(
            (e) => {
                null != O && (0, h.r)(y, n, O.baseChannelId, { modViewPanel: e });
            },
            [O, y, n]
        ),
        T = i.useMemo(
            () => ({
                [_.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action: () => (E === b.k.INFO ? x() : Z(b.k.INFO))
                }
            }),
            [x, E, Z]
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
        N !== n ? 'animate-never' : 'animate-always'
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
                        S.enabled
                            ? { opacity: null == (o = e.value) ? void 0 : o.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (a = e.value) ? void 0 : a.to(C('left', P)),
                                  right: null == (s = e.value) ? void 0 : s.to(C('right', P))
                              }
                    ),
                    children: (function (e) {
                        switch (e) {
                            case b.k.INFO:
                                return (0, r.jsx)(f.Z, {
                                    userId: n,
                                    guildId: y,
                                    onNavigate: Z,
                                    className: j
                                });
                            case b.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(m.Z, {
                                    userId: n,
                                    guildId: y,
                                    onNavigate: () => Z(b.k.INFO),
                                    className: j
                                });
                            case b.k.PERMISSIONS:
                                return (0, r.jsx)(g.Z, {
                                    userId: n,
                                    guildId: y,
                                    onNavigate: () => Z(b.k.INFO),
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
