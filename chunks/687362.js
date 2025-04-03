n.d(t, {
    a: () => u,
    v: () => m
});
var r = n(704215),
    i = n(605236),
    s = n(391110),
    a = n(75077),
    l = n(595878),
    o = n(314684),
    c = n(735825),
    d = n(388032);
function u() {
    let e = (0, o.Er)(),
        t = (0, l.cG)({ location: s.MQ.HOME });
    if (null != e && e.tenureRewardType === c.nW.AVATAR_DECO && t)
        return {
            title: (0, a.Dp)(e.nitroTenureStatus),
            subtitle: (0, a.oo)(e.nitroTenureStatus),
            description: (0, a.Gw)(e.nitroTenureStatus),
            ctaDescription: (0, a.iG)(e.nitroTenureStatus, e.redeemableInDays),
            pillText: e.nitroTenureStatus === c.EB.PENDING || e.nitroTenureStatus === c.EB.REDEEMABLE ? d.NW.string(d.t.jyYgZ2).toLocaleUpperCase() : void 0,
            dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? r.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
        };
}
function m(e) {
    return (null == e ? void 0 : e.showNotification) === !0 && (0, o.rM)(e).some((e) => !(0, i.un)(e));
}
