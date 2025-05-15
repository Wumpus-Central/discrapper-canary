n.d(t, {
    NW: () => a,
    tf: () => i,
    zH: () => o
});
var r = n(73800),
    i = function (e) {
        return (0, r.useEffect)(e, []);
    },
    a = function () {
        var e = (0, r.useState)(0)[1],
            t = (0, r.useRef)(!1);
        return (
            i(function () {
                return function () {
                    t.current = !0;
                };
            }),
            function () {
                t.current || e({});
            }
        );
    };
function o(e) {
    var t = (0, r.useRef)(void 0);
    return (
        (0, r.useEffect)(function () {
            t.current = e;
        }),
        t.current
    );
}
