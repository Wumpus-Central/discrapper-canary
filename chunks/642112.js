a.d(e, { Z: () => n });
var r = a(573736),
    _ = a(886115);
function n(t, e, a = 250, c, s, E, l) {
    var u, I;
    if (!E.exception || !E.exception.values || !l || !(0, r.V9)(l.originalException, Error)) return;
    let d = E.exception.values.length > 0 ? E.exception.values[E.exception.values.length - 1] : void 0;
    d &&
        (E.exception.values =
            ((u = (function t(e, a, _, n, c, s, E, l) {
                if (s.length >= _ + 1) return s;
                let u = [...s];
                if ((0, r.V9)(n[c], Error)) {
                    o(E, l);
                    let r = e(a, n[c]),
                        s = u.length;
                    (i(r, c, s, l), (u = t(e, a, _, n[c], c, [r, ...u], r, s)));
                }
                return (
                    Array.isArray(n.errors) &&
                        n.errors.forEach((n, s) => {
                            if ((0, r.V9)(n, Error)) {
                                o(E, l);
                                let r = e(a, n),
                                    I = u.length;
                                (i(r, `errors[${s}]`, I, l), (u = t(e, a, _, n, c, [r, ...u], r, I)));
                            }
                        }),
                    u
                );
            })(t, e, s, l.originalException, c, E.exception.values, d, 0)),
            (I = a),
            u.map((t) => (t.value && (t.value = (0, _.$G)(t.value, I)), t))));
}
function o(t, e) {
    ((t.mechanism = t.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (t.mechanism = {
            ...t.mechanism,
            ...('AggregateError' === t.type && { is_exception_group: !0 }),
            exception_id: e
        }));
}
function i(t, e, a, r) {
    ((t.mechanism = t.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (t.mechanism = {
            ...t.mechanism,
            type: 'chained',
            source: e,
            exception_id: a,
            parent_id: r
        }));
}
