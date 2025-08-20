n.d(t, { Z: () => u });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = {};
function l(e) {
    let { guildId: t, expand: n } = e;
    n ? (s[t] = !0) : delete s[t];
}
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        s = null != e ? e : {};
    }
    isVoiceCategoryExpanded(e) {
        var t;
        return null != (t = null != e && s[e]) && t;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return s;
    }
}
o(c, "displayName", "ChannelListVoiceCategoryStore"), o(c, "persistKey", "ChannelListVoiceCategoryStore");
let u = new c(a.Z, {
    VOICE_CATEGORY_COLLAPSE: l,
    VOICE_CATEGORY_EXPAND: l,
});
