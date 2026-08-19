"use strict";
function i(e) {
    return Math.max(Math.min(e, 1), 0);
}
function r(e, t) {
    let { top: n, bottom: r, left: a, right: s } = e;
    return {
        top: null != n ? Math.floor(i(n) * t.height) : void 0,
        left: null != a ? Math.floor(i(a) * t.width) : void 0,
        bottom: null != r ? Math.floor(i(r) * t.height) : void 0,
        right: null != s ? Math.floor(i(s) * t.width) : void 0,
    };
}
function a(e, t) {
    let { width: n, height: r, fixed: a = !1 } = e;
    return a
        ? { width: n, height: r, fixed: a }
        : {
              width: "auto" === n ? n : Math.floor(i(n) * t.width),
              height: "auto" === r ? r : Math.floor(i(r) * t.height),
              fixed: a,
          };
}
function s(e, t) {
    let { top: n, bottom: r, left: a, right: s } = e;
    return {
        top: null != n ? i(n / t.height) : void 0,
        left: null != a ? i(a / t.width) : void 0,
        bottom: null != r ? i(r / t.height) : void 0,
        right: null != s ? i(s / t.width) : void 0,
    };
}
function l(e, t) {
    let { width: n, height: i, fixed: r } = e;
    return r
        ? { width: n, height: i, fixed: r }
        : { width: "auto" === n ? n : n / t.width, height: "auto" === i ? i : i / t.height, fixed: r };
}
function o(e, t, n, i, r) {
    let { top: a, bottom: s, left: l, right: o } = e;
    if (
        (null == a && null == s
            ? ((a = 0), (s = n - r))
            : null == a && null != s
              ? (a = n - (s + r))
              : null != a && (s = n - (a + r)),
        null == l && null == o
            ? ((l = 0), (o = t - i))
            : null == l && null != o
              ? (l = t - (o + i))
              : null == o && null != l && (o = t - (l + i)),
        null == a || null == s || null == l || null == o)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: a, left: l, bottom: s, right: o };
}
function d(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        0 === t || t <= i ? (i = null) : (t = null),
        0 === n || n <= r ? (r = null) : (n = null),
        { top: t, left: n, bottom: i, right: r }
    );
}
function c(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        i < 0 && ((t += i), (i = 0)),
        t < 0 && ((i += t), (t = 0)),
        r < 0 && ((n += r), (r = 0)),
        n < 0 && ((r += n), (n = 0)),
        { top: t, left: n, bottom: i, right: r }
    );
}
function u(e, t, n) {
    e = r(e, n);
    let { width: i, height: s } = a(t, n);
    return (i = "string" == typeof i ? 0 : i), (s = "string" == typeof s ? 0 : s), o(e, n.width, n.height, i, s);
}
function _(e, t, n) {
    let { top: i, left: r } = e,
        { x: a, y: u } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { x: 0, y: 0 },
        { width: _, height: E } = t;
    return [
        s(
            d(
                c(
                    o(
                        { top: i + u, left: r + a, bottom: void 0, right: void 0 },
                        n.width,
                        n.height,
                        "number" == typeof _ ? _ : 0,
                        "number" == typeof E ? E : 0,
                    ),
                ),
            ),
            n,
        ),
        l(t, n),
    ];
}
function E(e, t, n) {
    let { top: i, right: r } = e,
        { x: a, y: u } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { x: 0, y: 0 },
        { width: _, height: E } = t;
    return [
        s(
            d(
                c(
                    o(
                        { top: i + u, left: void 0, bottom: void 0, right: r - a },
                        n.width,
                        n.height,
                        "number" == typeof _ ? _ : 0,
                        "number" == typeof E ? E : 0,
                    ),
                ),
            ),
            n,
        ),
        l(t, n),
    ];
}
function A(e, t) {
    let n = { top: void 0, bottom: void 0, left: void 0, right: void 0 };
    return (
        null != t.top && (n.top = e.top),
        null != t.bottom && (n.bottom = e.bottom),
        null != t.left && (n.left = e.left),
        null != t.right && (n.right = e.right),
        n
    );
}
n.d(t, {
    Ly: () => o,
    M4: () => _,
    NO: () => s,
    NR: () => u,
    Nv: () => r,
    R9: () => l,
    af: () => A,
    fd: () => a,
    fh: () => c,
    h1: () => d,
    n7: () => E,
});
