i.d(t, { A: () => c });
var l = i(627968),
    n = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(958805),
    o = i(61881),
    d = i(985018);
function c(e) {
    let { isCurrentUser: t, onClose: i, className: c } = e,
        u = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()),
        A = n.useCallback(() => {
            t && u ? r.A.notifyUnsavedWidgets() : i();
        }, [t, u, i]);
    return (0, l.jsx)("div", {
        className: c,
        children: (0, l.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t.cpT0Cq),
            icon: a.PGe,
            onClick: A,
            variant: "secondary",
            size: "sm",
        }),
    });
}
