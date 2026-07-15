d.d(t, { t: () => a });
var i = d(529058),
    e = d(287822),
    c = d(211396);
d(599680);
var a = ({ spinnerConfig: l, className: t, hideText: d = !1, presentational: a = !1 }) => {
    let { t: s } = (0, i.n)(),
        n = d ? void 0 : (l?.title ?? s("loadingCircle.holdOn")),
        Z = d ? void 0 : (l?.subtitle ?? s("loadingCircle.validating"));
    return (0, e.v)(c.t, {
        title: n,
        subtitle: Z,
        ariaLabel: a ? void 0 : [n, Z].filter(Boolean).join(". ") || void 0,
        size: l?.size ?? "large",
        fullScreen: !0,
        className: t,
        presentational: a,
    });
};
