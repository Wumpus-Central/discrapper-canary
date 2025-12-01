n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(755721),
    o = n(283595),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: d = a.zx.Sizes.LARGE,
            color: p,
            customDisabledColor: m,
            hideNotLaunchable: h,
            tooltipPosition: g,
            onClick: E,
            className: b,
            source: y,
            hover: O,
            innerClassName: v,
        } = e,
        S = {
            fullWidth: n,
            size: d,
            color: p,
            customDisabledColor: m,
            tooltipPosition: g,
            onClick: E,
            className: b,
            hover: O,
            innerClassName: v,
        },
        I = (0, i.e7)([o.Z], () => o.Z.getActiveLibraryApplication(t.id)),
        T = null != I ? I.sku.id : null,
        A = null != T ? T : t.primarySkuId,
        C = (0, i.e7)([s.Z], () => null != A && !s.Z.didFetchingSkuFail(A));
    return null != I && (0, l.Je)(I)
        ? (0, r.jsx)(
              u.Z,
              _(f({}, S), {
                  libraryApplication: I,
                  source: y,
              }),
          )
        : C
          ? (0, r.jsx)("div", { children: "deprecated!" })
          : (0, r.jsx)(
                c.Z,
                _(f({}, S), {
                    hideNotLaunchable: h,
                    applicationId: t.id,
                }),
            );
}
