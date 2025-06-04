let r;
function l(e) {
    r = e;
}
t.d(n, {
    $X: () => $,
    Cl: () => W,
    F0: () => F,
    HT: () => S,
    K5: () => D,
    KA: () => C,
    KG: () => E,
    KX: () => Q,
    M1: () => A,
    Or: () => R,
    Pn: () => X,
    Qc: () => m,
    Qr: () => T,
    Sp: () => L,
    WM: () => Y,
    Wl: () => P,
    XP: () => k,
    _D: () => z,
    _T: () => N,
    c1: () => q,
    dw: () => G,
    eY: () => Z,
    fH: () => U,
    fY: () => B,
    hd: () => w,
    o$: () => H,
    oH: () => V,
    oT: () => l,
    qt: () => O,
    s2: () => K,
    ug: () => p,
    yW: () => M,
    zk: () => J,
    zr: () => I
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = i.length;
function o(e) {
    let n = i[e];
    return e < 132 || ((i[e] = u), (u = e)), n;
}
let c = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
c.decode();
let a = null;
function d() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)), a;
}
function s(e, n) {
    return (e >>>= 0), c.decode(d().subarray(e, e + n));
}
function f(e) {
    u === i.length && i.push(i.length + 1);
    let n = u;
    return (u = i[n]), (i[n] = e), n;
}
let _ = 0,
    g = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    h =
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
function b(e, n, t) {
    if (void 0 === t) {
        let t = g.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            d()
                .subarray(r, r + t.length)
                .set(t),
            (_ = t.length),
            r
        );
    }
    let r = e.length,
        l = n(r, 1) >>> 0,
        i = d(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        i[l + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (l = t(l, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = h(e, d().subarray(l + u, l + r));
        (u += n.written), (l = t(l, r, u, 1) >>> 0);
    }
    return (_ = u), l;
}
let x = null;
function y() {
    return (null === x || 0 === x.byteLength) && (x = new Int32Array(r.memory.buffer)), x;
}
let j = null;
function m(e, n) {
    let t, l;
    try {
        let h = r.__wbindgen_add_to_stack_pointer(-16),
            x = b(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            j = _;
        r.parse(h, x, j, f(n));
        var i = y()[h / 4 + 0],
            u = y()[h / 4 + 1],
            c = y()[h / 4 + 2],
            a = y()[h / 4 + 3],
            d = i,
            g = u;
        if (a) throw ((d = 0), (g = 0), o(c));
        return (t = d), (l = g), s(d, g);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, l, 1);
    }
}
function v(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(f(e));
    }
}
function p(e) {
    o(e);
}
function w(e, n) {
    return f(Error(s(e, n)));
}
function I(e) {
    return null === i[e];
}
function k(e) {
    return void 0 === i[e];
}
function O(e, n) {
    let t = i[n],
        l = 'string' == typeof t ? t : void 0;
    var u = null == l ? 0 : b(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = _;
    (y()[e / 4 + 1] = o), (y()[e / 4 + 0] = u);
}
function Z(e) {
    return 'string' == typeof i[e];
}
function P(e) {
    let n = i[e];
    return 'object' == typeof n && null !== n;
}
function T(e, n) {
    return i[e] == i[n];
}
function S(e) {
    let n = i[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function A(e, n) {
    let t = i[n],
        l = 'number' == typeof t ? t : void 0;
    (((null === j || 0 === j.byteLength) && (j = new Float64Array(r.memory.buffer)), j)[e / 8 + 1] = null == l ? 0 : l), (y()[e / 4 + 0] = null != l);
}
function C(e, n) {
    let t = b(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = _;
    (y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t);
}
function E(e, n) {
    return f(i[e][n >>> 0]);
}
function N(e) {
    return i[e].length;
}
function H(e) {
    return 'function' == typeof i[e];
}
function q(e) {
    return f(i[e].next);
}
function $() {
    return v(function (e) {
        return f(i[e].next());
    }, arguments);
}
function D(e) {
    return i[e].done;
}
function Y(e) {
    return f(i[e].value);
}
function F() {
    return f(Symbol.iterator);
}
function K() {
    return v(function (e, n) {
        return f(Reflect.get(i[e], i[n]));
    }, arguments);
}
function L() {
    return v(function (e, n) {
        return f(i[e].call(i[n]));
    }, arguments);
}
function M(e) {
    return Array.isArray(i[e]);
}
function G(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function X(e) {
    return f(Object.entries(i[e]));
}
function z(e) {
    return f(i[e].buffer);
}
function Q(e) {
    return f(new Uint8Array(i[e]));
}
function U(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function W(e) {
    return i[e].length;
}
function J(e) {
    let n;
    try {
        n = i[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function B(e, n) {
    let t = b(
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
            })(i[n]),
            r.__wbindgen_export_0,
            r.__wbindgen_export_1
        ),
        l = _;
    (y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t);
}
function R(e, n) {
    throw Error(s(e, n));
}
function V() {
    return f(r.memory);
}
