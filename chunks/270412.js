let r;
function o(e) {
    r = e;
}
t.d(n, {
    $X: () => F,
    Cl: () => J,
    F0: () => P,
    HT: () => K,
    K5: () => C,
    KA: () => q,
    KG: () => H,
    KX: () => L,
    M1: () => E,
    Or: () => Z,
    Pn: () => I,
    Qc: () => m,
    Qr: () => O,
    Sp: () => U,
    WM: () => D,
    Wl: () => S,
    XP: () => $,
    _D: () => B,
    _T: () => M,
    c1: () => X,
    dw: () => Y,
    eY: () => k,
    fH: () => G,
    fY: () => R,
    hd: () => j,
    o$: () => W,
    oH: () => V,
    oT: () => o,
    qt: () => A,
    s2: () => Q,
    ug: () => v,
    yW: () => z,
    zk: () => N,
    zr: () => T,
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = i.length;
function _(e) {
    let n = i[e];
    return e < 132 || ((i[e] = u), (u = e)), n;
}
let c = new ("undefined" == typeof TextDecoder ? (0, module.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
c.decode();
let l = null;
function f() {
    return (null === l || 0 === l.byteLength) && (l = new Uint8Array(r.memory.buffer)), l;
}
function a(e, n) {
    return (e >>>= 0), c.decode(f().subarray(e, e + n));
}
function d(e) {
    u === i.length && i.push(i.length + 1);
    let n = u;
    return (u = i[n]), (i[n] = e), n;
}
let b = 0,
    s = new ("undefined" == typeof TextEncoder ? (0, module.require)("util").TextEncoder : TextEncoder)("utf-8"),
    g =
        "function" == typeof s.encodeInto
            ? function (e, n) {
                  return s.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = s.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length,
                      }
                  );
              };
function w(e, n, t) {
    if (void 0 === t) {
        let t = s.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            f()
                .subarray(r, r + t.length)
                .set(t),
            (b = t.length),
            r
        );
    }
    let r = e.length,
        o = n(r, 1) >>> 0,
        i = f(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        i[o + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (o = t(o, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = g(e, f().subarray(o + u, o + r));
        (u += n.written), (o = t(o, r, u, 1) >>> 0);
    }
    return (b = u), o;
}
let y = null;
function h() {
    return (null === y || 0 === y.byteLength) && (y = new Int32Array(r.memory.buffer)), y;
}
let p = null;
function m(e, n) {
    let t, o;
    try {
        let g = r.__wbindgen_add_to_stack_pointer(-16),
            y = w(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            p = b;
        r.parse(g, y, p, d(n));
        var i = h()[g / 4 + 0],
            u = h()[g / 4 + 1],
            c = h()[g / 4 + 2],
            l = h()[g / 4 + 3],
            f = i,
            s = u;
        if (l) throw ((f = 0), (s = 0), _(c));
        return (t = f), (o = s), a(f, s);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, o, 1);
    }
}
function x(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(d(e));
    }
}
function v(e) {
    _(e);
}
function j(e, n) {
    return d(Error(a(e, n)));
}
function A(e, n) {
    let t = i[n],
        o = "string" == typeof t ? t : void 0;
    var u = null == o ? 0 : w(o, r.__wbindgen_export_0, r.__wbindgen_export_1),
        _ = b;
    (h()[e / 4 + 1] = _), (h()[e / 4 + 0] = u);
}
function k(e) {
    return "string" == typeof i[e];
}
function T(e) {
    return null === i[e];
}
function $(e) {
    return void 0 === i[e];
}
function S(e) {
    let n = i[e];
    return "object" == typeof n && null !== n;
}
function O(e, n) {
    return i[e] == i[n];
}
function K(e) {
    let n = i[e];
    return "boolean" == typeof n ? +!!n : 2;
}
function E(e, n) {
    let t = i[n],
        o = "number" == typeof t ? t : void 0;
    (((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == o ? 0 : o),
        (h()[e / 4 + 0] = null != o);
}
function q(e, n) {
    let t = w(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = b;
    (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = t);
}
function H(e, n) {
    return d(i[e][n >>> 0]);
}
function M(e) {
    return i[e].length;
}
function W(e) {
    return "function" == typeof i[e];
}
function X(e) {
    return d(i[e].next);
}
function F() {
    return x(function (e) {
        return d(i[e].next());
    }, arguments);
}
function C(e) {
    return i[e].done;
}
function D(e) {
    return d(i[e].value);
}
function P() {
    return d(Symbol.iterator);
}
function Q() {
    return x(function (e, n) {
        return d(Reflect.get(i[e], i[n]));
    }, arguments);
}
function U() {
    return x(function (e, n) {
        return d(i[e].call(i[n]));
    }, arguments);
}
function z(e) {
    return Array.isArray(i[e]);
}
function Y(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function I(e) {
    return d(Object.entries(i[e]));
}
function B(e) {
    return d(i[e].buffer);
}
function L(e) {
    return d(new Uint8Array(i[e]));
}
function G(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function J(e) {
    return i[e].length;
}
function N(e) {
    let n;
    try {
        n = i[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function R(e, n) {
    let t = w(
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
        o = b;
    (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = t);
}
function Z(e, n) {
    throw Error(a(e, n));
}
function V() {
    return d(r.memory);
}
