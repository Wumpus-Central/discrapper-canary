n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(602733),
    o = n(176879),
    s = n(874139),
    l = n(120209),
    c = n(228168),
    u = n(388032);
function d(e) {
    let { user: t, onOpenProfile: n } = e,
        d = i.useCallback(() => {
            null == n || n({ section: c.oh.WISHLIST });
        }, [n]),
        { displayedWishlistItems: f, defaultWishlistId: p } = (0, o.QX)({
            user: t,
            numItems: o.fA,
            source: a.Yw.POPOUT,
            location: "User Profile Popout",
        });
    return null == f || 0 === f.length
        ? null
        : (0, r.jsx)(s.Z, {
              profileOwner: t,
              wishlistItems: f,
              wishlistId: p,
              onClick: d,
              cardSize: l.H.SMALL,
              title: u.intl.string(u.t.BCi1gT),
          });
}
