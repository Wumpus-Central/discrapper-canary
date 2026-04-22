var r,
    i = n(72290);
(t = e.exports = f),
    (r =
        "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift("SEMVER"), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = "2.0.0");
var s = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
    a = (t.re = []),
    o = (t.src = []),
    l = (t.tokens = {}),
    u = 0;
function d(e) {
    l[e] = u++;
}
d("NUMERICIDENTIFIER"),
    (o[l.NUMERICIDENTIFIER] = "0|[1-9]\\d*"),
    d("NUMERICIDENTIFIERLOOSE"),
    (o[l.NUMERICIDENTIFIERLOOSE] = "[0-9]+"),
    d("NONNUMERICIDENTIFIER"),
    (o[l.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
    d("MAINVERSION"),
    (o[l.MAINVERSION] =
        "(" + o[l.NUMERICIDENTIFIER] + ")\\.(" + o[l.NUMERICIDENTIFIER] + ")\\.(" + o[l.NUMERICIDENTIFIER] + ")"),
    d("MAINVERSIONLOOSE"),
    (o[l.MAINVERSIONLOOSE] =
        "(" +
        o[l.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        o[l.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        o[l.NUMERICIDENTIFIERLOOSE] +
        ")"),
    d("PRERELEASEIDENTIFIER"),
    (o[l.PRERELEASEIDENTIFIER] = "(?:" + o[l.NUMERICIDENTIFIER] + "|" + o[l.NONNUMERICIDENTIFIER] + ")"),
    d("PRERELEASEIDENTIFIERLOOSE"),
    (o[l.PRERELEASEIDENTIFIERLOOSE] = "(?:" + o[l.NUMERICIDENTIFIERLOOSE] + "|" + o[l.NONNUMERICIDENTIFIER] + ")"),
    d("PRERELEASE"),
    (o[l.PRERELEASE] = "(?:-(" + o[l.PRERELEASEIDENTIFIER] + "(?:\\." + o[l.PRERELEASEIDENTIFIER] + ")*))"),
    d("PRERELEASELOOSE"),
    (o[l.PRERELEASELOOSE] =
        "(?:-?(" + o[l.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + o[l.PRERELEASEIDENTIFIERLOOSE] + ")*))"),
    d("BUILDIDENTIFIER"),
    (o[l.BUILDIDENTIFIER] = "[0-9A-Za-z-]+"),
    d("BUILD"),
    (o[l.BUILD] = "(?:\\+(" + o[l.BUILDIDENTIFIER] + "(?:\\." + o[l.BUILDIDENTIFIER] + ")*))"),
    d("FULL"),
    d("FULLPLAIN"),
    (o[l.FULLPLAIN] = "v?" + o[l.MAINVERSION] + o[l.PRERELEASE] + "?" + o[l.BUILD] + "?"),
    (o[l.FULL] = "^" + o[l.FULLPLAIN] + "$"),
    d("LOOSEPLAIN"),
    (o[l.LOOSEPLAIN] = "[v=\\s]*" + o[l.MAINVERSIONLOOSE] + o[l.PRERELEASELOOSE] + "?" + o[l.BUILD] + "?"),
    d("LOOSE"),
    (o[l.LOOSE] = "^" + o[l.LOOSEPLAIN] + "$"),
    d("GTLT"),
    (o[l.GTLT] = "((?:<|>)?=?)"),
    d("XRANGEIDENTIFIERLOOSE"),
    (o[l.XRANGEIDENTIFIERLOOSE] = o[l.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
    d("XRANGEIDENTIFIER"),
    (o[l.XRANGEIDENTIFIER] = o[l.NUMERICIDENTIFIER] + "|x|X|\\*"),
    d("XRANGEPLAIN"),
    (o[l.XRANGEPLAIN] =
        "[v=\\s]*(" +
        o[l.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        o[l.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        o[l.XRANGEIDENTIFIER] +
        ")(?:" +
        o[l.PRERELEASE] +
        ")?" +
        o[l.BUILD] +
        "?)?)?"),
    d("XRANGEPLAINLOOSE"),
    (o[l.XRANGEPLAINLOOSE] =
        "[v=\\s]*(" +
        o[l.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        o[l.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        o[l.XRANGEIDENTIFIERLOOSE] +
        ")(?:" +
        o[l.PRERELEASELOOSE] +
        ")?" +
        o[l.BUILD] +
        "?)?)?"),
    d("XRANGE"),
    (o[l.XRANGE] = "^" + o[l.GTLT] + "\\s*" + o[l.XRANGEPLAIN] + "$"),
    d("XRANGELOOSE"),
    (o[l.XRANGELOOSE] = "^" + o[l.GTLT] + "\\s*" + o[l.XRANGEPLAINLOOSE] + "$"),
    d("COERCE"),
    (o[l.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])"),
    d("COERCERTL"),
    (a[l.COERCERTL] = RegExp(o[l.COERCE], "g")),
    d("LONETILDE"),
    (o[l.LONETILDE] = "(?:~>?)"),
    d("TILDETRIM"),
    (o[l.TILDETRIM] = "(\\s*)" + o[l.LONETILDE] + "\\s+"),
    (a[l.TILDETRIM] = RegExp(o[l.TILDETRIM], "g")),
    d("TILDE"),
    (o[l.TILDE] = "^" + o[l.LONETILDE] + o[l.XRANGEPLAIN] + "$"),
    d("TILDELOOSE"),
    (o[l.TILDELOOSE] = "^" + o[l.LONETILDE] + o[l.XRANGEPLAINLOOSE] + "$"),
    d("LONECARET"),
    (o[l.LONECARET] = "(?:\\^)"),
    d("CARETTRIM"),
    (o[l.CARETTRIM] = "(\\s*)" + o[l.LONECARET] + "\\s+"),
    (a[l.CARETTRIM] = RegExp(o[l.CARETTRIM], "g")),
    d("CARET"),
    (o[l.CARET] = "^" + o[l.LONECARET] + o[l.XRANGEPLAIN] + "$"),
    d("CARETLOOSE"),
    (o[l.CARETLOOSE] = "^" + o[l.LONECARET] + o[l.XRANGEPLAINLOOSE] + "$"),
    d("COMPARATORLOOSE"),
    (o[l.COMPARATORLOOSE] = "^" + o[l.GTLT] + "\\s*(" + o[l.LOOSEPLAIN] + ")$|^$"),
    d("COMPARATOR"),
    (o[l.COMPARATOR] = "^" + o[l.GTLT] + "\\s*(" + o[l.FULLPLAIN] + ")$|^$"),
    d("COMPARATORTRIM"),
    (o[l.COMPARATORTRIM] = "(\\s*)" + o[l.GTLT] + "\\s*(" + o[l.LOOSEPLAIN] + "|" + o[l.XRANGEPLAIN] + ")"),
    (a[l.COMPARATORTRIM] = RegExp(o[l.COMPARATORTRIM], "g")),
    d("HYPHENRANGE"),
    (o[l.HYPHENRANGE] = "^\\s*(" + o[l.XRANGEPLAIN] + ")\\s+-\\s+(" + o[l.XRANGEPLAIN] + ")\\s*$"),
    d("HYPHENRANGELOOSE"),
    (o[l.HYPHENRANGELOOSE] = "^\\s*(" + o[l.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + o[l.XRANGEPLAINLOOSE] + ")\\s*$"),
    d("STAR"),
    (o[l.STAR] = "(<|>)?=?\\s*\\*");
for (var c = 0; c < u; c++) r(c, o[c]), a[c] || (a[c] = new RegExp(o[c]));
function _(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof f)) return e;
    if ("string" != typeof e || e.length > 256 || !(t.loose ? a[l.LOOSE] : a[l.FULL]).test(e)) return null;
    try {
        return new f(e, t);
    } catch (e) {
        return null;
    }
}
function f(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof f))
        if (e.loose === t.loose) return e;
        else e = e.version;
    else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
    if (e.length > 256) throw TypeError("version is longer than 256 characters");
    if (!(this instanceof f)) return new f(e, t);
    r("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? a[l.LOOSE] : a[l.FULL]);
    if (!n) throw TypeError("Invalid Version: " + e);
    if (
        ((this.raw = e),
        (this.major = +n[1]),
        (this.minor = +n[2]),
        (this.patch = +n[3]),
        this.major > s || this.major < 0)
    )
        throw TypeError("Invalid major version");
    if (this.minor > s || this.minor < 0) throw TypeError("Invalid minor version");
    if (this.patch > s || this.patch < 0) throw TypeError("Invalid patch version");
    n[4]
        ? (this.prerelease = n[4].split(".").map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < s) return t;
              }
              return e;
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split(".") : []),
        this.format();
}
(t.parse = _),
    (t.valid = function (e, t) {
        var n = _(e, t);
        return n ? n.version : null;
    }),
    (t.clean = function (e, t) {
        var n = _(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null;
    }),
    (t.SemVer = f),
    (f.prototype.format = function () {
        return (
            (this.version = this.major + "." + this.minor + "." + this.patch),
            this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
            this.version
        );
    }),
    (f.prototype.toString = function () {
        return this.version;
    }),
    (f.prototype.compare = function (e) {
        return (
            r("SemVer.compare", this.version, this.options, e),
            e instanceof f || (e = new f(e, this.options)),
            this.compareMain(e) || this.comparePre(e)
        );
    }),
    (f.prototype.compareMain = function (e) {
        return (
            e instanceof f || (e = new f(e, this.options)),
            h(this.major, e.major) || h(this.minor, e.minor) || h(this.patch, e.patch)
        );
    }),
    (f.prototype.comparePre = function (e) {
        if ((e instanceof f || (e = new f(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
            var n = this.prerelease[t],
                i = e.prerelease[t];
            if ((r("prerelease compare", t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return h(n, i);
        } while (++t);
    }),
    (f.prototype.compareBuild = function (e) {
        e instanceof f || (e = new f(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if ((r("prerelease compare", t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return h(n, i);
        } while (++t);
    }),
    (f.prototype.inc = function (e, t) {
        switch (e) {
            case "premajor":
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", t);
                break;
            case "preminor":
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t);
                break;
            case "prepatch":
                (this.prerelease.length = 0), this.inc("patch", t), this.inc("pre", t);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                break;
            case "major":
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                    (this.minor = 0),
                    (this.patch = 0),
                    (this.prerelease = []);
                break;
            case "minor":
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                    (this.patch = 0),
                    (this.prerelease = []);
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                break;
            case "pre":
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                    for (var n = this.prerelease.length; --n >= 0; )
                        "number" == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                    -1 === n && this.prerelease.push(0);
                }
                t &&
                    (this.prerelease[0] === t
                        ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                        : (this.prerelease = [t, 0]));
                break;
            default:
                throw Error("invalid increment argument: " + e);
        }
        return this.format(), (this.raw = this.version), this;
    }),
    (t.inc = function (e, t, n, r) {
        "string" == typeof n && ((r = n), (n = void 0));
        try {
            return new f(e, n).inc(t, r).version;
        } catch (e) {
            return null;
        }
    }),
    (t.diff = function (e, t) {
        if (A(e, t)) return null;
        var n = _(e),
            r = _(t),
            i = "";
        if (n.prerelease.length || r.prerelease.length) {
            i = "pre";
            var s = "prerelease";
        }
        for (var a in n) if (("major" === a || "minor" === a || "patch" === a) && n[a] !== r[a]) return i + a;
        return s;
    }),
    (t.compareIdentifiers = h);
var E = /^[0-9]+$/;
function h(e, t) {
    var n = E.test(e),
        r = E.test(t);
    return n && r && ((e *= 1), (t *= 1)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
function p(e, t, n) {
    return new f(e, n).compare(new f(t, n));
}
function m(e, t, n) {
    return p(e, t, n) > 0;
}
function g(e, t, n) {
    return 0 > p(e, t, n);
}
function A(e, t, n) {
    return 0 === p(e, t, n);
}
function I(e, t, n) {
    return 0 !== p(e, t, n);
}
function T(e, t, n) {
    return p(e, t, n) >= 0;
}
function S(e, t, n) {
    return 0 >= p(e, t, n);
}
function y(e, t, n, r) {
    switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
        case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
        case "":
        case "=":
        case "==":
            return A(e, n, r);
        case "!=":
            return I(e, n, r);
        case ">":
            return m(e, n, r);
        case ">=":
            return T(e, n, r);
        case "<":
            return g(e, n, r);
        case "<=":
            return S(e, n, r);
        default:
            throw TypeError("Invalid operator: " + t);
    }
}
function N(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof N))
        if (!!t.loose === e.loose) return e;
        else e = e.value;
    if (!(this instanceof N)) return new N(e, t);
    r("comparator", e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === O ? (this.value = "") : (this.value = this.operator + this.semver.version),
        r("comp", this);
}
(t.rcompareIdentifiers = function (e, t) {
    return h(t, e);
}),
    (t.major = function (e, t) {
        return new f(e, t).major;
    }),
    (t.minor = function (e, t) {
        return new f(e, t).minor;
    }),
    (t.patch = function (e, t) {
        return new f(e, t).patch;
    }),
    (t.compare = p),
    (t.compareLoose = function (e, t) {
        return p(e, t, !0);
    }),
    (t.compareBuild = function (e, t, n) {
        var r = new f(e, n),
            i = new f(t, n);
        return r.compare(i) || r.compareBuild(i);
    }),
    (t.rcompare = function (e, t, n) {
        return p(t, e, n);
    }),
    (t.sort = function (e, n) {
        return e.sort(function (e, r) {
            return t.compareBuild(e, r, n);
        });
    }),
    (t.rsort = function (e, n) {
        return e.sort(function (e, r) {
            return t.compareBuild(r, e, n);
        });
    }),
    (t.gt = m),
    (t.lt = g),
    (t.eq = A),
    (t.neq = I),
    (t.gte = T),
    (t.lte = S),
    (t.cmp = y),
    (t.Comparator = N);
var O = {};
function R(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof R))
        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
        else return new R(e.raw, t);
    if (e instanceof N) return new R(e.value, t);
    if (!(this instanceof R)) return new R(e, t);
    if (
        ((this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease),
        (this.raw = e),
        (this.set = e
            .split(/\s*\|\|\s*/)
            .map(function (e) {
                return this.parseRange(e.trim());
            }, this)
            .filter(function (e) {
                return e.length;
            })),
        !this.set.length)
    )
        throw TypeError("Invalid SemVer Range: " + e);
    this.format();
}
function v(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length; )
        (n = r.every(function (e) {
            return i.intersects(e, t);
        })),
            (i = r.pop());
    return n;
}
function C(e) {
    return !e || "x" === e.toLowerCase() || "*" === e;
}
function b(e, t, n, r, i, s, a, o, l, u, d, c, _) {
    return (
        (t = C(n) ? "" : C(r) ? ">=" + n + ".0.0" : C(i) ? ">=" + n + "." + r + ".0" : ">=" + t) +
        " " +
        (o = C(l)
            ? ""
            : C(u)
              ? "<" + (+l + 1) + ".0.0"
              : C(d)
                ? "<" + l + "." + (+u + 1) + ".0"
                : c
                  ? "<=" + l + "." + u + "." + d + "-" + c
                  : "<=" + o)
    ).trim();
}
function D(e, t, n) {
    try {
        t = new R(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
function L(e, t, n, r) {
    switch (((e = new f(e, r)), (t = new R(t, r)), n)) {
        case ">":
            (i = m), (s = S), (a = g), (o = ">"), (l = ">=");
            break;
        case "<":
            (i = g), (s = T), (a = m), (o = "<"), (l = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (D(e, t, r)) return !1;
    for (var i, s, a, o, l, u = 0; u < t.set.length; ++u) {
        var d = t.set[u],
            c = null,
            _ = null;
        if (
            (d.forEach(function (e) {
                e.semver === O && (e = new N(">=0.0.0")),
                    (c = c || e),
                    (_ = _ || e),
                    i(e.semver, c.semver, r) ? (c = e) : a(e.semver, _.semver, r) && (_ = e);
            }),
            c.operator === o ||
                c.operator === l ||
                ((!_.operator || _.operator === o) && s(e, _.semver)) ||
                (_.operator === l && a(e, _.semver)))
        )
            return !1;
    }
    return !0;
}
(N.prototype.parse = function (e) {
    var t = this.options.loose ? a[l.COMPARATORLOOSE] : a[l.COMPARATOR],
        n = e.match(t);
    if (!n) throw TypeError("Invalid comparator: " + e);
    (this.operator = void 0 !== n[1] ? n[1] : ""),
        "=" === this.operator && (this.operator = ""),
        n[2] ? (this.semver = new f(n[2], this.options.loose)) : (this.semver = O);
}),
    (N.prototype.toString = function () {
        return this.value;
    }),
    (N.prototype.test = function (e) {
        if ((r("Comparator.test", e, this.options.loose), this.semver === O || e === O)) return !0;
        if ("string" == typeof e)
            try {
                e = new f(e, this.options);
            } catch (e) {
                return !1;
            }
        return y(e, this.operator, this.semver, this.options);
    }),
    (N.prototype.intersects = function (e, t) {
        if (!(e instanceof N)) throw TypeError("a Comparator is required");
        if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), "" === this.operator))
            return "" === this.value || ((n = new R(e.value, t)), D(this.value, n, t));
        if ("" === e.operator) return "" === e.value || ((n = new R(this.value, t)), D(e.semver, n, t));
        var n,
            r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
            i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            s = this.semver.version === e.semver.version,
            a = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
            o =
                y(this.semver, "<", e.semver, t) &&
                (">=" === this.operator || ">" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
            l =
                y(this.semver, ">", e.semver, t) &&
                ("<=" === this.operator || "<" === this.operator) &&
                (">=" === e.operator || ">" === e.operator);
        return r || i || (s && a) || o || l;
    }),
    (t.Range = R),
    (R.prototype.format = function () {
        return (
            (this.range = this.set
                .map(function (e) {
                    return e.join(" ").trim();
                })
                .join("||")
                .trim()),
            this.range
        );
    }),
    (R.prototype.toString = function () {
        return this.range;
    }),
    (R.prototype.parseRange = function (e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? a[l.HYPHENRANGELOOSE] : a[l.HYPHENRANGE];
        r("hyphen replace", (e = e.replace(n, b))),
            r("comparator trim", (e = e.replace(a[l.COMPARATORTRIM], "$1$2$3")), a[l.COMPARATORTRIM]),
            (e = (e = (e = e.replace(a[l.TILDETRIM], "$1~")).replace(a[l.CARETTRIM], "$1^")).split(/\s+/).join(" "));
        var i = t ? a[l.COMPARATORLOOSE] : a[l.COMPARATOR],
            s = e
                .split(" ")
                .map(function (e) {
                    var t, n, i, s, o, u, d, c, _;
                    return (
                        r("comp", (t = e), (n = this.options)),
                        (i = t),
                        (s = n),
                        (t = i
                            .trim()
                            .split(/\s+/)
                            .map(function (e) {
                                var t, n, i;
                                return (
                                    r("caret", (t = e), (n = s)),
                                    (i = n.loose ? a[l.CARETLOOSE] : a[l.CARET]),
                                    t.replace(i, function (e, n, i, s, a) {
                                        var o;
                                        return (
                                            r("caret", t, e, n, i, s, a),
                                            C(n)
                                                ? (o = "")
                                                : C(i)
                                                  ? (o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                                                  : C(s)
                                                    ? (o =
                                                          "0" === n
                                                              ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0"
                                                              : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0")
                                                    : a
                                                      ? (r("replaceCaret pr", a),
                                                        (o =
                                                            "0" === n
                                                                ? "0" === i
                                                                    ? ">=" +
                                                                      n +
                                                                      "." +
                                                                      i +
                                                                      "." +
                                                                      s +
                                                                      "-" +
                                                                      a +
                                                                      " <" +
                                                                      n +
                                                                      "." +
                                                                      i +
                                                                      "." +
                                                                      (+s + 1)
                                                                    : ">=" +
                                                                      n +
                                                                      "." +
                                                                      i +
                                                                      "." +
                                                                      s +
                                                                      "-" +
                                                                      a +
                                                                      " <" +
                                                                      n +
                                                                      "." +
                                                                      (+i + 1) +
                                                                      ".0"
                                                                : ">=" +
                                                                  n +
                                                                  "." +
                                                                  i +
                                                                  "." +
                                                                  s +
                                                                  "-" +
                                                                  a +
                                                                  " <" +
                                                                  (+n + 1) +
                                                                  ".0.0"))
                                                      : (r("no pr"),
                                                        (o =
                                                            "0" === n
                                                                ? "0" === i
                                                                    ? ">=" +
                                                                      n +
                                                                      "." +
                                                                      i +
                                                                      "." +
                                                                      s +
                                                                      " <" +
                                                                      n +
                                                                      "." +
                                                                      i +
                                                                      "." +
                                                                      (+s + 1)
                                                                    : ">=" +
                                                                      n +
                                                                      "." +
                                                                      i +
                                                                      "." +
                                                                      s +
                                                                      " <" +
                                                                      n +
                                                                      "." +
                                                                      (+i + 1) +
                                                                      ".0"
                                                                : ">=" +
                                                                  n +
                                                                  "." +
                                                                  i +
                                                                  "." +
                                                                  s +
                                                                  " <" +
                                                                  (+n + 1) +
                                                                  ".0.0")),
                                            r("caret return", o),
                                            o
                                        );
                                    })
                                );
                            })
                            .join(" ")),
                        r("caret", t),
                        (o = t),
                        (u = n),
                        (t = o
                            .trim()
                            .split(/\s+/)
                            .map(function (e) {
                                var t, n;
                                return (
                                    (t = e),
                                    (n = u.loose ? a[l.TILDELOOSE] : a[l.TILDE]),
                                    t.replace(n, function (e, n, i, s, a) {
                                        var o;
                                        return (
                                            r("tilde", t, e, n, i, s, a),
                                            C(n)
                                                ? (o = "")
                                                : C(i)
                                                  ? (o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                                                  : C(s)
                                                    ? (o = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0")
                                                    : a
                                                      ? (r("replaceTilde pr", a),
                                                        (o =
                                                            ">=" +
                                                            n +
                                                            "." +
                                                            i +
                                                            "." +
                                                            s +
                                                            "-" +
                                                            a +
                                                            " <" +
                                                            n +
                                                            "." +
                                                            (+i + 1) +
                                                            ".0"))
                                                      : (o =
                                                            ">=" +
                                                            n +
                                                            "." +
                                                            i +
                                                            "." +
                                                            s +
                                                            " <" +
                                                            n +
                                                            "." +
                                                            (+i + 1) +
                                                            ".0"),
                                            r("tilde return", o),
                                            o
                                        );
                                    })
                                );
                            })
                            .join(" ")),
                        r("tildes", t),
                        r("replaceXRanges", (d = t), (c = n)),
                        (t = d
                            .split(/\s+/)
                            .map(function (e) {
                                var t, n, i;
                                return (
                                    (t = e),
                                    (n = c),
                                    (t = t.trim()),
                                    (i = n.loose ? a[l.XRANGELOOSE] : a[l.XRANGE]),
                                    t.replace(i, function (e, i, s, a, o, l) {
                                        r("xRange", t, e, i, s, a, o, l);
                                        var u = C(s),
                                            d = u || C(a),
                                            c = d || C(o);
                                        return (
                                            "=" === i && c && (i = ""),
                                            (l = n.includePrerelease ? "-0" : ""),
                                            u
                                                ? (e = ">" === i || "<" === i ? "<0.0.0-0" : "*")
                                                : i && c
                                                  ? (d && (a = 0),
                                                    (o = 0),
                                                    ">" === i
                                                        ? ((i = ">="),
                                                          d ? ((s = +s + 1), (a = 0)) : (a = +a + 1),
                                                          (o = 0))
                                                        : "<=" === i && ((i = "<"), d ? (s = +s + 1) : (a = +a + 1)),
                                                    (e = i + s + "." + a + "." + o + l))
                                                  : d
                                                    ? (e = ">=" + s + ".0.0" + l + " <" + (+s + 1) + ".0.0" + l)
                                                    : c &&
                                                      (e =
                                                          ">=" +
                                                          s +
                                                          "." +
                                                          a +
                                                          ".0" +
                                                          l +
                                                          " <" +
                                                          s +
                                                          "." +
                                                          (+a + 1) +
                                                          ".0" +
                                                          l),
                                            r("xRange return", e),
                                            e
                                        );
                                    })
                                );
                            })
                            .join(" ")),
                        r("xrange", t),
                        r("replaceStars", (_ = t), n),
                        r("stars", (t = _.trim().replace(a[l.STAR], ""))),
                        t
                    );
                }, this)
                .join(" ")
                .split(/\s+/);
        return (
            this.options.loose &&
                (s = s.filter(function (e) {
                    return !!e.match(i);
                })),
            (s = s.map(function (e) {
                return new N(e, this.options);
            }, this))
        );
    }),
    (R.prototype.intersects = function (e, t) {
        if (!(e instanceof R)) throw TypeError("a Range is required");
        return this.set.some(function (n) {
            return (
                v(n, t) &&
                e.set.some(function (e) {
                    return (
                        v(e, t) &&
                        n.every(function (n) {
                            return e.every(function (e) {
                                return n.intersects(e, t);
                            });
                        })
                    );
                })
            );
        });
    }),
    (t.toComparators = function (e, t) {
        return new R(e, t).set.map(function (e) {
            return e
                .map(function (e) {
                    return e.value;
                })
                .join(" ")
                .trim()
                .split(" ");
        });
    }),
    (R.prototype.test = function (e) {
        if (!e) return !1;
        if ("string" == typeof e)
            try {
                e = new f(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var t = 0; t < this.set.length; t++)
            if (
                (function (e, t, n) {
                    for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
                    if (t.prerelease.length && !n.includePrerelease) {
                        for (i = 0; i < e.length; i++)
                            if ((r(e[i].semver), e[i].semver !== O && e[i].semver.prerelease.length > 0)) {
                                var s = e[i].semver;
                                if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) return !0;
                            }
                        return !1;
                    }
                    return !0;
                })(this.set[t], e, this.options)
            )
                return !0;
        return !1;
    }),
    (t.satisfies = D),
    (t.maxSatisfying = function (e, t, n) {
        var r = null,
            i = null;
        try {
            var s = new R(t, n);
        } catch (e) {
            return null;
        }
        return (
            e.forEach(function (e) {
                s.test(e) && (!r || -1 === i.compare(e)) && (i = new f((r = e), n));
            }),
            r
        );
    }),
    (t.minSatisfying = function (e, t, n) {
        var r = null,
            i = null;
        try {
            var s = new R(t, n);
        } catch (e) {
            return null;
        }
        return (
            e.forEach(function (e) {
                s.test(e) && (!r || 1 === i.compare(e)) && (i = new f((r = e), n));
            }),
            r
        );
    }),
    (t.minVersion = function (e, t) {
        e = new R(e, t);
        var n = new f("0.0.0");
        if (e.test(n) || ((n = new f("0.0.0-0")), e.test(n))) return n;
        n = null;
        for (var r = 0; r < e.set.length; ++r)
            e.set[r].forEach(function (e) {
                var t = new f(e.semver.version);
                switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                    case "":
                    case ">=":
                        (!n || m(n, t)) && (n = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw Error("Unexpected operation: " + e.operator);
                }
            });
        return n && e.test(n) ? n : null;
    }),
    (t.validRange = function (e, t) {
        try {
            return new R(e, t).range || "*";
        } catch (e) {
            return null;
        }
    }),
    (t.ltr = function (e, t, n) {
        return L(e, t, "<", n);
    }),
    (t.gtr = function (e, t, n) {
        return L(e, t, ">", n);
    }),
    (t.outside = L),
    (t.prerelease = function (e, t) {
        var n = _(e, t);
        return n && n.prerelease.length ? n.prerelease : null;
    }),
    (t.intersects = function (e, t, n) {
        return (e = new R(e, n)), (t = new R(t, n)), e.intersects(t);
    }),
    (t.coerce = function (e, t) {
        if (e instanceof f) return e;
        if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null;
        var n,
            r = null;
        if ((t = t || {}).rtl) {
            for (; (n = a[l.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
                (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
                    (a[l.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
            a[l.COERCERTL].lastIndex = -1;
        } else r = e.match(a[l.COERCE]);
        return null === r ? null : _(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t);
    });
