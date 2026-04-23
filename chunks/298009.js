t.d(n, { A: () => o, u: () => d });
var l = t(64700),
    r = t(27023),
    a = t(576709),
    i = t(985018);
let s = ["/", "\\\\"];
function d(e) {
    let n = l.useMemo(() => s.some((n) => (e ?? "").includes(n)), [e]);
    return {
        isValid: !n,
        errors: {
            name: n ? i.intl.formatToPlainString(a.default.jYZD44, { forbiddenCharacters: s.join(", ") }) : void 0,
        },
    };
}
function o() {
    let { regionId: e, gameServerInstance: n, name: t, planId: l } = (0, r.bv)(),
        a = "" !== t && "" !== e && void 0 !== l;
    return null != n ? a && (n.name !== t || n.regionId !== e || n.planId !== l) : a;
}
