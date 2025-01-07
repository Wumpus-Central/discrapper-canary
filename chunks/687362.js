n.d(t, {
    ZP: function () {
        return u;
    },
    aJ: function () {
        return g;
    },
    vi: function () {
        return m;
    }
});
var i = n(704215),
    r = n(605236),
    a = n(391110),
    s = n(75077),
    l = n(595878),
    o = n(314684),
    c = n(735825),
    d = n(388032);
function u() {
    let e = (0, o.yQ)(),
        t = (0, l.cG)({ location: a.MQ.HOME }),
        n = (0, l.AK)({ location: a.MQ.HOME }),
        r = (0, l.mK)({ location: a.MQ.HOME });
    if (null != e && e.tenureRewardType === c.nW.SERVER_BOOST && !!t)
        return {
            title: (0, s.k3)(e.nitroTenureStatus),
            subtitle: (0, s.vZ)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId, r && !n),
            description: (0, s.BS)(e.nitroTenureStatus),
            ctaDescription: (0, s.t2)(e.nitroTenureStatus, e.redeemableInDays),
            pillText: e.nitroTenureStatus === c.EB.PENDING ? d.intl.string(d.t.jyYgZ2).toLocaleUpperCase() : void 0,
            dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? i.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
        };
}
function g() {
    let e = (0, o.yQ)(),
        t = (0, l.cG)({ location: a.MQ.HOME });
    if (null != e && e.tenureRewardType === c.nW.AVATAR_DECO && !!t)
        return {
            title: (0, s.Dp)(e.nitroTenureStatus),
            subtitle: (0, s.oo)(e.nitroTenureStatus),
            description: (0, s.Gw)(e.nitroTenureStatus),
            ctaDescription: (0, s.iG)(e.nitroTenureStatus, e.redeemableInDays),
            pillText: e.nitroTenureStatus === c.EB.PENDING || e.nitroTenureStatus === c.EB.REDEEMABLE ? d.intl.string(d.t.jyYgZ2).toLocaleUpperCase() : void 0,
            dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? i.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
        };
}
function m(e) {
    return (null == e ? void 0 : e.showNotification) === !0 && (0, o.rM)(e).some((e) => !(0, r.un)(e));
}
