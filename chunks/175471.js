"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(522160),
    o = n(311907),
    d = n(397927),
    c = n(474001),
    u = n(309326),
    g = n(580043),
    m = n(71393),
    x = n(213733),
    h = n(652215),
    _ = n(985018),
    A = n(306769);
let p = { tension: 200, friction: 20 },
    f = { ...p, clamp: !0 };
function j(e) {
    let [t, n] = s.useState(0),
        { numUnlocked: l, numRequired: o } = e,
        u = () => {
            n(1);
        },
        g = () => {
            n(2);
        },
        m = 2 === t,
        x = 1 === t;
    if (!(!(l >= o) && l / o >= 0.8) || m) return null;
    let h = x || m ? A.R : null,
        p = x ? c.A.Stages.FLYING : c.A.Stages.HOVERING;
    return (0, i.jsx)(d.c7X, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: f,
        shouldAnimate: "animate-always",
        children: (e) =>
            (0, i.jsxs)(a.animated.div, {
                className: A.Pc,
                style: e,
                children: [
                    (0, i.jsx)(c.A, { className: A.a_, stage: p, onFlyingComplete: g }),
                    (0, i.jsx)("div", {
                        className: r()(A.Sb, h),
                        children: _.intl.format(_.t.qV3Erl, { numLeft: o - l }),
                    }),
                    (0, i.jsx)(d.DUT, {
                        onClick: u,
                        className: r()(A.dE, h),
                        children: (0, i.jsx)(d.aXh, { size: "md", color: "currentColor", className: A.sz }),
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
            subscriptionsRequired: g,
            subscriptionCount: m,
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
            config: p,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: r()({ [A.SJ]: !t, [A.Xx]: l, [A.Mq]: !l }, h),
                    ref: _,
                    children: (0, i.jsxs)("div", {
                        className: A.H3,
                        children: [
                            (0, i.jsx)(x.A, {
                                tier: o.tier,
                                color: "currentColor",
                                className: r()(A.w5, { [A.AU]: !l }),
                            }),
                            (0, i.jsx)("div", { className: r()(A.TJ, { [A.bY]: l }), children: o.title }),
                            c
                                ? (0, i.jsx)(b, {
                                      transform: e?.unlockedTranslateY.to((e) => `translate3d(0, ${e}px, 0)`),
                                      headerButton: u,
                                      subscriptionsRequired: g,
                                      hasAnimatedUnlocked: l,
                                  })
                                : null,
                            (0, i.jsx)(j, { numUnlocked: m, numRequired: g }),
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
            withCardBody: p = !0,
            guildId: f,
            showHeaderLockStatus: j = !0,
        } = e,
        E = (0, o.bG)([m.A], () => m.A.getGuild(f)?.premiumTier ?? h.TVA.NONE),
        b = h.M2T[l.tier],
        T = a && l.tier <= E,
        C = l.tier !== h.TVA.NONE && l.tier !== h.TVA.TIER_1;
    return (0, i.jsxs)(
        "div",
        {
            className: r()(A.Zm, { [A.Ab]: c }),
            children: [
                (0, i.jsx)(N, {
                    subscriptionCount: n,
                    tier: l,
                    headerButton: x,
                    showHeaderLockStatus: j,
                    onSetRef: (e) => {
                        null != s && s(e, l);
                    },
                    withCardBody: p,
                    guildId: f,
                    hasBottomMargin: c,
                    subscriptionsRequired: b,
                    hasAnimatedUnlocked: T,
                    isAnimatedTo: a,
                }),
                (0, i.jsx)("div", {
                    className: r()({ [A.J8]: p }),
                    children:
                        null != t
                            ? t
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      C
                                          ? (0, i.jsx)("div", { className: A.p8, children: _.intl.string(_.t.oKzyRQ) })
                                          : null,
                                      null != l.perks &&
                                          (0, i.jsx)("div", {
                                              className: A.md,
                                              children: l.perks.map((e) =>
                                                  ((e, t) => {
                                                      let { Icon: n, className: s } = (0, u.a)(e.icon, t);
                                                      return (0, i.jsxs)(
                                                          "div",
                                                          {
                                                              className: A.d_,
                                                              children: [
                                                                  (0, i.jsx)(g.A, {
                                                                      name: String(e.icon),
                                                                      icon: n,
                                                                      className: A.kf,
                                                                      iconClassName: s,
                                                                  }),
                                                                  (0, i.jsxs)("div", {
                                                                      className: A.uL,
                                                                      children: [
                                                                          (0, i.jsxs)("div", {
                                                                              className: A.hY,
                                                                              children: [
                                                                                  e.title,
                                                                                  e.isNew
                                                                                      ? (0, i.jsx)(d.LpS, {
                                                                                            className: A.Ad,
                                                                                            text: _.intl.string(
                                                                                                _.t.y2b7CA,
                                                                                            ),
                                                                                        })
                                                                                      : null,
                                                                              ],
                                                                          }),
                                                                          (0, i.jsx)("div", {
                                                                              className: A.jV,
                                                                              children: e.description,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          },
                                                          e.title?.toString(),
                                                      );
                                                  })(e, T),
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
        return null !== s ? s : n ? (0, i.jsx)(T, { transform: t }) : (0, i.jsx)(C, { subscriptionsRequired: l });
    },
    T = (e) => {
        let { transform: t } = e;
        return (0, i.jsx)(a.animated.div, {
            style: { transform: t },
            className: A.mM,
            children: _.intl.string(_.t.dNGM0v),
        });
    },
    C = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children: _.intl.format(_.t.t2Wbo1, { required: t, decorator: "" }),
                }),
                (0, i.jsx)(d.XAi, { size: "md", color: "currentColor", className: A.Qe }),
            ],
        });
    };
