n.d(t, { Z: () => a });
var r = n(126387),
    i = n(740078);
function o(e, t, n) {
    var o = (0, r.Z)(e),
        a = [i.t$, i.we].indexOf(o) >= 0 ? -1 : 1,
        s = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
        l = s[0],
        c = s[1];
    return (
        (l = l || 0),
        (c = (c || 0) * a),
        [i.t$, i.F2].indexOf(o) >= 0
            ? {
                  x: c,
                  y: l
              }
            : {
                  x: l,
                  y: c
              }
    );
}
let a = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: function (e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            a = n.offset,
            s = void 0 === a ? [0, 0] : a,
            l = i.Ct.reduce(function (e, n) {
                return (e[n] = o(n, t.rects, s)), e;
            }, {}),
            c = l[t.placement],
            u = c.x,
            d = c.y;
        null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += d)), (t.modifiersData[r] = l);
    }
};
