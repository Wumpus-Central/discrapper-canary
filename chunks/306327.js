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
        a = 0;
    r && t && (a = ~~Math.log10(Math.abs(r)) + 1);
    let n = 10 ** (t - a);
    return Math.floor(e * n + 0.5) / n;
}
r.d(t, { A: () => rm });
let h = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function m(e) {
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
                        : (((s = new Number(t * h[e])).type = "<angle>"), (s.unit = e));
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
function f(e, t, r) {
    return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
}
function p(e, t, r) {
    return (r - e) / (t - e);
}
function g(e, t, r) {
    return f(t[0], t[1], p(e[0], e[1], r));
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
function M(e, t, r) {
    return Math.max(Math.min(r, t), e);
}
function w(e, t) {
    return Math.sign(e) === Math.sign(t) ? e : -e;
}
function y(e, t) {
    return w(Math.abs(e) ** t, e);
}
function v(e, t) {
    return 0 === t ? 0 : e / t;
}
function C(e, t, r = 0, a = e.length) {
    for (; r < a; ) {
        let n = (r + a) >> 1;
        e[n] < t ? (r = n + 1) : (a = n);
    }
    return r;
}
var R = Object.freeze({
    __proto__: null,
    bisectLeft: C,
    clamp: M,
    copySign: w,
    interpolate: f,
    interpolateInv: p,
    isNone: l,
    isString: o,
    last: d,
    mapRange: g,
    multiplyMatrices: n,
    parseCoordGrammar: b,
    parseFunction: m,
    serializeNumber: i,
    skipNone: c,
    spow: y,
    toPrecision: u,
    type: s,
    zdiv: v,
});
let _ = new (class {
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
var B = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function (e) {
        this.verbose && globalThis?.console?.warn?.(e);
    },
};
let N = { D50: [0.3457 / 0.3585, 1, 0.8251046025104602], D65: [0.3127 / 0.329, 1, 1.0890577507598784] };
function k(e) {
    return Array.isArray(e) ? e : N[e];
}
function S(e, t, r, a = {}) {
    if (((e = k(e)), (t = k(t)), !e || !t))
        throw TypeError(`Missing white point to convert ${!e ? "from" : ""}${!e && !t ? "/" : ""}${!t ? "to" : ""}`);
    if (e === t) return r;
    let o = { W1: e, W2: t, XYZ: r, options: a };
    if (
        (_.run("chromatic-adaptation-start", o),
        o.M ||
            (o.W1 === N.D65 && o.W2 === N.D50
                ? (o.M = [
                      [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
                      [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
                      [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371],
                  ])
                : o.W1 === N.D50 &&
                  o.W2 === N.D65 &&
                  (o.M = [
                      [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
                      [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
                      [0.012314014864481998, -0.020507649298898964, 1.330365926242124],
                  ])),
        _.run("chromatic-adaptation-end", o),
        o.M)
    )
        return n(o.M, o.XYZ);
    throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
let x = new Set(["<number>", "<percentage>", "<angle>"]);
function z(e, t, r, a) {
    return Object.entries(e.coords).map(([e, n], o) => {
        let s,
            i = t.coordGrammar[o],
            l = a[o],
            c = l?.type;
        if (!(s = l.none ? i.find((e) => x.has(e)) : i.find((e) => e == c))) {
            let t = n.name || e;
            throw TypeError(`${c ?? l.raw} not allowed for ${t} in ${r}()`);
        }
        let u = s.range;
        "<percentage>" === c && (u ||= [0, 1]);
        let h = n.range || n.refRange;
        return u && h && (a[o] = g(u, h, a[o])), s;
    });
}
function I(e, { meta: t } = {}) {
    let r = { str: String(e)?.trim() };
    if ((_.run("parse-start", r), r.color)) return r.color;
    if (((r.parsed = m(r.str)), r.parsed)) {
        let e = r.parsed.name;
        if ("color" === e) {
            let e = r.parsed.args.shift(),
                a = e.startsWith("--") ? e.substring(2) : `--${e}`,
                n = [e, a],
                o = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1;
            for (let a of P.all) {
                let s = a.getFormat("color");
                if (s && (n.includes(s.id) || s.ids?.filter((e) => n.includes(e)).length)) {
                    let n,
                        i = Object.keys(a.coords).map((e, t) => r.parsed.args[t] || 0);
                    return (
                        s.coordGrammar && (n = z(a, s, "color", i)),
                        t && Object.assign(t, { formatId: "color", types: n }),
                        s.id.startsWith("--") &&
                            !e.startsWith("--") &&
                            B.warn(
                                `${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${e}).`,
                            ),
                        e.startsWith("--") &&
                            !s.id.startsWith("--") &&
                            B.warn(
                                `${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${e}).`,
                            ),
                        { spaceId: a.id, coords: i, alpha: o }
                    );
                }
            }
            let s = "",
                i = e in P.registry ? e : a;
            if (i in P.registry) {
                let e = P.registry[i].formats?.color?.id;
                e && (s = `Did you mean color(${e})?`);
            }
            throw TypeError(`Cannot parse color(${e}). ` + (s || "Missing a plugin?"));
        }
        for (let a of P.all) {
            let n = a.getFormat(e);
            if (n && "function" === n.type) {
                let o,
                    s = 1;
                (n.lastAlpha || d(r.parsed.args).alpha) && (s = r.parsed.args.pop());
                let i = r.parsed.args;
                return (
                    n.coordGrammar && (o = z(a, n, e, i)),
                    t && Object.assign(t, { formatId: n.name, types: o }),
                    { spaceId: a.id, coords: i, alpha: s }
                );
            }
        }
    } else
        for (let e of P.all)
            for (let a in e.formats) {
                let n = e.formats[a];
                if ("custom" !== n.type || (n.test && !n.test(r.str))) continue;
                let o = n.parse(r.str);
                if (o) return (o.alpha ??= 1), t && (t.formatId = a), o;
            }
    throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function L(e) {
    if (Array.isArray(e)) return e.map(L);
    if (!e) throw TypeError("Empty color reference");
    o(e) && (e = I(e));
    let t = e.space || e.spaceId;
    return t instanceof P || (e.space = P.get(t)), void 0 === e.alpha && (e.alpha = 1), e;
}
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
        let r = e.white ?? this.base.white ?? "D65";
        for (let t in ((this.white = k(r)), (this.formats = e.formats ?? {}), this.formats)) {
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
                value: (function (e) {
                    let t = [e];
                    for (let r = e; (r = r.base); ) t.push(r);
                    return t;
                })(this).reverse(),
                writable: !1,
                enumerable: !0,
                configurable: !0,
            }),
            _.run("colorspace-init-end", this);
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
            ? (e = j(e, this))
            : (t = "default" === e ? Object.values(this.formats)[0] : this.formats[e])
              ? (t = j(t, this))
              : null;
    }
    equals(e) {
        return !!e && (this === e || this.id === e || this.id === e.id);
    }
    to(e, t) {
        let r, a;
        if (1 == arguments.length) {
            let r = L(e);
            [e, t] = [r.space, r.coords];
        }
        if (((e = P.get(e)), this.equals(e))) return t;
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
            let r = L(e);
            [e, t] = [r.space, r.coords];
        }
        return (e = P.get(e)).to(this, t);
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
        if ("string" === s(e)) {
            let t = P.registry[e.toLowerCase()];
            if (!t) throw TypeError(`No color space found with id = "${e}"`);
            return t;
        }
        if (t.length) return P.get(...t);
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
            (r = P.get(r)) || (r = t),
            !r)
        )
            throw TypeError(
                `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
        if ("number" === (n = s(a)) || ("string" === n && a >= 0)) {
            let e = Object.entries(r.coords)[a];
            if (e) return { space: r, id: e[0], index: a, ...e[1] };
        }
        r = P.get(r);
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
function j(e, { coords: t } = {}) {
    if (e.coords && !e.coordGrammar) {
        (e.type ||= "function"), (e.name ||= "color"), (e.coordGrammar = b(e.coords));
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
                return n && o && (e = g(n, o, e)), (e = i(e, { precision: t, unit: s }));
            });
    }
    return e;
}
var A = new P({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
    white: "D65",
    formats: { color: { ids: ["xyz-d65", "xyz"] } },
    aliases: ["xyz"],
});
class E extends P {
    constructor(e) {
        e.coords ||
            (e.coords = {
                r: { range: [0, 1], name: "Red" },
                g: { range: [0, 1], name: "Green" },
                b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = A),
            e.toXYZ_M &&
                e.fromXYZ_M &&
                ((e.toBase ??= (t) => {
                    let r = n(e.toXYZ_M, t);
                    return this.white !== this.base.white && (r = S(this.white, this.base.white, r)), r;
                }),
                (e.fromBase ??= (t) => ((t = S(this.base.white, this.white, t)), n(e.fromXYZ_M, t)))),
            (e.referred ??= "display"),
            super(e);
    }
}
function O(e, t) {
    return ((e = L(e)), !t || e.space.equals(t)) ? e.coords.slice() : (t = P.get(t)).from(e);
}
function $(e, t) {
    e = L(e);
    let { space: r, index: a } = P.resolveCoord(t, e.space);
    return O(e, r)[a];
}
function q(e, t, r) {
    return (e = L(e)), (t = P.get(t)), (e.coords = t.to(e.space, r)), e;
}
function D(e, t, r) {
    if (((e = L(e)), 2 == arguments.length && "object" === s(arguments[1]))) {
        let t = arguments[1];
        for (let r in t) D(e, r, t[r]);
    } else {
        "function" == typeof r && (r = r($(e, t)));
        let { space: a, index: n } = P.resolveCoord(t, e.space),
            o = O(e, a);
        (o[n] = r), q(e, a, o);
    }
    return e;
}
(q.returns = "color"), (D.returns = "color");
var H = new P({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: A,
    fromBase: (e) => S(A.white, "D50", e),
    toBase: (e) => S("D50", A.white, e),
});
let T = 216 / 24389,
    W = 24 / 116,
    G = 24389 / 27,
    X = N.D50;
var Y = new P({
    id: "lab",
    name: "Lab",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        a: { refRange: [-125, 125] },
        b: { refRange: [-125, 125] },
    },
    white: X,
    base: H,
    fromBase(e) {
        let t = e.map((e, t) => e / X[t]).map((e) => (e > T ? Math.cbrt(e) : (G * e + 16) / 116));
        return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
    },
    toBase(e) {
        let t = [];
        return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
                t[0] > W ? Math.pow(t[0], 3) : (116 * t[0] - 16) / G,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / G,
                t[2] > W ? Math.pow(t[2], 3) : (116 * t[2] - 16) / G,
            ].map((e, t) => e * X[t])
        );
    },
    formats: {
        lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] },
    },
});
function Z(e) {
    return ((e % 360) + 360) % 360;
}
var F = new P({
    id: "lch",
    name: "LCH",
    coords: {
        l: { refRange: [0, 100], name: "Lightness" },
        c: { refRange: [0, 150], name: "Chroma" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: Y,
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
let J = Math.PI,
    Q = 180 / J,
    U = J / 180;
function V(e) {
    let t = e * e;
    return t * t * t * e;
}
function K(e, t, { kL: r = 1, kC: a = 1, kH: n = 1 } = {}) {
    let o, s;
    [e, t] = L([e, t]);
    let [i, l, c] = Y.from(e),
        u = F.from(Y, [i, l, c])[1],
        [h, m, d] = Y.from(t),
        f = F.from(Y, [h, m, d])[1];
    u < 0 && (u = 0), f < 0 && (f = 0);
    let p = V((u + f) / 2),
        g = 0.5 * (1 - Math.sqrt(p / (p + 0x16bcc41e9))),
        b = (1 + g) * l,
        M = (1 + g) * m,
        w = Math.sqrt(b ** 2 + c ** 2),
        y = Math.sqrt(M ** 2 + d ** 2),
        v = 0 === b && 0 === c ? 0 : Math.atan2(c, b),
        C = 0 === M && 0 === d ? 0 : Math.atan2(d, M);
    v < 0 && (v += 2 * J), C < 0 && (C += 2 * J), (v *= Q);
    let R = h - i,
        _ = y - w,
        N = (C *= Q) - v,
        k = v + C,
        S = Math.abs(N);
    w * y == 0
        ? (o = 0)
        : S <= 180
          ? (o = N)
          : N > 180
            ? (o = N - 360)
            : N < -180
              ? (o = N + 360)
              : B.warn("the unthinkable has happened");
    let x = 2 * Math.sqrt(y * w) * Math.sin((o * U) / 2),
        z = (i + h) / 2,
        I = (w + y) / 2,
        P = V(I),
        j = (z - 50) ** 2,
        A = 1 + (0.015 * j) / Math.sqrt(20 + j),
        E = 1 + 0.045 * I,
        O =
            1 +
            0.015 *
                I *
                (1 -
                    0.17 *
                        Math.cos(
                            ((s = w * y == 0 ? k : S <= 180 ? k / 2 : k < 360 ? (k + 360) / 2 : (k - 360) / 2) - 30) *
                                U,
                        ) +
                    0.24 * Math.cos(2 * s * U) +
                    0.32 * Math.cos((3 * s + 6) * U) -
                    0.2 * Math.cos((4 * s - 63) * U)),
        $ = (R / (r * A)) ** 2;
    return Math.sqrt(
        ($ +=
            (_ / (a * E)) ** 2 +
            (x / (n * O)) ** 2 +
            (_ / (a * E)) *
                (-1 *
                    Math.sin(2 * (30 * Math.exp(-1 * ((s - 275) / 25) ** 2)) * U) *
                    (2 * Math.sqrt(P / (P + 0x16bcc41e9)))) *
                (x / (n * O))),
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
var en = new P({
    id: "oklab",
    name: "Oklab",
    coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } },
    white: "D65",
    base: A,
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
    [e, t] = L([e, t]);
    let [r, a, n] = en.from(e),
        [o, s, i] = en.from(t);
    return Math.sqrt((r - o) ** 2 + (a - s) ** 2 + (n - i) ** 2);
}
function es(e, t, { epsilon: r = 75e-6 } = {}) {
    (e = L(e)), t || (t = e.space), (t = P.get(t));
    let a = e.coords;
    return t !== e.space && (a = t.from(e)), t.inGamut(a, { epsilon: r });
}
function ei(e) {
    return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function el(e, t, r = "lab") {
    let a = (r = P.get(r)).from(e),
        n = r.from(t);
    return Math.sqrt(
        a.reduce((e, t, r) => {
            let a = n[r];
            return isNaN(t) || isNaN(a) ? e : e + (a - t) ** 2;
        }, 0),
    );
}
let ec = Math.PI / 180;
var eu = new P({
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
        x: { refRange: [0, 9504.7], name: "Xa" },
        y: { refRange: [0, 1e4], name: "Ya" },
        z: { refRange: [0, 10888.3], name: "Za" },
    },
    base: A,
    fromBase: (e) => e.map((e) => Math.max(203 * e, 0)),
    toBase: (e) => e.map((e) => Math.max(e / 203, 0)),
});
let eh = 2610 / 16384,
    em = 16384 / 2610,
    ed = (1.7 * 2523) / 32,
    ef = 32 / (1.7 * 2523),
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
var ew = new P({
        id: "jzazbz",
        name: "Jzazbz",
        coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } },
        base: eu,
        fromBase(e) {
            let [t, r, a] = e,
                o = n(ep, [1.15 * t - (1.15 - 1) * a, 0.66 * r - (0.66 - 1) * t, a]).map(function (e) {
                    return ((0.8359375 + 18.8515625 * (e / 1e4) ** eh) / (1 + 18.6875 * (e / 1e4) ** eh)) ** ed;
                }),
                [s, i, l] = n(eb, o);
            return [(0.43999999999999995 * s) / (1 + -0.56 * s) - 16295499532821565e-27, i, l];
        },
        toBase(e) {
            let [t, r, a] = e,
                o = n(eM, [
                    (t + 16295499532821565e-27) / (0.43999999999999995 - -0.56 * (t + 16295499532821565e-27)),
                    r,
                    a,
                ]).map(function (e) {
                    return 1e4 * ((0.8359375 - e ** ef) / (18.6875 * e ** ef - 18.8515625)) ** em;
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
    ey = new P({
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
                [r, a, n] = e;
            return (
                (t = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI),
                [r, Math.sqrt(a ** 2 + n ** 2), Z(t)]
            );
        },
        toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)],
    });
let ev = 2413 / 128,
    eC = 2610 / 16384,
    eR = 2523 / 32,
    e_ = 16384 / 2610,
    eB = 32 / 2523,
    eN = [
        [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
        [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
        [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
    ],
    ek = [
        [0.5, 0.5, 0],
        [6610 / 4096, -13613 / 4096, 7003 / 4096],
        [17933 / 4096, -17390 / 4096, -543 / 4096],
    ],
    eS = [
        [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
        [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
        [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
    ],
    ex = [
        [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
        [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
        [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
    ];
var ez = new P({
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
            (t = n(eN, e)),
            n(
                ek,
                t.map(function (e) {
                    return ((0.8359375 + ev * (e / 1e4) ** eC) / (1 + 18.6875 * (e / 1e4) ** eC)) ** eR;
                }),
            )
        );
    },
    toBase: (e) =>
        n(
            ex,
            n(eS, e).map(function (e) {
                let t = Math.max(e ** eB - 0.8359375, 0);
                return 1e4 * (t / (ev - 18.6875 * e ** eB)) ** e_;
            }),
        ),
});
let eI = N.D65,
    eL = 2 * Math.PI,
    eP = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127],
    ],
    ej = [
        [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
        [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
        [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
    ],
    eA = [
        [460, 451, 288],
        [460, -891, -261],
        [460, -220, -6300],
    ],
    eE = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] },
    eO = [20.14, 90, 164.25, 237.53, 380.14],
    e$ = [0.8, 0.7, 1, 1.2, 0.8],
    eq = [0, 100, 200, 300, 400],
    eD = 180 / Math.PI,
    eH = Math.PI / 180;
function eT(e, t) {
    return e.map((e) => {
        let r = y(t * Math.abs(e) * 0.01, 0.42);
        return (400 * w(r, e)) / (r + 27.13);
    });
}
function eW(e, t, r, a, o) {
    let s = {};
    (s.discounting = o), (s.refWhite = e), (s.surround = a);
    let i = e.map((e) => 100 * e);
    (s.la = t), (s.yb = r);
    let l = i[1],
        c = n(eP, i),
        u = (a = eE[s.surround])[0];
    (s.c = a[1]), (s.nc = a[2]);
    let h = (1 / (5 * s.la + 1)) ** 4;
    (s.fl = h * s.la + 0.1 * (1 - h) * (1 - h) * Math.cbrt(5 * s.la)),
        (s.flRoot = s.fl ** 0.25),
        (s.n = s.yb / l),
        (s.z = 1.48 + Math.sqrt(s.n)),
        (s.nbb = 0.725 * s.n ** -0.2),
        (s.ncb = s.nbb);
    let m = o ? 1 : Math.max(Math.min(u * (1 - (1 / 3.6) * Math.exp((-s.la - 42) / 92)), 1), 0);
    (s.dRgb = c.map((e) => f(1, l / e, m))), (s.dRgbInv = s.dRgb.map((e) => 1 / e));
    let d = eT(
        c.map((e, t) => e * s.dRgb[t]),
        s.fl,
    );
    return (s.aW = s.nbb * (2 * d[0] + d[1] + 0.05 * d[2])), s;
}
let eG = eW(eI, (64 / Math.PI) * 0.2, 20, "average", !1);
function eX(e, t) {
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
                    ? Z(e.h) * eH
                    : (function (e) {
                          let t = ((e % 400) + 400) % 400,
                              r = Math.floor(0.01 * t);
                          t %= 100;
                          let [a, n] = eO.slice(r, r + 2),
                              [o, s] = e$.slice(r, r + 2);
                          return Z((t * (s * a - o * n) - 100 * a * s) / (t * (s - o) - 100 * s));
                      })(e.H) * eH),
        ),
        i = Math.sin(o),
        l = 0;
    void 0 !== e.J ? (l = 0.1 * y(e.J, 0.5)) : void 0 !== e.Q && (l = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
    let c = 0;
    void 0 !== e.C
        ? (c = e.C / l)
        : void 0 !== e.M
          ? (c = e.M / t.flRoot / l)
          : void 0 !== e.s && (c = (4e-4 * e.s ** 2 * (t.aW + 4)) / t.c);
    let u = y(c * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
        h = 0.25 * (Math.cos(o + 2) + 3.8),
        m = t.aW * y(l, 2 / t.c / t.z),
        d = (5e4 / 13) * t.nc * t.ncb * h,
        f = m / t.nbb,
        p = 23 * (f + 0.305) * v(u, 23 * d + u * (11 * s + 108 * i)),
        g =
            ((r = n(eA, [f, p * s, p * i]).map((e) => e / 1403)),
            (a = (100 / t.fl) * 2588.068098016295),
            r.map((e) => {
                let t = Math.abs(e);
                return w(a * y(t / (400 - t), 2.380952380952381), e);
            }));
    return n(
        ej,
        g.map((e, r) => e * t.dRgbInv[r]),
    ).map((e) => e / 100);
}
function eY(e, t) {
    let r = eT(
            n(
                eP,
                e.map((e) => 100 * e),
            ).map((e, r) => e * t.dRgb[r]),
            t.fl,
        ),
        a = r[0] + (-12 * r[1] + r[2]) / 11,
        o = (r[0] + r[1] - 2 * r[2]) / 9,
        s = ((Math.atan2(o, a) % eL) + eL) % eL,
        i = 0.25 * (Math.cos(s + 2) + 3.8),
        l =
            y((5e4 / 13) * t.nc * t.ncb * v(i * Math.sqrt(a ** 2 + o ** 2), r[0] + r[1] + 1.05 * r[2] + 0.305), 0.9) *
            Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        c = y((t.nbb * (2 * r[0] + r[1] + 0.05 * r[2])) / t.aW, 0.5 * t.c * t.z),
        u = 100 * y(c, 2),
        h = (4 / t.c) * c * (t.aW + 4) * t.flRoot,
        m = l * c,
        d = m * t.flRoot,
        f = Z(s * eD),
        p = (function (e) {
            let t = Z(e);
            t <= eO[0] && (t += 360);
            let r = C(eO, t) - 1,
                [a, n] = eO.slice(r, r + 2),
                [o, s] = e$.slice(r, r + 2),
                i = eq[r],
                l = (t - a) / o;
            return i + (100 * l) / (l + (n - t) / s);
        })(f);
    return { J: u, C: m, h: f, s: 50 * y((t.c * l) / (t.aW + 4), 0.5), Q: h, M: d, H: p };
}
var eZ = new P({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
        j: { refRange: [0, 100], name: "J" },
        m: { refRange: [0, 105], name: "Colorfulness" },
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
    },
    base: A,
    fromBase(e) {
        let t = eY(e, eG);
        return [t.J, t.M, t.h];
    },
    toBase: (e) => eX({ J: e[0], M: e[1], h: e[2] }, eG),
});
let eF = N.D65,
    eJ = 216 / 24389,
    eQ = 24389 / 27;
function eU(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / eQ;
}
let eV = eW(eF, (200 / Math.PI) * eU(50), 100 * eU(50), "average", !1);
var eK = new P({
    id: "hct",
    name: "HCT",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        c: { refRange: [0, 145], name: "Colorfulness" },
        t: { refRange: [0, 100], name: "Tone" },
    },
    base: A,
    fromBase: (e) =>
        (function (e) {
            var t;
            let r = 116 * ((t = e[1]) > eJ ? Math.cbrt(t) : (eQ * t + 16) / 116) - 16;
            if (0 === r) return [0, 0, 0];
            let a = eY(e, eV);
            return [Z(a.h), a.C, r];
        })(e),
    toBase: (e) =>
        (function (e, t) {
            let [r, a, n] = e,
                o = [],
                s = 0;
            if (0 === n) return [0, 0, 0];
            let i = eU(n);
            s =
                n > 0
                    ? 0.00379058511492914 * n ** 2 + 0.608983189401032 * n + 0.9155088574762233
                    : 9514440756550361e-21 * n ** 2 + 0.08693057439788597 * n - 21.928975842194614;
            let l = 0,
                c = 1 / 0;
            for (; l <= 15; ) {
                let e = Math.abs((o = eX({ J: s, C: a, h: r }, t))[1] - i);
                if (e < c) {
                    if (e <= 2e-12) return o;
                    c = e;
                }
                (s -= ((o[1] - i) * s) / (2 * o[1])), (l += 1);
            }
            return eX({ J: s, C: a, h: r }, t);
        })(e, eV),
    formats: {
        color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] },
    },
});
let e5 = Math.PI / 180;
function e0(e) {
    e[1] < 0 && (e = eK.fromBase(eK.toBase(e)));
    let t = Math.log(Math.max(1 + 0.0228 * e[1] * eV.flRoot, 1)) / 0.0228,
        r = e[0] * e5,
        a = t * Math.cos(r),
        n = t * Math.sin(r);
    return [e[2], a, n];
}
var e2 = {
    deltaE76: function (e, t) {
        return el(e, t, "lab");
    },
    deltaECMC: function (e, t, { l: r = 2, c: a = 1 } = {}) {
        [e, t] = L([e, t]);
        let [n, o, s] = Y.from(e),
            [, i, l] = F.from(Y, [n, o, s]),
            [c, u, h] = Y.from(t),
            m = F.from(Y, [c, u, h])[1];
        i < 0 && (i = 0), m < 0 && (m = 0);
        let d = n - c,
            f = i - m,
            p = o - u,
            g = s - h,
            b = 0.511;
        n >= 16 && (b = (0.040975 * n) / (1 + 0.01765 * n));
        let M = (0.0638 * i) / (1 + 0.0131 * i) + 0.638;
        Number.isNaN(l) && (l = 0);
        let w = Math.pow(i, 4),
            y = Math.sqrt(w / (w + 1900)),
            v =
                M *
                (y *
                    (l >= 164 && l <= 345
                        ? 0.56 + Math.abs(0.2 * Math.cos((l + 168) * ec))
                        : 0.36 + Math.abs(0.4 * Math.cos((l + 35) * ec))) +
                    1 -
                    y),
            C = (d / (r * b)) ** 2;
        return Math.sqrt((C += (f / (a * M)) ** 2 + (p ** 2 + g ** 2 - f ** 2) / v ** 2));
    },
    deltaE2000: K,
    deltaEJz: function (e, t) {
        [e, t] = L([e, t]);
        let [r, a, n] = ey.from(e),
            [o, s, i] = ey.from(t);
        Number.isNaN(n) && Number.isNaN(i)
            ? ((n = 0), (i = 0))
            : Number.isNaN(n)
              ? (n = i)
              : Number.isNaN(i) && (i = n);
        let l = 2 * Math.sqrt(a * s) * Math.sin(((n - i) / 2) * (Math.PI / 180));
        return Math.sqrt((r - o) ** 2 + (a - s) ** 2 + l ** 2);
    },
    deltaEITP: function (e, t) {
        [e, t] = L([e, t]);
        let [r, a, n] = ez.from(e),
            [o, s, i] = ez.from(t);
        return 720 * Math.sqrt((r - o) ** 2 + 0.25 * (a - s) ** 2 + (n - i) ** 2);
    },
    deltaEOK: eo,
    deltaEHCT: function (e, t) {
        [e, t] = L([e, t]);
        let [r, a, n] = e0(eK.from(e)),
            [o, s, i] = e0(eK.from(t));
        return Math.sqrt((r - o) ** 2 + (a - s) ** 2 + (n - i) ** 2);
    },
};
let e1 = {
    hct: { method: "hct.c", jnd: 2, deltaEMethod: "hct", blackWhiteClamp: {} },
    "hct-tonal": {
        method: "hct.c",
        jnd: 0,
        deltaEMethod: "hct",
        blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 },
    },
};
function e9(
    e,
    { method: t = B.gamut_mapping, space: r, deltaEMethod: a = "", jnd: n = 2, blackWhiteClamp: s = {} } = {},
) {
    let i;
    if (((e = L(e)), o(arguments[1]) ? (r = arguments[1]) : r || (r = e.space), es(e, (r = P.get(r)), { epsilon: 0 })))
        return e;
    if ("css" === t)
        i = (function (e, { space: t } = {}) {
            (e = L(e)), t || (t = e.space), (t = P.get(t));
            let r = P.get("oklch");
            if (t.isUnbounded) return e3(e, t);
            let a = e3(e, r),
                n = a.coords[0];
            if (n >= 1) {
                let r = e3(e6, t);
                return (r.alpha = e.alpha), e3(r, t);
            }
            if (n <= 0) {
                let r = e3(e8, t);
                return (r.alpha = e.alpha), e3(r, t);
            }
            if (es(a, t, { epsilon: 0 })) return e3(a, t);
            function o(e) {
                let r = e3(e, t),
                    a = Object.values(t.coords);
                return (
                    (r.coords = r.coords.map((e, t) => {
                        if ("range" in a[t]) {
                            let [r, n] = a[t].range;
                            return M(r, e, n);
                        }
                        return e;
                    })),
                    r
                );
            }
            let s = 0,
                i = a.coords[1],
                l = !0,
                c = ei(a),
                u = o(c),
                h = eo(u, c);
            if (h < 0.02) return u;
            for (; i - s > 1e-4; ) {
                let e = (s + i) / 2;
                if (((c.coords[1] = e), l && es(c, t, { epsilon: 0 }))) s = e;
                else if ((h = eo((u = o(c)), c)) < 0.02)
                    if (0.02 - h < 1e-4) break;
                    else (l = !1), (s = e);
                else i = e;
            }
            return u;
        })(e, { space: r });
    else {
        if ("clip" === t || es(e, r)) i = e3(e, r);
        else {
            Object.prototype.hasOwnProperty.call(e1, t) &&
                ({ method: t, jnd: n, deltaEMethod: a, blackWhiteClamp: s } = e1[t]);
            let o = K;
            if ("" !== a) {
                for (let e in e2)
                    if ("deltae" + a.toLowerCase() === e.toLowerCase()) {
                        o = e2[e];
                        break;
                    }
            }
            let u = e9(e3(e, r), { method: "clip", space: r });
            if (o(e, u) > n) {
                var c;
                let a;
                if (3 === Object.keys(s).length) {
                    let t = P.resolveCoord(s.channel),
                        r = $(e3(e, t.space), t.id);
                    if ((l(r) && (r = 0), r >= s.max)) return e3({ space: "xyz-d65", coords: N.D65 }, e.space);
                    if (r <= s.min) return e3({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
                }
                let u = P.resolveCoord(t),
                    h = u.space,
                    m = u.id,
                    d = e3(e, h);
                d.coords.forEach((e, t) => {
                    l(e) && (d.coords[t] = 0);
                });
                let f = (u.range || u.refRange)[0],
                    p =
                        ((a = (c = n) ? Math.floor(Math.log10(Math.abs(c))) : 0),
                        Math.max(parseFloat(`1e${a - 2}`), 1e-6)),
                    g = f,
                    b = $(d, m);
                for (; b - g > p; ) {
                    let e = ei(d);
                    o(d, (e = e9(e, { space: r, method: "clip" }))) - n < p ? (g = $(d, m)) : (b = $(d, m)),
                        D(d, m, (g + b) / 2);
                }
                i = e3(d, r);
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
    return r !== e.space && (i = e3(i, e.space)), (e.coords = i.coords), e;
}
e9.returns = "color";
let e6 = { space: en, coords: [1, 0, 0] },
    e8 = { space: en, coords: [0, 0, 0] };
function e3(e, t, { inGamut: r } = {}) {
    e = L(e);
    let a = (t = P.get(t)).from(e),
        n = { space: t, coords: a, alpha: e.alpha };
    return r && (n = e9(n, !0 === r ? void 0 : r)), n;
}
function e4(e, { precision: t = B.precision, format: r = "default", inGamut: a = !0, ...n } = {}) {
    let o;
    e = L(e);
    let s = r;
    r = e.space.getFormat(r) ?? e.space.getFormat("default") ?? P.DEFAULT_FORMAT;
    let l = e.coords.slice();
    if (((a ||= r.toGamut) && !es(e) && (l = e9(ei(e), !0 === a ? void 0 : a).coords), "custom" === r.type))
        if (((n.precision = t), r.serialize)) o = r.serialize(l, e.alpha, n);
        else throw TypeError(`format ${s} can only be used to parse colors, not for serialization`);
    else {
        let a = r.name || "color";
        r.serializeCoords ? (l = r.serializeCoords(l, t)) : null !== t && (l = l.map((e) => i(e, { precision: t })));
        let n = [...l];
        if ("color" === a) {
            let t = r.id || r.ids?.[0] || e.space.id;
            n.unshift(t);
        }
        let s = e.alpha;
        null !== t && (s = i(s, { precision: t }));
        let c = e.alpha >= 1 || r.noAlpha ? "" : `${r.commas ? "," : " /"} ${s}`;
        o = `${a}(${n.join(r.commas ? ", " : " ")}${c})`;
    }
    return o;
}
e3.returns = "color";
var e7 = new E({
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
    te = new E({
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
    tt = new E({
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
var ta = new E({
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
var ti = new E({
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
    tl = new E({ id: "p3", cssId: "display-p3", name: "P3", base: tt, fromBase: ti.fromBase, toBase: ti.toBase });
if (((B.display_space = ti), "u" > typeof CSS && CSS.supports))
    for (let e of [Y, te, tl]) {
        let t = e.getMinCoords(),
            r = e4({ space: e, coords: t, alpha: 1 });
        if (CSS.supports("color", r)) {
            B.display_space = e;
            break;
        }
    }
function tc(e) {
    return $(e, [A, "y"]);
}
function tu(e, t) {
    D(e, [A, "y"], t);
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
function tm(e) {
    return e >= 0.022 ? e : e + (0.022 - e) ** 1.414;
}
function td(e) {
    let t = Math.abs(e);
    return (e < 0 ? -1 : 1) * Math.pow(t, 2.4);
}
let tf = 216 / 24389,
    tp = 24 / 116,
    tg = 24389 / 27,
    tb = N.D65;
var tM = new P({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            a: { refRange: [-125, 125] },
            b: { refRange: [-125, 125] },
        },
        white: tb,
        base: A,
        fromBase(e) {
            let t = e.map((e, t) => e / tb[t]).map((e) => (e > tf ? Math.cbrt(e) : (tg * e + 16) / 116));
            return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
        },
        toBase(e) {
            let t = [];
            return (
                (t[1] = (e[0] + 16) / 116),
                (t[0] = e[1] / 500 + t[1]),
                (t[2] = t[1] - e[2] / 200),
                [
                    t[0] > tp ? Math.pow(t[0], 3) : (116 * t[0] - 16) / tg,
                    e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / tg,
                    t[2] > tp ? Math.pow(t[2], 3) : (116 * t[2] - 16) / tg,
                ].map((e, t) => e * tb[t])
            );
        },
        formats: {
            "lab-d65": {
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    tw = Object.freeze({
        __proto__: null,
        contrastAPCA: function (e, t) {
            let r, a, n, o;
            (t = L(t)), (e = L(e)), (t = e3(t, "srgb")), ([a, n, o] = t.coords);
            let s = 0.2126729 * td(a) + 0.7151522 * td(n) + 0.072175 * td(o);
            (e = e3(e, "srgb")), ([a, n, o] = e.coords);
            let i = 0.2126729 * td(a) + 0.7151522 * td(n) + 0.072175 * td(o),
                l = tm(s),
                c = tm(i);
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
            (e = L(e)), (t = L(t));
            let r =
                Math.pow(
                    Math.abs(
                        Math.pow($(e, [tM, "l"]), 1.618033988749895) - Math.pow($(t, [tM, "l"]), 1.618033988749895),
                    ),
                    0.6180339887498948,
                ) *
                    Math.SQRT2 -
                40;
            return r < 7.5 ? 0 : r;
        },
        contrastLstar: function (e, t) {
            return (e = L(e)), (t = L(t)), Math.abs($(e, [Y, "l"]) - $(t, [Y, "l"]));
        },
        contrastMichelson: function (e, t) {
            (e = L(e)), (t = L(t));
            let r = Math.max(tc(e), 0),
                a = Math.max(tc(t), 0);
            a > r && ([r, a] = [a, r]);
            let n = r + a;
            return 0 === n ? 0 : (r - a) / n;
        },
        contrastWCAG21: function (e, t) {
            (e = L(e)), (t = L(t));
            let r = Math.max(tc(e), 0),
                a = Math.max(tc(t), 0);
            return a > r && ([r, a] = [a, r]), (r + 0.05) / (a + 0.05);
        },
        contrastWeber: function (e, t) {
            (e = L(e)), (t = L(t));
            let r = Math.max(tc(e), 0),
                a = Math.max(tc(t), 0);
            return a > r && ([r, a] = [a, r]), 0 === a ? 5e4 : (r - a) / a;
        },
    });
function ty(e) {
    let [t, r, a] = O(e, A),
        n = t + 15 * r + 3 * a;
    return [(4 * t) / n, (9 * r) / n];
}
function tv(e) {
    let [t, r, a] = O(e, A),
        n = t + r + a;
    return [t / n, r / n];
}
var tC = Object.freeze({
    __proto__: null,
    register: function (e) {
        Object.defineProperty(e.prototype, "uv", {
            get() {
                return ty(this);
            },
        }),
            Object.defineProperty(e.prototype, "xy", {
                get() {
                    return tv(this);
                },
            });
    },
    uv: ty,
    xy: tv,
});
function tR(e, t, r = {}) {
    o(r) && (r = { method: r });
    let { method: a = B.deltaE, ...n } = r;
    for (let r in e2) if ("deltae" + a.toLowerCase() === r.toLowerCase()) return e2[r](e, t, n);
    throw TypeError(`Unknown deltaE method: ${a}`);
}
var t_ = Object.freeze({
    __proto__: null,
    darken: function (e, t = 0.25) {
        return D(e, [P.get("oklch", "lch"), "l"], (e) => e * (1 - t));
    },
    lighten: function (e, t = 0.25) {
        return D(e, [P.get("oklch", "lch"), "l"], (e) => e * (1 + t));
    },
});
function tB(e, t, r = 0.5, a = {}) {
    return ([e, t] = [L(e), L(t)]), "object" === s(r) && ([r, a] = [0.5, r]), tk(e, t, a)(r);
}
function tN(e, t, r = {}) {
    let a;
    tS(e) && (([a, r] = [e, t]), ([e, t] = a.rangeArgs.colors));
    let { maxDeltaE: n, deltaEMethod: o, steps: s = 2, maxSteps: i = 1e3, ...l } = r;
    a || (([e, t] = [L(e), L(t)]), (a = tk(e, t, l)));
    let c = tR(e, t),
        u = n > 0 ? Math.max(s, Math.ceil(c / n) + 1) : s,
        h = [];
    if ((void 0 !== i && (u = Math.min(u, i)), 1 === u)) h = [{ p: 0.5, color: a(0.5) }];
    else {
        let e = 1 / (u - 1);
        h = Array.from({ length: u }, (t, r) => {
            let n = r * e;
            return { p: n, color: a(n) };
        });
    }
    if (n > 0) {
        let e = h.reduce((e, t, r) => (0 === r ? 0 : Math.max(e, tR(t.color, h[r - 1].color, o))), 0);
        for (; e > n; ) {
            e = 0;
            for (let t = 1; t < h.length && h.length < i; t++) {
                let r = h[t - 1],
                    n = h[t],
                    o = (n.p + r.p) / 2,
                    s = a(o);
                (e = Math.max(e, tR(s, r.color), tR(s, n.color))), h.splice(t, 0, { p: o, color: a(o) }), t++;
            }
        }
    }
    return (h = h.map((e) => e.color));
}
function tk(e, t, r = {}) {
    if (tS(e)) {
        let [r, a] = [e, t];
        return tk(...r.rangeArgs.colors, { ...r.rangeArgs.options, ...a });
    }
    let { space: a, outputSpace: n, progression: o, premultiplied: s } = r;
    (e = L(e)), (t = L(t)), (e = ei(e)), (t = ei(t));
    let i = { colors: [e, t], options: r };
    if (
        ((a = a ? P.get(a) : P.registry[B.interpolationSpace] || e.space),
        (n = n ? P.get(n) : a),
        (e = e3(e, a)),
        (t = e3(t, a)),
        (e = e9(e)),
        (t = e9(t)),
        a.coords.h && "angle" === a.coords.h.type)
    ) {
        let n = (r.hue = r.hue || "shorter"),
            o = [a, "h"],
            [s, i] = [$(e, o), $(t, o)];
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
            D(e, o, s),
            D(t, o, i);
    }
    return (
        s && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = o ? o(r) : r;
                let i = e.coords.map((e, a) => f(e, t.coords[a], r)),
                    l = f(e.alpha, t.alpha, r),
                    c = { space: a, coords: i, alpha: l };
                return s && (c.coords = c.coords.map((e) => e / l)), n !== a && (c = e3(c, n)), c;
            },
            { rangeArgs: i },
        )
    );
}
function tS(e) {
    return "function" === s(e) && !!e.rangeArgs;
}
B.interpolationSpace = "lab";
var tx = Object.freeze({
        __proto__: null,
        isRange: tS,
        mix: tB,
        range: tk,
        register: function (e) {
            e.defineFunction("mix", tB, { returns: "color" }),
                e.defineFunction("range", tk, { returns: "function<color>" }),
                e.defineFunction("steps", tN, { returns: "array<color>" });
        },
        steps: tN,
    }),
    tz = new P({
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
                [s, i, l] = [NaN, 0, (r + t) / 2],
                c = t - r;
            if (0 !== c) {
                switch (((i = 0 === l || 1 === l ? 0 : (t - l) / Math.min(l, 1 - l)), t)) {
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
    tI = new P({
        id: "hsv",
        name: "HSV",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
        },
        base: tz,
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
    tL = new P({
        id: "hwb",
        name: "HWB",
        coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
        },
        base: tI,
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
    tP = new E({
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
    tj = new E({
        id: "a98rgb",
        cssId: "a98-rgb",
        name: "Adobe\xae 98 RGB compatible",
        base: tP,
        toBase: (e) => e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
        fromBase: (e) => e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
    }),
    tA = new E({
        id: "prophoto-linear",
        cssId: "--prophoto-rgb-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: H,
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
let tE = 1 / 512,
    tO = 16 / 512;
var t$ = new E({
        id: "prophoto",
        cssId: "prophoto-rgb",
        name: "ProPhoto",
        base: tA,
        toBase: (e) => e.map((e) => (e < tO ? e / 16 : e ** 1.8)),
        fromBase: (e) => e.map((e) => (e >= tE ? e ** (1 / 1.8) : 16 * e)),
    }),
    tq = new P({
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
let tD = N.D65,
    tH = 216 / 24389,
    tT = 24389 / 27,
    [tW, tG] = ty({ space: A, coords: tD });
var tX = new P({
        id: "luv",
        name: "Luv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
        },
        white: tD,
        base: A,
        fromBase(e) {
            let t = [c(e[0]), c(e[1]), c(e[2])],
                r = t[1],
                [a, n] = ty({ space: A, coords: t });
            if (!Number.isFinite(a) || !Number.isFinite(n)) return [0, 0, 0];
            let o = r <= tH ? tT * r : 116 * Math.cbrt(r) - 16;
            return [o, 13 * o * (a - tW), 13 * o * (n - tG)];
        },
        toBase(e) {
            let [t, r, a] = e;
            if (0 === t || l(t)) return [0, 0, 0];
            (r = c(r)), (a = c(a));
            let n = r / (13 * t) + tW,
                o = a / (13 * t) + tG,
                s = t <= 8 ? t / tT : Math.pow((t + 16) / 116, 3);
            return [((9 * n) / (4 * o)) * s, s, ((12 - 3 * n - 20 * o) / (4 * o)) * s];
        },
        formats: {
            color: {
                id: "--luv",
                coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"],
            },
        },
    }),
    tY = new P({
        id: "lchuv",
        name: "LChuv",
        coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            c: { refRange: [0, 220], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: tX,
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
    tF = 24389 / 27,
    tJ = tr[0][0],
    tQ = tr[0][1],
    tU = tr[0][2],
    tV = tr[1][0],
    tK = tr[1][1],
    t5 = tr[1][2],
    t0 = tr[2][0],
    t2 = tr[2][1],
    t1 = tr[2][2];
function t9(e, t, r) {
    let a = t / (Math.sin(r) - e * Math.cos(r));
    return a < 0 ? 1 / 0 : a;
}
function t6(e) {
    let t = Math.pow(e + 16, 3) / 1560896,
        r = t > tZ ? t : e / tF,
        a = r * (284517 * tJ - 94839 * tU),
        n = r * (838422 * tU + 769860 * tQ + 731718 * tJ),
        o = r * (632260 * tU - 126452 * tQ),
        s = r * (284517 * tV - 94839 * t5),
        i = r * (838422 * t5 + 769860 * tK + 731718 * tV),
        l = r * (632260 * t5 - 126452 * tK),
        c = r * (284517 * t0 - 94839 * t1),
        u = r * (838422 * t1 + 769860 * t2 + 731718 * t0),
        h = r * (632260 * t1 - 126452 * t2);
    return {
        r0s: a / o,
        r0i: (n * e) / o,
        r1s: a / (o + 126452),
        r1i: ((n - 769860) * e) / (o + 126452),
        g0s: s / l,
        g0i: (i * e) / l,
        g1s: s / (l + 126452),
        g1i: ((i - 769860) * e) / (l + 126452),
        b0s: c / h,
        b0i: (u * e) / h,
        b1s: c / (h + 126452),
        b1i: ((u - 769860) * e) / (h + 126452),
    };
}
function t8(e, t) {
    let r = (t / 360) * Math.PI * 2;
    return Math.min(
        t9(e.r0s, e.r0i, r),
        t9(e.r1s, e.r1i, r),
        t9(e.g0s, e.g0i, r),
        t9(e.g1s, e.g1i, r),
        t9(e.b0s, e.b0i, r),
        t9(e.b1s, e.b1i, r),
    );
}
var t3 = new P({
    id: "hsluv",
    name: "HSLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tY,
    gamutSpace: ti,
    fromBase(e) {
        let t,
            [r, a, n] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (a / t8(t6(r), n)) * 100),
            [n, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, a, n] = [c(e[0]), c(e[1]), c(e[2])];
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
var re = new P({
    id: "hpluv",
    name: "HPLuv",
    coords: {
        h: { refRange: [0, 360], type: "angle", name: "Hue" },
        s: { range: [0, 100], name: "Saturation" },
        l: { range: [0, 100], name: "Lightness" },
    },
    base: tY,
    gamutSpace: "self",
    fromBase(e) {
        let t,
            [r, a, n] = [c(e[0]), c(e[1]), c(e[2])];
        return (
            r > 99.9999999 ? ((t = 0), (r = 100)) : r < 1e-8 ? ((t = 0), (r = 0)) : (t = (a / t7(t6(r))) * 100),
            [n, t, r]
        );
    },
    toBase(e) {
        let t,
            [r, a, n] = [c(e[0]), c(e[1]), c(e[2])];
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
var rn = new E({
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
    ro = new E({
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
function rl(e, t, r = "Bradford") {
    let a = rs[r],
        [o, s, i] = n(a.toCone_M, e),
        [l, c, u] = n(a.toCone_M, t),
        h = n(
            [
                [l / o, 0, 0],
                [0, c / s, 0],
                [0, 0, u / i],
            ],
            a.toCone_M,
        );
    return n(a.fromCone_M, h);
}
_.add("chromatic-adaptation-start", (e) => {
    e.options.method && (e.M = rl(e.W1, e.W2, e.options.method));
}),
    _.add("chromatic-adaptation-end", (e) => {
        e.M || (e.M = rl(e.W1, e.W2, e.options.method));
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
    Object.assign(N, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435],
    }),
    (N.ACES = [0.32168 / 0.33767, 1, 1.0088251843515859]);
var rc = new E({
    id: "acescg",
    cssId: "--acescg",
    name: "ACEScg",
    coords: {
        r: { range: [0, 65504], name: "Red" },
        g: { range: [0, 65504], name: "Green" },
        b: { range: [0, 65504], name: "Blue" },
    },
    referred: "scene",
    white: N.ACES,
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
    A98RGB: tj,
    A98RGB_Linear: tP,
    ACEScc: new E({
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
    CAM16_JMh: eZ,
    HCT: eK,
    HPLuv: re,
    HSL: tz,
    HSLuv: t3,
    HSV: tI,
    HWB: tL,
    ICTCP: ez,
    JzCzHz: ey,
    Jzazbz: ew,
    LCH: F,
    LCHuv: tY,
    Lab: Y,
    Lab_D65: tM,
    Luv: tX,
    OKLCH: tq,
    OKLab: en,
    P3: tl,
    P3_Linear: tt,
    ProPhoto: t$,
    ProPhoto_Linear: tA,
    REC_2020: te,
    REC_2020_Linear: e7,
    REC_2100_HLG: ro,
    REC_2100_PQ: rn,
    XYZ_ABS_D65: eu,
    XYZ_D50: H,
    XYZ_D65: A,
    sRGB: ti,
    sRGB_Linear: ta,
});
class rm {
    constructor(...e) {
        let t, r, a, n;
        1 === e.length && (t = L(e[0])),
            t ? ((r = t.space || t.spaceId), (a = t.coords), (n = t.alpha)) : ([r, a, n] = e),
            Object.defineProperty(this, "space", { value: P.get(r), writable: !1, enumerable: !0, configurable: !0 }),
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
        return new rm(this.space, this.coords, this.alpha);
    }
    toJSON() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
    }
    display(...e) {
        let t = (function (e, { space: t = B.display_space, ...r } = {}) {
            let n = e4(e, r);
            if ("u" < typeof CSS || CSS.supports("color", n) || !B.display_space) (n = new String(n)).color = e;
            else {
                let o = e;
                if (
                    (e.coords.some(l) || l(e.alpha)) &&
                    !(a ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
                    (((o = ei(e)).coords = o.coords.map(c)),
                    (o.alpha = c(o.alpha)),
                    (n = e4(o, r)),
                    CSS.supports("color", n))
                )
                    return ((n = new String(n)).color = o), n;
                (n = new String(e4((o = e3(o, t)), r))).color = o;
            }
            return n;
        })(this, ...e);
        return (t.color = new rm(t.color)), t;
    }
    static get(e, ...t) {
        return e instanceof rm ? e : new rm(e, ...t);
    }
    static defineFunction(e, t, r = t) {
        let { instance: a = !0, returns: n } = r,
            o = function (...e) {
                let r = t(...e);
                if ("color" === n) r = rm.get(r);
                else if ("function<color>" === n) {
                    let e = r;
                    Object.assign(
                        (r = function (...t) {
                            let r = e(...t);
                            return rm.get(r);
                        }),
                        e,
                    );
                } else "array<color>" === n && (r = r.map((e) => rm.get(e)));
                return r;
            };
        e in rm || (rm[e] = o),
            a &&
                (rm.prototype[e] = function (...e) {
                    return o(this, ...e);
                });
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
    get: $,
    getAll: O,
    set: D,
    setAll: q,
    to: e3,
    equals: function (e, t) {
        return (
            (e = L(e)),
            (t = L(t)),
            e.space === t.space && e.alpha === t.alpha && e.coords.every((e, r) => e === t.coords[r])
        );
    },
    inGamut: es,
    toGamut: e9,
    distance: el,
    toString: e4,
}),
Object.assign(rm, { util: R, hooks: _, WHITES: N, Space: P, spaces: P.registry, parse: I, defaults: B }),
Object.keys(rh)))
    P.register(rh[e]);
for (let e in P.registry) rd(e, P.registry[e]);
function rd(e, t) {
    let r = e.replace(/-/g, "_");
    Object.defineProperty(rm.prototype, r, {
        get() {
            let r = this.getAll(e);
            return "u" < typeof Proxy
                ? r
                : new Proxy(r, {
                      has: (e, r) => {
                          try {
                              return P.resolveCoord([t, r]), !0;
                          } catch (e) {}
                          return Reflect.has(e, r);
                      },
                      get: (e, r, a) => {
                          if (r && "symbol" != typeof r && !(r in e)) {
                              let { index: a } = P.resolveCoord([t, r]);
                              if (a >= 0) return e[a];
                          }
                          return Reflect.get(e, r, a);
                      },
                      set: (r, a, n, o) => {
                          if ((a && "symbol" != typeof a && !(a in r)) || a >= 0) {
                              let { index: o } = P.resolveCoord([t, a]);
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
_.add("colorspace-init-end", (e) => {
    rd(e.id, e),
        e.aliases?.forEach((t) => {
            rd(t, e);
        });
}),
    rm.extend(e2),
    rm.extend({ deltaE: tR }),
    Object.assign(rm, { deltaEMethods: e2 }),
    rm.extend(t_),
    rm.extend({
        contrast: function (e, t, r = {}) {
            o(r) && (r = { algorithm: r });
            let { algorithm: a, ...n } = r;
            if (!a) {
                let e = Object.keys(tw)
                    .map((e) => e.replace(/^contrast/, ""))
                    .join(", ");
                throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`);
            }
            for (let r in ((e = L(e)), (t = L(t)), tw))
                if ("contrast" + a.toLowerCase() === r.toLowerCase()) return tw[r](e, t, n);
            throw TypeError(`Unknown contrast algorithm: ${a}`);
        },
    }),
    rm.extend(tC),
    rm.extend(th),
    rm.extend(tx),
    rm.extend(tw);
