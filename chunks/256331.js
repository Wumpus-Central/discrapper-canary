"use strict";
n.d(t, { A: () => a });
var l = n(311907),
    s = n(73153);
let i = !0;
class r extends l.Ay.DeviceSettingsStore {
    static displayName = "ConversationVisibilityStore";
    static persistKey = "ConversationVisibilityStore";
    initialize(e) {
        i = e?.highlightingEnabled ?? !0;
    }
    isHighlightingEnabled() {
        return i;
    }
    getState() {
        return { highlightingEnabled: i };
    }
    getUserAgnosticState() {
        return { highlightingEnabled: i };
    }
}
let a = new r(s.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
        i = !i;
    },
});
