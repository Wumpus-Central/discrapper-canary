n.d(t, {
    FX: () => s,
    oc: () => a,
    r4: () => o,
    rd: () => i,
}),
    n(388685);
var r = n(837268);
function i(e) {
    return e;
}
function a(e) {
    switch (e) {
        case "click":
        case "unknown":
        default:
            return "click";
        case "mouseover":
            return "mouseover";
        case "mouseout":
            return "mouseout";
        case "mousemove":
        case "hover":
            return "mousemove";
    }
}
function o() {
    return {
        popoutOpened: !1,
        windowHandleSentToNative: !1,
        hasUseEffectFired: !1,
        trackedPidFocused: !1,
        reactInitializationStarted: !1,
        cssLoaded: !1,
        showInactiveCalled: !1,
        allDone: !1,
        errorMessage: null,
    };
}
let s = new Set([
    r.mM.WAITING_FOR_POPOUT_OPEN,
    r.mM.WAITING_FOR_REACT_INITIALIZATION,
    r.mM.WAITING_FOR_PID_FOCUS,
    r.mM.WAITING_FOR_SUCCESSFUL_SHOW,
]);
