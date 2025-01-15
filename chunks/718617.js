n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(476183),
    a = n(442837),
    s = n(186325),
    o = n(481060),
    c = n(110924),
    d = n(714338),
    u = n(237617),
    h = n(433355),
    p = n(189432),
    m = n(727381),
    f = n(313692),
    g = n(596443),
    C = n(50493),
    x = n(981631);
function v(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let i = 'forwards' === t.current,
            l = n > 0,
            r = !1;
        return l && i && 'left' === e && (r = !0), l && !i && 'right' === e && (r = !0), !l && i && 'right' === e && (r = !0), !l && !i && 'left' === e && (r = !0), r ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function _(e) {
    var t, n;
    let { userId: _, guildId: I, onClose: E, analyticsLocation: b, className: Z } = e,
        S = (0, a.e7)([h.ZP], () => h.ZP.getGuildSidebarState(I), [I]),
        N = null !== (t = null == S ? void 0 : S.details.modViewPanel) && void 0 !== t ? t : C.k.INFO,
        T = (0, c.Z)(_);
    let j = null == (n = N) ? null : n === C.k.INFO ? 'backwards' : 'forwards',
        A = (0, u.Z)(j),
        { reducedMotion: y } = l.useContext(s.S),
        P = l.useCallback(
            (e) => {
                null != S && (0, p.r)(I, _, S.baseChannelId, { modViewPanel: e });
            },
            [S, I, _]
        ),
        M = l.useMemo(
            () => ({
                [x.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (N === C.k.INFO) return E();
                        return P(C.k.INFO);
                    }
                }
            }),
            [E, N, P]
        );
    l.useEffect(() => (d.Z.enable(), d.Z.enableTemp(M), () => d.Z.disableTemp()), [M]);
    let R = (0, o.useTransition)(
        N,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        T !== _ ? 'animate-never' : 'animate-always'
    );
    return (0, i.jsx)(r.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: R((e, t, n) => {
            var l, a, s;
            let { key: o } = n;
            return (0, i.jsx)(
                r.animated.div,
                {
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: '100%',
                        height: '100%',
                        ...(y.enabled
                            ? { opacity: null === (l = e.value) || void 0 === l ? void 0 : l.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null === (a = e.value) || void 0 === a ? void 0 : a.to(v('left', A)),
                                  right: null === (s = e.value) || void 0 === s ? void 0 : s.to(v('right', A))
                              })
                    },
                    children: (function (e) {
                        switch (e) {
                            case C.k.INFO:
                                return (0, i.jsx)(m.Z, {
                                    userId: _,
                                    guildId: I,
                                    onNavigate: P,
                                    className: Z
                                });
                            case C.k.MESSAGE_HISTORY:
                                return (0, i.jsx)(f.Z, {
                                    userId: _,
                                    guildId: I,
                                    onNavigate: () => P(C.k.INFO),
                                    className: Z
                                });
                            case C.k.PERMISSIONS:
                                return (0, i.jsx)(g.Z, {
                                    userId: _,
                                    guildId: I,
                                    onNavigate: () => P(C.k.INFO),
                                    className: Z
                                });
                            default:
                                return null;
                        }
                    })(t)
                },
                o
            );
        })
    });
}
