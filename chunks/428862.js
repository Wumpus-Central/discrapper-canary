n.d(t, { Z: () => y }), n(388685), n(953529);
var r,
    i,
    l = n(951288),
    s = n(647438),
    a = n(120356),
    o = n.n(a),
    c = n(137317),
    d = n(442837),
    u = n(481060),
    g = n(205641),
    m = n(119331),
    p = n(902807),
    f = n(430824),
    h = n(402766),
    x = n(981631),
    b = n(388032),
    j = n(744834);
let _ = {
        tension: 200,
        friction: 20,
    },
    v =
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
    let f = p || m ? j.hidden : null,
        h = p ? g.Z.Stages.FLYING : g.Z.Stages.HOVERING;
    return (0, l.jsx)(u.AMe, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: v,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, l.jsxs)(c.animated.div, {
                className: j.tierClose,
                style: e,
                children: [
                    (0, l.jsx)(g.Z, {
                        className: j.tierCloseMechaWumpus,
                        stage: h,
                        onFlyingComplete: d,
                    }),
                    (0, l.jsx)("div", {
                        className: o()(j.tierCloseHint, f),
                        children: b.intl.format(b.t.qV3Erq, { numLeft: i - r }),
                    }),
                    (0, l.jsx)(u.P3F, {
                        onClick: a,
                        className: o()(j.tierCloseClose, f),
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
function O(e) {
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
        [x, b] = s.useState(0);
    return (
        s.useLayoutEffect(() => {
            n && b(1);
        }, [n]),
        (0, l.jsx)(u.AMe, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === x) },
            config: _,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: o()(
                        {
                            [j.tierHeaderWithoutCardBody]: !t,
                            [j.tierHeaderUnlocked]: r,
                            [j.tierHeaderLocked]: !r,
                        },
                        p,
                    ),
                    ref: f,
                    children: (0, l.jsxs)("div", {
                        className: j.tierHeaderContent,
                        children: [
                            (0, l.jsx)(h.Z, {
                                tier: a.tier,
                                color: "currentColor",
                                className: o()(j.tierIcon, { [j.tierIconLocked]: !r }),
                            }),
                            (0, l.jsx)("div", {
                                className: o()(j.tierTitle, { [j.tierTitleActive]: r }),
                                children: a.title,
                            }),
                            c
                                ? (0, l.jsx)(N, {
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
                                numUnlocked: m,
                                numRequired: g,
                            }),
                        ],
                    }),
                }),
        })
    );
}
function y(e) {
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
        v = (0, d.e7)([f.Z], () => {
            var e, t;
            return null != (t = null == (e = f.Z.getGuild(h)) ? void 0 : e.premiumTier) ? t : x.Eu4.NONE;
        }),
        C = x.oCV[i.tier],
        y = s && i.tier <= v,
        N = i.tier !== x.Eu4.NONE && i.tier !== x.Eu4.TIER_1;
    return (0, l.jsxs)(
        "div",
        {
            className: o()(j.tier, { [j.tierBottomMargin]: a }),
            children: [
                (0, l.jsx)(O, {
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
                    subscriptionsRequired: C,
                    hasAnimatedUnlocked: y,
                    isAnimatedTo: s,
                }),
                (0, l.jsx)("div", {
                    className: o()({ [j.tierBody]: g }),
                    children:
                        null != t
                            ? t
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      N
                                          ? (0, l.jsx)("div", {
                                                className: j.previousPerks,
                                                children: b.intl.string(b.t.oKzyRU),
                                            })
                                          : null,
                                      null != i.perks &&
                                          (0, l.jsx)("div", {
                                              className: j.perks,
                                              children: i.perks.map((e) =>
                                                  ((e, t) => {
                                                      var n;
                                                      let { Icon: r, className: i } = (0, m.t)(e.icon, t);
                                                      return (0, l.jsxs)(
                                                          "div",
                                                          {
                                                              className: j.perk,
                                                              children: [
                                                                  (0, l.jsx)(p.Z, {
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
                                                                                            text: b.intl.string(
                                                                                                b.t.y2b7CA,
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
                                                  })(e, y),
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
        return null !== r ? r : n ? (0, l.jsx)(E, { transform: t }) : (0, l.jsx)(I, { subscriptionsRequired: i });
    },
    E = (e) => {
        let { transform: t } = e;
        return (0, l.jsx)(c.animated.div, {
            style: { transform: t },
            className: j.tierUnlocked,
            children: b.intl.string(b.t.dNGM0t),
        });
    },
    I = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: b.intl.format(b.t.t2Wbo6, {
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
