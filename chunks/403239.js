n.d(t, { q: () => u }), n(388685);
var r = n(647438),
    i = n(79116),
    a = n(100568),
    l = n(417865),
    o = n(665379),
    s = n(592183),
    c = n(517157);
function u(e) {
    let { dropRef: t, dragRef: n, userId: u, widget: d, index: f, disableInteraction: g = !1, onReorder: p } = e,
        m = (0, c.Z)(u),
        { isDragging: b, currentItem: h } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        v = (0, r.useCallback)(
            (e, t) => {
                let n = m.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), s.Z.setPendingWidgets(n);
            },
            [m],
        ),
        [, y, j] = (0, a.c)({
            type: "WIDGET",
            item: {
                widgetType: d.type,
                index: f,
                itemType: "WIDGET",
                itemPreviewProps: { widget: d },
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
                null != n && e.isOver() && e.canDrop() && n.widgetType !== d.type && (t = n.index),
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
