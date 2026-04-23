"use strict";
function r(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function s(e, t) {
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
function a(e, t, n, r, i, s, a, o) {
    return (s < e && a > t) || (s > e && a < t)
        ? 0
        : (s <= e && o <= n) || (a >= t && o >= n)
          ? s - e - r
          : (a > t && o < n) || (s < e && o > n)
            ? a - t + i
            : 0;
}
n.d(t, { A: () => o });
var o = function (e, t) {
    var n = window,
        i = t.scrollMode,
        o = t.block,
        l = t.inline,
        u = t.boundary,
        c = t.skipOverflowHiddenElements,
        d =
            "function" == typeof u
                ? u
                : function (e) {
                      return e !== u;
                  };
    if (!r(e)) throw TypeError("Invalid target");
    for (var _, f, p = document.scrollingElement || document.documentElement, h = [], E = e; r(E) && d(E); ) {
        if ((E = null == (f = (_ = E).parentElement) ? _.getRootNode().host || null : f) === p) {
            h.push(E);
            break;
        }
        (null != E && E === document.body && s(E) && !s(document.documentElement)) ||
            (null != E && s(E, c) && h.push(E));
    }
    for (
        var m = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            A = window.scrollX || pageXOffset,
            I = window.scrollY || pageYOffset,
            T = e.getBoundingClientRect(),
            S = T.height,
            y = T.width,
            N = T.top,
            v = T.right,
            C = T.bottom,
            O = T.left,
            R = "start" === o || "nearest" === o ? N : "end" === o ? C : N + S / 2,
            b = "center" === l ? O + y / 2 : "end" === l ? v : O,
            D = [],
            L = 0;
        L < h.length;
        L++
    ) {
        var w = h[L],
            M = w.getBoundingClientRect(),
            P = M.height,
            x = M.width,
            k = M.top,
            U = M.right,
            G = M.bottom,
            F = M.left;
        if ("if-needed" === i && N >= 0 && O >= 0 && C <= g && v <= m && N >= k && C <= G && O >= F && v <= U) break;
        var V = getComputedStyle(w),
            B = parseInt(V.borderLeftWidth, 10),
            H = parseInt(V.borderTopWidth, 10),
            j = parseInt(V.borderRightWidth, 10),
            Y = parseInt(V.borderBottomWidth, 10),
            W = 0,
            K = 0,
            $ = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - B - j : 0,
            z = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - H - Y : 0,
            q = "offsetWidth" in w ? (0 === w.offsetWidth ? 0 : x / w.offsetWidth) : 0,
            X = "offsetHeight" in w ? (0 === w.offsetHeight ? 0 : P / w.offsetHeight) : 0;
        if (p === w)
            (W =
                "start" === o
                    ? R
                    : "end" === o
                      ? R - g
                      : "nearest" === o
                        ? a(I, I + g, g, H, Y, I + R, I + R + S, S)
                        : R - g / 2),
                (K =
                    "start" === l
                        ? b
                        : "center" === l
                          ? b - m / 2
                          : "end" === l
                            ? b - m
                            : a(A, A + m, m, B, j, A + b, A + b + y, y)),
                (W = Math.max(0, W + I)),
                (K = Math.max(0, K + A));
        else {
            (W =
                "start" === o
                    ? R - k - H
                    : "end" === o
                      ? R - G + Y + z
                      : "nearest" === o
                        ? a(k, G, P, H, Y + z, R, R + S, S)
                        : R - (k + P / 2) + z / 2),
                (K =
                    "start" === l
                        ? b - F - B
                        : "center" === l
                          ? b - (F + x / 2) + $ / 2
                          : "end" === l
                            ? b - U + j + $
                            : a(F, U, x, B, j + $, b, b + y, y));
            var Q = w.scrollLeft,
                Z = w.scrollTop;
            (R += Z - (W = Math.max(0, Math.min(Z + W / X, w.scrollHeight - P / X + z)))),
                (b += Q - (K = Math.max(0, Math.min(Q + K / q, w.scrollWidth - x / q + $))));
        }
        D.push({ el: w, top: W, left: K });
    }
    return D;
};
