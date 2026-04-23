"use strict";
n.d(t, {
    EW: () => I,
    LZ: () => y,
    NN: () => N,
    S4: () => m,
    Sf: () => E,
    U8: () => d,
    Uj: () => u,
    V: () => _,
    We: () => A,
    aU: () => S,
    bX: () => T,
    eJ: () => f,
    wU: () => p,
    z$: () => c,
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
    s = n(735438),
    a = n.n(s),
    o = n(531325),
    l = n.n(o);
function u(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i, minWidth: s = 0, minHeight: a = 0 } = e;
    if (t !== r || n !== i) {
        let e = t > r ? r / t : 1;
        t = Math.max(Math.round(t * e), s);
        let o = (n = Math.max(Math.round(n * e), a)) > i ? i / n : 1;
        (t = Math.max(Math.round(t * o), s)), (n = Math.max(Math.round(n * o), a));
    }
    return { width: t, height: n };
}
function c(e, t) {
    let n = Math.min(Math.round(0.65 * window.innerHeight), Math.round(window.innerHeight));
    return u({
        width: e,
        height: t,
        maxWidth: Math.min(Math.min(Math.round(0.75 * window.innerWidth), Math.round(window.innerWidth)), 2e3),
        maxHeight: Math.min(n, 2e3),
    });
}
function d(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i } = e,
        s = 1;
    t > r && (s = r / t), (t = Math.round(t * s));
    let a = 1;
    return (n = Math.round(n * s)) > i && (a = i / n), Math.min(s * a, 1);
}
function _(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i } = e;
    return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1);
}
function f(e) {
    let { width: t, height: n } = e;
    return null != t && 0 !== t && null != n && 0 !== n;
}
function p(e) {
    return null == e || "" === e ? "none" : `url(${e})`;
}
let h = [[0, 0, 0]];
function E(e, t, n) {
    let r = document.createElement("canvas"),
        i = r.getContext("2d");
    if (null == i) return h;
    let s = (r.width = 0 === e.width ? 128 : e.width),
        a = (r.height = 0 === e.height ? 128 : e.height);
    i.drawImage(e, 0, 0, s, a);
    let o = (function (e, t, n) {
            let r = [];
            for (let i = 0, s, a, o, l, u; i < t; i += n)
                (a = e[(s = 4 * i) + 0]),
                    (o = e[s + 1]),
                    (l = e[s + 2]),
                    (void 0 === (u = e[s + 3]) || u >= 125) && !(a > 250 && o > 250 && l > 250) && r.push([a, o, l]);
            return r;
        })(i.getImageData(0, 0, s, a).data, s * a, n),
        u = l()(o, t);
    return "boolean" == typeof u ? h : u.palette();
}
let m = (e) => ("number" == typeof e ? null : g(e)),
    g = a().memoize(
        (e) =>
            new Promise((t, n) => {
                let r = new Image();
                (r.crossOrigin = "Anonymous"),
                    (r.onerror = (e) => {
                        n(e), (r.onerror = r.onload = null), (r = null);
                    }),
                    (r.onload = () => {
                        t(E(r, 5, 10)), (r.onerror = r.onload = null), (r = null);
                    }),
                    (r.src = e);
            }),
    );
function A(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        r.readAsDataURL(e),
            (r.onload = () => {
                i()("string" == typeof r.result, "Result must be a string"), t(r.result);
            }),
            (r.onerror = (e) => n(e));
    });
}
function I(e) {
    let t = e.split(";base64,");
    return i()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length;
}
async function T(e, t, n) {
    let r = S(e);
    return new File([await r.arrayBuffer()], t, { type: n });
}
function S(e) {
    let t;
    t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
    let n = e.split(",")[0].split(":")[1].split(";")[0],
        r = new Uint8Array(t.length);
    for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
    return new Blob([r], { type: n });
}
async function y(e) {
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
