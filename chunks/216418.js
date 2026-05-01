n.d(t, { A: () => s, q: () => l });
var i = n(64700),
    a = n(587895),
    r = n(360469);
function s(e) {
    return i.useMemo(() => l(e), [e]);
}
function l(e) {
    return (
        !(null != e && r.xW.includes(e ?? "")) ||
        a.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
