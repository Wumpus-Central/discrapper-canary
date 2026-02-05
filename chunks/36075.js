"use strict";
n.d(t, { CR: () => h, RM: () => p, Wq: () => _, v5: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(775602),
    u = n(652215),
    c = n(191017);
let d = /\p{Extended_Pictographic}/gu;
function _(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: r, includeConvenienceGlow: i, animateGradient: a } = e,
        o = "username" === r,
        l = "dot" === r,
        d = o && i,
        _ = t?.primaryColor ?? u.TpD,
        f = {
            "--custom-gradient-color-1": _,
            "--custom-gradient-color-2": t?.secondaryColor ?? _,
            "--custom-gradient-color-3": t?.tertiaryColor ?? _,
        },
        p = t?.tertiaryColor != null ? c.a7 : c.oD;
    return {
        gradientStyle: f,
        gradientClassname: s()(p, { [c.lC]: o, [c.FQ]: d, [c.Xy]: d && a, [c.yJ]: !n && l, [c.q]: a && o }),
        gradientGlowClassname: s()(p, c.uk, { [c.lC]: o, [c.q]: a && o, [c.yb]: o && a }),
    };
}
function f(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: r, animateGradient: a } = e,
        s = (0, o.bG)([l.A], () => l.A.useReducedMotion);
    return i.useMemo(
        () => _({ colorStrings: t, useReducedMotion: s, roleStyle: n, includeConvenienceGlow: r, animateGradient: a }),
        [t, n, r, s, a],
    );
}
function p(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            a = i.length >= 2,
            s = i.length > 1 ? 100 / (i.length - 1) : 0,
            o = i.map((e, t) => (0, r.jsx)("stop", { offset: `${t * s}%`, style: { stopColor: e } }, t)),
            l = i.join("");
        return {
            hasGradient: a,
            stops: o,
            gradientId: `dotGradient-${l}`,
            animatedGradientId: `dotAnimatedGradient-${l}`,
        };
    }, [e, t, n]);
}
function h(e, t) {
    return i.useMemo(() => {
        let n;
        if (null == e) return e;
        let i = new RegExp(d),
            a = [],
            o = 0;
        for (; null !== (n = i.exec(e)); )
            n.index > o && a.push(e.slice(o, n.index)),
                a.push((0, r.jsx)("span", { className: s()(c.Zg, t), children: n[0] }, `emoji${n.index}`)),
                (o = i.lastIndex);
        return o < e.length && a.push(e.slice(o)), a;
    }, [e, t]);
}
