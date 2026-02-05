n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(189081),
    r = n(67480),
    s = n(674378),
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
        E = {
            fullWidth: n,
            size: c,
            disabledVariant: m,
            tooltipPosition: h,
            onClick: p,
            className: g,
            hover: f,
            innerClassName: x,
        },
        C = (0, l.bG)([a.A], () => a.A.getActiveLibraryApplication(t.id)),
        I = null != C ? C.sku.id : null,
        T = null != I ? I : t.primarySkuId,
        v = (0, l.bG)([r.A], () => null != T && !r.A.didFetchingSkuFail(T));
    return null != C && (0, s.XZ)(C)
        ? (0, i.jsx)(d.A, { ...E, playButtonVariant: u, libraryApplication: C, source: A })
        : v
          ? (0, i.jsx)("div", { children: "deprecated!" })
          : (0, i.jsx)(o.A, { ...E, variant: u, hideNotLaunchable: _, applicationId: t.id });
}
