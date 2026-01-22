n.d(t, {
    A: () => u,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
let o = {};

function l(e) {
    let { guildId: t, expand: n } = e;
    n ? (o[t] = !0) : delete o[t];
}
class c extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        o = null != e ? e : {};
    }
    isVoiceCategoryExpanded(e) {
        var t;
        return null != (t = null != e && o[e]) && t;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return o;
    }
}
s(c, "displayName", "ChannelListVoiceCategoryStore"), s(c, "persistKey", "ChannelListVoiceCategoryStore");
let u = new c(a.h, {
    VOICE_CATEGORY_COLLAPSE: l,
    VOICE_CATEGORY_EXPAND: l,
});
