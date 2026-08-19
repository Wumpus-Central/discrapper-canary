"use strict";
r.d(t, { M: () => f });
var n = r(11079),
    o = r(745391),
    i = r(712247),
    a = r(582128);
let s = !1,
    l = 0;
function u(e) {
    "touch" === e.pointerType &&
        ((s = !0),
        setTimeout(() => {
            s = !1;
        }, 50));
}
function c() {
    if ("u" > typeof document)
        return (
            0 === l && "u" > typeof PointerEvent && document.addEventListener("pointerup", u),
            l++,
            () => {
                !(--l > 0) && "u" > typeof PointerEvent && document.removeEventListener("pointerup", u);
            }
        );
}
function f(e) {
    let { onHoverStart: t, onHoverChange: r, onHoverEnd: l, isDisabled: u } = e,
        [f, p] = (0, a.useState)(!1),
        d = (0, a.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
    (0, a.useEffect)(c, []);
    let { addGlobalListener: h, removeAllGlobalListeners: m } = (0, n.A)(),
        { hoverProps: v, triggerHoverEnd: y } = (0, a.useMemo)(() => {
            let e = (e, t) => {
                    let n = d.target;
                    (d.pointerType = ""),
                        (d.target = null),
                        "touch" !== t &&
                            d.isHovered &&
                            n &&
                            ((d.isHovered = !1),
                            m(),
                            l && l({ type: "hoverend", target: n, pointerType: t }),
                            r && r(!1),
                            p(!1));
                },
                n = {};
            return (
                "u" > typeof PointerEvent &&
                    ((n.onPointerEnter = (n) => {
                        (s && "mouse" === n.pointerType) ||
                            ((n, a) => {
                                if (
                                    ((d.pointerType = a),
                                    u || "touch" === a || d.isHovered || !n.currentTarget.contains(n.target))
                                )
                                    return;
                                d.isHovered = !0;
                                let s = n.currentTarget;
                                (d.target = s),
                                    h(
                                        (0, o.TW)(n.target),
                                        "pointerover",
                                        (t) => {
                                            d.isHovered &&
                                                d.target &&
                                                !(0, i.sD)(d.target, t.target) &&
                                                e(t, t.pointerType);
                                        },
                                        { capture: !0 },
                                    ),
                                    t && t({ type: "hoverstart", target: s, pointerType: a }),
                                    r && r(!0),
                                    p(!0);
                            })(n, n.pointerType);
                    }),
                    (n.onPointerLeave = (t) => {
                        !u && t.currentTarget.contains(t.target) && e(t, t.pointerType);
                    })),
                { hoverProps: n, triggerHoverEnd: e }
            );
        }, [t, r, l, u, d, h, m]);
    return (
        (0, a.useEffect)(() => {
            u && y({ currentTarget: d.target }, d.pointerType);
        }, [u]),
        { hoverProps: v, isHovered: f }
    );
}
