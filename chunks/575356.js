let i;
n.d(t, { Z: () => u });
var s,
    r,
    l,
    a = n(442837),
    o = n(570140);
let c = !1;
class d extends (l = a.ZP.Store) {
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return c;
    }
}
(r = 'DataHarvestStore'),
    (s = 'displayName') in d
        ? Object.defineProperty(d, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[s] = r);
let u = new d(o.Z, {
    CONNECTION_OPEN: function () {
        i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (c = !1), (i = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        c = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        c = !1;
    },
    LOGOUT: function () {
        (c = !1), (i = null);
    }
});
