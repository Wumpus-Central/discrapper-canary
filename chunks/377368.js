a.d(s, { Hx: () => x, NB: () => d, Xj: () => c, wX: () => o, yW: () => N });
var i,
    t,
    l = a(582128),
    r = a(174459),
    n = a(652215);
let d = "xbox",
    c = "xbox_perks_modal";
var o = (((i = {}).CONNECTION_FOOTER = "xbox_perks_connection_footer"), i),
    x = (((t = {}).CONNECT = "connect"), t);
function N(e) {
    return l.useCallback(
        (s) => {
            r.default.track(n.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, { partner: d, cta_type: s, location_stack: e });
        },
        [e],
    );
}
