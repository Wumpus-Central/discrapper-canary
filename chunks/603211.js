n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    l = n(999153),
    r = n(584922);
function a(e) {
    let { type: t, index: n, optionId: a, onDragStart: o, onDragComplete: s, onDragReset: d } = e,
        [c, u] = i.useState(!1),
        [, m] = (0, l.c)({
            type: t,
            item: () => (
                o(a),
                {
                    id: a,
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
                s(n.optionId);
            }
        }),
        [{ dragSourcePosition: h }, p] = (0, r.L)({
            accept: t,
            canDrop: () => !0,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: a })
        });
    return {
        drag: m,
        dragSourcePosition: h,
        drop: p,
        setIsDraggable: u
    };
}
