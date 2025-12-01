n.d(t, { Z: () => A }), n(35282), n(539854), n(583741);
var r = n(282003),
    i = n(553468),
    a = n.n(i),
    o = n(78650),
    s = n.n(o),
    l = n(505444),
    c = n.n(l);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let t = Object.keys(e)[0];
    return "".concat(t, "(").concat(e[t], ")");
}
let g = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function E(e) {
    let t = e.match(g);
    return (
        null != t &&
            (e = "rgba("
                .concat(0 | t[1], ", ")
                .concat(0 | t[2], ", ")
                .concat(0 | t[3], ", ")
                .concat(t[4], ")")),
        e
    );
}
function b(e) {
    return (
        e &&
            (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(h).join(" ")),
            e.color && (e.color = E(e.color)),
            e.backgroundColor && (e.backgroundColor = E(e.backgroundColor))),
        e
    );
}
function y(e, t, n) {
    if (e.setNativeProps) e.setNativeProps(t);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        c().setValueForStyles(e, b(t.style), n._reactInternalInstance);
    }
}
function O(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function v(e, t, n) {
    return void 0 !== t && void 0 != n ? s()(t, n) : e;
}
function S(e, t) {
    let n,
        {
            toValueMin: i,
            toValueMax: a,
            tension: o = 0,
            friction: s = 0,
            loop: l,
            reverse: c,
            invert: u,
            callback: f,
            type: m = "spring",
            shouldLoop: h,
            durationMin: g,
            durationMax: E,
        } = t,
        b = _(t, [
            "toValueMin",
            "toValueMax",
            "tension",
            "friction",
            "loop",
            "reverse",
            "invert",
            "callback",
            "type",
            "shouldLoop",
            "durationMin",
            "durationMax",
        ]),
        y = e._value,
        O = v(t.duration, g, E),
        I = v(t.toValue, i, a),
        T = r[m](
            e,
            p(d({}, b), {
                toValue: I,
                tension: o,
                friction: s,
                duration: O,
            }),
        ),
        A = T;
    if (c || u) {
        let i = v(t.duration, g, E);
        (n = r[m](
            e,
            p(d({}, b), {
                toValue: c ? y : -I,
                tension: o,
                friction: s,
                duration: i,
            }),
        )),
            (A = r.sequence([T, n]));
    }
    l
        ? A.start(() => {
              (!h || (h && h())) && (f ? f(S.bind(null, e, t)) : S(e, t));
          })
        : A.start(f);
}
function I(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: n,
    });
}
r.inject.ApplyAnimatedValues(y, (e) => e);
let T = { CLAMP: "clamp" },
    A = p(d({}, r), {
        Easing: a(),
        accelerate: O,
        animate: S,
        interpolate: I,
        Extrapolate: T,
        div: r.createAnimatedComponent("div"),
        span: r.createAnimatedComponent("span"),
        img: r.createAnimatedComponent("img"),
        a: r.createAnimatedComponent("a"),
        form: r.createAnimatedComponent("form"),
        ul: r.createAnimatedComponent("ul"),
        li: r.createAnimatedComponent("li"),
        g: r.createAnimatedComponent("g"),
        use: r.createAnimatedComponent("use"),
        path: r.createAnimatedComponent("path"),
        section: r.createAnimatedComponent("section"),
        video: r.createAnimatedComponent("video"),
    });
