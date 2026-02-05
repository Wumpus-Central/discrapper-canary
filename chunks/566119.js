"use strict";
n.d(t, { CC: () => o, Jv: () => u, RQ: () => _, WD: () => s, b: () => f, gP: () => d, o8: () => c, ue: () => l });
var r = n(954571),
    i = n(652215);
function a(e, t) {
    r.default.track(i.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: t });
}
let s = (e) => {
        a("shop_orbs", e);
    },
    o = (e) => {
        a("view_billing", e);
    },
    l = (e) => {
        a("update_billing", e);
    },
    u = (e) => {
        a("resubscribe", e);
    },
    c = (e) => {
        a("orbs_card_helpdesk", e);
    },
    d = () => {
        a("balance_popover_upsell");
    },
    _ = () => {
        a("balance_popover_next_drop");
    },
    f = () => {
        a("balance_popover_helpdesk");
    };
