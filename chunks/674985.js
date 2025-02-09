n.d(t, { Z: () => m });
var i,
    r,
    a,
    s = n(442837),
    l = n(570140),
    o = n(594174),
    c = n(981631);
let d = null;
class u extends (a = s.ZP.Store) {
    getHouseMembership() {
        return d;
    }
}
(r = 'HypeSquadStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = r);
let m = new u(l.Z, {
    CONNECTION_OPEN: function () {
        let e = o.default.getCurrentUser();
        null != e && (e.hasFlag(c.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? (d = c.gkr.HOUSE_1) : e.hasFlag(c.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? (d = c.gkr.HOUSE_2) : e.hasFlag(c.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (d = c.gkr.HOUSE_3));
    },
    HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function () {
        d = null;
    },
    HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function (e) {
        d = e.houseID;
    }
});
