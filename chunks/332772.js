t.d(i, { T: () => _ });
var r = t(64700),
    a = t(17928),
    n = t(841595),
    o = t(576622),
    s = t(495544),
    l = t(33190),
    c = t(594832);
function _(e) {
    let { location: i, source: t } = e,
        _ = (0, l.H)(i),
        { currentUserId: u, wishlistId: d } = (0, a.cf)([s.default, n.A], () => {
            let e = s.default.getId(),
                i = n.A.getFirstWishlistId(e);
            return { currentUserId: e, wishlistId: i };
        });
    r.useEffect(() => {
        _ && null == d && (0, o.A)(u);
    }, [u, _, d]),
        (0, c.fw)({ wishlistId: _ ? d : null, userId: u, source: t });
}
