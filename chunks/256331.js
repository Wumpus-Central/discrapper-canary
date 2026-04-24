n.d(l, { A: () => r });
var t = n(17928),
    a = n(228366);
let i = !0;
class s extends t.Ay.DeviceSettingsStore {
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
let r = new s(a.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
        i = !i;
    },
});
