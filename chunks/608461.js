n.d(t, { A: () => a });
var l = n(64700),
    r = n(181658),
    i = n(375708);
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
                    e.message !== i.intl.string(i.t.N2yb9a) && s(e instanceof r.A ? e : new r.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: a },
    ];
}
