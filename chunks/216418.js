n.d(t, { A: () => s, q: () => _ });
var i = n(64700),
    r = n(587895),
    a = n(360469);
function s(e) {
    return i.useMemo(() => _(e), [e]);
}
function _(e) {
    return (
        !(null != e && a.xW.includes(e ?? "")) ||
        r.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
