let r = /\s+/g;
class i {
    constructor(e, t) {
        if (((t = a(t)), e instanceof i))
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            else return new i(e.raw, t);
        if (e instanceof o) return (this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this;
        if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e.trim().replace(r, " ")),
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
        let t = ((this.options.includePrerelease && h) | (this.options.loose && p)) + ":" + e,
            n = s.get(t);
        if (n) return n;
        let r = this.options.loose,
            i = r ? d[c.HYPHENRANGELOOSE] : d[c.HYPHENRANGE];
        l("hyphen replace", (e = e.replace(i, D(this.options.includePrerelease)))),
            l("comparator trim", (e = e.replace(d[c.COMPARATORTRIM], _))),
            l("tilde trim", (e = e.replace(d[c.TILDETRIM], f))),
            l("caret trim", (e = e.replace(d[c.CARETTRIM], E)));
        let a = e
            .split(" ")
            .map((e) => I(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => b(e, this.options));
        r && (a = a.filter((e) => (l("loose invalid filter", e, this.options), !!e.match(d[c.COMPARATORLOOSE])))),
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
        if (!(e instanceof i)) throw TypeError("a Range is required");
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
e.exports = i;
let s = new (n(678884))(),
    a = n(131077),
    o = n(46666),
    l = n(692714),
    u = n(864886),
    { safeRe: d, t: c, comparatorTrimReplace: _, tildeTrimReplace: f, caretTrimReplace: E } = n(64672),
    { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: p } = n(376780),
    m = (e) => "<0.0.0-0" === e.value,
    g = (e) => "" === e.value,
    A = (e, t) => {
        let n = !0,
            r = e.slice(),
            i = r.pop();
        for (; n && r.length; ) (n = r.every((e) => i.intersects(e, t))), (i = r.pop());
        return n;
    },
    I = (e, t) => (
        l("comp", e, t),
        l("caret", (e = N(e, t))),
        l("tildes", (e = S(e, t))),
        l("xrange", (e = R(e, t))),
        l("stars", (e = C(e, t))),
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
        let n = t.loose ? d[c.TILDELOOSE] : d[c.TILDE];
        return e.replace(n, (t, n, r, i, s) => {
            let a;
            return (
                l("tilde", e, t, n, r, i, s),
                T(n)
                    ? (a = "")
                    : T(r)
                      ? (a = `>=${n}.0.0 <${+n + 1}.0.0-0`)
                      : T(i)
                        ? (a = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`)
                        : s
                          ? (l("replaceTilde pr", s), (a = `>=${n}.${r}.${i}-${s} <${n}.${+r + 1}.0-0`))
                          : (a = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`),
                l("tilde return", a),
                a
            );
        });
    },
    N = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => O(e, t))
            .join(" "),
    O = (e, t) => {
        l("caret", e, t);
        let n = t.loose ? d[c.CARETLOOSE] : d[c.CARET],
            r = t.includePrerelease ? "-0" : "";
        return e.replace(n, (t, n, i, s, a) => {
            let o;
            return (
                l("caret", e, t, n, i, s, a),
                T(n)
                    ? (o = "")
                    : T(i)
                      ? (o = `>=${n}.0.0${r} <${+n + 1}.0.0-0`)
                      : T(s)
                        ? (o =
                              "0" === n
                                  ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0`
                                  : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0`)
                        : a
                          ? (l("replaceCaret pr", a),
                            (o =
                                "0" === n
                                    ? "0" === i
                                        ? `>=${n}.${i}.${s}-${a} <${n}.${i}.${+s + 1}-0`
                                        : `>=${n}.${i}.${s}-${a} <${n}.${+i + 1}.0-0`
                                    : `>=${n}.${i}.${s}-${a} <${+n + 1}.0.0-0`))
                          : (l("no pr"),
                            (o =
                                "0" === n
                                    ? "0" === i
                                        ? `>=${n}.${i}.${s}${r} <${n}.${i}.${+s + 1}-0`
                                        : `>=${n}.${i}.${s}${r} <${n}.${+i + 1}.0-0`
                                    : `>=${n}.${i}.${s} <${+n + 1}.0.0-0`)),
                l("caret return", o),
                o
            );
        });
    },
    R = (e, t) => (
        l("replaceXRanges", e, t),
        e
            .split(/\s+/)
            .map((e) => v(e, t))
            .join(" ")
    ),
    v = (e, t) => {
        e = e.trim();
        let n = t.loose ? d[c.XRANGELOOSE] : d[c.XRANGE];
        return e.replace(n, (n, r, i, s, a, o) => {
            l("xRange", e, n, r, i, s, a, o);
            let u = T(i),
                d = u || T(s),
                c = d || T(a);
            return (
                "=" === r && c && (r = ""),
                (o = t.includePrerelease ? "-0" : ""),
                u
                    ? (n = ">" === r || "<" === r ? "<0.0.0-0" : "*")
                    : r && c
                      ? (d && (s = 0),
                        (a = 0),
                        ">" === r
                            ? ((r = ">="), d ? ((i = +i + 1), (s = 0)) : (s = +s + 1), (a = 0))
                            : "<=" === r && ((r = "<"), d ? (i = +i + 1) : (s = +s + 1)),
                        "<" === r && (o = "-0"),
                        (n = `${r + i}.${s}.${a}${o}`))
                      : d
                        ? (n = `>=${i}.0.0${o} <${+i + 1}.0.0-0`)
                        : c && (n = `>=${i}.${s}.0${o} <${i}.${+s + 1}.0-0`),
                l("xRange return", n),
                n
            );
        });
    },
    C = (e, t) => (l("replaceStars", e, t), e.trim().replace(d[c.STAR], "")),
    b = (e, t) => (l("replaceGTE0", e, t), e.trim().replace(d[t.includePrerelease ? c.GTE0PRE : c.GTE0], "")),
    D = (e) => (t, n, r, i, s, a, o, l, u, d, c, _) => (
        (n = T(r)
            ? ""
            : T(i)
              ? `>=${r}.0.0${e ? "-0" : ""}`
              : T(s)
                ? `>=${r}.${i}.0${e ? "-0" : ""}`
                : a
                  ? `>=${n}`
                  : `>=${n}${e ? "-0" : ""}`),
        (l = T(u)
            ? ""
            : T(d)
              ? `<${+u + 1}.0.0-0`
              : T(c)
                ? `<${u}.${+d + 1}.0-0`
                : _
                  ? `<=${u}.${d}.${c}-${_}`
                  : e
                    ? `<${u}.${d}.${+c + 1}-0`
                    : `<=${l}`),
        `${n} ${l}`.trim()
    ),
    L = (e, t, n) => {
        for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let n = 0; n < e.length; n++)
                if ((l(e[n].semver), e[n].semver !== o.ANY && e[n].semver.prerelease.length > 0)) {
                    let r = e[n].semver;
                    if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0;
                }
            return !1;
        }
        return !0;
    };
