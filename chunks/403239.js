r.d(t, { q: () => u }), r(388685);
var n = r(647438),
    i = r(79116),
    a = r(100568),
    o = r(417865),
    l = r(665379),
    c = r(592183),
    s = r(517157);
function u(e) {
    let { dropRef: t, dragRef: r, userId: u, widget: d, index: f, disableInteraction: g = !1 } = e,
        p = (0, s.Z)(u),
        { isDragging: b, currentItem: m } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        O = (0, n.useCallback)(
            (e, t) => {
                let r = p.slice(),
                    [n] = r.splice(e, 1);
                r.splice(t, 0, n), c.Z.setPendingWidgets(r);
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
    (0, n.useEffect)(() => {
        j((0, l.r)(), { captureDraggingState: !0 });
    }, [j]);
    let [{ dragSourcePosition: x }, v] = (0, o.L)({
        accept: "WIDGET",
        canDrop: () => !g,
        collect: (e) => {
            let t = null,
                r = e.getItem();
            return (
                null != r && e.isOver() && e.canDrop() && r.widgetType !== d.type && (t = r.originalIndex),
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
        : (y(r),
          v(t),
          {
              isDragging: b && (null == m ? void 0 : m.widgetType) === d.type,
              dragSourcePosition: x,
          });
}
