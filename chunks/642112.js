a.d(e, { Z: () => o });
var r = a(573736),
    n = a(886115);
function o(t, e, a = 250, c, s, E, l) {
    var u, I;
    if (!E.exception || !E.exception.values || !l || !(0, r.V9)(l.originalException, Error)) return;
    let R = E.exception.values.length > 0 ? E.exception.values[E.exception.values.length - 1] : void 0;
    R &&
        (E.exception.values =
            ((u = (function t(e, a, n, o, c, s, E, l) {
                if (s.length >= n + 1) return s;
                let u = [...s];
                if ((0, r.V9)(o[c], Error)) {
                    _(E, l);
                    let r = e(a, o[c]),
                        s = u.length;
                    i(r, c, s, l), (u = t(e, a, n, o[c], c, [r, ...u], r, s));
                }
                return (
                    Array.isArray(o.errors) &&
                        o.errors.forEach((o, s) => {
                            if ((0, r.V9)(o, Error)) {
                                _(E, l);
                                let r = e(a, o),
                                    I = u.length;
                                i(r, `errors[${s}]`, I, l), (u = t(e, a, n, o, c, [r, ...u], r, I));
                            }
                        }),
                    u
                );
            })(t, e, s, l.originalException, c, E.exception.values, R, 0)),
            (I = a),
            u.map((t) => (t.value && (t.value = (0, n.$G)(t.value, I)), t))));
}
function _(t, e) {
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
