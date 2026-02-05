n.d(t, { A: () => c, u: () => d });
var l = n(64700),
    r = n(27023),
    i = n(294726),
    s = n(985018);
let a = ["/", "\\\\"];
function d(e) {
    let t = l.useMemo(() => a.some((t) => (e ?? "").includes(t)), [e]);
    return {
        isValid: !t,
        errors: {
            name: t ? s.intl.formatToPlainString(i.default.jYZD44, { forbiddenCharacters: a.join(", ") }) : void 0,
        },
    };
}
function c() {
    let { regionId: e, gameServerInstance: t, name: n, planId: l } = (0, r.bv)(),
        i = "" !== n && "" !== e && void 0 !== l;
    return null != t ? i && (t.name !== n || t.regionId !== e || t.planId !== l) : i;
}
