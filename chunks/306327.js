"use strict";
let a;
function n(e, t) {
    let r = e.length;
    Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((e) => [e]));
    let a = t[0].length,
        n = t[0].map((e, r) => t.map((e) => e[r])),
        o = e.map((e) =>
            n.map((t) => {
                let r = 0;
                if (!Array.isArray(e)) {
                    for (let a of t) r += e * a;
                    return r;
                }
                for (let a = 0; a < e.length; a++) r += e[a] * (t[a] || 0);
                return r;
            }),
        );
    return (1 === r && (o = o[0]), 1 === a) ? o.map((e) => e[0]) : o;
}
function o(e) {
    return "string" === s(e);
}
function s(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function i(e, { precision: t, unit: r }) {
    return c(e) ? "none" : u(e, t) + (r ?? "");
}
function c(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function l(e) {
    return c(e) ? 0 : e;
}
function u(e, t) {
    if (0 === e) return 0;
    let r = ~~e,
        a = 0;
    r && t && (a = ~~Math.log10(Math.abs(r)) + 1);
    let n = 10 ** (t - a);
    return Math.floor(e * n + 0.5) / n;
}
r.d(t, { A: () => rb });
let f = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function b(e) {
    if (!e) return;
    e = e.trim();
    let t = /^-?[\d.]+$/,
        r = /%|deg|g?rad|turn$/,
        a = e.match(/^([a-z]+)\((.+?)\)$/i);
    if (a) {
        let e = [];
        return (
            a[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g, (a, n) => {
                let o = n.match(r),
                    s = n;
                if (o) {
                    let e = o[0],
                        t = s.slice(0, -e.length);
                    "%" === e
                        ? ((s = new Number(t / 100)).type = "<percentage>")
                        : (((s = new Number(t * f[e])).type = "<angle>"), (s.unit = e));
                } else
                    t.test(s)
                        ? ((s = new Number(s)).type = "<number>")
                        : "none" === s && ((s = new Number(NaN)).none = !0);
                a.startsWith("/") && ((s = s instanceof Number ? s : new Number(s)).alpha = !0),
                    "object" == typeof s && s instanceof Number && (s.raw = n),
                    e.push(s);
            }),
            { name: a[1].toLowerCase(), rawName: a[1], rawArgs: a[2], args: e }
        );
    }
}
function d(e) {
    return e[e.length - 1];
}
function h(e, t, r) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function p(e, t, r) {
    return (r - e) / (t - e);
}
function m(e, t, r) {
    return h(t[0], t[1], p(e[0], e[1], r));
}
function g(e) {
    return e.map((e) =>
        e.split("|").map((e) => {
            let t = (e = e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (t) {
                let e = new String(t[1]);
                return (e.range = [+t[2], +t[3]]), e;
            }
            return e;
        }),
    );
}
function y(e, t, r) {
    return Math.max(Math.min(r, t), e);
}
function v(e, t) {
    return Math.sign(e) === Math.sign(t) ? e : -e;
}
function w(e, t) {
    return v(Math.abs(e) ** t, e);
}
function M(e, t) {
    return 0 === t ? 0 : e / t;
}
function A(e, t, r = 0, a = e.length) {
    for (; r < a; ) {
        let n = (r + a) >> 1;
        e[n] < t ? (r = n + 1) : (a = n);
    }
    return r;
}
var O = Object.freeze({
    __proto__: null,
    bisectLeft: A,
    clamp: y,
    copySign: v,
    interpolate: h,
    interpolateInv: p,
    isNone: c,
    isString: o,
    last: d,
    mapRange: m,
    multiplyMatrices: n,
    parseCoordGrammar: g,
    parseFunction: b,
    serializeNumber: i,
    skipNone: l,
    spow: w,
    toPrecision: u,
    type: s,
    zdiv: M,
});
let k = new (class {
    add(e, t, r) {
        if ("string" != typeof arguments[0]) {
            for (var e in arguments[0]) this.add(e, arguments[0][e], arguments[1]);
            return;
        }
        (Array.isArray(e) ? e : [e]).forEach(function (e) {
            (this[e] = this[e] || []), t && this[e][r ? "unshift" : "push"](t);
        }, this);
    }
    run(e, t) {
        (this[e] = this[e] || []),
            this[e].forEach(function (e) {
                e.call(t && t.context ? t.context : t, t);
            });
    }
})();
var C = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function (e) {
        this.verbose && globalThis?.console?.warn?.(e);
    },
};
let E = { D50: [0.3457 / 0.3585, 1, 0.8251046025104602], D65: [0.3127 / 0.329, 1, 1.0890577507598784] };
function x(e) {
    return Array.isArray(e) ? e : E[e];
}
function R(e, t, r, a = {}) {
    if (((e = x(e)), (t = x(t)), !e || !t))
        throw TypeError(`Missing white point to convert ${!e ? "from" : ""}${!e && !t ? "/" : ""}${!t ? "to" : ""}`);
    if (e === t) return r;
    let o = { W1: e, W2: t, XYZ: r, options: a };
    if (
        (k.run("chromatic-adaptation-start", o),
        o.M ||
            (o.W1 === E.D65 && o.W2 === E.D50
                ? (o.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371],
                  ])
                : o.W1 === E.D50 &&
                  o.W2 === E.D65 &&
                  (o.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124],
                  ])),
        k.run("chromatic-adaptation-end", o),
        o.M)
    )
        return n(o.M, o.XYZ);
    throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
let _ = new Set(["<number>", "<percentage>", "<angle>"]);
function j(e, t, r, a) {
    return Object.entries(e.coords).map(([e, n], o) => {
        let s,
            i = t.coordGrammar[o],
            c = a[o],
            l = c?.type;
        if (!(s = c.none ? i.find((e) => _.has(e)) : i.find((e) => e == l))) {
            let t = n.name || e;
            throw TypeError(`${l ?? c.raw} not allowed for ${t} in ${r}()`);
        }
        let u = s.range;
        "<percentage>" === l && (u ||= [0, 1]);
        let f = n.range || n.refRange;
        return u && f && (a[o] = m(u, f, a[o])), s;
    });
}
function S(e, { meta: t } = {}) {
    let r = { str: String(e)?.trim() };
    if ((k.run("parse-start", r), r.color)) return r.color;
    if (((r.parsed = b(r.str)), r.parsed)) {
        let e = r.parsed.name;
        if ("color" === e) {
            let e = r.parsed.args.shift(),
                a = e.startsWith("--") ? e.substring(2) : `--${e}`,
                n = [e, a],
                o = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1;
            for (let a of B.all) {
                let s = a.getFormat("color");
                if (s && (n.includes(s.id) || s.ids?.filter((e) => n.includes(e)).length)) {
                    let n,
                        i = Object.keys(a.coords).map((e, t) => r.parsed.args[t] || 0);
                    return (
                        s.coordGrammar && (n = j(a, s, "color", i)),
                        t && Object.assign(t, { formatId: "color", types: n }),
                        s.id.startsWith("--") &&
                            !e.startsWith("--") &&
                            C.warn(
                                `${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${e}).`,
                            ),
                        e.startsWith("--") &&
                            !s.id.startsWith("--") &&
                            C.warn(
                                `${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${e}).`,
                            ),
                        { spaceId: a.id, coords: i, alpha: o }
                    );
                }
            }
            let s = "",
                i = e in B.registry ? e : a;
            if (i in B.registry) {
                let e = B.registry[i].formats?.color?.id;
                e && (s = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (s || "Missing a plugin?"));
        }
        for (let a of B.all) {
            let n = a.getFormat(e);
            if (n && "function" === n.type) {
                let o,
                    s = 1;
                (n.lastAlpha || d(r.parsed.args).alpha) && (s = r.parsed.args.pop());
                let i = r.parsed.args;
                return (
                    n.coordGrammar && (o = j(a, n, e, i)),
                    t && Object.assign(t, { formatId: n.name, types: o }),
                    { spaceId: a.id, coords: i, alpha: s }
                );
            }
        }
    } else
        for (let e of B.all)
            for (let a in e.formats) {
                let n = e.formats[a];
                if ("custom" !== n.type || (n.test && !n.test(r.str))) continue;
                let o = n.parse(r.str);
                if (o) return (o.alpha ??= 1), t && (t.formatId = a), o;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function N(e) {
    if (Array.isArray(e)) return e.map(N);
    if (!e) throw TypeError("Empty color reference");
    o(e) && (e = S(e));
    let t = e.space || e.spaceId;
    return t instanceof B || (e.space = B.get(t)), void 0 === e.alpha && (e.alpha = 1), e;
}
class B {
    constructor(e) {
        (this.id = e.id),
            (this.name = e.name),
            (this.base = e.base ? B.get(e.base) : null),
            (this.aliases = e.aliases),
            this.base && ((this.fromBase = e.fromBase), (this.toBase = e.toBase));
        let t = e.coords ?? this.base.coords;
        for (let e in t) "name" in t[e] || (t[e].name = e);
        this.coords = t;
        let r = e.white ?? this.base.white ?? "D65";
        for (let t in ((this.white = x(r)), (this.formats = e.formats ?? {}), this.formats)) {
            let e = this.formats[t];
            (e.type ||= "function"), (e.name ||= t);
        }
        this.formats.color?.id || (this.formats.color = { ...(this.formats.color ?? {}), id: e.cssId || this.id }),
            e.gamutSpace
                ? (this.gamutSpace = "self" === e.gamutSpace ? this : B.get(e.gamutSpace))
                : this.isPolar
                  ? (this.gamutSpace = this.base)
                  : (this.gamutSpace = this),
            this.gamutSpace.isUnbounded && (this.inGamut = (e, t) => !0),
            (this.referred = e.referred),
            Object.defineProperty(this, "path", {
                value: (function (e) {
                    let t = [e];
                    for (let r = e; (r = r.base); ) t.push(r);
                    return t;
                })(this).reverse(),
                writable: !1,
                enumerable: !0,
                configurable: !0,
            }),
            k.run("colorspace-init-end", this);
    }
    inGamut(e, { epsilon: t = 75e-6 } = {}) {
        if (!this.equals(this.gamutSpace))
            return (e = this.to(this.gamutSpace, e)), this.gamutSpace.inGamut(e, { epsilon: t });
        let r = Object.values(this.coords);
        return e.every((e, a) => {
            let n = r[a];
            if ("angle" !== n.type && n.range) {
                if (Number.isNaN(e)) return !0;
                let [r, a] = n.range;
                return (void 0 === r || e >= r - t) && (void 0 === a || e <= a + t);
            }
            return !0;
        });
    }
    get isUnbounded() {
        return Object.values(this.coords).every((e) => !("range" in e));
    }
    get cssId() {
        return this.formats?.color?.id || this.id;
    }
    get isPolar() {
        for (let e in this.coords) if ("angle" === this.coords[e].type) return !0;
        return !1;
    }
    getFormat(e) {
        let t;
        return "object" == typeof e
            ? (e = P(e, this))
            : (t = "default" === e ? Object.values(this.formats)[0] : this.formats[e])
              ? (t = P(t, this))
              : null;
    }
    equals(e) {
        return !!e && (this === e || this.id === e || this.id === e.id);
    }
    to(e, t) {
        let r, a;
        if (1 == arguments.length) {
            let r = N(e);
            [e, t] = [r.space, r.coords];
        }
        if (((e = B.get(e)), this.equals(e))) return t;
        t = t.map((e) => (Number.isNaN(e) ? 0 : e));
        let n = this.path,
            o = e.path;
        for (let e = 0; e < n.length; e++)
            if (n[e].equals(o[e])) (r = n[e]), (a = e);
            else break;
        if (!r) throw Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
        for (let e = n.length - 1; e > a; e--) t = n[e].toBase(t);
        for (let e = a + 1; e < o.length; e++) t = o[e].fromBase(t);
        return t;
    }
    from(e, t) {
        if (1 == arguments.length) {
            let r = N(e);
            [e, t] = [r.space, r.coords];
        }
        return (e = B.get(e)).to(this, t);
    }
    toString() {
        return `${this.name} (${this.id})`;
    }
    getMinCoords() {
        let e = [];
        for (let t in this.coords) {
            let r = this.coords[t],
                a = r.range || r.refRange;
            e.push(a?.min ?? 0);
        }
        return e;
    }
    static registry = {};
    static get all() {
        return [...new Set(Object.values(B.registry))];
    }
    static register(e, t) {
        if (
            (1 == arguments.length && ((t = arguments[0]), (e = t.id)),
            (t = this.get(t)),
            this.registry[e] && this.registry[e] !== t)
        )
            throw Error(`Duplicate color space registration: '${e}'`);
        if (((this.registry[e] = t), 1 == arguments.length && t.aliases)) for (let e of t.aliases) this.register(e, t);
        return t;
    }
    static get(e, ...t) {
        if (!e || e instanceof B) return e;
        if ("string" === s(e)) {
            let t = B.registry[e.toLowerCase()];
            if (!t) throw TypeError(`No color space found with id = "${e}"`);
            return t;
        }
        if (t.length) return B.get(...t);
        throw TypeError(`${e} is not a valid color space`);
    }
    static resolveCoord(e, t) {
        let r,
            a,
            n = s(e);
        if (
            ("string" === n
                ? e.includes(".")
                    ? ([r, a] = e.split("."))
                    : ([r, a] = [, e])
                : Array.isArray(e)
                  ? ([r, a] = e)
                  : ((r = e.space), (a = e.coordId)),
            (r = B.get(r)) || (r = t),
            !r)
        )
            throw TypeError(
                `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
        if ("number" === (n = s(a)) || ("string" === n && a >= 0)) {
            let e = Object.entries(r.coords)[a];
            if (e) return { space: r, id: e[0], index: a, ...e[1] };
        }
        r = B.get(r);
        let o = a.toLowerCase(),
            i = 0;
        for (let e in r.coords) {
            let t = r.coords[e];
            if (e.toLowerCase() === o || t.name?.toLowerCase() === o) return { space: r, id: e, index: i, ...t };
            i++;
        }
        throw TypeError(
            `No "${a}" coordinate found in ${r.name}. Its coordinates are: ${Object.keys(r.coords).join(", ")}`,
        );
    }
    static DEFAULT_FORMAT = { type: "functions", name: "color" };
}
function P(e, { coords: t } = {}) {
    if (e.coords && !e.coordGrammar) {
        (e.type ||= "function"), (e.name ||= "color"), (e.coordGrammar = g(e.coords));
        let r = Object.entries(t).map(([t, r], a) => {
            let n = e.coordGrammar[a][0],
                o = r.range || r.refRange,
                s = n.range,
                i = "";
            return (
                "<percentage>" == n ? ((s = [0, 100]), (i = "%")) : "<angle>" == n && (i = "deg"),
                { fromRange: o, toRange: s, suffix: i }
            );
        });
        e.serializeCoords = (e, t) =>
            e.map((e, a) => {
                let { fromRange: n, toRange: o, suffix: s } = r[a];
                return n && o && (e = m(n, o, e)), (e = i(e, { precision: t, unit: s }));
            });
    }
    return e;
}
var D = new B({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
    white: "D65",
    formats: { color: { ids: ["xyz-d65", "xyz"] } },
    aliases: ["xyz"],
});
class I extends B {
    constructor(e) {
        e.coords ||
            (e.coords = {
                r: { range: [0, 1], name: "Red" },
                g: { range: [0, 1], name: "Green" },
                b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = D),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (t) => {
                    let r = n(e.toXYZ_M, t);
                    return this.white !== this.base.white && (r = R(this.white, this.base.white, r)), r;
                }),
                (e.fromBase ??= (t) => ((t = R(this.base.white, this.white, t)), n(e.fromXYZ_M, t)))),
            (e.referred ??= "display"),
            super(e);
    }
}
function T(e, t) {
    return ((e = N(e)), !t || e.space.equals(t)) ? e.coords.slice() : (t = B.get(t)).from(e);
}
function L(e, t) {
    e = N(e);
    let { space: r, index: a } = B.resolveCoord(t, e.space);
    return T(e, r)[a];
}
function F(e, t, r) {
    return (e = N(e)), (t = B.get(t)), (e.coords = t.to(e.space, r)), e;
}
function z(e, t, r) {
    if (((e = N(e)), 2 == arguments.length && "object" === s(arguments[1]))) {
        let t = arguments[1];
        for (let r in t) z(e, r, t[r]);
    } else {
        "function" == typeof r && (r = r(L(e, t)));
        let { space: a, index: n } = B.resolveCoord(t, e.space),
            o = T(e, a);
        (o[n] = r), F(e, a, o);
    }
    return e;
}
(F.returns = "color"), (z.returns = "color");
var q = new B({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: D,
    fromBase: (e) => R(D.white, "D50", e),
    toBase: (e) => R("D50", D.white, e),
});
let $ = 216 / 24389,
    U = 24 / 116,
    W = 24389 / 27,
    G = E.D50;
var H = new B({
    id: "lab",
    name: "Lab",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: G,
    base: q,
    fromBase(e) {
        let t = e.map((e, t) => e / G[t]).map((e) => (e > $ ? Math.cbrt(e) : (W * e + 16) / 116));
        return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
    },
    toBase(e) {
        let t = [];
        return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
                t[0] > U ? Math.pow(t[0], 3) : (116 * t[0] - 16) / W,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / W,
                t[2] > U ? Math.pow(t[2], 3) : (116 * t[2] - 16) / W,
            ].map((e, t) => e * G[t])
        );
    },
    formats: {
        lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] },
    },
});
function Z(e) {
    return ((e % 360) + 360) % 360;
}
var Y = new B({
    id: "lch",
    name: "LCH",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        c: { refRange: [0, 150], name: "Chroma" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: H,
    fromBase(e) {
        let t,
            [r, a, n] = e;
        return (
            (t = 0.02 > Math.abs(a) && 0.02 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
            [r, Math.sqrt(a ** 2 + n ** 2), Z(t)]
        );
    },
    toBase(e) {
        let [t, r, a] = e;
        return (
            r < 0 && (r = 0),
            isNaN(a) && (a = 0),
            [t, r * Math.cos((a * Math.PI) / 180), r * Math.sin((a * Math.PI) / 180)]
        );
    },
    formats: { lch: { coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"] } },
});
let X = Math.PI,
    J = 180 / X,
    V = X / 180;
function K(e) {
    let t = e * e;
    return t * t * t * e;
}
function Q(e, t, { kL: r = 1, kC: a = 1, kH: n = 1 } = {}) {
    let o, s;
    [e, t] = N([e, t]);
    let [i, c, l] = H.from(e),
        u = Y.from(H, [i, c, l])[1],
        [f, b, d] = H.from(t),
        h = Y.from(H, [f, b, d])[1];
    u < 0 && (u = 0), h < 0 && (h = 0);
    let p = K((u + h) / 2),
        m = 0.5 * (1 - Math.sqrt(p / (p + 0x16bcc41e9))),
        g = (1 + m) * c,
        y = (1 + m) * b,
        v = Math.sqrt(g ** 2 + l ** 2),
        w = Math.sqrt(y ** 2 + d ** 2),
        M = 0 === g && 0 === l ? 0 : Math.atan2(l, g),
        A = 0 === y && 0 === d ? 0 : Math.atan2(d, y);
    M < 0 && (M += 2 * X), A < 0 && (A += 2 * X), (M *= J);
    let O = f - i,
        k = w - v,
        E = (A *= J) - M,
        x = M + A,
        R = Math.abs(E);
    v * w == 0
        ? (o = 0)
        : R <= 180
          ? (o = E)
          : E > 180
            ? (o = E - 360)
            : E < -180
              ? (o = E + 360)
              : C.warn("the unthinkable has happened");
    let _ = 2 * Math.sqrt(w * v) * Math.sin((o * V) / 2),
        j = (i + f) / 2,
        S = (v + w) / 2,
        B = K(S),
        P = (j - 50) ** 2,
        D = 1 + (0.015 * P) / Math.sqrt(20 + P),
        I = 1 + 0.045 * S,
        T =
            1 +
            0.015 *
                S *
                (1 -
                    0.17 *
                        Math.cos(
                            ((s = v * w == 0 ? x : R <= 180 ? x / 2 : x < 360 ? (x + 360) / 2 : (x - 360) / 2) - 30) *
                                V,
                        ) +
                    0.24 * Math.cos(2 * s * V) +
                    0.32 * Math.cos((3 * s + 6) * V) -
                    0.2 * Math.cos((4 * s - 63) * V)),
        L = (O / (r * D)) ** 2;
    return Math.sqrt(
        (L +=
            (k / (a * I)) ** 2 +
            (_ / (n * T)) ** 2 +
            (k / (a * I)) *
                (-1 *
                    Math.sin(2 * (30 * Math.exp(-1 * ((s - 275) / 25) ** 2)) * V) *
                    (2 * Math.sqrt(B / (B + 0x16bcc41e9)))) *
                (_ / (n * T))),
    );
}
let ee = [
        [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
        [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
        [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
    ],
    et = [
        [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
        [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
        [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
    ],
    er = [
        [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
        [1.9779985324311684, -2.42859224204858, 0.450593709617411],
        [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
    ],
    ea = [
        [1, 0.3963377773761749, 0.2158037573099136],
        [1, -0.1055613458156586, -0.0638541728258133],
        [1, -0.0894841775298119, -1.2914855480194092],
    ];
var en = new B({
    id: "oklab",
    name: "Oklab",
    coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } },
    white: "D65",
    base: D,
    fromBase(e) {
        let t = n(ee, e).map((e) => Math.cbrt(e));
        return n(er, t);
    },
    toBase(e) {
        let t = n(ea, e).map((e) => e ** 3);
        return n(et, t);
    },
    formats: {
        oklab: {
            coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
        },
    },
});
function eo(e, t) {
    [e, t] = N([e, t]);
    let [r, a, n] = en.from(e),
        [o, s, i] = en.from(t);
    return Math.sqrt((r - o) ** 2 + (a - s) ** 2 + (n - i) ** 2);
}
function es(e, t, { epsilon: r = 75e-6 } = {}) {
    (e = N(e)), t || (t = e.space), (t = B.get(t));
    let a = e.coords;
    return t !== e.space && (a = t.from(e)), t.inGamut(a, { epsilon: r });
}
function ei(e) {
    return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function ec(e, t, r = "lab") {
    let a = (r = B.get(r)).from(e),
        n = r.from(t);
    return Math.sqrt(
        a.reduce((e, t, r) => {
            let a = n[r];
            return isNaN(t) || isNaN(a) ? e : e + (a - t) ** 2;
        }, 0),
    );
}
let el = Math.PI / 180;
var eu = new B({
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
        x: { refRange: [0, 9504.7], name: "Xa" },
        y: { refRange: [0, 1e4], name: "Ya" },
        z: { refRange: [0, 10888.3], name: "Za" },
    },
    base: D,
    fromBase: (e) => e.map((e) => Math.max(203 * e, 0)),
    toBase: (e) => e.map((e) => Math.max(e / 203, 0)),
});
let ef = 2610 / 16384,
    eb = 16384 / 2610,
    ed = (1.7 * 2523) / 32,
    eh = 32 / (1.7 * 2523),
    ep = [
        [0.41478972, 0.579999, 0.014648],
        [-0.20151, 1.120649, 0.0531008],
        [-0.0166008, 0.2648, 0.6684799],
    ],
    em = [
        [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
        [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
        [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603],
    ],
    eg = [
        [0.5, 0.5, 0],
        [3.524, -4.066708, 0.542708],
        [0.199076, 1.096799, -1.295875],
    ],
    ey = [
        [1, 0.1386050432715393, 0.05804731615611886],
        [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
        [0.9999999999999998, -0.09601924202631895, -0.8118918960560388],
    ];
var ev = new B({
        id: "jzazbz",
        name: "Jzazbz",
        coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } },
        base: eu,
        fromBase(e) {
            let [t, r, a] = e,
                o = n(ep, [1.15 * t - (1.15 - 1) * a, 0.66 * r - (0.66 - 1) * t, a]).map(function (e) {
                    return ((0.8359375 + 18.8515625 * (e / 1e4) ** ef) / (1 + 18.6875 * (e / 1e4) ** ef)) ** ed;
                }),
                [s, i, c] = n(eg, o);
            return [(0.43999999999999995 * s) / (1 + -0.56 * s) - 16295499532821565e-27, i, c];
        },
        toBase(e) {
            let [t, r, a] = e,
                o = n(ey, [
                    (t + 16295499532821565e-27) / (0.43999999999999995 - -0.56 * (t + 16295499532821565e-27)),
                    r,
                    a,
                ]).map(function (e) {
                    return 1e4 * ((0.8359375 - e ** eh) / (18.6875 * e ** eh - 18.8515625)) ** eb;
                }),
                [s, i, c] = n(em, o),
                l = (s + (1.15 - 1) * c) / 1.15;
            return [l, (i + (0.66 - 1) * l) / 0.66, c];
        },
        formats: {
            color: {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    ew = new B({
        id: "jzczhz",
        name: "JzCzHz",
        coords: {
            jz: { refRange: [0, 1], name: "Jz" },
            cz: { refRange: [0, 1], name: "Chroma" },
            hz: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: ev,
        fromBase(e) {
            let t,
                [r, a, n] = e;
            return (
                (t = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [r, Math.sqrt(a ** 2 + n ** 2), Z(t)]
            );
        },
        toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)],
    });
let eM = 2413 / 128,
    eA = 2610 / 16384,
    eO = 2523 / 32,
    ek = 16384 / 2610,
    eC = 32 / 2523,
    eE = [
        [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
        [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
        [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
    ],
    ex = [
        [0.5, 0.5, 0],
        [6610 / 4096, -13613 / 4096, 7003 / 4096],
        [17933 / 4096, -17390 / 4096, -543 / 4096],
    ],
    eR = [
        [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
        [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
        [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
    ],
    e_ = [
        [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
        [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
        [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
    ];
var ej = new B({
    id: "ictcp",
    name: "ICTCP",
    coords: {
        i: { refRange: [0, 1], name: "I" },
        ct: { refRange: [-0.5, 0.5], name: "CT" },
        cp: { refRange: [-0.5, 0.5], name: "CP" },
    },
    base: eu,
    fromBase: (e) => {
        var t;
        return (
            (t = n(eE, e)),
            n(
                ex,
                t.map(function (e) {
                    return ((0.8359375 + eM * (e / 1e4) ** eA) / (1 + 18.6875 * (e / 1e4) ** eA)) ** eO;
                }),
            )
        );
    },
    toBase: (e) =>
        n(
            e_,
            n(eR, e).map(function (e) {
                let t = Math.max(e ** eC - 0.8359375, 0);
                return 1e4 * (t / (eM - 18.6875 * e ** eC)) ** ek;
            }),
        ),
});
let eS = E.D65,
    eN = 2 * Math.PI,
    eB = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127],
    ],
    eP = [
        [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
        [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
        [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
    ],
    eD = [
        [460, 451, 288],
        [460, -891, -261],
        [460, -220, -6300],
    ],
    eI = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] },
    eT = [20.14, 90, 164.25, 237.53, 380.14],
    eL = [0.8, 0.7, 1, 1.2, 0.8],
    eF = [0, 100, 200, 300, 400],
    ez = 180 / Math.PI,
    eq = Math.PI / 180;
function e$(e, t) {
    return e.map((e) => {
        let r = w(t * Math.abs(e) * 0.01, 0.42);
        return (400 * v(r, e)) / (r + 27.13);
    });
}
function eU(e, t, r, a, o) {
    let s = {};
    (s.discounting = o), (s.refWhite = e), (s.surround = a);
    let i = e.map((e) => 100 * e);
    (s.la = t), (s.yb = r);
    let c = i[1],
        l = n(eB, i),
        u = (a = eI[s.surround])[0];
    (s.c = a[1]), (s.nc = a[2]);
    let f = (1 / (5 * s.la + 1)) ** 4;
    (s.fl = f * s.la + 0.1 * (1 - f) * (1 - f) * Math.cbrt(5 * s.la)),
        (s.flRoot = s.fl ** 0.25),
        (s.n = s.yb / c),
        (s.z = 1.48 + Math.sqrt(s.n)),
        (s.nbb = 0.725 * s.n ** -0.2),
        (s.ncb = s.nbb);
    let b = o ? 1 : Math.max(Math.min(u * (1 - (1 / 3.6) * Math.exp((-s.la - 42) / 92)), 1), 0);
    (s.dRgb = l.map((e) => h(1, c / e, b))), (s.dRgbInv = s.dRgb.map((e) => 1 / e));
    let d = e$(
        l.map((e, t) => e * s.dRgb[t]),
        s.fl,
    );
    return (s.aW = s.nbb * (2 * d[0] + d[1] + 0.05 * d[2])), s;
}
let eW = eU(eS, (64 / Math.PI) * 0.2, 20, "average", !1);
function eG(e, t) {
    var r;
    let a;
    if (!((void 0 !== e.J) ^ (void 0 !== e.Q))) throw Error("Conversion requires one and only one: 'J' or 'Q'");
    if (!((void 0 !== e.C) ^ (void 0 !== e.M) ^ (void 0 !== e.s)))
        throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
    if (!((void 0 !== e.h) ^ (void 0 !== e.H))) throw Error("Conversion requires one and only one: 'h' or 'H'");
    if (0 === e.J || 0 === e.Q) return [0, 0, 0];
    let o = 0,
        s = Math.cos(
            (o =
                void 0 !== e.h
                    ? Z(e.h) * eq
                    : (function (e) {
                          let t = ((e % 400) + 400) % 400,
                              r = Math.floor(0.01 * t);
                          t %= 100;
                          let [a, n] = eT.slice(r, r + 2),
                              [o, s] = eL.slice(r, r + 2);
                          return Z((t * (s * a - o * n) - 100 * a * s) / (t * (s - o) - 100 * s));
                      })(e.H) * eq),
        ),
        i = Math.sin(o),
        c = 0;
    void 0 !== e.J ? (c = 0.1 * w(e.J, 0.5)) : void 0 !== e.Q && (c = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
    let l = 0;
    void 0 !== e.C
        ? (l = e.C / c)
        : void 0 !== e.M
          ? (l = e.M / t.flRoot / c)
          : void 0 !== e.s && (l = (4e-4 * e.s ** 2 * (t.aW + 4)) / t.c);
    let u = w(l * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
        f = 0.25 * (Math.cos(o + 2) + 3.8),
        b = t.aW * w(c, 2 / t.c / t.z),
        d = (5e4 / 13) * t.nc * t.ncb * f,
        h = b / t.nbb,
        p = 23 * (h + 0.305) * M(u, 23 * d + u * (11 * s + 108 * i)),
        m =
            ((r = n(eD, [h, p * s, p * i]).map((e) => e / 1403)),
            (a = (100 / t.fl) * 2588.068098016295),
            r.map((e) => {
                let t = Math.abs(e);
                return v(a * w(t / (400 - t), 2.380952380952381), e);
            }));
    return n(
        eP,
        m.map((e, r) => e * t.dRgbInv[r]),
    ).map((e) => e / 100);
}
function eH(e, t) {
    let r = e$(
            n(
                eB,
                e.map((e) => 100 * e),
            ).map((e, r) => e * t.dRgb[r]),
            t.fl,
        ),
        a = r[0] + (-12 * r[1] + r[2]) / 11,
        o = (r[0] + r[1] - 2 * r[2]) / 9,
        s = ((Math.atan2(o, a) % eN) + eN) % eN,
        i = 0.25 * (Math.cos(s + 2) + 3.8),
        c =
            w((5e4 / 13) * t.nc * t.ncb * M(i * Math.sqrt(a ** 2 + o ** 2), r[0] + r[1] + 1.05 * r[2] + 0.305), 0.9) *
            Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        l = w((t.nbb * (2 * r[0] + r[1] + 0.05 * r[2])) / t.aW, 0.5 * t.c * t.z),
        u = 100 * w(l, 2),
        f = (4 / t.c) * l * (t.aW + 4) * t.flRoot,
        b = c * l,
        d = b * t.flRoot,
        h = Z(s * ez),
        p = (function (e) {
            let t = Z(e);
            t <= eT[0] && (t += 360);
            let r = A(eT, t) - 1,
                [a, n] = eT.slice(r, r + 2),
                [o, s] = eL.slice(r, r + 2),
                i = eF[r],
                c = (t - a) / o;
            return i + (100 * c) / (c + (n - t) / s);
        })(h);
    return { J: u, C: b, h: h, s: 50 * w((t.c * c) / (t.aW + 4), 0.5), Q: f, M: d, H: p };
}
var eZ = new B({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
        j: { refRange: [0, 100], name: "J" },
        m: { refRange: [0, 105], name: "Colorfulness" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: D,
    fromBase(e) {
        let t = eH(e, eW);
        return [t.J, t.M, t.h];
    },
    toBase: (e) => eG({ J: e[0], M: e[1], h: e[2] }, eW),
});
let eY = E.D65,
    eX = 216 / 24389,
    eJ = 24389 / 27;
function eV(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / eJ;
}
let eK = eU(eY, (200 / Math.PI) * eV(50), 100 * eV(50), "average", !1);
var eQ = new B({
    id: "hct",
    name: "HCT",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        c: { refRange: [0, 145], name: "Colorfulness" },
        t: { refRange: [0, 100], name: "Tone" },
    },
    base: D,
    fromBase: (e) =>
        (function (e) {
            var t;
            let r = 116 * ((t = e[1]) > eX ? Math.cbrt(t) : (eJ * t + 16) / 116) - 16;
            if (0 === r) return [0, 0, 0];
            let a = eH(e, eK);
            return [Z(a.h), a.C, r];
        })(e),
    toBase: (e) =>
        (function (e, t) {
            let [r, a, n] = e,
                o = [],
                s = 0;
            if (0 === n) return [0, 0, 0];
            let i = eV(n);
            s =
                n > 0
                    ? 0.00379058511492914 * n ** 2 + 0.608983189401032 * n + 0.9155088574762233
                    : 9514440756550361e-21 * n ** 2 + 0.08693057439788597 * n - 21.928975842194614;
            let c = 0,
                l = 1 / 0;
            for (; c <= 15; ) {
                let e = Math.abs((o = eG({ J: s, C: a, h: r }, t))[1] - i);
                if (e < l) {
                    if (e <= 2e-12) return o;
                    l = e;
                }
                (s -= ((o[1] - i) * s) / (2 * o[1])), (c += 1);
            }
            return eG({ J: s, C: a, h: r }, t);
        })(e, eK),
    formats: {
        color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let e0 = Math.PI / 180;
function e1(e) {
    e[1] < 0 && (e = eQ.fromBase(eQ.toBase(e)));
    let t = Math.log(Math.max(1 + 0.0228 * e[1] * eK.flRoot, 1)) / 0.0228,
        r = e[0] * e0,
        a = t * Math.cos(r),
        n = t * Math.sin(r);
    return [e[2], a, n];
}
var e2 = {
    deltaE76: function (e, t) {
        return ec(e, t, "lab");
    },
    deltaECMC: function (e, t, { l: r = 2, c: a = 1 } = {}) {
        [e, t] = N([e, t]);
        let [n, o, s] = H.from(e),
            [, i, c] = Y.from(H, [n, o, s]),
            [l, u, f] = H.from(t),
            b = Y.from(H, [l, u, f])[1];
        i < 0 && (i = 0), b < 0 && (b = 0);
        let d = n - l,
            h = i - b,
            p = o - u,
            m = s - f,
            g = 0.511;
        n >= 16 && (g = (0.040975 * n) / (1 + 0.01765 * n));
        let y = (0.0638 * i) / (1 + 0.0131 * i) + 0.638;
        Number.isNaN(c) && (c = 0);
        let v = Math.pow(i, 4),
            w = Math.sqrt(v / (v + 1900)),
            M =
                y *
                (w *
                    (c >= 164 && c <= 345
                        ? 0.56 + Math.abs(0.2 * Math.cos((c + 168) * el))
                        : 0.36 + Math.abs(0.4 * Math.cos((c + 35) * el))) +
                    1 -
                    w),
            A = (d / (r * g)) ** 2;
        return Math.sqrt((A += (h / (a * y)) ** 2 + (p ** 2 + m ** 2 - h ** 2) / M ** 2));
    },
    deltaE2000: Q,
    deltaEJz: function (e, t) {
        [e, t] = N([e, t]);
        let [r, a, n] = ew.from(e),
            [o, s, i] = ew.from(t);
        Number.isNaN(n) && Number.isNaN(i)
            ? ((n = 0), (i = 0))
            : Number.isNaN(n)
              ? (n = i)
              : Number.isNaN(i) && (i = n);
        let c = 2 * Math.sqrt(a * s) * Math.sin(((n - i) / 2) * (Math.PI / 180));
        return Math.sqrt((r - o) ** 2 + (a - s) ** 2 + c ** 2);
    },
    deltaEITP: function (e, t) {
        [e, t] = N([e, t]);
        let [r, a, n] = ej.from(e),
            [o, s, i] = ej.from(t);
        return 720 * Math.sqrt((r - o) ** 2 + 0.25 * (a - s) ** 2 + (n - i) ** 2);
    },
    deltaEOK: eo,
    deltaEHCT: function (e, t) {
        [e, t] = N([e, t]);
        let [r, a, n] = e1(eQ.from(e)),
            [o, s, i] = e1(eQ.from(t));
        return Math.sqrt((r - o) ** 2 + (a - s) ** 2 + (n - i) ** 2);
    },
};
let e5 = {
    hct: { method: "hct.c", jnd: 2, deltaEMethod: "hct", blackWhiteClamp: {} },
    "hct-tonal": {
        method: "hct.c",
        jnd: 0,
        deltaEMethod: "hct",
        blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 },
    },
};
function e3(
    e,
    { method: t = C.gamut_mapping, space: r, deltaEMethod: a = "", jnd: n = 2, blackWhiteClamp: s = {} } = {},
) {
    let i;
    if (((e = N(e)), o(arguments[1]) ? (r = arguments[1]) : r || (r = e.space), es(e, (r = B.get(r)), { epsilon: 0 })))
        return e;
    if ("css" === t)
        i = (function (e, { space: t } = {}) {
            (e = N(e)), t || (t = e.space), (t = B.get(t));
            let r = B.get("oklch");
            if (t.isUnbounded) return e9(e, t);
            let a = e9(e, r),
                n = a.coords[0];
            if (n >= 1) {
                let r = e9(e6, t);
                return (r.alpha = e.alpha), e9(r, t);
            }
            if (n <= 0) {
                let r = e9(e8, t);
                return (r.alpha = e.alpha), e9(r, t);
            }
            if (es(a, t, { epsilon: 0 })) return e9(a, t);
            function o(e) {
                let r = e9(e, t),
                    a = Object.values(t.coords);
                return (
                    (r.coords = r.coords.map((e, t) => {
                        if ("range" in a[t]) {
                            let [r, n] = a[t].range;
                            return y(r, e, n);
                        }
                        return e;
                    })),
                    r
                );
            }
            let s = 0,
                i = a.coords[1],
                c = !0,
                l = ei(a),
                u = o(l),
                f = eo(u, l);
            if (f < 0.02) return u;
            for (; i - s > 1e-4; ) {
                let e = (s + i) / 2;
                if (((l.coords[1] = e), c && es(l, t, { epsilon: 0 }))) s = e;
                else if ((f = eo((u = o(l)), l)) < 0.02)
                    if (0.02 - f < 1e-4) break;
                    else (c = !1), (s = e);
                else i = e;
            }
            return u;
        })(e, { space: r });
    else {
        if ("clip" === t || es(e, r)) i = e9(e, r);
        else {
            Object.prototype.hasOwnProperty.call(e5, t) &&
                ({ method: t, jnd: n, deltaEMethod: a, blackWhiteClamp: s } = e5[t]);
            let o = Q;
            if ("" !== a) {
                for (let e in e2)
                    if ("deltae" + a.toLowerCase() === e.toLowerCase()) {
                        o = e2[e];
                        break;
                    }
            }
            let u = e3(e9(e, r), { method: "clip", space: r });
            if (o(e, u) > n) {
                var l;
                let a;
                if (3 === Object.keys(s).length) {
                    let t = B.resolveCoord(s.channel),
                        r = L(e9(e, t.space), t.id);
                    if ((c(r) && (r = 0), r >= s.max)) return e9({ space: "xyz-d65", coords: E.D65 }, e.space);
                    if (r <= s.min) return e9({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
                }
                let u = B.resolveCoord(t),
                    f = u.space,
                    b = u.id,
                    d = e9(e, f);
                d.coords.forEach((e, t) => {
                    c(e) && (d.coords[t] = 0);
                });
                let h = (u.range || u.refRange)[0],
                    p =
                        ((a = (l = n) ? Math.floor(Math.log10(Math.abs(l))) : 0),
                        Math.max(parseFloat(`1e${a - 2}`), 1e-6)),
                    m = h,
                    g = L(d, b);
                for (; g - m > p; ) {
                    let e = ei(d);
                    o(d, (e = e3(e, { space: r, method: "clip" }))) - n < p ? (m = L(d, b)) : (g = L(d, b)),
                        z(d, b, (m + g) / 2);
                }
                i = e9(d, r);
            } else i = u;
        }
        if ("clip" === t || !es(i, r, { epsilon: 0 })) {
            let e = Object.values(r.coords).map((e) => e.range || []);
            i.coords = i.coords.map((t, r) => {
                let [a, n] = e[r];
                return void 0 !== a && (t = Math.max(a, t)), void 0 !== n && (t = Math.min(t, n)), t;
            });
        }
    }
    return r !== e.space && (i = e9(i, e.space)), (e.coords = i.coords), e;
}
e3.returns = "color";
let e6 = { space: en, coords: [1, 0, 0] },
    e8 = { space: en, coords: [0, 0, 0] };
function e9(e, t, { inGamut: r } = {}) {
    e = N(e);
    let a = (t = B.get(t)).from(e),
        n = { space: t, coords: a, alpha: e.alpha };
    return r && (n = e3(n, !0 === r ? void 0 : r)), n;
}
function e4(e, { precision: t = C.precision, format: r = "default", inGamut: a = !0, ...n } = {}) {
    let o;
    e = N(e);
    let s = r;
    r = e.space.getFormat(r) ?? e.space.getFormat("default") ?? B.DEFAULT_FORMAT;
    let c = e.coords.slice();
    if (((a ||= r.toGamut) && !es(e) && (c = e3(ei(e), !0 === a ? void 0 : a).coords), "custom" === r.type))
        if (((n.precision = t), r.serialize)) o = r.serialize(c, e.alpha, n);
        else throw TypeError(`format ${s} can only be used to parse colors, not for serialization`);
    else {
        let a = r.name || "color";
        r.serializeCoords ? (c = r.serializeCoords(c, t)) : null !== t && (c = c.map((e) => i(e, { precision: t })));
        let n = [...c];
        if ("color" === a) {
            let t = r.id || r.ids?.[0] || e.space.id;
            n.unshift(t);
        }
        let s = e.alpha;
        null !== t && (s = i(s, { precision: t }));
        let l = e.alpha >= 1 || r.noAlpha ? "" : `${r.commas ? "," : " /"} ${s}`;
        o = `${a}(${n.join(r.commas ? ", " : " ")}${l})`;
    }
    return o;
}
e9.returns = "color";
var e7 = new I({
        id: "rec2020-linear",
        cssId: "--rec2020-linear",
        name: "Linear REC.2020",
        white: "D65",
        toXYZ_M: [
            [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
            [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
            [0, 0.028072693049087428, 1.060985057710791],
        ],
        fromXYZ_M: [
            [1.716651187971268, -0.355670783776392, -0.25336628137366],
            [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
            [0.017639857445311, -0.042770613257809, 0.942103121235474],
        ],
    }),
    te = new I({
        id: "rec2020",
        name: "REC.2020",
        base: e7,
        toBase: (e) =>
            e.map(function (e) {
                return e < 0.08124285829863151
                    ? e / 4.5
                    : Math.pow((e + 1.09929682680944 - 1) / 1.09929682680944, 1 / 0.45);
            }),
        fromBase: (e) =>
            e.map(function (e) {
                return e >= 0.018053968510807 ? 1.09929682680944 * Math.pow(e, 0.45) - (1.09929682680944 - 1) : 4.5 * e;
            }),
    }),
    tt = new I({
        id: "p3-linear",
        cssId: "--display-p3-linear",
        name: "Linear P3",
        white: "D65",
        toXYZ_M: [
            [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
            [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
            [0, 0.04511338185890264, 1.043944368900976],
        ],
        fromXYZ_M: [
            [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
            [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
            [0.03584583024378447, -0.07617238926804182, 0.9568845240076872],
        ],
    });
let tr = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
];
var ta = new I({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: [
            [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
            [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
            [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
        ],
        fromXYZ_M: tr,
    }),
    tn = {
        aliceblue: [240 / 255, 248 / 255, 1],
        antiquewhite: [250 / 255, 235 / 255, 215 / 255],
        aqua: [0, 1, 1],
        aquamarine: [127 / 255, 1, 212 / 255],
        azure: [240 / 255, 1, 1],
        beige: [245 / 255, 245 / 255, 220 / 255],
        bisque: [1, 228 / 255, 196 / 255],
        black: [0, 0, 0],
        blanchedalmond: [1, 235 / 255, 205 / 255],
        blue: [0, 0, 1],
        blueviolet: [138 / 255, 43 / 255, 226 / 255],
        brown: [165 / 255, 42 / 255, 42 / 255],
        burlywood: [222 / 255, 184 / 255, 135 / 255],
        cadetblue: [95 / 255, 158 / 255, 160 / 255],
        chartreuse: [127 / 255, 1, 0],
        chocolate: [210 / 255, 105 / 255, 30 / 255],
        coral: [1, 127 / 255, 80 / 255],
        cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
        cornsilk: [1, 248 / 255, 220 / 255],
        crimson: [220 / 255, 20 / 255, 60 / 255],
        cyan: [0, 1, 1],
        darkblue: [0, 0, 139 / 255],
        darkcyan: [0, 139 / 255, 139 / 255],
        darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
        darkgray: [169 / 255, 169 / 255, 169 / 255],
        darkgreen: [0, 100 / 255, 0],
        darkgrey: [169 / 255, 169 / 255, 169 / 255],
        darkkhaki: [189 / 255, 183 / 255, 107 / 255],
        darkmagenta: [139 / 255, 0, 139 / 255],
        darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
        darkorange: [1, 140 / 255, 0],
        darkorchid: [0.6, 50 / 255, 0.8],
        darkred: [139 / 255, 0, 0],
        darksalmon: [233 / 255, 150 / 255, 122 / 255],
        darkseagreen: [143 / 255, 188 / 255, 143 / 255],
        darkslateblue: [72 / 255, 61 / 255, 139 / 255],
        darkslategray: [47 / 255, 79 / 255, 79 / 255],
        darkslategrey: [47 / 255, 79 / 255, 79 / 255],
        darkturquoise: [0, 206 / 255, 209 / 255],
        darkviolet: [148 / 255, 0, 211 / 255],
        deeppink: [1, 20 / 255, 147 / 255],
        deepskyblue: [0, 191 / 255, 1],
        dimgray: [105 / 255, 105 / 255, 105 / 255],
        dimgrey: [105 / 255, 105 / 255, 105 / 255],
        dodgerblue: [30 / 255, 144 / 255, 1],
        firebrick: [178 / 255, 34 / 255, 34 / 255],
        floralwhite: [1, 250 / 255, 240 / 255],
        forestgreen: [34 / 255, 139 / 255, 34 / 255],
        fuchsia: [1, 0, 1],
        gainsboro: [220 / 255, 220 / 255, 220 / 255],
        ghostwhite: [248 / 255, 248 / 255, 1],
        gold: [1, 215 / 255, 0],
        goldenrod: [218 / 255, 165 / 255, 32 / 255],
        gray: [128 / 255, 128 / 255, 128 / 255],
        green: [0, 128 / 255, 0],
        greenyellow: [173 / 255, 1, 47 / 255],
        grey: [128 / 255, 128 / 255, 128 / 255],
        honeydew: [240 / 255, 1, 240 / 255],
        hotpink: [1, 105 / 255, 180 / 255],
        indianred: [205 / 255, 92 / 255, 92 / 255],
        indigo: [75 / 255, 0, 130 / 255],
        ivory: [1, 1, 240 / 255],
        khaki: [240 / 255, 230 / 255, 140 / 255],
        lavender: [230 / 255, 230 / 255, 250 / 255],
        lavenderblush: [1, 240 / 255, 245 / 255],
        lawngreen: [124 / 255, 252 / 255, 0],
        lemonchiffon: [1, 250 / 255, 205 / 255],
        lightblue: [173 / 255, 216 / 255, 230 / 255],
        lightcoral: [240 / 255, 128 / 255, 128 / 255],
        lightcyan: [224 / 255, 1, 1],
        lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
        lightgray: [211 / 255, 211 / 255, 211 / 255],
        lightgreen: [144 / 255, 238 / 255, 144 / 255],
        lightgrey: [211 / 255, 211 / 255, 211 / 255],
        lightpink: [1, 182 / 255, 193 / 255],
        lightsalmon: [1, 160 / 255, 122 / 255],
        lightseagreen: [32 / 255, 178 / 255, 170 / 255],
        lightskyblue: [135 / 255, 206 / 255, 250 / 255],
        lightslategray: [119 / 255, 136 / 255, 0.6],
        lightslategrey: [119 / 255, 136 / 255, 0.6],
        lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
        lightyellow: [1, 1, 224 / 255],
        lime: [0, 1, 0],
        limegreen: [50 / 255, 205 / 255, 50 / 255],
        linen: [250 / 255, 240 / 255, 230 / 255],
        magenta: [1, 0, 1],
        maroon: [128 / 255, 0, 0],
        mediumaquamarine: [0.4, 205 / 255, 170 / 255],
        mediumblue: [0, 0, 205 / 255],
        mediumorchid: [186 / 255, 85 / 255, 211 / 255],
        mediumpurple: [147 / 255, 112 / 255, 219 / 255],
        mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
        mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
        mediumspringgreen: [0, 250 / 255, 154 / 255],
        mediumturquoise: [72 / 255, 209 / 255, 0.8],
        mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
        midnightblue: [25 / 255, 25 / 255, 112 / 255],
        mintcream: [245 / 255, 1, 250 / 255],
        mistyrose: [1, 228 / 255, 225 / 255],
        moccasin: [1, 228 / 255, 181 / 255],
        navajowhite: [1, 222 / 255, 173 / 255],
        navy: [0, 0, 128 / 255],
        oldlace: [253 / 255, 245 / 255, 230 / 255],
        olive: [128 / 255, 128 / 255, 0],
        olivedrab: [107 / 255, 142 / 255, 35 / 255],
        orange: [1, 165 / 255, 0],
        orangered: [1, 69 / 255, 0],
        orchid: [218 / 255, 112 / 255, 214 / 255],
        palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
        palegreen: [152 / 255, 251 / 255, 152 / 255],
        paleturquoise: [175 / 255, 238 / 255, 238 / 255],
        palevioletred: [219 / 255, 112 / 255, 147 / 255],
        papayawhip: [1, 239 / 255, 213 / 255],
        peachpuff: [1, 218 / 255, 185 / 255],
        peru: [205 / 255, 133 / 255, 63 / 255],
        pink: [1, 192 / 255, 203 / 255],
        plum: [221 / 255, 160 / 255, 221 / 255],
        powderblue: [176 / 255, 224 / 255, 230 / 255],
        purple: [128 / 255, 0, 128 / 255],
        rebeccapurple: [0.4, 0.2, 0.6],
        red: [1, 0, 0],
        rosybrown: [188 / 255, 143 / 255, 143 / 255],
        royalblue: [65 / 255, 105 / 255, 225 / 255],
        saddlebrown: [139 / 255, 69 / 255, 19 / 255],
        salmon: [250 / 255, 128 / 255, 114 / 255],
        sandybrown: [244 / 255, 164 / 255, 96 / 255],
        seagreen: [46 / 255, 139 / 255, 87 / 255],
        seashell: [1, 245 / 255, 238 / 255],
        sienna: [160 / 255, 82 / 255, 45 / 255],
        silver: [192 / 255, 192 / 255, 192 / 255],
        skyblue: [135 / 255, 206 / 255, 235 / 255],
        slateblue: [106 / 255, 90 / 255, 205 / 255],
        slategray: [112 / 255, 128 / 255, 144 / 255],
        slategrey: [112 / 255, 128 / 255, 144 / 255],
        snow: [1, 250 / 255, 250 / 255],
        springgreen: [0, 1, 127 / 255],
        steelblue: [70 / 255, 130 / 255, 180 / 255],
        tan: [210 / 255, 180 / 255, 140 / 255],
        teal: [0, 128 / 255, 128 / 255],
        thistle: [216 / 255, 191 / 255, 216 / 255],
        tomato: [1, 99 / 255, 71 / 255],
        turquoise: [64 / 255, 224 / 255, 208 / 255],
        violet: [238 / 255, 130 / 255, 238 / 255],
        wheat: [245 / 255, 222 / 255, 179 / 255],
        white: [1, 1, 1],
        whitesmoke: [245 / 255, 245 / 255, 245 / 255],
        yellow: [1, 1, 0],
        yellowgreen: [154 / 255, 205 / 255, 50 / 255],
    };
let to = [, , ,].fill("<percentage> | <number>[0, 255]"),
    ts = [, , ,].fill("<number>[0, 255]");
var ti = new I({
        id: "srgb",
        name: "sRGB",
        base: ta,
        fromBase: (e) =>
            e.map((e) => {
                let t = e < 0 ? -1 : 1,
                    r = e * t;
                return r > 0.0031308 ? t * (1.055 * r ** (1 / 2.4) - 0.055) : 12.92 * e;
            }),
        toBase: (e) =>
            e.map((e) => {
                let t = e < 0 ? -1 : 1,
                    r = e * t;
                return r <= 0.04045 ? e / 12.92 : t * ((r + 0.055) / 1.055) ** 2.4;
            }),
        formats: {
            rgb: { coords: to },
            rgb_number: { name: "rgb", commas: !0, coords: ts, noAlpha: !0 },
            color: {},
            rgba: { coords: to, commas: !0, lastAlpha: !0 },
            rgba_number: { name: "rgba", commas: !0, coords: ts },
            hex: {
                type: "custom",
                toGamut: !0,
                test: (e) => /^#([a-f0-9]{3,4}){1,2}$/i.test(e),
                parse(e) {
                    e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, "$&$&"));
                    let t = [];
                    return (
                        e.replace(/[a-f0-9]{2}/gi, (e) => {
                            t.push(parseInt(e, 16) / 255);
                        }),
                        { spaceId: "srgb", coords: t.slice(0, 3), alpha: t.slice(3)[0] }
                    );
                },
                serialize: (e, t, { collapse: r = !0 } = {}) => {
                    t < 1 && e.push(t), (e = e.map((e) => Math.round(255 * e)));
                    let a = r && e.every((e) => e % 17 == 0);
                    return "#" + e.map((e) => (a ? (e / 17).toString(16) : e.toString(16).padStart(2, "0"))).join("");
                },
            },
            keyword: {
                type: "custom",
                test: (e) => /^[a-z]+$/i.test(e),
                parse(e) {
                    e = e.toLowerCase();
                    let t = { spaceId: "srgb", coords: null, alpha: 1 };
                    if (("transparent" === e ? ((t.coords = tn.black), (t.alpha = 0)) : (t.coords = tn[e]), t.coords))
                        return t;
                },
            },
        },
    }),
    tc = new I({ id: "p3", cssId: "display-p3", name: "P3", base: tt, fromBase: ti.fromBase, toBase: ti.toBase });
if (((C.display_space = ti), "u" > typeof CSS && CSS.supports))
    for (let e of [H, te, tc]) {
        let t = e.getMinCoords(),
            r = e4({ space: e, coords: t, alpha: 1 });
        if (CSS.supports("color", r)) {
            C.display_space = e;
            break;
        }
    }
function tl(e) {
    return L(e, [D, "y"]);
}
function tu(e, t) {
    z(e, [D, "y"], t);
}
var tf = Object.freeze({
    __proto__: null,
    getLuminance: tl,
    register: function (e) {
        Object.defineProperty(e.prototype, "luminance", {
            get() {
                return tl(this);
            },
            set(e) {
                tu(this, e);
            },
        });
    },
    setLuminance: tu,
});
function tb(e) {
    return e >= 0.022 ? e : e + (0.022 - e) ** 1.414;
}
function td(e) {
    let t = Math.abs(e);
    return (e < 0 ? -1 : 1) * Math.pow(t, 2.4);
}
let th = 216 / 24389,
    tp = 24 / 116,
    tm = 24389 / 27,
    tg = E.D65;
var ty = new B({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            a: { refRange: [-125, 125] },
            b: { refRange: [-125, 125] },
        },
        white: tg,
        base: D,
        fromBase(e) {
            let t = e.map((e, t) => e / tg[t]).map((e) => (e > th ? Math.cbrt(e) : (tm * e + 16) / 116));
            return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
        },
        toBase(e) {
            let t = [];
            return (
                (t[1] = (e[0] + 16) / 116),
                (t[0] = e[1] / 500 + t[1]),
                (t[2] = t[1] - e[2] / 200),
                [
                    t[0] > tp ? Math.pow(t[0], 3) : (116 * t[0] - 16) / tm,
                    e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / tm,
                    t[2] > tp ? Math.pow(t[2], 3) : (116 * t[2] - 16) / tm,
                ].map((e, t) => e * tg[t])
            );
        },
        formats: {
            "lab-d65": {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    tv = Object.freeze({
        __proto__: null,
        contrastAPCA: function (e, t) {
            let r, a, n, o;
            (t = N(t)), (e = N(e)), (t = e9(t, "srgb")), ([a, n, o] = t.coords);
            let s = 0.2126729 * td(a) + 0.7151522 * td(n) + 0.072175 * td(o);
            (e = e9(e, "srgb")), ([a, n, o] = e.coords);
            let i = 0.2126729 * td(a) + 0.7151522 * td(n) + 0.072175 * td(o),
                c = tb(s),
                l = tb(i);
            return (
                100 *
                (0.1 >
                Math.abs(
                    (r =
                        5e-4 > Math.abs(l - c)
                            ? 0
                            : l > c
                              ? 1.14 * (l ** 0.56 - c ** 0.57)
                              : 1.14 * (l ** 0.65 - c ** 0.62)),
                )
                    ? 0
                    : r > 0
                      ? r - 0.027
                      : r + 0.027)
            );
        },
        contrastDeltaPhi: function (e, t) {
            (e = N(e)), (t = N(t));
            let r =
                Math.pow(
                    Math.abs(
                        Math.pow(L(e, [ty, "l"]), 1.618033988749895) - Math.pow(L(t, [ty, "l"]), 1.618033988749895),
                    ),
                    0.6180339887498948,
                ) *
                    Math.SQRT2 -
                40;
            return r < 7.5 ? 0 : r;
        },
        contrastLstar: function (e, t) {
            return (e = N(e)), (t = N(t)), Math.abs(L(e, [H, "l"]) - L(t, [H, "l"]));
        },
        contrastMichelson: function (e, t) {
            (e = N(e)), (t = N(t));
            let r = Math.max(tl(e), 0),
                a = Math.max(tl(t), 0);
            a > r && ([r, a] = [a, r]);
            let n = r + a;
            return 0 === n ? 0 : (r - a) / n;
        },
        contrastWCAG21: function (e, t) {
            (e = N(e)), (t = N(t));
            let r = Math.max(tl(e), 0),
                a = Math.max(tl(t), 0);
            return a > r && ([r, a] = [a, r]), (r + 0.05) / (a + 0.05);
        },
        contrastWeber: function (e, t) {
            (e = N(e)), (t = N(t));
            let r = Math.max(tl(e), 0),
                a = Math.max(tl(t), 0);
            return a > r && ([r, a] = [a, r]), 0 === a ? 5e4 : (r - a) / a;
        },
    });
function tw(e) {
    let [t, r, a] = T(e, D),
        n = t + 15 * r + 3 * a;
    return [(4 * t) / n, (9 * r) / n];
}
function tM(e) {
    let [t, r, a] = T(e, D),
        n = t + r + a;
    return [t / n, r / n];
}
var tA = Object.freeze({
    __proto__: null,
    register: function (e) {
        Object.defineProperty(e.prototype, "uv", {
            get() {
                return tw(this);
            },
        }),
            Object.defineProperty(e.prototype, "xy", {
                get() {
                    return tM(this);
                },
            });
    },
    uv: tw,
    xy: tM,
});
function tO(e, t, r = {}) {
    o(r) && (r = { method: r });
    let { method: a = C.deltaE, ...n } = r;
    for (let r in e2) if ("deltae" + a.toLowerCase() === r.toLowerCase()) return e2[r](e, t, n);
    throw TypeError(`Unknown deltaE method: ${a}`);
}
var tk = Object.freeze({
    __proto__: null,
    darken: function (e, t = 0.25) {
        return z(e, [B.get("oklch", "lch"), "l"], (e) => e * (1 - t));
    },
    lighten: function (e, t = 0.25) {
        return z(e, [B.get("oklch", "lch"), "l"], (e) => e * (1 + t));
    },
});
function tC(e, t, r = 0.5, a = {}) {
    return ([e, t] = [N(e), N(t)]), "object" === s(r) && ([r, a] = [0.5, r]), tx(e, t, a)(r);
}
function tE(e, t, r = {}) {
    let a;
    tR(e) && (([a, r] = [e, t]), ([e, t] = a.rangeArgs.colors));
    let { maxDeltaE: n, deltaEMethod: o, steps: s = 2, maxSteps: i = 1e3, ...c } = r;
    a || (([e, t] = [N(e), N(t)]), (a = tx(e, t, c)));
    let l = tO(e, t),
        u = n > 0 ? Math.max(s, Math.ceil(l / n) + 1) : s,
        f = [];
    if ((void 0 !== i && (u = Math.min(u, i)), 1 === u)) f = [{ p: 0.5, color: a(0.5) }];
    else {
        let e = 1 / (u - 1);
        f = Array.from({ length: u }, (t, r) => {
            let n = r * e;
            return { p: n, color: a(n) };
        });
    }
    if (n > 0) {
        let e = f.reduce((e, t, r) => (0 === r ? 0 : Math.max(e, tO(t.color, f[r - 1].color, o))), 0);
        for (; e > n; ) {
            e = 0;
            for (let t = 1; t < f.length && f.length < i; t++) {
                let r = f[t - 1],
                    n = f[t],
                    o = (n.p + r.p) / 2,
                    s = a(o);
                (e = Math.max(e, tO(s, r.color), tO(s, n.color))), f.splice(t, 0, { p: o, color: a(o) }), t++;
            }
        }
    }
    return (f = f.map((e) => e.color));
}
function tx(e, t, r = {}) {
    if (tR(e)) {
        let [r, a] = [e, t];
        return tx(...r.rangeArgs.colors, { ...r.rangeArgs.options, ...a });
    }
    let { space: a, outputSpace: n, progression: o, premultiplied: s } = r;
    (e = N(e)), (t = N(t)), (e = ei(e)), (t = ei(t));
    let i = { colors: [e, t], options: r };
    if (
        ((a = a ? B.get(a) : B.registry[C.interpolationSpace] || e.space),
        (n = n ? B.get(n) : a),
        (e = e9(e, a)),
        (t = e9(t, a)),
        (e = e3(e)),
        (t = e3(t)),
        a.coords.h && "angle" === a.coords.h.type)
    ) {
        let n = (r.hue = r.hue || "shorter"),
            o = [a, "h"],
            [s, i] = [L(e, o), L(t, o)];
        isNaN(s) && !isNaN(i) ? (s = i) : isNaN(i) && !isNaN(s) && (i = s),
            ([s, i] = (function (e, t) {
                if ("raw" === e) return t;
                let [r, a] = t.map(Z),
                    n = a - r;
                return (
                    "increasing" === e
                        ? n < 0 && (a += 360)
                        : "decreasing" === e
                          ? n > 0 && (r += 360)
                          : "longer" === e
                            ? -180 < n && n < 180 && (n > 0 ? (r += 360) : (a += 360))
                            : "shorter" === e && (n > 180 ? (r += 360) : n < -180 && (a += 360)),
                    [r, a]
                );
            })(n, [s, i])),
            z(e, o, s),
            z(t, o, i);
    }
    return (
        s && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = o ? o(r) : r;
                let i = e.coords.map((e, a) => h(e, t.coords[a], r)),
                    c = h(e.alpha, t.alpha, r),
                    l = { space: a, coords: i, alpha: c };
                return s && (l.coords = l.coords.map((e) => e / c)), n !== a && (l = e9(l, n)), l;
            },
            { rangeArgs: i },
        )
    );
}
function tR(e) {
    return "function" === s(e) && !!e.rangeArgs;
}
C.interpolationSpace = "lab";
var t_ = Object.freeze({
        __proto__: null,
        isRange: tR,
        mix: tC,
        range: tx,
        register: function (e) {
            e.defineFunction("mix", tC, { returns: "color" }),
                e.defineFunction("range", tx, { returns: "function<color>" }),
                e.defineFunction("steps", tE, { returns: "array<color>" });
        },
        steps: tE,
    }),
    tj = new B({
        id: "hsl",
        name: "HSL",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            l: { range: [0, 100], name: "Lightness" },
        },
        base: ti,
        fromBase: (e) => {
            let t = Math.max(...e),
                r = Math.min(...e),
                [a, n, o] = e,
                [s, i, c] = [NaN, 0, (r + t) / 2],
                l = t - r;
            if (0 !== l) {
                switch (((i = 0 === c || 1 === c ? 0 : (t - c) / Math.min(c, 1 - c)), t)) {
                    case a:
                        s = (n - o) / l + 6 * (n < o);
                        break;
                    case n:
                        s = (o - a) / l + 2;
                        break;
                    case o:
                        s = (a - n) / l + 4;
                }
                s *= 60;
            }
            return i < 0 && ((s += 180), (i = Math.abs(i))), s >= 360 && (s -= 360), [s, 100 * i, 100 * c];
        },
        toBase: (e) => {
            let [t, r, a] = e;
            function n(e) {
                let n = (e + t / 30) % 12,
                    o = r * Math.min(a, 1 - a);
                return a - o * Math.max(-1, Math.min(n - 3, 9 - n, 1));
            }
            return (t %= 360) < 0 && (t += 360), (r /= 100), (a /= 100), [n(0), n(8), n(4)];
        },
        formats: {
            hsl: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"] },
            hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: !0, lastAlpha: !0 },
        },
    }),
    tS = new B({
        id: "hsv",
        name: "HSV",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
        },
        base: tj,
        fromBase(e) {
            let [t, r, a] = e,
                n = (a /= 100) + (r /= 100) * Math.min(a, 1 - a);
            return [t, 0 === n ? 0 : 200 * (1 - a / n), 100 * n];
        },
        toBase(e) {
            let [t, r, a] = e,
                n = (a /= 100) * (1 - (r /= 100) / 2);
            return [t, 0 === n || 1 === n ? 0 : ((a - n) / Math.min(n, 1 - n)) * 100, 100 * n];
        },
        formats: {
            color: {
                id: "--hsv",
                coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
            },
        },
    }),
    tN = new B({
        id: "hwb",
        name: "HWB",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
        },
        base: tS,
        fromBase(e) {
            let [t, r, a] = e;
            return [t, (a * (100 - r)) / 100, 100 - a];
        },
        toBase(e) {
            let [t, r, a] = e,
                n = (r /= 100) + (a /= 100);
            if (n >= 1) return [t, 0, (r / n) * 100];
            let o = 1 - a;
            return [t, 100 * (0 === o ? 0 : 1 - r / o), 100 * o];
        },
        formats: { hwb: { coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } },
    }),
    tB = new I({
        id: "a98rgb-linear",
        cssId: "--a98-rgb-linear",
        name: "Linear Adobe\xae 98 RGB compatible",
        white: "D65",
        toXYZ_M: [
            [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
            [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
            [0.02703136138641234, 0.07068885253582723, 0.9913375368376388],
        ],
        fromXYZ_M: [
            [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
            [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
            [0.013444280632031142, -0.11836239223101838, 1.0151749943912054],
        ],
    }),
    tP = new I({
        id: "a98rgb",
        cssId: "a98-rgb",
        name: "Adobe\xae 98 RGB compatible",
        base: tB,
        toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
        fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
    }),
    tD = new I({
        id: "prophoto-linear",
        cssId: "--prophoto-rgb-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: q,
        toXYZ_M: [
            [0.7977666449006423, 0.13518129740053308, 0.0313477341283922],
            [0.2880748288194013, 0.711835234241873, 8993693872564e-17],
            [0, 0, 0.8251046025104602],
        ],
        fromXYZ_M: [
            [1.3457868816471583, -0.25557208737979464, -0.05110186497554526],
            [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139],
            [0, 0, 1.2119675456389452],
        ],
    });
let tI = 1 / 512,
    tT = 16 / 512;
var tL = new I({
        id: "prophoto",
        cssId: "prophoto-rgb",
        name: "ProPhoto",
        base: tD,
        toBase: (e) => e.map((e) => (e < tT ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= tI ? e ** (1 / 1.8) : 16 * e)),
    }),
    tF = new B({
        id: "oklch",
        name: "Oklch",
        coords: {
            l: { refRange: [0, 1], name: "Lightness" },
            c: { refRange: [0, 0.4], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        white: "D65",
        base: en,
        fromBase(e) {
            let t,
                [r, a, n] = e;
            return (
                (t = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [r, Math.sqrt(a ** 2 + n ** 2), Z(t)]
            );
        },
        toBase(e) {
            let t,
                r,
                [a, n, o] = e;
            return (
                isNaN(o)
                    ? ((t = 0), (r = 0))
                    : ((t = n * Math.cos((o * Math.PI) / 180)), (r = n * Math.sin((o * Math.PI) / 180))),
                [a, t, r]
            );
        },
        formats: {
            oklch: { coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"] },
        },
    });
let tz = E.D65,
    tq = 216 / 24389,
    t$ = 24389 / 27,
    [tU, tW] = tw({ space: D, coords: tz });
var tG = new B({
        id: "luv",
        name: "Luv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
        },
        white: tz,
        base: D,
        fromBase(e) {
            let t = [l(e[0]), l(e[1]), l(e[2])],
                r = t[1],
                [a, n] = tw({ space: D, coords: t });
            if (!Number.isFinite(a) || !Number.isFinite(n)) return [0, 0, 0];
            let o = r <= tq ? t$ * r : 116 * Math.cbrt(r) - 16;
            return [o, 13 * o * (a - tU), 13 * o * (n - tW)];
        },
        toBase(e) {
            let [t, r, a] = e;
            if (0 === t || c(t)) return [0, 0, 0];
            (r = l(r)), (a = l(a));
            let n = r / (13 * t) + tU,
                o = a / (13 * t) + tW,
                s = t <= 8 ? t / t$ : Math.pow((t + 16) / 116, 3);
            return [((9 * n) / (4 * o)) * s, s, ((12 - 3 * n - 20 * o) / (4 * o)) * s];
        },
        formats: {
            color: {
                id: "--luv",
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    tH = new B({
        id: "lchuv",
        name: "LChuv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            c: { refRange: [0, 220], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: tG,
        fromBase(e) {
            let t,
                [r, a, n] = e;
            return (
                (t = 0.02 > Math.abs(a) && 0.02 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [r, Math.sqrt(a ** 2 + n ** 2), Z(t)]
            );
        },
        toBase(e) {
            let [t, r, a] = e;
            return (
                r < 0 && (r = 0),
                isNaN(a) && (a = 0),
                [t, r * Math.cos((a * Math.PI) / 180), r * Math.sin((a * Math.PI) / 180)]
            );
        },
        formats: {
            color: {
                id: "--lchuv",
                coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"],
            },
        },
    });
let tZ = 216 / 24389,
    tY = 24389 / 27,
    tX = tr[0][0],
    tJ = tr[0][1],
    tV = tr[0][2],
    tK = tr[1][0],
    tQ = tr[1][1],
    t0 = tr[1][2],
    t1 = tr[2][0],
    t2 = tr[2][1],
    t5 = tr[2][2];
function t3(e, t, r) {
    let a = t / (Math.sin(r) - e * Math.cos(r));
    return a < 0 ? 1 / 0 : a;
}
function t6(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        r = t > tZ ? t : e / tY,
        a = r * (284517 * tX - 94839 * tV),
        n = r * (838422 * tV + 769860 * tJ + 731718 * tX),
        o = r * (632260 * tV - 126452 * tJ),
        s = r * (284517 * tK - 94839 * t0),
        i = r * (838422 * t0 + 769860 * tQ + 731718 * tK),
        c = r * (632260 * t0 - 126452 * tQ),
        l = r * (284517 * t1 - 94839 * t5),
        u = r * (838422 * t5 + 769860 * t2 + 731718 * t1),
        f = r * (632260 * t5 - 126452 * t2);
    return {
        r0s: a / o,
        r0i: (n * e) / o,
        r1s: a / (o + 126452),
        r1i: ((n - 769860) * e) / (o + 126452),
        g0s: s / c,
        g0i: (i * e) / c,
        g1s: s / (c + 126452),
        g1i: ((i - 769860) * e) / (c + 126452),
        b0s: l / f,
        b0i: (u * e) / f,
        b1s: l / (f + 126452),
        b1i: ((u - 769860) * e) / (f + 126452),
    };
}
function t8(e, t) {
    let r = (t / 360) * Math.PI * 2;
    return Math.min(
        t3(e.r0s, e.r0i, r),
        t3(e.r1s, e.r1i, r),
        t3(e.g0s, e.g0i, r),
        t3(e.g1s, e.g1i, r),
        t3(e.b0s, e.b0i, r),
        t3(e.b1s, e.b1i, r),
    );
}
var t9 = new B({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tH,
    gamutSpace: ti,
    fromBase(e) {
        let t,
            [r, a, n] = [l(e[0]), l(e[1]), l(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (a / t8(t6(r), n)) * 100),
            [n, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, a, n] = [l(e[0]), l(e[1]), l(e[2])];
        return (
            n > 99.9999999 ? ((n = 100), (t = 0)) : n < 1e-8 ? ((n = 0), (t = 0)) : (t = (t8(t6(n), r) / 100) * a),
            [n, t, r]
        );
    },
    formats: {
        color: { id: "--hsluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
function t4(e, t) {
    return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function t7(e) {
    return Math.min(
        t4(e.r0s, e.r0i),
        t4(e.r1s, e.r1i),
        t4(e.g0s, e.g0i),
        t4(e.g1s, e.g1i),
        t4(e.b0s, e.b0i),
        t4(e.b1s, e.b1i),
    );
}
tr[0][0], tr[0][1], tr[0][2], tr[1][0], tr[1][1], tr[1][2], tr[2][0], tr[2][1], tr[2][2];
var re = new B({
    id: "hpluv",
    name: "HPLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tH,
    gamutSpace: "self",
    fromBase(e) {
        let t,
            [r, a, n] = [l(e[0]), l(e[1]), l(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (a / t7(t6(r))) * 100),
            [n, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, a, n] = [l(e[0]), l(e[1]), l(e[2])];
        return (
            n > 99.9999999 ? ((n = 100), (t = 0)) : n < 1e-8 ? ((n = 0), (t = 0)) : (t = (t7(t6(n)) / 100) * a),
            [n, t, r]
        );
    },
    formats: {
        color: { id: "--hpluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let rt = 2610 / 16384,
    rr = 16384 / 2610,
    ra = 32 / 2523;
var rn = new I({
        id: "rec2100pq",
        cssId: "rec2100-pq",
        name: "REC.2100-PQ",
        base: e7,
        toBase: (e) =>
            e.map(function (e) {
                return (1e4 * (Math.max(e ** ra - 0.8359375, 0) / (18.8515625 - 18.6875 * e ** ra)) ** rr) / 203;
            }),
        fromBase: (e) =>
            e.map(function (e) {
                let t = Math.max((203 * e) / 1e4, 0);
                return ((0.8359375 + 18.8515625 * t ** rt) / (1 + 18.6875 * t ** rt)) ** 78.84375;
            }),
    }),
    ro = new I({
        id: "rec2100hlg",
        cssId: "rec2100-hlg",
        name: "REC.2100-HLG",
        referred: "scene",
        base: e7,
        toBase: (e) =>
            e.map(function (e) {
                return e <= 0.5
                    ? (e ** 2 / 3) * 3.7743
                    : ((Math.exp((e - 0.55991073) / 0.17883277) + 0.28466892) / 12) * 3.7743;
            }),
        fromBase: (e) =>
            e.map(function (e) {
                return (e /= 3.7743) <= 1 / 12
                    ? Math.sqrt(3 * e)
                    : 0.17883277 * Math.log(12 * e - 0.28466892) + 0.55991073;
            }),
    });
let rs = {};
function ri({ id: e, toCone_M: t, fromCone_M: r }) {
    rs[e] = arguments[0];
}
function rc(e, t, r = "Bradford") {
    let a = rs[r],
        [o, s, i] = n(a.toCone_M, e),
        [c, l, u] = n(a.toCone_M, t),
        f = n(
            [
                [c / o, 0, 0],
                [0, l / s, 0],
                [0, 0, u / i],
            ],
            a.toCone_M,
        );
    return n(a.fromCone_M, f);
}
k.add("chromatic-adaptation-start", (e) => {
    e.options.method && (e.M = rc(e.W1, e.W2, e.options.method));
}),
    k.add("chromatic-adaptation-end", (e) => {
        e.M || (e.M = rc(e.W1, e.W2, e.options.method));
    }),
    ri({
        id: "von Kries",
        toCone_M: [
            [0.40024, 0.7076, -0.08081],
            [-0.2263, 1.16532, 0.0457],
            [0, 0, 0.91822],
        ],
        fromCone_M: [
            [1.8599363874558397, -1.1293816185800916, 0.21989740959619328],
            [0.3611914362417676, 0.6388124632850422, -6370596838649899e-21],
            [0, 0, 1.0890636230968613],
        ],
    }),
    ri({
        id: "Bradford",
        toCone_M: [
            [0.8951, 0.2664, -0.1614],
            [-0.7502, 1.7135, 0.0367],
            [0.0389, -0.0685, 1.0296],
        ],
        fromCone_M: [
            [0.9869929054667121, -0.14705425642099013, 0.15996265166373122],
            [0.4323052697233945, 0.5183602715367774, 0.049291228212855594],
            [-0.00852866457517732, 0.04004282165408486, 0.96848669578755],
        ],
    }),
    ri({
        id: "CAT02",
        toCone_M: [
            [0.7328, 0.4296, -0.1624],
            [-0.7036, 1.6975, 0.0061],
            [0.003, 0.0136, 0.9834],
        ],
        fromCone_M: [
            [1.0961238208355142, -0.27886900021828726, 0.18274517938277307],
            [0.4543690419753592, 0.4735331543074117, 0.07209780371722911],
            [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427],
        ],
    }),
    ri({
        id: "CAT16",
        toCone_M: [
            [0.401288, 0.650173, -0.051461],
            [-0.250268, 1.204414, 0.045854],
            [-0.002079, 0.048952, 0.953127],
        ],
        fromCone_M: [
            [1.862067855087233, -1.0112546305316845, 0.14918677544445172],
            [0.3875265432361372, 0.6214474419314753, -0.008973985167612521],
            [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496],
        ],
    }),
    Object.assign(E, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435],
    }),
    (E.ACES = [0.32168 / 0.33767, 1, 1.0088251843515859]);
var rl = new I({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    coords: {
        r: { range: [0, 65504], name: "Red" },
        g: { range: [0, 65504], name: "Green" },
        b: { range: [0, 65504], name: "Blue" },
    },
    referred: "scene",
    white: E.ACES,
    toXYZ_M: [
        [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
        [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
        [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971],
    ],
    fromXYZ_M: [
        [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
        [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
        [0.011721894328375376, -0.008284441996237409, 0.9883948585390215],
    ],
});
let ru = (Math.log2(65504) + 9.72) / 17.52;
var rf = Object.freeze({
    __proto__: null,
    A98RGB: tP,
    A98RGB_Linear: tB,
    ACEScc: new I({
        id: "acescc",
        cssId: "--acescc",
        name: "ACEScc",
        coords: {
            r: { range: [-0.35828683, ru], name: "Red" },
            g: { range: [-0.35828683, ru], name: "Green" },
            b: { range: [-0.35828683, ru], name: "Blue" },
        },
        referred: "scene",
        base: rl,
        toBase(e) {
            let t = (9.72 - 15) / 17.52;
            return e.map(function (e) {
                return e <= t
                    ? (2 ** (17.52 * e - 9.72) - 152587890625e-16) * 2
                    : e < ru
                      ? 2 ** (17.52 * e - 9.72)
                      : 65504;
            });
        },
        fromBase: (e) =>
            e.map(function (e) {
                return e <= 0
                    ? (Math.log2(152587890625e-16) + 9.72) / 17.52
                    : e < 152587890625e-16
                      ? (Math.log2(152587890625e-16 + 0.5 * e) + 9.72) / 17.52
                      : (Math.log2(e) + 9.72) / 17.52;
            }),
    }),
    ACEScg: rl,
    CAM16_JMh: eZ,
    HCT: eQ,
    HPLuv: re,
    HSL: tj,
    HSLuv: t9,
    HSV: tS,
    HWB: tN,
    ICTCP: ej,
    JzCzHz: ew,
    Jzazbz: ev,
    LCH: Y,
    LCHuv: tH,
    Lab: H,
    Lab_D65: ty,
    Luv: tG,
    OKLCH: tF,
    OKLab: en,
    P3: tc,
    P3_Linear: tt,
    ProPhoto: tL,
    ProPhoto_Linear: tD,
    REC_2020: te,
    REC_2020_Linear: e7,
    REC_2100_HLG: ro,
    REC_2100_PQ: rn,
    XYZ_ABS_D65: eu,
    XYZ_D50: q,
    XYZ_D65: D,
    sRGB: ti,
    sRGB_Linear: ta,
});
class rb {
    constructor(...e) {
        let t, r, a, n;
        1 === e.length && (t = N(e[0])),
            t ? ((r = t.space || t.spaceId), (a = t.coords), (n = t.alpha)) : ([r, a, n] = e),
            Object.defineProperty(this, "space", { value: B.get(r), writable: !1, enumerable: !0, configurable: !0 }),
            (this.coords = a ? a.slice() : [0, 0, 0]),
            (this.alpha = n > 1 || void 0 === n ? 1 : n < 0 ? 0 : n);
        for (let e = 0; e < this.coords.length; e++) "NaN" === this.coords[e] && (this.coords[e] = NaN);
        for (let e in this.space.coords)
            Object.defineProperty(this, e, { get: () => this.get(e), set: (t) => this.set(e, t) });
    }
    get spaceId() {
        return this.space.id;
    }
    clone() {
        return new rb(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
    }
    display(...e) {
        let t = (function (e, { space: t = C.display_space, ...r } = {}) {
            let n = e4(e, r);
            if ("u" < typeof CSS || CSS.supports("color", n) || !C.display_space) (n = new String(n)).color = e;
            else {
                let o = e;
                if (
                    (e.coords.some(c) || c(e.alpha)) &&
                    !(a ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
                    (((o = ei(e)).coords = o.coords.map(l)),
                    (o.alpha = l(o.alpha)),
                    (n = e4(o, r)),
                    CSS.supports("color", n))
                )
                    return ((n = new String(n)).color = o), n;
                (n = new String(e4((o = e9(o, t)), r))).color = o;
            }
            return n;
        })(this, ...e);
        return (t.color = new rb(t.color)), t;
    }
    static get(e, ...t) {
        return e instanceof rb ? e : new rb(e, ...t);
    }
    static defineFunction(e, t, r = t) {
        let { instance: a = !0, returns: n } = r,
            o = function (...e) {
                let r = t(...e);
                if ("color" === n) r = rb.get(r);
                else if ("function<color>" === n) {
                    let e = r;
                    Object.assign(
                        (r = function (...t) {
                            let r = e(...t);
                            return rb.get(r);
                        }),
                        e,
                    );
                } else "array<color>" === n && (r = r.map((e) => rb.get(e)));
                return r;
            };
        e in rb || (rb[e] = o),
            a &&
                (rb.prototype[e] = function (...e) {
                    return o(this, ...e);
                });
    }
    static defineFunctions(e) {
        for (let t in e) rb.defineFunction(t, e[t], e[t]);
    }
    static extend(e) {
        if (e.register) e.register(rb);
        else for (let t in e) rb.defineFunction(t, e[t]);
    }
}
for (let e of (rb.defineFunctions({
    get: L,
    getAll: T,
    set: z,
    setAll: F,
    to: e9,
    equals: function (e, t) {
        return (
            (e = N(e)),
            (t = N(t)),
            e.space === t.space && e.alpha === t.alpha && e.coords.every((e, r) => e === t.coords[r])
        );
    },
    inGamut: es,
    toGamut: e3,
    distance: ec,
    toString: e4,
}),
Object.assign(rb, { util: O, hooks: k, WHITES: E, Space: B, spaces: B.registry, parse: S, defaults: C }),
Object.keys(rf)))
    B.register(rf[e]);
for (let e in B.registry) rd(e, B.registry[e]);
function rd(e, t) {
    let r = e.replace(/-/g, "_");
    Object.defineProperty(rb.prototype, r, {
        get() {
            let r = this.getAll(e);
            return "u" < typeof Proxy
                ? r
                : new Proxy(r, {
                      has: (e, r) => {
                          try {
                              return B.resolveCoord([t, r]), !0;
                          } catch (e) {}
                          return Reflect.has(e, r);
                      },
                      get: (e, r, a) => {
                          if (r && "symbol" != typeof r && !(r in e)) {
                              let { index: a } = B.resolveCoord([t, r]);
                              if (a >= 0) return e[a];
                          }
                          return Reflect.get(e, r, a);
                      },
                      set: (r, a, n, o) => {
                          if ((a && "symbol" != typeof a && !(a in r)) || a >= 0) {
                              let { index: o } = B.resolveCoord([t, a]);
                              if (o >= 0) return (r[o] = n), this.setAll(e, r), !0;
                          }
                          return Reflect.set(r, a, n, o);
                      },
                  });
        },
        set(t) {
            this.setAll(e, t);
        },
        configurable: !0,
        enumerable: !0,
    });
}
k.add("colorspace-init-end", (e) => {
    rd(e.id, e),
        e.aliases?.forEach((t) => {
            rd(t, e);
        });
}),
    rb.extend(e2),
    rb.extend({ deltaE: tO }),
    Object.assign(rb, { deltaEMethods: e2 }),
    rb.extend(tk),
    rb.extend({
        contrast: function (e, t, r = {}) {
            o(r) && (r = { algorithm: r });
            let { algorithm: a, ...n } = r;
            if (!a) {
                let e = Object.keys(tv)
                    .map((e) => e.replace(/^contrast/, ""))
                    .join(", ");
                throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`);
            }
            for (let r in ((e = N(e)), (t = N(t)), tv))
                if ("contrast" + a.toLowerCase() === r.toLowerCase()) return tv[r](e, t, n);
            throw TypeError(`Unknown contrast algorithm: ${a}`);
        },
    }),
    rb.extend(tA),
    rb.extend(tf),
    rb.extend(t_),
    rb.extend(tv);
