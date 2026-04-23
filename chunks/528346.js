"use strict";
n.d(t, { A: () => _ });
var r = n(420474),
    i = n(688899),
    s = n(514467),
    a = n(638704),
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
        E = n.boundary,
        m = void 0 === E ? l.WY : E,
        g = n.rootBoundary,
        A = void 0 === g ? l.R9 : g,
        I = n.elementContext,
        T = void 0 === I ? l.xf : I,
        S = n.altBoundary,
        y = n.padding,
        N = void 0 === y ? 0 : y,
        v = (0, c.A)("number" != typeof N ? N : (0, d.A)(N, l.OM)),
        C = T === l.xf ? l.ir : l.xf,
        O = e.rects.popper,
        R = e.elements[void 0 !== S && S ? C : T],
        b = (0, r.A)((0, u.vq)(R) ? R : R.contextElement || (0, i.A)(e.elements.popper), m, A, h),
        D = (0, s.A)(e.elements.reference),
        L = (0, a.A)({ reference: D, element: O, strategy: "absolute", placement: f }),
        w = (0, o.A)(Object.assign({}, O, L)),
        M = T === l.xf ? w : D,
        P = {
            top: b.top - M.top + v.top,
            bottom: M.bottom - b.bottom + v.bottom,
            left: b.left - M.left + v.left,
            right: M.right - b.right + v.right,
        },
        x = e.modifiersData.offset;
    if (T === l.xf && x) {
        var k = x[f];
        Object.keys(P).forEach(function (e) {
            var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : -1,
                n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
            P[e] += k[n] * t;
        });
    }
    return P;
}
