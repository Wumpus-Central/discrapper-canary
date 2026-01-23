n.d(e, {
    default: () => u,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(442433),
    c = n(50268),
    o = n(985018);

function u(t) {
    var e;
    let n = (0, c.A)({
        id: t.id,
        label: t.label,
        shiftId: t.shiftId,
    });
    return (
        i.useEffect(() => {
            null == n && (0, a.Z_)();
        }, [n]),
        (0, r.jsx)(l.W1t, {
            "data-menu-mixed": !0,
            onSelect: t.onSelect,
            navId: "dev-context",
            "aria-label": null != (e = t["aria-label"]) ? e : o.intl.string(o.t.ogxXGq),
            onClose: a.Z_,
            children: n,
        })
    );
}
