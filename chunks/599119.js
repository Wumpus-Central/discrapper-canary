n.d(t, { A: () => a });
var i = n(64700),
    l = n(312742),
    s = n(295868);
function a(e) {
    let { type: t, index: n, optionId: a, onDragStart: r, onDragComplete: o, onDragReset: c } = e,
        [d, u] = i.useState(!1),
        [, m] = (0, l.i)({
            type: t,
            item: () => (r(a), { id: a, position: n }),
            canDrag: () => d,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? c() : o(n.optionId);
            },
        }),
        [{ dragSourcePosition: g }, h] = (0, s.H)({
            accept: t,
            canDrop: () => !0,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop()
                    ? { dragSourcePosition: t.position }
                    : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: a }),
        });
    return { drag: m, dragSourcePosition: g, drop: h, setIsDraggable: u };
}
