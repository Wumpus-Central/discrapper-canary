n.d(t, { G: () => r });
var i = n(17928),
    l = n(587895),
    a = n(212534),
    s = n(841595);
function r(e) {
    return (0, i.bG)(
        [l.A, s.A, a.A],
        () =>
            l.A.getApplication(e)?.storefront_available ??
            s.A.getUserProfile(e)?.application?.storefront_available ??
            a.A.getApplication(e)?.storefront_available ??
            !1,
        [e],
    );
}
