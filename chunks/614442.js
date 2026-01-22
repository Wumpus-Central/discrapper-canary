let r;
function i(e) {
    r = e;
}
t.d(n, {
    $Z: () => M,
    B7: () => W,
    Fm: () => C,
    GR: () => D,
    Gu: () => A,
    Nh: () => R,
    O$: () => B,
    OZ: () => X,
    PR: () => Q,
    Py: () => V,
    QD: () => z,
    QR: () => k,
    Qn: () => K,
    Rj: () => j,
    U8: () => S,
    Wv: () => Y,
    XB: () => L,
    Xo: () => Z,
    Zu: () => U,
    bk: () => v,
    cq: () => P,
    f3: () => G,
    g_: () => E,
    iS: () => F,
    lI: () => i,
    qN: () => q,
    qT: () => N,
    qY: () => J,
    qg: () => m,
    qv: () => O,
    rl: () => H,
    sW: () => T,
    uL: () => I,
    vU: () => $,
});
let o = Array(128).fill(void 0);
o.push(void 0, null, !0, !1);
let u = o.length;
function _(e) {
    let n = o[e];
    return e < 132 || ((o[e] = u), (u = e)), n;
}
let c = new ("u" < typeof TextDecoder ? (0, module.require)("util").TextDecoder : TextDecoder)("utf-8", {
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
    u === o.length && o.push(o.length + 1);
    let n = u;
    return (u = o[n]), (o[n] = e), n;
}
let b = 0,
    s = new ("u" < typeof TextEncoder ? (0, module.require)("util").TextEncoder : TextEncoder)("utf-8"),
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
        i = n(r, 1) >>> 0,
        o = f(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        o[i + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (i = t(i, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = g(e, f().subarray(i + u, i + r));
        (u += n.written), (i = t(i, r, u, 1) >>> 0);
    }
    return (b = u), i;
}
let y = null;
function h() {
    return (null === y || 0 === y.byteLength) && (y = new Int32Array(r.memory.buffer)), y;
}
let p = null;
function m(e, n) {
    let t, i;
    try {
        let g = r.__wbindgen_add_to_stack_pointer(-16),
            y = w(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            p = b;
        r.parse(g, y, p, d(n));
        var o = h()[g / 4 + 0],
            u = h()[g / 4 + 1],
            c = h()[g / 4 + 2],
            l = h()[g / 4 + 3],
            f = o,
            s = u;
        if (l) throw ((f = 0), (s = 0), _(c));
        return (t = f), (i = s), a(f, s);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, i, 1);
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
function q(e, n) {
    let t = o[n],
        i = "string" == typeof t ? t : void 0;
    var u = null == i ? 0 : w(i, r.__wbindgen_export_0, r.__wbindgen_export_1),
        _ = b;
    (h()[e / 4 + 1] = _), (h()[e / 4 + 0] = u);
}
function A(e) {
    return "string" == typeof o[e];
}
function k(e) {
    return null === o[e];
}
function $(e) {
    return void 0 === o[e];
}
function O(e) {
    let n = o[e];
    return "object" == typeof n && null !== n;
}
function S(e, n) {
    return o[e] == o[n];
}
function R(e) {
    let n = o[e];
    return "boolean" == typeof n ? +!!n : 2;
}
function T(e, n) {
    let t = o[n],
        i = "number" == typeof t ? t : void 0;
    (((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == i ? 0 : i),
        (h()[e / 4 + 0] = null != i);
}
function U(e, n) {
    let t = w(String(o[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        i = b;
    (h()[e / 4 + 1] = i), (h()[e / 4 + 0] = t);
}
function E(e, n) {
    return d(o[e][n >>> 0]);
}
function B(e) {
    return o[e].length;
}
function Q(e) {
    return "function" == typeof o[e];
}
function Z(e) {
    return d(o[e].next);
}
function F() {
    return x(function (e) {
        return d(o[e].next());
    }, arguments);
}
function I(e) {
    return o[e].done;
}
function N(e) {
    return d(o[e].value);
}
function D() {
    return d(Symbol.iterator);
}
function L() {
    return x(function (e, n) {
        return d(Reflect.get(o[e], o[n]));
    }, arguments);
}
function P() {
    return x(function (e, n) {
        return d(o[e].call(o[n]));
    }, arguments);
}
function G(e) {
    return Array.isArray(o[e]);
}
function W(e) {
    let n;
    try {
        n = o[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function X(e) {
    return d(Object.entries(o[e]));
}
function C(e) {
    return d(o[e].buffer);
}
function M(e) {
    return d(new Uint8Array(o[e]));
}
function Y(e, n, t) {
    o[e].set(o[n], t >>> 0);
}
function J(e) {
    return o[e].length;
}
function z(e) {
    let n;
    try {
        n = o[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function H(e, n) {
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
                    for (let i = 1; i < t; i++) r += ", " + e(n[i]);
                    return r + "]";
                }
                let i = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!(i.length > 1)) return toString.call(n);
                if ("Object" == (t = i[1]))
                    try {
                        return "Object(" + JSON.stringify(n) + ")";
                    } catch (e) {
                        return "Object";
                    }
                return n instanceof Error
                    ? `${n.name}: ${n.message}
${n.stack}`
                    : t;
            })(o[n]),
            r.__wbindgen_export_0,
            r.__wbindgen_export_1,
        ),
        i = b;
    (h()[e / 4 + 1] = i), (h()[e / 4 + 0] = t);
}
function K(e, n) {
    throw Error(a(e, n));
}
function V() {
    return d(r.memory);
}
