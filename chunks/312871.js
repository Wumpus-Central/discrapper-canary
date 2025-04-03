n.d(t, { Z: () => l });
var i = n(192379),
    r = n(434650);
function l(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: l } = e,
        a = i.useRef(!1),
        o = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != o.current && (clearTimeout(o.current), (o.current = null));
            },
            []
        ),
        (0, r.O)((e) => {
            if ((null == o.current || e || !1 !== a.current || (clearTimeout(o.current), (o.current = null)), !e || !0 === a.current)) return;
            let n = () => {
                t(), (a.current = !0), (o.current = null);
            };
            null != l ? (o.current = setTimeout(n, l)) : n();
        }, n)
    );
}
