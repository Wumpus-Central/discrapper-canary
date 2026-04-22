n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(311907),
    d = n(805901),
    c = n(939249),
    u = n(285796),
    m = n(777666),
    g = n(834730),
    h = n(194261),
    x = n(474001),
    _ = n(309326),
    p = n(580043),
    A = n(71393),
    E = n(213733),
    f = n(652215),
    j = n(985018),
    N = n(266152);
let I = { tension: 200, friction: 20 },
    C = { ...I, clamp: !0 };
function b(e) {
    let [t, n] = l.useState(0),
        { numUnlocked: s, numRequired: o } = e,
        m = () => {
            n(1);
        },
        g = () => {
            n(2);
        },
        h = 1 === t;
    if (!(!(s >= o) && s / o >= 0.8) || 2 === t) return null;
    let _ = h ? N.R : null,
        p = h ? x.A.Stages.FLYING : x.A.Stages.HOVERING;
    return (0, i.jsx)(d.c, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: C,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, i.jsxs)(a.animated.div, {
                className: N.Pc,
                style: e,
                children: [
                    (0, i.jsx)(x.A, { className: N.a_, stage: p, onFlyingComplete: g }),
                    (0, i.jsx)("div", {
                        className: r()(N.Sb, _),
                        children: j.intl.format(j.t.qV3Erl, { numLeft: o - s }),
                    }),
                    (0, i.jsx)(c.D, {
                        onClick: m,
                        className: r()(N.dE, _),
                        children: (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: N.sz }),
                    }),
                ],
            }),
    });
}
function v(e) {
    let {
            withCardBody: t,
            isAnimatedTo: n,
            hasAnimatedUnlocked: s,
            onSetRef: a,
            tier: o,
            showHeaderLockStatus: c,
            headerButton: u = null,
            subscriptionsRequired: m,
            subscriptionCount: g,
            className: h,
        } = e,
        x = (e) => {
            a?.(e);
        },
        [_, p] = l.useState(0);
    return (
        l.useLayoutEffect(() => {
            n && p(1);
        }, [n]),
        (0, i.jsx)(d.c, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === _) },
            config: I,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: r()({ [N.SJ]: !t, [N.Xx]: s, [N.Mq]: !s }, h),
                    ref: x,
                    children: (0, i.jsxs)("div", {
                        className: N.H3,
                        children: [
                            (0, i.jsx)(E.A, {
                                tier: o.tier,
                                color: "currentColor",
                                className: r()(N.w5, { [N.AU]: !s }),
                            }),
                            (0, i.jsx)("div", { className: r()(N.TJ, { [N.bY]: s }), children: o.title }),
                            c
                                ? (0, i.jsx)(T, {
                                      transform: e?.unlockedTranslateY.to((e) => `translate3d(0, ${e}px, 0)`),
                                      headerButton: u,
                                      subscriptionsRequired: m,
                                      hasAnimatedUnlocked: s,
                                  })
                                : null,
                            (0, i.jsx)(b, { numUnlocked: g, numRequired: m }),
                        ],
                    }),
                }),
        })
    );
}
function S(e) {
    let {
            children: t,
            subscriptionCount: n,
            onSetRef: l,
            tier: s,
            isAnimatedTo: a,
            hasBottomMargin: d,
            headerButton: c = null,
            withCardBody: u = !0,
            guildId: g,
            showHeaderLockStatus: h = !0,
        } = e,
        x = (0, o.bG)([A.A], () => A.A.getGuild(g)?.premiumTier ?? f.TVA.NONE),
        E = f.M2T[s.tier],
        I = a && s.tier <= x,
        C = s.tier !== f.TVA.NONE && s.tier !== f.TVA.TIER_1;
    return (0, i.jsxs)(
        "div",
        {
            className: r()(N.Zm, { [N.Ab]: d }),
            children: [
                (0, i.jsx)(v, {
                    subscriptionCount: n,
                    tier: s,
                    headerButton: c,
                    showHeaderLockStatus: h,
                    onSetRef: (e) => {
                        null != l && l(e, s);
                    },
                    withCardBody: u,
                    guildId: g,
                    hasBottomMargin: d,
                    subscriptionsRequired: E,
                    hasAnimatedUnlocked: I,
                    isAnimatedTo: a,
                }),
                (0, i.jsx)("div", {
                    className: r()({ [N.J8]: u }),
                    children:
                        null != t
                            ? t
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      C
                                          ? (0, i.jsx)("div", { className: N.p8, children: j.intl.string(j.t.oKzyRQ) })
                                          : null,
                                      null != s.perks &&
                                          (0, i.jsx)("div", {
                                              className: N.md,
                                              children: s.perks.map((e) =>
                                                  ((e, t) => {
                                                      let { Icon: n, className: l } = (0, _.a)(e.icon, t);
                                                      return (0, i.jsxs)(
                                                          "div",
                                                          {
                                                              className: N.d_,
                                                              children: [
                                                                  (0, i.jsx)(p.A, {
                                                                      name: String(e.icon),
                                                                      icon: n,
                                                                      className: N.kf,
                                                                      iconClassName: l,
                                                                  }),
                                                                  (0, i.jsxs)("div", {
                                                                      className: N.uL,
                                                                      children: [
                                                                          (0, i.jsxs)("div", {
                                                                              className: N.hY,
                                                                              children: [
                                                                                  e.title,
                                                                                  e.isNew
                                                                                      ? (0, i.jsx)(m.Lp, {
                                                                                            className: N.Ad,
                                                                                            text: j.intl.string(
                                                                                                j.t.y2b7CA,
                                                                                            ),
                                                                                        })
                                                                                      : null,
                                                                              ],
                                                                          }),
                                                                          (0, i.jsx)("div", {
                                                                              className: N.jV,
                                                                              children: e.description,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          e.title?.toString(),
                                                      );
                                                  })(e, I),
                                              ),
                                          }),
                                  ],
                              }),
                }),
            ],
        },
        s.tier,
    );
}
let T = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: l, subscriptionsRequired: s } = e;
        return null !== l ? l : n ? (0, i.jsx)(y, { transform: t }) : (0, i.jsx)(R, { subscriptionsRequired: s });
    },
    y = (e) => {
        let { transform: t } = e;
        return (0, i.jsx)(a.animated.div, {
            style: { transform: t },
            className: N.mM,
            children: j.intl.string(j.t.dNGM0v),
        });
    },
    R = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.E, {
                    variant: "text-md/normal",
                    children: j.intl.format(j.t.t2Wbo1, { required: t, decorator: "" }),
                }),
                (0, i.jsx)(h.X, { size: "md", color: "currentColor", className: N.Qe }),
            ],
        });
    };
