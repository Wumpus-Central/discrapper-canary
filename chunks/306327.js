"use strict";
let n;
function a(e, t) {
    let r = e.length;
    Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((e) => [e]));
    let n = t[0].length,
        a = t[0].map((e, r) => t.map((e) => e[r])),
        o = e.map((e) =>
            a.map((t) => {
                let r = 0;
                if (!Array.isArray(e)) {
                    for (let n of t) r += e * n;
                    return r;
                }
                for (let n = 0; n < e.length; n++) r += e[n] * (t[n] || 0);
                return r;
            }),
        );
    return (1 === r && (o = o[0]), 1 === n) ? o.map((e) => e[0]) : o;
}
function o(e) {
    return "string" === i(e);
}
function i(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function s(e, { precision: t, unit: r }) {
    return l(e) ? "none" : u(e, t) + (r ?? "");
}
function l(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function c(e) {
    return l(e) ? 0 : e;
}
function u(e, t) {
    if (0 === e) return 0;
    let r = ~~e,
        n = 0;
    r && t && (n = ~~Math.log10(Math.abs(r)) + 1);
    let a = 10 ** (t - n);
    return Math.floor(e * a + 0.5) / a;
}
r.d(t, { A: () => rf });
let h = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function f(e) {
    if (!e) return;
    e = e.trim();
    let t = /^-?[\d.]+$/,
        r = /%|deg|g?rad|turn$/,
        n = e.match(/^([a-z]+)\((.+?)\)$/i);
    if (n) {
        let e = [];
        return (
            n[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g, (n, a) => {
                let o = a.match(r),
                    i = a;
                if (o) {
                    let e = o[0],
                        t = i.slice(0, -e.length);
                    "%" === e
                        ? ((i = new Number(t / 100)).type = "<percentage>")
                        : (((i = new Number(t * h[e])).type = "<angle>"), (i.unit = e));
                } else
                    t.test(i)
                        ? ((i = new Number(i)).type = "<number>")
                        : "none" === i && ((i = new Number(NaN)).none = !0);
                n.startsWith("/") && ((i = i instanceof Number ? i : new Number(i)).alpha = !0),
                    "object" == typeof i && i instanceof Number && (i.raw = a),
                    e.push(i);
            }),
            { name: n[1].toLowerCase(), rawName: n[1], rawArgs: n[2], args: e }
        );
    }
}
function p(e) {
    return e[e.length - 1];
}
function d(e, t, r) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function m(e, t, r) {
    return (r - e) / (t - e);
}
function g(e, t, r) {
    return d(t[0], t[1], m(e[0], e[1], r));
}
function b(e) {
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
function x(e, t) {
    return 0 === t ? 0 : e / t;
}
function _(e, t, r = 0, n = e.length) {
    for (; r < n; ) {
        let a = (r + n) >> 1;
        e[a] < t ? (r = a + 1) : (n = a);
    }
    return r;
}
var M = Object.freeze({
    __proto__: null,
    bisectLeft: _,
    clamp: y,
    copySign: v,
    interpolate: d,
    interpolateInv: m,
    isNone: l,
    isString: o,
    last: p,
    mapRange: g,
    multiplyMatrices: a,
    parseCoordGrammar: b,
    parseFunction: f,
    serializeNumber: s,
    skipNone: c,
    spow: w,
    toPrecision: u,
    type: i,
    zdiv: x,
});
let C = new (class {
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
var A = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function (e) {
        this.verbose && globalThis?.console?.warn?.(e);
    },
};
let S = { D50: [0.3457 / 0.3585, 1, 0.8251046025104602], D65: [0.3127 / 0.329, 1, 1.0890577507598784] };
function R(e) {
    return Array.isArray(e) ? e : S[e];
}
function E(e, t, r, n = {}) {
    if (((e = R(e)), (t = R(t)), !e || !t))
        throw TypeError(`Missing white point to convert ${!e ? "from" : ""}${!e && !t ? "/" : ""}${!t ? "to" : ""}`);
    if (e === t) return r;
    let o = { W1: e, W2: t, XYZ: r, options: n };
    if (
        (C.run("chromatic-adaptation-start", o),
        o.M ||
            (o.W1 === S.D65 && o.W2 === S.D50
                ? (o.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371],
                  ])
                : o.W1 === S.D50 &&
                  o.W2 === S.D65 &&
                  (o.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124],
                  ])),
        C.run("chromatic-adaptation-end", o),
        o.M)
    )
        return a(o.M, o.XYZ);
    throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
let B = new Set(["<number>", "<percentage>", "<angle>"]);
function T(e, t, r, n) {
    return Object.entries(e.coords).map(([e, a], o) => {
        let i,
            s = t.coordGrammar[o],
            l = n[o],
            c = l?.type;
        if (!(i = l.none ? s.find((e) => B.has(e)) : s.find((e) => e == c))) {
            let t = a.name || e;
            throw TypeError(`${c ?? l.raw} not allowed for ${t} in ${r}()`);
        }
        let u = i.range;
        "<percentage>" === c && (u ||= [0, 1]);
        let h = a.range || a.refRange;
        return u && h && (n[o] = g(u, h, n[o])), i;
    });
}
function P(e, { meta: t } = {}) {
    let r = { str: String(e)?.trim() };
    if ((C.run("parse-start", r), r.color)) return r.color;
    if (((r.parsed = f(r.str)), r.parsed)) {
        let e = r.parsed.name;
        if ("color" === e) {
            let e = r.parsed.args.shift(),
                n = e.startsWith("--") ? e.substring(2) : `--${e}`,
                a = [e, n],
                o = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1;
            for (let n of I.all) {
                let i = n.getFormat("color");
                if (i && (a.includes(i.id) || i.ids?.filter((e) => a.includes(e)).length)) {
                    let a,
                        s = Object.keys(n.coords).map((e, t) => r.parsed.args[t] || 0);
                    return (
                        i.coordGrammar && (a = T(n, i, "color", s)),
                        t && Object.assign(t, { formatId: "color", types: a }),
                        i.id.startsWith("--") &&
                            !e.startsWith("--") &&
                            A.warn(
                                `${n.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${i.id}) instead of color(${e}).`,
                            ),
                        e.startsWith("--") &&
                            !i.id.startsWith("--") &&
                            A.warn(
                                `${n.name} is a standard space and supported in the CSS spec. Use color(${i.id}) instead of prefixed color(${e}).`,
                            ),
                        { spaceId: n.id, coords: s, alpha: o }
                    );
                }
            }
            let i = "",
                s = e in I.registry ? e : n;
            if (s in I.registry) {
                let e = I.registry[s].formats?.color?.id;
                e && (i = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (i || "Missing a plugin?"));
        }
        for (let n of I.all) {
            let a = n.getFormat(e);
            if (a && "function" === a.type) {
                let o,
                    i = 1;
                (a.lastAlpha || p(r.parsed.args).alpha) && (i = r.parsed.args.pop());
                let s = r.parsed.args;
                return (
                    a.coordGrammar && (o = T(n, a, e, s)),
                    t && Object.assign(t, { formatId: a.name, types: o }),
                    { spaceId: n.id, coords: s, alpha: i }
                );
            }
        }
    } else
        for (let e of I.all)
            for (let n in e.formats) {
                let a = e.formats[n];
                if ("custom" !== a.type || (a.test && !a.test(r.str))) continue;
                let o = a.parse(r.str);
                if (o) return (o.alpha ??= 1), t && (t.formatId = n), o;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function k(e) {
    if (Array.isArray(e)) return e.map(k);
    if (!e) throw TypeError("Empty color reference");
    o(e) && (e = P(e));
    let t = e.space || e.spaceId;
    return t instanceof I || (e.space = I.get(t)), void 0 === e.alpha && (e.alpha = 1), e;
}
class I {
    constructor(e) {
        (this.id = e.id),
            (this.name = e.name),
            (this.base = e.base ? I.get(e.base) : null),
            (this.aliases = e.aliases),
            this.base && ((this.fromBase = e.fromBase), (this.toBase = e.toBase));
        let t = e.coords ?? this.base.coords;
        for (let e in t) "name" in t[e] || (t[e].name = e);
        this.coords = t;
        let r = e.white ?? this.base.white ?? "D65";
        for (let t in ((this.white = R(r)), (this.formats = e.formats ?? {}), this.formats)) {
            let e = this.formats[t];
            (e.type ||= "function"), (e.name ||= t);
        }
        this.formats.color?.id || (this.formats.color = { ...(this.formats.color ?? {}), id: e.cssId || this.id }),
            e.gamutSpace
                ? (this.gamutSpace = "self" === e.gamutSpace ? this : I.get(e.gamutSpace))
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
            C.run("colorspace-init-end", this);
    }
    inGamut(e, { epsilon: t = 75e-6 } = {}) {
        if (!this.equals(this.gamutSpace))
            return (e = this.to(this.gamutSpace, e)), this.gamutSpace.inGamut(e, { epsilon: t });
        let r = Object.values(this.coords);
        return e.every((e, n) => {
            let a = r[n];
            if ("angle" !== a.type && a.range) {
                if (Number.isNaN(e)) return !0;
                let [r, n] = a.range;
                return (void 0 === r || e >= r - t) && (void 0 === n || e <= n + t);
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
            ? (e = L(e, this))
            : (t = "default" === e ? Object.values(this.formats)[0] : this.formats[e])
              ? (t = L(t, this))
              : null;
    }
    equals(e) {
        return !!e && (this === e || this.id === e || this.id === e.id);
    }
    to(e, t) {
        let r, n;
        if (1 == arguments.length) {
            let r = k(e);
            [e, t] = [r.space, r.coords];
        }
        if (((e = I.get(e)), this.equals(e))) return t;
        t = t.map((e) => (Number.isNaN(e) ? 0 : e));
        let a = this.path,
            o = e.path;
        for (let e = 0; e < a.length; e++)
            if (a[e].equals(o[e])) (r = a[e]), (n = e);
            else break;
        if (!r) throw Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
        for (let e = a.length - 1; e > n; e--) t = a[e].toBase(t);
        for (let e = n + 1; e < o.length; e++) t = o[e].fromBase(t);
        return t;
    }
    from(e, t) {
        if (1 == arguments.length) {
            let r = k(e);
            [e, t] = [r.space, r.coords];
        }
        return (e = I.get(e)).to(this, t);
    }
    toString() {
        return `${this.name} (${this.id})`;
    }
    getMinCoords() {
        let e = [];
        for (let t in this.coords) {
            let r = this.coords[t],
                n = r.range || r.refRange;
            e.push(n?.min ?? 0);
        }
        return e;
    }
    static registry = {};
    static get all() {
        return [...new Set(Object.values(I.registry))];
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
        if (!e || e instanceof I) return e;
        if ("string" === i(e)) {
            let t = I.registry[e.toLowerCase()];
            if (!t) throw TypeError(`No color space found with id = "${e}"`);
            return t;
        }
        if (t.length) return I.get(...t);
        throw TypeError(`${e} is not a valid color space`);
    }
    static resolveCoord(e, t) {
        let r,
            n,
            a = i(e);
        if (
            ("string" === a
                ? e.includes(".")
                    ? ([r, n] = e.split("."))
                    : ([r, n] = [, e])
                : Array.isArray(e)
                  ? ([r, n] = e)
                  : ((r = e.space), (n = e.coordId)),
            (r = I.get(r)) || (r = t),
            !r)
        )
            throw TypeError(
                `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
        if ("number" === (a = i(n)) || ("string" === a && n >= 0)) {
            let e = Object.entries(r.coords)[n];
            if (e) return { space: r, id: e[0], index: n, ...e[1] };
        }
        r = I.get(r);
        let o = n.toLowerCase(),
            s = 0;
        for (let e in r.coords) {
            let t = r.coords[e];
            if (e.toLowerCase() === o || t.name?.toLowerCase() === o) return { space: r, id: e, index: s, ...t };
            s++;
        }
        throw TypeError(
            `No "${n}" coordinate found in ${r.name}. Its coordinates are: ${Object.keys(r.coords).join(", ")}`,
        );
    }
    static DEFAULT_FORMAT = { type: "functions", name: "color" };
}
function L(e, { coords: t } = {}) {
    if (e.coords && !e.coordGrammar) {
        (e.type ||= "function"), (e.name ||= "color"), (e.coordGrammar = b(e.coords));
        let r = Object.entries(t).map(([t, r], n) => {
            let a = e.coordGrammar[n][0],
                o = r.range || r.refRange,
                i = a.range,
                s = "";
            return (
                "<percentage>" == a ? ((i = [0, 100]), (s = "%")) : "<angle>" == a && (s = "deg"),
                { fromRange: o, toRange: i, suffix: s }
            );
        });
        e.serializeCoords = (e, t) =>
            e.map((e, n) => {
                let { fromRange: a, toRange: o, suffix: i } = r[n];
                return a && o && (e = g(a, o, e)), (e = s(e, { precision: t, unit: i }));
            });
    }
    return e;
}
var N = new I({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
    white: "D65",
    formats: { color: { ids: ["xyz-d65", "xyz"] } },
    aliases: ["xyz"],
});
class j extends I {
    constructor(e) {
        e.coords ||
            (e.coords = {
                r: { range: [0, 1], name: "Red" },
                g: { range: [0, 1], name: "Green" },
                b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = N),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (t) => {
                    let r = a(e.toXYZ_M, t);
                    return this.white !== this.base.white && (r = E(this.white, this.base.white, r)), r;
                }),
                (e.fromBase ??= (t) => ((t = E(this.base.white, this.white, t)), a(e.fromXYZ_M, t)))),
            (e.referred ??= "display"),
            super(e);
    }
}
function O(e, t) {
    return ((e = k(e)), !t || e.space.equals(t)) ? e.coords.slice() : (t = I.get(t)).from(e);
}
function z(e, t) {
    e = k(e);
    let { space: r, index: n } = I.resolveCoord(t, e.space);
    return O(e, r)[n];
}
function D(e, t, r) {
    return (e = k(e)), (t = I.get(t)), (e.coords = t.to(e.space, r)), e;
}
function $(e, t, r) {
    if (((e = k(e)), 2 == arguments.length && "object" === i(arguments[1]))) {
        let t = arguments[1];
        for (let r in t) $(e, r, t[r]);
    } else {
        "function" == typeof r && (r = r(z(e, t)));
        let { space: n, index: a } = I.resolveCoord(t, e.space),
            o = O(e, n);
        (o[a] = r), D(e, n, o);
    }
    return e;
}
(D.returns = "color"), ($.returns = "color");
var U = new I({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: N,
    fromBase: (e) => E(N.white, "D50", e),
    toBase: (e) => E("D50", N.white, e),
});
let q = 216 / 24389,
    F = 24 / 116,
    H = 24389 / 27,
    W = S.D50;
var G = new I({
    id: "lab",
    name: "Lab",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: W,
    base: U,
    fromBase(e) {
        let t = e.map((e, t) => e / W[t]).map((e) => (e > q ? Math.cbrt(e) : (H * e + 16) / 116));
        return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
    },
    toBase(e) {
        let t = [];
        return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
                t[0] > F ? Math.pow(t[0], 3) : (116 * t[0] - 16) / H,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / H,
                t[2] > F ? Math.pow(t[2], 3) : (116 * t[2] - 16) / H,
            ].map((e, t) => e * W[t])
        );
    },
    formats: {
        lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] },
    },
});
function V(e) {
    return ((e % 360) + 360) % 360;
}
var J = new I({
    id: "lch",
    name: "LCH",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        c: { refRange: [0, 150], name: "Chroma" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: G,
    fromBase(e) {
        let t,
            [r, n, a] = e;
        return (
            (t = 0.02 > Math.abs(n) && 0.02 > Math.abs(a) ? NaN : (180 * Math.atan2(a, n)) / Math.PI),
            [r, Math.sqrt(n ** 2 + a ** 2), V(t)]
        );
    },
    toBase(e) {
        let [t, r, n] = e;
        return (
            r < 0 && (r = 0),
            isNaN(n) && (n = 0),
            [t, r * Math.cos((n * Math.PI) / 180), r * Math.sin((n * Math.PI) / 180)]
        );
    },
    formats: { lch: { coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"] } },
});
let X = Math.PI,
    Z = 180 / X,
    Y = X / 180;
function Q(e) {
    let t = e * e;
    return t * t * t * e;
}
function K(e, t, { kL: r = 1, kC: n = 1, kH: a = 1 } = {}) {
    let o, i;
    [e, t] = k([e, t]);
    let [s, l, c] = G.from(e),
        u = J.from(G, [s, l, c])[1],
        [h, f, p] = G.from(t),
        d = J.from(G, [h, f, p])[1];
    u < 0 && (u = 0), d < 0 && (d = 0);
    let m = Q((u + d) / 2),
        g = 0.5 * (1 - Math.sqrt(m / (m + 0x16bcc41e9))),
        b = (1 + g) * l,
        y = (1 + g) * f,
        v = Math.sqrt(b ** 2 + c ** 2),
        w = Math.sqrt(y ** 2 + p ** 2),
        x = 0 === b && 0 === c ? 0 : Math.atan2(c, b),
        _ = 0 === y && 0 === p ? 0 : Math.atan2(p, y);
    x < 0 && (x += 2 * X), _ < 0 && (_ += 2 * X), (x *= Z);
    let M = h - s,
        C = w - v,
        S = (_ *= Z) - x,
        R = x + _,
        E = Math.abs(S);
    v * w == 0
        ? (o = 0)
        : E <= 180
          ? (o = S)
          : S > 180
            ? (o = S - 360)
            : S < -180
              ? (o = S + 360)
              : A.warn("the unthinkable has happened");
    let B = 2 * Math.sqrt(w * v) * Math.sin((o * Y) / 2),
        T = (s + h) / 2,
        P = (v + w) / 2,
        I = Q(P),
        L = (T - 50) ** 2,
        N = 1 + (0.015 * L) / Math.sqrt(20 + L),
        j = 1 + 0.045 * P,
        O =
            1 +
            0.015 *
                P *
                (1 -
                    0.17 *
                        Math.cos(
                            ((i = v * w == 0 ? R : E <= 180 ? R / 2 : R < 360 ? (R + 360) / 2 : (R - 360) / 2) - 30) *
                                Y,
                        ) +
                    0.24 * Math.cos(2 * i * Y) +
                    0.32 * Math.cos((3 * i + 6) * Y) -
                    0.2 * Math.cos((4 * i - 63) * Y)),
        z = (M / (r * N)) ** 2;
    return Math.sqrt(
        (z +=
            (C / (n * j)) ** 2 +
            (B / (a * O)) ** 2 +
            (C / (n * j)) *
                (-1 *
                    Math.sin(2 * (30 * Math.exp(-1 * ((i - 275) / 25) ** 2)) * Y) *
                    (2 * Math.sqrt(I / (I + 0x16bcc41e9)))) *
                (B / (a * O))),
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
    en = [
        [1, 0.3963377773761749, 0.2158037573099136],
        [1, -0.1055613458156586, -0.0638541728258133],
        [1, -0.0894841775298119, -1.2914855480194092],
    ];
var ea = new I({
    id: "oklab",
    name: "Oklab",
    coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } },
    white: "D65",
    base: N,
    fromBase(e) {
        let t = a(ee, e).map((e) => Math.cbrt(e));
        return a(er, t);
    },
    toBase(e) {
        let t = a(en, e).map((e) => e ** 3);
        return a(et, t);
    },
    formats: {
        oklab: {
            coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
        },
    },
});
function eo(e, t) {
    [e, t] = k([e, t]);
    let [r, n, a] = ea.from(e),
        [o, i, s] = ea.from(t);
    return Math.sqrt((r - o) ** 2 + (n - i) ** 2 + (a - s) ** 2);
}
function ei(e, t, { epsilon: r = 75e-6 } = {}) {
    (e = k(e)), t || (t = e.space), (t = I.get(t));
    let n = e.coords;
    return t !== e.space && (n = t.from(e)), t.inGamut(n, { epsilon: r });
}
function es(e) {
    return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function el(e, t, r = "lab") {
    let n = (r = I.get(r)).from(e),
        a = r.from(t);
    return Math.sqrt(
        n.reduce((e, t, r) => {
            let n = a[r];
            return isNaN(t) || isNaN(n) ? e : e + (n - t) ** 2;
        }, 0),
    );
}
let ec = Math.PI / 180;
var eu = new I({
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
        x: { refRange: [0, 9504.7], name: "Xa" },
        y: { refRange: [0, 1e4], name: "Ya" },
        z: { refRange: [0, 10888.3], name: "Za" },
    },
    base: N,
    fromBase: (e) => e.map((e) => Math.max(203 * e, 0)),
    toBase: (e) => e.map((e) => Math.max(e / 203, 0)),
});
let eh = 2610 / 16384,
    ef = 16384 / 2610,
    ep = (1.7 * 2523) / 32,
    ed = 32 / (1.7 * 2523),
    em = [
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
    ey = [
        [1, 0.1386050432715393, 0.05804731615611886],
        [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
        [0.9999999999999998, -0.09601924202631895, -0.8118918960560388],
    ];
var ev = new I({
        id: "jzazbz",
        name: "Jzazbz",
        coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } },
        base: eu,
        fromBase(e) {
            let [t, r, n] = e,
                o = a(em, [1.15 * t - (1.15 - 1) * n, 0.66 * r - (0.66 - 1) * t, n]).map(function (e) {
                    return ((0.8359375 + 18.8515625 * (e / 1e4) ** eh) / (1 + 18.6875 * (e / 1e4) ** eh)) ** ep;
                }),
                [i, s, l] = a(eb, o);
            return [(0.43999999999999995 * i) / (1 + -0.56 * i) - 16295499532821565e-27, s, l];
        },
        toBase(e) {
            let [t, r, n] = e,
                o = a(ey, [
                    (t + 16295499532821565e-27) / (0.43999999999999995 - -0.56 * (t + 16295499532821565e-27)),
                    r,
                    n,
                ]).map(function (e) {
                    return 1e4 * ((0.8359375 - e ** ed) / (18.6875 * e ** ed - 18.8515625)) ** ef;
                }),
                [i, s, l] = a(eg, o),
                c = (i + (1.15 - 1) * l) / 1.15;
            return [c, (s + (0.66 - 1) * c) / 0.66, l];
        },
        formats: {
            color: {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    ew = new I({
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
                [r, n, a] = e;
            return (
                (t = 2e-4 > Math.abs(n) && 2e-4 > Math.abs(a) ? NaN : (180 * Math.atan2(a, n)) / Math.PI),
                [r, Math.sqrt(n ** 2 + a ** 2), V(t)]
            );
        },
        toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)],
    });
let ex = 2413 / 128,
    e_ = 2610 / 16384,
    eM = 2523 / 32,
    eC = 16384 / 2610,
    eA = 32 / 2523,
    eS = [
        [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
        [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
        [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
    ],
    eR = [
        [0.5, 0.5, 0],
        [6610 / 4096, -13613 / 4096, 7003 / 4096],
        [17933 / 4096, -17390 / 4096, -543 / 4096],
    ],
    eE = [
        [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
        [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
        [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
    ],
    eB = [
        [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
        [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
        [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
    ];
var eT = new I({
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
            (t = a(eS, e)),
            a(
                eR,
                t.map(function (e) {
                    return ((0.8359375 + ex * (e / 1e4) ** e_) / (1 + 18.6875 * (e / 1e4) ** e_)) ** eM;
                }),
            )
        );
    },
    toBase: (e) =>
        a(
            eB,
            a(eE, e).map(function (e) {
                let t = Math.max(e ** eA - 0.8359375, 0);
                return 1e4 * (t / (ex - 18.6875 * e ** eA)) ** eC;
            }),
        ),
});
let eP = S.D65,
    ek = 2 * Math.PI,
    eI = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127],
    ],
    eL = [
        [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
        [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
        [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
    ],
    eN = [
        [460, 451, 288],
        [460, -891, -261],
        [460, -220, -6300],
    ],
    ej = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] },
    eO = [20.14, 90, 164.25, 237.53, 380.14],
    ez = [0.8, 0.7, 1, 1.2, 0.8],
    eD = [0, 100, 200, 300, 400],
    e$ = 180 / Math.PI,
    eU = Math.PI / 180;
function eq(e, t) {
    return e.map((e) => {
        let r = w(t * Math.abs(e) * 0.01, 0.42);
        return (400 * v(r, e)) / (r + 27.13);
    });
}
function eF(e, t, r, n, o) {
    let i = {};
    (i.discounting = o), (i.refWhite = e), (i.surround = n);
    let s = e.map((e) => 100 * e);
    (i.la = t), (i.yb = r);
    let l = s[1],
        c = a(eI, s),
        u = (n = ej[i.surround])[0];
    (i.c = n[1]), (i.nc = n[2]);
    let h = (1 / (5 * i.la + 1)) ** 4;
    (i.fl = h * i.la + 0.1 * (1 - h) * (1 - h) * Math.cbrt(5 * i.la)),
        (i.flRoot = i.fl ** 0.25),
        (i.n = i.yb / l),
        (i.z = 1.48 + Math.sqrt(i.n)),
        (i.nbb = 0.725 * i.n ** -0.2),
        (i.ncb = i.nbb);
    let f = o ? 1 : Math.max(Math.min(u * (1 - (1 / 3.6) * Math.exp((-i.la - 42) / 92)), 1), 0);
    (i.dRgb = c.map((e) => d(1, l / e, f))), (i.dRgbInv = i.dRgb.map((e) => 1 / e));
    let p = eq(
        c.map((e, t) => e * i.dRgb[t]),
        i.fl,
    );
    return (i.aW = i.nbb * (2 * p[0] + p[1] + 0.05 * p[2])), i;
}
let eH = eF(eP, (64 / Math.PI) * 0.2, 20, "average", !1);
function eW(e, t) {
    var r;
    let n;
    if (!((void 0 !== e.J) ^ (void 0 !== e.Q))) throw Error("Conversion requires one and only one: 'J' or 'Q'");
    if (!((void 0 !== e.C) ^ (void 0 !== e.M) ^ (void 0 !== e.s)))
        throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
    if (!((void 0 !== e.h) ^ (void 0 !== e.H))) throw Error("Conversion requires one and only one: 'h' or 'H'");
    if (0 === e.J || 0 === e.Q) return [0, 0, 0];
    let o = 0,
        i = Math.cos(
            (o =
                void 0 !== e.h
                    ? V(e.h) * eU
                    : (function (e) {
                          let t = ((e % 400) + 400) % 400,
                              r = Math.floor(0.01 * t);
                          t %= 100;
                          let [n, a] = eO.slice(r, r + 2),
                              [o, i] = ez.slice(r, r + 2);
                          return V((t * (i * n - o * a) - 100 * n * i) / (t * (i - o) - 100 * i));
                      })(e.H) * eU),
        ),
        s = Math.sin(o),
        l = 0;
    void 0 !== e.J ? (l = 0.1 * w(e.J, 0.5)) : void 0 !== e.Q && (l = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
    let c = 0;
    void 0 !== e.C
        ? (c = e.C / l)
        : void 0 !== e.M
          ? (c = e.M / t.flRoot / l)
          : void 0 !== e.s && (c = (4e-4 * e.s ** 2 * (t.aW + 4)) / t.c);
    let u = w(c * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
        h = 0.25 * (Math.cos(o + 2) + 3.8),
        f = t.aW * w(l, 2 / t.c / t.z),
        p = (5e4 / 13) * t.nc * t.ncb * h,
        d = f / t.nbb,
        m = 23 * (d + 0.305) * x(u, 23 * p + u * (11 * i + 108 * s)),
        g =
            ((r = a(eN, [d, m * i, m * s]).map((e) => e / 1403)),
            (n = (100 / t.fl) * 2588.068098016295),
            r.map((e) => {
                let t = Math.abs(e);
                return v(n * w(t / (400 - t), 2.380952380952381), e);
            }));
    return a(
        eL,
        g.map((e, r) => e * t.dRgbInv[r]),
    ).map((e) => e / 100);
}
function eG(e, t) {
    let r = eq(
            a(
                eI,
                e.map((e) => 100 * e),
            ).map((e, r) => e * t.dRgb[r]),
            t.fl,
        ),
        n = r[0] + (-12 * r[1] + r[2]) / 11,
        o = (r[0] + r[1] - 2 * r[2]) / 9,
        i = ((Math.atan2(o, n) % ek) + ek) % ek,
        s = 0.25 * (Math.cos(i + 2) + 3.8),
        l =
            w((5e4 / 13) * t.nc * t.ncb * x(s * Math.sqrt(n ** 2 + o ** 2), r[0] + r[1] + 1.05 * r[2] + 0.305), 0.9) *
            Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        c = w((t.nbb * (2 * r[0] + r[1] + 0.05 * r[2])) / t.aW, 0.5 * t.c * t.z),
        u = 100 * w(c, 2),
        h = (4 / t.c) * c * (t.aW + 4) * t.flRoot,
        f = l * c,
        p = f * t.flRoot,
        d = V(i * e$),
        m = (function (e) {
            let t = V(e);
            t <= eO[0] && (t += 360);
            let r = _(eO, t) - 1,
                [n, a] = eO.slice(r, r + 2),
                [o, i] = ez.slice(r, r + 2),
                s = eD[r],
                l = (t - n) / o;
            return s + (100 * l) / (l + (a - t) / i);
        })(d);
    return { J: u, C: f, h: d, s: 50 * w((t.c * l) / (t.aW + 4), 0.5), Q: h, M: p, H: m };
}
var eV = new I({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
        j: { refRange: [0, 100], name: "J" },
        m: { refRange: [0, 105], name: "Colorfulness" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: N,
    fromBase(e) {
        let t = eG(e, eH);
        return [t.J, t.M, t.h];
    },
    toBase: (e) => eW({ J: e[0], M: e[1], h: e[2] }, eH),
});
let eJ = S.D65,
    eX = 216 / 24389,
    eZ = 24389 / 27;
function eY(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / eZ;
}
let eQ = eF(eJ, (200 / Math.PI) * eY(50), 100 * eY(50), "average", !1);
var eK = new I({
    id: "hct",
    name: "HCT",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        c: { refRange: [0, 145], name: "Colorfulness" },
        t: { refRange: [0, 100], name: "Tone" },
    },
    base: N,
    fromBase: (e) =>
        (function (e) {
            var t;
            let r = 116 * ((t = e[1]) > eX ? Math.cbrt(t) : (eZ * t + 16) / 116) - 16;
            if (0 === r) return [0, 0, 0];
            let n = eG(e, eQ);
            return [V(n.h), n.C, r];
        })(e),
    toBase: (e) =>
        (function (e, t) {
            let [r, n, a] = e,
                o = [],
                i = 0;
            if (0 === a) return [0, 0, 0];
            let s = eY(a);
            i =
                a > 0
                    ? 0.00379058511492914 * a ** 2 + 0.608983189401032 * a + 0.9155088574762233
                    : 9514440756550361e-21 * a ** 2 + 0.08693057439788597 * a - 21.928975842194614;
            let l = 0,
                c = 1 / 0;
            for (; l <= 15; ) {
                let e = Math.abs((o = eW({ J: i, C: n, h: r }, t))[1] - s);
                if (e < c) {
                    if (e <= 2e-12) return o;
                    c = e;
                }
                (i -= ((o[1] - s) * i) / (2 * o[1])), (l += 1);
            }
            return eW({ J: i, C: n, h: r }, t);
        })(e, eQ),
    formats: {
        color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let e0 = Math.PI / 180;
function e1(e) {
    e[1] < 0 && (e = eK.fromBase(eK.toBase(e)));
    let t = Math.log(Math.max(1 + 0.0228 * e[1] * eQ.flRoot, 1)) / 0.0228,
        r = e[0] * e0,
        n = t * Math.cos(r),
        a = t * Math.sin(r);
    return [e[2], n, a];
}
var e2 = {
    deltaE76: function (e, t) {
        return el(e, t, "lab");
    },
    deltaECMC: function (e, t, { l: r = 2, c: n = 1 } = {}) {
        [e, t] = k([e, t]);
        let [a, o, i] = G.from(e),
            [, s, l] = J.from(G, [a, o, i]),
            [c, u, h] = G.from(t),
            f = J.from(G, [c, u, h])[1];
        s < 0 && (s = 0), f < 0 && (f = 0);
        let p = a - c,
            d = s - f,
            m = o - u,
            g = i - h,
            b = 0.511;
        a >= 16 && (b = (0.040975 * a) / (1 + 0.01765 * a));
        let y = (0.0638 * s) / (1 + 0.0131 * s) + 0.638;
        Number.isNaN(l) && (l = 0);
        let v = Math.pow(s, 4),
            w = Math.sqrt(v / (v + 1900)),
            x =
                y *
                (w *
                    (l >= 164 && l <= 345
                        ? 0.56 + Math.abs(0.2 * Math.cos((l + 168) * ec))
                        : 0.36 + Math.abs(0.4 * Math.cos((l + 35) * ec))) +
                    1 -
                    w),
            _ = (p / (r * b)) ** 2;
        return Math.sqrt((_ += (d / (n * y)) ** 2 + (m ** 2 + g ** 2 - d ** 2) / x ** 2));
    },
    deltaE2000: K,
    deltaEJz: function (e, t) {
        [e, t] = k([e, t]);
        let [r, n, a] = ew.from(e),
            [o, i, s] = ew.from(t);
        Number.isNaN(a) && Number.isNaN(s)
            ? ((a = 0), (s = 0))
            : Number.isNaN(a)
              ? (a = s)
              : Number.isNaN(s) && (s = a);
        let l = 2 * Math.sqrt(n * i) * Math.sin(((a - s) / 2) * (Math.PI / 180));
        return Math.sqrt((r - o) ** 2 + (n - i) ** 2 + l ** 2);
    },
    deltaEITP: function (e, t) {
        [e, t] = k([e, t]);
        let [r, n, a] = eT.from(e),
            [o, i, s] = eT.from(t);
        return 720 * Math.sqrt((r - o) ** 2 + 0.25 * (n - i) ** 2 + (a - s) ** 2);
    },
    deltaEOK: eo,
    deltaEHCT: function (e, t) {
        [e, t] = k([e, t]);
        let [r, n, a] = e1(eK.from(e)),
            [o, i, s] = e1(eK.from(t));
        return Math.sqrt((r - o) ** 2 + (n - i) ** 2 + (a - s) ** 2);
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
    { method: t = A.gamut_mapping, space: r, deltaEMethod: n = "", jnd: a = 2, blackWhiteClamp: i = {} } = {},
) {
    let s;
    if (((e = k(e)), o(arguments[1]) ? (r = arguments[1]) : r || (r = e.space), ei(e, (r = I.get(r)), { epsilon: 0 })))
        return e;
    if ("css" === t)
        s = (function (e, { space: t } = {}) {
            (e = k(e)), t || (t = e.space), (t = I.get(t));
            let r = I.get("oklch");
            if (t.isUnbounded) return e3(e, t);
            let n = e3(e, r),
                a = n.coords[0];
            if (a >= 1) {
                let r = e3(e4, t);
                return (r.alpha = e.alpha), e3(r, t);
            }
            if (a <= 0) {
                let r = e3(e9, t);
                return (r.alpha = e.alpha), e3(r, t);
            }
            if (ei(n, t, { epsilon: 0 })) return e3(n, t);
            function o(e) {
                let r = e3(e, t),
                    n = Object.values(t.coords);
                return (
                    (r.coords = r.coords.map((e, t) => {
                        if ("range" in n[t]) {
                            let [r, a] = n[t].range;
                            return y(r, e, a);
                        }
                        return e;
                    })),
                    r
                );
            }
            let i = 0,
                s = n.coords[1],
                l = !0,
                c = es(n),
                u = o(c),
                h = eo(u, c);
            if (h < 0.02) return u;
            for (; s - i > 1e-4; ) {
                let e = (i + s) / 2;
                if (((c.coords[1] = e), l && ei(c, t, { epsilon: 0 }))) i = e;
                else if ((h = eo((u = o(c)), c)) < 0.02)
                    if (0.02 - h < 1e-4) break;
                    else (l = !1), (i = e);
                else s = e;
            }
            return u;
        })(e, { space: r });
    else {
        if ("clip" === t || ei(e, r)) s = e3(e, r);
        else {
            Object.prototype.hasOwnProperty.call(e5, t) &&
                ({ method: t, jnd: a, deltaEMethod: n, blackWhiteClamp: i } = e5[t]);
            let o = K;
            if ("" !== n) {
                for (let e in e2)
                    if ("deltae" + n.toLowerCase() === e.toLowerCase()) {
                        o = e2[e];
                        break;
                    }
            }
            let u = e6(e3(e, r), { method: "clip", space: r });
            if (o(e, u) > a) {
                var c;
                let n;
                if (3 === Object.keys(i).length) {
                    let t = I.resolveCoord(i.channel),
                        r = z(e3(e, t.space), t.id);
                    if ((l(r) && (r = 0), r >= i.max)) return e3({ space: "xyz-d65", coords: S.D65 }, e.space);
                    if (r <= i.min) return e3({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
                }
                let u = I.resolveCoord(t),
                    h = u.space,
                    f = u.id,
                    p = e3(e, h);
                p.coords.forEach((e, t) => {
                    l(e) && (p.coords[t] = 0);
                });
                let d = (u.range || u.refRange)[0],
                    m =
                        ((n = (c = a) ? Math.floor(Math.log10(Math.abs(c))) : 0),
                        Math.max(parseFloat(`1e${n - 2}`), 1e-6)),
                    g = d,
                    b = z(p, f);
                for (; b - g > m; ) {
                    let e = es(p);
                    o(p, (e = e6(e, { space: r, method: "clip" }))) - a < m ? (g = z(p, f)) : (b = z(p, f)),
                        $(p, f, (g + b) / 2);
                }
                s = e3(p, r);
            } else s = u;
        }
        if ("clip" === t || !ei(s, r, { epsilon: 0 })) {
            let e = Object.values(r.coords).map((e) => e.range || []);
            s.coords = s.coords.map((t, r) => {
                let [n, a] = e[r];
                return void 0 !== n && (t = Math.max(n, t)), void 0 !== a && (t = Math.min(t, a)), t;
            });
        }
    }
    return r !== e.space && (s = e3(s, e.space)), (e.coords = s.coords), e;
}
e6.returns = "color";
let e4 = { space: ea, coords: [1, 0, 0] },
    e9 = { space: ea, coords: [0, 0, 0] };
function e3(e, t, { inGamut: r } = {}) {
    e = k(e);
    let n = (t = I.get(t)).from(e),
        a = { space: t, coords: n, alpha: e.alpha };
    return r && (a = e6(a, !0 === r ? void 0 : r)), a;
}
function e8(e, { precision: t = A.precision, format: r = "default", inGamut: n = !0, ...a } = {}) {
    let o;
    e = k(e);
    let i = r;
    r = e.space.getFormat(r) ?? e.space.getFormat("default") ?? I.DEFAULT_FORMAT;
    let l = e.coords.slice();
    if (((n ||= r.toGamut) && !ei(e) && (l = e6(es(e), !0 === n ? void 0 : n).coords), "custom" === r.type))
        if (((a.precision = t), r.serialize)) o = r.serialize(l, e.alpha, a);
        else throw TypeError(`format ${i} can only be used to parse colors, not for serialization`);
    else {
        let n = r.name || "color";
        r.serializeCoords ? (l = r.serializeCoords(l, t)) : null !== t && (l = l.map((e) => s(e, { precision: t })));
        let a = [...l];
        if ("color" === n) {
            let t = r.id || r.ids?.[0] || e.space.id;
            a.unshift(t);
        }
        let i = e.alpha;
        null !== t && (i = s(i, { precision: t }));
        let c = e.alpha >= 1 || r.noAlpha ? "" : `${r.commas ? "," : " /"} ${i}`;
        o = `${n}(${a.join(r.commas ? ", " : " ")}${c})`;
    }
    return o;
}
e3.returns = "color";
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
    te = new j({
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
    tt = new j({
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
var tn = new j({
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
    ta = {
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
    ti = [, , ,].fill("<number>[0, 255]");
var ts = new j({
        id: "srgb",
        name: "sRGB",
        base: tn,
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
            rgb_number: { name: "rgb", commas: !0, coords: ti, noAlpha: !0 },
            color: {},
            rgba: { coords: to, commas: !0, lastAlpha: !0 },
            rgba_number: { name: "rgba", commas: !0, coords: ti },
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
                    let n = r && e.every((e) => e % 17 == 0);
                    return "#" + e.map((e) => (n ? (e / 17).toString(16) : e.toString(16).padStart(2, "0"))).join("");
                },
            },
            keyword: {
                type: "custom",
                test: (e) => /^[a-z]+$/i.test(e),
                parse(e) {
                    e = e.toLowerCase();
                    let t = { spaceId: "srgb", coords: null, alpha: 1 };
                    if (("transparent" === e ? ((t.coords = ta.black), (t.alpha = 0)) : (t.coords = ta[e]), t.coords))
                        return t;
                },
            },
        },
    }),
    tl = new j({ id: "p3", cssId: "display-p3", name: "P3", base: tt, fromBase: ts.fromBase, toBase: ts.toBase });
if (((A.display_space = ts), "u" > typeof CSS && CSS.supports))
    for (let e of [G, te, tl]) {
        let t = e.getMinCoords(),
            r = e8({ space: e, coords: t, alpha: 1 });
        if (CSS.supports("color", r)) {
            A.display_space = e;
            break;
        }
    }
function tc(e) {
    return z(e, [N, "y"]);
}
function tu(e, t) {
    $(e, [N, "y"], t);
}
var th = Object.freeze({
    __proto__: null,
    getLuminance: tc,
    register: function (e) {
        Object.defineProperty(e.prototype, "luminance", {
            get() {
                return tc(this);
            },
            set(e) {
                tu(this, e);
            },
        });
    },
    setLuminance: tu,
});
function tf(e) {
    return e >= 0.022 ? e : e + (0.022 - e) ** 1.414;
}
function tp(e) {
    let t = Math.abs(e);
    return (e < 0 ? -1 : 1) * Math.pow(t, 2.4);
}
let td = 216 / 24389,
    tm = 24 / 116,
    tg = 24389 / 27,
    tb = S.D65;
var ty = new I({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            a: { refRange: [-125, 125] },
            b: { refRange: [-125, 125] },
        },
        white: tb,
        base: N,
        fromBase(e) {
            let t = e.map((e, t) => e / tb[t]).map((e) => (e > td ? Math.cbrt(e) : (tg * e + 16) / 116));
            return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
        },
        toBase(e) {
            let t = [];
            return (
                (t[1] = (e[0] + 16) / 116),
                (t[0] = e[1] / 500 + t[1]),
                (t[2] = t[1] - e[2] / 200),
                [
                    t[0] > tm ? Math.pow(t[0], 3) : (116 * t[0] - 16) / tg,
                    e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / tg,
                    t[2] > tm ? Math.pow(t[2], 3) : (116 * t[2] - 16) / tg,
                ].map((e, t) => e * tb[t])
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
            let r, n, a, o;
            (t = k(t)), (e = k(e)), (t = e3(t, "srgb")), ([n, a, o] = t.coords);
            let i = 0.2126729 * tp(n) + 0.7151522 * tp(a) + 0.072175 * tp(o);
            (e = e3(e, "srgb")), ([n, a, o] = e.coords);
            let s = 0.2126729 * tp(n) + 0.7151522 * tp(a) + 0.072175 * tp(o),
                l = tf(i),
                c = tf(s);
            return (
                100 *
                (0.1 >
                Math.abs(
                    (r =
                        5e-4 > Math.abs(c - l)
                            ? 0
                            : c > l
                              ? 1.14 * (c ** 0.56 - l ** 0.57)
                              : 1.14 * (c ** 0.65 - l ** 0.62)),
                )
                    ? 0
                    : r > 0
                      ? r - 0.027
                      : r + 0.027)
            );
        },
        contrastDeltaPhi: function (e, t) {
            (e = k(e)), (t = k(t));
            let r =
                Math.pow(
                    Math.abs(
                        Math.pow(z(e, [ty, "l"]), 1.618033988749895) - Math.pow(z(t, [ty, "l"]), 1.618033988749895),
                    ),
                    0.6180339887498948,
                ) *
                    Math.SQRT2 -
                40;
            return r < 7.5 ? 0 : r;
        },
        contrastLstar: function (e, t) {
            return (e = k(e)), (t = k(t)), Math.abs(z(e, [G, "l"]) - z(t, [G, "l"]));
        },
        contrastMichelson: function (e, t) {
            (e = k(e)), (t = k(t));
            let r = Math.max(tc(e), 0),
                n = Math.max(tc(t), 0);
            n > r && ([r, n] = [n, r]);
            let a = r + n;
            return 0 === a ? 0 : (r - n) / a;
        },
        contrastWCAG21: function (e, t) {
            (e = k(e)), (t = k(t));
            let r = Math.max(tc(e), 0),
                n = Math.max(tc(t), 0);
            return n > r && ([r, n] = [n, r]), (r + 0.05) / (n + 0.05);
        },
        contrastWeber: function (e, t) {
            (e = k(e)), (t = k(t));
            let r = Math.max(tc(e), 0),
                n = Math.max(tc(t), 0);
            return n > r && ([r, n] = [n, r]), 0 === n ? 5e4 : (r - n) / n;
        },
    });
function tw(e) {
    let [t, r, n] = O(e, N),
        a = t + 15 * r + 3 * n;
    return [(4 * t) / a, (9 * r) / a];
}
function tx(e) {
    let [t, r, n] = O(e, N),
        a = t + r + n;
    return [t / a, r / a];
}
var t_ = Object.freeze({
    __proto__: null,
    register: function (e) {
        Object.defineProperty(e.prototype, "uv", {
            get() {
                return tw(this);
            },
        }),
            Object.defineProperty(e.prototype, "xy", {
                get() {
                    return tx(this);
                },
            });
    },
    uv: tw,
    xy: tx,
});
function tM(e, t, r = {}) {
    o(r) && (r = { method: r });
    let { method: n = A.deltaE, ...a } = r;
    for (let r in e2) if ("deltae" + n.toLowerCase() === r.toLowerCase()) return e2[r](e, t, a);
    throw TypeError(`Unknown deltaE method: ${n}`);
}
var tC = Object.freeze({
    __proto__: null,
    darken: function (e, t = 0.25) {
        return $(e, [I.get("oklch", "lch"), "l"], (e) => e * (1 - t));
    },
    lighten: function (e, t = 0.25) {
        return $(e, [I.get("oklch", "lch"), "l"], (e) => e * (1 + t));
    },
});
function tA(e, t, r = 0.5, n = {}) {
    return ([e, t] = [k(e), k(t)]), "object" === i(r) && ([r, n] = [0.5, r]), tR(e, t, n)(r);
}
function tS(e, t, r = {}) {
    let n;
    tE(e) && (([n, r] = [e, t]), ([e, t] = n.rangeArgs.colors));
    let { maxDeltaE: a, deltaEMethod: o, steps: i = 2, maxSteps: s = 1e3, ...l } = r;
    n || (([e, t] = [k(e), k(t)]), (n = tR(e, t, l)));
    let c = tM(e, t),
        u = a > 0 ? Math.max(i, Math.ceil(c / a) + 1) : i,
        h = [];
    if ((void 0 !== s && (u = Math.min(u, s)), 1 === u)) h = [{ p: 0.5, color: n(0.5) }];
    else {
        let e = 1 / (u - 1);
        h = Array.from({ length: u }, (t, r) => {
            let a = r * e;
            return { p: a, color: n(a) };
        });
    }
    if (a > 0) {
        let e = h.reduce((e, t, r) => (0 === r ? 0 : Math.max(e, tM(t.color, h[r - 1].color, o))), 0);
        for (; e > a; ) {
            e = 0;
            for (let t = 1; t < h.length && h.length < s; t++) {
                let r = h[t - 1],
                    a = h[t],
                    o = (a.p + r.p) / 2,
                    i = n(o);
                (e = Math.max(e, tM(i, r.color), tM(i, a.color))), h.splice(t, 0, { p: o, color: n(o) }), t++;
            }
        }
    }
    return (h = h.map((e) => e.color));
}
function tR(e, t, r = {}) {
    if (tE(e)) {
        let [r, n] = [e, t];
        return tR(...r.rangeArgs.colors, { ...r.rangeArgs.options, ...n });
    }
    let { space: n, outputSpace: a, progression: o, premultiplied: i } = r;
    (e = k(e)), (t = k(t)), (e = es(e)), (t = es(t));
    let s = { colors: [e, t], options: r };
    if (
        ((n = n ? I.get(n) : I.registry[A.interpolationSpace] || e.space),
        (a = a ? I.get(a) : n),
        (e = e3(e, n)),
        (t = e3(t, n)),
        (e = e6(e)),
        (t = e6(t)),
        n.coords.h && "angle" === n.coords.h.type)
    ) {
        let a = (r.hue = r.hue || "shorter"),
            o = [n, "h"],
            [i, s] = [z(e, o), z(t, o)];
        isNaN(i) && !isNaN(s) ? (i = s) : isNaN(s) && !isNaN(i) && (s = i),
            ([i, s] = (function (e, t) {
                if ("raw" === e) return t;
                let [r, n] = t.map(V),
                    a = n - r;
                return (
                    "increasing" === e
                        ? a < 0 && (n += 360)
                        : "decreasing" === e
                          ? a > 0 && (r += 360)
                          : "longer" === e
                            ? -180 < a && a < 180 && (a > 0 ? (r += 360) : (n += 360))
                            : "shorter" === e && (a > 180 ? (r += 360) : a < -180 && (n += 360)),
                    [r, n]
                );
            })(a, [i, s])),
            $(e, o, i),
            $(t, o, s);
    }
    return (
        i && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = o ? o(r) : r;
                let s = e.coords.map((e, n) => d(e, t.coords[n], r)),
                    l = d(e.alpha, t.alpha, r),
                    c = { space: n, coords: s, alpha: l };
                return i && (c.coords = c.coords.map((e) => e / l)), a !== n && (c = e3(c, a)), c;
            },
            { rangeArgs: s },
        )
    );
}
function tE(e) {
    return "function" === i(e) && !!e.rangeArgs;
}
A.interpolationSpace = "lab";
var tB = Object.freeze({
        __proto__: null,
        isRange: tE,
        mix: tA,
        range: tR,
        register: function (e) {
            e.defineFunction("mix", tA, { returns: "color" }),
                e.defineFunction("range", tR, { returns: "function<color>" }),
                e.defineFunction("steps", tS, { returns: "array<color>" });
        },
        steps: tS,
    }),
    tT = new I({
        id: "hsl",
        name: "HSL",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            l: { range: [0, 100], name: "Lightness" },
        },
        base: ts,
        fromBase: (e) => {
            let t = Math.max(...e),
                r = Math.min(...e),
                [n, a, o] = e,
                [i, s, l] = [NaN, 0, (r + t) / 2],
                c = t - r;
            if (0 !== c) {
                switch (((s = 0 === l || 1 === l ? 0 : (t - l) / Math.min(l, 1 - l)), t)) {
                    case n:
                        i = (a - o) / c + 6 * (a < o);
                        break;
                    case a:
                        i = (o - n) / c + 2;
                        break;
                    case o:
                        i = (n - a) / c + 4;
                }
                i *= 60;
            }
            return s < 0 && ((i += 180), (s = Math.abs(s))), i >= 360 && (i -= 360), [i, 100 * s, 100 * l];
        },
        toBase: (e) => {
            let [t, r, n] = e;
            function a(e) {
                let a = (e + t / 30) % 12,
                    o = r * Math.min(n, 1 - n);
                return n - o * Math.max(-1, Math.min(a - 3, 9 - a, 1));
            }
            return (t %= 360) < 0 && (t += 360), (r /= 100), (n /= 100), [a(0), a(8), a(4)];
        },
        formats: {
            hsl: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"] },
            hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: !0, lastAlpha: !0 },
        },
    }),
    tP = new I({
        id: "hsv",
        name: "HSV",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
        },
        base: tT,
        fromBase(e) {
            let [t, r, n] = e,
                a = (n /= 100) + (r /= 100) * Math.min(n, 1 - n);
            return [t, 0 === a ? 0 : 200 * (1 - n / a), 100 * a];
        },
        toBase(e) {
            let [t, r, n] = e,
                a = (n /= 100) * (1 - (r /= 100) / 2);
            return [t, 0 === a || 1 === a ? 0 : ((n - a) / Math.min(a, 1 - a)) * 100, 100 * a];
        },
        formats: {
            color: {
                id: "--hsv",
                coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
            },
        },
    }),
    tk = new I({
        id: "hwb",
        name: "HWB",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
        },
        base: tP,
        fromBase(e) {
            let [t, r, n] = e;
            return [t, (n * (100 - r)) / 100, 100 - n];
        },
        toBase(e) {
            let [t, r, n] = e,
                a = (r /= 100) + (n /= 100);
            if (a >= 1) return [t, 0, (r / a) * 100];
            let o = 1 - n;
            return [t, 100 * (0 === o ? 0 : 1 - r / o), 100 * o];
        },
        formats: { hwb: { coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } },
    }),
    tI = new j({
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
    tL = new j({
        id: "a98rgb",
        cssId: "a98-rgb",
        name: "Adobe\xae 98 RGB compatible",
        base: tI,
        toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
        fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
    }),
    tN = new j({
        id: "prophoto-linear",
        cssId: "--prophoto-rgb-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: U,
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
let tj = 1 / 512,
    tO = 16 / 512;
var tz = new j({
        id: "prophoto",
        cssId: "prophoto-rgb",
        name: "ProPhoto",
        base: tN,
        toBase: (e) => e.map((e) => (e < tO ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= tj ? e ** (1 / 1.8) : 16 * e)),
    }),
    tD = new I({
        id: "oklch",
        name: "Oklch",
        coords: {
            l: { refRange: [0, 1], name: "Lightness" },
            c: { refRange: [0, 0.4], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        white: "D65",
        base: ea,
        fromBase(e) {
            let t,
                [r, n, a] = e;
            return (
                (t = 2e-4 > Math.abs(n) && 2e-4 > Math.abs(a) ? NaN : (180 * Math.atan2(a, n)) / Math.PI),
                [r, Math.sqrt(n ** 2 + a ** 2), V(t)]
            );
        },
        toBase(e) {
            let t,
                r,
                [n, a, o] = e;
            return (
                isNaN(o)
                    ? ((t = 0), (r = 0))
                    : ((t = a * Math.cos((o * Math.PI) / 180)), (r = a * Math.sin((o * Math.PI) / 180))),
                [n, t, r]
            );
        },
        formats: {
            oklch: { coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"] },
        },
    });
let t$ = S.D65,
    tU = 216 / 24389,
    tq = 24389 / 27,
    [tF, tH] = tw({ space: N, coords: t$ });
var tW = new I({
        id: "luv",
        name: "Luv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
        },
        white: t$,
        base: N,
        fromBase(e) {
            let t = [c(e[0]), c(e[1]), c(e[2])],
                r = t[1],
                [n, a] = tw({ space: N, coords: t });
            if (!Number.isFinite(n) || !Number.isFinite(a)) return [0, 0, 0];
            let o = r <= tU ? tq * r : 116 * Math.cbrt(r) - 16;
            return [o, 13 * o * (n - tF), 13 * o * (a - tH)];
        },
        toBase(e) {
            let [t, r, n] = e;
            if (0 === t || l(t)) return [0, 0, 0];
            (r = c(r)), (n = c(n));
            let a = r / (13 * t) + tF,
                o = n / (13 * t) + tH,
                i = t <= 8 ? t / tq : Math.pow((t + 16) / 116, 3);
            return [((9 * a) / (4 * o)) * i, i, ((12 - 3 * a - 20 * o) / (4 * o)) * i];
        },
        formats: {
            color: {
                id: "--luv",
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    tG = new I({
        id: "lchuv",
        name: "LChuv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            c: { refRange: [0, 220], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: tW,
        fromBase(e) {
            let t,
                [r, n, a] = e;
            return (
                (t = 0.02 > Math.abs(n) && 0.02 > Math.abs(a) ? NaN : (180 * Math.atan2(a, n)) / Math.PI),
                [r, Math.sqrt(n ** 2 + a ** 2), V(t)]
            );
        },
        toBase(e) {
            let [t, r, n] = e;
            return (
                r < 0 && (r = 0),
                isNaN(n) && (n = 0),
                [t, r * Math.cos((n * Math.PI) / 180), r * Math.sin((n * Math.PI) / 180)]
            );
        },
        formats: {
            color: {
                id: "--lchuv",
                coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"],
            },
        },
    });
let tV = 216 / 24389,
    tJ = 24389 / 27,
    tX = tr[0][0],
    tZ = tr[0][1],
    tY = tr[0][2],
    tQ = tr[1][0],
    tK = tr[1][1],
    t0 = tr[1][2],
    t1 = tr[2][0],
    t2 = tr[2][1],
    t5 = tr[2][2];
function t6(e, t, r) {
    let n = t / (Math.sin(r) - e * Math.cos(r));
    return n < 0 ? 1 / 0 : n;
}
function t4(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        r = t > tV ? t : e / tJ,
        n = r * (284517 * tX - 94839 * tY),
        a = r * (838422 * tY + 769860 * tZ + 731718 * tX),
        o = r * (632260 * tY - 126452 * tZ),
        i = r * (284517 * tQ - 94839 * t0),
        s = r * (838422 * t0 + 769860 * tK + 731718 * tQ),
        l = r * (632260 * t0 - 126452 * tK),
        c = r * (284517 * t1 - 94839 * t5),
        u = r * (838422 * t5 + 769860 * t2 + 731718 * t1),
        h = r * (632260 * t5 - 126452 * t2);
    return {
        r0s: n / o,
        r0i: (a * e) / o,
        r1s: n / (o + 126452),
        r1i: ((a - 769860) * e) / (o + 126452),
        g0s: i / l,
        g0i: (s * e) / l,
        g1s: i / (l + 126452),
        g1i: ((s - 769860) * e) / (l + 126452),
        b0s: c / h,
        b0i: (u * e) / h,
        b1s: c / (h + 126452),
        b1i: ((u - 769860) * e) / (h + 126452),
    };
}
function t9(e, t) {
    let r = (t / 360) * Math.PI * 2;
    return Math.min(
        t6(e.r0s, e.r0i, r),
        t6(e.r1s, e.r1i, r),
        t6(e.g0s, e.g0i, r),
        t6(e.g1s, e.g1i, r),
        t6(e.b0s, e.b0i, r),
        t6(e.b1s, e.b1i, r),
    );
}
var t3 = new I({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tG,
    gamutSpace: ts,
    fromBase(e) {
        let t,
            [r, n, a] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (n / t9(t4(r), a)) * 100),
            [a, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, n, a] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            a > 99.9999999 ? ((a = 100), (t = 0)) : a < 1e-8 ? ((a = 0), (t = 0)) : (t = (t9(t4(a), r) / 100) * n),
            [a, t, r]
        );
    },
    formats: {
        color: { id: "--hsluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
function t8(e, t) {
    return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function t7(e) {
    return Math.min(
        t8(e.r0s, e.r0i),
        t8(e.r1s, e.r1i),
        t8(e.g0s, e.g0i),
        t8(e.g1s, e.g1i),
        t8(e.b0s, e.b0i),
        t8(e.b1s, e.b1i),
    );
}
tr[0][0], tr[0][1], tr[0][2], tr[1][0], tr[1][1], tr[1][2], tr[2][0], tr[2][1], tr[2][2];
var re = new I({
    id: "hpluv",
    name: "HPLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tG,
    gamutSpace: "self",
    fromBase(e) {
        let t,
            [r, n, a] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (n / t7(t4(r))) * 100),
            [a, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, n, a] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            a > 99.9999999 ? ((a = 100), (t = 0)) : a < 1e-8 ? ((a = 0), (t = 0)) : (t = (t7(t4(a)) / 100) * n),
            [a, t, r]
        );
    },
    formats: {
        color: { id: "--hpluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let rt = 2610 / 16384,
    rr = 16384 / 2610,
    rn = 32 / 2523;
var ra = new j({
        id: "rec2100pq",
        cssId: "rec2100-pq",
        name: "REC.2100-PQ",
        base: e7,
        toBase: (e) =>
            e.map(function (e) {
                return (1e4 * (Math.max(e ** rn - 0.8359375, 0) / (18.8515625 - 18.6875 * e ** rn)) ** rr) / 203;
            }),
        fromBase: (e) =>
            e.map(function (e) {
                let t = Math.max((203 * e) / 1e4, 0);
                return ((0.8359375 + 18.8515625 * t ** rt) / (1 + 18.6875 * t ** rt)) ** 78.84375;
            }),
    }),
    ro = new j({
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
let ri = {};
function rs({ id: e, toCone_M: t, fromCone_M: r }) {
    ri[e] = arguments[0];
}
function rl(e, t, r = "Bradford") {
    let n = ri[r],
        [o, i, s] = a(n.toCone_M, e),
        [l, c, u] = a(n.toCone_M, t),
        h = a(
            [
                [l / o, 0, 0],
                [0, c / i, 0],
                [0, 0, u / s],
            ],
            n.toCone_M,
        );
    return a(n.fromCone_M, h);
}
C.add("chromatic-adaptation-start", (e) => {
    e.options.method && (e.M = rl(e.W1, e.W2, e.options.method));
}),
    C.add("chromatic-adaptation-end", (e) => {
        e.M || (e.M = rl(e.W1, e.W2, e.options.method));
    }),
    rs({
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
    rs({
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
    rs({
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
    rs({
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
    Object.assign(S, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435],
    }),
    (S.ACES = [0.32168 / 0.33767, 1, 1.0088251843515859]);
var rc = new j({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    coords: {
        r: { range: [0, 65504], name: "Red" },
        g: { range: [0, 65504], name: "Green" },
        b: { range: [0, 65504], name: "Blue" },
    },
    referred: "scene",
    white: S.ACES,
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
var rh = Object.freeze({
    __proto__: null,
    A98RGB: tL,
    A98RGB_Linear: tI,
    ACEScc: new j({
        id: "acescc",
        cssId: "--acescc",
        name: "ACEScc",
        coords: {
            r: { range: [-0.35828683, ru], name: "Red" },
            g: { range: [-0.35828683, ru], name: "Green" },
            b: { range: [-0.35828683, ru], name: "Blue" },
        },
        referred: "scene",
        base: rc,
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
    ACEScg: rc,
    CAM16_JMh: eV,
    HCT: eK,
    HPLuv: re,
    HSL: tT,
    HSLuv: t3,
    HSV: tP,
    HWB: tk,
    ICTCP: eT,
    JzCzHz: ew,
    Jzazbz: ev,
    LCH: J,
    LCHuv: tG,
    Lab: G,
    Lab_D65: ty,
    Luv: tW,
    OKLCH: tD,
    OKLab: ea,
    P3: tl,
    P3_Linear: tt,
    ProPhoto: tz,
    ProPhoto_Linear: tN,
    REC_2020: te,
    REC_2020_Linear: e7,
    REC_2100_HLG: ro,
    REC_2100_PQ: ra,
    XYZ_ABS_D65: eu,
    XYZ_D50: U,
    XYZ_D65: N,
    sRGB: ts,
    sRGB_Linear: tn,
});
class rf {
    constructor(...e) {
        let t, r, n, a;
        1 === e.length && (t = k(e[0])),
            t ? ((r = t.space || t.spaceId), (n = t.coords), (a = t.alpha)) : ([r, n, a] = e),
            Object.defineProperty(this, "space", { value: I.get(r), writable: !1, enumerable: !0, configurable: !0 }),
            (this.coords = n ? n.slice() : [0, 0, 0]),
            (this.alpha = a > 1 || void 0 === a ? 1 : a < 0 ? 0 : a);
        for (let e = 0; e < this.coords.length; e++) "NaN" === this.coords[e] && (this.coords[e] = NaN);
        for (let e in this.space.coords)
            Object.defineProperty(this, e, { get: () => this.get(e), set: (t) => this.set(e, t) });
    }
    get spaceId() {
        return this.space.id;
    }
    clone() {
        return new rf(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
    }
    display(...e) {
        let t = (function (e, { space: t = A.display_space, ...r } = {}) {
            let a = e8(e, r);
            if ("u" < typeof CSS || CSS.supports("color", a) || !A.display_space) (a = new String(a)).color = e;
            else {
                let o = e;
                if (
                    (e.coords.some(l) || l(e.alpha)) &&
                    !(n ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
                    (((o = es(e)).coords = o.coords.map(c)),
                    (o.alpha = c(o.alpha)),
                    (a = e8(o, r)),
                    CSS.supports("color", a))
                )
                    return ((a = new String(a)).color = o), a;
                (a = new String(e8((o = e3(o, t)), r))).color = o;
            }
            return a;
        })(this, ...e);
        return (t.color = new rf(t.color)), t;
    }
    static get(e, ...t) {
        return e instanceof rf ? e : new rf(e, ...t);
    }
    static defineFunction(e, t, r = t) {
        let { instance: n = !0, returns: a } = r,
            o = function (...e) {
                let r = t(...e);
                if ("color" === a) r = rf.get(r);
                else if ("function<color>" === a) {
                    let e = r;
                    Object.assign(
                        (r = function (...t) {
                            let r = e(...t);
                            return rf.get(r);
                        }),
                        e,
                    );
                } else "array<color>" === a && (r = r.map((e) => rf.get(e)));
                return r;
            };
        e in rf || (rf[e] = o),
            n &&
                (rf.prototype[e] = function (...e) {
                    return o(this, ...e);
                });
    }
    static defineFunctions(e) {
        for (let t in e) rf.defineFunction(t, e[t], e[t]);
    }
    static extend(e) {
        if (e.register) e.register(rf);
        else for (let t in e) rf.defineFunction(t, e[t]);
    }
}
for (let e of (rf.defineFunctions({
    get: z,
    getAll: O,
    set: $,
    setAll: D,
    to: e3,
    equals: function (e, t) {
        return (
            (e = k(e)),
            (t = k(t)),
            e.space === t.space && e.alpha === t.alpha && e.coords.every((e, r) => e === t.coords[r])
        );
    },
    inGamut: ei,
    toGamut: e6,
    distance: el,
    toString: e8,
}),
Object.assign(rf, { util: M, hooks: C, WHITES: S, Space: I, spaces: I.registry, parse: P, defaults: A }),
Object.keys(rh)))
    I.register(rh[e]);
for (let e in I.registry) rp(e, I.registry[e]);
function rp(e, t) {
    let r = e.replace(/-/g, "_");
    Object.defineProperty(rf.prototype, r, {
        get() {
            let r = this.getAll(e);
            return "u" < typeof Proxy
                ? r
                : new Proxy(r, {
                      has: (e, r) => {
                          try {
                              return I.resolveCoord([t, r]), !0;
                          } catch (e) {}
                          return Reflect.has(e, r);
                      },
                      get: (e, r, n) => {
                          if (r && "symbol" != typeof r && !(r in e)) {
                              let { index: n } = I.resolveCoord([t, r]);
                              if (n >= 0) return e[n];
                          }
                          return Reflect.get(e, r, n);
                      },
                      set: (r, n, a, o) => {
                          if ((n && "symbol" != typeof n && !(n in r)) || n >= 0) {
                              let { index: o } = I.resolveCoord([t, n]);
                              if (o >= 0) return (r[o] = a), this.setAll(e, r), !0;
                          }
                          return Reflect.set(r, n, a, o);
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
C.add("colorspace-init-end", (e) => {
    rp(e.id, e),
        e.aliases?.forEach((t) => {
            rp(t, e);
        });
}),
    rf.extend(e2),
    rf.extend({ deltaE: tM }),
    Object.assign(rf, { deltaEMethods: e2 }),
    rf.extend(tC),
    rf.extend({
        contrast: function (e, t, r = {}) {
            o(r) && (r = { algorithm: r });
            let { algorithm: n, ...a } = r;
            if (!n) {
                let e = Object.keys(tv)
                    .map((e) => e.replace(/^contrast/, ""))
                    .join(", ");
                throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`);
            }
            for (let r in ((e = k(e)), (t = k(t)), tv))
                if ("contrast" + n.toLowerCase() === r.toLowerCase()) return tv[r](e, t, a);
            throw TypeError(`Unknown contrast algorithm: ${n}`);
        },
    }),
    rf.extend(t_),
    rf.extend(th),
    rf.extend(tB),
    rf.extend(tv);
