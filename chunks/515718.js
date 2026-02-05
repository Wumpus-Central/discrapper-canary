"use strict";
n.d(t, {
    EW: () => S,
    LZ: () => b,
    NN: () => N,
    S4: () => I,
    Sf: () => A,
    U8: () => _,
    Uj: () => u,
    V: () => f,
    We: () => y,
    aU: () => C,
    bX: () => v,
    eJ: () => p,
    wU: () => h,
    z$: () => d,
}),
    n(321073),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(531325),
    l = n.n(o);
function u(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i, minWidth: a = 0, minHeight: s = 0 } = e;
    if (t !== r || n !== i) {
        let e = t > r ? r / t : 1;
        t = Math.max(Math.round(t * e), a);
        let o = (n = Math.max(Math.round(n * e), s)) > i ? i / n : 1;
        (t = Math.max(Math.round(t * o), a)), (n = Math.max(Math.round(n * o), s));
    }
    return { width: t, height: n };
}
let c = 2e3;
function d(e, t) {
    let n = Math.min(Math.round(0.65 * window.innerHeight), Math.round(window.innerHeight)),
        r = Math.min(Math.round(0.75 * window.innerWidth), Math.round(window.innerWidth)),
        i = Math.min(n, c);
    return u({ width: e, height: t, maxWidth: Math.min(r, c), maxHeight: i });
}
function _(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i } = e,
        a = 1;
    t > r && (a = r / t), (t = Math.round(t * a));
    let s = 1;
    return (n = Math.round(n * a)) > i && (s = i / n), Math.min(a * s, 1);
}
function f(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i } = e;
    return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1);
}
function p(e) {
    let { width: t, height: n } = e;
    return null != t && 0 !== t && null != n && 0 !== n;
}
function h(e) {
    return null == e || "" === e ? "none" : `url(${e})`;
}
function m(e, t, n) {
    let r = [];
    for (let i = 0, a, s, o, l, u; i < t; i += n)
        (s = e[(a = 4 * i) + 0]),
            (o = e[a + 1]),
            (l = e[a + 2]),
            (void 0 === (u = e[a + 3]) || u >= 125) && !(s > 250 && o > 250 && l > 250) && r.push([s, o, l]);
    return r;
}
let g = [[0, 0, 0]],
    E = 128;
function A(e, t, n) {
    let r = document.createElement("canvas"),
        i = r.getContext("2d");
    if (null == i) return g;
    let a = (r.width = 0 === e.width ? E : e.width),
        s = (r.height = 0 === e.height ? E : e.height);
    i.drawImage(e, 0, 0, a, s);
    let o = m(i.getImageData(0, 0, a, s).data, a * s, n),
        u = l()(o, t);
    return "boolean" == typeof u ? g : u.palette();
}
let I = (e) => ("number" == typeof e ? null : T(e)),
    T = s().memoize(
        (e) =>
            new Promise((t, n) => {
                let r = new Image();
                (r.crossOrigin = "Anonymous"),
                    (r.onerror = (e) => {
                        n(e), (r.onerror = r.onload = null), (r = null);
                    }),
                    (r.onload = () => {
                        t(A(r, 5, 10)), (r.onerror = r.onload = null), (r = null);
                    }),
                    (r.src = e);
            }),
    );
function y(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        r.readAsDataURL(e),
            (r.onload = () => {
                i()("string" == typeof r.result, "Result must be a string"), t(r.result);
            }),
            (r.onerror = (e) => n(e));
    });
}
function S(e) {
    let t = e.split(";base64,");
    return i()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length;
}
async function v(e, t, n) {
    let r = C(e);
    return new File([await r.arrayBuffer()], t, { type: n });
}
function C(e) {
    let t;
    t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
    let n = e.split(",")[0].split(":")[1].split(";")[0],
        r = new Uint8Array(t.length);
    for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
    return new Blob([r], { type: n });
}
async function b(e) {
    if ("image/png" !== e.type?.split(";")[0]) throw Error("File is not a PNG");
    let t = await e.text(),
        n = t.indexOf("IDAT");
    return !!(n > 0) && -1 !== t.substring(0, n).indexOf("acTL");
}
function N(e) {
    return new Promise((t, n) => {
        let r = new Image();
        r.addEventListener("load", t), r.addEventListener("error", n), (r.src = e);
    });
}
