n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    r = n(434650);
function a(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: a } = e,
        o = i.useRef(!1),
        s = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != s.current && (clearTimeout(s.current), (s.current = null));
            },
            []
        ),
        (0, r.O)((e) => {
            if ((null != s.current && !e && !1 === o.current && (clearTimeout(s.current), (s.current = null)), !e || !0 === o.current)) return;
            let n = () => {
                t(), (o.current = !0), (s.current = null);
            };
            null != a ? (s.current = setTimeout(n, a)) : n();
        }, n)
    );
}
