a.d(t, {
    $D: () => u,
    Jt: () => c,
    Pe: () => b,
    S5: () => _,
    dw: () => h,
    i: () => o,
    if: () => l,
    lw: () => d,
    nr: () => f,
});
var s = a(666860),
    i = a(174459),
    r = a(527926),
    n = a(652215);
function c(e, t) {
    i.default.track(n.HAw.CHECKPOINT_2026_CARD_CLICKED, {
        other_user_id: e,
        ...(0, s.dI)(t),
        ...(0, s.H$)(t?.guild_id),
    });
}
function d(e) {
    i.default.track(n.HAw.CHECKPOINT_2026_STARTED, { source: e, ...r.A.getAnalyticsProperties() });
}
function l(e) {
    i.default.track(n.HAw.CHECKPOINT_2026_STEP_VIEWED, { step_name: e, ...r.A.getAnalyticsProperties() });
}
function o(e) {
    i.default.track(n.HAw.CHECKPOINT_2026_CLOSED, { step_name: e, ...r.A.getAnalyticsProperties() });
}
function u() {
    i.default.track(n.HAw.CHECKPOINT_2026_COMPLETED, { step_name: r.A.getStepName(), ...r.A.getAnalyticsProperties() });
}
function h(e, t) {
    i.default.track(n.HAw.CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED, {
        trait_type: e,
        option_id: t,
        step_name: r.A.getStepName(),
        ...r.A.getAnalyticsProperties(),
    });
}
function f(e) {
    i.default.track(n.HAw.CHECKPOINT_2026_GIFT_CTA_CLICKED, {
        other_user_id: e,
        step_name: r.A.getStepName(),
        ...r.A.getAnalyticsProperties(),
    });
}
function _(e) {
    i.default.track(n.HAw.CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT, { other_user_id: e, ...r.A.getAnalyticsProperties() });
}
function b(e) {
    i.default.track(n.HAw.CHECKPOINT_2026_CARD_SHARED, {
        checkpoint_card_type: e,
        step_name: r.A.getStepName(),
        ...r.A.getAnalyticsProperties(),
    });
}
