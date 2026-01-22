n.d(t, {
    Eg: () => i,
    JN: () => s,
    kT: () => a,
});
var r = n(384684);

function i(e, t) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == t) return !1;
    let n = r.A.getSubscriptionRoles(t);
    return e.roles.some((e) => n.has(e));
}

function a(e) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    let t = r.A.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => t.has(e));
}

function s(e, t) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    if (a(e)) {
        let n = r.A.getUserSubscriptionRoles(e.guildId),
            i = e.roles.some((e) => n.has(e)),
            a = t === e.guildId && r.A.getUserIsAdmin(e.guildId);
        if (!(i || a)) return !0;
    }
    return !1;
}
