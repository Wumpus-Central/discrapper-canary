n.d(t, {
    J1: () => l,
    Vk: () => u,
    cD: () => o,
    hP: () => r,
    pM: () => a,
    qA: () => s
});
var i = n(570140);
function r() {
    i.Z.dispatch({ type: 'PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED' });
}
function a() {
    i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_POPOUT_DISMISSED' });
}
function s() {
    i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED' });
}
function o(e) {
    i.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW',
        shouldShow: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_ENABLED',
        enabled: e
    });
}
function u() {
    i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_UI_RESET' });
}
