"use strict";
n.d(t, {
    EW: () => I,
    LZ: () => N,
    NN: () => y,
    S4: () => m,
    Sf: () => E,
    U8: () => d,
    Uj: () => u,
    V: () => _,
    We: () => A,
    aU: () => S,
    bX: () => T,
    eJ: () => f,
    wU: () => h,
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
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(531325),
    l = n.n(o);
function u(e) {
    let { width: t, height: n, maxWidth: i, maxHeight: r, minWidth: s = 0, minHeight: a = 0 } = e;
    if (t !== i || n !== r) {
        let e = t > i ? i / t : 1;
        t = Math.max(Math.round(t * e), s);
        let o = (n = Math.max(Math.round(n * e), a)) > r ? r / n : 1;
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
    let { width: t, height: n, maxWidth: i, maxHeight: r } = e,
        s = 1;
    t > i && (s = i / t), (t = Math.round(t * s));
    let a = 1;
    return (n = Math.round(n * s)) > r && (a = r / n), Math.min(s * a, 1);
}
function _(e) {
    let { width: t, height: n, maxWidth: i, maxHeight: r } = e;
    return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1);
}
function f(e) {
    let { width: t, height: n } = e;
    return null != t && 0 !== t && null != n && 0 !== n;
}
function h(e) {
    return null == e || "" === e ? "none" : `url(${e})`;
}
let p = [[0, 0, 0]];
function E(e, t, n) {
    let i = document.createElement("canvas"),
        r = i.getContext("2d");
    if (null == r) return p;
    let s = (i.width = 0 === e.width ? 128 : e.width),
        a = (i.height = 0 === e.height ? 128 : e.height);
    r.drawImage(e, 0, 0, s, a);
    let o = (function (e, t, n) {
            let i = [];
            for (let r = 0, s, a, o, l, u; r < t; r += n)
                (a = e[(s = 4 * r) + 0]),
                    (o = e[s + 1]),
                    (l = e[s + 2]),
                    (void 0 === (u = e[s + 3]) || u >= 125) && !(a > 250 && o > 250 && l > 250) && i.push([a, o, l]);
            return i;
        })(r.getImageData(0, 0, s, a).data, s * a, n),
        u = l()(o, t);
    return "boolean" == typeof u ? p : u.palette();
}
let m = (e) => ("number" == typeof e ? null : g(e)),
    g = a().memoize(
        (e) =>
            new Promise((t, n) => {
                let i = new Image();
                (i.crossOrigin = "Anonymous"),
                    (i.onerror = (e) => {
                        n(e), (i.onerror = i.onload = null), (i = null);
                    }),
                    (i.onload = () => {
                        t(E(i, 5, 10)), (i.onerror = i.onload = null), (i = null);
                    }),
                    (i.src = e);
            }),
    );
function A(e) {
    return new Promise((t, n) => {
        let i = new FileReader();
        i.readAsDataURL(e),
            (i.onload = () => {
                r()("string" == typeof i.result, "Result must be a string"), t(i.result);
            }),
            (i.onerror = (e) => n(e));
    });
}
function I(e) {
    let t = e.split(";base64,");
    return r()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length;
}
async function T(e, t, n) {
    let i = S(e);
    return new File([await i.arrayBuffer()], t, { type: n });
}
function S(e) {
    let t;
    t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
    let n = e.split(",")[0].split(":")[1].split(";")[0],
        i = new Uint8Array(t.length);
    for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
    return new Blob([i], { type: n });
}
async function N(e) {
    if ("image/png" !== e.type?.split(";")[0]) throw Error("File is not a PNG");
    let t = await e.text(),
        n = t.indexOf("IDAT");
    return !!(n > 0) && -1 !== t.substring(0, n).indexOf("acTL");
}
function y(e) {
    return new Promise((t, n) => {
        let i = new Image();
        i.addEventListener("load", t), i.addEventListener("error", n), (i.src = e);
    });
}
