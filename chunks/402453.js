n.d(t, {
    ZF: () => s,
    kb: () => l,
});
var r = n(951288),
    i = n(647438);
let a = {
        i18n: {
            SPINNER_LOADING_LABEL: "Loading",
            BUTTON_LOADING_STARTED_LABEL: "Loading",
            BUTTON_LOADING_FINISHED_LABEL: "Loading",
            CLOSE_BUTTON_LABEL: "Close",
            PLAY_BUTTON_LABEL: "Play",
            PAUSE_BUTTON_LABEL: "Pause",
            NEW: "New",
            BETA: "Beta",
            EARLY_ACCESS: "Early Access",
            BILLING_TRIAL_FREE_TRIAL_TEXT: "Free Trial",
        },
        theme: "light",
        saturation: 0.5,
        defaultLayerContext: void 0,
    },
    o = i.createContext(a);
function s() {
    let e = i.useContext(o);
    return e === a && console.warn("useManaContext must be used within a ManaContext.Provider"), e;
}
function l(e) {
    let { children: t, value: n } = e;
    return (0, r.jsx)(o.Provider, {
        value: n,
        children: t,
    });
}
