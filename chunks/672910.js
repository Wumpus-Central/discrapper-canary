n.d(t, {
    $: () => T,
    A: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(311907),
    c = n(397927),
    u = n(684013),
    d = n(569626),
    f = n(302614),
    p = n(395011),
    _ = n(222506),
    h = n(57019),
    m = n(652215),
    g = n(985018),
    E = n(879716);

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

function b(e) {
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

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function S(e) {
    e.currentTarget.scrollTo(0, 0);
}
let T = i.memo(function (e) {
    let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: a,
            onDismissClick: u,
            onConfirmClick: f,
            onCancelClick: h,
            onNotificationClick: y,
            hint: b,
            cancelText: O,
            confirmText: v,
            icon: A,
            body: I,
            title: T,
            renderFooter: C,
            contentOpacity: N,
            status: w,
            containerRef: R,
            className: P,
            wrapperClassName: D,
        } = e,
        [L, x] = i.useState(!1),
        M = n || L || w === m.yFH.FOCUSED,
        j = (0, l.bG)([_.A, p.A], () => _.A.isInputLocked(p.A.getTargetPID()));
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
                e.stopPropagation(), null == h || h(e);
            },
            [h],
        ),
        V = i.useCallback(() => {
            x(!0);
        }, []),
        F = i.useCallback(() => {
            x(!1);
        }, []);

    function B() {
        return (0, r.jsx)(d.A, {
            className: E.r,
            onDismiss: k,
            "aria-label": g.intl.string(g.t.LnEgqX),
        });
    }

    function H() {
        let e = "function" == typeof b ? b(M, j) : b;
        return null != b
            ? (0, r.jsx)(c.Text, {
                  className: E.aK,
                  color: "text-muted",
                  variant: "text-xxs/medium",
                  children: e,
              })
            : null;
    }

    function Y() {
        return null == f && null == h
            ? null
            : (0, r.jsxs)("div", {
                  className: E.UD,
                  children: [
                      null != f
                          ? (0, r.jsx)("div", {
                                className: E.x6,
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
                                className: E.x6,
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

    function W() {
        return null == A
            ? null
            : "string" == typeof A
              ? (0, r.jsx)(c.euF, {
                    src: A,
                    size: c._3J.SIZE_40,
                    className: E.my,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: E.my,
                    children: A,
                });
    }

    function K() {
        let e = null == C ? void 0 : C(M, j);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(s.animated.div, {
                    className: E.VM,
                    style: {
                        opacity: N,
                    },
                    children: [
                        W(),
                        (0, r.jsxs)("div", {
                            className: E.zH,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    color: "interactive-text-default",
                                    variant: "text-sm/semibold",
                                    lineClamp: 2,
                                    children: T,
                                }),
                                null != I
                                    ? (0, r.jsx)(c.Text, {
                                          color: "interactive-text-default",
                                          variant: "text-sm/normal",
                                          lineClamp: null != t ? t * (M ? 2 : 1) : void 0,
                                          children: I,
                                      })
                                    : null,
                                H(),
                                Y(),
                            ],
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)(c.DUT, {
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
                className: o()(E.af, D),
                onScroll: S,
                children: (0, r.jsx)(c.DUT, {
                    innerRef: R,
                    ignoreKeyPress: !0,
                    onMouseOver: V,
                    onMouseLeave: F,
                    onClick: y,
                    className: o()(
                        E.kL,
                        {
                            [E.vk]: null != y,
                        },
                        P,
                    ),
                    children: K(),
                }),
            }),
            B(),
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
        className: o()(E.k$, f),
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
        ? (0, r.jsx)(f.A, {
              className: E.VC,
              children: n,
          })
        : n;
}
let w = {
    mass: 1,
    friction: 8,
    tension: 300,
};

function R() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        a = (0, c.zhh)({
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

function P(e) {
    let { notification: t, index: n, locked: a, pinned: o, transitionState: s, cleanUp: l } = e,
        {
            id: c,
            props: {
                onNotificationShow: d,
                onDismissClick: f,
                onNotificationClick: p,
                onConfirmClick: _,
                onCancelClick: m,
                renderFooter: g,
                animationWrapperClassName: E,
            },
        } = t,
        y = i.useCallback(() => {
            d(c);
        }, [d, c]),
        O = i.useCallback(
            (e) => {
                u.A.updateNotificationStatus(c), null == f || f(e, c);
            },
            [c, f],
        ),
        { clickSpring: I, handleMouseClick: S } = R(),
        w = i.useCallback(
            (e) => {
                null == p || p(e, c), S();
            },
            [p, c, S],
        ),
        P = i.useCallback(
            (e) => {
                null == _ || _(e, c);
            },
            [_, c],
        ),
        D = i.useCallback(
            (e) => {
                null == m || m(e, c);
            },
            [m, c],
        ),
        L = i.useCallback((e, t) => (null == g ? void 0 : g(e, c, t)), [g, c]),
        { props: x } = t,
        {
            onNotificationShow: M,
            onDismissClick: j,
            renderFooter: k,
            onNotificationClick: U,
            onConfirmClick: G,
            onCancelClick: V,
            disableClickableRegions: F = !1,
        } = x,
        B = A(x, [
            "onNotificationShow",
            "onDismissClick",
            "renderFooter",
            "onNotificationClick",
            "onConfirmClick",
            "onCancelClick",
            "disableClickableRegions",
        ]),
        { status: H } = t,
        Y = !o && a,
        W = 0 === n && !F && !Y,
        { ref: K, springs: z } = (0, h.Ru)(t.id, s, l);
    return (0, r.jsx)(C, {
        transitionState: s,
        springs: z,
        scaleOverride: null == I ? void 0 : I.scale,
        index: n,
        locked: a,
        animationWrapperClassName: E,
        children: (0, r.jsx)(N, {
            observe: W,
            children: (0, r.jsx)(
                T,
                v(b({}, B), {
                    title: "function" == typeof B.title ? B.title(O) : B.title,
                    containerRef: K,
                    notificationId: t.id,
                    onNotificationShow: 0 === n ? y : void 0,
                    onDismissClick: O,
                    onNotificationClick: w,
                    onConfirmClick: null != _ ? P : void 0,
                    onCancelClick: null != m ? D : void 0,
                    renderFooter: L,
                    expand: !1,
                    index: n,
                    locked: a,
                    status: H,
                    contentOpacity: z.contentOpacity,
                }),
            ),
        }),
    });
}
