n.d(t, { x8: () => o }), n(388685);
var r = n(192379),
    i = n(223143);
let a = '1157412779335090267';
function o() {
    let [e, t] = r.useState(),
        { purchases: n, hasPreviouslyFetched: o } = (0, i.c7)(),
        s = r.useRef(!1);
    return (
        r.useEffect(() => {
            o && !s.current && (t(null != n.get(a)), (s.current = !0));
        }, [n, o]),
        e
    );
}
