n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
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
    let { application: t, fullWidth: n = !1, size: m = l.zx.Sizes.LARGE, color: f, customDisabledColor: _, hideNotLaunchable: g, tooltipPosition: h, onClick: b, className: E, source: C, hover: O, innerClassName: v } = e,
        y = {
            fullWidth: n,
            size: m,
            color: f,
            customDisabledColor: _,
            tooltipPosition: h,
            onClick: b,
            className: E,
            hover: O,
            innerClassName: v
        },
        x = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)),
        I = null != x ? x.sku.id : null,
        j = null != I ? I : t.primarySkuId,
        S = (0, i.e7)([o.Z], () => null != j && !o.Z.didFetchingSkuFail(j));
    return null != x && (0, s.Je)(x)
        ? (0, r.jsx)(
              u.Z,
              p(d({}, y), {
                  libraryApplication: x,
                  source: C
              })
          )
        : S
          ? (0, r.jsx)('div', { children: 'deprecated!' })
          : (0, r.jsx)(
                c.Z,
                p(d({}, y), {
                    hideNotLaunchable: g,
                    applicationId: t.id
                })
            );
}
