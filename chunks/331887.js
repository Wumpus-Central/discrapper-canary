let i;
n.d(t, { A: () => a });
var l = n(17928),
    s = n(228366);
let r = !1;
class o extends l.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return r;
    }
}
let a = new o(s.h, {
    CONNECTION_OPEN: function () {
        i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (r = !1), (i = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        r = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        r = !1;
    },
    LOGOUT: function () {
        (r = !1), (i = null);
    },
});
