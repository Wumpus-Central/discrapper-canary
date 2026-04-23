n.d(t, { A: () => I }), n(321073);
var i = n(685908),
    r = n(497387),
    a = n.n(r),
    s = n(94809),
    _ = n.n(s),
    l = n(505737),
    o = n.n(l);
function E(e) {
    let t = Object.keys(e)[0];
    return `${t}(${e[t]})`;
}
let d = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function c(e) {
    let t = e.match(d);
    return null != t && (e = `rgba(${0 | t[1]}, ${0 | t[2]}, ${0 | t[3]}, ${t[4]})`), e;
}
function u(e, t, n) {
    return void 0 !== t && void 0 != n ? _()(t, n) : e;
}
i.inject.ApplyAnimatedValues(
    function (e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            var i;
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            o().setValueForStyles(
                e,
                ((i = t.style) &&
                    (i.transform && (i.transform = i.WebkitTransform = i.MozTransform = i.transform.map(E).join(" ")),
                    i.color && (i.color = c(i.color)),
                    i.backgroundColor && (i.backgroundColor = c(i.backgroundColor))),
                i),
                n._reactInternalInstance,
            );
        }
    },
    (e) => e,
);
let I = {
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
                tension: _ = 0,
                friction: l = 0,
                loop: o,
                reverse: E,
                invert: d,
                callback: c,
                type: I = "spring",
                shouldLoop: A,
                durationMin: T,
                durationMax: S,
                ...N
            } = n,
            O = t._value,
            R = u(n.duration, T, S),
            f = u(n.toValue, a, s),
            C = i[I](t, { ...N, toValue: f, tension: _, friction: l, duration: R }),
            p = C;
        if (E || d) {
            let e = u(n.duration, T, S);
            (r = i[I](t, { ...N, toValue: E ? O : -f, tension: _, friction: l, duration: e })),
                (p = i.sequence([C, r]));
        }
        o
            ? p.start(() => {
                  (!A || (A && A())) && (c ? c(e.bind(null, t, n)) : e(t, n));
              })
            : p.start(c);
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
