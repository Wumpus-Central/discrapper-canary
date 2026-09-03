n.d(t, { CR: () => h, RM: () => A, Wq: () => _, v5: () => E }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(308050),
    o = n(17928),
    d = n(775602),
    c = n(652215),
    u = n(420667);
function _(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: i, includeConvenienceGlow: r, animateGradient: a } = e,
        l = "username" === i,
        o = l && r,
        d = t?.primaryColor ?? c.TpD,
        _ = {
            "--custom-gradient-color-1": d,
            "--custom-gradient-color-2": t?.secondaryColor ?? d,
            "--custom-gradient-color-3": t?.tertiaryColor ?? d,
        },
        E = t?.tertiaryColor != null ? u.a7 : u.oD;
    return {
        gradientStyle: _,
        gradientClassname: s()(E, { [u.lC]: l, [u.FQ]: o, [u.Xy]: o && a, [u.yJ]: !n && "dot" === i, [u.q]: a && l }),
        gradientGlowClassname: s()(E, u.uk, { [u.lC]: l, [u.q]: a && l, [u.yb]: l && a }),
    };
}
function E(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: i, animateGradient: a } = e,
        s = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion);
    return r.useMemo(
        () => _({ colorStrings: t, useReducedMotion: s, roleStyle: n, includeConvenienceGlow: i, animateGradient: a }),
        [t, n, i, s, a],
    );
}
function A(e, t, n) {
    return r.useMemo(() => {
        let r = [e, t, n].filter((e) => null != e),
            a = r.length >= 2,
            s = r.length > 1 ? 100 / (r.length - 1) : 0,
            l = r.map((e, t) => (0, i.jsx)("stop", { offset: `${t * s}%`, style: { stopColor: e } }, t)),
            o = r.join("");
        return {
            hasGradient: a,
            stops: l,
            gradientId: `dotGradient-${o}`,
            animatedGradientId: `dotAnimatedGradient-${o}`,
        };
    }, [e, t, n]);
}
function h(e, t) {
    return r.useMemo(() => {
        let n;
        if (null == e) return e;
        let r = (0, l.A)(),
            a = [],
            o = 0;
        for (; null !== (n = r.exec(e)); )
            n.index > o && a.push(e.slice(o, n.index)),
                a.push((0, i.jsx)("span", { className: s()(u.Zg, t), children: n[0] }, `emoji${n.index}`)),
                (o = r.lastIndex);
        return o < e.length && a.push(e.slice(o)), a;
    }, [e, t]);
}
