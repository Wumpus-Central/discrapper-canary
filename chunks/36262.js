"use strict";
n.d(t, { A: () => i });
var r = n(638704);
let i = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (e) {
        var t = e.state,
            n = e.name;
        t.modifiersData[n] = (0, r.A)({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
        });
    },
    data: {},
};
