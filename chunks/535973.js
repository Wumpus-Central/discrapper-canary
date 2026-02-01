n.d(t, {
    I: () => a,
    s: () => s,
}),
    n(896048);
var i,
    r = n(64700);

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
var a = (((i = {}).BEFORE = "before"), (i.AFTER = "after"), i);

function s(e) {
    let { groupIds: t, isDisabled: n, onCommitNewOrder: i } = e,
        a = r.useRef(t);
    r.useEffect(() => {
        a.current = t;
    }, [t]);
    let [s, o] = r.useState({
            draggedGroupId: null,
            dropTargetGroupId: null,
            dropTargetPosition: null,
            didCommitDrop: !1,
        }),
        u = r.useRef(s),
        c = r.useCallback((e) => {
            o((t) => {
                let n = l({}, t, e);
                return (u.current = n), n;
            });
        }, []),
        d = r.useCallback(
            (e, t) => {
                let { draggedGroupId: r, didCommitDrop: s } = u.current;
                if (s || n || null == r) return;
                let d = (function (e) {
                    let { groupIds: t, draggedGroupId: n, targetGroupId: i, position: r } = e,
                        l = t.indexOf(n),
                        a = t.indexOf(i);
                    if (-1 === l || -1 === a || n === i) return null;
                    let s = [...t];
                    s.splice(l, 1);
                    let o = l < a ? a - 1 : a;
                    return s.splice("before" === r ? o : o + 1, 0, n), s;
                })({
                    groupIds: a.current,
                    draggedGroupId: r,
                    targetGroupId: e,
                    position: t,
                });
                if (null != d) {
                    var h, p;
                    (h = l({}, u.current)),
                        (p = p =
                            {
                                didCommitDrop: !0,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(p))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(p)).forEach(function (e) {
                                  Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(p, e));
                              }),
                        (u.current = h),
                        o(u.current),
                        i(d),
                        c({
                            draggedGroupId: null,
                            dropTargetGroupId: null,
                            dropTargetPosition: null,
                        });
                }
            },
            [n, i, c],
        ),
        h = r.useCallback(
            (e, t) => ({
                draggable: t && !n,
                "data-dnd-drag-handle": "true",
                onDragStart: (i) => {
                    n ||
                        (t &&
                            (i.dataTransfer.setData("text/plain", e),
                            (i.dataTransfer.effectAllowed = "move"),
                            c({
                                draggedGroupId: e,
                                dropTargetGroupId: null,
                                dropTargetPosition: null,
                                didCommitDrop: !1,
                            })));
                },
                onDragOver: (t) => {
                    let { draggedGroupId: i } = u.current;
                    if (n || null == i || i === e) return;
                    t.preventDefault(), (t.dataTransfer.dropEffect = "move");
                    let r = t.currentTarget.getBoundingClientRect();
                    c({
                        dropTargetGroupId: e,
                        dropTargetPosition: t.clientY < r.top + r.height / 2 ? "before" : "after",
                    });
                },
                onDrop: (t) => {
                    let { draggedGroupId: i } = u.current;
                    if (n || null == i || i === e) return;
                    t.preventDefault();
                    let r = t.currentTarget.getBoundingClientRect();
                    d(e, t.clientY < r.top + r.height / 2 ? "before" : "after");
                },
                onDragEnd: () => {
                    let { didCommitDrop: e, dropTargetGroupId: t, dropTargetPosition: n } = u.current;
                    e || null == t || null == n || d(t, n),
                        c({
                            draggedGroupId: null,
                            dropTargetGroupId: null,
                            dropTargetPosition: null,
                            didCommitDrop: !1,
                        });
                },
            }),
            [d, n, c],
        );
    return {
        draggedGroupId: s.draggedGroupId,
        dropTargetGroupId: s.dropTargetGroupId,
        dropTargetPosition: s.dropTargetPosition,
        getDragHandleProps: h,
    };
}
