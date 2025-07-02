let r;
function o(e) {
    r = e;
}
t.d(n, {
    $X: () => H,
    Cl: () => R,
    F0: () => X,
    HT: () => K,
    K5: () => M,
    KA: () => C,
    KG: () => q,
    KX: () => L,
    M1: () => O,
    Or: () => V,
    Pn: () => Y,
    Qc: () => m,
    Qr: () => $,
    Sp: () => Q,
    WM: () => W,
    Wl: () => T,
    XP: () => E,
    _D: () => I,
    _T: () => B,
    c1: () => F,
    dw: () => z,
    eY: () => k,
    fH: () => G,
    fY: () => N,
    hd: () => j,
    o$: () => D,
    oH: () => Z,
    oT: () => o,
    qt: () => A,
    s2: () => P,
    ug: () => v,
    yW: () => U,
    zk: () => J,
    zr: () => S
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = i.length;
function c(e) {
    let n = i[e];
    return (e < 132 || ((i[e] = u), (u = e)), n);
}
let _ = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
_.decode();
let l = null;
function f() {
    return ((null === l || 0 === l.byteLength) && (l = new Uint8Array(r.memory.buffer)), l);
}
function a(e, n) {
    return ((e >>>= 0), _.decode(f().subarray(e, e + n)));
}
function d(e) {
    u === i.length && i.push(i.length + 1);
    let n = u;
    return ((u = i[n]), (i[n] = e), n);
}
let s = 0,
    b = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    g =
        'function' == typeof b.encodeInto
            ? function (e, n) {
                  return b.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = b.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length
                      }
                  );
              };
function y(e, n, t) {
    if (void 0 === t) {
        let t = b.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            f()
                .subarray(r, r + t.length)
                .set(t),
            (s = t.length),
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
        (0 !== u && (e = e.slice(u)), (o = t(o, r, (r = u + 3 * e.length), 1) >>> 0));
        let n = g(e, f().subarray(o + u, o + r));
        ((u += n.written), (o = t(o, r, u, 1) >>> 0));
    }
    return ((s = u), o);
}
let w = null;
function h() {
    return ((null === w || 0 === w.byteLength) && (w = new Int32Array(r.memory.buffer)), w);
}
let p = null;
function m(e, n) {
    let t, o;
    try {
        let g = r.__wbindgen_add_to_stack_pointer(-16),
            w = y(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            p = s;
        r.parse(g, w, p, d(n));
        var i = h()[g / 4 + 0],
            u = h()[g / 4 + 1],
            _ = h()[g / 4 + 2],
            l = h()[g / 4 + 3],
            f = i,
            b = u;
        if (l) throw ((f = 0), (b = 0), c(_));
        return ((t = f), (o = b), a(f, b));
    } finally {
        (r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, o, 1));
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
    c(e);
}
function j(e, n) {
    return d(Error(a(e, n)));
}
function A(e, n) {
    let t = i[n],
        o = 'string' == typeof t ? t : void 0;
    var u = null == o ? 0 : y(o, r.__wbindgen_export_0, r.__wbindgen_export_1),
        c = s;
    ((h()[e / 4 + 1] = c), (h()[e / 4 + 0] = u));
}
function k(e) {
    return 'string' == typeof i[e];
}
function S(e) {
    return null === i[e];
}
function E(e) {
    return void 0 === i[e];
}
function T(e) {
    let n = i[e];
    return 'object' == typeof n && null !== n;
}
function $(e, n) {
    return i[e] == i[n];
}
function K(e) {
    let n = i[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function O(e, n) {
    let t = i[n],
        o = 'number' == typeof t ? t : void 0;
    ((((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == o ? 0 : o), (h()[e / 4 + 0] = null != o));
}
function C(e, n) {
    let t = y(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = s;
    ((h()[e / 4 + 1] = o), (h()[e / 4 + 0] = t));
}
function q(e, n) {
    return d(i[e][n >>> 0]);
}
function B(e) {
    return i[e].length;
}
function D(e) {
    return 'function' == typeof i[e];
}
function F(e) {
    return d(i[e].next);
}
function H() {
    return x(function (e) {
        return d(i[e].next());
    }, arguments);
}
function M(e) {
    return i[e].done;
}
function W(e) {
    return d(i[e].value);
}
function X() {
    return d(Symbol.iterator);
}
function P() {
    return x(function (e, n) {
        return d(Reflect.get(i[e], i[n]));
    }, arguments);
}
function Q() {
    return x(function (e, n) {
        return d(i[e].call(i[n]));
    }, arguments);
}
function U(e) {
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
function Y(e) {
    return d(Object.entries(i[e]));
}
function I(e) {
    return d(i[e].buffer);
}
function L(e) {
    return d(new Uint8Array(i[e]));
}
function G(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function R(e) {
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
function N(e, n) {
    let t = y(
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
                    for (let o = 1; o < t; o++) r += ', ' + e(n[o]);
                    return r + ']';
                }
                let o = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!(o.length > 1)) return toString.call(n);
                if ('Object' == (t = o[1]))
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
        o = s;
    ((h()[e / 4 + 1] = o), (h()[e / 4 + 0] = t));
}
function V(e, n) {
    throw Error(a(e, n));
}
function Z() {
    return d(r.memory);
}
