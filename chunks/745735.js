n.d(t, { Z: () => s });
var i = n(192379),
    r = n(512722),
    a = n.n(r);
function s(e, t) {
    let n = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            function e() {
                a()(null != n.current, 'Missing callback'), n.current();
            }
            if (null === t) return;
            let i = setInterval(e, t);
            return () => clearInterval(i);
        }, [t]);
}
