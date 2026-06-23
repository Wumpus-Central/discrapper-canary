e.d(r, { A: () => c });
var n = e(64700),
    t = e(172218);
function c(u) {
    let { onVisible: r, threshold: e, minTimeVisibleMs: c } = u,
        l = n.useRef(!1),
        s = n.useRef(null);
    return (
        n.useEffect(
            () => () => {
                null != s.current && (clearTimeout(s.current), (s.current = null));
            },
            [],
        ),
        (0, t.K)((u) => {
            function e() {
                r(), (l.current = !0), (s.current = null);
            }
            null == s.current || u || !1 !== l.current || (clearTimeout(s.current), (s.current = null)),
                u && !0 !== l.current && (null != c ? (s.current = setTimeout(e, c)) : e());
        }, e)
    );
}
