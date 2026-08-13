"use strict";
let i;
n.d(t, { A: () => o });
var r = n(17928),
    a = n(228366);
let s = !1;
class l extends r.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return s;
    }
}
let o = new l(a.h, {
    CONNECTION_OPEN: function () {
        i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (s = !1), (i = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        s = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        s = !1;
    },
    LOGOUT: function () {
        (s = !1), (i = null);
    },
});
