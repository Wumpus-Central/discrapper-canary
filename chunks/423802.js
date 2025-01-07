r.d(n, {
    Lu: function () {
        return u;
    }
});
var i = r(910974),
    a = r(725454),
    s = r.n(a),
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
u.rankings = o;
var l = function (e, n) {
    return String(e.rankedValue).localeCompare(String(n.rankedValue));
};
function u(e, n, r) {
    void 0 === r && (r = {});
    var a = r,
        s = a.keys,
        u = a.threshold,
        d = void 0 === u ? o.MATCHES : u,
        f = a.baseSort,
        _ = void 0 === f ? l : f,
        p = a.sorter;
    return (
        void 0 === p
            ? function (e) {
                  return e.sort(function (e, n) {
                      return h(e, n, _);
                  });
              }
            : p
    )(e.reduce(m, [])).map(function (e) {
        return e.item;
    });
    function m(e, a, o) {
        var l = c(a, s, n, r),
            u = l.rank,
            f = l.keyThreshold;
        return (
            u >= (void 0 === f ? d : f) &&
                e.push(
                    (0, i.Z)({}, l, {
                        item: a,
                        index: o
                    })
                ),
            e
        );
    }
}
function c(e, n, r, i) {
    if (!n) {
        var a = e;
        return {
            rankedValue: a,
            rank: d(a, r, i),
            keyIndex: -1,
            keyThreshold: i.threshold
        };
    }
    return E(e, n).reduce(
        function (e, n, a) {
            var s = e.rank,
                l = e.rankedValue,
                u = e.keyIndex,
                c = e.keyThreshold,
                f = n.itemValue,
                _ = n.attributes,
                h = d(f, r, i),
                p = l,
                m = _.minRanking,
                g = _.maxRanking,
                E = _.threshold;
            return (
                h < m && h >= o.MATCHES ? (h = m) : h > g && (h = g),
                h > s && ((s = h), (u = a), (c = E), (p = f)),
                {
                    rankedValue: p,
                    rank: s,
                    keyIndex: u,
                    keyThreshold: c
                }
            );
        },
        {
            rankedValue: e,
            rank: o.NO_MATCH,
            keyIndex: -1,
            keyThreshold: i.threshold
        }
    );
}
function d(e, n, r) {
    return ((e = p(e, r)), (n = p(n, r)).length > e.length) ? o.NO_MATCH : e === n ? o.CASE_SENSITIVE_EQUAL : ((e = e.toLowerCase()), e === (n = n.toLowerCase())) ? o.EQUAL : e.startsWith(n) ? o.STARTS_WITH : e.includes(' ' + n) ? o.WORD_STARTS_WITH : e.includes(n) ? o.CONTAINS : 1 === n.length ? o.NO_MATCH : f(e).includes(n) ? o.ACRONYM : _(e, n);
}
function f(e) {
    var n = '';
    return (
        e.split(' ').forEach(function (e) {
            e.split('-').forEach(function (e) {
                n += e.substr(0, 1);
            });
        }),
        n
    );
}
function _(e, n) {
    var r = 0,
        i = 0;
    function a(e, n, i) {
        for (var a = i, s = n.length; a < s; a++) if (n[a] === e) return (r += 1), a + 1;
        return -1;
    }
    function s(e) {
        var i = 1 / e,
            a = r / n.length;
        return o.MATCHES + a * i;
    }
    var l = a(n[0], e, 0);
    if (l < 0) return o.NO_MATCH;
    i = l;
    for (var u = 1, c = n.length; u < c; u++) if (!((i = a(n[u], e, i)) > -1)) return o.NO_MATCH;
    return s(i - l);
}
function h(e, n, r) {
    var i = -1,
        a = 1,
        s = e.rank,
        o = e.keyIndex,
        l = n.rank,
        u = n.keyIndex;
    return s !== l ? (s > l ? i : a) : o === u ? r(e, n) : o < u ? i : a;
}
function p(e, n) {
    var r = n.keepDiacritics;
    return (e = '' + e), !r && (e = s()(e)), e;
}
function m(e, n) {
    var r;
    if (('object' == typeof n && (n = n.key), 'function' == typeof n)) r = n(e);
    else if (null == e) r = null;
    else if (Object.hasOwnProperty.call(e, n)) r = e[n];
    else {
        if (n.includes('.')) return g(n, e);
        r = null;
    }
    return null == r ? [] : Array.isArray(r) ? r : [String(r)];
}
function g(e, n) {
    for (var r = e.split('.'), i = [n], a = 0, s = r.length; a < s; a++) {
        for (var o = r[a], l = [], u = 0, c = i.length; u < c; u++) {
            var d = i[u];
            if (null != d) {
                if (Object.hasOwnProperty.call(d, o)) {
                    var f = d[o];
                    null != f && l.push(f);
                } else '*' === o && (l = l.concat(d));
            }
        }
        i = l;
    }
    if (Array.isArray(i[0])) {
        var _ = [];
        return _.concat.apply(_, i);
    }
    return i;
}
function E(e, n) {
    for (var r = [], i = 0, a = n.length; i < a; i++) {
        for (var s = n[i], o = I(s), l = m(e, s), u = 0, c = l.length; u < c; u++)
            r.push({
                itemValue: l[u],
                attributes: o
            });
    }
    return r;
}
var v = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
};
function I(e) {
    return 'string' == typeof e ? v : (0, i.Z)({}, v, e);
}
