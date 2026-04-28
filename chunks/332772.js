e.d(s, { T: () => f });
var u = e(64700),
    d = e(17928),
    i = e(841595),
    l = e(576622),
    c = e(495544),
    r = e(33190),
    a = e(594832);
function f(t) {
    let { location: s, source: e } = t,
        f = (0, r.H)(s),
        { currentUserId: h, wishlistId: n } = (0, d.cf)([c.default, i.A], () => {
            let t = c.default.getId(),
                s = i.A.getFirstWishlistId(t);
            return { currentUserId: t, wishlistId: s };
        });
    u.useEffect(() => {
        f && null == n && (0, l.A)(h);
    }, [h, f, n]),
        (0, a.fw)({ wishlistId: f ? n : null, userId: h, source: e });
}
