_.d(t, { RO: () => i, fZ: () => n, g7: () => R, jQ: () => c, mE: () => h, v8: () => S, wd: () => s });
var p = _(73153);
function c(E) {
    p.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: E });
}
function h() {
    p.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
}
function i(E) {
    p.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: E });
}
function n(E) {
    p.h.dispatch({ type: "CONJURE_PAGES_HOME_PROMPT_SAVE", prompt: E });
}
function s(E, t) {
    p.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: E, scrollTop: t });
}
function R(E, t) {
    p.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: E, view: t });
}
function S(E) {
    p.h.dispatch({ type: "CONJURE_PAGES_RETURN_ROUTE_SAVE", route: E });
}
