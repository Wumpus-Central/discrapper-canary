n.d(t, {
    FK: () => l,
    Gt: () => o,
    du: () => i
});
var i,
    r = n(739292),
    a = n(968735);
function s(e) {
    return e.length < 2
        ? e
        : e.reduce(function (e, t) {
              var n = e[e.length - 1];
              return n && n.type === i.literal && t.type === i.literal ? (n.value += t.value) : e.push(t), e;
          }, []);
}
function o(e) {
    return 'function' == typeof e;
}
function l(e, t, n, u, c, d, f) {
    if (1 === e.length && (0, r.O4)(e[0]))
        return [
            {
                type: i.literal,
                value: e[0].value
            }
        ];
    for (var _ = [], p = 0, h = e; p < h.length; p++) {
        var m = h[p];
        if ((0, r.O4)(m)) {
            _.push({
                type: i.literal,
                value: m.value
            });
            continue;
        }
        if ((0, r.yx)(m)) {
            'number' == typeof d &&
                _.push({
                    type: i.literal,
                    value: n.getNumberFormat(t).format(d)
                });
            continue;
        }
        var g = m.value;
        if (!(c && g in c)) throw new a.HR(g, f);
        var E = c[g];
        if ((0, r.VG)(m)) {
            (E && 'string' != typeof E && 'number' != typeof E) || (E = 'string' == typeof E || 'number' == typeof E ? String(E) : ''),
                _.push({
                    type: 'string' == typeof E ? i.literal : i.object,
                    value: E
                });
            continue;
        }
        if ((0, r.rp)(m)) {
            var v = 'string' == typeof m.style ? u.date[m.style] : (0, r.Ii)(m.style) ? m.style.parsedOptions : void 0;
            _.push({
                type: i.literal,
                value: n.getDateTimeFormat(t, v).format(E)
            });
            continue;
        }
        if ((0, r.pe)(m)) {
            var v = 'string' == typeof m.style ? u.time[m.style] : (0, r.Ii)(m.style) ? m.style.parsedOptions : u.time.medium;
            _.push({
                type: i.literal,
                value: n.getDateTimeFormat(t, v).format(E)
            });
            continue;
        }
        if ((0, r.uf)(m)) {
            var v = 'string' == typeof m.style ? u.number[m.style] : (0, r.Wh)(m.style) ? m.style.parsedOptions : void 0;
            v && v.scale && (E *= v.scale || 1),
                _.push({
                    type: i.literal,
                    value: n.getNumberFormat(t, v).format(E)
                });
            continue;
        }
        if ((0, r.HI)(m)) {
            var y = m.children,
                I = m.value,
                b = c[I];
            if (!o(b)) throw new a.YR(I, 'function', f);
            var T = b(
                l(y, t, n, u, c, d).map(function (e) {
                    return e.value;
                })
            );
            Array.isArray(T) || (T = [T]),
                _.push.apply(
                    _,
                    T.map(function (e) {
                        return {
                            type: 'string' == typeof e ? i.literal : i.object,
                            value: e
                        };
                    })
                );
        }
        if ((0, r.Wi)(m)) {
            var S = m.options[E] || m.options.other;
            if (!S) throw new a.C8(m.value, E, Object.keys(m.options), f);
            _.push.apply(_, l(S.value, t, n, u, c));
            continue;
        }
        if ((0, r.Jo)(m)) {
            var S = m.options['='.concat(E)];
            if (!S) {
                if (!Intl.PluralRules) throw new a.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', a.jK.MISSING_INTL_API, f);
                var A = n.getPluralRules(t, { type: m.pluralType }).select(E - (m.offset || 0));
                S = m.options[A] || m.options.other;
            }
            if (!S) throw new a.C8(m.value, E, Object.keys(m.options), f);
            _.push.apply(_, l(S.value, t, n, u, c, E - (m.offset || 0)));
            continue;
        }
    }
    return s(_);
}
!(function (e) {
    (e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object');
})(i || (i = {}));
