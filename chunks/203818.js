t.d(n, { Z: () => d });
var l,
    i = t(442837),
    r = t(570140);
function a(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let u = {};
function s(e) {
    let { guildId: n, expand: t } = e;
    t ? (u[n] = !0) : delete u[n];
}
class o extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        u = null != e ? e : {};
    }
    isVoiceCategoryExpanded(e) {
        var n;
        return null != (n = null != e && u[e]) && n;
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
        return u;
    }
}
(a(o, 'displayName', 'ChannelListVoiceCategoryStore'), a(o, 'persistKey', 'ChannelListVoiceCategoryStore'));
let d = new o(r.Z, {
    VOICE_CATEGORY_COLLAPSE: s,
    VOICE_CATEGORY_EXPAND: s
});
