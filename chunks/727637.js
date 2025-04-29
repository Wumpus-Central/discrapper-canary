n.d(t, { Z: () => i }), n(388685);
var r = n(73800);
function i(e) {
    let [t, n] = (0, r.useState)(!1),
        i = (0, r.useRef)(e.current);
    return (
        (0, r.useEffect)(() => {
            i.current = e.current;
        }, [e]),
        (0, r.useEffect)(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener('mouseenter', t),
                e.addEventListener('mouseleave', r),
                () => {
                    e.removeEventListener('mouseenter', t), e.removeEventListener('mouseleave', r);
                }
            );
        }, [i]),
        t
    );
}
