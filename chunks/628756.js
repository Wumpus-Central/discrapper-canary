let r;
function i(e) {
    r = e;
}
t.d(n, {
    $Z: () => X,
    B7: () => P,
    Fm: () => W,
    GR: () => I,
    Gu: () => j,
    Nh: () => O,
    O$: () => U,
    OZ: () => G,
    PR: () => E,
    Py: () => H,
    QD: () => Y,
    QR: () => q,
    Qn: () => z,
    Rj: () => x,
    U8: () => $,
    Wv: () => C,
    XB: () => N,
    Xo: () => B,
    Zu: () => R,
    bk: () => m,
    cq: () => D,
    f3: () => L,
    g_: () => T,
    iS: () => Q,
    lI: () => i,
    qN: () => v,
    qT: () => F,
    qY: () => M,
    qv: () => k,
    rl: () => J,
    sW: () => S,
    uL: () => Z,
    vU: () => A,
});
let o = Array(128).fill(void 0);
o.push(void 0, null, !0, !1);
let u = o.length,
    _ = new ("u" < typeof TextDecoder ? (0, module.require)("util").TextDecoder : TextDecoder)("utf-8", {
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
    u === o.length && o.push(o.length + 1);
    let n = u;
    return (u = o[n]), (o[n] = e), n;
}
let d = 0,
    b = new ("u" < typeof TextEncoder ? (0, module.require)("util").TextEncoder : TextEncoder)("utf-8"),
    s =
        "function" == typeof b.encodeInto
            ? function (e, n) {
                  return b.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = b.encode(e);
                  return n.set(t), { read: e.length, written: t.length };
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
        i = n(r, 1) >>> 0,
        o = l(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        o[i + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (i = t(i, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = s(e, l().subarray(i + u, i + r));
        (u += n.written), (i = t(i, r, u, 1) >>> 0);
    }
    return (d = u), i;
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
        o[e], e < 132 || ((o[e] = u), (u = e));
    })(e);
}
function x(e, n) {
    return a(Error(f(e, n)));
}
function v(e, n) {
    let t = o[n],
        i = "string" == typeof t ? t : void 0;
    var u = null == i ? 0 : g(i, r.__wbindgen_export_0, r.__wbindgen_export_1),
        _ = d;
    (y()[e / 4 + 1] = _), (y()[e / 4 + 0] = u);
}
function j(e) {
    return "string" == typeof o[e];
}
function q(e) {
    return null === o[e];
}
function A(e) {
    return void 0 === o[e];
}
function k(e) {
    let n = o[e];
    return "object" == typeof n && null !== n;
}
function $(e, n) {
    return o[e] == o[n];
}
function O(e) {
    let n = o[e];
    return "boolean" == typeof n ? +!!n : 2;
}
function S(e, n) {
    let t = o[n],
        i = "number" == typeof t ? t : void 0;
    (((null === h || 0 === h.byteLength) && (h = new Float64Array(r.memory.buffer)), h)[e / 8 + 1] = null == i ? 0 : i),
        (y()[e / 4 + 0] = null != i);
}
function R(e, n) {
    let t = g(String(o[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        i = d;
    (y()[e / 4 + 1] = i), (y()[e / 4 + 0] = t);
}
function T(e, n) {
    return a(o[e][n >>> 0]);
}
function U(e) {
    return o[e].length;
}
function E(e) {
    return "function" == typeof o[e];
}
function B(e) {
    return a(o[e].next);
}
function Q() {
    return p(function (e) {
        return a(o[e].next());
    }, arguments);
}
function Z(e) {
    return o[e].done;
}
function F(e) {
    return a(o[e].value);
}
function I() {
    return a(Symbol.iterator);
}
function N() {
    return p(function (e, n) {
        return a(Reflect.get(o[e], o[n]));
    }, arguments);
}
function D() {
    return p(function (e, n) {
        return a(o[e].call(o[n]));
    }, arguments);
}
function L(e) {
    return Array.isArray(o[e]);
}
function P(e) {
    let n;
    try {
        n = o[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function G(e) {
    return a(Object.entries(o[e]));
}
function W(e) {
    return a(o[e].buffer);
}
function X(e) {
    return a(new Uint8Array(o[e]));
}
function C(e, n, t) {
    o[e].set(o[n], t >>> 0);
}
function M(e) {
    return o[e].length;
}
function Y(e) {
    let n;
    try {
        n = o[e] instanceof Uint8Array;
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
        i = d;
    (y()[e / 4 + 1] = i), (y()[e / 4 + 0] = t);
}
function z(e, n) {
    throw Error(f(e, n));
}
function H() {
    return a(r.memory);
}
