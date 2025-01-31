n.d(t, { Z: () => d });
var i,
    r = n(442837),
    a = n(570140),
    s = n(288219);
function o(e, t, n) {
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
function u(e) {
    let { labFeature: t, enabled: n } = e;
    l[t] = n;
}
class c extends (i = r.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in s.Z) {
            var n, i;
            l[t] = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
        }
    }
    get(e) {
        var t;
        return null !== (t = l[e]) && void 0 !== t && t;
    }
    set(e, t) {
        return (l[e] = t), t;
    }
}
o(c, 'displayName', 'LabFeatureStore'), o(c, 'persistKey', 'LabFeatureStore');
let d = new c(a.Z, { LAB_FEATURE_TOGGLE: u });
