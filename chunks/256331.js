"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = !0;
class a extends i.Ay.DeviceSettingsStore {
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
let o = new a(r.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
        s = !s;
    },
});
