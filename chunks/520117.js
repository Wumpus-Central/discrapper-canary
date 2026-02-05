"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(172218);
function a(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: a } = e,
        s = r.useRef(!1),
        o = r.useRef(null);
    r.useEffect(
        () => () => {
            null != o.current && (clearTimeout(o.current), (o.current = null));
        },
        [],
    );
    let l = (e) => {
        if (
            (null == o.current || e || !1 !== s.current || (clearTimeout(o.current), (o.current = null)),
            !e || !0 === s.current)
        )
            return;
        let n = () => {
            t(), (s.current = !0), (o.current = null);
        };
        null != a ? (o.current = setTimeout(n, a)) : n();
    };
    return (0, i.K)(l, n);
}
