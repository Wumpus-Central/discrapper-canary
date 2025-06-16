n.d(t, { Lu: () => l });
var r = n(44837),
    i = n(725454),
    a = n.n(i),
    o = {
        CASE_SENSITIVE_EQUAL: 7,
        EQUAL: 6,
        STARTS_WITH: 5,
        WORD_STARTS_WITH: 4,
        CONTAINS: 3,
        ACRONYM: 2,
        MATCHES: 1,
        NO_MATCH: 0
    };
l.rankings = o;
var s = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};
function l(e, t, n) {
    void 0 === n && (n = {});
    var i = n,
        a = i.keys,
        l = i.threshold,
        u = void 0 === l ? o.MATCHES : l,
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
    function h(e, i, o) {
        var s = c(i, a, t, n),
            l = s.rank,
            d = s.keyThreshold;
        return (
            l >= (void 0 === d ? u : d) &&
                e.push(
                    (0, r.Z)({}, s, {
                        item: i,
                        index: o
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
            var a = e.rank,
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
                _ < h && _ >= o.MATCHES ? (_ = h) : _ > m && (_ = m),
                _ > a && ((a = _), (l = i), (c = g), (p = d)),
                {
                    rankedValue: p,
                    rank: a,
                    keyIndex: l,
                    keyThreshold: c
                }
            );
        },
        {
            rankedValue: e,
            rank: o.NO_MATCH,
            keyIndex: -1,
            keyThreshold: r.threshold
        }
    );
}
function u(e, t, n) {
    return ((e = p(e, n)), (t = p(t, n)).length > e.length) ? o.NO_MATCH : e === t ? o.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase()) === (t = t.toLowerCase()) ? o.EQUAL : e.startsWith(t) ? o.STARTS_WITH : e.includes(' ' + t) ? o.WORD_STARTS_WITH : e.includes(t) ? o.CONTAINS : 1 === t.length ? o.NO_MATCH : d(e).includes(t) ? o.ACRONYM : f(e, t);
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
        for (var i = r, a = t.length; i < a; i++) if (t[i] === e) return (n += 1), i + 1;
        return -1;
    }
    function a(e) {
        var r = 1 / e,
            i = n / t.length;
        return o.MATCHES + i * r;
    }
    var s = i(t[0], e, 0);
    if (s < 0) return o.NO_MATCH;
    r = s;
    for (var l = 1, c = t.length; l < c; l++) if (!((r = i(t[l], e, r)) > -1)) return o.NO_MATCH;
    return a(r - s);
}
function _(e, t, n) {
    var r = -1,
        i = 1,
        a = e.rank,
        o = e.keyIndex,
        s = t.rank,
        l = t.keyIndex;
    return a !== s ? (a > s ? r : i) : o === l ? n(e, t) : o < l ? r : i;
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
    for (var n = e.split('.'), r = [t], i = 0, a = n.length; i < a; i++) {
        for (var o = n[i], s = [], l = 0, c = r.length; l < c; l++) {
            var u = r[l];
            if (null != u)
                if (Object.hasOwnProperty.call(u, o)) {
                    var d = u[o];
                    null != d && s.push(d);
                } else '*' === o && (s = s.concat(u));
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
        for (var a = t[r], o = b(a), s = h(e, a), l = 0, c = s.length; l < c; l++)
            n.push({
                itemValue: s[l],
                attributes: o
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
