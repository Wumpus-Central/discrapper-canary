e.d(r, { A: () => c });
var n = e(64700),
    t = e(172218);
function c(u) {
    let { onVisible: r, threshold: e, minTimeVisibleMs: c } = u,
        l = n.useRef(!1),
        i = n.useRef(null);
    return (
        n.useEffect(
            () => () => {
                null != i.current && (clearTimeout(i.current), (i.current = null));
            },
            [],
        ),
        (0, t.K)(function (u) {
            function e() {
                r(), (l.current = !0), (i.current = null);
            }
            null == i.current || u || !1 !== l.current || (clearTimeout(i.current), (i.current = null)),
                u && !0 !== l.current && (null != c ? (i.current = setTimeout(e, c)) : e());
        }, e)
    );
}
