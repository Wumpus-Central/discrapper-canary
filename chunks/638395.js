n.d(t, { Z: () => d });
var r,
    i = n(442837),
    o = n(570140),
    a = n(288219);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {};
function c(e) {
    let { labFeature: t, enabled: n } = e;
    l[t] = n;
}
class u extends (r = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in a.Z) {
            var n, r;
            l[t] = null != (r = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && r;
        }
    }
    get(e) {
        var t;
        return null != (t = l[e]) && t;
    }
    set(e, t) {
        return (l[e] = t), t;
    }
}
s(u, 'displayName', 'LabFeatureStore'), s(u, 'persistKey', 'LabFeatureStore');
let d = new u(o.Z, { LAB_FEATURE_TOGGLE: c });
