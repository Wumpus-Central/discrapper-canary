n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(283595),
    o = n(55563),
    s = n(780570),
    c = n(701560),
    u = n(785547);
function d(e) {
    let { application: t, fullWidth: n = !1, size: d = l.Button.Sizes.LARGE, color: m, customDisabledColor: h, hideNotLaunchable: f, tooltipPosition: p, onClick: _, className: g, source: E, hover: C, innerClassName: I } = e,
        x = {
            fullWidth: n,
            size: d,
            color: m,
            customDisabledColor: h,
            tooltipPosition: p,
            onClick: _,
            className: g,
            hover: C,
            innerClassName: I
        },
        N = (0, r.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)),
        v = null != N ? N.sku.id : null,
        T = null != v ? v : t.primarySkuId,
        S = (0, r.e7)([o.Z], () => null != T && !o.Z.didFetchingSkuFail(T));
    return null != N && (0, s.Je)(N)
        ? (0, i.jsx)(u.Z, {
              ...x,
              libraryApplication: N,
              source: E
          })
        : S
          ? (0, i.jsx)('div', { children: 'deprecated!' })
          : (0, i.jsx)(c.Z, {
                ...x,
                hideNotLaunchable: f,
                applicationId: t.id
            });
}
