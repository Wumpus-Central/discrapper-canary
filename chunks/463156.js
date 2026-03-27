t.d(l, { A: () => c });
var i = t(627968),
    n = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(958805),
    o = t(61881),
    d = t(985018);
function c(e) {
    let { isCurrentUser: l, onClose: t } = e,
        c = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()),
        u = n.useCallback(() => {
            l && c ? r.A.notifyUnsavedWidgets() : t();
        }, [l, c, t]);
    return (0, i.jsx)(a.K0, {
        "aria-label": d.intl.string(d.t.cpT0Cq),
        icon: a.PGe,
        onClick: u,
        variant: "secondary",
        size: "sm",
    });
}
