n.d(t, {
    Y: () => C,
    Z: () => D,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(426322),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(13245),
    f = n(691891),
    _ = n(333031),
    p = n(610394),
    h = n(322155),
    m = n(693091),
    g = n(981631),
    E = n(388032),
    b = n(968803);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e) {
    e.currentTarget.scrollTo(0, 0);
}
let C = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: d,
            onConfirmClick: _,
            onCancelClick: m,
            onNotificationClick: y,
            hint: O,
            cancelText: v,
            confirmText: I,
            icon: T,
            body: S,
            title: C,
            renderFooter: N,
            contentOpacity: R,
            status: P,
            containerRef: w,
            className: D,
            wrapperClassName: x,
        } = e,
        [L, M] = i.useState(!1),
        j = n || L || P === g._1z.FOCUSED,
        k = (0, l.e7)([h.Z, p.Z], () => h.Z.isInputLocked(p.Z.getTargetPID()));
    i.useEffect(() => {
        null == a || a();
    }, [a]);
    let U = i.useCallback(
            (e) => {
                e.stopPropagation(), null == d || d(e);
            },
            [d],
        ),
        G = i.useCallback(
            (e) => {
                e.stopPropagation(), null == _ || _(e);
            },
            [_],
        ),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m],
        ),
        Z = i.useCallback(() => {
            M(!0);
        }, []),
        F = i.useCallback(() => {
            M(!1);
        }, []);
    function V() {
        return (0, r.jsx)(f.Z, {
            className: b.dismissButton,
            onDismiss: U,
            "aria-label": E.intl.string(E.t.LnEgqX),
        });
    }
    function H() {
        let e = "function" == typeof O ? O(j, k) : O;
        return null != O
            ? (0, r.jsx)(u.Text, {
                  className: b.hint,
                  color: "text-muted",
                  variant: "text-xxs/medium",
                  children: e,
              })
            : null;
    }
    function Y() {
        return null == _ && null == m
            ? null
            : (0, r.jsxs)("div", {
                  className: b.buttonContainer,
                  children: [
                      null != _
                          ? (0, r.jsx)(c.zx, {
                                className: b.button,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.GREEN,
                                onClick: G,
                                children: null != I ? I : E.intl.string(E.t.BddRzS),
                            })
                          : null,
                      null != m
                          ? (0, r.jsx)(c.zx, {
                                className: b.button,
                                size: c.zx.Sizes.SMALL,
                                look: c.zx.Looks.OUTLINED,
                                color: c.zx.Colors.PRIMARY,
                                onClick: B,
                                children: null != v ? v : E.intl.string(E.t["ETE/oC"]),
                            })
                          : null,
                  ],
              });
    }
    function W() {
        return null == T
            ? null
            : "string" == typeof T
              ? (0, r.jsx)(u.qEK, {
                    src: T,
                    size: u.EFr.SIZE_40,
                    className: b.avatar,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: b.avatar,
                    children: T,
                });
    }
    function K() {
        let e = null == N ? void 0 : N(j, k);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(s.animated.div, {
                    className: b.iconAndDetails,
                    style: { opacity: R },
                    children: [
                        W(),
                        (0, r.jsxs)("div", {
                            className: b.details,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/semibold",
                                    lineClamp: 2,
                                    children: C,
                                }),
                                null != S
                                    ? (0, r.jsx)(u.Text, {
                                          color: "interactive-normal",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (j ? 2 : 1) : void 0,
                                          children: S,
                                      })
                                    : null,
                                H(),
                                Y(),
                            ],
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)(u.P3F, {
                        className: b.footer,
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
                className: o()(b.overflowWrapper, x),
                onScroll: A,
                children: (0, r.jsx)(u.P3F, {
                    innerRef: w,
                    ignoreKeyPress: !0,
                    onMouseOver: Z,
                    onMouseLeave: F,
                    onClick: y,
                    className: o()(b.container, { [b.clickable]: null != y }, D),
                    children: K(),
                }),
            }),
            V(),
        ],
    });
});
function N(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: a },
        scaleOverride: l,
        index: c,
        children: u,
        locked: d,
        animationWrapperClassName: f,
    } = e;
    return (0, r.jsx)(s.animated.div, {
        className: o()(b.animationWrapper, f),
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
function R(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, r.jsx)(_.Z, {
              className: b.clickZone,
              children: n,
          })
        : n;
}
let P = {
    mass: 1,
    friction: 8,
    tension: 300,
};
function w() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, u.q_F)({
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
function D(e) {
    let { notification: t, index: n, locked: a, pinned: o, transitionState: s, cleanUp: l } = e,
        {
            id: c,
            props: {
                onNotificationShow: u,
                onDismissClick: f,
                onNotificationClick: _,
                onConfirmClick: p,
                onCancelClick: h,
                renderFooter: g,
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
        { clickSpring: v, handleMouseClick: S } = w(),
        A = i.useCallback(
            (e) => {
                null == _ || _(e, c), S();
            },
            [_, c, S],
        ),
        P = i.useCallback(
            (e) => {
                null == p || p(e, c);
            },
            [p, c],
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
                onDismissClick: M,
                renderFooter: j,
                onNotificationClick: k,
                onConfirmClick: U,
                onCancelClick: G,
                disableClickableRegions: B = !1,
            },
            status: Z,
        } = t,
        F = T(t.props, [
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
        { ref: Y, springs: W } = (0, m.X4)(t.id, s, l);
    return (0, r.jsx)(N, {
        transitionState: s,
        springs: W,
        scaleOverride: null == v ? void 0 : v.scale,
        index: n,
        locked: a,
        animationWrapperClassName: E,
        children: (0, r.jsx)(R, {
            observe: H,
            children: (0, r.jsx)(
                C,
                I(O({}, F), {
                    title: "function" == typeof F.title ? F.title(y) : F.title,
                    containerRef: Y,
                    notificationId: t.id,
                    onNotificationShow: 0 === n ? b : void 0,
                    onDismissClick: y,
                    onNotificationClick: A,
                    onConfirmClick: null != p ? P : void 0,
                    onCancelClick: null != h ? D : void 0,
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
