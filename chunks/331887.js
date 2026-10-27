let i;
n.d(t, { A: () => o });
var s = n(17928),
    r = n(73153);
let l = !1;
class a extends s.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return l;
    }
}
let o = new a(r.h, {
    CONNECTION_OPEN: function () {
        i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        ((l = !1), (i = t));
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        l = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        l = !1;
    },
    LOGOUT: function () {
        ((l = !1), (i = null));
    },
});
