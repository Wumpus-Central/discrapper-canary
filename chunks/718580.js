n.d(t, {
    H: () => S,
    M: () => T
});
var r = n(255367),
    i = n(73800),
    a = n(451463),
    o = n(990547),
    s = n(873546),
    l = n(186325),
    c = n(481060),
    u = n(393238),
    d = n(699682),
    f = n(793903),
    _ = n(906732),
    p = n(237617);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let O = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0
};
function v(e, t) {
    return null == e ? null : e.index > t.index ? 'backwards' : e.index < t.index ? 'forwards' : null;
}
function I(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            i = n > 0,
            a = !1;
        return (i && r && 'left' === e && (a = !0), i && !r && 'right' === e && (a = !0), !i && r && 'right' === e && (a = !0), i || r || 'left' !== e || (a = !0), a ? ''.concat(100 * Math.abs(n), '%') : 'auto');
    };
}
function T(e) {
    return null;
}
function S(e) {
    var t,
        n,
        h,
        { contentDisplay: g, fadeInOut: y = !1 } = e,
        T = b(e, ['contentDisplay', 'fadeInOut']);
    let S = {},
        { analyticsLocations: A } = (0, _.ZP)();
    i.Children.forEach(T.children, (e, t) => {
        S[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t
        };
    });
    let N = T.activeSlide,
        C = (0, d.Z)(T.activeSlide),
        R = null != (t = T.directionOverride) ? t : v(null != C ? S[C] : null, S[N]),
        { reducedMotion: P } = i.useContext(l.S),
        w = i.useContext(f.Z),
        D = S[N].impressionName,
        L = E(m({}, S[N].impressionProperties), { location_stack: A });
    w({
        type: o.ImpressionTypes.MODAL,
        name: D,
        properties: L,
        _stackContext: { isSlide: !0 }
    });
    let { ref: x, width: k = 0, height: M = 0 } = (0, u.ZP)(N),
        j = m({}, O, T.springConfig, P.enabled ? { clamp: !0 } : null),
        U = (0, c.q_F)(
            {
                width: null != (n = T.width) ? n : k,
                height: M,
                config: j
            },
            null == C ? 'animate-never' : 'respect-motion-settings'
        ),
        G = (0, c.Yzy)(
            N,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: j,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === N && null != T.onSlideReady && T.onSlideReady(n);
                }
            },
            null == C ? 'animate-never' : 'respect-motion-settings'
        ),
        B = (0, p.Z)(R),
        { width: V, centered: F = !0 } = T,
        Z = s.tq ? '100%' : U.width.to((e) => ('string' == typeof e ? e : Math.round(e))),
        H = s.tq ? '100%' : U.height.to((e) => Math.round(e)),
        Y = s.tq
            ? {}
            : F
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        W = s.tq ? {} : { overflow: null != (h = T.overflow) ? h : 'hidden' };
    return (0, r.jsx)(a.animated.div, {
        style: m(
            {
                position: 'relative',
                minWidth: Z,
                minHeight: H
            },
            W
        ),
        children: G((e, t, n) => {
            let { key: i } = n,
                o = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                a.animated.div,
                {
                    ref: t === N ? x : null,
                    style: m(
                        {
                            position: 'absolute',
                            display: g,
                            flexDirection: 'column',
                            backfaceVisibility: 'hidden',
                            width: s.tq ? '100%' : V
                        },
                        Y,
                        P.enabled
                            ? o
                            : m(
                                  {
                                      left: e.value.to(I('left', B)),
                                      right: e.value.to(I('right', B))
                                  },
                                  y && o
                              )
                    ),
                    children: S[t].children
                },
                i
            );
        })
    });
}
