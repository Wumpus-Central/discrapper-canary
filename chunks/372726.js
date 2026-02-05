"use strict";
a.d(t, { F: () => c });
var s = a(627968),
    r = a(64700),
    n = a(397927),
    i = a(200330),
    l = a(321987),
    o = a(628103);
function c(e) {
    let { data: t, onDenied: a, onError: c, onSuccess: d } = e,
        u = (0, o.n)(a, c, d),
        h = r.useCallback((e) => u(t, e), [t, u]);
    return (0, s.jsx)(l.$, {
        removeChildWrapper: !0,
        children: (0, s.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: n.ip4.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: h,
        }),
    });
}
