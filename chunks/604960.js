(n.r(t),
    n.d(t, {
        default: () => c,
        useUserSettingsConfigV2: () => d
    }));
var i = n(255367),
    a = n(73800),
    s = n(37234),
    o = n(79808),
    r = n(908820),
    l = n(640896);
function d() {
    return a.useMemo(() => l.Z, []);
}
function c() {
    let e = d();
    return (0, i.jsx)(o.Z, {
        onClose: s.xf,
        config: e,
        initialSetting: r.Z
    });
}
