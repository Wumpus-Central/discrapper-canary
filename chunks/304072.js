"use strict";
n.d(t, { A: () => a });
var l = n(64700),
    i = n(451988),
    s = n(444927);
function a(e, t) {
    let [n, a] = (0, l.useState)(e),
        r = (0, s.A)(() => new i.Ep());
    return (
        (0, l.useEffect)(() => () => r.stop(), [r]),
        [
            n,
            (0, l.useCallback)(
                (n) => {
                    a(n), n !== e && r.start(t, () => a(e));
                },
                [t, e, r],
            ),
        ]
    );
}
