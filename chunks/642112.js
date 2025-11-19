_.d(e, { Z: () => n });
var a = _(573736),
    r = _(886115);
function n(t, e, _ = 250, i, c, s, l) {
    var I, R;
    if (!s.exception || !s.exception.values || !l || !(0, a.V9)(l.originalException, Error)) return;
    let N = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    N &&
        (s.exception.values =
            ((I = (function t(e, _, r, n, i, c, s, l) {
                if (c.length >= r + 1) return c;
                let I = [...c];
                if ((0, a.V9)(n[i], Error)) {
                    o(s, l);
                    let a = e(_, n[i]),
                        c = I.length;
                    E(a, i, c, l), (I = t(e, _, r, n[i], i, [a, ...I], a, c));
                }
                return (
                    Array.isArray(n.errors) &&
                        n.errors.forEach((n, c) => {
                            if ((0, a.V9)(n, Error)) {
                                o(s, l);
                                let a = e(_, n),
                                    R = I.length;
                                E(a, `errors[${c}]`, R, l), (I = t(e, _, r, n, i, [a, ...I], a, R));
                            }
                        }),
                    I
                );
            })(t, e, c, l.originalException, i, s.exception.values, N, 0)),
            (R = _),
            I.map((t) => (t.value && (t.value = (0, r.$G)(t.value, R)), t))));
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
function E(t, e, _, a) {
    (t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0,
    }),
        (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: _,
            parent_id: a,
        });
}
