n.d(t, { $: () => y, A: () => M });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(941143),
    o = n(17928),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    h = n(778712),
    m = n(939249),
    A = n(717421),
    E = n(684013),
    g = n(789645),
    f = n(616566);
let p = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(m.D, {
        role: "button",
        onClick: n,
        className: s()(f.r, t),
        "aria-label": r,
        children: (0, i.jsx)(g.P, { size: "xs", color: "currentColor", colorClass: f.M }),
    });
};
p.displayName = "DismissButton";
var C = n(302614),
    _ = n(233741),
    b = n(222506),
    S = n(57019),
    T = n(652215),
    I = n(105292),
    v = n(709946);
function O(e) {
    e.currentTarget.scrollTo(0, 0);
}
let y = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: A = !1,
            onNotificationShow: E,
            onDismissClick: g,
            onConfirmClick: f,
            onCancelClick: C,
            onNotificationClick: S,
            hint: y,
            cancelText: R,
            confirmText: x,
            icon: N,
            body: M,
            title: j,
            renderFooter: D,
            contentOpacity: P,
            status: L,
            containerRef: k,
            className: U,
            wrapperClassName: w,
            unreadAccessory: V,
        } = e,
        [z, G] = r.useState(!1),
        F = A || z || L === T.yFH.FOCUSED,
        W = (0, o.bG)([b.A, _.A], () => b.A.isInputLocked(_.A.getTargetPID()));
    r.useEffect(() => {
        E?.();
    }, [E]);
    let H = r.useCallback(
            (e) => {
                (e.stopPropagation(), g?.(e));
            },
            [g],
        ),
        B = r.useCallback(
            (e) => {
                (e.stopPropagation(), f?.(e));
            },
            [f],
        ),
        K = r.useCallback(
            (e) => {
                (e.stopPropagation(), C?.(e));
            },
            [C],
        ),
        q = r.useCallback(() => {
            G(!0);
        }, []),
        Y = r.useCallback(() => {
            G(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(v.af, w),
                onScroll: O,
                children: [
                    (0, i.jsx)(m.D, {
                        innerRef: k,
                        ignoreKeyPress: !0,
                        onMouseOver: q,
                        onMouseLeave: Y,
                        onClick: S,
                        className: s()(v.kL, { [v.vk]: null != S }, U),
                        children:
                            ((t = D?.(F, W)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: v.VM,
                                        style: { opacity: P },
                                        children: [
                                            null == N
                                                ? null
                                                : "string" == typeof N
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: N,
                                                        size: h._3.SIZE_40,
                                                        className: v.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: v.my, children: N }),
                                            (0, i.jsxs)("div", {
                                                className: v.zH,
                                                children: [
                                                    null != j
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: j,
                                                          })
                                                        : null,
                                                    null != M
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != l ? l * (F ? 2 : 1) : void 0,
                                                              children: M,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof y ? y(F, W) : y),
                                                    null != y
                                                        ? (0, i.jsx)(u.E, {
                                                              className: v.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == f && null == C
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: v.UD,
                                                              children: [
                                                                  null != f
                                                                      ? (0, i.jsx)("div", {
                                                                            className: v.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: B,
                                                                                text: x ?? I.intl.string(I.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != C
                                                                      ? (0, i.jsx)("div", {
                                                                            className: v.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: K,
                                                                                text: R ?? I.intl.string(I.t["ETE/oC"]),
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
                                        (0, i.jsx)(m.D, {
                                            className: v.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == V ? null : (0, i.jsx)("div", { className: v.B3, children: V(z) }),
                ],
            }),
            (0, i.jsx)(p, { className: v.r, onDismiss: H, "aria-label": I.intl.string(I.t.LnEgqX) }),
        ],
    });
});
function R(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        scaleOverride: o,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: h,
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: s()(v.k$, d && 0 !== u && v.fF, h),
        style: {
            pointerEvents: d && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: r.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: o ?? n.to([0, 1], [0.7, 1]),
            height: l,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: c,
    });
}
function x(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(C.A, { className: s()(v.VC, n), children: r }) : r;
}
let N = { mass: 1, friction: 8, tension: 300 };
function M(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: h,
                onConfirmClick: m,
                onCancelClick: g,
                renderFooter: f,
                animationWrapperClassName: p,
            },
        } = t,
        C = r.useCallback(() => {
            c(u);
        }, [c, u]),
        _ = r.useCallback(
            (e) => {
                (E.A.updateNotificationStatus(u), d?.(e, u));
            },
            [u, d],
        ),
        { clickSpring: b, handleMouseClick: T } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, A.z)({
                    scale: e ? 0.975 : 1,
                    config: N,
                    onRest: () => {
                        (t(!1),
                            setTimeout(() => {
                                i(!1);
                            }, 300));
                    },
                });
            return {
                clickSpring: n ? l : void 0,
                handleMouseClick: r.useCallback(() => {
                    (i(!0), t(!0));
                }, []),
            };
        })(),
        I = r.useCallback(
            (e) => {
                (h?.(e, u), T());
            },
            [h, u, T],
        ),
        v = r.useCallback(
            (e) => {
                m?.(e, u);
            },
            [m, u],
        ),
        O = r.useCallback(
            (e) => {
                g?.(e, u);
            },
            [g, u],
        ),
        M = r.useCallback((e, t) => f?.(e, u, t), [f, u]),
        {
            props: {
                onNotificationShow: j,
                onDismissClick: D,
                renderFooter: P,
                onNotificationClick: L,
                onConfirmClick: k,
                onCancelClick: U,
                disableClickableRegions: w = !1,
                clickZoneClassName: V,
                ...z
            },
            status: G,
        } = t,
        F = !s && l,
        W = 0 === n && !w && !F,
        { ref: H, springs: B } = (0, S.Ru)(t.id, a, o);
    return (0, i.jsx)(R, {
        transitionState: a,
        springs: B,
        scaleOverride: b?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: p,
        children: (0, i.jsx)(x, {
            observe: W,
            className: V,
            children: (0, i.jsx)(y, {
                ...z,
                title: "function" == typeof z.title ? z.title(_) : z.title,
                containerRef: H,
                notificationId: t.id,
                onNotificationShow: 0 === n ? C : void 0,
                onDismissClick: _,
                onNotificationClick: I,
                onConfirmClick: null != m ? v : void 0,
                onCancelClick: null != g ? O : void 0,
                renderFooter: M,
                expand: !1,
                index: n,
                locked: l,
                status: G,
                contentOpacity: B.contentOpacity,
            }),
        }),
    });
}
