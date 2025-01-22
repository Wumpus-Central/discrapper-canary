r.d(n, {
    Lu: function () {
        return u;
    }
});
var i = r(910974),
    a = r(725454),
    o = r.n(a),
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
u.rankings = s;
var l = function (e, n) {
    return String(e.rankedValue).localeCompare(String(n.rankedValue));
};
function u(e, n, r) {
    void 0 === r && (r = {});
    var a = r,
        o = a.keys,
        u = a.threshold,
        d = void 0 === u ? s.MATCHES : u,
        f = a.baseSort,
        p = void 0 === f ? l : f,
        _ = a.sorter;
    return (
        void 0 === _
            ? function (e) {
                  return e.sort(function (e, n) {
                      return h(e, n, p);
                  });
              }
            : _
    )(e.reduce(m, [])).map(function (e) {
        return e.item;
    });
    function m(e, a, s) {
        var l = c(a, o, n, r),
            u = l.rank,
            f = l.keyThreshold;
        return (
            u >= (void 0 === f ? d : f) &&
                e.push(
                    (0, i.Z)({}, l, {
                        item: a,
                        index: s
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
            var o = e.rank,
                l = e.rankedValue,
                u = e.keyIndex,
                c = e.keyThreshold,
                f = n.itemValue,
                p = n.attributes,
                h = d(f, r, i),
                _ = l,
                m = p.minRanking,
                g = p.maxRanking,
                E = p.threshold;
            return (
                h < m && h >= s.MATCHES ? (h = m) : h > g && (h = g),
                h > o && ((o = h), (u = a), (c = E), (_ = f)),
                {
                    rankedValue: _,
                    rank: o,
                    keyIndex: u,
                    keyThreshold: c
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
function d(e, n, r) {
    return ((e = _(e, r)), (n = _(n, r)).length > e.length) ? s.NO_MATCH : e === n ? s.CASE_SENSITIVE_EQUAL : ((e = e.toLowerCase()), e === (n = n.toLowerCase())) ? s.EQUAL : e.startsWith(n) ? s.STARTS_WITH : e.includes(' ' + n) ? s.WORD_STARTS_WITH : e.includes(n) ? s.CONTAINS : 1 === n.length ? s.NO_MATCH : f(e).includes(n) ? s.ACRONYM : p(e, n);
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
function p(e, n) {
    var r = 0,
        i = 0;
    function a(e, n, i) {
        for (var a = i, o = n.length; a < o; a++) if (n[a] === e) return (r += 1), a + 1;
        return -1;
    }
    function o(e) {
        var i = 1 / e,
            a = r / n.length;
        return s.MATCHES + a * i;
    }
    var l = a(n[0], e, 0);
    if (l < 0) return s.NO_MATCH;
    i = l;
    for (var u = 1, c = n.length; u < c; u++) if (!((i = a(n[u], e, i)) > -1)) return s.NO_MATCH;
    return o(i - l);
}
function h(e, n, r) {
    var i = -1,
        a = 1,
        o = e.rank,
        s = e.keyIndex,
        l = n.rank,
        u = n.keyIndex;
    return o !== l ? (o > l ? i : a) : s === u ? r(e, n) : s < u ? i : a;
}
function _(e, n) {
    var r = n.keepDiacritics;
    return (e = '' + e), !r && (e = o()(e)), e;
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
    for (var r = e.split('.'), i = [n], a = 0, o = r.length; a < o; a++) {
        for (var s = r[a], l = [], u = 0, c = i.length; u < c; u++) {
            var d = i[u];
            if (null != d) {
                if (Object.hasOwnProperty.call(d, s)) {
                    var f = d[s];
                    null != f && l.push(f);
                } else '*' === s && (l = l.concat(d));
            }
        }
        i = l;
    }
    if (Array.isArray(i[0])) {
        var p = [];
        return p.concat.apply(p, i);
    }
    return i;
}
function E(e, n) {
    for (var r = [], i = 0, a = n.length; i < a; i++) {
        for (var o = n[i], s = y(o), l = m(e, o), u = 0, c = l.length; u < c; u++)
            r.push({
                itemValue: l[u],
                attributes: s
            });
    }
    return r;
}
var v = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
};
function y(e) {
    return 'string' == typeof e ? v : (0, i.Z)({}, v, e);
}
