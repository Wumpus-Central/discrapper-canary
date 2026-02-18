n.d(t, { A: () => a });
var r = n(64700),
    l = n(181658),
    i = n(985018);
function a(e) {
    let [t, n] = r.useState(!1),
        [a, o] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                try {
                    return o(null), n(!0), await e(...r);
                } catch (e) {
                    e.message !== i.intl.string(i.t.N2yb9a) && o(e instanceof l.A ? e : new l.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: a },
    ];
}
