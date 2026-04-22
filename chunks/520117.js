n.d(t, { A: () => a });
var i = n(64700),
    l = n(172218);
function a(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: a } = e,
        s = i.useRef(!1),
        r = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != r.current && (clearTimeout(r.current), (r.current = null));
            },
            [],
        ),
        (0, l.K)((e) => {
            if (
                (null == r.current || e || !1 !== s.current || (clearTimeout(r.current), (r.current = null)),
                !e || !0 === s.current)
            )
                return;
            let n = () => {
                t(), (s.current = !0), (r.current = null);
            };
            null != a ? (r.current = setTimeout(n, a)) : n();
        }, n)
    );
}
