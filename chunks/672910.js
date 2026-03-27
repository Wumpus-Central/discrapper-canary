"use strict";
n.d(t, { $: () => I, A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(311907),
    u = n(397927),
    c = n(684013),
    d = n(569626),
    _ = n(302614),
    f = n(395011),
    p = n(222506),
    h = n(57019),
    m = n(652215),
    E = n(985018),
    g = n(654249);
function A(e) {
    e.currentTarget.scrollTo(0, 0);
}
let I = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: s,
            onDismissClick: c,
            onConfirmClick: _,
            onCancelClick: h,
            onNotificationClick: I,
            hint: T,
            cancelText: S,
            confirmText: y,
            icon: v,
            body: N,
            title: C,
            renderFooter: R,
            contentOpacity: O,
            status: b,
            containerRef: D,
            className: L,
            wrapperClassName: w,
            unreadAccessory: M,
        } = e,
        [P, x] = i.useState(!1),
        k = n || P || b === m.yFH.FOCUSED,
        U = (0, l.bG)([p.A, f.A], () => p.A.isInputLocked(f.A.getTargetPID()));
    i.useEffect(() => {
        s?.();
    }, [s]);
    let G = i.useCallback(
            (e) => {
                e.stopPropagation(), c?.(e);
            },
            [c],
        ),
        F = i.useCallback(
            (e) => {
                e.stopPropagation(), _?.(e);
            },
            [_],
        ),
        V = i.useCallback(
            (e) => {
                e.stopPropagation(), h?.(e);
            },
            [h],
        ),
        B = i.useCallback(() => {
            x(!0);
        }, []),
        H = i.useCallback(() => {
            x(!1);
        }, []);
    function j() {
        return (0, r.jsx)(d.A, { className: g.r, onDismiss: G, "aria-label": E.intl.string(E.t.LnEgqX) });
    }
    function Y() {
        let e = "function" == typeof T ? T(k, U) : T;
        return null != T
            ? (0, r.jsx)(u.Text, { className: g.aK, color: "text-muted", variant: "text-xxs/medium", children: e })
            : null;
    }
    function W() {
        return null == _ && null == h
            ? null
            : (0, r.jsxs)("div", {
                  className: g.UD,
                  children: [
                      null != _
                          ? (0, r.jsx)("div", {
                                className: g.x6,
                                children: (0, r.jsx)(u.Button, {
                                    size: "sm",
                                    variant: "active",
                                    onClick: F,
                                    text: y ?? E.intl.string(E.t.BddRzS),
                                }),
                            })
                          : null,
                      null != h
                          ? (0, r.jsx)("div", {
                                className: g.x6,
                                children: (0, r.jsx)(u.Button, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: V,
                                    text: S ?? E.intl.string(E.t["ETE/oC"]),
                                }),
                            })
                          : null,
                  ],
              });
    }
    function K() {
        return null == v
            ? null
            : "string" == typeof v
              ? (0, r.jsx)(u.euF, { src: v, size: u._3J.SIZE_40, className: g.my, "aria-hidden": !0 })
              : (0, r.jsx)("div", { className: g.my, children: v });
    }
    function $() {
        let e = R?.(k, U);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(o.animated.div, {
                    className: g.VM,
                    style: { opacity: O },
                    children: [
                        K(),
                        (0, r.jsxs)("div", {
                            className: g.zH,
                            children: [
                                null != C
                                    ? (0, r.jsx)(u.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/semibold",
                                          lineClamp: 2,
                                          children: C,
                                      })
                                    : null,
                                null != N
                                    ? (0, r.jsx)(u.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (k ? 2 : 1) : void 0,
                                          children: N,
                                      })
                                    : null,
                                Y(),
                                W(),
                            ],
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)(u.DUT, {
                        className: g.qr,
                        ignoreKeyPress: !0,
                        onClick: (e) => e.stopPropagation(),
                        children: e,
                    }),
            ],
        });
    }
    function z() {
        return null == M ? null : (0, r.jsx)("div", { className: g.B3, children: M(P) });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(g.af, w),
                onScroll: A,
                children: [
                    (0, r.jsx)(u.DUT, {
                        innerRef: D,
                        ignoreKeyPress: !0,
                        onMouseOver: B,
                        onMouseLeave: H,
                        onClick: I,
                        className: a()(g.kL, { [g.vk]: null != I }, L),
                        children: $(),
                    }),
                    z(),
                ],
            }),
            j(),
        ],
    });
});
function T(e) {
    let {
            springs: { opacity: t, scale: n, transform: i, height: s },
            scaleOverride: l,
            index: u,
            children: c,
            locked: d,
            animationWrapperClassName: _,
        } = e,
        f = d && 0 !== u;
    return (0, r.jsx)(o.animated.div, {
        className: a()(g.k$, f && g.fF, _),
        style: {
            pointerEvents: d && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: i.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: s,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: c,
    });
}
function S(e) {
    let { observe: t, className: n, children: i } = e;
    return t ? (0, r.jsx)(_.A, { className: a()(g.VC, n), children: i }) : i;
}
let y = { mass: 1, friction: 8, tension: 300 };
function v() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        s = (0, u.zhh)({
            scale: e ? 0.975 : 1,
            config: y,
            onRest: () => {
                t(!1),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            },
        });
    return {
        clickSpring: n ? s : void 0,
        handleMouseClick: i.useCallback(() => {
            r(!0), t(!0);
        }, []),
    };
}
function N(e) {
    let { notification: t, index: n, locked: s, pinned: a, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: d,
                onDismissClick: _,
                onNotificationClick: f,
                onConfirmClick: p,
                onCancelClick: m,
                renderFooter: E,
                animationWrapperClassName: g,
            },
        } = t,
        A = i.useCallback(() => {
            d(u);
        }, [d, u]),
        y = i.useCallback(
            (e) => {
                c.A.updateNotificationStatus(u), _?.(e, u);
            },
            [u, _],
        ),
        { clickSpring: N, handleMouseClick: C } = v(),
        R = i.useCallback(
            (e) => {
                f?.(e, u), C();
            },
            [f, u, C],
        ),
        O = i.useCallback(
            (e) => {
                p?.(e, u);
            },
            [p, u],
        ),
        b = i.useCallback(
            (e) => {
                m?.(e, u);
            },
            [m, u],
        ),
        D = i.useCallback((e, t) => E?.(e, u, t), [E, u]),
        {
            props: {
                onNotificationShow: L,
                onDismissClick: w,
                renderFooter: M,
                onNotificationClick: P,
                onConfirmClick: x,
                onCancelClick: k,
                disableClickableRegions: U = !1,
                clickZoneClassName: G,
                ...F
            },
            status: V,
        } = t,
        B = !a && s,
        H = 0 === n && !U && !B,
        { ref: j, springs: Y } = (0, h.Ru)(t.id, o, l);
    return (0, r.jsx)(T, {
        transitionState: o,
        springs: Y,
        scaleOverride: N?.scale,
        index: n,
        locked: s,
        animationWrapperClassName: g,
        children: (0, r.jsx)(S, {
            observe: H,
            className: G,
            children: (0, r.jsx)(I, {
                ...F,
                title: "function" == typeof F.title ? F.title(y) : F.title,
                containerRef: j,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: y,
                onNotificationClick: R,
                onConfirmClick: null != p ? O : void 0,
                onCancelClick: null != m ? b : void 0,
                renderFooter: D,
                expand: !1,
                index: n,
                locked: s,
                status: V,
                contentOpacity: Y.contentOpacity,
            }),
        }),
    });
}
