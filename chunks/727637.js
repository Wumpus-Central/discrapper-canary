r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
var a = r(192379);
function o(e) {
    let [n, r] = (0, a.useState)(!1),
        i = (0, a.useRef)(e.current);
    return (
        (0, a.useEffect)(() => {
            i.current = e.current;
        }, [e]),
        (0, a.useEffect)(() => {
            let e = i.current;
            if (null == e) return;
            let n = () => r(!0),
                a = () => r(!1);
            return (
                e.addEventListener('mouseenter', n),
                e.addEventListener('mouseleave', a),
                () => {
                    e.removeEventListener('mouseenter', n), e.removeEventListener('mouseleave', a);
                }
            );
        }, [i]),
        n
    );
}
