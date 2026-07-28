"use strict";
n.d(t, { A: () => s });
var i = n(582128),
    r = n(451988),
    a = n(444927);
function s(e, t) {
    let [n, s] = (0, i.useState)(e),
        l = (0, a.A)(() => new r.Ep());
    return (
        (0, i.useEffect)(() => () => l.stop(), [l]),
        [
            n,
            (0, i.useCallback)(
                (n) => {
                    s(n), n !== e && l.start(t, () => s(e));
                },
                [t, e, l],
            ),
        ]
    );
}
