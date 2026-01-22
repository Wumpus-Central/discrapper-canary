n.d(t, { A: () => f });
var r = n(420474),
    i = n(688899),
    a = n(514467),
    s = n(638704),
    o = n(395177),
    l = n(140851),
    c = n(444746),
    u = n(125685),
    d = n(658614);
function f(e, t) {
    void 0 === t && (t = {});
    var n = t,
        f = n.placement,
        p = void 0 === f ? e.placement : f,
        _ = n.strategy,
        h = void 0 === _ ? e.strategy : _,
        m = n.boundary,
        g = void 0 === m ? l.WY : m,
        E = n.rootBoundary,
        b = void 0 === E ? l.R9 : E,
        y = n.elementContext,
        O = void 0 === y ? l.xf : y,
        A = n.altBoundary,
        v = void 0 !== A && A,
        S = n.padding,
        I = void 0 === S ? 0 : S,
        T = (0, u.A)("number" != typeof I ? I : (0, d.A)(I, l.OM)),
        C = O === l.xf ? l.ir : l.xf,
        N = e.rects.popper,
        R = e.elements[v ? C : O],
        w = (0, r.A)((0, c.vq)(R) ? R : R.contextElement || (0, i.A)(e.elements.popper), g, b, h),
        P = (0, a.A)(e.elements.reference),
        D = (0, s.A)({
            reference: P,
            element: N,
            strategy: "absolute",
            placement: p,
        }),
        x = (0, o.A)(Object.assign({}, N, D)),
        L = O === l.xf ? x : P,
        j = {
            top: w.top - L.top + T.top,
            bottom: L.bottom - w.bottom + T.bottom,
            left: w.left - L.left + T.left,
            right: L.right - w.right + T.right,
        },
        M = e.modifiersData.offset;
    if (O === l.xf && M) {
        var k = M[p];
        Object.keys(j).forEach(function (e) {
            var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : -1,
                n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
            j[e] += k[n] * t;
        });
    }
    return j;
}
