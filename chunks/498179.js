n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(283595),
    o = n(55563),
    s = n(780570),
    c = n(701560),
    u = n(785547);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let { application: t, fullWidth: n = !1, size: m = l.zxk.Sizes.LARGE, color: f, customDisabledColor: g, hideNotLaunchable: _, tooltipPosition: h, onClick: b, className: E, source: y, hover: C, innerClassName: x } = e,
        v = {
            fullWidth: n,
            size: m,
            color: f,
            customDisabledColor: g,
            tooltipPosition: h,
            onClick: b,
            className: E,
            hover: C,
            innerClassName: x
        },
        O = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)),
        j = null != O ? O.sku.id : null,
        I = null != j ? j : t.primarySkuId,
        S = (0, i.e7)([o.Z], () => null != I && !o.Z.didFetchingSkuFail(I));
    return null != O && (0, s.Je)(O)
        ? (0, r.jsx)(
              u.Z,
              p(d({}, v), {
                  libraryApplication: O,
                  source: y
              })
          )
        : S
          ? (0, r.jsx)('div', { children: 'deprecated!' })
          : (0, r.jsx)(
                c.Z,
                p(d({}, v), {
                    hideNotLaunchable: _,
                    applicationId: t.id
                })
            );
}
