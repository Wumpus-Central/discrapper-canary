"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(880013),
    o = n(311907),
    d = n(397927),
    c = n(474001),
    u = n(309326),
    m = n(580043),
    g = n(71393),
    x = n(213733),
    h = n(652215),
    _ = n(985018),
    p = n(921491);
let A = { tension: 200, friction: 20 },
    f = { ...A, clamp: !0 };
function j(e) {
    let [t, n] = s.useState(0),
        { numUnlocked: l, numRequired: o } = e,
        u = () => {
            n(1);
        },
        m = () => {
            n(2);
        },
        g = 1 === t;
    if (!(!(l >= o) && l / o >= 0.8) || 2 === t) return null;
    let x = g ? p.R : null,
        h = g ? c.A.Stages.FLYING : c.A.Stages.HOVERING;
    return (0, i.jsx)(d.c7X, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: f,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, i.jsxs)(a.animated.div, {
                className: p.Pc,
                style: e,
                children: [
                    (0, i.jsx)(c.A, { className: p.a_, stage: h, onFlyingComplete: m }),
                    (0, i.jsx)("div", {
                        className: r()(p.Sb, x),
                        children: _.intl.format(_.t.qV3Erl, { numLeft: o - l }),
                    }),
                    (0, i.jsx)(d.DUT, {
                        onClick: u,
                        className: r()(p.dE, x),
                        children: (0, i.jsx)(d.aXh, { size: "md", color: "currentColor", className: p.sz }),
                    }),
                ],
            }),
    });
}
function N(e) {
    let {
            withCardBody: t,
            isAnimatedTo: n,
            hasAnimatedUnlocked: l,
            onSetRef: a,
            tier: o,
            showHeaderLockStatus: c,
            headerButton: u = null,
            subscriptionsRequired: m,
            subscriptionCount: g,
            className: h,
        } = e,
        _ = (e) => {
            a?.(e);
        },
        [f, N] = s.useState(0);
    return (
        s.useLayoutEffect(() => {
            n && N(1);
        }, [n]),
        (0, i.jsx)(d.c7X, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 50 * (0 === f) },
            config: A,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: r()({ [p.SJ]: !t, [p.Xx]: l, [p.Mq]: !l }, h),
                    ref: _,
                    children: (0, i.jsxs)("div", {
                        className: p.H3,
                        children: [
                            (0, i.jsx)(x.A, {
                                tier: o.tier,
                                color: "currentColor",
                                className: r()(p.w5, { [p.AU]: !l }),
                            }),
                            (0, i.jsx)("div", { className: r()(p.TJ, { [p.bY]: l }), children: o.title }),
                            c
                                ? (0, i.jsx)(b, {
                                      transform: e?.unlockedTranslateY.to((e) => `translate3d(0, ${e}px, 0)`),
                                      headerButton: u,
                                      subscriptionsRequired: m,
                                      hasAnimatedUnlocked: l,
                                  })
                                : null,
                            (0, i.jsx)(j, { numUnlocked: g, numRequired: m }),
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
            onSetRef: s,
            tier: l,
            isAnimatedTo: a,
            hasBottomMargin: c,
            headerButton: x = null,
            withCardBody: A = !0,
            guildId: f,
            showHeaderLockStatus: j = !0,
        } = e,
        E = (0, o.bG)([g.A], () => g.A.getGuild(f)?.premiumTier ?? h.TVA.NONE),
        b = h.M2T[l.tier],
        C = a && l.tier <= E,
        T = l.tier !== h.TVA.NONE && l.tier !== h.TVA.TIER_1;
    return (0, i.jsxs)(
        "div",
        {
            className: r()(p.Zm, { [p.Ab]: c }),
            children: [
                (0, i.jsx)(N, {
                    subscriptionCount: n,
                    tier: l,
                    headerButton: x,
                    showHeaderLockStatus: j,
                    onSetRef: (e) => {
                        null != s && s(e, l);
                    },
                    withCardBody: A,
                    guildId: f,
                    hasBottomMargin: c,
                    subscriptionsRequired: b,
                    hasAnimatedUnlocked: C,
                    isAnimatedTo: a,
                }),
                (0, i.jsx)("div", {
                    className: r()({ [p.J8]: A }),
                    children:
                        null != t
                            ? t
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      T
                                          ? (0, i.jsx)("div", { className: p.p8, children: _.intl.string(_.t.oKzyRQ) })
                                          : null,
                                      null != l.perks &&
                                          (0, i.jsx)("div", {
                                              className: p.md,
                                              children: l.perks.map((e) =>
                                                  ((e, t) => {
                                                      let { Icon: n, className: s } = (0, u.a)(e.icon, t);
                                                      return (0, i.jsxs)(
                                                          "div",
                                                          {
                                                              className: p.d_,
                                                              children: [
                                                                  (0, i.jsx)(m.A, {
                                                                      name: String(e.icon),
                                                                      icon: n,
                                                                      className: p.kf,
                                                                      iconClassName: s,
                                                                  }),
                                                                  (0, i.jsxs)("div", {
                                                                      className: p.uL,
                                                                      children: [
                                                                          (0, i.jsxs)("div", {
                                                                              className: p.hY,
                                                                              children: [
                                                                                  e.title,
                                                                                  e.isNew
                                                                                      ? (0, i.jsx)(d.LpS, {
                                                                                            className: p.Ad,
                                                                                            text: _.intl.string(
                                                                                                _.t.y2b7CA,
                                                                                            ),
                                                                                        })
                                                                                      : null,
                                                                              ],
                                                                          }),
                                                                          (0, i.jsx)("div", {
                                                                              className: p.jV,
                                                                              children: e.description,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          e.title?.toString(),
                                                      );
                                                  })(e, C),
                                              ),
                                          }),
                                  ],
                              }),
                }),
            ],
        },
        l.tier,
    );
}
let b = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: s, subscriptionsRequired: l } = e;
        return null !== s ? s : n ? (0, i.jsx)(C, { transform: t }) : (0, i.jsx)(T, { subscriptionsRequired: l });
    },
    C = (e) => {
        let { transform: t } = e;
        return (0, i.jsx)(a.animated.div, {
            style: { transform: t },
            className: p.mM,
            children: _.intl.string(_.t.dNGM0v),
        });
    },
    T = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children: _.intl.format(_.t.t2Wbo1, { required: t, decorator: "" }),
                }),
                (0, i.jsx)(d.XAi, { size: "md", color: "currentColor", className: p.Qe }),
            ],
        });
    };
