l.d(t, { Ft: () => r, Jt: () => s, eY: () => o, pf: () => a });
var n = l(228366),
    i = l(265059);
function s(e) {
    n.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
}
function a() {
    s({ displayTools: !i.A.displayTools });
}
function r(e, t) {
    s({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: t });
}
function o() {
    n.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
