"use strict";
n.d(t, { CR: () => p, RM: () => f, Wq: () => _, v5: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(308050),
    l = n(17928),
    u = n(775602),
    c = n(652215),
    d = n(979282);
function _(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: i, includeConvenienceGlow: r, animateGradient: s } = e,
        o = "username" === i,
        l = o && r,
        u = t?.primaryColor ?? c.TpD,
        _ = {
            "--custom-gradient-color-1": u,
            "--custom-gradient-color-2": t?.secondaryColor ?? u,
            "--custom-gradient-color-3": t?.tertiaryColor ?? u,
        },
        h = t?.tertiaryColor != null ? d.a7 : d.oD;
    return {
        gradientStyle: _,
        gradientClassname: a()(h, { [d.lC]: o, [d.FQ]: l, [d.Xy]: l && s, [d.yJ]: !n && "dot" === i, [d.q]: s && o }),
        gradientGlowClassname: a()(h, d.uk, { [d.lC]: o, [d.q]: s && o, [d.yb]: o && s }),
    };
}
function h(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: i, animateGradient: s } = e,
        a = (0, l.bG)([u.Ay], () => u.Ay.useReducedMotion);
    return r.useMemo(
        () => _({ colorStrings: t, useReducedMotion: a, roleStyle: n, includeConvenienceGlow: i, animateGradient: s }),
        [t, n, i, a, s],
    );
}
function f(e, t, n) {
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
function p(e, t) {
    return r.useMemo(() => {
        let n;
        if (null == e) return e;
        let r = (0, o.A)(),
            s = [],
            l = 0;
        for (; null !== (n = r.exec(e)); )
            n.index > l && s.push(e.slice(l, n.index)),
                s.push((0, i.jsx)("span", { className: a()(d.Zg, t), children: n[0] }, `emoji${n.index}`)),
                (l = r.lastIndex);
        return l < e.length && s.push(e.slice(l)), s;
    }, [e, t]);
}
