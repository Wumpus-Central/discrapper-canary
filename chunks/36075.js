n(321073);
var r = n(477900),
    o = n(582128),
    l = n(503698),
    i = n.n(l),
    s = n(308050),
    a = n(855986),
    u = n(775602),
    d = n(652215),
    c = n(420667);
function p(e) {
    let { colorStrings: t, useReducedMotion: n, roleStyle: r, includeConvenienceGlow: o, animateGradient: l } = e,
        s = "username" === r,
        a = s && o,
        u = t?.primaryColor ?? d.TpD,
        p = {
            "--custom-gradient-color-1": u,
            "--custom-gradient-color-2": t?.secondaryColor ?? u,
            "--custom-gradient-color-3": t?.tertiaryColor ?? u,
        },
        m = t?.tertiaryColor != null ? c.a7 : c.oD;
    return {
        gradientStyle: p,
        gradientClassname: i()(m, { [c.lC]: s, [c.FQ]: a, [c.Xy]: a && l, [c.yJ]: !n && "dot" === r, [c.q]: l && s }),
        gradientGlowClassname: i()(m, c.uk, { [c.lC]: s, [c.q]: l && s, [c.yb]: s && l }),
    };
}
n.d(
    t,
    {},
    {
        CR: function (e, t) {
            return o.useMemo(() => {
                let n;
                if (null == e) return e;
                let o = (0, s.A)(),
                    l = [],
                    a = 0;
                for (; null !== (n = o.exec(e));)
                    (n.index > a && l.push(e.slice(a, n.index)),
                        l.push((0, r.jsx)("span", { className: i()(c.Zg, t), children: n[0] }, `emoji${n.index}`)),
                        (a = o.lastIndex));
                return (a < e.length && l.push(e.slice(a)), l);
            }, [e, t]);
        },
        RM: function (e, t, n) {
            return o.useMemo(() => {
                let o = [e, t, n].filter((e) => null != e),
                    l = o.length >= 2,
                    i = o.length > 1 ? 100 / (o.length - 1) : 0,
                    s = o.map((e, t) => (0, r.jsx)("stop", { offset: `${t * i}%`, style: { stopColor: e } }, t)),
                    a = o.join("");
                return {
                    hasGradient: l,
                    stops: s,
                    gradientId: `dotGradient-${a}`,
                    animatedGradientId: `dotAnimatedGradient-${a}`,
                };
            }, [e, t, n]);
        },
        Wq: p,
        v5: function (e) {
            let { colorStrings: t, roleStyle: n, includeConvenienceGlow: r, animateGradient: l } = e,
                i = (0, a.bG)([u.Ay], () => u.Ay.useReducedMotion);
            return o.useMemo(
                () =>
                    p({
                        colorStrings: t,
                        useReducedMotion: i,
                        roleStyle: n,
                        includeConvenienceGlow: r,
                        animateGradient: l,
                    }),
                [t, n, r, i, l],
            );
        },
    },
);
