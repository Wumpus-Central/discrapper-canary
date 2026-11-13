n(321073);
var i = n(927739),
    r = n(703806),
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
    return (null != t && (e = `rgba(${0 | t[1]}, ${0 | t[2]}, ${0 | t[3]}, ${t[4]})`), e);
}
function E(e, t, n) {
    return void 0 !== t && void 0 != n ? l()(t, n) : e;
}
function A(e, t) {
    let n,
        {
            toValueMin: r,
            toValueMax: a,
            tension: s = 0,
            friction: l = 0,
            loop: o,
            reverse: d,
            invert: c,
            callback: u,
            type: _ = "spring",
            shouldLoop: f,
            durationMin: h,
            durationMax: I,
            ...p
        } = t,
        m = e._value,
        T = E(t.duration, h, I),
        g = E(t.toValue, r, a),
        S = i[_](e, { ...p, toValue: g, tension: s, friction: l, duration: T }),
        N = S;
    if (d || c) {
        let r = E(t.duration, h, I);
        ((n = i[_](e, { ...p, toValue: d ? m : -g, tension: s, friction: l, duration: r })), (N = i.sequence([S, n])));
    }
    o
        ? N.start(() => {
              (!f || (f && f())) && (u ? u(A.bind(null, e, t)) : A(e, t));
          })
        : N.start(u);
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
let f = {
    ...i,
    Easing: a(),
    accelerate: function (e) {
        return ((e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e);
    },
    animate: A,
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
n.d(t, {}, { A: f });
