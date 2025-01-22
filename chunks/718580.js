r.d(n, {
    H: function () {
        return y;
    },
    M: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(642128),
    s = r(990547),
    l = r(873546),
    u = r(186325),
    c = r(481060),
    d = r(393238),
    f = r(699682),
    p = r(793903),
    h = r(906732),
    _ = r(237617);
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
            o = !1;
        return a && i && 'left' === e && (o = !0), a && !i && 'right' === e && (o = !0), !a && i && 'right' === e && (o = !0), !a && !i && 'left' === e && (o = !0), o ? ''.concat(100 * Math.abs(r), '%') : 'auto';
    };
}
function v(e) {
    return null;
}
function y(e) {
    var n, r, v;
    let { contentDisplay: y, fadeInOut: b = !1, ...I } = e,
        T = {},
        { analyticsLocations: S } = (0, h.ZP)();
    a.Children.forEach(I.children, (e, n) => {
        T[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: n
        };
    });
    let A = I.activeSlide,
        C = (0, f.Z)(I.activeSlide),
        N = null !== (n = I.directionOverride) && void 0 !== n ? n : g(null != C ? T[C] : null, T[A]),
        { reducedMotion: R } = a.useContext(u.S),
        O = a.useContext(p.Z),
        D = T[A].impressionName,
        x = {
            ...T[A].impressionProperties,
            location_stack: S
        };
    O({
        type: s.ImpressionTypes.MODAL,
        name: D,
        properties: x,
        _stackContext: { isSlide: !0 }
    });
    let { ref: L, width: w = 0, height: P = 0 } = (0, d.Z)(A),
        M = {
            ...m,
            ...I.springConfig,
            ...(R.enabled ? { clamp: !0 } : null)
        },
        k = (0, c.useSpring)(
            {
                width: null !== (r = I.width) && void 0 !== r ? r : w,
                height: P,
                config: M
            },
            null == C ? 'animate-never' : 'respect-motion-settings'
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
                    r === A && null != I.onSlideReady && I.onSlideReady(r);
                }
            },
            null == C ? 'animate-never' : 'respect-motion-settings'
        ),
        B = (0, _.Z)(N),
        { width: G, centered: Z = !0 } = I,
        F = l.tq ? '100%' : k.width.to((e) => ('string' == typeof e ? e : Math.round(e))),
        V = l.tq ? '100%' : k.height.to((e) => Math.round(e)),
        j = l.tq
            ? {}
            : Z
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        H = l.tq ? {} : { overflow: null !== (v = I.overflow) && void 0 !== v ? v : 'hidden' };
    return (0, i.jsx)(o.animated.div, {
        style: {
            position: 'relative',
            minWidth: F,
            minHeight: V,
            ...H
        },
        children: U((e, n, r) => {
            let { key: a } = r,
                s = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, i.jsx)(
                o.animated.div,
                {
                    ref: n === A ? L : null,
                    style: {
                        position: 'absolute',
                        display: y,
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: l.tq ? '100%' : G,
                        ...j,
                        ...(R.enabled
                            ? s
                            : {
                                  left: e.value.to(E('left', B)),
                                  right: e.value.to(E('right', B)),
                                  ...(b && s)
                              })
                    },
                    children: T[n].children
                },
                a
            );
        })
    });
}
