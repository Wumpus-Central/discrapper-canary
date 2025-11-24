n.d(t, {
    Y: () => A,
    Z: () => D,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(790519),
    l = n(442837),
    c = n(481060),
    u = n(13245),
    d = n(691891),
    f = n(333031),
    _ = n(610394),
    p = n(322155),
    h = n(693091),
    m = n(981631),
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
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    e.currentTarget.scrollTo(0, 0);
}
let A = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: u,
            onConfirmClick: f,
            onCancelClick: h,
            onNotificationClick: b,
            hint: y,
            cancelText: O,
            confirmText: v,
            icon: I,
            body: T,
            title: A,
            renderFooter: C,
            contentOpacity: N,
            status: R,
            containerRef: P,
            className: D,
            wrapperClassName: w,
        } = e,
        [L, x] = i.useState(!1),
        M = n || L || R === m._1z.FOCUSED,
        k = (0, l.e7)([p.Z, _.Z], () => p.Z.isInputLocked(_.Z.getTargetPID()));
    i.useEffect(() => {
        null == a || a();
    }, [a]);
    let j = i.useCallback(
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
                e.stopPropagation(), null == h || h(e);
            },
            [h],
        ),
        B = i.useCallback(() => {
            x(!0);
        }, []),
        Z = i.useCallback(() => {
            x(!1);
        }, []);
    function F() {
        return (0, r.jsx)(d.Z, {
            className: E.dismissButton,
            onDismiss: j,
            "aria-label": g.intl.string(g.t.LnEgqX),
        });
    }
    function V() {
        let e = "function" == typeof y ? y(M, k) : y;
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
        return null == f && null == h
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
                      null != h
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
        return null == I
            ? null
            : "string" == typeof I
              ? (0, r.jsx)(c.qEK, {
                    src: I,
                    size: c.EFr.SIZE_40,
                    className: E.avatar,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: E.avatar,
                    children: I,
                });
    }
    function W() {
        let e = null == C ? void 0 : C(M, k);
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
                                null != T
                                    ? (0, r.jsx)(c.Text, {
                                          color: "interactive-normal",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (M ? 2 : 1) : void 0,
                                          children: T,
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
                className: o()(E.overflowWrapper, w),
                onScroll: S,
                children: (0, r.jsx)(c.P3F, {
                    innerRef: P,
                    ignoreKeyPress: !0,
                    onMouseOver: B,
                    onMouseLeave: Z,
                    onClick: b,
                    className: o()(E.container, { [E.clickable]: null != b }, D),
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
let R = {
    mass: 1,
    friction: 8,
    tension: 300,
};
function P() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, c.q_F)({
            scale: e ? 0.975 : 1,
            config: R,
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
function D(e) {
    let { notification: t, index: n, locked: a, pinned: o, transitionState: s, cleanUp: l } = e,
        {
            id: c,
            props: {
                onNotificationShow: d,
                onDismissClick: f,
                onNotificationClick: _,
                onConfirmClick: p,
                onCancelClick: m,
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
        { clickSpring: T, handleMouseClick: S } = P(),
        R = i.useCallback(
            (e) => {
                null == _ || _(e, c), S();
            },
            [_, c, S],
        ),
        D = i.useCallback(
            (e) => {
                null == p || p(e, c);
            },
            [p, c],
        ),
        w = i.useCallback(
            (e) => {
                null == m || m(e, c);
            },
            [m, c],
        ),
        L = i.useCallback((e, t) => (null == g ? void 0 : g(e, c, t)), [g, c]),
        {
            props: {
                onNotificationShow: x,
                onDismissClick: M,
                renderFooter: k,
                onNotificationClick: j,
                onConfirmClick: U,
                onCancelClick: G,
                disableClickableRegions: B = !1,
            },
            status: Z,
        } = t,
        F = I(t.props, [
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
        { ref: Y, springs: W } = (0, h.X4)(t.id, s, l);
    return (0, r.jsx)(C, {
        transitionState: s,
        springs: W,
        scaleOverride: null == T ? void 0 : T.scale,
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
                    onNotificationClick: R,
                    onConfirmClick: null != p ? D : void 0,
                    onCancelClick: null != m ? w : void 0,
                    renderFooter: L,
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
