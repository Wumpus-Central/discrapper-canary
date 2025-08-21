t.d(l, { default: () => r });
var n = t(951288),
    a = t(647438),
    i = t(481060),
    d = t(239091),
    s = t(299206),
    c = t(388032);
function r(e) {
    var l;
    let t = (0, s.Z)({
        id: e.id,
        label: e.label,
        shiftId: e.shiftId,
    });
    return (
        a.useEffect(() => {
            null == t && (0, d.Zy)();
        }, [t]),
        (0, n.jsx)(i.v2r, {
            onSelect: e.onSelect,
            navId: "dev-context",
            "aria-label": null != (l = e["aria-label"]) ? l : c.intl.string(c.t.ogxXGh),
            onClose: d.Zy,
            children: t,
        })
    );
}
