"use strict";
n.d(t, { A: () => r });
var l = n(311907),
    a = n(73153);
let s = !0;
class i extends l.Ay.DeviceSettingsStore {
    static displayName = "ConversationVisibilityStore";
    static persistKey = "ConversationVisibilityStore";
    initialize(e) {
        s = e?.highlightingEnabled ?? !0;
    }
    isHighlightingEnabled() {
        return s;
    }
    getState() {
        return { highlightingEnabled: s };
    }
    getUserAgnosticState() {
        return { highlightingEnabled: s };
    }
}
let r = new i(a.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
        s = !s;
    },
});
