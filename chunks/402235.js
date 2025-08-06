n.d(t, {
    ZP: () => l,
    yH: () => c,
    zI: () => u
});
var r = n(442837),
    i = n(430824),
    o = n(232062),
    a = n(944888),
    s = n(981631);
function l(e, t) {
    let n = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return null != t && t.features.has(s.oNc.ENHANCED_ROLE_COLORS);
        }),
        o = (0, a.ZP)(null != e ? e : void 0, null != t ? t : void 0);
    return n || o;
}
function c(e, t) {
    let n = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return null != t && t.features.has(s.oNc.ENHANCED_ROLE_COLORS);
        }),
        l = (0, o.W)(e, 'useHasEnhancedRoleColorsForRole') && null != t && (0, a.YB)(t);
    return n || l;
}
function u(e, t) {
    let n = i.Z.getGuild(e),
        r = null != n && n.features.has(s.oNc.ENHANCED_ROLE_COLORS),
        l = (0, o.Tq)(e, 'getHasEnhancedRoleColorsForRole') && (0, a.YB)(t);
    return r || l;
}
