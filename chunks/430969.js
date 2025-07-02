let r;
function o(e) {
    r = e;
}
t.d(n, {
    $X: () => D,
    Cl: () => L,
    F0: () => M,
    HT: () => T,
    K5: () => F,
    KA: () => K,
    KG: () => O,
    KX: () => Y,
    M1: () => $,
    Or: () => J,
    Pn: () => U,
    Qr: () => E,
    Sp: () => X,
    WM: () => H,
    Wl: () => S,
    XP: () => k,
    _D: () => z,
    _T: () => C,
    c1: () => B,
    dw: () => Q,
    eY: () => j,
    fH: () => I,
    fY: () => R,
    hd: () => x,
    o$: () => q,
    oH: () => N,
    oT: () => o,
    qt: () => v,
    s2: () => W,
    ug: () => m,
    yW: () => P,
    zk: () => G,
    zr: () => A
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = i.length,
    c = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
        ignoreBOM: !0,
        fatal: !0
    });
c.decode();
let _ = null;
function l() {
    return ((null === _ || 0 === _.byteLength) && (_ = new Uint8Array(r.memory.buffer)), _);
}
function f(e, n) {
    return ((e >>>= 0), c.decode(l().subarray(e, e + n)));
}
function a(e) {
    u === i.length && i.push(i.length + 1);
    let n = u;
    return ((u = i[n]), (i[n] = e), n);
}
let d = 0,
    s = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    b =
        'function' == typeof s.encodeInto
            ? function (e, n) {
                  return s.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = s.encode(e);
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
        let t = s.encode(e),
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
        (0 !== u && (e = e.slice(u)), (o = t(o, r, (r = u + 3 * e.length), 1) >>> 0));
        let n = b(e, l().subarray(o + u, o + r));
        ((u += n.written), (o = t(o, r, u, 1) >>> 0));
    }
    return ((d = u), o);
}
let y = null;
function w() {
    return ((null === y || 0 === y.byteLength) && (y = new Int32Array(r.memory.buffer)), y);
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
        (i[e], e < 132 || ((i[e] = u), (u = e)));
    })(e);
}
function x(e, n) {
    return a(Error(f(e, n)));
}
function v(e, n) {
    let t = i[n],
        o = 'string' == typeof t ? t : void 0;
    var u = null == o ? 0 : g(o, r.__wbindgen_export_0, r.__wbindgen_export_1),
        c = d;
    ((w()[e / 4 + 1] = c), (w()[e / 4 + 0] = u));
}
function j(e) {
    return 'string' == typeof i[e];
}
function A(e) {
    return null === i[e];
}
function k(e) {
    return void 0 === i[e];
}
function S(e) {
    let n = i[e];
    return 'object' == typeof n && null !== n;
}
function E(e, n) {
    return i[e] == i[n];
}
function T(e) {
    let n = i[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function $(e, n) {
    let t = i[n],
        o = 'number' == typeof t ? t : void 0;
    ((((null === h || 0 === h.byteLength) && (h = new Float64Array(r.memory.buffer)), h)[e / 8 + 1] = null == o ? 0 : o), (w()[e / 4 + 0] = null != o));
}
function K(e, n) {
    let t = g(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = d;
    ((w()[e / 4 + 1] = o), (w()[e / 4 + 0] = t));
}
function O(e, n) {
    return a(i[e][n >>> 0]);
}
function C(e) {
    return i[e].length;
}
function q(e) {
    return 'function' == typeof i[e];
}
function B(e) {
    return a(i[e].next);
}
function D() {
    return p(function (e) {
        return a(i[e].next());
    }, arguments);
}
function F(e) {
    return i[e].done;
}
function H(e) {
    return a(i[e].value);
}
function M() {
    return a(Symbol.iterator);
}
function W() {
    return p(function (e, n) {
        return a(Reflect.get(i[e], i[n]));
    }, arguments);
}
function X() {
    return p(function (e, n) {
        return a(i[e].call(i[n]));
    }, arguments);
}
function P(e) {
    return Array.isArray(i[e]);
}
function Q(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function U(e) {
    return a(Object.entries(i[e]));
}
function z(e) {
    return a(i[e].buffer);
}
function Y(e) {
    return a(new Uint8Array(i[e]));
}
function I(e, n, t) {
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
function R(e, n) {
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
        o = d;
    ((w()[e / 4 + 1] = o), (w()[e / 4 + 0] = t));
}
function J(e, n) {
    throw Error(f(e, n));
}
function N() {
    return a(r.memory);
}
