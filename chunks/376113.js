n.d(t, { $: () => x, A: () => N });
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
    g = n(717421),
    f = n(684013),
    p = n(789645),
    A = n(616566);
let E = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: s()(A.r, t),
        "aria-label": r,
        children: (0, i.jsx)(p.P, { size: "xs", color: "currentColor", colorClass: A.M }),
    });
};
E.displayName = "DismissButton";
var b = n(302614),
    C = n(887287),
    v = n(222506),
    T = n(57019),
    y = n(652215),
    _ = n(792996),
    I = n(709946);
function R(e) {
    e.currentTarget.scrollTo(0, 0);
}
let x = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: g = !1,
            onNotificationShow: f,
            onDismissClick: p,
            onConfirmClick: A,
            onCancelClick: b,
            onNotificationClick: T,
            hint: x,
            cancelText: S,
            confirmText: O,
            icon: k,
            body: N,
            title: M,
            renderFooter: P,
            contentOpacity: D,
            status: j,
            containerRef: w,
            className: U,
            wrapperClassName: z,
            unreadAccessory: L,
        } = e,
        [V, F] = r.useState(!1),
        G = g || V || j === y.yFH.FOCUSED,
        W = (0, o.bG)([v.A, C.A], () => v.A.isInputLocked(C.A.getTargetPID()));
    r.useEffect(() => {
        f?.();
    }, [f]);
    let H = r.useCallback(
            (e) => {
                (e.stopPropagation(), p?.(e));
            },
            [p],
        ),
        B = r.useCallback(
            (e) => {
                (e.stopPropagation(), A?.(e));
            },
            [A],
        ),
        q = r.useCallback(
            (e) => {
                (e.stopPropagation(), b?.(e));
            },
            [b],
        ),
        K = r.useCallback(() => {
            F(!0);
        }, []),
        X = r.useCallback(() => {
            F(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(I.af, z),
                onScroll: R,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: w,
                        ignoreKeyPress: !0,
                        onMouseOver: K,
                        onMouseLeave: X,
                        onClick: T,
                        className: s()(I.kL, { [I.vk]: null != T }, U),
                        children:
                            ((t = P?.(G, W)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: I.VM,
                                        style: { opacity: D },
                                        children: [
                                            null == k
                                                ? null
                                                : "string" == typeof k
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: k,
                                                        size: m._3.SIZE_40,
                                                        className: I.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: I.my, children: k }),
                                            (0, i.jsxs)("div", {
                                                className: I.zH,
                                                children: [
                                                    null != M
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "body-sm/semibold",
                                                              lineClamp: 2,
                                                              children: M,
                                                          })
                                                        : null,
                                                    null != N
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "body-sm/normal",
                                                              lineClamp: null != l ? l * (G ? 2 : 1) : void 0,
                                                              children: N,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof x ? x(G, W) : x),
                                                    null != x
                                                        ? (0, i.jsx)(u.E, {
                                                              className: I.aK,
                                                              color: "text-muted",
                                                              variant: "footnote/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == A && null == b
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: I.UD,
                                                              children: [
                                                                  null != A
                                                                      ? (0, i.jsx)("div", {
                                                                            className: I.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: B,
                                                                                text: O ?? _.intl.string(_.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != b
                                                                      ? (0, i.jsx)("div", {
                                                                            className: I.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: q,
                                                                                text: S ?? _.intl.string(_.t["ETE/oC"]),
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
                                            className: I.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == L ? null : (0, i.jsx)("div", { className: I.B3, children: L(V) }),
                ],
            }),
            (0, i.jsx)(E, { className: I.r, onDismiss: H, "aria-label": _.intl.string(_.t.LnEgqX) }),
        ],
    });
});
function S(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        scaleOverride: o,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: m,
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: s()(I.k$, d && 0 !== u && I.fF, m),
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
    return t ? (0, i.jsx)(b.A, { className: s()(I.VC, n), children: r }) : r;
}
let k = { mass: 1, friction: 8, tension: 300 };
function N(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: m,
                onConfirmClick: h,
                onCancelClick: p,
                renderFooter: A,
                animationWrapperClassName: E,
            },
        } = t,
        b = r.useCallback(() => {
            c(u);
        }, [c, u]),
        C = r.useCallback(
            (e) => {
                (f.A.updateNotificationStatus(u), d?.(e, u));
            },
            [u, d],
        ),
        { clickSpring: v, handleMouseClick: y } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, g.z)({
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
        _ = r.useCallback(
            (e) => {
                (m?.(e, u), y());
            },
            [m, u, y],
        ),
        I = r.useCallback(
            (e) => {
                h?.(e, u);
            },
            [h, u],
        ),
        R = r.useCallback(
            (e) => {
                p?.(e, u);
            },
            [p, u],
        ),
        N = r.useCallback((e, t) => A?.(e, u, t), [A, u]),
        {
            props: {
                onNotificationShow: M,
                onDismissClick: P,
                renderFooter: D,
                onNotificationClick: j,
                onConfirmClick: w,
                onCancelClick: U,
                disableClickableRegions: z = !1,
                clickZoneClassName: L,
                ...V
            },
            status: F,
        } = t,
        G = !s && l,
        W = 0 === n && !z && !G,
        { ref: H, springs: B } = (0, T.Ru)(t.id, a, o);
    return (0, i.jsx)(S, {
        transitionState: a,
        springs: B,
        scaleOverride: v?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: E,
        children: (0, i.jsx)(O, {
            observe: W,
            className: L,
            children: (0, i.jsx)(x, {
                ...V,
                title: "function" == typeof V.title ? V.title(C) : V.title,
                containerRef: H,
                notificationId: t.id,
                onNotificationShow: 0 === n ? b : void 0,
                onDismissClick: C,
                onNotificationClick: _,
                onConfirmClick: null != h ? I : void 0,
                onCancelClick: null != p ? R : void 0,
                renderFooter: N,
                expand: !1,
                index: n,
                locked: l,
                status: F,
                contentOpacity: B.contentOpacity,
            }),
        }),
    });
}
