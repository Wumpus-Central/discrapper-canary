n.d(t, { Z: () => u });
var a = n(442837),
    r = n(580747),
    i = n(594190),
    l = n(621853),
    s = n(594174),
    o = n(699955),
    c = n(692825),
    d = n(582113);
function u(e) {
    let { location: t } = e,
        n = (0, o.cZ)({ location: t }),
        u = (0, c.w)({ location: t }),
        m = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
        p = (0, a.e7)([l.Z], () => (null != m ? l.Z.getFirstWishlistId(m.id) : null)),
        h = (0, r.Z)("wishlist_user_profile_account_popout_upsell"),
        f = (0, a.e7)(
            [i.ZP],
            () =>
                i.ZP.getRunningGames().some((e) => null != e.id && d.RI.has(e.id) && i.ZP.isDetectionEnabled(e)) ||
                i.ZP.getGamesSeen(!1, !1).some((e) => null != e.id && d.RI.has(e.id)),
        );
    return (u && n && null == p && f) || h;
}
