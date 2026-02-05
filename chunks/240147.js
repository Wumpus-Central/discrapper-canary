"use strict";
n.d(t, { A: () => a });
var r = n(64700);
function i(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
function a(e) {
    let { ref: t, onDrag: n, onDragStart: a, onDragEnd: s } = e,
        [o, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (o)
                return (
                    window.addEventListener("mouseup", e),
                    window.addEventListener("mousemove", r),
                    () => {
                        window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", r);
                    }
                );
            function e() {
                s?.(), l(!1);
            }
            function r(e) {
                let r = t.current;
                null != r && n?.(i(r, e));
            }
        }, [t, o, s, n]),
        [
            o,
            r.useCallback(
                (e) => {
                    e.preventDefault();
                    let r = t.current;
                    null != r && (l(!0), a?.(), n?.(i(r, e)));
                },
                [t, a, n],
            ),
        ]
    );
}
