n.d(t, { Z: () => m });
var i,
    s,
    r,
    l = n(442837),
    a = n(570140),
    o = n(594174),
    c = n(981631);
let d = null;
class u extends (r = l.ZP.Store) {
    getHouseMembership() {
        return d;
    }
}
(s = 'HypeSquadStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = s);
let m = new u(a.Z, {
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
