"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = !0;
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ConversationVisibilityStore";
    static persistKey = "ConversationVisibilityStore";
    initialize(e) {
        a = e?.highlightingEnabled ?? !0;
    }
    isHighlightingEnabled() {
        return a;
    }
    getState() {
        return { highlightingEnabled: a };
    }
    getUserAgnosticState() {
        return { highlightingEnabled: a };
    }
}
let l = new s(r.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
        a = !a;
    },
});
