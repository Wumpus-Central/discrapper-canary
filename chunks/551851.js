"use strict";
n.d(t, { A: () => o });
var s = n(311907),
    i = n(73153);
let r = {};
function l(e) {
    let { guildId: t, expand: n } = e;
    n ? (r[t] = !0) : delete r[t];
}
class a extends s.Ay.PersistedStore {
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
let o = new a(i.h, { VOICE_CATEGORY_COLLAPSE: l, VOICE_CATEGORY_EXPAND: l });
