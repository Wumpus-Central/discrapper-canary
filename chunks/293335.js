n.d(t, { Z: () => i }), n(388685), n(539854);
var r = n(73800);
let i = (e, t) => {
    let [n, i] = r.useState(-1),
        a = r.useRef(-1);
    return (
        r.useEffect(() => {
            let t = e.reduce((e, t) => (e.includes(t.src) || e.push(t.src), e), []);
            i(t.length), (a.current = t.length);
        }, [e, a, i]),
        r.useEffect(() => {
            0 === n && t();
        }, [n, t]),
        {
            pending: n,
            pendingRef: a,
            setPending: i
        }
    );
};
