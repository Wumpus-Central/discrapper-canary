t.d(s, { Ft: () => o, Jt: () => d, eY: () => c, pf: () => n });
var a = t(73153),
    i = t(265059);
function d(p) {
    a.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: p });
}
function n() {
    d({ displayTools: !i.A.displayTools });
}
function o(p, s) {
    d({ displayTools: !0, lastOpenTabId: p, lastOpenSubTabId: s });
}
function c() {
    a.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
