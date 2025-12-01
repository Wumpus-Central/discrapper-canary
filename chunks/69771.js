n.d(t, { X: () => f });
var r = n(920154),
    i = n(477232),
    a = n(297808),
    o = n(473749);
let s = !1,
    l = 0;
function c() {
    (s = !0),
        setTimeout(() => {
            s = !1;
        }, 50);
}
function u(e) {
    "touch" === e.pointerType && c();
}
function d() {
    if ("undefined" != typeof document)
        return (
            0 === l && "undefined" != typeof PointerEvent && document.addEventListener("pointerup", u),
            l++,
            () => {
                --l > 0 || ("undefined" != typeof PointerEvent && document.removeEventListener("pointerup", u));
            }
        );
}
function f(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: l, isDisabled: c } = e,
        [u, f] = (0, o.useState)(!1),
        p = (0, o.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
        }).current;
    (0, o.useEffect)(d, []);
    let { addGlobalListener: _, removeAllGlobalListeners: m } = (0, r.x)(),
        { hoverProps: h, triggerHoverEnd: g } = (0, o.useMemo)(() => {
            let e = (e, o) => {
                    if (((p.pointerType = o), c || "touch" === o || p.isHovered || !e.currentTarget.contains(e.target)))
                        return;
                    p.isHovered = !0;
                    let s = e.currentTarget;
                    (p.target = s),
                        _(
                            (0, i.r3)(e.target),
                            "pointerover",
                            (e) => {
                                p.isHovered && p.target && !(0, a.bE)(p.target, e.target) && r(e, e.pointerType);
                            },
                            { capture: !0 },
                        ),
                        t &&
                            t({
                                type: "hoverstart",
                                target: s,
                                pointerType: o,
                            }),
                        n && n(!0),
                        f(!0);
                },
                r = (e, t) => {
                    let r = p.target;
                    (p.pointerType = ""),
                        (p.target = null),
                        "touch" !== t &&
                            p.isHovered &&
                            r &&
                            ((p.isHovered = !1),
                            m(),
                            l &&
                                l({
                                    type: "hoverend",
                                    target: r,
                                    pointerType: t,
                                }),
                            n && n(!1),
                            f(!1));
                },
                o = {};
            return (
                "undefined" != typeof PointerEvent &&
                    ((o.onPointerEnter = (t) => {
                        (s && "mouse" === t.pointerType) || e(t, t.pointerType);
                    }),
                    (o.onPointerLeave = (e) => {
                        !c && e.currentTarget.contains(e.target) && r(e, e.pointerType);
                    })),
                {
                    hoverProps: o,
                    triggerHoverEnd: r,
                }
            );
        }, [t, n, l, c, p, _, m]);
    return (
        (0, o.useEffect)(() => {
            c && g({ currentTarget: p.target }, p.pointerType);
        }, [c]),
        {
            hoverProps: h,
            isHovered: u,
        }
    );
}
