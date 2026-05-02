s.d(e, { A: () => u });
var r = s(64700);
let u = (t, e) => {
    let s = (0, r.useRef)(t);
    (0, r.useEffect)(() => {
        s.current = t;
    }, [t]),
        (0, r.useEffect)(() => {
            if (null === e) return;
            let t = setTimeout(() => s.current(), e);
            return () => clearTimeout(t);
        }, [e, s]);
};
