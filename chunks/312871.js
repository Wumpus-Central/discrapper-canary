t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(192379),
    l = t(434650);
function o(e) {
    let { onVisible: n, threshold: t, minTimeVisibleMs: o } = e,
        a = i.useRef(!1),
        r = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != r.current && (clearTimeout(r.current), (r.current = null));
            },
            []
        ),
        (0, l.O)((e) => {
            if ((null != r.current && !e && !1 === a.current && (clearTimeout(r.current), (r.current = null)), !e || !0 === a.current)) return;
            let t = () => {
                n(), (a.current = !0), (r.current = null);
            };
            null != o ? (r.current = setTimeout(t, o)) : t();
        }, t)
    );
}
