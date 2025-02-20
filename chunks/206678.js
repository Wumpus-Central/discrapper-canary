n.d(t, { Z: () => o }), n(47120);
var r = n(192379);
function i(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
function o(e) {
    let { ref: t, onDrag: n, onDragStart: o, onDragEnd: a } = e,
        [s, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (s)
                return (
                    window.addEventListener('mouseup', e),
                    window.addEventListener('mousemove', r),
                    () => {
                        window.removeEventListener('mouseup', e), window.removeEventListener('mousemove', r);
                    }
                );
            function e() {
                null == a || a(), l(!1);
            }
            function r(e) {
                let r = t.current;
                null != r && (null == n || n(i(r, e)));
            }
        }, [t, s, a, n]),
        [
            s,
            r.useCallback(
                (e) => {
                    e.preventDefault();
                    let r = t.current;
                    null != r && (l(!0), null == o || o(), null == n || n(i(r, e)));
                },
                [t, o, n]
            )
        ]
    );
}
