n.d(t, {
    ZP: () => u,
    aJ: () => m,
    vi: () => g
});
var i = n(704215),
    s = n(605236),
    r = n(391110),
    l = n(75077),
    a = n(595878),
    o = n(314684),
    c = n(735825),
    d = n(388032);
function u() {
    let e = (0, o.yQ)(),
        t = (0, a.cG)({ location: r.MQ.HOME }),
        n = (0, a.AK)({ location: r.MQ.HOME }),
        s = (0, a.mK)({ location: r.MQ.HOME });
    if (null != e && e.tenureRewardType === c.nW.SERVER_BOOST && t)
        return {
            title: (0, l.k3)(e.nitroTenureStatus),
            subtitle: (0, l.vZ)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId, s && !n),
            description: (0, l.BS)(e.nitroTenureStatus),
            ctaDescription: (0, l.t2)(e.nitroTenureStatus, e.redeemableInDays),
            pillText: e.nitroTenureStatus === c.EB.PENDING ? d.intl.string(d.t.jyYgZ2).toLocaleUpperCase() : void 0,
            dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? i.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
        };
}
function m() {
    let e = (0, o.yQ)(),
        t = (0, a.cG)({ location: r.MQ.HOME });
    if (null != e && e.tenureRewardType === c.nW.AVATAR_DECO && t)
        return {
            title: (0, l.Dp)(e.nitroTenureStatus),
            subtitle: (0, l.oo)(e.nitroTenureStatus),
            description: (0, l.Gw)(e.nitroTenureStatus),
            ctaDescription: (0, l.iG)(e.nitroTenureStatus, e.redeemableInDays),
            pillText: e.nitroTenureStatus === c.EB.PENDING || e.nitroTenureStatus === c.EB.REDEEMABLE ? d.intl.string(d.t.jyYgZ2).toLocaleUpperCase() : void 0,
            dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? i.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
        };
}
function g(e) {
    return (null == e ? void 0 : e.showNotification) === !0 && (0, o.rM)(e).some((e) => !(0, s.un)(e));
}
