n.d(t, { I: () => r, s: () => s });
var l,
    i = n(64700),
    r = (((l = {}).BEFORE = "before"), (l.AFTER = "after"), l);
function s(e) {
    let { groupIds: t, isDisabled: n, onCommitNewOrder: l } = e,
        r = i.useRef(t);
    i.useEffect(() => {
        r.current = t;
    }, [t]);
    let [s, a] = i.useState({
            draggedGroupId: null,
            dropTargetGroupId: null,
            dropTargetPosition: null,
            didCommitDrop: !1,
        }),
        u = i.useRef(s),
        o = i.useCallback((e) => {
            a((t) => {
                let n = { ...t, ...e };
                return (u.current = n), n;
            });
        }, []),
        d = i.useCallback(
            (e, t) => {
                let { draggedGroupId: i, didCommitDrop: s } = u.current;
                if (s || n || null == i) return;
                let d = (function (e) {
                    let { groupIds: t, draggedGroupId: n, targetGroupId: l, position: i } = e,
                        r = t.indexOf(n),
                        s = t.indexOf(l);
                    if (-1 === r || -1 === s || n === l) return null;
                    let a = [...t];
                    a.splice(r, 1);
                    let u = r < s ? s - 1 : s;
                    return a.splice("before" === i ? u : u + 1, 0, n), a;
                })({ groupIds: r.current, draggedGroupId: i, targetGroupId: e, position: t });
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
        draggedGroupId: s.draggedGroupId,
        dropTargetGroupId: s.dropTargetGroupId,
        dropTargetPosition: s.dropTargetPosition,
        getDragHandleProps: c,
    };
}
