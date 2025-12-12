n.d(t, { Z: () => a });
var r = n(661822),
    i = n(1693);
function a(e, t, n = 250, s, c, E, l) {
    var u, d;
    if (!E.exception || !E.exception.values || !l || !(0, r.V9)(l.originalException, Error)) return;
    let p = E.exception.values.length > 0 ? E.exception.values[E.exception.values.length - 1] : void 0;
    p &&
        (E.exception.values =
            ((u = (function e(t, n, i, a, s, c, E, l) {
                if (c.length >= i + 1) return c;
                let u = [...c];
                if ((0, r.V9)(a[s], Error)) {
                    o(E, l);
                    let r = t(n, a[s]),
                        c = u.length;
                    _(r, s, c, l), (u = e(t, n, i, a[s], s, [r, ...u], r, c));
                }
                return (
                    Array.isArray(a.errors) &&
                        a.errors.forEach((a, c) => {
                            if ((0, r.V9)(a, Error)) {
                                o(E, l);
                                let r = t(n, a),
                                    d = u.length;
                                _(r, `errors[${c}]`, d, l), (u = e(t, n, i, a, s, [r, ...u], r, d));
                            }
                        }),
                    u
                );
            })(e, t, c, l.originalException, s, E.exception.values, p, 0)),
            (d = n),
            u.map((e) => (e.value && (e.value = (0, i.$G)(e.value, d)), e))));
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
function _(e, t, n, r) {
    (e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0,
    }),
        (e.mechanism = {
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: n,
            parent_id: r,
        });
}
