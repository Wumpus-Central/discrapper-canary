n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(283595),
    s = n(55563),
    o = n(780570),
    c = n(701560),
    d = n(785547);
function u(e) {
    let { application: t, fullWidth: n = !1, size: u = a.zxk.Sizes.LARGE, color: m, customDisabledColor: _, hideNotLaunchable: h, tooltipPosition: p, onClick: g, className: f, source: x, hover: C, innerClassName: v } = e,
        E = {
            fullWidth: n,
            size: u,
            color: m,
            customDisabledColor: _,
            tooltipPosition: p,
            onClick: g,
            className: f,
            hover: C,
            innerClassName: v
        },
        I = (0, l.e7)([r.Z], () => r.Z.getActiveLibraryApplication(t.id)),
        N = null != I ? I.sku.id : null,
        S = null != N ? N : t.primarySkuId,
        T = (0, l.e7)([s.Z], () => null != S && !s.Z.didFetchingSkuFail(S));
    return null != I && (0, o.Je)(I)
        ? (0, i.jsx)(d.Z, {
              ...E,
              libraryApplication: I,
              source: x
          })
        : T
          ? (0, i.jsx)('div', { children: 'deprecated!' })
          : (0, i.jsx)(c.Z, {
                ...E,
                hideNotLaunchable: h,
                applicationId: t.id
            });
}
