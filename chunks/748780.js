n.d(t, { Z: () => N }), n(301563), n(653041), n(978209);
var r = n(371193),
    i = n(501501),
    o = n.n(i),
    a = n(78650),
    s = n.n(a),
    l = n(505444),
    c = n.n(l);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let t = Object.keys(e)[0];
    return ''.concat(t, '(').concat(e[t], ')');
}
let g = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function E(e) {
    let t = e.match(g);
    return (
        null != t &&
            (e = 'rgba('
                .concat(0 | t[1], ', ')
                .concat(0 | t[2], ', ')
                .concat(0 | t[3], ', ')
                .concat(t[4], ')')),
        e
    );
}
function v(e) {
    return e && (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(m).join(' ')), e.color && (e.color = E(e.color)), e.backgroundColor && (e.backgroundColor = E(e.backgroundColor))), e;
}
function b(e, t, n) {
    if (e.setNativeProps) e.setNativeProps(t);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        c().setValueForStyles(e, v(t.style), n._reactInternalInstance);
    }
}
function y(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function O(e, t, n) {
    return void 0 !== t && void 0 != n ? s()(t, n) : e;
}
function S(e, t) {
    let n;
    let { toValueMin: i, toValueMax: o, tension: a = 0, friction: s = 0, loop: l, reverse: c, invert: u, callback: f, type: h = 'spring', shouldLoop: m, durationMin: g, durationMax: E } = t,
        v = _(t, ['toValueMin', 'toValueMax', 'tension', 'friction', 'loop', 'reverse', 'invert', 'callback', 'type', 'shouldLoop', 'durationMin', 'durationMax']),
        b = e._value,
        y = O(t.duration, g, E),
        I = O(t.toValue, i, o),
        T = r[h](
            e,
            p(d({}, v), {
                toValue: I,
                tension: a,
                friction: s,
                duration: y
            })
        ),
        N = T;
    if (c || u) {
        let i = O(t.duration, g, E);
        (n = r[h](
            e,
            p(d({}, v), {
                toValue: c ? b : -I,
                tension: a,
                friction: s,
                duration: i
            })
        )),
            (N = r.sequence([T, n]));
    }
    l
        ? N.start(() => {
              (!m || (m && m())) && (f ? f(S.bind(null, e, t)) : S(e, t));
          })
        : N.start(f);
}
function I(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: n
    });
}
r.inject.ApplyAnimatedValues(b, (e) => e);
let T = { CLAMP: 'clamp' },
    N = p(d({}, r), {
        Easing: o(),
        accelerate: y,
        animate: S,
        interpolate: I,
        Extrapolate: T,
        div: r.createAnimatedComponent('div'),
        span: r.createAnimatedComponent('span'),
        img: r.createAnimatedComponent('img'),
        a: r.createAnimatedComponent('a'),
        form: r.createAnimatedComponent('form'),
        ul: r.createAnimatedComponent('ul'),
        li: r.createAnimatedComponent('li'),
        g: r.createAnimatedComponent('g'),
        use: r.createAnimatedComponent('use'),
        path: r.createAnimatedComponent('path'),
        section: r.createAnimatedComponent('section'),
        video: r.createAnimatedComponent('video')
    });
