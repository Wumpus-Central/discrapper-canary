n.d(t, {
    Ol: () => l,
    Q6: () => u,
    cu: () => c,
    m8: () => d,
    uq: () => o
});
var i = n(289393),
    r = n(430824),
    a = n(308636),
    s = n(981631);
function o(e) {
    return null != e && e.includes(a.o.NEW_PURCHASES_DISABLED);
}
function l(e) {
    var t;
    if (null == e) return !1;
    let n = i.Z.getMonetizationRestrictionsFetchState(e),
        a = i.Z.getMonetizationRestrictions(e),
        l = r.Z.getGuild(e);
    return n === i.M.FETCHED ? o(a) : null === (t = null == l ? void 0 : l.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t;
}
function u(e) {
    return null != e && e.includes(a.o.SETTINGS_READ_ONLY);
}
function c(e) {
    var t;
    if (null == e) return !1;
    let n = i.Z.getMonetizationRestrictionsFetchState(e),
        a = i.Z.getMonetizationRestrictions(e),
        o = r.Z.getGuild(e);
    return n === i.M.FETCHED ? u(a) : null === (t = null == o ? void 0 : o.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t;
}
function d(e) {
    return null != e && e.includes(a.o.REAPPLICATION_DISABLED);
}
