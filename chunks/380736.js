n.d(t, {
    Y: () => A,
    Z: () => w,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(442837),
    c = n(481060),
    u = n(13245),
    d = n(691891),
    f = n(333031),
    p = n(610394),
    _ = n(322155),
    m = n(693091),
    h = n(981631),
    g = n(388032),
    E = n(968803);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e) {
    e.currentTarget.scrollTo(0, 0);
}
let A = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: u,
            onConfirmClick: f,
            onCancelClick: m,
            onNotificationClick: b,
            hint: y,
            cancelText: O,
            confirmText: v,
            icon: S,
            body: I,
            title: A,
            renderFooter: C,
            contentOpacity: N,
            status: P,
            containerRef: R,
            className: w,
            wrapperClassName: D,
        } = e,
        [x, L] = i.useState(!1),
        j = n || x || P === h._1z.FOCUSED,
        M = (0, l.e7)([_.Z, p.Z], () => _.Z.isInputLocked(p.Z.getTargetPID()));
    i.useEffect(() => {
        null == a || a();
    }, [a]);
    let k = i.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u],
        ),
        U = i.useCallback(
            (e) => {
                e.stopPropagation(), null == f || f(e);
            },
            [f],
        ),
        G = i.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m],
        ),
        Z = i.useCallback(() => {
            L(!0);
        }, []),
        B = i.useCallback(() => {
            L(!1);
        }, []);
    function F() {
        return (0, r.jsx)(d.Z, {
            className: E.dismissButton,
            onDismiss: k,
            "aria-label": g.intl.string(g.t.LnEgqX),
        });
    }
    function V() {
        let e = "function" == typeof y ? y(j, M) : y;
        return null != y
            ? (0, r.jsx)(c.Text, {
                  className: E.hint,
                  color: "text-muted",
                  variant: "text-xxs/medium",
                  children: e,
              })
            : null;
    }
    function H() {
        return null == f && null == m
            ? null
            : (0, r.jsxs)("div", {
                  className: E.buttonContainer,
                  children: [
                      null != f
                          ? (0, r.jsx)("div", {
                                className: E.button,
                                children: (0, r.jsx)(c.Button, {
                                    size: "sm",
                                    variant: "active",
                                    onClick: U,
                                    text: null != v ? v : g.intl.string(g.t.BddRzS),
                                }),
                            })
                          : null,
                      null != m
                          ? (0, r.jsx)("div", {
                                className: E.button,
                                children: (0, r.jsx)(c.Button, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: G,
                                    text: null != O ? O : g.intl.string(g.t["ETE/oC"]),
                                }),
                            })
                          : null,
                  ],
              });
    }
    function Y() {
        return null == S
            ? null
            : "string" == typeof S
              ? (0, r.jsx)(c.qEK, {
                    src: S,
                    size: c.EFr.SIZE_40,
                    className: E.avatar,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: E.avatar,
                    children: S,
                });
    }
    function W() {
        let e = null == C ? void 0 : C(j, M);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(s.animated.div, {
                    className: E.iconAndDetails,
                    style: { opacity: N },
                    children: [
                        Y(),
                        (0, r.jsxs)("div", {
                            className: E.details,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/semibold",
                                    lineClamp: 2,
                                    children: A,
                                }),
                                null != I
                                    ? (0, r.jsx)(c.Text, {
                                          color: "interactive-normal",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (j ? 2 : 1) : void 0,
                                          children: I,
                                      })
                                    : null,
                                V(),
                                H(),
                            ],
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)(c.P3F, {
                        className: E.footer,
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
                className: o()(E.overflowWrapper, D),
                onScroll: T,
                children: (0, r.jsx)(c.P3F, {
                    innerRef: R,
                    ignoreKeyPress: !0,
                    onMouseOver: Z,
                    onMouseLeave: B,
                    onClick: b,
                    className: o()(E.container, { [E.clickable]: null != b }, w),
                    children: W(),
                }),
            }),
            F(),
        ],
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: a },
        scaleOverride: l,
        index: c,
        children: u,
        locked: d,
        animationWrapperClassName: f,
    } = e;
    return (0, r.jsx)(s.animated.div, {
        className: o()(E.animationWrapper, f),
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
function N(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, r.jsx)(f.Z, {
              className: E.clickZone,
              children: n,
          })
        : n;
}
let P = {
    mass: 1,
    friction: 8,
    tension: 300,
};
function R() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, c.q_F)({
            scale: e ? 0.975 : 1,
            config: P,
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
function w(e) {
    let { notification: t, index: n, locked: a, pinned: o, transitionState: s, cleanUp: l } = e,
        {
            id: c,
            props: {
                onNotificationShow: d,
                onDismissClick: f,
                onNotificationClick: p,
                onConfirmClick: _,
                onCancelClick: h,
                renderFooter: g,
                animationWrapperClassName: E,
            },
        } = t,
        b = i.useCallback(() => {
            d(c);
        }, [d, c]),
        O = i.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(c), null == f || f(e, c);
            },
            [c, f],
        ),
        { clickSpring: I, handleMouseClick: T } = R(),
        P = i.useCallback(
            (e) => {
                null == p || p(e, c), T();
            },
            [p, c, T],
        ),
        w = i.useCallback(
            (e) => {
                null == _ || _(e, c);
            },
            [_, c],
        ),
        D = i.useCallback(
            (e) => {
                null == h || h(e, c);
            },
            [h, c],
        ),
        x = i.useCallback((e, t) => (null == g ? void 0 : g(e, c, t)), [g, c]),
        {
            props: {
                onNotificationShow: L,
                onDismissClick: j,
                renderFooter: M,
                onNotificationClick: k,
                onConfirmClick: U,
                onCancelClick: G,
                disableClickableRegions: Z = !1,
            },
            status: B,
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
        H = 0 === n && !Z && !V,
        { ref: Y, springs: W } = (0, m.X4)(t.id, s, l);
    return (0, r.jsx)(C, {
        transitionState: s,
        springs: W,
        scaleOverride: null == I ? void 0 : I.scale,
        index: n,
        locked: a,
        animationWrapperClassName: E,
        children: (0, r.jsx)(N, {
            observe: H,
            children: (0, r.jsx)(
                A,
                v(y({}, F), {
                    title: "function" == typeof F.title ? F.title(O) : F.title,
                    containerRef: Y,
                    notificationId: t.id,
                    onNotificationShow: 0 === n ? b : void 0,
                    onDismissClick: O,
                    onNotificationClick: P,
                    onConfirmClick: null != _ ? w : void 0,
                    onCancelClick: null != h ? D : void 0,
                    renderFooter: x,
                    expand: !1,
                    index: n,
                    locked: a,
                    status: B,
                    contentOpacity: W.contentOpacity,
                }),
            ),
        }),
    });
}
