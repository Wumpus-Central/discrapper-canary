var r,
    i = n(72290);
(t = e.exports = y),
    (r =
        "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift("SEMVER"), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = "2.0.0");
var a = 256,
    s = Number.MAX_SAFE_INTEGER || 9007199254740991,
    o = 16,
    l = (t.re = []),
    c = (t.src = []),
    u = (t.tokens = {}),
    d = 0;
function f(e) {
    u[e] = d++;
}
f("NUMERICIDENTIFIER"),
    (c[u.NUMERICIDENTIFIER] = "0|[1-9]\\d*"),
    f("NUMERICIDENTIFIERLOOSE"),
    (c[u.NUMERICIDENTIFIERLOOSE] = "[0-9]+"),
    f("NONNUMERICIDENTIFIER"),
    (c[u.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
    f("MAINVERSION"),
    (c[u.MAINVERSION] =
        "(" + c[u.NUMERICIDENTIFIER] + ")\\.(" + c[u.NUMERICIDENTIFIER] + ")\\.(" + c[u.NUMERICIDENTIFIER] + ")"),
    f("MAINVERSIONLOOSE"),
    (c[u.MAINVERSIONLOOSE] =
        "(" +
        c[u.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        c[u.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        c[u.NUMERICIDENTIFIERLOOSE] +
        ")"),
    f("PRERELEASEIDENTIFIER"),
    (c[u.PRERELEASEIDENTIFIER] = "(?:" + c[u.NUMERICIDENTIFIER] + "|" + c[u.NONNUMERICIDENTIFIER] + ")"),
    f("PRERELEASEIDENTIFIERLOOSE"),
    (c[u.PRERELEASEIDENTIFIERLOOSE] = "(?:" + c[u.NUMERICIDENTIFIERLOOSE] + "|" + c[u.NONNUMERICIDENTIFIER] + ")"),
    f("PRERELEASE"),
    (c[u.PRERELEASE] = "(?:-(" + c[u.PRERELEASEIDENTIFIER] + "(?:\\." + c[u.PRERELEASEIDENTIFIER] + ")*))"),
    f("PRERELEASELOOSE"),
    (c[u.PRERELEASELOOSE] =
        "(?:-?(" + c[u.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + c[u.PRERELEASEIDENTIFIERLOOSE] + ")*))"),
    f("BUILDIDENTIFIER"),
    (c[u.BUILDIDENTIFIER] = "[0-9A-Za-z-]+"),
    f("BUILD"),
    (c[u.BUILD] = "(?:\\+(" + c[u.BUILDIDENTIFIER] + "(?:\\." + c[u.BUILDIDENTIFIER] + ")*))"),
    f("FULL"),
    f("FULLPLAIN"),
    (c[u.FULLPLAIN] = "v?" + c[u.MAINVERSION] + c[u.PRERELEASE] + "?" + c[u.BUILD] + "?"),
    (c[u.FULL] = "^" + c[u.FULLPLAIN] + "$"),
    f("LOOSEPLAIN"),
    (c[u.LOOSEPLAIN] = "[v=\\s]*" + c[u.MAINVERSIONLOOSE] + c[u.PRERELEASELOOSE] + "?" + c[u.BUILD] + "?"),
    f("LOOSE"),
    (c[u.LOOSE] = "^" + c[u.LOOSEPLAIN] + "$"),
    f("GTLT"),
    (c[u.GTLT] = "((?:<|>)?=?)"),
    f("XRANGEIDENTIFIERLOOSE"),
    (c[u.XRANGEIDENTIFIERLOOSE] = c[u.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
    f("XRANGEIDENTIFIER"),
    (c[u.XRANGEIDENTIFIER] = c[u.NUMERICIDENTIFIER] + "|x|X|\\*"),
    f("XRANGEPLAIN"),
    (c[u.XRANGEPLAIN] =
        "[v=\\s]*(" +
        c[u.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        c[u.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        c[u.XRANGEIDENTIFIER] +
        ")(?:" +
        c[u.PRERELEASE] +
        ")?" +
        c[u.BUILD] +
        "?)?)?"),
    f("XRANGEPLAINLOOSE"),
    (c[u.XRANGEPLAINLOOSE] =
        "[v=\\s]*(" +
        c[u.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        c[u.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        c[u.XRANGEIDENTIFIERLOOSE] +
        ")(?:" +
        c[u.PRERELEASELOOSE] +
        ")?" +
        c[u.BUILD] +
        "?)?)?"),
    f("XRANGE"),
    (c[u.XRANGE] = "^" + c[u.GTLT] + "\\s*" + c[u.XRANGEPLAIN] + "$"),
    f("XRANGELOOSE"),
    (c[u.XRANGELOOSE] = "^" + c[u.GTLT] + "\\s*" + c[u.XRANGEPLAINLOOSE] + "$"),
    f("COERCE"),
    (c[u.COERCE] = "(^|[^\\d])(\\d{1," + o + "})(?:\\.(\\d{1," + o + "}))?(?:\\.(\\d{1," + o + "}))?(?:$|[^\\d])"),
    f("COERCERTL"),
    (l[u.COERCERTL] = RegExp(c[u.COERCE], "g")),
    f("LONETILDE"),
    (c[u.LONETILDE] = "(?:~>?)"),
    f("TILDETRIM"),
    (c[u.TILDETRIM] = "(\\s*)" + c[u.LONETILDE] + "\\s+"),
    (l[u.TILDETRIM] = RegExp(c[u.TILDETRIM], "g"));
var p = "$1~";
f("TILDE"),
    (c[u.TILDE] = "^" + c[u.LONETILDE] + c[u.XRANGEPLAIN] + "$"),
    f("TILDELOOSE"),
    (c[u.TILDELOOSE] = "^" + c[u.LONETILDE] + c[u.XRANGEPLAINLOOSE] + "$"),
    f("LONECARET"),
    (c[u.LONECARET] = "(?:\\^)"),
    f("CARETTRIM"),
    (c[u.CARETTRIM] = "(\\s*)" + c[u.LONECARET] + "\\s+"),
    (l[u.CARETTRIM] = RegExp(c[u.CARETTRIM], "g"));
var _ = "$1^";
f("CARET"),
    (c[u.CARET] = "^" + c[u.LONECARET] + c[u.XRANGEPLAIN] + "$"),
    f("CARETLOOSE"),
    (c[u.CARETLOOSE] = "^" + c[u.LONECARET] + c[u.XRANGEPLAINLOOSE] + "$"),
    f("COMPARATORLOOSE"),
    (c[u.COMPARATORLOOSE] = "^" + c[u.GTLT] + "\\s*(" + c[u.LOOSEPLAIN] + ")$|^$"),
    f("COMPARATOR"),
    (c[u.COMPARATOR] = "^" + c[u.GTLT] + "\\s*(" + c[u.FULLPLAIN] + ")$|^$"),
    f("COMPARATORTRIM"),
    (c[u.COMPARATORTRIM] = "(\\s*)" + c[u.GTLT] + "\\s*(" + c[u.LOOSEPLAIN] + "|" + c[u.XRANGEPLAIN] + ")"),
    (l[u.COMPARATORTRIM] = RegExp(c[u.COMPARATORTRIM], "g"));
var h = "$1$2$3";
f("HYPHENRANGE"),
    (c[u.HYPHENRANGE] = "^\\s*(" + c[u.XRANGEPLAIN] + ")\\s+-\\s+(" + c[u.XRANGEPLAIN] + ")\\s*$"),
    f("HYPHENRANGELOOSE"),
    (c[u.HYPHENRANGELOOSE] = "^\\s*(" + c[u.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + c[u.XRANGEPLAINLOOSE] + ")\\s*$"),
    f("STAR"),
    (c[u.STAR] = "(<|>)?=?\\s*\\*");
for (var m = 0; m < d; m++) r(m, c[m]), l[m] || (l[m] = new RegExp(c[m]));
function g(e, t) {
    if (
        ((t && "object" == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1,
            }),
        e instanceof y)
    )
        return e;
    if ("string" != typeof e || e.length > a || !(t.loose ? l[u.LOOSE] : l[u.FULL]).test(e)) return null;
    try {
        return new y(e, t);
    } catch (e) {
        return null;
    }
}
function E(e, t) {
    var n = g(e, t);
    return n ? n.version : null;
}
function b(e, t) {
    var n = g(e.trim().replace(/^[=v]+/, ""), t);
    return n ? n.version : null;
}
function y(e, t) {
    if (
        ((t && "object" == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1,
            }),
        e instanceof y)
    )
        if (e.loose === t.loose) return e;
        else e = e.version;
    else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
    if (e.length > a) throw TypeError("version is longer than " + a + " characters");
    if (!(this instanceof y)) return new y(e, t);
    r("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? l[u.LOOSE] : l[u.FULL]);
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
function O(e, t, n, r) {
    "string" == typeof n && ((r = n), (n = void 0));
    try {
        return new y(e, n).inc(t, r).version;
    } catch (e) {
        return null;
    }
}
function A(e, t) {
    if (k(e, t)) return null;
    var n = g(e),
        r = g(t),
        i = "";
    if (n.prerelease.length || r.prerelease.length) {
        i = "pre";
        var a = "prerelease";
    }
    for (var s in n) if (("major" === s || "minor" === s || "patch" === s) && n[s] !== r[s]) return i + s;
    return a;
}
(t.parse = g),
    (t.valid = E),
    (t.clean = b),
    (t.SemVer = y),
    (y.prototype.format = function () {
        return (
            (this.version = this.major + "." + this.minor + "." + this.patch),
            this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
            this.version
        );
    }),
    (y.prototype.toString = function () {
        return this.version;
    }),
    (y.prototype.compare = function (e) {
        return (
            r("SemVer.compare", this.version, this.options, e),
            e instanceof y || (e = new y(e, this.options)),
            this.compareMain(e) || this.comparePre(e)
        );
    }),
    (y.prototype.compareMain = function (e) {
        return (
            e instanceof y || (e = new y(e, this.options)),
            S(this.major, e.major) || S(this.minor, e.minor) || S(this.patch, e.patch)
        );
    }),
    (y.prototype.comparePre = function (e) {
        if ((e instanceof y || (e = new y(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
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
            else return S(n, i);
        } while (++t);
    }),
    (y.prototype.compareBuild = function (e) {
        e instanceof y || (e = new y(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if ((r("prerelease compare", t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return S(n, i);
        } while (++t);
    }),
    (y.prototype.inc = function (e, t) {
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
    (t.inc = O),
    (t.diff = A),
    (t.compareIdentifiers = S);
var v = /^[0-9]+$/;
function S(e, t) {
    var n = v.test(e),
        r = v.test(t);
    return n && r && ((e *= 1), (t *= 1)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
function I(e, t) {
    return S(t, e);
}
function T(e, t) {
    return new y(e, t).major;
}
function C(e, t) {
    return new y(e, t).minor;
}
function N(e, t) {
    return new y(e, t).patch;
}
function R(e, t, n) {
    return new y(e, n).compare(new y(t, n));
}
function w(e, t) {
    return R(e, t, !0);
}
function P(e, t, n) {
    var r = new y(e, n),
        i = new y(t, n);
    return r.compare(i) || r.compareBuild(i);
}
function D(e, t, n) {
    return R(t, e, n);
}
function x(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(e, r, n);
    });
}
function L(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(r, e, n);
    });
}
function j(e, t, n) {
    return R(e, t, n) > 0;
}
function M(e, t, n) {
    return 0 > R(e, t, n);
}
function k(e, t, n) {
    return 0 === R(e, t, n);
}
function U(e, t, n) {
    return 0 !== R(e, t, n);
}
function G(e, t, n) {
    return R(e, t, n) >= 0;
}
function V(e, t, n) {
    return 0 >= R(e, t, n);
}
function F(e, t, n, r) {
    switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
        case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
        case "":
        case "=":
        case "==":
            return k(e, n, r);
        case "!=":
            return U(e, n, r);
        case ">":
            return j(e, n, r);
        case ">=":
            return G(e, n, r);
        case "<":
            return M(e, n, r);
        case "<=":
            return V(e, n, r);
        default:
            throw TypeError("Invalid operator: " + t);
    }
}
function B(e, t) {
    if (
        ((t && "object" == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1,
            }),
        e instanceof B)
    )
        if (!!t.loose === e.loose) return e;
        else e = e.value;
    if (!(this instanceof B)) return new B(e, t);
    r("comparator", e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === H ? (this.value = "") : (this.value = this.operator + this.semver.version),
        r("comp", this);
}
(t.rcompareIdentifiers = I),
    (t.major = T),
    (t.minor = C),
    (t.patch = N),
    (t.compare = R),
    (t.compareLoose = w),
    (t.compareBuild = P),
    (t.rcompare = D),
    (t.sort = x),
    (t.rsort = L),
    (t.gt = j),
    (t.lt = M),
    (t.eq = k),
    (t.neq = U),
    (t.gte = G),
    (t.lte = V),
    (t.cmp = F),
    (t.Comparator = B);
var H = {};
function Y(e, t) {
    if (
        ((t && "object" == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1,
            }),
        e instanceof Y)
    )
        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
        else return new Y(e.raw, t);
    if (e instanceof B) return new Y(e.value, t);
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
        r("caret", (e = Q(e, t))),
        r("tildes", (e = X(e, t))),
        r("xrange", (e = J(e, t))),
        r("stars", (e = et(e, t))),
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
    var n = t.loose ? l[u.TILDELOOSE] : l[u.TILDE];
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
            return $(e, t);
        })
        .join(" ");
}
function $(e, t) {
    r("caret", e, t);
    var n = t.loose ? l[u.CARETLOOSE] : l[u.CARET];
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
    var n = t.loose ? l[u.XRANGELOOSE] : l[u.XRANGE];
    return e.replace(n, function (n, i, a, s, o, l) {
        r("xRange", e, n, i, a, s, o, l);
        var c = q(a),
            u = c || q(s),
            d = u || q(o),
            f = d;
        return (
            "=" === i && f && (i = ""),
            (l = t.includePrerelease ? "-0" : ""),
            c
                ? (n = ">" === i || "<" === i ? "<0.0.0-0" : "*")
                : i && f
                  ? (u && (s = 0),
                    (o = 0),
                    ">" === i
                        ? ((i = ">="), u ? ((a = +a + 1), (s = 0)) : (s = +s + 1), (o = 0))
                        : "<=" === i && ((i = "<"), u ? (a = +a + 1) : (s = +s + 1)),
                    (n = i + a + "." + s + "." + o + l))
                  : u
                    ? (n = ">=" + a + ".0.0" + l + " <" + (+a + 1) + ".0.0" + l)
                    : d && (n = ">=" + a + "." + s + ".0" + l + " <" + a + "." + (+s + 1) + ".0" + l),
            r("xRange return", n),
            n
        );
    });
}
function et(e, t) {
    return r("replaceStars", e, t), e.trim().replace(l[u.STAR], "");
}
function en(e, t, n, r, i, a, s, o, l, c, u, d, f) {
    return (
        (t = q(n) ? "" : q(r) ? ">=" + n + ".0.0" : q(i) ? ">=" + n + "." + r + ".0" : ">=" + t) +
        " " +
        (o = q(l)
            ? ""
            : q(c)
              ? "<" + (+l + 1) + ".0.0"
              : q(u)
                ? "<" + l + "." + (+c + 1) + ".0"
                : d
                  ? "<=" + l + "." + c + "." + u + "-" + d
                  : "<=" + o)
    ).trim();
}
function er(e, t, n) {
    for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
    if (t.prerelease.length && !n.includePrerelease) {
        for (i = 0; i < e.length; i++)
            if ((r(e[i].semver), e[i].semver !== H && e[i].semver.prerelease.length > 0)) {
                var a = e[i].semver;
                if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0;
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
function ea(e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new Y(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || -1 === i.compare(e)) && (i = new y((r = e), n));
        }),
        r
    );
}
function es(e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new Y(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || 1 === i.compare(e)) && (i = new y((r = e), n));
        }),
        r
    );
}
function eo(e, t) {
    e = new Y(e, t);
    var n = new y("0.0.0");
    if (e.test(n) || ((n = new y("0.0.0-0")), e.test(n))) return n;
    n = null;
    for (var r = 0; r < e.set.length; ++r)
        e.set[r].forEach(function (e) {
            var t = new y(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                    (!n || j(n, t)) && (n = t);
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
function ec(e, t, n) {
    return ed(e, t, "<", n);
}
function eu(e, t, n) {
    return ed(e, t, ">", n);
}
function ed(e, t, n, r) {
    switch (((e = new y(e, r)), (t = new Y(t, r)), n)) {
        case ">":
            (i = j), (a = V), (s = M), (o = ">"), (l = ">=");
            break;
        case "<":
            (i = M), (a = G), (s = j), (o = "<"), (l = "<=");
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (ei(e, t, r)) return !1;
    for (var i, a, s, o, l, c = 0; c < t.set.length; ++c) {
        var u = t.set[c],
            d = null,
            f = null;
        if (
            (u.forEach(function (e) {
                e.semver === H && (e = new B(">=0.0.0")),
                    (d = d || e),
                    (f = f || e),
                    i(e.semver, d.semver, r) ? (d = e) : s(e.semver, f.semver, r) && (f = e);
            }),
            d.operator === o ||
                d.operator === l ||
                ((!f.operator || f.operator === o) && a(e, f.semver)) ||
                (f.operator === l && s(e, f.semver)))
        )
            return !1;
    }
    return !0;
}
function ef(e, t) {
    var n = g(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
}
function ep(e, t, n) {
    return (e = new Y(e, n)), (t = new Y(t, n)), e.intersects(t);
}
function e_(e, t) {
    if (e instanceof y) return e;
    if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null;
    var n,
        r = null;
    if ((t = t || {}).rtl) {
        for (; (n = l[u.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
            (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
                (l[u.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
        l[u.COERCERTL].lastIndex = -1;
    } else r = e.match(l[u.COERCE]);
    return null === r ? null : g(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t);
}
(B.prototype.parse = function (e) {
    var t = this.options.loose ? l[u.COMPARATORLOOSE] : l[u.COMPARATOR],
        n = e.match(t);
    if (!n) throw TypeError("Invalid comparator: " + e);
    (this.operator = void 0 !== n[1] ? n[1] : ""),
        "=" === this.operator && (this.operator = ""),
        n[2] ? (this.semver = new y(n[2], this.options.loose)) : (this.semver = H);
}),
    (B.prototype.toString = function () {
        return this.value;
    }),
    (B.prototype.test = function (e) {
        if ((r("Comparator.test", e, this.options.loose), this.semver === H || e === H)) return !0;
        if ("string" == typeof e)
            try {
                e = new y(e, this.options);
            } catch (e) {
                return !1;
            }
        return F(e, this.operator, this.semver, this.options);
    }),
    (B.prototype.intersects = function (e, t) {
        if (!(e instanceof B)) throw TypeError("a Comparator is required");
        if (
            ((t && "object" == typeof t) ||
                (t = {
                    loose: !!t,
                    includePrerelease: !1,
                }),
            "" === this.operator)
        )
            return "" === this.value || ((n = new Y(e.value, t)), ei(this.value, n, t));
        if ("" === e.operator) return "" === e.value || ((n = new Y(this.value, t)), ei(e.semver, n, t));
        var n,
            r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
            i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            a = this.semver.version === e.semver.version,
            s = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
            o =
                F(this.semver, "<", e.semver, t) &&
                (">=" === this.operator || ">" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
            l =
                F(this.semver, ">", e.semver, t) &&
                ("<=" === this.operator || "<" === this.operator) &&
                (">=" === e.operator || ">" === e.operator);
        return r || i || (a && s) || o || l;
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
        var n = t ? l[u.HYPHENRANGELOOSE] : l[u.HYPHENRANGE];
        r("hyphen replace", (e = e.replace(n, en))),
            r("comparator trim", (e = e.replace(l[u.COMPARATORTRIM], h)), l[u.COMPARATORTRIM]),
            (e = (e = (e = e.replace(l[u.TILDETRIM], p)).replace(l[u.CARETTRIM], _)).split(/\s+/).join(" "));
        var i = t ? l[u.COMPARATORLOOSE] : l[u.COMPARATOR],
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
                return new B(e, this.options);
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
                e = new y(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var t = 0; t < this.set.length; t++) if (er(this.set[t], e, this.options)) return !0;
        return !1;
    }),
    (t.satisfies = ei),
    (t.maxSatisfying = ea),
    (t.minSatisfying = es),
    (t.minVersion = eo),
    (t.validRange = el),
    (t.ltr = ec),
    (t.gtr = eu),
    (t.outside = ed),
    (t.prerelease = ef),
    (t.intersects = ep),
    (t.coerce = e_);
