"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(685908),
    r = n(497387),
    s = n.n(r),
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
i.inject.ApplyAnimatedValues(
    function (e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            var i;
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            u().setValueForStyles(
                e,
                ((i = t.style) &&
                    (i.transform && (i.transform = i.WebkitTransform = i.MozTransform = i.transform.map(c).join(" ")),
                    i.color && (i.color = _(i.color)),
                    i.backgroundColor && (i.backgroundColor = _(i.backgroundColor))),
                i),
                n._reactInternalInstance,
            );
        }
    },
    (e) => e,
);
let h = {
    ...i,
    Easing: s(),
    accelerate: function (e) {
        return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
    },
    animate: function e(t, n) {
        let r,
            {
                toValueMin: s,
                toValueMax: a,
                tension: o = 0,
                friction: l = 0,
                loop: u,
                reverse: c,
                invert: d,
                callback: _,
                type: h = "spring",
                shouldLoop: p,
                durationMin: E,
                durationMax: m,
                ...g
            } = n,
            A = t._value,
            I = f(n.duration, E, m),
            T = f(n.toValue, s, a),
            S = i[h](t, { ...g, toValue: T, tension: o, friction: l, duration: I }),
            N = S;
        if (c || d) {
            let e = f(n.duration, E, m);
            (r = i[h](t, { ...g, toValue: c ? A : -T, tension: o, friction: l, duration: e })),
                (N = i.sequence([S, r]));
        }
        u
            ? N.start(() => {
                  (!p || (p && p())) && (_ ? _(e.bind(null, t, n)) : e(t, n));
              })
            : N.start(_);
    },
    interpolate: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return e.interpolate({ inputRange: [0, 1], outputRange: n });
    },
    Extrapolate: { CLAMP: "clamp" },
    div: i.createAnimatedComponent("div"),
    span: i.createAnimatedComponent("span"),
    img: i.createAnimatedComponent("img"),
    a: i.createAnimatedComponent("a"),
    form: i.createAnimatedComponent("form"),
    ul: i.createAnimatedComponent("ul"),
    li: i.createAnimatedComponent("li"),
    g: i.createAnimatedComponent("g"),
    use: i.createAnimatedComponent("use"),
    path: i.createAnimatedComponent("path"),
    section: i.createAnimatedComponent("section"),
    video: i.createAnimatedComponent("video"),
};
