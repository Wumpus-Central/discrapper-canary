n.d(t, { Z: () => a }), n(388685);
var i = n(473749),
    r = n(17163),
    l = n(642007);
function a(e) {
    let { type: t, index: n, optionId: a, onDragStart: o, onDragComplete: s, onDragReset: c } = e,
        [d, u] = i.useState(!1),
        [, m] = (0, r.c)({
            type: t,
            item: () => (
                o(a),
                {
                    id: a,
                    position: n,
                }
            ),
            canDrag: () => d,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void c();
                s(n.optionId);
            },
        }),
        [{ dragSourcePosition: b }, p] = (0, l.L)({
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
    return {
        drag: m,
        dragSourcePosition: b,
        drop: p,
        setIsDraggable: u,
    };
}
