r.d(t, { f: () => u });
var n = r(18787),
    i = r(518206),
    o = r(809297),
    a = r(829904),
    s = r(867085),
    l = r(582128);
function u(e) {
    let { onMoveStart: t, onMove: r, onMoveEnd: u } = e,
        c = (0, l.useRef)({ didMove: !1, lastPosition: null, id: null }),
        { addGlobalListener: f, removeGlobalListener: d } = (0, s.A)(),
        p = (0, l.useCallback)(
            (e, n, i, o) => {
                (0 !== i || 0 !== o) &&
                    (c.current.didMove ||
                        ((c.current.didMove = !0),
                        t?.({
                            type: "movestart",
                            pointerType: n,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey,
                        })),
                    r?.({
                        type: "move",
                        pointerType: n,
                        deltaX: i,
                        deltaY: o,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                    }));
            },
            [t, r, c],
        ),
        h = (0, a.J)(p),
        m = (0, l.useCallback)(
            (e, t) => {
                ((0, n.E)(),
                    c.current.didMove &&
                        u?.({
                            type: "moveend",
                            pointerType: t,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey,
                        }));
            },
            [u, c],
        ),
        v = (0, a.J)(m);
    return {
        moveProps: (0, l.useMemo)(() => {
            let e = {},
                t = () => {
                    ((0, n.M)(), (c.current.didMove = !1));
                };
            {
                let r = (e) => {
                        if (e.pointerId === c.current.id) {
                            let t = e.pointerType || "mouse";
                            (h(
                                e,
                                t,
                                e.pageX - (c.current.lastPosition?.pageX ?? 0),
                                e.pageY - (c.current.lastPosition?.pageY ?? 0),
                            ),
                                (c.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }));
                        }
                    },
                    n = (e) => {
                        if (e.pointerId === c.current.id) {
                            let t = e.pointerType || "mouse";
                            (v(e, t), (c.current.id = null));
                            let a = (0, o.mD)((0, i.wt)(e));
                            (d(a, "pointermove", r, !1), d(a, "pointerup", n, !1), d(a, "pointercancel", n, !1));
                        }
                    };
                e.onPointerDown = (e) => {
                    if (0 === e.button && null == c.current.id) {
                        (t(),
                            e.stopPropagation(),
                            e.preventDefault(),
                            (c.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }),
                            (c.current.id = e.pointerId));
                        let a = (0, o.mD)((0, i.wt)(e));
                        (f(a, "pointermove", r, !1), f(a, "pointerup", n, !1), f(a, "pointercancel", n, !1));
                    }
                };
            }
            let r = (e, r, n) => {
                (t(), h(e, "keyboard", r, n), v(e, "keyboard"));
            };
            return (
                (e.onKeyDown = (e) => {
                    switch (e.key) {
                        case "Left":
                        case "ArrowLeft":
                            (e.preventDefault(), e.stopPropagation(), r(e, -1, 0));
                            break;
                        case "Right":
                        case "ArrowRight":
                            (e.preventDefault(), e.stopPropagation(), r(e, 1, 0));
                            break;
                        case "Up":
                        case "ArrowUp":
                            (e.preventDefault(), e.stopPropagation(), r(e, 0, -1));
                            break;
                        case "Down":
                        case "ArrowDown":
                            (e.preventDefault(), e.stopPropagation(), r(e, 0, 1));
                    }
                }),
                e
            );
        }, [f, d, c]),
    };
}
