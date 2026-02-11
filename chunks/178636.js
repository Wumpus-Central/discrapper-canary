var r,
    i = n(72290);
(t = e.exports = T),
    (r =
        "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift("SEMVER"), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = "2.0.0");
var a = 256,
    s = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
    o = 16,
    l = (t.re = []),
    u = (t.src = []),
    c = (t.tokens = {}),
    d = 0;
function _(e) {
    c[e] = d++;
}
_("NUMERICIDENTIFIER"),
    (u[c.NUMERICIDENTIFIER] = "0|[1-9]\\d*"),
    _("NUMERICIDENTIFIERLOOSE"),
    (u[c.NUMERICIDENTIFIERLOOSE] = "[0-9]+"),
    _("NONNUMERICIDENTIFIER"),
    (u[c.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
    _("MAINVERSION"),
    (u[c.MAINVERSION] =
        "(" + u[c.NUMERICIDENTIFIER] + ")\\.(" + u[c.NUMERICIDENTIFIER] + ")\\.(" + u[c.NUMERICIDENTIFIER] + ")"),
    _("MAINVERSIONLOOSE"),
    (u[c.MAINVERSIONLOOSE] =
        "(" +
        u[c.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        u[c.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        u[c.NUMERICIDENTIFIERLOOSE] +
        ")"),
    _("PRERELEASEIDENTIFIER"),
    (u[c.PRERELEASEIDENTIFIER] = "(?:" + u[c.NUMERICIDENTIFIER] + "|" + u[c.NONNUMERICIDENTIFIER] + ")"),
    _("PRERELEASEIDENTIFIERLOOSE"),
    (u[c.PRERELEASEIDENTIFIERLOOSE] = "(?:" + u[c.NUMERICIDENTIFIERLOOSE] + "|" + u[c.NONNUMERICIDENTIFIER] + ")"),
    _("PRERELEASE"),
    (u[c.PRERELEASE] = "(?:-(" + u[c.PRERELEASEIDENTIFIER] + "(?:\\." + u[c.PRERELEASEIDENTIFIER] + ")*))"),
    _("PRERELEASELOOSE"),
    (u[c.PRERELEASELOOSE] =
        "(?:-?(" + u[c.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + u[c.PRERELEASEIDENTIFIERLOOSE] + ")*))"),
    _("BUILDIDENTIFIER"),
    (u[c.BUILDIDENTIFIER] = "[0-9A-Za-z-]+"),
    _("BUILD"),
    (u[c.BUILD] = "(?:\\+(" + u[c.BUILDIDENTIFIER] + "(?:\\." + u[c.BUILDIDENTIFIER] + ")*))"),
    _("FULL"),
    _("FULLPLAIN"),
    (u[c.FULLPLAIN] = "v?" + u[c.MAINVERSION] + u[c.PRERELEASE] + "?" + u[c.BUILD] + "?"),
    (u[c.FULL] = "^" + u[c.FULLPLAIN] + "$"),
    _("LOOSEPLAIN"),
    (u[c.LOOSEPLAIN] = "[v=\\s]*" + u[c.MAINVERSIONLOOSE] + u[c.PRERELEASELOOSE] + "?" + u[c.BUILD] + "?"),
    _("LOOSE"),
    (u[c.LOOSE] = "^" + u[c.LOOSEPLAIN] + "$"),
    _("GTLT"),
    (u[c.GTLT] = "((?:<|>)?=?)"),
    _("XRANGEIDENTIFIERLOOSE"),
    (u[c.XRANGEIDENTIFIERLOOSE] = u[c.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
    _("XRANGEIDENTIFIER"),
    (u[c.XRANGEIDENTIFIER] = u[c.NUMERICIDENTIFIER] + "|x|X|\\*"),
    _("XRANGEPLAIN"),
    (u[c.XRANGEPLAIN] =
        "[v=\\s]*(" +
        u[c.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        u[c.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        u[c.XRANGEIDENTIFIER] +
        ")(?:" +
        u[c.PRERELEASE] +
        ")?" +
        u[c.BUILD] +
        "?)?)?"),
    _("XRANGEPLAINLOOSE"),
    (u[c.XRANGEPLAINLOOSE] =
        "[v=\\s]*(" +
        u[c.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        u[c.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        u[c.XRANGEIDENTIFIERLOOSE] +
        ")(?:" +
        u[c.PRERELEASELOOSE] +
        ")?" +
        u[c.BUILD] +
        "?)?)?"),
    _("XRANGE"),
    (u[c.XRANGE] = "^" + u[c.GTLT] + "\\s*" + u[c.XRANGEPLAIN] + "$"),
    _("XRANGELOOSE"),
    (u[c.XRANGELOOSE] = "^" + u[c.GTLT] + "\\s*" + u[c.XRANGEPLAINLOOSE] + "$"),
    _("COERCE"),
    (u[c.COERCE] = "(^|[^\\d])(\\d{1," + o + "})(?:\\.(\\d{1," + o + "}))?(?:\\.(\\d{1," + o + "}))?(?:$|[^\\d])"),
    _("COERCERTL"),
    (l[c.COERCERTL] = RegExp(u[c.COERCE], "g")),
    _("LONETILDE"),
    (u[c.LONETILDE] = "(?:~>?)"),
    _("TILDETRIM"),
    (u[c.TILDETRIM] = "(\\s*)" + u[c.LONETILDE] + "\\s+"),
    (l[c.TILDETRIM] = RegExp(u[c.TILDETRIM], "g"));
var f = "$1~";
_("TILDE"),
    (u[c.TILDE] = "^" + u[c.LONETILDE] + u[c.XRANGEPLAIN] + "$"),
    _("TILDELOOSE"),
    (u[c.TILDELOOSE] = "^" + u[c.LONETILDE] + u[c.XRANGEPLAINLOOSE] + "$"),
    _("LONECARET"),
    (u[c.LONECARET] = "(?:\\^)"),
    _("CARETTRIM"),
    (u[c.CARETTRIM] = "(\\s*)" + u[c.LONECARET] + "\\s+"),
    (l[c.CARETTRIM] = RegExp(u[c.CARETTRIM], "g"));
var h = "$1^";
_("CARET"),
    (u[c.CARET] = "^" + u[c.LONECARET] + u[c.XRANGEPLAIN] + "$"),
    _("CARETLOOSE"),
    (u[c.CARETLOOSE] = "^" + u[c.LONECARET] + u[c.XRANGEPLAINLOOSE] + "$"),
    _("COMPARATORLOOSE"),
    (u[c.COMPARATORLOOSE] = "^" + u[c.GTLT] + "\\s*(" + u[c.LOOSEPLAIN] + ")$|^$"),
    _("COMPARATOR"),
    (u[c.COMPARATOR] = "^" + u[c.GTLT] + "\\s*(" + u[c.FULLPLAIN] + ")$|^$"),
    _("COMPARATORTRIM"),
    (u[c.COMPARATORTRIM] = "(\\s*)" + u[c.GTLT] + "\\s*(" + u[c.LOOSEPLAIN] + "|" + u[c.XRANGEPLAIN] + ")"),
    (l[c.COMPARATORTRIM] = RegExp(u[c.COMPARATORTRIM], "g"));
var p = "$1$2$3";
_("HYPHENRANGE"),
    (u[c.HYPHENRANGE] = "^\\s*(" + u[c.XRANGEPLAIN] + ")\\s+-\\s+(" + u[c.XRANGEPLAIN] + ")\\s*$"),
    _("HYPHENRANGELOOSE"),
    (u[c.HYPHENRANGELOOSE] = "^\\s*(" + u[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + u[c.XRANGEPLAINLOOSE] + ")\\s*$"),
    _("STAR"),
    (u[c.STAR] = "(<|>)?=?\\s*\\*");
for (var g = 0; g < d; g++) r(g, u[g]), l[g] || (l[g] = new RegExp(u[g]));
function E(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof T)) return e;
    if ("string" != typeof e || e.length > a || !(t.loose ? l[c.LOOSE] : l[c.FULL]).test(e)) return null;
    try {
        return new T(e, t);
    } catch (e) {
        return null;
    }
}
function A(e, t) {
    var n = E(e, t);
    return n ? n.version : null;
}
function I(e, t) {
    var n = E(e.trim().replace(/^[=v]+/, ""), t);
    return n ? n.version : null;
}
function T(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof T))
        if (e.loose === t.loose) return e;
        else e = e.version;
    else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
    if (e.length > a) throw TypeError("version is longer than " + a + " characters");
    if (!(this instanceof T)) return new T(e, t);
    r("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? l[c.LOOSE] : l[c.FULL]);
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
function y(e, t, n, r) {
    "string" == typeof n && ((r = n), (n = void 0));
    try {
        return new T(e, n).inc(t, r).version;
    } catch (e) {
        return null;
    }
}
function S(e, t) {
    if (G(e, t)) return null;
    var n = E(e),
        r = E(t),
        i = "";
    if (n.prerelease.length || r.prerelease.length) {
        i = "pre";
        var a = "prerelease";
    }
    for (var s in n) if (("major" === s || "minor" === s || "patch" === s) && n[s] !== r[s]) return i + s;
    return a;
}
(t.parse = E),
    (t.valid = A),
    (t.clean = I),
    (t.SemVer = T),
    (T.prototype.format = function () {
        return (
            (this.version = this.major + "." + this.minor + "." + this.patch),
            this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
            this.version
        );
    }),
    (T.prototype.toString = function () {
        return this.version;
    }),
    (T.prototype.compare = function (e) {
        return (
            r("SemVer.compare", this.version, this.options, e),
            e instanceof T || (e = new T(e, this.options)),
            this.compareMain(e) || this.comparePre(e)
        );
    }),
    (T.prototype.compareMain = function (e) {
        return (
            e instanceof T || (e = new T(e, this.options)),
            C(this.major, e.major) || C(this.minor, e.minor) || C(this.patch, e.patch)
        );
    }),
    (T.prototype.comparePre = function (e) {
        if ((e instanceof T || (e = new T(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
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
            else return C(n, i);
        } while (++t);
    }),
    (T.prototype.compareBuild = function (e) {
        e instanceof T || (e = new T(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if ((r("prerelease compare", t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return C(n, i);
        } while (++t);
    }),
    (T.prototype.inc = function (e, t) {
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
    (t.inc = y),
    (t.diff = S),
    (t.compareIdentifiers = C);
var v = /^[0-9]+$/;
function C(e, t) {
    var n = v.test(e),
        r = v.test(t);
    return n && r && ((e *= 1), (t *= 1)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
function b(e, t) {
    return C(t, e);
}
function N(e, t) {
    return new T(e, t).major;
}
function R(e, t) {
    return new T(e, t).minor;
}
function O(e, t) {
    return new T(e, t).patch;
}
function D(e, t, n) {
    return new T(e, n).compare(new T(t, n));
}
function L(e, t) {
    return D(e, t, !0);
}
function w(e, t, n) {
    var r = new T(e, n),
        i = new T(t, n);
    return r.compare(i) || r.compareBuild(i);
}
function x(e, t, n) {
    return D(t, e, n);
}
function P(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(e, r, n);
    });
}
function M(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(r, e, n);
    });
}
function k(e, t, n) {
    return D(e, t, n) > 0;
}
function U(e, t, n) {
    return 0 > D(e, t, n);
}
function G(e, t, n) {
    return 0 === D(e, t, n);
}
function F(e, t, n) {
    return 0 !== D(e, t, n);
}
function V(e, t, n) {
    return D(e, t, n) >= 0;
}
function B(e, t, n) {
    return 0 >= D(e, t, n);
}
function j(e, t, n, r) {
    switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
        case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
        case "":
        case "=":
        case "==":
            return G(e, n, r);
        case "!=":
            return F(e, n, r);
        case ">":
            return k(e, n, r);
        case ">=":
            return V(e, n, r);
        case "<":
            return U(e, n, r);
        case "<=":
            return B(e, n, r);
        default:
            throw TypeError("Invalid operator: " + t);
    }
}
function H(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof H))
        if (!!t.loose === e.loose) return e;
        else e = e.value;
    if (!(this instanceof H)) return new H(e, t);
    r("comparator", e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === Y ? (this.value = "") : (this.value = this.operator + this.semver.version),
        r("comp", this);
}
(t.rcompareIdentifiers = b),
    (t.major = N),
    (t.minor = R),
    (t.patch = O),
    (t.compare = D),
    (t.compareLoose = L),
    (t.compareBuild = w),
    (t.rcompare = x),
    (t.sort = P),
    (t.rsort = M),
    (t.gt = k),
    (t.lt = U),
    (t.eq = G),
    (t.neq = F),
    (t.gte = V),
    (t.lte = B),
    (t.cmp = j),
    (t.Comparator = H);
var Y = {};
function W(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof W))
        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
        else return new W(e.raw, t);
    if (e instanceof H) return new W(e.value, t);
    if (!(this instanceof W)) return new W(e, t);
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
function K(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length; )
        (n = r.every(function (e) {
            return i.intersects(e, t);
        })),
            (i = r.pop());
    return n;
}
function $(e, t) {
    return new W(e, t).set.map(function (e) {
        return e
            .map(function (e) {
                return e.value;
            })
            .join(" ")
            .trim()
            .split(" ");
    });
}
function z(e, t) {
    return (
        r("comp", e, t),
        r("caret", (e = Q(e, t))),
        r("tildes", (e = X(e, t))),
        r("xrange", (e = ee(e, t))),
        r("stars", (e = en(e, t))),
        e
    );
}
function q(e) {
    return !e || "x" === e.toLowerCase() || "*" === e;
}
function X(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return Z(e, t);
        })
        .join(" ");
}
function Z(e, t) {
    var n = t.loose ? l[c.TILDELOOSE] : l[c.TILDE];
    return e.replace(n, function (t, n, i, a, s) {
        var o;
        return (
            r("tilde", e, t, n, i, a, s),
            q(n)
                ? (o = "")
                : q(i)
                  ? (o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                  : q(a)
                    ? (o = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0")
                    : s
                      ? (r("replaceTilde pr", s),
                        (o = ">=" + n + "." + i + "." + a + "-" + s + " <" + n + "." + (+i + 1) + ".0"))
                      : (o = ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0"),
            r("tilde return", o),
            o
        );
    });
}
function Q(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return J(e, t);
        })
        .join(" ");
}
function J(e, t) {
    r("caret", e, t);
    var n = t.loose ? l[c.CARETLOOSE] : l[c.CARET];
    return e.replace(n, function (t, n, i, a, s) {
        var o;
        return (
            r("caret", e, t, n, i, a, s),
            q(n)
                ? (o = "")
                : q(i)
                  ? (o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                  : q(a)
                    ? (o =
                          "0" === n
                              ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0"
                              : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0")
                    : s
                      ? (r("replaceCaret pr", s),
                        (o =
                            "0" === n
                                ? "0" === i
                                    ? ">=" + n + "." + i + "." + a + "-" + s + " <" + n + "." + i + "." + (+a + 1)
                                    : ">=" + n + "." + i + "." + a + "-" + s + " <" + n + "." + (+i + 1) + ".0"
                                : ">=" + n + "." + i + "." + a + "-" + s + " <" + (+n + 1) + ".0.0"))
                      : (r("no pr"),
                        (o =
                            "0" === n
                                ? "0" === i
                                    ? ">=" + n + "." + i + "." + a + " <" + n + "." + i + "." + (+a + 1)
                                    : ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0"
                                : ">=" + n + "." + i + "." + a + " <" + (+n + 1) + ".0.0")),
            r("caret return", o),
            o
        );
    });
}
function ee(e, t) {
    return (
        r("replaceXRanges", e, t),
        e
            .split(/\s+/)
            .map(function (e) {
                return et(e, t);
            })
            .join(" ")
    );
}
function et(e, t) {
    e = e.trim();
    var n = t.loose ? l[c.XRANGELOOSE] : l[c.XRANGE];
    return e.replace(n, function (n, i, a, s, o, l) {
        r("xRange", e, n, i, a, s, o, l);
        var u = q(a),
            c = u || q(s),
            d = c || q(o),
            _ = d;
        return (
            "=" === i && _ && (i = ""),
            (l = t.includePrerelease ? "-0" : ""),
            u
                ? (n = ">" === i || "<" === i ? "<0.0.0-0" : "*")
                : i && _
                  ? (c && (s = 0),
                    (o = 0),
                    ">" === i
                        ? ((i = ">="), c ? ((a = +a + 1), (s = 0)) : (s = +s + 1), (o = 0))
                        : "<=" === i && ((i = "<"), c ? (a = +a + 1) : (s = +s + 1)),
                    (n = i + a + "." + s + "." + o + l))
                  : c
                    ? (n = ">=" + a + ".0.0" + l + " <" + (+a + 1) + ".0.0" + l)
                    : d && (n = ">=" + a + "." + s + ".0" + l + " <" + a + "." + (+s + 1) + ".0" + l),
            r("xRange return", n),
            n
        );
    });
}
function en(e, t) {
    return r("replaceStars", e, t), e.trim().replace(l[c.STAR], "");
}
function er(e, t, n, r, i, a, s, o, l, u, c, d, _) {
    return (
        (t = q(n) ? "" : q(r) ? ">=" + n + ".0.0" : q(i) ? ">=" + n + "." + r + ".0" : ">=" + t) +
        " " +
        (o = q(l)
            ? ""
            : q(u)
              ? "<" + (+l + 1) + ".0.0"
              : q(c)
                ? "<" + l + "." + (+u + 1) + ".0"
                : d
                  ? "<=" + l + "." + u + "." + c + "-" + d
                  : "<=" + o)
    ).trim();
}
function ei(e, t, n) {
    for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
    if (t.prerelease.length && !n.includePrerelease) {
        for (i = 0; i < e.length; i++)
            if ((r(e[i].semver), e[i].semver !== Y && e[i].semver.prerelease.length > 0)) {
                var a = e[i].semver;
                if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0;
            }
        return !1;
    }
    return !0;
}
function ea(e, t, n) {
    try {
        t = new W(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
function es(e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new W(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || -1 === i.compare(e)) && (i = new T((r = e), n));
        }),
        r
    );
}
function eo(e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new W(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || 1 === i.compare(e)) && (i = new T((r = e), n));
        }),
        r
    );
}
function el(e, t) {
    e = new W(e, t);
    var n = new T("0.0.0");
    if (e.test(n) || ((n = new T("0.0.0-0")), e.test(n))) return n;
    n = null;
    for (var r = 0; r < e.set.length; ++r)
        e.set[r].forEach(function (e) {
            var t = new T(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                    (!n || k(n, t)) && (n = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw Error("Unexpected operation: " + e.operator);
            }
        });
    return n && e.test(n) ? n : null;
}
function eu(e, t) {
    try {
        return new W(e, t).range || "*";
    } catch (e) {
        return null;
    }
}
function ec(e, t, n) {
    return e_(e, t, "<", n);
}
function ed(e, t, n) {
    return e_(e, t, ">", n);
}
function e_(e, t, n, r) {
    switch (((e = new T(e, r)), (t = new W(t, r)), n)) {
        case ">":
            (i = k), (a = B), (s = U), (o = ">"), (l = ">=");
            break;
        case "<":
            (i = U), (a = V), (s = k), (o = "<"), (l = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (ea(e, t, r)) return !1;
    for (var i, a, s, o, l, u = 0; u < t.set.length; ++u) {
        var c = t.set[u],
            d = null,
            _ = null;
        if (
            (c.forEach(function (e) {
                e.semver === Y && (e = new H(">=0.0.0")),
                    (d = d || e),
                    (_ = _ || e),
                    i(e.semver, d.semver, r) ? (d = e) : s(e.semver, _.semver, r) && (_ = e);
            }),
            d.operator === o ||
                d.operator === l ||
                ((!_.operator || _.operator === o) && a(e, _.semver)) ||
                (_.operator === l && s(e, _.semver)))
        )
            return !1;
    }
    return !0;
}
function ef(e, t) {
    var n = E(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
}
function eh(e, t, n) {
    return (e = new W(e, n)), (t = new W(t, n)), e.intersects(t);
}
function ep(e, t) {
    if (e instanceof T) return e;
    if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null;
    var n,
        r = null;
    if ((t = t || {}).rtl) {
        for (; (n = l[c.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
            (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
                (l[c.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
        l[c.COERCERTL].lastIndex = -1;
    } else r = e.match(l[c.COERCE]);
    return null === r ? null : E(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t);
}
(H.prototype.parse = function (e) {
    var t = this.options.loose ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
        n = e.match(t);
    if (!n) throw TypeError("Invalid comparator: " + e);
    (this.operator = void 0 !== n[1] ? n[1] : ""),
        "=" === this.operator && (this.operator = ""),
        n[2] ? (this.semver = new T(n[2], this.options.loose)) : (this.semver = Y);
}),
    (H.prototype.toString = function () {
        return this.value;
    }),
    (H.prototype.test = function (e) {
        if ((r("Comparator.test", e, this.options.loose), this.semver === Y || e === Y)) return !0;
        if ("string" == typeof e)
            try {
                e = new T(e, this.options);
            } catch (e) {
                return !1;
            }
        return j(e, this.operator, this.semver, this.options);
    }),
    (H.prototype.intersects = function (e, t) {
        if (!(e instanceof H)) throw TypeError("a Comparator is required");
        if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), "" === this.operator))
            return "" === this.value || ((n = new W(e.value, t)), ea(this.value, n, t));
        if ("" === e.operator) return "" === e.value || ((n = new W(this.value, t)), ea(e.semver, n, t));
        var n,
            r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
            i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            a = this.semver.version === e.semver.version,
            s = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
            o =
                j(this.semver, "<", e.semver, t) &&
                (">=" === this.operator || ">" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
            l =
                j(this.semver, ">", e.semver, t) &&
                ("<=" === this.operator || "<" === this.operator) &&
                (">=" === e.operator || ">" === e.operator);
        return r || i || (a && s) || o || l;
    }),
    (t.Range = W),
    (W.prototype.format = function () {
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
    (W.prototype.toString = function () {
        return this.range;
    }),
    (W.prototype.parseRange = function (e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? l[c.HYPHENRANGELOOSE] : l[c.HYPHENRANGE];
        r("hyphen replace", (e = e.replace(n, er))),
            r("comparator trim", (e = e.replace(l[c.COMPARATORTRIM], p)), l[c.COMPARATORTRIM]),
            (e = (e = (e = e.replace(l[c.TILDETRIM], f)).replace(l[c.CARETTRIM], h)).split(/\s+/).join(" "));
        var i = t ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
            a = e
                .split(" ")
                .map(function (e) {
                    return z(e, this.options);
                }, this)
                .join(" ")
                .split(/\s+/);
        return (
            this.options.loose &&
                (a = a.filter(function (e) {
                    return !!e.match(i);
                })),
            (a = a.map(function (e) {
                return new H(e, this.options);
            }, this))
        );
    }),
    (W.prototype.intersects = function (e, t) {
        if (!(e instanceof W)) throw TypeError("a Range is required");
        return this.set.some(function (n) {
            return (
                K(n, t) &&
                e.set.some(function (e) {
                    return (
                        K(e, t) &&
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
    (t.toComparators = $),
    (W.prototype.test = function (e) {
        if (!e) return !1;
        if ("string" == typeof e)
            try {
                e = new T(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var t = 0; t < this.set.length; t++) if (ei(this.set[t], e, this.options)) return !0;
        return !1;
    }),
    (t.satisfies = ea),
    (t.maxSatisfying = es),
    (t.minSatisfying = eo),
    (t.minVersion = el),
    (t.validRange = eu),
    (t.ltr = ec),
    (t.gtr = ed),
    (t.outside = e_),
    (t.prerelease = ef),
    (t.intersects = eh),
    (t.coerce = ep);
