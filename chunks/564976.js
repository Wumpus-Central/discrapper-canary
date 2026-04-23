"use strict";
n.d(t, { A: () => p });
var r = n(140851),
    i = n(559751),
    s = n(264816),
    a = n(300449),
    o = n(461464),
    l = n(726402),
    u = n(821085),
    c = n(528346),
    d = n(499702),
    _ = n(839275),
    f = n(273101);
let p = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            p = e.name,
            h = n.mainAxis,
            E = n.altAxis,
            m = n.boundary,
            g = n.rootBoundary,
            A = n.altBoundary,
            I = n.padding,
            T = n.tether,
            S = void 0 === T || T,
            y = n.tetherOffset,
            N = void 0 === y ? 0 : y,
            v = (0, c.A)(t, { boundary: m, rootBoundary: g, padding: I, altBoundary: A }),
            C = (0, i.A)(t.placement),
            O = (0, d.A)(t.placement),
            R = !O,
            b = (0, s.A)(C),
            D = (0, a.A)(b),
            L = t.modifiersData.popperOffsets,
            w = t.rects.reference,
            M = t.rects.popper,
            P = "function" == typeof N ? N(Object.assign({}, t.rects, { placement: t.placement })) : N,
            x = "number" == typeof P ? { mainAxis: P, altAxis: P } : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
            k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            U = { x: 0, y: 0 };
        if (L) {
            if (void 0 === h || h) {
                var G,
                    F = "y" === b ? r.Mn : r.kb,
                    V = "y" === b ? r.sQ : r.pG,
                    B = "y" === b ? "height" : "width",
                    H = L[b],
                    j = H + v[F],
                    Y = H - v[V],
                    W = S ? -M[B] / 2 : 0,
                    K = O === r.ni ? w[B] : M[B],
                    $ = O === r.ni ? -M[B] : -w[B],
                    z = t.elements.arrow,
                    q = S && z ? (0, l.A)(z) : { width: 0, height: 0 },
                    X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, _.A)(),
                    Q = X[F],
                    Z = X[V],
                    J = (0, o.u)(0, w[B], q[B]),
                    ee = R ? w[B] / 2 - W - J - Q - x.mainAxis : K - J - Q - x.mainAxis,
                    et = R ? -w[B] / 2 + W + J + Z + x.mainAxis : $ + J + Z + x.mainAxis,
                    en = t.elements.arrow && (0, u.A)(t.elements.arrow),
                    er = en ? ("y" === b ? en.clientTop || 0 : en.clientLeft || 0) : 0,
                    ei = null != (G = null == k ? void 0 : k[b]) ? G : 0,
                    es = (0, o.u)(S ? (0, f.jk)(j, H + ee - ei - er) : j, H, S ? (0, f.T9)(Y, H + et - ei) : Y);
                (L[b] = es), (U[b] = es - H);
            }
            if (void 0 !== E && E) {
                var ea,
                    eo = "x" === b ? r.Mn : r.kb,
                    el = "x" === b ? r.sQ : r.pG,
                    eu = L[D],
                    ec = "y" === D ? "height" : "width",
                    ed = eu + v[eo],
                    e_ = eu - v[el],
                    ef = -1 !== [r.Mn, r.kb].indexOf(C),
                    ep = null != (ea = null == k ? void 0 : k[D]) ? ea : 0,
                    eh = ef ? ed : eu - w[ec] - M[ec] - ep + x.altAxis,
                    eE = ef ? eu + w[ec] + M[ec] - ep - x.altAxis : e_,
                    em = S && ef ? (0, o.P)(eh, eu, eE) : (0, o.u)(S ? eh : ed, eu, S ? eE : e_);
                (L[D] = em), (U[D] = em - eu);
            }
            t.modifiersData[p] = U;
        }
    },
    requiresIfExists: ["offset"],
};
