"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(181658),
    a = n(985018);
function s(e) {
    let [t, n] = r.useState(!1),
        [s, o] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                try {
                    return o(null), n(!0), await e(...r);
                } catch (e) {
                    e.message !== a.intl.string(a.t.N2yb9a) && o(e instanceof i.A ? e : new i.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: s },
    ];
}
