n.d(t, { A: () => a });
var i = n(64700),
    l = n(131346),
    s = n(522437);
function a(e) {
    let { type: t, index: n, optionId: a, onDragStart: r, onDragComplete: o, onDragReset: d } = e,
        [c, u] = i.useState(!1),
        [, m] = (0, l.i)({
            type: t,
            item: () => (r(a), { id: a, position: n }),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? d() : o(n.optionId);
            },
        }),
        [{ dragSourcePosition: g }, x] = (0, s.H)({
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
    return { drag: m, dragSourcePosition: g, drop: x, setIsDraggable: u };
}
