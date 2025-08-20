n.d(t, { Z: () => p });
var r,
    i = n(442837),
    a = n(570140),
    o = n(594174),
    s = n(981631);
function l(e, t, n) {
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
let c = null;
function u() {
    let e = o.default.getCurrentUser();
    null != e &&
        (e.hasFlag(s.xW$.HYPESQUAD_ONLINE_HOUSE_1)
            ? (c = s.gkr.HOUSE_1)
            : e.hasFlag(s.xW$.HYPESQUAD_ONLINE_HOUSE_2)
              ? (c = s.gkr.HOUSE_2)
              : e.hasFlag(s.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (c = s.gkr.HOUSE_3));
}
function d() {
    c = null;
}
function f(e) {
    c = e.houseID;
}
class _ extends (r = i.ZP.Store) {
    getHouseMembership() {
        return c;
    }
}
l(_, "displayName", "HypeSquadStore");
let p = new _(a.Z, {
    CONNECTION_OPEN: u,
    HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: d,
    HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: f,
});
