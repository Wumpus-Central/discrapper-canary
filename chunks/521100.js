"use strict";
n.d(t, { v5: () => h, RM: () => p, Wq: () => f, CR: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s);
let o = String.raw,
    l = o`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
var u = n(17928),
    c = n(775602),
    d = n(652215),
    _ = n(979282);
function f(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: i, includeConvenienceGlow: r, animateGradient: s } = e,
        o = "username" === i,
        l = o && r,
        u = t?.primaryColor ?? d.TpD,
        c = {
            "--custom-gradient-color-1": u,
            "--custom-gradient-color-2": t?.secondaryColor ?? u,
            "--custom-gradient-color-3": t?.tertiaryColor ?? u,
        },
        f = t?.tertiaryColor != null ? _.a7 : _.oD;
    return {
        gradientStyle: c,
        gradientClassname: a()(f, { [_.lC]: o, [_.FQ]: l, [_.Xy]: l && s, [_.yJ]: !n && "dot" === i, [_.q]: s && o }),
        gradientGlowClassname: a()(f, _.uk, { [_.lC]: o, [_.q]: s && o, [_.yb]: o && s }),
    };
}
function h(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: i, animateGradient: s } = e,
        a = (0, u.bG)([c.A], () => c.A.useReducedMotion);
    return r.useMemo(
        () => f({ colorStrings: t, useReducedMotion: a, roleStyle: n, includeConvenienceGlow: i, animateGradient: s }),
        [t, n, i, a, s],
    );
}
function p(e, t, n) {
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
function E(e, t) {
    return r.useMemo(() => {
        let n;
        if (null == e) return e;
        let r = RegExp(o`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${l}(?:\u200D${l})*`, "gu"),
            s = [],
            u = 0;
        for (; null !== (n = r.exec(e)); )
            n.index > u && s.push(e.slice(u, n.index)),
                s.push((0, i.jsx)("span", { className: a()(_.Zg, t), children: n[0] }, `emoji${n.index}`)),
                (u = r.lastIndex);
        return u < e.length && s.push(e.slice(u)), s;
    }, [e, t]);
}
