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
    KG: () => N,
    KX: () => Q,
    M1: () => A,
    Or: () => R,
    Pn: () => X,
    Qc: () => m,
    Qr: () => T,
    Sp: () => L,
    WM: () => Y,
    Wl: () => P,
    XP: () => Z,
    _D: () => z,
    _T: () => E,
    c1: () => q,
    dw: () => G,
    eY: () => k,
    fH: () => U,
    fY: () => B,
    hd: () => v,
    o$: () => H,
    oH: () => V,
    oT: () => l,
    qt: () => I,
    s2: () => K,
    ug: () => w,
    yW: () => M,
    zk: () => J,
    zr: () => O
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
        let n = h(e, u().subarray(l + o, l + r));
        (o += n.written), (l = t(l, r, o, 1) >>> 0);
    }
    return (_ = o), l;
}
let y = null;
function j() {
    return (null === y || 0 === y.byteLength) && (y = new Int32Array(r.memory.buffer)), y;
}
let x = null;
function m(e, n) {
    let t, l;
    try {
        let h = r.__wbindgen_add_to_stack_pointer(-16),
            y = b(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            x = _;
        r.parse(h, y, x, s(n));
        var i = j()[h / 4 + 0],
            o = j()[h / 4 + 1],
            u = j()[h / 4 + 2],
            a = j()[h / 4 + 3],
            d = i,
            g = o;
        if (a) throw ((d = 0), (g = 0), f(u));
        return (t = d), (l = g), c(d, g);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, l, 1);
    }
}
function p(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(s(e));
    }
}
function v(e, n) {
    return s(Error(c(e, n)));
}
function w(e) {
    f(e);
}
function I(e, n) {
    let t = a[n],
        l = 'string' == typeof t ? t : void 0;
    var i = null == l ? 0 : b(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = _;
    (j()[e / 4 + 1] = o), (j()[e / 4 + 0] = i);
}
function k(e) {
    return 'string' == typeof a[e];
}
function O(e) {
    return null === a[e];
}
function Z(e) {
    return void 0 === a[e];
}
function P(e) {
    let n = a[e];
    return 'object' == typeof n && null !== n;
}
function T(e, n) {
    return a[e] == a[n];
}
function S(e) {
    let n = a[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function A(e, n) {
    let t = a[n],
        l = 'number' == typeof t ? t : void 0;
    (((null === x || 0 === x.byteLength) && (x = new Float64Array(r.memory.buffer)), x)[e / 8 + 1] = null == l ? 0 : l), (j()[e / 4 + 0] = null != l);
}
function C(e, n) {
    let t = b(String(a[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = _;
    (j()[e / 4 + 1] = l), (j()[e / 4 + 0] = t);
}
function N(e, n) {
    return s(a[e][n >>> 0]);
}
function E(e) {
    return a[e].length;
}
function H(e) {
    return 'function' == typeof a[e];
}
function q(e) {
    return s(a[e].next);
}
function $() {
    return p(function (e) {
        return s(a[e].next());
    }, arguments);
}
function D(e) {
    return a[e].done;
}
function Y(e) {
    return s(a[e].value);
}
function F() {
    return s(Symbol.iterator);
}
function K() {
    return p(function (e, n) {
        return s(Reflect.get(a[e], a[n]));
    }, arguments);
}
function L() {
    return p(function (e, n) {
        return s(a[e].call(a[n]));
    }, arguments);
}
function M(e) {
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
function X(e) {
    return s(Object.entries(a[e]));
}
function z(e) {
    return s(a[e].buffer);
}
function Q(e) {
    return s(new Uint8Array(a[e]));
}
function U(e, n, t) {
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
            })(a[n]),
            r.__wbindgen_export_0,
            r.__wbindgen_export_1
        ),
        l = _;
    (j()[e / 4 + 1] = l), (j()[e / 4 + 0] = t);
}
function R(e, n) {
    throw Error(c(e, n));
}
function V() {
    return s(r.memory);
}
