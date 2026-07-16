r.d(e, { A: () => s });
var n = r(64700);
let s = function (t, e) {
    let r = (0, n.useRef)(t);
    (0, n.useEffect)(() => {
        r.current = t;
    }, [t]),
        (0, n.useEffect)(() => {
            if (null === e) return;
            let t = setTimeout(() => r.current(), e);
            return () => clearTimeout(t);
        }, [e, r]);
};
