"use strict";
n.d(t, { G: () => o });
var r = n(311907),
    i = n(587895),
    a = n(212534),
    s = n(622543);
function o(e) {
    return (0, r.bG)(
        [i.A, s.A, a.A],
        () =>
            i.A.getApplication(e)?.storefront_available ??
            s.A.getUserProfile(e)?.application?.storefront_available ??
            a.A.getApplication(e)?.storefront_available ??
            !1,
        [e],
    );
}
