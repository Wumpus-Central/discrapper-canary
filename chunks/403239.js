n.d(t, { q: () => d }), n(388685);
var r = n(647438),
    i = n(79116),
    o = n(100568),
    a = n(417865),
    l = n(665379),
    c = n(481060),
    s = n(592183),
    u = n(517157);
function d(e) {
    let { dropRef: t, dragRef: n, userId: d, widget: f, index: g, disableInteraction: p = !1 } = e,
        b = (0, u.Z)(d),
        m = (0, c.zPA)(),
        { isDragging: O, currentItem: y } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            currentItem: e.getItem(),
        })),
        j = (0, r.useCallback)(
            (e, t) => {
                let n = b.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), s.Z.setPendingWidgets(n);
            },
            [b],
        ),
        [, v, h] = (0, o.c)({
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
    (0, r.useEffect)(() => {
        h((0, l.r)(), { captureDraggingState: !0 });
    }, [h]);
    let [{ dragSourcePosition: x }, P] = (0, a.L)({
        accept: "WIDGET",
        canDrop: () => !p,
        collect: (e) => {
            let t = null,
                n = e.getItem();
            return (
                null != n && e.isOver() && e.canDrop() && n.widgetType !== f.type && (t = n.originalIndex),
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
        hover: (e, n) => {
            var r;
            if (p || m || null == t.current || !n.isOver({ shallow: !0 })) return;
            let i = e.index,
                o = null != g ? g : 0;
            if (i === o) return;
            let a = null == (r = t.current) ? void 0 : r.getBoundingClientRect(),
                l = (a.bottom - a.top) / 2,
                c = n.getClientOffset();
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
        : (v(n),
          P(t),
          {
              isDragging: O && (null == y ? void 0 : y.widgetType) === f.type,
              dragSourcePosition: x,
          });
}
