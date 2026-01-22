n.d(t, {
    Ft: () => o,
    Jt: () => a,
    eY: () => l,
    pf: () => s,
});
var r = n(73153),
    i = n(265059);

function a(e) {
    r.h.dispatch({
        type: "DEV_TOOLS_SETTINGS_UPDATE",
        settings: e,
    });
}

function s() {
    a({
        displayTools: !i.A.displayTools,
    });
}

function o(e) {
    a({
        displayTools: !0,
        lastOpenTabId: e,
    });
}

function l() {
    r.h.dispatch({
        type: "ANALYTICS_LOG_CLEAR",
    });
}
