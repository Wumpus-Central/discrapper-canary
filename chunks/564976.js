"use strict";
n.d(t, { A: () => E });
var r = n(140851),
    i = n(559751),
    s = n(264816),
    a = n(300449),
    o = n(461464),
    l = n(726402),
    u = n(821085),
    d = n(528346),
    c = n(499702),
    _ = n(839275),
    f = n(273101);
let E = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            E = e.name,
            h = n.mainAxis,
            p = n.altAxis,
            m = n.boundary,
            g = n.rootBoundary,
            A = n.altBoundary,
            I = n.padding,
            T = n.tether,
            S = void 0 === T || T,
            y = n.tetherOffset,
            N = void 0 === y ? 0 : y,
            O = (0, d.A)(t, { boundary: m, rootBoundary: g, padding: I, altBoundary: A }),
            R = (0, i.A)(t.placement),
            v = (0, c.A)(t.placement),
            C = !v,
            b = (0, s.A)(R),
            D = (0, a.A)(b),
            L = t.modifiersData.popperOffsets,
            w = t.rects.reference,
            M = t.rects.popper,
            P = "function" == typeof N ? N(Object.assign({}, t.rects, { placement: t.placement })) : N,
            U = "number" == typeof P ? { mainAxis: P, altAxis: P } : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
            k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            x = { x: 0, y: 0 };
        if (L) {
            if (void 0 === h || h) {
                var G,
                    V = "y" === b ? r.Mn : r.kb,
                    F = "y" === b ? r.sQ : r.pG,
                    B = "y" === b ? "height" : "width",
                    H = L[b],
                    Y = H + O[V],
                    W = H - O[F],
                    j = S ? -M[B] / 2 : 0,
                    K = v === r.ni ? w[B] : M[B],
                    $ = v === r.ni ? -M[B] : -w[B],
                    z = t.elements.arrow,
                    q = S && z ? (0, l.A)(z) : { width: 0, height: 0 },
                    X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, _.A)(),
                    Q = X[V],
                    J = X[F],
                    Z = (0, o.u)(0, w[B], q[B]),
                    ee = C ? w[B] / 2 - j - Z - Q - U.mainAxis : K - Z - Q - U.mainAxis,
                    et = C ? -w[B] / 2 + j + Z + J + U.mainAxis : $ + Z + J + U.mainAxis,
                    en = t.elements.arrow && (0, u.A)(t.elements.arrow),
                    er = en ? ("y" === b ? en.clientTop || 0 : en.clientLeft || 0) : 0,
                    ei = null != (G = null == k ? void 0 : k[b]) ? G : 0,
                    es = (0, o.u)(S ? (0, f.jk)(Y, H + ee - ei - er) : Y, H, S ? (0, f.T9)(W, H + et - ei) : W);
                (L[b] = es), (x[b] = es - H);
            }
            if (void 0 !== p && p) {
                var ea,
                    eo = "x" === b ? r.Mn : r.kb,
                    el = "x" === b ? r.sQ : r.pG,
                    eu = L[D],
                    ed = "y" === D ? "height" : "width",
                    ec = eu + O[eo],
                    e_ = eu - O[el],
                    ef = -1 !== [r.Mn, r.kb].indexOf(R),
                    eE = null != (ea = null == k ? void 0 : k[D]) ? ea : 0,
                    eh = ef ? ec : eu - w[ed] - M[ed] - eE + U.altAxis,
                    ep = ef ? eu + w[ed] + M[ed] - eE - U.altAxis : e_,
                    em = S && ef ? (0, o.P)(eh, eu, ep) : (0, o.u)(S ? eh : ec, eu, S ? ep : e_);
                (L[D] = em), (x[D] = em - eu);
            }
            t.modifiersData[E] = x;
        }
    },
    requiresIfExists: ["offset"],
};
