let r;
function l(e) {
    r = e;
}
t.d(n, {
    $X: () => q,
    Cl: () => W,
    F0: () => M,
    HT: () => S,
    K5: () => $,
    KA: () => A,
    KG: () => E,
    KX: () => X,
    M1: () => T,
    Or: () => R,
    Pn: () => U,
    Qc: () => j,
    Qr: () => C,
    Sp: () => F,
    WM: () => L,
    Wl: () => Z,
    XP: () => P,
    _D: () => G,
    _T: () => N,
    c1: () => H,
    dw: () => z,
    eY: () => k,
    fH: () => Q,
    fY: () => J,
    hd: () => w,
    o$: () => D,
    oH: () => V,
    oT: () => l,
    qt: () => O,
    s2: () => Y,
    ug: () => v,
    yW: () => K,
    zk: () => B,
    zr: () => I
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let c = i.length;
function o(e) {
    let n = i[e];
    return (e < 132 || ((i[e] = c), (c = e)), n);
}
let u = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
u.decode();
let a = null;
function s() {
    return ((null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)), a);
}
function d(e, n) {
    return ((e >>>= 0), u.decode(s().subarray(e, e + n)));
}
function f(e) {
    c === i.length && i.push(i.length + 1);
    let n = c;
    return ((c = i[n]), (i[n] = e), n);
}
let _ = 0,
    h = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    b =
        'function' == typeof h.encodeInto
            ? function (e, n) {
                  return h.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = h.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length
                      }
                  );
              };
function g(e, n, t) {
    if (void 0 === t) {
        let t = h.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            s()
                .subarray(r, r + t.length)
                .set(t),
            (_ = t.length),
            r
        );
    }
    let r = e.length,
        l = n(r, 1) >>> 0,
        i = s(),
        c = 0;
    for (; c < r; c++) {
        let n = e.charCodeAt(c);
        if (n > 127) break;
        i[l + c] = n;
    }
    if (c !== r) {
        (0 !== c && (e = e.slice(c)), (l = t(l, r, (r = c + 3 * e.length), 1) >>> 0));
        let n = b(e, s().subarray(l + c, l + r));
        ((c += n.written), (l = t(l, r, c, 1) >>> 0));
    }
    return ((_ = c), l);
}
let m = null;
function y() {
    return ((null === m || 0 === m.byteLength) && (m = new Int32Array(r.memory.buffer)), m);
}
let p = null;
function j(e, n) {
    let t, l;
    try {
        let b = r.__wbindgen_add_to_stack_pointer(-16),
            m = g(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            p = _;
        r.parse(b, m, p, f(n));
        var i = y()[b / 4 + 0],
            c = y()[b / 4 + 1],
            u = y()[b / 4 + 2],
            a = y()[b / 4 + 3],
            s = i,
            h = c;
        if (a) throw ((s = 0), (h = 0), o(u));
        return ((t = s), (l = h), d(s, h));
    } finally {
        (r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, l, 1));
    }
}
function x(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(f(e));
    }
}
function v(e) {
    o(e);
}
function w(e, n) {
    return f(Error(d(e, n)));
}
function O(e, n) {
    let t = i[n],
        l = 'string' == typeof t ? t : void 0;
    var c = null == l ? 0 : g(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = _;
    ((y()[e / 4 + 1] = o), (y()[e / 4 + 0] = c));
}
function k(e) {
    return 'string' == typeof i[e];
}
function I(e) {
    return null === i[e];
}
function P(e) {
    return void 0 === i[e];
}
function Z(e) {
    let n = i[e];
    return 'object' == typeof n && null !== n;
}
function C(e, n) {
    return i[e] == i[n];
}
function S(e) {
    let n = i[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function T(e, n) {
    let t = i[n],
        l = 'number' == typeof t ? t : void 0;
    ((((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == l ? 0 : l), (y()[e / 4 + 0] = null != l));
}
function A(e, n) {
    let t = g(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = _;
    ((y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t));
}
function E(e, n) {
    return f(i[e][n >>> 0]);
}
function N(e) {
    return i[e].length;
}
function D(e) {
    return 'function' == typeof i[e];
}
function H(e) {
    return f(i[e].next);
}
function q() {
    return x(function (e) {
        return f(i[e].next());
    }, arguments);
}
function $(e) {
    return i[e].done;
}
function L(e) {
    return f(i[e].value);
}
function M() {
    return f(Symbol.iterator);
}
function Y() {
    return x(function (e, n) {
        return f(Reflect.get(i[e], i[n]));
    }, arguments);
}
function F() {
    return x(function (e, n) {
        return f(i[e].call(i[n]));
    }, arguments);
}
function K(e) {
    return Array.isArray(i[e]);
}
function z(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function U(e) {
    return f(Object.entries(i[e]));
}
function G(e) {
    return f(i[e].buffer);
}
function X(e) {
    return f(new Uint8Array(i[e]));
}
function Q(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function W(e) {
    return i[e].length;
}
function B(e) {
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
    ((y()[e / 4 + 1] = l), (y()[e / 4 + 0] = t));
}
function R(e, n) {
    throw Error(d(e, n));
}
function V() {
    return f(r.memory);
}
