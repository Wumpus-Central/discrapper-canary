"use strict";
n.d(t, { $: () => R, A: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(17928),
    u = n(834730),
    d = n(821609),
    c = n(97808),
    _ = n(778712),
    h = n(939249),
    f = n(717421),
    E = n(684013),
    p = n(789645),
    m = n(361147);
let g = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(h.D, {
        role: "button",
        onClick: n,
        className: a()(m.r, t),
        "aria-label": r,
        children: (0, i.jsx)(p.P, { size: "xs", color: "currentColor", colorClass: m.M }),
    });
};
g.displayName = "DismissButton";
var A = n(302614),
    I = n(489277),
    T = n(222506),
    S = n(57019),
    N = n(652215),
    C = n(375708),
    y = n(70617);
function v(e) {
    e.currentTarget.scrollTo(0, 0);
}
let R = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: s,
            expand: f = !1,
            onNotificationShow: E,
            onDismissClick: p,
            onConfirmClick: m,
            onCancelClick: A,
            onNotificationClick: S,
            hint: R,
            cancelText: O,
            confirmText: b,
            icon: L,
            body: D,
            title: P,
            renderFooter: w,
            contentOpacity: M,
            status: x,
            containerRef: U,
            className: k,
            wrapperClassName: G,
            unreadAccessory: V,
        } = e,
        [F, B] = r.useState(!1),
        j = f || F || x === N.yFH.FOCUSED,
        H = (0, l.bG)([T.A, I.A], () => T.A.isInputLocked(I.A.getTargetPID()));
    r.useEffect(() => {
        E?.();
    }, [E]);
    let W = r.useCallback(
            (e) => {
                e.stopPropagation(), p?.(e);
            },
            [p],
        ),
        Y = r.useCallback(
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
                className: a()(y.af, G),
                onScroll: v,
                children: [
                    (0, i.jsx)(h.D, {
                        innerRef: U,
                        ignoreKeyPress: !0,
                        onMouseOver: $,
                        onMouseLeave: z,
                        onClick: S,
                        className: a()(y.kL, { [y.vk]: null != S }, k),
                        children:
                            ((t = w?.(j, H)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(o.animated.div, {
                                        className: y.VM,
                                        style: { opacity: M },
                                        children: [
                                            null == L
                                                ? null
                                                : "string" == typeof L
                                                  ? (0, i.jsx)(c.eu, {
                                                        src: L,
                                                        size: _._3.SIZE_40,
                                                        className: y.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: y.my, children: L }),
                                            (0, i.jsxs)("div", {
                                                className: y.zH,
                                                children: [
                                                    null != P
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: P,
                                                          })
                                                        : null,
                                                    null != D
                                                        ? (0, i.jsx)(u.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != s ? s * (j ? 2 : 1) : void 0,
                                                              children: D,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof R ? R(j, H) : R),
                                                    null != R
                                                        ? (0, i.jsx)(u.E, {
                                                              className: y.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == m && null == A
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: y.UD,
                                                              children: [
                                                                  null != m
                                                                      ? (0, i.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, i.jsx)(d.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: Y,
                                                                                text: b ?? C.intl.string(C.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != A
                                                                      ? (0, i.jsx)("div", {
                                                                            className: y.x6,
                                                                            children: (0, i.jsx)(d.$, {
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
                                            className: y.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == V ? null : (0, i.jsx)("div", { className: y.B3, children: V(F) }),
                ],
            }),
            (0, i.jsx)(g, { className: y.r, onDismiss: W, "aria-label": C.intl.string(C.t.LnEgqX) }),
        ],
    });
});
function O(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: s },
        scaleOverride: l,
        index: u,
        children: d,
        locked: c,
        animationWrapperClassName: _,
    } = e;
    return (0, i.jsx)(o.animated.div, {
        className: a()(y.k$, c && 0 !== u && y.fF, _),
        style: {
            pointerEvents: c && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: r.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: s,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: d,
    });
}
function b(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(A.A, { className: a()(y.VC, n), children: r }) : r;
}
let L = { mass: 1, friction: 8, tension: 300 };
function D(e) {
    let { notification: t, index: n, locked: s, pinned: a, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: d,
                onDismissClick: c,
                onNotificationClick: _,
                onConfirmClick: h,
                onCancelClick: p,
                renderFooter: m,
                animationWrapperClassName: g,
            },
        } = t,
        A = r.useCallback(() => {
            d(u);
        }, [d, u]),
        I = r.useCallback(
            (e) => {
                E.A.updateNotificationStatus(u), c?.(e, u);
            },
            [u, c],
        ),
        { clickSpring: T, handleMouseClick: N } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, f.z)({
                    scale: e ? 0.975 : 1,
                    config: L,
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
                _?.(e, u), N();
            },
            [_, u, N],
        ),
        y = r.useCallback(
            (e) => {
                h?.(e, u);
            },
            [h, u],
        ),
        v = r.useCallback(
            (e) => {
                p?.(e, u);
            },
            [p, u],
        ),
        D = r.useCallback((e, t) => m?.(e, u, t), [m, u]),
        {
            props: {
                onNotificationShow: P,
                onDismissClick: w,
                renderFooter: M,
                onNotificationClick: x,
                onConfirmClick: U,
                onCancelClick: k,
                disableClickableRegions: G = !1,
                clickZoneClassName: V,
                ...F
            },
            status: B,
        } = t,
        j = !a && s,
        H = 0 === n && !G && !j,
        { ref: W, springs: Y } = (0, S.Ru)(t.id, o, l);
    return (0, i.jsx)(O, {
        transitionState: o,
        springs: Y,
        scaleOverride: T?.scale,
        index: n,
        locked: s,
        animationWrapperClassName: g,
        children: (0, i.jsx)(b, {
            observe: H,
            className: V,
            children: (0, i.jsx)(R, {
                ...F,
                title: "function" == typeof F.title ? F.title(I) : F.title,
                containerRef: W,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: I,
                onNotificationClick: C,
                onConfirmClick: null != h ? y : void 0,
                onCancelClick: null != p ? v : void 0,
                renderFooter: D,
                expand: !1,
                index: n,
                locked: s,
                status: B,
                contentOpacity: Y.contentOpacity,
            }),
        }),
    });
}
