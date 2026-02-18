var r,
    i = n(72290);
(t = e.exports = I),
    (r =
        "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift("SEMVER"), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = "2.0.0");
var s = 256,
    a = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
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
var p = "$1^";
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
var h = "$1$2$3";
_("HYPHENRANGE"),
    (u[c.HYPHENRANGE] = "^\\s*(" + u[c.XRANGEPLAIN] + ")\\s+-\\s+(" + u[c.XRANGEPLAIN] + ")\\s*$"),
    _("HYPHENRANGELOOSE"),
    (u[c.HYPHENRANGELOOSE] = "^\\s*(" + u[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + u[c.XRANGEPLAINLOOSE] + ")\\s*$"),
    _("STAR"),
    (u[c.STAR] = "(<|>)?=?\\s*\\*");
for (var m = 0; m < d; m++) r(m, u[m]), l[m] || (l[m] = new RegExp(u[m]));
function E(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof I)) return e;
    if ("string" != typeof e || e.length > s || !(t.loose ? l[c.LOOSE] : l[c.FULL]).test(e)) return null;
    try {
        return new I(e, t);
    } catch (e) {
        return null;
    }
}
function g(e, t) {
    var n = E(e, t);
    return n ? n.version : null;
}
function A(e, t) {
    var n = E(e.trim().replace(/^[=v]+/, ""), t);
    return n ? n.version : null;
}
function I(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof I))
        if (e.loose === t.loose) return e;
        else e = e.version;
    else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
    if (e.length > s) throw TypeError("version is longer than " + s + " characters");
    if (!(this instanceof I)) return new I(e, t);
    r("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? l[c.LOOSE] : l[c.FULL]);
    if (!n) throw TypeError("Invalid Version: " + e);
    if (
        ((this.raw = e),
        (this.major = +n[1]),
        (this.minor = +n[2]),
        (this.patch = +n[3]),
        this.major > a || this.major < 0)
    )
        throw TypeError("Invalid major version");
    if (this.minor > a || this.minor < 0) throw TypeError("Invalid minor version");
    if (this.patch > a || this.patch < 0) throw TypeError("Invalid patch version");
    n[4]
        ? (this.prerelease = n[4].split(".").map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < a) return t;
              }
              return e;
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split(".") : []),
        this.format();
}
function T(e, t, n, r) {
    "string" == typeof n && ((r = n), (n = void 0));
    try {
        return new I(e, n).inc(t, r).version;
    } catch (e) {
        return null;
    }
}
function S(e, t) {
    if (U(e, t)) return null;
    var n = E(e),
        r = E(t),
        i = "";
    if (n.prerelease.length || r.prerelease.length) {
        i = "pre";
        var s = "prerelease";
    }
    for (var a in n) if (("major" === a || "minor" === a || "patch" === a) && n[a] !== r[a]) return i + a;
    return s;
}
(t.parse = E),
    (t.valid = g),
    (t.clean = A),
    (t.SemVer = I),
    (I.prototype.format = function () {
        return (
            (this.version = this.major + "." + this.minor + "." + this.patch),
            this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
            this.version
        );
    }),
    (I.prototype.toString = function () {
        return this.version;
    }),
    (I.prototype.compare = function (e) {
        return (
            r("SemVer.compare", this.version, this.options, e),
            e instanceof I || (e = new I(e, this.options)),
            this.compareMain(e) || this.comparePre(e)
        );
    }),
    (I.prototype.compareMain = function (e) {
        return (
            e instanceof I || (e = new I(e, this.options)),
            v(this.major, e.major) || v(this.minor, e.minor) || v(this.patch, e.patch)
        );
    }),
    (I.prototype.comparePre = function (e) {
        if ((e instanceof I || (e = new I(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
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
            else return v(n, i);
        } while (++t);
    }),
    (I.prototype.compareBuild = function (e) {
        e instanceof I || (e = new I(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if ((r("prerelease compare", t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return v(n, i);
        } while (++t);
    }),
    (I.prototype.inc = function (e, t) {
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
    (t.inc = T),
    (t.diff = S),
    (t.compareIdentifiers = v);
var y = /^[0-9]+$/;
function v(e, t) {
    var n = y.test(e),
        r = y.test(t);
    return n && r && ((e *= 1), (t *= 1)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
function N(e, t) {
    return v(t, e);
}
function C(e, t) {
    return new I(e, t).major;
}
function b(e, t) {
    return new I(e, t).minor;
}
function R(e, t) {
    return new I(e, t).patch;
}
function O(e, t, n) {
    return new I(e, n).compare(new I(t, n));
}
function D(e, t) {
    return O(e, t, !0);
}
function L(e, t, n) {
    var r = new I(e, n),
        i = new I(t, n);
    return r.compare(i) || r.compareBuild(i);
}
function w(e, t, n) {
    return O(t, e, n);
}
function x(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(e, r, n);
    });
}
function M(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(r, e, n);
    });
}
function P(e, t, n) {
    return O(e, t, n) > 0;
}
function k(e, t, n) {
    return 0 > O(e, t, n);
}
function U(e, t, n) {
    return 0 === O(e, t, n);
}
function G(e, t, n) {
    return 0 !== O(e, t, n);
}
function F(e, t, n) {
    return O(e, t, n) >= 0;
}
function V(e, t, n) {
    return 0 >= O(e, t, n);
}
function B(e, t, n, r) {
    switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
        case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
        case "":
        case "=":
        case "==":
            return U(e, n, r);
        case "!=":
            return G(e, n, r);
        case ">":
            return P(e, n, r);
        case ">=":
            return F(e, n, r);
        case "<":
            return k(e, n, r);
        case "<=":
            return V(e, n, r);
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
        this.semver === j ? (this.value = "") : (this.value = this.operator + this.semver.version),
        r("comp", this);
}
(t.rcompareIdentifiers = N),
    (t.major = C),
    (t.minor = b),
    (t.patch = R),
    (t.compare = O),
    (t.compareLoose = D),
    (t.compareBuild = L),
    (t.rcompare = w),
    (t.sort = x),
    (t.rsort = M),
    (t.gt = P),
    (t.lt = k),
    (t.eq = U),
    (t.neq = G),
    (t.gte = F),
    (t.lte = V),
    (t.cmp = B),
    (t.Comparator = H);
var j = {};
function Y(e, t) {
    if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), e instanceof Y))
        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
        else return new Y(e.raw, t);
    if (e instanceof H) return new Y(e.value, t);
    if (!(this instanceof Y)) return new Y(e, t);
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
function W(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length; )
        (n = r.every(function (e) {
            return i.intersects(e, t);
        })),
            (i = r.pop());
    return n;
}
function K(e, t) {
    return new Y(e, t).set.map(function (e) {
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
        r("caret", (e = X(e, t))),
        r("tildes", (e = q(e, t))),
        r("xrange", (e = J(e, t))),
        r("stars", (e = et(e, t))),
        e
    );
}
function $(e) {
    return !e || "x" === e.toLowerCase() || "*" === e;
}
function q(e, t) {
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
    return e.replace(n, function (t, n, i, s, a) {
        var o;
        return (
            r("tilde", e, t, n, i, s, a),
            $(n)
                ? (o = "")
                : $(i)
                  ? (o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                  : $(s)
                    ? (o = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0")
                    : a
                      ? (r("replaceTilde pr", a),
                        (o = ">=" + n + "." + i + "." + s + "-" + a + " <" + n + "." + (+i + 1) + ".0"))
                      : (o = ">=" + n + "." + i + "." + s + " <" + n + "." + (+i + 1) + ".0"),
            r("tilde return", o),
            o
        );
    });
}
function X(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return Q(e, t);
        })
        .join(" ");
}
function Q(e, t) {
    r("caret", e, t);
    var n = t.loose ? l[c.CARETLOOSE] : l[c.CARET];
    return e.replace(n, function (t, n, i, s, a) {
        var o;
        return (
            r("caret", e, t, n, i, s, a),
            $(n)
                ? (o = "")
                : $(i)
                  ? (o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                  : $(s)
                    ? (o =
                          "0" === n
                              ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0"
                              : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0")
                    : a
                      ? (r("replaceCaret pr", a),
                        (o =
                            "0" === n
                                ? "0" === i
                                    ? ">=" + n + "." + i + "." + s + "-" + a + " <" + n + "." + i + "." + (+s + 1)
                                    : ">=" + n + "." + i + "." + s + "-" + a + " <" + n + "." + (+i + 1) + ".0"
                                : ">=" + n + "." + i + "." + s + "-" + a + " <" + (+n + 1) + ".0.0"))
                      : (r("no pr"),
                        (o =
                            "0" === n
                                ? "0" === i
                                    ? ">=" + n + "." + i + "." + s + " <" + n + "." + i + "." + (+s + 1)
                                    : ">=" + n + "." + i + "." + s + " <" + n + "." + (+i + 1) + ".0"
                                : ">=" + n + "." + i + "." + s + " <" + (+n + 1) + ".0.0")),
            r("caret return", o),
            o
        );
    });
}
function J(e, t) {
    return (
        r("replaceXRanges", e, t),
        e
            .split(/\s+/)
            .map(function (e) {
                return ee(e, t);
            })
            .join(" ")
    );
}
function ee(e, t) {
    e = e.trim();
    var n = t.loose ? l[c.XRANGELOOSE] : l[c.XRANGE];
    return e.replace(n, function (n, i, s, a, o, l) {
        r("xRange", e, n, i, s, a, o, l);
        var u = $(s),
            c = u || $(a),
            d = c || $(o),
            _ = d;
        return (
            "=" === i && _ && (i = ""),
            (l = t.includePrerelease ? "-0" : ""),
            u
                ? (n = ">" === i || "<" === i ? "<0.0.0-0" : "*")
                : i && _
                  ? (c && (a = 0),
                    (o = 0),
                    ">" === i
                        ? ((i = ">="), c ? ((s = +s + 1), (a = 0)) : (a = +a + 1), (o = 0))
                        : "<=" === i && ((i = "<"), c ? (s = +s + 1) : (a = +a + 1)),
                    (n = i + s + "." + a + "." + o + l))
                  : c
                    ? (n = ">=" + s + ".0.0" + l + " <" + (+s + 1) + ".0.0" + l)
                    : d && (n = ">=" + s + "." + a + ".0" + l + " <" + s + "." + (+a + 1) + ".0" + l),
            r("xRange return", n),
            n
        );
    });
}
function et(e, t) {
    return r("replaceStars", e, t), e.trim().replace(l[c.STAR], "");
}
function en(e, t, n, r, i, s, a, o, l, u, c, d, _) {
    return (
        (t = $(n) ? "" : $(r) ? ">=" + n + ".0.0" : $(i) ? ">=" + n + "." + r + ".0" : ">=" + t) +
        " " +
        (o = $(l)
            ? ""
            : $(u)
              ? "<" + (+l + 1) + ".0.0"
              : $(c)
                ? "<" + l + "." + (+u + 1) + ".0"
                : d
                  ? "<=" + l + "." + u + "." + c + "-" + d
                  : "<=" + o)
    ).trim();
}
function er(e, t, n) {
    for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
    if (t.prerelease.length && !n.includePrerelease) {
        for (i = 0; i < e.length; i++)
            if ((r(e[i].semver), e[i].semver !== j && e[i].semver.prerelease.length > 0)) {
                var s = e[i].semver;
                if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) return !0;
            }
        return !1;
    }
    return !0;
}
function ei(e, t, n) {
    try {
        t = new Y(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
function es(e, t, n) {
    var r = null,
        i = null;
    try {
        var s = new Y(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            s.test(e) && (!r || -1 === i.compare(e)) && (i = new I((r = e), n));
        }),
        r
    );
}
function ea(e, t, n) {
    var r = null,
        i = null;
    try {
        var s = new Y(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            s.test(e) && (!r || 1 === i.compare(e)) && (i = new I((r = e), n));
        }),
        r
    );
}
function eo(e, t) {
    e = new Y(e, t);
    var n = new I("0.0.0");
    if (e.test(n) || ((n = new I("0.0.0-0")), e.test(n))) return n;
    n = null;
    for (var r = 0; r < e.set.length; ++r)
        e.set[r].forEach(function (e) {
            var t = new I(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                    (!n || P(n, t)) && (n = t);
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
function el(e, t) {
    try {
        return new Y(e, t).range || "*";
    } catch (e) {
        return null;
    }
}
function eu(e, t, n) {
    return ed(e, t, "<", n);
}
function ec(e, t, n) {
    return ed(e, t, ">", n);
}
function ed(e, t, n, r) {
    switch (((e = new I(e, r)), (t = new Y(t, r)), n)) {
        case ">":
            (i = P), (s = V), (a = k), (o = ">"), (l = ">=");
            break;
        case "<":
            (i = k), (s = F), (a = P), (o = "<"), (l = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (ei(e, t, r)) return !1;
    for (var i, s, a, o, l, u = 0; u < t.set.length; ++u) {
        var c = t.set[u],
            d = null,
            _ = null;
        if (
            (c.forEach(function (e) {
                e.semver === j && (e = new H(">=0.0.0")),
                    (d = d || e),
                    (_ = _ || e),
                    i(e.semver, d.semver, r) ? (d = e) : a(e.semver, _.semver, r) && (_ = e);
            }),
            d.operator === o ||
                d.operator === l ||
                ((!_.operator || _.operator === o) && s(e, _.semver)) ||
                (_.operator === l && a(e, _.semver)))
        )
            return !1;
    }
    return !0;
}
function e_(e, t) {
    var n = E(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
}
function ef(e, t, n) {
    return (e = new Y(e, n)), (t = new Y(t, n)), e.intersects(t);
}
function ep(e, t) {
    if (e instanceof I) return e;
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
        n[2] ? (this.semver = new I(n[2], this.options.loose)) : (this.semver = j);
}),
    (H.prototype.toString = function () {
        return this.value;
    }),
    (H.prototype.test = function (e) {
        if ((r("Comparator.test", e, this.options.loose), this.semver === j || e === j)) return !0;
        if ("string" == typeof e)
            try {
                e = new I(e, this.options);
            } catch (e) {
                return !1;
            }
        return B(e, this.operator, this.semver, this.options);
    }),
    (H.prototype.intersects = function (e, t) {
        if (!(e instanceof H)) throw TypeError("a Comparator is required");
        if (((t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }), "" === this.operator))
            return "" === this.value || ((n = new Y(e.value, t)), ei(this.value, n, t));
        if ("" === e.operator) return "" === e.value || ((n = new Y(this.value, t)), ei(e.semver, n, t));
        var n,
            r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
            i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            s = this.semver.version === e.semver.version,
            a = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
            o =
                B(this.semver, "<", e.semver, t) &&
                (">=" === this.operator || ">" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
            l =
                B(this.semver, ">", e.semver, t) &&
                ("<=" === this.operator || "<" === this.operator) &&
                (">=" === e.operator || ">" === e.operator);
        return r || i || (s && a) || o || l;
    }),
    (t.Range = Y),
    (Y.prototype.format = function () {
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
    (Y.prototype.toString = function () {
        return this.range;
    }),
    (Y.prototype.parseRange = function (e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? l[c.HYPHENRANGELOOSE] : l[c.HYPHENRANGE];
        r("hyphen replace", (e = e.replace(n, en))),
            r("comparator trim", (e = e.replace(l[c.COMPARATORTRIM], h)), l[c.COMPARATORTRIM]),
            (e = (e = (e = e.replace(l[c.TILDETRIM], f)).replace(l[c.CARETTRIM], p)).split(/\s+/).join(" "));
        var i = t ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
            s = e
                .split(" ")
                .map(function (e) {
                    return z(e, this.options);
                }, this)
                .join(" ")
                .split(/\s+/);
        return (
            this.options.loose &&
                (s = s.filter(function (e) {
                    return !!e.match(i);
                })),
            (s = s.map(function (e) {
                return new H(e, this.options);
            }, this))
        );
    }),
    (Y.prototype.intersects = function (e, t) {
        if (!(e instanceof Y)) throw TypeError("a Range is required");
        return this.set.some(function (n) {
            return (
                W(n, t) &&
                e.set.some(function (e) {
                    return (
                        W(e, t) &&
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
    (t.toComparators = K),
    (Y.prototype.test = function (e) {
        if (!e) return !1;
        if ("string" == typeof e)
            try {
                e = new I(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var t = 0; t < this.set.length; t++) if (er(this.set[t], e, this.options)) return !0;
        return !1;
    }),
    (t.satisfies = ei),
    (t.maxSatisfying = es),
    (t.minSatisfying = ea),
    (t.minVersion = eo),
    (t.validRange = el),
    (t.ltr = eu),
    (t.gtr = ec),
    (t.outside = ed),
    (t.prerelease = e_),
    (t.intersects = ef),
    (t.coerce = ep);
