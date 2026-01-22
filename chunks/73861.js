n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(189081),
    s = n(67480),
    o = n(674378),
    l = n(598429),
    c = n(979604);

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
            hideNotLaunchable: h,
            tooltipPosition: m,
            onClick: g,
            className: E,
            source: b,
            hover: y,
            innerClassName: O,
        } = e,
        A = {
            fullWidth: n,
            size: u,
            disabledVariant: _,
            tooltipPosition: m,
            onClick: g,
            className: E,
            hover: y,
            innerClassName: O,
        },
        v = (0, i.bG)([a.A], () => a.A.getActiveLibraryApplication(t.id)),
        S = null != v ? v.sku.id : null,
        I = null != S ? S : t.primarySkuId,
        T = (0, i.bG)([s.A], () => null != I && !s.A.didFetchingSkuFail(I));
    return null != v && (0, o.XZ)(v)
        ? (0, r.jsx)(
              c.A,
              p(d({}, A), {
                  playButtonVariant: f,
                  libraryApplication: v,
                  source: b,
              }),
          )
        : T
          ? (0, r.jsx)("div", {
                children: "deprecated!",
            })
          : (0, r.jsx)(
                l.A,
                p(d({}, A), {
                    variant: f,
                    hideNotLaunchable: h,
                    applicationId: t.id,
                }),
            );
}
