n.d(t, { Lu: () => l });
var r = n(910974),
    i = n(725454),
    o = n.n(i),
    a = {
        CASE_SENSITIVE_EQUAL: 7,
        EQUAL: 6,
        STARTS_WITH: 5,
        WORD_STARTS_WITH: 4,
        CONTAINS: 3,
        ACRONYM: 2,
        MATCHES: 1,
        NO_MATCH: 0
    };
l.rankings = a;
var s = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};
function l(e, t, n) {
    void 0 === n && (n = {});
    var i = n,
        o = i.keys,
        l = i.threshold,
        u = void 0 === l ? a.MATCHES : l,
        d = i.baseSort,
        f = void 0 === d ? s : d,
        p = i.sorter;
    return (
        void 0 === p
            ? function (e) {
                  return e.sort(function (e, t) {
                      return _(e, t, f);
                  });
              }
            : p
    )(e.reduce(h, [])).map(function (e) {
        return e.item;
    });
    function h(e, i, a) {
        var s = c(i, o, t, n),
            l = s.rank,
            d = s.keyThreshold;
        return (
            l >= (void 0 === d ? u : d) &&
                e.push(
                    (0, r.Z)({}, s, {
                        item: i,
                        index: a
                    })
                ),
            e
        );
    }
}
function c(e, t, n, r) {
    if (!t) {
        var i = e;
        return {
            rankedValue: i,
            rank: u(i, n, r),
            keyIndex: -1,
            keyThreshold: r.threshold
        };
    }
    return g(e, t).reduce(
        function (e, t, i) {
            var o = e.rank,
                s = e.rankedValue,
                l = e.keyIndex,
                c = e.keyThreshold,
                d = t.itemValue,
                f = t.attributes,
                _ = u(d, n, r),
                p = s,
                h = f.minRanking,
                m = f.maxRanking,
                g = f.threshold;
            return (
                _ < h && _ >= a.MATCHES ? (_ = h) : _ > m && (_ = m),
                _ > o && ((o = _), (l = i), (c = g), (p = d)),
                {
                    rankedValue: p,
                    rank: o,
                    keyIndex: l,
                    keyThreshold: c
                }
            );
        },
        {
            rankedValue: e,
            rank: a.NO_MATCH,
            keyIndex: -1,
            keyThreshold: r.threshold
        }
    );
}
function u(e, t, n) {
    return ((e = p(e, n)), (t = p(t, n)).length > e.length) ? a.NO_MATCH : e === t ? a.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase()) === (t = t.toLowerCase()) ? a.EQUAL : e.startsWith(t) ? a.STARTS_WITH : e.includes(' ' + t) ? a.WORD_STARTS_WITH : e.includes(t) ? a.CONTAINS : 1 === t.length ? a.NO_MATCH : d(e).includes(t) ? a.ACRONYM : f(e, t);
}
function d(e) {
    var t = '';
    return (
        e.split(' ').forEach(function (e) {
            e.split('-').forEach(function (e) {
                t += e.substr(0, 1);
            });
        }),
        t
    );
}
function f(e, t) {
    var n = 0,
        r = 0;
    function i(e, t, r) {
        for (var i = r, o = t.length; i < o; i++) if (t[i] === e) return (n += 1), i + 1;
        return -1;
    }
    function o(e) {
        var r = 1 / e,
            i = n / t.length;
        return a.MATCHES + i * r;
    }
    var s = i(t[0], e, 0);
    if (s < 0) return a.NO_MATCH;
    r = s;
    for (var l = 1, c = t.length; l < c; l++) if (!((r = i(t[l], e, r)) > -1)) return a.NO_MATCH;
    return o(r - s);
}
function _(e, t, n) {
    var r = -1,
        i = 1,
        o = e.rank,
        a = e.keyIndex,
        s = t.rank,
        l = t.keyIndex;
    return o !== s ? (o > s ? r : i) : a === l ? n(e, t) : a < l ? r : i;
}
function p(e, t) {
    return (e = '' + e), t.keepDiacritics || (e = o()(e)), e;
}
function h(e, t) {
    var n;
    if (('object' == typeof t && (t = t.key), 'function' == typeof t)) n = t(e);
    else if (null == e) n = null;
    else if (Object.hasOwnProperty.call(e, t)) n = e[t];
    else {
        if (t.includes('.')) return m(t, e);
        n = null;
    }
    return null == n ? [] : Array.isArray(n) ? n : [String(n)];
}
function m(e, t) {
    for (var n = e.split('.'), r = [t], i = 0, o = n.length; i < o; i++) {
        for (var a = n[i], s = [], l = 0, c = r.length; l < c; l++) {
            var u = r[l];
            if (null != u)
                if (Object.hasOwnProperty.call(u, a)) {
                    var d = u[a];
                    null != d && s.push(d);
                } else '*' === a && (s = s.concat(u));
        }
        r = s;
    }
    if (Array.isArray(r[0])) {
        var f = [];
        return f.concat.apply(f, r);
    }
    return r;
}
function g(e, t) {
    for (var n = [], r = 0, i = t.length; r < i; r++)
        for (var o = t[r], a = b(o), s = h(e, o), l = 0, c = s.length; l < c; l++)
            n.push({
                itemValue: s[l],
                attributes: a
            });
    return n;
}
var E = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
};
function b(e) {
    return 'string' == typeof e ? E : (0, r.Z)({}, E, e);
}
