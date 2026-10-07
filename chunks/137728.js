(t.d(s, { l: () => eP, A: () => eR }), t(321073));
var n = t(477900),
    r = t(582128),
    i = t(503698),
    a = t.n(i),
    l = t(284009),
    c = t.n(l),
    u = t(435558),
    o = t.n(u),
    m = t(17928),
    d = t(430993),
    C = t(364840),
    x = t(462887),
    L = t(97808),
    p = t(834730),
    f = t(123292),
    h = t(602853),
    j = t(661531),
    N = t(403581),
    A = t(778712),
    T = t(315629),
    g = t(104510),
    E = t(289873),
    S = t(297264),
    I = t(73153),
    v = t(820739),
    _ = t(736653),
    y = t(775602),
    M = t(793574),
    b = t(688810),
    P = t(822123),
    R = t(770335),
    U = t(548118),
    w = t(931959),
    D = t(148355),
    F = t(591179),
    O = t(999291),
    k = t(903209),
    H = t(270574),
    B = t(402860),
    V = t(915614),
    W = t(946356),
    G = t(939496),
    z = t(780964),
    K = t(766075),
    Y = t(71393),
    Z = t(287809),
    q = t(178368),
    X = t(174459),
    $ = t(486020),
    J = t(975571),
    Q = t(158045),
    ee = t(19575),
    es = t(19886),
    et = t(627380),
    en = t(704640),
    er = t(425713),
    ei = t(30084),
    ea = t(862482),
    el = t(930861),
    ec = t(821609),
    eu = t(375708),
    eo = t(516003);
let em = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: r } = e,
        i = (0, _.Ay)(),
        a = (0, x.M)(i) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: eo.bR,
              children: [
                  (0, n.jsx)("div", { className: eo.v0 }),
                  (0, n.jsx)("div", { className: eo.X2 }),
                  (0, n.jsx)("div", {
                      className: eo.Dg,
                      children: (0, n.jsxs)("div", {
                          className: eo.xt,
                          children: [
                              (0, n.jsx)("img", { alt: "", src: a, className: eo.lR }),
                              (0, n.jsxs)("div", {
                                  className: eo.t2,
                                  children: [
                                      (0, n.jsx)(p.E, {
                                          variant: "text-md/medium",
                                          className: eo.PU,
                                          children: eu.intl.format(eu.t["2gem05"], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.intervalCount,
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eo.$t,
                                          children: [
                                              (0, n.jsxs)(el.wL, {
                                                  "data-migration-pending": !0,
                                                  className: eo.Oy,
                                                  innerClassName: eo.iO,
                                                  look: ea.pR.OUTLINED,
                                                  color: ea.XD.CUSTOM,
                                                  onClick: () => t?.(),
                                                  children: [
                                                      (0, n.jsx)(N.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eo.Fl,
                                                      }),
                                                      (0, n.jsx)(p.E, {
                                                          variant: "text-sm/semibold",
                                                          className: eo.H0,
                                                          children: eu.intl.string(eu.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(ec.$, {
                                                  variant: "primary",
                                                  text: eu.intl.string(eu.t["3PatSz"]),
                                                  onClick: () => r?.(),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
var ed = t(341774),
    eC = t(202541),
    ex = t(652215),
    eL = t(518144);
let ep = "/assets/34c8999cfe272b23.svg",
    ef = "/assets/893dc4a04464a54a.svg",
    eh = "/assets/b3a9ce9d2cf3ff2f.svg",
    ej = ee.Ay.getEnableHardwareAcceleration() ? L.Js : L.eu,
    eN = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: ef,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: ep,
        TR: eh,
    },
    eA = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: ef,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: ep,
        TR: eh,
    };
function eT() {
    let e = (0, _.Ay)();
    return (0, x.M)(e) ? eA : eN;
}
function eg(e) {
    let { description: s, onLearnMore: t, renderVisual: i } = e,
        l = r.useContext(eb).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: a()(eL.Kw, { [eL.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: a()(eL.p3, { [eL.u0]: l }),
                children: [
                    (0, n.jsx)(p.E, { variant: "text-md/normal", children: s }),
                    (0, n.jsx)(f.Q, { onClick: t, text: eu.intl.string(eu.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: a()(eL.aS, { [eL.u0]: l }), children: i() }),
        ],
    });
}
function eE(e) {
    let { ...s } = e,
        { theme: t } = (0, G.E)(),
        r = (0, h.r)(j.A.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, n.jsx)(N.t, { size: "md", ...s, color: r });
}
function eS(e) {
    let s,
        { currentUser: t, premiumType: r, onClose: i } = e,
        a = (0, O.Ay)(t.id),
        l = (0, m.bG)([y.Ay], () => y.Ay.useReducedMotion),
        c = (0, F.X)("PremiumSubscriptionWhatYouLoseModal"),
        u = r === eC.PremiumTypes.TIER_1;
    return (
        (s =
            a?.premiumType === eC.PremiumTypes.TIER_2
                ? (0, n.jsxs)(W.A, {
                      user: t,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: eL.Kq,
                      children: [
                          (0, n.jsx)(V.o, {
                              user: t,
                              displayProfile: a,
                              avatarSize: A._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(ej, {
                              className: eL.jU,
                              src: t.getAvatarURL(void 0, (0, A.FT)(A._3.SIZE_56), !l),
                              size: A._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: eL.b$,
                              children: [
                                  (0, n.jsx)(H.A, { className: eL.Bj, usernameClass: eL.TE, name: t.toString() }),
                                  (0, n.jsx)(eE, { className: eL.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: eL.xl,
                      children: [
                          (0, n.jsx)(ej, {
                              className: eL.wK,
                              src: t.getAvatarURL(void 0, (0, A.FT)(A._3.SIZE_56), !l),
                              size: A._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: eL.Un,
                              children: [
                                  (0, n.jsx)(H.A, { className: eL.Bj, usernameClass: eL.TE, name: t.toString() }),
                                  (0, n.jsx)(N.t, { size: "md", color: "currentColor", className: eL.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eg, {
            description: u ? eu.intl.format(eu.t.xCaYwE, {}) : eu.intl.format(eu.t["gpqr+n"], {}),
            onLearnMore: function () {
                (i(),
                    c ? (0, B.openUserProfileModal)({ userId: t.id }) : (0, K.openUserSettings)(z.X.PROFILE_PANEL),
                    X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    }));
            },
            renderVisual: () => s,
        })
    );
}
function eI(e) {
    let { currentUser: s, onClose: t } = e,
        r = (0, es.$F)(),
        { analyticsLocations: i } = (0, b.Ay)(M.A.PREMIUM_UNCANCEL_MODAL),
        a = (0, es.Xb)(),
        l = (0, et.t)(),
        c = r?.id ?? eC.Ac.PREMIUM_TENURE_1_MONTH,
        u = (0, en.A)(c);
    if (!(0, Q.YE)(s, eC.PremiumTypes.TIER_2) || null == a) return null;
    let o = r?.status ?? es.Wo.UPCOMING,
        m = r?.nameUnformatted ?? eC.VD[eC.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, er.I)(c).standard,
        C = eu.intl.string(m),
        x = o === es.Wo.EARNED || o === es.Wo.WITHHELD,
        L = l?.days ?? 1,
        p = eu.t.pwkxYF;
    if (x) {
        let e = Math.max((0, Q.To)(a), 1);
        e >= 365 ? ((L = Math.floor(e / 365)), (p = eu.t["/ojPfi"])) : ((L = e), (p = eu.t.IItWYo));
    }
    return (0, n.jsx)(eg, {
        description: eu.intl.format(p, { time: L }),
        onLearnMore: function () {
            (t(),
                (0, ei.D)({ analyticsLocations: i, displayProfile: null }),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" }));
        },
        renderVisual: () =>
            (0, n.jsx)(T.h, {
                className: eL.nc,
                color: u,
                children: (0, n.jsx)("img", { alt: C, src: d, className: eL.pq }),
            }),
    });
}
function ev(e) {
    let { premiumType: s } = e,
        t = (0, m.bG)([y.Ay], () => y.Ay.useReducedMotion),
        r = (0, P.Fj)(null)
            .filter((e) => e.type === R.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, m.yK)([w.A], () => w.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        a = eT().emojiStickersVisual,
        l = s === eC.PremiumTypes.TIER_1;
    return (0, n.jsx)(eg, {
        description: l ? eu.intl.format(eu.t.couiKJ, {}) : eu.intl.format(eu.t["0hUHi6"], {}),
        onLearnMore: function () {
            (window.open(J.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" }));
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!l && null != i && i.length > 0)
                ? (0, n.jsxs)("div", {
                      className: eL.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : $.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: eL.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          l
                              ? null
                              : i.map((e) =>
                                    (0, n.jsx)(
                                        D.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: eL.OP, alt: "", src: a }),
    });
}
function e_(e) {
    let { premiumType: s, onClose: t } = e;
    r.useEffect(() => I.h.wait(() => (0, v.CD)()), []);
    let i = (0, m.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [l, c] = (0, m.yK)([q.A, Y.A], () => {
            let e = q.A.boostSlots,
                s = new Map();
            o()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != Y.A.getGuild(e)) {
                        let t = s.get(e) ?? 0;
                        s.set(e, t + 1);
                    }
                });
            let t = null,
                n = 0;
            return (
                s.size > 0 && ([t, n] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [Y.A.getGuild(t), n]
            );
        }),
        u = null != l && c > 0,
        d = eT().boostItemVisual;
    return (0, n.jsx)(eg, {
        description: s === eC.PremiumTypes.TIER_1 ? eu.intl.format(eu.t.K4Hv69, {}) : eu.intl.format(eu.t.wRxEDW, {}),
        onLearnMore: function () {
            (t(),
                (0, K.openUserSettings)(z.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" }));
        },
        renderVisual: () =>
            u
                ? (0, n.jsx)("div", {
                      className: eL.Ht,
                      children: (0, n.jsxs)("div", {
                          className: eL.W5,
                          children: [
                              (0, n.jsx)(U.Ay, { guild: l, size: U.Ay.Sizes.MEDIUM, animate: !i, className: eL.Hc }),
                              (0, n.jsxs)("div", {
                                  className: eL.IA,
                                  children: [
                                      (0, n.jsx)(p.E, {
                                          variant: "text-md/normal",
                                          className: a()(eL.v, eL.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eL.i$,
                                          children: [
                                              (0, n.jsx)(g._, {
                                                  color: j.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: eL.jZ,
                                              }),
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-xs/normal",
                                                  className: a()(eL.v, eL.x2),
                                                  children: eu.intl.format(eu.t["Ou/g/P"], { boostCount: c }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, n.jsx)("img", { alt: "", src: d }),
    });
}
function ey() {
    let e = eT().screenShareItemVisual;
    return (0, n.jsx)(eg, {
        description: eu.intl.format(eu.t.wK04T1, {}),
        onLearnMore: function () {
            (window.open(J.A.getArticleURL(ex.MVz.STREAM_QUALITY_SETTINGS)),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" }));
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: e }),
    });
}
function eM(e) {
    let { premiumType: s } = e,
        t = eT().uploadsMessagesItemVisual;
    return (0, n.jsx)(eg, {
        description: s === eC.PremiumTypes.TIER_2 ? eu.intl.format(eu.t.GsOFRJ, {}) : eu.intl.format(eu.t.wFWO6D, {}),
        onLearnMore: function () {
            (window.open(J.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" }));
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: t }),
    });
}
let eb = r.createContext({ isPremiumRebrand: !1 });
function eP(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: l = !1, isPremiumRebrand: c = !1 } = e,
        u = r.useMemo(() => {
            let e = [];
            switch (t) {
                case eC.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(ev, { premiumType: t }), (0, n.jsx)(eM, { premiumType: t }));
                    break;
                case eC.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(eS, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eS, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, n.jsx)(ev, { premiumType: t }, "emoji-stickers-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eM, { premiumType: t }, "uploads-item"),
                              (0, n.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                          );
                    break;
                case eC.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(eS, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, n.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eI, { currentUser: s, onClose: i }, "badge-item"),
                              (0, n.jsx)(eS, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, n.jsx)(ev, { premiumType: t }, "emoji-stickers-item"),
                              (0, n.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eM, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, i, l]);
    return (0, n.jsx)(eb.Provider, {
        value: { isPremiumRebrand: c },
        children: (0, n.jsx)("div", {
            className: a()(eL.xP, { [eL.u0]: c, [eL.mK]: c && u.length <= 2 }),
            children: u,
        }),
    });
}
let eR = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: i,
            footer: a,
            onClose: l,
            onDiscountClaim: u,
            onContinue: o,
            analyticsLocations: x,
            isLoading: L = !1,
            churnUserDiscountOffer: f = null,
            isDowngrade: h = !1,
            subtitleIcon: j,
            subtitleClassName: N,
        } = e,
        A = (0, m.bG)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return (c()(null != e, "ProfileItem: currentUser cannot be undefined"), e);
        });
    r.useEffect(() => {
        (0, k.A)(A.id, A.getAvatarURL(null, 80));
    }, [A]);
    let T = null != f && !L;
    return (r.useEffect(() => {
        T &&
            X.default.track(ex.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: f?.discountId,
            });
    }, [T, x, f]),
    L)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ed.A, { premiumType: s, onClose: l }),
                  (0, n.jsx)(d.c, {
                      children: (0, n.jsx)("div", {
                          className: eL.rf,
                          children: (0, n.jsx)(E.y, { className: eL.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ed.A, { premiumType: s, onClose: l }),
                  (0, n.jsx)(d.c, {
                      children: (0, n.jsxs)("div", {
                          className: eL.rf,
                          children: [
                              (0, n.jsx)(S.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: eL.DD,
                                  children: t,
                              }),
                              (0, n.jsxs)("div", {
                                  className: N,
                                  children: [j, (0, n.jsx)(p.E, { variant: "text-md/normal", children: i })],
                              }),
                              (0, n.jsx)(eP, { currentUser: A, premiumType: s, onClose: l, isDowngrade: h }),
                          ],
                      }),
                  }),
                  !T && (0, n.jsx)(C.j, { children: a }),
                  T && (0, n.jsx)(em, { churnUserDiscountOffer: f, onDiscountClaim: u, onContinue: o }),
              ],
          });
};
