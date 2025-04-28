let r;
function l(e) {
    r = e;
}
t.d(n, {
    $X: () => q,
    Cl: () => W,
    F0: () => Y,
    HT: () => S,
    K5: () => D,
    KA: () => T,
    KG: () => Z,
    KX: () => X,
    M1: () => C,
    Or: () => R,
    Pn: () => Q,
    Qc: () => v,
    Qr: () => A,
    Sp: () => L,
    WM: () => M,
    Wl: () => P,
    XP: () => k,
    _D: () => U,
    _T: () => H,
    c1: () => $,
    dw: () => G,
    eY: () => E,
    fH: () => z,
    fY: () => B,
    hd: () => j,
    o$: () => N,
    oH: () => V,
    oT: () => l,
    qt: () => O,
    s2: () => K,
    ug: () => I,
    yW: () => F,
    zk: () => J,
    zr: () => x
});
let i = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
i.decode();
let o = null;
function u() {
    return (null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o;
}
function c(e, n) {
    return (e >>>= 0), i.decode(u().subarray(e, e + n));
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
            u()
                .subarray(r, r + t.length)
                .set(t),
            (_ = t.length),
            r
        );
    }
    let r = e.length,
        l = n(r, 1) >>> 0,
        i = u(),
        o = 0;
    for (; o < r; o++) {
        let n = e.charCodeAt(o);
        if (n > 127) break;
        i[l + o] = n;
    }
    if (o !== r) {
        0 !== o && (e = e.slice(o)), (l = t(l, r, (r = o + 3 * e.length), 1) >>> 0);
        let n = b(e, u().subarray(l + o, l + r));
        (o += n.written), (l = t(l, r, o, 1) >>> 0);
    }
    return (_ = o), l;
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
            o = y()[b / 4 + 1],
            u = y()[b / 4 + 2],
            a = y()[b / 4 + 3],
            d = i,
            g = o;
        if (a) throw ((d = 0), (g = 0), f(u));
        return (t = d), (l = g), c(d, g);
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
    return s(Error(c(e, n)));
}
function x(e) {
    return null === a[e];
}
function k(e) {
    return void 0 === a[e];
}
function I(e) {
    f(e);
}
function O(e, n) {
    let t = a[n],
        l = 'string' == typeof t ? t : void 0;
    var i = null == l ? 0 : h(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = _;
    (y()[e / 4 + 1] = o), (y()[e / 4 + 0] = i);
}
function E(e) {
    return 'string' == typeof a[e];
}
function P(e) {
    let n = a[e];
    return 'object' == typeof n && null !== n;
}
function A(e, n) {
    return a[e] == a[n];
}
function S(e) {
    let n = a[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function C(e, n) {
    let t = a[n],
        l = 'number' == typeof t ? t : void 0;
    (((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == l ? 0 : l), (y()[e / 4 + 0] = null != l);
}
function T(e, n) {
    let t = h(String(a[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = _;
    (y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t);
}
function Z(e, n) {
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
function M(e) {
    return s(a[e].value);
}
function Y() {
    return s(Symbol.iterator);
}
function K() {
    return w(function (e, n) {
        return s(Reflect.get(a[e], a[n]));
    }, arguments);
}
function L() {
    return w(function (e, n) {
        return s(a[e].call(a[n]));
    }, arguments);
}
function F(e) {
    return Array.isArray(a[e]);
}
function G(e) {
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
    throw Error(c(e, n));
}
function V() {
    return s(r.memory);
}
