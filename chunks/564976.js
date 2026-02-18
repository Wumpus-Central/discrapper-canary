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
            m = void 0 === h || h,
            E = n.altAxis,
            g = void 0 !== E && E,
            A = n.boundary,
            I = n.rootBoundary,
            T = n.altBoundary,
            S = n.padding,
            y = n.tether,
            v = void 0 === y || y,
            N = n.tetherOffset,
            C = void 0 === N ? 0 : N,
            b = (0, c.A)(t, { boundary: A, rootBoundary: I, padding: S, altBoundary: T }),
            R = (0, i.A)(t.placement),
            O = (0, d.A)(t.placement),
            D = !O,
            L = (0, s.A)(R),
            w = (0, a.A)(L),
            x = t.modifiersData.popperOffsets,
            M = t.rects.reference,
            P = t.rects.popper,
            k = "function" == typeof C ? C(Object.assign({}, t.rects, { placement: t.placement })) : C,
            U = "number" == typeof k ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            F = { x: 0, y: 0 };
        if (x) {
            if (m) {
                var V,
                    B = "y" === L ? r.Mn : r.kb,
                    H = "y" === L ? r.sQ : r.pG,
                    j = "y" === L ? "height" : "width",
                    Y = x[L],
                    W = Y + b[B],
                    K = Y - b[H],
                    z = v ? -P[j] / 2 : 0,
                    $ = O === r.ni ? M[j] : P[j],
                    q = O === r.ni ? -P[j] : -M[j],
                    Z = t.elements.arrow,
                    X = v && Z ? (0, l.A)(Z) : { width: 0, height: 0 },
                    Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, _.A)(),
                    J = Q[B],
                    ee = Q[H],
                    et = (0, o.u)(0, M[j], X[j]),
                    en = D ? M[j] / 2 - z - et - J - U.mainAxis : $ - et - J - U.mainAxis,
                    er = D ? -M[j] / 2 + z + et + ee + U.mainAxis : q + et + ee + U.mainAxis,
                    ei = t.elements.arrow && (0, u.A)(t.elements.arrow),
                    es = ei ? ("y" === L ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    ea = null != (V = null == G ? void 0 : G[L]) ? V : 0,
                    eo = Y + en - ea - es,
                    el = Y + er - ea,
                    eu = (0, o.u)(v ? (0, f.jk)(W, eo) : W, Y, v ? (0, f.T9)(K, el) : K);
                (x[L] = eu), (F[L] = eu - Y);
            }
            if (g) {
                var ec,
                    ed = "x" === L ? r.Mn : r.kb,
                    e_ = "x" === L ? r.sQ : r.pG,
                    ef = x[w],
                    ep = "y" === w ? "height" : "width",
                    eh = ef + b[ed],
                    em = ef - b[e_],
                    eE = -1 !== [r.Mn, r.kb].indexOf(R),
                    eg = null != (ec = null == G ? void 0 : G[w]) ? ec : 0,
                    eA = eE ? eh : ef - M[ep] - P[ep] - eg + U.altAxis,
                    eI = eE ? ef + M[ep] + P[ep] - eg - U.altAxis : em,
                    eT = v && eE ? (0, o.P)(eA, ef, eI) : (0, o.u)(v ? eA : eh, ef, v ? eI : em);
                (x[w] = eT), (F[w] = eT - ef);
            }
            t.modifiersData[p] = F;
        }
    },
    requiresIfExists: ["offset"],
};
