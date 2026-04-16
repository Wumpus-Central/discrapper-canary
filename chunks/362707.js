"use strict";
n.d(t, { S9: () => a, ic: () => o, yX: () => l });
var i = n(64700),
    s = n(927813);
let r = /\.$/,
    l = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(r, ""))
                  .join(". ")
                  .trim()
            : e;
function a(e) {
    let [t, n] = i.useState(() => null != e && !e),
        [s, r] = i.useState(e);
    return null == s && null != e ? (r(e), n(!e)) : s !== e && r(e), [t, n];
}
function o() {
    let [e, t] = i.useState(!1),
        n = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            i.useCallback((e) => {
                null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        t(!1), (n.current = null);
                    }, e * s.A.Millis.SECOND));
            }, []),
        ]
    );
}
