"use strict";
n.d(t, { CC: () => o, Jv: () => u, RQ: () => _, WD: () => a, b: () => f, gP: () => d, o8: () => c, ue: () => l });
var i = n(174459),
    r = n(652215);
function s(e, t) {
    i.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: t });
}
let a = (e) => {
        s("shop_orbs", e);
    },
    o = (e) => {
        s("view_billing", e);
    },
    l = (e) => {
        s("update_billing", e);
    },
    u = (e) => {
        s("resubscribe", e);
    },
    c = (e) => {
        s("orbs_card_helpdesk", e);
    },
    d = () => {
        s("balance_popover_upsell");
    },
    _ = () => {
        s("balance_popover_next_drop");
    },
    f = () => {
        s("balance_popover_helpdesk");
    };
