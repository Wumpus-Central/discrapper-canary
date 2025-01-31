n.d(t, {
    NW: () => a,
    tf: () => r,
    zH: () => s
});
var i = n(192379),
    r = function (e) {
        return (0, i.useEffect)(e, []);
    },
    a = function () {
        var e = (0, i.useState)(0)[1],
            t = (0, i.useRef)(!1);
        return (
            r(function () {
                return function () {
                    t.current = !0;
                };
            }),
            function () {
                t.current || e({});
            }
        );
    };
function s(e) {
    var t = (0, i.useRef)(void 0);
    return (
        (0, i.useEffect)(function () {
            t.current = e;
        }),
        t.current
    );
}
