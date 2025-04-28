let r;
function l(e) {
    r = e;
}
t.d(n, {
    $X: () => q,
    Cl: () => W,
    F0: () => M,
    HT: () => A,
    K5: () => D,
    KA: () => T,
    KG: () => C,
    KX: () => X,
    M1: () => S,
    Or: () => R,
    Pn: () => Q,
    Qc: () => v,
    Qr: () => Z,
    Sp: () => G,
    WM: () => F,
    Wl: () => P,
    XP: () => I,
    _D: () => U,
    _T: () => H,
    c1: () => $,
    dw: () => L,
    eY: () => O,
    fH: () => z,
    fY: () => B,
    hd: () => j,
    o$: () => N,
    oH: () => V,
    oT: () => l,
    qt: () => E,
    s2: () => Y,
    ug: () => k,
    yW: () => K,
    zk: () => J,
    zr: () => x
});
let i = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
i.decode();
let u = null;
function c() {
    return (null === u || 0 === u.byteLength) && (u = new Uint8Array(r.memory.buffer)), u;
}
function o(e, n) {
    return (e >>>= 0), i.decode(c().subarray(e, e + n));
}
let a = Array(128).fill(void 0);
a.push(void 0, null, !0, !1);
let d = a.length;
function s(e) {
    d === a.length && a.push(a.length + 1);
    let n = d;
    return (d = a[n]), (a[n] = e), n;
}
function f(e) {
    let n = a[e];
    return e < 132 || ((a[e] = d), (d = e)), n;
}
let _ = 0,
    g = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    b =
        'function' == typeof g.encodeInto
            ? function (e, n) {
                  return g.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = g.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length
                      }
                  );
              };
function h(e, n, t) {
    if (void 0 === t) {
        let t = g.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            c()
                .subarray(r, r + t.length)
                .set(t),
            (_ = t.length),
            r
        );
    }
    let r = e.length,
        l = n(r, 1) >>> 0,
        i = c(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        i[l + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (l = t(l, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = b(e, c().subarray(l + u, l + r));
        (u += n.written), (l = t(l, r, u, 1) >>> 0);
    }
    return (_ = u), l;
}
let m = null;
function y() {
    return (null === m || 0 === m.byteLength) && (m = new Int32Array(r.memory.buffer)), m;
}
let p = null;
function v(e, n) {
    let t, l;
    try {
        let b = r.__wbindgen_add_to_stack_pointer(-16),
            m = h(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            p = _;
        r.parse(b, m, p, s(n));
        var i = y()[b / 4 + 0],
            u = y()[b / 4 + 1],
            c = y()[b / 4 + 2],
            a = y()[b / 4 + 3],
            d = i,
            g = u;
        if (a) throw ((d = 0), (g = 0), f(c));
        return (t = d), (l = g), o(d, g);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, l, 1);
    }
}
function w(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(s(e));
    }
}
function j(e, n) {
    return s(Error(o(e, n)));
}
function x(e) {
    return null === a[e];
}
function I(e) {
    return void 0 === a[e];
}
function k(e) {
    f(e);
}
function E(e, n) {
    let t = a[n],
        l = 'string' == typeof t ? t : void 0;
    var i = null == l ? 0 : h(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        u = _;
    (y()[e / 4 + 1] = u), (y()[e / 4 + 0] = i);
}
function O(e) {
    return 'string' == typeof a[e];
}
function P(e) {
    let n = a[e];
    return 'object' == typeof n && null !== n;
}
function Z(e, n) {
    return a[e] == a[n];
}
function A(e) {
    let n = a[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function S(e, n) {
    let t = a[n],
        l = 'number' == typeof t ? t : void 0;
    (((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == l ? 0 : l), (y()[e / 4 + 0] = null != l);
}
function T(e, n) {
    let t = h(String(a[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = _;
    (y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t);
}
function C(e, n) {
    return s(a[e][n >>> 0]);
}
function H(e) {
    return a[e].length;
}
function N(e) {
    return 'function' == typeof a[e];
}
function $(e) {
    return s(a[e].next);
}
function q() {
    return w(function (e) {
        return s(a[e].next());
    }, arguments);
}
function D(e) {
    return a[e].done;
}
function F(e) {
    return s(a[e].value);
}
function M() {
    return s(Symbol.iterator);
}
function Y() {
    return w(function (e, n) {
        return s(Reflect.get(a[e], a[n]));
    }, arguments);
}
function G() {
    return w(function (e, n) {
        return s(a[e].call(a[n]));
    }, arguments);
}
function K(e) {
    return Array.isArray(a[e]);
}
function L(e) {
    let n;
    try {
        n = a[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function Q(e) {
    return s(Object.entries(a[e]));
}
function U(e) {
    return s(a[e].buffer);
}
function X(e) {
    return s(new Uint8Array(a[e]));
}
function z(e, n, t) {
    a[e].set(a[n], t >>> 0);
}
function W(e) {
    return a[e].length;
}
function J(e) {
    let n;
    try {
        n = a[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function B(e, n) {
    let t = h(
            (function e(n) {
                let t,
                    r = typeof n;
                if ('number' == r || 'boolean' == r || null == n) return `${n}`;
                if ('string' == r) return `"${n}"`;
                if ('symbol' == r) {
                    let e = n.description;
                    return null == e ? 'Symbol' : `Symbol(${e})`;
                }
                if ('function' == r) {
                    let e = n.name;
                    return 'string' == typeof e && e.length > 0 ? `Function(${e})` : 'Function';
                }
                if (Array.isArray(n)) {
                    let t = n.length,
                        r = '[';
                    t > 0 && (r += e(n[0]));
                    for (let l = 1; l < t; l++) r += ', ' + e(n[l]);
                    return r + ']';
                }
                let l = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!(l.length > 1)) return toString.call(n);
                if ('Object' == (t = l[1]))
                    try {
                        return 'Object(' + JSON.stringify(n) + ')';
                    } catch (e) {
                        return 'Object';
                    }
                return n instanceof Error
                    ? `${n.name}: ${n.message}
${n.stack}`
                    : t;
            })(a[n]),
            r.__wbindgen_export_0,
            r.__wbindgen_export_1
        ),
        l = _;
    (y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t);
}
function R(e, n) {
    throw Error(o(e, n));
}
function V() {
    return s(r.memory);
}
