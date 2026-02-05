n.d(t, { A: () => s });
var a = n(64700);
let s = (e, t) => {
    let n = (0, a.useRef)(e);
    (0, a.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, a.useEffect)(() => {
            if (null === t) return;
            let e = setTimeout(() => n.current(), t);
            return () => clearTimeout(e);
        }, [t, n]);
};
