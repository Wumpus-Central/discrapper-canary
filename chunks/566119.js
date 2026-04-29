s.d(t, { CC: () => n, Jv: () => o, RQ: () => m, WD: () => i, b: () => h, gP: () => u, o8: () => c, ue: () => d });
var a = s(954571),
    r = s(652215);
function l(e, t) {
    a.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: t });
}
let i = (e) => {
        l("shop_orbs", e);
    },
    n = (e) => {
        l("view_billing", e);
    },
    d = (e) => {
        l("update_billing", e);
    },
    o = (e) => {
        l("resubscribe", e);
    },
    c = (e) => {
        l("orbs_card_helpdesk", e);
    },
    u = () => {
        l("balance_popover_upsell");
    },
    m = () => {
        l("balance_popover_next_drop");
    },
    h = () => {
        l("balance_popover_helpdesk");
    };
