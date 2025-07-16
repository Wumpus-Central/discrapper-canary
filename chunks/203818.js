n.d(t, { Z: () => u });
var r,
    i = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {};
function a(e) {
    let { guildId: t, expand: n } = e;
    n ? (o[t] = !0) : delete o[t];
}
class c extends (r = i.ZP.PersistedStore) {
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
(l(c, 'displayName', 'ChannelListVoiceCategoryStore'), l(c, 'persistKey', 'ChannelListVoiceCategoryStore'));
let u = new c(s.Z, {
    VOICE_CATEGORY_COLLAPSE: a,
    VOICE_CATEGORY_EXPAND: a
});
