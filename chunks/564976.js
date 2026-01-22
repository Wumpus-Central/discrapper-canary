n.d(t, { A: () => _ });
var r = n(140851),
    i = n(559751),
    a = n(264816),
    s = n(300449),
    o = n(461464),
    l = n(726402),
    c = n(821085),
    u = n(528346),
    d = n(499702),
    f = n(839275),
    p = n(273101);
let _ = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            _ = e.name,
            h = n.mainAxis,
            m = void 0 === h || h,
            g = n.altAxis,
            E = void 0 !== g && g,
            b = n.boundary,
            y = n.rootBoundary,
            O = n.altBoundary,
            A = n.padding,
            v = n.tether,
            S = void 0 === v || v,
            I = n.tetherOffset,
            T = void 0 === I ? 0 : I,
            C = (0, u.A)(t, {
                boundary: b,
                rootBoundary: y,
                padding: A,
                altBoundary: O,
            }),
            N = (0, i.A)(t.placement),
            R = (0, d.A)(t.placement),
            w = !R,
            P = (0, a.A)(N),
            D = (0, s.A)(P),
            x = t.modifiersData.popperOffsets,
            L = t.rects.reference,
            j = t.rects.popper,
            M = "function" == typeof T ? T(Object.assign({}, t.rects, { placement: t.placement })) : T,
            k =
                "number" == typeof M
                    ? {
                          mainAxis: M,
                          altAxis: M,
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0,
                          },
                          M,
                      ),
            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0,
            };
        if (x) {
            if (m) {
                var V,
                    F = "y" === P ? r.Mn : r.kb,
                    B = "y" === P ? r.sQ : r.pG,
                    H = "y" === P ? "height" : "width",
                    Y = x[P],
                    W = Y + C[F],
                    K = Y - C[B],
                    z = S ? -j[H] / 2 : 0,
                    q = R === r.ni ? L[H] : j[H],
                    X = R === r.ni ? -j[H] : -L[H],
                    Z = t.elements.arrow,
                    Q =
                        S && Z
                            ? (0, l.A)(Z)
                            : {
                                  width: 0,
                                  height: 0,
                              },
                    $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.A)(),
                    J = $[F],
                    ee = $[B],
                    et = (0, o.u)(0, L[H], Q[H]),
                    en = w ? L[H] / 2 - z - et - J - k.mainAxis : q - et - J - k.mainAxis,
                    er = w ? -L[H] / 2 + z + et + ee + k.mainAxis : X + et + ee + k.mainAxis,
                    ei = t.elements.arrow && (0, c.A)(t.elements.arrow),
                    ea = ei ? ("y" === P ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    es = null != (V = null == U ? void 0 : U[P]) ? V : 0,
                    eo = Y + en - es - ea,
                    el = Y + er - es,
                    ec = (0, o.u)(S ? (0, p.jk)(W, eo) : W, Y, S ? (0, p.T9)(K, el) : K);
                (x[P] = ec), (G[P] = ec - Y);
            }
            if (E) {
                var eu,
                    ed = "x" === P ? r.Mn : r.kb,
                    ef = "x" === P ? r.sQ : r.pG,
                    ep = x[D],
                    e_ = "y" === D ? "height" : "width",
                    eh = ep + C[ed],
                    em = ep - C[ef],
                    eg = -1 !== [r.Mn, r.kb].indexOf(N),
                    eE = null != (eu = null == U ? void 0 : U[D]) ? eu : 0,
                    eb = eg ? eh : ep - L[e_] - j[e_] - eE + k.altAxis,
                    ey = eg ? ep + L[e_] + j[e_] - eE - k.altAxis : em,
                    eO = S && eg ? (0, o.P)(eb, ep, ey) : (0, o.u)(S ? eb : eh, ep, S ? ey : em);
                (x[D] = eO), (G[D] = eO - ep);
            }
            t.modifiersData[_] = G;
        }
    },
    requiresIfExists: ["offset"],
};
