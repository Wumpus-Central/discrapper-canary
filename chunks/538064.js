n.d(l, { Ft: () => r, Jt: () => s, eY: () => o, pf: () => a });
var t = n(73153),
    i = n(265059);
function s(e) {
    t.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
}
function a() {
    s({ displayTools: !i.A.displayTools });
}
function r(e, l) {
    s({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: l });
}
function o() {
    t.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
