(s.d(t, { l: () => eR, A: () => eM }), s(321073));
var n = s(477900),
    r = s(582128),
    a = s(503698),
    i = s.n(a),
    l = s(284009),
    c = s.n(l),
    u = s(435558),
    o = s.n(u),
    d = s(17928),
    m = s(430993),
    p = s(364840),
    x = s(462887),
    f = s(97808),
    C = s(834730),
    h = s(123292),
    L = s(602853),
    v = s(661531),
    g = s(403581),
    E = s(778712),
    A = s(315629),
    N = s(104510),
    T = s(289873),
    I = s(297264),
    j = s(228366),
    S = s(820739),
    _ = s(736653),
    P = s(775602),
    b = s(793574),
    y = s(688810),
    R = s(822123),
    M = s(770335),
    U = s(548118),
    O = s(931959),
    D = s(148355),
    w = s(591179),
    G = s(999291),
    k = s(903209),
    B = s(270574),
    F = s(402860),
    H = s(915614),
    W = s(946356),
    V = s(939496),
    z = s(780964),
    Y = s(766075),
    K = s(71393),
    X = s(287809),
    Z = s(178368),
    q = s(174459),
    $ = s(486020),
    J = s(975571),
    Q = s(158045),
    ee = s(19575),
    et = s(19886),
    es = s(627380),
    en = s(704640),
    er = s(425713),
    ea = s(30084),
    ei = s(862482),
    el = s(930861),
    ec = s(821609),
    eu = s(375708),
    eo = s(516003);
let ed = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: s, onContinue: r } = e,
        a = (0, _.Ay)(),
        i = (0, x.M)(a) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == t
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
                              (0, n.jsx)("img", { alt: "", src: i, className: eo.lR }),
                              (0, n.jsxs)("div", {
                                  className: eo.t2,
                                  children: [
                                      (0, n.jsx)(C.E, {
                                          variant: "text-md/medium",
                                          className: eo.PU,
                                          children: eu.intl.format(eu.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.intervalCount,
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eo.$t,
                                          children: [
                                              (0, n.jsxs)(el.wL, {
                                                  "data-migration-pending": !0,
                                                  className: eo.Oy,
                                                  innerClassName: eo.iO,
                                                  look: ei.pR.OUTLINED,
                                                  color: ei.XD.CUSTOM,
                                                  onClick: () => s?.(),
                                                  children: [
                                                      (0, n.jsx)(g.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eo.Fl,
                                                      }),
                                                      (0, n.jsx)(C.E, {
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
var em = s(237412),
    ep = s(202541),
    ex = s(652215),
    ef = s(518144);
let eC = "/assets/34c8999cfe272b23.svg",
    eh = "/assets/893dc4a04464a54a.svg",
    eL = "/assets/b3a9ce9d2cf3ff2f.svg",
    ev = ee.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    eg = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eh,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: eC,
        TR: eL,
    },
    eE = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eh,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: eC,
        TR: eL,
    };
function eA() {
    let e = (0, _.Ay)();
    return (0, x.M)(e) ? eE : eg;
}
function eN(e) {
    let { description: t, onLearnMore: s, renderVisual: a } = e,
        l = r.useContext(ey).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: i()(ef.Kw, { [ef.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: i()(ef.p3, { [ef.u0]: l }),
                children: [
                    (0, n.jsx)(C.E, { variant: "text-md/normal", children: t }),
                    (0, n.jsx)(h.Q, { onClick: s, text: eu.intl.string(eu.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: i()(ef.aS, { [ef.u0]: l }), children: a() }),
        ],
    });
}
function eT(e) {
    let { ...t } = e,
        { theme: s } = (0, V.E)(),
        r = (0, L.r)(v.A.colors.INTERACTIVE_TEXT_ACTIVE, s).hex();
    return (0, n.jsx)(g.t, { size: "md", ...t, color: r });
}
function eI(e) {
    let t,
        { currentUser: s, premiumType: r, onClose: a } = e,
        i = (0, G.Ay)(s.id),
        l = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        c = (0, w.X)("PremiumSubscriptionWhatYouLoseModal"),
        u = r === ep.PremiumTypes.TIER_1;
    return (
        (t =
            i?.premiumType === ep.PremiumTypes.TIER_2
                ? (0, n.jsxs)(W.A, {
                      user: s,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ef.Kq,
                      children: [
                          (0, n.jsx)(H.o, {
                              user: s,
                              displayProfile: i,
                              avatarSize: E._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(ev, {
                              className: ef.jU,
                              src: s.getAvatarURL(void 0, (0, E.FT)(E._3.SIZE_56), !l),
                              size: E._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: ef.b$,
                              children: [
                                  (0, n.jsx)(B.A, { className: ef.Bj, usernameClass: ef.TE, name: s.toString() }),
                                  (0, n.jsx)(eT, { className: ef.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: ef.xl,
                      children: [
                          (0, n.jsx)(ev, {
                              className: ef.wK,
                              src: s.getAvatarURL(void 0, (0, E.FT)(E._3.SIZE_56), !l),
                              size: E._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: ef.Un,
                              children: [
                                  (0, n.jsx)(B.A, { className: ef.Bj, usernameClass: ef.TE, name: s.toString() }),
                                  (0, n.jsx)(g.t, { size: "md", color: "currentColor", className: ef.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eN, {
            description: u ? eu.intl.format(eu.t.xCaYwE, {}) : eu.intl.format(eu.t["gpqr+n"], {}),
            onLearnMore: function () {
                (a(),
                    c ? (0, F.openUserProfileModal)({ userId: s.id }) : (0, Y.openUserSettings)(z.X.PROFILE_PANEL),
                    q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    }));
            },
            renderVisual: () => t,
        })
    );
}
function ej(e) {
    let { currentUser: t, onClose: s } = e,
        r = (0, et.$F)(),
        { analyticsLocations: a } = (0, y.Ay)(b.A.PREMIUM_UNCANCEL_MODAL),
        i = (0, et.Xb)(),
        l = (0, es.t)(),
        c = r?.id ?? ep.Ac.PREMIUM_TENURE_1_MONTH,
        u = (0, en.A)(c);
    if (!(0, Q.YE)(t, ep.PremiumTypes.TIER_2) || null == i) return null;
    let o = r?.status ?? et.Wo.UPCOMING,
        d = r?.nameUnformatted ?? ep.VD[ep.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, er.I)(c).standard,
        p = eu.intl.string(d),
        x = o === et.Wo.EARNED || o === et.Wo.WITHHELD,
        f = l?.days ?? 1,
        C = eu.t.pwkxYF;
    if (x) {
        let e = Math.max((0, Q.To)(i), 1);
        e >= 365 ? ((f = Math.floor(e / 365)), (C = eu.t["/ojPfi"])) : ((f = e), (C = eu.t.IItWYo));
    }
    return (0, n.jsx)(eN, {
        description: eu.intl.format(C, { time: f }),
        onLearnMore: function () {
            (s(),
                (0, ea.D)({ analyticsLocations: a, displayProfile: null }),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" }));
        },
        renderVisual: () =>
            (0, n.jsx)(A.h, {
                className: ef.nc,
                color: u,
                children: (0, n.jsx)("img", { alt: p, src: m, className: ef.pq }),
            }),
    });
}
function eS(e) {
    let { premiumType: t } = e,
        s = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        r = (0, R.Fj)(null)
            .filter((e) => e.type === M.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, d.yK)([O.A], () => O.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        i = eA().emojiStickersVisual,
        l = t === ep.PremiumTypes.TIER_1;
    return (0, n.jsx)(eN, {
        description: l ? eu.intl.format(eu.t.couiKJ, {}) : eu.intl.format(eu.t["0hUHi6"], {}),
        onLearnMore: function () {
            (window.open(J.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" }));
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!l && null != a && a.length > 0)
                ? (0, n.jsxs)("div", {
                      className: ef.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : $.Ay.getEmojiURL({ id: e.id, animated: !s && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: ef.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : a.map((e) =>
                                    (0, n.jsx)(
                                        D.A,
                                        { disableAnimation: s, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: ef.OP, alt: "", src: i }),
    });
}
function e_(e) {
    let { premiumType: t, onClose: s } = e;
    r.useEffect(() => j.h.wait(() => (0, S.CD)()), []);
    let a = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        [l, c] = (0, d.yK)([Z.A, K.A], () => {
            let e = Z.A.boostSlots,
                t = new Map();
            o()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != K.A.getGuild(e)) {
                        let s = t.get(e) ?? 0;
                        t.set(e, s + 1);
                    }
                });
            let s = null,
                n = 0;
            return (
                t.size > 0 && ([s, n] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [K.A.getGuild(s), n]
            );
        }),
        u = null != l && c > 0,
        m = eA().boostItemVisual;
    return (0, n.jsx)(eN, {
        description: t === ep.PremiumTypes.TIER_1 ? eu.intl.format(eu.t.K4Hv69, {}) : eu.intl.format(eu.t.wRxEDW, {}),
        onLearnMore: function () {
            (s(),
                (0, Y.openUserSettings)(z.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" }));
        },
        renderVisual: () =>
            u
                ? (0, n.jsx)("div", {
                      className: ef.Ht,
                      children: (0, n.jsxs)("div", {
                          className: ef.W5,
                          children: [
                              (0, n.jsx)(U.Ay, { guild: l, size: U.Ay.Sizes.MEDIUM, animate: !a, className: ef.Hc }),
                              (0, n.jsxs)("div", {
                                  className: ef.IA,
                                  children: [
                                      (0, n.jsx)(C.E, {
                                          variant: "text-md/normal",
                                          className: i()(ef.v, ef.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: ef.i$,
                                          children: [
                                              (0, n.jsx)(N._, {
                                                  color: v.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ef.jZ,
                                              }),
                                              (0, n.jsx)(C.E, {
                                                  variant: "text-xs/normal",
                                                  className: i()(ef.v, ef.x2),
                                                  children: eu.intl.format(eu.t["Ou/g/P"], { boostCount: c }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, n.jsx)("img", { alt: "", src: m }),
    });
}
function eP() {
    let e = eA().screenShareItemVisual;
    return (0, n.jsx)(eN, {
        description: eu.intl.format(eu.t.wK04T1, {}),
        onLearnMore: function () {
            (window.open(J.A.getArticleURL(ex.MVz.STREAM_QUALITY_SETTINGS)),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" }));
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: e }),
    });
}
function eb(e) {
    let { premiumType: t } = e,
        s = eA().uploadsMessagesItemVisual;
    return (0, n.jsx)(eN, {
        description: t === ep.PremiumTypes.TIER_2 ? eu.intl.format(eu.t.GsOFRJ, {}) : eu.intl.format(eu.t.wFWO6D, {}),
        onLearnMore: function () {
            (window.open(J.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" }));
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: s }),
    });
}
let ey = r.createContext({ isPremiumRebrand: !1 });
function eR(e) {
    let { currentUser: t, premiumType: s, onClose: a, isDowngrade: l = !1, isPremiumRebrand: c = !1 } = e,
        u = r.useMemo(() => {
            let e = [];
            switch (s) {
                case ep.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(eS, { premiumType: s }), (0, n.jsx)(eb, { premiumType: s }));
                    break;
                case ep.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(eI, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(eP, {}, "screen-share-item"),
                              (0, n.jsx)(e_, { premiumType: s, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eI, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(eS, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(eP, {}, "screen-share-item"),
                              (0, n.jsx)(eb, { premiumType: s }, "uploads-item"),
                              (0, n.jsx)(e_, { premiumType: s, onClose: a }, "boost-item"),
                          );
                    break;
                case ep.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(eI, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(e_, { premiumType: s, onClose: a }, "boost-item"),
                              (0, n.jsx)(eP, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(ej, { currentUser: t, onClose: a }, "badge-item"),
                              (0, n.jsx)(eI, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(eS, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(e_, { premiumType: s, onClose: a }, "boost-item"),
                              (0, n.jsx)(eP, {}, "screen-share-item"),
                              (0, n.jsx)(eb, { premiumType: s }, "uploads-item"),
                          );
            }
            return e;
        }, [s, t, a, l]);
    return (0, n.jsx)(ey.Provider, {
        value: { isPremiumRebrand: c },
        children: (0, n.jsx)("div", {
            className: i()(ef.xP, { [ef.u0]: c, [ef.mK]: c && u.length <= 2 }),
            children: u,
        }),
    });
}
let eM = function (e) {
    let {
            premiumType: t,
            titleText: s,
            subtitleText: a,
            footer: i,
            onClose: l,
            onDiscountClaim: u,
            onContinue: o,
            analyticsLocations: x,
            isLoading: f = !1,
            churnUserDiscountOffer: h = null,
            isDowngrade: L = !1,
            subtitleIcon: v,
            subtitleClassName: g,
        } = e,
        E = (0, d.bG)([X.default], () => {
            let e = X.default.getCurrentUser();
            return (c()(null != e, "ProfileItem: currentUser cannot be undefined"), e);
        });
    r.useEffect(() => {
        (0, k.A)(E.id, E.getAvatarURL(null, 80));
    }, [E]);
    let A = null != h && !f;
    return (r.useEffect(() => {
        A &&
            q.default.track(ex.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: h?.discountId,
            });
    }, [A, x, h]),
    f)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsx)("div", {
                          className: ef.rf,
                          children: (0, n.jsx)(T.y, { className: ef.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsxs)("div", {
                          className: ef.rf,
                          children: [
                              (0, n.jsx)(I.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ef.DD,
                                  children: s,
                              }),
                              (0, n.jsxs)("div", {
                                  className: g,
                                  children: [v, (0, n.jsx)(C.E, { variant: "text-md/normal", children: a })],
                              }),
                              (0, n.jsx)(eR, { currentUser: E, premiumType: t, onClose: l, isDowngrade: L }),
                          ],
                      }),
                  }),
                  !A && (0, n.jsx)(p.j, { children: i }),
                  A && (0, n.jsx)(ed, { churnUserDiscountOffer: h, onDiscountClaim: u, onContinue: o }),
              ],
          });
};
