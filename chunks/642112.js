a.d(e, { Z: () => n });
var r = a(573736),
    _ = a(886115);
function n(t, e, a = 250, c, E, s, l) {
    var I, u;
    if (!s.exception || !s.exception.values || !l || !(0, r.V9)(l.originalException, Error)) return;
    let R = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    R &&
        (s.exception.values =
            ((I = (function t(e, a, _, n, c, E, s, l) {
                if (E.length >= _ + 1) return E;
                let I = [...E];
                if ((0, r.V9)(n[c], Error)) {
                    o(s, l);
                    let r = e(a, n[c]),
                        E = I.length;
                    i(r, c, E, l), (I = t(e, a, _, n[c], c, [r, ...I], r, E));
                }
                return (
                    Array.isArray(n.errors) &&
                        n.errors.forEach((n, E) => {
                            if ((0, r.V9)(n, Error)) {
                                o(s, l);
                                let r = e(a, n),
                                    u = I.length;
                                i(r, `errors[${E}]`, u, l), (I = t(e, a, _, n, c, [r, ...I], r, u));
                            }
                        }),
                    I
                );
            })(t, e, E, l.originalException, c, s.exception.values, R, 0)),
            (u = a),
            I.map((t) => (t.value && (t.value = (0, _.$G)(t.value, u)), t))));
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
