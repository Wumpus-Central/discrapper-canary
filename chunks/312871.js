n.d(t, { Z: () => o });
var r = n(73800),
    i = n(434650);
function o(e) {
    let { onVisible: t, threshold: n, minTimeVisibleMs: o } = e,
        a = r.useRef(!1),
        s = r.useRef(null);
    r.useEffect(
        () => () => {
            null != s.current && (clearTimeout(s.current), (s.current = null));
        },
        []
    );
    let l = (e) => {
        if ((null == s.current || e || !1 !== a.current || (clearTimeout(s.current), (s.current = null)), !e || !0 === a.current)) return;
        let n = () => {
            (t(), (a.current = !0), (s.current = null));
        };
        null != o ? (s.current = setTimeout(n, o)) : n();
    };
    return (0, i.O)(l, n);
}
