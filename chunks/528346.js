"use strict";
n.d(t, { A: () => _ });
var r = n(420474),
    i = n(688899),
    s = n(514467),
    a = n(638704),
    o = n(395177),
    l = n(140851),
    u = n(444746),
    d = n(125685),
    c = n(658614);
function _(e, t) {
    void 0 === t && (t = {});
    var n = t,
        _ = n.placement,
        f = void 0 === _ ? e.placement : _,
        E = n.strategy,
        h = void 0 === E ? e.strategy : E,
        p = n.boundary,
        m = void 0 === p ? l.WY : p,
        g = n.rootBoundary,
        A = void 0 === g ? l.R9 : g,
        I = n.elementContext,
        T = void 0 === I ? l.xf : I,
        S = n.altBoundary,
        y = n.padding,
        N = void 0 === y ? 0 : y,
        O = (0, d.A)("number" != typeof N ? N : (0, c.A)(N, l.OM)),
        R = T === l.xf ? l.ir : l.xf,
        v = e.rects.popper,
        C = e.elements[void 0 !== S && S ? R : T],
        b = (0, r.A)((0, u.vq)(C) ? C : C.contextElement || (0, i.A)(e.elements.popper), m, A, h),
        D = (0, s.A)(e.elements.reference),
        L = (0, a.A)({ reference: D, element: v, strategy: "absolute", placement: f }),
        w = (0, o.A)(Object.assign({}, v, L)),
        M = T === l.xf ? w : D,
        P = {
            top: b.top - M.top + O.top,
            bottom: M.bottom - b.bottom + O.bottom,
            left: b.left - M.left + O.left,
            right: M.right - b.right + O.right,
        },
        U = e.modifiersData.offset;
    if (T === l.xf && U) {
        var k = U[f];
        Object.keys(P).forEach(function (e) {
            var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : -1,
                n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
            P[e] += k[n] * t;
        });
    }
    return P;
}
