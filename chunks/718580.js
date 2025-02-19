n.d(t, {
    H: () => T,
    M: () => I
});
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(990547),
    s = n(873546),
    l = n(186325),
    c = n(481060),
    u = n(393238),
    d = n(699682),
    f = n(793903),
    p = n(906732),
    _ = n(237617);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0
};
function O(e, t) {
    return null == e ? null : e.index > t.index ? 'backwards' : e.index < t.index ? 'forwards' : null;
}
function S(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            i = n > 0,
            o = !1;
        return i && r && 'left' === e && (o = !0), i && !r && 'right' === e && (o = !0), !i && r && 'right' === e && (o = !0), i || r || 'left' !== e || (o = !0), o ? ''.concat(100 * Math.abs(n), '%') : 'auto';
    };
}
function I(e) {
    return null;
}
function T(e) {
    var t,
        n,
        h,
        { contentDisplay: g, fadeInOut: b = !1 } = e,
        I = v(e, ['contentDisplay', 'fadeInOut']);
    let T = {},
        { analyticsLocations: N } = (0, p.ZP)();
    i.Children.forEach(I.children, (e, t) => {
        T[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t
        };
    });
    let A = I.activeSlide,
        C = (0, d.Z)(I.activeSlide),
        R = null !== (t = I.directionOverride) && void 0 !== t ? t : O(null != C ? T[C] : null, T[A]),
        { reducedMotion: P } = i.useContext(l.S),
        w = i.useContext(f.Z),
        D = T[A].impressionName,
        x = E(m({}, T[A].impressionProperties), { location_stack: N });
    w({
        type: a.ImpressionTypes.MODAL,
        name: D,
        properties: x,
        _stackContext: { isSlide: !0 }
    });
    let { ref: L, width: M = 0, height: k = 0 } = (0, u.Z)(A),
        j = m({}, y, I.springConfig, P.enabled ? { clamp: !0 } : null),
        U = (0, c.q_F)(
            {
                width: null !== (n = I.width) && void 0 !== n ? n : M,
                height: k,
                config: j
            },
            null == C ? 'animate-never' : 'respect-motion-settings'
        ),
        G = (0, c.Yzy)(
            A,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: j,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === A && null != I.onSlideReady && I.onSlideReady(n);
                }
            },
            null == C ? 'animate-never' : 'respect-motion-settings'
        ),
        B = (0, _.Z)(R),
        { width: Z, centered: F = !0 } = I,
        V = s.tq ? '100%' : U.width.to((e) => ('string' == typeof e ? e : Math.round(e))),
        H = s.tq ? '100%' : U.height.to((e) => Math.round(e)),
        W = s.tq
            ? {}
            : F
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        Y = s.tq ? {} : { overflow: null !== (h = I.overflow) && void 0 !== h ? h : 'hidden' };
    return (0, r.jsx)(o.animated.div, {
        style: m(
            {
                position: 'relative',
                minWidth: V,
                minHeight: H
            },
            Y
        ),
        children: G((e, t, n) => {
            let { key: i } = n,
                a = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                o.animated.div,
                {
                    ref: t === A ? L : null,
                    style: m(
                        {
                            position: 'absolute',
                            display: g,
                            flexDirection: 'column',
                            backfaceVisibility: 'hidden',
                            width: s.tq ? '100%' : Z
                        },
                        W,
                        P.enabled
                            ? a
                            : m(
                                  {
                                      left: e.value.to(S('left', B)),
                                      right: e.value.to(S('right', B))
                                  },
                                  b && a
                              )
                    ),
                    children: T[t].children
                },
                i
            );
        })
    });
}
