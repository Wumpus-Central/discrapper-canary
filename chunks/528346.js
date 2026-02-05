"use strict";
n.d(t, { A: () => _ });
var r = n(420474),
    i = n(688899),
    a = n(514467),
    s = n(638704),
    o = n(395177),
    l = n(140851),
    u = n(444746),
    c = n(125685),
    d = n(658614);
function _(e, t) {
    void 0 === t && (t = {});
    var n = t,
        _ = n.placement,
        f = void 0 === _ ? e.placement : _,
        p = n.strategy,
        h = void 0 === p ? e.strategy : p,
        m = n.boundary,
        g = void 0 === m ? l.WY : m,
        E = n.rootBoundary,
        A = void 0 === E ? l.R9 : E,
        I = n.elementContext,
        T = void 0 === I ? l.xf : I,
        y = n.altBoundary,
        S = void 0 !== y && y,
        v = n.padding,
        C = void 0 === v ? 0 : v,
        b = (0, c.A)("number" != typeof C ? C : (0, d.A)(C, l.OM)),
        N = T === l.xf ? l.ir : l.xf,
        R = e.rects.popper,
        O = e.elements[S ? N : T],
        D = (0, r.A)((0, u.vq)(O) ? O : O.contextElement || (0, i.A)(e.elements.popper), g, A, h),
        L = (0, a.A)(e.elements.reference),
        w = (0, s.A)({ reference: L, element: R, strategy: "absolute", placement: f }),
        x = (0, o.A)(Object.assign({}, R, w)),
        P = T === l.xf ? x : L,
        M = {
            top: D.top - P.top + b.top,
            bottom: P.bottom - D.bottom + b.bottom,
            left: D.left - P.left + b.left,
            right: P.right - D.right + b.right,
        },
        k = e.modifiersData.offset;
    if (T === l.xf && k) {
        var U = k[f];
        Object.keys(M).forEach(function (e) {
            var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : -1,
                n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
            M[e] += U[n] * t;
        });
    }
    return M;
}
