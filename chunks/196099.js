"use strict";
n.d(t, { H: () => l, M: () => u });
var i,
    r = n(64700),
    s = n(688810),
    a = n(174459),
    o = n(652215),
    l = (((i = {}).CLAIM = "claim"), (i.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (i.CANCEL = "cancel"), i);
function u(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return r.useCallback(
        (n, i) => {
            a.default.track(o.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: e,
                cta_type: n,
                url: i ?? null,
                location_stack: t,
            });
        },
        [e, t],
    );
}
