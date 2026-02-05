n.d(t, { I: () => s, s: () => r });
var l,
    i = n(64700),
    s = (((l = {}).BEFORE = "before"), (l.AFTER = "after"), l);
function r(e) {
    let { groupIds: t, isDisabled: n, onCommitNewOrder: l } = e,
        s = i.useRef(t);
    i.useEffect(() => {
        s.current = t;
    }, [t]);
    let [r, a] = i.useState({
            draggedGroupId: null,
            dropTargetGroupId: null,
            dropTargetPosition: null,
            didCommitDrop: !1,
        }),
        u = i.useRef(r),
        o = i.useCallback((e) => {
            a((t) => {
                let n = { ...t, ...e };
                return (u.current = n), n;
            });
        }, []),
        d = i.useCallback(
            (e, t) => {
                let { draggedGroupId: i, didCommitDrop: r } = u.current;
                if (r || n || null == i) return;
                let d = (function (e) {
                    let { groupIds: t, draggedGroupId: n, targetGroupId: l, position: i } = e,
                        s = t.indexOf(n),
                        r = t.indexOf(l);
                    if (-1 === s || -1 === r || n === l) return null;
                    let a = [...t];
                    a.splice(s, 1);
                    let u = s < r ? r - 1 : r;
                    return a.splice("before" === i ? u : u + 1, 0, n), a;
                })({ groupIds: s.current, draggedGroupId: i, targetGroupId: e, position: t });
                null != d &&
                    ((u.current = { ...u.current, didCommitDrop: !0 }),
                    a(u.current),
                    l(d),
                    o({ draggedGroupId: null, dropTargetGroupId: null, dropTargetPosition: null }));
            },
            [n, l, o],
        ),
        c = i.useCallback(
            (e, t) => ({
                draggable: t && !n,
                "data-dnd-drag-handle": "true",
                onDragStart: (l) => {
                    n ||
                        (t &&
                            (l.dataTransfer.setData("text/plain", e),
                            (l.dataTransfer.effectAllowed = "move"),
                            o({
                                draggedGroupId: e,
                                dropTargetGroupId: null,
                                dropTargetPosition: null,
                                didCommitDrop: !1,
                            })));
                },
                onDragOver: (t) => {
                    let { draggedGroupId: l } = u.current;
                    if (n || null == l || l === e) return;
                    t.preventDefault(), (t.dataTransfer.dropEffect = "move");
                    let i = t.currentTarget.getBoundingClientRect();
                    o({
                        dropTargetGroupId: e,
                        dropTargetPosition: t.clientY < i.top + i.height / 2 ? "before" : "after",
                    });
                },
                onDrop: (t) => {
                    let { draggedGroupId: l } = u.current;
                    if (n || null == l || l === e) return;
                    t.preventDefault();
                    let i = t.currentTarget.getBoundingClientRect();
                    d(e, t.clientY < i.top + i.height / 2 ? "before" : "after");
                },
                onDragEnd: () => {
                    let { didCommitDrop: e, dropTargetGroupId: t, dropTargetPosition: n } = u.current;
                    e || null == t || null == n || d(t, n),
                        o({
                            draggedGroupId: null,
                            dropTargetGroupId: null,
                            dropTargetPosition: null,
                            didCommitDrop: !1,
                        });
                },
            }),
            [d, n, o],
        );
    return {
        draggedGroupId: r.draggedGroupId,
        dropTargetGroupId: r.dropTargetGroupId,
        dropTargetPosition: r.dropTargetPosition,
        getDragHandleProps: c,
    };
}
