var i,
    a = r(444675);
(n = e.exports = b),
    (i =
        'object' == typeof a && a.env && a.env.NODE_DEBUG && /\bsemver\b/i.test(a.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift('SEMVER'), console.log.apply(console, e);
              }
            : function () {}),
    (n.SEMVER_SPEC_VERSION = '2.0.0');
var o = 256,
    s = Number.MAX_SAFE_INTEGER || 9007199254740991,
    l = 16,
    u = (n.re = []),
    c = (n.src = []),
    d = (n.tokens = {}),
    f = 0;
function p(e) {
    d[e] = f++;
}
p('NUMERICIDENTIFIER'), (c[d.NUMERICIDENTIFIER] = '0|[1-9]\\d*'), p('NUMERICIDENTIFIERLOOSE'), (c[d.NUMERICIDENTIFIERLOOSE] = '[0-9]+'), p('NONNUMERICIDENTIFIER'), (c[d.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'), p('MAINVERSION'), (c[d.MAINVERSION] = '(' + c[d.NUMERICIDENTIFIER] + ')\\.(' + c[d.NUMERICIDENTIFIER] + ')\\.(' + c[d.NUMERICIDENTIFIER] + ')'), p('MAINVERSIONLOOSE'), (c[d.MAINVERSIONLOOSE] = '(' + c[d.NUMERICIDENTIFIERLOOSE] + ')\\.(' + c[d.NUMERICIDENTIFIERLOOSE] + ')\\.(' + c[d.NUMERICIDENTIFIERLOOSE] + ')'), p('PRERELEASEIDENTIFIER'), (c[d.PRERELEASEIDENTIFIER] = '(?:' + c[d.NUMERICIDENTIFIER] + '|' + c[d.NONNUMERICIDENTIFIER] + ')'), p('PRERELEASEIDENTIFIERLOOSE'), (c[d.PRERELEASEIDENTIFIERLOOSE] = '(?:' + c[d.NUMERICIDENTIFIERLOOSE] + '|' + c[d.NONNUMERICIDENTIFIER] + ')'), p('PRERELEASE'), (c[d.PRERELEASE] = '(?:-(' + c[d.PRERELEASEIDENTIFIER] + '(?:\\.' + c[d.PRERELEASEIDENTIFIER] + ')*))'), p('PRERELEASELOOSE'), (c[d.PRERELEASELOOSE] = '(?:-?(' + c[d.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + c[d.PRERELEASEIDENTIFIERLOOSE] + ')*))'), p('BUILDIDENTIFIER'), (c[d.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'), p('BUILD'), (c[d.BUILD] = '(?:\\+(' + c[d.BUILDIDENTIFIER] + '(?:\\.' + c[d.BUILDIDENTIFIER] + ')*))'), p('FULL'), p('FULLPLAIN'), (c[d.FULLPLAIN] = 'v?' + c[d.MAINVERSION] + c[d.PRERELEASE] + '?' + c[d.BUILD] + '?'), (c[d.FULL] = '^' + c[d.FULLPLAIN] + '$'), p('LOOSEPLAIN'), (c[d.LOOSEPLAIN] = '[v=\\s]*' + c[d.MAINVERSIONLOOSE] + c[d.PRERELEASELOOSE] + '?' + c[d.BUILD] + '?'), p('LOOSE'), (c[d.LOOSE] = '^' + c[d.LOOSEPLAIN] + '$'), p('GTLT'), (c[d.GTLT] = '((?:<|>)?=?)'), p('XRANGEIDENTIFIERLOOSE'), (c[d.XRANGEIDENTIFIERLOOSE] = c[d.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'), p('XRANGEIDENTIFIER'), (c[d.XRANGEIDENTIFIER] = c[d.NUMERICIDENTIFIER] + '|x|X|\\*'), p('XRANGEPLAIN'), (c[d.XRANGEPLAIN] = '[v=\\s]*(' + c[d.XRANGEIDENTIFIER] + ')(?:\\.(' + c[d.XRANGEIDENTIFIER] + ')(?:\\.(' + c[d.XRANGEIDENTIFIER] + ')(?:' + c[d.PRERELEASE] + ')?' + c[d.BUILD] + '?)?)?'), p('XRANGEPLAINLOOSE'), (c[d.XRANGEPLAINLOOSE] = '[v=\\s]*(' + c[d.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + c[d.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + c[d.XRANGEIDENTIFIERLOOSE] + ')(?:' + c[d.PRERELEASELOOSE] + ')?' + c[d.BUILD] + '?)?)?'), p('XRANGE'), (c[d.XRANGE] = '^' + c[d.GTLT] + '\\s*' + c[d.XRANGEPLAIN] + '$'), p('XRANGELOOSE'), (c[d.XRANGELOOSE] = '^' + c[d.GTLT] + '\\s*' + c[d.XRANGEPLAINLOOSE] + '$'), p('COERCE'), (c[d.COERCE] = '(^|[^\\d])(\\d{1,' + l + '})(?:\\.(\\d{1,' + l + '}))?(?:\\.(\\d{1,' + l + '}))?(?:$|[^\\d])'), p('COERCERTL'), (u[d.COERCERTL] = RegExp(c[d.COERCE], 'g')), p('LONETILDE'), (c[d.LONETILDE] = '(?:~>?)'), p('TILDETRIM'), (c[d.TILDETRIM] = '(\\s*)' + c[d.LONETILDE] + '\\s+'), (u[d.TILDETRIM] = RegExp(c[d.TILDETRIM], 'g'));
var h = '$1~';
p('TILDE'), (c[d.TILDE] = '^' + c[d.LONETILDE] + c[d.XRANGEPLAIN] + '$'), p('TILDELOOSE'), (c[d.TILDELOOSE] = '^' + c[d.LONETILDE] + c[d.XRANGEPLAINLOOSE] + '$'), p('LONECARET'), (c[d.LONECARET] = '(?:\\^)'), p('CARETTRIM'), (c[d.CARETTRIM] = '(\\s*)' + c[d.LONECARET] + '\\s+'), (u[d.CARETTRIM] = RegExp(c[d.CARETTRIM], 'g'));
var _ = '$1^';
p('CARET'), (c[d.CARET] = '^' + c[d.LONECARET] + c[d.XRANGEPLAIN] + '$'), p('CARETLOOSE'), (c[d.CARETLOOSE] = '^' + c[d.LONECARET] + c[d.XRANGEPLAINLOOSE] + '$'), p('COMPARATORLOOSE'), (c[d.COMPARATORLOOSE] = '^' + c[d.GTLT] + '\\s*(' + c[d.LOOSEPLAIN] + ')$|^$'), p('COMPARATOR'), (c[d.COMPARATOR] = '^' + c[d.GTLT] + '\\s*(' + c[d.FULLPLAIN] + ')$|^$'), p('COMPARATORTRIM'), (c[d.COMPARATORTRIM] = '(\\s*)' + c[d.GTLT] + '\\s*(' + c[d.LOOSEPLAIN] + '|' + c[d.XRANGEPLAIN] + ')'), (u[d.COMPARATORTRIM] = RegExp(c[d.COMPARATORTRIM], 'g'));
var m = '$1$2$3';
p('HYPHENRANGE'), (c[d.HYPHENRANGE] = '^\\s*(' + c[d.XRANGEPLAIN] + ')\\s+-\\s+(' + c[d.XRANGEPLAIN] + ')\\s*$'), p('HYPHENRANGELOOSE'), (c[d.HYPHENRANGELOOSE] = '^\\s*(' + c[d.XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + c[d.XRANGEPLAINLOOSE] + ')\\s*$'), p('STAR'), (c[d.STAR] = '(<|>)?=?\\s*\\*');
for (var g = 0; g < f; g++) i(g, c[g]), !u[g] && (u[g] = new RegExp(c[g]));
function E(e, n) {
    if (
        ((!n || 'object' != typeof n) &&
            (n = {
                loose: !!n,
                includePrerelease: !1
            }),
        e instanceof b)
    )
        return e;
    if ('string' != typeof e || e.length > o || !(n.loose ? u[d.LOOSE] : u[d.FULL]).test(e)) return null;
    try {
        return new b(e, n);
    } catch (e) {
        return null;
    }
}
function v(e, n) {
    var r = E(e, n);
    return r ? r.version : null;
}
function y(e, n) {
    var r = E(e.trim().replace(/^[=v]+/, ''), n);
    return r ? r.version : null;
}
function b(e, n) {
    if (
        ((!n || 'object' != typeof n) &&
            (n = {
                loose: !!n,
                includePrerelease: !1
            }),
        e instanceof b)
    ) {
        if (e.loose === n.loose) return e;
        e = e.version;
    } else if ('string' != typeof e) throw TypeError('Invalid Version: ' + e);
    if (e.length > o) throw TypeError('version is longer than ' + o + ' characters');
    if (!(this instanceof b)) return new b(e, n);
    i('SemVer', e, n), (this.options = n), (this.loose = !!n.loose);
    var r = e.trim().match(n.loose ? u[d.LOOSE] : u[d.FULL]);
    if (!r) throw TypeError('Invalid Version: ' + e);
    if (((this.raw = e), (this.major = +r[1]), (this.minor = +r[2]), (this.patch = +r[3]), this.major > s || this.major < 0)) throw TypeError('Invalid major version');
    if (this.minor > s || this.minor < 0) throw TypeError('Invalid minor version');
    if (this.patch > s || this.patch < 0) throw TypeError('Invalid patch version');
    r[4]
        ? (this.prerelease = r[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                  var n = +e;
                  if (n >= 0 && n < s) return n;
              }
              return e;
          }))
        : (this.prerelease = []),
        (this.build = r[5] ? r[5].split('.') : []),
        this.format();
}
function I(e, n, r, i) {
    'string' == typeof r && ((i = r), (r = void 0));
    try {
        return new b(e, r).inc(n, i).version;
    } catch (e) {
        return null;
    }
}
function T(e, n) {
    if (B(e, n)) return null;
    var r = E(e),
        i = E(n),
        a = '';
    if (r.prerelease.length || i.prerelease.length) {
        a = 'pre';
        var o = 'prerelease';
    }
    for (var s in r) if (('major' === s || 'minor' === s || 'patch' === s) && r[s] !== i[s]) return a + s;
    return o;
}
(n.parse = E),
    (n.valid = v),
    (n.clean = y),
    (n.SemVer = b),
    (b.prototype.format = function () {
        return (this.version = this.major + '.' + this.minor + '.' + this.patch), this.prerelease.length && (this.version += '-' + this.prerelease.join('.')), this.version;
    }),
    (b.prototype.toString = function () {
        return this.version;
    }),
    (b.prototype.compare = function (e) {
        return i('SemVer.compare', this.version, this.options, e), !(e instanceof b) && (e = new b(e, this.options)), this.compareMain(e) || this.comparePre(e);
    }),
    (b.prototype.compareMain = function (e) {
        return !(e instanceof b) && (e = new b(e, this.options)), A(this.major, e.major) || A(this.minor, e.minor) || A(this.patch, e.patch);
    }),
    (b.prototype.comparePre = function (e) {
        if ((!(e instanceof b) && (e = new b(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var n = 0;
        do {
            var r = this.prerelease[n],
                a = e.prerelease[n];
            if ((i('prerelease compare', n, r, a), void 0 === r && void 0 === a)) return 0;
            if (void 0 === a) return 1;
            else if (void 0 === r) return -1;
            else if (r === a) continue;
            else return A(r, a);
        } while (++n);
    }),
    (b.prototype.compareBuild = function (e) {
        !(e instanceof b) && (e = new b(e, this.options));
        var n = 0;
        do {
            var r = this.build[n],
                a = e.build[n];
            if ((i('prerelease compare', n, r, a), void 0 === r && void 0 === a)) return 0;
            if (void 0 === a) return 1;
            else if (void 0 === r) return -1;
            else if (r === a) continue;
            else return A(r, a);
        } while (++n);
    }),
    (b.prototype.inc = function (e, n) {
        switch (e) {
            case 'premajor':
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc('pre', n);
                break;
            case 'preminor':
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', n);
                break;
            case 'prepatch':
                (this.prerelease.length = 0), this.inc('patch', n), this.inc('pre', n);
                break;
            case 'prerelease':
                0 === this.prerelease.length && this.inc('patch', n), this.inc('pre', n);
                break;
            case 'major':
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, (this.minor = 0), (this.patch = 0), (this.prerelease = []);
                break;
            case 'minor':
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, (this.patch = 0), (this.prerelease = []);
                break;
            case 'patch':
                0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                break;
            case 'pre':
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                    for (var r = this.prerelease.length; --r >= 0; ) 'number' == typeof this.prerelease[r] && (this.prerelease[r]++, (r = -2));
                    -1 === r && this.prerelease.push(0);
                }
                n && (this.prerelease[0] === n ? isNaN(this.prerelease[1]) && (this.prerelease = [n, 0]) : (this.prerelease = [n, 0]));
                break;
            default:
                throw Error('invalid increment argument: ' + e);
        }
        return this.format(), (this.raw = this.version), this;
    }),
    (n.inc = I),
    (n.diff = T),
    (n.compareIdentifiers = A);
var S = /^[0-9]+$/;
function A(e, n) {
    var r = S.test(e),
        i = S.test(n);
    return r && i && ((e = +e), (n = +n)), e === n ? 0 : r && !i ? -1 : i && !r ? 1 : e < n ? -1 : 1;
}
function C(e, n) {
    return A(n, e);
}
function N(e, n) {
    return new b(e, n).major;
}
function R(e, n) {
    return new b(e, n).minor;
}
function O(e, n) {
    return new b(e, n).patch;
}
function D(e, n, r) {
    return new b(e, r).compare(new b(n, r));
}
function L(e, n) {
    return D(e, n, !0);
}
function x(e, n, r) {
    var i = new b(e, r),
        a = new b(n, r);
    return i.compare(a) || i.compareBuild(a);
}
function w(e, n, r) {
    return D(n, e, r);
}
function P(e, r) {
    return e.sort(function (e, i) {
        return n.compareBuild(e, i, r);
    });
}
function M(e, r) {
    return e.sort(function (e, i) {
        return n.compareBuild(i, e, r);
    });
}
function k(e, n, r) {
    return D(e, n, r) > 0;
}
function U(e, n, r) {
    return 0 > D(e, n, r);
}
function B(e, n, r) {
    return 0 === D(e, n, r);
}
function G(e, n, r) {
    return 0 !== D(e, n, r);
}
function Z(e, n, r) {
    return D(e, n, r) >= 0;
}
function F(e, n, r) {
    return 0 >= D(e, n, r);
}
function V(e, n, r, i) {
    switch (n) {
        case '===':
            return 'object' == typeof e && (e = e.version), 'object' == typeof r && (r = r.version), e === r;
        case '!==':
            return 'object' == typeof e && (e = e.version), 'object' == typeof r && (r = r.version), e !== r;
        case '':
        case '=':
        case '==':
            return B(e, r, i);
        case '!=':
            return G(e, r, i);
        case '>':
            return k(e, r, i);
        case '>=':
            return Z(e, r, i);
        case '<':
            return U(e, r, i);
        case '<=':
            return F(e, r, i);
        default:
            throw TypeError('Invalid operator: ' + n);
    }
}
function j(e, n) {
    if (
        ((!n || 'object' != typeof n) &&
            (n = {
                loose: !!n,
                includePrerelease: !1
            }),
        e instanceof j)
    ) {
        if (!!n.loose === e.loose) return e;
        e = e.value;
    }
    if (!(this instanceof j)) return new j(e, n);
    i('comparator', e, n), (this.options = n), (this.loose = !!n.loose), this.parse(e), this.semver === H ? (this.value = '') : (this.value = this.operator + this.semver.version), i('comp', this);
}
(n.rcompareIdentifiers = C), (n.major = N), (n.minor = R), (n.patch = O), (n.compare = D), (n.compareLoose = L), (n.compareBuild = x), (n.rcompare = w), (n.sort = P), (n.rsort = M), (n.gt = k), (n.lt = U), (n.eq = B), (n.neq = G), (n.gte = Z), (n.lte = F), (n.cmp = V), (n.Comparator = j);
var H = {};
function Y(e, n) {
    if (
        ((!n || 'object' != typeof n) &&
            (n = {
                loose: !!n,
                includePrerelease: !1
            }),
        e instanceof Y)
    )
        return !!n.loose === e.loose && !!n.includePrerelease === e.includePrerelease ? e : new Y(e.raw, n);
    if (e instanceof j) return new Y(e.value, n);
    if (!(this instanceof Y)) return new Y(e, n);
    if (
        ((this.options = n),
        (this.loose = !!n.loose),
        (this.includePrerelease = !!n.includePrerelease),
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
        throw TypeError('Invalid SemVer Range: ' + e);
    this.format();
}
function W(e, n) {
    for (var r = !0, i = e.slice(), a = i.pop(); r && i.length; )
        (r = i.every(function (e) {
            return a.intersects(e, n);
        })),
            (a = i.pop());
    return r;
}
function K(e, n) {
    return new Y(e, n).set.map(function (e) {
        return e
            .map(function (e) {
                return e.value;
            })
            .join(' ')
            .trim()
            .split(' ');
    });
}
function z(e, n) {
    return i('comp', e, n), (e = J(e, n)), i('caret', e), (e = Q(e, n)), i('tildes', e), (e = ee(e, n)), i('xrange', e), (e = en(e, n)), i('stars', e), e;
}
function q(e) {
    return !e || 'x' === e.toLowerCase() || '*' === e;
}
function Q(e, n) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return X(e, n);
        })
        .join(' ');
}
function X(e, n) {
    var r = n.loose ? u[d.TILDELOOSE] : u[d.TILDE];
    return e.replace(r, function (n, r, a, o, s) {
        var l;
        return i('tilde', e, n, r, a, o, s), q(r) ? (l = '') : q(a) ? (l = '>=' + r + '.0.0 <' + (+r + 1) + '.0.0') : q(o) ? (l = '>=' + r + '.' + a + '.0 <' + r + '.' + (+a + 1) + '.0') : s ? (i('replaceTilde pr', s), (l = '>=' + r + '.' + a + '.' + o + '-' + s + ' <' + r + '.' + (+a + 1) + '.0')) : (l = '>=' + r + '.' + a + '.' + o + ' <' + r + '.' + (+a + 1) + '.0'), i('tilde return', l), l;
    });
}
function J(e, n) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return $(e, n);
        })
        .join(' ');
}
function $(e, n) {
    i('caret', e, n);
    var r = n.loose ? u[d.CARETLOOSE] : u[d.CARET];
    return e.replace(r, function (n, r, a, o, s) {
        var l;
        return i('caret', e, n, r, a, o, s), q(r) ? (l = '') : q(a) ? (l = '>=' + r + '.0.0 <' + (+r + 1) + '.0.0') : q(o) ? (l = '0' === r ? '>=' + r + '.' + a + '.0 <' + r + '.' + (+a + 1) + '.0' : '>=' + r + '.' + a + '.0 <' + (+r + 1) + '.0.0') : s ? (i('replaceCaret pr', s), (l = '0' === r ? ('0' === a ? '>=' + r + '.' + a + '.' + o + '-' + s + ' <' + r + '.' + a + '.' + (+o + 1) : '>=' + r + '.' + a + '.' + o + '-' + s + ' <' + r + '.' + (+a + 1) + '.0') : '>=' + r + '.' + a + '.' + o + '-' + s + ' <' + (+r + 1) + '.0.0')) : (i('no pr'), (l = '0' === r ? ('0' === a ? '>=' + r + '.' + a + '.' + o + ' <' + r + '.' + a + '.' + (+o + 1) : '>=' + r + '.' + a + '.' + o + ' <' + r + '.' + (+a + 1) + '.0') : '>=' + r + '.' + a + '.' + o + ' <' + (+r + 1) + '.0.0')), i('caret return', l), l;
    });
}
function ee(e, n) {
    return (
        i('replaceXRanges', e, n),
        e
            .split(/\s+/)
            .map(function (e) {
                return et(e, n);
            })
            .join(' ')
    );
}
function et(e, n) {
    e = e.trim();
    var r = n.loose ? u[d.XRANGELOOSE] : u[d.XRANGE];
    return e.replace(r, function (r, a, o, s, l, u) {
        i('xRange', e, r, a, o, s, l, u);
        var c = q(o),
            d = c || q(s),
            f = d || q(l),
            p = f;
        return '=' === a && p && (a = ''), (u = n.includePrerelease ? '-0' : ''), c ? (r = '>' === a || '<' === a ? '<0.0.0-0' : '*') : a && p ? (d && (s = 0), (l = 0), '>' === a ? ((a = '>='), d ? ((o = +o + 1), (s = 0)) : (s = +s + 1), (l = 0)) : '<=' === a && ((a = '<'), d ? (o = +o + 1) : (s = +s + 1)), (r = a + o + '.' + s + '.' + l + u)) : d ? (r = '>=' + o + '.0.0' + u + ' <' + (+o + 1) + '.0.0' + u) : f && (r = '>=' + o + '.' + s + '.0' + u + ' <' + o + '.' + (+s + 1) + '.0' + u), i('xRange return', r), r;
    });
}
function en(e, n) {
    return i('replaceStars', e, n), e.trim().replace(u[d.STAR], '');
}
function er(e, n, r, i, a, o, s, l, u, c, d, f, p) {
    return (n = q(r) ? '' : q(i) ? '>=' + r + '.0.0' : q(a) ? '>=' + r + '.' + i + '.0' : '>=' + n), (n + ' ' + (l = q(u) ? '' : q(c) ? '<' + (+u + 1) + '.0.0' : q(d) ? '<' + u + '.' + (+c + 1) + '.0' : f ? '<=' + u + '.' + c + '.' + d + '-' + f : '<=' + l)).trim();
}
function ei(e, n, r) {
    for (var a = 0; a < e.length; a++) if (!e[a].test(n)) return !1;
    if (n.prerelease.length && !r.includePrerelease) {
        for (a = 0; a < e.length; a++) {
            if ((i(e[a].semver), e[a].semver !== H)) {
                if (e[a].semver.prerelease.length > 0) {
                    var o = e[a].semver;
                    if (o.major === n.major && o.minor === n.minor && o.patch === n.patch) return !0;
                }
            }
        }
        return !1;
    }
    return !0;
}
function ea(e, n, r) {
    try {
        n = new Y(n, r);
    } catch (e) {
        return !1;
    }
    return n.test(e);
}
function eo(e, n, r) {
    var i = null,
        a = null;
    try {
        var o = new Y(n, r);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            o.test(e) && (!i || -1 === a.compare(e)) && (a = new b((i = e), r));
        }),
        i
    );
}
function es(e, n, r) {
    var i = null,
        a = null;
    try {
        var o = new Y(n, r);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            o.test(e) && (!i || 1 === a.compare(e)) && (a = new b((i = e), r));
        }),
        i
    );
}
function el(e, n) {
    e = new Y(e, n);
    var r = new b('0.0.0');
    if (e.test(r)) return r;
    if (((r = new b('0.0.0-0')), e.test(r))) return r;
    r = null;
    for (var i = 0; i < e.set.length; ++i)
        e.set[i].forEach(function (e) {
            var n = new b(e.semver.version);
            switch (e.operator) {
                case '>':
                    0 === n.prerelease.length ? n.patch++ : n.prerelease.push(0), (n.raw = n.format());
                case '':
                case '>=':
                    (!r || k(r, n)) && (r = n);
                    break;
                case '<':
                case '<=':
                    break;
                default:
                    throw Error('Unexpected operation: ' + e.operator);
            }
        });
    return r && e.test(r) ? r : null;
}
function eu(e, n) {
    try {
        return new Y(e, n).range || '*';
    } catch (e) {
        return null;
    }
}
function ec(e, n, r) {
    return ef(e, n, '<', r);
}
function ed(e, n, r) {
    return ef(e, n, '>', r);
}
function ef(e, n, r, i) {
    switch (((e = new b(e, i)), (n = new Y(n, i)), r)) {
        case '>':
            (a = k), (o = F), (s = U), (l = '>'), (u = '>=');
            break;
        case '<':
            (a = U), (o = Z), (s = k), (l = '<'), (u = '<=');
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (ea(e, n, i)) return !1;
    for (var a, o, s, l, u, c = 0; c < n.set.length; ++c) {
        var d = n.set[c],
            f = null,
            p = null;
        if (
            (d.forEach(function (e) {
                e.semver === H && (e = new j('>=0.0.0')), (f = f || e), (p = p || e), a(e.semver, f.semver, i) ? (f = e) : s(e.semver, p.semver, i) && (p = e);
            }),
            f.operator === l || f.operator === u)
        )
            return !1;
        if ((!p.operator || p.operator === l) && o(e, p.semver)) return !1;
        if (p.operator === u && s(e, p.semver)) return !1;
    }
    return !0;
}
function ep(e, n) {
    var r = E(e, n);
    return r && r.prerelease.length ? r.prerelease : null;
}
function eh(e, n, r) {
    return (e = new Y(e, r)), (n = new Y(n, r)), e.intersects(n);
}
function e_(e, n) {
    if (e instanceof b) return e;
    if (('number' == typeof e && (e = String(e)), 'string' != typeof e)) return null;
    var r,
        i = null;
    if ((n = n || {}).rtl) {
        for (; (r = u[d.COERCERTL].exec(e)) && (!i || i.index + i[0].length !== e.length); ) (!i || r.index + r[0].length !== i.index + i[0].length) && (i = r), (u[d.COERCERTL].lastIndex = r.index + r[1].length + r[2].length);
        u[d.COERCERTL].lastIndex = -1;
    } else i = e.match(u[d.COERCE]);
    return null === i ? null : E(i[2] + '.' + (i[3] || '0') + '.' + (i[4] || '0'), n);
}
(j.prototype.parse = function (e) {
    var n = this.options.loose ? u[d.COMPARATORLOOSE] : u[d.COMPARATOR],
        r = e.match(n);
    if (!r) throw TypeError('Invalid comparator: ' + e);
    (this.operator = void 0 !== r[1] ? r[1] : ''), '=' === this.operator && (this.operator = ''), r[2] ? (this.semver = new b(r[2], this.options.loose)) : (this.semver = H);
}),
    (j.prototype.toString = function () {
        return this.value;
    }),
    (j.prototype.test = function (e) {
        if ((i('Comparator.test', e, this.options.loose), this.semver === H || e === H)) return !0;
        if ('string' == typeof e)
            try {
                e = new b(e, this.options);
            } catch (e) {
                return !1;
            }
        return V(e, this.operator, this.semver, this.options);
    }),
    (j.prototype.intersects = function (e, n) {
        if (!(e instanceof j)) throw TypeError('a Comparator is required');
        if (
            ((!n || 'object' != typeof n) &&
                (n = {
                    loose: !!n,
                    includePrerelease: !1
                }),
            '' === this.operator)
        )
            return '' === this.value || ((r = new Y(e.value, n)), ea(this.value, r, n));
        if ('' === e.operator) return '' === e.value || ((r = new Y(this.value, n)), ea(e.semver, r, n));
        var r,
            i = ('>=' === this.operator || '>' === this.operator) && ('>=' === e.operator || '>' === e.operator),
            a = ('<=' === this.operator || '<' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            o = this.semver.version === e.semver.version,
            s = ('>=' === this.operator || '<=' === this.operator) && ('>=' === e.operator || '<=' === e.operator),
            l = V(this.semver, '<', e.semver, n) && ('>=' === this.operator || '>' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            u = V(this.semver, '>', e.semver, n) && ('<=' === this.operator || '<' === this.operator) && ('>=' === e.operator || '>' === e.operator);
        return i || a || (o && s) || l || u;
    }),
    (n.Range = Y),
    (Y.prototype.format = function () {
        return (
            (this.range = this.set
                .map(function (e) {
                    return e.join(' ').trim();
                })
                .join('||')
                .trim()),
            this.range
        );
    }),
    (Y.prototype.toString = function () {
        return this.range;
    }),
    (Y.prototype.parseRange = function (e) {
        var n = this.options.loose;
        e = e.trim();
        var r = n ? u[d.HYPHENRANGELOOSE] : u[d.HYPHENRANGE];
        (e = e.replace(r, er)), i('hyphen replace', e), (e = e.replace(u[d.COMPARATORTRIM], m)), i('comparator trim', e, u[d.COMPARATORTRIM]), (e = (e = (e = e.replace(u[d.TILDETRIM], h)).replace(u[d.CARETTRIM], _)).split(/\s+/).join(' '));
        var a = n ? u[d.COMPARATORLOOSE] : u[d.COMPARATOR],
            o = e
                .split(' ')
                .map(function (e) {
                    return z(e, this.options);
                }, this)
                .join(' ')
                .split(/\s+/);
        return (
            this.options.loose &&
                (o = o.filter(function (e) {
                    return !!e.match(a);
                })),
            (o = o.map(function (e) {
                return new j(e, this.options);
            }, this))
        );
    }),
    (Y.prototype.intersects = function (e, n) {
        if (!(e instanceof Y)) throw TypeError('a Range is required');
        return this.set.some(function (r) {
            return (
                W(r, n) &&
                e.set.some(function (e) {
                    return (
                        W(e, n) &&
                        r.every(function (r) {
                            return e.every(function (e) {
                                return r.intersects(e, n);
                            });
                        })
                    );
                })
            );
        });
    }),
    (n.toComparators = K),
    (Y.prototype.test = function (e) {
        if (!e) return !1;
        if ('string' == typeof e)
            try {
                e = new b(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var n = 0; n < this.set.length; n++) if (ei(this.set[n], e, this.options)) return !0;
        return !1;
    }),
    (n.satisfies = ea),
    (n.maxSatisfying = eo),
    (n.minSatisfying = es),
    (n.minVersion = el),
    (n.validRange = eu),
    (n.ltr = ec),
    (n.gtr = ed),
    (n.outside = ef),
    (n.prerelease = ep),
    (n.intersects = eh),
    (n.coerce = e_);
