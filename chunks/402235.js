n.d(t, {
    ZP: () => l,
    yH: () => c,
    zI: () => u
});
var r = n(442837),
    i = n(430824),
    a = n(232062),
    o = n(944888),
    s = n(981631);
function l(e, t) {
    let n = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return null != t && t.hasFeature(s.oNc.ENHANCED_ROLE_COLORS);
        }),
        a = (0, o.ZP)(null != e ? e : void 0, null != t ? t : void 0);
    return n || a;
}
function c(e, t) {
    let n = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return null != t && t.hasFeature(s.oNc.ENHANCED_ROLE_COLORS);
        }),
        l = (0, a.W)(e, 'useHasEnhancedRoleColorsForRole') && null != t && (0, o.YB)(t);
    return n || l;
}
function u(e, t) {
    let n = i.Z.getGuild(e),
        r = null != n && n.hasFeature(s.oNc.ENHANCED_ROLE_COLORS),
        l = (0, a.Tq)(e, 'getHasEnhancedRoleColorsForRole') && (0, o.YB)(t);
    return r || l;
}
