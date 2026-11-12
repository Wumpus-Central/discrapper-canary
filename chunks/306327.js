let n;
function i(e, t) {
    let r = e.length;
    (Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((e) => [e])));
    let n = t[0].length,
        i = t[0].map((e, r) => t.map((e) => e[r])),
        o = e.map((e) =>
            i.map((t) => {
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
    return "string" === a(e);
}
function a(e) {
    return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function s(e, { precision: t, unit: r }) {
    return l(e) ? "none" : c(e, t) + (r ?? "");
}
function l(e) {
    return Number.isNaN(e) || (e instanceof Number && e?.none);
}
function u(e) {
    return l(e) ? 0 : e;
}
function c(e, t) {
    if (0 === e) return 0;
    let r = ~~e,
        n = 0;
    r && t && (n = ~~Math.log10(Math.abs(r)) + 1);
    let i = 10 ** (t - n);
    return Math.floor(e * i + 0.5) / i;
}
let f = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function d(e) {
    if (!e) return;
    e = e.trim();
    let t = /^-?[\d.]+$/,
        r = /%|deg|g?rad|turn$/,
        n = e.match(/^([a-z]+)\((.+?)\)$/i);
    if (n) {
        let e = [];
        return (
            n[2].replace(/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g, (n, i) => {
                let o = i.match(r),
                    a = i;
                if (o) {
                    let e = o[0],
                        t = a.slice(0, -e.length);
                    "%" === e
                        ? ((a = new Number(t / 100)).type = "<percentage>")
                        : (((a = new Number(t * f[e])).type = "<angle>"), (a.unit = e));
                } else
                    t.test(a)
                        ? ((a = new Number(a)).type = "<number>")
                        : "none" === a && ((a = new Number(0 / 0)).none = !0);
                (n.startsWith("/") && ((a = a instanceof Number ? a : new Number(a)).alpha = !0),
                    "object" == typeof a && a instanceof Number && (a.raw = i),
                    e.push(a));
            }),
            { name: n[1].toLowerCase(), rawName: n[1], rawArgs: n[2], args: e }
        );
    }
}
function p(e) {
    return e[e.length - 1];
}
function h(e, t, r) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function m(e, t, r) {
    return (r - e) / (t - e);
}
function v(e, t, r) {
    return h(t[0], t[1], m(e[0], e[1], r));
}
function g(e) {
    return e.map((e) =>
        e.split("|").map((e) => {
            let t = (e = e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (t) {
                let e = new String(t[1]);
                return ((e.range = [+t[2], +t[3]]), e);
            }
            return e;
        }),
    );
}
function y(e, t, r) {
    return Math.max(Math.min(r, t), e);
}
function b(e, t) {
    return Math.sign(e) === Math.sign(t) ? e : -e;
}
function w(e, t) {
    return b(Math.abs(e) ** t, e);
}
function _(e, t) {
    return 0 === t ? 0 : e / t;
}
function S(e, t, r = 0, n = e.length) {
    for (; r < n;) {
        let i = (r + n) >> 1;
        e[i] < t ? (r = i + 1) : (n = i);
    }
    return r;
}
var E = Object.freeze({
    __proto__: null,
    bisectLeft: S,
    clamp: y,
    copySign: b,
    interpolate: h,
    interpolateInv: m,
    isNone: l,
    isString: o,
    last: p,
    mapRange: v,
    multiplyMatrices: i,
    parseCoordGrammar: g,
    parseFunction: d,
    serializeNumber: s,
    skipNone: u,
    spow: w,
    toPrecision: c,
    type: a,
    zdiv: _,
});
let x = new (class {
    add(e, t, r) {
        if ("string" != typeof arguments[0]) {
            for (var e in arguments[0]) this.add(e, arguments[0][e], arguments[1]);
            return;
        }
        (Array.isArray(e) ? e : [e]).forEach(function (e) {
            ((this[e] = this[e] || []), t && this[e][r ? "unshift" : "push"](t));
        }, this);
    }
    run(e, t) {
        ((this[e] = this[e] || []),
            this[e].forEach(function (e) {
                e.call(t && t.context ? t.context : t, t);
            }));
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
let k = { D50: [0.3457 / 0.3585, 1, 0.2958 / 0.3585], D65: [0.3127 / 0.329, 1, 0.3583 / 0.329] };
function T(e) {
    return Array.isArray(e) ? e : k[e];
}
function M(e, t, r, n = {}) {
    if (((e = T(e)), (t = T(t)), !e || !t))
        throw TypeError(`Missing white point to convert ${!e ? "from" : ""}${!e && !t ? "/" : ""}${!t ? "to" : ""}`);
    if (e === t) return r;
    let o = { W1: e, W2: t, XYZ: r, options: n };
    if (
        (x.run("chromatic-adaptation-start", o),
        o.M ||
            (o.W1 === k.D65 && o.W2 === k.D50
                ? (o.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371],
                  ])
                : o.W1 === k.D50 &&
                  o.W2 === k.D65 &&
                  (o.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124],
                  ])),
        x.run("chromatic-adaptation-end", o),
        o.M)
    )
        return i(o.M, o.XYZ);
    throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
let P = new Set(["<number>", "<percentage>", "<angle>"]);
function A(e, t, r, n) {
    return Object.entries(e.coords).map(([e, i], o) => {
        let a,
            s = t.coordGrammar[o],
            l = n[o],
            u = l?.type;
        if (!(a = l.none ? s.find((e) => P.has(e)) : s.find((e) => e == u))) {
            let t = i.name || e;
            throw TypeError(`${u ?? l.raw} not allowed for ${t} in ${r}()`);
        }
        let c = a.range;
        "<percentage>" === u && (c ||= [0, 1]);
        let f = i.range || i.refRange;
        return (c && f && (n[o] = v(c, f, n[o])), a);
    });
}
function I(e, { meta: t } = {}) {
    let r = { str: String(e)?.trim() };
    if ((x.run("parse-start", r), r.color)) return r.color;
    if (((r.parsed = d(r.str)), r.parsed)) {
        let e = r.parsed.name;
        if ("color" === e) {
            let e = r.parsed.args.shift(),
                n = e.startsWith("--") ? e.substring(2) : `--${e}`,
                i = [e, n],
                o = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1;
            for (let n of R.all) {
                let a = n.getFormat("color");
                if (a && (i.includes(a.id) || a.ids?.filter((e) => i.includes(e)).length)) {
                    let i,
                        s = Object.keys(n.coords).map((e, t) => r.parsed.args[t] || 0);
                    return (
                        a.coordGrammar && (i = A(n, a, "color", s)),
                        t && Object.assign(t, { formatId: "color", types: i }),
                        a.id.startsWith("--") &&
                            !e.startsWith("--") &&
                            C.warn(
                                `${n.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${e}).`,
                            ),
                        e.startsWith("--") &&
                            !a.id.startsWith("--") &&
                            C.warn(
                                `${n.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${e}).`,
                            ),
                        { spaceId: n.id, coords: s, alpha: o }
                    );
                }
            }
            let a = "",
                s = e in R.registry ? e : n;
            if (s in R.registry) {
                let e = R.registry[s].formats?.color?.id;
                e && (a = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (a || "Missing a plugin?"));
        }
        for (let n of R.all) {
            let i = n.getFormat(e);
            if (i && "function" === i.type) {
                let o,
                    a = 1;
                (i.lastAlpha || p(r.parsed.args).alpha) && (a = r.parsed.args.pop());
                let s = r.parsed.args;
                return (
                    i.coordGrammar && (o = A(n, i, e, s)),
                    t && Object.assign(t, { formatId: i.name, types: o }),
                    { spaceId: n.id, coords: s, alpha: a }
                );
            }
        }
    } else
        for (let e of R.all)
            for (let n in e.formats) {
                let i = e.formats[n];
                if ("custom" !== i.type || (i.test && !i.test(r.str))) continue;
                let o = i.parse(r.str);
                if (o) return ((o.alpha ??= 1), t && (t.formatId = n), o);
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function O(e) {
    if (Array.isArray(e)) return e.map(O);
    if (!e) throw TypeError("Empty color reference");
    o(e) && (e = I(e));
    let t = e.space || e.spaceId;
    return (t instanceof R || (e.space = R.get(t)), void 0 === e.alpha && (e.alpha = 1), e);
}
class R {
    constructor(e) {
        ((this.id = e.id),
            (this.name = e.name),
            (this.base = e.base ? R.get(e.base) : null),
            (this.aliases = e.aliases),
            this.base && ((this.fromBase = e.fromBase), (this.toBase = e.toBase)));
        let t = e.coords ?? this.base.coords;
        for (let e in t) "name" in t[e] || (t[e].name = e);
        this.coords = t;
        let r = e.white ?? this.base.white ?? "D65";
        for (let t in ((this.white = T(r)), (this.formats = e.formats ?? {}), this.formats)) {
            let e = this.formats[t];
            ((e.type ||= "function"), (e.name ||= t));
        }
        (this.formats.color?.id || (this.formats.color = { ...(this.formats.color ?? {}), id: e.cssId || this.id }),
            e.gamutSpace
                ? (this.gamutSpace = "self" === e.gamutSpace ? this : R.get(e.gamutSpace))
                : this.isPolar
                  ? (this.gamutSpace = this.base)
                  : (this.gamutSpace = this),
            this.gamutSpace.isUnbounded && (this.inGamut = (e, t) => !0),
            (this.referred = e.referred),
            Object.defineProperty(this, "path", {
                value: (function (e) {
                    let t = [e];
                    for (let r = e; (r = r.base);) t.push(r);
                    return t;
                })(this).reverse(),
                writable: !1,
                enumerable: !0,
                configurable: !0,
            }),
            x.run("colorspace-init-end", this));
    }
    inGamut(e, { epsilon: t = 75e-6 } = {}) {
        if (!this.equals(this.gamutSpace))
            return ((e = this.to(this.gamutSpace, e)), this.gamutSpace.inGamut(e, { epsilon: t }));
        let r = Object.values(this.coords);
        return e.every((e, n) => {
            let i = r[n];
            if ("angle" !== i.type && i.range) {
                if (Number.isNaN(e)) return !0;
                let [r, n] = i.range;
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
            let r = O(e);
            [e, t] = [r.space, r.coords];
        }
        if (((e = R.get(e)), this.equals(e))) return t;
        t = t.map((e) => (Number.isNaN(e) ? 0 : e));
        let i = this.path,
            o = e.path;
        for (let e = 0; e < i.length; e++)
            if (i[e].equals(o[e])) ((r = i[e]), (n = e));
            else break;
        if (!r) throw Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
        for (let e = i.length - 1; e > n; e--) t = i[e].toBase(t);
        for (let e = n + 1; e < o.length; e++) t = o[e].fromBase(t);
        return t;
    }
    from(e, t) {
        if (1 == arguments.length) {
            let r = O(e);
            [e, t] = [r.space, r.coords];
        }
        return (e = R.get(e)).to(this, t);
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
        return [...new Set(Object.values(R.registry))];
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
        if (!e || e instanceof R) return e;
        if ("string" === a(e)) {
            let t = R.registry[e.toLowerCase()];
            if (!t) throw TypeError(`No color space found with id = "${e}"`);
            return t;
        }
        if (t.length) return R.get(...t);
        throw TypeError(`${e} is not a valid color space`);
    }
    static resolveCoord(e, t) {
        let r,
            n,
            i = a(e);
        if (
            ("string" === i
                ? e.includes(".")
                    ? ([r, n] = e.split("."))
                    : ([r, n] = [, e])
                : Array.isArray(e)
                  ? ([r, n] = e)
                  : ((r = e.space), (n = e.coordId)),
            (r = R.get(r)) || (r = t),
            !r)
        )
            throw TypeError(
                `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
        if ("number" === (i = a(n)) || ("string" === i && n >= 0)) {
            let e = Object.entries(r.coords)[n];
            if (e) return { space: r, id: e[0], index: n, ...e[1] };
        }
        r = R.get(r);
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
        ((e.type ||= "function"), (e.name ||= "color"), (e.coordGrammar = g(e.coords)));
        let r = Object.entries(t).map(([t, r], n) => {
            let i = e.coordGrammar[n][0],
                o = r.range || r.refRange,
                a = i.range,
                s = "";
            return (
                "<percentage>" == i ? ((a = [0, 100]), (s = "%")) : "<angle>" == i && (s = "deg"),
                { fromRange: o, toRange: a, suffix: s }
            );
        });
        e.serializeCoords = (e, t) =>
            e.map((e, n) => {
                let { fromRange: i, toRange: o, suffix: a } = r[n];
                return (i && o && (e = v(i, o, e)), (e = s(e, { precision: t, unit: a })));
            });
    }
    return e;
}
var D = new R({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
    white: "D65",
    formats: { color: { ids: ["xyz-d65", "xyz"] } },
    aliases: ["xyz"],
});
class F extends R {
    constructor(e) {
        (e.coords ||
            (e.coords = {
                r: { range: [0, 1], name: "Red" },
                g: { range: [0, 1], name: "Green" },
                b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = D),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (t) => {
                    let r = i(e.toXYZ_M, t);
                    return (this.white !== this.base.white && (r = M(this.white, this.base.white, r)), r);
                }),
                (e.fromBase ??= (t) => ((t = M(this.base.white, this.white, t)), i(e.fromXYZ_M, t)))),
            (e.referred ??= "display"),
            super(e));
    }
}
function N(e, t) {
    return ((e = O(e)), !t || e.space.equals(t)) ? e.coords.slice() : (t = R.get(t)).from(e);
}
function j(e, t) {
    e = O(e);
    let { space: r, index: n } = R.resolveCoord(t, e.space);
    return N(e, r)[n];
}
function B(e, t, r) {
    return ((e = O(e)), (t = R.get(t)), (e.coords = t.to(e.space, r)), e);
}
function U(e, t, r) {
    if (((e = O(e)), 2 == arguments.length && "object" === a(arguments[1]))) {
        let t = arguments[1];
        for (let r in t) U(e, r, t[r]);
    } else {
        "function" == typeof r && (r = r(j(e, t)));
        let { space: n, index: i } = R.resolveCoord(t, e.space),
            o = N(e, n);
        ((o[i] = r), B(e, n, o));
    }
    return e;
}
((B.returns = "color"), (U.returns = "color"));
var $ = new R({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: D,
    fromBase: (e) => M(D.white, "D50", e),
    toBase: (e) => M("D50", D.white, e),
});
let V = 216 / 24389,
    H = 24 / 116,
    K = 24389 / 27,
    z = k.D50;
var W = new R({
    id: "lab",
    name: "Lab",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: z,
    base: $,
    fromBase(e) {
        let t = e.map((e, t) => e / z[t]).map((e) => (e > V ? Math.cbrt(e) : (K * e + 16) / 116));
        return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
    },
    toBase(e) {
        let t = [];
        return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
                t[0] > H ? Math.pow(t[0], 3) : (116 * t[0] - 16) / K,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / K,
                t[2] > H ? Math.pow(t[2], 3) : (116 * t[2] - 16) / K,
            ].map((e, t) => e * z[t])
        );
    },
    formats: {
        lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] },
    },
});
function G(e) {
    return ((e % 360) + 360) % 360;
}
var q = new R({
    id: "lch",
    name: "LCH",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        c: { refRange: [0, 150], name: "Chroma" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: W,
    fromBase(e) {
        let t,
            [r, n, i] = e;
        return (
            (t = 0.02 > Math.abs(n) && 0.02 > Math.abs(i) ? 0 / 0 : (180 * Math.atan2(i, n)) / Math.PI),
            [r, Math.sqrt(n ** 2 + i ** 2), G(t)]
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
let Y = Math.PI,
    X = 180 / Y,
    J = Y / 180;
function Z(e) {
    let t = e * e;
    return t * t * t * e;
}
function Q(e, t, { kL: r = 1, kC: n = 1, kH: i = 1 } = {}) {
    let o, a;
    [e, t] = O([e, t]);
    let [s, l, u] = W.from(e),
        c = q.from(W, [s, l, u])[1],
        [f, d, p] = W.from(t),
        h = q.from(W, [f, d, p])[1];
    (c < 0 && (c = 0), h < 0 && (h = 0));
    let m = Z((c + h) / 2),
        v = 0.5 * (1 - Math.sqrt(m / (m + 0x16bcc41e9))),
        g = (1 + v) * l,
        y = (1 + v) * d,
        b = Math.sqrt(g ** 2 + u ** 2),
        w = Math.sqrt(y ** 2 + p ** 2),
        _ = 0 === g && 0 === u ? 0 : Math.atan2(u, g),
        S = 0 === y && 0 === p ? 0 : Math.atan2(p, y);
    (_ < 0 && (_ += 2 * Y), S < 0 && (S += 2 * Y), (_ *= X));
    let E = f - s,
        x = w - b,
        k = (S *= X) - _,
        T = _ + S,
        M = Math.abs(k);
    b * w == 0
        ? (o = 0)
        : M <= 180
          ? (o = k)
          : k > 180
            ? (o = k - 360)
            : k < -180
              ? (o = k + 360)
              : C.warn("the unthinkable has happened");
    let P = 2 * Math.sqrt(w * b) * Math.sin((o * J) / 2),
        A = (s + f) / 2,
        I = (b + w) / 2,
        R = Z(I),
        L = (A - 50) ** 2,
        D = 1 + (0.015 * L) / Math.sqrt(20 + L),
        F = 1 + 0.045 * I,
        N =
            1 +
            0.015 *
                I *
                (1 -
                    0.17 *
                        Math.cos(
                            ((a = b * w == 0 ? T : M <= 180 ? T / 2 : T < 360 ? (T + 360) / 2 : (T - 360) / 2) - 30) *
                                J,
                        ) +
                    0.24 * Math.cos(2 * a * J) +
                    0.32 * Math.cos((3 * a + 6) * J) -
                    0.2 * Math.cos((4 * a - 63) * J)),
        j = (E / (r * D)) ** 2;
    return Math.sqrt(
        (j +=
            (x / (n * F)) ** 2 +
            (P / (i * N)) ** 2 +
            (x / (n * F)) *
                (-1 *
                    Math.sin(2 * (30 * Math.exp(-1 * ((a - 275) / 25) ** 2)) * J) *
                    (2 * Math.sqrt(R / (R + 0x16bcc41e9)))) *
                (P / (i * N))),
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
var ei = new R({
    id: "oklab",
    name: "Oklab",
    coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } },
    white: "D65",
    base: D,
    fromBase(e) {
        let t = i(ee, e).map((e) => Math.cbrt(e));
        return i(er, t);
    },
    toBase(e) {
        let t = i(en, e).map((e) => e ** 3);
        return i(et, t);
    },
    formats: {
        oklab: {
            coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
        },
    },
});
function eo(e, t) {
    [e, t] = O([e, t]);
    let [r, n, i] = ei.from(e),
        [o, a, s] = ei.from(t);
    return Math.sqrt((r - o) ** 2 + (n - a) ** 2 + (i - s) ** 2);
}
function ea(e, t, { epsilon: r = 75e-6 } = {}) {
    ((e = O(e)), t || (t = e.space), (t = R.get(t)));
    let n = e.coords;
    return (t !== e.space && (n = t.from(e)), t.inGamut(n, { epsilon: r }));
}
function es(e) {
    return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function el(e, t, r = "lab") {
    let n = (r = R.get(r)).from(e),
        i = r.from(t);
    return Math.sqrt(
        n.reduce((e, t, r) => {
            let n = i[r];
            return isNaN(t) || isNaN(n) ? e : e + (n - t) ** 2;
        }, 0),
    );
}
let eu = Math.PI / 180;
var ec = new R({
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
    ed = 16384 / 2610,
    ep = 2413 / 128,
    eh = (1.7 * 2523) / 32,
    em = 32 / (1.7 * 2523),
    ev = [
        [0.41478972, 0.579999, 0.014648],
        [-0.20151, 1.120649, 0.0531008],
        [-0.0166008, 0.2648, 0.6684799],
    ],
    eg = [
        [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
        [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
        [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603],
    ],
    ey = [
        [0.5, 0.5, 0],
        [3.524, -4.066708, 0.542708],
        [0.199076, 1.096799, -1.295875],
    ],
    eb = [
        [1, 0.1386050432715393, 0.05804731615611886],
        [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
        [0.9999999999999998, -0.09601924202631895, -0.8118918960560388],
    ];
var ew = new R({
        id: "jzazbz",
        name: "Jzazbz",
        coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } },
        base: ec,
        fromBase(e) {
            let [t, r, n] = e,
                o = i(ev, [1.15 * t - (1.15 - 1) * n, 0.66 * r - (0.66 - 1) * t, n]).map(function (e) {
                    return ((0.8359375 + ep * (e / 1e4) ** ef) / (1 + 18.6875 * (e / 1e4) ** ef)) ** eh;
                }),
                [a, s, l] = i(ey, o);
            return [((1 + -0.56) * a) / (1 + -0.56 * a) - 16295499532821565e-27, s, l];
        },
        toBase(e) {
            let [t, r, n] = e,
                o = i(eb, [(t + 16295499532821565e-27) / (1 + -0.56 - -0.56 * (t + 16295499532821565e-27)), r, n]).map(
                    function (e) {
                        return 1e4 * ((0.8359375 - e ** em) / (18.6875 * e ** em - ep)) ** ed;
                    },
                ),
                [a, s, l] = i(eg, o),
                u = (a + (1.15 - 1) * l) / 1.15;
            return [u, (s + (0.66 - 1) * u) / 0.66, l];
        },
        formats: {
            color: {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    e_ = new R({
        id: "jzczhz",
        name: "JzCzHz",
        coords: {
            jz: { refRange: [0, 1], name: "Jz" },
            cz: { refRange: [0, 1], name: "Chroma" },
            hz: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: ew,
        fromBase(e) {
            let t,
                [r, n, i] = e;
            return (
                (t = 2e-4 > Math.abs(n) && 2e-4 > Math.abs(i) ? 0 / 0 : (180 * Math.atan2(i, n)) / Math.PI),
                [r, Math.sqrt(n ** 2 + i ** 2), G(t)]
            );
        },
        toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)],
    });
let eS = 2413 / 128,
    eE = 2610 / 16384,
    ex = 2523 / 32,
    eC = 16384 / 2610,
    ek = 32 / 2523,
    eT = [
        [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
        [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
        [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
    ],
    eM = [
        [0.5, 0.5, 0],
        [6610 / 4096, -13613 / 4096, 7003 / 4096],
        [17933 / 4096, -17390 / 4096, -543 / 4096],
    ],
    eP = [
        [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
        [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
        [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
    ],
    eA = [
        [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
        [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
        [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
    ];
var eI = new R({
    id: "ictcp",
    name: "ICTCP",
    coords: {
        i: { refRange: [0, 1], name: "I" },
        ct: { refRange: [-0.5, 0.5], name: "CT" },
        cp: { refRange: [-0.5, 0.5], name: "CP" },
    },
    base: ec,
    fromBase: (e) => {
        var t;
        return (
            (t = i(eT, e)),
            i(
                eM,
                t.map(function (e) {
                    return ((0.8359375 + eS * (e / 1e4) ** eE) / (1 + 18.6875 * (e / 1e4) ** eE)) ** ex;
                }),
            )
        );
    },
    toBase: (e) =>
        i(
            eA,
            i(eP, e).map(function (e) {
                let t = Math.max(e ** ek - 0.8359375, 0);
                return 1e4 * (t / (eS - 18.6875 * e ** ek)) ** eC;
            }),
        ),
});
let eO = k.D65,
    eR = 1 / 0.42,
    eL = 2 * Math.PI,
    eD = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127],
    ],
    eF = [
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
    eB = [20.14, 90, 164.25, 237.53, 380.14],
    eU = [0.8, 0.7, 1, 1.2, 0.8],
    e$ = [0, 100, 200, 300, 400],
    eV = 180 / Math.PI,
    eH = Math.PI / 180;
function eK(e, t) {
    return e.map((e) => {
        let r = w(t * Math.abs(e) * 0.01, 0.42);
        return (400 * b(r, e)) / (r + 27.13);
    });
}
function ez(e, t, r, n, o) {
    let a = {};
    ((a.discounting = o), (a.refWhite = e), (a.surround = n));
    let s = e.map((e) => 100 * e);
    ((a.la = t), (a.yb = r));
    let l = s[1],
        u = i(eD, s),
        c = (n = ej[a.surround])[0];
    ((a.c = n[1]), (a.nc = n[2]));
    let f = (1 / (5 * a.la + 1)) ** 4;
    ((a.fl = f * a.la + 0.1 * (1 - f) * (1 - f) * Math.cbrt(5 * a.la)),
        (a.flRoot = a.fl ** 0.25),
        (a.n = a.yb / l),
        (a.z = 1.48 + Math.sqrt(a.n)),
        (a.nbb = 0.725 * a.n ** -0.2),
        (a.ncb = a.nbb));
    let d = o ? 1 : Math.max(Math.min(c * (1 - (1 / 3.6) * Math.exp((-a.la - 42) / 92)), 1), 0);
    ((a.dRgb = u.map((e) => h(1, l / e, d))), (a.dRgbInv = a.dRgb.map((e) => 1 / e)));
    let p = eK(
        u.map((e, t) => e * a.dRgb[t]),
        a.fl,
    );
    return ((a.aW = a.nbb * (2 * p[0] + p[1] + 0.05 * p[2])), a);
}
let eW = ez(eO, (64 / Math.PI) * 0.2, 20, "average", !1);
function eG(e, t) {
    var r;
    let n;
    if (!((void 0 !== e.J) ^ (void 0 !== e.Q))) throw Error("Conversion requires one and only one: 'J' or 'Q'");
    if (!((void 0 !== e.C) ^ (void 0 !== e.M) ^ (void 0 !== e.s)))
        throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
    if (!((void 0 !== e.h) ^ (void 0 !== e.H))) throw Error("Conversion requires one and only one: 'h' or 'H'");
    if (0 === e.J || 0 === e.Q) return [0, 0, 0];
    let o = 0,
        a = Math.cos(
            (o =
                void 0 !== e.h
                    ? G(e.h) * eH
                    : (function (e) {
                          let t = ((e % 400) + 400) % 400,
                              r = Math.floor(0.01 * t);
                          t %= 100;
                          let [n, i] = eB.slice(r, r + 2),
                              [o, a] = eU.slice(r, r + 2);
                          return G((t * (a * n - o * i) - 100 * n * a) / (t * (a - o) - 100 * a));
                      })(e.H) * eH),
        ),
        s = Math.sin(o),
        l = 0;
    void 0 !== e.J ? (l = 0.1 * w(e.J, 0.5)) : void 0 !== e.Q && (l = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
    let u = 0;
    void 0 !== e.C
        ? (u = e.C / l)
        : void 0 !== e.M
          ? (u = e.M / t.flRoot / l)
          : void 0 !== e.s && (u = (4e-4 * e.s ** 2 * (t.aW + 4)) / t.c);
    let c = w(u * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
        f = 0.25 * (Math.cos(o + 2) + 3.8),
        d = t.aW * w(l, 2 / t.c / t.z),
        p = (5e4 / 13) * t.nc * t.ncb * f,
        h = d / t.nbb,
        m = 23 * (h + 0.305) * _(c, 23 * p + c * (11 * a + 108 * s)),
        v =
            ((r = i(eN, [h, m * a, m * s]).map((e) => e / 1403)),
            (n = (100 / t.fl) * 27.13 ** eR),
            r.map((e) => {
                let t = Math.abs(e);
                return b(n * w(t / (400 - t), eR), e);
            }));
    return i(
        eF,
        v.map((e, r) => e * t.dRgbInv[r]),
    ).map((e) => e / 100);
}
function eq(e, t) {
    let r = eK(
            i(
                eD,
                e.map((e) => 100 * e),
            ).map((e, r) => e * t.dRgb[r]),
            t.fl,
        ),
        n = r[0] + (-12 * r[1] + r[2]) / 11,
        o = (r[0] + r[1] - 2 * r[2]) / 9,
        a = ((Math.atan2(o, n) % eL) + eL) % eL,
        s = 0.25 * (Math.cos(a + 2) + 3.8),
        l =
            w((5e4 / 13) * t.nc * t.ncb * _(s * Math.sqrt(n ** 2 + o ** 2), r[0] + r[1] + 1.05 * r[2] + 0.305), 0.9) *
            Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        u = w((t.nbb * (2 * r[0] + r[1] + 0.05 * r[2])) / t.aW, 0.5 * t.c * t.z),
        c = 100 * w(u, 2),
        f = (4 / t.c) * u * (t.aW + 4) * t.flRoot,
        d = l * u,
        p = d * t.flRoot,
        h = G(a * eV),
        m = (function (e) {
            let t = G(e);
            t <= eB[0] && (t += 360);
            let r = S(eB, t) - 1,
                [n, i] = eB.slice(r, r + 2),
                [o, a] = eU.slice(r, r + 2),
                s = e$[r],
                l = (t - n) / o;
            return s + (100 * l) / (l + (i - t) / a);
        })(h);
    return { J: c, C: d, h: h, s: 50 * w((t.c * l) / (t.aW + 4), 0.5), Q: f, M: p, H: m };
}
var eY = new R({
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
        let t = eq(e, eW);
        return [t.J, t.M, t.h];
    },
    toBase: (e) => eG({ J: e[0], M: e[1], h: e[2] }, eW),
});
let eX = k.D65,
    eJ = 216 / 24389,
    eZ = 24389 / 27;
function eQ(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / eZ;
}
let e0 = ez(eX, (200 / Math.PI) * eQ(50), 100 * eQ(50), "average", !1);
var e1 = new R({
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
            let r = 116 * ((t = e[1]) > eJ ? Math.cbrt(t) : (eZ * t + 16) / 116) - 16;
            if (0 === r) return [0, 0, 0];
            let n = eq(e, e0);
            return [G(n.h), n.C, r];
        })(e),
    toBase: (e) =>
        (function (e, t) {
            let [r, n, i] = e,
                o = [],
                a = 0;
            if (0 === i) return [0, 0, 0];
            let s = eQ(i);
            a =
                i > 0
                    ? 0.00379058511492914 * i ** 2 + 0.608983189401032 * i + 0.9155088574762233
                    : 9514440756550361e-21 * i ** 2 + 0.08693057439788597 * i - 21.928975842194614;
            let l = 0,
                u = 1 / 0;
            for (; l <= 15;) {
                let e = Math.abs((o = eG({ J: a, C: n, h: r }, t))[1] - s);
                if (e < u) {
                    if (e <= 2e-12) return o;
                    u = e;
                }
                ((a -= ((o[1] - s) * a) / (2 * o[1])), (l += 1));
            }
            return eG({ J: a, C: n, h: r }, t);
        })(e, e0),
    formats: {
        color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let e2 = Math.PI / 180;
function e5(e) {
    e[1] < 0 && (e = e1.fromBase(e1.toBase(e)));
    let t = Math.log(Math.max(1 + 0.0228 * e[1] * e0.flRoot, 1)) / 0.0228,
        r = e[0] * e2,
        n = t * Math.cos(r),
        i = t * Math.sin(r);
    return [e[2], n, i];
}
var e3 = {
    deltaE76: function (e, t) {
        return el(e, t, "lab");
    },
    deltaECMC: function (e, t, { l: r = 2, c: n = 1 } = {}) {
        [e, t] = O([e, t]);
        let [i, o, a] = W.from(e),
            [, s, l] = q.from(W, [i, o, a]),
            [u, c, f] = W.from(t),
            d = q.from(W, [u, c, f])[1];
        (s < 0 && (s = 0), d < 0 && (d = 0));
        let p = i - u,
            h = s - d,
            m = o - c,
            v = a - f,
            g = 0.511;
        i >= 16 && (g = (0.040975 * i) / (1 + 0.01765 * i));
        let y = (0.0638 * s) / (1 + 0.0131 * s) + 0.638;
        Number.isNaN(l) && (l = 0);
        let b = Math.pow(s, 4),
            w = Math.sqrt(b / (b + 1900)),
            _ =
                y *
                (w *
                    (l >= 164 && l <= 345
                        ? 0.56 + Math.abs(0.2 * Math.cos((l + 168) * eu))
                        : 0.36 + Math.abs(0.4 * Math.cos((l + 35) * eu))) +
                    1 -
                    w),
            S = (p / (r * g)) ** 2;
        return Math.sqrt((S += (h / (n * y)) ** 2 + (m ** 2 + v ** 2 - h ** 2) / _ ** 2));
    },
    deltaE2000: Q,
    deltaEJz: function (e, t) {
        [e, t] = O([e, t]);
        let [r, n, i] = e_.from(e),
            [o, a, s] = e_.from(t);
        Number.isNaN(i) && Number.isNaN(s)
            ? ((i = 0), (s = 0))
            : Number.isNaN(i)
              ? (i = s)
              : Number.isNaN(s) && (s = i);
        let l = 2 * Math.sqrt(n * a) * Math.sin(((i - s) / 2) * (Math.PI / 180));
        return Math.sqrt((r - o) ** 2 + (n - a) ** 2 + l ** 2);
    },
    deltaEITP: function (e, t) {
        [e, t] = O([e, t]);
        let [r, n, i] = eI.from(e),
            [o, a, s] = eI.from(t);
        return 720 * Math.sqrt((r - o) ** 2 + 0.25 * (n - a) ** 2 + (i - s) ** 2);
    },
    deltaEOK: eo,
    deltaEHCT: function (e, t) {
        [e, t] = O([e, t]);
        let [r, n, i] = e5(e1.from(e)),
            [o, a, s] = e5(e1.from(t));
        return Math.sqrt((r - o) ** 2 + (n - a) ** 2 + (i - s) ** 2);
    },
};
let e6 = {
    hct: { method: "hct.c", jnd: 2, deltaEMethod: "hct", blackWhiteClamp: {} },
    "hct-tonal": {
        method: "hct.c",
        jnd: 0,
        deltaEMethod: "hct",
        blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 },
    },
};
function e8(
    e,
    { method: t = C.gamut_mapping, space: r, deltaEMethod: n = "", jnd: i = 2, blackWhiteClamp: a = {} } = {},
) {
    let s;
    if (((e = O(e)), o(arguments[1]) ? (r = arguments[1]) : r || (r = e.space), ea(e, (r = R.get(r)), { epsilon: 0 })))
        return e;
    if ("css" === t)
        s = (function (e, { space: t } = {}) {
            ((e = O(e)), t || (t = e.space), (t = R.get(t)));
            let r = R.get("oklch");
            if (t.isUnbounded) return e7(e, t);
            let n = e7(e, r),
                i = n.coords[0];
            if (i >= 1) {
                let r = e7(e4, t);
                return ((r.alpha = e.alpha), e7(r, t));
            }
            if (i <= 0) {
                let r = e7(e9, t);
                return ((r.alpha = e.alpha), e7(r, t));
            }
            if (ea(n, t, { epsilon: 0 })) return e7(n, t);
            function o(e) {
                let r = e7(e, t),
                    n = Object.values(t.coords);
                return (
                    (r.coords = r.coords.map((e, t) => {
                        if ("range" in n[t]) {
                            let [r, i] = n[t].range;
                            return y(r, e, i);
                        }
                        return e;
                    })),
                    r
                );
            }
            let a = 0,
                s = n.coords[1],
                l = !0,
                u = es(n),
                c = o(u),
                f = eo(c, u);
            if (f < 0.02) return c;
            for (; s - a > 1e-4;) {
                let e = (a + s) / 2;
                if (((u.coords[1] = e), l && ea(u, t, { epsilon: 0 }))) a = e;
                else if ((f = eo((c = o(u)), u)) < 0.02)
                    if (0.02 - f < 1e-4) break;
                    else ((l = !1), (a = e));
                else s = e;
            }
            return c;
        })(e, { space: r });
    else {
        if ("clip" === t || ea(e, r)) s = e7(e, r);
        else {
            Object.prototype.hasOwnProperty.call(e6, t) &&
                ({ method: t, jnd: i, deltaEMethod: n, blackWhiteClamp: a } = e6[t]);
            let o = Q;
            if ("" !== n) {
                for (let e in e3)
                    if ("deltae" + n.toLowerCase() === e.toLowerCase()) {
                        o = e3[e];
                        break;
                    }
            }
            let c = e8(e7(e, r), { method: "clip", space: r });
            if (o(e, c) > i) {
                var u;
                let n;
                if (3 === Object.keys(a).length) {
                    let t = R.resolveCoord(a.channel),
                        r = j(e7(e, t.space), t.id);
                    if ((l(r) && (r = 0), r >= a.max)) return e7({ space: "xyz-d65", coords: k.D65 }, e.space);
                    if (r <= a.min) return e7({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
                }
                let c = R.resolveCoord(t),
                    f = c.space,
                    d = c.id,
                    p = e7(e, f);
                p.coords.forEach((e, t) => {
                    l(e) && (p.coords[t] = 0);
                });
                let h = (c.range || c.refRange)[0],
                    m =
                        ((n = (u = i) ? Math.floor(Math.log10(Math.abs(u))) : 0),
                        Math.max(parseFloat(`1e${n - 2}`), 1e-6)),
                    v = h,
                    g = j(p, d);
                for (; g - v > m;) {
                    let e = es(p);
                    (o(p, (e = e8(e, { space: r, method: "clip" }))) - i < m ? (v = j(p, d)) : (g = j(p, d)),
                        U(p, d, (v + g) / 2));
                }
                s = e7(p, r);
            } else s = c;
        }
        if ("clip" === t || !ea(s, r, { epsilon: 0 })) {
            let e = Object.values(r.coords).map((e) => e.range || []);
            s.coords = s.coords.map((t, r) => {
                let [n, i] = e[r];
                return (void 0 !== n && (t = Math.max(n, t)), void 0 !== i && (t = Math.min(t, i)), t);
            });
        }
    }
    return (r !== e.space && (s = e7(s, e.space)), (e.coords = s.coords), e);
}
e8.returns = "color";
let e4 = { space: ei, coords: [1, 0, 0] },
    e9 = { space: ei, coords: [0, 0, 0] };
function e7(e, t, { inGamut: r } = {}) {
    e = O(e);
    let n = (t = R.get(t)).from(e),
        i = { space: t, coords: n, alpha: e.alpha };
    return (r && (i = e8(i, !0 === r ? void 0 : r)), i);
}
function te(e, { precision: t = C.precision, format: r = "default", inGamut: n = !0, ...i } = {}) {
    let o;
    e = O(e);
    let a = r;
    r = e.space.getFormat(r) ?? e.space.getFormat("default") ?? R.DEFAULT_FORMAT;
    let l = e.coords.slice();
    if (((n ||= r.toGamut) && !ea(e) && (l = e8(es(e), !0 === n ? void 0 : n).coords), "custom" === r.type))
        if (((i.precision = t), r.serialize)) o = r.serialize(l, e.alpha, i);
        else throw TypeError(`format ${a} can only be used to parse colors, not for serialization`);
    else {
        let n = r.name || "color";
        r.serializeCoords ? (l = r.serializeCoords(l, t)) : null !== t && (l = l.map((e) => s(e, { precision: t })));
        let i = [...l];
        if ("color" === n) {
            let t = r.id || r.ids?.[0] || e.space.id;
            i.unshift(t);
        }
        let a = e.alpha;
        null !== t && (a = s(a, { precision: t }));
        let u = e.alpha >= 1 || r.noAlpha ? "" : `${r.commas ? "," : " /"} ${a}`;
        o = `${n}(${i.join(r.commas ? ", " : " ")}${u})`;
    }
    return o;
}
e7.returns = "color";
var tt = new F({
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
    tr = new F({
        id: "rec2020",
        name: "REC.2020",
        base: tt,
        toBase: (e) =>
            e.map(function (e) {
                return e < 0.08124285829863151
                    ? e / 4.5
                    : Math.pow((e + 1.09929682680944 - 1) / 1.09929682680944, 1 / 0.45);
            }),
        fromBase: (e) =>
            e.map(function (e) {
                return e >= 0.018053968510807 ? 1.09929682680944 * Math.pow(e, 0.45) - 0.09929682680944008 : 4.5 * e;
            }),
    }),
    tn = new F({
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
let ti = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
];
var to = new F({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: [
            [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
            [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
            [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
        ],
        fromXYZ_M: ti,
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
let ts = [, , ,].fill("<percentage> | <number>[0, 255]"),
    tl = [, , ,].fill("<number>[0, 255]");
var tu = new F({
        id: "srgb",
        name: "sRGB",
        base: to,
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
            rgb: { coords: ts },
            rgb_number: { name: "rgb", commas: !0, coords: tl, noAlpha: !0 },
            color: {},
            rgba: { coords: ts, commas: !0, lastAlpha: !0 },
            rgba_number: { name: "rgba", commas: !0, coords: tl },
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
                    (t < 1 && e.push(t), (e = e.map((e) => Math.round(255 * e))));
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
    tc = new F({ id: "p3", cssId: "display-p3", name: "P3", base: tn, fromBase: tu.fromBase, toBase: tu.toBase });
if (((C.display_space = tu), "u" > typeof CSS && CSS.supports))
    for (let e of [W, tr, tc]) {
        let t = e.getMinCoords(),
            r = te({ space: e, coords: t, alpha: 1 });
        if (CSS.supports("color", r)) {
            C.display_space = e;
            break;
        }
    }
function tf(e) {
    return j(e, [D, "y"]);
}
function td(e, t) {
    U(e, [D, "y"], t);
}
var tp = Object.freeze({
    __proto__: null,
    getLuminance: tf,
    register: function (e) {
        Object.defineProperty(e.prototype, "luminance", {
            get() {
                return tf(this);
            },
            set(e) {
                td(this, e);
            },
        });
    },
    setLuminance: td,
});
function th(e) {
    return e >= 0.022 ? e : e + (0.022 - e) ** 1.414;
}
function tm(e) {
    let t = Math.abs(e);
    return (e < 0 ? -1 : 1) * Math.pow(t, 2.4);
}
let tv = 216 / 24389,
    tg = 24 / 116,
    ty = 24389 / 27,
    tb = k.D65;
var tw = new R({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            a: { refRange: [-125, 125] },
            b: { refRange: [-125, 125] },
        },
        white: tb,
        base: D,
        fromBase(e) {
            let t = e.map((e, t) => e / tb[t]).map((e) => (e > tv ? Math.cbrt(e) : (ty * e + 16) / 116));
            return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
        },
        toBase(e) {
            let t = [];
            return (
                (t[1] = (e[0] + 16) / 116),
                (t[0] = e[1] / 500 + t[1]),
                (t[2] = t[1] - e[2] / 200),
                [
                    t[0] > tg ? Math.pow(t[0], 3) : (116 * t[0] - 16) / ty,
                    e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / ty,
                    t[2] > tg ? Math.pow(t[2], 3) : (116 * t[2] - 16) / ty,
                ].map((e, t) => e * tb[t])
            );
        },
        formats: {
            "lab-d65": {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    t_ = Object.freeze({
        __proto__: null,
        contrastAPCA: function (e, t) {
            let r, n, i, o;
            ((t = O(t)), (e = O(e)), (t = e7(t, "srgb")), ([n, i, o] = t.coords));
            let a = 0.2126729 * tm(n) + 0.7151522 * tm(i) + 0.072175 * tm(o);
            ((e = e7(e, "srgb")), ([n, i, o] = e.coords));
            let s = 0.2126729 * tm(n) + 0.7151522 * tm(i) + 0.072175 * tm(o),
                l = th(a),
                u = th(s);
            return (
                100 *
                (0.1 >
                Math.abs(
                    (r =
                        5e-4 > Math.abs(u - l)
                            ? 0
                            : u > l
                              ? 1.14 * (u ** 0.56 - l ** 0.57)
                              : 1.14 * (u ** 0.65 - l ** 0.62)),
                )
                    ? 0
                    : r > 0
                      ? r - 0.027
                      : r + 0.027)
            );
        },
        contrastDeltaPhi: function (e, t) {
            ((e = O(e)), (t = O(t)));
            let r =
                Math.pow(
                    Math.abs(
                        Math.pow(j(e, [tw, "l"]), 1.618033988749895) - Math.pow(j(t, [tw, "l"]), 1.618033988749895),
                    ),
                    0.6180339887498948,
                ) *
                    Math.SQRT2 -
                40;
            return r < 7.5 ? 0 : r;
        },
        contrastLstar: function (e, t) {
            return ((e = O(e)), (t = O(t)), Math.abs(j(e, [W, "l"]) - j(t, [W, "l"])));
        },
        contrastMichelson: function (e, t) {
            ((e = O(e)), (t = O(t)));
            let r = Math.max(tf(e), 0),
                n = Math.max(tf(t), 0);
            n > r && ([r, n] = [n, r]);
            let i = r + n;
            return 0 === i ? 0 : (r - n) / i;
        },
        contrastWCAG21: function (e, t) {
            ((e = O(e)), (t = O(t)));
            let r = Math.max(tf(e), 0),
                n = Math.max(tf(t), 0);
            return (n > r && ([r, n] = [n, r]), (r + 0.05) / (n + 0.05));
        },
        contrastWeber: function (e, t) {
            ((e = O(e)), (t = O(t)));
            let r = Math.max(tf(e), 0),
                n = Math.max(tf(t), 0);
            return (n > r && ([r, n] = [n, r]), 0 === n ? 5e4 : (r - n) / n);
        },
    });
function tS(e) {
    let [t, r, n] = N(e, D),
        i = t + 15 * r + 3 * n;
    return [(4 * t) / i, (9 * r) / i];
}
function tE(e) {
    let [t, r, n] = N(e, D),
        i = t + r + n;
    return [t / i, r / i];
}
var tx = Object.freeze({
    __proto__: null,
    register: function (e) {
        (Object.defineProperty(e.prototype, "uv", {
            get() {
                return tS(this);
            },
        }),
            Object.defineProperty(e.prototype, "xy", {
                get() {
                    return tE(this);
                },
            }));
    },
    uv: tS,
    xy: tE,
});
function tC(e, t, r = {}) {
    o(r) && (r = { method: r });
    let { method: n = C.deltaE, ...i } = r;
    for (let r in e3) if ("deltae" + n.toLowerCase() === r.toLowerCase()) return e3[r](e, t, i);
    throw TypeError(`Unknown deltaE method: ${n}`);
}
var tk = Object.freeze({
    __proto__: null,
    darken: function (e, t = 0.25) {
        return U(e, [R.get("oklch", "lch"), "l"], (e) => e * (1 - t));
    },
    lighten: function (e, t = 0.25) {
        return U(e, [R.get("oklch", "lch"), "l"], (e) => e * (1 + t));
    },
});
function tT(e, t, r = 0.5, n = {}) {
    return (([e, t] = [O(e), O(t)]), "object" === a(r) && ([r, n] = [0.5, r]), tP(e, t, n)(r));
}
function tM(e, t, r = {}) {
    let n;
    tA(e) && (([n, r] = [e, t]), ([e, t] = n.rangeArgs.colors));
    let { maxDeltaE: i, deltaEMethod: o, steps: a = 2, maxSteps: s = 1e3, ...l } = r;
    n || (([e, t] = [O(e), O(t)]), (n = tP(e, t, l)));
    let u = tC(e, t),
        c = i > 0 ? Math.max(a, Math.ceil(u / i) + 1) : a,
        f = [];
    if ((void 0 !== s && (c = Math.min(c, s)), 1 === c)) f = [{ p: 0.5, color: n(0.5) }];
    else {
        let e = 1 / (c - 1);
        f = Array.from({ length: c }, (t, r) => {
            let i = r * e;
            return { p: i, color: n(i) };
        });
    }
    if (i > 0) {
        let e = f.reduce((e, t, r) => (0 === r ? 0 : Math.max(e, tC(t.color, f[r - 1].color, o))), 0);
        for (; e > i;) {
            e = 0;
            for (let t = 1; t < f.length && f.length < s; t++) {
                let r = f[t - 1],
                    i = f[t],
                    o = (i.p + r.p) / 2,
                    a = n(o);
                ((e = Math.max(e, tC(a, r.color), tC(a, i.color))), f.splice(t, 0, { p: o, color: n(o) }), t++);
            }
        }
    }
    return (f = f.map((e) => e.color));
}
function tP(e, t, r = {}) {
    if (tA(e)) {
        let [r, n] = [e, t];
        return tP(...r.rangeArgs.colors, { ...r.rangeArgs.options, ...n });
    }
    let { space: n, outputSpace: i, progression: o, premultiplied: a } = r;
    ((e = O(e)), (t = O(t)), (e = es(e)), (t = es(t)));
    let s = { colors: [e, t], options: r };
    if (
        ((n = n ? R.get(n) : R.registry[C.interpolationSpace] || e.space),
        (i = i ? R.get(i) : n),
        (e = e7(e, n)),
        (t = e7(t, n)),
        (e = e8(e)),
        (t = e8(t)),
        n.coords.h && "angle" === n.coords.h.type)
    ) {
        let i = (r.hue = r.hue || "shorter"),
            o = [n, "h"],
            [a, s] = [j(e, o), j(t, o)];
        (isNaN(a) && !isNaN(s) ? (a = s) : isNaN(s) && !isNaN(a) && (s = a),
            ([a, s] = (function (e, t) {
                if ("raw" === e) return t;
                let [r, n] = t.map(G),
                    i = n - r;
                return (
                    "increasing" === e
                        ? i < 0 && (n += 360)
                        : "decreasing" === e
                          ? i > 0 && (r += 360)
                          : "longer" === e
                            ? -180 < i && i < 180 && (i > 0 ? (r += 360) : (n += 360))
                            : "shorter" === e && (i > 180 ? (r += 360) : i < -180 && (n += 360)),
                    [r, n]
                );
            })(i, [a, s])),
            U(e, o, a),
            U(t, o, s));
    }
    return (
        a && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = o ? o(r) : r;
                let s = e.coords.map((e, n) => h(e, t.coords[n], r)),
                    l = h(e.alpha, t.alpha, r),
                    u = { space: n, coords: s, alpha: l };
                return (a && (u.coords = u.coords.map((e) => e / l)), i !== n && (u = e7(u, i)), u);
            },
            { rangeArgs: s },
        )
    );
}
function tA(e) {
    return "function" === a(e) && !!e.rangeArgs;
}
C.interpolationSpace = "lab";
var tI = Object.freeze({
        __proto__: null,
        isRange: tA,
        mix: tT,
        range: tP,
        register: function (e) {
            (e.defineFunction("mix", tT, { returns: "color" }),
                e.defineFunction("range", tP, { returns: "function<color>" }),
                e.defineFunction("steps", tM, { returns: "array<color>" }));
        },
        steps: tM,
    }),
    tO = new R({
        id: "hsl",
        name: "HSL",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            l: { range: [0, 100], name: "Lightness" },
        },
        base: tu,
        fromBase: (e) => {
            let t = Math.max(...e),
                r = Math.min(...e),
                [n, i, o] = e,
                [a, s, l] = [0 / 0, 0, (r + t) / 2],
                u = t - r;
            if (0 !== u) {
                switch (((s = 0 === l || 1 === l ? 0 : (t - l) / Math.min(l, 1 - l)), t)) {
                    case n:
                        a = (i - o) / u + 6 * (i < o);
                        break;
                    case i:
                        a = (o - n) / u + 2;
                        break;
                    case o:
                        a = (n - i) / u + 4;
                }
                a *= 60;
            }
            return (s < 0 && ((a += 180), (s = Math.abs(s))), a >= 360 && (a -= 360), [a, 100 * s, 100 * l]);
        },
        toBase: (e) => {
            let [t, r, n] = e;
            function i(e) {
                let i = (e + t / 30) % 12,
                    o = r * Math.min(n, 1 - n);
                return n - o * Math.max(-1, Math.min(i - 3, 9 - i, 1));
            }
            return ((t %= 360) < 0 && (t += 360), (r /= 100), (n /= 100), [i(0), i(8), i(4)]);
        },
        formats: {
            hsl: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"] },
            hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: !0, lastAlpha: !0 },
        },
    }),
    tR = new R({
        id: "hsv",
        name: "HSV",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
        },
        base: tO,
        fromBase(e) {
            let [t, r, n] = e,
                i = (n /= 100) + (r /= 100) * Math.min(n, 1 - n);
            return [t, 0 === i ? 0 : 200 * (1 - n / i), 100 * i];
        },
        toBase(e) {
            let [t, r, n] = e,
                i = (n /= 100) * (1 - (r /= 100) / 2);
            return [t, 0 === i || 1 === i ? 0 : ((n - i) / Math.min(i, 1 - i)) * 100, 100 * i];
        },
        formats: {
            color: {
                id: "--hsv",
                coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"],
            },
        },
    }),
    tL = new R({
        id: "hwb",
        name: "HWB",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
        },
        base: tR,
        fromBase(e) {
            let [t, r, n] = e;
            return [t, (n * (100 - r)) / 100, 100 - n];
        },
        toBase(e) {
            let [t, r, n] = e,
                i = (r /= 100) + (n /= 100);
            if (i >= 1) return [t, 0, (r / i) * 100];
            let o = 1 - n;
            return [t, 100 * (0 === o ? 0 : 1 - r / o), 100 * o];
        },
        formats: { hwb: { coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } },
    }),
    tD = new F({
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
    tF = new F({
        id: "a98rgb",
        cssId: "a98-rgb",
        name: "Adobe\xae 98 RGB compatible",
        base: tD,
        toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
        fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
    }),
    tN = new F({
        id: "prophoto-linear",
        cssId: "--prophoto-rgb-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: $,
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
let tj = 1 / 512;
var tB = new F({
        id: "prophoto",
        cssId: "prophoto-rgb",
        name: "ProPhoto",
        base: tN,
        toBase: (e) => e.map((e) => (e < 0.03125 ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= tj ? e ** (1 / 1.8) : 16 * e)),
    }),
    tU = new R({
        id: "oklch",
        name: "Oklch",
        coords: {
            l: { refRange: [0, 1], name: "Lightness" },
            c: { refRange: [0, 0.4], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        white: "D65",
        base: ei,
        fromBase(e) {
            let t,
                [r, n, i] = e;
            return (
                (t = 2e-4 > Math.abs(n) && 2e-4 > Math.abs(i) ? 0 / 0 : (180 * Math.atan2(i, n)) / Math.PI),
                [r, Math.sqrt(n ** 2 + i ** 2), G(t)]
            );
        },
        toBase(e) {
            let t,
                r,
                [n, i, o] = e;
            return (
                isNaN(o)
                    ? ((t = 0), (r = 0))
                    : ((t = i * Math.cos((o * Math.PI) / 180)), (r = i * Math.sin((o * Math.PI) / 180))),
                [n, t, r]
            );
        },
        formats: {
            oklch: { coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"] },
        },
    });
let t$ = k.D65,
    tV = 216 / 24389,
    tH = 24389 / 27,
    [tK, tz] = tS({ space: D, coords: t$ });
var tW = new R({
        id: "luv",
        name: "Luv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
        },
        white: t$,
        base: D,
        fromBase(e) {
            let t = [u(e[0]), u(e[1]), u(e[2])],
                r = t[1],
                [n, i] = tS({ space: D, coords: t });
            if (!Number.isFinite(n) || !Number.isFinite(i)) return [0, 0, 0];
            let o = r <= tV ? tH * r : 116 * Math.cbrt(r) - 16;
            return [o, 13 * o * (n - tK), 13 * o * (i - tz)];
        },
        toBase(e) {
            let [t, r, n] = e;
            if (0 === t || l(t)) return [0, 0, 0];
            ((r = u(r)), (n = u(n)));
            let i = r / (13 * t) + tK,
                o = n / (13 * t) + tz,
                a = t <= 8 ? t / tH : Math.pow((t + 16) / 116, 3);
            return [((9 * i) / (4 * o)) * a, a, ((12 - 3 * i - 20 * o) / (4 * o)) * a];
        },
        formats: {
            color: {
                id: "--luv",
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    tG = new R({
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
                [r, n, i] = e;
            return (
                (t = 0.02 > Math.abs(n) && 0.02 > Math.abs(i) ? 0 / 0 : (180 * Math.atan2(i, n)) / Math.PI),
                [r, Math.sqrt(n ** 2 + i ** 2), G(t)]
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
let tq = 216 / 24389,
    tY = 24389 / 27,
    tX = ti[0][0],
    tJ = ti[0][1],
    tZ = ti[0][2],
    tQ = ti[1][0],
    t0 = ti[1][1],
    t1 = ti[1][2],
    t2 = ti[2][0],
    t5 = ti[2][1],
    t3 = ti[2][2];
function t6(e, t, r) {
    let n = t / (Math.sin(r) - e * Math.cos(r));
    return n < 0 ? 1 / 0 : n;
}
function t8(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        r = t > tq ? t : e / tY,
        n = r * (284517 * tX - 94839 * tZ),
        i = r * (838422 * tZ + 769860 * tJ + 731718 * tX),
        o = r * (632260 * tZ - 126452 * tJ),
        a = r * (284517 * tQ - 94839 * t1),
        s = r * (838422 * t1 + 769860 * t0 + 731718 * tQ),
        l = r * (632260 * t1 - 126452 * t0),
        u = r * (284517 * t2 - 94839 * t3),
        c = r * (838422 * t3 + 769860 * t5 + 731718 * t2),
        f = r * (632260 * t3 - 126452 * t5);
    return {
        r0s: n / o,
        r0i: (i * e) / o,
        r1s: n / (o + 126452),
        r1i: ((i - 769860) * e) / (o + 126452),
        g0s: a / l,
        g0i: (s * e) / l,
        g1s: a / (l + 126452),
        g1i: ((s - 769860) * e) / (l + 126452),
        b0s: u / f,
        b0i: (c * e) / f,
        b1s: u / (f + 126452),
        b1i: ((c - 769860) * e) / (f + 126452),
    };
}
function t4(e, t) {
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
var t9 = new R({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tG,
    gamutSpace: tu,
    fromBase(e) {
        let t,
            [r, n, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (n / t4(t8(r), i)) * 100),
            [i, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, n, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            i > 99.9999999 ? ((i = 100), (t = 0)) : i < 1e-8 ? ((i = 0), (t = 0)) : (t = (t4(t8(i), r) / 100) * n),
            [i, t, r]
        );
    },
    formats: {
        color: { id: "--hsluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
function t7(e, t) {
    return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function re(e) {
    return Math.min(
        t7(e.r0s, e.r0i),
        t7(e.r1s, e.r1i),
        t7(e.g0s, e.g0i),
        t7(e.g1s, e.g1i),
        t7(e.b0s, e.b0i),
        t7(e.b1s, e.b1i),
    );
}
(ti[0][0], ti[0][1], ti[0][2], ti[1][0], ti[1][1], ti[1][2], ti[2][0], ti[2][1], ti[2][2]);
var rt = new R({
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
            [r, n, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (n / re(t8(r))) * 100),
            [i, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, n, i] = [u(e[0]), u(e[1]), u(e[2])];
        return (
            i > 99.9999999 ? ((i = 100), (t = 0)) : i < 1e-8 ? ((i = 0), (t = 0)) : (t = (re(t8(i)) / 100) * n),
            [i, t, r]
        );
    },
    formats: {
        color: { id: "--hpluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let rr = 2610 / 16384,
    rn = 16384 / 2610,
    ri = 2523 / 32,
    ro = 32 / 2523,
    ra = 2413 / 128;
var rs = new F({
        id: "rec2100pq",
        cssId: "rec2100-pq",
        name: "REC.2100-PQ",
        base: tt,
        toBase: (e) =>
            e.map(function (e) {
                return (1e4 * (Math.max(e ** ro - 0.8359375, 0) / (ra - 18.6875 * e ** ro)) ** rn) / 203;
            }),
        fromBase: (e) =>
            e.map(function (e) {
                let t = Math.max((203 * e) / 1e4, 0);
                return ((0.8359375 + ra * t ** rr) / (1 + 18.6875 * t ** rr)) ** ri;
            }),
    }),
    rl = new F({
        id: "rec2100hlg",
        cssId: "rec2100-hlg",
        name: "REC.2100-HLG",
        referred: "scene",
        base: tt,
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
let ru = {};
function rc({ id: e, toCone_M: t, fromCone_M: r }) {
    ru[e] = arguments[0];
}
function rf(e, t, r = "Bradford") {
    let n = ru[r],
        [o, a, s] = i(n.toCone_M, e),
        [l, u, c] = i(n.toCone_M, t),
        f = i(
            [
                [l / o, 0, 0],
                [0, u / a, 0],
                [0, 0, c / s],
            ],
            n.toCone_M,
        );
    return i(n.fromCone_M, f);
}
(x.add("chromatic-adaptation-start", (e) => {
    e.options.method && (e.M = rf(e.W1, e.W2, e.options.method));
}),
    x.add("chromatic-adaptation-end", (e) => {
        e.M || (e.M = rf(e.W1, e.W2, e.options.method));
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
    Object.assign(k, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435],
    }),
    (k.ACES = [0.32168 / 0.33767, 1, 0.34065 / 0.33767]));
var rd = new F({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    coords: {
        r: { range: [0, 65504], name: "Red" },
        g: { range: [0, 65504], name: "Green" },
        b: { range: [0, 65504], name: "Blue" },
    },
    referred: "scene",
    white: k.ACES,
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
let rp = (Math.log2(65504) + 9.72) / 17.52;
var rh = Object.freeze({
    __proto__: null,
    A98RGB: tF,
    A98RGB_Linear: tD,
    ACEScc: new F({
        id: "acescc",
        cssId: "--acescc",
        name: "ACEScc",
        coords: {
            r: { range: [-0.35828683, rp], name: "Red" },
            g: { range: [-0.35828683, rp], name: "Green" },
            b: { range: [-0.35828683, rp], name: "Blue" },
        },
        referred: "scene",
        base: rd,
        toBase(e) {
            let t = (9.72 - 15) / 17.52;
            return e.map(function (e) {
                return e <= t
                    ? (2 ** (17.52 * e - 9.72) - 152587890625e-16) * 2
                    : e < rp
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
    ACEScg: rd,
    CAM16_JMh: eY,
    HCT: e1,
    HPLuv: rt,
    HSL: tO,
    HSLuv: t9,
    HSV: tR,
    HWB: tL,
    ICTCP: eI,
    JzCzHz: e_,
    Jzazbz: ew,
    LCH: q,
    LCHuv: tG,
    Lab: W,
    Lab_D65: tw,
    Luv: tW,
    OKLCH: tU,
    OKLab: ei,
    P3: tc,
    P3_Linear: tn,
    ProPhoto: tB,
    ProPhoto_Linear: tN,
    REC_2020: tr,
    REC_2020_Linear: tt,
    REC_2100_HLG: rl,
    REC_2100_PQ: rs,
    XYZ_ABS_D65: ec,
    XYZ_D50: $,
    XYZ_D65: D,
    sRGB: tu,
    sRGB_Linear: to,
});
class rm {
    constructor(...e) {
        let t, r, n, i;
        (1 === e.length && (t = O(e[0])),
            t ? ((r = t.space || t.spaceId), (n = t.coords), (i = t.alpha)) : ([r, n, i] = e),
            Object.defineProperty(this, "space", { value: R.get(r), writable: !1, enumerable: !0, configurable: !0 }),
            (this.coords = n ? n.slice() : [0, 0, 0]),
            (this.alpha = i > 1 || void 0 === i ? 1 : i < 0 ? 0 : i));
        for (let e = 0; e < this.coords.length; e++) "NaN" === this.coords[e] && (this.coords[e] = 0 / 0);
        for (let e in this.space.coords)
            Object.defineProperty(this, e, { get: () => this.get(e), set: (t) => this.set(e, t) });
    }
    get spaceId() {
        return this.space.id;
    }
    clone() {
        return new rm(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
    }
    display(...e) {
        let t = (function (e, { space: t = C.display_space, ...r } = {}) {
            let i = te(e, r);
            if ("u" < typeof CSS || CSS.supports("color", i) || !C.display_space) (i = new String(i)).color = e;
            else {
                let o = e;
                if (
                    (e.coords.some(l) || l(e.alpha)) &&
                    !(n ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
                    (((o = es(e)).coords = o.coords.map(u)),
                    (o.alpha = u(o.alpha)),
                    (i = te(o, r)),
                    CSS.supports("color", i))
                )
                    return (((i = new String(i)).color = o), i);
                (i = new String(te((o = e7(o, t)), r))).color = o;
            }
            return i;
        })(this, ...e);
        return ((t.color = new rm(t.color)), t);
    }
    static get(e, ...t) {
        return e instanceof rm ? e : new rm(e, ...t);
    }
    static defineFunction(e, t, r = t) {
        let { instance: n = !0, returns: i } = r,
            o = function (...e) {
                let r = t(...e);
                if ("color" === i) r = rm.get(r);
                else if ("function<color>" === i) {
                    let e = r;
                    Object.assign(
                        (r = function (...t) {
                            let r = e(...t);
                            return rm.get(r);
                        }),
                        e,
                    );
                } else "array<color>" === i && (r = r.map((e) => rm.get(e)));
                return r;
            };
        (e in rm || (rm[e] = o),
            n &&
                (rm.prototype[e] = function (...e) {
                    return o(this, ...e);
                }));
    }
    static defineFunctions(e) {
        for (let t in e) rm.defineFunction(t, e[t], e[t]);
    }
    static extend(e) {
        if (e.register) e.register(rm);
        else for (let t in e) rm.defineFunction(t, e[t]);
    }
}
for (let e of (rm.defineFunctions({
    get: j,
    getAll: N,
    set: U,
    setAll: B,
    to: e7,
    equals: function (e, t) {
        return (
            (e = O(e)),
            (t = O(t)),
            e.space === t.space && e.alpha === t.alpha && e.coords.every((e, r) => e === t.coords[r])
        );
    },
    inGamut: ea,
    toGamut: e8,
    distance: el,
    toString: te,
}),
Object.assign(rm, { util: E, hooks: x, WHITES: k, Space: R, spaces: R.registry, parse: I, defaults: C }),
Object.keys(rh)))
    R.register(rh[e]);
for (let e in R.registry) rv(e, R.registry[e]);
function rv(e, t) {
    let r = e.replace(/-/g, "_");
    Object.defineProperty(rm.prototype, r, {
        get() {
            let r = this.getAll(e);
            return "u" < typeof Proxy
                ? r
                : new Proxy(r, {
                      has: (e, r) => {
                          try {
                              return (R.resolveCoord([t, r]), !0);
                          } catch (e) {}
                          return Reflect.has(e, r);
                      },
                      get: (e, r, n) => {
                          if (r && "symbol" != typeof r && !(r in e)) {
                              let { index: n } = R.resolveCoord([t, r]);
                              if (n >= 0) return e[n];
                          }
                          return Reflect.get(e, r, n);
                      },
                      set: (r, n, i, o) => {
                          if ((n && "symbol" != typeof n && !(n in r)) || n >= 0) {
                              let { index: o } = R.resolveCoord([t, n]);
                              if (o >= 0) return ((r[o] = i), this.setAll(e, r), !0);
                          }
                          return Reflect.set(r, n, i, o);
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
(x.add("colorspace-init-end", (e) => {
    (rv(e.id, e),
        e.aliases?.forEach((t) => {
            rv(t, e);
        }));
}),
    rm.extend(e3),
    rm.extend({ deltaE: tC }),
    Object.assign(rm, { deltaEMethods: e3 }),
    rm.extend(tk),
    rm.extend({
        contrast: function (e, t, r = {}) {
            o(r) && (r = { algorithm: r });
            let { algorithm: n, ...i } = r;
            if (!n) {
                let e = Object.keys(t_)
                    .map((e) => e.replace(/^contrast/, ""))
                    .join(", ");
                throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`);
            }
            for (let r in ((e = O(e)), (t = O(t)), t_))
                if ("contrast" + n.toLowerCase() === r.toLowerCase()) return t_[r](e, t, i);
            throw TypeError(`Unknown contrast algorithm: ${n}`);
        },
    }),
    rm.extend(tx),
    rm.extend(tp),
    rm.extend(tI),
    rm.extend(t_),
    r.d(t, {}, { A: rm }));
