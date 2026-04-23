n.d(t, { A: () => h });
var i = n(17928),
    s = n(228366);
let r = {};
function l(e) {
    let { guildId: t, expand: n } = e;
    n ? (r[t] = !0) : delete r[t];
}
class a extends i.Ay.PersistedStore {
    static displayName = "ChannelListVoiceCategoryStore";
    static persistKey = "ChannelListVoiceCategoryStore";
    initialize(e) {
        r = e ?? {};
    }
    isVoiceCategoryExpanded(e) {
        return (null != e && r[e]) ?? !1;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return r;
    }
}
let h = new a(s.h, { VOICE_CATEGORY_COLLAPSE: l, VOICE_CATEGORY_EXPAND: l });
