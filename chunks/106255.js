r.d(n, {
    C3: function () {
        return m;
    },
    Cl: function () {
        return _;
    },
    GT: function () {
        return v;
    },
    MR: function () {
        return h;
    },
    Wb: function () {
        return E;
    },
    Xs: function () {
        return y;
    },
    YE: function () {
        return d;
    },
    _k: function () {
        return c;
    },
    kG: function () {
        return p;
    },
    km: function () {
        return f;
    },
    u7: function () {
        return g;
    }
}),
    r(580130);
var i = r(55563),
    a = r(513785),
    o = r(474936),
    s = r(735825),
    l = r(981631),
    u = r(388032);
function c(e) {
    return e.type === l.qc2.PURCHASE && e.skuId === o.Si.TIER_2 && e.applicationId === o.CL && e.isValid(null, i.Z);
}
function d(e) {
    return e.type === l.qc2.PREMIUM_PURCHASE && s.uv.has(e.skuId) && e.applicationId === o.CL && e.isValid(null, i.Z);
}
function f(e) {
    return e.type === l.qc2.FREE_PURCHASE && e.skuId === s.qY && e.applicationId === l.XAJ && e.isValid(null, i.Z);
}
function p(e) {
    if (null != e) return Array.from(e).find((e) => c(e));
}
function h(e, n) {
    if (null != n) return Array.from(n).find((n) => n.type === l.qc2.PREMIUM_PURCHASE && e.includes(n.skuId) && n.applicationId === o.CL && n.isValid(null, i.Z));
}
function _(e, n) {
    if (null != n) return Array.from(n).find((n) => n.type === l.qc2.FREE_PURCHASE && n.skuId === e && n.applicationId === l.XAJ && n.isValid(null, i.Z));
}
function m(e, n) {
    var r;
    return null != n && (null === (r = n.avatarDecoration) || void 0 === r ? void 0 : r.skuId) === e;
}
function g(e) {
    return null != e.redeemable_at && null != e.next_tenure_reward_id;
}
function E(e) {
    switch (e) {
        case s.EB.PENDING:
            return u.intl.string(u.t.jyYgZ2);
        case s.EB.REDEEMABLE:
            return u.intl.string(u.t['+zx47e']);
        case s.EB.REDEEMED:
        default:
            return null;
    }
}
function v() {
    var e, n;
    return null !== (n = null !== (e = a.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_AVATAR_DECO_1_MONTH)) && void 0 !== e ? e : a.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== n ? n : a.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_3_MONTHS);
}
function y(e) {
    return e === s.Ft.FREE_AVATAR_DECO_1_MONTH ? s.nW.AVATAR_DECO : e === s.Ft.FREE_GUILD_BOOST_1_MONTH || e === s.Ft.FREE_GUILD_BOOST_3_MONTHS ? s.nW.SERVER_BOOST : void 0;
}
