r.d(n, {
    x8: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(223143);
let s = '1157412779335090267';
function l() {
    let [e, n] = a.useState(),
        { purchases: r, hasPreviouslyFetched: i } = (0, o.c7)(),
        l = a.useRef(!1);
    return (
        a.useEffect(() => {
            i && !l.current && (n(null != r.get(s)), (l.current = !0));
        }, [r, i]),
        e
    );
}
