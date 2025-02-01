n.d(t, { Z: () => c });
var i,
    l = n(442837),
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
let o = {};
class s extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                'number' == typeof e[t] && (o[t] = e[t]);
            });
    }
    getState() {
        return o;
    }
    hasViewed(e) {
        return null != o[e];
    }
}
a(s, 'displayName', 'ViewHistoryStore'), a(s, 'persistKey', 'ViewHistoryStore');
let c = new s(r.Z, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        o[t] = Date.now();
    }
});
