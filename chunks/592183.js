n.d(t, { Z: () => i });
var r = n(570140);
let i = {
    setOverrideWidgets(e) {
        r.Z.dispatch({
            type: "WIDGET_OVERRIDE_SET",
            widgets: e,
        });
    },
    clearOverrideWidgets() {
        r.Z.dispatch({ type: "WIDGET_OVERRIDE_CLEAR" });
    },
    setPendingWidgets(e) {
        r.Z.dispatch({
            type: "WIDGET_PENDING_SET",
            widgets: e,
        });
    },
    savePendingWidgets() {
        r.Z.dispatch({ type: "WIDGET_PENDING_SAVE" });
    },
    clearPendingWidgets() {
        r.Z.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
};
