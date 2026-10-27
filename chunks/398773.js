n.d(t, {
    J$: () => l,
    RO: () => o,
    Sd: () => s,
    fZ: () => c,
    g7: () => _,
    jQ: () => r,
    mE: () => a,
    wd: () => u,
    xG: () => d,
});
var i = n(73153);
function r(e) {
    i.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: e });
}
function a() {
    i.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
}
function s(e) {
    i.h.dispatch({ type: "CONJURE_PAGES_NAVIGATE", projectId: e });
}
function l(e) {
    i.h.dispatch({ type: "CONJURE_PAGES_OVERLAY_SET", open: e });
}
function o(e) {
    i.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: e });
}
function d(e) {
    i.h.dispatch({ type: "CONJURE_PAGES_EXIT_ROUTE_SAVE", route: e });
}
function c(e) {
    i.h.dispatch({ type: "CONJURE_PAGES_HOME_PROMPT_SAVE", prompt: e });
}
function u(e, t) {
    i.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: e, scrollTop: t });
}
function _(e, t) {
    i.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: e, view: t });
}
