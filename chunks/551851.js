"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = {};
function s(e) {
    let { guildId: t, expand: n } = e;
    n ? (a[t] = !0) : delete a[t];
}
class l extends i.Ay.PersistedStore {
    static displayName = "ChannelListVoiceCategoryStore";
    static persistKey = "ChannelListVoiceCategoryStore";
    initialize(e) {
        a = e ?? {};
    }
    isVoiceCategoryExpanded(e) {
        return (null != e && a[e]) ?? !1;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return a;
    }
}
let o = new l(r.h, { VOICE_CATEGORY_COLLAPSE: s, VOICE_CATEGORY_EXPAND: s });
