n.d(t, {
    A: () => E,
}),
    n(896048),
    n(228524);
var r,
    i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    c = n.n(a),
    o = n(108531),
    d = n(311907),
    u = n(397927),
    f = n(474001),
    g = n(309326),
    b = n(580043),
    m = n(71393),
    p = n(213733),
    x = n(652215),
    h = n(985018),
    j = n(306769);
let O = {
        tension: 200,
        friction: 20,
    },
    y =
        ((r = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, O)),
        (i = i =
            {
                clamp: !0,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        r);

function v(e) {
    let [t, n] = s.useState(0),
        { numUnlocked: r, numRequired: i } = e,
        a = () => {
            n(1);
        },
        d = () => {
            n(2);
        },
        g = 2 === t,
        b = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || g) return null;
    let m = b || g ? j.R : null,
        p = b ? f.A.Stages.FLYING : f.A.Stages.HOVERING;
    return (0, l.jsx)(u.c7X, {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: y,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, l.jsxs)(o.animated.div, {
                className: j.Pc,
                style: e,
                children: [
                    (0, l.jsx)(f.A, {
                        className: j.a_,
                        stage: p,
                        onFlyingComplete: d,
                    }),
                    (0, l.jsx)("div", {
                        className: c()(j.Sb, m),
                        children: h.intl.format(h.t.qV3Erl, {
                            numLeft: i - r,
                        }),
                    }),
                    (0, l.jsx)(u.DUT, {
                        onClick: a,
                        className: c()(j.dE, m),
                        children: (0, l.jsx)(u.aXh, {
                            size: "md",
                            color: "currentColor",
                            className: j.sz,
                        }),
                    }),
                ],
            }),
    });
}

function A(e) {
    let {
            withCardBody: t,
            isAnimatedTo: n,
            hasAnimatedUnlocked: r,
            onSetRef: i,
            tier: a,
            showHeaderLockStatus: o,
            headerButton: d = null,
            subscriptionsRequired: f,
            subscriptionCount: g,
            className: b,
        } = e,
        m = (e) => {
            null == i || i(e);
        },
        [x, h] = s.useState(0);
    return (
        s.useLayoutEffect(() => {
            n && h(1);
        }, [n]),
        (0, l.jsx)(u.c7X, {
            from: {
                unlockedTranslateY: 50,
            },
            to: {
                unlockedTranslateY: 50 * (0 === x),
            },
            config: O,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: c()(
                        {
                            [j.SJ]: !t,
                            [j.Xx]: r,
                            [j.Mq]: !r,
                        },
                        b,
                    ),
                    ref: m,
                    children: (0, l.jsxs)("div", {
                        className: j.H3,
                        children: [
                            (0, l.jsx)(p.A, {
                                tier: a.tier,
                                color: "currentColor",
                                className: c()(j.w5, {
                                    [j.AU]: !r,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: c()(j.TJ, {
                                    [j.bY]: r,
                                }),
                                children: a.title,
                            }),
                            o
                                ? (0, l.jsx)(N, {
                                      transform:
                                          null == e
                                              ? void 0
                                              : e.unlockedTranslateY.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
                                      headerButton: d,
                                      subscriptionsRequired: f,
                                      hasAnimatedUnlocked: r,
                                  })
                                : null,
                            (0, l.jsx)(v, {
                                numUnlocked: g,
                                numRequired: f,
                            }),
                        ],
                    }),
                }),
        })
    );
}

function E(e) {
    let {
            children: t,
            subscriptionCount: n,
            onSetRef: r,
            tier: i,
            isAnimatedTo: s,
            hasBottomMargin: a,
            headerButton: o = null,
            withCardBody: f = !0,
            guildId: p,
            showHeaderLockStatus: O = !0,
        } = e,
        y = (0, d.bG)([m.A], () => {
            var e, t;
            return null != (e = null == (t = m.A.getGuild(p)) ? void 0 : t.premiumTier) ? e : x.TVA.NONE;
        }),
        v = x.M2T[i.tier],
        E = s && i.tier <= y,
        N = i.tier !== x.TVA.NONE && i.tier !== x.TVA.TIER_1;
    return (0, l.jsxs)(
        "div",
        {
            className: c()(j.Zm, {
                [j.Ab]: a,
            }),
            children: [
                (0, l.jsx)(A, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: o,
                    showHeaderLockStatus: O,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: f,
                    guildId: p,
                    hasBottomMargin: a,
                    subscriptionsRequired: v,
                    hasAnimatedUnlocked: E,
                    isAnimatedTo: s,
                }),
                (0, l.jsx)("div", {
                    className: c()({
                        [j.J8]: f,
                    }),
                    children:
                        null != t
                            ? t
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      N
                                          ? (0, l.jsx)("div", {
                                                className: j.p8,
                                                children: h.intl.string(h.t.oKzyRQ),
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, l.jsx)("div", {
                                              className: j.md,
                                              children: i.perks.map((e) =>
                                                  ((e, t) => {
                                                      var n;
                                                      let { Icon: r, className: i } = (0, g.a)(e.icon, t);
                                                      return (0, l.jsxs)(
                                                          "div",
                                                          {
                                                              className: j.d_,
                                                              children: [
                                                                  (0, l.jsx)(b.A, {
                                                                      name: String(e.icon),
                                                                      icon: r,
                                                                      className: j.kf,
                                                                      iconClassName: i,
                                                                  }),
                                                                  (0, l.jsxs)("div", {
                                                                      className: j.uL,
                                                                      children: [
                                                                          (0, l.jsxs)("div", {
                                                                              className: j.hY,
                                                                              children: [
                                                                                  e.title,
                                                                                  e.isNew
                                                                                      ? (0, l.jsx)(u.LpS, {
                                                                                            className: j.Ad,
                                                                                            text: h.intl.string(
                                                                                                h.t.y2b7CA,
                                                                                            ),
                                                                                        })
                                                                                      : null,
                                                                              ],
                                                                          }),
                                                                          (0, l.jsx)("div", {
                                                                              className: j.jV,
                                                                              children: e.description,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          null == (n = e.title) ? void 0 : n.toString(),
                                                      );
                                                  })(e, E),
                                              ),
                                          }),
                                  ],
                              }),
                }),
            ],
        },
        i.tier,
    );
}
let N = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: r, subscriptionsRequired: i } = e;
        return null !== r
            ? r
            : n
              ? (0, l.jsx)(_, {
                    transform: t,
                })
              : (0, l.jsx)(S, {
                    subscriptionsRequired: i,
                });
    },
    _ = (e) => {
        let { transform: t } = e;
        return (0, l.jsx)(o.animated.div, {
            style: {
                transform: t,
            },
            className: j.mM,
            children: h.intl.string(h.t.dNGM0v),
        });
    },
    S = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: h.intl.format(h.t.t2Wbo1, {
                        required: t,
                        decorator: "",
                    }),
                }),
                (0, l.jsx)(u.XAi, {
                    size: "md",
                    color: "currentColor",
                    className: j.Qe,
                }),
            ],
        });
    };
