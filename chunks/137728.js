t.d(s, { l: () => eP, A: () => eb }), t(321073);
var n = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(284009),
    c = t.n(l),
    u = t(735438),
    o = t.n(u),
    d = t(17928),
    m = t(430993),
    C = t(364840),
    x = t(462887),
    p = t(97808),
    L = t(834730),
    h = t(123292),
    j = t(602853),
    f = t(661531),
    g = t(403581),
    E = t(778712),
    T = t(315629),
    N = t(104510),
    A = t(289873),
    I = t(534514),
    _ = t(228366),
    v = t(820739),
    S = t(736653),
    M = t(775602),
    y = t(793574),
    R = t(688810),
    P = t(822123),
    b = t(770335),
    U = t(548118),
    D = t(931959),
    w = t(148355),
    F = t(591179),
    O = t(999291),
    k = t(903209),
    B = t(270574),
    V = t(975732),
    H = t(915614),
    W = t(946356),
    z = t(939496),
    G = t(780964),
    K = t(766075),
    Y = t(71393),
    q = t(287809),
    Z = t(178368),
    X = t(174459),
    $ = t(486020),
    J = t(975571),
    Q = t(428262),
    ee = t(19575),
    es = t(878784),
    et = t(627380),
    en = t(704640),
    ei = t(425713),
    er = t(30084),
    ea = t(862482),
    el = t(930861),
    ec = t(821609),
    eu = t(375708),
    eo = t(150252);
let ed = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: i } = e,
        r = (0, S.Ay)(),
        a = (0, x.M)(r) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
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
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/medium",
                                          className: eo.PU,
                                          children: eu.intl.format(eu.t["2gem05"], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.userUsageLimit,
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
                                                      (0, n.jsx)(g.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eo.Fl,
                                                      }),
                                                      (0, n.jsx)(L.E, {
                                                          variant: "text-sm/semibold",
                                                          className: eo.H0,
                                                          children: eu.intl.string(eu.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(ec.$, {
                                                  variant: "primary",
                                                  text: eu.intl.string(eu.t["3PatSz"]),
                                                  onClick: () => i?.(),
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
var em = t(237412),
    eC = t(202541),
    ex = t(652215),
    ep = t(414135);
let eL = "/assets/34c8999cfe272b23.svg",
    eh = "/assets/893dc4a04464a54a.svg",
    ej = "/assets/b3a9ce9d2cf3ff2f.svg",
    ef = ee.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu,
    eg = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eh,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: eL,
        TR: ej,
    },
    eE = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eh,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: eL,
        TR: ej,
    };
function eT() {
    let e = (0, S.Ay)();
    return (0, x.M)(e) ? eE : eg;
}
function eN(e) {
    let { description: s, onLearnMore: t, renderVisual: r } = e,
        l = i.useContext(eR).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: a()(ep.Kw, { [ep.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: a()(ep.p3, { [ep.u0]: l }),
                children: [
                    (0, n.jsx)(L.E, { variant: "text-md/normal", children: s }),
                    (0, n.jsx)(h.Q, { onClick: t, text: eu.intl.string(eu.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: a()(ep.aS, { [ep.u0]: l }), children: r() }),
        ],
    });
}
function eA(e) {
    let { ...s } = e,
        { theme: t } = (0, z.E)(),
        i = (0, j.r)(f.A.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, n.jsx)(g.t, { size: "md", ...s, color: i });
}
function eI(e) {
    let s,
        { currentUser: t, premiumType: i, onClose: r } = e,
        a = (0, O.Ay)(t.id),
        l = (0, d.bG)([M.Ay], () => M.Ay.useReducedMotion),
        c = (0, F.X)("PremiumSubscriptionWhatYouLoseModal"),
        u = i === eC.PremiumTypes.TIER_1;
    return (
        (s =
            a?.premiumType === eC.PremiumTypes.TIER_2
                ? (0, n.jsxs)(W.A, {
                      user: t,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ep.Kq,
                      children: [
                          (0, n.jsx)(H.o, {
                              user: t,
                              displayProfile: a,
                              avatarSize: E._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(ef, {
                              className: ep.jU,
                              src: t.getAvatarURL(void 0, (0, E.FT)(E._3.SIZE_56), !l),
                              size: E._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: ep.b$,
                              children: [
                                  (0, n.jsx)(B.A, { className: ep.Bj, usernameClass: ep.TE, name: t.toString() }),
                                  (0, n.jsx)(eA, { className: ep.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: ep.xl,
                      children: [
                          (0, n.jsx)(ef, {
                              className: ep.wK,
                              src: t.getAvatarURL(void 0, (0, E.FT)(E._3.SIZE_56), !l),
                              size: E._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: ep.Un,
                              children: [
                                  (0, n.jsx)(B.A, { className: ep.Bj, usernameClass: ep.TE, name: t.toString() }),
                                  (0, n.jsx)(g.t, { size: "md", color: "currentColor", className: ep.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eN, {
            description: u ? eu.intl.format(eu.t.xCaYwE, {}) : eu.intl.format(eu.t["gpqr+n"], {}),
            onLearnMore: function () {
                r(),
                    c ? (0, V.openUserProfileModal)({ userId: t.id }) : (0, K.openUserSettings)(G.X.PROFILE_PANEL),
                    X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function e_(e) {
    let { currentUser: s, onClose: t } = e,
        i = (0, es.$F)(),
        { analyticsLocations: r } = (0, R.Ay)(y.A.PREMIUM_UNCANCEL_MODAL),
        a = (0, es.Xb)(),
        l = (0, et.t)(),
        c = i?.id ?? eC.Ac.PREMIUM_TENURE_1_MONTH,
        u = (0, en.A)(c);
    if (!(0, Q.YE)(s, eC.PremiumTypes.TIER_2) || null == a) return null;
    let o = i?.status ?? es.Wo.UPCOMING,
        d = i?.nameUnformatted ?? eC.VD[eC.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, ei.I)(c).standard,
        C = eu.intl.string(d),
        x = o === es.Wo.EARNED,
        p = l?.days ?? 1,
        L = eu.t.pwkxYF;
    if (x) {
        let e = Math.max((0, Q.To)(a), 1);
        e >= 365 ? ((p = Math.floor(e / 365)), (L = eu.t["/ojPfi"])) : ((p = e), (L = eu.t.IItWYo));
    }
    return (0, n.jsx)(eN, {
        description: eu.intl.format(L, { time: p }),
        onLearnMore: function () {
            t(),
                (0, er.D)({ analyticsLocations: r, displayProfile: null }),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, n.jsx)(T.h, {
                className: ep.nc,
                color: u,
                children: (0, n.jsx)("img", { alt: C, src: m, className: ep.pq }),
            }),
    });
}
function ev(e) {
    let { premiumType: s } = e,
        t = (0, d.bG)([M.Ay], () => M.Ay.useReducedMotion),
        i = (0, P.Fj)(null)
            .filter((e) => e.type === b.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        r = (0, d.yK)([D.A], () => D.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - i.length)),
        a = eT().emojiStickersVisual,
        l = s === eC.PremiumTypes.TIER_1;
    return (0, n.jsx)(eN, {
        description: l ? eu.intl.format(eu.t.couiKJ, {}) : eu.intl.format(eu.t["0hUHi6"], {}),
        onLearnMore: function () {
            window.open(J.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != i && i.length > 0) || (!l && null != r && r.length > 0)
                ? (0, n.jsxs)("div", {
                      className: ep.iB,
                      children: [
                          i
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : $.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: ep.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          l
                              ? null
                              : r.map((e) =>
                                    (0, n.jsx)(
                                        w.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: ep.OP, alt: "", src: a }),
    });
}
function eS(e) {
    let { premiumType: s, onClose: t } = e;
    i.useEffect(() => _.h.wait(() => (0, v.CD)()), []);
    let r = (0, d.bG)([M.Ay], () => M.Ay.useReducedMotion),
        [l, c] = (0, d.yK)([Z.A, Y.A], () => {
            let e = Z.A.boostSlots,
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
        m = eT().boostItemVisual;
    return (0, n.jsx)(eN, {
        description: s === eC.PremiumTypes.TIER_1 ? eu.intl.format(eu.t.K4Hv69, {}) : eu.intl.format(eu.t.wRxEDW, {}),
        onLearnMore: function () {
            t(),
                (0, K.openUserSettings)(G.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            u
                ? (0, n.jsx)("div", {
                      className: ep.Ht,
                      children: (0, n.jsxs)("div", {
                          className: ep.W5,
                          children: [
                              (0, n.jsx)(U.Ay, { guild: l, size: U.Ay.Sizes.MEDIUM, animate: !r, className: ep.Hc }),
                              (0, n.jsxs)("div", {
                                  className: ep.IA,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/normal",
                                          className: a()(ep.v, ep.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: ep.i$,
                                          children: [
                                              (0, n.jsx)(N._, {
                                                  color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ep.jZ,
                                              }),
                                              (0, n.jsx)(L.E, {
                                                  variant: "text-xs/normal",
                                                  className: a()(ep.v, ep.x2),
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
function eM() {
    let e = eT().screenShareItemVisual;
    return (0, n.jsx)(eN, {
        description: eu.intl.format(eu.t.wK04T1, {}),
        onLearnMore: function () {
            window.open(J.A.getArticleURL(ex.MVz.STREAM_QUALITY_SETTINGS)),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: e }),
    });
}
function ey(e) {
    let { premiumType: s } = e,
        t = eT().uploadsMessagesItemVisual;
    return (0, n.jsx)(eN, {
        description: s === eC.PremiumTypes.TIER_2 ? eu.intl.format(eu.t.GsOFRJ, {}) : eu.intl.format(eu.t.wFWO6D, {}),
        onLearnMore: function () {
            window.open(J.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                X.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: t }),
    });
}
let eR = i.createContext({ isPremiumRebrand: !1 });
function eP(e) {
    let { currentUser: s, premiumType: t, onClose: r, isDowngrade: l = !1, isPremiumRebrand: c = !1 } = e,
        u = i.useMemo(() => {
            let e = [];
            switch (t) {
                case eC.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(ev, { premiumType: t }), (0, n.jsx)(ey, { premiumType: t }));
                    break;
                case eC.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(eI, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, n.jsx)(eM, {}, "screen-share-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: r }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eI, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, n.jsx)(ev, { premiumType: t }, "emoji-stickers-item"),
                              (0, n.jsx)(eM, {}, "screen-share-item"),
                              (0, n.jsx)(ey, { premiumType: t }, "uploads-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: r }, "boost-item"),
                          );
                    break;
                case eC.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(eI, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: r }, "boost-item"),
                              (0, n.jsx)(eM, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(e_, { currentUser: s, onClose: r }, "badge-item"),
                              (0, n.jsx)(eI, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, n.jsx)(ev, { premiumType: t }, "emoji-stickers-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: r }, "boost-item"),
                              (0, n.jsx)(eM, {}, "screen-share-item"),
                              (0, n.jsx)(ey, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, r, l]);
    return (0, n.jsx)(eR.Provider, {
        value: { isPremiumRebrand: c },
        children: (0, n.jsx)("div", {
            className: a()(ep.xP, { [ep.u0]: c, [ep.mK]: c && u.length <= 2 }),
            children: u,
        }),
    });
}
let eb = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: r,
            footer: a,
            onClose: l,
            onDiscountClaim: u,
            onContinue: o,
            analyticsLocations: x,
            isLoading: p = !1,
            churnUserDiscountOffer: h = null,
            isDowngrade: j = !1,
            subtitleIcon: f,
            subtitleClassName: g,
        } = e,
        E = (0, d.bG)([q.default], () => {
            let e = q.default.getCurrentUser();
            return c()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, k.A)(E.id, E.getAvatarURL(null, 80));
    }, [E]);
    let T = null != h && !p;
    return (i.useEffect(() => {
        T &&
            X.default.track(ex.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: h?.discountId,
            });
    }, [T, x, h]),
    p)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: s, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsx)("div", {
                          className: ep.rf,
                          children: (0, n.jsx)(A.y, { className: ep.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: s, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsxs)("div", {
                          className: ep.rf,
                          children: [
                              (0, n.jsx)(I.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ep.DD,
                                  children: t,
                              }),
                              (0, n.jsxs)("div", {
                                  className: g,
                                  children: [f, (0, n.jsx)(L.E, { variant: "text-md/normal", children: r })],
                              }),
                              (0, n.jsx)(eP, { currentUser: E, premiumType: s, onClose: l, isDowngrade: j }),
                          ],
                      }),
                  }),
                  !T && (0, n.jsx)(C.j, { children: a }),
                  T && (0, n.jsx)(ed, { churnUserDiscountOffer: h, onDiscountClaim: u, onContinue: o }),
              ],
          });
};
