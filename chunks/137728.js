(s.d(t, { l: () => eD, A: () => eP }), s(321073));
var n = s(477900),
    a = s(582128),
    r = s(503698),
    i = s.n(r),
    l = s(284009),
    o = s.n(l),
    c = s(435558),
    u = s.n(c),
    d = s(17928),
    m = s(430993),
    E = s(364840),
    p = s(462887),
    _ = s(97808),
    L = s(834730),
    A = s(123292),
    h = s(602853),
    N = s(661531),
    S = s(403581),
    I = s(778712),
    T = s(315629),
    C = s(104510),
    f = s(289873),
    x = s(297264),
    g = s(820739),
    j = s(736653),
    y = s(775602),
    R = s(793574),
    O = s(688810),
    D = s(822123),
    P = s(770335),
    v = s(548118),
    M = s(931959),
    b = s(148355),
    w = s(591179),
    U = s(999291),
    B = s(903209),
    F = s(270574),
    G = s(402860),
    k = s(915614),
    V = s(946356),
    H = s(939496),
    W = s(780964),
    Y = s(766075),
    z = s(71393),
    K = s(287809),
    X = s(178368),
    Z = s(174459),
    q = s(486020),
    Q = s(975571),
    $ = s(158045),
    J = s(19575),
    ee = s(19886),
    et = s(627380),
    es = s(704640),
    en = s(425713),
    ea = s(30084),
    er = s(862482),
    ei = s(930861),
    el = s(821609),
    eo = s(105292),
    ec = s(516003);
let eu = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: s, onContinue: a } = e,
        r = (0, j.Ay)(),
        i = (0, p.M)(r) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: ec.bR,
              children: [
                  (0, n.jsx)("div", { className: ec.v0 }),
                  (0, n.jsx)("div", { className: ec.X2 }),
                  (0, n.jsx)("div", {
                      className: ec.Dg,
                      children: (0, n.jsxs)("div", {
                          className: ec.xt,
                          children: [
                              (0, n.jsx)("img", { alt: "", src: i, className: ec.lR }),
                              (0, n.jsxs)("div", {
                                  className: ec.t2,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/medium",
                                          className: ec.PU,
                                          children: eo.intl.format(eo.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.intervalCount,
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: ec.$t,
                                          children: [
                                              (0, n.jsxs)(ei.wL, {
                                                  "data-migration-pending": !0,
                                                  className: ec.Oy,
                                                  innerClassName: ec.iO,
                                                  look: er.pR.OUTLINED,
                                                  color: er.XD.CUSTOM,
                                                  onClick: () => s?.(),
                                                  children: [
                                                      (0, n.jsx)(S.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: ec.Fl,
                                                      }),
                                                      (0, n.jsx)(L.E, {
                                                          variant: "text-sm/semibold",
                                                          className: ec.H0,
                                                          children: eo.intl.string(eo.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(el.$, {
                                                  variant: "primary",
                                                  text: eo.intl.string(eo.t["3PatSz"]),
                                                  onClick: () => a?.(),
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
var ed = s(637969),
    em = s(202541),
    eE = s(652215),
    ep = s(518144);
let e_ = "/assets/34c8999cfe272b23.svg",
    eL = "/assets/893dc4a04464a54a.svg",
    eA = "/assets/b3a9ce9d2cf3ff2f.svg",
    eh = J.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    eN = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eL,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: e_,
        TR: eA,
    },
    eS = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eL,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: e_,
        TR: eA,
    };
function eI() {
    let e = (0, j.Ay)();
    return (0, p.M)(e) ? eS : eN;
}
function eT(e) {
    let { description: t, onLearnMore: s, renderVisual: r } = e,
        l = a.useContext(eO).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: i()(ep.Kw, { [ep.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: i()(ep.p3, { [ep.u0]: l }),
                children: [
                    (0, n.jsx)(L.E, { variant: "text-md/normal", children: t }),
                    (0, n.jsx)(A.Q, { onClick: s, text: eo.intl.string(eo.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: i()(ep.aS, { [ep.u0]: l }), children: r() }),
        ],
    });
}
function eC(e) {
    let { ...t } = e,
        { theme: s } = (0, H.E)(),
        a = (0, h.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE, s).hex();
    return (0, n.jsx)(S.t, { size: "md", ...t, color: a });
}
function ef(e) {
    let t,
        { currentUser: s, premiumType: a, onClose: r } = e,
        i = (0, U.Ay)(s.id),
        l = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        o = (0, w.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = a === em.PremiumTypes.TIER_1;
    return (
        (t =
            i?.premiumType === em.PremiumTypes.TIER_2
                ? (0, n.jsxs)(V.A, {
                      user: s,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ep.Kq,
                      children: [
                          (0, n.jsx)(k.o, {
                              user: s,
                              displayProfile: i,
                              avatarSize: I._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(eh, {
                              className: ep.jU,
                              src: s.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: ep.b$,
                              children: [
                                  (0, n.jsx)(F.A, { className: ep.Bj, usernameClass: ep.TE, name: s.toString() }),
                                  (0, n.jsx)(eC, { className: ep.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: ep.xl,
                      children: [
                          (0, n.jsx)(eh, {
                              className: ep.wK,
                              src: s.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: ep.Un,
                              children: [
                                  (0, n.jsx)(F.A, { className: ep.Bj, usernameClass: ep.TE, name: s.toString() }),
                                  (0, n.jsx)(S.t, { size: "md", color: "currentColor", className: ep.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eT, {
            description: c ? eo.intl.format(eo.t.xCaYwE, {}) : eo.intl.format(eo.t["gpqr+n"], {}),
            onLearnMore: function () {
                (r(),
                    o ? (0, G.openUserProfileModal)({ userId: s.id }) : (0, Y.openUserSettings)(W.X.PROFILE_PANEL),
                    Z.default.track(eE.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    }));
            },
            renderVisual: () => t,
        })
    );
}
function ex(e) {
    let { currentUser: t, onClose: s } = e,
        a = (0, ee.$F)(),
        { analyticsLocations: r } = (0, O.Ay)(R.A.PREMIUM_UNCANCEL_MODAL),
        i = (0, ee.Xb)(),
        l = (0, et.t)(),
        o = a?.id ?? em.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, es.A)(o);
    if (!(0, $.YE)(t, em.PremiumTypes.TIER_2) || null == i) return null;
    let u = a?.status ?? ee.Wo.UPCOMING,
        d = a?.nameUnformatted ?? em.VD[em.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, en.I)(o).standard,
        E = eo.intl.string(d),
        p = u === ee.Wo.EARNED || u === ee.Wo.WITHHELD,
        _ = l?.days ?? 1,
        L = eo.t.pwkxYF;
    if (p) {
        let e = Math.max((0, $.To)(i), 1);
        e >= 365 ? ((_ = Math.floor(e / 365)), (L = eo.t["/ojPfi"])) : ((_ = e), (L = eo.t.IItWYo));
    }
    return (0, n.jsx)(eT, {
        description: eo.intl.format(L, { time: _ }),
        onLearnMore: function () {
            (s(),
                (0, ea.D)({ analyticsLocations: r, displayProfile: null }),
                Z.default.track(eE.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" }));
        },
        renderVisual: () =>
            (0, n.jsx)(T.h, {
                className: ep.nc,
                color: c,
                children: (0, n.jsx)("img", { alt: E, src: m, className: ep.pq }),
            }),
    });
}
function eg(e) {
    let { premiumType: t } = e,
        s = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        a = (0, D.Fj)(null)
            .filter((e) => e.type === P.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        r = (0, d.yK)([M.A], () => M.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)),
        i = eI().emojiStickersVisual,
        l = t === em.PremiumTypes.TIER_1;
    return (0, n.jsx)(eT, {
        description: l ? eo.intl.format(eo.t.couiKJ, {}) : eo.intl.format(eo.t["0hUHi6"], {}),
        onLearnMore: function () {
            (window.open(Q.A.getArticleURL(eE.MVz.PREMIUM_DETAILS)),
                Z.default.track(eE.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" }));
        },
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != r && r.length > 0)
                ? (0, n.jsxs)("div", {
                      className: ep.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : q.Ay.getEmojiURL({ id: e.id, animated: !s && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: ep.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : r.map((e) =>
                                    (0, n.jsx)(
                                        b.A,
                                        { disableAnimation: s, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: ep.OP, alt: "", src: i }),
    });
}
function ej(e) {
    let { premiumType: t, onClose: s } = e;
    a.useEffect(() => {
        (0, g.CD)();
    }, []);
    let r = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [l, o] = (0, d.yK)([X.A, z.A], () => {
            let e = X.A.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != z.A.getGuild(e)) {
                        let s = t.get(e) ?? 0;
                        t.set(e, s + 1);
                    }
                });
            let s = null,
                n = 0;
            return (
                t.size > 0 && ([s, n] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [z.A.getGuild(s), n]
            );
        }),
        c = null != l && o > 0,
        m = eI().boostItemVisual;
    return (0, n.jsx)(eT, {
        description: t === em.PremiumTypes.TIER_1 ? eo.intl.format(eo.t.K4Hv69, {}) : eo.intl.format(eo.t.wRxEDW, {}),
        onLearnMore: function () {
            (s(),
                (0, Y.openUserSettings)(W.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                Z.default.track(eE.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" }));
        },
        renderVisual: () =>
            c
                ? (0, n.jsx)("div", {
                      className: ep.Ht,
                      children: (0, n.jsxs)("div", {
                          className: ep.W5,
                          children: [
                              (0, n.jsx)(v.Ay, { guild: l, size: v.Ay.Sizes.MEDIUM, animate: !r, className: ep.Hc }),
                              (0, n.jsxs)("div", {
                                  className: ep.IA,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/normal",
                                          className: i()(ep.v, ep.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: ep.i$,
                                          children: [
                                              (0, n.jsx)(C._, {
                                                  color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ep.jZ,
                                              }),
                                              (0, n.jsx)(L.E, {
                                                  variant: "text-xs/normal",
                                                  className: i()(ep.v, ep.x2),
                                                  children: eo.intl.format(eo.t["Ou/g/P"], { boostCount: o }),
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
function ey() {
    let e = eI().screenShareItemVisual;
    return (0, n.jsx)(eT, {
        description: eo.intl.format(eo.t.wK04T1, {}),
        onLearnMore: function () {
            (window.open(Q.A.getArticleURL(eE.MVz.STREAM_QUALITY_SETTINGS)),
                Z.default.track(eE.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" }));
        },
        renderVisual: () => (0, n.jsx)("img", { className: ep.OP, alt: "", src: e }),
    });
}
function eR(e) {
    let { premiumType: t } = e,
        s = eI().uploadsMessagesItemVisual;
    return (0, n.jsx)(eT, {
        description: t === em.PremiumTypes.TIER_2 ? eo.intl.format(eo.t.GsOFRJ, {}) : eo.intl.format(eo.t.wFWO6D, {}),
        onLearnMore: function () {
            (window.open(Q.A.getArticleURL(eE.MVz.PREMIUM_DETAILS)),
                Z.default.track(eE.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" }));
        },
        renderVisual: () => (0, n.jsx)("img", { className: ep.OP, alt: "", src: s }),
    });
}
let eO = a.createContext({ isPremiumRebrand: !1 });
function eD(e) {
    let { currentUser: t, premiumType: s, onClose: r, isDowngrade: l = !1, isPremiumRebrand: o = !1 } = e,
        c = a.useMemo(() => {
            let e = [];
            switch (s) {
                case em.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(eg, { premiumType: s }), (0, n.jsx)(eR, { premiumType: s }));
                    break;
                case em.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: r }, "profile-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(ej, { premiumType: s, onClose: r }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: r }, "profile-item"),
                              (0, n.jsx)(eg, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eR, { premiumType: s }, "uploads-item"),
                              (0, n.jsx)(ej, { premiumType: s, onClose: r }, "boost-item"),
                          );
                    break;
                case em.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: r }, "profile-item"),
                              (0, n.jsx)(ej, { premiumType: s, onClose: r }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(ex, { currentUser: t, onClose: r }, "badge-item"),
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: r }, "profile-item"),
                              (0, n.jsx)(eg, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(ej, { premiumType: s, onClose: r }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eR, { premiumType: s }, "uploads-item"),
                          );
            }
            return e;
        }, [s, t, r, l]),
        u = a.useMemo(() => ({ isPremiumRebrand: o }), [o]);
    return (0, n.jsx)(eO.Provider, {
        value: u,
        children: (0, n.jsx)("div", {
            className: i()(ep.xP, { [ep.u0]: o, [ep.mK]: o && c.length <= 2 }),
            children: c,
        }),
    });
}
let eP = function (e) {
    let {
            premiumType: t,
            titleText: s,
            subtitleText: r,
            footer: i,
            onClose: l,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: p,
            isLoading: _ = !1,
            churnUserDiscountOffer: A = null,
            isDowngrade: h = !1,
            subtitleIcon: N,
            subtitleClassName: S,
        } = e,
        I = (0, d.bG)([K.default], () => {
            let e = K.default.getCurrentUser();
            return (o()(null != e, "ProfileItem: currentUser cannot be undefined"), e);
        });
    a.useEffect(() => {
        (0, B.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != A && !_;
    return (a.useEffect(() => {
        T &&
            Z.default.track(eE.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: p,
                discount_id: A?.discountId,
            });
    }, [T, p, A]),
    _)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ed.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsx)("div", {
                          className: ep.rf,
                          children: (0, n.jsx)(f.y, { className: ep.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ed.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsxs)("div", {
                          className: ep.rf,
                          children: [
                              (0, n.jsx)(x.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ep.DD,
                                  children: s,
                              }),
                              (0, n.jsxs)("div", {
                                  className: S,
                                  children: [N, (0, n.jsx)(L.E, { variant: "text-md/normal", children: r })],
                              }),
                              (0, n.jsx)(eD, { currentUser: I, premiumType: t, onClose: l, isDowngrade: h }),
                          ],
                      }),
                  }),
                  !T && (0, n.jsx)(E.j, { children: i }),
                  T && (0, n.jsx)(eu, { churnUserDiscountOffer: A, onDiscountClaim: c, onContinue: u }),
              ],
          });
};
