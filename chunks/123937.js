n.d(t, { Z: () => d });
var r,
    i = n(442837),
    a = n(570140),
    o = n(622026);
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
let l = null;
function c(e) {
    l = null != e.regionalFeatureConfig ? o.IC.fromConnectionOpen(e.regionalFeatureConfig) : null;
}
class u extends (r = i.ZP.Store) {
    getRegionalFeatureConfig() {
        return l;
    }
    isFeatureAgeGated(e) {
        var t;
        return null != (t = null == l ? void 0 : l.isFeatureAgeGated(e)) && t;
    }
    isSettingTeenByDefault(e) {
        var t;
        return null != (t = null == l ? void 0 : l.isFeatureTeenByDefault(e)) && t;
    }
}
s(u, "displayName", "RegionalFeatureConfigStore");
let d = new u(a.Z, { CONNECTION_OPEN: c });
