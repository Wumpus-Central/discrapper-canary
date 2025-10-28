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
        { isDragging: b, currentItem: y } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        h = (0, r.useCallback)(
            (e, t) => {
                let n = m.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), c.Z.setPendingWidgets(n);
            },
            [m],
        ),
        [, v, O] = (0, a.c)({
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
        O((0, o.r)(), { captureDraggingState: !0 });
    }, [O]);
    let [{ dragSourcePosition: j }, x] = (0, l.L)({
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
            h(e.index, t), (e.index = t);
        },
    });
    return null == f || g
        ? {
              isDragging: !1,
              dragSourcePosition: null,
          }
        : (v(n),
          x(t),
          {
              isDragging: b && (null == y ? void 0 : y.widgetType) === d.type,
              dragSourcePosition: j,
          });
}
