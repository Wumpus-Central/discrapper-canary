A.d(e, { H: () => a, M: () => N });
var C,
    E = A(582128),
    r = A(688810),
    I = A(174459),
    _ = A(652215),
    a = (((C = {}).CLAIM = "claim"), (C.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (C.CANCEL = "cancel"), C);
function N(t) {
    let { analyticsLocations: e } = (0, r.Ay)();
    return E.useCallback(
        (A, C) => {
            I.default.track(_.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: t,
                cta_type: A,
                url: C ?? null,
                location_stack: e,
            });
        },
        [t, e],
    );
}
