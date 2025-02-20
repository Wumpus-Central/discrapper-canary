n.d(t, { x8: () => a }), n(47120);
var r = n(192379),
    i = n(223143);
let o = '1157412779335090267';
function a() {
    let [e, t] = r.useState(),
        { purchases: n, hasPreviouslyFetched: a } = (0, i.c7)(),
        s = r.useRef(!1);
    return (
        r.useEffect(() => {
            a && !s.current && (t(null != n.get(o)), (s.current = !0));
        }, [n, a]),
        e
    );
}
