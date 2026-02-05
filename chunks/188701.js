"use strict";
var n = e(834647),
    o = e(529030),
    s = e(794779),
    i = e(348878),
    u = e(279740);
n(
    {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
            e(486816)(function () {
                return 0x100000001 !== [].push.call({ length: 0x100000000 }, 1);
            }) ||
            !(function () {
                try {
                    Object.defineProperty([], "length", { writable: !1 }).push();
                } catch (t) {
                    return t instanceof TypeError;
                }
            })(),
    },
    {
        push: function (t) {
            var r = o(this),
                e = s(r),
                n = arguments.length;
            u(e + n);
            for (var c = 0; c < n; c++) (r[e] = arguments[c]), e++;
            return i(r, e), e;
        },
    },
);
