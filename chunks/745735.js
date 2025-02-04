n.d(t, { Z: () => s });
var i = n(192379),
    r = n(512722),
    a = n.n(r);
function s(e, t) {
    let n = (0, i.useRef)(e),
        r = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            function e() {
                a()(null != n.current, 'Missing callback'), n.current();
            }
            if (null === t) {
                null !== r.current && (clearInterval(r.current), (r.current = null));
                return;
            }
            return (r.current = setInterval(e, t)), () => clearInterval(r.current);
        }, [t]);
}
