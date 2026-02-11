"use strict";
n.d(t, { A: () => h });
var r = n(140851),
    i = n(559751),
    a = n(264816),
    s = n(300449),
    o = n(461464),
    l = n(726402),
    u = n(821085),
    c = n(528346),
    d = n(499702),
    _ = n(839275),
    f = n(273101);
let h = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            h = e.name,
            p = n.mainAxis,
            g = void 0 === p || p,
            E = n.altAxis,
            A = void 0 !== E && E,
            I = n.boundary,
            T = n.rootBoundary,
            y = n.altBoundary,
            S = n.padding,
            v = n.tether,
            C = void 0 === v || v,
            b = n.tetherOffset,
            N = void 0 === b ? 0 : b,
            R = (0, c.A)(t, { boundary: I, rootBoundary: T, padding: S, altBoundary: y }),
            O = (0, i.A)(t.placement),
            D = (0, d.A)(t.placement),
            L = !D,
            w = (0, a.A)(O),
            x = (0, s.A)(w),
            P = t.modifiersData.popperOffsets,
            M = t.rects.reference,
            k = t.rects.popper,
            U = "function" == typeof N ? N(Object.assign({}, t.rects, { placement: t.placement })) : N,
            G = "number" == typeof U ? { mainAxis: U, altAxis: U } : Object.assign({ mainAxis: 0, altAxis: 0 }, U),
            F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            V = { x: 0, y: 0 };
        if (P) {
            if (g) {
                var B,
                    j = "y" === w ? r.Mn : r.kb,
                    H = "y" === w ? r.sQ : r.pG,
                    Y = "y" === w ? "height" : "width",
                    W = P[w],
                    K = W + R[j],
                    $ = W - R[H],
                    z = C ? -k[Y] / 2 : 0,
                    q = D === r.ni ? M[Y] : k[Y],
                    X = D === r.ni ? -k[Y] : -M[Y],
                    Z = t.elements.arrow,
                    Q = C && Z ? (0, l.A)(Z) : { width: 0, height: 0 },
                    J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, _.A)(),
                    ee = J[j],
                    et = J[H],
                    en = (0, o.u)(0, M[Y], Q[Y]),
                    er = L ? M[Y] / 2 - z - en - ee - G.mainAxis : q - en - ee - G.mainAxis,
                    ei = L ? -M[Y] / 2 + z + en + et + G.mainAxis : X + en + et + G.mainAxis,
                    ea = t.elements.arrow && (0, u.A)(t.elements.arrow),
                    es = ea ? ("y" === w ? ea.clientTop || 0 : ea.clientLeft || 0) : 0,
                    eo = null != (B = null == F ? void 0 : F[w]) ? B : 0,
                    el = W + er - eo - es,
                    eu = W + ei - eo,
                    ec = (0, o.u)(C ? (0, f.jk)(K, el) : K, W, C ? (0, f.T9)($, eu) : $);
                (P[w] = ec), (V[w] = ec - W);
            }
            if (A) {
                var ed,
                    e_ = "x" === w ? r.Mn : r.kb,
                    ef = "x" === w ? r.sQ : r.pG,
                    eh = P[x],
                    ep = "y" === x ? "height" : "width",
                    em = eh + R[e_],
                    eg = eh - R[ef],
                    eE = -1 !== [r.Mn, r.kb].indexOf(O),
                    eA = null != (ed = null == F ? void 0 : F[x]) ? ed : 0,
                    eI = eE ? em : eh - M[ep] - k[ep] - eA + G.altAxis,
                    eT = eE ? eh + M[ep] + k[ep] - eA - G.altAxis : eg,
                    ey = C && eE ? (0, o.P)(eI, eh, eT) : (0, o.u)(C ? eI : em, eh, C ? eT : eg);
                (P[x] = ey), (V[x] = ey - eh);
            }
            t.modifiersData[h] = V;
        }
    },
    requiresIfExists: ["offset"],
};
