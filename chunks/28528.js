n.d(t, { $: () => x, A: () => M });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(202091),
    o = n(17928),
    c = n(834730),
    u = n(821609),
    d = n(97808),
    h = n(778712),
    m = n(939249),
    A = n(717421),
    g = n(684013),
    f = n(789645),
    b = n(616566);
let E = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(m.D, {
        role: "button",
        onClick: n,
        className: s()(b.r, t),
        "aria-label": r,
        children: (0, i.jsx)(f.P, { size: "xs", color: "currentColor", colorClass: b.M }),
    });
};
E.displayName = "DismissButton";
var p = n(302614),
    C = n(233741),
    S = n(222506),
    v = n(57019),
    _ = n(652215),
    y = n(660183),
    O = n(709946);
function T(e) {
    e.currentTarget.scrollTo(0, 0);
}
let x = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: A = !1,
            onNotificationShow: g,
            onDismissClick: f,
            onConfirmClick: b,
            onCancelClick: p,
            onNotificationClick: v,
            hint: x,
            cancelText: j,
            confirmText: I,
            icon: R,
            body: M,
            title: N,
            renderFooter: L,
            contentOpacity: D,
            status: k,
            containerRef: P,
            className: w,
            wrapperClassName: U,
            unreadAccessory: z,
        } = e,
        [G, V] = r.useState(!1),
        F = A || G || k === _.yFH.FOCUSED,
        K = (0, o.bG)([S.A, C.A], () => S.A.isInputLocked(C.A.getTargetPID()));
    r.useEffect(() => {
        g?.();
    }, [g]);
    let B = r.useCallback(
            (e) => {
                (e.stopPropagation(), f?.(e));
            },
            [f],
        ),
        H = r.useCallback(
            (e) => {
                (e.stopPropagation(), b?.(e));
            },
            [b],
        ),
        W = r.useCallback(
            (e) => {
                (e.stopPropagation(), p?.(e));
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
                className: s()(O.af, U),
                onScroll: T,
                children: [
                    (0, i.jsx)(m.D, {
                        innerRef: P,
                        ignoreKeyPress: !0,
                        onMouseOver: J,
                        onMouseLeave: q,
                        onClick: v,
                        className: s()(O.kL, { [O.vk]: null != v }, w),
                        children:
                            ((t = L?.(F, K)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: O.VM,
                                        style: { opacity: D },
                                        children: [
                                            null == R
                                                ? null
                                                : "string" == typeof R
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: R,
                                                        size: h._3.SIZE_40,
                                                        className: O.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: O.my, children: R }),
                                            (0, i.jsxs)("div", {
                                                className: O.zH,
                                                children: [
                                                    null != N
                                                        ? (0, i.jsx)(c.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: N,
                                                          })
                                                        : null,
                                                    null != M
                                                        ? (0, i.jsx)(c.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != l ? l * (F ? 2 : 1) : void 0,
                                                              children: M,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof x ? x(F, K) : x),
                                                    null != x
                                                        ? (0, i.jsx)(c.E, {
                                                              className: O.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == b && null == p
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: O.UD,
                                                              children: [
                                                                  null != b
                                                                      ? (0, i.jsx)("div", {
                                                                            className: O.x6,
                                                                            children: (0, i.jsx)(u.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: H,
                                                                                text: I ?? y.intl.string(y.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != p
                                                                      ? (0, i.jsx)("div", {
                                                                            className: O.x6,
                                                                            children: (0, i.jsx)(u.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: W,
                                                                                text: j ?? y.intl.string(y.t["ETE/oC"]),
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
                                            className: O.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == z ? null : (0, i.jsx)("div", { className: O.B3, children: z(G) }),
                ],
            }),
            (0, i.jsx)(E, { className: O.r, onDismiss: B, "aria-label": y.intl.string(y.t.LnEgqX) }),
        ],
    });
});
function j(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        scaleOverride: o,
        index: c,
        children: u,
        locked: d,
        animationWrapperClassName: h,
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: s()(O.k$, d && 0 !== c && O.fF, h),
        style: {
            pointerEvents: d && 0 !== c ? "none" : "auto",
            zIndex: Math.max(5 - c, 0),
            opacity: t,
            transform: r.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: o ?? n.to([0, 1], [0.7, 1]),
            height: l,
            maxWidth: 0 === c ? void 0 : "100%",
        },
        children: u,
    });
}
function I(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(p.A, { className: s()(O.VC, n), children: r }) : r;
}
let R = { mass: 1, friction: 8, tension: 300 };
function M(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: c,
            props: {
                onNotificationShow: u,
                onDismissClick: d,
                onNotificationClick: h,
                onConfirmClick: m,
                onCancelClick: f,
                renderFooter: b,
                animationWrapperClassName: E,
            },
        } = t,
        p = r.useCallback(() => {
            u(c);
        }, [u, c]),
        C = r.useCallback(
            (e) => {
                (g.A.updateNotificationStatus(c), d?.(e, c));
            },
            [c, d],
        ),
        { clickSpring: S, handleMouseClick: _ } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, A.z)({
                    scale: e ? 0.975 : 1,
                    config: R,
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
        y = r.useCallback(
            (e) => {
                (h?.(e, c), _());
            },
            [h, c, _],
        ),
        O = r.useCallback(
            (e) => {
                m?.(e, c);
            },
            [m, c],
        ),
        T = r.useCallback(
            (e) => {
                f?.(e, c);
            },
            [f, c],
        ),
        M = r.useCallback((e, t) => b?.(e, c, t), [b, c]),
        {
            props: {
                onNotificationShow: N,
                onDismissClick: L,
                renderFooter: D,
                onNotificationClick: k,
                onConfirmClick: P,
                onCancelClick: w,
                disableClickableRegions: U = !1,
                clickZoneClassName: z,
                ...G
            },
            status: V,
        } = t,
        F = !s && l,
        K = 0 === n && !U && !F,
        { ref: B, springs: H } = (0, v.Ru)(t.id, a, o);
    return (0, i.jsx)(j, {
        transitionState: a,
        springs: H,
        scaleOverride: S?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: E,
        children: (0, i.jsx)(I, {
            observe: K,
            className: z,
            children: (0, i.jsx)(x, {
                ...G,
                title: "function" == typeof G.title ? G.title(C) : G.title,
                containerRef: B,
                notificationId: t.id,
                onNotificationShow: 0 === n ? p : void 0,
                onDismissClick: C,
                onNotificationClick: y,
                onConfirmClick: null != m ? O : void 0,
                onCancelClick: null != f ? T : void 0,
                renderFooter: M,
                expand: !1,
                index: n,
                locked: l,
                status: V,
                contentOpacity: H.contentOpacity,
            }),
        }),
    });
}
