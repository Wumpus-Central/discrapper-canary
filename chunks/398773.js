p.d(E, { RO: () => c, g7: () => d, jQ: () => i, mE: () => _, wd: () => n });
var h = p(73153);
function i(t) {
    let { inServer: E = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    h.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: t, inServer: E });
}
function _() {
    h.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
}
function c(t) {
    h.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: t });
}
function n(t, E) {
    h.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: t, scrollTop: E });
}
function d(t, E) {
    h.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: t, view: E });
}
