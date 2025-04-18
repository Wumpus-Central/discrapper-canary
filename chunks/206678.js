n.d(t, { Z: () => a }), n(388685);
var r = n(192379);
function i(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
function a(e) {
    let { ref: t, onDrag: n, onDragStart: a, onDragEnd: o } = e,
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
                null == o || o(), l(!1);
            }
            function r(e) {
                let r = t.current;
                null != r && (null == n || n(i(r, e)));
            }
        }, [t, s, o, n]),
        [
            s,
            r.useCallback(
                (e) => {
                    e.preventDefault();
                    let r = t.current;
                    null != r && (l(!0), null == a || a(), null == n || n(i(r, e)));
                },
                [t, a, n]
            )
        ]
    );
}
