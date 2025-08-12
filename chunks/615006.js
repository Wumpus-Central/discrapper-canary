n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = [],
    l = s,
    c = (e) => {
        let t = e.shopHome.userDiscounts;
        l = null != t && t.length > 0 ? t : s;
    },
    u = () => {
        l = s;
    };
class d extends (r = i.ZP.Store) {
    getUserDiscounts() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e) return l;
        let t = Date.now();
        return l.filter((e) => null == e.expiresAt || e.expiresAt.getTime() > t);
    }
}
a(d, "displayName", "CollectiblesUserDiscountStore");
let f = new d(o.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
    LOGOUT: u,
});
