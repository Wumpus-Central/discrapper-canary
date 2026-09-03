n.d(t, { $: () => y, A: () => N });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(950372),
    o = n(17928),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    A = n(778712),
    h = n(939249),
    m = n(717421),
    g = n(684013),
    f = n(789645),
    E = n(616566);
let b = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: s()(E.r, t),
        "aria-label": r,
        children: (0, i.jsx)(f.P, { size: "xs", color: "currentColor", colorClass: E.M }),
    });
};
b.displayName = "DismissButton";
var p = n(302614),
    C = n(489277),
    S = n(222506),
    v = n(57019),
    _ = n(652215),
    O = n(375708),
    T = n(709946);
function x(e) {
    e.currentTarget.scrollTo(0, 0);
}
let y = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: m = !1,
            onNotificationShow: g,
            onDismissClick: f,
            onConfirmClick: E,
            onCancelClick: p,
            onNotificationClick: v,
            hint: y,
            cancelText: j,
            confirmText: R,
            icon: I,
            body: N,
            title: M,
            renderFooter: L,
            contentOpacity: D,
            status: k,
            containerRef: P,
            className: U,
            wrapperClassName: w,
            unreadAccessory: z,
        } = e,
        [G, V] = r.useState(!1),
        F = m || G || k === _.yFH.FOCUSED,
        K = (0, o.bG)([S.A, C.A], () => S.A.isInputLocked(C.A.getTargetPID()));
    r.useEffect(() => {
        g?.();
    }, [g]);
    let B = r.useCallback(
            (e) => {
                e.stopPropagation(), f?.(e);
            },
            [f],
        ),
        H = r.useCallback(
            (e) => {
                e.stopPropagation(), E?.(e);
            },
            [E],
        ),
        W = r.useCallback(
            (e) => {
                e.stopPropagation(), p?.(e);
            },
            [p],
        ),
        J = r.useCallback(() => {
            V(!0);
        }, []),
        q = r.useCallback(() => {
            V(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(T.af, w),
                onScroll: x,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: P,
                        ignoreKeyPress: !0,
                        onMouseOver: J,
                        onMouseLeave: q,
                        onClick: v,
                        className: s()(T.kL, { [T.vk]: null != v }, U),
                        children:
                            ((t = L?.(F, K)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: T.VM,
                                        style: { opacity: D },
                                        children: [
                                            null == I
                                                ? null
                                                : "string" == typeof I
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: I,
                                                        size: A._3.SIZE_40,
                                                        className: T.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: T.my, children: I }),
                                            (0, i.jsxs)("div", {
                                                className: T.zH,
                                                children: [
                                                    null != M
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: M,
                                                          })
                                                        : null,
                                                    null != N
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != l ? l * (F ? 2 : 1) : void 0,
                                                              children: N,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof y ? y(F, K) : y),
                                                    null != y
                                                        ? (0, i.jsx)(u.E, {
                                                              className: T.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == E && null == p
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: T.UD,
                                                              children: [
                                                                  null != E
                                                                      ? (0, i.jsx)("div", {
                                                                            className: T.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: H,
                                                                                text: R ?? O.intl.string(O.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != p
                                                                      ? (0, i.jsx)("div", {
                                                                            className: T.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: W,
                                                                                text: j ?? O.intl.string(O.t["ETE/oC"]),
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
                                        (0, i.jsx)(h.D, {
                                            className: T.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == z ? null : (0, i.jsx)("div", { className: T.B3, children: z(G) }),
                ],
            }),
            (0, i.jsx)(b, { className: T.r, onDismiss: B, "aria-label": O.intl.string(O.t.LnEgqX) }),
        ],
    });
});
function j(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        scaleOverride: o,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: A,
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: s()(T.k$, d && 0 !== u && T.fF, A),
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
function R(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(p.A, { className: s()(T.VC, n), children: r }) : r;
}
let I = { mass: 1, friction: 8, tension: 300 };
function N(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: A,
                onConfirmClick: h,
                onCancelClick: f,
                renderFooter: E,
                animationWrapperClassName: b,
            },
        } = t,
        p = r.useCallback(() => {
            c(u);
        }, [c, u]),
        C = r.useCallback(
            (e) => {
                g.A.updateNotificationStatus(u), d?.(e, u);
            },
            [u, d],
        ),
        { clickSpring: S, handleMouseClick: _ } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, m.z)({
                    scale: e ? 0.975 : 1,
                    config: I,
                    onRest: () => {
                        t(!1),
                            setTimeout(() => {
                                i(!1);
                            }, 300);
                    },
                });
            return {
                clickSpring: n ? l : void 0,
                handleMouseClick: r.useCallback(() => {
                    i(!0), t(!0);
                }, []),
            };
        })(),
        O = r.useCallback(
            (e) => {
                A?.(e, u), _();
            },
            [A, u, _],
        ),
        T = r.useCallback(
            (e) => {
                h?.(e, u);
            },
            [h, u],
        ),
        x = r.useCallback(
            (e) => {
                f?.(e, u);
            },
            [f, u],
        ),
        N = r.useCallback((e, t) => E?.(e, u, t), [E, u]),
        {
            props: {
                onNotificationShow: M,
                onDismissClick: L,
                renderFooter: D,
                onNotificationClick: k,
                onConfirmClick: P,
                onCancelClick: U,
                disableClickableRegions: w = !1,
                clickZoneClassName: z,
                ...G
            },
            status: V,
        } = t,
        F = !s && l,
        K = 0 === n && !w && !F,
        { ref: B, springs: H } = (0, v.Ru)(t.id, a, o);
    return (0, i.jsx)(j, {
        transitionState: a,
        springs: H,
        scaleOverride: S?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: b,
        children: (0, i.jsx)(R, {
            observe: K,
            className: z,
            children: (0, i.jsx)(y, {
                ...G,
                title: "function" == typeof G.title ? G.title(C) : G.title,
                containerRef: B,
                notificationId: t.id,
                onNotificationShow: 0 === n ? p : void 0,
                onDismissClick: C,
                onNotificationClick: O,
                onConfirmClick: null != h ? T : void 0,
                onCancelClick: null != f ? x : void 0,
                renderFooter: N,
                expand: !1,
                index: n,
                locked: l,
                status: V,
                contentOpacity: H.contentOpacity,
            }),
        }),
    });
}
