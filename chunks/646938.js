a.d(t, { default: () => r });
var l = a(627968),
    i = a(64700),
    d = a(861672),
    n = a(442433),
    s = a(50268),
    c = a(985018);
function r(e) {
    let t = (0, s.A)({ id: e.id, label: e.label, shiftId: e.shiftId });
    return (
        i.useEffect(() => {
            null == t && (0, n.Z_)();
        }, [t]),
        (0, l.jsx)(d.W, {
            "data-menu-migrated-auto": !0,
            onSelect: e.onSelect,
            navId: "dev-context",
            "aria-label": e["aria-label"] ?? c.intl.string(c.t.ogxXGq),
            onClose: n.Z_,
            children: t,
        })
    );
}
