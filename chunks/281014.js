t.d(n, {
    Z: () => d,
    a: () => s,
});
var r = t(647438),
    i = t(343312),
    l = t(269794),
    a = t(388032);
let o = ["/", "\\\\"];
function s(e) {
    let n = r.useMemo(() => o.some((n) => (null != e ? e : "").includes(n)), [e]);
    return {
        isValid: !n,
        errors: {
            name: n ? a.intl.formatToPlainString(l.default.jYZD44, { forbiddenCharacters: o.join(", ") }) : void 0,
        },
    };
}
function d() {
    let { regionId: e, gameServerInstance: n, name: t, planId: r } = (0, i.JL)(),
        l = "" !== t && "" !== e && void 0 !== r;
    return null != n ? l && (n.name !== t || n.regionId !== e || n.planId !== r) : l;
}
