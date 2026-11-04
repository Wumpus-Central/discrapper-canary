var r = t(806335),
    n = t(677654),
    i = t(825503),
    o = t(582128);
function l(e, a) {
    if (e === a) return !0;
    let t = Object.keys(e),
        r = Object.keys(a);
    if (t.length !== r.length) return !1;
    for (let r of t) if (a[r] !== e[r]) return !1;
    return !0;
}
t.d(
    a,
    {},
    {
        i: function (e) {
            e = (0, r.k)(e ?? {}, l);
            let { locale: a } = (0, n.Y)();
            return (0, o.useMemo)(() => new (0, i.p)(a, e), [a, e]);
        },
    },
);
