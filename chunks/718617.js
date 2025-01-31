n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(642128),
    r = n(442837),
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
    _ = n(50493),
    C = n(981631);
function x(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let i = 'forwards' === t.current,
            l = n > 0,
            a = !1;
        return l && i && 'left' === e && (a = !0), l && !i && 'right' === e && (a = !0), !l && i && 'right' === e && (a = !0), l || i || 'left' !== e || (a = !0), a ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function v(e) {
    var t;
    let { userId: n, guildId: v, onClose: E, analyticsLocation: I, className: b } = e,
        Z = (0, r.e7)([h.ZP], () => h.ZP.getGuildSidebarState(v), [v]),
        N = null !== (t = null == Z ? void 0 : Z.details.modViewPanel) && void 0 !== t ? t : _.k.INFO,
        T = (0, c.Z)(n),
        S = null == N ? null : N === _.k.INFO ? 'backwards' : 'forwards',
        j = (0, u.Z)(S),
        { reducedMotion: A } = l.useContext(s.S),
        y = l.useCallback(
            (e) => {
                null != Z && (0, p.r)(v, n, Z.baseChannelId, { modViewPanel: e });
            },
            [Z, v, n]
        ),
        P = l.useMemo(
            () => ({
                [C.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action: () => (N === _.k.INFO ? E() : y(_.k.INFO))
                }
            }),
            [E, N, y]
        );
    l.useEffect(() => (d.Z.enable(), d.Z.enableTemp(P), () => d.Z.disableTemp()), [P]);
    let R = (0, o.Yzy)(
        N,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        T !== n ? 'animate-never' : 'animate-always'
    );
    return (0, i.jsx)(a.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: R((e, t, l) => {
            var r, s, o;
            let { key: c } = l;
            return (0, i.jsx)(
                a.animated.div,
                {
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: '100%',
                        height: '100%',
                        ...(A.enabled
                            ? { opacity: null === (r = e.value) || void 0 === r ? void 0 : r.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null === (s = e.value) || void 0 === s ? void 0 : s.to(x('left', j)),
                                  right: null === (o = e.value) || void 0 === o ? void 0 : o.to(x('right', j))
                              })
                    },
                    children: (function (e) {
                        switch (e) {
                            case _.k.INFO:
                                return (0, i.jsx)(m.Z, {
                                    userId: n,
                                    guildId: v,
                                    onNavigate: y,
                                    className: b
                                });
                            case _.k.MESSAGE_HISTORY:
                                return (0, i.jsx)(f.Z, {
                                    userId: n,
                                    guildId: v,
                                    onNavigate: () => y(_.k.INFO),
                                    className: b
                                });
                            case _.k.PERMISSIONS:
                                return (0, i.jsx)(g.Z, {
                                    userId: n,
                                    guildId: v,
                                    onNavigate: () => y(_.k.INFO),
                                    className: b
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
