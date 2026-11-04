var i = n(384684);
function r(e) {
    if (e?.roles == null || 0 === e.roles.length || null == e.guildId) return !1;
    let t = i.A.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => t.has(e));
}
n.d(
    t,
    {},
    {
        Eg: function (e, t) {
            if (e?.roles == null || 0 === e.roles.length || null == t) return !1;
            let n = i.A.getSubscriptionRoles(t);
            return e.roles.some((e) => n.has(e));
        },
        JN: function (e, t) {
            if (e?.roles == null || 0 === e.roles.length || null == e.guildId) return !1;
            if (r(e)) {
                let n = i.A.getUserSubscriptionRoles(e.guildId),
                    r = e.roles.some((e) => n.has(e)),
                    a = t === e.guildId && i.A.getUserIsAdmin(e.guildId);
                if (!(r || a)) return !0;
            }
            return !1;
        },
        kT: r,
    },
);
