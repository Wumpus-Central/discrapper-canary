a.d(s, { Hx: () => x, NB: () => d, Xj: () => c, wX: () => o, yW: () => N });
var i,
    l,
    t = a(582128),
    r = a(174459),
    n = a(652215);
let d = "xbox",
    c = "xbox_perks_modal";
var o = (((i = {}).CONNECTION_FOOTER = "xbox_perks_connection_footer"), i),
    x = (((l = {}).CONNECT = "connect"), l);
function N(e) {
    return t.useCallback(
        (s) => {
            r.default.track(n.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, { partner: d, cta_type: s, location_stack: e });
        },
        [e],
    );
}
