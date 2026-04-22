"use strict";
function r(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n,
            r = getComputedStyle(e, null);
        return (
            i(r.overflowY, t) ||
            i(r.overflowX, t) ||
            (!!(n = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                    return null;
                }
            })(e)) &&
                (n.clientHeight < e.scrollHeight || n.clientWidth < e.scrollWidth))
        );
    }
    return !1;
}
function o(e, t, n, r, i, a, o, u) {
    return (a < e && o > t) || (a > e && o < t)
        ? 0
        : (a <= e && u <= n) || (o >= t && u >= n)
          ? a - e - r
          : (o > t && u < n) || (a < e && u > n)
            ? o - t + i
            : 0;
}
n.d(t, { A: () => u });
var u = function (e, t) {
    var n = window,
        i = t.scrollMode,
        u = t.block,
        s = t.inline,
        l = t.boundary,
        d = t.skipOverflowHiddenElements,
        c =
            "function" == typeof l
                ? l
                : function (e) {
                      return e !== l;
                  };
    if (!r(e)) throw TypeError("Invalid target");
    for (var f, h, p = document.scrollingElement || document.documentElement, m = [], v = e; r(v) && c(v); ) {
        if ((v = null == (h = (f = v).parentElement) ? f.getRootNode().host || null : h) === p) {
            m.push(v);
            break;
        }
        (null != v && v === document.body && a(v) && !a(document.documentElement)) ||
            (null != v && a(v, d) && m.push(v));
    }
    for (
        var _ = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            y = window.scrollX || pageXOffset,
            D = window.scrollY || pageYOffset,
            b = e.getBoundingClientRect(),
            C = b.height,
            E = b.width,
            w = b.top,
            A = b.right,
            B = b.bottom,
            F = b.left,
            V = "start" === u || "nearest" === u ? w : "end" === u ? B : w + C / 2,
            T = "center" === s ? F + E / 2 : "end" === s ? A : F,
            k = [],
            x = 0;
        x < m.length;
        x++
    ) {
        var P = m[x],
            O = P.getBoundingClientRect(),
            S = O.height,
            M = O.width,
            R = O.top,
            N = O.right,
            L = O.bottom,
            I = O.left;
        if ("if-needed" === i && w >= 0 && F >= 0 && B <= g && A <= _ && w >= R && B <= L && F >= I && A <= N) break;
        var j = getComputedStyle(P),
            G = parseInt(j.borderLeftWidth, 10),
            W = parseInt(j.borderTopWidth, 10),
            K = parseInt(j.borderRightWidth, 10),
            U = parseInt(j.borderBottomWidth, 10),
            H = 0,
            q = 0,
            z = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - G - K : 0,
            Q = "offsetHeight" in P ? P.offsetHeight - P.clientHeight - W - U : 0,
            X = "offsetWidth" in P ? (0 === P.offsetWidth ? 0 : M / P.offsetWidth) : 0,
            Z = "offsetHeight" in P ? (0 === P.offsetHeight ? 0 : S / P.offsetHeight) : 0;
        if (p === P)
            (H =
                "start" === u
                    ? V
                    : "end" === u
                      ? V - g
                      : "nearest" === u
                        ? o(D, D + g, g, W, U, D + V, D + V + C, C)
                        : V - g / 2),
                (q =
                    "start" === s
                        ? T
                        : "center" === s
                          ? T - _ / 2
                          : "end" === s
                            ? T - _
                            : o(y, y + _, _, G, K, y + T, y + T + E, E)),
                (H = Math.max(0, H + D)),
                (q = Math.max(0, q + y));
        else {
            (H =
                "start" === u
                    ? V - R - W
                    : "end" === u
                      ? V - L + U + Q
                      : "nearest" === u
                        ? o(R, L, S, W, U + Q, V, V + C, C)
                        : V - (R + S / 2) + Q / 2),
                (q =
                    "start" === s
                        ? T - I - G
                        : "center" === s
                          ? T - (I + M / 2) + z / 2
                          : "end" === s
                            ? T - N + K + z
                            : o(I, N, M, G, K + z, T, T + E, E));
            var Y = P.scrollLeft,
                J = P.scrollTop;
            (V += J - (H = Math.max(0, Math.min(J + H / Z, P.scrollHeight - S / Z + Q)))),
                (T += Y - (q = Math.max(0, Math.min(Y + q / X, P.scrollWidth - M / X + z))));
        }
        k.push({ el: P, top: H, left: q });
    }
    return k;
};
