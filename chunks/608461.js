n.d(t, { A: () => a });
var l = n(64700),
    i = n(181658),
    r = n(375708);
function a(e) {
    let [t, n] = l.useState(!1),
        [a, s] = l.useState(null);
    return [
        l.useCallback(
            async function () {
                for (var t = arguments.length, l = Array(t), a = 0; a < t; a++) l[a] = arguments[a];
                try {
                    return s(null), n(!0), await e(...l);
                } catch (e) {
                    e.message !== r.intl.string(r.t.N2yb9a) && s(e instanceof i.A ? e : new i.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: a },
    ];
}
