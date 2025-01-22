var i = r(47120);
var a = r(724458);
var o = r(653041);
var s = r(192379);
let l = (e, n) => {
    let [r, i] = s.useState(-1),
        a = s.useRef(-1);
    return (
        s.useEffect(() => {
            let n = e.reduce((e, n) => (!e.includes(n.src) && e.push(n.src), e), []);
            i(n.length), (a.current = n.length);
        }, [e, a, i]),
        s.useEffect(() => {
            0 === r && n();
        }, [r, n]),
        {
            pending: r,
            pendingRef: a,
            setPending: i
        }
    );
};
n.Z = l;
