n.d(t, {
    Ol: () => l,
    Q6: () => c,
    cu: () => u,
    m8: () => d,
    uq: () => s
});
var r = n(289393),
    i = n(430824),
    o = n(308636),
    a = n(981631);
function s(e) {
    return null != e && e.includes(o.o.NEW_PURCHASES_DISABLED);
}
function l(e) {
    var t;
    if (null == e) return !1;
    let n = r.Z.getMonetizationRestrictionsFetchState(e),
        o = r.Z.getMonetizationRestrictions(e),
        l = i.Z.getGuild(e);
    return n === r.M.FETCHED ? s(o) : null == (t = null == l ? void 0 : l.hasFeature(a.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || t;
}
function c(e) {
    return null != e && e.includes(o.o.SETTINGS_READ_ONLY);
}
function u(e) {
    var t;
    if (null == e) return !1;
    let n = r.Z.getMonetizationRestrictionsFetchState(e),
        o = r.Z.getMonetizationRestrictions(e),
        s = i.Z.getGuild(e);
    return n === r.M.FETCHED ? c(o) : null == (t = null == s ? void 0 : s.hasFeature(a.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || t;
}
function d(e) {
    return null != e && e.includes(o.o.REAPPLICATION_DISABLED);
}
