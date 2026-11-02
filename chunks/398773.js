a.d(e, { RO: () => c, fZ: () => o, g7: () => p, jQ: () => n, mE: () => r, wd: () => l });
var i = a(73153);
function n(t) {
    let { inServer: e = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: t, inServer: e });
}
function r() {
    i.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
}
function c(t) {
    i.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: t });
}
function o(t) {
    i.h.dispatch({ type: "CONJURE_PAGES_HOME_PROMPT_SAVE", prompt: t });
}
function l(t, e) {
    i.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: t, scrollTop: e });
}
function p(t, e) {
    i.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: t, view: e });
}
