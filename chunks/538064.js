"use strict";
n.d(t, { Ft: () => o, Jt: () => s, eY: () => l, pf: () => a });
var r = n(73153),
    i = n(265059);
function s(e) {
    r.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
}
function a() {
    s({ displayTools: !i.A.displayTools });
}
function o(e, t) {
    s({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: t });
}
function l() {
    r.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
