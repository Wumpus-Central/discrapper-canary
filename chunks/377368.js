var i,
    t,
    l = a(582128),
    r = a(129230),
    n = a(652215),
    d = (((i = {}).CONNECTION_FOOTER = "xbox_perks_connection_footer"), i),
    c = (((t = {}).CONNECT = "connect"), t);
a.d(
    s,
    {},
    {
        Hx: c,
        Xj: "xbox_perks_modal",
        wX: d,
        yW: function (e) {
            return l.useCallback(
                (s) => {
                    r.default.track(n.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                        partner: "xbox",
                        cta_type: s,
                        location_stack: e,
                    });
                },
                [e],
            );
        },
    },
);
