n.d(t, { Z: () => d });
var l,
    i = n(442837),
    r = n(570140);
function a(e, t, n) {
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
let u = {};
function s(e) {
    let { guildId: t, expand: n } = e;
    n ? (u[t] = !0) : delete u[t];
}
class o extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        u = null != e ? e : {};
    }
    isVoiceCategoryExpanded(e) {
        var t;
        return null != (t = null != e && u[e]) && t;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return u;
    }
}
a(o, 'displayName', 'ChannelListVoiceCategoryStore'), a(o, 'persistKey', 'ChannelListVoiceCategoryStore');
let d = new o(r.Z, {
    VOICE_CATEGORY_COLLAPSE: s,
    VOICE_CATEGORY_EXPAND: s
});
