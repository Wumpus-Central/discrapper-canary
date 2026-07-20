"use strict";
var n = e(834647),
    o = e(486816),
    s = e(418911);
n(
    {
        target: "Set",
        proto: !0,
        real: !0,
        forced:
            !e(962249)("intersection", function (t) {
                return 2 === t.size && t.has(1) && t.has(2);
            }) ||
            o(function () {
                return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))));
            }),
    },
    { intersection: s },
);
