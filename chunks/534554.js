var l = n(56681),
    r = n(392208),
    i = n(191850),
    a = n(792996);
let s = { simple: i.default.Mqb8mc, balanced: i.default.zCZfA6, complex: i.default["8l2atm"] };
function o(e, t, n) {
    return e.models?.[n] ?? t?.[n]?.model ?? null;
}
function u(e) {
    return "complex" !== e;
}
let d = r.P.flatMap((e, t) => (u(e) ? [] : [t]));
n.d(
    t,
    {},
    {
        CM: function (e) {
            let { fast: t, ...n } = e;
            return !0 === t ? { ...n, fast: !0 } : n;
        },
        Id: o,
        Tc: function (e) {
            return a.intl.string(s[e]);
        },
        bt: d,
        g_: u,
        gz: function (e, t, n) {
            let l = o(e, t, e.tier);
            return null != l && n.find((e) => e.id === l)?.supports_fast === !0;
        },
        hl: function (e) {
            return e.main.length > 0;
        },
        j6: function (e, t) {
            if (t === e.tier) return e;
            let { thinking: n, ...l } = e;
            return { ...l, tier: t };
        },
        pL: function (e) {
            let t,
                n = null != (t = (0, l.bF)(e)) ? a.intl.string(t) : e;
            return u(e) ? n : `${n}, ${a.intl.string(i.default["17yEQw"])}`;
        },
        t7: function (e, t, n) {
            return { ...e, models: { ...e.models, [t]: n } };
        },
    },
);
