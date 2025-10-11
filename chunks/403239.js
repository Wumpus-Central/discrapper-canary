n.d(t, { q: () => u }), n(388685);
var r = n(647438),
    i = n(79116),
    a = n(100568),
    o = n(417865),
    l = n(665379),
    c = n(592183),
    s = n(517157);
function u(e) {
    let { dropRef: t, dragRef: n, userId: u, widget: d, index: f, disableInteraction: g = !1 } = e,
        p = (0, s.Z)(u),
        { isDragging: b, currentItem: m } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        O = (0, r.useCallback)(
            (e, t) => {
                let n = p.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), c.Z.setPendingWidgets(n);
            },
            [p],
        ),
        [, y, j] = (0, a.c)({
            type: "WIDGET",
            item: {
                widgetType: d.type,
                index: f,
                widget: d,
                originalIndex: null != f ? f : 0,
                type: "WIDGET",
            },
            canDrag: () => !g,
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    (0, r.useEffect)(() => {
        j((0, l.r)(), { captureDraggingState: !0 });
    }, [j]);
    let [{ dragSourcePosition: x }, v] = (0, o.L)({
        accept: "WIDGET",
        canDrop: () => !g,
        collect: (e) => {
            let t = null,
                n = e.getItem();
            return (
                null != n && e.isOver() && e.canDrop() && n.widgetType !== d.type && (t = n.originalIndex),
                {
                    handlerId: e.getHandlerId(),
                    dragSourcePosition: t,
                }
            );
        },
        drop: (e) => {
            let t = null != f ? f : 0;
            O(e.index, t), (e.index = t);
        },
    });
    return null == f || g
        ? {
              isDragging: !1,
              dragSourcePosition: null,
          }
        : (y(n),
          v(t),
          {
              isDragging: b && (null == m ? void 0 : m.widgetType) === d.type,
              dragSourcePosition: x,
          });
}
