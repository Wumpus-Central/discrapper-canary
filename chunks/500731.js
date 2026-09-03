r.d(t, { M: () => f });
var n = r(256062),
    i = r(143761),
    o = r(635597),
    a = r(582128);
let s = !1,
    l = 0;
function u(e) {
    "touch" === e.pointerType &&
        ((s = !0),
        setTimeout(() => {
            s = !1;
        }, 500));
}
function c() {
    let e = (0, i.TW)(null);
    if (void 0 !== e)
        return (
            0 === l && "u" > typeof PointerEvent && e.addEventListener("pointerup", u),
            l++,
            () => {
                !(--l > 0) && "u" > typeof PointerEvent && e.removeEventListener("pointerup", u);
            }
        );
}
function f(e) {
    let { onHoverStart: t, onHoverChange: r, onHoverEnd: l, isDisabled: u } = e,
        [f, d] = (0, a.useState)(!1),
        p = (0, a.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
    (0, a.useEffect)(c, []);
    let { addGlobalListener: h, removeAllGlobalListeners: m } = (0, o.A)(),
        { hoverProps: v, triggerHoverEnd: y } = (0, a.useMemo)(() => {
            let e = (e, t) => {
                    let n = p.target;
                    (p.pointerType = ""),
                        (p.target = null),
                        "touch" !== t &&
                            p.isHovered &&
                            n &&
                            ((p.isHovered = !1),
                            m(),
                            l && l({ type: "hoverend", target: n, pointerType: t }),
                            r && r(!1),
                            d(!1));
                },
                o = {};
            return (
                "u" > typeof PointerEvent &&
                    ((o.onPointerEnter = (o) => {
                        (s && "mouse" === o.pointerType) ||
                            ((o, a) => {
                                if (
                                    ((p.pointerType = a),
                                    u || "touch" === a || p.isHovered || !(0, n.sD)(o.currentTarget, (0, n.wt)(o)))
                                )
                                    return;
                                p.isHovered = !0;
                                let s = o.currentTarget;
                                (p.target = s),
                                    h(
                                        (0, i.TW)((0, n.wt)(o)),
                                        "pointerover",
                                        (t) => {
                                            p.isHovered &&
                                                p.target &&
                                                !(0, n.sD)(p.target, (0, n.wt)(t)) &&
                                                e(t, t.pointerType);
                                        },
                                        { capture: !0 },
                                    ),
                                    t && t({ type: "hoverstart", target: s, pointerType: a }),
                                    r && r(!0),
                                    d(!0);
                            })(o, o.pointerType);
                    }),
                    (o.onPointerLeave = (t) => {
                        !u && (0, n.sD)(t.currentTarget, (0, n.wt)(t)) && e(t, t.pointerType);
                    })),
                { hoverProps: o, triggerHoverEnd: e }
            );
        }, [t, r, l, u, p, h, m]);
    return (
        (0, a.useEffect)(() => {
            u && y({ currentTarget: p.target }, p.pointerType);
        }, [u]),
        { hoverProps: v, isHovered: f }
    );
}
