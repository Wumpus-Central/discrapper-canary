r.d(e, { A: () => u });
var s = r(64700);
let u = function (t, e) {
    let r = (0, s.useRef)(t);
    (0, s.useEffect)(() => {
        r.current = t;
    }, [t]),
        (0, s.useEffect)(() => {
            if (null === e) return;
            let t = setTimeout(() => r.current(), e);
            return () => clearTimeout(t);
        }, [e, r]);
};
