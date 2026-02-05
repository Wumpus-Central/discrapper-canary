"use strict";
n.d(t, { $: () => I, A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(311907),
    u = n(397927),
    c = n(684013),
    d = n(569626),
    _ = n(302614),
    f = n(395011),
    p = n(222506),
    h = n(57019),
    m = n(652215),
    g = n(985018),
    E = n(879716);
function A(e) {
    e.currentTarget.scrollTo(0, 0);
}
let I = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: c,
            onConfirmClick: _,
            onCancelClick: h,
            onNotificationClick: I,
            hint: T,
            cancelText: y,
            confirmText: S,
            icon: v,
            body: C,
            title: b,
            renderFooter: N,
            contentOpacity: R,
            status: O,
            containerRef: D,
            className: L,
            wrapperClassName: w,
        } = e,
        [x, P] = i.useState(!1),
        M = n || x || O === m.yFH.FOCUSED,
        k = (0, l.bG)([p.A, f.A], () => p.A.isInputLocked(f.A.getTargetPID()));
    i.useEffect(() => {
        a?.();
    }, [a]);
    let U = i.useCallback(
            (e) => {
                e.stopPropagation(), c?.(e);
            },
            [c],
        ),
        G = i.useCallback(
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
        F = i.useCallback(() => {
            P(!0);
        }, []),
        B = i.useCallback(() => {
            P(!1);
        }, []);
    function j() {
        return (0, r.jsx)(d.A, { className: E.r, onDismiss: U, "aria-label": g.intl.string(g.t.LnEgqX) });
    }
    function H() {
        let e = "function" == typeof T ? T(M, k) : T;
        return null != T
            ? (0, r.jsx)(u.Text, { className: E.aK, color: "text-muted", variant: "text-xxs/medium", children: e })
            : null;
    }
    function Y() {
        return null == _ && null == h
            ? null
            : (0, r.jsxs)("div", {
                  className: E.UD,
                  children: [
                      null != _
                          ? (0, r.jsx)("div", {
                                className: E.x6,
                                children: (0, r.jsx)(u.Button, {
                                    size: "sm",
                                    variant: "active",
                                    onClick: G,
                                    text: S ?? g.intl.string(g.t.BddRzS),
                                }),
                            })
                          : null,
                      null != h
                          ? (0, r.jsx)("div", {
                                className: E.x6,
                                children: (0, r.jsx)(u.Button, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: V,
                                    text: y ?? g.intl.string(g.t["ETE/oC"]),
                                }),
                            })
                          : null,
                  ],
              });
    }
    function W() {
        return null == v
            ? null
            : "string" == typeof v
              ? (0, r.jsx)(u.euF, { src: v, size: u._3J.SIZE_40, className: E.my, "aria-hidden": !0 })
              : (0, r.jsx)("div", { className: E.my, children: v });
    }
    function K() {
        let e = N?.(M, k);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(o.animated.div, {
                    className: E.VM,
                    style: { opacity: R },
                    children: [
                        W(),
                        (0, r.jsxs)("div", {
                            className: E.zH,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/semibold",
                                    lineClamp: 2,
                                    children: b,
                                }),
                                null != C
                                    ? (0, r.jsx)(u.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (M ? 2 : 1) : void 0,
                                          children: C,
                                      })
                                    : null,
                                H(),
                                Y(),
                            ],
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)(u.DUT, {
                        className: E.qr,
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
                className: s()(E.af, w),
                onScroll: A,
                children: (0, r.jsx)(u.DUT, {
                    innerRef: D,
                    ignoreKeyPress: !0,
                    onMouseOver: F,
                    onMouseLeave: B,
                    onClick: I,
                    className: s()(E.kL, { [E.vk]: null != I }, L),
                    children: K(),
                }),
            }),
            j(),
        ],
    });
});
function T(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: a },
        scaleOverride: l,
        index: u,
        children: c,
        locked: d,
        animationWrapperClassName: _,
    } = e;
    return (0, r.jsx)(o.animated.div, {
        className: s()(E.k$, _),
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
function y(e) {
    let { observe: t, children: n } = e;
    return t ? (0, r.jsx)(_.A, { className: E.VC, children: n }) : n;
}
let S = { mass: 1, friction: 8, tension: 300 };
function v() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, u.zhh)({
            scale: e ? 0.975 : 1,
            config: S,
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
function C(e) {
    let { notification: t, index: n, locked: a, pinned: s, transitionState: o, cleanUp: l } = e,
        {
            id: u,
            props: {
                onNotificationShow: d,
                onDismissClick: _,
                onNotificationClick: f,
                onConfirmClick: p,
                onCancelClick: m,
                renderFooter: g,
                animationWrapperClassName: E,
            },
        } = t,
        A = i.useCallback(() => {
            d(u);
        }, [d, u]),
        S = i.useCallback(
            (e) => {
                c.A.updateNotificationStatus(u), _?.(e, u);
            },
            [u, _],
        ),
        { clickSpring: C, handleMouseClick: b } = v(),
        N = i.useCallback(
            (e) => {
                f?.(e, u), b();
            },
            [f, u, b],
        ),
        R = i.useCallback(
            (e) => {
                p?.(e, u);
            },
            [p, u],
        ),
        O = i.useCallback(
            (e) => {
                m?.(e, u);
            },
            [m, u],
        ),
        D = i.useCallback((e, t) => g?.(e, u, t), [g, u]),
        {
            props: {
                onNotificationShow: L,
                onDismissClick: w,
                renderFooter: x,
                onNotificationClick: P,
                onConfirmClick: M,
                onCancelClick: k,
                disableClickableRegions: U = !1,
                ...G
            },
            status: V,
        } = t,
        F = !s && a,
        B = 0 === n && !U && !F,
        { ref: j, springs: H } = (0, h.Ru)(t.id, o, l);
    return (0, r.jsx)(T, {
        transitionState: o,
        springs: H,
        scaleOverride: C?.scale,
        index: n,
        locked: a,
        animationWrapperClassName: E,
        children: (0, r.jsx)(y, {
            observe: B,
            children: (0, r.jsx)(I, {
                ...G,
                title: "function" == typeof G.title ? G.title(S) : G.title,
                containerRef: j,
                notificationId: t.id,
                onNotificationShow: 0 === n ? A : void 0,
                onDismissClick: S,
                onNotificationClick: N,
                onConfirmClick: null != p ? R : void 0,
                onCancelClick: null != m ? O : void 0,
                renderFooter: D,
                expand: !1,
                index: n,
                locked: a,
                status: V,
                contentOpacity: H.contentOpacity,
            }),
        }),
    });
}
