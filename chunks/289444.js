t.d(r, { l: () => s, u: () => a });
var n = t(582128),
    l = t(608266),
    o = t(135570),
    i = t(105292);
let u = ["/", "\\\\"];
function a(e) {
    let r = n.useMemo(() => u.some((r) => (e ?? "").includes(r)), [e]);
    return {
        isValid: !r,
        errors: {
            name: r ? i.intl.formatToPlainString(o.default.jYZD44, { forbiddenCharacters: u.join(", ") }) : void 0,
        },
    };
}
function s() {
    let { regionId: e, gameServerInstance: r, name: t, planId: n } = (0, l.bv)();
    if (null == r) return "" !== t && "" !== e && void 0 !== n;
    let o = r.name !== t || r.planId !== n;
    return "" !== t && void 0 !== n && o;
}
