n.d(t, {
    ZP: () => c,
    yH: () => u,
    zI: () => d
});
var r = n(442837),
    i = n(430824),
    a = n(232062),
    o = n(50101),
    s = n(944888),
    l = n(981631);
function c(e, t) {
    let n = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return null != t && t.hasFeature(l.oNc.ENHANCED_ROLE_COLORS);
        }),
        a = (0, s.ZP)(null != e ? e : void 0, null != t ? t : void 0);
    return ((0, o.Ek)(null != e ? e : void 0, 'useHasEnhancedRoleColors') && n) || a;
}
function u(e, t) {
    let n = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return null != t && t.hasFeature(l.oNc.ENHANCED_ROLE_COLORS);
        }),
        c = (0, a.W)(e, 'useHasEnhancedRoleColorsForRole') && null != t && (0, s.YB)(t);
    return ((0, o.gV)(e, 'useHasEnhancedRoleColorsForRole') && n) || c;
}
function d(e, t) {
    let n = i.Z.getGuild(e),
        r = null != n && n.hasFeature(l.oNc.ENHANCED_ROLE_COLORS),
        c = (0, a.Tq)(e, 'getHasEnhancedRoleColorsForRole') && (0, s.YB)(t);
    return ((0, o.gV)(e, 'getHasEnhancedRoleColorsForRole') && r) || c;
}
