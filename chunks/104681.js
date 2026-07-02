"use strict";
function i(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function r(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function s(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n,
            i = getComputedStyle(e, null);
        return (
            r(i.overflowY, t) ||
            r(i.overflowX, t) ||
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
function a(e, t, n, i, r, s, a, o) {
    return (s < e && a > t) || (s > e && a < t)
        ? 0
        : (s <= e && o <= n) || (a >= t && o >= n)
          ? s - e - i
          : (a > t && o < n) || (s < e && o > n)
            ? a - t + r
            : 0;
}
n.d(t, { A: () => u });
var o = function (e, t) {
    var n = window,
        r = t.scrollMode,
        o = t.block,
        l = t.inline,
        u = t.boundary,
        d = t.skipOverflowHiddenElements,
        c =
            "function" == typeof u
                ? u
                : function (e) {
                      return e !== u;
                  };
    if (!i(e)) throw TypeError("Invalid target");
    for (var _, h, f = document.scrollingElement || document.documentElement, E = [], p = e; i(p) && c(p); ) {
        if ((p = null == (h = (_ = p).parentElement) ? _.getRootNode().host || null : h) === f) {
            E.push(p);
            break;
        }
        (null != p && p === document.body && s(p) && !s(document.documentElement)) ||
            (null != p && s(p, d) && E.push(p));
    }
    for (
        var m = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            A = window.scrollX || pageXOffset,
            I = window.scrollY || pageYOffset,
            T = e.getBoundingClientRect(),
            S = T.height,
            N = T.width,
            C = T.top,
            y = T.right,
            v = T.bottom,
            R = T.left,
            O = "start" === o || "nearest" === o ? C : "end" === o ? v : C + S / 2,
            b = "center" === l ? R + N / 2 : "end" === l ? y : R,
            L = [],
            D = 0;
        D < E.length;
        D++
    ) {
        var P = E[D],
            w = P.getBoundingClientRect(),
            M = w.height,
            x = w.width,
            U = w.top,
            k = w.right,
            G = w.bottom,
            V = w.left;
        if ("if-needed" === r && C >= 0 && R >= 0 && v <= g && y <= m && C >= U && v <= G && R >= V && y <= k) break;
        var F = getComputedStyle(P),
            B = parseInt(F.borderLeftWidth, 10),
            j = parseInt(F.borderTopWidth, 10),
            H = parseInt(F.borderRightWidth, 10),
            W = parseInt(F.borderBottomWidth, 10),
            Y = 0,
            K = 0,
            $ = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - B - H : 0,
            z = "offsetHeight" in P ? P.offsetHeight - P.clientHeight - j - W : 0,
            q = "offsetWidth" in P ? (0 === P.offsetWidth ? 0 : x / P.offsetWidth) : 0,
            Z = "offsetHeight" in P ? (0 === P.offsetHeight ? 0 : M / P.offsetHeight) : 0;
        if (f === P)
            (Y =
                "start" === o
                    ? O
                    : "end" === o
                      ? O - g
                      : "nearest" === o
                        ? a(I, I + g, g, j, W, I + O, I + O + S, S)
                        : O - g / 2),
                (K =
                    "start" === l
                        ? b
                        : "center" === l
                          ? b - m / 2
                          : "end" === l
                            ? b - m
                            : a(A, A + m, m, B, H, A + b, A + b + N, N)),
                (Y = Math.max(0, Y + I)),
                (K = Math.max(0, K + A));
        else {
            (Y =
                "start" === o
                    ? O - U - j
                    : "end" === o
                      ? O - G + W + z
                      : "nearest" === o
                        ? a(U, G, M, j, W + z, O, O + S, S)
                        : O - (U + M / 2) + z / 2),
                (K =
                    "start" === l
                        ? b - V - B
                        : "center" === l
                          ? b - (V + x / 2) + $ / 2
                          : "end" === l
                            ? b - k + H + $
                            : a(V, k, x, B, H + $, b, b + N, N));
            var X = P.scrollLeft,
                Q = P.scrollTop;
            (O += Q - (Y = Math.max(0, Math.min(Q + Y / Z, P.scrollHeight - M / Z + z)))),
                (b += X - (K = Math.max(0, Math.min(X + K / q, P.scrollWidth - x / q + $))));
        }
        L.push({ el: P, top: Y, left: K });
    }
    return L;
};
function l(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let u = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (l(t) && "function" == typeof t.behavior) return t.behavior(n ? o(e, t) : []);
    if (n) {
        var i,
            r,
            s,
            a = !1 === t ? { block: "end", inline: "nearest" } : l(t) ? t : { block: "start", inline: "nearest" };
        return (
            (i = o(e, a)),
            void 0 === (r = a.behavior) && (r = "auto"),
            (s = "scrollBehavior" in document.body.style),
            void i.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    i = e.left;
                t.scroll && s ? t.scroll({ top: n, left: i, behavior: r }) : ((t.scrollTop = n), (t.scrollLeft = i));
            })
        );
    }
};
