n.d(t, { A: () => T }), n(747238), n(321073), n(264879);
var r = n(685908),
    i = n(497387),
    a = n.n(i),
    s = n(94809),
    o = n.n(s),
    l = n(505737),
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function m(e) {
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
            (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(m).join(" ")),
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
function A(e, t, n) {
    return void 0 !== t && void 0 != n ? o()(t, n) : e;
}
function v(e, t) {
    let n,
        {
            toValueMin: i,
            toValueMax: a,
            tension: s = 0,
            friction: o = 0,
            loop: l,
            reverse: c,
            invert: u,
            callback: f,
            type: h = "spring",
            shouldLoop: m,
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
        O = A(t.duration, g, E),
        S = A(t.toValue, i, a),
        I = r[h](
            e,
            p(d({}, b), {
                toValue: S,
                tension: s,
                friction: o,
                duration: O,
            }),
        ),
        T = I;
    if (c || u) {
        let i = A(t.duration, g, E);
        (n = r[h](
            e,
            p(d({}, b), {
                toValue: c ? y : -S,
                tension: s,
                friction: o,
                duration: i,
            }),
        )),
            (T = r.sequence([I, n]));
    }
    l
        ? T.start(() => {
              (!m || (m && m())) && (f ? f(v.bind(null, e, t)) : v(e, t));
          })
        : T.start(f);
}
function S(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: n,
    });
}
r.inject.ApplyAnimatedValues(y, (e) => e);
let I = { CLAMP: "clamp" },
    T = p(d({}, r), {
        Easing: a(),
        accelerate: O,
        animate: v,
        interpolate: S,
        Extrapolate: I,
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
