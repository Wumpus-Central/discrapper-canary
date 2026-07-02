n.d(t, { H: () => c, M: () => o });
var i,
    a = n(64700),
    s = n(688810),
    r = n(174459),
    l = n(652215),
    c = (((i = {}).CLAIM = "claim"), (i.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (i.CANCEL = "cancel"), i);
function o(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return a.useCallback(
        (n, i) => {
            r.default.track(l.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: e,
                cta_type: n,
                url: i ?? null,
                location_stack: t,
            });
        },
        [e, t],
    );
}
