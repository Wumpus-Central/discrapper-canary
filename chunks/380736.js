n.d(t, {
    Y: () => N,
    Z: () => x,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(13941),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(13245),
    f = n(145597),
    _ = n(691891),
    p = n(333031),
    h = n(610394),
    m = n(322155),
    g = n(693091),
    E = n(981631),
    b = n(388032),
    y = n(968803);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function C(e) {
    e.currentTarget.scrollTo(0, 0);
}
let N = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: d,
            onConfirmClick: p,
            onCancelClick: g,
            onNotificationClick: O,
            hint: v,
            cancelText: I,
            confirmText: T,
            icon: S,
            body: A,
            title: N,
            renderFooter: R,
            contentOpacity: P,
            status: w,
            containerRef: D,
            className: x,
            wrapperClassName: L,
        } = e,
        [M, j] = i.useState(!1),
        k = n || M || w === E._1z.FOCUSED,
        U = (0, l.e7)([m.Z, h.Z], () => {
            var e;
            return m.Z.isInputLocked(null != (e = h.Z.getFocusedPID()) ? e : (0, f.getPID)());
        });
    i.useEffect(() => {
        null == a || a();
    }, [a]);
    let G = i.useCallback(
            (e) => {
                e.stopPropagation(), null == d || d(e);
            },
            [d],
        ),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(), null == p || p(e);
            },
            [p],
        ),
        Z = i.useCallback(
            (e) => {
                e.stopPropagation(), null == g || g(e);
            },
            [g],
        ),
        F = i.useCallback(() => {
            j(!0);
        }, []),
        V = i.useCallback(() => {
            j(!1);
        }, []);
    function H() {
        return (0, r.jsx)(_.Z, {
            className: y.dismissButton,
            onDismiss: G,
            "aria-label": b.intl.string(b.t.LnEgqX),
        });
    }
    function Y() {
        let e = "function" == typeof v ? v(k, U) : v;
        return null != v
            ? (0, r.jsx)(u.Text, {
                  className: y.hint,
                  color: "text-muted",
                  variant: "text-xxs/medium",
                  children: e,
              })
            : null;
    }
    function W() {
        return null == p && null == g
            ? null
            : (0, r.jsxs)("div", {
                  className: y.buttonContainer,
                  children: [
                      null != p
                          ? (0, r.jsx)(c.zx, {
                                className: y.button,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.GREEN,
                                onClick: B,
                                children: null != T ? T : b.intl.string(b.t.BddRzS),
                            })
                          : null,
                      null != g
                          ? (0, r.jsx)(c.zx, {
                                className: y.button,
                                size: c.zx.Sizes.SMALL,
                                look: c.zx.Looks.OUTLINED,
                                color: c.zx.Colors.PRIMARY,
                                onClick: Z,
                                children: null != I ? I : b.intl.string(b.t["ETE/oC"]),
                            })
                          : null,
                  ],
              });
    }
    function K() {
        return null == S
            ? null
            : "string" == typeof S
              ? (0, r.jsx)(u.qEK, {
                    src: S,
                    size: u.EFr.SIZE_40,
                    className: y.avatar,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: y.avatar,
                    children: S,
                });
    }
    function z() {
        let e = null == R ? void 0 : R(k, U);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(s.animated.div, {
                    className: y.iconAndDetails,
                    style: { opacity: P },
                    children: [
                        K(),
                        (0, r.jsxs)("div", {
                            className: y.details,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/semibold",
                                    lineClamp: 2,
                                    children: N,
                                }),
                                null != A
                                    ? (0, r.jsx)(u.Text, {
                                          color: "interactive-normal",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (k ? 2 : 1) : void 0,
                                          children: A,
                                      })
                                    : null,
                                Y(),
                                W(),
                            ],
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)(u.P3F, {
                        className: y.footer,
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
                className: o()(y.overflowWrapper, L),
                onScroll: C,
                children: (0, r.jsx)(u.P3F, {
                    innerRef: D,
                    ignoreKeyPress: !0,
                    onMouseOver: F,
                    onMouseLeave: V,
                    onClick: O,
                    className: o()(y.container, { [y.clickable]: null != O }, x),
                    children: z(),
                }),
            }),
            H(),
        ],
    });
});
function R(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: a },
        scaleOverride: l,
        index: c,
        children: u,
        locked: d,
        animationWrapperClassName: f,
    } = e;
    return (0, r.jsx)(s.animated.div, {
        className: o()(y.animationWrapper, f),
        style: {
            pointerEvents: d && 0 !== c ? "none" : "auto",
            zIndex: Math.max(5 - c, 0),
            opacity: t,
            transform: i.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: null != l ? l : n.to([0, 1], [0.7, 1]),
            height: a,
            maxWidth: 0 === c ? void 0 : "100%",
        },
        children: u,
    });
}
function P(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, r.jsx)(p.Z, {
              className: y.clickZone,
              children: n,
          })
        : n;
}
let w = {
    mass: 1,
    friction: 8,
    tension: 300,
};
function D() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, u.q_F)({
            scale: e ? 0.975 : 1,
            config: w,
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
function x(e) {
    let { notification: t, index: n, locked: a, pinned: o, transitionState: s, cleanUp: l } = e,
        {
            id: c,
            props: {
                onNotificationShow: u,
                onDismissClick: f,
                onNotificationClick: _,
                onConfirmClick: p,
                onCancelClick: h,
                renderFooter: m,
                animationWrapperClassName: E,
            },
        } = t,
        b = i.useCallback(() => {
            u(c);
        }, [u, c]),
        y = i.useCallback(
            (e) => {
                d.Z.updateNotificationStatus(c), null == f || f(e, c);
            },
            [c, f],
        ),
        { clickSpring: O, handleMouseClick: I } = D(),
        A = i.useCallback(
            (e) => {
                null == _ || _(e, c), I();
            },
            [_, c, I],
        ),
        C = i.useCallback(
            (e) => {
                null == p || p(e, c);
            },
            [p, c],
        ),
        w = i.useCallback(
            (e) => {
                null == h || h(e, c);
            },
            [h, c],
        ),
        x = i.useCallback((e, t) => (null == m ? void 0 : m(e, c, t)), [m, c]),
        {
            props: {
                onNotificationShow: L,
                onDismissClick: M,
                renderFooter: j,
                onNotificationClick: k,
                onConfirmClick: U,
                onCancelClick: G,
                disableClickableRegions: B = !1,
            },
            status: Z,
        } = t,
        F = S(t.props, [
            "onNotificationShow",
            "onDismissClick",
            "renderFooter",
            "onNotificationClick",
            "onConfirmClick",
            "onCancelClick",
            "disableClickableRegions",
        ]),
        V = !o && a,
        H = 0 === n && !B && !V,
        { ref: Y, springs: W } = (0, g.X4)(t.id, s, l);
    return (0, r.jsx)(R, {
        transitionState: s,
        springs: W,
        scaleOverride: null == O ? void 0 : O.scale,
        index: n,
        locked: a,
        animationWrapperClassName: E,
        children: (0, r.jsx)(P, {
            observe: H,
            children: (0, r.jsx)(
                N,
                T(v({}, F), {
                    title: "function" == typeof F.title ? F.title(y) : F.title,
                    containerRef: Y,
                    notificationId: t.id,
                    onNotificationShow: 0 === n ? b : void 0,
                    onDismissClick: y,
                    onNotificationClick: A,
                    onConfirmClick: null != p ? C : void 0,
                    onCancelClick: null != h ? w : void 0,
                    renderFooter: x,
                    expand: !1,
                    index: n,
                    locked: a,
                    status: Z,
                    contentOpacity: W.contentOpacity,
                }),
            ),
        }),
    });
}
