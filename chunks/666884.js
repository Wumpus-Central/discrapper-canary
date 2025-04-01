n.d(t, { Z: () => s }), n(47120);
var r = n(192379);
function s(e, t) {
    let n = (0, r.useRef)(e),
        s = (0, r.useRef)(e),
        [o, i] = (0, r.useState)(0),
        a = (0, r.useRef)(0);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]);
    let c = (0, r.useCallback)(() => {
        let e = n.current - s.current;
        (a.current = 0.5 * e + 0.5 * a.current), (s.current = n.current), i(a.current);
    }, []);
    return (
        (0, r.useEffect)(() => {
            if (!t) {
                let e = setInterval(c, 1000);
                return () => {
                    c(), clearInterval(e);
                };
            }
        }, [c, t]),
        Math.round(o)
    );
}
