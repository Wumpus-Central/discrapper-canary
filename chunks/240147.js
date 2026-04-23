"use strict";
n.d(t, { A: () => s });
var r = n(64700);
function i(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
function s(e) {
    let { ref: t, onDrag: n, onDragStart: s, onDragEnd: a } = e,
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
                a?.(), l(!1);
            }
            function r(e) {
                let r = t.current;
                null != r && n?.(i(r, e));
            }
        }, [t, o, a, n]),
        [
            o,
            r.useCallback(
                (e) => {
                    e.preventDefault();
                    let r = t.current;
                    null != r && (l(!0), s?.(), n?.(i(r, e)));
                },
                [t, s, n],
            ),
        ]
    );
}
