"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(685908),
    r = n(497387),
    a = n.n(r),
    s = n(719336),
    l = n.n(s),
    o = n(505737),
    d = n.n(o);
function c(e) {
    let t = Object.keys(e)[0];
    return `${t}(${e[t]})`;
}
let u = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function _(e) {
    let t = e.match(u);
    return null != t && (e = `rgba(${0 | t[1]}, ${0 | t[2]}, ${0 | t[3]}, ${t[4]})`), e;
}
function E(e, t, n) {
    return void 0 !== t && void 0 != n ? l()(t, n) : e;
}
i.inject.ApplyAnimatedValues(
    function (e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            var i;
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            d().setValueForStyles(
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
let A = {
    ...i,
    Easing: a(),
    accelerate: function (e) {
        return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
    },
    animate: function e(t, n) {
        let r,
            {
                toValueMin: a,
                toValueMax: s,
                tension: l = 0,
                friction: o = 0,
                loop: d,
                reverse: c,
                invert: u,
                callback: _,
                type: A = "spring",
                shouldLoop: h,
                durationMin: I,
                durationMax: f,
                ...p
            } = n,
            T = t._value,
            m = E(n.duration, I, f),
            g = E(n.toValue, a, s),
            S = i[A](t, { ...p, toValue: g, tension: l, friction: o, duration: m }),
            N = S;
        if (c || u) {
            let e = E(n.duration, I, f);
            (r = i[A](t, { ...p, toValue: c ? T : -g, tension: l, friction: o, duration: e })),
                (N = i.sequence([S, r]));
        }
        d
            ? N.start(() => {
                  (!h || (h && h())) && (_ ? _(e.bind(null, t, n)) : e(t, n));
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
