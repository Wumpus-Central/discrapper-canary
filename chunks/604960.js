(n.r(t),
    n.d(t, {
        default: () => c,
        useUserSettingsConfigV2: () => d
    }));
var a = n(255367),
    i = n(73800),
    o = n(37234),
    r = n(79808),
    s = n(908820),
    l = n(640896);
function d() {
    return i.useMemo(() => l.Z, []);
}
function c() {
    let e = d();
    return (0, a.jsx)(r.Z, {
        onClose: o.xf,
        config: e,
        initialSetting: s.Z
    });
}
