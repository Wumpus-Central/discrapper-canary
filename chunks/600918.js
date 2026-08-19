"use strict";
r.d(t, { CH: () => i, H5: () => o, NQ: () => a });
var n = r(582128),
    o = function (e) {
        return (0, n.useEffect)(e, []);
    },
    i = function () {
        var e = (0, n.useState)(0)[1],
            t = (0, n.useRef)(!1);
        return (
            o(function () {
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
    var t = (0, n.useRef)(void 0);
    return (
        (0, n.useEffect)(function () {
            t.current = e;
        }),
        t.current
    );
}
