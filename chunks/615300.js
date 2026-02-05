"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(685908),
    i = n(497387),
    a = n.n(i),
    s = n(94809),
    o = n.n(s),
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
function f(e) {
    return (
        e &&
            (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(c).join(" ")),
            e.color && (e.color = _(e.color)),
            e.backgroundColor && (e.backgroundColor = _(e.backgroundColor))),
        e
    );
}
function p(e, t, n) {
    if (e.setNativeProps) e.setNativeProps(t);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        u().setValueForStyles(e, f(t.style), n._reactInternalInstance);
    }
}
function h(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function m(e, t, n) {
    return void 0 !== t && void 0 != n ? o()(t, n) : e;
}
function g(e, t) {
    let n,
        {
            toValueMin: i,
            toValueMax: a,
            tension: s = 0,
            friction: o = 0,
            loop: l,
            reverse: u,
            invert: c,
            callback: d,
            type: _ = "spring",
            shouldLoop: f,
            durationMin: p,
            durationMax: h,
            ...E
        } = t,
        A = e._value,
        I = m(t.duration, p, h),
        T = m(t.toValue, i, a),
        y = r[_](e, { ...E, toValue: T, tension: s, friction: o, duration: I }),
        S = y;
    if (u || c) {
        let i = m(t.duration, p, h);
        (n = r[_](e, { ...E, toValue: u ? A : -T, tension: s, friction: o, duration: i })), (S = r.sequence([y, n]));
    }
    l
        ? S.start(() => {
              (!f || (f && f())) && (d ? d(g.bind(null, e, t)) : g(e, t));
          })
        : S.start(d);
}
function E(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e.interpolate({ inputRange: [0, 1], outputRange: n });
}
r.inject.ApplyAnimatedValues(p, (e) => e);
let A = { CLAMP: "clamp" },
    I = {
        ...r,
        Easing: a(),
        accelerate: h,
        animate: g,
        interpolate: E,
        Extrapolate: A,
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
