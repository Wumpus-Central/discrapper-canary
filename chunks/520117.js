e.d(u, { A: () => c });
var t = e(64700),
    n = e(172218);
function c(r) {
    let { onVisible: u, threshold: e, minTimeVisibleMs: c } = r,
        l = t.useRef(!1),
        s = t.useRef(null);
    return (
        t.useEffect(
            () => () => {
                null != s.current && (clearTimeout(s.current), (s.current = null));
            },
            [],
        ),
        (0, n.K)((r) => {
            if (
                (null == s.current || r || !1 !== l.current || (clearTimeout(s.current), (s.current = null)),
                !r || !0 === l.current)
            )
                return;
            let e = () => {
                u(), (l.current = !0), (s.current = null);
            };
            null != c ? (s.current = setTimeout(e, c)) : e();
        }, e)
    );
}
