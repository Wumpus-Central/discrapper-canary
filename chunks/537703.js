t.d(r, { b: () => i });
var e = t(573654),
    o = t(73800);
function i(n) {
    var r = n.accept;
    return (0, o.useMemo)(
        function () {
            return (0, e.k)(null != n.accept, "accept must be defined"), Array.isArray(r) ? r : [r];
        },
        [r],
    );
}
