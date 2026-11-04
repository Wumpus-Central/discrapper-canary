var r;
function a(e, n, t) {
    function r(t, r) {
        if (
            (t._zod ||
                Object.defineProperty(t, "_zod", { value: { def: r, constr: s, traits: new Set() }, enumerable: !1 }),
            t._zod.traits.has(e))
        )
            return;
        (t._zod.traits.add(e), n(t, r));
        let a = s.prototype,
            i = Object.keys(a);
        for (let e = 0; e < i.length; e++) {
            let n = i[e];
            n in t || (t[n] = a[n].bind(t));
        }
    }
    let a = t?.Parent ?? Object;
    class i extends a {}
    function s(e) {
        var n;
        let a = t?.Parent ? new i() : this;
        for (let t of (r(a, e), (n = a._zod).deferred ?? (n.deferred = []), a._zod.deferred)) t();
        return a;
    }
    return (
        Object.defineProperty(i, "name", { value: e }),
        Object.defineProperty(s, "init", { value: r }),
        Object.defineProperty(s, Symbol.hasInstance, {
            value: (n) => (!!t?.Parent && n instanceof t.Parent) || n?._zod?.traits?.has(e),
        }),
        Object.defineProperty(s, "name", { value: e }),
        s
    );
}
(t.d(n, { EB: () => n1, k5: () => tS, Ik: () => tm, jg: () => tv, Yj: () => n0 }),
    Object.freeze({ status: "aborted" }),
    Symbol("zod_brand"));
class i extends Error {
    constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
class s extends Error {
    constructor(e) {
        (super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"));
    }
}
let o = {};
function u(e) {
    return (e && Object.assign(o, e), o);
}
let l = /^[cC][^\s-]{8,}$/,
    d = /^[0-9a-z]+$/,
    c = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    f = /^[0-9a-vA-V]{20}$/,
    _ = /^[A-Za-z0-9]{27}$/,
    h = /^[a-zA-Z0-9_-]{21}$/,
    p = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    m = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    y = (e) =>
        e
            ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    g = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    w =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    v =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    b =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    S =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    z = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    k = /^[A-Za-z0-9_-]*$/,
    E = /^\+[1-9]\d{6,14}$/,
    T =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    A = RegExp(`^${T}$`);
function M(e) {
    let n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e.precision
        ? -1 === e.precision
            ? `${n}`
            : 0 === e.precision
              ? `${n}:[0-5]\\d`
              : `${n}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
let O = /^-?\d+(?:\.\d+)?$/,
    L = /^[^A-Z]*$/,
    C = /^[^a-z]*$/;
function N(e) {
    let n = Object.values(e).filter((e) => "number" == typeof e);
    return Object.entries(e)
        .filter(([e, t]) => -1 === n.indexOf(+e))
        .map(([e, n]) => n);
}
function x(e, n) {
    return "bigint" == typeof n ? n.toString() : n;
}
function D(e) {
    return {
        get value() {
            {
                let n = e();
                return (Object.defineProperty(this, "value", { value: n }), n);
            }
        },
    };
}
function P(e) {
    let n = +!!e.startsWith("^"),
        t = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(n, t);
}
let I = Symbol("evaluating");
function Z(e, n, t) {
    let r;
    Object.defineProperty(e, n, {
        get() {
            if (r !== I) return (void 0 === r && ((r = I), (r = t())), r);
        },
        set(t) {
            Object.defineProperty(e, n, { value: t });
        },
        configurable: !0,
    });
}
function $(e, n, t) {
    Object.defineProperty(e, n, { value: t, writable: !0, enumerable: !0, configurable: !0 });
}
function G(...e) {
    let n = {};
    for (let t of e) Object.assign(n, Object.getOwnPropertyDescriptors(t));
    return Object.defineProperties({}, n);
}
function R(e) {
    return JSON.stringify(e);
}
let F = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function j(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
let B = D(() => {
    if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return (Function(""), !0);
    } catch (e) {
        return !1;
    }
});
function U(e) {
    if (!1 === j(e)) return !1;
    let n = e.constructor;
    if (void 0 === n || "function" != typeof n) return !0;
    let t = n.prototype;
    return !1 !== j(t) && !1 !== Object.prototype.hasOwnProperty.call(t, "isPrototypeOf");
}
function q(e) {
    return U(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
let H = new Set(["string", "number", "symbol"]);
function K(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function J(e, n, t) {
    let r = new e._zod.constr(n ?? e._zod.def);
    return ((!n || t?.parent) && (r._zod.parent = e), r);
}
function V(e) {
    if (!e) return {};
    if ("string" == typeof e) return { error: () => e };
    if (e?.message !== void 0) {
        if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e;
}
function W(e, n = 0) {
    if (!0 === e.aborted) return !0;
    for (let t = n; t < e.issues.length; t++) if (e.issues[t]?.continue !== !0) return !0;
    return !1;
}
function Y(e, n) {
    return n.map((n) => (n.path ?? (n.path = []), n.path.unshift(e), n));
}
function Q(e) {
    return "string" == typeof e ? e : e?.message;
}
function X(e, n, t) {
    let r = { ...e, path: e.path ?? [] };
    return (
        e.message ||
            (r.message =
                Q(e.inst?._zod.def?.error?.(e)) ??
                Q(n?.error?.(e)) ??
                Q(t.customError?.(e)) ??
                Q(t.localeError?.(e)) ??
                "Invalid input"),
        delete r.inst,
        delete r.continue,
        n?.reportInput || delete r.input,
        r
    );
}
function ee(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function en(...e) {
    let [n, t, r] = e;
    return "string" == typeof n ? { message: n, code: "custom", input: t, inst: r } : { ...n };
}
let et = a("$ZodCheck", (e, n) => {
        var t;
        (e._zod ?? (e._zod = {}), (e._zod.def = n), (t = e._zod).onattach ?? (t.onattach = []));
    }),
    er = a("$ZodCheckMaxLength", (e, n) => {
        var t;
        (et.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return null != n && void 0 !== n.length;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag.maximum ?? 1 / 0;
                n.maximum < t && (e._zod.bag.maximum = n.maximum);
            }),
            (e._zod.check = (t) => {
                let r = t.value;
                if (r.length <= n.maximum) return;
                let a = ee(r);
                t.issues.push({
                    origin: a,
                    code: "too_big",
                    maximum: n.maximum,
                    inclusive: !0,
                    input: r,
                    inst: e,
                    continue: !n.abort,
                });
            }));
    }),
    ea = a("$ZodCheckMinLength", (e, n) => {
        var t;
        (et.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return null != n && void 0 !== n.length;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag.minimum ?? -1 / 0;
                n.minimum > t && (e._zod.bag.minimum = n.minimum);
            }),
            (e._zod.check = (t) => {
                let r = t.value;
                if (r.length >= n.minimum) return;
                let a = ee(r);
                t.issues.push({
                    origin: a,
                    code: "too_small",
                    minimum: n.minimum,
                    inclusive: !0,
                    input: r,
                    inst: e,
                    continue: !n.abort,
                });
            }));
    }),
    ei = a("$ZodCheckLengthEquals", (e, n) => {
        var t;
        (et.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return null != n && void 0 !== n.length;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                ((t.minimum = n.length), (t.maximum = n.length), (t.length = n.length));
            }),
            (e._zod.check = (t) => {
                let r = t.value,
                    a = r.length;
                if (a === n.length) return;
                let i = ee(r),
                    s = a > n.length;
                t.issues.push({
                    origin: i,
                    ...(s ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length }),
                    inclusive: !0,
                    exact: !0,
                    input: t.value,
                    inst: e,
                    continue: !n.abort,
                });
            }));
    }),
    es = a("$ZodCheckStringFormat", (e, n) => {
        var t, r;
        (et.init(e, n),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                ((t.format = n.format),
                    n.pattern && (t.patterns ?? (t.patterns = new Set()), t.patterns.add(n.pattern)));
            }),
            n.pattern
                ? ((t = e._zod).check ??
                  (t.check = (t) => {
                      ((n.pattern.lastIndex = 0),
                          n.pattern.test(t.value) ||
                              t.issues.push({
                                  origin: "string",
                                  code: "invalid_format",
                                  format: n.format,
                                  input: t.value,
                                  ...(n.pattern ? { pattern: n.pattern.toString() } : {}),
                                  inst: e,
                                  continue: !n.abort,
                              }));
                  }))
                : ((r = e._zod).check ?? (r.check = () => {})));
    }),
    eo = a("$ZodCheckRegex", (e, n) => {
        (es.init(e, n),
            (e._zod.check = (t) => {
                ((n.pattern.lastIndex = 0),
                    n.pattern.test(t.value) ||
                        t.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: "regex",
                            input: t.value,
                            pattern: n.pattern.toString(),
                            inst: e,
                            continue: !n.abort,
                        }));
            }));
    }),
    eu = a("$ZodCheckLowerCase", (e, n) => {
        (n.pattern ?? (n.pattern = L), es.init(e, n));
    }),
    el = a("$ZodCheckUpperCase", (e, n) => {
        (n.pattern ?? (n.pattern = C), es.init(e, n));
    }),
    ed = a("$ZodCheckIncludes", (e, n) => {
        et.init(e, n);
        let t = K(n.includes),
            r = new RegExp("number" == typeof n.position ? `^.{${n.position}}${t}` : t);
        ((n.pattern = r),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.patterns ?? (n.patterns = new Set()), n.patterns.add(r));
            }),
            (e._zod.check = (t) => {
                t.value.includes(n.includes, n.position) ||
                    t.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: n.includes,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            }));
    }),
    ec = a("$ZodCheckStartsWith", (e, n) => {
        et.init(e, n);
        let t = RegExp(`^${K(n.prefix)}.*`);
        (n.pattern ?? (n.pattern = t),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.patterns ?? (n.patterns = new Set()), n.patterns.add(t));
            }),
            (e._zod.check = (t) => {
                t.value.startsWith(n.prefix) ||
                    t.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: n.prefix,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            }));
    }),
    ef = a("$ZodCheckEndsWith", (e, n) => {
        et.init(e, n);
        let t = RegExp(`.*${K(n.suffix)}$`);
        (n.pattern ?? (n.pattern = t),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.patterns ?? (n.patterns = new Set()), n.patterns.add(t));
            }),
            (e._zod.check = (t) => {
                t.value.endsWith(n.suffix) ||
                    t.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: n.suffix,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            }));
    }),
    e_ = a("$ZodCheckOverwrite", (e, n) => {
        (et.init(e, n),
            (e._zod.check = (e) => {
                e.value = n.tx(e.value);
            }));
    });
class eh {
    constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
    }
    indented(e) {
        ((this.indent += 1), e(this), (this.indent -= 1));
    }
    write(e) {
        if ("function" == typeof e) {
            (e(this, { execution: "sync" }), e(this, { execution: "async" }));
            return;
        }
        let n = e.split("\n").filter((e) => e),
            t = Math.min(...n.map((e) => e.length - e.trimStart().length));
        for (let e of n.map((e) => e.slice(t)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e);
    }
    compile() {
        let e = Function,
            n = this?.args,
            t = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
        return new e(...n, t.join("\n"));
    }
}
let ep = (e, n) => {
        ((e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: n, enumerable: !1 }),
            (e.message = JSON.stringify(n, x, 2)),
            Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 }));
    },
    em = a("$ZodError", ep),
    ey = a("$ZodError", ep, { Parent: Error }),
    eg = (e) => (n, t, r, a) => {
        let s = r ? Object.assign(r, { async: !1 }) : { async: !1 },
            o = n._zod.run({ value: t, issues: [] }, s);
        if (o instanceof Promise) throw new i();
        if (o.issues.length) {
            let n = new (a?.Err ?? e)(o.issues.map((e) => X(e, s, u())));
            throw (F(n, a?.callee), n);
        }
        return o.value;
    },
    ew = (e) => async (n, t, r, a) => {
        let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            s = n._zod.run({ value: t, issues: [] }, i);
        if ((s instanceof Promise && (s = await s), s.issues.length)) {
            let n = new (a?.Err ?? e)(s.issues.map((e) => X(e, i, u())));
            throw (F(n, a?.callee), n);
        }
        return s.value;
    },
    ev = (e) => (n, t, r) => {
        let a = r ? { ...r, async: !1 } : { async: !1 },
            s = n._zod.run({ value: t, issues: [] }, a);
        if (s instanceof Promise) throw new i();
        return s.issues.length
            ? { success: !1, error: new (e ?? em)(s.issues.map((e) => X(e, a, u()))) }
            : { success: !0, data: s.value };
    },
    eb = ev(ey),
    eS = (e) => async (n, t, r) => {
        let a = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            i = n._zod.run({ value: t, issues: [] }, a);
        return (
            i instanceof Promise && (i = await i),
            i.issues.length
                ? { success: !1, error: new e(i.issues.map((e) => X(e, a, u()))) }
                : { success: !0, data: i.value }
        );
    },
    ez = eS(ey),
    ek = { major: 4, minor: 3, patch: 6 },
    eE = a("$ZodType", (e, n) => {
        var t;
        (e ?? (e = {}), (e._zod.def = n), (e._zod.bag = e._zod.bag || {}), (e._zod.version = ek));
        let r = [...(e._zod.def.checks ?? [])];
        for (let n of (e._zod.traits.has("$ZodCheck") && r.unshift(e), r)) for (let t of n._zod.onattach) t(e);
        if (0 === r.length)
            ((t = e._zod).deferred ?? (t.deferred = []),
                e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse;
                }));
        else {
            let n = (e, n, t) => {
                    let r,
                        a = W(e);
                    for (let s of n) {
                        if (s._zod.def.when) {
                            if (!s._zod.def.when(e)) continue;
                        } else if (a) continue;
                        let n = e.issues.length,
                            o = s._zod.check(e);
                        if (o instanceof Promise && t?.async === !1) throw new i();
                        if (r || o instanceof Promise)
                            r = (r ?? Promise.resolve()).then(async () => {
                                (await o, e.issues.length !== n && (a || (a = W(e, n))));
                            });
                        else {
                            if (e.issues.length === n) continue;
                            a || (a = W(e, n));
                        }
                    }
                    return r ? r.then(() => e) : e;
                },
                t = (t, a, s) => {
                    if (W(t)) return ((t.aborted = !0), t);
                    let o = n(a, r, s);
                    if (o instanceof Promise) {
                        if (!1 === s.async) throw new i();
                        return o.then((n) => e._zod.parse(n, s));
                    }
                    return e._zod.parse(o, s);
                };
            e._zod.run = (a, s) => {
                if (s.skipChecks) return e._zod.parse(a, s);
                if ("backward" === s.direction) {
                    let n = e._zod.parse({ value: a.value, issues: [] }, { ...s, skipChecks: !0 });
                    return n instanceof Promise ? n.then((e) => t(e, a, s)) : t(n, a, s);
                }
                let o = e._zod.parse(a, s);
                if (o instanceof Promise) {
                    if (!1 === s.async) throw new i();
                    return o.then((e) => n(e, r, s));
                }
                return n(o, r, s);
            };
        }
        Z(e, "~standard", () => ({
            validate: (n) => {
                try {
                    let t = eb(e, n);
                    return t.success ? { value: t.data } : { issues: t.error?.issues };
                } catch (t) {
                    return ez(e, n).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }));
                }
            },
            vendor: "zod",
            version: 1,
        }));
    }),
    eT = a("$ZodString", (e, n) => {
        var t;
        let r;
        (eE.init(e, n),
            (e._zod.pattern =
                [...(e?._zod.bag?.patterns ?? [])].pop() ??
                ((r = (t = e._zod.bag) ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*"),
                RegExp(`^${r}$`))),
            (e._zod.parse = (t, r) => {
                if (n.coerce)
                    try {
                        t.value = String(t.value);
                    } catch (e) {}
                return (
                    "string" == typeof t.value ||
                        t.issues.push({ expected: "string", code: "invalid_type", input: t.value, inst: e }),
                    t
                );
            }));
    }),
    eA = a("$ZodStringFormat", (e, n) => {
        (es.init(e, n), eT.init(e, n));
    }),
    eM = a("$ZodGUID", (e, n) => {
        (n.pattern ?? (n.pattern = m), eA.init(e, n));
    }),
    eO = a("$ZodUUID", (e, n) => {
        if (n.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[n.version];
            if (void 0 === e) throw Error(`Invalid UUID version: "${n.version}"`);
            n.pattern ?? (n.pattern = y(e));
        } else n.pattern ?? (n.pattern = y());
        eA.init(e, n);
    }),
    eL = a("$ZodEmail", (e, n) => {
        (n.pattern ?? (n.pattern = g), eA.init(e, n));
    }),
    eC = a("$ZodURL", (e, n) => {
        (eA.init(e, n),
            (e._zod.check = (t) => {
                try {
                    let r = t.value.trim(),
                        a = new URL(r);
                    (n.hostname &&
                        ((n.hostname.lastIndex = 0),
                        n.hostname.test(a.hostname) ||
                            t.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid hostname",
                                pattern: n.hostname.source,
                                input: t.value,
                                inst: e,
                                continue: !n.abort,
                            })),
                        n.protocol &&
                            ((n.protocol.lastIndex = 0),
                            n.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) ||
                                t.issues.push({
                                    code: "invalid_format",
                                    format: "url",
                                    note: "Invalid protocol",
                                    pattern: n.protocol.source,
                                    input: t.value,
                                    inst: e,
                                    continue: !n.abort,
                                })),
                        n.normalize ? (t.value = a.href) : (t.value = r));
                    return;
                } catch (r) {
                    t.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
                }
            }));
    }),
    eN = a("$ZodEmoji", (e, n) => {
        (n.pattern ?? (n.pattern = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), eA.init(e, n));
    }),
    ex = a("$ZodNanoID", (e, n) => {
        (n.pattern ?? (n.pattern = h), eA.init(e, n));
    }),
    eD = a("$ZodCUID", (e, n) => {
        (n.pattern ?? (n.pattern = l), eA.init(e, n));
    }),
    eP = a("$ZodCUID2", (e, n) => {
        (n.pattern ?? (n.pattern = d), eA.init(e, n));
    }),
    eI = a("$ZodULID", (e, n) => {
        (n.pattern ?? (n.pattern = c), eA.init(e, n));
    }),
    eZ = a("$ZodXID", (e, n) => {
        (n.pattern ?? (n.pattern = f), eA.init(e, n));
    }),
    e$ = a("$ZodKSUID", (e, n) => {
        (n.pattern ?? (n.pattern = _), eA.init(e, n));
    }),
    eG = a("$ZodISODateTime", (e, n) => {
        let t, r, a;
        (n.pattern ??
            ((t = M({ precision: n.precision })),
            (r = ["Z"]),
            n.local && r.push(""),
            n.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
            (a = `${t}(?:${r.join("|")})`),
            (n.pattern = RegExp(`^${T}T(?:${a})$`))),
            eA.init(e, n));
    }),
    eR = a("$ZodISODate", (e, n) => {
        (n.pattern ?? (n.pattern = A), eA.init(e, n));
    }),
    eF = a("$ZodISOTime", (e, n) => {
        (n.pattern ?? (n.pattern = RegExp(`^${M(n)}$`)), eA.init(e, n));
    }),
    ej = a("$ZodISODuration", (e, n) => {
        (n.pattern ?? (n.pattern = p), eA.init(e, n));
    }),
    eB = a("$ZodIPv4", (e, n) => {
        (n.pattern ?? (n.pattern = w), eA.init(e, n), (e._zod.bag.format = "ipv4"));
    }),
    eU = a("$ZodIPv6", (e, n) => {
        (n.pattern ?? (n.pattern = v),
            eA.init(e, n),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (t) => {
                try {
                    new URL(`http://[${t.value}]`);
                } catch {
                    t.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
                }
            }));
    }),
    eq = a("$ZodCIDRv4", (e, n) => {
        (n.pattern ?? (n.pattern = b), eA.init(e, n));
    }),
    eH = a("$ZodCIDRv6", (e, n) => {
        (n.pattern ?? (n.pattern = S),
            eA.init(e, n),
            (e._zod.check = (t) => {
                let r = t.value.split("/");
                try {
                    if (2 !== r.length) throw Error();
                    let [e, n] = r;
                    if (!n) throw Error();
                    let t = Number(n);
                    if (`${t}` !== n || t < 0 || t > 128) throw Error();
                    new URL(`http://[${e}]`);
                } catch {
                    t.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
                }
            }));
    });
function eK(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return (atob(e), !0);
    } catch {
        return !1;
    }
}
let eJ = a("$ZodBase64", (e, n) => {
        (n.pattern ?? (n.pattern = z),
            eA.init(e, n),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (t) => {
                eK(t.value) ||
                    t.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            }));
    }),
    eV = a("$ZodBase64URL", (e, n) => {
        (n.pattern ?? (n.pattern = k),
            eA.init(e, n),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (t) => {
                !(function (e) {
                    if (!k.test(e)) return !1;
                    let n = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                    return eK(n.padEnd(4 * Math.ceil(n.length / 4), "="));
                })(t.value) &&
                    t.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            }));
    }),
    eW = a("$ZodE164", (e, n) => {
        (n.pattern ?? (n.pattern = E), eA.init(e, n));
    }),
    eY = a("$ZodJWT", (e, n) => {
        (eA.init(e, n),
            (e._zod.check = (t) => {
                !(function (e, n = null) {
                    try {
                        let t = e.split(".");
                        if (3 !== t.length) return !1;
                        let [r] = t;
                        if (!r) return !1;
                        let a = JSON.parse(atob(r));
                        if (("typ" in a && a?.typ !== "JWT") || !a.alg || (n && (!("alg" in a) || a.alg !== n)))
                            return !1;
                        return !0;
                    } catch {
                        return !1;
                    }
                })(t.value, n.alg) &&
                    t.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            }));
    }),
    eQ = a("$ZodUnknown", (e, n) => {
        (eE.init(e, n), (e._zod.parse = (e) => e));
    }),
    eX = a("$ZodNever", (e, n) => {
        (eE.init(e, n),
            (e._zod.parse = (n, t) => (
                n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: e }),
                n
            )));
    });
function e0(e, n, t) {
    (e.issues.length && n.issues.push(...Y(t, e.issues)), (n.value[t] = e.value));
}
let e1 = a("$ZodArray", (e, n) => {
    (eE.init(e, n),
        (e._zod.parse = (t, r) => {
            let a = t.value;
            if (!Array.isArray(a))
                return (t.issues.push({ expected: "array", code: "invalid_type", input: a, inst: e }), t);
            t.value = Array(a.length);
            let i = [];
            for (let e = 0; e < a.length; e++) {
                let s = a[e],
                    o = n.element._zod.run({ value: s, issues: [] }, r);
                o instanceof Promise ? i.push(o.then((n) => e0(n, t, e))) : e0(o, t, e);
            }
            return i.length ? Promise.all(i).then(() => t) : t;
        }));
});
function e2(e, n, t, r, a) {
    if (e.issues.length) {
        if (a && !(t in r)) return;
        n.issues.push(...Y(t, e.issues));
    }
    void 0 === e.value ? t in r && (n.value[t] = void 0) : (n.value[t] = e.value);
}
function e4(e) {
    var n;
    let t = Object.keys(e.shape);
    for (let n of t)
        if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${n}": expected a Zod schema`);
    let r = Object.keys((n = e.shape)).filter((e) => "optional" === n[e]._zod.optin && "optional" === n[e]._zod.optout);
    return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(r) };
}
function e3(e, n, t, r, a, i) {
    let s = [],
        o = a.keySet,
        u = a.catchall._zod,
        l = u.def.type,
        d = "optional" === u.optout;
    for (let a in n) {
        if (o.has(a)) continue;
        if ("never" === l) {
            s.push(a);
            continue;
        }
        let i = u.run({ value: n[a], issues: [] }, r);
        i instanceof Promise ? e.push(i.then((e) => e2(e, t, a, n, d))) : e2(i, t, a, n, d);
    }
    return (s.length && t.issues.push({ code: "unrecognized_keys", keys: s, input: n, inst: i }), e.length)
        ? Promise.all(e).then(() => t)
        : t;
}
let e9 = a("$ZodObject", (e, n) => {
        let t;
        eE.init(e, n);
        let r = Object.getOwnPropertyDescriptor(n, "shape");
        if (!r?.get) {
            let e = n.shape;
            Object.defineProperty(n, "shape", {
                get: () => {
                    let t = { ...e };
                    return (Object.defineProperty(n, "shape", { value: t }), t);
                },
            });
        }
        let a = D(() => e4(n));
        Z(e._zod, "propValues", () => {
            let e = n.shape,
                t = {};
            for (let n in e) {
                let r = e[n]._zod;
                if (r.values) for (let e of (t[n] ?? (t[n] = new Set()), r.values)) t[n].add(e);
            }
            return t;
        });
        let i = n.catchall;
        e._zod.parse = (n, r) => {
            t ?? (t = a.value);
            let s = n.value;
            if (!j(s)) return (n.issues.push({ expected: "object", code: "invalid_type", input: s, inst: e }), n);
            n.value = {};
            let o = [],
                u = t.shape;
            for (let e of t.keys) {
                let t = u[e],
                    a = "optional" === t._zod.optout,
                    i = t._zod.run({ value: s[e], issues: [] }, r);
                i instanceof Promise ? o.push(i.then((t) => e2(t, n, e, s, a))) : e2(i, n, e, s, a);
            }
            return i ? e3(o, s, n, r, a.value, e) : o.length ? Promise.all(o).then(() => n) : n;
        };
    }),
    e5 = a("$ZodObjectJIT", (e, n) => {
        let t, r;
        e9.init(e, n);
        let a = e._zod.parse,
            i = D(() => e4(n)),
            s = !o.jitless,
            u = s && B.value,
            l = n.catchall;
        e._zod.parse = (o, d) => {
            r ?? (r = i.value);
            let c = o.value;
            return j(c)
                ? s && u && d?.async === !1 && !0 !== d.jitless
                    ? (t ||
                          (t = ((e) => {
                              let n = new eh(["shape", "payload", "ctx"]),
                                  t = i.value,
                                  r = (e) => {
                                      let n = R(e);
                                      return `shape[${n}]._zod.run({ value: input[${n}], issues: [] }, ctx)`;
                                  };
                              n.write("const input = payload.value;");
                              let a = Object.create(null),
                                  s = 0;
                              for (let e of t.keys) a[e] = `key_${s++}`;
                              for (let i of (n.write("const newResult = {};"), t.keys)) {
                                  let t = a[i],
                                      s = R(i),
                                      o = e[i],
                                      u = o?._zod?.optout === "optional";
                                  (n.write(`const ${t} = ${r(i)};`),
                                      u
                                          ? n.write(`
        if (${t}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${t}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${t}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${t}.value;
        }
        
      `)
                                          : n.write(`
        if (${t}.issues.length) {
          payload.issues = payload.issues.concat(${t}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${t}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${t}.value;
        }
        
      `));
                              }
                              (n.write("payload.value = newResult;"), n.write("return payload;"));
                              let o = n.compile();
                              return (n, t) => o(e, n, t);
                          })(n.shape)),
                      (o = t(o, d)),
                      l)
                        ? e3([], c, o, d, r, e)
                        : o
                    : a(o, d)
                : (o.issues.push({ expected: "object", code: "invalid_type", input: c, inst: e }), o);
        };
    });
function e7(e, n, t, r) {
    for (let t of e) if (0 === t.issues.length) return ((n.value = t.value), n);
    let a = e.filter((e) => !W(e));
    return 1 === a.length
        ? ((n.value = a[0].value), a[0])
        : (n.issues.push({
              code: "invalid_union",
              input: n.value,
              inst: t,
              errors: e.map((e) => e.issues.map((e) => X(e, r, u()))),
          }),
          n);
}
let e6 = a("$ZodUnion", (e, n) => {
        (eE.init(e, n),
            Z(e._zod, "optin", () => (n.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0)),
            Z(e._zod, "optout", () => (n.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
            Z(e._zod, "values", () => {
                if (n.options.every((e) => e._zod.values))
                    return new Set(n.options.flatMap((e) => Array.from(e._zod.values)));
            }),
            Z(e._zod, "pattern", () => {
                if (n.options.every((e) => e._zod.pattern)) {
                    let e = n.options.map((e) => e._zod.pattern);
                    return RegExp(`^(${e.map((e) => P(e.source)).join("|")})$`);
                }
            }));
        let t = 1 === n.options.length,
            r = n.options[0]._zod.run;
        e._zod.parse = (a, i) => {
            if (t) return r(a, i);
            let s = !1,
                o = [];
            for (let e of n.options) {
                let n = e._zod.run({ value: a.value, issues: [] }, i);
                if (n instanceof Promise) (o.push(n), (s = !0));
                else {
                    if (0 === n.issues.length) return n;
                    o.push(n);
                }
            }
            return s ? Promise.all(o).then((n) => e7(n, a, e, i)) : e7(o, a, e, i);
        };
    }),
    e8 = a("$ZodIntersection", (e, n) => {
        (eE.init(e, n),
            (e._zod.parse = (e, t) => {
                let r = e.value,
                    a = n.left._zod.run({ value: r, issues: [] }, t),
                    i = n.right._zod.run({ value: r, issues: [] }, t);
                return a instanceof Promise || i instanceof Promise
                    ? Promise.all([a, i]).then(([n, t]) => ne(e, n, t))
                    : ne(e, a, i);
            }));
    });
function ne(e, n, t) {
    let r,
        a = new Map();
    for (let t of n.issues)
        if ("unrecognized_keys" === t.code)
            for (let e of (r ?? (r = t), t.keys)) (a.has(e) || a.set(e, {}), (a.get(e).l = !0));
        else e.issues.push(t);
    for (let n of t.issues)
        if ("unrecognized_keys" === n.code) for (let e of n.keys) (a.has(e) || a.set(e, {}), (a.get(e).r = !0));
        else e.issues.push(n);
    let i = [...a].filter(([, e]) => e.l && e.r).map(([e]) => e);
    if ((i.length && r && e.issues.push({ ...r, keys: i }), W(e))) return e;
    let s = (function e(n, t) {
        if (n === t || (n instanceof Date && t instanceof Date && +n == +t)) return { valid: !0, data: n };
        if (U(n) && U(t)) {
            let r = Object.keys(t),
                a = Object.keys(n).filter((e) => -1 !== r.indexOf(e)),
                i = { ...n, ...t };
            for (let r of a) {
                let a = e(n[r], t[r]);
                if (!a.valid) return { valid: !1, mergeErrorPath: [r, ...a.mergeErrorPath] };
                i[r] = a.data;
            }
            return { valid: !0, data: i };
        }
        if (Array.isArray(n) && Array.isArray(t)) {
            if (n.length !== t.length) return { valid: !1, mergeErrorPath: [] };
            let r = [];
            for (let a = 0; a < n.length; a++) {
                let i = e(n[a], t[a]);
                if (!i.valid) return { valid: !1, mergeErrorPath: [a, ...i.mergeErrorPath] };
                r.push(i.data);
            }
            return { valid: !0, data: r };
        }
        return { valid: !1, mergeErrorPath: [] };
    })(n.value, t.value);
    if (!s.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
    return ((e.value = s.data), e);
}
let nn = a("$ZodRecord", (e, n) => {
        (eE.init(e, n),
            (e._zod.parse = (t, r) => {
                let a = t.value;
                if (!U(a)) return (t.issues.push({ expected: "record", code: "invalid_type", input: a, inst: e }), t);
                let i = [],
                    s = n.keyType._zod.values;
                if (s) {
                    let o;
                    t.value = {};
                    let u = new Set();
                    for (let e of s)
                        if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                            u.add("number" == typeof e ? e.toString() : e);
                            let s = n.valueType._zod.run({ value: a[e], issues: [] }, r);
                            s instanceof Promise
                                ? i.push(
                                      s.then((n) => {
                                          (n.issues.length && t.issues.push(...Y(e, n.issues)), (t.value[e] = n.value));
                                      }),
                                  )
                                : (s.issues.length && t.issues.push(...Y(e, s.issues)), (t.value[e] = s.value));
                        }
                    for (let e in a) u.has(e) || (o = o ?? []).push(e);
                    o && o.length > 0 && t.issues.push({ code: "unrecognized_keys", input: a, inst: e, keys: o });
                } else
                    for (let s of ((t.value = {}), Reflect.ownKeys(a))) {
                        if ("__proto__" === s) continue;
                        let o = n.keyType._zod.run({ value: s, issues: [] }, r);
                        if (o instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                        if ("string" == typeof s && O.test(s) && o.issues.length) {
                            let e = n.keyType._zod.run({ value: Number(s), issues: [] }, r);
                            if (e instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            0 === e.issues.length && (o = e);
                        }
                        if (o.issues.length) {
                            "loose" === n.mode
                                ? (t.value[s] = a[s])
                                : t.issues.push({
                                      code: "invalid_key",
                                      origin: "record",
                                      issues: o.issues.map((e) => X(e, r, u())),
                                      input: s,
                                      path: [s],
                                      inst: e,
                                  });
                            continue;
                        }
                        let l = n.valueType._zod.run({ value: a[s], issues: [] }, r);
                        l instanceof Promise
                            ? i.push(
                                  l.then((e) => {
                                      (e.issues.length && t.issues.push(...Y(s, e.issues)),
                                          (t.value[o.value] = e.value));
                                  }),
                              )
                            : (l.issues.length && t.issues.push(...Y(s, l.issues)), (t.value[o.value] = l.value));
                    }
                return i.length ? Promise.all(i).then(() => t) : t;
            }));
    }),
    nt = a("$ZodEnum", (e, n) => {
        eE.init(e, n);
        let t = N(n.entries),
            r = new Set(t);
        ((e._zod.values = r),
            (e._zod.pattern = RegExp(
                `^(${t
                    .filter((e) => H.has(typeof e))
                    .map((e) => ("string" == typeof e ? K(e) : e.toString()))
                    .join("|")})$`,
            )),
            (e._zod.parse = (n, a) => {
                let i = n.value;
                return (r.has(i) || n.issues.push({ code: "invalid_value", values: t, input: i, inst: e }), n);
            }));
    }),
    nr = a("$ZodTransform", (e, n) => {
        (eE.init(e, n),
            (e._zod.parse = (t, r) => {
                if ("backward" === r.direction) throw new s(e.constructor.name);
                let a = n.transform(t.value, t);
                if (r.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((e) => ((t.value = e), t));
                if (a instanceof Promise) throw new i();
                return ((t.value = a), t);
            }));
    });
function na(e, n) {
    return e.issues.length && void 0 === n ? { issues: [], value: void 0 } : e;
}
let ni = a("$ZodOptional", (e, n) => {
        (eE.init(e, n),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            Z(e._zod, "values", () =>
                n.innerType._zod.values ? new Set([...n.innerType._zod.values, void 0]) : void 0,
            ),
            Z(e._zod, "pattern", () => {
                let e = n.innerType._zod.pattern;
                return e ? RegExp(`^(${P(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, t) => {
                if ("optional" === n.innerType._zod.optin) {
                    let r = n.innerType._zod.run(e, t);
                    return r instanceof Promise ? r.then((n) => na(n, e.value)) : na(r, e.value);
                }
                return void 0 === e.value ? e : n.innerType._zod.run(e, t);
            }));
    }),
    ns = a("$ZodExactOptional", (e, n) => {
        (ni.init(e, n),
            Z(e._zod, "values", () => n.innerType._zod.values),
            Z(e._zod, "pattern", () => n.innerType._zod.pattern),
            (e._zod.parse = (e, t) => n.innerType._zod.run(e, t)));
    }),
    no = a("$ZodNullable", (e, n) => {
        (eE.init(e, n),
            Z(e._zod, "optin", () => n.innerType._zod.optin),
            Z(e._zod, "optout", () => n.innerType._zod.optout),
            Z(e._zod, "pattern", () => {
                let e = n.innerType._zod.pattern;
                return e ? RegExp(`^(${P(e.source)}|null)$`) : void 0;
            }),
            Z(e._zod, "values", () => (n.innerType._zod.values ? new Set([...n.innerType._zod.values, null]) : void 0)),
            (e._zod.parse = (e, t) => (null === e.value ? e : n.innerType._zod.run(e, t))));
    }),
    nu = a("$ZodDefault", (e, n) => {
        (eE.init(e, n),
            (e._zod.optin = "optional"),
            Z(e._zod, "values", () => n.innerType._zod.values),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) return n.innerType._zod.run(e, t);
                if (void 0 === e.value) return ((e.value = n.defaultValue), e);
                let r = n.innerType._zod.run(e, t);
                return r instanceof Promise ? r.then((e) => nl(e, n)) : nl(r, n);
            }));
    });
function nl(e, n) {
    return (void 0 === e.value && (e.value = n.defaultValue), e);
}
let nd = a("$ZodPrefault", (e, n) => {
        (eE.init(e, n),
            (e._zod.optin = "optional"),
            Z(e._zod, "values", () => n.innerType._zod.values),
            (e._zod.parse = (e, t) => (
                "backward" === t.direction || (void 0 === e.value && (e.value = n.defaultValue)),
                n.innerType._zod.run(e, t)
            )));
    }),
    nc = a("$ZodNonOptional", (e, n) => {
        (eE.init(e, n),
            Z(e._zod, "values", () => {
                let e = n.innerType._zod.values;
                return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (t, r) => {
                let a = n.innerType._zod.run(t, r);
                return a instanceof Promise ? a.then((n) => nf(n, e)) : nf(a, e);
            }));
    });
function nf(e, n) {
    return (
        e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: n }),
        e
    );
}
let n_ = a("$ZodCatch", (e, n) => {
        (eE.init(e, n),
            Z(e._zod, "optin", () => n.innerType._zod.optin),
            Z(e._zod, "optout", () => n.innerType._zod.optout),
            Z(e._zod, "values", () => n.innerType._zod.values),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) return n.innerType._zod.run(e, t);
                let r = n.innerType._zod.run(e, t);
                return r instanceof Promise
                    ? r.then(
                          (r) => (
                              (e.value = r.value),
                              r.issues.length &&
                                  ((e.value = n.catchValue({
                                      ...e,
                                      error: { issues: r.issues.map((e) => X(e, t, u())) },
                                      input: e.value,
                                  })),
                                  (e.issues = [])),
                              e
                          ),
                      )
                    : ((e.value = r.value),
                      r.issues.length &&
                          ((e.value = n.catchValue({
                              ...e,
                              error: { issues: r.issues.map((e) => X(e, t, u())) },
                              input: e.value,
                          })),
                          (e.issues = [])),
                      e);
            }));
    }),
    nh = a("$ZodPipe", (e, n) => {
        (eE.init(e, n),
            Z(e._zod, "values", () => n.in._zod.values),
            Z(e._zod, "optin", () => n.in._zod.optin),
            Z(e._zod, "optout", () => n.out._zod.optout),
            Z(e._zod, "propValues", () => n.in._zod.propValues),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) {
                    let r = n.out._zod.run(e, t);
                    return r instanceof Promise ? r.then((e) => np(e, n.in, t)) : np(r, n.in, t);
                }
                let r = n.in._zod.run(e, t);
                return r instanceof Promise ? r.then((e) => np(e, n.out, t)) : np(r, n.out, t);
            }));
    });
function np(e, n, t) {
    return e.issues.length ? ((e.aborted = !0), e) : n._zod.run({ value: e.value, issues: e.issues }, t);
}
let nm = a("$ZodReadonly", (e, n) => {
    (eE.init(e, n),
        Z(e._zod, "propValues", () => n.innerType._zod.propValues),
        Z(e._zod, "values", () => n.innerType._zod.values),
        Z(e._zod, "optin", () => n.innerType?._zod?.optin),
        Z(e._zod, "optout", () => n.innerType?._zod?.optout),
        (e._zod.parse = (e, t) => {
            if ("backward" === t.direction) return n.innerType._zod.run(e, t);
            let r = n.innerType._zod.run(e, t);
            return r instanceof Promise ? r.then(ny) : ny(r);
        }));
});
function ny(e) {
    return ((e.value = Object.freeze(e.value)), e);
}
let ng = a("$ZodCustom", (e, n) => {
    (et.init(e, n),
        eE.init(e, n),
        (e._zod.parse = (e, n) => e),
        (e._zod.check = (t) => {
            let r = t.value,
                a = n.fn(r);
            if (a instanceof Promise) return a.then((n) => nw(n, t, r, e));
            nw(a, t, r, e);
        }));
});
function nw(e, n, t, r) {
    if (!e) {
        let e = { code: "custom", input: t, inst: r, path: [...(r._zod.def.path ?? [])], continue: !r._zod.def.abort };
        (r._zod.def.params && (e.params = r._zod.def.params), n.issues.push(en(e)));
    }
}
(Symbol("ZodOutput"), Symbol("ZodInput"));
(r = globalThis).__zod_globalRegistry ??
    (r.__zod_globalRegistry = new (class e {
        constructor() {
            ((this._map = new WeakMap()), (this._idmap = new Map()));
        }
        add(e, ...n) {
            let t = n[0];
            return (this._map.set(e, t), t && "object" == typeof t && "id" in t && this._idmap.set(t.id, e), this);
        }
        clear() {
            return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
        }
        remove(e) {
            let n = this._map.get(e);
            return (n && "object" == typeof n && "id" in n && this._idmap.delete(n.id), this._map.delete(e), this);
        }
        get(e) {
            let n = e._zod.parent;
            if (n) {
                let t = { ...(this.get(n) ?? {}) };
                delete t.id;
                let r = { ...t, ...this._map.get(e) };
                return Object.keys(r).length ? r : void 0;
            }
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
    })());
let nv = globalThis.__zod_globalRegistry;
function nb(e, n) {
    return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...V(n) });
}
function nS(e, n) {
    return new er({ check: "max_length", ...V(n), maximum: e });
}
function nz(e, n) {
    return new ea({ check: "min_length", ...V(n), minimum: e });
}
function nk(e, n) {
    return new ei({ check: "length_equals", ...V(n), length: e });
}
function nE(e) {
    return new e_({ check: "overwrite", tx: e });
}
function nT(e) {
    let n = e?.target ?? "draft-2020-12";
    return (
        "draft-4" === n && (n = "draft-04"),
        "draft-7" === n && (n = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? nv,
            target: n,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0,
        }
    );
}
function nA(e, n, t = { path: [], schemaPath: [] }) {
    var r;
    let a = e._zod.def,
        i = n.seen.get(e);
    if (i) return (i.count++, t.schemaPath.includes(e) && (i.cycle = t.path), i.schema);
    let s = { schema: {}, count: 1, cycle: void 0, path: t.path };
    n.seen.set(e, s);
    let o = e._zod.toJSONSchema?.();
    if (o) s.schema = o;
    else {
        let r = { ...t, schemaPath: [...t.schemaPath, e], path: t.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(n, s.schema, r);
        else {
            let t = s.schema,
                i = n.processors[a.type];
            if (!i) throw Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
            i(e, n, t, r);
        }
        let i = e._zod.parent;
        i && (s.ref || (s.ref = i), nA(i, n, r), (n.seen.get(i).isParent = !0));
    }
    let u = n.metadataRegistry.get(e);
    return (
        u && Object.assign(s.schema, u),
        "input" === n.io &&
            (function e(n, t) {
                let r = t ?? { seen: new Set() };
                if (r.seen.has(n)) return !1;
                r.seen.add(n);
                let a = n._zod.def;
                if ("transform" === a.type) return !0;
                if ("array" === a.type) return e(a.element, r);
                if ("set" === a.type) return e(a.valueType, r);
                if ("lazy" === a.type) return e(a.getter(), r);
                if (
                    "promise" === a.type ||
                    "optional" === a.type ||
                    "nonoptional" === a.type ||
                    "nullable" === a.type ||
                    "readonly" === a.type ||
                    "default" === a.type ||
                    "prefault" === a.type
                )
                    return e(a.innerType, r);
                if ("intersection" === a.type) return e(a.left, r) || e(a.right, r);
                if ("record" === a.type || "map" === a.type) return e(a.keyType, r) || e(a.valueType, r);
                if ("pipe" === a.type) return e(a.in, r) || e(a.out, r);
                if ("object" === a.type) {
                    for (let n in a.shape) if (e(a.shape[n], r)) return !0;
                    return !1;
                }
                if ("union" === a.type) {
                    for (let n of a.options) if (e(n, r)) return !0;
                    return !1;
                }
                if ("tuple" === a.type) {
                    for (let n of a.items) if (e(n, r)) return !0;
                    if (a.rest && e(a.rest, r)) return !0;
                }
                return !1;
            })(e) &&
            (delete s.schema.examples, delete s.schema.default),
        "input" === n.io && s.schema._prefault && ((r = s.schema).default ?? (r.default = s.schema._prefault)),
        delete s.schema._prefault,
        n.seen.get(e).schema
    );
}
function nM(e, n) {
    let t = e.seen.get(n);
    if (!t) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r = new Map();
    for (let n of e.seen.entries()) {
        let t = e.metadataRegistry.get(n[0])?.id;
        if (t) {
            let e = r.get(t);
            if (e && e !== n[0])
                throw Error(
                    `Duplicate schema id "${t}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
            r.set(t, n[0]);
        }
    }
    let a = (n) => {
        if (n[1].schema.$ref) return;
        let r = n[1],
            { ref: a, defId: i } = ((n) => {
                let r = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    let t = e.external.registry.get(n[0])?.id,
                        a = e.external.uri ?? ((e) => e);
                    if (t) return { ref: a(t) };
                    let i = n[1].defId ?? n[1].schema.id ?? `schema${e.counter++}`;
                    return ((n[1].defId = i), { defId: i, ref: `${a("__shared")}#/${r}/${i}` });
                }
                if (n[1] === t) return { ref: "#" };
                let a = `#/${r}/`,
                    i = n[1].schema.id ?? `__schema${e.counter++}`;
                return { defId: i, ref: a + i };
            })(n);
        ((r.def = { ...r.schema }), i && (r.defId = i));
        let s = r.schema;
        for (let e in s) delete s[e];
        s.$ref = a;
    };
    if ("throw" === e.cycles)
        for (let n of e.seen.entries()) {
            let e = n[1];
            if (e.cycle)
                throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (let t of e.seen.entries()) {
        let r = t[1];
        if (n === t[0]) {
            a(t);
            continue;
        }
        if (e.external) {
            let r = e.external.registry.get(t[0])?.id;
            if (n !== t[0] && r) {
                a(t);
                continue;
            }
        }
        if (e.metadataRegistry.get(t[0])?.id || r.cycle || (r.count > 1 && "ref" === e.reused)) {
            a(t);
            continue;
        }
    }
}
function nO(e, n) {
    let t = e.seen.get(n);
    if (!t) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r = (n) => {
        let t = e.seen.get(n);
        if (null === t.ref) return;
        let a = t.def ?? t.schema,
            i = { ...a },
            s = t.ref;
        if (((t.ref = null), s)) {
            r(s);
            let t = e.seen.get(s),
                o = t.schema;
            if (
                (o.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                    ? ((a.allOf = a.allOf ?? []), a.allOf.push(o))
                    : Object.assign(a, o),
                Object.assign(a, i),
                n._zod.parent === s)
            )
                for (let e in a) "$ref" !== e && "allOf" !== e && (e in i || delete a[e]);
            if (o.$ref && t.def)
                for (let e in a)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in t.def &&
                        JSON.stringify(a[e]) === JSON.stringify(t.def[e]) &&
                        delete a[e];
        }
        let o = n._zod.parent;
        if (o && o !== s) {
            r(o);
            let n = e.seen.get(o);
            if (n?.schema.$ref && ((a.$ref = n.schema.$ref), n.def))
                for (let e in a)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in n.def &&
                        JSON.stringify(a[e]) === JSON.stringify(n.def[e]) &&
                        delete a[e];
        }
        e.override({ zodSchema: n, jsonSchema: a, path: t.path ?? [] });
    };
    for (let n of [...e.seen.entries()].reverse()) r(n[0]);
    let a = {};
    if (
        ("draft-2020-12" === e.target
            ? (a.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (a.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (a.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
        e.external?.uri)
    ) {
        let t = e.external.registry.get(n)?.id;
        if (!t) throw Error("Schema is missing an `id` property");
        a.$id = e.external.uri(t);
    }
    Object.assign(a, t.def ?? t.schema);
    let i = e.external?.defs ?? {};
    for (let n of e.seen.entries()) {
        let e = n[1];
        e.def && e.defId && (i[e.defId] = e.def);
    }
    e.external || (Object.keys(i).length > 0 && ("draft-2020-12" === e.target ? (a.$defs = i) : (a.definitions = i)));
    try {
        let t = JSON.parse(JSON.stringify(a));
        return (
            Object.defineProperty(t, "~standard", {
                value: {
                    ...n["~standard"],
                    jsonSchema: { input: nL(n, "input", e.processors), output: nL(n, "output", e.processors) },
                },
                enumerable: !1,
                writable: !1,
            }),
            t
        );
    } catch (e) {
        throw Error("Error converting schema to JSON.");
    }
}
let nL =
        (e, n, t = {}) =>
        (r) => {
            let { libraryOptions: a, target: i } = r ?? {},
                s = nT({ ...(a ?? {}), target: i, io: n, processors: t });
            return (nA(e, s), nM(s, e), nO(s, e));
        },
    nC = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    nN = (e, n, t, r) => {
        let a = e._zod.def;
        (nA(a.innerType, n, r), (n.seen.get(e).ref = a.innerType));
    },
    nx = a("ZodISODateTime", (e, n) => {
        (eG.init(e, n), n1.init(e, n));
    }),
    nD = a("ZodISODate", (e, n) => {
        (eR.init(e, n), n1.init(e, n));
    }),
    nP = a("ZodISOTime", (e, n) => {
        (eF.init(e, n), n1.init(e, n));
    }),
    nI = a("ZodISODuration", (e, n) => {
        (ej.init(e, n), n1.init(e, n));
    }),
    nZ = (e, n) => {
        (em.init(e, n),
            (e.name = "ZodError"),
            Object.defineProperties(e, {
                format: {
                    value: (n) =>
                        (function (e, n = (e) => e.message) {
                            let t = { _errors: [] },
                                r = (e) => {
                                    for (let a of e.issues)
                                        if ("invalid_union" === a.code && a.errors.length)
                                            a.errors.map((e) => r({ issues: e }));
                                        else if ("invalid_key" === a.code) r({ issues: a.issues });
                                        else if ("invalid_element" === a.code) r({ issues: a.issues });
                                        else if (0 === a.path.length) t._errors.push(n(a));
                                        else {
                                            let e = t,
                                                r = 0;
                                            for (; r < a.path.length;) {
                                                let t = a.path[r];
                                                (r === a.path.length - 1
                                                    ? ((e[t] = e[t] || { _errors: [] }), e[t]._errors.push(n(a)))
                                                    : (e[t] = e[t] || { _errors: [] }),
                                                    (e = e[t]),
                                                    r++);
                                            }
                                        }
                                };
                            return (r(e), t);
                        })(e, n),
                },
                flatten: {
                    value: (n) =>
                        (function (e, n = (e) => e.message) {
                            let t = {},
                                r = [];
                            for (let a of e.issues)
                                a.path.length > 0
                                    ? ((t[a.path[0]] = t[a.path[0]] || []), t[a.path[0]].push(n(a)))
                                    : r.push(n(a));
                            return { formErrors: r, fieldErrors: t };
                        })(e, n),
                },
                addIssue: {
                    value: (n) => {
                        (e.issues.push(n), (e.message = JSON.stringify(e.issues, x, 2)));
                    },
                },
                addIssues: {
                    value: (n) => {
                        (e.issues.push(...n), (e.message = JSON.stringify(e.issues, x, 2)));
                    },
                },
                isEmpty: { get: () => 0 === e.issues.length },
            }));
    };
a("ZodError", nZ);
let n$ = a("ZodError", nZ, { Parent: Error }),
    nG = eg(n$),
    nR = ew(n$),
    nF = ev(n$),
    nj = eS(n$),
    nB = (e, n, t) => {
        let r = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return eg(n$)(e, n, r);
    },
    nU = (e, n, t) => eg(n$)(e, n, t),
    nq = async (e, n, t) => {
        let r = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return ew(n$)(e, n, r);
    },
    nH = async (e, n, t) => ew(n$)(e, n, t),
    nK = (e, n, t) => {
        let r = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return ev(n$)(e, n, r);
    },
    nJ = (e, n, t) => ev(n$)(e, n, t),
    nV = async (e, n, t) => {
        let r = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return eS(n$)(e, n, r);
    },
    nW = async (e, n, t) => eS(n$)(e, n, t),
    nY = a(
        "ZodType",
        (e, n) => (
            eE.init(e, n),
            Object.assign(e["~standard"], { jsonSchema: { input: nL(e, "input"), output: nL(e, "output") } }),
            (e.toJSONSchema = (
                (e, n = {}) =>
                (t) => {
                    let r = nT({ ...t, processors: n });
                    return (nA(e, r), nM(r, e), nO(r, e));
                }
            )(e, {})),
            (e.def = n),
            (e.type = n.type),
            Object.defineProperty(e, "_def", { value: n }),
            (e.check = (...t) =>
                e.clone(
                    G(n, {
                        checks: [
                            ...(n.checks ?? []),
                            ...t.map((e) =>
                                "function" == typeof e
                                    ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } }
                                    : e,
                            ),
                        ],
                    }),
                    { parent: !0 },
                )),
            (e.with = e.check),
            (e.clone = (n, t) => J(e, n, t)),
            (e.brand = () => e),
            (e.register = (n, t) => (n.add(e, t), e)),
            (e.parse = (n, t) => nG(e, n, t, { callee: e.parse })),
            (e.safeParse = (n, t) => nF(e, n, t)),
            (e.parseAsync = async (n, t) => nR(e, n, t, { callee: e.parseAsync })),
            (e.safeParseAsync = async (n, t) => nj(e, n, t)),
            (e.spa = e.safeParseAsync),
            (e.encode = (n, t) => nB(e, n, t)),
            (e.decode = (n, t) => nU(e, n, t)),
            (e.encodeAsync = async (n, t) => nq(e, n, t)),
            (e.decodeAsync = async (n, t) => nH(e, n, t)),
            (e.safeEncode = (n, t) => nK(e, n, t)),
            (e.safeDecode = (n, t) => nJ(e, n, t)),
            (e.safeEncodeAsync = async (n, t) => nV(e, n, t)),
            (e.safeDecodeAsync = async (n, t) => nW(e, n, t)),
            (e.refine = (n, t) =>
                e.check(
                    (function (e, n = {}) {
                        return new tI({ type: "custom", check: "custom", fn: e, ...V(n) });
                    })(n, t),
                )),
            (e.superRefine = (n) =>
                e.check(
                    (function (e) {
                        var n;
                        let t, r;
                        return (
                            (n = (n) => (
                                (n.addIssue = (e) => {
                                    "string" == typeof e
                                        ? n.issues.push(en(e, n.value, t._zod.def))
                                        : (e.fatal && (e.continue = !1),
                                          e.code ?? (e.code = "custom"),
                                          e.input ?? (e.input = n.value),
                                          e.inst ?? (e.inst = t),
                                          e.continue ?? (e.continue = !t._zod.def.abort),
                                          n.issues.push(en(e)));
                                }),
                                e(n.value, n)
                            )),
                            ((r = new et({ check: "custom", ...V(void 0) }))._zod.check = n),
                            (t = r)
                        );
                    })(n),
                )),
            (e.overwrite = (n) => e.check(nE(n))),
            (e.optional = () => tE(e)),
            (e.exactOptional = () => new tT({ type: "optional", innerType: e })),
            (e.nullable = () => tM(e)),
            (e.nullish = () => tE(tM(e))),
            (e.nonoptional = (n) => new tC({ type: "nonoptional", innerType: e, ...V(n) })),
            (e.array = () =>
                (function (e) {
                    return new th({ type: "array", element: e, ...V(void 0) });
                })(e)),
            (e.or = (n) => new ty({ type: "union", options: [e, n], ...V(void 0) })),
            (e.and = (n) => new tg({ type: "intersection", left: e, right: n })),
            (e.transform = (n) => tD(e, new tz({ type: "transform", transform: n }))),
            (e.default = (n) => {
                var t, r;
                return (
                    (t = e),
                    (r = n),
                    new tO({
                        type: "default",
                        innerType: t,
                        get defaultValue() {
                            return "function" == typeof r ? r() : q(r);
                        },
                    })
                );
            }),
            (e.prefault = (n) => {
                var t, r;
                return (
                    (t = e),
                    (r = n),
                    new tL({
                        type: "prefault",
                        innerType: t,
                        get defaultValue() {
                            return "function" == typeof r ? r() : q(r);
                        },
                    })
                );
            }),
            (e.catch = (n) => {
                var t;
                return new tN({ type: "catch", innerType: e, catchValue: "function" == typeof (t = n) ? t : () => t });
            }),
            (e.pipe = (n) => tD(e, n)),
            (e.readonly = () => new tP({ type: "readonly", innerType: e })),
            (e.describe = (n) => {
                let t = e.clone();
                return (nv.add(t, { description: n }), t);
            }),
            Object.defineProperty(e, "description", { get: () => nv.get(e)?.description, configurable: !0 }),
            (e.meta = (...n) => {
                if (0 === n.length) return nv.get(e);
                let t = e.clone();
                return (nv.add(t, n[0]), t);
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (n) => n(e)),
            e
        ),
    ),
    nQ = a("_ZodString", (e, n) => {
        (eT.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) =>
                ((e, n, t) => {
                    t.type = "string";
                    let { minimum: r, maximum: a, format: i, patterns: s, contentEncoding: o } = e._zod.bag;
                    if (
                        ("number" == typeof r && (t.minLength = r),
                        "number" == typeof a && (t.maxLength = a),
                        i &&
                            ((t.format = nC[i] ?? i),
                            "" === t.format && delete t.format,
                            "time" === i && delete t.format),
                        o && (t.contentEncoding = o),
                        s && s.size > 0)
                    ) {
                        let e = [...s];
                        1 === e.length
                            ? (t.pattern = e[0].source)
                            : e.length > 1 &&
                              (t.allOf = [
                                  ...e.map((e) => ({
                                      ...("draft-07" === n.target ||
                                      "draft-04" === n.target ||
                                      "openapi-3.0" === n.target
                                          ? { type: "string" }
                                          : {}),
                                      pattern: e.source,
                                  })),
                              ]);
                    }
                })(e, n, t)));
        let t = e._zod.bag;
        ((e.format = t.format ?? null),
            (e.minLength = t.minimum ?? null),
            (e.maxLength = t.maximum ?? null),
            (e.regex = (...n) =>
                e.check(
                    (function (e, n) {
                        return new eo({ check: "string_format", format: "regex", ...V(n), pattern: e });
                    })(...n),
                )),
            (e.includes = (...n) =>
                e.check(
                    (function (e, n) {
                        return new ed({ check: "string_format", format: "includes", ...V(n), includes: e });
                    })(...n),
                )),
            (e.startsWith = (...n) =>
                e.check(
                    (function (e, n) {
                        return new ec({ check: "string_format", format: "starts_with", ...V(n), prefix: e });
                    })(...n),
                )),
            (e.endsWith = (...n) =>
                e.check(
                    (function (e, n) {
                        return new ef({ check: "string_format", format: "ends_with", ...V(n), suffix: e });
                    })(...n),
                )),
            (e.min = (...n) => e.check(nz(...n))),
            (e.max = (...n) => e.check(nS(...n))),
            (e.length = (...n) => e.check(nk(...n))),
            (e.nonempty = (...n) => e.check(nz(1, ...n))),
            (e.lowercase = (n) => e.check(new eu({ check: "string_format", format: "lowercase", ...V(n) }))),
            (e.uppercase = (n) => e.check(new el({ check: "string_format", format: "uppercase", ...V(n) }))),
            (e.trim = () => e.check(nE((e) => e.trim()))),
            (e.normalize = (...n) =>
                e.check(
                    (function (e) {
                        return nE((n) => n.normalize(e));
                    })(...n),
                )),
            (e.toLowerCase = () => e.check(nE((e) => e.toLowerCase()))),
            (e.toUpperCase = () => e.check(nE((e) => e.toUpperCase()))),
            (e.slugify = () =>
                e.check(
                    nE((e) =>
                        e
                            .toLowerCase()
                            .trim()
                            .replace(/[^\w\s-]/g, "")
                            .replace(/[\s_-]+/g, "-")
                            .replace(/^-+|-+$/g, ""),
                    ),
                )));
    }),
    nX = a("ZodString", (e, n) => {
        (eT.init(e, n),
            nQ.init(e, n),
            (e.email = (n) =>
                e.check(new n2({ type: "string", format: "email", check: "string_format", abort: !1, ...V(n) }))),
            (e.url = (n) =>
                e.check(new n9({ type: "string", format: "url", check: "string_format", abort: !1, ...V(n) }))),
            (e.jwt = (n) =>
                e.check(new td({ type: "string", format: "jwt", check: "string_format", abort: !1, ...V(n) }))),
            (e.emoji = (n) =>
                e.check(new n5({ type: "string", format: "emoji", check: "string_format", abort: !1, ...V(n) }))),
            (e.guid = (n) => e.check(nb(n4, n))),
            (e.uuid = (n) =>
                e.check(new n3({ type: "string", format: "uuid", check: "string_format", abort: !1, ...V(n) }))),
            (e.uuidv4 = (n) =>
                e.check(
                    new n3({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v4",
                        ...V(n),
                    }),
                )),
            (e.uuidv6 = (n) =>
                e.check(
                    new n3({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v6",
                        ...V(n),
                    }),
                )),
            (e.uuidv7 = (n) =>
                e.check(
                    new n3({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v7",
                        ...V(n),
                    }),
                )),
            (e.nanoid = (n) =>
                e.check(new n7({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...V(n) }))),
            (e.guid = (n) => e.check(nb(n4, n))),
            (e.cuid = (n) =>
                e.check(new n6({ type: "string", format: "cuid", check: "string_format", abort: !1, ...V(n) }))),
            (e.cuid2 = (n) =>
                e.check(new n8({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...V(n) }))),
            (e.ulid = (n) =>
                e.check(new te({ type: "string", format: "ulid", check: "string_format", abort: !1, ...V(n) }))),
            (e.base64 = (n) =>
                e.check(new to({ type: "string", format: "base64", check: "string_format", abort: !1, ...V(n) }))),
            (e.base64url = (n) =>
                e.check(new tu({ type: "string", format: "base64url", check: "string_format", abort: !1, ...V(n) }))),
            (e.xid = (n) =>
                e.check(new tn({ type: "string", format: "xid", check: "string_format", abort: !1, ...V(n) }))),
            (e.ksuid = (n) =>
                e.check(new tt({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...V(n) }))),
            (e.ipv4 = (n) =>
                e.check(new tr({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...V(n) }))),
            (e.ipv6 = (n) =>
                e.check(new ta({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...V(n) }))),
            (e.cidrv4 = (n) =>
                e.check(new ti({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...V(n) }))),
            (e.cidrv6 = (n) =>
                e.check(new ts({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...V(n) }))),
            (e.e164 = (n) =>
                e.check(new tl({ type: "string", format: "e164", check: "string_format", abort: !1, ...V(n) }))),
            (e.datetime = (n) =>
                e.check(
                    new nx({
                        type: "string",
                        format: "datetime",
                        check: "string_format",
                        offset: !1,
                        local: !1,
                        precision: null,
                        ...V(n),
                    }),
                )),
            (e.date = (n) => e.check(new nD({ type: "string", format: "date", check: "string_format", ...V(n) }))),
            (e.time = (n) =>
                e.check(new nP({ type: "string", format: "time", check: "string_format", precision: null, ...V(n) }))),
            (e.duration = (n) =>
                e.check(new nI({ type: "string", format: "duration", check: "string_format", ...V(n) }))));
    });
function n0(e) {
    return new nX({ type: "string", ...V(e) });
}
let n1 = a("ZodStringFormat", (e, n) => {
        (eA.init(e, n), nQ.init(e, n));
    }),
    n2 = a("ZodEmail", (e, n) => {
        (eL.init(e, n), n1.init(e, n));
    }),
    n4 = a("ZodGUID", (e, n) => {
        (eM.init(e, n), n1.init(e, n));
    }),
    n3 = a("ZodUUID", (e, n) => {
        (eO.init(e, n), n1.init(e, n));
    }),
    n9 = a("ZodURL", (e, n) => {
        (eC.init(e, n), n1.init(e, n));
    }),
    n5 = a("ZodEmoji", (e, n) => {
        (eN.init(e, n), n1.init(e, n));
    }),
    n7 = a("ZodNanoID", (e, n) => {
        (ex.init(e, n), n1.init(e, n));
    }),
    n6 = a("ZodCUID", (e, n) => {
        (eD.init(e, n), n1.init(e, n));
    }),
    n8 = a("ZodCUID2", (e, n) => {
        (eP.init(e, n), n1.init(e, n));
    }),
    te = a("ZodULID", (e, n) => {
        (eI.init(e, n), n1.init(e, n));
    }),
    tn = a("ZodXID", (e, n) => {
        (eZ.init(e, n), n1.init(e, n));
    }),
    tt = a("ZodKSUID", (e, n) => {
        (e$.init(e, n), n1.init(e, n));
    }),
    tr = a("ZodIPv4", (e, n) => {
        (eB.init(e, n), n1.init(e, n));
    }),
    ta = a("ZodIPv6", (e, n) => {
        (eU.init(e, n), n1.init(e, n));
    }),
    ti = a("ZodCIDRv4", (e, n) => {
        (eq.init(e, n), n1.init(e, n));
    }),
    ts = a("ZodCIDRv6", (e, n) => {
        (eH.init(e, n), n1.init(e, n));
    }),
    to = a("ZodBase64", (e, n) => {
        (eJ.init(e, n), n1.init(e, n));
    }),
    tu = a("ZodBase64URL", (e, n) => {
        (eV.init(e, n), n1.init(e, n));
    }),
    tl = a("ZodE164", (e, n) => {
        (eW.init(e, n), n1.init(e, n));
    }),
    td = a("ZodJWT", (e, n) => {
        (eY.init(e, n), n1.init(e, n));
    }),
    tc = a("ZodUnknown", (e, n) => {
        (eQ.init(e, n), nY.init(e, n), (e._zod.processJSONSchema = (e, n, t) => void 0));
    });
function tf() {
    return new tc({ type: "unknown" });
}
let t_ = a("ZodNever", (e, n) => {
        (eX.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (e, n, t) => {
                n.not = {};
            }));
    }),
    th = a("ZodArray", (e, n) => {
        (e1.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) =>
                ((e, n, t, r) => {
                    let a = e._zod.def,
                        { minimum: i, maximum: s } = e._zod.bag;
                    ("number" == typeof i && (t.minItems = i),
                        "number" == typeof s && (t.maxItems = s),
                        (t.type = "array"),
                        (t.items = nA(a.element, n, { ...r, path: [...r.path, "items"] })));
                })(e, n, t, r)),
            (e.element = n.element),
            (e.min = (n, t) => e.check(nz(n, t))),
            (e.nonempty = (n) => e.check(nz(1, n))),
            (e.max = (n, t) => e.check(nS(n, t))),
            (e.length = (n, t) => e.check(nk(n, t))),
            (e.unwrap = () => e.element));
    }),
    tp = a("ZodObject", (e, n) => {
        (e5.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) =>
                ((e, n, t, r) => {
                    let a = e._zod.def;
                    ((t.type = "object"), (t.properties = {}));
                    let i = a.shape;
                    for (let e in i) t.properties[e] = nA(i[e], n, { ...r, path: [...r.path, "properties", e] });
                    let s = new Set(
                        [...new Set(Object.keys(i))].filter((e) => {
                            let t = a.shape[e]._zod;
                            return "input" === n.io ? void 0 === t.optin : void 0 === t.optout;
                        }),
                    );
                    (s.size > 0 && (t.required = Array.from(s)),
                        a.catchall?._zod.def.type === "never"
                            ? (t.additionalProperties = !1)
                            : a.catchall
                              ? a.catchall &&
                                (t.additionalProperties = nA(a.catchall, n, {
                                    ...r,
                                    path: [...r.path, "additionalProperties"],
                                }))
                              : "output" === n.io && (t.additionalProperties = !1));
                })(e, n, t, r)),
            Z(e, "shape", () => n.shape),
            (e.keyof = () => tS(Object.keys(e._zod.def.shape))),
            (e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n })),
            (e.passthrough = () => e.clone({ ...e._zod.def, catchall: tf() })),
            (e.loose = () => e.clone({ ...e._zod.def, catchall: tf() })),
            (e.strict = () => e.clone({ ...e._zod.def, catchall: new t_({ type: "never", ...V(void 0) }) })),
            (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
            (e.extend = (n) =>
                (function (e, n) {
                    if (!U(n)) throw Error("Invalid input to extend: expected a plain object");
                    let t = e._zod.def.checks;
                    if (t && t.length > 0) {
                        let t = e._zod.def.shape;
                        for (let e in n)
                            if (void 0 !== Object.getOwnPropertyDescriptor(t, e))
                                throw Error(
                                    "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                                );
                    }
                    let r = G(e._zod.def, {
                        get shape() {
                            let t = { ...e._zod.def.shape, ...n };
                            return ($(this, "shape", t), t);
                        },
                    });
                    return J(e, r);
                })(e, n)),
            (e.safeExtend = (n) =>
                (function (e, n) {
                    if (!U(n)) throw Error("Invalid input to safeExtend: expected a plain object");
                    let t = G(e._zod.def, {
                        get shape() {
                            let t = { ...e._zod.def.shape, ...n };
                            return ($(this, "shape", t), t);
                        },
                    });
                    return J(e, t);
                })(e, n)),
            (e.merge = (n) => {
                let t;
                return (
                    (t = G(e._zod.def, {
                        get shape() {
                            let t = { ...e._zod.def.shape, ...n._zod.def.shape };
                            return ($(this, "shape", t), t);
                        },
                        get catchall() {
                            return n._zod.def.catchall;
                        },
                        checks: [],
                    })),
                    J(e, t)
                );
            }),
            (e.pick = (n) =>
                (function (e, n) {
                    let t = e._zod.def,
                        r = t.checks;
                    if (r && r.length > 0)
                        throw Error(".pick() cannot be used on object schemas containing refinements");
                    let a = G(e._zod.def, {
                        get shape() {
                            let e = {};
                            for (let r in n) {
                                if (!(r in t.shape)) throw Error(`Unrecognized key: "${r}"`);
                                n[r] && (e[r] = t.shape[r]);
                            }
                            return ($(this, "shape", e), e);
                        },
                        checks: [],
                    });
                    return J(e, a);
                })(e, n)),
            (e.omit = (n) =>
                (function (e, n) {
                    let t = e._zod.def,
                        r = t.checks;
                    if (r && r.length > 0)
                        throw Error(".omit() cannot be used on object schemas containing refinements");
                    let a = G(e._zod.def, {
                        get shape() {
                            let r = { ...e._zod.def.shape };
                            for (let e in n) {
                                if (!(e in t.shape)) throw Error(`Unrecognized key: "${e}"`);
                                n[e] && delete r[e];
                            }
                            return ($(this, "shape", r), r);
                        },
                        checks: [],
                    });
                    return J(e, a);
                })(e, n)),
            (e.partial = (...n) =>
                (function (e, n, t) {
                    let r = n._zod.def.checks;
                    if (r && r.length > 0)
                        throw Error(".partial() cannot be used on object schemas containing refinements");
                    let a = G(n._zod.def, {
                        get shape() {
                            let r = n._zod.def.shape,
                                a = { ...r };
                            if (t)
                                for (let n in t) {
                                    if (!(n in r)) throw Error(`Unrecognized key: "${n}"`);
                                    t[n] && (a[n] = e ? new e({ type: "optional", innerType: r[n] }) : r[n]);
                                }
                            else for (let n in r) a[n] = e ? new e({ type: "optional", innerType: r[n] }) : r[n];
                            return ($(this, "shape", a), a);
                        },
                        checks: [],
                    });
                    return J(n, a);
                })(tk, e, n[0])),
            (e.required = (...n) => {
                var t;
                let r;
                return (
                    (t = n[0]),
                    (r = G(e._zod.def, {
                        get shape() {
                            let n = e._zod.def.shape,
                                r = { ...n };
                            if (t)
                                for (let e in t) {
                                    if (!(e in r)) throw Error(`Unrecognized key: "${e}"`);
                                    t[e] && (r[e] = new tC({ type: "nonoptional", innerType: n[e] }));
                                }
                            else for (let e in n) r[e] = new tC({ type: "nonoptional", innerType: n[e] });
                            return ($(this, "shape", r), r);
                        },
                    })),
                    J(e, r)
                );
            }));
    });
function tm(e, n) {
    return new tp({ type: "object", shape: e ?? {}, ...V(n) });
}
let ty = a("ZodUnion", (e, n) => {
        (e6.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a, i, s;
                return (
                    (i = !1 === (a = e._zod.def).inclusive),
                    (s = a.options.map((e, t) => nA(e, n, { ...r, path: [...r.path, i ? "oneOf" : "anyOf", t] }))),
                    void (i ? (t.oneOf = s) : (t.anyOf = s))
                );
            }),
            (e.options = n.options));
    }),
    tg = a("ZodIntersection", (e, n) => {
        (e8.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a, i, s, o;
                return (
                    (i = nA((a = e._zod.def).left, n, { ...r, path: [...r.path, "allOf", 0] })),
                    (s = nA(a.right, n, { ...r, path: [...r.path, "allOf", 1] })),
                    void (t.allOf = [
                        ...((o = (e) => "allOf" in e && 1 === Object.keys(e).length)(i) ? i.allOf : [i]),
                        ...(o(s) ? s.allOf : [s]),
                    ])
                );
            }));
    }),
    tw = a("ZodRecord", (e, n) => {
        (nn.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) =>
                ((e, n, t, r) => {
                    let a = e._zod.def;
                    t.type = "object";
                    let i = a.keyType,
                        s = i._zod.bag,
                        o = s?.patterns;
                    if ("loose" === a.mode && o && o.size > 0) {
                        let e = nA(a.valueType, n, { ...r, path: [...r.path, "patternProperties", "*"] });
                        for (let n of ((t.patternProperties = {}), o)) t.patternProperties[n.source] = e;
                    } else
                        (("draft-07" === n.target || "draft-2020-12" === n.target) &&
                            (t.propertyNames = nA(a.keyType, n, { ...r, path: [...r.path, "propertyNames"] })),
                            (t.additionalProperties = nA(a.valueType, n, {
                                ...r,
                                path: [...r.path, "additionalProperties"],
                            })));
                    let u = i._zod.values;
                    if (u) {
                        let e = [...u].filter((e) => "string" == typeof e || "number" == typeof e);
                        e.length > 0 && (t.required = e);
                    }
                })(e, n, t, r)),
            (e.keyType = n.keyType),
            (e.valueType = n.valueType));
    });
function tv(e, n, t) {
    let r = J(e);
    return ((r._zod.values = void 0), new tw({ type: "record", keyType: r, valueType: n, ...V(t) }));
}
let tb = a("ZodEnum", (e, n) => {
    (nt.init(e, n),
        nY.init(e, n),
        (e._zod.processJSONSchema = (n, t, r) => {
            let a;
            ((a = N(e._zod.def.entries)).every((e) => "number" == typeof e) && (t.type = "number"),
                a.every((e) => "string" == typeof e) && (t.type = "string"),
                (t.enum = a));
        }),
        (e.enum = n.entries),
        (e.options = Object.values(n.entries)));
    let t = new Set(Object.keys(n.entries));
    ((e.extract = (e, r) => {
        let a = {};
        for (let r of e)
            if (t.has(r)) a[r] = n.entries[r];
            else throw Error(`Key ${r} not found in enum`);
        return new tb({ ...n, checks: [], ...V(r), entries: a });
    }),
        (e.exclude = (e, r) => {
            let a = { ...n.entries };
            for (let n of e)
                if (t.has(n)) delete a[n];
                else throw Error(`Key ${n} not found in enum`);
            return new tb({ ...n, checks: [], ...V(r), entries: a });
        }));
});
function tS(e, n) {
    return new tb({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...V(n) });
}
let tz = a("ZodTransform", (e, n) => {
        (nr.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (e, n, t) =>
                ((e) => {
                    if ("throw" === e.unrepresentable) throw Error("Transforms cannot be represented in JSON Schema");
                })(e)),
            (e._zod.parse = (t, r) => {
                if ("backward" === r.direction) throw new s(e.constructor.name);
                t.addIssue = (r) => {
                    "string" == typeof r
                        ? t.issues.push(en(r, t.value, n))
                        : (r.fatal && (r.continue = !1),
                          r.code ?? (r.code = "custom"),
                          r.input ?? (r.input = t.value),
                          r.inst ?? (r.inst = e),
                          t.issues.push(en(r)));
                };
                let a = n.transform(t.value, t);
                return a instanceof Promise ? a.then((e) => ((t.value = e), t)) : ((t.value = a), t);
            }));
    }),
    tk = a("ZodOptional", (e, n) => {
        (ni.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => nN(e, n, t, r)),
            (e.unwrap = () => e._zod.def.innerType));
    });
function tE(e) {
    return new tk({ type: "optional", innerType: e });
}
let tT = a("ZodExactOptional", (e, n) => {
        (ns.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => nN(e, n, t, r)),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    tA = a("ZodNullable", (e, n) => {
        (no.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a, i, s;
                return (
                    (i = nA((a = e._zod.def).innerType, n, r)),
                    (s = n.seen.get(e)),
                    void ("openapi-3.0" === n.target
                        ? ((s.ref = a.innerType), (t.nullable = !0))
                        : (t.anyOf = [i, { type: "null" }]))
                );
            }),
            (e.unwrap = () => e._zod.def.innerType));
    });
function tM(e) {
    return new tA({ type: "nullable", innerType: e });
}
let tO = a("ZodDefault", (e, n) => {
        (nu.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a;
                (nA((a = e._zod.def).innerType, n, r),
                    (n.seen.get(e).ref = a.innerType),
                    (t.default = JSON.parse(JSON.stringify(a.defaultValue))));
            }),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap));
    }),
    tL = a("ZodPrefault", (e, n) => {
        (nd.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a;
                (nA((a = e._zod.def).innerType, n, r),
                    (n.seen.get(e).ref = a.innerType),
                    "input" === n.io && (t._prefault = JSON.parse(JSON.stringify(a.defaultValue))));
            }),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    tC = a("ZodNonOptional", (e, n) => {
        (nc.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a;
                (nA((a = e._zod.def).innerType, n, r), (n.seen.get(e).ref = a.innerType));
            }),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    tN = a("ZodCatch", (e, n) => {
        (n_.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) =>
                ((e, n, t, r) => {
                    let a,
                        i = e._zod.def;
                    (nA(i.innerType, n, r), (n.seen.get(e).ref = i.innerType));
                    try {
                        a = i.catchValue(void 0);
                    } catch {
                        throw Error("Dynamic catch values are not supported in JSON Schema");
                    }
                    t.default = a;
                })(e, n, t, r)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap));
    }),
    tx = a("ZodPipe", (e, n) => {
        (nh.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a, i;
                return (
                    (a = e._zod.def),
                    void (nA(
                        (i = "input" === n.io ? ("transform" === a.in._zod.def.type ? a.out : a.in) : a.out),
                        n,
                        r,
                    ),
                    (n.seen.get(e).ref = i))
                );
            }),
            (e.in = n.in),
            (e.out = n.out));
    });
function tD(e, n) {
    return new tx({ type: "pipe", in: e, out: n });
}
let tP = a("ZodReadonly", (e, n) => {
        (nm.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (n, t, r) => {
                let a;
                (nA((a = e._zod.def).innerType, n, r), (n.seen.get(e).ref = a.innerType), (t.readOnly = !0));
            }),
            (e.unwrap = () => e._zod.def.innerType));
    }),
    tI = a("ZodCustom", (e, n) => {
        (ng.init(e, n),
            nY.init(e, n),
            (e._zod.processJSONSchema = (e, n, t) =>
                ((e) => {
                    if ("throw" === e.unrepresentable) throw Error("Custom types cannot be represented in JSON Schema");
                })(e)));
    });
