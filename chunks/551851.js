n.d(t, { A: () => d });
var i = n(311907),
    s = n(73153);
let l = {};
function r(e) {
    let { guildId: t, expand: n } = e;
    n ? (l[t] = !0) : delete l[t];
}
class a extends i.Ay.PersistedStore {
    static displayName = "ChannelListVoiceCategoryStore";
    static persistKey = "ChannelListVoiceCategoryStore";
    initialize(e) {
        l = e ?? {};
    }
    isVoiceCategoryExpanded(e) {
        return (null != e && l[e]) ?? !1;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return l;
    }
}
let d = new a(s.h, { VOICE_CATEGORY_COLLAPSE: r, VOICE_CATEGORY_EXPAND: r });
