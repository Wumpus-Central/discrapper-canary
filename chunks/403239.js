n.d(t, { q: () => u }), n(388685);
var r = n(647438),
    i = n(79116),
    a = n(100568),
    l = n(417865),
    o = n(665379),
    c = n(592183),
    s = n(517157);
function u(e) {
    let { dropRef: t, dragRef: n, userId: u, widget: d, index: f, disableInteraction: g = !1, onReorder: p } = e,
        m = (0, s.Z)(u),
        { isDragging: b, currentItem: h } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        v = (0, r.useCallback)(
            (e, t) => {
                let n = m.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), c.Z.setPendingWidgets(n);
            },
            [m],
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
            end: p,
        });
    (0, r.useEffect)(() => {
        j((0, o.r)(), { captureDraggingState: !0 });
    }, [j]);
    let [{ dragSourcePosition: O }, x] = (0, l.L)({
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
            v(e.index, t), (e.index = t);
        },
    });
    return null == f || g
        ? {
              isDragging: !1,
              dragSourcePosition: null,
          }
        : (y(n),
          x(t),
          {
              isDragging: b && (null == h ? void 0 : h.widgetType) === d.type,
              dragSourcePosition: O,
          });
}
