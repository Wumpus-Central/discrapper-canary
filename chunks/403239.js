n.d(t, { q: () => s }), n(388685);
var r = n(647438),
    i = n(574981),
    l = n(194630),
    a = n(665379),
    o = n(592183),
    c = n(517157);
function s(e) {
    let { dropRef: t, dragRef: n, userId: s, widget: u, index: d, disableInteraction: f = !1 } = e,
        g = (0, c.Z)(s),
        b = (0, r.useCallback)(
            (e, t) => {
                let n = g.slice(),
                    [r] = n.splice(e, 1);
                n.splice(t, 0, r), o.Z.setPendingWidgets(n);
            },
            [g],
        ),
        [{ isDragging: p }, m, O] = (0, i.c)({
            type: "WIDGET",
            item: {
                widgetId: u.id,
                index: d,
                widget: u,
            },
            canDrag: () => !f,
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    (0, r.useEffect)(() => {
        O((0, a.r)(), { captureDraggingState: !0 });
    }, [O]);
    let [j, y] = (0, l.L)({
        accept: "WIDGET",
        canDrop: () => !f,
        collect: (e) => ({ handlerId: e.getHandlerId() }),
        hover: (e, n) => {
            var r;
            if (f || null == t.current || !n.isOver({ shallow: !0 })) return;
            let i = e.index,
                l = null != d ? d : 0;
            if (i === l) return;
            let a = null == (r = t.current) ? void 0 : r.getBoundingClientRect(),
                o = (a.bottom - a.top) / 2,
                c = n.getClientOffset();
            if (null == c) return;
            let s = c.y - a.top;
            (!(i < l) || !(s < o)) && ((i > l && s > o) || (b(i, l), (e.index = l)));
        },
    });
    return null == d || f ? { isDragging: !1 } : (m(n), y(t), { isDragging: p });
}
