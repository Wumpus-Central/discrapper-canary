n.d(t, { A: () => r });
var i = n(64700),
    l = n(181658),
    a = n(985018);
function r(e) {
    let [t, n] = i.useState(!1),
        [r, s] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                try {
                    return s(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== a.intl.string(a.t.N2yb9a) && s(e instanceof l.A ? e : new l.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: r },
    ];
}
