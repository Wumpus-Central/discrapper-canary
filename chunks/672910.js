"use strict";
n.d(t, { $: () => T, A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(311907),
    u = n(397927),
    c = n(684013),
    d = n(569626),
    _ = n(302614),
    f = n(395011),
    h = n(222506),
    p = n(57019),
    g = n(652215),
    E = n(985018),
    A = n(257758);
function I(e) {
    e.currentTarget.scrollTo(0, 0);
}
let T = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: c,
            onConfirmClick: _,
            onCancelClick: p,
            onNotificationClick: T,
            hint: y,
            cancelText: S,
            confirmText: v,
            icon: C,
            body: b,
            title: N,
            renderFooter: R,
            contentOpacity: O,
            status: D,
            containerRef: L,
            className: w,
            wrapperClassName: x,
        } = e,
        [P, M] = i.useState(!1),
        k = n || P || D === g.yFH.FOCUSED,
        U = (0, l.bG)([h.A, f.A], () => h.A.isInputLocked(f.A.getTargetPID()));
    i.useEffect(() => {
        a?.();
    }, [a]);
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
                e.stopPropagation(), p?.(e);
            },
            [p],
        ),
        B = i.useCallback(() => {
            M(!0);
        }, []),
        j = i.useCallback(() => {
            M(!1);
        }, []);
    function H() {
        return (0, r.jsx)(d.A, { className: A.r, onDismiss: G, "aria-label": E.intl.string(E.t.LnEgqX) });
    }
    function Y() {
        let e = "function" == typeof y ? y(k, U) : y;
        return null != y
            ? (0, r.jsx)(u.Text, { className: A.aK, color: "text-muted", variant: "text-xxs/medium", children: e })
            : null;
    }
    function W() {
        return null == _ && null == p
            ? null
            : (0, r.jsxs)("div", {
                  className: A.UD,
                  children: [
                      null != _
                          ? (0, r.jsx)("div", {
                                className: A.x6,
                                children: (0, r.jsx)(u.Button, {
                                    size: "sm",
                                    variant: "active",
                                    onClick: F,
                                    text: v ?? E.intl.string(E.t.BddRzS),
                                }),
                            })
                          : null,
                      null != p
                          ? (0, r.jsx)("div", {
                                className: A.x6,
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
        return null == C
            ? null
            : "string" == typeof C
              ? (0, r.jsx)(u.euF, { src: C, size: u._3J.SIZE_40, className: A.my, "aria-hidden": !0 })
              : (0, r.jsx)("div", { className: A.my, children: C });
    }
    function $() {
        let e = R?.(k, U);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(o.animated.div, {
                    className: A.VM,
                    style: { opacity: O },
                    children: [
                        K(),
                        (0, r.jsxs)("div", {
                            className: A.zH,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/semibold",
                                    lineClamp: 2,
                                    children: N,
                                }),
                                null != b
                                    ? (0, r.jsx)(u.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (k ? 2 : 1) : void 0,
                                          children: b,
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
                        className: A.qr,
                        ignoreKeyPress: !0,
                        onClick: (e) => e.stopPropagation(),
                        children: e,
                    }),
            ],
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: s()(A.af, x),
                onScroll: I,
                children: (0, r.jsx)(u.DUT, {
                    innerRef: L,
                    ignoreKeyPress: !0,
                    onMouseOver: B,
                    onMouseLeave: j,
                    onClick: T,
                    className: s()(A.kL, { [A.vk]: null != T }, w),
                    children: $(),
                }),
            }),
            H(),
        ],
    });
});
function y(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: a },
        scaleOverride: l,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: _,
    } = e;
    return (0, r.jsx)(o.animated.div, {
        className: s()(A.k$, _),
        style: {
            pointerEvents: d && 0 !== u ? "none" : "auto",
            zIndex: Math.max(5 - u, 0),
            opacity: t,
            transform: i.to((e) => `translate3d(0, ${e}px, 0)`),
            scale: l ?? n.to([0, 1], [0.7, 1]),
            height: a,
            maxWidth: 0 === u ? void 0 : "100%",
        },
        children: c,
    });
}
function S(e) {
    let { observe: t, className: n, children: i } = e;
    return t ? (0, r.jsx)(_.A, { className: s()(A.VC, n), children: i }) : i;
}
let v = { mass: 1, friction: 8, tension: 300 };
function C() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, u.zhh)({
            scale: e ? 0.975 : 1,
            config: v,
            onRest: () => {
                t(!1),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            },
        });
    return {
        clickSpring: n ? a : void 0,
        handleMouseClick: i.useCallback(() => {
            r(!0), t(!0);
        }, []),
    };
}
function b(e) {
    let { notification: t, index: n, locked: a, pinned: s, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: d,
                onDismissClick: _,
                onNotificationClick: f,
                onConfirmClick: h,
                onCancelClick: g,
                renderFooter: E,
                animationWrapperClassName: A,
            },
        } = t,
        I = i.useCallback(() => {
            d(u);
        }, [d, u]),
        v = i.useCallback(
            (e) => {
                c.A.updateNotificationStatus(u), _?.(e, u);
            },
            [u, _],
        ),
        { clickSpring: b, handleMouseClick: N } = C(),
        R = i.useCallback(
            (e) => {
                f?.(e, u), N();
            },
            [f, u, N],
        ),
        O = i.useCallback(
            (e) => {
                h?.(e, u);
            },
            [h, u],
        ),
        D = i.useCallback(
            (e) => {
                g?.(e, u);
            },
            [g, u],
        ),
        L = i.useCallback((e, t) => E?.(e, u, t), [E, u]),
        {
            props: {
                onNotificationShow: w,
                onDismissClick: x,
                renderFooter: P,
                onNotificationClick: M,
                onConfirmClick: k,
                onCancelClick: U,
                disableClickableRegions: G = !1,
                clickZoneClassName: F,
                ...V
            },
            status: B,
        } = t,
        j = !s && a,
        H = 0 === n && !G && !j,
        { ref: Y, springs: W } = (0, p.Ru)(t.id, o, l);
    return (0, r.jsx)(y, {
        transitionState: o,
        springs: W,
        scaleOverride: b?.scale,
        index: n,
        locked: a,
        animationWrapperClassName: A,
        children: (0, r.jsx)(S, {
            observe: H,
            className: F,
            children: (0, r.jsx)(T, {
                ...V,
                title: "function" == typeof V.title ? V.title(v) : V.title,
                containerRef: Y,
                notificationId: t.id,
                onNotificationShow: 0 === n ? I : void 0,
                onDismissClick: v,
                onNotificationClick: R,
                onConfirmClick: null != h ? O : void 0,
                onCancelClick: null != g ? D : void 0,
                renderFooter: L,
                expand: !1,
                index: n,
                locked: a,
                status: B,
                contentOpacity: W.contentOpacity,
            }),
        }),
    });
}
