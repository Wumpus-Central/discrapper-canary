i.d(t, { G: () => n });
var e = i(17928),
    r = i(587895),
    o = i(212534),
    p = i(841595);
function n(a) {
    return (0, e.bG)(
        [r.A, p.A, o.A],
        () =>
            r.A.getApplication(a)?.storefront_available ??
            p.A.getUserProfile(a)?.application?.storefront_available ??
            o.A.getApplication(a)?.storefront_available ??
            !1,
        [a],
    );
}
