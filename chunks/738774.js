r.d(n, {
    Ol: function () {
        return u;
    },
    Q6: function () {
        return c;
    },
    cu: function () {
        return d;
    },
    m8: function () {
        return f;
    },
    uq: function () {
        return l;
    }
});
var i = r(289393),
    a = r(430824),
    o = r(308636),
    s = r(981631);
function l(e) {
    return null != e && e.includes(o.o.NEW_PURCHASES_DISABLED);
}
function u(e) {
    var n;
    if (null == e) return !1;
    let r = i.Z.getMonetizationRestrictionsFetchState(e),
        o = i.Z.getMonetizationRestrictions(e),
        u = a.Z.getGuild(e);
    return r === i.M.FETCHED ? l(o) : null === (n = null == u ? void 0 : u.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === n || n;
}
function c(e) {
    return null != e && e.includes(o.o.SETTINGS_READ_ONLY);
}
function d(e) {
    var n;
    if (null == e) return !1;
    let r = i.Z.getMonetizationRestrictionsFetchState(e),
        o = i.Z.getMonetizationRestrictions(e),
        l = a.Z.getGuild(e);
    return r === i.M.FETCHED ? c(o) : null === (n = null == l ? void 0 : l.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === n || n;
}
function f(e) {
    return null != e && e.includes(o.o.REAPPLICATION_DISABLED);
}
