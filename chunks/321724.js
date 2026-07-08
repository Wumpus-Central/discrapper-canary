i.d(t, { t: () => a });
var r = i(31144),
    n = i(248702),
    o = i(443781);
i(73795);
var a = ({ spinnerConfig: e, className: t, hideText: i = !1 }) => {
    let { t: a } = (0, r.n)();
    return (0, n.v)(o.t, {
        title: i ? void 0 : (e?.title ?? a("loadingCircle.hangOn")),
        subtitle: i ? void 0 : (e?.subtitle ?? a("loadingCircle.validating")),
        size: e?.size ?? "large",
        fullScreen: !0,
        className: t,
    });
};
