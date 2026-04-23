"use strict";
n.d(t, { Ft: () => o, Jt: () => s, eY: () => l, pf: () => a });
var i = n(228366),
    r = n(265059);
function s(e) {
    i.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
}
function a() {
    s({ displayTools: !r.A.displayTools });
}
function o(e, t) {
    s({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: t });
}
function l() {
    i.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
