let r;
function o(e) {
    r = e;
}
t.d(n, {
    $X: () => W,
    Cl: () => L,
    F0: () => C,
    HT: () => S,
    K5: () => X,
    KA: () => K,
    KG: () => E,
    KX: () => I,
    M1: () => O,
    Or: () => N,
    Pn: () => z,
    Qr: () => $,
    Sp: () => P,
    WM: () => F,
    Wl: () => T,
    XP: () => k,
    _D: () => Y,
    _T: () => q,
    c1: () => M,
    dw: () => U,
    eY: () => j,
    fH: () => B,
    fY: () => J,
    hd: () => x,
    o$: () => H,
    oH: () => R,
    oT: () => o,
    qt: () => v,
    s2: () => D,
    ug: () => m,
    yW: () => Q,
    zk: () => G,
    zr: () => A,
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = i.length,
    _ = new ("undefined" == typeof TextDecoder ? (0, module.require)("util").TextDecoder : TextDecoder)("utf-8", {
        ignoreBOM: !0,
        fatal: !0,
    });
_.decode();
let c = null;
function l() {
    return (null === c || 0 === c.byteLength) && (c = new Uint8Array(r.memory.buffer)), c;
}
function f(e, n) {
    return (e >>>= 0), _.decode(l().subarray(e, e + n));
}
function a(e) {
    u === i.length && i.push(i.length + 1);
    let n = u;
    return (u = i[n]), (i[n] = e), n;
}
let d = 0,
    b = new ("undefined" == typeof TextEncoder ? (0, module.require)("util").TextEncoder : TextEncoder)("utf-8"),
    s =
        "function" == typeof b.encodeInto
            ? function (e, n) {
                  return b.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = b.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length,
                      }
                  );
              };
function g(e, n, t) {
    if (void 0 === t) {
        let t = b.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            l()
                .subarray(r, r + t.length)
                .set(t),
            (d = t.length),
            r
        );
    }
    let r = e.length,
        o = n(r, 1) >>> 0,
        i = l(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        i[o + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (o = t(o, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = s(e, l().subarray(o + u, o + r));
        (u += n.written), (o = t(o, r, u, 1) >>> 0);
    }
    return (d = u), o;
}
let w = null;
function y() {
    return (null === w || 0 === w.byteLength) && (w = new Int32Array(r.memory.buffer)), w;
}
let h = null;
function p(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(a(e));
    }
}
function m(e) {
    !(function (e) {
        i[e], e < 132 || ((i[e] = u), (u = e));
    })(e);
}
function x(e, n) {
    return a(Error(f(e, n)));
}
function v(e, n) {
    let t = i[n],
        o = "string" == typeof t ? t : void 0;
    var u = null == o ? 0 : g(o, r.__wbindgen_export_0, r.__wbindgen_export_1),
        _ = d;
    (y()[e / 4 + 1] = _), (y()[e / 4 + 0] = u);
}
function j(e) {
    return "string" == typeof i[e];
}
function A(e) {
    return null === i[e];
}
function k(e) {
    return void 0 === i[e];
}
function T(e) {
    let n = i[e];
    return "object" == typeof n && null !== n;
}
function $(e, n) {
    return i[e] == i[n];
}
function S(e) {
    let n = i[e];
    return "boolean" == typeof n ? +!!n : 2;
}
function O(e, n) {
    let t = i[n],
        o = "number" == typeof t ? t : void 0;
    (((null === h || 0 === h.byteLength) && (h = new Float64Array(r.memory.buffer)), h)[e / 8 + 1] = null == o ? 0 : o),
        (y()[e / 4 + 0] = null != o);
}
function K(e, n) {
    let t = g(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = d;
    (y()[e / 4 + 1] = o), (y()[e / 4 + 0] = t);
}
function E(e, n) {
    return a(i[e][n >>> 0]);
}
function q(e) {
    return i[e].length;
}
function H(e) {
    return "function" == typeof i[e];
}
function M(e) {
    return a(i[e].next);
}
function W() {
    return p(function (e) {
        return a(i[e].next());
    }, arguments);
}
function X(e) {
    return i[e].done;
}
function F(e) {
    return a(i[e].value);
}
function C() {
    return a(Symbol.iterator);
}
function D() {
    return p(function (e, n) {
        return a(Reflect.get(i[e], i[n]));
    }, arguments);
}
function P() {
    return p(function (e, n) {
        return a(i[e].call(i[n]));
    }, arguments);
}
function Q(e) {
    return Array.isArray(i[e]);
}
function U(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function z(e) {
    return a(Object.entries(i[e]));
}
function Y(e) {
    return a(i[e].buffer);
}
function I(e) {
    return a(new Uint8Array(i[e]));
}
function B(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function L(e) {
    return i[e].length;
}
function G(e) {
    let n;
    try {
        n = i[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function J(e, n) {
    let t = g(
            (function e(n) {
                let t,
                    r = typeof n;
                if ("number" == r || "boolean" == r || null == n) return `${n}`;
                if ("string" == r) return `"${n}"`;
                if ("symbol" == r) {
                    let e = n.description;
                    return null == e ? "Symbol" : `Symbol(${e})`;
                }
                if ("function" == r) {
                    let e = n.name;
                    return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                }
                if (Array.isArray(n)) {
                    let t = n.length,
                        r = "[";
                    t > 0 && (r += e(n[0]));
                    for (let o = 1; o < t; o++) r += ", " + e(n[o]);
                    return r + "]";
                }
                let o = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!(o.length > 1)) return toString.call(n);
                if ("Object" == (t = o[1]))
                    try {
                        return "Object(" + JSON.stringify(n) + ")";
                    } catch (e) {
                        return "Object";
                    }
                return n instanceof Error
                    ? `${n.name}: ${n.message}
${n.stack}`
                    : t;
            })(i[n]),
            r.__wbindgen_export_0,
            r.__wbindgen_export_1,
        ),
        o = d;
    (y()[e / 4 + 1] = o), (y()[e / 4 + 0] = t);
}
function N(e, n) {
    throw Error(f(e, n));
}
function R() {
    return a(r.memory);
}
