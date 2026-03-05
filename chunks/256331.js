n.d(t, { A: () => r });
var i = n(311907),
    l = n(73153);
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
let r = new a(l.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
        s = !s;
    },
});
