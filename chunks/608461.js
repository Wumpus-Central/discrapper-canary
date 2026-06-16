"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(181658),
    s = n(375708);
function a(e) {
    let [t, n] = i.useState(!1),
        [a, o] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                try {
                    return o(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== s.intl.string(s.t.N2yb9a) && o(e instanceof r.A ? e : new r.A(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        { loading: t, error: a },
    ];
}
