n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(755721),
    a = n(283595),
    s = n(55563),
    l = n(780570),
    c = n(701560),
    u = n(785547);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { application: t, fullWidth: n = !1, size: d = o.zx.Sizes.LARGE, color: _, customDisabledColor: h, hideNotLaunchable: m, tooltipPosition: g, onClick: E, className: b, source: y, hover: O, innerClassName: v } = e,
        I = {
            fullWidth: n,
            size: d,
            color: _,
            customDisabledColor: h,
            tooltipPosition: g,
            onClick: E,
            className: b,
            hover: O,
            innerClassName: v
        },
        T = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)),
        S = null != T ? T.sku.id : null,
        A = null != S ? S : t.primarySkuId,
        N = (0, i.e7)([s.Z], () => null != A && !s.Z.didFetchingSkuFail(A));
    return null != T && (0, l.Je)(T)
        ? (0, r.jsx)(
              u.Z,
              p(f({}, I), {
                  libraryApplication: T,
                  source: y
              })
          )
        : N
          ? (0, r.jsx)('div', { children: 'deprecated!' })
          : (0, r.jsx)(
                c.Z,
                p(f({}, I), {
                    hideNotLaunchable: m,
                    applicationId: t.id
                })
            );
}
