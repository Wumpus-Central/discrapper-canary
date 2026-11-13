n.d(t, { $: () => S, A: () => N });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(120692),
    o = n(855986),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    m = n(778712),
    h = n(939249),
    f = n(717421),
    g = n(684013),
    A = n(789645),
    p = n(616566);
let E = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: s()(p.r, t),
        "aria-label": r,
        children: (0, i.jsx)(A.XSmallIcon, { size: "xs", color: "currentColor", colorClass: p.M }),
    });
};
E.displayName = "DismissButton";
var C = n(302614),
    b = n(887287),
    v = n(222506),
    I = n(57019),
    _ = n(652215),
    T = n(792996),
    y = n(709946);
function R(e) {
    e.currentTarget.scrollTo(0, 0);
}
let S = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: f = !1,
            onNotificationShow: g,
            onDismissClick: A,
            onConfirmClick: p,
            onCancelClick: C,
            onNotificationClick: I,
            hint: S,
            cancelText: x,
            confirmText: O,
            confirmVariant: P = "active",
            icon: N,
            body: k,
            title: M,
            renderFooter: D,
            contentOpacity: j,
            status: w,
            containerRef: U,
            className: z,
            wrapperClassName: L,
            unreadAccessory: V,
        } = e,
        [G, F] = r.useState(!1),
        H = f || G || w === _.yFH.FOCUSED,
        W = (0, o.bG)([v.A, b.A], () => v.A.isInputLocked(b.A.getTargetPID()));
    r.useEffect(() => {
        g?.();
    }, [g]);
    let B = r.useCallback(
            (e) => {
                (e.stopPropagation(), A?.(e));
            },
            [A],
        ),
        K = r.useCallback(
            (e) => {
                (e.stopPropagation(), p?.(e));
            },
            [p],
        ),
        q = r.useCallback(
            (e) => {
                (e.stopPropagation(), C?.(e));
            },
            [C],
        ),
        X = r.useCallback(() => {
            F(!0);
        }, []),
        Y = r.useCallback(() => {
            F(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(y.af, L),
                onScroll: R,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: U,
                        ignoreKeyPress: !0,
                        onMouseOver: X,
                        onMouseLeave: Y,
                        onClick: I,
                        className: s()(y.kL, { [y.vk]: null != I }, z),
                        children:
                            ((t = D?.(H, W)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: y.VM,
                                        style: { opacity: j },
                                        children: [
                                            null == N
                                                ? null
                                                : "string" == typeof N
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: N,
                                                        size: m._3.SIZE_40,
                                                        className: y.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: y.my, children: N }),
                                            (0, i.jsxs)("div", {
                                                className: y.zH,
                                                children: [
                                                    null != M
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "body-sm/semibold",
                                                              lineClamp: 2,
                                                              children: M,
                                                          })
                                                        : null,
                                                    null != k
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "body-sm/normal",
                                                              lineClamp: null != l ? l * (H ? 2 : 1) : void 0,
                                                              children: k,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof S ? S(H, W) : S),
                                                    null != S
                                                        ? (0, i.jsx)(u.E, {
                                                              className: y.aK,
                                                              color: "text-muted",
                                                              variant: "footnote/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == p && null == C
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: y.UD,
                                                              children: [
                                                                  null != p
                                                                      ? (0, i.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: P,
                                                                                onClick: K,
                                                                                text: O ?? T.intl.string(T.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != C
                                                                      ? (0, i.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: q,
                                                                                text: x ?? T.intl.string(T.t["ETE/oC"]),
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
                                            className: y.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == V ? null : (0, i.jsx)("div", { className: y.B3, children: V(G) }),
                ],
            }),
            (0, i.jsx)(E, { className: y.r, onDismiss: B, "aria-label": T.intl.string(T.t.LnEgqX) }),
        ],
    });
});
function x(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        scaleOverride: o,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: m,
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: s()(y.k$, d && 0 !== u && y.fF, m),
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
function O(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(C.A, { className: s()(y.VC, n), children: r }) : r;
}
let P = { mass: 1, friction: 8, tension: 300 };
function N(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: m,
                onConfirmClick: h,
                onCancelClick: A,
                renderFooter: p,
                animationWrapperClassName: E,
            },
        } = t,
        C = r.useCallback(() => {
            c(u);
        }, [c, u]),
        b = r.useCallback(
            (e) => {
                (g.A.updateNotificationStatus(u), d?.(e, u));
            },
            [u, d],
        ),
        { clickSpring: v, handleMouseClick: _ } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, f.z)({
                    scale: e ? 0.975 : 1,
                    config: P,
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
        T = r.useCallback(
            (e) => {
                (m?.(e, u), _());
            },
            [m, u, _],
        ),
        y = r.useCallback(
            (e) => {
                h?.(e, u);
            },
            [h, u],
        ),
        R = r.useCallback(
            (e) => {
                A?.(e, u);
            },
            [A, u],
        ),
        N = r.useCallback((e, t) => p?.(e, u, t), [p, u]),
        {
            props: {
                onNotificationShow: k,
                onDismissClick: M,
                renderFooter: D,
                onNotificationClick: j,
                onConfirmClick: w,
                onCancelClick: U,
                disableClickableRegions: z = !1,
                clickZoneClassName: L,
                ...V
            },
            status: G,
        } = t,
        F = !s && l,
        H = 0 === n && !z && !F,
        { ref: W, springs: B } = (0, I.Ru)(t.id, a, o);
    return (0, i.jsx)(x, {
        transitionState: a,
        springs: B,
        scaleOverride: v?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: E,
        children: (0, i.jsx)(O, {
            observe: H,
            className: L,
            children: (0, i.jsx)(S, {
                ...V,
                title: "function" == typeof V.title ? V.title(b) : V.title,
                containerRef: W,
                notificationId: t.id,
                onNotificationShow: 0 === n ? C : void 0,
                onDismissClick: b,
                onNotificationClick: T,
                onConfirmClick: null != h ? y : void 0,
                onCancelClick: null != A ? R : void 0,
                renderFooter: N,
                expand: !1,
                index: n,
                locked: l,
                status: G,
                contentOpacity: B.contentOpacity,
            }),
        }),
    });
}
