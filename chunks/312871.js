n.d(t, { Z: () => r });
var i = n(192379),
    l = n(434650);
function r(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: r } = e,
        o = i.useRef(!1),
        a = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != a.current && (clearTimeout(a.current), (a.current = null));
            },
            []
        ),
        (0, l.O)((e) => {
            if ((null == a.current || e || !1 !== o.current || (clearTimeout(a.current), (a.current = null)), !e || !0 === o.current)) return;
            let n = () => {
                t(), (o.current = !0), (a.current = null);
            };
            null != r ? (a.current = setTimeout(n, r)) : n();
        }, n)
    );
}
