var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = null;
class u extends (a = o.ZP.Store) {
    hasAction() {
        return null != c;
    }
    getAction() {
        return c;
    }
}
function d(e) {
    c = e.requiredAction;
}
(l = 'UserRequiredActionStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new u(s.Z, {
        CONNECTION_OPEN: d,
        USER_REQUIRED_ACTION_UPDATE: d
    }));
