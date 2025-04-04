n.d(t, { Z: () => N }), n(301563), n(653041), n(978209);
var r = n(96758),
    i = n(776465),
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
function _(e, t) {
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
function p(e, t) {
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
function b(e) {
    return e && (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(m).join(' ')), e.color && (e.color = E(e.color)), e.backgroundColor && (e.backgroundColor = E(e.backgroundColor))), e;
}
function y(e, t, n) {
    if (e.setNativeProps) e.setNativeProps(t);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        c().setValueForStyles(e, b(t.style), n._reactInternalInstance);
    }
}
function v(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function O(e, t, n) {
    return void 0 !== t && void 0 != n ? s()(t, n) : e;
}
function I(e, t) {
    let n,
        { toValueMin: i, toValueMax: o, tension: a = 0, friction: s = 0, loop: l, reverse: c, invert: u, callback: f, type: h = 'spring', shouldLoop: m, durationMin: g, durationMax: E } = t,
        b = p(t, ['toValueMin', 'toValueMax', 'tension', 'friction', 'loop', 'reverse', 'invert', 'callback', 'type', 'shouldLoop', 'durationMin', 'durationMax']),
        y = e._value,
        v = O(t.duration, g, E),
        S = O(t.toValue, i, o),
        T = r[h](
            e,
            _(d({}, b), {
                toValue: S,
                tension: a,
                friction: s,
                duration: v
            })
        ),
        N = T;
    if (c || u) {
        let i = O(t.duration, g, E);
        (n = r[h](
            e,
            _(d({}, b), {
                toValue: c ? y : -S,
                tension: a,
                friction: s,
                duration: i
            })
        )),
            (N = r.sequence([T, n]));
    }
    l
        ? N.start(() => {
              (!m || (m && m())) && (f ? f(I.bind(null, e, t)) : I(e, t));
          })
        : N.start(f);
}
function S(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: n
    });
}
r.inject.ApplyAnimatedValues(y, (e) => e);
let T = { CLAMP: 'clamp' },
    N = _(d({}, r), {
        Easing: o(),
        accelerate: v,
        animate: I,
        interpolate: S,
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
