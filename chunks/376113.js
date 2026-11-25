n.d(t, { $: () => T, A: () => P });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(156150),
    o = n(855986),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    h = n(778712),
    m = n(939249),
    p = n(717421),
    f = n(684013),
    g = n(789645),
    A = n(616566);
let v = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(m.D, {
        role: "button",
        onClick: n,
        className: s()(A.r, t),
        "aria-label": r,
        children: (0, i.jsx)(g.XSmallIcon, { size: "xs", color: "currentColor", colorClass: A.M }),
    });
};
v.displayName = "DismissButton";
var E = n(302614),
    I = n(887287),
    y = n(222506),
    C = n(57019),
    S = n(652215),
    b = n(792996),
    w = n(709946);
function x(e) {
    e.currentTarget.scrollTo(0, 0);
}
let T = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: p = !1,
            onNotificationShow: f,
            onDismissClick: g,
            onConfirmClick: A,
            onCancelClick: E,
            onNotificationClick: C,
            hint: T,
            cancelText: R,
            confirmText: _,
            confirmVariant: k = "active",
            icon: P,
            body: M,
            title: O,
            renderFooter: D,
            contentOpacity: N,
            status: j,
            containerRef: L,
            className: U,
            wrapperClassName: z,
            unreadAccessory: G,
        } = e,
        [W, V] = r.useState(!1),
        F = p || W || j === S.yFH.FOCUSED,
        q = (0, o.bG)([y.A, I.A], () => y.A.isInputLocked(I.A.getTargetPID()));
    r.useEffect(() => {
        f?.();
    }, [f]);
    let H = r.useCallback(
            (e) => {
                (e.stopPropagation(), g?.(e));
            },
            [g],
        ),
        B = r.useCallback(
            (e) => {
                (e.stopPropagation(), A?.(e));
            },
            [A],
        ),
        K = r.useCallback(
            (e) => {
                (e.stopPropagation(), E?.(e));
            },
            [E],
        ),
        X = r.useCallback(() => {
            V(!0);
        }, []),
        Y = r.useCallback(() => {
            V(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(w.af, z),
                onScroll: x,
                children: [
                    (0, i.jsx)(m.D, {
                        innerRef: L,
                        ignoreKeyPress: !0,
                        onMouseOver: X,
                        onMouseLeave: Y,
                        onClick: C,
                        className: s()(w.kL, { [w.vk]: null != C }, U),
                        children:
                            ((t = D?.(F, q)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: w.VM,
                                        style: { opacity: N },
                                        children: [
                                            null == P
                                                ? null
                                                : "string" == typeof P
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: P,
                                                        size: h._3.SIZE_40,
                                                        className: w.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: w.my, children: P }),
                                            (0, i.jsxs)("div", {
                                                className: w.zH,
                                                children: [
                                                    null != O
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "body-sm/semibold",
                                                              lineClamp: 2,
                                                              children: O,
                                                          })
                                                        : null,
                                                    null != M
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "body-sm/normal",
                                                              lineClamp: null != l ? l * (F ? 2 : 1) : void 0,
                                                              children: M,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof T ? T(F, q) : T),
                                                    null != T
                                                        ? (0, i.jsx)(u.E, {
                                                              className: w.aK,
                                                              color: "text-muted",
                                                              variant: "footnote/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == A && null == E
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: w.UD,
                                                              children: [
                                                                  null != A
                                                                      ? (0, i.jsx)("div", {
                                                                            className: w.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: k,
                                                                                onClick: B,
                                                                                text: _ ?? b.intl.string(b.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != E
                                                                      ? (0, i.jsx)("div", {
                                                                            className: w.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: K,
                                                                                text: R ?? b.intl.string(b.t["ETE/oC"]),
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
                                            className: w.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == G ? null : (0, i.jsx)("div", { className: w.B3, children: G(W) }),
                ],
            }),
            (0, i.jsx)(v, { className: w.r, onDismiss: H, "aria-label": b.intl.string(b.t.LnEgqX) }),
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
        className: s()(w.k$, d && 0 !== u && w.fF, h),
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
function _(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(E.A, { className: s()(w.VC, n), children: r }) : r;
}
let k = { mass: 1, friction: 8, tension: 300 };
function P(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: h,
                onConfirmClick: m,
                onCancelClick: g,
                renderFooter: A,
                animationWrapperClassName: v,
            },
        } = t,
        E = r.useCallback(() => {
            c(u);
        }, [c, u]),
        I = r.useCallback(
            (e) => {
                (f.A.updateNotificationStatus(u), d?.(e, u));
            },
            [u, d],
        ),
        { clickSpring: y, handleMouseClick: S } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, p.z)({
                    scale: e ? 0.975 : 1,
                    config: k,
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
        b = r.useCallback(
            (e) => {
                (h?.(e, u), S());
            },
            [h, u, S],
        ),
        w = r.useCallback(
            (e) => {
                m?.(e, u);
            },
            [m, u],
        ),
        x = r.useCallback(
            (e) => {
                g?.(e, u);
            },
            [g, u],
        ),
        P = r.useCallback((e, t) => A?.(e, u, t), [A, u]),
        {
            props: {
                onNotificationShow: M,
                onDismissClick: O,
                renderFooter: D,
                onNotificationClick: N,
                onConfirmClick: j,
                onCancelClick: L,
                disableClickableRegions: U = !1,
                clickZoneClassName: z,
                ...G
            },
            status: W,
        } = t,
        V = !s && l,
        F = 0 === n && !U && !V,
        { ref: q, springs: H } = (0, C.Ru)(t.id, a, o);
    return (0, i.jsx)(R, {
        transitionState: a,
        springs: H,
        scaleOverride: y?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: v,
        children: (0, i.jsx)(_, {
            observe: F,
            className: z,
            children: (0, i.jsx)(T, {
                ...G,
                title: "function" == typeof G.title ? G.title(I) : G.title,
                containerRef: q,
                notificationId: t.id,
                onNotificationShow: 0 === n ? E : void 0,
                onDismissClick: I,
                onNotificationClick: b,
                onConfirmClick: null != m ? w : void 0,
                onCancelClick: null != g ? x : void 0,
                renderFooter: P,
                expand: !1,
                index: n,
                locked: l,
                status: W,
                contentOpacity: H.contentOpacity,
            }),
        }),
    });
}
