n.d(t, { Z: () => o });
var r = n(192379),
    i = n(512722),
    a = n.n(i);
function o(e, t) {
    let n = (0, r.useRef)(e),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            function e() {
                a()(null != n.current, 'Missing callback'), n.current();
            }
            if (null === t) {
                null !== i.current && (clearInterval(i.current), (i.current = null));
                return;
            }
            return (i.current = setInterval(e, t)), () => clearInterval(i.current);
        }, [t]);
}
