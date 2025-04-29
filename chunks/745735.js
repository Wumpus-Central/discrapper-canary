n.d(t, { Z: () => a });
var r = n(73800),
    i = n(512722),
    o = n.n(i);
function a(e, t) {
    let n = (0, r.useRef)(e),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            function e() {
                o()(null != n.current, 'Missing callback'), n.current();
            }
            if (null === t) {
                null !== i.current && (clearInterval(i.current), (i.current = null));
                return;
            }
            return (i.current = setInterval(e, t)), () => clearInterval(i.current);
        }, [t]);
}
