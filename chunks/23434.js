var t,
    r,
    i,
    c,
    u = o(442837),
    a = o(570140);
let d = null;
class f extends (c = u.ZP.Store) {
    hasAction() {
        return null != d;
    }
    getAction() {
        return d;
    }
}
function p(e) {
    d = e.requiredAction;
}
(i = 'UserRequiredActionStore'),
    (r = 'displayName') in (t = f)
        ? Object.defineProperty(t, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[r] = i),
    (n.Z = new f(a.Z, {
        CONNECTION_OPEN: p,
        USER_REQUIRED_ACTION_UPDATE: p
    }));
