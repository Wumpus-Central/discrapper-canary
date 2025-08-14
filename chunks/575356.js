let i;
n.d(t, { Z: () => d });
var r,
    s,
    a = n(442837),
    l = n(570140);
let o = !1;
class c extends (s = a.ZP.Store) {
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return o;
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "DataHarvestStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "DataHarvestStore");
let d = new c(l.Z, {
    CONNECTION_OPEN: function () {
        i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (o = !1), (i = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        o = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        o = !1;
    },
    LOGOUT: function () {
        (o = !1), (i = null);
    },
});
