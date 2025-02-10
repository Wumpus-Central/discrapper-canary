var i,
    r = n(444675);
(t = e.exports = y),
    (i =
        'object' == typeof r && r.env && r.env.NODE_DEBUG && /\bsemver\b/i.test(r.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift('SEMVER'), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = '2.0.0');
var a = 256,
    s = Number.MAX_SAFE_INTEGER || 9007199254740991,
    o = 16,
    l = (t.re = []),
    u = (t.src = []),
    c = (t.tokens = {}),
    d = 0;
function f(e) {
    c[e] = d++;
}
f('NUMERICIDENTIFIER'), (u[c.NUMERICIDENTIFIER] = '0|[1-9]\\d*'), f('NUMERICIDENTIFIERLOOSE'), (u[c.NUMERICIDENTIFIERLOOSE] = '[0-9]+'), f('NONNUMERICIDENTIFIER'), (u[c.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'), f('MAINVERSION'), (u[c.MAINVERSION] = '(' + u[c.NUMERICIDENTIFIER] + ')\\.(' + u[c.NUMERICIDENTIFIER] + ')\\.(' + u[c.NUMERICIDENTIFIER] + ')'), f('MAINVERSIONLOOSE'), (u[c.MAINVERSIONLOOSE] = '(' + u[c.NUMERICIDENTIFIERLOOSE] + ')\\.(' + u[c.NUMERICIDENTIFIERLOOSE] + ')\\.(' + u[c.NUMERICIDENTIFIERLOOSE] + ')'), f('PRERELEASEIDENTIFIER'), (u[c.PRERELEASEIDENTIFIER] = '(?:' + u[c.NUMERICIDENTIFIER] + '|' + u[c.NONNUMERICIDENTIFIER] + ')'), f('PRERELEASEIDENTIFIERLOOSE'), (u[c.PRERELEASEIDENTIFIERLOOSE] = '(?:' + u[c.NUMERICIDENTIFIERLOOSE] + '|' + u[c.NONNUMERICIDENTIFIER] + ')'), f('PRERELEASE'), (u[c.PRERELEASE] = '(?:-(' + u[c.PRERELEASEIDENTIFIER] + '(?:\\.' + u[c.PRERELEASEIDENTIFIER] + ')*))'), f('PRERELEASELOOSE'), (u[c.PRERELEASELOOSE] = '(?:-?(' + u[c.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + u[c.PRERELEASEIDENTIFIERLOOSE] + ')*))'), f('BUILDIDENTIFIER'), (u[c.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'), f('BUILD'), (u[c.BUILD] = '(?:\\+(' + u[c.BUILDIDENTIFIER] + '(?:\\.' + u[c.BUILDIDENTIFIER] + ')*))'), f('FULL'), f('FULLPLAIN'), (u[c.FULLPLAIN] = 'v?' + u[c.MAINVERSION] + u[c.PRERELEASE] + '?' + u[c.BUILD] + '?'), (u[c.FULL] = '^' + u[c.FULLPLAIN] + '$'), f('LOOSEPLAIN'), (u[c.LOOSEPLAIN] = '[v=\\s]*' + u[c.MAINVERSIONLOOSE] + u[c.PRERELEASELOOSE] + '?' + u[c.BUILD] + '?'), f('LOOSE'), (u[c.LOOSE] = '^' + u[c.LOOSEPLAIN] + '$'), f('GTLT'), (u[c.GTLT] = '((?:<|>)?=?)'), f('XRANGEIDENTIFIERLOOSE'), (u[c.XRANGEIDENTIFIERLOOSE] = u[c.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'), f('XRANGEIDENTIFIER'), (u[c.XRANGEIDENTIFIER] = u[c.NUMERICIDENTIFIER] + '|x|X|\\*'), f('XRANGEPLAIN'), (u[c.XRANGEPLAIN] = '[v=\\s]*(' + u[c.XRANGEIDENTIFIER] + ')(?:\\.(' + u[c.XRANGEIDENTIFIER] + ')(?:\\.(' + u[c.XRANGEIDENTIFIER] + ')(?:' + u[c.PRERELEASE] + ')?' + u[c.BUILD] + '?)?)?'), f('XRANGEPLAINLOOSE'), (u[c.XRANGEPLAINLOOSE] = '[v=\\s]*(' + u[c.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + u[c.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + u[c.XRANGEIDENTIFIERLOOSE] + ')(?:' + u[c.PRERELEASELOOSE] + ')?' + u[c.BUILD] + '?)?)?'), f('XRANGE'), (u[c.XRANGE] = '^' + u[c.GTLT] + '\\s*' + u[c.XRANGEPLAIN] + '$'), f('XRANGELOOSE'), (u[c.XRANGELOOSE] = '^' + u[c.GTLT] + '\\s*' + u[c.XRANGEPLAINLOOSE] + '$'), f('COERCE'), (u[c.COERCE] = '(^|[^\\d])(\\d{1,' + o + '})(?:\\.(\\d{1,' + o + '}))?(?:\\.(\\d{1,' + o + '}))?(?:$|[^\\d])'), f('COERCERTL'), (l[c.COERCERTL] = RegExp(u[c.COERCE], 'g')), f('LONETILDE'), (u[c.LONETILDE] = '(?:~>?)'), f('TILDETRIM'), (u[c.TILDETRIM] = '(\\s*)' + u[c.LONETILDE] + '\\s+'), (l[c.TILDETRIM] = RegExp(u[c.TILDETRIM], 'g'));
var _ = '$1~';
f('TILDE'), (u[c.TILDE] = '^' + u[c.LONETILDE] + u[c.XRANGEPLAIN] + '$'), f('TILDELOOSE'), (u[c.TILDELOOSE] = '^' + u[c.LONETILDE] + u[c.XRANGEPLAINLOOSE] + '$'), f('LONECARET'), (u[c.LONECARET] = '(?:\\^)'), f('CARETTRIM'), (u[c.CARETTRIM] = '(\\s*)' + u[c.LONECARET] + '\\s+'), (l[c.CARETTRIM] = RegExp(u[c.CARETTRIM], 'g'));
var p = '$1^';
f('CARET'), (u[c.CARET] = '^' + u[c.LONECARET] + u[c.XRANGEPLAIN] + '$'), f('CARETLOOSE'), (u[c.CARETLOOSE] = '^' + u[c.LONECARET] + u[c.XRANGEPLAINLOOSE] + '$'), f('COMPARATORLOOSE'), (u[c.COMPARATORLOOSE] = '^' + u[c.GTLT] + '\\s*(' + u[c.LOOSEPLAIN] + ')$|^$'), f('COMPARATOR'), (u[c.COMPARATOR] = '^' + u[c.GTLT] + '\\s*(' + u[c.FULLPLAIN] + ')$|^$'), f('COMPARATORTRIM'), (u[c.COMPARATORTRIM] = '(\\s*)' + u[c.GTLT] + '\\s*(' + u[c.LOOSEPLAIN] + '|' + u[c.XRANGEPLAIN] + ')'), (l[c.COMPARATORTRIM] = RegExp(u[c.COMPARATORTRIM], 'g'));
var h = '$1$2$3';
f('HYPHENRANGE'), (u[c.HYPHENRANGE] = '^\\s*(' + u[c.XRANGEPLAIN] + ')\\s+-\\s+(' + u[c.XRANGEPLAIN] + ')\\s*$'), f('HYPHENRANGELOOSE'), (u[c.HYPHENRANGELOOSE] = '^\\s*(' + u[c.XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + u[c.XRANGEPLAINLOOSE] + ')\\s*$'), f('STAR'), (u[c.STAR] = '(<|>)?=?\\s*\\*');
for (var m = 0; m < d; m++) i(m, u[m]), l[m] || (l[m] = new RegExp(u[m]));
function g(e, t) {
    if (
        ((t && 'object' == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof y)
    )
        return e;
    if ('string' != typeof e || e.length > a || !(t.loose ? l[c.LOOSE] : l[c.FULL]).test(e)) return null;
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
function v(e, t) {
    var n = g(e.trim().replace(/^[=v]+/, ''), t);
    return n ? n.version : null;
}
function y(e, t) {
    if (
        ((t && 'object' == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof y)
    ) {
        if (e.loose === t.loose) return e;
        e = e.version;
    } else if ('string' != typeof e) throw TypeError('Invalid Version: ' + e);
    if (e.length > a) throw TypeError('version is longer than ' + a + ' characters');
    if (!(this instanceof y)) return new y(e, t);
    i('SemVer', e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? l[c.LOOSE] : l[c.FULL]);
    if (!n) throw TypeError('Invalid Version: ' + e);
    if (((this.raw = e), (this.major = +n[1]), (this.minor = +n[2]), (this.patch = +n[3]), this.major > s || this.major < 0)) throw TypeError('Invalid major version');
    if (this.minor > s || this.minor < 0) throw TypeError('Invalid minor version');
    if (this.patch > s || this.patch < 0) throw TypeError('Invalid patch version');
    n[4]
        ? (this.prerelease = n[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < s) return t;
              }
              return e;
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split('.') : []),
        this.format();
}
function I(e, t, n, i) {
    'string' == typeof n && ((i = n), (n = void 0));
    try {
        return new y(e, n).inc(t, i).version;
    } catch (e) {
        return null;
    }
}
function T(e, t) {
    if (U(e, t)) return null;
    var n = g(e),
        i = g(t),
        r = '';
    if (n.prerelease.length || i.prerelease.length) {
        r = 'pre';
        var a = 'prerelease';
    }
    for (var s in n) if (('major' === s || 'minor' === s || 'patch' === s) && n[s] !== i[s]) return r + s;
    return a;
}
(t.parse = g),
    (t.valid = E),
    (t.clean = v),
    (t.SemVer = y),
    (y.prototype.format = function () {
        return (this.version = this.major + '.' + this.minor + '.' + this.patch), this.prerelease.length && (this.version += '-' + this.prerelease.join('.')), this.version;
    }),
    (y.prototype.toString = function () {
        return this.version;
    }),
    (y.prototype.compare = function (e) {
        return i('SemVer.compare', this.version, this.options, e), e instanceof y || (e = new y(e, this.options)), this.compareMain(e) || this.comparePre(e);
    }),
    (y.prototype.compareMain = function (e) {
        return e instanceof y || (e = new y(e, this.options)), S(this.major, e.major) || S(this.minor, e.minor) || S(this.patch, e.patch);
    }),
    (y.prototype.comparePre = function (e) {
        if ((e instanceof y || (e = new y(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
            var n = this.prerelease[t],
                r = e.prerelease[t];
            if ((i('prerelease compare', t, n, r), void 0 === n && void 0 === r)) return 0;
            if (void 0 === r) return 1;
            if (void 0 === n) return -1;
            else if (n === r) continue;
            else return S(n, r);
        } while (++t);
    }),
    (y.prototype.compareBuild = function (e) {
        e instanceof y || (e = new y(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                r = e.build[t];
            if ((i('prerelease compare', t, n, r), void 0 === n && void 0 === r)) return 0;
            if (void 0 === r) return 1;
            if (void 0 === n) return -1;
            else if (n === r) continue;
            else return S(n, r);
        } while (++t);
    }),
    (y.prototype.inc = function (e, t) {
        switch (e) {
            case 'premajor':
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc('pre', t);
                break;
            case 'preminor':
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', t);
                break;
            case 'prepatch':
                (this.prerelease.length = 0), this.inc('patch', t), this.inc('pre', t);
                break;
            case 'prerelease':
                0 === this.prerelease.length && this.inc('patch', t), this.inc('pre', t);
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
                    for (var n = this.prerelease.length; --n >= 0; ) 'number' == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                    -1 === n && this.prerelease.push(0);
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : (this.prerelease = [t, 0]));
                break;
            default:
                throw Error('invalid increment argument: ' + e);
        }
        return this.format(), (this.raw = this.version), this;
    }),
    (t.inc = I),
    (t.diff = T),
    (t.compareIdentifiers = S);
var b = /^[0-9]+$/;
function S(e, t) {
    var n = b.test(e),
        i = b.test(t);
    return n && i && ((e = +e), (t = +t)), e === t ? 0 : n && !i ? -1 : i && !n ? 1 : e < t ? -1 : 1;
}
function A(e, t) {
    return S(t, e);
}
function N(e, t) {
    return new y(e, t).major;
}
function C(e, t) {
    return new y(e, t).minor;
}
function R(e, t) {
    return new y(e, t).patch;
}
function O(e, t, n) {
    return new y(e, n).compare(new y(t, n));
}
function D(e, t) {
    return O(e, t, !0);
}
function L(e, t, n) {
    var i = new y(e, n),
        r = new y(t, n);
    return i.compare(r) || i.compareBuild(r);
}
function x(e, t, n) {
    return O(t, e, n);
}
function P(e, n) {
    return e.sort(function (e, i) {
        return t.compareBuild(e, i, n);
    });
}
function w(e, n) {
    return e.sort(function (e, i) {
        return t.compareBuild(i, e, n);
    });
}
function M(e, t, n) {
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
function B(e, t, n) {
    return O(e, t, n) >= 0;
}
function Z(e, t, n) {
    return 0 >= O(e, t, n);
}
function F(e, t, n, i) {
    switch (t) {
        case '===':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e === n;
        case '!==':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e !== n;
        case '':
        case '=':
        case '==':
            return U(e, n, i);
        case '!=':
            return G(e, n, i);
        case '>':
            return M(e, n, i);
        case '>=':
            return B(e, n, i);
        case '<':
            return k(e, n, i);
        case '<=':
            return Z(e, n, i);
        default:
            throw TypeError('Invalid operator: ' + t);
    }
}
function V(e, t) {
    if (
        ((t && 'object' == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof V)
    ) {
        if (!!t.loose === e.loose) return e;
        e = e.value;
    }
    if (!(this instanceof V)) return new V(e, t);
    i('comparator', e, t), (this.options = t), (this.loose = !!t.loose), this.parse(e), this.semver === j ? (this.value = '') : (this.value = this.operator + this.semver.version), i('comp', this);
}
(t.rcompareIdentifiers = A), (t.major = N), (t.minor = C), (t.patch = R), (t.compare = O), (t.compareLoose = D), (t.compareBuild = L), (t.rcompare = x), (t.sort = P), (t.rsort = w), (t.gt = M), (t.lt = k), (t.eq = U), (t.neq = G), (t.gte = B), (t.lte = Z), (t.cmp = F), (t.Comparator = V);
var j = {};
function H(e, t) {
    if (
        ((t && 'object' == typeof t) ||
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof H)
    )
        return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new H(e.raw, t);
    if (e instanceof V) return new H(e.value, t);
    if (!(this instanceof H)) return new H(e, t);
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
        throw TypeError('Invalid SemVer Range: ' + e);
    this.format();
}
function Y(e, t) {
    for (var n = !0, i = e.slice(), r = i.pop(); n && i.length; )
        (n = i.every(function (e) {
            return r.intersects(e, t);
        })),
            (r = i.pop());
    return n;
}
function W(e, t) {
    return new H(e, t).set.map(function (e) {
        return e
            .map(function (e) {
                return e.value;
            })
            .join(' ')
            .trim()
            .split(' ');
    });
}
function K(e, t) {
    return i('comp', e, t), i('caret', (e = X(e, t))), i('tildes', (e = q(e, t))), i('xrange', (e = $(e, t))), i('stars', (e = et(e, t))), e;
}
function z(e) {
    return !e || 'x' === e.toLowerCase() || '*' === e;
}
function q(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return Q(e, t);
        })
        .join(' ');
}
function Q(e, t) {
    var n = t.loose ? l[c.TILDELOOSE] : l[c.TILDE];
    return e.replace(n, function (t, n, r, a, s) {
        var o;
        return i('tilde', e, t, n, r, a, s), z(n) ? (o = '') : z(r) ? (o = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0') : z(a) ? (o = '>=' + n + '.' + r + '.0 <' + n + '.' + (+r + 1) + '.0') : s ? (i('replaceTilde pr', s), (o = '>=' + n + '.' + r + '.' + a + '-' + s + ' <' + n + '.' + (+r + 1) + '.0')) : (o = '>=' + n + '.' + r + '.' + a + ' <' + n + '.' + (+r + 1) + '.0'), i('tilde return', o), o;
    });
}
function X(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return J(e, t);
        })
        .join(' ');
}
function J(e, t) {
    i('caret', e, t);
    var n = t.loose ? l[c.CARETLOOSE] : l[c.CARET];
    return e.replace(n, function (t, n, r, a, s) {
        var o;
        return i('caret', e, t, n, r, a, s), z(n) ? (o = '') : z(r) ? (o = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0') : z(a) ? (o = '0' === n ? '>=' + n + '.' + r + '.0 <' + n + '.' + (+r + 1) + '.0' : '>=' + n + '.' + r + '.0 <' + (+n + 1) + '.0.0') : s ? (i('replaceCaret pr', s), (o = '0' === n ? ('0' === r ? '>=' + n + '.' + r + '.' + a + '-' + s + ' <' + n + '.' + r + '.' + (+a + 1) : '>=' + n + '.' + r + '.' + a + '-' + s + ' <' + n + '.' + (+r + 1) + '.0') : '>=' + n + '.' + r + '.' + a + '-' + s + ' <' + (+n + 1) + '.0.0')) : (i('no pr'), (o = '0' === n ? ('0' === r ? '>=' + n + '.' + r + '.' + a + ' <' + n + '.' + r + '.' + (+a + 1) : '>=' + n + '.' + r + '.' + a + ' <' + n + '.' + (+r + 1) + '.0') : '>=' + n + '.' + r + '.' + a + ' <' + (+n + 1) + '.0.0')), i('caret return', o), o;
    });
}
function $(e, t) {
    return (
        i('replaceXRanges', e, t),
        e
            .split(/\s+/)
            .map(function (e) {
                return ee(e, t);
            })
            .join(' ')
    );
}
function ee(e, t) {
    e = e.trim();
    var n = t.loose ? l[c.XRANGELOOSE] : l[c.XRANGE];
    return e.replace(n, function (n, r, a, s, o, l) {
        i('xRange', e, n, r, a, s, o, l);
        var u = z(a),
            c = u || z(s),
            d = c || z(o),
            f = d;
        return '=' === r && f && (r = ''), (l = t.includePrerelease ? '-0' : ''), u ? (n = '>' === r || '<' === r ? '<0.0.0-0' : '*') : r && f ? (c && (s = 0), (o = 0), '>' === r ? ((r = '>='), c ? ((a = +a + 1), (s = 0)) : (s = +s + 1), (o = 0)) : '<=' === r && ((r = '<'), c ? (a = +a + 1) : (s = +s + 1)), (n = r + a + '.' + s + '.' + o + l)) : c ? (n = '>=' + a + '.0.0' + l + ' <' + (+a + 1) + '.0.0' + l) : d && (n = '>=' + a + '.' + s + '.0' + l + ' <' + a + '.' + (+s + 1) + '.0' + l), i('xRange return', n), n;
    });
}
function et(e, t) {
    return i('replaceStars', e, t), e.trim().replace(l[c.STAR], '');
}
function en(e, t, n, i, r, a, s, o, l, u, c, d, f) {
    return ((t = z(n) ? '' : z(i) ? '>=' + n + '.0.0' : z(r) ? '>=' + n + '.' + i + '.0' : '>=' + t) + ' ' + (o = z(l) ? '' : z(u) ? '<' + (+l + 1) + '.0.0' : z(c) ? '<' + l + '.' + (+u + 1) + '.0' : d ? '<=' + l + '.' + u + '.' + c + '-' + d : '<=' + o)).trim();
}
function ei(e, t, n) {
    for (var r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
    if (t.prerelease.length && !n.includePrerelease) {
        for (r = 0; r < e.length; r++)
            if ((i(e[r].semver), e[r].semver !== j && e[r].semver.prerelease.length > 0)) {
                var a = e[r].semver;
                if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0;
            }
        return !1;
    }
    return !0;
}
function er(e, t, n) {
    try {
        t = new H(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
function ea(e, t, n) {
    var i = null,
        r = null;
    try {
        var a = new H(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!i || -1 === r.compare(e)) && (r = new y((i = e), n));
        }),
        i
    );
}
function es(e, t, n) {
    var i = null,
        r = null;
    try {
        var a = new H(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!i || 1 === r.compare(e)) && (r = new y((i = e), n));
        }),
        i
    );
}
function eo(e, t) {
    e = new H(e, t);
    var n = new y('0.0.0');
    if (e.test(n) || ((n = new y('0.0.0-0')), e.test(n))) return n;
    n = null;
    for (var i = 0; i < e.set.length; ++i)
        e.set[i].forEach(function (e) {
            var t = new y(e.semver.version);
            switch (e.operator) {
                case '>':
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case '':
                case '>=':
                    (!n || M(n, t)) && (n = t);
                    break;
                case '<':
                case '<=':
                    break;
                default:
                    throw Error('Unexpected operation: ' + e.operator);
            }
        });
    return n && e.test(n) ? n : null;
}
function el(e, t) {
    try {
        return new H(e, t).range || '*';
    } catch (e) {
        return null;
    }
}
function eu(e, t, n) {
    return ed(e, t, '<', n);
}
function ec(e, t, n) {
    return ed(e, t, '>', n);
}
function ed(e, t, n, i) {
    switch (((e = new y(e, i)), (t = new H(t, i)), n)) {
        case '>':
            (r = M), (a = Z), (s = k), (o = '>'), (l = '>=');
            break;
        case '<':
            (r = k), (a = B), (s = M), (o = '<'), (l = '<=');
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (er(e, t, i)) return !1;
    for (var r, a, s, o, l, u = 0; u < t.set.length; ++u) {
        var c = t.set[u],
            d = null,
            f = null;
        if (
            (c.forEach(function (e) {
                e.semver === j && (e = new V('>=0.0.0')), (d = d || e), (f = f || e), r(e.semver, d.semver, i) ? (d = e) : s(e.semver, f.semver, i) && (f = e);
            }),
            d.operator === o || d.operator === l || ((!f.operator || f.operator === o) && a(e, f.semver)) || (f.operator === l && s(e, f.semver)))
        )
            return !1;
    }
    return !0;
}
function ef(e, t) {
    var n = g(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
}
function e_(e, t, n) {
    return (e = new H(e, n)), (t = new H(t, n)), e.intersects(t);
}
function ep(e, t) {
    if (e instanceof y) return e;
    if (('number' == typeof e && (e = String(e)), 'string' != typeof e)) return null;
    var n,
        i = null;
    if ((t = t || {}).rtl) {
        for (; (n = l[c.COERCERTL].exec(e)) && (!i || i.index + i[0].length !== e.length); ) (i && n.index + n[0].length === i.index + i[0].length) || (i = n), (l[c.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
        l[c.COERCERTL].lastIndex = -1;
    } else i = e.match(l[c.COERCE]);
    return null === i ? null : g(i[2] + '.' + (i[3] || '0') + '.' + (i[4] || '0'), t);
}
(V.prototype.parse = function (e) {
    var t = this.options.loose ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
        n = e.match(t);
    if (!n) throw TypeError('Invalid comparator: ' + e);
    (this.operator = void 0 !== n[1] ? n[1] : ''), '=' === this.operator && (this.operator = ''), n[2] ? (this.semver = new y(n[2], this.options.loose)) : (this.semver = j);
}),
    (V.prototype.toString = function () {
        return this.value;
    }),
    (V.prototype.test = function (e) {
        if ((i('Comparator.test', e, this.options.loose), this.semver === j || e === j)) return !0;
        if ('string' == typeof e)
            try {
                e = new y(e, this.options);
            } catch (e) {
                return !1;
            }
        return F(e, this.operator, this.semver, this.options);
    }),
    (V.prototype.intersects = function (e, t) {
        if (!(e instanceof V)) throw TypeError('a Comparator is required');
        if (
            ((t && 'object' == typeof t) ||
                (t = {
                    loose: !!t,
                    includePrerelease: !1
                }),
            '' === this.operator)
        )
            return '' === this.value || ((n = new H(e.value, t)), er(this.value, n, t));
        if ('' === e.operator) return '' === e.value || ((n = new H(this.value, t)), er(e.semver, n, t));
        var n,
            i = ('>=' === this.operator || '>' === this.operator) && ('>=' === e.operator || '>' === e.operator),
            r = ('<=' === this.operator || '<' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            a = this.semver.version === e.semver.version,
            s = ('>=' === this.operator || '<=' === this.operator) && ('>=' === e.operator || '<=' === e.operator),
            o = F(this.semver, '<', e.semver, t) && ('>=' === this.operator || '>' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            l = F(this.semver, '>', e.semver, t) && ('<=' === this.operator || '<' === this.operator) && ('>=' === e.operator || '>' === e.operator);
        return i || r || (a && s) || o || l;
    }),
    (t.Range = H),
    (H.prototype.format = function () {
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
    (H.prototype.toString = function () {
        return this.range;
    }),
    (H.prototype.parseRange = function (e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? l[c.HYPHENRANGELOOSE] : l[c.HYPHENRANGE];
        i('hyphen replace', (e = e.replace(n, en))), i('comparator trim', (e = e.replace(l[c.COMPARATORTRIM], h)), l[c.COMPARATORTRIM]), (e = (e = (e = e.replace(l[c.TILDETRIM], _)).replace(l[c.CARETTRIM], p)).split(/\s+/).join(' '));
        var r = t ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
            a = e
                .split(' ')
                .map(function (e) {
                    return K(e, this.options);
                }, this)
                .join(' ')
                .split(/\s+/);
        return (
            this.options.loose &&
                (a = a.filter(function (e) {
                    return !!e.match(r);
                })),
            (a = a.map(function (e) {
                return new V(e, this.options);
            }, this))
        );
    }),
    (H.prototype.intersects = function (e, t) {
        if (!(e instanceof H)) throw TypeError('a Range is required');
        return this.set.some(function (n) {
            return (
                Y(n, t) &&
                e.set.some(function (e) {
                    return (
                        Y(e, t) &&
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
    (t.toComparators = W),
    (H.prototype.test = function (e) {
        if (!e) return !1;
        if ('string' == typeof e)
            try {
                e = new y(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var t = 0; t < this.set.length; t++) if (ei(this.set[t], e, this.options)) return !0;
        return !1;
    }),
    (t.satisfies = er),
    (t.maxSatisfying = ea),
    (t.minSatisfying = es),
    (t.minVersion = eo),
    (t.validRange = el),
    (t.ltr = eu),
    (t.gtr = ec),
    (t.outside = ed),
    (t.prerelease = ef),
    (t.intersects = e_),
    (t.coerce = ep);
