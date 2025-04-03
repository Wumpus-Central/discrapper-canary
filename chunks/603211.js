n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    i = n(999153),
    l = n(584922);
function o(e) {
    let { type: t, index: n, optionId: o, onDragStart: a, onDragComplete: s, onDragReset: c } = e,
        [d, u] = r.useState(!1),
        [, p] = (0, i.c)({
            type: t,
            item: () => (
                a(o),
                {
                    id: o,
                    position: n
                }
            ),
            canDrag: () => d,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void c();
                s(n.optionId);
            }
        }),
        [{ dragSourcePosition: m }, b] = (0, l.L)({
            accept: t,
            canDrop: () => !0,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: o })
        });
    return {
        drag: p,
        dragSourcePosition: m,
        drop: b,
        setIsDraggable: u
    };
}
