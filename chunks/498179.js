n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(283595),
    o = n(55563),
    s = n(780570),
    l = n(701560),
    c = n(785547);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: u = "md",
            playButtonVariant: f,
            disabledVariant: _,
            hideNotLaunchable: m,
            tooltipPosition: h,
            onClick: g,
            className: E,
            source: b,
            hover: y,
            innerClassName: O,
        } = e,
        v = {
            fullWidth: n,
            size: u,
            disabledVariant: _,
            tooltipPosition: h,
            onClick: g,
            className: E,
            hover: y,
            innerClassName: O,
        },
        S = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)),
        I = null != S ? S.sku.id : null,
        T = null != I ? I : t.primarySkuId,
        C = (0, i.e7)([o.Z], () => null != T && !o.Z.didFetchingSkuFail(T));
    return null != S && (0, s.Je)(S)
        ? (0, r.jsx)(
              c.Z,
              p(d({}, v), {
                  playButtonVariant: f,
                  libraryApplication: S,
                  source: b,
              }),
          )
        : C
          ? (0, r.jsx)("div", { children: "deprecated!" })
          : (0, r.jsx)(
                l.Z,
                p(d({}, v), {
                    variant: f,
                    hideNotLaunchable: m,
                    applicationId: t.id,
                }),
            );
}
