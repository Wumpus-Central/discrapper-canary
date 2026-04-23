n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(189081),
    s = n(67480),
    r = n(674378),
    o = n(598429),
    d = n(979604);
function c(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: c = "md",
            playButtonVariant: u,
            disabledVariant: m,
            hideNotLaunchable: _,
            tooltipPosition: h,
            onClick: p,
            className: g,
            source: A,
            hover: f,
            innerClassName: x,
        } = e,
        C = {
            fullWidth: n,
            size: c,
            disabledVariant: m,
            tooltipPosition: h,
            onClick: p,
            className: g,
            hover: f,
            innerClassName: x,
        },
        E = (0, l.bG)([a.A], () => a.A.getActiveLibraryApplication(t.id)),
        I = null != E ? E.sku.id : null,
        v = null != I ? I : t.primarySkuId,
        b = (0, l.bG)([s.A], () => null != v && !s.A.didFetchingSkuFail(v));
    return null != E && (0, r.XZ)(E)
        ? (0, i.jsx)(d.A, { ...C, playButtonVariant: u, libraryApplication: E, source: A })
        : b
          ? (0, i.jsx)("div", { children: "deprecated!" })
          : (0, i.jsx)(o.A, { ...C, variant: u, hideNotLaunchable: _, applicationId: t.id });
}
