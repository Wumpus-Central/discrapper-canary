t.d(n, {
    Z: () => d,
    a: () => s,
});
var r = t(473749),
    i = t(343312),
    a = t(914820),
    l = t(388032);
let o = ["/", "\\\\"];
function s(e) {
    let n = r.useMemo(() => o.some((n) => (null != e ? e : "").includes(n)), [e]);
    return {
        isValid: !n,
        errors: {
            name: n ? l.intl.formatToPlainString(a.default.jYZD44, { forbiddenCharacters: o.join(", ") }) : void 0,
        },
    };
}
function d() {
    let { regionId: e, gameServerInstance: n, name: t, planId: r } = (0, i.JL)(),
        a = "" !== t && "" !== e && void 0 !== r;
    return null != n ? a && (n.name !== t || n.regionId !== e || n.planId !== r) : a;
}
