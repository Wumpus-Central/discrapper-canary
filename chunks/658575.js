t.d(n, { G: () => o });
var i = t(17928),
    a = t(587895),
    l = t(212534),
    c = t(321191);
function o(e) {
    return (0, i.bG)(
        [a.A, c.A, l.A],
        () =>
            a.A.getApplication(e)?.storefront_available ??
            c.A.getUserProfile(e)?.application?.storefront_available ??
            l.A.getApplication(e)?.storefront_available ??
            !1,
        [e],
    );
}
