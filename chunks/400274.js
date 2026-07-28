"use strict";
n.d(t, { M: () => d });
var r = n(11079),
    i = n(745391),
    a = n(712247),
    o = n(582128);
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
function d(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: l, isDisabled: u } = e,
        [d, f] = (0, o.useState)(!1),
        p = (0, o.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
    (0, o.useEffect)(c, []);
    let { addGlobalListener: h, removeAllGlobalListeners: m } = (0, r.A)(),
        { hoverProps: g, triggerHoverEnd: v } = (0, o.useMemo)(() => {
            let e = (e, t) => {
                    let r = p.target;
                    (p.pointerType = ""),
                        (p.target = null),
                        "touch" !== t &&
                            p.isHovered &&
                            r &&
                            ((p.isHovered = !1),
                            m(),
                            l && l({ type: "hoverend", target: r, pointerType: t }),
                            n && n(!1),
                            f(!1));
                },
                r = {};
            return (
                "u" > typeof PointerEvent &&
                    ((r.onPointerEnter = (r) => {
                        (s && "mouse" === r.pointerType) ||
                            ((r, o) => {
                                if (
                                    ((p.pointerType = o),
                                    u || "touch" === o || p.isHovered || !r.currentTarget.contains(r.target))
                                )
                                    return;
                                p.isHovered = !0;
                                let s = r.currentTarget;
                                (p.target = s),
                                    h(
                                        (0, i.TW)(r.target),
                                        "pointerover",
                                        (t) => {
                                            p.isHovered &&
                                                p.target &&
                                                !(0, a.sD)(p.target, t.target) &&
                                                e(t, t.pointerType);
                                        },
                                        { capture: !0 },
                                    ),
                                    t && t({ type: "hoverstart", target: s, pointerType: o }),
                                    n && n(!0),
                                    f(!0);
                            })(r, r.pointerType);
                    }),
                    (r.onPointerLeave = (t) => {
                        !u && t.currentTarget.contains(t.target) && e(t, t.pointerType);
                    })),
                { hoverProps: r, triggerHoverEnd: e }
            );
        }, [t, n, l, u, p, h, m]);
    return (
        (0, o.useEffect)(() => {
            u && v({ currentTarget: p.target }, p.pointerType);
        }, [u]),
        { hoverProps: g, isHovered: d }
    );
}
