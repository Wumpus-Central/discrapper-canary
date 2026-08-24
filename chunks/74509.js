let n = /\s+/g;
class o {
    constructor(e, t) {
        if (((t = a(t)), e instanceof o))
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            else return new o(e.raw, t);
        if (e instanceof s) return (this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this;
        if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e.trim().replace(n, " ")),
            (this.set = this.raw
                .split("||")
                .map((e) => this.parseRange(e.trim()))
                .filter((e) => e.length)),
            !this.set.length)
        )
            throw TypeError(`Invalid SemVer Range: ${this.raw}`);
        if (this.set.length > 1) {
            const e = this.set[0];
            if (((this.set = this.set.filter((e) => !y(e[0]))), 0 === this.set.length)) this.set = [e];
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
        let t = ((this.options.includePrerelease && m) | (this.options.loose && v)) + ":" + e,
            r = i.get(t);
        if (r) return r;
        let n = this.options.loose,
            o = n ? c[f.HYPHENRANGELOOSE] : c[f.HYPHENRANGE];
        l("hyphen replace", (e = e.replace(o, A(this.options.includePrerelease)))),
            l("comparator trim", (e = e.replace(c[f.COMPARATORTRIM], p))),
            l("tilde trim", (e = e.replace(c[f.TILDETRIM], d))),
            l("caret trim", (e = e.replace(c[f.CARETTRIM], h)));
        let a = e
            .split(" ")
            .map((e) => w(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => P(e, this.options));
        n && (a = a.filter((e) => (l("loose invalid filter", e, this.options), !!e.match(c[f.COMPARATORLOOSE])))),
            l("range list", a);
        let u = new Map();
        for (let e of a.map((e) => new s(e, this.options))) {
            if (y(e)) return [e];
            u.set(e.value, e);
        }
        u.size > 1 && u.has("") && u.delete("");
        let g = [...u.values()];
        return i.set(t, g), g;
    }
    intersects(e, t) {
        if (!(e instanceof o)) throw TypeError("a Range is required");
        return this.set.some(
            (r) => b(r, t) && e.set.some((e) => b(e, t) && r.every((r) => e.every((e) => r.intersects(e, t)))),
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
        for (let t = 0; t < this.set.length; t++) if (O(this.set[t], e, this.options)) return !0;
        return !1;
    }
}
e.exports = o;
let i = new (r(678884))(),
    a = r(131077),
    s = r(46666),
    l = r(692714),
    u = r(864886),
    { safeRe: c, t: f, comparatorTrimReplace: p, tildeTrimReplace: d, caretTrimReplace: h } = r(64672),
    { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: v } = r(376780),
    y = (e) => "<0.0.0-0" === e.value,
    g = (e) => "" === e.value,
    b = (e, t) => {
        let r = !0,
            n = e.slice(),
            o = n.pop();
        for (; r && n.length; ) (r = n.every((e) => o.intersects(e, t))), (o = n.pop());
        return r;
    },
    w = (e, t) => (
        l("comp", e, t),
        l("caret", (e = E(e, t))),
        l("tildes", (e = S(e, t))),
        l("xrange", (e = C(e, t))),
        l("stars", (e = M(e, t))),
        e
    ),
    _ = (e) => !e || "x" === e.toLowerCase() || "*" === e,
    S = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => x(e, t))
            .join(" "),
    x = (e, t) => {
        let r = t.loose ? c[f.TILDELOOSE] : c[f.TILDE];
        return e.replace(r, (t, r, n, o, i) => {
            let a;
            return (
                l("tilde", e, t, r, n, o, i),
                _(r)
                    ? (a = "")
                    : _(n)
                      ? (a = `>=${r}.0.0 <${+r + 1}.0.0-0`)
                      : _(o)
                        ? (a = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0`)
                        : i
                          ? (l("replaceTilde pr", i), (a = `>=${r}.${n}.${o}-${i} <${r}.${+n + 1}.0-0`))
                          : (a = `>=${r}.${n}.${o} <${r}.${+n + 1}.0-0`),
                l("tilde return", a),
                a
            );
        });
    },
    E = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => k(e, t))
            .join(" "),
    k = (e, t) => {
        l("caret", e, t);
        let r = t.loose ? c[f.CARETLOOSE] : c[f.CARET],
            n = t.includePrerelease ? "-0" : "";
        return e.replace(r, (t, r, o, i, a) => {
            let s;
            return (
                l("caret", e, t, r, o, i, a),
                _(r)
                    ? (s = "")
                    : _(o)
                      ? (s = `>=${r}.0.0${n} <${+r + 1}.0.0-0`)
                      : _(i)
                        ? (s =
                              "0" === r
                                  ? `>=${r}.${o}.0${n} <${r}.${+o + 1}.0-0`
                                  : `>=${r}.${o}.0${n} <${+r + 1}.0.0-0`)
                        : a
                          ? (l("replaceCaret pr", a),
                            (s =
                                "0" === r
                                    ? "0" === o
                                        ? `>=${r}.${o}.${i}-${a} <${r}.${o}.${+i + 1}-0`
                                        : `>=${r}.${o}.${i}-${a} <${r}.${+o + 1}.0-0`
                                    : `>=${r}.${o}.${i}-${a} <${+r + 1}.0.0-0`))
                          : (l("no pr"),
                            (s =
                                "0" === r
                                    ? "0" === o
                                        ? `>=${r}.${o}.${i}${n} <${r}.${o}.${+i + 1}-0`
                                        : `>=${r}.${o}.${i}${n} <${r}.${+o + 1}.0-0`
                                    : `>=${r}.${o}.${i} <${+r + 1}.0.0-0`)),
                l("caret return", s),
                s
            );
        });
    },
    C = (e, t) => (
        l("replaceXRanges", e, t),
        e
            .split(/\s+/)
            .map((e) => T(e, t))
            .join(" ")
    ),
    T = (e, t) => {
        e = e.trim();
        let r = t.loose ? c[f.XRANGELOOSE] : c[f.XRANGE];
        return e.replace(r, (r, n, o, i, a, s) => {
            l("xRange", e, r, n, o, i, a, s);
            let u = _(o),
                c = u || _(i),
                f = c || _(a);
            return (
                "=" === n && f && (n = ""),
                (s = t.includePrerelease ? "-0" : ""),
                u
                    ? (r = ">" === n || "<" === n ? "<0.0.0-0" : "*")
                    : n && f
                      ? (c && (i = 0),
                        (a = 0),
                        ">" === n
                            ? ((n = ">="), c ? ((o = +o + 1), (i = 0)) : (i = +i + 1), (a = 0))
                            : "<=" === n && ((n = "<"), c ? (o = +o + 1) : (i = +i + 1)),
                        "<" === n && (s = "-0"),
                        (r = `${n + o}.${i}.${a}${s}`))
                      : c
                        ? (r = `>=${o}.0.0${s} <${+o + 1}.0.0-0`)
                        : f && (r = `>=${o}.${i}.0${s} <${o}.${+i + 1}.0-0`),
                l("xRange return", r),
                r
            );
        });
    },
    M = (e, t) => (l("replaceStars", e, t), e.trim().replace(c[f.STAR], "")),
    P = (e, t) => (l("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? f.GTE0PRE : f.GTE0], "")),
    A = (e) => (t, r, n, o, i, a, s, l, u, c, f, p) => (
        (r = _(n)
            ? ""
            : _(o)
              ? `>=${n}.0.0${e ? "-0" : ""}`
              : _(i)
                ? `>=${n}.${o}.0${e ? "-0" : ""}`
                : a
                  ? `>=${r}`
                  : `>=${r}${e ? "-0" : ""}`),
        (l = _(u)
            ? ""
            : _(c)
              ? `<${+u + 1}.0.0-0`
              : _(f)
                ? `<${u}.${+c + 1}.0-0`
                : p
                  ? `<=${u}.${c}.${f}-${p}`
                  : e
                    ? `<${u}.${c}.${+f + 1}-0`
                    : `<=${l}`),
        `${r} ${l}`.trim()
    ),
    O = (e, t, r) => {
        for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
        if (t.prerelease.length && !r.includePrerelease) {
            for (let r = 0; r < e.length; r++)
                if ((l(e[r].semver), e[r].semver !== s.ANY && e[r].semver.prerelease.length > 0)) {
                    let n = e[r].semver;
                    if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0;
                }
            return !1;
        }
        return !0;
    };
