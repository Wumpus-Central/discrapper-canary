"use strict";
n.d(t, { A: () => s });
var r = n(559751),
    i = n(140851);
let s = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
        var t = e.state,
            n = e.options,
            s = e.name,
            a = n.offset,
            o = void 0 === a ? [0, 0] : a,
            l = i.DD.reduce(function (e, n) {
                var s, a, l, u, c, d;
                return (
                    (e[n] =
                        ((s = t.rects),
                        (a = (0, r.A)(n)),
                        (l = [i.kb, i.Mn].indexOf(a) >= 0 ? -1 : 1),
                        (c = (u = "function" == typeof o ? o(Object.assign({}, s, { placement: n })) : o)[0]),
                        (d = u[1]),
                        (c = c || 0),
                        (d = (d || 0) * l),
                        [i.kb, i.pG].indexOf(a) >= 0 ? { x: d, y: c } : { x: c, y: d })),
                    e
                );
            }, {}),
            u = l[t.placement],
            c = u.x,
            d = u.y;
        null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += d)),
            (t.modifiersData[s] = l);
    },
};
