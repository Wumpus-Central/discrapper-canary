"use strict";
n.d(t, { CR: () => h, RM: () => E, Wq: () => _, v5: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(308050),
    l = n(311907),
    u = n(775602),
    d = n(652215),
    c = n(979282);
function _(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: r, includeConvenienceGlow: i, animateGradient: s } = e,
        o = "username" === r,
        l = o && i,
        u = t?.primaryColor ?? d.TpD,
        _ = {
            "--custom-gradient-color-1": u,
            "--custom-gradient-color-2": t?.secondaryColor ?? u,
            "--custom-gradient-color-3": t?.tertiaryColor ?? u,
        },
        f = t?.tertiaryColor != null ? c.a7 : c.oD;
    return {
        gradientStyle: _,
        gradientClassname: a()(f, { [c.lC]: o, [c.FQ]: l, [c.Xy]: l && s, [c.yJ]: !n && "dot" === r, [c.q]: s && o }),
        gradientGlowClassname: a()(f, c.uk, { [c.lC]: o, [c.q]: s && o, [c.yb]: o && s }),
    };
}
function f(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: r, animateGradient: s } = e,
        a = (0, l.bG)([u.A], () => u.A.useReducedMotion);
    return i.useMemo(
        () => _({ colorStrings: t, useReducedMotion: a, roleStyle: n, includeConvenienceGlow: r, animateGradient: s }),
        [t, n, r, a, s],
    );
}
function E(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            s = i.length >= 2,
            a = i.length > 1 ? 100 / (i.length - 1) : 0,
            o = i.map((e, t) => (0, r.jsx)("stop", { offset: `${t * a}%`, style: { stopColor: e } }, t)),
            l = i.join("");
        return {
            hasGradient: s,
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
        let i = (0, o.A)(),
            s = [],
            l = 0;
        for (; null !== (n = i.exec(e)); )
            n.index > l && s.push(e.slice(l, n.index)),
                s.push((0, r.jsx)("span", { className: a()(c.Zg, t), children: n[0] }, `emoji${n.index}`)),
                (l = i.lastIndex);
        return l < e.length && s.push(e.slice(l)), s;
    }, [e, t]);
}
