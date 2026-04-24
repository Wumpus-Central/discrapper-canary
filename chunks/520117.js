"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    a = n(172218);
function s(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: s } = e,
        l = i.useRef(!1),
        r = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != r.current && (clearTimeout(r.current), (r.current = null));
            },
            [],
        ),
        (0, a.K)((e) => {
            if (
                (null == r.current || e || !1 !== l.current || (clearTimeout(r.current), (r.current = null)),
                !e || !0 === l.current)
            )
                return;
            let n = () => {
                t(), (l.current = !0), (r.current = null);
            };
            null != s ? (r.current = setTimeout(n, s)) : n();
        }, n)
    );
}
