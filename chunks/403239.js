r.d(t, { q: () => d }), r(388685);
var n = r(647438),
    i = r(323946),
    l = r(574981),
    o = r(194630),
    a = r(665379),
    c = r(481060),
    s = r(592183),
    u = r(517157);
function d(e) {
    let { dropRef: t, dragRef: r, userId: d, widget: g, index: f, disableInteraction: b = !1 } = e,
        p = (0, u.Z)(d),
        O = (0, c.zPA)(),
        { isDragging: y, currentItem: j } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        m = (0, n.useCallback)(
            (e, t) => {
                let r = p.slice(),
                    [n] = r.splice(e, 1);
                r.splice(t, 0, n), s.Z.setPendingWidgets(r);
            },
            [p],
        ),
        [, v, x] = (0, l.c)({
            type: "WIDGET",
            item: {
                widgetId: g.id,
                index: f,
                widget: g,
                originalIndex: null != f ? f : 0,
            },
            canDrag: () => !b,
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    (0, n.useEffect)(() => {
        x((0, a.r)(), { captureDraggingState: !0 });
    }, [x]);
    let [{ dragSourcePosition: h }, w] = (0, o.L)({
        accept: "WIDGET",
        canDrop: () => !b,
        collect: (e) => {
            let t = null,
                r = e.getItem();
            return (
                null != r && e.isOver() && e.canDrop() && r.widgetId !== g.id && (t = r.originalIndex),
                {
                    handlerId: e.getHandlerId(),
                    dragSourcePosition: t,
                }
            );
        },
        drop: (e) => {
            let t = null != f ? f : 0;
            m(e.index, t), (e.index = t);
        },
        hover: (e, r) => {
            var n;
            if (b || O || null == t.current || !r.isOver({ shallow: !0 })) return;
            let i = e.index,
                l = null != f ? f : 0;
            if (i === l) return;
            let o = null == (n = t.current) ? void 0 : n.getBoundingClientRect(),
                a = (o.bottom - o.top) / 2,
                c = r.getClientOffset();
            if (null == c) return;
            let s = c.y - o.top;
            (!(i < l) || !(s < a)) && ((i > l && s > a) || (m(i, l), (e.index = l)));
        },
    });
    return null == f || b
        ? {
              isDragging: !1,
              dragSourcePosition: null,
          }
        : (v(r),
          w(t),
          {
              isDragging: y && (null == j ? void 0 : j.widgetId) === g.id,
              dragSourcePosition: h,
          });
}
