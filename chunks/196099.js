var C,
    E = e(582128),
    r = e(688810),
    I = e(129230),
    _ = e(652215),
    a = (((C = {}).CLAIM = "claim"), (C.PARTNER_PAGE_REDIRECT = "partner_page_redirect"), (C.CANCEL = "cancel"), C);
e.d(
    A,
    {},
    {
        H: a,
        M: function (t) {
            let { analyticsLocations: A } = (0, r.Ay)();
            return E.useCallback(
                (e, C) => {
                    I.default.track(_.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
