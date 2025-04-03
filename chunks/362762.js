n.d(t, { Z: () => p });
var r,
    i,
    o,
    a = n(442837),
    l = n(570140),
    s = n(981631);
let c = null,
    u = {};
class d extends (o = a.ZP.Store) {
    getState(e) {
        return u[e];
    }
    getHighestState() {
        return c;
    }
}
(i = 'CodedLinkNativeAppStateStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i);
let p = new d(l.Z, {
    NATIVE_APP_MODAL_OPENING: function (e) {
        let { code: t } = e;
        (u[t] = s.kEZ.OPENING), null === c && (c = s.kEZ.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
        let { code: t } = e;
        (u[t] = s.kEZ.OPEN), (c = s.kEZ.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
        let { code: t } = e;
        (u[t] = s.kEZ.OPEN_FAIL), (null === c || c === s.kEZ.OPENING) && (c = s.kEZ.OPEN_FAIL);
    }
});
