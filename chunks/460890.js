n.d(t, {
    G9: () => l,
    GE: () => u,
    VO: () => o,
    y6: () => c,
});
var r = n(627968),
    i = n(64700),
    a = n(853590);
let s = {
        i18n: {
            CANCEL: "Cancel",
            BACK: "Back",
            NEXT: "Next",
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
            MODAL_DONT_SHOW_AGAIN: "Don't show again",
            LISTBOX_EMPTY_STATE: "No items to show",
            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) => "No results for \u2018".concat(e, "\u2019"),
            KEY_CTRL_A11Y_LABEL: "Ctrl",
            KEY_CMD_A11Y_LABEL: "Cmd",
            KEY_ALT_A11Y_LABEL: "Alt",
            KEY_OPTION_A11Y_LABEL: "Option",
            KEY_SHIFT_A11Y_LABEL: "Shift",
            KEY_UP_A11Y_LABEL: "Up",
            KEY_DOWN_A11Y_LABEL: "Down",
            KEY_LEFT_A11Y_LABEL: "Left",
            KEY_RIGHT_A11Y_LABEL: "Right",
            KEY_PAGEUP: "Page Up",
            KEY_PAGEDOWN: "Page Down",
            KEY_ANY: "Any",
            KEY_ENTER: "Enter",
            KEY_ENTER_A11Y_LABEL: "Enter",
            KEY_RETURN_A11Y_LABEL: "Return",
            KEY_ESCAPE: "Escape",
            KEY_ESCAPE_A11Y_LABEL: "Escape",
            KEY_BACKSPACE: "Backspace",
            KEY_BACKSPACE_A11Y_LABEL: "Backspace",
            KEY_DELETE_A11Y_LABEL: "Delete",
            KEY_SHIFT: "Shift",
            DATE_INPUT_OPEN_CALENDAR_LABEL: "Open calendar",
            CALENDAR_PREVIOUS_MONTH_LABEL: "Previous month",
            CALENDAR_NEXT_MONTH_LABEL: "Next month",
            INLINE_NOTICE_GENERIC_ERROR: "Something went wrong. Please try again later.",
            STEP_INDICATOR: (e, t) => "Step ".concat(e, " of ").concat(t),
        },
        theme: "light",
        locale: "en-US",
        saturation: 0.5,
        defaultLayerContext: void 0,
        trackImpression: void 0,
        isWindowFocused: void 0,
        dynamicGraphicComponents: void 0,
    },
    o = i.createContext(s);
function l() {
    let e = i.useContext(o);
    return e === s && console.warn("useManaContext must be used within a ManaContext.Provider"), e;
}
function c(e) {
    var t, n;
    return (null != (t = null == (n = l().experiments) ? void 0 : n.enabledExperiments) ? t : []).includes(
        "mana-toggle-inputs",
    );
}
function u(e) {
    let { children: t, value: n } = e;
    return (0, r.jsx)(o.Provider, {
        value: n,
        children: (0, r.jsx)(a.C, {
            locale: n.locale,
            children: t,
        }),
    });
}
