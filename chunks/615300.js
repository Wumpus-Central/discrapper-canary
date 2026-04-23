"use strict";
n.d(t, { A: () => p }), n(321073);
var r = n(685908),
    i = n(497387),
    s = n.n(i),
    a = n(94809),
    o = n.n(a),
    l = n(505737),
    u = n.n(l);
function c(e) {
    let t = Object.keys(e)[0];
    return `${t}(${e[t]})`;
}
let d = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function _(e) {
    let t = e.match(d);
    return null != t && (e = `rgba(${0 | t[1]}, ${0 | t[2]}, ${0 | t[3]}, ${t[4]})`), e;
}
function f(e, t, n) {
    return void 0 !== t && void 0 != n ? o()(t, n) : e;
}
r.inject.ApplyAnimatedValues(
    function (e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            var r;
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            u().setValueForStyles(
                e,
                ((r = t.style) &&
                    (r.transform && (r.transform = r.WebkitTransform = r.MozTransform = r.transform.map(c).join(" ")),
                    r.color && (r.color = _(r.color)),
                    r.backgroundColor && (r.backgroundColor = _(r.backgroundColor))),
                r),
                n._reactInternalInstance,
            );
        }
    },
    (e) => e,
);
let p = {
    ...r,
    Easing: s(),
    accelerate: function (e) {
        return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
    },
    animate: function e(t, n) {
        let i,
            {
                toValueMin: s,
                toValueMax: a,
                tension: o = 0,
                friction: l = 0,
                loop: u,
                reverse: c,
                invert: d,
                callback: _,
                type: p = "spring",
                shouldLoop: h,
                durationMin: E,
                durationMax: m,
                ...g
            } = n,
            A = t._value,
            I = f(n.duration, E, m),
            T = f(n.toValue, s, a),
            S = r[p](t, { ...g, toValue: T, tension: o, friction: l, duration: I }),
            y = S;
        if (c || d) {
            let e = f(n.duration, E, m);
            (i = r[p](t, { ...g, toValue: c ? A : -T, tension: o, friction: l, duration: e })),
                (y = r.sequence([S, i]));
        }
        u
            ? y.start(() => {
                  (!h || (h && h())) && (_ ? _(e.bind(null, t, n)) : e(t, n));
              })
            : y.start(_);
    },
    interpolate: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return e.interpolate({ inputRange: [0, 1], outputRange: n });
    },
    Extrapolate: { CLAMP: "clamp" },
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
};
