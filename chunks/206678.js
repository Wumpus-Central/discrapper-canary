r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379);
function o(e, n) {
    let r = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (n.clientX - r.left) / r.width));
}
function s(e) {
    let { ref: n, onDrag: r, onDragStart: i, onDragEnd: s } = e,
        [l, u] = a.useState(!1);
    return (
        a.useEffect(() => {
            if (!!l)
                return (
                    window.addEventListener('mouseup', e),
                    window.addEventListener('mousemove', i),
                    () => {
                        window.removeEventListener('mouseup', e), window.removeEventListener('mousemove', i);
                    }
                );
            function e() {
                null == s || s(), u(!1);
            }
            function i(e) {
                let i = n.current;
                if (null != i) null == r || r(o(i, e));
            }
        }, [n, l, s, r]),
        [
            l,
            a.useCallback(
                (e) => {
                    e.preventDefault();
                    let a = n.current;
                    if (null != a) u(!0), null == i || i(), null == r || r(o(a, e));
                },
                [n, i, r]
            )
        ]
    );
}
