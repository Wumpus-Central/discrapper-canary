n.d(t, { Z: () => u });
var i,
    r,
    s = n(442837),
    a = n(570140),
    l = n(594174),
    o = n(981631);
let c = null;
class d extends (r = s.ZP.Store) {
    getHouseMembership() {
        return c;
    }
}
(i = "displayName") in d
    ? Object.defineProperty(d, i, {
          value: "HypeSquadStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[i] = "HypeSquadStore");
let u = new d(a.Z, {
    CONNECTION_OPEN: function () {
        let e = l.default.getCurrentUser();
        null != e &&
            (e.hasFlag(o.xW$.HYPESQUAD_ONLINE_HOUSE_1)
                ? (c = o.gkr.HOUSE_1)
                : e.hasFlag(o.xW$.HYPESQUAD_ONLINE_HOUSE_2)
                  ? (c = o.gkr.HOUSE_2)
                  : e.hasFlag(o.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (c = o.gkr.HOUSE_3));
    },
    HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function () {
        c = null;
    },
    HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function (e) {
        c = e.houseID;
    },
});
