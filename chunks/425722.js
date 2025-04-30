n.d(t, { b: () => o });
var r = n(573654),
    i = n(192379);
function o(e) {
    var t = e.accept;
    return (0, i.useMemo)(
        function () {
            return (0, r.k)(null != e.accept, 'accept must be defined'), Array.isArray(t) ? t : [t];
        },
        [t]
    );
}
