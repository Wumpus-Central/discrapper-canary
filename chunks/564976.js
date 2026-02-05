"use strict";
n.d(t, { A: () => p });
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
            g = n.altAxis,
            E = void 0 !== g && g,
            A = n.boundary,
            I = n.rootBoundary,
            T = n.altBoundary,
            y = n.padding,
            S = n.tether,
            v = void 0 === S || S,
            C = n.tetherOffset,
            b = void 0 === C ? 0 : C,
            N = (0, c.A)(t, { boundary: A, rootBoundary: I, padding: y, altBoundary: T }),
            R = (0, i.A)(t.placement),
            O = (0, d.A)(t.placement),
            D = !O,
            L = (0, a.A)(R),
            w = (0, s.A)(L),
            x = t.modifiersData.popperOffsets,
            P = t.rects.reference,
            M = t.rects.popper,
            k = "function" == typeof b ? b(Object.assign({}, t.rects, { placement: t.placement })) : b,
            U = "number" == typeof k ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            V = { x: 0, y: 0 };
        if (x) {
            if (m) {
                var F,
                    B = "y" === L ? r.Mn : r.kb,
                    j = "y" === L ? r.sQ : r.pG,
                    H = "y" === L ? "height" : "width",
                    Y = x[L],
                    W = Y + N[B],
                    K = Y - N[j],
                    z = v ? -M[H] / 2 : 0,
                    $ = O === r.ni ? P[H] : M[H],
                    q = O === r.ni ? -M[H] : -P[H],
                    Z = t.elements.arrow,
                    Q = v && Z ? (0, l.A)(Z) : { width: 0, height: 0 },
                    X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, _.A)(),
                    J = X[B],
                    ee = X[j],
                    et = (0, o.u)(0, P[H], Q[H]),
                    en = D ? P[H] / 2 - z - et - J - U.mainAxis : $ - et - J - U.mainAxis,
                    er = D ? -P[H] / 2 + z + et + ee + U.mainAxis : q + et + ee + U.mainAxis,
                    ei = t.elements.arrow && (0, u.A)(t.elements.arrow),
                    ea = ei ? ("y" === L ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    es = null != (F = null == G ? void 0 : G[L]) ? F : 0,
                    eo = Y + en - es - ea,
                    el = Y + er - es,
                    eu = (0, o.u)(v ? (0, f.jk)(W, eo) : W, Y, v ? (0, f.T9)(K, el) : K);
                (x[L] = eu), (V[L] = eu - Y);
            }
            if (E) {
                var ec,
                    ed = "x" === L ? r.Mn : r.kb,
                    e_ = "x" === L ? r.sQ : r.pG,
                    ef = x[w],
                    ep = "y" === w ? "height" : "width",
                    eh = ef + N[ed],
                    em = ef - N[e_],
                    eg = -1 !== [r.Mn, r.kb].indexOf(R),
                    eE = null != (ec = null == G ? void 0 : G[w]) ? ec : 0,
                    eA = eg ? eh : ef - P[ep] - M[ep] - eE + U.altAxis,
                    eI = eg ? ef + P[ep] + M[ep] - eE - U.altAxis : em,
                    eT = v && eg ? (0, o.P)(eA, ef, eI) : (0, o.u)(v ? eA : eh, ef, v ? eI : em);
                (x[w] = eT), (V[w] = eT - ef);
            }
            t.modifiersData[p] = V;
        }
    },
    requiresIfExists: ["offset"],
};
