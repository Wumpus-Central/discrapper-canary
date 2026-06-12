"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(451988),
    s = n(444927);
function a(e, t) {
    let [n, a] = (0, i.useState)(e),
        o = (0, s.A)(() => new r.Ep());
    return (
        (0, i.useEffect)(() => () => o.stop(), [o]),
        [
            n,
            (0, i.useCallback)(
                (n) => {
                    a(n), n !== e && o.start(t, () => a(e));
                },
                [t, e, o],
            ),
        ]
    );
}
