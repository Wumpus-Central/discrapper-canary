r.d(n, {
    FK: function () {
        return u;
    },
    Gt: function () {
        return l;
    },
    du: function () {
        return i;
    }
});
var i,
    a = r(739292),
    o = r(968735);
function s(e) {
    return e.length < 2
        ? e
        : e.reduce(function (e, n) {
              var r = e[e.length - 1];
              return r && r.type === i.literal && n.type === i.literal ? (r.value += n.value) : e.push(n), e;
          }, []);
}
function l(e) {
    return 'function' == typeof e;
}
function u(e, n, r, c, d, f, p) {
    if (1 === e.length && (0, a.O4)(e[0]))
        return [
            {
                type: i.literal,
                value: e[0].value
            }
        ];
    for (var h = [], _ = 0, m = e; _ < m.length; _++) {
        var g = m[_];
        if ((0, a.O4)(g)) {
            h.push({
                type: i.literal,
                value: g.value
            });
            continue;
        }
        if ((0, a.yx)(g)) {
            'number' == typeof f &&
                h.push({
                    type: i.literal,
                    value: r.getNumberFormat(n).format(f)
                });
            continue;
        }
        var E = g.value;
        if (!(d && E in d)) throw new o.HR(E, p);
        var v = d[E];
        if ((0, a.VG)(g)) {
            (!v || 'string' == typeof v || 'number' == typeof v) && (v = 'string' == typeof v || 'number' == typeof v ? String(v) : ''),
                h.push({
                    type: 'string' == typeof v ? i.literal : i.object,
                    value: v
                });
            continue;
        }
        if ((0, a.rp)(g)) {
            var y = 'string' == typeof g.style ? c.date[g.style] : (0, a.Ii)(g.style) ? g.style.parsedOptions : void 0;
            h.push({
                type: i.literal,
                value: r.getDateTimeFormat(n, y).format(v)
            });
            continue;
        }
        if ((0, a.pe)(g)) {
            var y = 'string' == typeof g.style ? c.time[g.style] : (0, a.Ii)(g.style) ? g.style.parsedOptions : c.time.medium;
            h.push({
                type: i.literal,
                value: r.getDateTimeFormat(n, y).format(v)
            });
            continue;
        }
        if ((0, a.uf)(g)) {
            var y = 'string' == typeof g.style ? c.number[g.style] : (0, a.Wh)(g.style) ? g.style.parsedOptions : void 0;
            y && y.scale && (v *= y.scale || 1),
                h.push({
                    type: i.literal,
                    value: r.getNumberFormat(n, y).format(v)
                });
            continue;
        }
        if ((0, a.HI)(g)) {
            var b = g.children,
                I = g.value,
                T = d[I];
            if (!l(T)) throw new o.YR(I, 'function', p);
            var S = T(
                u(b, n, r, c, d, f).map(function (e) {
                    return e.value;
                })
            );
            !Array.isArray(S) && (S = [S]),
                h.push.apply(
                    h,
                    S.map(function (e) {
                        return {
                            type: 'string' == typeof e ? i.literal : i.object,
                            value: e
                        };
                    })
                );
        }
        if ((0, a.Wi)(g)) {
            var A = g.options[v] || g.options.other;
            if (!A) throw new o.C8(g.value, v, Object.keys(g.options), p);
            h.push.apply(h, u(A.value, n, r, c, d));
            continue;
        }
        if ((0, a.Jo)(g)) {
            var A = g.options['='.concat(v)];
            if (!A) {
                if (!Intl.PluralRules) throw new o.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.jK.MISSING_INTL_API, p);
                var C = r.getPluralRules(n, { type: g.pluralType }).select(v - (g.offset || 0));
                A = g.options[C] || g.options.other;
            }
            if (!A) throw new o.C8(g.value, v, Object.keys(g.options), p);
            h.push.apply(h, u(A.value, n, r, c, d, v - (g.offset || 0)));
            continue;
        }
    }
    return s(h);
}
!(function (e) {
    (e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object');
})(i || (i = {}));
