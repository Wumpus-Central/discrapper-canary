let i = /\s+/g;
class r {
    constructor(e, t) {
        if (((t = a(t)), e instanceof r))
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            else return new r(e.raw, t);
        if (e instanceof o) return (this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this;
        if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e.trim().replace(i, " ")),
            (this.set = this.raw
                .split("||")
                .map((e) => this.parseRange(e.trim()))
                .filter((e) => e.length)),
            !this.set.length)
        )
            throw TypeError(`Invalid SemVer Range: ${this.raw}`);
        if (this.set.length > 1) {
            const e = this.set[0];
            if (((this.set = this.set.filter((e) => !m(e[0]))), 0 === this.set.length)) this.set = [e];
            else if (this.set.length > 1) {
                for (const e of this.set)
                    if (1 === e.length && g(e[0])) {
                        this.set = [e];
                        break;
                    }
            }
        }
        this.formatted = void 0;
    }
    get range() {
        if (void 0 === this.formatted) {
            this.formatted = "";
            for (let e = 0; e < this.set.length; e++) {
                e > 0 && (this.formatted += "||");
                let t = this.set[e];
                for (let e = 0; e < t.length; e++)
                    e > 0 && (this.formatted += " "), (this.formatted += t[e].toString().trim());
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(e) {
        let t = ((this.options.includePrerelease && p) | (this.options.loose && E)) + ":" + e,
            n = s.get(t);
        if (n) return n;
        let i = this.options.loose,
            r = i ? c[d.HYPHENRANGELOOSE] : c[d.HYPHENRANGE];
        l("hyphen replace", (e = e.replace(r, D(this.options.includePrerelease)))),
            l("comparator trim", (e = e.replace(c[d.COMPARATORTRIM], _))),
            l("tilde trim", (e = e.replace(c[d.TILDETRIM], h))),
            l("caret trim", (e = e.replace(c[d.CARETTRIM], f)));
        let a = e
            .split(" ")
            .map((e) => I(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => b(e, this.options));
        i && (a = a.filter((e) => (l("loose invalid filter", e, this.options), !!e.match(c[d.COMPARATORLOOSE])))),
            l("range list", a);
        let u = new Map();
        for (let e of a.map((e) => new o(e, this.options))) {
            if (m(e)) return [e];
            u.set(e.value, e);
        }
        u.size > 1 && u.has("") && u.delete("");
        let g = [...u.values()];
        return s.set(t, g), g;
    }
    intersects(e, t) {
        if (!(e instanceof r)) throw TypeError("a Range is required");
        return this.set.some(
            (n) => A(n, t) && e.set.some((e) => A(e, t) && n.every((n) => e.every((e) => n.intersects(e, t)))),
        );
    }
    test(e) {
        if (!e) return !1;
        if ("string" == typeof e)
            try {
                e = new u(e, this.options);
            } catch (e) {
                return !1;
            }
        for (let t = 0; t < this.set.length; t++) if (L(this.set[t], e, this.options)) return !0;
        return !1;
    }
}
e.exports = r;
let s = new (n(678884))(),
    a = n(131077),
    o = n(46666),
    l = n(692714),
    u = n(864886),
    { safeRe: c, t: d, comparatorTrimReplace: _, tildeTrimReplace: h, caretTrimReplace: f } = n(64672),
    { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: E } = n(376780),
    m = (e) => "<0.0.0-0" === e.value,
    g = (e) => "" === e.value,
    A = (e, t) => {
        let n = !0,
            i = e.slice(),
            r = i.pop();
        for (; n && i.length; ) (n = i.every((e) => r.intersects(e, t))), (r = i.pop());
        return n;
    },
    I = (e, t) => (
        l("comp", e, t),
        l("caret", (e = C(e, t))),
        l("tildes", (e = S(e, t))),
        l("xrange", (e = v(e, t))),
        l("stars", (e = O(e, t))),
        e
    ),
    T = (e) => !e || "x" === e.toLowerCase() || "*" === e,
    S = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => y(e, t))
            .join(" "),
    y = (e, t) => {
        let n = t.loose ? c[d.TILDELOOSE] : c[d.TILDE];
        return e.replace(n, (t, n, i, r, s) => {
            let a;
            return (
                l("tilde", e, t, n, i, r, s),
                T(n)
                    ? (a = "")
                    : T(i)
                      ? (a = `>=${n}.0.0 <${+n + 1}.0.0-0`)
                      : T(r)
                        ? (a = `>=${n}.${i}.0 <${n}.${+i + 1}.0-0`)
                        : s
                          ? (l("replaceTilde pr", s), (a = `>=${n}.${i}.${r}-${s} <${n}.${+i + 1}.0-0`))
                          : (a = `>=${n}.${i}.${r} <${n}.${+i + 1}.0-0`),
                l("tilde return", a),
                a
            );
        });
    },
    C = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => N(e, t))
            .join(" "),
    N = (e, t) => {
        l("caret", e, t);
        let n = t.loose ? c[d.CARETLOOSE] : c[d.CARET],
            i = t.includePrerelease ? "-0" : "";
        return e.replace(n, (t, n, r, s, a) => {
            let o;
            return (
                l("caret", e, t, n, r, s, a),
                T(n)
                    ? (o = "")
                    : T(r)
                      ? (o = `>=${n}.0.0${i} <${+n + 1}.0.0-0`)
                      : T(s)
                        ? (o =
                              "0" === n
                                  ? `>=${n}.${r}.0${i} <${n}.${+r + 1}.0-0`
                                  : `>=${n}.${r}.0${i} <${+n + 1}.0.0-0`)
                        : a
                          ? (l("replaceCaret pr", a),
                            (o =
                                "0" === n
                                    ? "0" === r
                                        ? `>=${n}.${r}.${s}-${a} <${n}.${r}.${+s + 1}-0`
                                        : `>=${n}.${r}.${s}-${a} <${n}.${+r + 1}.0-0`
                                    : `>=${n}.${r}.${s}-${a} <${+n + 1}.0.0-0`))
                          : (l("no pr"),
                            (o =
                                "0" === n
                                    ? "0" === r
                                        ? `>=${n}.${r}.${s}${i} <${n}.${r}.${+s + 1}-0`
                                        : `>=${n}.${r}.${s}${i} <${n}.${+r + 1}.0-0`
                                    : `>=${n}.${r}.${s} <${+n + 1}.0.0-0`)),
                l("caret return", o),
                o
            );
        });
    },
    v = (e, t) => (
        l("replaceXRanges", e, t),
        e
            .split(/\s+/)
            .map((e) => R(e, t))
            .join(" ")
    ),
    R = (e, t) => {
        e = e.trim();
        let n = t.loose ? c[d.XRANGELOOSE] : c[d.XRANGE];
        return e.replace(n, (n, i, r, s, a, o) => {
            l("xRange", e, n, i, r, s, a, o);
            let u = T(r),
                c = u || T(s),
                d = c || T(a);
            return (
                "=" === i && d && (i = ""),
                (o = t.includePrerelease ? "-0" : ""),
                u
                    ? (n = ">" === i || "<" === i ? "<0.0.0-0" : "*")
                    : i && d
                      ? (c && (s = 0),
                        (a = 0),
                        ">" === i
                            ? ((i = ">="), c ? ((r = +r + 1), (s = 0)) : (s = +s + 1), (a = 0))
                            : "<=" === i && ((i = "<"), c ? (r = +r + 1) : (s = +s + 1)),
                        "<" === i && (o = "-0"),
                        (n = `${i + r}.${s}.${a}${o}`))
                      : c
                        ? (n = `>=${r}.0.0${o} <${+r + 1}.0.0-0`)
                        : d && (n = `>=${r}.${s}.0${o} <${r}.${+s + 1}.0-0`),
                l("xRange return", n),
                n
            );
        });
    },
    O = (e, t) => (l("replaceStars", e, t), e.trim().replace(c[d.STAR], "")),
    b = (e, t) => (l("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? d.GTE0PRE : d.GTE0], "")),
    D = (e) => (t, n, i, r, s, a, o, l, u, c, d, _) => (
        (n = T(i)
            ? ""
            : T(r)
              ? `>=${i}.0.0${e ? "-0" : ""}`
              : T(s)
                ? `>=${i}.${r}.0${e ? "-0" : ""}`
                : a
                  ? `>=${n}`
                  : `>=${n}${e ? "-0" : ""}`),
        (l = T(u)
            ? ""
            : T(c)
              ? `<${+u + 1}.0.0-0`
              : T(d)
                ? `<${u}.${+c + 1}.0-0`
                : _
                  ? `<=${u}.${c}.${d}-${_}`
                  : e
                    ? `<${u}.${c}.${+d + 1}-0`
                    : `<=${l}`),
        `${n} ${l}`.trim()
    ),
    L = (e, t, n) => {
        for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let n = 0; n < e.length; n++)
                if ((l(e[n].semver), e[n].semver !== o.ANY && e[n].semver.prerelease.length > 0)) {
                    let i = e[n].semver;
                    if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0;
                }
            return !1;
        }
        return !0;
    };
