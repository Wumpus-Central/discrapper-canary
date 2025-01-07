r.d(n, {
    H: function () {
        return I;
    },
    M: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(666912),
    o = r(990547),
    l = r(873546),
    u = r(186325),
    c = r(481060),
    d = r(393238),
    f = r(699682),
    _ = r(793903),
    h = r(906732),
    p = r(237617);
let m = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0
};
function g(e, n) {
    return null == e ? null : e.index > n.index ? 'backwards' : e.index < n.index ? 'forwards' : null;
}
function E(e, n) {
    return (r) => {
        if (0 === r) return 'auto';
        let i = 'forwards' === n.current,
            a = r > 0,
            s = !1;
        return a && i && 'left' === e && (s = !0), a && !i && 'right' === e && (s = !0), !a && i && 'right' === e && (s = !0), !a && !i && 'left' === e && (s = !0), s ? ''.concat(100 * Math.abs(r), '%') : 'auto';
    };
}
function v(e) {
    return null;
}
function I(e) {
    var n, r, v;
    let { contentDisplay: I, fadeInOut: T = !1, ...b } = e,
        y = {},
        { analyticsLocations: S } = (0, h.ZP)();
    a.Children.forEach(b.children, (e, n) => {
        y[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: n
        };
    });
    let A = b.activeSlide,
        N = (0, f.Z)(b.activeSlide),
        C = null !== (n = b.directionOverride) && void 0 !== n ? n : g(null != N ? y[N] : null, y[A]),
        { reducedMotion: R } = a.useContext(u.S),
        O = a.useContext(_.Z),
        D = y[A].impressionName,
        L = {
            ...y[A].impressionProperties,
            location_stack: S
        };
    O({
        type: o.ImpressionTypes.MODAL,
        name: D,
        properties: L,
        _stackContext: { isSlide: !0 }
    });
    let { ref: x, width: w = 0, height: P = 0 } = (0, d.Z)(A),
        M = {
            ...m,
            ...b.springConfig,
            ...(R.enabled ? { clamp: !0 } : null)
        },
        k = (0, c.useSpring)(
            {
                width: null !== (r = b.width) && void 0 !== r ? r : w,
                height: P,
                config: M
            },
            null == N ? 'animate-never' : 'respect-motion-settings'
        ),
        U = (0, c.useTransition)(
            A,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: M,
                onRest: (e, n) => {
                    let { item: r } = n;
                    r === A && null != b.onSlideReady && b.onSlideReady(r);
                }
            },
            null == N ? 'animate-never' : 'respect-motion-settings'
        ),
        B = (0, p.Z)(C),
        { width: G, centered: Z = !0 } = b,
        F = l.tq ? '100%' : k.width.to((e) => Math.round(e)),
        V = l.tq ? '100%' : k.height.to((e) => Math.round(e)),
        j = l.tq
            ? {}
            : Z
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        H = l.tq ? {} : { overflow: null !== (v = b.overflow) && void 0 !== v ? v : 'hidden' };
    return (0, i.jsx)(s.animated.div, {
        style: {
            position: 'relative',
            minWidth: F,
            minHeight: V,
            ...H
        },
        children: U((e, n, r) => {
            let { key: a } = r,
                o = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, i.jsx)(
                s.animated.div,
                {
                    ref: n === A ? x : null,
                    style: {
                        position: 'absolute',
                        display: I,
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: l.tq ? '100%' : G,
                        ...j,
                        ...(R.enabled
                            ? o
                            : {
                                  left: e.value.to(E('left', B)),
                                  right: e.value.to(E('right', B)),
                                  ...(T && o)
                              })
                    },
                    children: y[n].children
                },
                a
            );
        })
    });
}
