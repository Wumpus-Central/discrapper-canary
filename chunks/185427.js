n.d(t, { Z: () => s });
var i = n(126387),
    r = n(740078);
function a(e, t, n) {
    var a = (0, i.Z)(e),
        s = [r.t$, r.we].indexOf(a) >= 0 ? -1 : 1,
        o = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
        l = o[0],
        u = o[1];
    return (
        (l = l || 0),
        (u = (u || 0) * s),
        [r.t$, r.F2].indexOf(a) >= 0
            ? {
                  x: u,
                  y: l
              }
            : {
                  x: l,
                  y: u
              }
    );
}
let s = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: function (e) {
        var t = e.state,
            n = e.options,
            i = e.name,
            s = n.offset,
            o = void 0 === s ? [0, 0] : s,
            l = r.Ct.reduce(function (e, n) {
                return (e[n] = a(n, t.rects, o)), e;
            }, {}),
            u = l[t.placement],
            c = u.x,
            d = u.y;
        null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += d)), (t.modifiersData[i] = l);
    }
};
