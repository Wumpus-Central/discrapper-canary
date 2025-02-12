a.d(e, { Z: () => _ });
var r = a(573736),
    n = a(886115);
function _(t, e, a = 250, c, s, E, l) {
    var u, I;
    if (!E.exception || !E.exception.values || !l || !(0, r.V9)(l.originalException, Error)) return;
    let R = E.exception.values.length > 0 ? E.exception.values[E.exception.values.length - 1] : void 0;
    R &&
        (E.exception.values =
            ((u = (function t(e, a, n, _, c, s, E, l) {
                if (s.length >= n + 1) return s;
                let u = [...s];
                if ((0, r.V9)(_[c], Error)) {
                    o(E, l);
                    let r = e(a, _[c]),
                        s = u.length;
                    i(r, c, s, l), (u = t(e, a, n, _[c], c, [r, ...u], r, s));
                }
                return (
                    Array.isArray(_.errors) &&
                        _.errors.forEach((_, s) => {
                            if ((0, r.V9)(_, Error)) {
                                o(E, l);
                                let r = e(a, _),
                                    I = u.length;
                                i(r, `errors[${s}]`, I, l), (u = t(e, a, n, _, c, [r, ...u], r, I));
                            }
                        }),
                    u
                );
            })(t, e, s, l.originalException, c, E.exception.values, R, 0)),
            (I = a),
            u.map((t) => (t.value && (t.value = (0, n.$G)(t.value, I)), t))));
}
function o(t, e) {
    (t.mechanism = t.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (t.mechanism = {
            ...t.mechanism,
            ...('AggregateError' === t.type && { is_exception_group: !0 }),
            exception_id: e
        });
}
function i(t, e, a, r) {
    (t.mechanism = t.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (t.mechanism = {
            ...t.mechanism,
            type: 'chained',
            source: e,
            exception_id: a,
            parent_id: r
        });
}
