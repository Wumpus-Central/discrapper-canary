n.d(t, { A: () => s });
var r = n(559751),
    i = n(140851);
function a(e, t, n) {
    var a = (0, r.A)(e),
        s = [i.kb, i.Mn].indexOf(a) >= 0 ? -1 : 1,
        o = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
        l = o[0],
        c = o[1];
    return (
        (l = l || 0),
        (c = (c || 0) * s),
        [i.kb, i.pG].indexOf(a) >= 0
            ? {
                  x: c,
                  y: l,
              }
            : {
                  x: l,
                  y: c,
              }
    );
}
let s = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            s = n.offset,
            o = void 0 === s ? [0, 0] : s,
            l = i.DD.reduce(function (e, n) {
                return (e[n] = a(n, t.rects, o)), e;
            }, {}),
            c = l[t.placement],
            u = c.x,
            d = c.y;
        null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += d)),
            (t.modifiersData[r] = l);
    },
};
