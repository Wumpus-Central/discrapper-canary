n.d(t, { Z: () => h });
var i,
    s = n(442837),
    l = n(570140);
function r(e, t, n) {
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
function d(e) {
    let { guildId: t, expand: n } = e;
    n ? (a[t] = !0) : delete a[t];
}
class o extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        a = null != e ? e : {};
    }
    isVoiceCategoryExpanded(e) {
        var t;
        return null != (t = null != e && a[e]) && t;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return a;
    }
}
r(o, 'displayName', 'ChannelListVoiceCategoryStore'), r(o, 'persistKey', 'ChannelListVoiceCategoryStore');
let h = new o(l.Z, {
    VOICE_CATEGORY_COLLAPSE: d,
    VOICE_CATEGORY_EXPAND: d
});
