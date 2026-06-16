"use strict";
let a;
function n(e, r) {
    let t = e.length;
    Array.isArray(e[0]) || (e = [e]), Array.isArray(r[0]) || (r = r.map((e) => [e]));
    let a = r[0].length,
        n = r[0].map((e, t) => r.map((e) => e[t])),
        o = e.map((e) =>
            n.map((r) => {
                let t = 0;
                if (!Array.isArray(e)) {
                    for (let a of r) t += e * a;
                    return t;
                }
                for (let a = 0; a < e.length; a++) t += e[a] * (r[a] || 0);
                return t;
            }),
        );
    return (1 === t && (o = o[0]), 1 === a) ? o.map((e) => e[0]) : o;
}
function o(e) {
    return "string" === s(e);
}
function s(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function i(e, { precision: r, unit: t }) {
    return l(e) ? "none" : u(e, r) + (t ?? "");
}
function l(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function c(e) {
    return l(e) ? 0 : e;
}
function u(e, r) {
    if (0 === e) return 0;
    let t = ~~e,
        a = 0;
    t && r && (a = ~~Math.log10(Math.abs(t)) + 1);
    let n = 10 ** (r - a);
    return Math.floor(e * n + 0.5) / n;
}
t.d(r, { A: () => th });
let f = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function h(e) {
    if (!e) return;
    e = e.trim();
    let r = /^-?[\d.]+$/,
        t = /%|deg|g?rad|turn$/,
        a = e.match(/^([a-z]+)\((.+?)\)$/i);
    if (a) {
        let e = [];
        return (
            a[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g, (a, n) => {
                let o = n.match(t),
                    s = n;
                if (o) {
                    let e = o[0],
                        r = s.slice(0, -e.length);
                    "%" === e
                        ? ((s = new Number(r / 100)).type = "<percentage>")
                        : (((s = new Number(r * f[e])).type = "<angle>"), (s.unit = e));
                } else
                    r.test(s)
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
function m(e, r, t) {
    return isNaN(e) ? r : isNaN(r) ? e : e + (r - e) * t;
}
function p(e, r, t) {
    return (t - e) / (r - e);
}
function g(e, r, t) {
    return m(r[0], r[1], p(e[0], e[1], t));
}
function b(e) {
    return e.map((e) =>
        e.split("|").map((e) => {
            let r = (e = e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (r) {
                let e = new String(r[1]);
                return (e.range = [+r[2], +r[3]]), e;
            }
            return e;
        }),
    );
}
function M(e, r, t) {
    return Math.max(Math.min(t, r), e);
}
function v(e, r) {
    return Math.sign(e) === Math.sign(r) ? e : -e;
}
function w(e, r) {
    return v(Math.abs(e) ** r, e);
}
function y(e, r) {
    return 0 === r ? 0 : e / r;
}
function C(e, r, t = 0, a = e.length) {
    for (; t < a; ) {
        let n = (t + a) >> 1;
        e[n] < r ? (t = n + 1) : (a = n);
    }
    return t;
}
var R = Object.freeze({
    __proto__: null,
    bisectLeft: C,
    clamp: M,
    copySign: v,
    interpolate: m,
    interpolateInv: p,
    isNone: l,
    isString: o,
    last: d,
    mapRange: g,
    multiplyMatrices: n,
    parseCoordGrammar: b,
    parseFunction: h,
    serializeNumber: i,
    skipNone: c,
    spow: w,
    toPrecision: u,
    type: s,
    zdiv: y,
});
let k = new (class {
    add(e, r, t) {
        if ("string" != typeof arguments[0]) {
            for (var e in arguments[0]) this.add(e, arguments[0][e], arguments[1]);
            return;
        }
        (Array.isArray(e) ? e : [e]).forEach(function (e) {
            (this[e] = this[e] || []), r && this[e][t ? "unshift" : "push"](r);
        }, this);
    }
    run(e, r) {
        (this[e] = this[e] || []),
            this[e].forEach(function (e) {
                e.call(r && r.context ? r.context : r, r);
            });
    }
})();
var _ = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function (e) {
        this.verbose && globalThis?.console?.warn?.(e);
    },
};
let B = { D50: [0.3457 / 0.3585, 1, 0.8251046025104602], D65: [0.3127 / 0.329, 1, 1.0890577507598784] };
function N(e) {
    return Array.isArray(e) ? e : B[e];
}
function x(e, r, t, a = {}) {
    if (((e = N(e)), (r = N(r)), !e || !r))
        throw TypeError(`Missing white point to convert ${!e ? "from" : ""}${!e && !r ? "/" : ""}${!r ? "to" : ""}`);
    if (e === r) return t;
    let o = { W1: e, W2: r, XYZ: t, options: a };
    if (
        (k.run("chromatic-adaptation-start", o),
        o.M ||
            (o.W1 === B.D65 && o.W2 === B.D50
                ? (o.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371],
                  ])
                : o.W1 === B.D50 &&
                  o.W2 === B.D65 &&
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
let S = new Set(["<number>", "<percentage>", "<angle>"]);
function z(e, r, t, a) {
    return Object.entries(e.coords).map(([e, n], o) => {
        let s,
            i = r.coordGrammar[o],
            l = a[o],
            c = l?.type;
        if (!(s = l.none ? i.find((e) => S.has(e)) : i.find((e) => e == c))) {
            let r = n.name || e;
            throw TypeError(`${c ?? l.raw} not allowed for ${r} in ${t}()`);
        }
        let u = s.range;
        "<percentage>" === c && (u ||= [0, 1]);
        let f = n.range || n.refRange;
        return u && f && (a[o] = g(u, f, a[o])), s;
    });
}
function I(e, { meta: r } = {}) {
    let t = { str: String(e)?.trim() };
    if ((k.run("parse-start", t), t.color)) return t.color;
    if (((t.parsed = h(t.str)), t.parsed)) {
        let e = t.parsed.name;
        if ("color" === e) {
            let e = t.parsed.args.shift(),
                a = e.startsWith("--") ? e.substring(2) : `--${e}`,
                n = [e, a],
                o = t.parsed.rawArgs.indexOf("/") > 0 ? t.parsed.args.pop() : 1;
            for (let a of A.all) {
                let s = a.getFormat("color");
                if (s && (n.includes(s.id) || s.ids?.filter((e) => n.includes(e)).length)) {
                    let n,
                        i = Object.keys(a.coords).map((e, r) => t.parsed.args[r] || 0);
                    return (
                        s.coordGrammar && (n = z(a, s, "color", i)),
                        r && Object.assign(r, { formatId: "color", types: n }),
                        s.id.startsWith("--") &&
                            !e.startsWith("--") &&
                            _.warn(
                                `${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${e}).`,
                            ),
                        e.startsWith("--") &&
                            !s.id.startsWith("--") &&
                            _.warn(
                                `${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${e}).`,
                            ),
                        { spaceId: a.id, coords: i, alpha: o }
                    );
                }
            }
            let s = "",
                i = e in A.registry ? e : a;
            if (i in A.registry) {
                let e = A.registry[i].formats?.color?.id;
                e && (s = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (s || "Missing a plugin?"));
        }
        for (let a of A.all) {
            let n = a.getFormat(e);
            if (n && "function" === n.type) {
                let o,
                    s = 1;
                (n.lastAlpha || d(t.parsed.args).alpha) && (s = t.parsed.args.pop());
                let i = t.parsed.args;
                return (
                    n.coordGrammar && (o = z(a, n, e, i)),
                    r && Object.assign(r, { formatId: n.name, types: o }),
                    { spaceId: a.id, coords: i, alpha: s }
                );
            }
        }
    } else
        for (let e of A.all)
            for (let a in e.formats) {
                let n = e.formats[a];
                if ("custom" !== n.type || (n.test && !n.test(t.str))) continue;
                let o = n.parse(t.str);
                if (o) return (o.alpha ??= 1), r && (r.formatId = a), o;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function L(e) {
    if (Array.isArray(e)) return e.map(L);
    if (!e) throw TypeError("Empty color reference");
    o(e) && (e = I(e));
    let r = e.space || e.spaceId;
    return r instanceof A || (e.space = A.get(r)), void 0 === e.alpha && (e.alpha = 1), e;
}
class A {
    constructor(e) {
        (this.id = e.id),
            (this.name = e.name),
            (this.base = e.base ? A.get(e.base) : null),
            (this.aliases = e.aliases),
            this.base && ((this.fromBase = e.fromBase), (this.toBase = e.toBase));
        let r = e.coords ?? this.base.coords;
        for (let e in r) "name" in r[e] || (r[e].name = e);
        this.coords = r;
        let t = e.white ?? this.base.white ?? "D65";
        for (let r in ((this.white = N(t)), (this.formats = e.formats ?? {}), this.formats)) {
            let e = this.formats[r];
            (e.type ||= "function"), (e.name ||= r);
        }
        this.formats.color?.id || (this.formats.color = { ...(this.formats.color ?? {}), id: e.cssId || this.id }),
            e.gamutSpace
                ? (this.gamutSpace = "self" === e.gamutSpace ? this : A.get(e.gamutSpace))
                : this.isPolar
                  ? (this.gamutSpace = this.base)
                  : (this.gamutSpace = this),
            this.gamutSpace.isUnbounded && (this.inGamut = (e, r) => !0),
            (this.referred = e.referred),
            Object.defineProperty(this, "path", {
                value: (function (e) {
                    let r = [e];
                    for (let t = e; (t = t.base); ) r.push(t);
                    return r;
                })(this).reverse(),
                writable: !1,
                enumerable: !0,
                configurable: !0,
            }),
            k.run("colorspace-init-end", this);
    }
    inGamut(e, { epsilon: r = 75e-6 } = {}) {
        if (!this.equals(this.gamutSpace))
            return (e = this.to(this.gamutSpace, e)), this.gamutSpace.inGamut(e, { epsilon: r });
        let t = Object.values(this.coords);
        return e.every((e, a) => {
            let n = t[a];
            if ("angle" !== n.type && n.range) {
                if (Number.isNaN(e)) return !0;
                let [t, a] = n.range;
                return (void 0 === t || e >= t - r) && (void 0 === a || e <= a + r);
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
        let r;
        return "object" == typeof e
            ? (e = E(e, this))
            : (r = "default" === e ? Object.values(this.formats)[0] : this.formats[e])
              ? (r = E(r, this))
              : null;
    }
    equals(e) {
        return !!e && (this === e || this.id === e || this.id === e.id);
    }
    to(e, r) {
        let t, a;
        if (1 == arguments.length) {
            let t = L(e);
            [e, r] = [t.space, t.coords];
        }
        if (((e = A.get(e)), this.equals(e))) return r;
        r = r.map((e) => (Number.isNaN(e) ? 0 : e));
        let n = this.path,
            o = e.path;
        for (let e = 0; e < n.length; e++)
            if (n[e].equals(o[e])) (t = n[e]), (a = e);
            else break;
        if (!t) throw Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
        for (let e = n.length - 1; e > a; e--) r = n[e].toBase(r);
        for (let e = a + 1; e < o.length; e++) r = o[e].fromBase(r);
        return r;
    }
    from(e, r) {
        if (1 == arguments.length) {
            let t = L(e);
            [e, r] = [t.space, t.coords];
        }
        return (e = A.get(e)).to(this, r);
    }
    toString() {
        return `${this.name} (${this.id})`;
    }
    getMinCoords() {
        let e = [];
        for (let r in this.coords) {
            let t = this.coords[r],
                a = t.range || t.refRange;
            e.push(a?.min ?? 0);
        }
        return e;
    }
    static registry = {};
    static get all() {
        return [...new Set(Object.values(A.registry))];
    }
    static register(e, r) {
        if (
            (1 == arguments.length && ((r = arguments[0]), (e = r.id)),
            (r = this.get(r)),
            this.registry[e] && this.registry[e] !== r)
        )
            throw Error(`Duplicate color space registration: '${e}'`);
        if (((this.registry[e] = r), 1 == arguments.length && r.aliases)) for (let e of r.aliases) this.register(e, r);
        return r;
    }
    static get(e, ...r) {
        if (!e || e instanceof A) return e;
        if ("string" === s(e)) {
            let r = A.registry[e.toLowerCase()];
            if (!r) throw TypeError(`No color space found with id = "${e}"`);
            return r;
        }
        if (r.length) return A.get(...r);
        throw TypeError(`${e} is not a valid color space`);
    }
    static resolveCoord(e, r) {
        let t,
            a,
            n = s(e);
        if (
            ("string" === n
                ? e.includes(".")
                    ? ([t, a] = e.split("."))
                    : ([t, a] = [, e])
                : Array.isArray(e)
                  ? ([t, a] = e)
                  : ((t = e.space), (a = e.coordId)),
            (t = A.get(t)) || (t = r),
            !t)
        )
            throw TypeError(
                `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
        if ("number" === (n = s(a)) || ("string" === n && a >= 0)) {
            let e = Object.entries(t.coords)[a];
            if (e) return { space: t, id: e[0], index: a, ...e[1] };
        }
        t = A.get(t);
        let o = a.toLowerCase(),
            i = 0;
        for (let e in t.coords) {
            let r = t.coords[e];
            if (e.toLowerCase() === o || r.name?.toLowerCase() === o) return { space: t, id: e, index: i, ...r };
            i++;
        }
        throw TypeError(
            `No "${a}" coordinate found in ${t.name}. Its coordinates are: ${Object.keys(t.coords).join(", ")}`,
        );
    }
    static DEFAULT_FORMAT = { type: "functions", name: "color" };
}
function E(e, { coords: r } = {}) {
    if (e.coords && !e.coordGrammar) {
        (e.type ||= "function"), (e.name ||= "color"), (e.coordGrammar = b(e.coords));
        let t = Object.entries(r).map(([r, t], a) => {
            let n = e.coordGrammar[a][0],
                o = t.range || t.refRange,
                s = n.range,
                i = "";
            return (
                "<percentage>" == n ? ((s = [0, 100]), (i = "%")) : "<angle>" == n && (i = "deg"),
                { fromRange: o, toRange: s, suffix: i }
            );
        });
        e.serializeCoords = (e, r) =>
            e.map((e, a) => {
                let { fromRange: n, toRange: o, suffix: s } = t[a];
                return n && o && (e = g(n, o, e)), (e = i(e, { precision: r, unit: s }));
            });
    }
    return e;
}
var P = new A({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
    white: "D65",
    formats: { color: { ids: ["xyz-d65", "xyz"] } },
    aliases: ["xyz"],
});
class j extends A {
    constructor(e) {
        e.coords ||
            (e.coords = {
                r: { range: [0, 1], name: "Red" },
                g: { range: [0, 1], name: "Green" },
                b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = P),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (r) => {
                    let t = n(e.toXYZ_M, r);
                    return this.white !== this.base.white && (t = x(this.white, this.base.white, t)), t;
                }),
                (e.fromBase ??= (r) => ((r = x(this.base.white, this.white, r)), n(e.fromXYZ_M, r)))),
            (e.referred ??= "display"),
            super(e);
    }
}
function O(e, r) {
    return ((e = L(e)), !r || e.space.equals(r)) ? e.coords.slice() : (r = A.get(r)).from(e);
}
function $(e, r) {
    e = L(e);
    let { space: t, index: a } = A.resolveCoord(r, e.space);
    return O(e, t)[a];
}
function D(e, r, t) {
    return (e = L(e)), (r = A.get(r)), (e.coords = r.to(e.space, t)), e;
}
function q(e, r, t) {
    if (((e = L(e)), 2 == arguments.length && "object" === s(arguments[1]))) {
        let r = arguments[1];
        for (let t in r) q(e, t, r[t]);
    } else {
        "function" == typeof t && (t = t($(e, r)));
        let { space: a, index: n } = A.resolveCoord(r, e.space),
            o = O(e, a);
        (o[n] = t), D(e, a, o);
    }
    return e;
}
(D.returns = "color"), (q.returns = "color");
var T = new A({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: P,
    fromBase: (e) => x(P.white, "D50", e),
    toBase: (e) => x("D50", P.white, e),
});
let H = 216 / 24389,
    W = 24 / 116,
    F = 24389 / 27,
    G = B.D50;
var X = new A({
    id: "lab",
    name: "Lab",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: G,
    base: T,
    fromBase(e) {
        let r = e.map((e, r) => e / G[r]).map((e) => (e > H ? Math.cbrt(e) : (F * e + 16) / 116));
        return [116 * r[1] - 16, 500 * (r[0] - r[1]), 200 * (r[1] - r[2])];
    },
    toBase(e) {
        let r = [];
        return (
            (r[1] = (e[0] + 16) / 116),
            (r[0] = e[1] / 500 + r[1]),
            (r[2] = r[1] - e[2] / 200),
            [
                r[0] > W ? Math.pow(r[0], 3) : (116 * r[0] - 16) / F,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / F,
                r[2] > W ? Math.pow(r[2], 3) : (116 * r[2] - 16) / F,
            ].map((e, r) => e * G[r])
        );
    },
    formats: {
        lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] },
    },
});
function Y(e) {
    return ((e % 360) + 360) % 360;
}
var Z = new A({
    id: "lch",
    name: "LCH",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        c: { refRange: [0, 150], name: "Chroma" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: X,
    fromBase(e) {
        let r,
            [t, a, n] = e;
        return (
            (r = 0.02 > Math.abs(a) && 0.02 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
            [t, Math.sqrt(a ** 2 + n ** 2), Y(r)]
        );
    },
    toBase(e) {
        let [r, t, a] = e;
        return (
            t < 0 && (t = 0),
            isNaN(a) && (a = 0),
            [r, t * Math.cos((a * Math.PI) / 180), t * Math.sin((a * Math.PI) / 180)]
        );
    },
    formats: { lch: { coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"] } },
});
let U = Math.PI,
    J = 180 / U,
    Q = U / 180;
function V(e) {
    let r = e * e;
    return r * r * r * e;
}
function K(e, r, { kL: t = 1, kC: a = 1, kH: n = 1 } = {}) {
    let o, s;
    [e, r] = L([e, r]);
    let [i, l, c] = X.from(e),
        u = Z.from(X, [i, l, c])[1],
        [f, h, d] = X.from(r),
        m = Z.from(X, [f, h, d])[1];
    u < 0 && (u = 0), m < 0 && (m = 0);
    let p = V((u + m) / 2),
        g = 0.5 * (1 - Math.sqrt(p / (p + 0x16bcc41e9))),
        b = (1 + g) * l,
        M = (1 + g) * h,
        v = Math.sqrt(b ** 2 + c ** 2),
        w = Math.sqrt(M ** 2 + d ** 2),
        y = 0 === b && 0 === c ? 0 : Math.atan2(c, b),
        C = 0 === M && 0 === d ? 0 : Math.atan2(d, M);
    y < 0 && (y += 2 * U), C < 0 && (C += 2 * U), (y *= J);
    let R = f - i,
        k = w - v,
        B = (C *= J) - y,
        N = y + C,
        x = Math.abs(B);
    v * w == 0
        ? (o = 0)
        : x <= 180
          ? (o = B)
          : B > 180
            ? (o = B - 360)
            : B < -180
              ? (o = B + 360)
              : _.warn("the unthinkable has happened");
    let S = 2 * Math.sqrt(w * v) * Math.sin((o * Q) / 2),
        z = (i + f) / 2,
        I = (v + w) / 2,
        A = V(I),
        E = (z - 50) ** 2,
        P = 1 + (0.015 * E) / Math.sqrt(20 + E),
        j = 1 + 0.045 * I,
        O =
            1 +
            0.015 *
                I *
                (1 -
                    0.17 *
                        Math.cos(
                            ((s = v * w == 0 ? N : x <= 180 ? N / 2 : N < 360 ? (N + 360) / 2 : (N - 360) / 2) - 30) *
                                Q,
                        ) +
                    0.24 * Math.cos(2 * s * Q) +
                    0.32 * Math.cos((3 * s + 6) * Q) -
                    0.2 * Math.cos((4 * s - 63) * Q)),
        $ = (R / (t * P)) ** 2;
    return Math.sqrt(
        ($ +=
            (k / (a * j)) ** 2 +
            (S / (n * O)) ** 2 +
            (k / (a * j)) *
                (-1 *
                    Math.sin(2 * (30 * Math.exp(-1 * ((s - 275) / 25) ** 2)) * Q) *
                    (2 * Math.sqrt(A / (A + 0x16bcc41e9)))) *
                (S / (n * O))),
    );
}
let ee = [
        [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
        [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
        [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
    ],
    er = [
        [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
        [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
        [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
    ],
    et = [
        [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
        [1.9779985324311684, -2.42859224204858, 0.450593709617411],
        [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
    ],
    ea = [
        [1, 0.3963377773761749, 0.2158037573099136],
        [1, -0.1055613458156586, -0.0638541728258133],
        [1, -0.0894841775298119, -1.2914855480194092],
    ];
var en = new A({
    id: "oklab",
    name: "Oklab",
    coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } },
    white: "D65",
    base: P,
    fromBase(e) {
        let r = n(ee, e).map((e) => Math.cbrt(e));
        return n(et, r);
    },
    toBase(e) {
        let r = n(ea, e).map((e) => e ** 3);
        return n(er, r);
    },
    formats: {
        oklab: {
            coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
        },
    },
});
function eo(e, r) {
    [e, r] = L([e, r]);
    let [t, a, n] = en.from(e),
        [o, s, i] = en.from(r);
    return Math.sqrt((t - o) ** 2 + (a - s) ** 2 + (n - i) ** 2);
}
function es(e, r, { epsilon: t = 75e-6 } = {}) {
    (e = L(e)), r || (r = e.space), (r = A.get(r));
    let a = e.coords;
    return r !== e.space && (a = r.from(e)), r.inGamut(a, { epsilon: t });
}
function ei(e) {
    return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function el(e, r, t = "lab") {
    let a = (t = A.get(t)).from(e),
        n = t.from(r);
    return Math.sqrt(
        a.reduce((e, r, t) => {
            let a = n[t];
            return isNaN(r) || isNaN(a) ? e : e + (a - r) ** 2;
        }, 0),
    );
}
let ec = Math.PI / 180;
var eu = new A({
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
        x: { refRange: [0, 9504.7], name: "Xa" },
        y: { refRange: [0, 1e4], name: "Ya" },
        z: { refRange: [0, 10888.3], name: "Za" },
    },
    base: P,
    fromBase: (e) => e.map((e) => Math.max(203 * e, 0)),
    toBase: (e) => e.map((e) => Math.max(e / 203, 0)),
});
let ef = 2610 / 16384,
    eh = 16384 / 2610,
    ed = (1.7 * 2523) / 32,
    em = 32 / (1.7 * 2523),
    ep = [
        [0.41478972, 0.579999, 0.014648],
        [-0.20151, 1.120649, 0.0531008],
        [-0.0166008, 0.2648, 0.6684799],
    ],
    eg = [
        [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
        [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
        [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603],
    ],
    eb = [
        [0.5, 0.5, 0],
        [3.524, -4.066708, 0.542708],
        [0.199076, 1.096799, -1.295875],
    ],
    eM = [
        [1, 0.1386050432715393, 0.05804731615611886],
        [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
        [0.9999999999999998, -0.09601924202631895, -0.8118918960560388],
    ];
var ev = new A({
        id: "jzazbz",
        name: "Jzazbz",
        coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } },
        base: eu,
        fromBase(e) {
            let [r, t, a] = e,
                o = n(ep, [1.15 * r - (1.15 - 1) * a, 0.66 * t - (0.66 - 1) * r, a]).map(function (e) {
                    return ((0.8359375 + 18.8515625 * (e / 1e4) ** ef) / (1 + 18.6875 * (e / 1e4) ** ef)) ** ed;
                }),
                [s, i, l] = n(eb, o);
            return [(0.43999999999999995 * s) / (1 + -0.56 * s) - 16295499532821565e-27, i, l];
        },
        toBase(e) {
            let [r, t, a] = e,
                o = n(eM, [
                    (r + 16295499532821565e-27) / (0.43999999999999995 - -0.56 * (r + 16295499532821565e-27)),
                    t,
                    a,
                ]).map(function (e) {
                    return 1e4 * ((0.8359375 - e ** em) / (18.6875 * e ** em - 18.8515625)) ** eh;
                }),
                [s, i, l] = n(eg, o),
                c = (s + (1.15 - 1) * l) / 1.15;
            return [c, (i + (0.66 - 1) * c) / 0.66, l];
        },
        formats: {
            color: {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    ew = new A({
        id: "jzczhz",
        name: "JzCzHz",
        coords: {
            jz: { refRange: [0, 1], name: "Jz" },
            cz: { refRange: [0, 1], name: "Chroma" },
            hz: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: ev,
        fromBase(e) {
            let r,
                [t, a, n] = e;
            return (
                (r = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [t, Math.sqrt(a ** 2 + n ** 2), Y(r)]
            );
        },
        toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)],
    });
let ey = 2413 / 128,
    eC = 2610 / 16384,
    eR = 2523 / 32,
    ek = 16384 / 2610,
    e_ = 32 / 2523,
    eB = [
        [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
        [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
        [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
    ],
    eN = [
        [0.5, 0.5, 0],
        [6610 / 4096, -13613 / 4096, 7003 / 4096],
        [17933 / 4096, -17390 / 4096, -543 / 4096],
    ],
    ex = [
        [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
        [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
        [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
    ],
    eS = [
        [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
        [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
        [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
    ];
var ez = new A({
    id: "ictcp",
    name: "ICTCP",
    coords: {
        i: { refRange: [0, 1], name: "I" },
        ct: { refRange: [-0.5, 0.5], name: "CT" },
        cp: { refRange: [-0.5, 0.5], name: "CP" },
    },
    base: eu,
    fromBase: (e) => {
        var r;
        return (
            (r = n(eB, e)),
            n(
                eN,
                r.map(function (e) {
                    return ((0.8359375 + ey * (e / 1e4) ** eC) / (1 + 18.6875 * (e / 1e4) ** eC)) ** eR;
                }),
            )
        );
    },
    toBase: (e) =>
        n(
            eS,
            n(ex, e).map(function (e) {
                let r = Math.max(e ** e_ - 0.8359375, 0);
                return 1e4 * (r / (ey - 18.6875 * e ** e_)) ** ek;
            }),
        ),
});
let eI = B.D65,
    eL = 2 * Math.PI,
    eA = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127],
    ],
    eE = [
        [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
        [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
        [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
    ],
    eP = [
        [460, 451, 288],
        [460, -891, -261],
        [460, -220, -6300],
    ],
    ej = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] },
    eO = [20.14, 90, 164.25, 237.53, 380.14],
    e$ = [0.8, 0.7, 1, 1.2, 0.8],
    eD = [0, 100, 200, 300, 400],
    eq = 180 / Math.PI,
    eT = Math.PI / 180;
function eH(e, r) {
    return e.map((e) => {
        let t = w(r * Math.abs(e) * 0.01, 0.42);
        return (400 * v(t, e)) / (t + 27.13);
    });
}
function eW(e, r, t, a, o) {
    let s = {};
    (s.discounting = o), (s.refWhite = e), (s.surround = a);
    let i = e.map((e) => 100 * e);
    (s.la = r), (s.yb = t);
    let l = i[1],
        c = n(eA, i),
        u = (a = ej[s.surround])[0];
    (s.c = a[1]), (s.nc = a[2]);
    let f = (1 / (5 * s.la + 1)) ** 4;
    (s.fl = f * s.la + 0.1 * (1 - f) * (1 - f) * Math.cbrt(5 * s.la)),
        (s.flRoot = s.fl ** 0.25),
        (s.n = s.yb / l),
        (s.z = 1.48 + Math.sqrt(s.n)),
        (s.nbb = 0.725 * s.n ** -0.2),
        (s.ncb = s.nbb);
    let h = o ? 1 : Math.max(Math.min(u * (1 - (1 / 3.6) * Math.exp((-s.la - 42) / 92)), 1), 0);
    (s.dRgb = c.map((e) => m(1, l / e, h))), (s.dRgbInv = s.dRgb.map((e) => 1 / e));
    let d = eH(
        c.map((e, r) => e * s.dRgb[r]),
        s.fl,
    );
    return (s.aW = s.nbb * (2 * d[0] + d[1] + 0.05 * d[2])), s;
}
let eF = eW(eI, (64 / Math.PI) * 0.2, 20, "average", !1);
function eG(e, r) {
    var t;
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
                    ? Y(e.h) * eT
                    : (function (e) {
                          let r = ((e % 400) + 400) % 400,
                              t = Math.floor(0.01 * r);
                          r %= 100;
                          let [a, n] = eO.slice(t, t + 2),
                              [o, s] = e$.slice(t, t + 2);
                          return Y((r * (s * a - o * n) - 100 * a * s) / (r * (s - o) - 100 * s));
                      })(e.H) * eT),
        ),
        i = Math.sin(o),
        l = 0;
    void 0 !== e.J ? (l = 0.1 * w(e.J, 0.5)) : void 0 !== e.Q && (l = (0.25 * r.c * e.Q) / ((r.aW + 4) * r.flRoot));
    let c = 0;
    void 0 !== e.C
        ? (c = e.C / l)
        : void 0 !== e.M
          ? (c = e.M / r.flRoot / l)
          : void 0 !== e.s && (c = (4e-4 * e.s ** 2 * (r.aW + 4)) / r.c);
    let u = w(c * Math.pow(1.64 - Math.pow(0.29, r.n), -0.73), 10 / 9),
        f = 0.25 * (Math.cos(o + 2) + 3.8),
        h = r.aW * w(l, 2 / r.c / r.z),
        d = (5e4 / 13) * r.nc * r.ncb * f,
        m = h / r.nbb,
        p = 23 * (m + 0.305) * y(u, 23 * d + u * (11 * s + 108 * i)),
        g =
            ((t = n(eP, [m, p * s, p * i]).map((e) => e / 1403)),
            (a = (100 / r.fl) * 2588.068098016295),
            t.map((e) => {
                let r = Math.abs(e);
                return v(a * w(r / (400 - r), 2.380952380952381), e);
            }));
    return n(
        eE,
        g.map((e, t) => e * r.dRgbInv[t]),
    ).map((e) => e / 100);
}
function eX(e, r) {
    let t = eH(
            n(
                eA,
                e.map((e) => 100 * e),
            ).map((e, t) => e * r.dRgb[t]),
            r.fl,
        ),
        a = t[0] + (-12 * t[1] + t[2]) / 11,
        o = (t[0] + t[1] - 2 * t[2]) / 9,
        s = ((Math.atan2(o, a) % eL) + eL) % eL,
        i = 0.25 * (Math.cos(s + 2) + 3.8),
        l =
            w((5e4 / 13) * r.nc * r.ncb * y(i * Math.sqrt(a ** 2 + o ** 2), t[0] + t[1] + 1.05 * t[2] + 0.305), 0.9) *
            Math.pow(1.64 - Math.pow(0.29, r.n), 0.73),
        c = w((r.nbb * (2 * t[0] + t[1] + 0.05 * t[2])) / r.aW, 0.5 * r.c * r.z),
        u = 100 * w(c, 2),
        f = (4 / r.c) * c * (r.aW + 4) * r.flRoot,
        h = l * c,
        d = h * r.flRoot,
        m = Y(s * eq),
        p = (function (e) {
            let r = Y(e);
            r <= eO[0] && (r += 360);
            let t = C(eO, r) - 1,
                [a, n] = eO.slice(t, t + 2),
                [o, s] = e$.slice(t, t + 2),
                i = eD[t],
                l = (r - a) / o;
            return i + (100 * l) / (l + (n - r) / s);
        })(m);
    return { J: u, C: h, h: m, s: 50 * w((r.c * l) / (r.aW + 4), 0.5), Q: f, M: d, H: p };
}
var eY = new A({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
        j: { refRange: [0, 100], name: "J" },
        m: { refRange: [0, 105], name: "Colorfulness" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: P,
    fromBase(e) {
        let r = eX(e, eF);
        return [r.J, r.M, r.h];
    },
    toBase: (e) => eG({ J: e[0], M: e[1], h: e[2] }, eF),
});
let eZ = B.D65,
    eU = 216 / 24389,
    eJ = 24389 / 27;
function eQ(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / eJ;
}
let eV = eW(eZ, (200 / Math.PI) * eQ(50), 100 * eQ(50), "average", !1);
var eK = new A({
    id: "hct",
    name: "HCT",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        c: { refRange: [0, 145], name: "Colorfulness" },
        t: { refRange: [0, 100], name: "Tone" },
    },
    base: P,
    fromBase: (e) =>
        (function (e) {
            var r;
            let t = 116 * ((r = e[1]) > eU ? Math.cbrt(r) : (eJ * r + 16) / 116) - 16;
            if (0 === t) return [0, 0, 0];
            let a = eX(e, eV);
            return [Y(a.h), a.C, t];
        })(e),
    toBase: (e) =>
        (function (e, r) {
            let [t, a, n] = e,
                o = [],
                s = 0;
            if (0 === n) return [0, 0, 0];
            let i = eQ(n);
            s =
                n > 0
                    ? 0.00379058511492914 * n ** 2 + 0.608983189401032 * n + 0.9155088574762233
                    : 9514440756550361e-21 * n ** 2 + 0.08693057439788597 * n - 21.928975842194614;
            let l = 0,
                c = 1 / 0;
            for (; l <= 15; ) {
                let e = Math.abs((o = eG({ J: s, C: a, h: t }, r))[1] - i);
                if (e < c) {
                    if (e <= 2e-12) return o;
                    c = e;
                }
                (s -= ((o[1] - i) * s) / (2 * o[1])), (l += 1);
            }
            return eG({ J: s, C: a, h: t }, r);
        })(e, eV),
    formats: {
        color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let e1 = Math.PI / 180;
function e0(e) {
    e[1] < 0 && (e = eK.fromBase(eK.toBase(e)));
    let r = Math.log(Math.max(1 + 0.0228 * e[1] * eV.flRoot, 1)) / 0.0228,
        t = e[0] * e1,
        a = r * Math.cos(t),
        n = r * Math.sin(t);
    return [e[2], a, n];
}
var e2 = {
    deltaE76: function (e, r) {
        return el(e, r, "lab");
    },
    deltaECMC: function (e, r, { l: t = 2, c: a = 1 } = {}) {
        [e, r] = L([e, r]);
        let [n, o, s] = X.from(e),
            [, i, l] = Z.from(X, [n, o, s]),
            [c, u, f] = X.from(r),
            h = Z.from(X, [c, u, f])[1];
        i < 0 && (i = 0), h < 0 && (h = 0);
        let d = n - c,
            m = i - h,
            p = o - u,
            g = s - f,
            b = 0.511;
        n >= 16 && (b = (0.040975 * n) / (1 + 0.01765 * n));
        let M = (0.0638 * i) / (1 + 0.0131 * i) + 0.638;
        Number.isNaN(l) && (l = 0);
        let v = Math.pow(i, 4),
            w = Math.sqrt(v / (v + 1900)),
            y =
                M *
                (w *
                    (l >= 164 && l <= 345
                        ? 0.56 + Math.abs(0.2 * Math.cos((l + 168) * ec))
                        : 0.36 + Math.abs(0.4 * Math.cos((l + 35) * ec))) +
                    1 -
                    w),
            C = (d / (t * b)) ** 2;
        return Math.sqrt((C += (m / (a * M)) ** 2 + (p ** 2 + g ** 2 - m ** 2) / y ** 2));
    },
    deltaE2000: K,
    deltaEJz: function (e, r) {
        [e, r] = L([e, r]);
        let [t, a, n] = ew.from(e),
            [o, s, i] = ew.from(r);
        Number.isNaN(n) && Number.isNaN(i)
            ? ((n = 0), (i = 0))
            : Number.isNaN(n)
              ? (n = i)
              : Number.isNaN(i) && (i = n);
        let l = 2 * Math.sqrt(a * s) * Math.sin(((n - i) / 2) * (Math.PI / 180));
        return Math.sqrt((t - o) ** 2 + (a - s) ** 2 + l ** 2);
    },
    deltaEITP: function (e, r) {
        [e, r] = L([e, r]);
        let [t, a, n] = ez.from(e),
            [o, s, i] = ez.from(r);
        return 720 * Math.sqrt((t - o) ** 2 + 0.25 * (a - s) ** 2 + (n - i) ** 2);
    },
    deltaEOK: eo,
    deltaEHCT: function (e, r) {
        [e, r] = L([e, r]);
        let [t, a, n] = e0(eK.from(e)),
            [o, s, i] = e0(eK.from(r));
        return Math.sqrt((t - o) ** 2 + (a - s) ** 2 + (n - i) ** 2);
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
function e6(
    e,
    { method: r = _.gamut_mapping, space: t, deltaEMethod: a = "", jnd: n = 2, blackWhiteClamp: s = {} } = {},
) {
    let i;
    if (((e = L(e)), o(arguments[1]) ? (t = arguments[1]) : t || (t = e.space), es(e, (t = A.get(t)), { epsilon: 0 })))
        return e;
    if ("css" === r)
        i = (function (e, { space: r } = {}) {
            (e = L(e)), r || (r = e.space), (r = A.get(r));
            let t = A.get("oklch");
            if (r.isUnbounded) return e8(e, r);
            let a = e8(e, t),
                n = a.coords[0];
            if (n >= 1) {
                let t = e8(e3, r);
                return (t.alpha = e.alpha), e8(t, r);
            }
            if (n <= 0) {
                let t = e8(e9, r);
                return (t.alpha = e.alpha), e8(t, r);
            }
            if (es(a, r, { epsilon: 0 })) return e8(a, r);
            function o(e) {
                let t = e8(e, r),
                    a = Object.values(r.coords);
                return (
                    (t.coords = t.coords.map((e, r) => {
                        if ("range" in a[r]) {
                            let [t, n] = a[r].range;
                            return M(t, e, n);
                        }
                        return e;
                    })),
                    t
                );
            }
            let s = 0,
                i = a.coords[1],
                l = !0,
                c = ei(a),
                u = o(c),
                f = eo(u, c);
            if (f < 0.02) return u;
            for (; i - s > 1e-4; ) {
                let e = (s + i) / 2;
                if (((c.coords[1] = e), l && es(c, r, { epsilon: 0 }))) s = e;
                else if ((f = eo((u = o(c)), c)) < 0.02)
                    if (0.02 - f < 1e-4) break;
                    else (l = !1), (s = e);
                else i = e;
            }
            return u;
        })(e, { space: t });
    else {
        if ("clip" === r || es(e, t)) i = e8(e, t);
        else {
            Object.prototype.hasOwnProperty.call(e5, r) &&
                ({ method: r, jnd: n, deltaEMethod: a, blackWhiteClamp: s } = e5[r]);
            let o = K;
            if ("" !== a) {
                for (let e in e2)
                    if ("deltae" + a.toLowerCase() === e.toLowerCase()) {
                        o = e2[e];
                        break;
                    }
            }
            let u = e6(e8(e, t), { method: "clip", space: t });
            if (o(e, u) > n) {
                var c;
                let a;
                if (3 === Object.keys(s).length) {
                    let r = A.resolveCoord(s.channel),
                        t = $(e8(e, r.space), r.id);
                    if ((l(t) && (t = 0), t >= s.max)) return e8({ space: "xyz-d65", coords: B.D65 }, e.space);
                    if (t <= s.min) return e8({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
                }
                let u = A.resolveCoord(r),
                    f = u.space,
                    h = u.id,
                    d = e8(e, f);
                d.coords.forEach((e, r) => {
                    l(e) && (d.coords[r] = 0);
                });
                let m = (u.range || u.refRange)[0],
                    p =
                        ((a = (c = n) ? Math.floor(Math.log10(Math.abs(c))) : 0),
                        Math.max(parseFloat(`1e${a - 2}`), 1e-6)),
                    g = m,
                    b = $(d, h);
                for (; b - g > p; ) {
                    let e = ei(d);
                    o(d, (e = e6(e, { space: t, method: "clip" }))) - n < p ? (g = $(d, h)) : (b = $(d, h)),
                        q(d, h, (g + b) / 2);
                }
                i = e8(d, t);
            } else i = u;
        }
        if ("clip" === r || !es(i, t, { epsilon: 0 })) {
            let e = Object.values(t.coords).map((e) => e.range || []);
            i.coords = i.coords.map((r, t) => {
                let [a, n] = e[t];
                return void 0 !== a && (r = Math.max(a, r)), void 0 !== n && (r = Math.min(r, n)), r;
            });
        }
    }
    return t !== e.space && (i = e8(i, e.space)), (e.coords = i.coords), e;
}
e6.returns = "color";
let e3 = { space: en, coords: [1, 0, 0] },
    e9 = { space: en, coords: [0, 0, 0] };
function e8(e, r, { inGamut: t } = {}) {
    e = L(e);
    let a = (r = A.get(r)).from(e),
        n = { space: r, coords: a, alpha: e.alpha };
    return t && (n = e6(n, !0 === t ? void 0 : t)), n;
}
function e4(e, { precision: r = _.precision, format: t = "default", inGamut: a = !0, ...n } = {}) {
    let o;
    e = L(e);
    let s = t;
    t = e.space.getFormat(t) ?? e.space.getFormat("default") ?? A.DEFAULT_FORMAT;
    let l = e.coords.slice();
    if (((a ||= t.toGamut) && !es(e) && (l = e6(ei(e), !0 === a ? void 0 : a).coords), "custom" === t.type))
        if (((n.precision = r), t.serialize)) o = t.serialize(l, e.alpha, n);
        else throw TypeError(`format ${s} can only be used to parse colors, not for serialization`);
    else {
        let a = t.name || "color";
        t.serializeCoords ? (l = t.serializeCoords(l, r)) : null !== r && (l = l.map((e) => i(e, { precision: r })));
        let n = [...l];
        if ("color" === a) {
            let r = t.id || t.ids?.[0] || e.space.id;
            n.unshift(r);
        }
        let s = e.alpha;
        null !== r && (s = i(s, { precision: r }));
        let c = e.alpha >= 1 || t.noAlpha ? "" : `${t.commas ? "," : " /"} ${s}`;
        o = `${a}(${n.join(t.commas ? ", " : " ")}${c})`;
    }
    return o;
}
e8.returns = "color";
var e7 = new j({
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
    re = new j({
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
    rr = new j({
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
let rt = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
];
var ra = new j({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: [
            [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
            [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
            [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
        ],
        fromXYZ_M: rt,
    }),
    rn = {
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
let ro = [, , ,].fill("<percentage> | <number>[0, 255]"),
    rs = [, , ,].fill("<number>[0, 255]");
var ri = new j({
        id: "srgb",
        name: "sRGB",
        base: ra,
        fromBase: (e) =>
            e.map((e) => {
                let r = e < 0 ? -1 : 1,
                    t = e * r;
                return t > 0.0031308 ? r * (1.055 * t ** (1 / 2.4) - 0.055) : 12.92 * e;
            }),
        toBase: (e) =>
            e.map((e) => {
                let r = e < 0 ? -1 : 1,
                    t = e * r;
                return t <= 0.04045 ? e / 12.92 : r * ((t + 0.055) / 1.055) ** 2.4;
            }),
        formats: {
            rgb: { coords: ro },
            rgb_number: { name: "rgb", commas: !0, coords: rs, noAlpha: !0 },
            color: {},
            rgba: { coords: ro, commas: !0, lastAlpha: !0 },
            rgba_number: { name: "rgba", commas: !0, coords: rs },
            hex: {
                type: "custom",
                toGamut: !0,
                test: (e) => /^#([a-f0-9]{3,4}){1,2}$/i.test(e),
                parse(e) {
                    e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, "$&$&"));
                    let r = [];
                    return (
                        e.replace(/[a-f0-9]{2}/gi, (e) => {
                            r.push(parseInt(e, 16) / 255);
                        }),
                        { spaceId: "srgb", coords: r.slice(0, 3), alpha: r.slice(3)[0] }
                    );
                },
                serialize: (e, r, { collapse: t = !0 } = {}) => {
                    r < 1 && e.push(r), (e = e.map((e) => Math.round(255 * e)));
                    let a = t && e.every((e) => e % 17 == 0);
                    return "#" + e.map((e) => (a ? (e / 17).toString(16) : e.toString(16).padStart(2, "0"))).join("");
                },
            },
            keyword: {
                type: "custom",
                test: (e) => /^[a-z]+$/i.test(e),
                parse(e) {
                    e = e.toLowerCase();
                    let r = { spaceId: "srgb", coords: null, alpha: 1 };
                    if (("transparent" === e ? ((r.coords = rn.black), (r.alpha = 0)) : (r.coords = rn[e]), r.coords))
                        return r;
                },
            },
        },
    }),
    rl = new j({ id: "p3", cssId: "display-p3", name: "P3", base: rr, fromBase: ri.fromBase, toBase: ri.toBase });
if (((_.display_space = ri), "u" > typeof CSS && CSS.supports))
    for (let e of [X, re, rl]) {
        let r = e.getMinCoords(),
            t = e4({ space: e, coords: r, alpha: 1 });
        if (CSS.supports("color", t)) {
            _.display_space = e;
            break;
        }
    }
function rc(e) {
    return $(e, [P, "y"]);
}
function ru(e, r) {
    q(e, [P, "y"], r);
}
var rf = Object.freeze({
    __proto__: null,
    getLuminance: rc,
    register: function (e) {
        Object.defineProperty(e.prototype, "luminance", {
            get() {
                return rc(this);
            },
            set(e) {
                ru(this, e);
            },
        });
    },
    setLuminance: ru,
});
function rh(e) {
    return e >= 0.022 ? e : e + (0.022 - e) ** 1.414;
}
function rd(e) {
    let r = Math.abs(e);
    return (e < 0 ? -1 : 1) * Math.pow(r, 2.4);
}
let rm = 216 / 24389,
    rp = 24 / 116,
    rg = 24389 / 27,
    rb = B.D65;
var rM = new A({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            a: { refRange: [-125, 125] },
            b: { refRange: [-125, 125] },
        },
        white: rb,
        base: P,
        fromBase(e) {
            let r = e.map((e, r) => e / rb[r]).map((e) => (e > rm ? Math.cbrt(e) : (rg * e + 16) / 116));
            return [116 * r[1] - 16, 500 * (r[0] - r[1]), 200 * (r[1] - r[2])];
        },
        toBase(e) {
            let r = [];
            return (
                (r[1] = (e[0] + 16) / 116),
                (r[0] = e[1] / 500 + r[1]),
                (r[2] = r[1] - e[2] / 200),
                [
                    r[0] > rp ? Math.pow(r[0], 3) : (116 * r[0] - 16) / rg,
                    e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / rg,
                    r[2] > rp ? Math.pow(r[2], 3) : (116 * r[2] - 16) / rg,
                ].map((e, r) => e * rb[r])
            );
        },
        formats: {
            "lab-d65": {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    rv = Object.freeze({
        __proto__: null,
        contrastAPCA: function (e, r) {
            let t, a, n, o;
            (r = L(r)), (e = L(e)), (r = e8(r, "srgb")), ([a, n, o] = r.coords);
            let s = 0.2126729 * rd(a) + 0.7151522 * rd(n) + 0.072175 * rd(o);
            (e = e8(e, "srgb")), ([a, n, o] = e.coords);
            let i = 0.2126729 * rd(a) + 0.7151522 * rd(n) + 0.072175 * rd(o),
                l = rh(s),
                c = rh(i);
            return (
                100 *
                (0.1 >
                Math.abs(
                    (t =
                        5e-4 > Math.abs(c - l)
                            ? 0
                            : c > l
                              ? 1.14 * (c ** 0.56 - l ** 0.57)
                              : 1.14 * (c ** 0.65 - l ** 0.62)),
                )
                    ? 0
                    : t > 0
                      ? t - 0.027
                      : t + 0.027)
            );
        },
        contrastDeltaPhi: function (e, r) {
            (e = L(e)), (r = L(r));
            let t =
                Math.pow(
                    Math.abs(
                        Math.pow($(e, [rM, "l"]), 1.618033988749895) - Math.pow($(r, [rM, "l"]), 1.618033988749895),
                    ),
                    0.6180339887498948,
                ) *
                    Math.SQRT2 -
                40;
            return t < 7.5 ? 0 : t;
        },
        contrastLstar: function (e, r) {
            return (e = L(e)), (r = L(r)), Math.abs($(e, [X, "l"]) - $(r, [X, "l"]));
        },
        contrastMichelson: function (e, r) {
            (e = L(e)), (r = L(r));
            let t = Math.max(rc(e), 0),
                a = Math.max(rc(r), 0);
            a > t && ([t, a] = [a, t]);
            let n = t + a;
            return 0 === n ? 0 : (t - a) / n;
        },
        contrastWCAG21: function (e, r) {
            (e = L(e)), (r = L(r));
            let t = Math.max(rc(e), 0),
                a = Math.max(rc(r), 0);
            return a > t && ([t, a] = [a, t]), (t + 0.05) / (a + 0.05);
        },
        contrastWeber: function (e, r) {
            (e = L(e)), (r = L(r));
            let t = Math.max(rc(e), 0),
                a = Math.max(rc(r), 0);
            return a > t && ([t, a] = [a, t]), 0 === a ? 5e4 : (t - a) / a;
        },
    });
function rw(e) {
    let [r, t, a] = O(e, P),
        n = r + 15 * t + 3 * a;
    return [(4 * r) / n, (9 * t) / n];
}
function ry(e) {
    let [r, t, a] = O(e, P),
        n = r + t + a;
    return [r / n, t / n];
}
var rC = Object.freeze({
    __proto__: null,
    register: function (e) {
        Object.defineProperty(e.prototype, "uv", {
            get() {
                return rw(this);
            },
        }),
            Object.defineProperty(e.prototype, "xy", {
                get() {
                    return ry(this);
                },
            });
    },
    uv: rw,
    xy: ry,
});
function rR(e, r, t = {}) {
    o(t) && (t = { method: t });
    let { method: a = _.deltaE, ...n } = t;
    for (let t in e2) if ("deltae" + a.toLowerCase() === t.toLowerCase()) return e2[t](e, r, n);
    throw TypeError(`Unknown deltaE method: ${a}`);
}
var rk = Object.freeze({
    __proto__: null,
    darken: function (e, r = 0.25) {
        return q(e, [A.get("oklch", "lch"), "l"], (e) => e * (1 - r));
    },
    lighten: function (e, r = 0.25) {
        return q(e, [A.get("oklch", "lch"), "l"], (e) => e * (1 + r));
    },
});
function r_(e, r, t = 0.5, a = {}) {
    return ([e, r] = [L(e), L(r)]), "object" === s(t) && ([t, a] = [0.5, t]), rN(e, r, a)(t);
}
function rB(e, r, t = {}) {
    let a;
    rx(e) && (([a, t] = [e, r]), ([e, r] = a.rangeArgs.colors));
    let { maxDeltaE: n, deltaEMethod: o, steps: s = 2, maxSteps: i = 1e3, ...l } = t;
    a || (([e, r] = [L(e), L(r)]), (a = rN(e, r, l)));
    let c = rR(e, r),
        u = n > 0 ? Math.max(s, Math.ceil(c / n) + 1) : s,
        f = [];
    if ((void 0 !== i && (u = Math.min(u, i)), 1 === u)) f = [{ p: 0.5, color: a(0.5) }];
    else {
        let e = 1 / (u - 1);
        f = Array.from({ length: u }, (r, t) => {
            let n = t * e;
            return { p: n, color: a(n) };
        });
    }
    if (n > 0) {
        let e = f.reduce((e, r, t) => (0 === t ? 0 : Math.max(e, rR(r.color, f[t - 1].color, o))), 0);
        for (; e > n; ) {
            e = 0;
            for (let r = 1; r < f.length && f.length < i; r++) {
                let t = f[r - 1],
                    n = f[r],
                    o = (n.p + t.p) / 2,
                    s = a(o);
                (e = Math.max(e, rR(s, t.color), rR(s, n.color))), f.splice(r, 0, { p: o, color: a(o) }), r++;
            }
        }
    }
    return (f = f.map((e) => e.color));
}
function rN(e, r, t = {}) {
    if (rx(e)) {
        let [t, a] = [e, r];
        return rN(...t.rangeArgs.colors, { ...t.rangeArgs.options, ...a });
    }
    let { space: a, outputSpace: n, progression: o, premultiplied: s } = t;
    (e = L(e)), (r = L(r)), (e = ei(e)), (r = ei(r));
    let i = { colors: [e, r], options: t };
    if (
        ((a = a ? A.get(a) : A.registry[_.interpolationSpace] || e.space),
        (n = n ? A.get(n) : a),
        (e = e8(e, a)),
        (r = e8(r, a)),
        (e = e6(e)),
        (r = e6(r)),
        a.coords.h && "angle" === a.coords.h.type)
    ) {
        let n = (t.hue = t.hue || "shorter"),
            o = [a, "h"],
            [s, i] = [$(e, o), $(r, o)];
        isNaN(s) && !isNaN(i) ? (s = i) : isNaN(i) && !isNaN(s) && (i = s),
            ([s, i] = (function (e, r) {
                if ("raw" === e) return r;
                let [t, a] = r.map(Y),
                    n = a - t;
                return (
                    "increasing" === e
                        ? n < 0 && (a += 360)
                        : "decreasing" === e
                          ? n > 0 && (t += 360)
                          : "longer" === e
                            ? -180 < n && n < 180 && (n > 0 ? (t += 360) : (a += 360))
                            : "shorter" === e && (n > 180 ? (t += 360) : n < -180 && (a += 360)),
                    [t, a]
                );
            })(n, [s, i])),
            q(e, o, s),
            q(r, o, i);
    }
    return (
        s && ((e.coords = e.coords.map((r) => r * e.alpha)), (r.coords = r.coords.map((e) => e * r.alpha))),
        Object.assign(
            (t) => {
                t = o ? o(t) : t;
                let i = e.coords.map((e, a) => m(e, r.coords[a], t)),
                    l = m(e.alpha, r.alpha, t),
                    c = { space: a, coords: i, alpha: l };
                return s && (c.coords = c.coords.map((e) => e / l)), n !== a && (c = e8(c, n)), c;
            },
            { rangeArgs: i },
        )
    );
}
function rx(e) {
    return "function" === s(e) && !!e.rangeArgs;
}
_.interpolationSpace = "lab";
var rS = Object.freeze({
        __proto__: null,
        isRange: rx,
        mix: r_,
        range: rN,
        register: function (e) {
            e.defineFunction("mix", r_, { returns: "color" }),
                e.defineFunction("range", rN, { returns: "function<color>" }),
                e.defineFunction("steps", rB, { returns: "array<color>" });
        },
        steps: rB,
    }),
    rz = new A({
        id: "hsl",
        name: "HSL",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            l: { range: [0, 100], name: "Lightness" },
        },
        base: ri,
        fromBase: (e) => {
            let r = Math.max(...e),
                t = Math.min(...e),
                [a, n, o] = e,
                [s, i, l] = [NaN, 0, (t + r) / 2],
                c = r - t;
            if (0 !== c) {
                switch (((i = 0 === l || 1 === l ? 0 : (r - l) / Math.min(l, 1 - l)), r)) {
                    case a:
                        s = (n - o) / c + 6 * (n < o);
                        break;
                    case n:
                        s = (o - a) / c + 2;
                        break;
                    case o:
                        s = (a - n) / c + 4;
                }
                s *= 60;
            }
            return i < 0 && ((s += 180), (i = Math.abs(i))), s >= 360 && (s -= 360), [s, 100 * i, 100 * l];
        },
        toBase: (e) => {
            let [r, t, a] = e;
            function n(e) {
                let n = (e + r / 30) % 12,
                    o = t * Math.min(a, 1 - a);
                return a - o * Math.max(-1, Math.min(n - 3, 9 - n, 1));
            }
            return (r %= 360) < 0 && (r += 360), (t /= 100), (a /= 100), [n(0), n(8), n(4)];
        },
        formats: {
            hsl: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"] },
            hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: !0, lastAlpha: !0 },
        },
    }),
    rI = new A({
        id: "hsv",
        name: "HSV",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
        },
        base: rz,
        fromBase(e) {
            let [r, t, a] = e,
                n = (a /= 100) + (t /= 100) * Math.min(a, 1 - a);
            return [r, 0 === n ? 0 : 200 * (1 - a / n), 100 * n];
        },
        toBase(e) {
            let [r, t, a] = e,
                n = (a /= 100) * (1 - (t /= 100) / 2);
            return [r, 0 === n || 1 === n ? 0 : ((a - n) / Math.min(n, 1 - n)) * 100, 100 * n];
        },
        formats: {
            color: {
                id: "--hsv",
                coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
            },
        },
    }),
    rL = new A({
        id: "hwb",
        name: "HWB",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
        },
        base: rI,
        fromBase(e) {
            let [r, t, a] = e;
            return [r, (a * (100 - t)) / 100, 100 - a];
        },
        toBase(e) {
            let [r, t, a] = e,
                n = (t /= 100) + (a /= 100);
            if (n >= 1) return [r, 0, (t / n) * 100];
            let o = 1 - a;
            return [r, 100 * (0 === o ? 0 : 1 - t / o), 100 * o];
        },
        formats: { hwb: { coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } },
    }),
    rA = new j({
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
    rE = new j({
        id: "a98rgb",
        cssId: "a98-rgb",
        name: "Adobe\xae 98 RGB compatible",
        base: rA,
        toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
        fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
    }),
    rP = new j({
        id: "prophoto-linear",
        cssId: "--prophoto-rgb-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: T,
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
let rj = 1 / 512,
    rO = 16 / 512;
var r$ = new j({
        id: "prophoto",
        cssId: "prophoto-rgb",
        name: "ProPhoto",
        base: rP,
        toBase: (e) => e.map((e) => (e < rO ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= rj ? e ** (1 / 1.8) : 16 * e)),
    }),
    rD = new A({
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
            let r,
                [t, a, n] = e;
            return (
                (r = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [t, Math.sqrt(a ** 2 + n ** 2), Y(r)]
            );
        },
        toBase(e) {
            let r,
                t,
                [a, n, o] = e;
            return (
                isNaN(o)
                    ? ((r = 0), (t = 0))
                    : ((r = n * Math.cos((o * Math.PI) / 180)), (t = n * Math.sin((o * Math.PI) / 180))),
                [a, r, t]
            );
        },
        formats: {
            oklch: { coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"] },
        },
    });
let rq = B.D65,
    rT = 216 / 24389,
    rH = 24389 / 27,
    [rW, rF] = rw({ space: P, coords: rq });
var rG = new A({
        id: "luv",
        name: "Luv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
        },
        white: rq,
        base: P,
        fromBase(e) {
            let r = [c(e[0]), c(e[1]), c(e[2])],
                t = r[1],
                [a, n] = rw({ space: P, coords: r });
            if (!Number.isFinite(a) || !Number.isFinite(n)) return [0, 0, 0];
            let o = t <= rT ? rH * t : 116 * Math.cbrt(t) - 16;
            return [o, 13 * o * (a - rW), 13 * o * (n - rF)];
        },
        toBase(e) {
            let [r, t, a] = e;
            if (0 === r || l(r)) return [0, 0, 0];
            (t = c(t)), (a = c(a));
            let n = t / (13 * r) + rW,
                o = a / (13 * r) + rF,
                s = r <= 8 ? r / rH : Math.pow((r + 16) / 116, 3);
            return [((9 * n) / (4 * o)) * s, s, ((12 - 3 * n - 20 * o) / (4 * o)) * s];
        },
        formats: {
            color: {
                id: "--luv",
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    rX = new A({
        id: "lchuv",
        name: "LChuv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            c: { refRange: [0, 220], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: rG,
        fromBase(e) {
            let r,
                [t, a, n] = e;
            return (
                (r = 0.02 > Math.abs(a) && 0.02 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [t, Math.sqrt(a ** 2 + n ** 2), Y(r)]
            );
        },
        toBase(e) {
            let [r, t, a] = e;
            return (
                t < 0 && (t = 0),
                isNaN(a) && (a = 0),
                [r, t * Math.cos((a * Math.PI) / 180), t * Math.sin((a * Math.PI) / 180)]
            );
        },
        formats: {
            color: {
                id: "--lchuv",
                coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"],
            },
        },
    });
let rY = 216 / 24389,
    rZ = 24389 / 27,
    rU = rt[0][0],
    rJ = rt[0][1],
    rQ = rt[0][2],
    rV = rt[1][0],
    rK = rt[1][1],
    r1 = rt[1][2],
    r0 = rt[2][0],
    r2 = rt[2][1],
    r5 = rt[2][2];
function r6(e, r, t) {
    let a = r / (Math.sin(t) - e * Math.cos(t));
    return a < 0 ? 1 / 0 : a;
}
function r3(e) {
    let r = Math.pow(e + 16, 3) / 1560896,
        t = r > rY ? r : e / rZ,
        a = t * (284517 * rU - 94839 * rQ),
        n = t * (838422 * rQ + 769860 * rJ + 731718 * rU),
        o = t * (632260 * rQ - 126452 * rJ),
        s = t * (284517 * rV - 94839 * r1),
        i = t * (838422 * r1 + 769860 * rK + 731718 * rV),
        l = t * (632260 * r1 - 126452 * rK),
        c = t * (284517 * r0 - 94839 * r5),
        u = t * (838422 * r5 + 769860 * r2 + 731718 * r0),
        f = t * (632260 * r5 - 126452 * r2);
    return {
        r0s: a / o,
        r0i: (n * e) / o,
        r1s: a / (o + 126452),
        r1i: ((n - 769860) * e) / (o + 126452),
        g0s: s / l,
        g0i: (i * e) / l,
        g1s: s / (l + 126452),
        g1i: ((i - 769860) * e) / (l + 126452),
        b0s: c / f,
        b0i: (u * e) / f,
        b1s: c / (f + 126452),
        b1i: ((u - 769860) * e) / (f + 126452),
    };
}
function r9(e, r) {
    let t = (r / 360) * Math.PI * 2;
    return Math.min(
        r6(e.r0s, e.r0i, t),
        r6(e.r1s, e.r1i, t),
        r6(e.g0s, e.g0i, t),
        r6(e.g1s, e.g1i, t),
        r6(e.b0s, e.b0i, t),
        r6(e.b1s, e.b1i, t),
    );
}
var r8 = new A({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: rX,
    gamutSpace: ri,
    fromBase(e) {
        let r,
            [t, a, n] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            t > 99.9999999 ? ((r = 0), (t = 100)) : t < 1e-8 ? ((r = 0), (t = 0)) : (r = (a / r9(r3(t), n)) * 100),
            [n, r, t]
        );
    },
    toBase(e) {
        let r,
            [t, a, n] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            n > 99.9999999 ? ((n = 100), (r = 0)) : n < 1e-8 ? ((n = 0), (r = 0)) : (r = (r9(r3(n), t) / 100) * a),
            [n, r, t]
        );
    },
    formats: {
        color: { id: "--hsluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
function r4(e, r) {
    return Math.abs(r) / Math.sqrt(Math.pow(e, 2) + 1);
}
function r7(e) {
    return Math.min(
        r4(e.r0s, e.r0i),
        r4(e.r1s, e.r1i),
        r4(e.g0s, e.g0i),
        r4(e.g1s, e.g1i),
        r4(e.b0s, e.b0i),
        r4(e.b1s, e.b1i),
    );
}
rt[0][0], rt[0][1], rt[0][2], rt[1][0], rt[1][1], rt[1][2], rt[2][0], rt[2][1], rt[2][2];
var te = new A({
    id: "hpluv",
    name: "HPLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: rX,
    gamutSpace: "self",
    fromBase(e) {
        let r,
            [t, a, n] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            t > 99.9999999 ? ((r = 0), (t = 100)) : t < 1e-8 ? ((r = 0), (t = 0)) : (r = (a / r7(r3(t))) * 100),
            [n, r, t]
        );
    },
    toBase(e) {
        let r,
            [t, a, n] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            n > 99.9999999 ? ((n = 100), (r = 0)) : n < 1e-8 ? ((n = 0), (r = 0)) : (r = (r7(r3(n)) / 100) * a),
            [n, r, t]
        );
    },
    formats: {
        color: { id: "--hpluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let tr = 2610 / 16384,
    tt = 16384 / 2610,
    ta = 32 / 2523;
var tn = new j({
        id: "rec2100pq",
        cssId: "rec2100-pq",
        name: "REC.2100-PQ",
        base: e7,
        toBase: (e) =>
            e.map(function (e) {
                return (1e4 * (Math.max(e ** ta - 0.8359375, 0) / (18.8515625 - 18.6875 * e ** ta)) ** tt) / 203;
            }),
        fromBase: (e) =>
            e.map(function (e) {
                let r = Math.max((203 * e) / 1e4, 0);
                return ((0.8359375 + 18.8515625 * r ** tr) / (1 + 18.6875 * r ** tr)) ** 78.84375;
            }),
    }),
    to = new j({
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
let ts = {};
function ti({ id: e, toCone_M: r, fromCone_M: t }) {
    ts[e] = arguments[0];
}
function tl(e, r, t = "Bradford") {
    let a = ts[t],
        [o, s, i] = n(a.toCone_M, e),
        [l, c, u] = n(a.toCone_M, r),
        f = n(
            [
                [l / o, 0, 0],
                [0, c / s, 0],
                [0, 0, u / i],
            ],
            a.toCone_M,
        );
    return n(a.fromCone_M, f);
}
k.add("chromatic-adaptation-start", (e) => {
    e.options.method && (e.M = tl(e.W1, e.W2, e.options.method));
}),
    k.add("chromatic-adaptation-end", (e) => {
        e.M || (e.M = tl(e.W1, e.W2, e.options.method));
    }),
    ti({
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
    ti({
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
    ti({
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
    ti({
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
    Object.assign(B, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435],
    }),
    (B.ACES = [0.32168 / 0.33767, 1, 1.0088251843515859]);
var tc = new j({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    coords: {
        r: { range: [0, 65504], name: "Red" },
        g: { range: [0, 65504], name: "Green" },
        b: { range: [0, 65504], name: "Blue" },
    },
    referred: "scene",
    white: B.ACES,
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
let tu = (Math.log2(65504) + 9.72) / 17.52;
var tf = Object.freeze({
    __proto__: null,
    A98RGB: rE,
    A98RGB_Linear: rA,
    ACEScc: new j({
        id: "acescc",
        cssId: "--acescc",
        name: "ACEScc",
        coords: {
            r: { range: [-0.35828683, tu], name: "Red" },
            g: { range: [-0.35828683, tu], name: "Green" },
            b: { range: [-0.35828683, tu], name: "Blue" },
        },
        referred: "scene",
        base: tc,
        toBase(e) {
            let r = (9.72 - 15) / 17.52;
            return e.map(function (e) {
                return e <= r
                    ? (2 ** (17.52 * e - 9.72) - 152587890625e-16) * 2
                    : e < tu
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
    ACEScg: tc,
    CAM16_JMh: eY,
    HCT: eK,
    HPLuv: te,
    HSL: rz,
    HSLuv: r8,
    HSV: rI,
    HWB: rL,
    ICTCP: ez,
    JzCzHz: ew,
    Jzazbz: ev,
    LCH: Z,
    LCHuv: rX,
    Lab: X,
    Lab_D65: rM,
    Luv: rG,
    OKLCH: rD,
    OKLab: en,
    P3: rl,
    P3_Linear: rr,
    ProPhoto: r$,
    ProPhoto_Linear: rP,
    REC_2020: re,
    REC_2020_Linear: e7,
    REC_2100_HLG: to,
    REC_2100_PQ: tn,
    XYZ_ABS_D65: eu,
    XYZ_D50: T,
    XYZ_D65: P,
    sRGB: ri,
    sRGB_Linear: ra,
});
class th {
    constructor(...e) {
        let r, t, a, n;
        1 === e.length && (r = L(e[0])),
            r ? ((t = r.space || r.spaceId), (a = r.coords), (n = r.alpha)) : ([t, a, n] = e),
            Object.defineProperty(this, "space", { value: A.get(t), writable: !1, enumerable: !0, configurable: !0 }),
            (this.coords = a ? a.slice() : [0, 0, 0]),
            (this.alpha = n > 1 || void 0 === n ? 1 : n < 0 ? 0 : n);
        for (let e = 0; e < this.coords.length; e++) "NaN" === this.coords[e] && (this.coords[e] = NaN);
        for (let e in this.space.coords)
            Object.defineProperty(this, e, { get: () => this.get(e), set: (r) => this.set(e, r) });
    }
    get spaceId() {
        return this.space.id;
    }
    clone() {
        return new th(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
    }
    display(...e) {
        let r = (function (e, { space: r = _.display_space, ...t } = {}) {
            let n = e4(e, t);
            if ("u" < typeof CSS || CSS.supports("color", n) || !_.display_space) (n = new String(n)).color = e;
            else {
                let o = e;
                if (
                    (e.coords.some(l) || l(e.alpha)) &&
                    !(a ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
                    (((o = ei(e)).coords = o.coords.map(c)),
                    (o.alpha = c(o.alpha)),
                    (n = e4(o, t)),
                    CSS.supports("color", n))
                )
                    return ((n = new String(n)).color = o), n;
                (n = new String(e4((o = e8(o, r)), t))).color = o;
            }
            return n;
        })(this, ...e);
        return (r.color = new th(r.color)), r;
    }
    static get(e, ...r) {
        return e instanceof th ? e : new th(e, ...r);
    }
    static defineFunction(e, r, t = r) {
        let { instance: a = !0, returns: n } = t,
            o = function (...e) {
                let t = r(...e);
                if ("color" === n) t = th.get(t);
                else if ("function<color>" === n) {
                    let e = t;
                    Object.assign(
                        (t = function (...r) {
                            let t = e(...r);
                            return th.get(t);
                        }),
                        e,
                    );
                } else "array<color>" === n && (t = t.map((e) => th.get(e)));
                return t;
            };
        e in th || (th[e] = o),
            a &&
                (th.prototype[e] = function (...e) {
                    return o(this, ...e);
                });
    }
    static defineFunctions(e) {
        for (let r in e) th.defineFunction(r, e[r], e[r]);
    }
    static extend(e) {
        if (e.register) e.register(th);
        else for (let r in e) th.defineFunction(r, e[r]);
    }
}
for (let e of (th.defineFunctions({
    get: $,
    getAll: O,
    set: q,
    setAll: D,
    to: e8,
    equals: function (e, r) {
        return (
            (e = L(e)),
            (r = L(r)),
            e.space === r.space && e.alpha === r.alpha && e.coords.every((e, t) => e === r.coords[t])
        );
    },
    inGamut: es,
    toGamut: e6,
    distance: el,
    toString: e4,
}),
Object.assign(th, { util: R, hooks: k, WHITES: B, Space: A, spaces: A.registry, parse: I, defaults: _ }),
Object.keys(tf)))
    A.register(tf[e]);
for (let e in A.registry) td(e, A.registry[e]);
function td(e, r) {
    let t = e.replace(/-/g, "_");
    Object.defineProperty(th.prototype, t, {
        get() {
            let t = this.getAll(e);
            return "u" < typeof Proxy
                ? t
                : new Proxy(t, {
                      has: (e, t) => {
                          try {
                              return A.resolveCoord([r, t]), !0;
                          } catch (e) {}
                          return Reflect.has(e, t);
                      },
                      get: (e, t, a) => {
                          if (t && "symbol" != typeof t && !(t in e)) {
                              let { index: a } = A.resolveCoord([r, t]);
                              if (a >= 0) return e[a];
                          }
                          return Reflect.get(e, t, a);
                      },
                      set: (t, a, n, o) => {
                          if ((a && "symbol" != typeof a && !(a in t)) || a >= 0) {
                              let { index: o } = A.resolveCoord([r, a]);
                              if (o >= 0) return (t[o] = n), this.setAll(e, t), !0;
                          }
                          return Reflect.set(t, a, n, o);
                      },
                  });
        },
        set(r) {
            this.setAll(e, r);
        },
        configurable: !0,
        enumerable: !0,
    });
}
k.add("colorspace-init-end", (e) => {
    td(e.id, e),
        e.aliases?.forEach((r) => {
            td(r, e);
        });
}),
    th.extend(e2),
    th.extend({ deltaE: rR }),
    Object.assign(th, { deltaEMethods: e2 }),
    th.extend(rk),
    th.extend({
        contrast: function (e, r, t = {}) {
            o(t) && (t = { algorithm: t });
            let { algorithm: a, ...n } = t;
            if (!a) {
                let e = Object.keys(rv)
                    .map((e) => e.replace(/^contrast/, ""))
                    .join(", ");
                throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`);
            }
            for (let t in ((e = L(e)), (r = L(r)), rv))
                if ("contrast" + a.toLowerCase() === t.toLowerCase()) return rv[t](e, r, n);
            throw TypeError(`Unknown contrast algorithm: ${a}`);
        },
    }),
    th.extend(rC),
    th.extend(rf),
    th.extend(rS),
    th.extend(rv);
