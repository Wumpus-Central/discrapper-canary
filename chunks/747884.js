n.d(t, { f: () => u });
var r = n(964259),
    i = n(256062),
    l = n(143761),
    a = n(241872),
    o = n(635597),
    s = n(582128);
function u(e) {
    let { onMoveStart: t, onMove: n, onMoveEnd: u } = e,
        c = (0, s.useRef)({ didMove: !1, lastPosition: null, id: null }),
        { addGlobalListener: d, removeGlobalListener: h } = (0, o.A)(),
        b = (0, s.useCallback)(
            (e, r, i, l) => {
                (0 !== i || 0 !== l) &&
                    (c.current.didMove ||
                        ((c.current.didMove = !0),
                        t?.({
                            type: "movestart",
                            pointerType: r,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey,
                        })),
                    n?.({
                        type: "move",
                        pointerType: r,
                        deltaX: i,
                        deltaY: l,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                    }));
            },
            [t, n, c],
        ),
        p = (0, a.J)(b),
        g = (0, s.useCallback)(
            (e, t) => {
                ((0, r.E)(),
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
        f = (0, a.J)(g);
    return {
        moveProps: (0, s.useMemo)(() => {
            let e = {},
                t = () => {
                    ((0, r.M)(), (c.current.didMove = !1));
                };
            {
                let n = (e) => {
                        if (e.pointerId === c.current.id) {
                            let t = e.pointerType || "mouse";
                            (p(
                                e,
                                t,
                                e.pageX - (c.current.lastPosition?.pageX ?? 0),
                                e.pageY - (c.current.lastPosition?.pageY ?? 0),
                            ),
                                (c.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }));
                        }
                    },
                    r = (e) => {
                        if (e.pointerId === c.current.id) {
                            let t = e.pointerType || "mouse";
                            (f(e, t), (c.current.id = null));
                            let a = (0, l.mD)((0, i.wt)(e));
                            (h(a, "pointermove", n, !1), h(a, "pointerup", r, !1), h(a, "pointercancel", r, !1));
                        }
                    };
                e.onPointerDown = (e) => {
                    if (0 === e.button && null == c.current.id) {
                        (t(),
                            e.stopPropagation(),
                            e.preventDefault(),
                            (c.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }),
                            (c.current.id = e.pointerId));
                        let a = (0, l.mD)((0, i.wt)(e));
                        (d(a, "pointermove", n, !1), d(a, "pointerup", r, !1), d(a, "pointercancel", r, !1));
                    }
                };
            }
            let n = (e, n, r) => {
                (t(), p(e, "keyboard", n, r), f(e, "keyboard"));
            };
            return (
                (e.onKeyDown = (e) => {
                    switch (e.key) {
                        case "Left":
                        case "ArrowLeft":
                            (e.preventDefault(), e.stopPropagation(), n(e, -1, 0));
                            break;
                        case "Right":
                        case "ArrowRight":
                            (e.preventDefault(), e.stopPropagation(), n(e, 1, 0));
                            break;
                        case "Up":
                        case "ArrowUp":
                            (e.preventDefault(), e.stopPropagation(), n(e, 0, -1));
                            break;
                        case "Down":
                        case "ArrowDown":
                            (e.preventDefault(), e.stopPropagation(), n(e, 0, 1));
                    }
                }),
                e
            );
        }, [d, h, c]),
    };
}
