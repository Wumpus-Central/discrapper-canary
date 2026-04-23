"use strict";
n.d(t, { $: () => v, A: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(311907),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    _ = n(778712),
    f = n(939249),
    p = n(717421),
    h = n(684013),
    E = n(569626),
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
let v = i.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: s,
            expand: p = !1,
            onNotificationShow: h,
            onDismissClick: m,
            onConfirmClick: I,
            onCancelClick: v,
            onNotificationClick: C,
            hint: O,
            cancelText: R,
            confirmText: b,
            icon: D,
            body: L,
            title: w,
            renderFooter: M,
            contentOpacity: P,
            status: x,
            containerRef: k,
            className: U,
            wrapperClassName: G,
            unreadAccessory: F,
        } = e,
        [V, B] = i.useState(!1),
        H = p || V || x === T.yFH.FOCUSED,
        j = (0, l.bG)([A.A, g.A], () => A.A.isInputLocked(g.A.getTargetPID()));
    i.useEffect(() => {
        h?.();
    }, [h]);
    let Y = i.useCallback(
            (e) => {
                e.stopPropagation(), m?.(e);
            },
            [m],
        ),
        W = i.useCallback(
            (e) => {
                e.stopPropagation(), I?.(e);
            },
            [I],
        ),
        K = i.useCallback(
            (e) => {
                e.stopPropagation(), v?.(e);
            },
            [v],
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
                        onClick: C,
                        className: a()(y.kL, { [y.vk]: null != C }, U),
                        children:
                            ((t = M?.(H, j)),
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(o.animated.div, {
                                        className: y.VM,
                                        style: { opacity: P },
                                        children: [
                                            null == D
                                                ? null
                                                : "string" == typeof D
                                                  ? (0, r.jsx)(d.eu, {
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
                                                    ((n = "function" == typeof O ? O(H, j) : O),
                                                    null != O
                                                        ? (0, r.jsx)(u.E, {
                                                              className: y.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == I && null == v
                                                        ? null
                                                        : (0, r.jsxs)("div", {
                                                              className: y.UD,
                                                              children: [
                                                                  null != I
                                                                      ? (0, r.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, r.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: W,
                                                                                text: b ?? S.intl.string(S.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != v
                                                                      ? (0, r.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, r.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: K,
                                                                                text: R ?? S.intl.string(S.t["ETE/oC"]),
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
                    null == F ? null : (0, r.jsx)("div", { className: y.B3, children: F(V) }),
                ],
            }),
            (0, r.jsx)(E.A, { className: y.r, onDismiss: Y, "aria-label": S.intl.string(S.t.LnEgqX) }),
        ],
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: s },
        scaleOverride: l,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: _,
    } = e;
    return (0, r.jsx)(o.animated.div, {
        className: a()(y.k$, d && 0 !== u && y.fF, _),
        style: {
            pointerEvents: d && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: i.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: s,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: c,
    });
}
function O(e) {
    let { observe: t, className: n, children: i } = e;
    return t ? (0, r.jsx)(m.A, { className: a()(y.VC, n), children: i }) : i;
}
let R = { mass: 1, friction: 8, tension: 300 };
function b(e) {
    let { notification: t, index: n, locked: s, pinned: a, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: _,
                onConfirmClick: f,
                onCancelClick: E,
                renderFooter: m,
                animationWrapperClassName: g,
            },
        } = t,
        A = i.useCallback(() => {
            c(u);
        }, [c, u]),
        T = i.useCallback(
            (e) => {
                h.A.updateNotificationStatus(u), d?.(e, u);
            },
            [u, d],
        ),
        { clickSpring: S, handleMouseClick: y } = (function () {
            let [e, t] = i.useState(!1),
                [n, r] = i.useState(!1),
                s = (0, p.z)({
                    scale: e ? 0.975 : 1,
                    config: R,
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
                E?.(e, u);
            },
            [E, u],
        ),
        L = i.useCallback((e, t) => m?.(e, u, t), [m, u]),
        {
            props: {
                onNotificationShow: w,
                onDismissClick: M,
                renderFooter: P,
                onNotificationClick: x,
                onConfirmClick: k,
                onCancelClick: U,
                disableClickableRegions: G = !1,
                clickZoneClassName: F,
                ...V
            },
            status: B,
        } = t,
        H = !a && s,
        j = 0 === n && !G && !H,
        { ref: Y, springs: W } = (0, I.Ru)(t.id, o, l);
    return (0, r.jsx)(C, {
        transitionState: o,
        springs: W,
        scaleOverride: S?.scale,
        index: n,
        locked: s,
        animationWrapperClassName: g,
        children: (0, r.jsx)(O, {
            observe: j,
            className: F,
            children: (0, r.jsx)(v, {
                ...V,
                title: "function" == typeof V.title ? V.title(T) : V.title,
                containerRef: Y,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: T,
                onNotificationClick: N,
                onConfirmClick: null != f ? b : void 0,
                onCancelClick: null != E ? D : void 0,
                renderFooter: L,
                expand: !1,
                index: n,
                locked: s,
                status: B,
                contentOpacity: W.contentOpacity,
            }),
        }),
    });
}
