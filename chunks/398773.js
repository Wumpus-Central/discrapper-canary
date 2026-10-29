i.d(e, { RO: () => l, fZ: () => c, g7: () => o, jQ: () => n, mE: () => r, wd: () => u });
var a = i(73153);
function n(t) {
    a.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: t });
}
function r() {
    a.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
}
function l(t) {
    a.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: t });
}
function c(t) {
    a.h.dispatch({ type: "CONJURE_PAGES_HOME_PROMPT_SAVE", prompt: t });
}
function u(t, e) {
    a.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: t, scrollTop: e });
}
function o(t, e) {
    a.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: t, view: e });
}
