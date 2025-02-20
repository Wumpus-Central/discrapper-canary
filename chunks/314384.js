n.d(t, {
    NW: () => o,
    tf: () => i,
    zH: () => a
});
var r = n(192379),
    i = function (e) {
        return (0, r.useEffect)(e, []);
    },
    o = function () {
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
function a(e) {
    var t = (0, r.useRef)(void 0);
    return (
        (0, r.useEffect)(function () {
            t.current = e;
        }),
        t.current
    );
}
