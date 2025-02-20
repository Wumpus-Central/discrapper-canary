n.d(t, { Z: () => i }), n(47120), n(653041);
var r = n(192379);
let i = (e, t) => {
    let [n, i] = r.useState(-1),
        o = r.useRef(-1);
    return (
        r.useEffect(() => {
            let t = e.reduce((e, t) => (e.includes(t.src) || e.push(t.src), e), []);
            i(t.length), (o.current = t.length);
        }, [e, o, i]),
        r.useEffect(() => {
            0 === n && t();
        }, [n, t]),
        {
            pending: n,
            pendingRef: o,
            setPending: i
        }
    );
};
