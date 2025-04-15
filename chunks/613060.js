n.d(t, { Z: () => c });
var r,
    i = n(442837),
    l = n(570140);
function o(e, t, n) {
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
let s = {};
class a extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                'number' == typeof e[t] && (s[t] = e[t]);
            });
    }
    getState() {
        return s;
    }
    hasViewed(e) {
        return null != s[e];
    }
}
o(a, 'displayName', 'ViewHistoryStore'), o(a, 'persistKey', 'ViewHistoryStore');
let c = new a(l.Z, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        s[t] = Date.now();
    }
});
