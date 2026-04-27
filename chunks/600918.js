"use strict";
r.d(t, { CH: () => a, H5: () => s, NQ: () => o });
var n = r(64700),
    s = function (e) {
        return (0, n.useEffect)(e, []);
    },
    a = function () {
        var e = (0, n.useState)(0)[1],
            t = (0, n.useRef)(!1);
        return (
            s(function () {
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
    var t = (0, n.useRef)(void 0);
    return (
        (0, n.useEffect)(function () {
            t.current = e;
        }),
        t.current
    );
}
