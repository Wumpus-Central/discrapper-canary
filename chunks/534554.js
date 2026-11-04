var r = n(56681),
    l = n(191850),
    i = n(792996);
let a = { simple: l.default.Mqb8mc, balanced: l.default.zCZfA6, complex: l.default["8l2atm"] };
function s(e, t, n) {
    return e.models?.[n] ?? t?.[n]?.model ?? null;
}
function o(e) {
    return e.main.length > 0;
}
n.d(
    t,
    {},
    {
        CM: function (e) {
            let { fast: t, ...n } = e;
            return !0 === t ? { ...n, fast: !0 } : n;
        },
        D0: function (e) {
            let t = (0, r.bF)(e);
            return null != t ? i.intl.string(t) : e;
        },
        FC: function (e) {
            return o(e) ? l.default.eGqPbV : l.default.qSViP4;
        },
        Id: s,
        Tc: function (e) {
            return i.intl.string(a[e]);
        },
        gz: function (e, t, n) {
            let r = s(e, t, e.tier);
            return null != r && n.find((e) => e.id === r)?.supports_fast === !0;
        },
        hl: o,
        j6: function (e, t) {
            if (t === e.tier) return e;
            let { thinking: n, ...r } = e;
            return { ...r, tier: t };
        },
        t7: function (e, t, n) {
            return { ...e, models: { ...e.models, [t]: n } };
        },
    },
);
