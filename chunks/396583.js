n.d(t, { A: () => s });
var i = n(582128),
    r = n(284009),
    a = n.n(r);
function s(e, t) {
    let n = (0, i.useRef)(e),
        r = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (null === t) {
                null !== r.current && (clearInterval(r.current), (r.current = null));
                return;
            }
            return (
                (r.current = setInterval(function () {
                    a()(null != n.current, "Missing callback"), n.current();
                }, t)),
                () => clearInterval(r.current)
            );
        }, [t]);
}
