"use strict";
n.d(t, { $: () => O, A: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(311907),
    u = n(834730),
    d = n(821609),
    c = n(97808),
    _ = n(778712),
    f = n(939249),
    E = n(717421),
    h = n(684013),
    p = n(569626),
    m = n(302614),
    g = n(395011),
    A = n(222506),
    I = n(57019),
    T = n(652215),
    S = n(985018),
    y = n(70617);
function N(e) {
    e.currentTarget.scrollTo(0, 0);
}
let O = i.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: s,
            expand: E = !1,
            onNotificationShow: h,
            onDismissClick: m,
            onConfirmClick: I,
            onCancelClick: O,
            onNotificationClick: R,
            hint: v,
            cancelText: C,
            confirmText: b,
            icon: D,
            body: L,
            title: w,
            renderFooter: M,
            contentOpacity: P,
            status: U,
            containerRef: k,
            className: x,
            wrapperClassName: G,
            unreadAccessory: V,
        } = e,
        [F, B] = i.useState(!1),
        H = E || F || U === T.yFH.FOCUSED,
        Y = (0, l.bG)([A.A, g.A], () => A.A.isInputLocked(g.A.getTargetPID()));
    i.useEffect(() => {
        h?.();
    }, [h]);
    let W = i.useCallback(
            (e) => {
                e.stopPropagation(), m?.(e);
            },
            [m],
        ),
        j = i.useCallback(
            (e) => {
                e.stopPropagation(), I?.(e);
            },
            [I],
        ),
        K = i.useCallback(
            (e) => {
                e.stopPropagation(), O?.(e);
            },
            [O],
        ),
        $ = i.useCallback(() => {
            B(!0);
        }, []),
        z = i.useCallback(() => {
            B(!1);
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(y.af, G),
                onScroll: N,
                children: [
                    (0, r.jsx)(f.D, {
                        innerRef: k,
                        ignoreKeyPress: !0,
                        onMouseOver: $,
                        onMouseLeave: z,
                        onClick: R,
                        className: a()(y.kL, { [y.vk]: null != R }, x),
                        children:
                            ((t = M?.(H, Y)),
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(o.animated.div, {
                                        className: y.VM,
                                        style: { opacity: P },
                                        children: [
                                            null == D
                                                ? null
                                                : "string" == typeof D
                                                  ? (0, r.jsx)(c.eu, {
                                                        src: D,
                                                        size: _._3.SIZE_40,
                                                        className: y.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, r.jsx)("div", { className: y.my, children: D }),
                                            (0, r.jsxs)("div", {
                                                className: y.zH,
                                                children: [
                                                    null != w
                                                        ? (0, r.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: w,
                                                          })
                                                        : null,
                                                    null != L
                                                        ? (0, r.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != s ? s * (H ? 2 : 1) : void 0,
                                                              children: L,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof v ? v(H, Y) : v),
                                                    null != v
                                                        ? (0, r.jsx)(u.E, {
                                                              className: y.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == I && null == O
                                                        ? null
                                                        : (0, r.jsxs)("div", {
                                                              className: y.UD,
                                                              children: [
                                                                  null != I
                                                                      ? (0, r.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, r.jsx)(d.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: j,
                                                                                text: b ?? S.intl.string(S.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != O
                                                                      ? (0, r.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, r.jsx)(d.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: K,
                                                                                text: C ?? S.intl.string(S.t["ETE/oC"]),
                                                                            }),
                                                                        })
                                                                      : null,
                                                              ],
                                                          }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    null != t &&
                                        (0, r.jsx)(f.D, {
                                            className: y.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == V ? null : (0, r.jsx)("div", { className: y.B3, children: V(F) }),
                ],
            }),
            (0, r.jsx)(p.A, { className: y.r, onDismiss: W, "aria-label": S.intl.string(S.t.LnEgqX) }),
        ],
    });
});
function R(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: s },
        scaleOverride: l,
        index: u,
        children: d,
        locked: c,
        animationWrapperClassName: _,
    } = e;
    return (0, r.jsx)(o.animated.div, {
        className: a()(y.k$, c && 0 !== u && y.fF, _),
        style: {
            pointerEvents: c && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: i.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: s,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: d,
    });
}
function v(e) {
    let { observe: t, className: n, children: i } = e;
    return t ? (0, r.jsx)(m.A, { className: a()(y.VC, n), children: i }) : i;
}
let C = { mass: 1, friction: 8, tension: 300 };
function b(e) {
    let { notification: t, index: n, locked: s, pinned: a, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: d,
                onDismissClick: c,
                onNotificationClick: _,
                onConfirmClick: f,
                onCancelClick: p,
                renderFooter: m,
                animationWrapperClassName: g,
            },
        } = t,
        A = i.useCallback(() => {
            d(u);
        }, [d, u]),
        T = i.useCallback(
            (e) => {
                h.A.updateNotificationStatus(u), c?.(e, u);
            },
            [u, c],
        ),
        { clickSpring: S, handleMouseClick: y } = (function () {
            let [e, t] = i.useState(!1),
                [n, r] = i.useState(!1),
                s = (0, E.z)({
                    scale: e ? 0.975 : 1,
                    config: C,
                    onRest: () => {
                        t(!1),
                            setTimeout(() => {
                                r(!1);
                            }, 300);
                    },
                });
            return {
                clickSpring: n ? s : void 0,
                handleMouseClick: i.useCallback(() => {
                    r(!0), t(!0);
                }, []),
            };
        })(),
        N = i.useCallback(
            (e) => {
                _?.(e, u), y();
            },
            [_, u, y],
        ),
        b = i.useCallback(
            (e) => {
                f?.(e, u);
            },
            [f, u],
        ),
        D = i.useCallback(
            (e) => {
                p?.(e, u);
            },
            [p, u],
        ),
        L = i.useCallback((e, t) => m?.(e, u, t), [m, u]),
        {
            props: {
                onNotificationShow: w,
                onDismissClick: M,
                renderFooter: P,
                onNotificationClick: U,
                onConfirmClick: k,
                onCancelClick: x,
                disableClickableRegions: G = !1,
                clickZoneClassName: V,
                ...F
            },
            status: B,
        } = t,
        H = !a && s,
        Y = 0 === n && !G && !H,
        { ref: W, springs: j } = (0, I.Ru)(t.id, o, l);
    return (0, r.jsx)(R, {
        transitionState: o,
        springs: j,
        scaleOverride: S?.scale,
        index: n,
        locked: s,
        animationWrapperClassName: g,
        children: (0, r.jsx)(v, {
            observe: Y,
            className: V,
            children: (0, r.jsx)(O, {
                ...F,
                title: "function" == typeof F.title ? F.title(T) : F.title,
                containerRef: W,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: T,
                onNotificationClick: N,
                onConfirmClick: null != f ? b : void 0,
                onCancelClick: null != p ? D : void 0,
                renderFooter: L,
                expand: !1,
                index: n,
                locked: s,
                status: B,
                contentOpacity: j.contentOpacity,
            }),
        }),
    });
}
