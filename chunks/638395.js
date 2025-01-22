var i,
    a = r(442837),
    o = r(570140),
    s = r(288219);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {};
function c(e) {
    let { labFeature: n, enabled: r } = e;
    u[n] = r;
}
class d extends (i = a.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: u };
    }
    initialize(e) {
        for (var n in s.Z) {
            var r, i;
            u[n] = null !== (i = null == e ? void 0 : null === (r = e.toggleStates) || void 0 === r ? void 0 : r[n]) && void 0 !== i && i;
        }
    }
    get(e) {
        var n;
        return null !== (n = u[e]) && void 0 !== n && n;
    }
    set(e, n) {
        return (u[e] = n), n;
    }
}
l(d, 'displayName', 'LabFeatureStore'), l(d, 'persistKey', 'LabFeatureStore'), (n.Z = new d(o.Z, { LAB_FEATURE_TOGGLE: c }));
