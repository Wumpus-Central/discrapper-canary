"use strict";
n.d(t, { $: () => y, A: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(17928),
    d = n(834730),
    _ = n(821609),
    u = n(97808),
    c = n(778712),
    E = n(939249),
    h = n(717421),
    m = n(684013),
    f = n(789645),
    g = n(361147);
let p = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(E.D, {
        role: "button",
        onClick: n,
        className: a()(g.r, t),
        "aria-label": r,
        children: (0, i.jsx)(f.P, { size: "xs", color: "currentColor", colorClass: g.M }),
    });
};
p.displayName = "DismissButton";
var A = n(302614),
    I = n(489277),
    T = n(222506),
    S = n(57019),
    N = n(652215),
    C = n(985018),
    R = n(70617);
function O(e) {
    e.currentTarget.scrollTo(0, 0);
}
let y = r.memo(function (e) {
    let t,
        n,
        {
            maxBodyLines: s,
            expand: h = !1,
            onNotificationShow: m,
            onDismissClick: f,
            onConfirmClick: g,
            onCancelClick: A,
            onNotificationClick: S,
            hint: y,
            cancelText: v,
            confirmText: D,
            icon: L,
            body: b,
            title: w,
            renderFooter: P,
            contentOpacity: k,
            status: M,
            containerRef: U,
            className: x,
            wrapperClassName: G,
            unreadAccessory: V,
        } = e,
        [F, B] = r.useState(!1),
        H = h || F || M === N.yFH.FOCUSED,
        j = (0, l.bG)([T.A, I.A], () => T.A.isInputLocked(I.A.getTargetPID()));
    r.useEffect(() => {
        m?.();
    }, [m]);
    let W = r.useCallback(
            (e) => {
                e.stopPropagation(), f?.(e);
            },
            [f],
        ),
        Y = r.useCallback(
            (e) => {
                e.stopPropagation(), g?.(e);
            },
            [g],
        ),
        K = r.useCallback(
            (e) => {
                e.stopPropagation(), A?.(e);
            },
            [A],
        ),
        z = r.useCallback(() => {
            B(!0);
        }, []),
        $ = r.useCallback(() => {
            B(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(R.af, G),
                onScroll: O,
                children: [
                    (0, i.jsx)(E.D, {
                        innerRef: U,
                        ignoreKeyPress: !0,
                        onMouseOver: z,
                        onMouseLeave: $,
                        onClick: S,
                        className: a()(R.kL, { [R.vk]: null != S }, x),
                        children:
                            ((t = P?.(H, j)),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(o.animated.div, {
                                        className: R.VM,
                                        style: { opacity: k },
                                        children: [
                                            null == L
                                                ? null
                                                : "string" == typeof L
                                                  ? (0, i.jsx)(u.eu, {
                                                        src: L,
                                                        size: c._3.SIZE_40,
                                                        className: R.my,
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, i.jsx)("div", { className: R.my, children: L }),
                                            (0, i.jsxs)("div", {
                                                className: R.zH,
                                                children: [
                                                    null != w
                                                        ? (0, i.jsx)(d.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/semibold",
                                                              lineClamp: 2,
                                                              children: w,
                                                          })
                                                        : null,
                                                    null != b
                                                        ? (0, i.jsx)(d.E, {
                                                              color: "interactive-text-default",
                                                              variant: "text-sm/normal",
                                                              lineClamp: null != s ? s * (H ? 2 : 1) : void 0,
                                                              children: b,
                                                          })
                                                        : null,
                                                    ((n = "function" == typeof y ? y(H, j) : y),
                                                    null != y
                                                        ? (0, i.jsx)(d.E, {
                                                              className: R.aK,
                                                              color: "text-muted",
                                                              variant: "text-xxs/medium",
                                                              children: n,
                                                          })
                                                        : null),
                                                    null == g && null == A
                                                        ? null
                                                        : (0, i.jsxs)("div", {
                                                              className: R.UD,
                                                              children: [
                                                                  null != g
                                                                      ? (0, i.jsx)("div", {
                                                                            className: R.x6,
                                                                            children: (0, i.jsx)(_.$, {
                                                                                size: "sm",
                                                                                variant: "active",
                                                                                onClick: Y,
                                                                                text: D ?? C.intl.string(C.t.BddRzS),
                                                                            }),
                                                                        })
                                                                      : null,
                                                                  null != A
                                                                      ? (0, i.jsx)("div", {
                                                                            className: R.x6,
                                                                            children: (0, i.jsx)(_.$, {
                                                                                size: "sm",
                                                                                variant: "secondary",
                                                                                onClick: K,
                                                                                text: v ?? C.intl.string(C.t["ETE/oC"]),
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
                                        (0, i.jsx)(E.D, {
                                            className: R.qr,
                                            ignoreKeyPress: !0,
                                            onClick: (e) => e.stopPropagation(),
                                            children: t,
                                        }),
                                ],
                            })),
                    }),
                    null == V ? null : (0, i.jsx)("div", { className: R.B3, children: V(F) }),
                ],
            }),
            (0, i.jsx)(p, { className: R.r, onDismiss: W, "aria-label": C.intl.string(C.t.LnEgqX) }),
        ],
    });
});
function v(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: s },
        scaleOverride: l,
        index: d,
        children: _,
        locked: u,
        animationWrapperClassName: c,
    } = e;
    return (0, i.jsx)(o.animated.div, {
        className: a()(R.k$, u && 0 !== d && R.fF, c),
        style: {
            pointerEvents: u && 0 !== d ? "none" : "auto",
            zIndex: Math.max(5 - d, 0),
            opacity: t,
            transform: r.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: s,
            maxWidth: 0 === d ? void 0 : "100%",
        },
        children: _,
    });
}
function D(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(A.A, { className: a()(R.VC, n), children: r }) : r;
}
let L = { mass: 1, friction: 8, tension: 300 };
function b(e) {
    let { notification: t, index: n, locked: s, pinned: a, transitionState: o, cleanUp: l } = e,
        {
            id: d,
            props: {
                onNotificationShow: _,
                onDismissClick: u,
                onNotificationClick: c,
                onConfirmClick: E,
                onCancelClick: f,
                renderFooter: g,
                animationWrapperClassName: p,
            },
        } = t,
        A = r.useCallback(() => {
            _(d);
        }, [_, d]),
        I = r.useCallback(
            (e) => {
                m.A.updateNotificationStatus(d), u?.(e, d);
            },
            [d, u],
        ),
        { clickSpring: T, handleMouseClick: N } = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, h.z)({
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
                c?.(e, d), N();
            },
            [c, d, N],
        ),
        R = r.useCallback(
            (e) => {
                E?.(e, d);
            },
            [E, d],
        ),
        O = r.useCallback(
            (e) => {
                f?.(e, d);
            },
            [f, d],
        ),
        b = r.useCallback((e, t) => g?.(e, d, t), [g, d]),
        {
            props: {
                onNotificationShow: w,
                onDismissClick: P,
                renderFooter: k,
                onNotificationClick: M,
                onConfirmClick: U,
                onCancelClick: x,
                disableClickableRegions: G = !1,
                clickZoneClassName: V,
                ...F
            },
            status: B,
        } = t,
        H = !a && s,
        j = 0 === n && !G && !H,
        { ref: W, springs: Y } = (0, S.Ru)(t.id, o, l);
    return (0, i.jsx)(v, {
        transitionState: o,
        springs: Y,
        scaleOverride: T?.scale,
        index: n,
        locked: s,
        animationWrapperClassName: p,
        children: (0, i.jsx)(D, {
            observe: j,
            className: V,
            children: (0, i.jsx)(y, {
                ...F,
                title: "function" == typeof F.title ? F.title(I) : F.title,
                containerRef: W,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: I,
                onNotificationClick: C,
                onConfirmClick: null != E ? R : void 0,
                onCancelClick: null != f ? O : void 0,
                renderFooter: b,
                expand: !1,
                index: n,
                locked: s,
                status: B,
                contentOpacity: Y.contentOpacity,
            }),
        }),
    });
}
