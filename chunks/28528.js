n.d(t, { $: () => _, A: () => D });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(580929),
    o = n(17928),
    c = n(834730),
    u = n(821609),
    d = n(97808),
    A = n(778712),
    h = n(939249),
    m = n(717421),
    g = n(684013),
    p = n(789645),
    f = n(361147);
let E = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: s()(f.r, t),
        "aria-label": r,
        children: (0, i.jsx)(p.P, { size: "xs", color: "currentColor", colorClass: f.M }),
    });
};
E.displayName = "DismissButton";
var b = n(302614),
    C = n(489277),
    v = n(222506),
    S = n(57019),
    y = n(652215),
    T = n(375708),
    x = n(70617);
function O(e) {
    e.currentTarget.scrollTo(0, 0);
}
let _ = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: l,
            expand: m = !1,
            onNotificationShow: g,
            onDismissClick: p,
            onConfirmClick: f,
            onCancelClick: b,
            onNotificationClick: S,
            hint: _,
            cancelText: j,
            confirmText: I,
            icon: R,
            body: D,
            title: N,
            renderFooter: M,
            contentOpacity: L,
            status: k,
            containerRef: w,
            className: P,
            wrapperClassName: U,
            unreadAccessory: G,
        } = e,
        [z, V] = r.useState(!1),
        F = m || z || k === y.yFH.FOCUSED,
        H = (0, o.bG)([v.A, C.A], () => v.A.isInputLocked(C.A.getTargetPID()));
    r.useEffect(() => {
        g?.();
    }, [g]);
    let K = r.useCallback(
            (e) => {
                e.stopPropagation(), p?.(e);
            },
            [p],
        ),
        B = r.useCallback(
            (e) => {
                e.stopPropagation(), f?.(e);
            },
            [f],
        ),
        W = r.useCallback(
            (e) => {
                e.stopPropagation(), b?.(e);
            },
            [b],
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
                className: s()(x.af, U),
                onScroll: O,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: w,
                        ignoreKeyPress: !0,
                        onMouseOver: J,
                        onMouseLeave: q,
                        onClick: S,
                        className: s()(x.kL, { [x.vk]: null != S }, P),
                        children:
                            ((t = M?.(F, H)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(a.animated.div, {
                                        className: x.VM,
                                        style: { opacity: L },
                                        children: [
                                            null == R
                                                ? null
                                                : "string" == typeof R
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: R,
                                                        size: A._3.SIZE_40,
                                                        className: x.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: x.my, children: R }),
                                            (0, i.jsxs)("div", {
                                                className: x.zH,
                                                children: [
                                                    null != N
                                                        ? (0, i.jsx)(c.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: N,
                                                          })
                                                        : null,
                                                    null != D
                                                        ? (0, i.jsx)(c.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != l ? l * (F ? 2 : 1) : void 0,
                                                              children: D,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof _ ? _(F, H) : _),
                                                    null != _
                                                        ? (0, i.jsx)(c.E, {
                                                              className: x.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == f && null == b
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: x.UD,
                                                              children: [
                                                                  null != f
                                                                      ? (0, i.jsx)("div", {
                                                                            className: x.x6,
                                                                            children: (0, i.jsx)(u.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: B,
                                                                                text: I ?? T.intl.string(T.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != b
                                                                      ? (0, i.jsx)("div", {
                                                                            className: x.x6,
                                                                            children: (0, i.jsx)(u.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: W,
                                                                                text: j ?? T.intl.string(T.t["ETE/oC"]),
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
                                            className: x.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == G ? null : (0, i.jsx)("div", { className: x.B3, children: G(z) }),
                ],
            }),
            (0, i.jsx)(E, { className: x.r, onDismiss: K, "aria-label": T.intl.string(T.t.LnEgqX) }),
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
        animationWrapperClassName: A,
    } = e;
    return (0, i.jsx)(a.animated.div, {
        className: s()(x.k$, d && 0 !== c && x.fF, A),
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
    return t ? (0, i.jsx)(b.A, { className: s()(x.VC, n), children: r }) : r;
}
let R = { mass: 1, friction: 8, tension: 300 };
function D(e) {
    let { notification: t, index: n, locked: l, pinned: s, transitionState: a, cleanUp: o } = e,
        {
            id: c,
            props: {
                onNotificationShow: u,
                onDismissClick: d,
                onNotificationClick: A,
                onConfirmClick: h,
                onCancelClick: p,
                renderFooter: f,
                animationWrapperClassName: E,
            },
        } = t,
        b = r.useCallback(() => {
            u(c);
        }, [u, c]),
        C = r.useCallback(
            (e) => {
                g.A.updateNotificationStatus(c), d?.(e, c);
            },
            [c, d],
        ),
        { clickSpring: v, handleMouseClick: y } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                l = (0, m.z)({
                    scale: e ? 0.975 : 1,
                    config: R,
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
        T = r.useCallback(
            (e) => {
                A?.(e, c), y();
            },
            [A, c, y],
        ),
        x = r.useCallback(
            (e) => {
                h?.(e, c);
            },
            [h, c],
        ),
        O = r.useCallback(
            (e) => {
                p?.(e, c);
            },
            [p, c],
        ),
        D = r.useCallback((e, t) => f?.(e, c, t), [f, c]),
        {
            props: {
                onNotificationShow: N,
                onDismissClick: M,
                renderFooter: L,
                onNotificationClick: k,
                onConfirmClick: w,
                onCancelClick: P,
                disableClickableRegions: U = !1,
                clickZoneClassName: G,
                ...z
            },
            status: V,
        } = t,
        F = !s && l,
        H = 0 === n && !U && !F,
        { ref: K, springs: B } = (0, S.Ru)(t.id, a, o);
    return (0, i.jsx)(j, {
        transitionState: a,
        springs: B,
        scaleOverride: v?.scale,
        index: n,
        locked: l,
        animationWrapperClassName: E,
        children: (0, i.jsx)(I, {
            observe: H,
            className: G,
            children: (0, i.jsx)(_, {
                ...z,
                title: "function" == typeof z.title ? z.title(C) : z.title,
                containerRef: K,
                notificationId: t.id,
                onNotificationShow: 0 === n ? b : void 0,
                onDismissClick: C,
                onNotificationClick: T,
                onConfirmClick: null != h ? x : void 0,
                onCancelClick: null != p ? O : void 0,
                renderFooter: D,
                expand: !1,
                index: n,
                locked: l,
                status: V,
                contentOpacity: B.contentOpacity,
            }),
        }),
    });
}
