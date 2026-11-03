_.d(E, { RO: () => c, fZ: () => n, g7: () => s, jQ: () => h, mE: () => i, wd: () => d });
var p = _(73153);
function h(t) {
    let { inServer: E = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    p.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: t, inServer: E });
}
function i() {
    p.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
}
function c(t) {
    p.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: t });
}
function n(t) {
    p.h.dispatch({ type: "CONJURE_PAGES_HOME_PROMPT_SAVE", prompt: t });
}
function d(t, E) {
    p.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: t, scrollTop: E });
}
function s(t, E) {
    p.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: t, view: E });
}
