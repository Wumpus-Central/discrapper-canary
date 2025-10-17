n.d(t, { q: () => u }), n(388685);
var r = n(647438),
    i = n(79116),
    a = n(100568),
    l = n(417865),
    o = n(665379),
    s = n(592183),
    c = n(517157);
function u(e) {
    let { dropRef: t, dragRef: n, userId: u, widget: d, index: f, disableInteraction: g = !1 } = e,
        p = (0, c.Z)(u),
        { isDragging: m, currentItem: b } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        h = (0, r.useCallback)(
            (e, t) => {
                let n = p.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), s.Z.setPendingWidgets(n);
            },
            [p],
        ),
        [, v, y] = (0, a.c)({
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
        y((0, o.r)(), { captureDraggingState: !0 });
    }, [y]);
    let [{ dragSourcePosition: j }, O] = (0, l.L)({
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
            h(e.index, t), (e.index = t);
        },
    });
    return null == f || g
        ? {
              isDragging: !1,
              dragSourcePosition: null,
          }
        : (v(n),
          O(t),
          {
              isDragging: m && (null == b ? void 0 : b.widgetType) === d.type,
              dragSourcePosition: j,
          });
}
