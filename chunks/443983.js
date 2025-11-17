n.d(t, { T: () => d });
var r = n(226098),
    i = n(920154),
    a = n(477232),
    o = n(928276),
    s = n(645537),
    l = n(158821),
    c = n(473749);
let u = 500;
function d(e) {
    let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: d,
            onLongPress: f,
            threshold: _ = u,
            accessibilityDescription: p,
        } = e,
        h = (0, c.useRef)(void 0),
        { addGlobalListener: m, removeGlobalListener: g } = (0, i.x)(),
        { pressProps: E } = (0, r.r)({
            isDisabled: t,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                        (n &&
                            n({
                                ...e,
                                type: "longpressstart",
                            }),
                        (h.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                (0, a.r3)(e.target).activeElement !== e.target && (0, o.A)(e.target),
                                f &&
                                    f({
                                        ...e,
                                        type: "longpress",
                                    }),
                                (h.current = void 0);
                        }, _)),
                        "touch" === e.pointerType))
                ) {
                    let t = (e) => {
                        e.preventDefault();
                    };
                    m(e.target, "contextmenu", t, { once: !0 }),
                        m(
                            window,
                            "pointerup",
                            () => {
                                setTimeout(() => {
                                    g(e.target, "contextmenu", t);
                                }, 30);
                            },
                            { once: !0 },
                        );
                }
            },
            onPressEnd(e) {
                h.current && clearTimeout(h.current),
                    d &&
                        ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                        d({
                            ...e,
                            type: "longpressend",
                        });
            },
        }),
        b = (0, s.P)(f && !t ? p : void 0);
    return { longPressProps: (0, l.d)(E, b) };
}
