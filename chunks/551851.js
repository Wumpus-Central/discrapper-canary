"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = {};
function a(e) {
    let { guildId: t, expand: n } = e;
    n ? (s[t] = !0) : delete s[t];
}
class o extends i.Ay.PersistedStore {
    static displayName = "ChannelListVoiceCategoryStore";
    static persistKey = "ChannelListVoiceCategoryStore";
    initialize(e) {
        s = e ?? {};
    }
    isVoiceCategoryExpanded(e) {
        return (null != e && s[e]) ?? !1;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return s;
    }
}
let l = new o(r.h, { VOICE_CATEGORY_COLLAPSE: a, VOICE_CATEGORY_EXPAND: a });
