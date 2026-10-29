n.d(t, { $: () => R, A: () => k });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(941143),
    o = n(17928),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    m = n(778712),
    h = n(939249),
    g = n(717421),
    f = n(684013),
    A = n(789645),
    p = n(616566);
let E = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: s()(p.r, t),
        "aria-label": r,
        children: (0, i.jsx)(A.P, { size: "xs", color: "currentColor", colorClass: p.M }),
    });
};
E.displayName = "DismissButton";
var C = n(302614),
    b = n(233741),
    T = n(222506),
    v = n(57019),
    _ = n(652215),
    I = n(105292),
    y = n(709946);
function S(e) {
    e.currentTarget.scrollTo(0, 0);
}
let R = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: g = !1,
            onNotificationShow: f,
            onDismissClick: A,
            onConfirmClick: p,
            onCancelClick: C,
            onNotificationClick: v,
            hint: R,
            cancelText: x,
            confirmText: O,
            icon: N,
            body: k,
            title: M,
            renderFooter: P,
            contentOpacity: D,
            status: j,
            containerRef: U,
            className: w,
            wrapperClassName: L,
            unreadAccessory: z,
        } = e,
        [V, G] = r.useState(!1),
        F = g || V || j === _.yFH.FOCUSED,
        W = (0, o.bG)([T.A, b.A], () => T.A.isInputLocked(b.A.getTargetPID()));
    r.useEffect(() => {
        f?.();
    }, [f]);
    let H = r.useCallback(
            (e) => {
                (e.stopPropagation(), A?.(e));
            },
            [A],
        ),
        B = r.useCallback(
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
        K = r.useCallback(() => {
            G(!0);
        }, []),
        J = r.useCallback(() => {
            G(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(y.af, L),
                onScroll: S,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: U,
                        ignoreKeyPress: !0,
                        onMouseOver: K,
                        onMouseLeave: J,
                        onClick: v,
                        className: s()(y.kL, { [y.vk]: null != v }, w),
                        children:
                            ((t = P?.(F, W)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: y.VM,
                                        style: { opacity: D },
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
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: M,
                                                          })
                                                        : null,
                                                    null != k
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != l ? l * (F ? 2 : 1) : void 0,
                                                              children: k,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof R ? R(F, W) : R),
                                                    null != R
                                                        ? (0, i.jsx)(u.E, {
                                                              className: y.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
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
                                                                                variant: "active",
                                                                                onClick: B,
                                                                                text: O ?? I.intl.string(I.t.BddRzS),
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
                                                                                text: x ?? I.intl.string(I.t["ETE/oC"]),
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
                    null == z ? null : (0, i.jsx)("div", { className: y.B3, children: z(V) }),
                ],
            }),
            (0, i.jsx)(E, { className: y.r, onDismiss: H, "aria-label": I.intl.string(I.t.LnEgqX) }),
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
let N = { mass: 1, friction: 8, tension: 300 };
function k(e) {
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
                (f.A.updateNotificationStatus(u), d?.(e, u));
            },
            [u, d],
        ),
        { clickSpring: T, handleMouseClick: _ } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, g.z)({
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
        S = r.useCallback(
            (e) => {
                A?.(e, u);
            },
            [A, u],
        ),
        k = r.useCallback((e, t) => p?.(e, u, t), [p, u]),
        {
            props: {
                onNotificationShow: M,
                onDismissClick: P,
                renderFooter: D,
                onNotificationClick: j,
                onConfirmClick: U,
                onCancelClick: w,
                disableClickableRegions: L = !1,
                clickZoneClassName: z,
                ...V
            },
            status: G,
        } = t,
        F = !s && l,
        W = 0 === n && !L && !F,
        { ref: H, springs: B } = (0, v.Ru)(t.id, a, o);
    return (0, i.jsx)(x, {
        transitionState: a,
        springs: B,
        scaleOverride: T?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: E,
        children: (0, i.jsx)(O, {
            observe: W,
            className: z,
            children: (0, i.jsx)(R, {
                ...V,
                title: "function" == typeof V.title ? V.title(b) : V.title,
                containerRef: H,
                notificationId: t.id,
                onNotificationShow: 0 === n ? C : void 0,
                onDismissClick: b,
                onNotificationClick: I,
                onConfirmClick: null != h ? y : void 0,
                onCancelClick: null != A ? S : void 0,
                renderFooter: k,
                expand: !1,
                index: n,
                locked: l,
                status: G,
                contentOpacity: B.contentOpacity,
            }),
        }),
    });
}
