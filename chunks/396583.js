n.d(t, { A: () => s });
var r = n(64700),
    i = n(284009),
    a = n.n(i);
function s(e, t) {
    let n = (0, r.useRef)(e),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            function e() {
                a()(null != n.current, "Missing callback"), n.current();
            }
            if (null === t) {
                null !== i.current && (clearInterval(i.current), (i.current = null));
                return;
            }
            return (i.current = setInterval(e, t)), () => clearInterval(i.current);
        }, [t]);
}
