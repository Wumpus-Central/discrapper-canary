n.d(e, { H: () => a, M: () => E });
var i,
    A = n(582128),
    d = n(688810),
    r = n(174459),
    C = n(652215),
    a = (((i = {}).CLAIM = "claim"), (i.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (i.CANCEL = "cancel"), i);
function E(t) {
    let { analyticsLocations: e } = (0, d.Ay)();
    return A.useCallback(
        (n, i) => {
            r.default.track(C.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: t,
                cta_type: n,
                url: i ?? null,
                location_stack: e,
            });
        },
        [t, e],
    );
}
