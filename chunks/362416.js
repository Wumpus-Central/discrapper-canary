n.d(t, { Z: () => u });
var a = n(442837),
    r = n(580747),
    i = n(621853),
    l = n(594174),
    s = n(699955),
    o = n(692825),
    c = n(812797),
    d = n(582113);
function u(e) {
    let { location: t } = e,
        n = (0, s.cZ)({ location: t }),
        u = (0, o.w)({ location: t }),
        m = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
        p = (0, a.e7)([i.Z], () => (null != m ? i.Z.getFirstWishlistId(m.id) : null)),
        h = (0, r.Z)("wishlist_user_profile_account_popout_upsell"),
        f = (0, c.fR)({ gameIds: d.RI }),
        x = (0, c.Bz)({ gameIds: d.RI });
    return (u && n && null == p && (x || f)) || h;
}
