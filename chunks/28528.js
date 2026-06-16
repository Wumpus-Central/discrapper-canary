"use strict";
n.d(t, { $: () => R, A: () => L });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(922139),
    l = n(17928),
    u = n(834730),
    c = n(821609),
    d = n(97808),
    _ = n(778712),
    h = n(939249),
    f = n(717421),
    p = n(684013),
    E = n(789645),
    m = n(361147);
let g = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: a()(m.r, t),
        "aria-label": r,
        children: (0, i.jsx)(E.P, { size: "xs", color: "currentColor", colorClass: m.M }),
    });
};
g.displayName = "DismissButton";
var A = n(302614),
    I = n(489277),
    T = n(222506),
    S = n(57019),
    y = n(652215),
    C = n(375708),
    N = n(70617);
function v(e) {
    e.currentTarget.scrollTo(0, 0);
}
let R = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: s,
            expand: f = !1,
            onNotificationShow: p,
            onDismissClick: E,
            onConfirmClick: m,
            onCancelClick: A,
            onNotificationClick: S,
            hint: R,
            cancelText: O,
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
        [V, B] = r.useState(!1),
        j = f || V || x === y.yFH.FOCUSED,
        H = (0, l.bG)([T.A, I.A], () => T.A.isInputLocked(I.A.getTargetPID()));
    r.useEffect(() => {
        p?.();
    }, [p]);
    let Y = r.useCallback(
            (e) => {
                e.stopPropagation(), E?.(e);
            },
            [E],
        ),
        W = r.useCallback(
            (e) => {
                e.stopPropagation(), m?.(e);
            },
            [m],
        ),
        K = r.useCallback(
            (e) => {
                e.stopPropagation(), A?.(e);
            },
            [A],
        ),
        $ = r.useCallback(() => {
            B(!0);
        }, []),
        z = r.useCallback(() => {
            B(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(N.af, G),
                onScroll: v,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: k,
                        ignoreKeyPress: !0,
                        onMouseOver: $,
                        onMouseLeave: z,
                        onClick: S,
                        className: a()(N.kL, { [N.vk]: null != S }, U),
                        children:
                            ((t = M?.(j, H)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(o.animated.div, {
                                        className: N.VM,
                                        style: { opacity: P },
                                        children: [
                                            null == D
                                                ? null
                                                : "string" == typeof D
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: D,
                                                        size: _._3.SIZE_40,
                                                        className: N.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: N.my, children: D }),
                                            (0, i.jsxs)("div", {
                                                className: N.zH,
                                                children: [
                                                    null != w
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: w,
                                                          })
                                                        : null,
                                                    null != L
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != s ? s * (j ? 2 : 1) : void 0,
                                                              children: L,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof R ? R(j, H) : R),
                                                    null != R
                                                        ? (0, i.jsx)(u.E, {
                                                              className: N.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == m && null == A
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: N.UD,
                                                              children: [
                                                                  null != m
                                                                      ? (0, i.jsx)("div", {
                                                                            className: N.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: W,
                                                                                text: b ?? C.intl.string(C.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != A
                                                                      ? (0, i.jsx)("div", {
                                                                            className: N.x6,
                                                                            children: (0, i.jsx)(c.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: K,
                                                                                text: O ?? C.intl.string(C.t["ETE/oC"]),
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
                                            className: N.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == F ? null : (0, i.jsx)("div", { className: N.B3, children: F(V) }),
                ],
            }),
            (0, i.jsx)(g, { className: N.r, onDismiss: Y, "aria-label": C.intl.string(C.t.LnEgqX) }),
        ],
    });
});
function O(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: s },
        scaleOverride: l,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: _,
    } = e;
    return (0, i.jsx)(o.animated.div, {
        className: a()(N.k$, d && 0 !== u && N.fF, _),
        style: {
            pointerEvents: d && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: r.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: s,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: c,
    });
}
function b(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(A.A, { className: a()(N.VC, n), children: r }) : r;
}
let D = { mass: 1, friction: 8, tension: 300 };
function L(e) {
    let { notification: t, index: n, locked: s, pinned: a, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: c,
                onDismissClick: d,
                onNotificationClick: _,
                onConfirmClick: h,
                onCancelClick: E,
                renderFooter: m,
                animationWrapperClassName: g,
            },
        } = t,
        A = r.useCallback(() => {
            c(u);
        }, [c, u]),
        I = r.useCallback(
            (e) => {
                p.A.updateNotificationStatus(u), d?.(e, u);
            },
            [u, d],
        ),
        { clickSpring: T, handleMouseClick: y } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, f.z)({
                    scale: e ? 0.975 : 1,
                    config: D,
                    onRest: () => {
                        t(!1),
                            setTimeout(() => {
                                i(!1);
                            }, 300);
                    },
                });
            return {
                clickSpring: n ? s : void 0,
                handleMouseClick: r.useCallback(() => {
                    i(!0), t(!0);
                }, []),
            };
        })(),
        C = r.useCallback(
            (e) => {
                _?.(e, u), y();
            },
            [_, u, y],
        ),
        N = r.useCallback(
            (e) => {
                h?.(e, u);
            },
            [h, u],
        ),
        v = r.useCallback(
            (e) => {
                E?.(e, u);
            },
            [E, u],
        ),
        L = r.useCallback((e, t) => m?.(e, u, t), [m, u]),
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
        j = !a && s,
        H = 0 === n && !G && !j,
        { ref: Y, springs: W } = (0, S.Ru)(t.id, o, l);
    return (0, i.jsx)(O, {
        transitionState: o,
        springs: W,
        scaleOverride: T?.scale,
        index: n,
        locked: s,
        animationWrapperClassName: g,
        children: (0, i.jsx)(b, {
            observe: H,
            className: F,
            children: (0, i.jsx)(R, {
                ...V,
                title: "function" == typeof V.title ? V.title(I) : V.title,
                containerRef: Y,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: I,
                onNotificationClick: C,
                onConfirmClick: null != h ? N : void 0,
                onCancelClick: null != E ? v : void 0,
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
