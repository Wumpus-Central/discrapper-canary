n.d(t, { Z: () => r }), n(47120);
var i = n(192379);
function r(e) {
    let [t, n] = (0, i.useState)(!1),
        r = (0, i.useRef)(e.current);
    return (
        (0, i.useEffect)(() => {
            r.current = e.current;
        }, [e]),
        (0, i.useEffect)(() => {
            let e = r.current;
            if (null == e) return;
            let t = () => n(!0),
                i = () => n(!1);
            return (
                e.addEventListener('mouseenter', t),
                e.addEventListener('mouseleave', i),
                () => {
                    e.removeEventListener('mouseenter', t), e.removeEventListener('mouseleave', i);
                }
            );
        }, [r]),
        t
    );
}
