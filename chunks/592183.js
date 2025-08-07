a.d(t, { Z: () => r });
var n = a(570140);
let r = {
    setOverrideWidgets(e) {
        n.Z.dispatch({
            type: "WIDGET_OVERRIDE_SET",
            widgets: e,
        });
    },
    clearOverrideWidgets() {
        n.Z.dispatch({ type: "WIDGET_OVERRIDE_CLEAR" });
    },
};
