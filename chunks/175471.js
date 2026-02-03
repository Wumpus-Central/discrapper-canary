n.d(t, {
    A: () => A,
}),
    n(896048),
    n(228524);
var r,
    i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    c = n(92674),
    d = n(311907),
    u = n(397927),
    g = n(474001),
    m = n(309326),
    p = n(580043),
    f = n(71393),
    h = n(213733),
    b = n(652215),
    x = n(985018),
    j = n(306769);
let _ = {
        tension: 200,
        friction: 20,
    },
    O =
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
        })({}, _)),
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
        m = 2 === t,
        p = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || m) return null;
    let f = p || m ? j.R : null,
        h = p ? g.A.Stages.FLYING : g.A.Stages.HOVERING;
    return (0, l.jsx)(u.c7X, {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: O,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, l.jsxs)(c.animated.div, {
                className: j.Pc,
                style: e,
                children: [
                    (0, l.jsx)(g.A, {
                        className: j.a_,
                        stage: h,
                        onFlyingComplete: d,
                    }),
                    (0, l.jsx)("div", {
                        className: o()(j.Sb, f),
                        children: x.intl.format(x.t.qV3Erl, {
                            numLeft: i - r,
                        }),
                    }),
                    (0, l.jsx)(u.DUT, {
                        onClick: a,
                        className: o()(j.dE, f),
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

function y(e) {
    let {
            withCardBody: t,
            isAnimatedTo: n,
            hasAnimatedUnlocked: r,
            onSetRef: i,
            tier: a,
            showHeaderLockStatus: c,
            headerButton: d = null,
            subscriptionsRequired: g,
            subscriptionCount: m,
            className: p,
        } = e,
        f = (e) => {
            null == i || i(e);
        },
        [b, x] = s.useState(0);
    return (
        s.useLayoutEffect(() => {
            n && x(1);
        }, [n]),
        (0, l.jsx)(u.c7X, {
            from: {
                unlockedTranslateY: 50,
            },
            to: {
                unlockedTranslateY: 50 * (0 === b),
            },
            config: _,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: o()(
                        {
                            [j.SJ]: !t,
                            [j.Xx]: r,
                            [j.Mq]: !r,
                        },
                        p,
                    ),
                    ref: f,
                    children: (0, l.jsxs)("div", {
                        className: j.H3,
                        children: [
                            (0, l.jsx)(h.A, {
                                tier: a.tier,
                                color: "currentColor",
                                className: o()(j.w5, {
                                    [j.AU]: !r,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: o()(j.TJ, {
                                    [j.bY]: r,
                                }),
                                children: a.title,
                            }),
                            c
                                ? (0, l.jsx)(E, {
                                      transform:
                                          null == e
                                              ? void 0
                                              : e.unlockedTranslateY.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
                                      headerButton: d,
                                      subscriptionsRequired: g,
                                      hasAnimatedUnlocked: r,
                                  })
                                : null,
                            (0, l.jsx)(v, {
                                numUnlocked: m,
                                numRequired: g,
                            }),
                        ],
                    }),
                }),
        })
    );
}

function A(e) {
    let {
            children: t,
            subscriptionCount: n,
            onSetRef: r,
            tier: i,
            isAnimatedTo: s,
            hasBottomMargin: a,
            headerButton: c = null,
            withCardBody: g = !0,
            guildId: h,
            showHeaderLockStatus: _ = !0,
        } = e,
        O = (0, d.bG)([f.A], () => {
            var e, t;
            return null != (e = null == (t = f.A.getGuild(h)) ? void 0 : t.premiumTier) ? e : b.TVA.NONE;
        }),
        v = b.M2T[i.tier],
        A = s && i.tier <= O,
        E = i.tier !== b.TVA.NONE && i.tier !== b.TVA.TIER_1;
    return (0, l.jsxs)(
        "div",
        {
            className: o()(j.Zm, {
                [j.Ab]: a,
            }),
            children: [
                (0, l.jsx)(y, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: c,
                    showHeaderLockStatus: _,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: g,
                    guildId: h,
                    hasBottomMargin: a,
                    subscriptionsRequired: v,
                    hasAnimatedUnlocked: A,
                    isAnimatedTo: s,
                }),
                (0, l.jsx)("div", {
                    className: o()({
                        [j.J8]: g,
                    }),
                    children:
                        null != t
                            ? t
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      E
                                          ? (0, l.jsx)("div", {
                                                className: j.p8,
                                                children: x.intl.string(x.t.oKzyRQ),
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, l.jsx)("div", {
                                              className: j.md,
                                              children: i.perks.map((e) =>
                                                  ((e, t) => {
                                                      var n;
                                                      let { Icon: r, className: i } = (0, m.a)(e.icon, t);
                                                      return (0, l.jsxs)(
                                                          "div",
                                                          {
                                                              className: j.d_,
                                                              children: [
                                                                  (0, l.jsx)(p.A, {
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
                                                                                            text: x.intl.string(
                                                                                                x.t.y2b7CA,
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
                                                  })(e, A),
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
let E = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: r, subscriptionsRequired: i } = e;
        return null !== r
            ? r
            : n
              ? (0, l.jsx)(N, {
                    transform: t,
                })
              : (0, l.jsx)(S, {
                    subscriptionsRequired: i,
                });
    },
    N = (e) => {
        let { transform: t } = e;
        return (0, l.jsx)(c.animated.div, {
            style: {
                transform: t,
            },
            className: j.mM,
            children: x.intl.string(x.t.dNGM0v),
        });
    },
    S = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: x.intl.format(x.t.t2Wbo1, {
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
