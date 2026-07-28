t.d(r, { A: () => s, u: () => a });
var n = t(582128),
    l = t(509790),
    o = t(576709),
    i = t(375708);
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
    let { regionId: e, gameServerInstance: r, name: t, planId: n } = (0, l.bv)(),
        o = "" !== t && "" !== e && void 0 !== n;
    return null != r ? o && (r.name !== t || r.regionId !== e || r.planId !== n) : o;
}
