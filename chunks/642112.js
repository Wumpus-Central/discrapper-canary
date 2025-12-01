r.d(t, { Z: () => i });
var n = r(573736),
    a = r(886115);
function i(e, t, r = 250, s, c, E, l) {
    var u, d;
    if (!E.exception || !E.exception.values || !l || !(0, n.V9)(l.originalException, Error)) return;
    let I = E.exception.values.length > 0 ? E.exception.values[E.exception.values.length - 1] : void 0;
    I &&
        (E.exception.values =
            ((u = (function e(t, r, a, i, s, c, E, l) {
                if (c.length >= a + 1) return c;
                let u = [...c];
                if ((0, n.V9)(i[s], Error)) {
                    o(E, l);
                    let n = t(r, i[s]),
                        c = u.length;
                    _(n, s, c, l), (u = e(t, r, a, i[s], s, [n, ...u], n, c));
                }
                return (
                    Array.isArray(i.errors) &&
                        i.errors.forEach((i, c) => {
                            if ((0, n.V9)(i, Error)) {
                                o(E, l);
                                let n = t(r, i),
                                    d = u.length;
                                _(n, `errors[${c}]`, d, l), (u = e(t, r, a, i, s, [n, ...u], n, d));
                            }
                        }),
                    u
                );
            })(e, t, c, l.originalException, s, E.exception.values, I, 0)),
            (d = r),
            u.map((e) => (e.value && (e.value = (0, a.$G)(e.value, d)), e))));
}
function o(e, t) {
    (e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0,
    }),
        (e.mechanism = {
            ...e.mechanism,
            ...("AggregateError" === e.type && { is_exception_group: !0 }),
            exception_id: t,
        });
}
function _(e, t, r, n) {
    (e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0,
    }),
        (e.mechanism = {
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: r,
            parent_id: n,
        });
}
