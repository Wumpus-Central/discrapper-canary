n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(602733),
    o = n(176879),
    s = n(874139),
    l = n(120209),
    c = n(228168);
function u(e) {
    let { user: t, onOpenProfile: n } = e,
        u = i.useCallback(() => {
            null == n || n({ tabSection: c.oh.WISHLIST });
        }, [n]),
        {
            displayedWishlistItems: d,
            defaultWishlistId: f,
            title: p,
        } = (0, o.QX)({
            user: t,
            numItems: o.fA,
            source: a.bd.POPOUT,
            location: "User Profile Popout",
        });
    return null == d || 0 === d.length
        ? null
        : (0, r.jsx)(s.Z, {
              profileOwner: t,
              wishlistItems: d,
              wishlistId: f,
              onClick: u,
              cardSize: l.H.SMALL,
              title: p,
          });
}
