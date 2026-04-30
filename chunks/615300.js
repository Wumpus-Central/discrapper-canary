n.d(t, { A: () => A }), n(321073);
var i = n(685908),
    a = n(497387),
    r = n.n(a),
    s = n(94809),
    l = n.n(s),
    o = n(505737),
    d = n.n(o);
function c(e) {
    let t = Object.keys(e)[0];
    return `${t}(${e[t]})`;
}
let _ = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function E(e) {
    let t = e.match(_);
    return null != t && (e = `rgba(${0 | t[1]}, ${0 | t[2]}, ${0 | t[3]}, ${t[4]})`), e;
}
function u(e, t, n) {
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
                    i.color && (i.color = E(i.color)),
                    i.backgroundColor && (i.backgroundColor = E(i.backgroundColor))),
                i),
                n._reactInternalInstance,
            );
        }
    },
    (e) => e,
);
let A = {
    ...i,
    Easing: r(),
    accelerate: function (e) {
        return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
    },
    animate: function e(t, n) {
        let a,
            {
                toValueMin: r,
                toValueMax: s,
                tension: l = 0,
                friction: o = 0,
                loop: d,
                reverse: c,
                invert: _,
                callback: E,
                type: A = "spring",
                shouldLoop: I,
                durationMin: T,
                durationMax: h,
                ...S
            } = n,
            N = t._value,
            f = u(n.duration, T, h),
            p = u(n.toValue, r, s),
            m = i[A](t, { ...S, toValue: p, tension: l, friction: o, duration: f }),
            O = m;
        if (c || _) {
            let e = u(n.duration, T, h);
            (a = i[A](t, { ...S, toValue: c ? N : -p, tension: l, friction: o, duration: e })),
                (O = i.sequence([m, a]));
        }
        d
            ? O.start(() => {
                  (!I || (I && I())) && (E ? E(e.bind(null, t, n)) : e(t, n));
              })
            : O.start(E);
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
