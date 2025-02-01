n.d(t, {
    H: () => v,
    M: () => E
});
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(990547),
    o = n(873546),
    l = n(186325),
    u = n(481060),
    c = n(393238),
    d = n(699682),
    f = n(793903),
    _ = n(906732),
    p = n(237617);
let h = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0
};
function m(e, t) {
    return null == e ? null : e.index > t.index ? 'backwards' : e.index < t.index ? 'forwards' : null;
}
function g(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let i = 'forwards' === t.current,
            r = n > 0,
            a = !1;
        return r && i && 'left' === e && (a = !0), r && !i && 'right' === e && (a = !0), !r && i && 'right' === e && (a = !0), r || i || 'left' !== e || (a = !0), a ? ''.concat(100 * Math.abs(n), '%') : 'auto';
    };
}
function E(e) {
    return null;
}
function v(e) {
    var t, n, E;
    let { contentDisplay: v, fadeInOut: y = !1, ...I } = e,
        T = {},
        { analyticsLocations: b } = (0, _.ZP)();
    r.Children.forEach(I.children, (e, t) => {
        T[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t
        };
    });
    let S = I.activeSlide,
        A = (0, d.Z)(I.activeSlide),
        N = null !== (t = I.directionOverride) && void 0 !== t ? t : m(null != A ? T[A] : null, T[S]),
        { reducedMotion: C } = r.useContext(l.S),
        R = r.useContext(f.Z),
        O = T[S].impressionName,
        D = {
            ...T[S].impressionProperties,
            location_stack: b
        };
    R({
        type: s.ImpressionTypes.MODAL,
        name: O,
        properties: D,
        _stackContext: { isSlide: !0 }
    });
    let { ref: x, width: L = 0, height: P = 0 } = (0, c.Z)(S),
        w = {
            ...h,
            ...I.springConfig,
            ...(C.enabled ? { clamp: !0 } : null)
        },
        M = (0, u.q_F)(
            {
                width: null !== (n = I.width) && void 0 !== n ? n : L,
                height: P,
                config: w
            },
            null == A ? 'animate-never' : 'respect-motion-settings'
        ),
        k = (0, u.Yzy)(
            S,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: w,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === S && null != I.onSlideReady && I.onSlideReady(n);
                }
            },
            null == A ? 'animate-never' : 'respect-motion-settings'
        ),
        U = (0, p.Z)(N),
        { width: G, centered: B = !0 } = I,
        Z = o.tq ? '100%' : M.width.to((e) => ('string' == typeof e ? e : Math.round(e))),
        F = o.tq ? '100%' : M.height.to((e) => Math.round(e)),
        V = o.tq
            ? {}
            : B
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        j = o.tq ? {} : { overflow: null !== (E = I.overflow) && void 0 !== E ? E : 'hidden' };
    return (0, i.jsx)(a.animated.div, {
        style: {
            position: 'relative',
            minWidth: Z,
            minHeight: F,
            ...j
        },
        children: k((e, t, n) => {
            let { key: r } = n,
                s = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, i.jsx)(
                a.animated.div,
                {
                    ref: t === S ? x : null,
                    style: {
                        position: 'absolute',
                        display: v,
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: o.tq ? '100%' : G,
                        ...V,
                        ...(C.enabled
                            ? s
                            : {
                                  left: e.value.to(g('left', U)),
                                  right: e.value.to(g('right', U)),
                                  ...(y && s)
                              })
                    },
                    children: T[t].children
                },
                r
            );
        })
    });
}
