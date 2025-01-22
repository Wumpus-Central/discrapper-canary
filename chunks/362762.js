var n,
    s,
    i,
    c,
    l = a(442837),
    r = a(570140),
    d = a(981631);
let o = {};
class g extends (c = l.ZP.Store) {
    getState(e) {
        return o[e];
    }
}
(i = 'CodedLinkNativeAppStateStore'),
    (s = 'displayName') in (n = g)
        ? Object.defineProperty(n, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[s] = i),
    (t.Z = new g(r.Z, {
        NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            o[t] = d.kEZ.OPENING;
        },
        NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            o[t] = d.kEZ.OPEN;
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            o[t] = d.kEZ.OPEN_FAIL;
        }
    }));
