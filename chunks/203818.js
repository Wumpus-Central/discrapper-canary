n.d(t, { Z: () => u });
var i,
    l = n(442837),
    r = n(570140);
function s(e, t, n) {
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
let a = {};
function o(e) {
    let { guildId: t, expand: n } = e;
    n ? (a[t] = !0) : delete a[t];
}
class d extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        a = null != e ? e : {};
    }
    isVoiceCategoryExpanded(e) {
        var t;
        return null !== (t = null != e && a[e]) && void 0 !== t && t;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return a;
    }
}
s(d, 'displayName', 'ChannelListVoiceCategoryStore'), s(d, 'persistKey', 'ChannelListVoiceCategoryStore');
let u = new d(r.Z, {
    VOICE_CATEGORY_COLLAPSE: o,
    VOICE_CATEGORY_EXPAND: o
});
