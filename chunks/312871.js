t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(192379),
    l = t(434650);
function a(e) {
    let { onVisible: n, threshold: t, minTimeVisibleMs: a } = e,
        o = i.useRef(!1),
        r = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != r.current && (clearTimeout(r.current), (r.current = null));
            },
            []
        ),
        (0, l.O)((e) => {
            if ((null != r.current && !e && !1 === o.current && (clearTimeout(r.current), (r.current = null)), !e || !0 === o.current)) return;
            let t = () => {
                n(), (o.current = !0), (r.current = null);
            };
            null != a ? (r.current = setTimeout(t, a)) : t();
        }, t)
    );
}
