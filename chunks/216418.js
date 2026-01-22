n.d(t, {
    A: () => s,
    q: () => o,
});
var r = n(64700),
    i = n(587895),
    a = n(360469);

function s(e) {
    return r.useMemo(() => o(e), [e]);
}

function o(e) {
    var t, n;
    return (
        !(null != e && a.xW.includes(null != e ? e : "")) ||
        (null == (n = i.A.getApplication(e)) || null == (t = n.embeddedActivityConfig)
            ? void 0
            : t.legacy_responsive_aspect_ratio)
    );
}
