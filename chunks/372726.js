"use strict";
s.d(t, { F: () => c });
var a = s(627968),
    r = s(64700),
    n = s(231723),
    i = s(200330),
    l = s(321987),
    o = s(628103);
function c(e) {
    let { data: t, onDenied: s, onError: c, onSuccess: d } = e,
        u = (0, o.n)(s, c, d),
        h = r.useCallback((e) => u(t, e), [t, u]);
    return (0, a.jsx)(l.$, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: n.ip.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: h,
        }),
    });
}
