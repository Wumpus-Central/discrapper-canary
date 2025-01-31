n.d(t, { Z: () => a }), n(47120);
var i = n(192379);
function r(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
function a(e) {
    let { ref: t, onDrag: n, onDragStart: a, onDragEnd: s } = e,
        [o, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (o)
                return (
                    window.addEventListener('mouseup', e),
                    window.addEventListener('mousemove', i),
                    () => {
                        window.removeEventListener('mouseup', e), window.removeEventListener('mousemove', i);
                    }
                );
            function e() {
                null == s || s(), l(!1);
            }
            function i(e) {
                let i = t.current;
                null != i && (null == n || n(r(i, e)));
            }
        }, [t, o, s, n]),
        [
            o,
            i.useCallback(
                (e) => {
                    e.preventDefault();
                    let i = t.current;
                    null != i && (l(!0), null == a || a(), null == n || n(r(i, e)));
                },
                [t, a, n]
            )
        ]
    );
}
