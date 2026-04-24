n.d(t, { A: () => a });
var i = n(64700),
    l = n(172218);
function a(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: a } = e,
        r = i.useRef(!1),
        s = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != s.current && (clearTimeout(s.current), (s.current = null));
            },
            [],
        ),
        (0, l.K)((e) => {
            if (
                (null == s.current || e || !1 !== r.current || (clearTimeout(s.current), (s.current = null)),
                !e || !0 === r.current)
            )
                return;
            let n = () => {
                t(), (r.current = !0), (s.current = null);
            };
            null != a ? (s.current = setTimeout(n, a)) : n();
        }, n)
    );
}
