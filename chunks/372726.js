r.d(t, { F: () => o });
var a = r(627968),
    n = r(64700),
    s = r(397927),
    i = r(200330),
    l = r(321987),
    c = r(628103);
function o(e) {
    let { data: t, onDenied: r, onError: o, onSuccess: d } = e,
        u = (0, c.n)(r, o, d),
        f = n.useCallback((e) => u(t, e), [t, u]);
    return (0, a.jsx)(l.$, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: s.ip4.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f,
        }),
    });
}
