n.d(t, {
    EW: () => R,
    LZ: () => p,
    NN: () => m,
    S4: () => S,
    Sf: () => T,
    U8: () => d,
    Uj: () => o,
    V: () => c,
    We: () => O,
    aU: () => C,
    bX: () => f,
    eJ: () => u,
    wU: () => I,
    z$: () => E,
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
    a = n(735438),
    s = n.n(a),
    _ = n(531325),
    l = n.n(_);
function o(e) {
    let { width: t, height: n, maxWidth: i, maxHeight: r, minWidth: a = 0, minHeight: s = 0 } = e;
    if (t !== i || n !== r) {
        let e = t > i ? i / t : 1;
        t = Math.max(Math.round(t * e), a);
        let _ = (n = Math.max(Math.round(n * e), s)) > r ? r / n : 1;
        (t = Math.max(Math.round(t * _), a)), (n = Math.max(Math.round(n * _), s));
    }
    return { width: t, height: n };
}
function E(e, t) {
    let n = Math.min(Math.round(0.65 * window.innerHeight), Math.round(window.innerHeight));
    return o({
        width: e,
        height: t,
        maxWidth: Math.min(Math.min(Math.round(0.75 * window.innerWidth), Math.round(window.innerWidth)), 2e3),
        maxHeight: Math.min(n, 2e3),
    });
}
function d(e) {
    let { width: t, height: n, maxWidth: i, maxHeight: r } = e,
        a = 1;
    t > i && (a = i / t), (t = Math.round(t * a));
    let s = 1;
    return (n = Math.round(n * a)) > r && (s = r / n), Math.min(a * s, 1);
}
function c(e) {
    let { width: t, height: n, maxWidth: i, maxHeight: r } = e;
    return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1);
}
function u(e) {
    let { width: t, height: n } = e;
    return null != t && 0 !== t && null != n && 0 !== n;
}
function I(e) {
    return null == e || "" === e ? "none" : `url(${e})`;
}
let A = [[0, 0, 0]];
function T(e, t, n) {
    let i = document.createElement("canvas"),
        r = i.getContext("2d");
    if (null == r) return A;
    let a = (i.width = 0 === e.width ? 128 : e.width),
        s = (i.height = 0 === e.height ? 128 : e.height);
    r.drawImage(e, 0, 0, a, s);
    let _ = (function (e, t, n) {
            let i = [];
            for (let r = 0, a, s, _, l, o; r < t; r += n)
                (s = e[(a = 4 * r) + 0]),
                    (_ = e[a + 1]),
                    (l = e[a + 2]),
                    (void 0 === (o = e[a + 3]) || o >= 125) && !(s > 250 && _ > 250 && l > 250) && i.push([s, _, l]);
            return i;
        })(r.getImageData(0, 0, a, s).data, a * s, n),
        o = l()(_, t);
    return "boolean" == typeof o ? A : o.palette();
}
let S = (e) => ("number" == typeof e ? null : N(e)),
    N = s().memoize(
        (e) =>
            new Promise((t, n) => {
                let i = new Image();
                (i.crossOrigin = "Anonymous"),
                    (i.onerror = (e) => {
                        n(e), (i.onerror = i.onload = null), (i = null);
                    }),
                    (i.onload = () => {
                        t(T(i, 5, 10)), (i.onerror = i.onload = null), (i = null);
                    }),
                    (i.src = e);
            }),
    );
function O(e) {
    return new Promise((t, n) => {
        let i = new FileReader();
        i.readAsDataURL(e),
            (i.onload = () => {
                r()("string" == typeof i.result, "Result must be a string"), t(i.result);
            }),
            (i.onerror = (e) => n(e));
    });
}
function R(e) {
    let t = e.split(";base64,");
    return r()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length;
}
async function f(e, t, n) {
    let i = C(e);
    return new File([await i.arrayBuffer()], t, { type: n });
}
function C(e) {
    let t;
    t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
    let n = e.split(",")[0].split(":")[1].split(";")[0],
        i = new Uint8Array(t.length);
    for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
    return new Blob([i], { type: n });
}
async function p(e) {
    if ("image/png" !== e.type?.split(";")[0]) throw Error("File is not a PNG");
    let t = await e.text(),
        n = t.indexOf("IDAT");
    return !!(n > 0) && -1 !== t.substring(0, n).indexOf("acTL");
}
function m(e) {
    return new Promise((t, n) => {
        let i = new Image();
        i.addEventListener("load", t), i.addEventListener("error", n), (i.src = e);
    });
}
