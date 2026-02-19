"use strict";
n.d(t, { V: () => r });
var i = n(64700),
    s = n(506774),
    l = n(964486);
function r(e, t) {
    let [n, r] = i.useState(() => {
        let n = s.w.get(e);
        return null != n ? n : t;
    });
    return (
        (0, l.Ay)(() => {
            null == s.w.get(e) && s.w.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    r(t), s.w.set(e, t);
                },
                [e],
            ),
        ]
    );
}
