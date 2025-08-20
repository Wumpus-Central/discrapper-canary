let r;
n.d(t, { Z: () => h });
var i,
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = !1;
function c() {
    r = void 0;
}
function u(e) {
    let { harvestType: t } = e;
    (l = !1), (r = t);
}
function d() {
    l = !0;
}
function f() {
    l = !1;
}
function _() {
    (l = !1), (r = null);
}
class p extends (i = a.ZP.Store) {
    get harvestType() {
        return r;
    }
    get requestingHarvest() {
        return l;
    }
}
s(p, "displayName", "DataHarvestStore");
let h = new p(o.Z, {
    CONNECTION_OPEN: c,
    UPDATE_DATA_HARVEST_TYPE: u,
    LOAD_DATA_HARVEST_TYPE_START: d,
    LOAD_DATA_HARVEST_TYPE_FAILURE: f,
    LOGOUT: _,
});
