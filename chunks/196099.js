A.d(e, { H: () => _, M: () => l });
var r,
    I = A(64700),
    a = A(688810),
    C = A(174459),
    E = A(652215),
    _ = (((r = {}).CLAIM = "claim"), (r.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (r.CANCEL = "cancel"), r);
function l(t) {
    let { analyticsLocations: e } = (0, a.Ay)();
    return I.useCallback(
        (A, r) => {
            C.default.track(E.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: t,
                cta_type: A,
                url: r ?? null,
                location_stack: e,
            });
        },
        [t, e],
    );
}
