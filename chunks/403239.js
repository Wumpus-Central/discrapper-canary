r.d(t, { q: () => d }), r(388685);
var n = r(647438),
    i = r(79116),
    o = r(100568),
    a = r(417865),
    l = r(665379),
    c = r(481060),
    s = r(592183),
    u = r(517157);
function d(e) {
    let { dropRef: t, dragRef: r, userId: d, widget: f, index: g, disableInteraction: p = !1 } = e,
        b = (0, u.Z)(d),
        m = (0, c.zPA)(),
        { isDragging: O, currentItem: y } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        j = (0, n.useCallback)(
            (e, t) => {
                let r = b.slice(),
                    [n] = r.splice(e, 1);
                r.splice(t, 0, n), s.Z.setPendingWidgets(r);
            },
            [b],
        ),
        [, x, h] = (0, o.c)({
            type: "WIDGET",
            item: {
                widgetType: f.type,
                index: g,
                widget: f,
                originalIndex: null != g ? g : 0,
            },
            canDrag: () => !p,
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    (0, n.useEffect)(() => {
        h((0, l.r)(), { captureDraggingState: !0 });
    }, [h]);
    let [{ dragSourcePosition: v }, _] = (0, a.L)({
        accept: "WIDGET",
        canDrop: () => !p,
        collect: (e) => {
            let t = null,
                r = e.getItem();
            return (
                null != r && e.isOver() && e.canDrop() && r.widgetType !== f.type && (t = r.originalIndex),
                {
                    handlerId: e.getHandlerId(),
                    dragSourcePosition: t,
                }
            );
        },
        drop: (e) => {
            let t = null != g ? g : 0;
            j(e.index, t), (e.index = t);
        },
        hover: (e, r) => {
            var n;
            if (p || m || null == t.current || !r.isOver({ shallow: !0 })) return;
            let i = e.index,
                o = null != g ? g : 0;
            if (i === o) return;
            let a = null == (n = t.current) ? void 0 : n.getBoundingClientRect(),
                l = (a.bottom - a.top) / 2,
                c = r.getClientOffset();
            if (null == c) return;
            let s = c.y - a.top;
            (!(i < o) || !(s < l)) && ((i > o && s > l) || (j(i, o), (e.index = o)));
        },
    });
    return null == g || p
        ? {
              isDragging: !1,
              dragSourcePosition: null,
          }
        : (x(r),
          _(t),
          {
              isDragging: O && (null == y ? void 0 : y.widgetType) === f.type,
              dragSourcePosition: v,
          });
}
