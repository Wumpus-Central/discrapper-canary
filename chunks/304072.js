"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(451988),
    a = n(444927);
function s(e, t) {
    let [n, s] = (0, r.useState)(e),
        o = (0, a.A)(() => new i.Ep());
    return (
        (0, r.useEffect)(() => () => o.stop(), [o]),
        [
            n,
            (0, r.useCallback)(
                (n) => {
                    s(n), n !== e && o.start(t, () => s(e));
                },
                [t, e, o],
            ),
        ]
    );
}
