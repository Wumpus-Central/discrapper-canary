i.d(n, { default: () => A });
var l = i(627968),
    a = i(64700),
    e = i(397927),
    r = i(442433),
    d = i(50268),
    c = i(985018);
function A(t) {
    let n = (0, d.A)({ id: t.id, label: t.label, shiftId: t.shiftId });
    return (
        a.useEffect(() => {
            null == n && (0, r.Z_)();
        }, [n]),
        (0, l.jsx)(e.W1t, {
            "data-menu-migrated-auto": !0,
            onSelect: t.onSelect,
            navId: "dev-context",
            "aria-label": t["aria-label"] ?? c.intl.string(c.t.ogxXGq),
            onClose: r.Z_,
            children: n,
        })
    );
}
