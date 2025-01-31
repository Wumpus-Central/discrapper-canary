n.d(t, { x8: () => s }), n(47120);
var i = n(192379),
    r = n(223143);
let a = '1157412779335090267';
function s() {
    let [e, t] = i.useState(),
        { purchases: n, hasPreviouslyFetched: s } = (0, r.c7)(),
        o = i.useRef(!1);
    return (
        i.useEffect(() => {
            s && !o.current && (t(null != n.get(a)), (o.current = !0));
        }, [n, s]),
        e
    );
}
