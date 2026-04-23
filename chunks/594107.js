t.d(a, { p: () => l });
var r = t(493423),
    n = t(248215),
    i = t(64700);
function l(e, a, t) {
    let l = (0, r.$)(e, a),
        o = (0, i.useRef)(!1),
        u = (0, i.useRef)("u" > typeof window ? window : null);
    return (
        (0, n._)(u, "pointerdown", (e) => {
            o.current = 0 === e.width && 0 === e.height;
        }),
        (0, n._)(u, "pointerup", (e) => {
            if (o.current) {
                o.current = !1;
                return;
            }
            if ((a.setDragging(!1), !a.anchorDate)) return;
            let r = e.target;
            t.current &&
                t.current.contains(document.activeElement) &&
                (!t.current.contains(r) || !r.closest('button, [role="button"]')) &&
                a.selectFocusedDate();
        }),
        (l.calendarProps.onBlur = (e) => {
            t.current &&
                ((e.relatedTarget && t.current.contains(e.relatedTarget)) || !a.anchorDate || a.selectFocusedDate());
        }),
        (0, n._)(
            t,
            "touchmove",
            (e) => {
                a.isDragging && e.preventDefault();
            },
            { passive: !1, capture: !0 },
        ),
        l
    );
}
