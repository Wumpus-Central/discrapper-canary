let r;
n.d(t, { Z: () => u });
var i,
    s,
    a,
    l = n(442837),
    o = n(570140);
let c = !1;
class d extends (a = l.ZP.Store) {
    get harvestType() {
        return r;
    }
    get requestingHarvest() {
        return c;
    }
}
(s = 'DataHarvestStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = s);
let u = new d(o.Z, {
    CONNECTION_OPEN: function () {
        r = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (c = !1), (r = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        c = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        c = !1;
    },
    LOGOUT: function () {
        (c = !1), (r = null);
    }
});
