var i,
    r,
    a,
    s,
    l = n(442837),
    o = n(570140),
    c = n(594174),
    d = n(981631);
let u = null;
class g extends (s = l.ZP.Store) {
    getHouseMembership() {
        return u;
    }
}
(a = 'HypeSquadStore'),
    (r = 'displayName') in (i = g)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    (t.Z = new g(o.Z, {
        CONNECTION_OPEN: function () {
            let e = c.default.getCurrentUser();
            null != e && (e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? (u = d.gkr.HOUSE_1) : e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? (u = d.gkr.HOUSE_2) : e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (u = d.gkr.HOUSE_3));
        },
        HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function () {
            u = null;
        },
        HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function (e) {
            u = e.houseID;
        }
    }));
