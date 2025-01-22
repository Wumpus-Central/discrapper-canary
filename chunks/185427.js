var i = r(126387),
    a = r(740078);
function o(e, n, r) {
    var o = (0, i.Z)(e),
        s = [a.t$, a.we].indexOf(o) >= 0 ? -1 : 1,
        l = 'function' == typeof r ? r(Object.assign({}, n, { placement: e })) : r,
        u = l[0],
        c = l[1];
    return (
        (u = u || 0),
        (c = (c || 0) * s),
        [a.t$, a.F2].indexOf(o) >= 0
            ? {
                  x: c,
                  y: u
              }
            : {
                  x: u,
                  y: c
              }
    );
}
function s(e) {
    var n = e.state,
        r = e.options,
        i = e.name,
        s = r.offset,
        l = void 0 === s ? [0, 0] : s,
        u = a.Ct.reduce(function (e, r) {
            return (e[r] = o(r, n.rects, l)), e;
        }, {}),
        c = u[n.placement],
        d = c.x,
        f = c.y;
    null != n.modifiersData.popperOffsets && ((n.modifiersData.popperOffsets.x += d), (n.modifiersData.popperOffsets.y += f)), (n.modifiersData[i] = u);
}
n.Z = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: s
};
