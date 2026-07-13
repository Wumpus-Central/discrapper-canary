l.d(t, { Ft: () => r, Jt: () => s, eY: () => o, pf: () => a });
var i = l(228366),
    n = l(265059);
function s(e) {
    i.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
}
function a() {
    s({ displayTools: !n.A.displayTools });
}
function r(e, t) {
    s({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: t });
}
function o() {
    i.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
