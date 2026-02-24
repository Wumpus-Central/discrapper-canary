"use strict";
let r;
function i(e, t) {
    let n = e.length;
    Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((e) => [e]));
    let r = t[0].length,
        i = t[0].map((e, n) => t.map((e) => e[n])),
        s = e.map((e) =>
            i.map((t) => {
                let n = 0;
                if (!Array.isArray(e)) {
                    for (let r of t) n += e * r;
                    return n;
                }
                for (let r = 0; r < e.length; r++) n += e[r] * (t[r] || 0);
                return n;
            }),
        );
    return (1 === n && (s = s[0]), 1 === r) ? s.map((e) => e[0]) : s;
}
function s(e) {
    return "string" === a(e);
}
function a(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function o(e, { precision: t, unit: n }) {
    return l(e) ? "none" : c(e, t) + (n ?? "");
}
function l(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function u(e) {
    return l(e) ? 0 : e;
}
function c(e, t) {
    if (0 === e) return 0;
    let n = ~~e,
        r = 0;
    n && t && (r = ~~Math.log10(Math.abs(n)) + 1);
    let i = 10 ** (t - r);
    return Math.floor(e * i + 0.5) / i;
}
n.d(t, { A: () => rg });
let d = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function _(e) {
    if (!e) return;
    e = e.trim();
    let t = /^([a-z]+)\((.+?)\)$/i,
        n = /^-?[\d.]+$/,
        r = /%|deg|g?rad|turn$/,
        i = /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g,
        s = e.match(t);
    if (s) {
        let e = [];
        return (
            s[2].replace(i, (t, i) => {
                let s = i.match(r),
                    a = i;
                if (s) {
                    let e = s[0],
                        t = a.slice(0, -e.length);
                    "%" === e
                        ? ((a = new Number(t / 100)).type = "<percentage>")
                        : (((a = new Number(t * d[e])).type = "<angle>"), (a.unit = e));
                } else
                    n.test(a)
                        ? ((a = new Number(a)).type = "<number>")
                        : "none" === a && ((a = new Number(NaN)).none = !0);
                t.startsWith("/") && ((a = a instanceof Number ? a : new Number(a)).alpha = !0),
                    "object" == typeof a && a instanceof Number && (a.raw = i),
                    e.push(a);
            }),
            { name: s[1].toLowerCase(), rawName: s[1], rawArgs: s[2], args: e }
        );
    }
}
function f(e) {
    return e[e.length - 1];
}
function p(e, t, n) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * n;
}
function h(e, t, n) {
    return (n - e) / (t - e);
}
function m(e, t, n) {
    return p(t[0], t[1], h(e[0], e[1], n));
}
function E(e) {
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
function g(e, t, n) {
    return Math.max(Math.min(n, t), e);
}
function A(e, t) {
    return Math.sign(e) === Math.sign(t) ? e : -e;
}
function I(e, t) {
    return A(Math.abs(e) ** t, e);
}
function T(e, t) {
    return 0 === t ? 0 : e / t;
}
function S(e, t, n = 0, r = e.length) {
    for (; n < r; ) {
        let i = (n + r) >> 1;
        e[i] < t ? (n = i + 1) : (r = i);
    }
    return n;
}
var y = Object.freeze({
    __proto__: null,
    bisectLeft: S,
    clamp: g,
    copySign: A,
    interpolate: p,
    interpolateInv: h,
    isNone: l,
    isString: s,
    last: f,
    mapRange: m,
    multiplyMatrices: i,
    parseCoordGrammar: E,
    parseFunction: _,
    serializeNumber: o,
    skipNone: u,
    spow: I,
    toPrecision: c,
    type: a,
    zdiv: T,
});
class v {
    add(e, t, n) {
        if ("string" != typeof arguments[0]) {
            for (var e in arguments[0]) this.add(e, arguments[0][e], arguments[1]);
            return;
        }
        (Array.isArray(e) ? e : [e]).forEach(function (e) {
            (this[e] = this[e] || []), t && this[e][n ? "unshift" : "push"](t);
        }, this);
    }
    run(e, t) {
        (this[e] = this[e] || []),
            this[e].forEach(function (e) {
                e.call(t && t.context ? t.context : t, t);
            });
    }
}
let N = new v();
var C = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function (e) {
        this.verbose && globalThis?.console?.warn?.(e);
    },
};
let b = { D50: [0.3457 / 0.3585, 1, 0.8251046025104602], D65: [0.3127 / 0.329, 1, 1.0890577507598784] };
function R(e) {
    return Array.isArray(e) ? e : b[e];
}
function O(e, t, n, r = {}) {
    if (((e = R(e)), (t = R(t)), !e || !t))
        throw TypeError(`Missing white point to convert ${!e ? "from" : ""}${!e && !t ? "/" : ""}${!t ? "to" : ""}`);
    if (e === t) return n;
    let s = { W1: e, W2: t, XYZ: n, options: r };
    if (
        (N.run("chromatic-adaptation-start", s),
        s.M ||
            (s.W1 === b.D65 && s.W2 === b.D50
                ? (s.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371],
                  ])
                : s.W1 === b.D50 &&
                  s.W2 === b.D65 &&
                  (s.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124],
                  ])),
        N.run("chromatic-adaptation-end", s),
        s.M)
    )
        return i(s.M, s.XYZ);
    throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
let D = new Set(["<number>", "<percentage>", "<angle>"]);
function L(e, t, n, r) {
    return Object.entries(e.coords).map(([e, i], s) => {
        let a,
            o = t.coordGrammar[s],
            l = r[s],
            u = l?.type;
        if (!(a = l.none ? o.find((e) => D.has(e)) : o.find((e) => e == u))) {
            let t = i.name || e;
            throw TypeError(`${u ?? l.raw} not allowed for ${t} in ${n}()`);
        }
        let c = a.range;
        "<percentage>" === u && (c ||= [0, 1]);
        let d = i.range || i.refRange;
        return c && d && (r[s] = m(c, d, r[s])), a;
    });
}
function w(e, { meta: t } = {}) {
    let n = { str: String(e)?.trim() };
    if ((N.run("parse-start", n), n.color)) return n.color;
    if (((n.parsed = _(n.str)), n.parsed)) {
        let e = n.parsed.name;
        if ("color" === e) {
            let e = n.parsed.args.shift(),
                r = e.startsWith("--") ? e.substring(2) : `--${e}`,
                i = [e, r],
                s = n.parsed.rawArgs.indexOf("/") > 0 ? n.parsed.args.pop() : 1;
            for (let r of P.all) {
                let a = r.getFormat("color");
                if (a && (i.includes(a.id) || a.ids?.filter((e) => i.includes(e)).length)) {
                    let i,
                        o = Object.keys(r.coords).map((e, t) => n.parsed.args[t] || 0);
                    return (
                        a.coordGrammar && (i = L(r, a, "color", o)),
                        t && Object.assign(t, { formatId: "color", types: i }),
                        a.id.startsWith("--") &&
                            !e.startsWith("--") &&
                            C.warn(
                                `${r.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${e}).`,
                            ),
                        e.startsWith("--") &&
                            !a.id.startsWith("--") &&
                            C.warn(
                                `${r.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${e}).`,
                            ),
                        { spaceId: r.id, coords: o, alpha: s }
                    );
                }
            }
            let a = "",
                o = e in P.registry ? e : r;
            if (o in P.registry) {
                let e = P.registry[o].formats?.color?.id;
                e && (a = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (a || "Missing a plugin?"));
        }
        for (let r of P.all) {
            let i = r.getFormat(e);
            if (i && "function" === i.type) {
                let s,
                    a = 1;
                (i.lastAlpha || f(n.parsed.args).alpha) && (a = n.parsed.args.pop());
                let o = n.parsed.args;
                return (
                    i.coordGrammar && (s = L(r, i, e, o)),
                    t && Object.assign(t, { formatId: i.name, types: s }),
                    { spaceId: r.id, coords: o, alpha: a }
                );
            }
        }
    } else
        for (let e of P.all)
            for (let r in e.formats) {
                let i = e.formats[r];
                if ("custom" !== i.type || (i.test && !i.test(n.str))) continue;
                let s = i.parse(n.str);
                if (s) return (s.alpha ??= 1), t && (t.formatId = r), s;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function x(e) {
    if (Array.isArray(e)) return e.map(x);
    if (!e) throw TypeError("Empty color reference");
    s(e) && (e = w(e));
    let t = e.space || e.spaceId;
    return t instanceof P || (e.space = P.get(t)), void 0 === e.alpha && (e.alpha = 1), e;
}
let M = 75e-6;
class P {
    constructor(e) {
        (this.id = e.id),
            (this.name = e.name),
            (this.base = e.base ? P.get(e.base) : null),
            (this.aliases = e.aliases),
            this.base && ((this.fromBase = e.fromBase), (this.toBase = e.toBase));
        let t = e.coords ?? this.base.coords;
        for (let e in t) "name" in t[e] || (t[e].name = e);
        this.coords = t;
        let n = e.white ?? this.base.white ?? "D65";
        for (let t in ((this.white = R(n)), (this.formats = e.formats ?? {}), this.formats)) {
            let e = this.formats[t];
            (e.type ||= "function"), (e.name ||= t);
        }
        this.formats.color?.id || (this.formats.color = { ...(this.formats.color ?? {}), id: e.cssId || this.id }),
            e.gamutSpace
                ? (this.gamutSpace = "self" === e.gamutSpace ? this : P.get(e.gamutSpace))
                : this.isPolar
                  ? (this.gamutSpace = this.base)
                  : (this.gamutSpace = this),
            this.gamutSpace.isUnbounded && (this.inGamut = (e, t) => !0),
            (this.referred = e.referred),
            Object.defineProperty(this, "path", {
                value: k(this).reverse(),
                writable: !1,
                enumerable: !0,
                configurable: !0,
            }),
            N.run("colorspace-init-end", this);
    }
    inGamut(e, { epsilon: t = M } = {}) {
        if (!this.equals(this.gamutSpace))
            return (e = this.to(this.gamutSpace, e)), this.gamutSpace.inGamut(e, { epsilon: t });
        let n = Object.values(this.coords);
        return e.every((e, r) => {
            let i = n[r];
            if ("angle" !== i.type && i.range) {
                if (Number.isNaN(e)) return !0;
                let [n, r] = i.range;
                return (void 0 === n || e >= n - t) && (void 0 === r || e <= r + t);
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
            ? (e = U(e, this))
            : (t = "default" === e ? Object.values(this.formats)[0] : this.formats[e])
              ? (t = U(t, this))
              : null;
    }
    equals(e) {
        return !!e && (this === e || this.id === e || this.id === e.id);
    }
    to(e, t) {
        let n, r;
        if (1 == arguments.length) {
            let n = x(e);
            [e, t] = [n.space, n.coords];
        }
        if (((e = P.get(e)), this.equals(e))) return t;
        t = t.map((e) => (Number.isNaN(e) ? 0 : e));
        let i = this.path,
            s = e.path;
        for (let e = 0; e < i.length; e++)
            if (i[e].equals(s[e])) (n = i[e]), (r = e);
            else break;
        if (!n) throw Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
        for (let e = i.length - 1; e > r; e--) t = i[e].toBase(t);
        for (let e = r + 1; e < s.length; e++) t = s[e].fromBase(t);
        return t;
    }
    from(e, t) {
        if (1 == arguments.length) {
            let n = x(e);
            [e, t] = [n.space, n.coords];
        }
        return (e = P.get(e)).to(this, t);
    }
    toString() {
        return `${this.name} (${this.id})`;
    }
    getMinCoords() {
        let e = [];
        for (let t in this.coords) {
            let n = this.coords[t],
                r = n.range || n.refRange;
            e.push(r?.min ?? 0);
        }
        return e;
    }
    static registry = {};
    static get all() {
        return [...new Set(Object.values(P.registry))];
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
        if (!e || e instanceof P) return e;
        if ("string" === a(e)) {
            let t = P.registry[e.toLowerCase()];
            if (!t) throw TypeError(`No color space found with id = "${e}"`);
            return t;
        }
        if (t.length) return P.get(...t);
        throw TypeError(`${e} is not a valid color space`);
    }
    static resolveCoord(e, t) {
        let n,
            r,
            i = a(e);
        if (
            ("string" === i
                ? e.includes(".")
                    ? ([n, r] = e.split("."))
                    : ([n, r] = [, e])
                : Array.isArray(e)
                  ? ([n, r] = e)
                  : ((n = e.space), (r = e.coordId)),
            (n = P.get(n)) || (n = t),
            !n)
        )
            throw TypeError(
                `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
        if ("number" === (i = a(r)) || ("string" === i && r >= 0)) {
            let e = Object.entries(n.coords)[r];
            if (e) return { space: n, id: e[0], index: r, ...e[1] };
        }
        n = P.get(n);
        let s = r.toLowerCase(),
            o = 0;
        for (let e in n.coords) {
            let t = n.coords[e];
            if (e.toLowerCase() === s || t.name?.toLowerCase() === s) return { space: n, id: e, index: o, ...t };
            o++;
        }
        throw TypeError(
            `No "${r}" coordinate found in ${n.name}. Its coordinates are: ${Object.keys(n.coords).join(", ")}`,
        );
    }
    static DEFAULT_FORMAT = { type: "functions", name: "color" };
}
function k(e) {
    let t = [e];
    for (let n = e; (n = n.base); ) t.push(n);
    return t;
}
function U(e, { coords: t } = {}) {
    if (e.coords && !e.coordGrammar) {
        (e.type ||= "function"), (e.name ||= "color"), (e.coordGrammar = E(e.coords));
        let n = Object.entries(t).map(([t, n], r) => {
            let i = e.coordGrammar[r][0],
                s = n.range || n.refRange,
                a = i.range,
                o = "";
            return (
                "<percentage>" == i ? ((a = [0, 100]), (o = "%")) : "<angle>" == i && (o = "deg"),
                { fromRange: s, toRange: a, suffix: o }
            );
        });
        e.serializeCoords = (e, t) =>
            e.map((e, r) => {
                let { fromRange: i, toRange: s, suffix: a } = n[r];
                return i && s && (e = m(i, s, e)), (e = o(e, { precision: t, unit: a }));
            });
    }
    return e;
}
var G = new P({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
    white: "D65",
    formats: { color: { ids: ["xyz-d65", "xyz"] } },
    aliases: ["xyz"],
});
class F extends P {
    constructor(e) {
        e.coords ||
            (e.coords = {
                r: { range: [0, 1], name: "Red" },
                g: { range: [0, 1], name: "Green" },
                b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = G),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (t) => {
                    let n = i(e.toXYZ_M, t);
                    return this.white !== this.base.white && (n = O(this.white, this.base.white, n)), n;
                }),
                (e.fromBase ??= (t) => ((t = O(this.base.white, this.white, t)), i(e.fromXYZ_M, t)))),
            (e.referred ??= "display"),
            super(e);
    }
}
function V(e, t) {
    return ((e = x(e)), !t || e.space.equals(t)) ? e.coords.slice() : (t = P.get(t)).from(e);
}
function B(e, t) {
    e = x(e);
    let { space: n, index: r } = P.resolveCoord(t, e.space);
    return V(e, n)[r];
}
function H(e, t, n) {
    return (e = x(e)), (t = P.get(t)), (e.coords = t.to(e.space, n)), e;
}
function j(e, t, n) {
    if (((e = x(e)), 2 == arguments.length && "object" === a(arguments[1]))) {
        let t = arguments[1];
        for (let n in t) j(e, n, t[n]);
    } else {
        "function" == typeof n && (n = n(B(e, t)));
        let { space: r, index: i } = P.resolveCoord(t, e.space),
            s = V(e, r);
        (s[i] = n), H(e, r, s);
    }
    return e;
}
(H.returns = "color"), (j.returns = "color");
var Y = new P({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: G,
    fromBase: (e) => O(G.white, "D50", e),
    toBase: (e) => O("D50", G.white, e),
});
let W = 216 / 24389,
    K = 24 / 116,
    z = 24389 / 27,
    $ = b.D50;
var q = new P({
    id: "lab",
    name: "Lab",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: $,
    base: Y,
    fromBase(e) {
        let t = e.map((e, t) => e / $[t]).map((e) => (e > W ? Math.cbrt(e) : (z * e + 16) / 116));
        return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
    },
    toBase(e) {
        let t = [];
        return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
                t[0] > K ? Math.pow(t[0], 3) : (116 * t[0] - 16) / z,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / z,
                t[2] > K ? Math.pow(t[2], 3) : (116 * t[2] - 16) / z,
            ].map((e, t) => e * $[t])
        );
    },
    formats: {
        lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] },
    },
});
function X(e) {
    return ((e % 360) + 360) % 360;
}
function Z(e, t) {
    if ("raw" === e) return t;
    let [n, r] = t.map(X),
        i = r - n;
    return (
        "increasing" === e
            ? i < 0 && (r += 360)
            : "decreasing" === e
              ? i > 0 && (n += 360)
              : "longer" === e
                ? -180 < i && i < 180 && (i > 0 ? (n += 360) : (r += 360))
                : "shorter" === e && (i > 180 ? (n += 360) : i < -180 && (r += 360)),
        [n, r]
    );
}
var Q = new P({
    id: "lch",
    name: "LCH",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        c: { refRange: [0, 150], name: "Chroma" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: q,
    fromBase(e) {
        let t,
            [n, r, i] = e,
            s = 0.02;
        return (
            (t = 0.02 > Math.abs(r) && Math.abs(i) < s ? NaN : (180 * Math.atan2(i, r)) / Math.PI),
            [n, Math.sqrt(r ** 2 + i ** 2), X(t)]
        );
    },
    toBase(e) {
        let [t, n, r] = e;
        return (
            n < 0 && (n = 0),
            isNaN(r) && (r = 0),
            [t, n * Math.cos((r * Math.PI) / 180), n * Math.sin((r * Math.PI) / 180)]
        );
    },
    formats: { lch: { coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"] } },
});
let J = 0x16bcc41e9,
    ee = Math.PI,
    et = 180 / ee,
    en = ee / 180;
function er(e) {
    let t = e * e;
    return t * t * t * e;
}
function ei(e, t, { kL: n = 1, kC: r = 1, kH: i = 1 } = {}) {
    let s, a, o;
    [e, t] = x([e, t]);
    let [l, u, c] = q.from(e),
        d = Q.from(q, [l, u, c])[1],
        [_, f, p] = q.from(t),
        h = Q.from(q, [_, f, p])[1];
    d < 0 && (d = 0), h < 0 && (h = 0);
    let m = er((d + h) / 2),
        E = 0.5 * (1 - Math.sqrt(m / (m + J))),
        g = (1 + E) * u,
        A = (1 + E) * f,
        I = Math.sqrt(g ** 2 + c ** 2),
        T = Math.sqrt(A ** 2 + p ** 2),
        S = 0 === g && 0 === c ? 0 : Math.atan2(c, g),
        y = 0 === A && 0 === p ? 0 : Math.atan2(p, A);
    S < 0 && (S += 2 * ee), y < 0 && (y += 2 * ee), (S *= et);
    let v = _ - l,
        N = T - I,
        b = (y *= et) - S,
        R = S + y,
        O = Math.abs(b);
    I * T == 0
        ? (s = 0)
        : O <= 180
          ? (s = b)
          : b > 180
            ? (s = b - 360)
            : b < -180
              ? (s = b + 360)
              : C.warn("the unthinkable has happened");
    let D = 2 * Math.sqrt(T * I) * Math.sin((s * en) / 2),
        L = (l + _) / 2,
        w = (I + T) / 2,
        M = er(w),
        P = (L - 50) ** 2,
        k = 1 + (0.015 * P) / Math.sqrt(20 + P),
        U = 1 + 0.045 * w,
        G =
            1 +
            0.015 *
                w *
                (o =
                    1 -
                    0.17 *
                        Math.cos(
                            ((a = I * T == 0 ? R : O <= 180 ? R / 2 : R < 360 ? (R + 360) / 2 : (R - 360) / 2) - 30) *
                                en,
                        ) +
                    0.24 * Math.cos(2 * a * en) +
                    0.32 * Math.cos((3 * a + 6) * en) -
                    0.2 * Math.cos((4 * a - 63) * en)),
        F = (v / (n * k)) ** 2;
    return Math.sqrt(
        (F +=
            (N / (r * U)) ** 2 +
            (D / (i * G)) ** 2 +
            (N / (r * U)) *
                (-1 * Math.sin(2 * (30 * Math.exp(-1 * ((a - 275) / 25) ** 2)) * en) * (2 * Math.sqrt(M / (M + J)))) *
                (D / (i * G))),
    );
}
let es = [
        [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
        [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
        [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
    ],
    ea = [
        [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
        [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
        [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
    ],
    eo = [
        [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
        [1.9779985324311684, -2.42859224204858, 0.450593709617411],
        [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
    ],
    el = [
        [1, 0.3963377773761749, 0.2158037573099136],
        [1, -0.1055613458156586, -0.0638541728258133],
        [1, -0.0894841775298119, -1.2914855480194092],
    ];
var eu = new P({
    id: "oklab",
    name: "Oklab",
    coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } },
    white: "D65",
    base: G,
    fromBase(e) {
        let t = i(es, e).map((e) => Math.cbrt(e));
        return i(eo, t);
    },
    toBase(e) {
        let t = i(el, e).map((e) => e ** 3);
        return i(ea, t);
    },
    formats: {
        oklab: {
            coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
        },
    },
});
function ec(e, t) {
    [e, t] = x([e, t]);
    let [n, r, i] = eu.from(e),
        [s, a, o] = eu.from(t);
    return Math.sqrt((n - s) ** 2 + (r - a) ** 2 + (i - o) ** 2);
}
let ed = 75e-6;
function e_(e, t, { epsilon: n = ed } = {}) {
    (e = x(e)), t || (t = e.space), (t = P.get(t));
    let r = e.coords;
    return t !== e.space && (r = t.from(e)), t.inGamut(r, { epsilon: n });
}
function ef(e) {
    return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function ep(e, t, n = "lab") {
    let r = (n = P.get(n)).from(e),
        i = n.from(t);
    return Math.sqrt(
        r.reduce((e, t, n) => {
            let r = i[n];
            return isNaN(t) || isNaN(r) ? e : e + (r - t) ** 2;
        }, 0),
    );
}
function eh(e, t) {
    return ep(e, t, "lab");
}
let em = Math.PI / 180;
function eE(e, t, { l: n = 2, c: r = 1 } = {}) {
    let i;
    [e, t] = x([e, t]);
    let [s, a, o] = q.from(e),
        [, l, u] = Q.from(q, [s, a, o]),
        [c, d, _] = q.from(t),
        f = Q.from(q, [c, d, _])[1];
    l < 0 && (l = 0), f < 0 && (f = 0);
    let p = s - c,
        h = l - f,
        m = (a - d) ** 2 + (o - _) ** 2 - h ** 2,
        E = 0.511;
    s >= 16 && (E = (0.040975 * s) / (1 + 0.01765 * s));
    let g = (0.0638 * l) / (1 + 0.0131 * l) + 0.638;
    Number.isNaN(u) && (u = 0);
    let A = Math.pow(l, 4),
        I = Math.sqrt(A / (A + 1900)),
        T =
            g *
            (I *
                (i =
                    u >= 164 && u <= 345
                        ? 0.56 + Math.abs(0.2 * Math.cos((u + 168) * em))
                        : 0.36 + Math.abs(0.4 * Math.cos((u + 35) * em))) +
                1 -
                I),
        S = (p / (n * E)) ** 2;
    return Math.sqrt((S += (h / (r * g)) ** 2 + m / T ** 2));
}
let eg = 203;
var eA = new P({
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
        x: { refRange: [0, 9504.7], name: "Xa" },
        y: { refRange: [0, 1e4], name: "Ya" },
        z: { refRange: [0, 10888.3], name: "Za" },
    },
    base: G,
    fromBase: (e) => e.map((e) => Math.max(e * eg, 0)),
    toBase: (e) => e.map((e) => Math.max(e / eg, 0)),
});
let eI = 1.15,
    eT = 0.66,
    eS = 2610 / 16384,
    ey = 16384 / 2610,
    ev = 0.8359375,
    eN = 18.8515625,
    eC = 18.6875,
    eb = (1.7 * 2523) / 32,
    eR = 32 / (1.7 * 2523),
    eO = -0.56,
    eD = 16295499532821565e-27,
    eL = [
        [0.41478972, 0.579999, 0.014648],
        [-0.20151, 1.120649, 0.0531008],
        [-0.0166008, 0.2648, 0.6684799],
    ],
    ew = [
        [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
        [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
        [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603],
    ],
    ex = [
        [0.5, 0.5, 0],
        [3.524, -4.066708, 0.542708],
        [0.199076, 1.096799, -1.295875],
    ],
    eM = [
        [1, 0.1386050432715393, 0.05804731615611886],
        [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
        [0.9999999999999998, -0.09601924202631895, -0.8118918960560388],
    ];
var eP = new P({
        id: "jzazbz",
        name: "Jzazbz",
        coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } },
        base: eA,
        fromBase(e) {
            let [t, n, r] = e,
                s = i(eL, [eI * t - (eI - 1) * r, eT * n - (eT - 1) * t, r]).map(function (e) {
                    let t = ev + eN * (e / 1e4) ** eS,
                        n = 1 + eC * (e / 1e4) ** eS;
                    return (t / n) ** eb;
                }),
                [a, o, l] = i(ex, s);
            return [((1 + eO) * a) / (1 + eO * a) - eD, o, l];
        },
        toBase(e) {
            let [t, n, r] = e,
                s = i(eM, [(t + eD) / (1 + eO - eO * (t + eD)), n, r]).map(function (e) {
                    let t = ev - e ** eR,
                        n = eC * e ** eR - eN;
                    return 1e4 * (t / n) ** ey;
                }),
                [a, o, l] = i(ew, s),
                u = (a + (eI - 1) * l) / eI,
                c = (o + (eT - 1) * u) / eT;
            return [u, c, l];
        },
        formats: {
            color: {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    ek = new P({
        id: "jzczhz",
        name: "JzCzHz",
        coords: {
            jz: { refRange: [0, 1], name: "Jz" },
            cz: { refRange: [0, 1], name: "Chroma" },
            hz: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: eP,
        fromBase(e) {
            let t,
                [n, r, i] = e,
                s = 2e-4;
            return (
                (t = 2e-4 > Math.abs(r) && Math.abs(i) < s ? NaN : (180 * Math.atan2(i, r)) / Math.PI),
                [n, Math.sqrt(r ** 2 + i ** 2), X(t)]
            );
        },
        toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)],
    });
function eU(e, t) {
    [e, t] = x([e, t]);
    let [n, r, i] = ek.from(e),
        [s, a, o] = ek.from(t),
        l = n - s,
        u = r - a;
    return (
        Number.isNaN(i) && Number.isNaN(o)
            ? ((i = 0), (o = 0))
            : Number.isNaN(i)
              ? (i = o)
              : Number.isNaN(o) && (o = i),
        Math.sqrt(l ** 2 + u ** 2 + (2 * Math.sqrt(r * a) * Math.sin(((i - o) / 2) * (Math.PI / 180))) ** 2)
    );
}
let eG = 0.8359375,
    eF = 2413 / 128,
    eV = 18.6875,
    eB = 2610 / 16384,
    eH = 2523 / 32,
    ej = 16384 / 2610,
    eY = 32 / 2523,
    eW = [
        [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
        [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
        [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
    ],
    eK = [
        [0.5, 0.5, 0],
        [6610 / 4096, -13613 / 4096, 7003 / 4096],
        [17933 / 4096, -17390 / 4096, -543 / 4096],
    ],
    ez = [
        [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
        [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
        [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
    ],
    e$ = [
        [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
        [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
        [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
    ];
var eq = new P({
    id: "ictcp",
    name: "ICTCP",
    coords: {
        i: { refRange: [0, 1], name: "I" },
        ct: { refRange: [-0.5, 0.5], name: "CT" },
        cp: { refRange: [-0.5, 0.5], name: "CP" },
    },
    base: eA,
    fromBase: (e) => eX(i(eW, e)),
    toBase: (e) => i(e$, eZ(e)),
});
function eX(e) {
    return i(
        eK,
        e.map(function (e) {
            let t = eG + eF * (e / 1e4) ** eB,
                n = 1 + eV * (e / 1e4) ** eB;
            return (t / n) ** eH;
        }),
    );
}
function eZ(e) {
    return i(ez, e).map(function (e) {
        let t = Math.max(e ** eY - eG, 0),
            n = eF - eV * e ** eY;
        return 1e4 * (t / n) ** ej;
    });
}
function eQ(e, t) {
    [e, t] = x([e, t]);
    let [n, r, i] = eq.from(e),
        [s, a, o] = eq.from(t);
    return 720 * Math.sqrt((n - s) ** 2 + 0.25 * (r - a) ** 2 + (i - o) ** 2);
}
let eJ = b.D65,
    e0 = 0.42,
    e1 = 2.380952380952381,
    e2 = 2 * Math.PI,
    e3 = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127],
    ],
    e6 = [
        [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
        [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
        [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
    ],
    e4 = [
        [460, 451, 288],
        [460, -891, -261],
        [460, -220, -6300],
    ],
    e5 = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] },
    e7 = [20.14, 90, 164.25, 237.53, 380.14],
    e8 = [0.8, 0.7, 1, 1.2, 0.8],
    e9 = [0, 100, 200, 300, 400],
    te = 180 / Math.PI,
    tt = Math.PI / 180;
function tn(e, t) {
    return e.map((e) => {
        let n = I(t * Math.abs(e) * 0.01, e0);
        return (400 * A(n, e)) / (n + 27.13);
    });
}
function tr(e, t) {
    let n = (100 / t) * 27.13 ** e1;
    return e.map((e) => {
        let t = Math.abs(e);
        return A(n * I(t / (400 - t), e1), e);
    });
}
function ti(e) {
    let t = X(e);
    t <= e7[0] && (t += 360);
    let n = S(e7, t) - 1,
        [r, i] = e7.slice(n, n + 2),
        [s, a] = e8.slice(n, n + 2),
        o = e9[n],
        l = (t - r) / s;
    return o + (100 * l) / (l + (i - t) / a);
}
function ts(e) {
    let t = ((e % 400) + 400) % 400,
        n = Math.floor(0.01 * t);
    t %= 100;
    let [r, i] = e7.slice(n, n + 2),
        [s, a] = e8.slice(n, n + 2);
    return X((t * (a * r - s * i) - 100 * r * a) / (t * (a - s) - 100 * a));
}
function ta(e, t, n, r, s) {
    let a = {};
    (a.discounting = s), (a.refWhite = e), (a.surround = r);
    let o = e.map((e) => 100 * e);
    (a.la = t), (a.yb = n);
    let l = o[1],
        u = i(e3, o),
        c = (r = e5[a.surround])[0];
    (a.c = r[1]), (a.nc = r[2]);
    let d = (1 / (5 * a.la + 1)) ** 4;
    (a.fl = d * a.la + 0.1 * (1 - d) * (1 - d) * Math.cbrt(5 * a.la)),
        (a.flRoot = a.fl ** 0.25),
        (a.n = a.yb / l),
        (a.z = 1.48 + Math.sqrt(a.n)),
        (a.nbb = 0.725 * a.n ** -0.2),
        (a.ncb = a.nbb);
    let _ = s ? 1 : Math.max(Math.min(c * (1 - (1 / 3.6) * Math.exp((-a.la - 42) / 92)), 1), 0);
    (a.dRgb = u.map((e) => p(1, l / e, _))), (a.dRgbInv = a.dRgb.map((e) => 1 / e));
    let f = tn(
        u.map((e, t) => e * a.dRgb[t]),
        a.fl,
    );
    return (a.aW = a.nbb * (2 * f[0] + f[1] + 0.05 * f[2])), a;
}
let to = ta(eJ, (64 / Math.PI) * 0.2, 20, "average", !1);
function tl(e, t) {
    if (!((void 0 !== e.J) ^ (void 0 !== e.Q))) throw Error("Conversion requires one and only one: 'J' or 'Q'");
    if (!((void 0 !== e.C) ^ (void 0 !== e.M) ^ (void 0 !== e.s)))
        throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
    if (!((void 0 !== e.h) ^ (void 0 !== e.H))) throw Error("Conversion requires one and only one: 'h' or 'H'");
    if (0 === e.J || 0 === e.Q) return [0, 0, 0];
    let n = 0,
        r = Math.cos((n = void 0 !== e.h ? X(e.h) * tt : ts(e.H) * tt)),
        s = Math.sin(n),
        a = 0;
    void 0 !== e.J ? (a = 0.1 * I(e.J, 0.5)) : void 0 !== e.Q && (a = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
    let o = 0;
    void 0 !== e.C
        ? (o = e.C / a)
        : void 0 !== e.M
          ? (o = e.M / t.flRoot / a)
          : void 0 !== e.s && (o = (4e-4 * e.s ** 2 * (t.aW + 4)) / t.c);
    let l = I(o * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
        u = 0.25 * (Math.cos(n + 2) + 3.8),
        c = t.aW * I(a, 2 / t.c / t.z),
        d = (5e4 / 13) * t.nc * t.ncb * u,
        _ = c / t.nbb,
        f = 23 * (_ + 0.305) * T(l, 23 * d + l * (11 * r + 108 * s)),
        p = tr(
            i(e4, [_, f * r, f * s]).map((e) => e / 1403),
            t.fl,
        );
    return i(
        e6,
        p.map((e, n) => e * t.dRgbInv[n]),
    ).map((e) => e / 100);
}
function tu(e, t) {
    let n = tn(
            i(
                e3,
                e.map((e) => 100 * e),
            ).map((e, n) => e * t.dRgb[n]),
            t.fl,
        ),
        r = n[0] + (-12 * n[1] + n[2]) / 11,
        s = (n[0] + n[1] - 2 * n[2]) / 9,
        a = ((Math.atan2(s, r) % e2) + e2) % e2,
        o = 0.25 * (Math.cos(a + 2) + 3.8),
        l =
            I((5e4 / 13) * t.nc * t.ncb * T(o * Math.sqrt(r ** 2 + s ** 2), n[0] + n[1] + 1.05 * n[2] + 0.305), 0.9) *
            Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        u = I((t.nbb * (2 * n[0] + n[1] + 0.05 * n[2])) / t.aW, 0.5 * t.c * t.z),
        c = 100 * I(u, 2),
        d = (4 / t.c) * u * (t.aW + 4) * t.flRoot,
        _ = l * u,
        f = _ * t.flRoot,
        p = X(a * te),
        h = ti(p);
    return { J: c, C: _, h: p, s: 50 * I((t.c * l) / (t.aW + 4), 0.5), Q: d, M: f, H: h };
}
var tc = new P({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
        j: { refRange: [0, 100], name: "J" },
        m: { refRange: [0, 105], name: "Colorfulness" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: G,
    fromBase(e) {
        let t = tu(e, to);
        return [t.J, t.M, t.h];
    },
    toBase: (e) => tl({ J: e[0], M: e[1], h: e[2] }, to),
});
let td = b.D65,
    t_ = 216 / 24389,
    tf = 24389 / 27;
function tp(e) {
    return 116 * (e > t_ ? Math.cbrt(e) : (tf * e + 16) / 116) - 16;
}
function th(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / tf;
}
function tm(e, t) {
    let [n, r, i] = e,
        s = [],
        a = 0;
    if (0 === i) return [0, 0, 0];
    let o = th(i);
    a =
        i > 0
            ? 0.00379058511492914 * i ** 2 + 0.608983189401032 * i + 0.9155088574762233
            : 9514440756550361e-21 * i ** 2 + 0.08693057439788597 * i - 21.928975842194614;
    let l = 2e-12,
        u = 15,
        c = 0,
        d = 1 / 0;
    for (; c <= u; ) {
        let e = Math.abs((s = tl({ J: a, C: r, h: n }, t))[1] - o);
        if (e < d) {
            if (e <= l) return s;
            d = e;
        }
        (a -= ((s[1] - o) * a) / (2 * s[1])), (c += 1);
    }
    return tl({ J: a, C: r, h: n }, t);
}
function tE(e, t) {
    let n = tp(e[1]);
    if (0 === n) return [0, 0, 0];
    let r = tu(e, tg);
    return [X(r.h), r.C, n];
}
let tg = ta(td, (200 / Math.PI) * th(50), 100 * th(50), "average", !1);
var tA = new P({
    id: "hct",
    name: "HCT",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        c: { refRange: [0, 145], name: "Colorfulness" },
        t: { refRange: [0, 100], name: "Tone" },
    },
    base: G,
    fromBase: (e) => tE(e),
    toBase: (e) => tm(e, tg),
    formats: {
        color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let tI = Math.PI / 180,
    tT = [1, 0.007, 0.0228];
function tS(e) {
    e[1] < 0 && (e = tA.fromBase(tA.toBase(e)));
    let t = Math.log(Math.max(1 + tT[2] * e[1] * tg.flRoot, 1)) / tT[2],
        n = e[0] * tI,
        r = t * Math.cos(n),
        i = t * Math.sin(n);
    return [e[2], r, i];
}
var ty = {
    deltaE76: eh,
    deltaECMC: eE,
    deltaE2000: ei,
    deltaEJz: eU,
    deltaEITP: eQ,
    deltaEOK: ec,
    deltaEHCT: function (e, t) {
        [e, t] = x([e, t]);
        let [n, r, i] = tS(tA.from(e)),
            [s, a, o] = tS(tA.from(t));
        return Math.sqrt((n - s) ** 2 + (r - a) ** 2 + (i - o) ** 2);
    },
};
function tv(e) {
    let t = e ? Math.floor(Math.log10(Math.abs(e))) : 0;
    return Math.max(parseFloat(`1e${t - 2}`), 1e-6);
}
let tN = {
    hct: { method: "hct.c", jnd: 2, deltaEMethod: "hct", blackWhiteClamp: {} },
    "hct-tonal": {
        method: "hct.c",
        jnd: 0,
        deltaEMethod: "hct",
        blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 },
    },
};
function tC(
    e,
    { method: t = C.gamut_mapping, space: n, deltaEMethod: r = "", jnd: i = 2, blackWhiteClamp: a = {} } = {},
) {
    let o;
    if (((e = x(e)), s(arguments[1]) ? (n = arguments[1]) : n || (n = e.space), e_(e, (n = P.get(n)), { epsilon: 0 })))
        return e;
    if ("css" === t) o = tO(e, { space: n });
    else {
        if ("clip" === t || e_(e, n)) o = tD(e, n);
        else {
            Object.prototype.hasOwnProperty.call(tN, t) &&
                ({ method: t, jnd: i, deltaEMethod: r, blackWhiteClamp: a } = tN[t]);
            let s = ei;
            if ("" !== r) {
                for (let e in ty)
                    if ("deltae" + r.toLowerCase() === e.toLowerCase()) {
                        s = ty[e];
                        break;
                    }
            }
            let u = tC(tD(e, n), { method: "clip", space: n });
            if (s(e, u) > i) {
                if (3 === Object.keys(a).length) {
                    let t = P.resolveCoord(a.channel),
                        n = B(tD(e, t.space), t.id);
                    if ((l(n) && (n = 0), n >= a.max)) return tD({ space: "xyz-d65", coords: b.D65 }, e.space);
                    if (n <= a.min) return tD({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
                }
                let r = P.resolveCoord(t),
                    u = r.space,
                    c = r.id,
                    d = tD(e, u);
                d.coords.forEach((e, t) => {
                    l(e) && (d.coords[t] = 0);
                });
                let _ = (r.range || r.refRange)[0],
                    f = tv(i),
                    p = _,
                    h = B(d, c);
                for (; h - p > f; ) {
                    let e = ef(d);
                    s(d, (e = tC(e, { space: n, method: "clip" }))) - i < f ? (p = B(d, c)) : (h = B(d, c)),
                        j(d, c, (p + h) / 2);
                }
                o = tD(d, n);
            } else o = u;
        }
        if ("clip" === t || !e_(o, n, { epsilon: 0 })) {
            let e = Object.values(n.coords).map((e) => e.range || []);
            o.coords = o.coords.map((t, n) => {
                let [r, i] = e[n];
                return void 0 !== r && (t = Math.max(r, t)), void 0 !== i && (t = Math.min(t, i)), t;
            });
        }
    }
    return n !== e.space && (o = tD(o, e.space)), (e.coords = o.coords), e;
}
tC.returns = "color";
let tb = { space: eu, coords: [1, 0, 0] },
    tR = { space: eu, coords: [0, 0, 0] };
function tO(e, { space: t } = {}) {
    let n = 0.02,
        r = 1e-4;
    (e = x(e)), t || (t = e.space), (t = P.get(t));
    let i = P.get("oklch");
    if (t.isUnbounded) return tD(e, t);
    let s = tD(e, i),
        a = s.coords[0];
    if (a >= 1) {
        let n = tD(tb, t);
        return (n.alpha = e.alpha), tD(n, t);
    }
    if (a <= 0) {
        let n = tD(tR, t);
        return (n.alpha = e.alpha), tD(n, t);
    }
    if (e_(s, t, { epsilon: 0 })) return tD(s, t);
    function o(e) {
        let n = tD(e, t),
            r = Object.values(t.coords);
        return (
            (n.coords = n.coords.map((e, t) => {
                if ("range" in r[t]) {
                    let [n, i] = r[t].range;
                    return g(n, e, i);
                }
                return e;
            })),
            n
        );
    }
    let l = 0,
        u = s.coords[1],
        c = !0,
        d = ef(s),
        _ = o(d),
        f = ec(_, d);
    if (f < n) return _;
    for (; u - l > r; ) {
        let e = (l + u) / 2;
        if (((d.coords[1] = e), c && e_(d, t, { epsilon: 0 }))) l = e;
        else if ((f = ec((_ = o(d)), d)) < n)
            if (n - f < r) break;
            else (c = !1), (l = e);
        else u = e;
    }
    return _;
}
function tD(e, t, { inGamut: n } = {}) {
    e = x(e);
    let r = (t = P.get(t)).from(e),
        i = { space: t, coords: r, alpha: e.alpha };
    return n && (i = tC(i, !0 === n ? void 0 : n)), i;
}
function tL(e, { precision: t = C.precision, format: n = "default", inGamut: r = !0, ...i } = {}) {
    let s;
    e = x(e);
    let a = n;
    n = e.space.getFormat(n) ?? e.space.getFormat("default") ?? P.DEFAULT_FORMAT;
    let l = e.coords.slice();
    if (((r ||= n.toGamut) && !e_(e) && (l = tC(ef(e), !0 === r ? void 0 : r).coords), "custom" === n.type))
        if (((i.precision = t), n.serialize)) s = n.serialize(l, e.alpha, i);
        else throw TypeError(`format ${a} can only be used to parse colors, not for serialization`);
    else {
        let r = n.name || "color";
        n.serializeCoords ? (l = n.serializeCoords(l, t)) : null !== t && (l = l.map((e) => o(e, { precision: t })));
        let i = [...l];
        if ("color" === r) {
            let t = n.id || n.ids?.[0] || e.space.id;
            i.unshift(t);
        }
        let a = e.alpha;
        null !== t && (a = o(a, { precision: t }));
        let u = e.alpha >= 1 || n.noAlpha ? "" : `${n.commas ? "," : " /"} ${a}`;
        s = `${r}(${i.join(n.commas ? ", " : " ")}${u})`;
    }
    return s;
}
tD.returns = "color";
var tw = new F({
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
});
let tx = 1.09929682680944,
    tM = 0.018053968510807;
var tP = new F({
        id: "rec2020",
        name: "REC.2020",
        base: tw,
        toBase: (e) =>
            e.map(function (e) {
                return e < 4.5 * tM ? e / 4.5 : Math.pow((e + tx - 1) / tx, 1 / 0.45);
            }),
        fromBase: (e) =>
            e.map(function (e) {
                return e >= tM ? tx * Math.pow(e, 0.45) - (tx - 1) : 4.5 * e;
            }),
    }),
    tk = new F({
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
let tU = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
];
var tG = new F({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: [
            [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
            [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
            [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
        ],
        fromXYZ_M: tU,
    }),
    tF = {
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
let tV = [, , ,].fill("<percentage> | <number>[0, 255]"),
    tB = [, , ,].fill("<number>[0, 255]");
var tH = new F({
        id: "srgb",
        name: "sRGB",
        base: tG,
        fromBase: (e) =>
            e.map((e) => {
                let t = e < 0 ? -1 : 1,
                    n = e * t;
                return n > 0.0031308 ? t * (1.055 * n ** (1 / 2.4) - 0.055) : 12.92 * e;
            }),
        toBase: (e) =>
            e.map((e) => {
                let t = e < 0 ? -1 : 1,
                    n = e * t;
                return n <= 0.04045 ? e / 12.92 : t * ((n + 0.055) / 1.055) ** 2.4;
            }),
        formats: {
            rgb: { coords: tV },
            rgb_number: { name: "rgb", commas: !0, coords: tB, noAlpha: !0 },
            color: {},
            rgba: { coords: tV, commas: !0, lastAlpha: !0 },
            rgba_number: { name: "rgba", commas: !0, coords: tB },
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
                serialize: (e, t, { collapse: n = !0 } = {}) => {
                    t < 1 && e.push(t), (e = e.map((e) => Math.round(255 * e)));
                    let r = n && e.every((e) => e % 17 == 0);
                    return "#" + e.map((e) => (r ? (e / 17).toString(16) : e.toString(16).padStart(2, "0"))).join("");
                },
            },
            keyword: {
                type: "custom",
                test: (e) => /^[a-z]+$/i.test(e),
                parse(e) {
                    e = e.toLowerCase();
                    let t = { spaceId: "srgb", coords: null, alpha: 1 };
                    if (("transparent" === e ? ((t.coords = tF.black), (t.alpha = 0)) : (t.coords = tF[e]), t.coords))
                        return t;
                },
            },
        },
    }),
    tj = new F({ id: "p3", cssId: "display-p3", name: "P3", base: tk, fromBase: tH.fromBase, toBase: tH.toBase });
if (((C.display_space = tH), "u" > typeof CSS && CSS.supports))
    for (let e of [q, tP, tj]) {
        let t = e.getMinCoords(),
            n = tL({ space: e, coords: t, alpha: 1 });
        if (CSS.supports("color", n)) {
            C.display_space = e;
            break;
        }
    }
function tY(e, { space: t = C.display_space, ...n } = {}) {
    let i = tL(e, n);
    if ("u" < typeof CSS || CSS.supports("color", i) || !C.display_space) (i = new String(i)).color = e;
    else {
        let s = e;
        if (
            (e.coords.some(l) || l(e.alpha)) &&
            !(r ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
            (((s = ef(e)).coords = s.coords.map(u)), (s.alpha = u(s.alpha)), (i = tL(s, n)), CSS.supports("color", i))
        )
            return ((i = new String(i)).color = s), i;
        (i = new String(tL((s = tD(s, t)), n))).color = s;
    }
    return i;
}
function tW(e, t) {
    return (
        (e = x(e)),
        (t = x(t)),
        e.space === t.space && e.alpha === t.alpha && e.coords.every((e, n) => e === t.coords[n])
    );
}
function tK(e) {
    return B(e, [G, "y"]);
}
function tz(e, t) {
    j(e, [G, "y"], t);
}
function t$(e) {
    Object.defineProperty(e.prototype, "luminance", {
        get() {
            return tK(this);
        },
        set(e) {
            tz(this, e);
        },
    });
}
var tq = Object.freeze({ __proto__: null, getLuminance: tK, register: t$, setLuminance: tz });
function tX(e, t) {
    (e = x(e)), (t = x(t));
    let n = Math.max(tK(e), 0),
        r = Math.max(tK(t), 0);
    return r > n && ([n, r] = [r, n]), (n + 0.05) / (r + 0.05);
}
let tZ = 0.56,
    tQ = 0.57,
    tJ = 0.62,
    t0 = 0.65,
    t1 = 0.022,
    t2 = 1.414,
    t3 = 0.1,
    t6 = 5e-4,
    t4 = 1.14,
    t5 = 0.027,
    t7 = 1.14;
function t8(e) {
    return e >= t1 ? e : e + (t1 - e) ** t2;
}
function t9(e) {
    return (e < 0 ? -1 : 1) * Math.pow(Math.abs(e), 2.4);
}
function ne(e, t) {
    let n, r, i, s, a, o;
    (t = x(t)), (e = x(e)), (t = tD(t, "srgb")), ([s, a, o] = t.coords);
    let l = 0.2126729 * t9(s) + 0.7151522 * t9(a) + 0.072175 * t9(o);
    (e = tD(e, "srgb")), ([s, a, o] = e.coords);
    let u = 0.2126729 * t9(s) + 0.7151522 * t9(a) + 0.072175 * t9(o),
        c = t8(l),
        d = t8(u),
        _ = d > c;
    return (
        100 *
        (i =
            Math.abs((r = Math.abs(d - c) < t6 ? 0 : _ ? (n = d ** tZ - c ** tQ) * t4 : (n = d ** t0 - c ** tJ) * t7)) <
            t3
                ? 0
                : r > 0
                  ? r - t5
                  : r + t5)
    );
}
function nt(e, t) {
    (e = x(e)), (t = x(t));
    let n = Math.max(tK(e), 0),
        r = Math.max(tK(t), 0);
    r > n && ([n, r] = [r, n]);
    let i = n + r;
    return 0 === i ? 0 : (n - r) / i;
}
let nn = 5e4;
function nr(e, t) {
    (e = x(e)), (t = x(t));
    let n = Math.max(tK(e), 0),
        r = Math.max(tK(t), 0);
    return r > n && ([n, r] = [r, n]), 0 === r ? nn : (n - r) / r;
}
function ni(e, t) {
    return (e = x(e)), (t = x(t)), Math.abs(B(e, [q, "l"]) - B(t, [q, "l"]));
}
let ns = 216 / 24389,
    na = 24 / 116,
    no = 24389 / 27,
    nl = b.D65;
var nu = new P({
    id: "lab-d65",
    name: "Lab D65",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: nl,
    base: G,
    fromBase(e) {
        let t = e.map((e, t) => e / nl[t]).map((e) => (e > ns ? Math.cbrt(e) : (no * e + 16) / 116));
        return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
    },
    toBase(e) {
        let t = [];
        return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
                t[0] > na ? Math.pow(t[0], 3) : (116 * t[0] - 16) / no,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / no,
                t[2] > na ? Math.pow(t[2], 3) : (116 * t[2] - 16) / no,
            ].map((e, t) => e * nl[t])
        );
    },
    formats: {
        "lab-d65": {
            coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
        },
    },
});
let nc = 1.618033988749895;
var nd = Object.freeze({
    __proto__: null,
    contrastAPCA: ne,
    contrastDeltaPhi: function (e, t) {
        (e = x(e)), (t = x(t));
        let n =
            Math.pow(Math.abs(Math.pow(B(e, [nu, "l"]), nc) - Math.pow(B(t, [nu, "l"]), nc)), 1 / nc) * Math.SQRT2 - 40;
        return n < 7.5 ? 0 : n;
    },
    contrastLstar: ni,
    contrastMichelson: nt,
    contrastWCAG21: tX,
    contrastWeber: nr,
});
function n_(e, t, n = {}) {
    s(n) && (n = { algorithm: n });
    let { algorithm: r, ...i } = n;
    if (!r) {
        let e = Object.keys(nd)
            .map((e) => e.replace(/^contrast/, ""))
            .join(", ");
        throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`);
    }
    for (let n in ((e = x(e)), (t = x(t)), nd))
        if ("contrast" + r.toLowerCase() === n.toLowerCase()) return nd[n](e, t, i);
    throw TypeError(`Unknown contrast algorithm: ${r}`);
}
function nf(e) {
    let [t, n, r] = V(e, G),
        i = t + 15 * n + 3 * r;
    return [(4 * t) / i, (9 * n) / i];
}
function np(e) {
    let [t, n, r] = V(e, G),
        i = t + n + r;
    return [t / i, n / i];
}
var nh = Object.freeze({
    __proto__: null,
    register: function (e) {
        Object.defineProperty(e.prototype, "uv", {
            get() {
                return nf(this);
            },
        }),
            Object.defineProperty(e.prototype, "xy", {
                get() {
                    return np(this);
                },
            });
    },
    uv: nf,
    xy: np,
});
function nm(e, t, n = {}) {
    s(n) && (n = { method: n });
    let { method: r = C.deltaE, ...i } = n;
    for (let n in ty) if ("deltae" + r.toLowerCase() === n.toLowerCase()) return ty[n](e, t, i);
    throw TypeError(`Unknown deltaE method: ${r}`);
}
var nE = Object.freeze({
    __proto__: null,
    darken: function (e, t = 0.25) {
        return j(e, [P.get("oklch", "lch"), "l"], (e) => e * (1 - t));
    },
    lighten: function (e, t = 0.25) {
        return j(e, [P.get("oklch", "lch"), "l"], (e) => e * (1 + t));
    },
});
function ng(e, t, n = 0.5, r = {}) {
    return ([e, t] = [x(e), x(t)]), "object" === a(n) && ([n, r] = [0.5, n]), nI(e, t, r)(n);
}
function nA(e, t, n = {}) {
    let r;
    nT(e) && (([r, n] = [e, t]), ([e, t] = r.rangeArgs.colors));
    let { maxDeltaE: i, deltaEMethod: s, steps: a = 2, maxSteps: o = 1e3, ...l } = n;
    r || (([e, t] = [x(e), x(t)]), (r = nI(e, t, l)));
    let u = nm(e, t),
        c = i > 0 ? Math.max(a, Math.ceil(u / i) + 1) : a,
        d = [];
    if ((void 0 !== o && (c = Math.min(c, o)), 1 === c)) d = [{ p: 0.5, color: r(0.5) }];
    else {
        let e = 1 / (c - 1);
        d = Array.from({ length: c }, (t, n) => {
            let i = n * e;
            return { p: i, color: r(i) };
        });
    }
    if (i > 0) {
        let e = d.reduce((e, t, n) => (0 === n ? 0 : Math.max(e, nm(t.color, d[n - 1].color, s))), 0);
        for (; e > i; ) {
            e = 0;
            for (let t = 1; t < d.length && d.length < o; t++) {
                let n = d[t - 1],
                    i = d[t],
                    s = (i.p + n.p) / 2,
                    a = r(s);
                (e = Math.max(e, nm(a, n.color), nm(a, i.color))), d.splice(t, 0, { p: s, color: r(s) }), t++;
            }
        }
    }
    return (d = d.map((e) => e.color));
}
function nI(e, t, n = {}) {
    if (nT(e)) {
        let [n, r] = [e, t];
        return nI(...n.rangeArgs.colors, { ...n.rangeArgs.options, ...r });
    }
    let { space: r, outputSpace: i, progression: s, premultiplied: a } = n;
    (e = x(e)), (t = x(t)), (e = ef(e)), (t = ef(t));
    let o = { colors: [e, t], options: n };
    if (
        ((r = r ? P.get(r) : P.registry[C.interpolationSpace] || e.space),
        (i = i ? P.get(i) : r),
        (e = tD(e, r)),
        (t = tD(t, r)),
        (e = tC(e)),
        (t = tC(t)),
        r.coords.h && "angle" === r.coords.h.type)
    ) {
        let i = (n.hue = n.hue || "shorter"),
            s = [r, "h"],
            [a, o] = [B(e, s), B(t, s)];
        isNaN(a) && !isNaN(o) ? (a = o) : isNaN(o) && !isNaN(a) && (o = a),
            ([a, o] = Z(i, [a, o])),
            j(e, s, a),
            j(t, s, o);
    }
    return (
        a && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (n) => {
                n = s ? s(n) : n;
                let o = e.coords.map((e, r) => p(e, t.coords[r], n)),
                    l = p(e.alpha, t.alpha, n),
                    u = { space: r, coords: o, alpha: l };
                return a && (u.coords = u.coords.map((e) => e / l)), i !== r && (u = tD(u, i)), u;
            },
            { rangeArgs: o },
        )
    );
}
function nT(e) {
    return "function" === a(e) && !!e.rangeArgs;
}
function nS(e) {
    e.defineFunction("mix", ng, { returns: "color" }),
        e.defineFunction("range", nI, { returns: "function<color>" }),
        e.defineFunction("steps", nA, { returns: "array<color>" });
}
C.interpolationSpace = "lab";
var ny = Object.freeze({ __proto__: null, isRange: nT, mix: ng, range: nI, register: nS, steps: nA }),
    nv = new P({
        id: "hsl",
        name: "HSL",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            l: { range: [0, 100], name: "Lightness" },
        },
        base: tH,
        fromBase: (e) => {
            let t = Math.max(...e),
                n = Math.min(...e),
                [r, i, s] = e,
                [a, o, l] = [NaN, 0, (n + t) / 2],
                u = t - n;
            if (0 !== u) {
                switch (((o = 0 === l || 1 === l ? 0 : (t - l) / Math.min(l, 1 - l)), t)) {
                    case r:
                        a = (i - s) / u + 6 * (i < s);
                        break;
                    case i:
                        a = (s - r) / u + 2;
                        break;
                    case s:
                        a = (r - i) / u + 4;
                }
                a *= 60;
            }
            return o < 0 && ((a += 180), (o = Math.abs(o))), a >= 360 && (a -= 360), [a, 100 * o, 100 * l];
        },
        toBase: (e) => {
            let [t, n, r] = e;
            function i(e) {
                let i = (e + t / 30) % 12,
                    s = n * Math.min(r, 1 - r);
                return r - s * Math.max(-1, Math.min(i - 3, 9 - i, 1));
            }
            return (t %= 360) < 0 && (t += 360), (n /= 100), (r /= 100), [i(0), i(8), i(4)];
        },
        formats: {
            hsl: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"] },
            hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: !0, lastAlpha: !0 },
        },
    }),
    nN = new P({
        id: "hsv",
        name: "HSV",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
        },
        base: nv,
        fromBase(e) {
            let [t, n, r] = e,
                i = (r /= 100) + (n /= 100) * Math.min(r, 1 - r);
            return [t, 0 === i ? 0 : 200 * (1 - r / i), 100 * i];
        },
        toBase(e) {
            let [t, n, r] = e,
                i = (r /= 100) * (1 - (n /= 100) / 2);
            return [t, 0 === i || 1 === i ? 0 : ((r - i) / Math.min(i, 1 - i)) * 100, 100 * i];
        },
        formats: {
            color: {
                id: "--hsv",
                coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
            },
        },
    }),
    nC = new P({
        id: "hwb",
        name: "HWB",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
        },
        base: nN,
        fromBase(e) {
            let [t, n, r] = e;
            return [t, (r * (100 - n)) / 100, 100 - r];
        },
        toBase(e) {
            let [t, n, r] = e,
                i = (n /= 100) + (r /= 100);
            if (i >= 1) return [t, 0, (n / i) * 100];
            let s = 1 - r;
            return [t, 100 * (0 === s ? 0 : 1 - n / s), 100 * s];
        },
        formats: { hwb: { coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } },
    }),
    nb = new F({
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
    nR = new F({
        id: "a98rgb",
        cssId: "a98-rgb",
        name: "Adobe\xae 98 RGB compatible",
        base: nb,
        toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
        fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
    }),
    nO = new F({
        id: "prophoto-linear",
        cssId: "--prophoto-rgb-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: Y,
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
let nD = 1 / 512,
    nL = 16 / 512;
var nw = new F({
        id: "prophoto",
        cssId: "prophoto-rgb",
        name: "ProPhoto",
        base: nO,
        toBase: (e) => e.map((e) => (e < nL ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= nD ? e ** (1 / 1.8) : 16 * e)),
    }),
    nx = new P({
        id: "oklch",
        name: "Oklch",
        coords: {
            l: { refRange: [0, 1], name: "Lightness" },
            c: { refRange: [0, 0.4], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        white: "D65",
        base: eu,
        fromBase(e) {
            let t,
                [n, r, i] = e,
                s = 2e-4;
            return (
                (t = 2e-4 > Math.abs(r) && Math.abs(i) < s ? NaN : (180 * Math.atan2(i, r)) / Math.PI),
                [n, Math.sqrt(r ** 2 + i ** 2), X(t)]
            );
        },
        toBase(e) {
            let t,
                n,
                [r, i, s] = e;
            return (
                isNaN(s)
                    ? ((t = 0), (n = 0))
                    : ((t = i * Math.cos((s * Math.PI) / 180)), (n = i * Math.sin((s * Math.PI) / 180))),
                [r, t, n]
            );
        },
        formats: {
            oklch: { coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"] },
        },
    });
let nM = b.D65,
    nP = 216 / 24389,
    nk = 24389 / 27,
    [nU, nG] = nf({ space: G, coords: nM });
var nF = new P({
        id: "luv",
        name: "Luv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
        },
        white: nM,
        base: G,
        fromBase(e) {
            let t = [u(e[0]), u(e[1]), u(e[2])],
                n = t[1],
                [r, i] = nf({ space: G, coords: t });
            if (!Number.isFinite(r) || !Number.isFinite(i)) return [0, 0, 0];
            let s = n <= nP ? nk * n : 116 * Math.cbrt(n) - 16;
            return [s, 13 * s * (r - nU), 13 * s * (i - nG)];
        },
        toBase(e) {
            let [t, n, r] = e;
            if (0 === t || l(t)) return [0, 0, 0];
            (n = u(n)), (r = u(r));
            let i = n / (13 * t) + nU,
                s = r / (13 * t) + nG,
                a = t <= 8 ? t / nk : Math.pow((t + 16) / 116, 3);
            return [((9 * i) / (4 * s)) * a, a, ((12 - 3 * i - 20 * s) / (4 * s)) * a];
        },
        formats: {
            color: {
                id: "--luv",
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    nV = new P({
        id: "lchuv",
        name: "LChuv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            c: { refRange: [0, 220], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: nF,
        fromBase(e) {
            let t,
                [n, r, i] = e,
                s = 0.02;
            return (
                (t = 0.02 > Math.abs(r) && Math.abs(i) < s ? NaN : (180 * Math.atan2(i, r)) / Math.PI),
                [n, Math.sqrt(r ** 2 + i ** 2), X(t)]
            );
        },
        toBase(e) {
            let [t, n, r] = e;
            return (
                n < 0 && (n = 0),
                isNaN(r) && (r = 0),
                [t, n * Math.cos((r * Math.PI) / 180), n * Math.sin((r * Math.PI) / 180)]
            );
        },
        formats: {
            color: {
                id: "--lchuv",
                coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"],
            },
        },
    });
let nB = 216 / 24389,
    nH = 24389 / 27,
    nj = tU[0][0],
    nY = tU[0][1],
    nW = tU[0][2],
    nK = tU[1][0],
    nz = tU[1][1],
    n$ = tU[1][2],
    nq = tU[2][0],
    nX = tU[2][1],
    nZ = tU[2][2];
function nQ(e, t, n) {
    let r = t / (Math.sin(n) - e * Math.cos(n));
    return r < 0 ? 1 / 0 : r;
}
function nJ(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        n = t > nB ? t : e / nH,
        r = n * (284517 * nj - 94839 * nW),
        i = n * (838422 * nW + 769860 * nY + 731718 * nj),
        s = n * (632260 * nW - 126452 * nY),
        a = n * (284517 * nK - 94839 * n$),
        o = n * (838422 * n$ + 769860 * nz + 731718 * nK),
        l = n * (632260 * n$ - 126452 * nz),
        u = n * (284517 * nq - 94839 * nZ),
        c = n * (838422 * nZ + 769860 * nX + 731718 * nq),
        d = n * (632260 * nZ - 126452 * nX);
    return {
        r0s: r / s,
        r0i: (i * e) / s,
        r1s: r / (s + 126452),
        r1i: ((i - 769860) * e) / (s + 126452),
        g0s: a / l,
        g0i: (o * e) / l,
        g1s: a / (l + 126452),
        g1i: ((o - 769860) * e) / (l + 126452),
        b0s: u / d,
        b0i: (c * e) / d,
        b1s: u / (d + 126452),
        b1i: ((c - 769860) * e) / (d + 126452),
    };
}
function n0(e, t) {
    let n = (t / 360) * Math.PI * 2;
    return Math.min(
        nQ(e.r0s, e.r0i, n),
        nQ(e.r1s, e.r1i, n),
        nQ(e.g0s, e.g0i, n),
        nQ(e.g1s, e.g1i, n),
        nQ(e.b0s, e.b0i, n),
        nQ(e.b1s, e.b1i, n),
    );
}
var n1 = new P({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: nV,
    gamutSpace: tH,
    fromBase(e) {
        let t,
            [n, r, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            n > 99.9999999 ? ((t = 0), (n = 100)) : n < 1e-8 ? ((t = 0), (n = 0)) : (t = (r / n0(nJ(n), i)) * 100),
            [i, t, n]
        );
    },
    toBase(e) {
        let t,
            [n, r, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            i > 99.9999999 ? ((i = 100), (t = 0)) : i < 1e-8 ? ((i = 0), (t = 0)) : (t = (n0(nJ(i), n) / 100) * r),
            [i, t, n]
        );
    },
    formats: {
        color: { id: "--hsluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
function n2(e, t) {
    return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function n3(e) {
    return Math.min(
        n2(e.r0s, e.r0i),
        n2(e.r1s, e.r1i),
        n2(e.g0s, e.g0i),
        n2(e.g1s, e.g1i),
        n2(e.b0s, e.b0i),
        n2(e.b1s, e.b1i),
    );
}
tU[0][0], tU[0][1], tU[0][2], tU[1][0], tU[1][1], tU[1][2], tU[2][0], tU[2][1], tU[2][2];
var n6 = new P({
    id: "hpluv",
    name: "HPLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: nV,
    gamutSpace: "self",
    fromBase(e) {
        let t,
            [n, r, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            n > 99.9999999 ? ((t = 0), (n = 100)) : n < 1e-8 ? ((t = 0), (n = 0)) : (t = (r / n3(nJ(n))) * 100),
            [i, t, n]
        );
    },
    toBase(e) {
        let t,
            [n, r, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            i > 99.9999999 ? ((i = 100), (t = 0)) : i < 1e-8 ? ((i = 0), (t = 0)) : (t = (n3(nJ(i)) / 100) * r),
            [i, t, n]
        );
    },
    formats: {
        color: { id: "--hpluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let n4 = 203,
    n5 = 2610 / 16384,
    n7 = 16384 / 2610,
    n8 = 78.84375,
    n9 = 32 / 2523,
    re = 0.8359375,
    rt = 18.8515625,
    rn = 18.6875;
var rr = new F({
    id: "rec2100pq",
    cssId: "rec2100-pq",
    name: "REC.2100-PQ",
    base: tw,
    toBase: (e) =>
        e.map(function (e) {
            return (1e4 * (Math.max(e ** n9 - re, 0) / (rt - rn * e ** n9)) ** n7) / n4;
        }),
    fromBase: (e) =>
        e.map(function (e) {
            let t = Math.max((e * n4) / 1e4, 0),
                n = re + rt * t ** n5,
                r = 1 + rn * t ** n5;
            return (n / r) ** n8;
        }),
});
let ri = 0.17883277,
    rs = 0.28466892,
    ra = 0.55991073,
    ro = 3.7743;
var rl = new F({
    id: "rec2100hlg",
    cssId: "rec2100-hlg",
    name: "REC.2100-HLG",
    referred: "scene",
    base: tw,
    toBase: (e) =>
        e.map(function (e) {
            return e <= 0.5 ? (e ** 2 / 3) * ro : ((Math.exp((e - ra) / ri) + rs) / 12) * ro;
        }),
    fromBase: (e) =>
        e.map(function (e) {
            return (e /= ro) <= 1 / 12 ? Math.sqrt(3 * e) : ri * Math.log(12 * e - rs) + ra;
        }),
});
let ru = {};
function rc({ id: e, toCone_M: t, fromCone_M: n }) {
    ru[e] = arguments[0];
}
function rd(e, t, n = "Bradford") {
    let r = ru[n],
        [s, a, o] = i(r.toCone_M, e),
        [l, u, c] = i(r.toCone_M, t),
        d = i(
            [
                [l / s, 0, 0],
                [0, u / a, 0],
                [0, 0, c / o],
            ],
            r.toCone_M,
        );
    return i(r.fromCone_M, d);
}
N.add("chromatic-adaptation-start", (e) => {
    e.options.method && (e.M = rd(e.W1, e.W2, e.options.method));
}),
    N.add("chromatic-adaptation-end", (e) => {
        e.M || (e.M = rd(e.W1, e.W2, e.options.method));
    }),
    rc({
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
    rc({
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
    rc({
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
    rc({
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
    Object.assign(b, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435],
    }),
    (b.ACES = [0.32168 / 0.33767, 1, 1.0088251843515859]);
let r_ = [
        [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
        [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
        [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971],
    ],
    rf = [
        [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
        [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
        [0.011721894328375376, -0.008284441996237409, 0.9883948585390215],
    ];
var rp = new F({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    coords: {
        r: { range: [0, 65504], name: "Red" },
        g: { range: [0, 65504], name: "Green" },
        b: { range: [0, 65504], name: "Blue" },
    },
    referred: "scene",
    white: b.ACES,
    toXYZ_M: r_,
    fromXYZ_M: rf,
});
let rh = 152587890625e-16,
    rm = (Math.log2(65504) + 9.72) / 17.52;
var rE = Object.freeze({
    __proto__: null,
    A98RGB: nR,
    A98RGB_Linear: nb,
    ACEScc: new F({
        id: "acescc",
        cssId: "--acescc",
        name: "ACEScc",
        coords: {
            r: { range: [-0.35828683, rm], name: "Red" },
            g: { range: [-0.35828683, rm], name: "Green" },
            b: { range: [-0.35828683, rm], name: "Blue" },
        },
        referred: "scene",
        base: rp,
        toBase(e) {
            let t = (9.72 - 15) / 17.52;
            return e.map(function (e) {
                return e <= t ? (2 ** (17.52 * e - 9.72) - rh) * 2 : e < rm ? 2 ** (17.52 * e - 9.72) : 65504;
            });
        },
        fromBase: (e) =>
            e.map(function (e) {
                return e <= 0
                    ? (Math.log2(rh) + 9.72) / 17.52
                    : e < rh
                      ? (Math.log2(rh + 0.5 * e) + 9.72) / 17.52
                      : (Math.log2(e) + 9.72) / 17.52;
            }),
    }),
    ACEScg: rp,
    CAM16_JMh: tc,
    HCT: tA,
    HPLuv: n6,
    HSL: nv,
    HSLuv: n1,
    HSV: nN,
    HWB: nC,
    ICTCP: eq,
    JzCzHz: ek,
    Jzazbz: eP,
    LCH: Q,
    LCHuv: nV,
    Lab: q,
    Lab_D65: nu,
    Luv: nF,
    OKLCH: nx,
    OKLab: eu,
    P3: tj,
    P3_Linear: tk,
    ProPhoto: nw,
    ProPhoto_Linear: nO,
    REC_2020: tP,
    REC_2020_Linear: tw,
    REC_2100_HLG: rl,
    REC_2100_PQ: rr,
    XYZ_ABS_D65: eA,
    XYZ_D50: Y,
    XYZ_D65: G,
    sRGB: tH,
    sRGB_Linear: tG,
});
class rg {
    constructor(...e) {
        let t, n, r, i;
        1 === e.length && (t = x(e[0])),
            t ? ((n = t.space || t.spaceId), (r = t.coords), (i = t.alpha)) : ([n, r, i] = e),
            Object.defineProperty(this, "space", { value: P.get(n), writable: !1, enumerable: !0, configurable: !0 }),
            (this.coords = r ? r.slice() : [0, 0, 0]),
            (this.alpha = i > 1 || void 0 === i ? 1 : i < 0 ? 0 : i);
        for (let e = 0; e < this.coords.length; e++) "NaN" === this.coords[e] && (this.coords[e] = NaN);
        for (let e in this.space.coords)
            Object.defineProperty(this, e, { get: () => this.get(e), set: (t) => this.set(e, t) });
    }
    get spaceId() {
        return this.space.id;
    }
    clone() {
        return new rg(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
    }
    display(...e) {
        let t = tY(this, ...e);
        return (t.color = new rg(t.color)), t;
    }
    static get(e, ...t) {
        return e instanceof rg ? e : new rg(e, ...t);
    }
    static defineFunction(e, t, n = t) {
        let { instance: r = !0, returns: i } = n,
            s = function (...e) {
                let n = t(...e);
                if ("color" === i) n = rg.get(n);
                else if ("function<color>" === i) {
                    let e = n;
                    Object.assign(
                        (n = function (...t) {
                            let n = e(...t);
                            return rg.get(n);
                        }),
                        e,
                    );
                } else "array<color>" === i && (n = n.map((e) => rg.get(e)));
                return n;
            };
        e in rg || (rg[e] = s),
            r &&
                (rg.prototype[e] = function (...e) {
                    return s(this, ...e);
                });
    }
    static defineFunctions(e) {
        for (let t in e) rg.defineFunction(t, e[t], e[t]);
    }
    static extend(e) {
        if (e.register) e.register(rg);
        else for (let t in e) rg.defineFunction(t, e[t]);
    }
}
for (let e of (rg.defineFunctions({
    get: B,
    getAll: V,
    set: j,
    setAll: H,
    to: tD,
    equals: tW,
    inGamut: e_,
    toGamut: tC,
    distance: ep,
    toString: tL,
}),
Object.assign(rg, { util: y, hooks: N, WHITES: b, Space: P, spaces: P.registry, parse: w, defaults: C }),
Object.keys(rE)))
    P.register(rE[e]);
for (let e in P.registry) rA(e, P.registry[e]);
function rA(e, t) {
    let n = e.replace(/-/g, "_");
    Object.defineProperty(rg.prototype, n, {
        get() {
            let n = this.getAll(e);
            return "u" < typeof Proxy
                ? n
                : new Proxy(n, {
                      has: (e, n) => {
                          try {
                              return P.resolveCoord([t, n]), !0;
                          } catch (e) {}
                          return Reflect.has(e, n);
                      },
                      get: (e, n, r) => {
                          if (n && "symbol" != typeof n && !(n in e)) {
                              let { index: r } = P.resolveCoord([t, n]);
                              if (r >= 0) return e[r];
                          }
                          return Reflect.get(e, n, r);
                      },
                      set: (n, r, i, s) => {
                          if ((r && "symbol" != typeof r && !(r in n)) || r >= 0) {
                              let { index: s } = P.resolveCoord([t, r]);
                              if (s >= 0) return (n[s] = i), this.setAll(e, n), !0;
                          }
                          return Reflect.set(n, r, i, s);
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
N.add("colorspace-init-end", (e) => {
    rA(e.id, e),
        e.aliases?.forEach((t) => {
            rA(t, e);
        });
}),
    rg.extend(ty),
    rg.extend({ deltaE: nm }),
    Object.assign(rg, { deltaEMethods: ty }),
    rg.extend(nE),
    rg.extend({ contrast: n_ }),
    rg.extend(nh),
    rg.extend(tq),
    rg.extend(ny),
    rg.extend(nd);
