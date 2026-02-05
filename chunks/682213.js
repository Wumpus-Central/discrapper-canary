"use strict";
function r(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n = getComputedStyle(e, null);
        return (
            i(n.overflowY, t) ||
            i(n.overflowX, t) ||
            (function (e) {
                var t = (function (e) {
                    if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                    try {
                        return e.ownerDocument.defaultView.frameElement;
                    } catch (e) {
                        return null;
                    }
                })(e);
                return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth);
            })(e)
        );
    }
    return !1;
}
function s(e, t, n, r, i, a, s, o) {
    return (a < e && s > t) || (a > e && s < t)
        ? 0
        : (a <= e && o <= n) || (s >= t && o >= n)
          ? a - e - r
          : (s > t && o < n) || (a < e && o > n)
            ? s - t + i
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
    for (var _, f, p = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m); ) {
        if ((m = null == (f = (_ = m).parentElement) ? _.getRootNode().host || null : f) === p) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) ||
            (null != m && a(m, c) && h.push(m));
    }
    for (
        var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            E = n.visualViewport ? n.visualViewport.height : innerHeight,
            A = window.scrollX || pageXOffset,
            I = window.scrollY || pageYOffset,
            T = e.getBoundingClientRect(),
            y = T.height,
            S = T.width,
            v = T.top,
            C = T.right,
            b = T.bottom,
            N = T.left,
            R = "start" === o || "nearest" === o ? v : "end" === o ? b : v + y / 2,
            O = "center" === l ? N + S / 2 : "end" === l ? C : N,
            D = [],
            L = 0;
        L < h.length;
        L++
    ) {
        var w = h[L],
            x = w.getBoundingClientRect(),
            P = x.height,
            M = x.width,
            k = x.top,
            U = x.right,
            G = x.bottom,
            V = x.left;
        if ("if-needed" === i && v >= 0 && N >= 0 && b <= E && C <= g && v >= k && b <= G && N >= V && C <= U) break;
        var F = getComputedStyle(w),
            B = parseInt(F.borderLeftWidth, 10),
            j = parseInt(F.borderTopWidth, 10),
            H = parseInt(F.borderRightWidth, 10),
            Y = parseInt(F.borderBottomWidth, 10),
            W = 0,
            K = 0,
            z = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - B - H : 0,
            $ = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - j - Y : 0,
            q = "offsetWidth" in w ? (0 === w.offsetWidth ? 0 : M / w.offsetWidth) : 0,
            Z = "offsetHeight" in w ? (0 === w.offsetHeight ? 0 : P / w.offsetHeight) : 0;
        if (p === w)
            (W =
                "start" === o
                    ? R
                    : "end" === o
                      ? R - E
                      : "nearest" === o
                        ? s(I, I + E, E, j, Y, I + R, I + R + y, y)
                        : R - E / 2),
                (K =
                    "start" === l
                        ? O
                        : "center" === l
                          ? O - g / 2
                          : "end" === l
                            ? O - g
                            : s(A, A + g, g, B, H, A + O, A + O + S, S)),
                (W = Math.max(0, W + I)),
                (K = Math.max(0, K + A));
        else {
            (W =
                "start" === o
                    ? R - k - j
                    : "end" === o
                      ? R - G + Y + $
                      : "nearest" === o
                        ? s(k, G, P, j, Y + $, R, R + y, y)
                        : R - (k + P / 2) + $ / 2),
                (K =
                    "start" === l
                        ? O - V - B
                        : "center" === l
                          ? O - (V + M / 2) + z / 2
                          : "end" === l
                            ? O - U + H + z
                            : s(V, U, M, B, H + z, O, O + S, S));
            var Q = w.scrollLeft,
                X = w.scrollTop;
            (R += X - (W = Math.max(0, Math.min(X + W / Z, w.scrollHeight - P / Z + $)))),
                (O += Q - (K = Math.max(0, Math.min(Q + K / q, w.scrollWidth - M / q + z))));
        }
        D.push({ el: w, top: W, left: K });
    }
    return D;
};
