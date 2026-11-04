var i = n(582128),
    r = n(587895),
    a = n(487887);
function s(e) {
    return (
        !(null != e && a.xW.includes(e ?? "")) ||
        r.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return i.useMemo(() => s(e), [e]);
        },
        q: s,
    },
);
