"use strict";
n.d(t, { CR: () => m, RM: () => h, Wq: () => c, v5: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(308050),
    l = n(17928),
    d = n(775602),
    _ = n(652215),
    u = n(979282);
function c(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: i, includeConvenienceGlow: r, animateGradient: s } = e,
        o = "username" === i,
        l = o && r,
        d = t?.primaryColor ?? _.TpD,
        c = {
            "--custom-gradient-color-1": d,
            "--custom-gradient-color-2": t?.secondaryColor ?? d,
            "--custom-gradient-color-3": t?.tertiaryColor ?? d,
        },
        E = t?.tertiaryColor != null ? u.a7 : u.oD;
    return {
        gradientStyle: c,
        gradientClassname: a()(E, { [u.lC]: o, [u.FQ]: l, [u.Xy]: l && s, [u.yJ]: !n && "dot" === i, [u.q]: s && o }),
        gradientGlowClassname: a()(E, u.uk, { [u.lC]: o, [u.q]: s && o, [u.yb]: o && s }),
    };
}
function E(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: i, animateGradient: s } = e,
        a = (0, l.bG)([d.A], () => d.A.useReducedMotion);
    return r.useMemo(
        () => c({ colorStrings: t, useReducedMotion: a, roleStyle: n, includeConvenienceGlow: i, animateGradient: s }),
        [t, n, i, a, s],
    );
}
function h(e, t, n) {
    return r.useMemo(() => {
        let r = [e, t, n].filter((e) => null != e),
            s = r.length >= 2,
            a = r.length > 1 ? 100 / (r.length - 1) : 0,
            o = r.map((e, t) => (0, i.jsx)("stop", { offset: `${t * a}%`, style: { stopColor: e } }, t)),
            l = r.join("");
        return {
            hasGradient: s,
            stops: o,
            gradientId: `dotGradient-${l}`,
            animatedGradientId: `dotAnimatedGradient-${l}`,
        };
    }, [e, t, n]);
}
function m(e, t) {
    return r.useMemo(() => {
        let n;
        if (null == e) return e;
        let r = (0, o.A)(),
            s = [],
            l = 0;
        for (; null !== (n = r.exec(e)); )
            n.index > l && s.push(e.slice(l, n.index)),
                s.push((0, i.jsx)("span", { className: a()(u.Zg, t), children: n[0] }, `emoji${n.index}`)),
                (l = r.lastIndex);
        return l < e.length && s.push(e.slice(l)), s;
    }, [e, t]);
}
