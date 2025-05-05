n.d(t, { Z: () => l });
var i = n(73800),
    r = n(434650);
function l(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: l } = e,
        o = i.useRef(!1),
        a = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != a.current && (clearTimeout(a.current), (a.current = null));
            },
            []
        ),
        (0, r.O)((e) => {
            if ((null == a.current || e || !1 !== o.current || (clearTimeout(a.current), (a.current = null)), !e || !0 === o.current)) return;
            let n = () => {
                t(), (o.current = !0), (a.current = null);
            };
            null != l ? (a.current = setTimeout(n, l)) : n();
        }, n)
    );
}
