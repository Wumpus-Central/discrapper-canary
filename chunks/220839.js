u.d(t, { A: () => c });
var r = u(582128);
let c = function (e, t) {
    let u = (0, r.useRef)(e);
    ((0, r.useEffect)(() => {
        u.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            if (null === t) return;
            let e = setTimeout(() => u.current(), t);
            return () => clearTimeout(e);
        }, [t, u]));
};
