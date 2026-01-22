n.d(t, {
    A: () => a,
}),
    n(896048);
var i = n(64700),
    r = n(131346),
    l = n(744818);

function a(e) {
    let { type: t, index: n, optionId: a, onDragStart: s, onDragComplete: o, onDragReset: c } = e,
        [d, u] = i.useState(!1),
        [, b] = (0, r.i)({
            type: t,
            item: () => (
                s(a),
                {
                    id: a,
                    position: n,
                }
            ),
            canDrag: () => d,
            collect: (e) => ({
                isDragging: e.isDragging(),
            }),
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? c() : o(n.optionId);
            },
        }),
        [{ dragSourcePosition: f }, p] = (0, l.H)({
            accept: t,
            canDrop: () => !0,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop()
                    ? {
                          dragSourcePosition: t.position,
                      }
                    : {
                          dragSourcePosition: null,
                      };
            },
            drop: () => ({
                optionId: a,
            }),
        });
    return {
        drag: b,
        dragSourcePosition: f,
        drop: p,
        setIsDraggable: u,
    };
}
