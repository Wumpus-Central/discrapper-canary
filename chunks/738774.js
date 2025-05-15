n.d(t, {
    Ol: () => l,
    Q6: () => c,
    cu: () => u,
    m8: () => d,
    uq: () => s
});
var r = n(289393),
    i = n(430824),
    a = n(308636),
    o = n(981631);
function s(e) {
    return null != e && e.includes(a.o.NEW_PURCHASES_DISABLED);
}
function l(e) {
    var t;
    if (null == e) return !1;
    let n = r.Z.getMonetizationRestrictionsFetchState(e),
        a = r.Z.getMonetizationRestrictions(e),
        l = i.Z.getGuild(e);
    return n === r.M.FETCHED ? s(a) : null == (t = null == l ? void 0 : l.hasFeature(o.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || t;
}
function c(e) {
    return null != e && e.includes(a.o.SETTINGS_READ_ONLY);
}
function u(e) {
    var t;
    if (null == e) return !1;
    let n = r.Z.getMonetizationRestrictionsFetchState(e),
        a = r.Z.getMonetizationRestrictions(e),
        s = i.Z.getGuild(e);
    return n === r.M.FETCHED ? c(a) : null == (t = null == s ? void 0 : s.hasFeature(o.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || t;
}
function d(e) {
    return null != e && e.includes(a.o.REAPPLICATION_DISABLED);
}
