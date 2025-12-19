n.d(t, { Z: () => N }), n(388685), n(953529);
var r,
    i,
    l = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    c = n(620792),
    d = n(442837),
    u = n(481060),
    g = n(205641),
    f = n(119331),
    m = n(902807),
    b = n(430824),
    p = n(656185),
    h = n(981631),
    x = n(388032),
    j = n(391847);
let v = {
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
        })({}, v)),
        (i = i = { clamp: !0 }),
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
function C(e) {
    let [t, n] = a.useState(0),
        { numUnlocked: r, numRequired: i } = e,
        s = () => {
            n(1);
        },
        d = () => {
            n(2);
        },
        f = 2 === t,
        m = 1 === t;
    if (!(!(r >= i) && r / i >= 0.8) || f) return null;
    let b = m || f ? j.hidden : null,
        p = m ? g.Z.Stages.FLYING : g.Z.Stages.HOVERING;
    return (0, l.jsx)(u.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: O,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, l.jsxs)(c.animated.div, {
                className: j.tierClose,
                style: e,
                children: [
                    (0, l.jsx)(g.Z, {
                        className: j.tierCloseMechaWumpus,
                        stage: p,
                        onFlyingComplete: d,
                    }),
                    (0, l.jsx)("div", {
                        className: o()(j.tierCloseHint, b),
                        children: x.intl.format(x.t.qV3Erl, { numLeft: i - r }),
                    }),
                    (0, l.jsx)(u.P3F, {
                        onClick: s,
                        className: o()(j.tierCloseClose, b),
                        children: (0, l.jsx)(u.k$p, {
                            size: "md",
                            color: "currentColor",
                            className: j.tierCloseCloseIcon,
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
            tier: s,
            showHeaderLockStatus: c,
            headerButton: d = null,
            subscriptionsRequired: g,
            subscriptionCount: f,
            className: m,
        } = e,
        b = (e) => {
            null == i || i(e);
        },
        [h, x] = a.useState(0);
    return (
        a.useLayoutEffect(() => {
            n && x(1);
        }, [n]),
        (0, l.jsx)(u.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === h) },
            config: v,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: o()(
                        {
                            [j.tierHeaderWithoutCardBody]: !t,
                            [j.tierHeaderUnlocked]: r,
                            [j.tierHeaderLocked]: !r,
                        },
                        m,
                    ),
                    ref: b,
                    children: (0, l.jsxs)("div", {
                        className: j.tierHeaderContent,
                        children: [
                            (0, l.jsx)(p.Z, {
                                tier: s.tier,
                                color: "currentColor",
                                className: o()(j.tierIcon, { [j.tierIconLocked]: !r }),
                            }),
                            (0, l.jsx)("div", {
                                className: o()(j.tierTitle, { [j.tierTitleActive]: r }),
                                children: s.title,
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
                            (0, l.jsx)(C, {
                                numUnlocked: f,
                                numRequired: g,
                            }),
                        ],
                    }),
                }),
        })
    );
}
function N(e) {
    let {
            children: t,
            subscriptionCount: n,
            onSetRef: r,
            tier: i,
            isAnimatedTo: a,
            hasBottomMargin: s,
            headerButton: c = null,
            withCardBody: g = !0,
            guildId: p,
            showHeaderLockStatus: v = !0,
        } = e,
        O = (0, d.e7)([b.Z], () => {
            var e, t;
            return null != (t = null == (e = b.Z.getGuild(p)) ? void 0 : e.premiumTier) ? t : h.Eu4.NONE;
        }),
        C = h.oCV[i.tier],
        N = a && i.tier <= O,
        E = i.tier !== h.Eu4.NONE && i.tier !== h.Eu4.TIER_1;
    return (0, l.jsxs)(
        "div",
        {
            className: o()(j.tier, { [j.tierBottomMargin]: s }),
            children: [
                (0, l.jsx)(y, {
                    subscriptionCount: n,
                    tier: i,
                    headerButton: c,
                    showHeaderLockStatus: v,
                    onSetRef: (e) => {
                        null != r && r(e, i);
                    },
                    withCardBody: g,
                    guildId: p,
                    hasBottomMargin: s,
                    subscriptionsRequired: C,
                    hasAnimatedUnlocked: N,
                    isAnimatedTo: a,
                }),
                (0, l.jsx)("div", {
                    className: o()({ [j.tierBody]: g }),
                    children:
                        null != t
                            ? t
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      E
                                          ? (0, l.jsx)("div", {
                                                className: j.previousPerks,
                                                children: x.intl.string(x.t.oKzyRQ),
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, l.jsx)("div", {
                                              className: j.perks,
                                              children: i.perks.map((e) =>
                                                  ((e, t) => {
                                                      var n;
                                                      let { Icon: r, className: i } = (0, f.t)(e.icon, t);
                                                      return (0, l.jsxs)(
                                                          "div",
                                                          {
                                                              className: j.perk,
                                                              children: [
                                                                  (0, l.jsx)(m.Z, {
                                                                      name: String(e.icon),
                                                                      icon: r,
                                                                      className: j.perkIcon,
                                                                      iconClassName: i,
                                                                  }),
                                                                  (0, l.jsxs)("div", {
                                                                      className: j.perkText,
                                                                      children: [
                                                                          (0, l.jsxs)("div", {
                                                                              className: j.perkTitle,
                                                                              children: [
                                                                                  e.title,
                                                                                  e.isNew
                                                                                      ? (0, l.jsx)(u.IGR, {
                                                                                            className: j.newBadge,
                                                                                            text: x.intl.string(
                                                                                                x.t.y2b7CA,
                                                                                            ),
                                                                                        })
                                                                                      : null,
                                                                              ],
                                                                          }),
                                                                          (0, l.jsx)("div", {
                                                                              className: j.perkDescription,
                                                                              children: e.description,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          null == (n = e.title) ? void 0 : n.toString(),
                                                      );
                                                  })(e, N),
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
        return null !== r ? r : n ? (0, l.jsx)(I, { transform: t }) : (0, l.jsx)(S, { subscriptionsRequired: i });
    },
    I = (e) => {
        let { transform: t } = e;
        return (0, l.jsx)(c.animated.div, {
            style: { transform: t },
            className: j.tierUnlocked,
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
                (0, l.jsx)(u.mBM, {
                    size: "md",
                    color: "currentColor",
                    className: j.tierLock,
                }),
            ],
        });
    };
