let n = /\s+/g;
e.exports = class e {
    constructor(t, r) {
        if (((r = o(r)), t instanceof e))
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
            else return new e(t.raw, r);
        if (t instanceof a) return ((this.raw = t.value), (this.set = [[t]]), (this.formatted = void 0), this);
        if (
            ((this.options = r),
            (this.loose = !!r.loose),
            (this.includePrerelease = !!r.includePrerelease),
            (this.raw = t.trim().replace(n, " ")),
            (this.set = this.raw
                .split("||")
                .map((e) => this.parseRange(e.trim()))
                .filter((e) => e.length)),
            !this.set.length)
        )
            throw TypeError(`Invalid SemVer Range: ${this.raw}`);
        if (this.set.length > 1) {
            let e = this.set[0];
            if (((this.set = this.set.filter((e) => !v(e[0]))), 0 === this.set.length)) this.set = [e];
            else if (this.set.length > 1) {
                for (let e of this.set)
                    if (1 === e.length && y(e[0])) {
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
                    (e > 0 && (this.formatted += " "), (this.formatted += t[e].toString().trim()));
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
        let t = ((this.options.includePrerelease && h) | (this.options.loose && m)) + ":" + e,
            r = i.get(t);
        if (r) return r;
        let n = this.options.loose,
            o = n ? u[c.HYPHENRANGELOOSE] : u[c.HYPHENRANGE];
        (s("hyphen replace", (e = e.replace(o, A(this.options.includePrerelease)))),
            s("comparator trim", (e = e.replace(u[c.COMPARATORTRIM], f))),
            s("tilde trim", (e = e.replace(u[c.TILDETRIM], d))),
            s("caret trim", (e = e.replace(u[c.CARETTRIM], p))));
        let l = e
            .split(" ")
            .map((e) => b(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => P(e, this.options));
        (n && (l = l.filter((e) => (s("loose invalid filter", e, this.options), !!e.match(u[c.COMPARATORLOOSE])))),
            s("range list", l));
        let y = new Map();
        for (let e of l.map((e) => new a(e, this.options))) {
            if (v(e)) return [e];
            y.set(e.value, e);
        }
        y.size > 1 && y.has("") && y.delete("");
        let g = [...y.values()];
        return (i.set(t, g), g);
    }
    intersects(t, r) {
        if (!(t instanceof e)) throw TypeError("a Range is required");
        return this.set.some(
            (e) => g(e, r) && t.set.some((t) => g(t, r) && e.every((e) => t.every((t) => e.intersects(t, r)))),
        );
    }
    test(e) {
        if (!e) return !1;
        if ("string" == typeof e)
            try {
                e = new l(e, this.options);
            } catch (e) {
                return !1;
            }
        for (let t = 0; t < this.set.length; t++) if (I(this.set[t], e, this.options)) return !0;
        return !1;
    }
};
let i = new (r(678884))(),
    o = r(131077),
    a = r(46666),
    s = r(692714),
    l = r(864886),
    { safeRe: u, t: c, comparatorTrimReplace: f, tildeTrimReplace: d, caretTrimReplace: p } = r(64672),
    { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: m } = r(376780),
    v = (e) => "<0.0.0-0" === e.value,
    y = (e) => "" === e.value,
    g = (e, t) => {
        let r = !0,
            n = e.slice(),
            i = n.pop();
        for (; r && n.length;) ((r = n.every((e) => i.intersects(e, t))), (i = n.pop()));
        return r;
    },
    b = (e, t) => (
        s("comp", e, t),
        s("caret", (e = E(e, t))),
        s("tildes", (e = _(e, t))),
        s("xrange", (e = C(e, t))),
        s("stars", (e = T(e, t))),
        e
    ),
    w = (e) => !e || "x" === e.toLowerCase() || "*" === e,
    _ = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => S(e, t))
            .join(" "),
    S = (e, t) => {
        let r = t.loose ? u[c.TILDELOOSE] : u[c.TILDE];
        return e.replace(r, (t, r, n, i, o) => {
            let a;
            return (
                s("tilde", e, t, r, n, i, o),
                w(r)
                    ? (a = "")
                    : w(n)
                      ? (a = `>=${r}.0.0 <${+r + 1}.0.0-0`)
                      : w(i)
                        ? (a = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0`)
                        : o
                          ? (s("replaceTilde pr", o), (a = `>=${r}.${n}.${i}-${o} <${r}.${+n + 1}.0-0`))
                          : (a = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`),
                s("tilde return", a),
                a
            );
        });
    },
    E = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => x(e, t))
            .join(" "),
    x = (e, t) => {
        s("caret", e, t);
        let r = t.loose ? u[c.CARETLOOSE] : u[c.CARET],
            n = t.includePrerelease ? "-0" : "";
        return e.replace(r, (t, r, i, o, a) => {
            let l;
            return (
                s("caret", e, t, r, i, o, a),
                w(r)
                    ? (l = "")
                    : w(i)
                      ? (l = `>=${r}.0.0${n} <${+r + 1}.0.0-0`)
                      : w(o)
                        ? (l =
                              "0" === r
                                  ? `>=${r}.${i}.0${n} <${r}.${+i + 1}.0-0`
                                  : `>=${r}.${i}.0${n} <${+r + 1}.0.0-0`)
                        : a
                          ? (s("replaceCaret pr", a),
                            (l =
                                "0" === r
                                    ? "0" === i
                                        ? `>=${r}.${i}.${o}-${a} <${r}.${i}.${+o + 1}-0`
                                        : `>=${r}.${i}.${o}-${a} <${r}.${+i + 1}.0-0`
                                    : `>=${r}.${i}.${o}-${a} <${+r + 1}.0.0-0`))
                          : (s("no pr"),
                            (l =
                                "0" === r
                                    ? "0" === i
                                        ? `>=${r}.${i}.${o}${n} <${r}.${i}.${+o + 1}-0`
                                        : `>=${r}.${i}.${o}${n} <${r}.${+i + 1}.0-0`
                                    : `>=${r}.${i}.${o} <${+r + 1}.0.0-0`)),
                s("caret return", l),
                l
            );
        });
    },
    C = (e, t) => (
        s("replaceXRanges", e, t),
        e
            .split(/\s+/)
            .map((e) => k(e, t))
            .join(" ")
    ),
    k = (e, t) => {
        e = e.trim();
        let r = t.loose ? u[c.XRANGELOOSE] : u[c.XRANGE];
        return e.replace(r, (r, n, i, o, a, l) => {
            s("xRange", e, r, n, i, o, a, l);
            let u = w(i),
                c = u || w(o),
                f = c || w(a);
            return (
                "=" === n && f && (n = ""),
                (l = t.includePrerelease ? "-0" : ""),
                u
                    ? (r = ">" === n || "<" === n ? "<0.0.0-0" : "*")
                    : n && f
                      ? (c && (o = 0),
                        (a = 0),
                        ">" === n
                            ? ((n = ">="), c ? ((i = +i + 1), (o = 0)) : (o = +o + 1), (a = 0))
                            : "<=" === n && ((n = "<"), c ? (i = +i + 1) : (o = +o + 1)),
                        "<" === n && (l = "-0"),
                        (r = `${n + i}.${o}.${a}${l}`))
                      : c
                        ? (r = `>=${i}.0.0${l} <${+i + 1}.0.0-0`)
                        : f && (r = `>=${i}.${o}.0${l} <${i}.${+o + 1}.0-0`),
                s("xRange return", r),
                r
            );
        });
    },
    T = (e, t) => (s("replaceStars", e, t), e.trim().replace(u[c.STAR], "")),
    P = (e, t) => (s("replaceGTE0", e, t), e.trim().replace(u[t.includePrerelease ? c.GTE0PRE : c.GTE0], "")),
    A = (e) => (t, r, n, i, o, a, s, l, u, c, f, d) => (
        (r = w(n)
            ? ""
            : w(i)
              ? `>=${n}.0.0${e ? "-0" : ""}`
              : w(o)
                ? `>=${n}.${i}.0${e ? "-0" : ""}`
                : a
                  ? `>=${r}`
                  : `>=${r}${e ? "-0" : ""}`),
        (l = w(u)
            ? ""
            : w(c)
              ? `<${+u + 1}.0.0-0`
              : w(f)
                ? `<${u}.${+c + 1}.0-0`
                : d
                  ? `<=${u}.${c}.${f}-${d}`
                  : e
                    ? `<${u}.${c}.${+f + 1}-0`
                    : `<=${l}`),
        `${r} ${l}`.trim()
    ),
    I = (e, t, r) => {
        for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
        if (t.prerelease.length && !r.includePrerelease) {
            for (let r = 0; r < e.length; r++)
                if ((s(e[r].semver), e[r].semver !== a.ANY && e[r].semver.prerelease.length > 0)) {
                    let n = e[r].semver;
                    if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0;
                }
            return !1;
        }
        return !0;
    };
