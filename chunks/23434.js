var r,
    o,
    i,
    a,
    s = n(442837),
    l = n(570140);
let d = null;
class c extends (a = s.ZP.Store) {
    hasAction() {
        return null != d;
    }
    getAction() {
        return d;
    }
}
function u(e) {
    d = e.requiredAction;
}
(i = 'UserRequiredActionStore'),
    (o = 'displayName') in (r = c)
        ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[o] = i),
    (t.Z = new c(l.Z, {
        CONNECTION_OPEN: u,
        USER_REQUIRED_ACTION_UPDATE: u
    }));
