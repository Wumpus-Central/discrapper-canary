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
                var s, a, l, u, d, c;
                return (
                    (e[n] =
                        ((s = t.rects),
                        (a = (0, r.A)(n)),
                        (l = [i.kb, i.Mn].indexOf(a) >= 0 ? -1 : 1),
                        (d = (u = "function" == typeof o ? o(Object.assign({}, s, { placement: n })) : o)[0]),
                        (c = u[1]),
                        (d = d || 0),
                        (c = (c || 0) * l),
                        [i.kb, i.pG].indexOf(a) >= 0 ? { x: c, y: d } : { x: d, y: c })),
                    e
                );
            }, {}),
            u = l[t.placement],
            d = u.x,
            c = u.y;
        null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += d), (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[s] = l);
    },
};
