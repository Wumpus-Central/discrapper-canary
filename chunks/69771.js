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
        _ = (0, o.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
        }).current;
    (0, o.useEffect)(d, []);
    let { addGlobalListener: p, removeAllGlobalListeners: h } = (0, r.x)(),
        { hoverProps: m, triggerHoverEnd: g } = (0, o.useMemo)(() => {
            let e = (e, o) => {
                    if (((_.pointerType = o), c || "touch" === o || _.isHovered || !e.currentTarget.contains(e.target)))
                        return;
                    _.isHovered = !0;
                    let s = e.currentTarget;
                    (_.target = s),
                        p(
                            (0, i.r3)(e.target),
                            "pointerover",
                            (e) => {
                                _.isHovered && _.target && !(0, a.bE)(_.target, e.target) && r(e, e.pointerType);
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
                    let r = _.target;
                    (_.pointerType = ""),
                        (_.target = null),
                        "touch" !== t &&
                            _.isHovered &&
                            r &&
                            ((_.isHovered = !1),
                            h(),
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
        }, [t, n, l, c, _, p, h]);
    return (
        (0, o.useEffect)(() => {
            c && g({ currentTarget: _.target }, _.pointerType);
        }, [c]),
        {
            hoverProps: m,
            isHovered: u,
        }
    );
}
