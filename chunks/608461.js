n.d(t, { A: () => s });
var i = n(64700),
    l = n(181658),
    a = n(985018);
function s(e) {
    let [t, n] = i.useState(!1),
        [s, r] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                try {
                    return r(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== a.intl.string(a.t.N2yb9a) && r(e instanceof l.A ? e : new l.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: s },
    ];
}
