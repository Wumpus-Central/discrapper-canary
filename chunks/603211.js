n.d(t, { Z: () => r }), n(47120);
var i = n(192379),
    l = n(999153),
    a = n(584922);
function r(e) {
    let { type: t, index: n, optionId: r, onDragStart: s, onDragComplete: o, onDragReset: d } = e,
        [c, u] = i.useState(!1),
        [, m] = (0, l.c)({
            type: t,
            item: () => (
                s(r),
                {
                    id: r,
                    position: n
                }
            ),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) {
                    d();
                    return;
                }
                o(n.optionId);
            }
        }),
        [{ dragSourcePosition: h }, x] = (0, a.L)({
            accept: t,
            canDrop: () => !0,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: r })
        });
    return {
        drag: m,
        dragSourcePosition: h,
        drop: x,
        setIsDraggable: u
    };
}
