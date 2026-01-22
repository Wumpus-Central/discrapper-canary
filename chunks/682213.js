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
        c = t.boundary,
        u = t.skipOverflowHiddenElements,
        d =
            "function" == typeof c
                ? c
                : function (e) {
                      return e !== c;
                  };
    if (!r(e)) throw TypeError("Invalid target");
    for (var f, p, _ = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m); ) {
        if ((m = null == (p = (f = m).parentElement) ? f.getRootNode().host || null : p) === _) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) ||
            (null != m && a(m, u) && h.push(m));
    }
    for (
        var g = n.visualViewport ? n.visualViewport.width : innerWidth,
            E = n.visualViewport ? n.visualViewport.height : innerHeight,
            b = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            O = e.getBoundingClientRect(),
            A = O.height,
            v = O.width,
            S = O.top,
            I = O.right,
            T = O.bottom,
            C = O.left,
            N = "start" === o || "nearest" === o ? S : "end" === o ? T : S + A / 2,
            R = "center" === l ? C + v / 2 : "end" === l ? I : C,
            w = [],
            P = 0;
        P < h.length;
        P++
    ) {
        var D = h[P],
            x = D.getBoundingClientRect(),
            L = x.height,
            j = x.width,
            M = x.top,
            k = x.right,
            U = x.bottom,
            G = x.left;
        if ("if-needed" === i && S >= 0 && C >= 0 && T <= E && I <= g && S >= M && T <= U && C >= G && I <= k) break;
        var V = getComputedStyle(D),
            F = parseInt(V.borderLeftWidth, 10),
            B = parseInt(V.borderTopWidth, 10),
            H = parseInt(V.borderRightWidth, 10),
            Y = parseInt(V.borderBottomWidth, 10),
            W = 0,
            K = 0,
            z = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - F - H : 0,
            q = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - B - Y : 0,
            X = "offsetWidth" in D ? (0 === D.offsetWidth ? 0 : j / D.offsetWidth) : 0,
            Z = "offsetHeight" in D ? (0 === D.offsetHeight ? 0 : L / D.offsetHeight) : 0;
        if (_ === D)
            (W =
                "start" === o
                    ? N
                    : "end" === o
                      ? N - E
                      : "nearest" === o
                        ? s(y, y + E, E, B, Y, y + N, y + N + A, A)
                        : N - E / 2),
                (K =
                    "start" === l
                        ? R
                        : "center" === l
                          ? R - g / 2
                          : "end" === l
                            ? R - g
                            : s(b, b + g, g, F, H, b + R, b + R + v, v)),
                (W = Math.max(0, W + y)),
                (K = Math.max(0, K + b));
        else {
            (W =
                "start" === o
                    ? N - M - B
                    : "end" === o
                      ? N - U + Y + q
                      : "nearest" === o
                        ? s(M, U, L, B, Y + q, N, N + A, A)
                        : N - (M + L / 2) + q / 2),
                (K =
                    "start" === l
                        ? R - G - F
                        : "center" === l
                          ? R - (G + j / 2) + z / 2
                          : "end" === l
                            ? R - k + H + z
                            : s(G, k, j, F, H + z, R, R + v, v));
            var Q = D.scrollLeft,
                $ = D.scrollTop;
            (N += $ - (W = Math.max(0, Math.min($ + W / Z, D.scrollHeight - L / Z + q)))),
                (R += Q - (K = Math.max(0, Math.min(Q + K / X, D.scrollWidth - j / X + z))));
        }
        w.push({
            el: D,
            top: W,
            left: K,
        });
    }
    return w;
};
