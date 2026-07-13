"use strict";
n.d(t, { Ft: () => l, Jt: () => a, eY: () => o, pf: () => s });
var i = n(228366),
    r = n(265059);
function a(e) {
    i.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
}
function s() {
    a({ displayTools: !r.A.displayTools });
}
function l(e, t) {
    a({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: t });
}
function o() {
    i.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
