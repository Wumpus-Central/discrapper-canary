a.d(e, { Z: () => n });
var r = a(573736),
    _ = a(886115);
function n(t, e, a = 250, E, c, s, l) {
    var I, R;
    if (!s.exception || !s.exception.values || !l || !(0, r.V9)(l.originalException, Error)) return;
    let u = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    u &&
        (s.exception.values =
            ((I = (function t(e, a, _, n, E, c, s, l) {
                if (c.length >= _ + 1) return c;
                let I = [...c];
                if ((0, r.V9)(n[E], Error)) {
                    o(s, l);
                    let r = e(a, n[E]),
                        c = I.length;
                    i(r, E, c, l), (I = t(e, a, _, n[E], E, [r, ...I], r, c));
                }
                return (
                    Array.isArray(n.errors) &&
                        n.errors.forEach((n, c) => {
                            if ((0, r.V9)(n, Error)) {
                                o(s, l);
                                let r = e(a, n),
                                    R = I.length;
                                i(r, `errors[${c}]`, R, l), (I = t(e, a, _, n, E, [r, ...I], r, R));
                            }
                        }),
                    I
                );
            })(t, e, c, l.originalException, E, s.exception.values, u, 0)),
            (R = a),
            I.map((t) => (t.value && (t.value = (0, _.$G)(t.value, R)), t))));
}
function o(t, e) {
    (t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0,
    }),
        (t.mechanism = {
            ...t.mechanism,
            ...("AggregateError" === t.type && { is_exception_group: !0 }),
            exception_id: e,
        });
}
function i(t, e, a, r) {
    (t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0,
    }),
        (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: a,
            parent_id: r,
        });
}
