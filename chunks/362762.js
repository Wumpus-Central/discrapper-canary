var i,
    r,
    s,
    l,
    o = n(442837),
    a = n(570140),
    c = n(981631);
let d = {};
class u extends (l = o.ZP.Store) {
    getState(e) {
        return d[e];
    }
}
(s = 'CodedLinkNativeAppStateStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new u(a.Z, {
        NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            d[t] = c.kEZ.OPENING;
        },
        NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            d[t] = c.kEZ.OPEN;
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            d[t] = c.kEZ.OPEN_FAIL;
        }
    }));
