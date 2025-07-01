n.d(t, { Z: () => r });
var l = n(73800),
    i = n(434650);
function r(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: r } = e,
        a = l.useRef(!1),
        o = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != o.current && (clearTimeout(o.current), (o.current = null));
            },
            []
        ),
        (0, i.O)((e) => {
            if ((null == o.current || e || !1 !== a.current || (clearTimeout(o.current), (o.current = null)), !e || !0 === a.current)) return;
            let n = () => {
                (t(), (a.current = !0), (o.current = null));
            };
            null != r ? (o.current = setTimeout(n, r)) : n();
        }, n)
    );
}
