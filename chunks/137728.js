t.d(s, { l: () => eM, A: () => eR }), t(321073);
var n = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
    l = t(284009),
    c = t.n(l),
    u = t(435558),
    o = t.n(u),
    d = t(17928),
    m = t(430993),
    p = t(364840),
    x = t(462887),
    C = t(97808),
    L = t(834730),
    f = t(123292),
    h = t(602853),
    g = t(661531),
    E = t(403581),
    v = t(778712),
    N = t(315629),
    A = t(104510),
    I = t(289873),
    j = t(297264),
    T = t(228366),
    _ = t(820739),
    S = t(736653),
    y = t(775602),
    P = t(793574),
    b = t(688810),
    M = t(822123),
    R = t(770335),
    U = t(548118),
    w = t(931959),
    O = t(148355),
    D = t(591179),
    k = t(999291),
    B = t(903209),
    F = t(270574),
    G = t(402860),
    H = t(915614),
    W = t(946356),
    z = t(939496),
    V = t(780964),
    Y = t(766075),
    K = t(71393),
    Z = t(287809),
    X = t(178368),
    q = t(174459),
    $ = t(486020),
    Q = t(975571),
    J = t(158045),
    ee = t(19575),
    es = t(19886),
    et = t(627380),
    en = t(704640),
    er = t(425713),
    ea = t(30084),
    ei = t(862482),
    el = t(930861),
    ec = t(821609),
    eu = t(375708),
    eo = t(516003);
let ed = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: r } = e,
        a = (0, S.Ay)(),
        i = (0, x.M)(a) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
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
                              (0, n.jsx)("img", { alt: "", src: i, className: eo.lR }),
                              (0, n.jsxs)("div", {
                                  className: eo.t2,
                                  children: [
                                      (0, n.jsx)(L.E, {
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
                                                  look: ei.pR.OUTLINED,
                                                  color: ei.XD.CUSTOM,
                                                  onClick: () => t?.(),
                                                  children: [
                                                      (0, n.jsx)(E.t, {
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
var em = t(237412),
    ep = t(202541),
    ex = t(652215),
    eC = t(518144);
let eL = "/assets/34c8999cfe272b23.svg",
    ef = "/assets/893dc4a04464a54a.svg",
    eh = "/assets/b3a9ce9d2cf3ff2f.svg",
    eg = ee.Ay.getEnableHardwareAcceleration() ? C.Js : C.eu,
    eE = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: ef,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: eL,
        TR: eh,
    },
    ev = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: ef,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: eL,
        TR: eh,
    };
function eN() {
    let e = (0, S.Ay)();
    return (0, x.M)(e) ? ev : eE;
}
function eA(e) {
    let { description: s, onLearnMore: t, renderVisual: a } = e,
        l = r.useContext(eb).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: i()(eC.Kw, { [eC.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: i()(eC.p3, { [eC.u0]: l }),
                children: [
                    (0, n.jsx)(L.E, { variant: "text-md/normal", children: s }),
                    (0, n.jsx)(f.Q, { onClick: t, text: eu.intl.string(eu.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: i()(eC.aS, { [eC.u0]: l }), children: a() }),
        ],
    });
}
function eI(e) {
    let { ...s } = e,
        { theme: t } = (0, z.E)(),
        r = (0, h.r)(g.A.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, n.jsx)(E.t, { size: "md", ...s, color: r });
}
function ej(e) {
    let s,
        { currentUser: t, premiumType: r, onClose: a } = e,
        i = (0, k.Ay)(t.id),
        l = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        c = (0, D.X)("PremiumSubscriptionWhatYouLoseModal"),
        u = r === ep.PremiumTypes.TIER_1;
    return (
        (s =
            i?.premiumType === ep.PremiumTypes.TIER_2
                ? (0, n.jsxs)(W.A, {
                      user: t,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: eC.Kq,
                      children: [
                          (0, n.jsx)(H.o, {
                              user: t,
                              displayProfile: i,
                              avatarSize: v._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(eg, {
                              className: eC.jU,
                              src: t.getAvatarURL(void 0, (0, v.FT)(v._3.SIZE_56), !l),
                              size: v._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: eC.b$,
                              children: [
                                  (0, n.jsx)(F.A, { className: eC.Bj, usernameClass: eC.TE, name: t.toString() }),
                                  (0, n.jsx)(eI, { className: eC.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: eC.xl,
                      children: [
                          (0, n.jsx)(eg, {
                              className: eC.wK,
                              src: t.getAvatarURL(void 0, (0, v.FT)(v._3.SIZE_56), !l),
                              size: v._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: eC.Un,
                              children: [
                                  (0, n.jsx)(F.A, { className: eC.Bj, usernameClass: eC.TE, name: t.toString() }),
                                  (0, n.jsx)(E.t, { size: "md", color: "currentColor", className: eC.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eA, {
            description: u ? eu.intl.format(eu.t.xCaYwE, {}) : eu.intl.format(eu.t["gpqr+n"], {}),
            onLearnMore: function () {
                a(),
                    c ? (0, G.openUserProfileModal)({ userId: t.id }) : (0, Y.openUserSettings)(V.X.PROFILE_PANEL),
                    q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function eT(e) {
    let { currentUser: s, onClose: t } = e,
        r = (0, es.$F)(),
        { analyticsLocations: a } = (0, b.Ay)(P.A.PREMIUM_UNCANCEL_MODAL),
        i = (0, es.Xb)(),
        l = (0, et.t)(),
        c = r?.id ?? ep.Ac.PREMIUM_TENURE_1_MONTH,
        u = (0, en.A)(c);
    if (!(0, J.YE)(s, ep.PremiumTypes.TIER_2) || null == i) return null;
    let o = r?.status ?? es.Wo.UPCOMING,
        d = r?.nameUnformatted ?? ep.VD[ep.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, er.I)(c).standard,
        p = eu.intl.string(d),
        x = o === es.Wo.EARNED || o === es.Wo.WITHHELD,
        C = l?.days ?? 1,
        L = eu.t.pwkxYF;
    if (x) {
        let e = Math.max((0, J.To)(i), 1);
        e >= 365 ? ((C = Math.floor(e / 365)), (L = eu.t["/ojPfi"])) : ((C = e), (L = eu.t.IItWYo));
    }
    return (0, n.jsx)(eA, {
        description: eu.intl.format(L, { time: C }),
        onLearnMore: function () {
            t(),
                (0, ea.D)({ analyticsLocations: a, displayProfile: null }),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, n.jsx)(N.h, {
                className: eC.nc,
                color: u,
                children: (0, n.jsx)("img", { alt: p, src: m, className: eC.pq }),
            }),
    });
}
function e_(e) {
    let { premiumType: s } = e,
        t = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        r = (0, M.Fj)(null)
            .filter((e) => e.type === R.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, d.yK)([w.A], () => w.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        i = eN().emojiStickersVisual,
        l = s === ep.PremiumTypes.TIER_1;
    return (0, n.jsx)(eA, {
        description: l ? eu.intl.format(eu.t.couiKJ, {}) : eu.intl.format(eu.t["0hUHi6"], {}),
        onLearnMore: function () {
            window.open(Q.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!l && null != a && a.length > 0)
                ? (0, n.jsxs)("div", {
                      className: eC.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : $.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: eC.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          l
                              ? null
                              : a.map((e) =>
                                    (0, n.jsx)(
                                        O.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: eC.OP, alt: "", src: i }),
    });
}
function eS(e) {
    let { premiumType: s, onClose: t } = e;
    r.useEffect(() => T.h.wait(() => (0, _.CD)()), []);
    let a = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [l, c] = (0, d.yK)([X.A, K.A], () => {
            let e = X.A.boostSlots,
                s = new Map();
            o()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != K.A.getGuild(e)) {
                        let t = s.get(e) ?? 0;
                        s.set(e, t + 1);
                    }
                });
            let t = null,
                n = 0;
            return (
                s.size > 0 && ([t, n] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [K.A.getGuild(t), n]
            );
        }),
        u = null != l && c > 0,
        m = eN().boostItemVisual;
    return (0, n.jsx)(eA, {
        description: s === ep.PremiumTypes.TIER_1 ? eu.intl.format(eu.t.K4Hv69, {}) : eu.intl.format(eu.t.wRxEDW, {}),
        onLearnMore: function () {
            t(),
                (0, Y.openUserSettings)(V.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            u
                ? (0, n.jsx)("div", {
                      className: eC.Ht,
                      children: (0, n.jsxs)("div", {
                          className: eC.W5,
                          children: [
                              (0, n.jsx)(U.Ay, { guild: l, size: U.Ay.Sizes.MEDIUM, animate: !a, className: eC.Hc }),
                              (0, n.jsxs)("div", {
                                  className: eC.IA,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/normal",
                                          className: i()(eC.v, eC.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eC.i$,
                                          children: [
                                              (0, n.jsx)(A._, {
                                                  color: g.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: eC.jZ,
                                              }),
                                              (0, n.jsx)(L.E, {
                                                  variant: "text-xs/normal",
                                                  className: i()(eC.v, eC.x2),
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
function ey() {
    let e = eN().screenShareItemVisual;
    return (0, n.jsx)(eA, {
        description: eu.intl.format(eu.t.wK04T1, {}),
        onLearnMore: function () {
            window.open(Q.A.getArticleURL(ex.MVz.STREAM_QUALITY_SETTINGS)),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: e }),
    });
}
function eP(e) {
    let { premiumType: s } = e,
        t = eN().uploadsMessagesItemVisual;
    return (0, n.jsx)(eA, {
        description: s === ep.PremiumTypes.TIER_2 ? eu.intl.format(eu.t.GsOFRJ, {}) : eu.intl.format(eu.t.wFWO6D, {}),
        onLearnMore: function () {
            window.open(Q.A.getArticleURL(ex.MVz.PREMIUM_DETAILS)),
                q.default.track(ex.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: t }),
    });
}
let eb = r.createContext({ isPremiumRebrand: !1 });
function eM(e) {
    let { currentUser: s, premiumType: t, onClose: a, isDowngrade: l = !1, isPremiumRebrand: c = !1 } = e,
        u = r.useMemo(() => {
            let e = [];
            switch (t) {
                case ep.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(e_, { premiumType: t }), (0, n.jsx)(eP, { premiumType: t }));
                    break;
                case ep.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, n.jsx)(e_, { premiumType: t }, "emoji-stickers-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eP, { premiumType: t }, "uploads-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: a }, "boost-item"),
                          );
                    break;
                case ep.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: a }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eT, { currentUser: s, onClose: a }, "badge-item"),
                              (0, n.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, n.jsx)(e_, { premiumType: t }, "emoji-stickers-item"),
                              (0, n.jsx)(eS, { premiumType: t, onClose: a }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eP, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, a, l]);
    return (0, n.jsx)(eb.Provider, {
        value: { isPremiumRebrand: c },
        children: (0, n.jsx)("div", {
            className: i()(eC.xP, { [eC.u0]: c, [eC.mK]: c && u.length <= 2 }),
            children: u,
        }),
    });
}
let eR = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: a,
            footer: i,
            onClose: l,
            onDiscountClaim: u,
            onContinue: o,
            analyticsLocations: x,
            isLoading: C = !1,
            churnUserDiscountOffer: f = null,
            isDowngrade: h = !1,
            subtitleIcon: g,
            subtitleClassName: E,
        } = e,
        v = (0, d.bG)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return c()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    r.useEffect(() => {
        (0, B.A)(v.id, v.getAvatarURL(null, 80));
    }, [v]);
    let N = null != f && !C;
    return (r.useEffect(() => {
        N &&
            q.default.track(ex.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: f?.discountId,
            });
    }, [N, x, f]),
    C)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: s, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsx)("div", {
                          className: eC.rf,
                          children: (0, n.jsx)(I.y, { className: eC.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: s, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsxs)("div", {
                          className: eC.rf,
                          children: [
                              (0, n.jsx)(j.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: eC.DD,
                                  children: t,
                              }),
                              (0, n.jsxs)("div", {
                                  className: E,
                                  children: [g, (0, n.jsx)(L.E, { variant: "text-md/normal", children: a })],
                              }),
                              (0, n.jsx)(eM, { currentUser: v, premiumType: s, onClose: l, isDowngrade: h }),
                          ],
                      }),
                  }),
                  !N && (0, n.jsx)(p.j, { children: i }),
                  N && (0, n.jsx)(ed, { churnUserDiscountOffer: f, onDiscountClaim: u, onContinue: o }),
              ],
          });
};
