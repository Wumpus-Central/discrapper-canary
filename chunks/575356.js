let i;
n.d(t, { Z: () => u });
var r,
    s,
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
(s = 'DataHarvestStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = s);
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
