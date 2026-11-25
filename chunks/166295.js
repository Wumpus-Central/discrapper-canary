var r, i;
let a, s, o, u, d, l, c, f, h, p;
function _(e) {
    let t = Object.values(e).filter((e) => "number" == typeof e);
    return Object.entries(e)
        .filter(([e, n]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
}
function m(e, t = "|") {
    return e.map((e) => z(e)).join(t);
}
function y(e, t) {
    return "bigint" == typeof t ? t.toString() : t;
}
n.d(t, { k5n: () => rB, Ikc: () => rC, jgl: () => rL, YjP: () => ri });
class g {
    constructor(e) {
        ((this._getter = e), (this._value = void 0));
    }
    get value() {
        let e = this._getter;
        return (void 0 !== e && ((this._value = e()), (this._getter = void 0)), this._value);
    }
}
function v(e) {
    let t = +!!e.startsWith("^"),
        n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
}
function b(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function w(e) {
    let t = Object.getOwnPropertyDescriptor(e, "shape");
    return t?.get ? t.get.raw : t?.value;
}
function V(e) {
    return w(e._zod.def) ?? e._zod.def.shape;
}
function T(e, t, n) {
    Object.defineProperty(e, t, {
        get() {
            let e = n();
            return (b(this, t, e), e);
        },
        enumerable: !0,
        configurable: !0,
    });
}
function k(e, t, n) {
    t in e ? b(e, t, n) : (e[t] = n);
}
function A(e, t, n, r) {
    let i = V(t);
    for (let a of n) {
        let n = Object.getOwnPropertyDescriptor(i, a);
        n.enumerable &&
            (n.get
                ? T(e, a, () => {
                      let e = t._zod.def.shape[a];
                      return r ? r(e, a) : e;
                  })
                : k(e, a, r ? r(n.value, a) : n.value));
    }
}
function E(...e) {
    let t = {};
    for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
    return Object.defineProperties({}, t);
}
let P = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function x(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
let S = new g(() => {
    if (eo.jitless || ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare"))) return !1;
    try {
        return (Function(""), !0);
    } catch (e) {
        return !1;
    }
});
function O(e) {
    if (!1 === x(e)) return !1;
    let t = e.constructor;
    if (void 0 === t || "function" != typeof t) return !0;
    let n = t.prototype;
    return !1 !== x(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function R(e) {
    return O(e)
        ? { ...e }
        : Array.isArray(e)
          ? [...e]
          : e instanceof Map
            ? new Map(e)
            : e instanceof Set
              ? new Set(e)
              : e;
}
let M = new Set(["string", "number", "symbol"]);
function F(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function C(e, t, n) {
    let r = new e._zod.constr(t ?? e._zod.def);
    return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function D(e) {
    if (!e) return {};
    if ("string" == typeof e) return { error: () => e };
    if (e?.message !== void 0) {
        if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e;
}
function z(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
let I = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    L = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
    };
function j(e, t) {
    let n = V(e),
        r = [];
    for (let e of Reflect.ownKeys(t)) {
        if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
        t[e] && r.push(e);
    }
    return r;
}
function B(e, t) {
    let n = {};
    A(n, e, Reflect.ownKeys(V(e)));
    for (let e of Reflect.ownKeys(t)) {
        let r = Object.getOwnPropertyDescriptor(t, e);
        r.enumerable && (r.get ? T(n, e, () => t[e]) : k(n, e, r.value));
    }
    return n;
}
function N(e, t, n, r = "partial") {
    let i = t._zod.def.checks;
    if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
    let a = n ? new Set(j(t, n)) : void 0,
        s = {};
    return (
        A(
            s,
            t,
            Reflect.ownKeys(V(t)),
            e && ((t, n) => (a && !a.has(n) ? t : new e({ type: "optional", innerType: t }))),
        ),
        C(t, E(t._zod.def, { shape: s, checks: [] }))
    );
}
function G(e, t = 0) {
    if (!0 === e.aborted) return !0;
    for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
    return !1;
}
function U(e, t) {
    return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
}
function $(e) {
    return "string" == typeof e ? e : e?.message;
}
function Z(e) {
    let t = [];
    for (let n of e ?? []) {
        let e = n._zod.def;
        if (!/_(length|size)$|_equals$/.test(e.check)) break;
        let r = e.maximum ?? e.length ?? e.size;
        r >= 0 && t.push([r, n]);
    }
    return t;
}
function H(e, t, n) {
    var r;
    for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function W(e, t, n) {
    let r = e.inst?._zod?.traits;
    r?.has("$ZodType") && (r.has("$ZodCheck") ? (e.schema ?? (e.schema = e.inst)) : (e.schema = e.inst));
    let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
        a = e.message
            ? e.message
            : ($(e.inst?._zod.def?.error?.(e)) ??
              $(i?.(e)) ??
              $(t?.error?.(e)) ??
              $(n.customError?.(e)) ??
              $(n.localeError?.(e)) ??
              "Invalid input"),
        s = {};
    for (let t of Object.keys(e))
        "inst" !== t && "schema" !== t && "continue" !== t && "input" !== t && "__proto__" !== t && (s[t] = e[t]);
    return (s.path ?? (s.path = []), (s.message = a), t?.reportInput && (s.input = e.input), s);
}
let K = /[\uD800-\uDBFF]/;
function q(e) {
    let t = e.length;
    if (!K.test(e)) return t;
    let n = t;
    for (let r = 0; r < t - 1; r++)
        (64512 & e.charCodeAt(r)) == 55296 && (64512 & e.charCodeAt(r + 1)) == 56320 && (n--, r++);
    return n;
}
function X(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function J(...e) {
    let [t, n, r] = e;
    return "string" == typeof t ? { message: t, code: "custom", input: n, inst: r } : { ...t };
}
function Y(e, t, n, r = !0) {
    return (Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: r, value: n }), n);
}
let Q = !1,
    ee = {
        configurable: !0,
        get() {
            Q = !0;
        },
    };
function et(e, t, n) {
    let r = Object.getPrototypeOf(e._zod);
    if (t in r && a !== e._zod) {
        a = void 0;
        return;
    }
    ((a = e._zod),
        Object.defineProperty(r, t, {
            configurable: !0,
            get() {
                Object.defineProperty(this, t, ee);
                let e = Q;
                Q = !1;
                try {
                    let r = n(this);
                    return (
                        Q
                            ? delete this[t]
                            : Object.defineProperty(this, t, { configurable: !0, writable: !0, value: r }),
                        (Q = Q || e),
                        r
                    );
                } catch (n) {
                    throw (delete this[t], (Q = Q || e), n);
                }
            },
            set(e) {
                Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
            },
        }));
}
let en = { value: void 0, enumerable: !1 },
    er = "captureStackTrace" in Error ? Error : null;
function ei(e, t, n, r) {
    function i(e) {
        ((this.def = e), (this.constr = d), (this.traits = new Set()));
    }
    i.prototype = {};
    let a = n && new WeakSet();
    function s(r, s) {
        if (r._zod) {
            if (r._zod.traits.has(e)) return;
        } else {
            en.value = new i(s);
            try {
                Object.defineProperty(r, "_zod", en);
            } finally {
                en.value = void 0;
            }
        }
        if ((r._zod.traits.add(e), t(r, s), a)) {
            let e = Object.getPrototypeOf(r),
                t = r._zod.constr.prototype,
                i = e;
            for (; i && i !== t;) i = Object.getPrototypeOf(i);
            let s = i ?? e;
            if (!a.has(s)) {
                a.add(s);
                for (let e in n) {
                    let t = Object.getOwnPropertyDescriptor(n, e);
                    t.get
                        ? Object.defineProperty(s, e, { ...t, enumerable: !1 })
                        : (function (e, t, n) {
                              Object.defineProperty(e, t, {
                                  configurable: !0,
                                  get() {
                                      return this == null ? n : Y(this, t, n.bind(this));
                                  },
                                  set(e) {
                                      Y(this, t, e);
                                  },
                              });
                          })(s, e, t.value);
                }
            }
        }
        let o = d.prototype;
        for (let e in o) Object.prototype.hasOwnProperty.call(o, e) && (e in r || (r[e] = o[e].bind(r)));
    }
    let o = r?.Parent ?? Object;
    class u extends o {}
    function d(e) {
        let t = r?.Parent
            ? (function (e) {
                  let t = er;
                  if (t) {
                      let n = t.stackTraceLimit;
                      if ("number" == typeof n) {
                          try {
                              t.stackTraceLimit = 0;
                          } catch {
                              return ((er = null), new e());
                          }
                          try {
                              return new e();
                          } finally {
                              t.stackTraceLimit = n;
                          }
                      }
                  }
                  return new e();
              })(u)
            : this;
        s(t, e);
        let n = t._zod.deferred;
        if (n) {
            for (let e of n) e();
            t._zod.deferred = void 0;
        }
        let i = globalThis.__zod_globalConfig?.postProcessor;
        return (i && i(t), t);
    }
    return (
        Object.defineProperty(u, "name", { value: e }),
        Object.defineProperty(d, "init", { value: s }),
        Object.defineProperty(d, Symbol.hasInstance, {
            value: (t) => (!!r?.Parent && t instanceof r.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(d, "name", { value: e }),
        d
    );
}
class ea extends Error {
    constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
class es extends Error {
    constructor(e) {
        (super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"));
    }
}
(r = globalThis).__zod_globalConfig ?? (r.__zod_globalConfig = {});
let eo = globalThis.__zod_globalConfig;
function eu(e) {
    return (e && Object.assign(eo, e), eo);
}
class ed extends Error {
    constructor() {
        (super("Cannot parse a reference cycle that closes through a transform"), (this.name = "ZodCyclicError"));
    }
}
let el = "~memo",
    ec = [];
function ef(e) {
    return null !== e && "object" == typeof e;
}
function eh(e) {
    return e.map((e) => (e.path ? { ...e, path: e.path.slice() } : { ...e }));
}
let ep = new WeakMap(),
    e_ = [],
    em = {
        alloc(e, t, n) {
            let r = s;
            if (!r) return n;
            s = void 0;
            let i = { value: n, issues: null };
            return (r.set(t.value, i), e_.push(i), n);
        },
        guard(e) {
            var t;
            ((t = e._zod).deferred ?? (t.deferred = []),
                e._zod.deferred.push(() => {
                    let t = e._zod.parse,
                        n = (e, n) => {
                            var r, i;
                            let a;
                            if (
                                "backward" !== n.direction &&
                                ((r = n), (i = e.value), void 0 !== (a = r[el]?.backEdges) && ef(i) && a.has(i))
                            )
                                throw new ed();
                            return t(e, n);
                        };
                    ((e._zod.parse = n), e._zod.run === t && (e._zod.run = n));
                }));
        },
        attach(e) {
            var t;
            let n,
                r,
                i,
                a = !1;
            ((t = e._zod).deferred ?? (t.deferred = []),
                e._zod.deferred.push(() => {
                    let t = e._zod.parse,
                        o = (u, d) => {
                            let l;
                            if (void 0 === n) {
                                let r = (function e(t, n, r) {
                                    var i, a;
                                    let s = ep.get(t);
                                    if (void 0 !== s) return 2 * !!s;
                                    if (n.has(t)) return 2;
                                    n.add(t);
                                    let o = 0,
                                        u = (t) => {
                                            if (2 !== o && t?._zod) {
                                                let i = e(t, n, r);
                                                i > o && (o = i);
                                            }
                                        },
                                        d = (e) => {
                                            e > o && (o = e);
                                        },
                                        l = t._zod.def;
                                    switch (l.type) {
                                        case "object": {
                                            let t = w(l);
                                            (d(
                                                t
                                                    ? ((t, i) => {
                                                          let a = 0;
                                                          for (let s of Reflect.ownKeys(t)) {
                                                              let o = Object.getOwnPropertyDescriptor(t, s);
                                                              if (i && !o.enumerable) continue;
                                                              let u = o.get ? 1 : o.value?._zod ? e(o.value, n, r) : 0;
                                                              u > a && (a = u);
                                                          }
                                                          return a;
                                                      })(t, !0)
                                                    : 1,
                                            ),
                                                u(l.catchall));
                                            break;
                                        }
                                        case "array":
                                            u(l.element);
                                            break;
                                        case "tuple":
                                            for (let e of l.items) u(e);
                                            u(l.rest);
                                            break;
                                        case "record":
                                        case "map":
                                            (u(l.keyType), u(l.valueType));
                                            break;
                                        case "set":
                                            u(l.valueType);
                                            break;
                                        case "union":
                                            for (let e of l.options) u(e);
                                            break;
                                        case "intersection":
                                            (u(l.left), u(l.right));
                                            break;
                                        case "optional":
                                        case "nullable":
                                        case "default":
                                        case "prefault":
                                        case "catch":
                                        case "readonly":
                                        case "nonoptional":
                                        case "promise":
                                        case "success":
                                            u(l.innerType);
                                            break;
                                        case "pipe":
                                            (u(l.in), u(l.out));
                                            break;
                                        case "function":
                                            (u(l.input), u(l.output));
                                            break;
                                        case "lazy": {
                                            let i = l._cachedInner ?? (r ? t._zod.innerType : void 0);
                                            d(i ? e(i, n, !1) : 1);
                                            break;
                                        }
                                        case "template_literal":
                                        case "string":
                                        case "number":
                                        case "int":
                                        case "boolean":
                                        case "bigint":
                                        case "symbol":
                                        case "undefined":
                                        case "null":
                                        case "void":
                                        case "never":
                                        case "any":
                                        case "unknown":
                                        case "date":
                                        case "nan":
                                        case "enum":
                                        case "literal":
                                        case "file":
                                        case "transform":
                                        case "custom":
                                            break;
                                        default:
                                            for (let e in l) {
                                                let t = Object.getOwnPropertyDescriptor(l, e);
                                                if (!t || t.get) continue;
                                                let n = t.value;
                                                if (n && "object" == typeof n) {
                                                    if (n._zod) u(n);
                                                    else if (Array.isArray(n)) for (let e of n) u(e);
                                                }
                                            }
                                    }
                                    return (n.delete(t), (i = t), 1 !== (a = o) && ep.set(i, 2 === a), a);
                                })(e, new Set(), !1);
                                if (0 === r) return ((e._zod.parse = t), e._zod.run === o && (e._zod.run = t), t(u, d));
                                2 === r || a ? (n = !0) : (a = !0);
                            }
                            let c = u.value;
                            if (!ef(c)) return t(u, d);
                            let f = d[el];
                            if ((f || ((f = { buckets: new WeakMap(), backEdges: void 0 }), (d[el] = f)), r === d))
                                l = i;
                            else {
                                var h;
                                let t;
                                ((t = (h = f).buckets.get(e)) || ((t = new WeakMap()), h.buckets.set(e, t)),
                                    (l = t),
                                    (r = d),
                                    (i = l));
                            }
                            let p = l.get(c);
                            if (p)
                                return (
                                    (u.value = p.value),
                                    p.issues
                                        ? p.issues.length && u.issues.push(...eh(p.issues))
                                        : ((u.memo = !0),
                                          f.backEdges ?? (f.backEdges = new WeakSet()),
                                          f.backEdges.add(p.value)),
                                    u
                                );
                            s = l;
                            let _ = e_.length,
                                m = t(u, d);
                            s = void 0;
                            let y = e_.length > _ ? e_.pop() : void 0;
                            return m instanceof Promise
                                ? m.then((e) => (y && (y.issues = e.issues.length ? eh(e.issues) : ec), e))
                                : (y && (y.issues = m.issues.length ? eh(m.issues) : ec), m);
                        };
                    ((e._zod.parse = o), e._zod.run === t && (e._zod.run = o));
                }));
        },
    },
    ey = /^[cC][0-9a-z]{6,}$/,
    eg = /^[0-9a-z]+$/,
    ev = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
    eb = /^[0-9a-vA-V]{20}$/,
    ew = /^[A-Za-z0-9]{27}$/,
    eV = /^[a-zA-Z0-9_-]{21}$/,
    eT = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    ek = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    eA = (e) =>
        e
            ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    eE = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    eP =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ex =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    eS =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    eO =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    eR = /^https?$/,
    eM = /^\+[1-9]\d{6,14}$/,
    eF =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    eC = RegExp(`^${eF}$`);
function eD(e) {
    let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e.precision
        ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : e.seconds
          ? `${t}:[0-5]\\d(?:\\.\\d+)?`
          : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
let ez = /^[\s\S]{0,}$/,
    eI = /^-?\d+$/,
    eL = /^-?\d+(?:\.\d+)?$/,
    ej = /^[^A-Z]*$/,
    eB = /^[^a-z]*$/,
    eN = ei("$ZodCheck", (e, t) => {
        var n;
        (e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
    }),
    eG = (e) => {
        let t = e.value;
        return null != t && void 0 !== t.length;
    },
    eU = ei("$ZodCheckMaxLength", (e, t) => {
        var n;
        (eN.init(e, t),
            (n = e._zod.def).when ?? (n.when = eG),
            (e._zod.check = (n) => {
                let r = n.value,
                    i = r.length;
                if (("string" == typeof r && i > t.maximum ? q(r) : i) <= t.maximum) return;
                let a = X(r);
                n.issues.push({
                    origin: a,
                    code: "too_big",
                    maximum: t.maximum,
                    inclusive: !0,
                    input: r,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    e$ = ei("$ZodCheckMinLength", (e, t) => {
        var n;
        (eN.init(e, t),
            (n = e._zod.def).when ?? (n.when = eG),
            (e._zod.check = (n) => {
                let r = n.value,
                    i = r.length;
                if (("string" == typeof r && i >= t.minimum && i < 2 * t.minimum ? q(r) : i) >= t.minimum) return;
                let a = X(r);
                n.issues.push({
                    origin: a,
                    code: "too_small",
                    minimum: t.minimum,
                    inclusive: !0,
                    input: r,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    eZ = ei("$ZodCheckLengthEquals", (e, t) => {
        var n;
        (eN.init(e, t),
            (n = e._zod.def).when ?? (n.when = eG),
            (e._zod.check = (n) => {
                let r = n.value,
                    i = r.length,
                    a = "string" == typeof r && i >= t.length && i <= 2 * t.length ? q(r) : i;
                if (a === t.length) return;
                let s = X(r),
                    o = a > t.length;
                n.issues.push({
                    origin: s,
                    ...(o ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            }));
    }),
    eH = ei("$ZodCheckStringFormat", (e, t) => {
        var n, r;
        (eN.init(e, t),
            t.pattern
                ? ((n = e._zod).check ??
                  (n.check = (n) => {
                      ((t.pattern.lastIndex = 0),
                          t.pattern.test(n.value) ||
                              n.issues.push({
                                  origin: "string",
                                  code: "invalid_format",
                                  format: t.format,
                                  input: n.value,
                                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                                  inst: e,
                                  continue: !t.abort,
                              }));
                  }))
                : ((r = e._zod).check ?? (r.check = () => {})));
    }),
    eW = ei("$ZodCheckRegex", (e, t) => {
        (eH.init(e, t),
            (e._zod.check = (n) => {
                ((t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                        n.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: "regex",
                            input: n.value,
                            pattern: t.pattern.toString(),
                            inst: e,
                            continue: !t.abort,
                        }));
            }));
    }),
    eK = ei("$ZodCheckLowerCase", (e, t) => {
        (t.pattern ?? (t.pattern = ej), eH.init(e, t));
    }),
    eq = ei("$ZodCheckUpperCase", (e, t) => {
        (t.pattern ?? (t.pattern = eB), eH.init(e, t));
    }),
    eX = ei("$ZodCheckIncludes", (e, t) => {
        eN.init(e, t);
        let n = F(t.includes),
            r = new RegExp("number" == typeof t.position ? `^.{${t.position},}${n}` : n);
        ((t.pattern = r),
            (e._zod.check = (n) => {
                n.value.includes(t.includes, t.position) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: t.includes,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    eJ = ei("$ZodCheckStartsWith", (e, t) => {
        eN.init(e, t);
        let n = RegExp(`^${F(t.prefix)}.*`);
        (t.pattern ?? (t.pattern = n),
            (e._zod.check = (n) => {
                n.value.startsWith(t.prefix) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: t.prefix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    eY = ei("$ZodCheckEndsWith", (e, t) => {
        eN.init(e, t);
        let n = RegExp(`.*${F(t.suffix)}$`);
        (t.pattern ?? (t.pattern = n),
            (e._zod.check = (n) => {
                n.value.endsWith(t.suffix) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: t.suffix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    eQ = ei("$ZodCheckOverwrite", (e, t) => {
        (eN.init(e, t),
            (e._zod.check = (e) => {
                e.value = t.tx(e.value);
            }));
    });
class e0 {
    constructor(e = [], t = {}) {
        ((this.content = []), (this.indent = 0), (this.args = e), (this.closed = t));
    }
    indented(e) {
        this.indent += 1;
        try {
            e(this);
        } finally {
            this.indent -= 1;
        }
    }
    write(e) {
        if ("function" == typeof e) {
            (e(this, { execution: "sync" }), e(this, { execution: "async" }));
            return;
        }
        let t = e.split("\n").filter((e) => e),
            n = Math.min(...t.map((e) => e.length - e.trimStart().length));
        for (let e of t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e);
    }
    compile() {
        let e = Function,
            t = this?.content ?? [""];
        return new e(
            ...Object.keys(this.closed),
            `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`,
        )(...Object.values(this.closed));
    }
}
let e1 = { major: 4, minor: 6, patch: 7 },
    e2 = ei(
        "$ZodType",
        (e, t) => {
            var n;
            (e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = e1));
            let r = e._zod.def.checks,
                i = e._zod.traits.has("$ZodCheck") ? [e, ...(r ?? [])] : r?.length ? [...r] : [];
            for (let t of i) for (let n of t._zod.onattach) n(e);
            if (0 === i.length)
                ((n = e._zod).deferred ?? (n.deferred = []),
                    e._zod.deferred?.push(() => {
                        e._zod.run = e._zod.parse;
                    }));
            else {
                let t = (t, n, r) => {
                        let i;
                        if (t.memo) return t;
                        let a = G(t);
                        for (let s of n) {
                            if (s._zod.def.when) {
                                if (
                                    (function (e, t = 0) {
                                        if (!0 === e.aborted) return !0;
                                        for (let n = t; n < e.issues.length; n++)
                                            if (e.issues[n]?.continue === !1) return !0;
                                        return !1;
                                    })(t) ||
                                    !s._zod.def.when(t)
                                )
                                    continue;
                            } else if (a) continue;
                            let n = t.issues.length,
                                o = s._zod.check(t);
                            if (o instanceof Promise && r?.async === !1) throw new ea();
                            if (i || o instanceof Promise)
                                i = (i ?? Promise.resolve()).then(async () => {
                                    (await o, t.issues.length !== n && (H(t.issues, n, e), a || (a = G(t, n))));
                                });
                            else {
                                if (t.issues.length === n) continue;
                                (H(t.issues, n, e), a || (a = G(t, n)));
                            }
                        }
                        return i ? i.then(() => t) : t;
                    },
                    n = (n, r, a) => {
                        if (G(n)) return ((n.aborted = !0), n);
                        let s = t(r, i, a);
                        if (s instanceof Promise) {
                            if (!1 === a.async) throw new ea();
                            return s.then((t) => e._zod.parse(t, a));
                        }
                        return e._zod.parse(s, a);
                    };
                e._zod.run = (r, a) => {
                    if (a.skipChecks) return e._zod.parse(r, a);
                    if ("backward" === a.direction) {
                        let t = e._zod.parse({ value: r.value, issues: [] }, { ...a, skipChecks: !0 });
                        return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
                    }
                    let s = e._zod.parse(r, a);
                    if (s instanceof Promise) {
                        if (!1 === a.async) throw new ea();
                        return s.then((e) => t(e, i, a));
                    }
                    return t(s, i, a);
                };
            }
        },
        {
            get "~standard"() {
                return Y(this, "~standard", e4(this), !1);
            },
            set "~standard"(e) {
                Y(this, "~standard", e);
            },
        },
    ),
    e3 = (e, t) => (e.issues.length ? { issues: e.issues.map((e) => W(e, t, eu())) } : { value: e.value });
function e4(e) {
    return {
        validate: (t) => {
            let n = { async: !1 };
            try {
                let r = e._zod.run({ value: t, issues: [] }, n);
                if (!(r instanceof Promise)) return e3(r, n);
            } catch (e) {}
            return (async function (e, t) {
                let n = { async: !0 };
                return e3(await e._zod.run({ value: t, issues: [] }, n), n);
            })(e, t);
        },
        vendor: "zod",
        version: 1,
    };
}
let e9 = ei("$ZodString", (e, t) => {
        (e2.init(e, t),
            (e._zod.pattern = t.pattern ?? ez),
            (e._zod.parse = (n, r) => {
                if (t.coerce)
                    try {
                        n.value = String(n.value);
                    } catch (e) {}
                return (
                    "string" == typeof n.value ||
                        n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }),
                    n
                );
            }));
    }),
    e5 = ei("$ZodStringFormat", (e, t) => {
        (eH.init(e, t), e9.init(e, t));
    }),
    e8 = ei("$ZodGUID", (e, t) => {
        (t.pattern ?? (t.pattern = ek), e5.init(e, t));
    }),
    e7 = ei("$ZodUUID", (e, t) => {
        if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
            if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = eA(e));
        } else t.pattern ?? (t.pattern = eA());
        e5.init(e, t);
    }),
    e6 = ei("$ZodEmail", (e, t) => {
        (t.pattern ?? (t.pattern = eE), e5.init(e, t));
    });
function te(e) {
    try {
        if ("u" > typeof URL && "function" == typeof URL.canParse) return URL.canParse(e);
        return (new URL(e), !0);
    } catch {
        return !1;
    }
}
let tt = /[\t\n\r]/g;
function tn(e) {
    return e.replace(tt, "");
}
let tr = ei("$ZodURL", (e, t) => {
        (e5.init(e, t),
            (e._zod.check = (n) => {
                try {
                    var r, i;
                    let a = n.value.trim(),
                        s =
                            "normalize" in t || "hostname" in t || "protocol" in t
                                ? (function (e, t) {
                                      if (!t.normalize && t.protocol?.source === eR.source && !/^https?:\/\//i.test(e))
                                          return 1;
                                      try {
                                          if ("u" > typeof URL) {
                                              let t = URL;
                                              if ("function" == typeof t.parse) return t.parse(e) ?? 2;
                                          }
                                          return new URL(e);
                                      } catch {
                                          return 2;
                                      }
                                  })(a, t)
                                : te(a) || 2;
                    if (1 === s)
                        return void n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            note: "Invalid URL format",
                            input: n.value,
                            inst: e,
                            continue: !t.abort,
                        });
                    if (2 === s)
                        return void n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            input: n.value,
                            inst: e,
                            continue: !t.abort,
                        });
                    if (!0 === s) {
                        n.value = tn(a);
                        return;
                    }
                    (t.hostname &&
                        (((r = t.hostname).lastIndex = 0), !r.test(s.hostname)) &&
                        n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            note: "Invalid hostname",
                            pattern: t.hostname.source,
                            input: n.value,
                            inst: e,
                            continue: !t.abort,
                        }),
                        t.protocol &&
                            (((i = t.protocol).lastIndex = 0),
                            !i.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol)) &&
                            n.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid protocol",
                                pattern: t.protocol.source,
                                input: n.value,
                                inst: e,
                                continue: !t.abort,
                            }),
                        (n.value = t.normalize ? s.href : tn(a)));
                    return;
                } catch (r) {
                    n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            }));
    }),
    ti = ei("$ZodEmoji", (e, t) => {
        (t.pattern ??
            (t.pattern = RegExp(
                "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
                "u",
            )),
            e5.init(e, t));
    }),
    ta = ei("$ZodNanoID", (e, t) => {
        var n;
        if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1))
            throw Error(`Invalid nanoid length: ${t.length}`);
        (t.pattern ?? (t.pattern = void 0 === t.length ? eV : ((n = t.length), RegExp(`^[a-zA-Z0-9_-]{${n}}$`))),
            e5.init(e, t));
    }),
    ts = ei("$ZodCUID", (e, t) => {
        (t.pattern ?? (t.pattern = ey), e5.init(e, t));
    }),
    to = ei("$ZodCUID2", (e, t) => {
        (t.pattern ?? (t.pattern = eg), e5.init(e, t));
    }),
    tu = ei("$ZodULID", (e, t) => {
        (t.pattern ?? (t.pattern = ev), e5.init(e, t));
    }),
    td = ei("$ZodXID", (e, t) => {
        (t.pattern ?? (t.pattern = eb), e5.init(e, t));
    }),
    tl = ei("$ZodKSUID", (e, t) => {
        (t.pattern ?? (t.pattern = ew), e5.init(e, t));
    }),
    tc = ei("$ZodISODateTime", (e, t) => {
        let n, r, i;
        (t.pattern ??
            ((n = ["Z"]),
            t.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
            (r = `${eD({ precision: t.precision, seconds: !0 })}(?:${n.join("|")})`),
            (i = t.local ? `${r}|${eD({ precision: t.precision })}` : r),
            (t.pattern = RegExp(`^${eF}T(?:${i})$`))),
            e5.init(e, t));
    }),
    tf = ei("$ZodISODate", (e, t) => {
        (t.pattern ?? (t.pattern = eC), e5.init(e, t));
    }),
    th = ei("$ZodISOTime", (e, t) => {
        (t.pattern ?? (t.pattern = RegExp(`^${eD(t)}$`)), e5.init(e, t));
    }),
    tp = ei("$ZodISODuration", (e, t) => {
        (t.pattern ?? (t.pattern = eT), e5.init(e, t));
    }),
    t_ = ei("$ZodIPv4", (e, t) => {
        (t.pattern ?? (t.pattern = eP), e5.init(e, t));
    }),
    tm = /^[0-9a-fA-F:.]+$/;
function ty(e) {
    return !!tm.test(e) && te(`http://[${e}]`);
}
let tg = ei("$ZodIPv6", (e, t) => {
        (t.pattern ?? (t.pattern = ex),
            e5.init(e, t),
            (e._zod.check = (n) => {
                ty(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tv = ei("$ZodCIDRv4", (e, t) => {
        (t.pattern ?? (t.pattern = eS), e5.init(e, t));
    }),
    tb = ei("$ZodCIDRv6", (e, t) => {
        (t.pattern ?? (t.pattern = eO),
            e5.init(e, t),
            (e._zod.check = (n) => {
                !(function (e) {
                    let t = e.split("/");
                    if (2 !== t.length) return !1;
                    let [n, r] = t;
                    if (!r) return !1;
                    let i = Number(r);
                    return `${i}` === r && !(i < 0) && !(i > 128) && ty(n);
                })(n.value) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    });
function tw(e) {
    if ("" === e) return !0;
    if (/\s/.test(e) || e.length % 4 != 0) return !1;
    try {
        return (atob(e), !0);
    } catch {
        return !1;
    }
}
let tV = /^[0-9a-zA-Z+/]*={0,2}$/,
    tT = ei("$ZodBase64", (e, t) => {
        (t.pattern ?? (t.pattern = tV),
            e5.init(e, t),
            (e._zod.check = (n) => {
                tw(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tk = /^[A-Za-z0-9_-]*$/,
    tA = ei("$ZodBase64URL", (e, t) => {
        (t.pattern ?? (t.pattern = tk),
            e5.init(e, t),
            (e._zod.check = (n) => {
                !(function (e) {
                    if (!tk.test(e)) return !1;
                    let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                    return tw(t.padEnd(4 * Math.ceil(t.length / 4), "="));
                })(n.value) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tE = ei("$ZodE164", (e, t) => {
        (t.pattern ?? (t.pattern = eM), e5.init(e, t));
    }),
    tP = ei("$ZodJWT", (e, t) => {
        (e5.init(e, t),
            (e._zod.check = (n) => {
                !(function (e, t = null) {
                    try {
                        let n = e.split(".");
                        if (3 !== n.length) return !1;
                        let [r] = n;
                        if (!r) return !1;
                        let i = JSON.parse(atob(r));
                        if (("typ" in i && i?.typ !== "JWT") || !i.alg || (t && (!("alg" in i) || i.alg !== t)))
                            return !1;
                        return !0;
                    } catch {
                        return !1;
                    }
                })(n.value, t.alg) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            }));
    }),
    tx = ei("$ZodUnknown", (e, t) => {
        (e2.init(e, t), (e._zod.parse = (e) => e));
    }),
    tS = ei("$ZodNever", (e, t) => {
        (e2.init(e, t),
            (e._zod.parse = (t, n) => (
                t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }),
                t
            )));
    }),
    tO = (e) => (Array.isArray(e) ? e.length : -1);
function tR(e, t, n) {
    (e.issues.length && t.issues.push(...U(n, e.issues)), (t.value[n] = e.value));
}
let tM = ei("$ZodArray", (e, t) => {
    e2.init(e, t);
    let n = eo.memoizer;
    (n?.attach(e),
        (e._zod.parse = (r, i) => {
            let a = r.value;
            if (!Array.isArray(a))
                return (r.issues.push({ expected: "array", code: "invalid_type", input: a, inst: e }), r);
            r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
            let s = [],
                o = i?.abortEarly;
            for (let e = 0; e < a.length; e++) {
                let n = a[e],
                    u = t.element._zod.run({ value: n, issues: [] }, i);
                if (u instanceof Promise) s.push(u.then((t) => tR(t, r, e)));
                else if ((tR(u, r, e), o && 0 !== u.issues.length && G(u))) break;
            }
            return s.length ? Promise.all(s).then(() => r) : r;
        }),
        (function (e, t) {
            let n = Z(e._zod.def.checks);
            if (!n.length) return;
            let r = Math.min(...n.map((e) => e[0])),
                i = e._zod.parse;
            e._zod.parse = (n, a) => {
                let s = t(n.value);
                if (s > r && !a?.skipChecks && a?.direction !== "backward") {
                    for (let [t, r] of Z(e._zod.def.checks))
                        if (s > t && r._zod.def.when(n)) {
                            let t = n.issues.length;
                            return (r._zod.check(n), (n.issues[t].continue = !1), H(n.issues, t, e), n);
                        }
                }
                return i(n, a);
            };
        })(e, tO));
});
function tF(e, t, n, r, i, a) {
    let s = n in r,
        o = "optional" === a;
    if (s || !o || "optional" !== i) {
        if (e.issues.length) {
            if (void 0 !== i && o && !s) return;
            t.issues.push(...U(n, e.issues));
        }
        if (!s && void 0 === i) {
            e.issues.length ||
                t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [n] });
            return;
        }
        void 0 === e.value ? (s || ("defaulted" === i && !o)) && (t.value[n] = void 0) : (t.value[n] = e.value);
    }
}
let tC = [];
function tD(e) {
    var t;
    let n = Object.keys(e.shape),
        r = Object.getOwnPropertySymbols(e.shape),
        i = r.length ? r : tC,
        a = i.length ? [...n, ...i] : n;
    for (let t of a)
        if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
    let s = Object.keys((t = e.shape)).filter((e) => void 0 !== t[e]._zod.optin && "optional" === t[e]._zod.optout);
    return { ...e, allKeys: a, symbolKeys: i, keySet: new Set(n), numKeys: n.length, optionalKeys: new Set(s) };
}
function tz(e, t, n, r, i, a, s) {
    let o = [],
        u = i.keySet,
        d = i.catchall._zod,
        l = d.def.type,
        c = d.optin,
        f = d.optout,
        h = 0;
    for (let i in t) {
        if (s && n.issues.length !== h) {
            if (G(n, h)) break;
            h = n.issues.length;
        }
        if (u.has(i)) continue;
        if ("__proto__" === i) {
            "never" === l && o.push(i);
            continue;
        }
        if ("never" === l) {
            o.push(i);
            continue;
        }
        let a = d.run({ value: t[i], issues: [] }, r);
        a instanceof Promise ? e.push(a.then((e) => tF(e, n, i, t, c, f))) : tF(a, n, i, t, c, f);
    }
    return (o.length && n.issues.push({ code: "unrecognized_keys", keys: o, input: t, inst: a, continue: !0 }),
    e.length)
        ? Promise.all(e).then(() => n)
        : n;
}
let tI = ei("$ZodObject", (e, t) => {
        let n;
        e2.init(e, t);
        let r = Object.getOwnPropertyDescriptor(t, "shape"),
            i = r?.get ? r.get.raw : (t.shape ?? {});
        if (i) {
            let e = () => {
                let n = { ...i };
                return (Object.defineProperty(t, "shape", { value: n }), (e.raw = n), n);
            };
            ((e.raw = i), Object.defineProperty(t, "shape", { get: e }));
        }
        let a = new g(() => tD(t));
        et(e, "propValues", (e) => {
            let t = e.def.shape,
                n = {};
            for (let e in t) {
                let r = t[e]._zod;
                if (r.values) {
                    for (let t of (Object.prototype.hasOwnProperty.call(n, e) || b(n, e, new Set()), r.values))
                        n[e].add(t);
                    void 0 !== r.optin && n[e].add(void 0);
                }
            }
            return n;
        });
        let s = t.catchall,
            o = eo.memoizer;
        (o?.attach(e),
            (e._zod.parse = (t, r) => {
                n ?? (n = a.value);
                let i = t.value;
                if (!x(i)) return (t.issues.push({ expected: "object", code: "invalid_type", input: i, inst: e }), t);
                t.value = o ? o.alloc(e, t, {}, r) : {};
                let u = [],
                    d = n.shape,
                    l = r?.abortEarly,
                    c = t.issues.length;
                for (let e of n.allKeys) {
                    if (l && t.issues.length !== c) {
                        if (G(t, c)) break;
                        c = t.issues.length;
                    }
                    if ("__proto__" === e) continue;
                    let n = d[e],
                        a = n._zod.optin,
                        s = n._zod.optout,
                        o = n._zod.run({ value: i[e], issues: [] }, r);
                    o instanceof Promise ? u.push(o.then((n) => tF(n, t, e, i, a, s))) : tF(o, t, e, i, a, s);
                }
                return s ? tz(u, i, t, r, a.value, e, !0 === l) : u.length ? Promise.all(u).then(() => t) : t;
            }));
    }),
    tL = ei("$ZodObjectJIT", (e, t) => {
        let n, r;
        tI.init(e, t);
        let i = e._zod.parse,
            a = new g(() => tD(t)),
            s = eo.memoizer,
            o = !eo.jitless,
            u = o && S.value,
            d = t.catchall;
        e._zod.parse = (l, c) => {
            r ?? (r = a.value);
            let f = l.value;
            return x(f)
                ? o && u && c?.async === !1 && !0 !== c.jitless
                    ? (n ||
                          (n = ((t) => {
                              let n = a.value,
                                  r = n.symbolKeys,
                                  i = new e0(["payload", "ctx"], { shape: t, inst: e, memo: s, syms: r }),
                                  o = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                                  u = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
                              i.write("const input = payload.value;");
                              let d = Object.create(null),
                                  l = 0;
                              for (let e of n.allKeys) d[e] = `key_${l++}`;
                              for (let e of (i.write(
                                  s ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};",
                              ),
                              n.allKeys)) {
                                  if ("__proto__" === e) continue;
                                  let n = d[e],
                                      a = "symbol" == typeof e ? `syms[${r.indexOf(e)}]` : JSON.stringify(e),
                                      s = `${a} in input`,
                                      l = t[e],
                                      c = l?._zod?.optin,
                                      f = void 0 !== c,
                                      h = l?._zod?.optout === "optional";
                                  if ((i.write(`const ${n} = ${o(a)};`), f && h)) {
                                      let e =
                                          "optional" === c
                                              ? `${n}_present`
                                              : `${n}.value !== undefined || ${n}_present`;
                                      i.write(`
        const ${n}_present = ${s};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${u(n, a)}
          }

          if (${e}) {
            newResult[${a}] = ${n}.value;
          }
        }

      `);
                                  } else
                                      f
                                          ? (i.write(`
        if (${n}.issues.length) {${u(n, a)}
        }
      `),
                                            "defaulted" === c
                                                ? i.write(`newResult[${a}] = ${n}.value;`)
                                                : i.write(`
        if (${n}.value !== undefined || ${s}) {
          newResult[${a}] = ${n}.value;
        }
      `))
                                          : i.write(`
        const ${n}_present = ${s};
        if (${n}.issues.length) {${u(n, a)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${a}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${a}] = ${n}.value;
        }

      `);
                              }
                              return (i.write("payload.value = newResult;"), i.write("return payload;"), i.compile());
                          })(t.shape)),
                      (l = n(l, c)),
                      d)
                        ? tz([], f, l, c, r, e, c?.abortEarly === !0)
                        : l
                    : i(l, c)
                : (l.issues.push({ expected: "object", code: "invalid_type", input: f, inst: e }), l);
        };
    });
function tj(e, t, n, r) {
    for (let n of e) if (0 === n.issues.length) return ((t.value = n.value), t);
    let i = e.filter((e) => !G(e));
    return 1 === i.length
        ? ((t.value = i[0].value), i[0])
        : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => W(e, r, eu()))),
          }),
          t);
}
let tB = ei("$ZodUnion", (e, t) => {
        (e2.init(e, t),
            et(e, "optin", (e) =>
                e.def.options.some((e) => "defaulted" === e._zod.optin)
                    ? "defaulted"
                    : e.def.options.some((e) => void 0 !== e._zod.optin)
                      ? "optional"
                      : void 0,
            ),
            et(e, "optout", (e) => (e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
            et(e, "values", (e) => {
                if (e.def.options.every((e) => e._zod.values))
                    return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
            }),
            et(e, "pattern", (e) => {
                if (e.def.options.every((e) => e._zod.pattern)) {
                    let t = e.def.options.map((e) => e._zod.pattern);
                    return RegExp(`^(${t.map((e) => v(e.source)).join("|")})$`);
                }
            }));
        let n = 1 === t.options.length ? t.options[0]._zod.run : null;
        e._zod.parse = (r, i) => {
            if (n) return n(r, i);
            let a = !1,
                s = [];
            for (let e of t.options) {
                let t = e._zod.run({ value: r.value, issues: [] }, i);
                if (t instanceof Promise) (s.push(t), (a = !0));
                else {
                    if (0 === t.issues.length) return t;
                    s.push(t);
                }
            }
            return a ? Promise.all(s).then((t) => tj(t, r, e, i)) : tj(s, r, e, i);
        };
    }),
    tN = ei("$ZodIntersection", (e, t) => {
        (e2.init(e, t),
            (e._zod.parse = (e, n) => {
                let r = e.value,
                    i = t.left._zod.run({ value: r, issues: [] }, n),
                    a = t.right._zod.run({ value: r, issues: [] }, n);
                return i instanceof Promise || a instanceof Promise
                    ? Promise.all([i, a]).then(([t, n]) => tG(e, t, n))
                    : tG(e, i, a);
            }));
    });
function tG(e, t, n) {
    let r,
        i = new Map(),
        a = new Map(),
        s = (e, t) => {
            let n;
            if ("unrecognized_keys" !== e.code || e.path?.length)
                if ("invalid_key" !== e.code || "record" !== e.origin || e.path?.length !== 1) return !1;
                else {
                    let t = String(e.path[0]);
                    (a.has(t) || a.set(t, e), (n = [t]));
                }
            else (r ?? (r = e), (n = e.keys));
            for (let e of n) (i.has(e) || i.set(e, {}), (i.get(e)[t] = !0));
            return !0;
        };
    for (let n of t.issues) s(n, "l") || e.issues.push(n);
    for (let t of n.issues) s(t, "r") || e.issues.push(t);
    let o = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
    if (o.length) {
        let t = r ? o.filter((e) => r.keys.includes(e)) : [];
        for (let n of (t.length && e.issues.push({ ...r, keys: t }), o))
            !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
    }
    let u = (function e(t, n) {
        if (t === n || (t instanceof Date && n instanceof Date && +t == +n)) return { valid: !0, data: t };
        if (O(t) && O(n)) {
            let r = Object.keys(n),
                i = Object.keys(t).filter((e) => -1 !== r.indexOf(e)),
                a = { ...t, ...n };
            for (let r of (Object.prototype.hasOwnProperty.call(a, "__proto__") && delete a.__proto__, i)) {
                if ("__proto__" === r) continue;
                let i = e(t[r], n[r]);
                if (!i.valid) return { valid: !1, mergeErrorPath: [r, ...i.mergeErrorPath] };
                a[r] = i.data;
            }
            return { valid: !0, data: a };
        }
        if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
            let r = [];
            for (let i = 0; i < t.length; i++) {
                let a = e(t[i], n[i]);
                if (!a.valid) return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
                r.push(a.data);
            }
            return { valid: !0, data: r };
        }
        return { valid: !1, mergeErrorPath: [] };
    })(t.value, n.value);
    if (!u.valid) {
        if (G(e)) return e;
        throw Error(`Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`);
    }
    return ((e.value = u.data), e);
}
let tU = ei("$ZodRecord", (e, t) => {
        e2.init(e, t);
        let n = eo.memoizer;
        (n?.attach(e),
            (e._zod.parse = (r, i) => {
                let a = r.value;
                if (!O(a)) return (r.issues.push({ expected: "record", code: "invalid_type", input: a, inst: e }), r);
                let s = [],
                    o = t.keyType._zod.values;
                if (o && !t.partial) {
                    let u;
                    r.value = n ? n.alloc(e, r, {}, i) : {};
                    let d = new Set();
                    for (let n of o)
                        if ("string" == typeof n || "number" == typeof n || "symbol" == typeof n) {
                            if ((d.add("number" == typeof n ? n.toString() : n), "__proto__" === n)) continue;
                            let o = t.keyType._zod.run({ value: n, issues: [] }, i);
                            if (o instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            if (o.issues.length) {
                                r.issues.push({
                                    code: "invalid_key",
                                    origin: "record",
                                    issues: o.issues.map((e) => W(e, i, eu())),
                                    input: n,
                                    path: [n],
                                    inst: e,
                                });
                                continue;
                            }
                            let u = o.value;
                            if ("__proto__" === u) continue;
                            let l = t.valueType._zod.run({ value: a[n], issues: [] }, i);
                            l instanceof Promise
                                ? s.push(
                                      l.then((e) => {
                                          (e.issues.length && r.issues.push(...U(n, e.issues)), (r.value[u] = e.value));
                                      }),
                                  )
                                : (l.issues.length && r.issues.push(...U(n, l.issues)), (r.value[u] = l.value));
                        }
                    for (let e in a)
                        if (!d.has(e))
                            if ("loose" === t.mode) {
                                if ("__proto__" === e) continue;
                                r.value[e] = a[e];
                            } else (u = u ?? []).push(e);
                    u &&
                        u.length > 0 &&
                        r.issues.push({ code: "unrecognized_keys", input: a, inst: e, keys: u, continue: !0 });
                } else {
                    let u;
                    for (let d of ((r.value = n ? n.alloc(e, r, {}, i) : {}), Reflect.ownKeys(a))) {
                        if ("__proto__" === d || !Object.prototype.propertyIsEnumerable.call(a, d)) continue;
                        let n = t.keyType._zod.run({ value: d, issues: [] }, i);
                        if (n instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                        if ("string" == typeof d && eL.test(d) && n.issues.length) {
                            let e = t.keyType._zod.run({ value: Number(d), issues: [] }, i);
                            if (e instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            0 === e.issues.length && (n = e);
                        }
                        if (n.issues.length) {
                            "loose" === t.mode
                                ? (r.value[d] = a[d])
                                : o
                                  ? (u = u ?? []).push(d)
                                  : r.issues.push({
                                        code: "invalid_key",
                                        origin: "record",
                                        issues: n.issues.map((e) => W(e, i, eu())),
                                        input: d,
                                        path: [d],
                                        inst: e,
                                    });
                            continue;
                        }
                        let l = n.value;
                        if ("__proto__" === l) continue;
                        let c = t.valueType._zod.run({ value: a[d], issues: [] }, i);
                        c instanceof Promise
                            ? s.push(
                                  c.then((e) => {
                                      (e.issues.length && r.issues.push(...U(d, e.issues)), (r.value[l] = e.value));
                                  }),
                              )
                            : (c.issues.length && r.issues.push(...U(d, c.issues)), (r.value[l] = c.value));
                    }
                    u &&
                        u.length > 0 &&
                        r.issues.push({ code: "unrecognized_keys", input: a, inst: e, keys: u, continue: !0 });
                }
                return s.length ? Promise.all(s).then(() => r) : r;
            }));
    }),
    t$ = ei("$ZodEnum", (e, t) => {
        e2.init(e, t);
        let n = _(t.entries),
            r = new Set(n);
        ((e._zod.values = r),
            et(e, "pattern", (e) => {
                let t = _(e.def.entries).filter((e) => M.has(typeof e));
                return new RegExp(t.length ? `^(${t.map((e) => F(e.toString())).join("|")})$` : "^[^\\s\\S]$");
            }),
            (e._zod.parse = (t, i) => {
                let a = t.value;
                return (r.has(a) || t.issues.push({ code: "invalid_value", values: n, input: a, inst: e }), t);
            }));
    }),
    tZ = ei("$ZodTransform", (e, t) => {
        (e2.init(e, t),
            (e._zod.optin = "optional"),
            eo.memoizer?.guard(e),
            (e._zod.parse = (n, r) => {
                if ("backward" === r.direction) throw new es(e.constructor.name);
                let i = t.transform(n.value, n);
                if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => ((n.value = e), n));
                if (i instanceof Promise) throw new ea();
                return ((n.value = i), n);
            }));
    });
function tH(e, t) {
    return ((e.value = t.issues.length ? void 0 : t.value), e);
}
let tW = ei("$ZodOptional", (e, t) => {
        (e2.init(e, t),
            et(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
            (e._zod.optout = "optional"),
            et(e, "values", (e) => {
                let t = e.def.innerType._zod.values;
                return t ? new Set([...t, void 0]) : void 0;
            }),
            et(e, "pattern", (e) => {
                let t = e.def.innerType._zod.pattern;
                return t ? RegExp(`^(${v(t.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
                if (void 0 === e.value) {
                    if ("defaulted" !== t.innerType._zod.optin) return e;
                    let r = t.innerType._zod.run({ value: e.value, issues: [] }, n);
                    return r instanceof Promise ? r.then((t) => tH(e, t)) : tH(e, r);
                }
                return t.innerType._zod.run(e, n);
            }));
    }),
    tK = ei("$ZodExactOptional", (e, t) => {
        (tW.init(e, t),
            et(e, "values", (e) => e.def.innerType._zod.values),
            et(e, "pattern", (e) => e.def.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
    }),
    tq = ei("$ZodNullable", (e, t) => {
        (e2.init(e, t),
            et(e, "optin", (e) => e.def.innerType._zod.optin),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "pattern", (e) => {
                let t = e.def.innerType._zod.pattern;
                return t ? RegExp(`^(${v(t.source)}|null)$`) : void 0;
            }),
            et(e, "values", (e) =>
                e.def.innerType._zod.values ? new Set([...e.def.innerType._zod.values, null]) : void 0,
            ),
            (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n))));
    }),
    tX = ei("$ZodDefault", (e, t) => {
        (e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                if (void 0 === e.value) return ((e.value = t.defaultValue), e);
                let r = t.innerType._zod.run(e, n);
                return r instanceof Promise ? r.then((e) => tJ(e, t)) : tJ(r, t);
            }));
    });
function tJ(e, t) {
    return (void 0 === e.value && (e.value = t.defaultValue), e);
}
let tY = ei("$ZodPrefault", (e, t) => {
        (e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, n) => (
                "backward" === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
                t.innerType._zod.run(e, n)
            )));
    }),
    tQ = ei("$ZodNonOptional", (e, t) => {
        (e2.init(e, t),
            et(e, "values", (e) => {
                let t = e.def.innerType._zod.values;
                return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, r) => {
                let i = t.innerType._zod.run(n, r);
                return i instanceof Promise ? i.then((t) => t0(t, e)) : t0(i, e);
            }));
    });
function t0(e, t) {
    return (
        e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
        e
    );
}
function t1(e, t, n, r) {
    return (
        t.issues.length
            ? (e.value = n.catchValue({
                  ...t,
                  value: e.value,
                  error: { issues: t.issues.map((e) => W(e, r, eu())) },
                  input: e.value,
              }))
            : ((e.value = t.value), t.memo && (e.memo = !0)),
        e
    );
}
let t2 = ei("$ZodCatch", (e, t) => {
        (e2.init(e, t),
            et(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                let r = t.innerType._zod.run({ value: e.value, issues: [] }, n);
                return r instanceof Promise ? r.then((r) => t1(e, r, t, n)) : t1(e, r, t, n);
            }));
    }),
    t3 = ei("$ZodPipe", (e, t) => {
        (e2.init(e, t),
            et(e, "values", (e) => e.def.in._zod.values),
            et(e, "optin", (e) => e.def.in._zod.optin),
            et(e, "optout", (e) => e.def.out._zod.optout),
            et(e, "propValues", (e) => e.def.in._zod.propValues),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) {
                    let r = t.out._zod.run(e, n);
                    return r instanceof Promise ? r.then((e) => t4(e, t.in, n)) : t4(r, t.in, n);
                }
                let r = t.in._zod.run(e, n);
                return r instanceof Promise ? r.then((e) => t4(e, t.out, n)) : t4(r, t.out, n);
            }));
    });
function t4(e, t, n) {
    return e.issues.some((e) => "unrecognized_keys" !== e.code)
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, n);
}
let t9 = ei("$ZodReadonly", (e, t) => {
    (e2.init(e, t),
        et(e, "propValues", (e) => e.def.innerType._zod.propValues),
        et(e, "values", (e) => e.def.innerType._zod.values),
        et(e, "optin", (e) => e.def.innerType?._zod?.optin),
        et(e, "optout", (e) => e.def.innerType?._zod?.optout),
        (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(t5) : t5(r);
        }));
});
function t5(e) {
    return (e.memo || (e.value = Object.freeze(e.value)), e);
}
let t8 = ei("$ZodCustom", (e, t) => {
    (eN.init(e, t),
        e2.init(e, t),
        (e._zod.parse = (e, t) => e),
        (e._zod.check = (n) => {
            let r = n.value,
                i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => t7(t, n, r, e));
            t7(i, n, r, e);
        }));
});
function t7(e, t, n, r) {
    if (!e) {
        let e = { code: "custom", input: n, inst: r, path: [...(r._zod.def.path ?? [])], continue: !r._zod.def.abort };
        (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(J(e)));
    }
}
(i = globalThis).__zod_globalRegistry ??
    (i.__zod_globalRegistry = new (class e {
        constructor() {
            ((this._map = new WeakMap()), (this._idmap = new Map()));
        }
        add(e, ...t) {
            let n = t[0];
            return (this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this);
        }
        clear() {
            return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
        }
        remove(e) {
            let t = this._map.get(e);
            return (t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this);
        }
        get(e) {
            let t = e._zod.parent;
            if (t) {
                let n = { ...(this.get(t) ?? {}) };
                delete n.id;
                let r = { ...n, ...this._map.get(e) };
                return Object.keys(r).length ? r : void 0;
            }
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
    })());
let t6 = globalThis.__zod_globalRegistry;
function ne(e, t) {
    return new eU({ check: "max_length", ...D(t), maximum: e });
}
function nt(e, t) {
    return new e$({ check: "min_length", ...D(t), minimum: e });
}
function nn(e, t) {
    return new eZ({ check: "length_equals", ...D(t), length: e });
}
function nr(e) {
    return new eQ({ check: "overwrite", tx: e });
}
function ni(e, ...t) {
    for (let n of t)
        for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && b(e, t, n[t]);
    return e;
}
function na(e) {
    let t = e?.target ?? "draft-2020-12";
    return (
        "draft-4" === t && (t = "draft-04"),
        "draft-7" === t && (t = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? t6,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            sharedDefsExtractedFor: void 0,
            sharedEmitDoneFor: void 0,
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            intersections: [],
            deferred: [],
            external: e?.external ?? void 0,
        }
    );
}
function ns(e, t, n, r, i) {
    let a =
        "function" == typeof t.unrepresentable
            ? t.unrepresentable({ zodSchema: e, path: r.path, message: i })
            : t.unrepresentable;
    if ("any" === a) return !1;
    if (void 0 === a || "throw" === a) throw Error(i);
    return (Object.assign(n, a), !0);
}
function no(e, t, n = { path: [], schemaPath: [] }) {
    var r;
    let i = e._zod.def,
        a = t.seen.get(e);
    if (a) return (a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema);
    let s = { schema: {}, count: 1, cycle: void 0, path: n.path };
    (t.seen.set(e, s), (t.sharedDefsExtractedFor = void 0), (t.sharedEmitDoneFor = void 0));
    let o = e._zod.toJSONSchema?.();
    if (o) s.schema = o;
    else {
        let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, r);
        else {
            let n = s.schema,
                a = t.processors[i.type];
            if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
            a(e, t, n, r);
        }
        let a = e._zod.parent;
        a && (s.ref || (s.ref = a), no(a, t, r), (t.seen.get(a).isParent = !0));
    }
    let u = t.metadataRegistry.get(e);
    return (
        u && ni(s.schema, u),
        "input" === t.io &&
            (function e(t, n) {
                let r = n ?? { seen: new Set() };
                if (r.seen.has(t)) return !1;
                r.seen.add(t);
                let i = t._zod.def;
                if ("transform" === i.type) return !0;
                if ("array" === i.type) return e(i.element, r);
                if ("set" === i.type) return e(i.valueType, r);
                if ("lazy" === i.type) return e(i.getter(), r);
                if (
                    "promise" === i.type ||
                    "optional" === i.type ||
                    "nonoptional" === i.type ||
                    "nullable" === i.type ||
                    "readonly" === i.type ||
                    "default" === i.type ||
                    "prefault" === i.type ||
                    "catch" === i.type
                )
                    return e(i.innerType, r);
                if ("intersection" === i.type) return e(i.left, r) || e(i.right, r);
                if ("record" === i.type || "map" === i.type) return e(i.keyType, r) || e(i.valueType, r);
                if ("pipe" === i.type) return !!t._zod.traits.has("$ZodCodec") || e(i.in, r) || e(i.out, r);
                if ("object" === i.type) {
                    for (let t in i.shape) if (e(i.shape[t], r)) return !0;
                    return !1;
                }
                if ("union" === i.type) {
                    for (let t of i.options) if (e(t, r)) return !0;
                    return !1;
                }
                if ("tuple" === i.type) {
                    for (let t of i.items) if (e(t, r)) return !0;
                    if (i.rest && e(i.rest, r)) return !0;
                }
                return !1;
            })(e) &&
            (delete s.schema.examples, delete s.schema.default),
        "input" === t.io && "_prefault" in s.schema && ((r = s.schema).default ?? (r.default = s.schema._prefault)),
        delete s.schema._prefault,
        t.seen.get(e).schema
    );
}
function nu(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function nd(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    if (e.external && e.sharedDefsExtractedFor === e.external) return;
    let r = new Map();
    for (let t of e.seen.entries()) {
        let n = e.metadataRegistry.get(t[0])?.id;
        if (n) {
            let e = r.get(n);
            if (e && e !== t[0])
                throw Error(
                    `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
            r.set(n, t[0]);
        }
    }
    let i = (t) => {
        if (t[1].schema.$ref) return;
        let r = t[1],
            { ref: i, defId: a } = ((t) => {
                let r = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    let n = e.external.registry.get(t[0])?.id,
                        i = e.external.uri ?? ((e) => e);
                    if (n) return { ref: i(n) };
                    let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                    return ((t[1].defId = a), { defId: a, ref: `${i("__shared")}#/${r}/${nu(a)}` });
                }
                let i = `#/${r}/`;
                if (t[1] === n && !t[1].schema.id) return { ref: "#" };
                let a = t[1].schema.id ?? `__schema${e.counter++}`;
                return { defId: a, ref: i + nu(a) };
            })(t);
        ((r.def = { ...r.schema }), a && (r.defId = a));
        let s = r.schema;
        for (let e in s) delete s[e];
        s.$ref = i;
    };
    if ("throw" === e.cycles)
        for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
                throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (let n of e.seen.entries()) {
        let r = n[1];
        if (t === n[0]) {
            i(n);
            continue;
        }
        if (e.external) {
            let r = e.external.registry.get(n[0])?.id;
            if (t !== n[0] && r) {
                i(n);
                continue;
            }
        }
        if (e.metadataRegistry.get(n[0])?.id || r.cycle) {
            i(n);
            continue;
        }
        r.count > 1 && "ref" === e.reused && i(n);
    }
    e.external && (e.sharedDefsExtractedFor = e.external);
}
let nl = new Set(["type", "properties", "required", "additionalProperties"]),
    nc = ["oneOf", "anyOf"];
function nf(e) {
    let t = e.additionalProperties;
    return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null;
}
function nh(e) {
    let t = [];
    for (let n of e) {
        if ("object" != typeof n || "object" !== n.type) return null;
        for (let e in n) if (!nl.has(e)) return null;
        t.push(n);
    }
    let n = {},
        r = new Set();
    for (let e of t) {
        for (let r in e.properties) {
            if (Object.prototype.hasOwnProperty.call(n, r)) continue;
            let e = [];
            for (let n of t) {
                let t = n.properties?.[r] ?? nf(n);
                null != t && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
            }
            b(n, r, 1 === e.length ? e[0] : (nh(e) ?? { allOf: e }));
        }
        for (let t of e.required ?? []) r.add(t);
    }
    let i = { type: "object", properties: n };
    if ((r.size && (i.required = [...r]), t.every((e) => !1 === e.additionalProperties))) i.additionalProperties = !1;
    else {
        let e = [];
        for (let n of t) {
            let t = nf(n);
            t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
        }
        1 === e.length ? (i.additionalProperties = e[0]) : e.length > 1 && (i.additionalProperties = { allOf: e });
    }
    return i;
}
function np(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r = (t) => {
        let n = e.seen.get(t);
        if (null === n.ref) return;
        let i = n.def ?? n.schema,
            a = { ...i },
            s = n.ref;
        if (((n.ref = null), s)) {
            r(s);
            let n = e.seen.get(s),
                o = n.schema;
            if (
                (o.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                    ? ((i.allOf = i.allOf ?? []), i.allOf.push(o))
                    : ni(i, o),
                ni(i, a),
                t._zod.parent === s)
            )
                for (let e in i) "$ref" !== e && "allOf" !== e && (e in a || delete i[e]);
            if (o.$ref && n.def)
                for (let e in i)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in n.def &&
                        JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
                        delete i[e];
        }
        let o = t._zod.parent;
        if (o && o !== s) {
            r(o);
            let t = e.seen.get(o);
            if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
                for (let e in i)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in t.def &&
                        JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                        delete i[e];
        }
        e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
    };
    if (!e.external || e.sharedEmitDoneFor !== e.external) {
        for (let t of [...e.seen.entries()].reverse()) r(t[0]);
        if ("openapi-3.0" !== e.target)
            for (let t of e.seen.entries())
                !(function e(t) {
                    let n = t.anyOf;
                    if (!Array.isArray(n) || 0 === n.length || void 0 !== t.type) return;
                    let r = [];
                    for (let t of n) {
                        if (!t || "object" != typeof t) return;
                        e(t);
                        let n = Object.keys(t);
                        if (1 !== n.length || "type" !== n[0]) return;
                        let i = t.type;
                        for (let e of Array.isArray(i) ? i : [i]) {
                            if ("string" != typeof e) return;
                            r.includes(e) || r.push(e);
                        }
                    }
                    (delete t.anyOf, (t.type = 1 === r.length ? r[0] : r));
                })(t[1].def ?? t[1].schema);
        for (let t of e.deferred) t();
        if (e.intersections.length) {
            let t = new Map();
            for (let n of e.seen.values())
                for (let e of [n.schema, n.def]) {
                    let n = e?.allOf;
                    if (!Array.isArray(n)) continue;
                    let r = t.get(n);
                    r ? r.push(e) : t.set(n, [e]);
                }
            for (let n of e.intersections)
                for (let e of t.get(n) ?? [])
                    !(function (e) {
                        let t = e.allOf;
                        if (!Array.isArray(t) || t.length < 2) return;
                        for (let t of nl) if (t in e) return;
                        let n = t.filter((e) => nc.some((t) => Array.isArray(e[t]))),
                            r = null;
                        if (n.length) {
                            let e = n[0],
                                i = nc.find((t) => Array.isArray(e[t]));
                            if (1 !== Object.keys(e).length) return;
                            let a = t.filter((t) => t !== e),
                                s = e[i].map((e) => nh([...a, e]));
                            if (s.some((e) => !e)) return;
                            r = { [i]: s };
                        } else r = nh(t);
                        r && (delete e.allOf, ni(e, r));
                    })(e);
        }
    }
    let i = {};
    if (
        ("draft-2020-12" === e.target
            ? (i.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (i.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (i.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
        e.external?.uri)
    ) {
        let n = e.external.registry.get(t)?.id;
        if (!n) throw Error("Schema is missing an `id` property");
        i.$id = e.external.uri(n);
    }
    ni(i, n.defId ? n.schema : (n.def ?? n.schema));
    let a = e.metadataRegistry.get(t)?.id;
    void 0 !== a && i.id === a && delete i.id;
    let s = e.external?.defs ?? {};
    if (!e.external || e.sharedEmitDoneFor !== e.external)
        for (let t of e.seen.entries()) {
            let e = t[1];
            e.def && e.defId && (e.def.id === e.defId && delete e.def.id, b(s, e.defId, e.def));
        }
    (e.external && (e.sharedEmitDoneFor = e.external),
        e.external ||
            (Object.keys(s).length > 0 && ("draft-2020-12" === e.target ? (i.$defs = s) : (i.definitions = s))));
    try {
        let n = JSON.parse(JSON.stringify(i));
        return (
            Object.defineProperty(n, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: { input: n_(t, "input", e.processors), output: n_(t, "output", e.processors) },
                },
                enumerable: !1,
                writable: !1,
            }),
            n
        );
    } catch (e) {
        throw Error("Error converting schema to JSON.");
    }
}
let n_ =
        (e, t, n = {}) =>
        (r) => {
            let { libraryOptions: i, target: a } = r ?? {},
                s = na({ ...(i ?? {}), target: a, io: t, processors: n });
            return (no(e, s), nd(s, e), np(s, e));
        },
    nm = (e, t, n) => {
        (void 0 === e[t] || n > e[t]) && (e[t] = n);
    },
    ny = (e, t, n) => {
        (void 0 === e[t] || n < e[t]) && (e[t] = n);
    },
    ng = (e, t) => {
        (nm(e, "minimum", t), ny(e, "maximum", t));
    },
    nv = (e, t) => {
        (e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t));
    },
    nb = (e, t) => {
        (e.patterns ?? (e.patterns = new Set()), e.patterns.add(t));
    },
    nw = (e, t) => {
        e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
    },
    nV = (e, t) => {
        ((e.format = t), t.includes("int") && (e.isInt = !0));
    },
    nT = (e, t) => nm(e, "minimum", t.minimum),
    nk = (e, t) => ny(e, "maximum", t.maximum),
    nA = (e) => (t, n) => {
        nV(t, n.format);
        let [r, i] = e[n.format];
        (nm(t, "minimum", r), ny(t, "maximum", i));
    },
    nE = {
        greater_than: (e, t) => nm(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
        less_than: (e, t) => ny(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
        multiple_of: (e, t) => nv(e, t.value),
        number_format: nA(I),
        bigint_format: nA(L),
        min_length: nT,
        max_length: nk,
        length_equals: (e, t) => ng(e, t.length),
        min_size: nT,
        max_size: nk,
        size_equals: (e, t) => ng(e, t.size),
        string_format: (e, t) => {
            (nV(e, t.format),
                t.pattern && nb(e, t.pattern),
                ("base64" === t.format || "base64url" === t.format) && (e.contentEncoding = t.format),
                (t.local || -1 === t.precision) && (e.laxFormat = !0));
        },
        mime_type: (e, t) => nw(e, t.mime),
    };
function nP(e) {
    let t = {},
        n = e._zod.def;
    for (let r of e._zod.traits.has("$ZodCheck") ? [e, ...(n.checks ?? [])] : (n.checks ?? []))
        nE[r._zod.def.check]?.(t, r._zod.def);
    let r = e._zod.bag;
    for (let e of (void 0 !== r.minimum && nm(t, "minimum", r.minimum),
    void 0 !== r.exclusiveMinimum && nm(t, "exclusiveMinimum", r.exclusiveMinimum),
    void 0 !== r.maximum && ny(t, "maximum", r.maximum),
    void 0 !== r.exclusiveMaximum && ny(t, "exclusiveMaximum", r.exclusiveMaximum),
    void 0 !== r.multipleOf && nv(t, r.multipleOf),
    void 0 !== r.format && (t.format ?? (t.format = r.format), r.format.includes("int") && (t.isInt = !0)),
    r.mime && nw(t, r.mime),
    r.patterns ?? []))
        nb(t, e);
    return t;
}
let nx = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    nS = new Map([
        [tV, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/],
        [tk, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/],
    ]),
    nO = (e) => nS.get(e) ?? e;
function nR(e) {
    let t = e._zod.def;
    return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform")
        ? nR(t.out)
        : "catch" === t.type
          ? nR(t.innerType)
          : e._zod.optin;
}
let nM = new WeakMap(),
    nF = Symbol();
function nC(e, t, n, r, i) {
    let a = !1,
        s = JSON.stringify(e, (e, t) => ("bigint" != typeof t ? t : ((a = !0), null)));
    return a ? (ns(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), nF) : JSON.parse(s);
}
let nD = (e, t, n, r) => {
        let i = e._zod.def;
        (no(i.innerType, t, r), (t.seen.get(e).ref = i.innerType));
    },
    nz = {
        get: function () {
            let e = this._zod;
            return (e.message ?? (e.message = JSON.stringify(e.def, y, 2)), e.message);
        },
        set: function (e) {
            this._zod.message = e;
        },
        enumerable: !0,
        configurable: !0,
    },
    nI = { value: void 0, enumerable: !1 },
    nL = new WeakSet([Object.prototype, Error.prototype]),
    nj = (e, t) => {
        ((e.name = "$ZodError"),
            (nI.value = t),
            Object.defineProperty(e, "issues", nI),
            (nI.value = void 0),
            Object.defineProperty(e, "message", nz));
        let n = Object.getPrototypeOf(e);
        nL.has(n) ||
            (nL.add(n),
            Object.defineProperty(n, "toString", {
                configurable: !0,
                enumerable: !1,
                get() {
                    let e = () => this.message;
                    return (Object.defineProperty(this, "toString", { value: e, configurable: !0, writable: !0 }), e);
                },
                set(e) {
                    Object.defineProperty(this, "toString", { value: e, configurable: !0, writable: !0 });
                },
            }));
    },
    nB = ei("$ZodError", nj);
function nN(e, t) {
    return { callee: t?.callee ?? e, Err: t?.Err };
}
ei("$ZodError", nj, void 0, { Parent: Error });
let nG = (e) => {
        let t = (n, r, i, a) => {
            let s = i ? { ...i, async: !1 } : { async: !1 },
                o = n._zod.run({ value: r, issues: [] }, s);
            if (o instanceof Promise) throw new ea();
            if (o.issues.length) {
                let n = new (a?.Err ?? e)(o.issues.map((e) => W(e, s, eu())));
                throw (P(n, a?.callee ?? t), n);
            }
            return o.value;
        };
        return t;
    },
    nU = (e) => {
        let t = async (n, r, i, a) => {
            let s = i ? { ...i, async: !0 } : { async: !0 },
                o = n._zod.run({ value: r, issues: [] }, s);
            if ((o instanceof Promise && (o = await o), o.issues.length)) {
                let n = new (a?.Err ?? e)(o.issues.map((e) => W(e, s, eu())));
                throw (P(n, a?.callee ?? t), n);
            }
            return o.value;
        };
        return t;
    },
    n$ = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
            a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new ea();
        return a.issues.length ? nZ(e, a.issues, i) : { success: !0, data: a.value };
    };
function nZ(e, t, n) {
    let r;
    return {
        success: !1,
        get error() {
            return (r || ((r = new e(t.map((e) => W(e, n, eu())))), (t = void 0), (n = void 0)), r);
        },
        set error(e) {
            ((r = e), (t = void 0), (n = void 0));
        },
    };
}
let nH = (e) => async (t, n, r) => {
        let i = r ? { ...r, async: !0 } : { async: !0 },
            a = t._zod.run({ value: n, issues: [] }, i);
        return (
            a instanceof Promise && (a = await a), a.issues.length ? nZ(e, a.issues, i) : { success: !0, data: a.value }
        );
    },
    nW = Symbol.for("zod.compile.invalid"),
    nK = Symbol.for("zod.compile.fallback"),
    nq = new WeakSet([Object.prototype, Error.prototype]);
function nX(e, t, n) {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        get() {
            let e = n(this);
            return (Object.defineProperty(this, t, { value: e, configurable: !0, writable: !0 }), e);
        },
        set(e) {
            Object.defineProperty(this, t, { value: e, configurable: !0, writable: !0 });
        },
    });
}
let nJ = ei(
        "ZodError",
        (e, t) => {
            (nB.init(e, t), (e.name = "ZodError"));
            let n = Object.getPrototypeOf(e);
            nq.has(n) ||
                (nq.add(n),
                nX(
                    n,
                    "format",
                    (e) => (t) =>
                        (function (e, t = (e) => e.message) {
                            let n = { _errors: [] },
                                r = (e, i = []) => {
                                    for (let a of e.issues)
                                        if ("invalid_union" === a.code && a.errors.length)
                                            a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
                                        else if ("invalid_key" === a.code) r({ issues: a.issues }, [...i, ...a.path]);
                                        else if ("invalid_element" === a.code)
                                            r({ issues: a.issues }, [...i, ...a.path]);
                                        else {
                                            let e = [...i, ...a.path];
                                            if (0 === e.length) n._errors.push(t(a));
                                            else {
                                                let r = n,
                                                    i = 0;
                                                for (; i < e.length;) {
                                                    let n = e[i],
                                                        s = i === e.length - 1;
                                                    if ("_errors" === n) {
                                                        (s && r._errors.push(t(a)), i++);
                                                        continue;
                                                    }
                                                    Object.prototype.hasOwnProperty.call(r, n) ||
                                                        Object.defineProperty(r, n, {
                                                            value: { _errors: [] },
                                                            enumerable: !0,
                                                            writable: !0,
                                                            configurable: !0,
                                                        });
                                                    let o = r[n];
                                                    (s && o._errors.push(t(a)), (r = o), i++);
                                                }
                                            }
                                        }
                                };
                            return (r(e), n);
                        })(e, t),
                ),
                nX(
                    n,
                    "flatten",
                    (e) => (t) =>
                        (function (e, t = (e) => e.message) {
                            let n = {},
                                r = [];
                            for (let s of e.issues)
                                if (s.path.length > 0) {
                                    var i, a;
                                    ((i = s.path[0]),
                                    (a = () => []),
                                    !Object.prototype.hasOwnProperty.call(n, i) &&
                                        ("__proto__" === i
                                            ? Object.defineProperty(n, i, {
                                                  value: a(),
                                                  writable: !0,
                                                  enumerable: !0,
                                                  configurable: !0,
                                              })
                                            : (n[i] = a())),
                                    n[i]).push(t(s));
                                } else r.push(t(s));
                            return { formErrors: r, fieldErrors: n };
                        })(e, t),
                ),
                nX(n, "addIssue", (e) => (t) => {
                    (e.issues.push(t), (e.message = JSON.stringify(e.issues, y, 2)));
                }),
                nX(n, "addIssues", (e) => (t) => {
                    (e.issues.push(...t), (e.message = JSON.stringify(e.issues, y, 2)));
                }),
                Object.defineProperty(n, "isEmpty", {
                    configurable: !0,
                    enumerable: !1,
                    get() {
                        return 0 === this.issues.length;
                    },
                }));
        },
        void 0,
        { Parent: Error },
    ),
    nY = nG(nJ),
    nQ = nU(nJ),
    n0 = n$(nJ),
    n1 = nH(nJ),
    n2 =
        ((o = nG(nJ)),
        (u = (e, t, n, r) => o(e, t, n ? { ...n, direction: "backward" } : { direction: "backward" }, nN(u, r)))),
    n3 = ((d = nG(nJ)), (l = (e, t, n, r) => d(e, t, n, nN(l, r)))),
    n4 =
        ((c = nU(nJ)),
        (f = async (e, t, n, r) => {
            let i = n ? { ...n, direction: "backward" } : { direction: "backward" };
            return await c(e, t, i, nN(f, r));
        })),
    n9 = ((h = nU(nJ)), (p = async (e, t, n, r) => await h(e, t, n, nN(p, r)))),
    n5 = (e, t, n) => {
        let r = n ? { ...n, direction: "backward" } : { direction: "backward" };
        return n$(nJ)(e, t, r);
    },
    n8 = (e, t, n) => n$(nJ)(e, t, n),
    n7 = async (e, t, n) => {
        let r = n ? { ...n, direction: "backward" } : { direction: "backward" };
        return nH(nJ)(e, t, r);
    },
    n6 = async (e, t, n) => nH(nJ)(e, t, n);
function re() {
    eo.memoizer || eu({ memoizer: em });
}
let rt = ei(
        "ZodType",
        (e, t) => (
            eo.localeError ||
                eu({
                    localeError: (() => {
                        let e = {
                                string: { unit: "characters", verb: "to have" },
                                file: { unit: "bytes", verb: "to have" },
                                array: { unit: "items", verb: "to have" },
                                set: { unit: "items", verb: "to have" },
                                map: { unit: "entries", verb: "to have" },
                            },
                            t = {
                                regex: "input",
                                email: "email address",
                                url: "URL",
                                emoji: "emoji",
                                uuid: "UUID",
                                uuidv4: "UUIDv4",
                                uuidv6: "UUIDv6",
                                nanoid: "nanoid",
                                guid: "GUID",
                                cuid: "cuid",
                                cuid2: "cuid2",
                                ulid: "ULID",
                                xid: "XID",
                                ksuid: "KSUID",
                                datetime: "ISO datetime",
                                date: "ISO date",
                                time: "ISO time",
                                duration: "ISO duration",
                                ipv4: "IPv4 address",
                                ipv6: "IPv6 address",
                                mac: "MAC address",
                                cidrv4: "IPv4 range",
                                cidrv6: "IPv6 range",
                                base64: "base64-encoded string",
                                base64url: "base64url-encoded string",
                                json_string: "JSON string",
                                e164: "E.164 number",
                                currency_code: "currency code",
                                credit_card: "credit card number",
                                iban: "IBAN",
                                jwt: "JWT",
                                template_literal: "input",
                            },
                            n = { nan: "NaN" };
                        function r(e, t) {
                            return "number" !== e || "number" != typeof t || Number.isFinite(t)
                                ? (n[e] ?? e)
                                : String(t);
                        }
                        return (n) => {
                            switch (n.code) {
                                case "invalid_type": {
                                    let e = r(n.expected),
                                        t = r(
                                            (function (e) {
                                                let t = typeof e;
                                                switch (t) {
                                                    case "number":
                                                        return Number.isNaN(e) ? "nan" : "number";
                                                    case "object":
                                                        if (null === e) return "null";
                                                        if (Array.isArray(e)) return "array";
                                                        if (
                                                            e &&
                                                            Object.getPrototypeOf(e) !== Object.prototype &&
                                                            "constructor" in e &&
                                                            e.constructor
                                                        )
                                                            return e.constructor.name;
                                                }
                                                return t;
                                            })(n.input),
                                            n.input,
                                        );
                                    return `Invalid input: expected ${e}, received ${t}`;
                                }
                                case "invalid_value":
                                    if (1 === n.values.length) return `Invalid input: expected ${z(n.values[0])}`;
                                    return `Invalid option: expected one of ${m(n.values, "|")}`;
                                case "too_big": {
                                    let t = n.exact ? "exactly " : n.inclusive ? "<=" : "<",
                                        r = e[n.origin] ?? null;
                                    if (r)
                                        return `Too big: expected ${n.origin ?? "value"} to have ${t}${n.maximum.toString()} ${r.unit ?? "elements"}`;
                                    return `Too big: expected ${n.origin ?? "value"} to be ${t}${n.maximum.toString()}`;
                                }
                                case "too_small": {
                                    let t = n.exact ? "exactly " : n.inclusive ? ">=" : ">",
                                        r = e[n.origin] ?? null;
                                    if (r)
                                        return `Too small: expected ${n.origin} to have ${t}${n.minimum.toString()} ${r.unit}`;
                                    return `Too small: expected ${n.origin} to be ${t}${n.minimum.toString()}`;
                                }
                                case "invalid_format":
                                    if ("starts_with" === n.format)
                                        return `Invalid string: must start with "${n.prefix}"`;
                                    if ("ends_with" === n.format) return `Invalid string: must end with "${n.suffix}"`;
                                    if ("includes" === n.format) return `Invalid string: must include "${n.includes}"`;
                                    if ("regex" === n.format) return `Invalid string: must match pattern ${n.pattern}`;
                                    return `Invalid ${t[n.format] ?? n.format}`;
                                case "not_multiple_of":
                                    return `Invalid number: must be a multiple of ${n.divisor}`;
                                case "unrecognized_keys":
                                    return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${m(n.keys, ", ")}`;
                                case "invalid_key":
                                    return `Invalid key in ${n.origin}`;
                                case "invalid_union":
                                    if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                                        let e = n.options.map((e) => `'${e}'`).join(" | ");
                                        return `Invalid discriminator value. Expected ${e}`;
                                    }
                                    if (!1 === n.inclusive) return "Invalid input: more than one option matched";
                                    return "Invalid input";
                                case "invalid_element":
                                    return `Invalid value in ${n.origin}`;
                                default:
                                    return "Invalid input";
                            }
                        };
                    })(),
                }),
            e2.init(e, t),
            (e.def = t),
            (e.type = t.type),
            e
        ),
        {
            check(...e) {
                let t = this.def;
                return this.clone(
                    E(t, {
                        checks: [
                            ...(t.checks ?? []),
                            ...e.map((e) =>
                                "function" == typeof e
                                    ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } }
                                    : e,
                            ),
                        ],
                    }),
                    { parent: !0 },
                );
            },
            with(...e) {
                return this.check(...e);
            },
            clone(e, t) {
                return C(this, e, t);
            },
            brand() {
                return this;
            },
            register(e, t) {
                return (e.add(this, t), this);
            },
            refine(e, t) {
                return this.check(
                    (function (e, t = {}) {
                        return new r0({ type: "custom", check: "custom", fn: e, ...D(t) });
                    })(e, t),
                );
            },
            superRefine(e, t) {
                return this.check(
                    (function (e, t) {
                        var n;
                        let r, i;
                        return (
                            (n = (t) => (
                                (t.addIssue = (e) => {
                                    "string" == typeof e
                                        ? t.issues.push(J(e, t.value, r._zod.def))
                                        : (e.fatal && (e.continue = !1),
                                          e.code ?? (e.code = "custom"),
                                          "input" in e || (e.input = t.value),
                                          e.inst ?? (e.inst = r),
                                          e.continue ?? (e.continue = !r._zod.def.abort),
                                          t.issues.push(J(e)));
                                }),
                                e(t.value, t)
                            )),
                            ((i = new eN({ check: "custom", ...D(t) }))._zod.check = n),
                            (r = i)
                        );
                    })(e, t),
                );
            },
            overwrite(e) {
                return this.check(nr(e));
            },
            optional() {
                return rU(this);
            },
            exactOptional() {
                var e;
                return ((e = this), new r$({ type: "optional", innerType: e }));
            },
            nullable() {
                return rH(this);
            },
            nullish() {
                return rU(rH(this));
            },
            nonoptional(e) {
                var t;
                return ((t = this), new rq({ type: "nonoptional", innerType: t, ...D(e) }));
            },
            array() {
                return (function (e) {
                    return new rM({ type: "array", element: e, ...D(void 0) });
                })(this);
            },
            or(e) {
                return new rD({ type: "union", options: [this, e], ...D(void 0) });
            },
            and(e) {
                var t;
                return ((t = this), new rz({ type: "intersection", left: t, right: e }));
            },
            transform(e) {
                return rY(this, new rN({ type: "transform", transform: e }));
            },
            default(e) {
                var t, n;
                return (
                    (t = this),
                    (n = e),
                    new rW({
                        type: "default",
                        innerType: t,
                        get defaultValue() {
                            return "function" == typeof n ? n() : R(n);
                        },
                    })
                );
            },
            prefault(e) {
                var t, n;
                return (
                    (t = this),
                    (n = e),
                    new rK({
                        type: "prefault",
                        innerType: t,
                        get defaultValue() {
                            return "function" == typeof n ? n() : R(n);
                        },
                    })
                );
            },
            catch(e) {
                return (function (e, t) {
                    let n;
                    return new rX({
                        type: "catch",
                        innerType: e,
                        catchValue: "function" == typeof t ? t : (((n = () => t)["~constantCatch"] = !0), n),
                    });
                })(this, e);
            },
            pipe(e) {
                return rY(this, e);
            },
            readonly() {
                var e;
                return ((e = this), new rQ({ type: "readonly", innerType: e }));
            },
            describe(e) {
                let t = this.clone();
                return (t6.add(t, { description: e }), t);
            },
            meta(...e) {
                if (0 === e.length) return t6.get(this);
                let t = this.clone();
                return (t6.add(t, e[0]), t);
            },
            isOptional() {
                return this.safeParse(void 0).success;
            },
            isNullable() {
                return this.safeParse(null).success;
            },
            apply(e, ...t) {
                return 0 === t.length ? e(this) : e(this, ...t);
            },
            get "~standard"() {
                return Y(
                    this,
                    "~standard",
                    { ...e4(this), jsonSchema: { input: n_(this, "input"), output: n_(this, "output") } },
                    !1,
                );
            },
            set "~standard"(e) {
                Y(this, "~standard", e);
            },
            parse: function e(t, n) {
                return nY(this, t, n, { callee: e });
            },
            parseAsync: async function e(t, n) {
                return await nQ(this, t, n, { callee: e });
            },
            safeParse(e, t) {
                return n0(this, e, t);
            },
            async safeParseAsync(e, t) {
                return n1(this, e, t);
            },
            get spa() {
                return this?.safeParseAsync;
            },
            set spa(e) {
                Y(this, "spa", e);
            },
            validate(e, t) {
                let n = this._zod.bag.validator;
                if (void 0 !== n) {
                    if (n(e) !== nW) return !0;
                    if (!0 === n.definite && void 0 === t) return !1;
                }
                return (function (e, t, n) {
                    let r,
                        i = n ? { ...n, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 },
                        a = e._zod.bag.fallbackRun;
                    if (
                        (a
                            ? ((i[nK] = !0), (r = a({ value: t, issues: [] }, i)))
                            : (r = e._zod.run({ value: t, issues: [] }, i)),
                        r instanceof Promise)
                    )
                        throw new ea();
                    return 0 === r.issues.length;
                })(this, e, t);
            },
            validateAsync(e, t) {
                return (async (e, t, n) => {
                    let r = n ? { ...n, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 },
                        i = e._zod.run({ value: t, issues: [] }, r);
                    return (i instanceof Promise && (i = await i), 0 === i.issues.length);
                })(this, e, t);
            },
            encode: function e(t, n) {
                return n2(this, t, n, { callee: e });
            },
            decode: function e(t, n) {
                return n3(this, t, n, { callee: e });
            },
            encodeAsync: async function e(t, n) {
                return await n4(this, t, n, { callee: e });
            },
            decodeAsync: async function e(t, n) {
                return await n9(this, t, n, { callee: e });
            },
            safeEncode(e, t) {
                return n5(this, e, t);
            },
            safeDecode(e, t) {
                return n8(this, e, t);
            },
            async safeEncodeAsync(e, t) {
                return n7(this, e, t);
            },
            async safeDecodeAsync(e, t) {
                return n6(this, e, t);
            },
            toJSONSchema(e) {
                return (
                    (e, t = {}) =>
                    (n) => {
                        let r = na({ ...n, processors: t });
                        return (no(e, r), nd(r, e), np(r, e));
                    }
                )(
                    this,
                    {},
                )(e);
            },
            get description() {
                return t6.get(this)?.description;
            },
            get _def() {
                return this._zod.def;
            },
        },
    ),
    rn = ei(
        "_ZodString",
        (e, t) => {
            (e9.init(e, t),
                rt.init(e, t),
                (e._zod.processJSONSchema = (t, n, r) =>
                    ((e, t, n) => {
                        n.type = "string";
                        let {
                            minimum: r,
                            maximum: i,
                            format: a,
                            patterns: s,
                            contentEncoding: o,
                            laxFormat: u,
                        } = nP(e);
                        if (
                            ("number" == typeof r && (n.minLength = r),
                            "number" == typeof i && (n.maxLength = i),
                            a &&
                                ((n.format = nx[a] ?? a),
                                "" === n.format && delete n.format,
                                ("time" === a || u) && delete n.format),
                            o && (n.contentEncoding = o),
                            s && s.size > 0)
                        ) {
                            let e = [...s].map(nO);
                            1 === e.length
                                ? (n.pattern = e[0].source)
                                : e.length > 1 &&
                                  (n.allOf = [
                                      ...e.map((e) => ({
                                          ...("draft-07" === t.target ||
                                          "draft-04" === t.target ||
                                          "openapi-3.0" === t.target
                                              ? { type: "string" }
                                              : {}),
                                          pattern: e.source,
                                      })),
                                  ]);
                        }
                    })(e, t, n)));
        },
        (function (e, t) {
            for (let n in e) {
                let r = e[n];
                Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                        return Y(this, n, r(this));
                    },
                    set(e) {
                        Y(this, n, e);
                    },
                });
            }
            return t;
        })(
            {
                format: (e) => nP(e).format ?? null,
                minLength: (e) => nP(e).minimum ?? null,
                maxLength: (e) => nP(e).maximum ?? null,
            },
            {
                regex(...e) {
                    return this.check(
                        (function (e, t) {
                            return new eW({ check: "string_format", format: "regex", ...D(t), pattern: e });
                        })(...e),
                    );
                },
                includes(...e) {
                    return this.check(
                        (function (e, t) {
                            return new eX({ check: "string_format", format: "includes", ...D(t), includes: e });
                        })(...e),
                    );
                },
                startsWith(...e) {
                    return this.check(
                        (function (e, t) {
                            return new eJ({ check: "string_format", format: "starts_with", ...D(t), prefix: e });
                        })(...e),
                    );
                },
                endsWith(...e) {
                    return this.check(
                        (function (e, t) {
                            return new eY({ check: "string_format", format: "ends_with", ...D(t), suffix: e });
                        })(...e),
                    );
                },
                min(...e) {
                    return this.check(nt(...e));
                },
                max(...e) {
                    return this.check(ne(...e));
                },
                length(...e) {
                    return this.check(nn(...e));
                },
                nonempty(...e) {
                    return this.check(nt(1, ...e));
                },
                lowercase(e) {
                    return this.check(new eK({ check: "string_format", format: "lowercase", ...D(e) }));
                },
                uppercase(e) {
                    return this.check(new eq({ check: "string_format", format: "uppercase", ...D(e) }));
                },
                trim() {
                    return this.check(nr((e) => e.trim()));
                },
                normalize(...e) {
                    return this.check(
                        (function (e) {
                            return nr((t) => t.normalize(e));
                        })(...e),
                    );
                },
                toLowerCase() {
                    return this.check(nr((e) => e.toLowerCase()));
                },
                toUpperCase() {
                    return this.check(nr((e) => e.toUpperCase()));
                },
                slugify() {
                    return this.check(
                        nr((e) =>
                            e
                                .toLowerCase()
                                .trim()
                                .replace(/[^\w\s-]/g, "")
                                .replace(/[\s_-]+/g, "-")
                                .replace(/^-+|-+$/g, ""),
                        ),
                    );
                },
            },
        ),
    ),
    rr = ei(
        "ZodString",
        (e, t) => {
            (e9.init(e, t), rn.init(e, t));
        },
        {
            email(e) {
                return this.check(
                    new rl({ type: "string", format: "email", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            url(e) {
                return this.check(
                    new rh({ type: "string", format: "url", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            jwt(e) {
                return this.check(
                    new rx({ type: "string", format: "jwt", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            emoji(e) {
                return this.check(
                    new rp({ type: "string", format: "emoji", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            guid(e) {
                return this.check(
                    new rc({ type: "string", format: "guid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            uuid(e) {
                return this.check(
                    new rf({ type: "string", format: "uuid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            uuidv4(e) {
                return this.check(
                    new rf({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v4",
                        ...D(e),
                    }),
                );
            },
            uuidv6(e) {
                return this.check(
                    new rf({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v6",
                        ...D(e),
                    }),
                );
            },
            uuidv7(e) {
                return this.check(
                    new rf({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v7",
                        ...D(e),
                    }),
                );
            },
            nanoid(e) {
                return this.check(
                    new r_({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            cuid(e) {
                return this.check(
                    new rm({ type: "string", format: "cuid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            cuid2(e) {
                return this.check(
                    new ry({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            ulid(e) {
                return this.check(
                    new rg({ type: "string", format: "ulid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            base64(e) {
                return this.check(
                    new rA({ type: "string", format: "base64", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            base64url(e) {
                return this.check(
                    new rE({ type: "string", format: "base64url", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            xid(e) {
                return this.check(
                    new rv({ type: "string", format: "xid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            ksuid(e) {
                return this.check(
                    new rb({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            ipv4(e) {
                return this.check(
                    new rw({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            ipv6(e) {
                return this.check(
                    new rV({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            cidrv4(e) {
                return this.check(
                    new rT({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            cidrv6(e) {
                return this.check(
                    new rk({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            e164(e) {
                return this.check(
                    new rP({ type: "string", format: "e164", check: "string_format", abort: !1, ...D(e) }),
                );
            },
            datetime(e) {
                return this.check(
                    new rs({
                        type: "string",
                        format: "datetime",
                        check: "string_format",
                        offset: !1,
                        local: !1,
                        precision: null,
                        ...D(e),
                    }),
                );
            },
            date(e) {
                return this.check(new ro({ type: "string", format: "date", check: "string_format", ...D(e) }));
            },
            time(e) {
                return this.check(
                    new ru({ type: "string", format: "time", check: "string_format", precision: null, ...D(e) }),
                );
            },
            duration(e) {
                return this.check(new rd({ type: "string", format: "duration", check: "string_format", ...D(e) }));
            },
        },
    );
function ri(e) {
    var t;
    return new rr(((t = { type: "string", ...D(e) }).checks && (t.checks = [...t.checks]), t));
}
let ra = ei("ZodStringFormat", (e, t) => {
        (e5.init(e, t), rn.init(e, t));
    }),
    rs = ei("ZodISODateTime", (e, t) => {
        (tc.init(e, t), ra.init(e, t));
    }),
    ro = ei("ZodISODate", (e, t) => {
        (tf.init(e, t), ra.init(e, t));
    }),
    ru = ei("ZodISOTime", (e, t) => {
        (th.init(e, t), ra.init(e, t));
    }),
    rd = ei("ZodISODuration", (e, t) => {
        (tp.init(e, t), ra.init(e, t));
    }),
    rl = ei("ZodEmail", (e, t) => {
        (e6.init(e, t), ra.init(e, t));
    }),
    rc = ei("ZodGUID", (e, t) => {
        (e8.init(e, t), ra.init(e, t));
    }),
    rf = ei("ZodUUID", (e, t) => {
        (e7.init(e, t), ra.init(e, t));
    }),
    rh = ei("ZodURL", (e, t) => {
        (tr.init(e, t), ra.init(e, t));
    }),
    rp = ei("ZodEmoji", (e, t) => {
        (ti.init(e, t), ra.init(e, t));
    }),
    r_ = ei("ZodNanoID", (e, t) => {
        (ta.init(e, t), ra.init(e, t));
    }),
    rm = ei("ZodCUID", (e, t) => {
        (ts.init(e, t), ra.init(e, t));
    }),
    ry = ei("ZodCUID2", (e, t) => {
        (to.init(e, t), ra.init(e, t));
    }),
    rg = ei("ZodULID", (e, t) => {
        (tu.init(e, t), ra.init(e, t));
    }),
    rv = ei("ZodXID", (e, t) => {
        (td.init(e, t), ra.init(e, t));
    }),
    rb = ei("ZodKSUID", (e, t) => {
        (tl.init(e, t), ra.init(e, t));
    }),
    rw = ei("ZodIPv4", (e, t) => {
        (t_.init(e, t), ra.init(e, t));
    }),
    rV = ei("ZodIPv6", (e, t) => {
        (tg.init(e, t), ra.init(e, t));
    }),
    rT = ei("ZodCIDRv4", (e, t) => {
        (tv.init(e, t), ra.init(e, t));
    }),
    rk = ei("ZodCIDRv6", (e, t) => {
        (tb.init(e, t), ra.init(e, t));
    }),
    rA = ei("ZodBase64", (e, t) => {
        (tT.init(e, t), ra.init(e, t));
    }),
    rE = ei("ZodBase64URL", (e, t) => {
        (tA.init(e, t), ra.init(e, t));
    }),
    rP = ei("ZodE164", (e, t) => {
        (tE.init(e, t), ra.init(e, t));
    }),
    rx = ei("ZodJWT", (e, t) => {
        (tP.init(e, t), ra.init(e, t));
    }),
    rS = ei("ZodUnknown", (e, t) => {
        (tx.init(e, t), rt.init(e, t), (e._zod.processJSONSchema = (e, t, n) => void 0));
    });
function rO() {
    return new rS({ type: "unknown" });
}
let rR = ei("ZodNever", (e, t) => {
        (tS.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) => {
                t.not = {};
            }));
    }),
    rM = ei(
        "ZodArray",
        (e, t) => {
            (re(),
                tM.init(e, t),
                rt.init(e, t),
                (e._zod.processJSONSchema = (t, n, r) =>
                    ((e, t, n, r) => {
                        let i = e._zod.def,
                            { minimum: a, maximum: s } = nP(e);
                        ("number" == typeof a && (n.minItems = a),
                            "number" == typeof s && (n.maxItems = s),
                            (n.type = "array"),
                            (n.items = no(i.element, t, { ...r, path: [...r.path, "items"] })));
                    })(e, t, n, r)),
                (e.element = t.element));
        },
        {
            min(e, t) {
                return this.check(nt(e, t));
            },
            nonempty(e) {
                return this.check(nt(1, e));
            },
            max(e, t) {
                return this.check(ne(e, t));
            },
            length(e, t) {
                return this.check(nn(e, t));
            },
            unwrap() {
                return this.element;
            },
        },
    ),
    rF = ei(
        "ZodObject",
        (e, t) => {
            var n;
            let r, i;
            (re(),
                tL.init(e, t),
                rt.init(e, t),
                (e._zod.processJSONSchema = (t, n, r) =>
                    ((e, t, n, r) => {
                        let i = e._zod.def,
                            a = i.shape;
                        if (
                            Object.getOwnPropertySymbols(a).length &&
                            ns(e, t, n, r, "Symbol keys cannot be represented in JSON Schema")
                        )
                            return;
                        for (let e in ((n.type = "object"), (n.properties = {}), a))
                            b(n.properties, e, no(a[e], t, { ...r, path: [...r.path, "properties", e] }));
                        let s = [];
                        for (let e of Object.keys(a)) {
                            let n = i.shape[e];
                            ("input" === t.io ? void 0 === nR(n) : void 0 === n._zod.optout) && s.push(e);
                        }
                        (s.length > 0 && (n.required = s),
                            i.catchall?._zod.def.type === "never"
                                ? (n.additionalProperties = !1)
                                : i.catchall
                                  ? i.catchall &&
                                    (n.additionalProperties = no(i.catchall, t, {
                                        ...r,
                                        path: [...r.path, "additionalProperties"],
                                    }))
                                  : "output" === t.io && (n.additionalProperties = !1));
                    })(e, t, n, r)),
                (n = "shape"),
                (i = n in (r = Object.getPrototypeOf(e)) ? void 0 : r) &&
                    Object.defineProperty(i, n, {
                        configurable: !0,
                        get() {
                            let e = { configurable: !0, writable: !0, enumerable: !1, value: void 0 };
                            return (
                                Object.defineProperty(this, n, e),
                                (e.value = ((e) => e._zod.def.shape)(this)),
                                Object.defineProperty(this, n, e),
                                e.value
                            );
                        },
                        set(e) {
                            Object.defineProperty(this, n, {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: e,
                            });
                        },
                    }));
        },
        {
            keyof() {
                return rB(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
                return this.clone(E(this._zod.def, { catchall: e }));
            },
            passthrough() {
                return this.clone(E(this._zod.def, { catchall: rO() }));
            },
            loose() {
                return this.clone(E(this._zod.def, { catchall: rO() }));
            },
            strict() {
                return this.clone(E(this._zod.def, { catchall: new rR({ type: "never", ...D(void 0) }) }));
            },
            strip() {
                return this.clone(E(this._zod.def, { catchall: void 0 }));
            },
            extend(e) {
                if (!O(e)) throw Error("Invalid input to extend: expected a plain object");
                let t = this._zod.def.checks;
                if (t && t.length > 0) {
                    let t = V(this);
                    for (let n of Reflect.ownKeys(e))
                        if (void 0 !== Object.getOwnPropertyDescriptor(t, n))
                            throw Error(
                                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                            );
                }
                return C(this, E(this._zod.def, { shape: B(this, e) }));
            },
            safeExtend(e) {
                if (!O(e)) throw Error("Invalid input to safeExtend: expected a plain object");
                return C(this, E(this._zod.def, { shape: B(this, e) }));
            },
            merge(e) {
                if (!e?._zod?.def)
                    throw Error(
                        "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
                    );
                if (this._zod.def.checks?.length)
                    throw Error(
                        ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
                    );
                let t = {};
                return (
                    A(t, this, Reflect.ownKeys(V(this))),
                    A(t, e, Reflect.ownKeys(V(e))),
                    C(
                        this,
                        E(this._zod.def, {
                            shape: t,
                            get catchall() {
                                return e._zod.def.catchall;
                            },
                            checks: e._zod.def.checks ?? [],
                        }),
                    )
                );
            },
            pick(e) {
                return (function (e, t) {
                    let n = e._zod.def,
                        r = n.checks;
                    if (r && r.length > 0)
                        throw Error(".pick() cannot be used on object schemas containing refinements");
                    let i = {};
                    return (A(i, e, j(e, t)), C(e, E(n, { shape: i, checks: [] })));
                })(this, e);
            },
            omit(e) {
                return (function (e, t) {
                    let n = e._zod.def,
                        r = n.checks;
                    if (r && r.length > 0)
                        throw Error(".omit() cannot be used on object schemas containing refinements");
                    let i = new Set(j(e, t)),
                        a = {};
                    return (
                        A(
                            a,
                            e,
                            Reflect.ownKeys(V(e)).filter((e) => !i.has(e)),
                        ),
                        C(e, E(n, { shape: a, checks: [] }))
                    );
                })(this, e);
            },
            partial(...e) {
                return N(rG, this, e[0]);
            },
            exactPartial(...e) {
                return N(r$, this, e[0], "exactPartial");
            },
            required(...e) {
                var t;
                let n, r;
                return (
                    (n = (t = e[0]) ? new Set(j(this, t)) : void 0),
                    A((r = {}), this, Reflect.ownKeys(V(this)), (e, t) =>
                        n && !n.has(t) ? e : new rq({ type: "nonoptional", innerType: e }),
                    ),
                    C(this, E(this._zod.def, { shape: r }))
                );
            },
        },
    );
function rC(e, t) {
    return new rF({ type: "object", shape: e ?? {}, ...D(t) });
}
let rD = ei("ZodUnion", (e, t) => {
        (tB.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i, a, s;
                return (
                    (a = !1 === (i = e._zod.def).inclusive),
                    (s = i.options.map((e, n) => no(e, t, { ...r, path: [...r.path, a ? "oneOf" : "anyOf", n] }))),
                    void (a ? (n.oneOf = s) : (n.anyOf = s))
                );
            }),
            (e.options = t.options));
    }),
    rz = ei("ZodIntersection", (e, t) => {
        (tN.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i, a, s, o, u;
                return (
                    (a = no((i = e._zod.def).left, t, { ...r, path: [...r.path, "allOf", 0] })),
                    (s = no(i.right, t, { ...r, path: [...r.path, "allOf", 1] })),
                    void ((n.allOf = u =
                        [
                            ...((o = (e) => "allOf" in e && 1 === Object.keys(e).length)(a) ? a.allOf : [a]),
                            ...(o(s) ? s.allOf : [s]),
                        ]),
                    t.intersections.push(u))
                );
            }));
    }),
    rI = ei("ZodRecord", (e, t) => {
        (re(),
            tU.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n, r) => {
                    let i = e._zod.def;
                    n.type = "object";
                    let a = i.keyType,
                        s = nP(a).patterns;
                    if ("loose" === i.mode && s && s.size > 0) {
                        let e = no(i.valueType, t, { ...r, path: [...r.path, "patternProperties", "*"] });
                        for (let t of ((n.patternProperties = {}), s)) b(n.patternProperties, nO(t).source, e);
                    } else {
                        if ("draft-07" === t.target || "draft-2020-12" === t.target) {
                            n.propertyNames = no(i.keyType, t, { ...r, path: [...r.path, "propertyNames"] });
                            let a = nM.get(t);
                            (a ||
                                ((a = []),
                                nM.set(t, a),
                                t.deferred.push(() =>
                                    (function (e) {
                                        let t = new Map();
                                        for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
                                        let n = new Map();
                                        for (let r of nM.get(e) ?? []) {
                                            let i = e.seen.get(r),
                                                a = (i?.def ?? i?.schema)?.propertyNames;
                                            if (!a || !0 === a || n.has(a)) continue;
                                            let s = (function e(t, n, r) {
                                                if (n.$ref) {
                                                    if (r.has(n)) return n;
                                                    r.add(n);
                                                    let i = t.get(n)?.def;
                                                    if (!i) return n;
                                                    let a = e(t, i, r);
                                                    return a === i ? n : a;
                                                }
                                                for (let i of ["anyOf", "oneOf"]) {
                                                    let a = n[i];
                                                    if (!Array.isArray(a)) continue;
                                                    let s = a.map((n) => e(t, n, r));
                                                    s.some((e, t) => e !== a[t]) && (n = { ...n, [i]: s });
                                                }
                                                let i = Array.isArray(n.type) ? n.type : [n.type],
                                                    a =
                                                        !i.includes("string") &&
                                                        i.some((e) => "number" === e || "integer" === e),
                                                    s = n.enum ?? (void 0 !== n.const ? [n.const] : void 0);
                                                if (!a && !s?.some((e) => "number" == typeof e)) return n;
                                                let {
                                                    minimum: o,
                                                    maximum: u,
                                                    exclusiveMinimum: d,
                                                    exclusiveMaximum: l,
                                                    multipleOf: c,
                                                    format: f,
                                                    id: h,
                                                    ...p
                                                } = n;
                                                return (
                                                    p.enum
                                                        ? (p.enum = p.enum.map((e) =>
                                                              "number" == typeof e ? String(e) : e,
                                                          ))
                                                        : "number" == typeof p.const && (p.const = String(p.const)),
                                                    a &&
                                                        ((p.type = "string"),
                                                        s || (p.pattern = (i.includes("number") ? eL : eI).source)),
                                                    p
                                                );
                                            })(t, a, new Set());
                                            s !== a && n.set(a, s);
                                        }
                                        if (n.size)
                                            for (let t of e.seen.values())
                                                for (let e of [t.schema, t.def]) {
                                                    let t = e && n.get(e.propertyNames);
                                                    t && (e.propertyNames = t);
                                                }
                                    })(t),
                                )),
                                a.push(e));
                        }
                        n.additionalProperties = no(i.valueType, t, {
                            ...r,
                            path: [...r.path, "additionalProperties"],
                        });
                    }
                    let o = a._zod.values,
                        u = "input" === t.io && void 0 !== nR(i.valueType);
                    if (o && !i.partial && !u) {
                        let e = [...o].filter((e) => "string" == typeof e || "number" == typeof e);
                        e.length > 0 && (n.required = e.map(String));
                    }
                })(e, t, n, r)),
            (e.keyType = t.keyType),
            (e.valueType = t.valueType));
    });
function rL(e, t, n) {
    return new rI({ type: "record", keyType: e, valueType: t, ...D(n), partial: !0 });
}
let rj = ei("ZodEnum", (e, t) => {
    (t$.init(e, t),
        rt.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t) => {
                let n = _(e._zod.def.entries);
                if (0 === n.length) {
                    t.not = {};
                    return;
                }
                (n.every((e) => "number" == typeof e) && (t.type = "number"),
                    n.every((e) => "string" == typeof e) && (t.type = "string"),
                    (t.enum = n));
            })(e, n)),
        (e.enum = t.entries),
        (e.options = [...e._zod.values]));
    let n = new Set(Object.keys(t.entries));
    ((e.extract = (e, r) => {
        let i = {};
        for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
        return new rj({ ...t, checks: [], ...D(r), entries: i });
    }),
        (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
                if (n.has(t)) delete i[t];
                else throw Error(`Key ${t} not found in enum`);
            return new rj({ ...t, checks: [], ...D(r), entries: i });
        }));
});
function rB(e, t) {
    return new rj({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...D(t) });
}
let rN = ei("ZodTransform", (e, t) => {
        (re(),
            tZ.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                ns(e, t, n, r, "Transforms cannot be represented in JSON Schema");
            }),
            (e._zod.parse = (n, r) => {
                if ("backward" === r.direction) throw new es(e.constructor.name);
                n.addIssue = (r) => {
                    "string" == typeof r
                        ? n.issues.push(J(r, n.value, t))
                        : (r.fatal && (r.continue = !1),
                          r.code ?? (r.code = "custom"),
                          "input" in r || (r.input = n.value),
                          r.inst ?? (r.inst = e),
                          n.issues.push(J(r)));
                };
                let i = t.transform(n.value, n);
                return i instanceof Promise ? i.then((e) => ((n.value = e), n)) : ((n.value = i), n);
            }));
    }),
    rG = ei("ZodOptional", (e, t) => {
        (tW.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => nD(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType));
    });
function rU(e) {
    return new rG({ type: "optional", innerType: e });
}
let r$ = ei("ZodExactOptional", (e, t) => {
        (tK.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => nD(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    rZ = ei("ZodNullable", (e, t) => {
        (tq.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i, a, s;
                return (
                    (a = no((i = e._zod.def).innerType, t, r)),
                    (s = t.seen.get(e)),
                    void ("openapi-3.0" === t.target
                        ? ((s.ref = i.innerType), (n.nullable = !0))
                        : (n.anyOf = [a, { type: "null" }]))
                );
            }),
            (e.unwrap = () => e._zod.def.innerType));
    });
function rH(e) {
    return new rZ({ type: "nullable", innerType: e });
}
let rW = ei("ZodDefault", (e, t) => {
        (tX.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i, a;
                return (
                    no((i = e._zod.def).innerType, t, r),
                    (t.seen.get(e).ref = i.innerType),
                    void ((a = nC(i.defaultValue, e, t, n, r)) !== nF && (n.default = a))
                );
            }),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap));
    }),
    rK = ei("ZodPrefault", (e, t) => {
        (tY.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n, r) => {
                    let i = e._zod.def;
                    if ((no(i.innerType, t, r), (t.seen.get(e).ref = i.innerType), "input" !== t.io)) return;
                    let a = nC(i.defaultValue, e, t, n, r);
                    a !== nF && (n._prefault = a);
                })(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    rq = ei("ZodNonOptional", (e, t) => {
        (tQ.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i;
                (no((i = e._zod.def).innerType, t, r), (t.seen.get(e).ref = i.innerType));
            }),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    rX = ei("ZodCatch", (e, t) => {
        (t2.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n, r) => {
                    let i,
                        a = e._zod.def;
                    (no(a.innerType, t, r), (t.seen.get(e).ref = a.innerType));
                    try {
                        i = a.catchValue(void 0);
                    } catch {
                        ns(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
                        return;
                    }
                    n.default = i;
                })(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap));
    }),
    rJ = ei("ZodPipe", (e, t) => {
        (t3.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i, a, s;
                return (
                    (a = (i = e._zod.def).in._zod.traits.has("$ZodTransform")),
                    void (no((s = "input" === t.io ? (a ? i.out : i.in) : i.out), t, r), (t.seen.get(e).ref = s))
                );
            }),
            (e.in = t.in),
            (e.out = t.out));
    });
function rY(e, t) {
    return new rJ({ type: "pipe", in: e, out: t });
}
let rQ = ei("ZodReadonly", (e, t) => {
        (t9.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                let i;
                (no((i = e._zod.def).innerType, t, r), (t.seen.get(e).ref = i.innerType), (n.readOnly = !0));
            }),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    r0 = ei("ZodCustom", (e, t) => {
        (t8.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
                ns(e, t, n, r, "Custom types cannot be represented in JSON Schema");
            }));
    });
