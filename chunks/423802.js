n.d(t, { Lu: () => l });
var i = n(910974),
    r = n(725454),
    a = n.n(r),
    s = {
        CASE_SENSITIVE_EQUAL: 7,
        EQUAL: 6,
        STARTS_WITH: 5,
        WORD_STARTS_WITH: 4,
        CONTAINS: 3,
        ACRONYM: 2,
        MATCHES: 1,
        NO_MATCH: 0
    };
l.rankings = s;
var o = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};
function l(e, t, n) {
    void 0 === n && (n = {});
    var r = n,
        a = r.keys,
        l = r.threshold,
        c = void 0 === l ? s.MATCHES : l,
        d = r.baseSort,
        f = void 0 === d ? o : d,
        p = r.sorter;
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
    function h(e, r, s) {
        var o = u(r, a, t, n),
            l = o.rank,
            d = o.keyThreshold;
        return (
            l >= (void 0 === d ? c : d) &&
                e.push(
                    (0, i.Z)({}, o, {
                        item: r,
                        index: s
                    })
                ),
            e
        );
    }
}
function u(e, t, n, i) {
    if (!t) {
        var r = e;
        return {
            rankedValue: r,
            rank: c(r, n, i),
            keyIndex: -1,
            keyThreshold: i.threshold
        };
    }
    return g(e, t).reduce(
        function (e, t, r) {
            var a = e.rank,
                o = e.rankedValue,
                l = e.keyIndex,
                u = e.keyThreshold,
                d = t.itemValue,
                f = t.attributes,
                _ = c(d, n, i),
                p = o,
                h = f.minRanking,
                m = f.maxRanking,
                g = f.threshold;
            return (
                _ < h && _ >= s.MATCHES ? (_ = h) : _ > m && (_ = m),
                _ > a && ((a = _), (l = r), (u = g), (p = d)),
                {
                    rankedValue: p,
                    rank: a,
                    keyIndex: l,
                    keyThreshold: u
                }
            );
        },
        {
            rankedValue: e,
            rank: s.NO_MATCH,
            keyIndex: -1,
            keyThreshold: i.threshold
        }
    );
}
function c(e, t, n) {
    return ((e = p(e, n)), (t = p(t, n)).length > e.length) ? s.NO_MATCH : e === t ? s.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase()) === (t = t.toLowerCase()) ? s.EQUAL : e.startsWith(t) ? s.STARTS_WITH : e.includes(' ' + t) ? s.WORD_STARTS_WITH : e.includes(t) ? s.CONTAINS : 1 === t.length ? s.NO_MATCH : d(e).includes(t) ? s.ACRONYM : f(e, t);
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
        i = 0;
    function r(e, t, i) {
        for (var r = i, a = t.length; r < a; r++) if (t[r] === e) return (n += 1), r + 1;
        return -1;
    }
    function a(e) {
        var i = 1 / e,
            r = n / t.length;
        return s.MATCHES + r * i;
    }
    var o = r(t[0], e, 0);
    if (o < 0) return s.NO_MATCH;
    i = o;
    for (var l = 1, u = t.length; l < u; l++) if (!((i = r(t[l], e, i)) > -1)) return s.NO_MATCH;
    return a(i - o);
}
function _(e, t, n) {
    var i = -1,
        r = 1,
        a = e.rank,
        s = e.keyIndex,
        o = t.rank,
        l = t.keyIndex;
    return a !== o ? (a > o ? i : r) : s === l ? n(e, t) : s < l ? i : r;
}
function p(e, t) {
    return (e = '' + e), t.keepDiacritics || (e = a()(e)), e;
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
    for (var n = e.split('.'), i = [t], r = 0, a = n.length; r < a; r++) {
        for (var s = n[r], o = [], l = 0, u = i.length; l < u; l++) {
            var c = i[l];
            if (null != c) {
                if (Object.hasOwnProperty.call(c, s)) {
                    var d = c[s];
                    null != d && o.push(d);
                } else '*' === s && (o = o.concat(c));
            }
        }
        i = o;
    }
    if (Array.isArray(i[0])) {
        var f = [];
        return f.concat.apply(f, i);
    }
    return i;
}
function g(e, t) {
    for (var n = [], i = 0, r = t.length; i < r; i++)
        for (var a = t[i], s = v(a), o = h(e, a), l = 0, u = o.length; l < u; l++)
            n.push({
                itemValue: o[l],
                attributes: s
            });
    return n;
}
var E = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
};
function v(e) {
    return 'string' == typeof e ? E : (0, i.Z)({}, E, e);
}
