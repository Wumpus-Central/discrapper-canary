r.d(t, { q: () => d }), r(388685);
var n = r(647438),
    i = r(574981),
    l = r(194630),
    a = r(665379),
    o = r(442837),
    c = r(594174),
    s = r(592183),
    u = r(517157);
function d(e) {
    let { dropRef: t, dragRef: r, userId: d, widget: f, index: g } = e,
        p = (0, u.Z)(d),
        b = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        m = (0, n.useCallback)(
            (e, t) => {
                let r = p.slice(),
                    [n] = r.splice(e, 1);
                r.splice(t, 0, n), s.Z.setPendingWidgets(r);
            },
            [p],
        ),
        [{ isDragging: O }, j, y] = (0, i.c)({
            type: "WIDGET",
            item: {
                widgetId: f.id,
                index: g,
                widget: f,
            },
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    (0, n.useEffect)(() => {
        y((0, a.r)(), { captureDraggingState: !0 });
    }, [y]);
    let [x, v] = (0, l.L)({
        accept: "WIDGET",
        collect: (e) => ({ handlerId: e.getHandlerId() }),
        hover: (e, r) => {
            var n;
            if (null == t.current || !r.isOver({ shallow: !0 })) return;
            let i = e.index,
                l = null != g ? g : 0;
            if (i === l) return;
            let a = null == (n = t.current) ? void 0 : n.getBoundingClientRect(),
                o = (a.bottom - a.top) / 2,
                c = r.getClientOffset();
            if (null == c) return;
            let s = c.y - a.top;
            (!(i < l) || !(s < o)) && ((i > l && s > o) || (m(i, l), (e.index = l)));
        },
    });
    return null == g ? { isDragging: !1 } : ((null == b ? void 0 : b.id) === d && (j(r), v(t)), { isDragging: O });
}
