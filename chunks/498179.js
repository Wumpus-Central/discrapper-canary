n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(283595),
    o = n(55563),
    s = n(780570),
    c = n(701560),
    u = n(785547);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { application: t, fullWidth: n = !1, size: m = a.zxk.Sizes.LARGE, color: f, customDisabledColor: h, hideNotLaunchable: g, tooltipPosition: _, onClick: b, className: x, source: y, hover: E, innerClassName: v } = e,
        O = {
            fullWidth: n,
            size: m,
            color: f,
            customDisabledColor: h,
            tooltipPosition: _,
            onClick: b,
            className: x,
            hover: E,
            innerClassName: v
        },
        N = (0, i.e7)([l.Z], () => l.Z.getActiveLibraryApplication(t.id)),
        j = null != N ? N.sku.id : null,
        C = null != j ? j : t.primarySkuId,
        I = (0, i.e7)([o.Z], () => null != C && !o.Z.didFetchingSkuFail(C));
    return null != N && (0, s.Je)(N)
        ? (0, r.jsx)(
              u.Z,
              p(d({}, O), {
                  libraryApplication: N,
                  source: y
              })
          )
        : I
          ? (0, r.jsx)('div', { children: 'deprecated!' })
          : (0, r.jsx)(
                c.Z,
                p(d({}, O), {
                    hideNotLaunchable: g,
                    applicationId: t.id
                })
            );
}
