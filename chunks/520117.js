n.d(t, { A: () => r });
var l = n(582128),
    i = n(172218);
function r(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: r } = e,
        s = l.useRef(!1),
        a = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != a.current && (clearTimeout(a.current), (a.current = null));
            },
            [],
        ),
        (0, i.K)(function (e) {
            function n() {
                (t(), (s.current = !0), (a.current = null));
            }
            (null == a.current || e || !1 !== s.current || (clearTimeout(a.current), (a.current = null)),
                e && !0 !== s.current && (null != r ? (a.current = setTimeout(n, r)) : n()));
        }, n)
    );
}
