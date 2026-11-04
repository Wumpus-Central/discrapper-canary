var C,
    r = e(582128),
    a = e(688810),
    E = e(129230),
    I = e(652215),
    _ = (((C = {}).CLAIM = "claim"), (C.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (C.CANCEL = "cancel"), C);
e.d(
    A,
    {},
    {
        H: _,
        M: function (t) {
            let { analyticsLocations: A } = (0, a.Ay)();
            return r.useCallback(
                (e, C) => {
                    E.default.track(I.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                        partner: t,
                        cta_type: e,
                        url: C ?? null,
                        location_stack: A,
                    });
                },
                [t, A],
            );
        },
    },
);
