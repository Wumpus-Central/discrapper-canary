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
n.d(t, { A: () => l });
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
            b = window.scrollY || pageYOffset,
            D = e.getBoundingClientRect(),
            w = D.height,
            E = D.width,
            C = D.top,
            A = D.right,
            B = D.bottom,
            k = D.left,
            F = "start" === u || "nearest" === u ? C : "end" === u ? B : C + w / 2,
            T = "center" === s ? k + E / 2 : "end" === s ? A : k,
            V = [],
            x = 0;
        x < m.length;
        x++
    ) {
        var P = m[x],
            O = P.getBoundingClientRect(),
            S = O.height,
            z = O.width,
            R = O.top,
            M = O.right,
            N = O.bottom,
            I = O.left;
        if ("if-needed" === i && C >= 0 && k >= 0 && B <= g && A <= _ && C >= R && B <= N && k >= I && A <= M) break;
        var j = getComputedStyle(P),
            L = parseInt(j.borderLeftWidth, 10),
            Z = parseInt(j.borderTopWidth, 10),
            U = parseInt(j.borderRightWidth, 10),
            $ = parseInt(j.borderBottomWidth, 10),
            W = 0,
            G = 0,
            K = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - L - U : 0,
            H = "offsetHeight" in P ? P.offsetHeight - P.clientHeight - Z - $ : 0,
            q = "offsetWidth" in P ? (0 === P.offsetWidth ? 0 : z / P.offsetWidth) : 0,
            J = "offsetHeight" in P ? (0 === P.offsetHeight ? 0 : S / P.offsetHeight) : 0;
        if (p === P)
            (W =
                "start" === u
                    ? F
                    : "end" === u
                      ? F - g
                      : "nearest" === u
                        ? o(b, b + g, g, Z, $, b + F, b + F + w, w)
                        : F - g / 2),
                (G =
                    "start" === s
                        ? T
                        : "center" === s
                          ? T - _ / 2
                          : "end" === s
                            ? T - _
                            : o(y, y + _, _, L, U, y + T, y + T + E, E)),
                (W = Math.max(0, W + b)),
                (G = Math.max(0, G + y));
        else {
            (W =
                "start" === u
                    ? F - R - Z
                    : "end" === u
                      ? F - N + $ + H
                      : "nearest" === u
                        ? o(R, N, S, Z, $ + H, F, F + w, w)
                        : F - (R + S / 2) + H / 2),
                (G =
                    "start" === s
                        ? T - I - L
                        : "center" === s
                          ? T - (I + z / 2) + K / 2
                          : "end" === s
                            ? T - M + U + K
                            : o(I, M, z, L, U + K, T, T + E, E));
            var Q = P.scrollLeft,
                X = P.scrollTop;
            (F += X - (W = Math.max(0, Math.min(X + W / J, P.scrollHeight - S / J + H)))),
                (T += Q - (G = Math.max(0, Math.min(Q + G / q, P.scrollWidth - z / q + K))));
        }
        V.push({ el: P, top: W, left: G });
    }
    return V;
};
function s(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let l = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (s(t) && "function" == typeof t.behavior) return t.behavior(n ? u(e, t) : []);
    if (n) {
        var r,
            i,
            a,
            o = !1 === t ? { block: "end", inline: "nearest" } : s(t) ? t : { block: "start", inline: "nearest" };
        return (
            (r = u(e, o)),
            void 0 === (i = o.behavior) && (i = "auto"),
            (a = "scrollBehavior" in document.body.style),
            void r.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    r = e.left;
                t.scroll && a ? t.scroll({ top: n, left: r, behavior: i }) : ((t.scrollTop = n), (t.scrollLeft = r));
            })
        );
    }
};
