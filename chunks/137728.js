"use strict";
n.d(t, { l: () => ew, A: () => eM }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(735438),
    c = n.n(u),
    d = n(17928),
    _ = n(430993),
    h = n(364840),
    f = n(462887),
    p = n(97808),
    E = n(834730),
    m = n(123292),
    g = n(602853),
    A = n(661531),
    I = n(403581),
    T = n(778712),
    S = n(315629),
    y = n(104510),
    C = n(289873),
    N = n(534514),
    v = n(228366),
    R = n(820739),
    O = n(736653),
    b = n(775602),
    D = n(793574),
    L = n(688810),
    w = n(822123),
    M = n(770335),
    P = n(548118),
    x = n(931959),
    k = n(148355),
    U = n(591179),
    G = n(999291),
    F = n(903209),
    V = n(270574),
    B = n(975732),
    j = n(915614),
    H = n(946356),
    Y = n(939496),
    W = n(780964),
    K = n(766075),
    $ = n(71393),
    z = n(287809),
    q = n(178368),
    Z = n(174459),
    X = n(486020),
    Q = n(975571),
    J = n(428262),
    ee = n(19575),
    et = n(878784),
    en = n(627380),
    ei = n(704640),
    er = n(425713),
    es = n(30084),
    ea = n(862482),
    eo = n(930861),
    el = n(821609),
    eu = n(375708),
    ec = n(150252);
let ed = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: n, onContinue: r } = e,
        s = (0, O.Ay)(),
        a = (0, f.M)(s) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: ec.bR,
              children: [
                  (0, i.jsx)("div", { className: ec.v0 }),
                  (0, i.jsx)("div", { className: ec.X2 }),
                  (0, i.jsx)("div", {
                      className: ec.Dg,
                      children: (0, i.jsxs)("div", {
                          className: ec.xt,
                          children: [
                              (0, i.jsx)("img", { alt: "", src: a, className: ec.lR }),
                              (0, i.jsxs)("div", {
                                  className: ec.t2,
                                  children: [
                                      (0, i.jsx)(E.E, {
                                          variant: "text-md/medium",
                                          className: ec.PU,
                                          children: eu.intl.format(eu.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.userUsageLimit,
                                          }),
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: ec.$t,
                                          children: [
                                              (0, i.jsxs)(eo.wL, {
                                                  "data-migration-pending": !0,
                                                  className: ec.Oy,
                                                  innerClassName: ec.iO,
                                                  look: ea.pR.OUTLINED,
                                                  color: ea.XD.CUSTOM,
                                                  onClick: () => n?.(),
                                                  children: [
                                                      (0, i.jsx)(I.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: ec.Fl,
                                                      }),
                                                      (0, i.jsx)(E.E, {
                                                          variant: "text-sm/semibold",
                                                          className: ec.H0,
                                                          children: eu.intl.string(eu.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(el.$, {
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
var e_ = n(237412),
    eh = n(788868),
    ef = n(652215),
    ep = n(414135);
let eE = "/assets/34c8999cfe272b23.svg",
    em = "/assets/893dc4a04464a54a.svg",
    eg = "/assets/b3a9ce9d2cf3ff2f.svg",
    eA = ee.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu,
    eI = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: em,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: eE,
        TR: eg,
    },
    eT = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: em,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: eE,
        TR: eg,
    };
function eS() {
    let e = (0, O.Ay)();
    return (0, f.M)(e) ? eT : eI;
}
function ey(e) {
    let { description: t, onLearnMore: n, renderVisual: s } = e,
        o = r.useContext(eL).isPremiumRebrand;
    return (0, i.jsxs)("div", {
        className: a()(ep.Kw, { [ep.u0]: o }),
        children: [
            (0, i.jsxs)("div", {
                className: a()(ep.p3, { [ep.u0]: o }),
                children: [
                    (0, i.jsx)(E.E, { variant: "text-md/normal", children: t }),
                    (0, i.jsx)(m.Q, { onClick: n, text: eu.intl.string(eu.t.hvVgAZ) }),
                ],
            }),
            (0, i.jsx)("div", { className: a()(ep.aS, { [ep.u0]: o }), children: s() }),
        ],
    });
}
function eC(e) {
    let { ...t } = e,
        { theme: n } = (0, Y.E)(),
        r = (0, g.r)(A.A.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, i.jsx)(I.t, { size: "md", ...t, color: r });
}
function eN(e) {
    let t,
        { currentUser: n, premiumType: r, onClose: s } = e,
        a = (0, G.Ay)(n.id),
        o = (0, d.bG)([b.Ay], () => b.Ay.useReducedMotion),
        l = (0, U.X)("PremiumSubscriptionWhatYouLoseModal"),
        u = r === eh.PremiumTypes.TIER_1;
    return (
        (t =
            a?.premiumType === eh.PremiumTypes.TIER_2
                ? (0, i.jsxs)(H.A, {
                      user: n,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ep.Kq,
                      children: [
                          (0, i.jsx)(j.o, {
                              user: n,
                              displayProfile: a,
                              avatarSize: T._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, i.jsx)(eA, {
                              className: ep.jU,
                              src: n.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_56), !o),
                              size: T._3.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, i.jsxs)("div", {
                              className: ep.b$,
                              children: [
                                  (0, i.jsx)(V.A, { className: ep.Bj, usernameClass: ep.TE, name: n.toString() }),
                                  (0, i.jsx)(eC, { className: ep.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)("div", {
                      className: ep.xl,
                      children: [
                          (0, i.jsx)(eA, {
                              className: ep.wK,
                              src: n.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_56), !o),
                              size: T._3.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, i.jsxs)("div", {
                              className: ep.Un,
                              children: [
                                  (0, i.jsx)(V.A, { className: ep.Bj, usernameClass: ep.TE, name: n.toString() }),
                                  (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ep.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, i.jsx)(ey, {
            description: u ? eu.intl.format(eu.t.xCaYwE, {}) : eu.intl.format(eu.t["gpqr+n"], {}),
            onLearnMore: function () {
                s(),
                    l ? (0, B.openUserProfileModal)({ userId: n.id }) : (0, K.openUserSettings)(W.X.PROFILE_PANEL),
                    Z.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => t,
        })
    );
}
function ev(e) {
    let { currentUser: t, onClose: n } = e,
        r = (0, et.$F)(),
        { analyticsLocations: s } = (0, L.Ay)(D.A.PREMIUM_UNCANCEL_MODAL),
        a = (0, et.Xb)(),
        o = (0, en.t)(),
        l = r?.id ?? eh.Ac.PREMIUM_TENURE_1_MONTH,
        u = (0, ei.A)(l);
    if (!(0, J.YE)(t, eh.PremiumTypes.TIER_2) || null == a) return null;
    let c = r?.status ?? et.Wo.UPCOMING,
        d = r?.nameUnformatted ?? eh.VD[eh.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        _ = (0, er.I)(l).standard,
        h = eu.intl.string(d),
        f = c === et.Wo.EARNED,
        p = o?.days ?? 1,
        E = eu.t.pwkxYF;
    if (f) {
        let e = Math.max((0, J.To)(a), 1);
        e >= 365 ? ((p = Math.floor(e / 365)), (E = eu.t["/ojPfi"])) : ((p = e), (E = eu.t.IItWYo));
    }
    return (0, i.jsx)(ey, {
        description: eu.intl.format(E, { time: p }),
        onLearnMore: function () {
            n(),
                (0, es.D)({ analyticsLocations: s, displayProfile: null }),
                Z.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, i.jsx)(S.h, {
                className: ep.nc,
                color: u,
                children: (0, i.jsx)("img", { alt: h, src: _, className: ep.pq }),
            }),
    });
}
function eR(e) {
    let { premiumType: t } = e,
        n = (0, d.bG)([b.Ay], () => b.Ay.useReducedMotion),
        r = (0, w.Fj)(null)
            .filter((e) => e.type === M.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        s = (0, d.yK)([x.A], () => x.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        a = eS().emojiStickersVisual,
        o = t === eh.PremiumTypes.TIER_1;
    return (0, i.jsx)(ey, {
        description: o ? eu.intl.format(eu.t.couiKJ, {}) : eu.intl.format(eu.t["0hUHi6"], {}),
        onLearnMore: function () {
            window.open(Q.A.getArticleURL(ef.MVz.PREMIUM_DETAILS)),
                Z.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!o && null != s && s.length > 0)
                ? (0, i.jsxs)("div", {
                      className: ep.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : X.Ay.getEmojiURL({ id: e.id, animated: !n && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, i.jsx)("img", { className: ep.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          o
                              ? null
                              : s.map((e) =>
                                    (0, i.jsx)(
                                        k.A,
                                        { disableAnimation: n, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, i.jsx)("img", { className: ep.OP, alt: "", src: a }),
    });
}
function eO(e) {
    let { premiumType: t, onClose: n } = e;
    r.useEffect(() => v.h.wait(() => (0, R.CD)()), []);
    let s = (0, d.bG)([b.Ay], () => b.Ay.useReducedMotion),
        [o, l] = (0, d.yK)([q.A, $.A], () => {
            let e = q.A.boostSlots,
                t = new Map();
            c()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != $.A.getGuild(e)) {
                        let n = t.get(e) ?? 0;
                        t.set(e, n + 1);
                    }
                });
            let n = null,
                i = 0;
            return (
                t.size > 0 && ([n, i] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [$.A.getGuild(n), i]
            );
        }),
        u = null != o && l > 0,
        _ = eS().boostItemVisual;
    return (0, i.jsx)(ey, {
        description: t === eh.PremiumTypes.TIER_1 ? eu.intl.format(eu.t.K4Hv69, {}) : eu.intl.format(eu.t.wRxEDW, {}),
        onLearnMore: function () {
            n(),
                (0, K.openUserSettings)(W.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                Z.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            u
                ? (0, i.jsx)("div", {
                      className: ep.Ht,
                      children: (0, i.jsxs)("div", {
                          className: ep.W5,
                          children: [
                              (0, i.jsx)(P.Ay, { guild: o, size: P.Ay.Sizes.MEDIUM, animate: !s, className: ep.Hc }),
                              (0, i.jsxs)("div", {
                                  className: ep.IA,
                                  children: [
                                      (0, i.jsx)(E.E, {
                                          variant: "text-md/normal",
                                          className: a()(ep.v, ep.e0),
                                          children: o.name,
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: ep.i$,
                                          children: [
                                              (0, i.jsx)(y._, {
                                                  color: A.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ep.jZ,
                                              }),
                                              (0, i.jsx)(E.E, {
                                                  variant: "text-xs/normal",
                                                  className: a()(ep.v, ep.x2),
                                                  children: eu.intl.format(eu.t["Ou/g/P"], { boostCount: l }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, i.jsx)("img", { alt: "", src: _ }),
    });
}
function eb() {
    let e = eS().screenShareItemVisual;
    return (0, i.jsx)(ey, {
        description: eu.intl.format(eu.t.wK04T1, {}),
        onLearnMore: function () {
            window.open(Q.A.getArticleURL(ef.MVz.STREAM_QUALITY_SETTINGS)),
                Z.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, i.jsx)("img", { alt: "", src: e }),
    });
}
function eD(e) {
    let { premiumType: t } = e,
        n = eS().uploadsMessagesItemVisual;
    return (0, i.jsx)(ey, {
        description: t === eh.PremiumTypes.TIER_2 ? eu.intl.format(eu.t.GsOFRJ, {}) : eu.intl.format(eu.t.wFWO6D, {}),
        onLearnMore: function () {
            window.open(Q.A.getArticleURL(ef.MVz.PREMIUM_DETAILS)),
                Z.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, i.jsx)("img", { alt: "", src: n }),
    });
}
let eL = r.createContext({ isPremiumRebrand: !1 });
function ew(e) {
    let { currentUser: t, premiumType: n, onClose: s, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        u = r.useMemo(() => {
            let e = [];
            switch (n) {
                case eh.PremiumTypes.TIER_0:
                    e.push((0, i.jsx)(eR, { premiumType: n }), (0, i.jsx)(eD, { premiumType: n }));
                    break;
                case eh.PremiumTypes.TIER_1:
                    o
                        ? e.push(
                              (0, i.jsx)(eN, { currentUser: t, premiumType: n, onClose: s }, "profile-item"),
                              (0, i.jsx)(eb, {}, "screen-share-item"),
                              (0, i.jsx)(eO, { premiumType: n, onClose: s }, "boost-item"),
                          )
                        : e.push(
                              (0, i.jsx)(eN, { currentUser: t, premiumType: n, onClose: s }, "profile-item"),
                              (0, i.jsx)(eR, { premiumType: n }, "emoji-stickers-item"),
                              (0, i.jsx)(eb, {}, "screen-share-item"),
                              (0, i.jsx)(eD, { premiumType: n }, "uploads-item"),
                              (0, i.jsx)(eO, { premiumType: n, onClose: s }, "boost-item"),
                          );
                    break;
                case eh.PremiumTypes.TIER_2:
                    o
                        ? e.push(
                              (0, i.jsx)(eN, { currentUser: t, premiumType: n, onClose: s }, "profile-item"),
                              (0, i.jsx)(eO, { premiumType: n, onClose: s }, "boost-item"),
                              (0, i.jsx)(eb, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, i.jsx)(ev, { currentUser: t, onClose: s }, "badge-item"),
                              (0, i.jsx)(eN, { currentUser: t, premiumType: n, onClose: s }, "profile-item"),
                              (0, i.jsx)(eR, { premiumType: n }, "emoji-stickers-item"),
                              (0, i.jsx)(eO, { premiumType: n, onClose: s }, "boost-item"),
                              (0, i.jsx)(eb, {}, "screen-share-item"),
                              (0, i.jsx)(eD, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, s, o]);
    return (0, i.jsx)(eL.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, i.jsx)("div", {
            className: a()(ep.xP, { [ep.u0]: l, [ep.mK]: l && u.length <= 2 }),
            children: u,
        }),
    });
}
let eM = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: s,
            footer: a,
            onClose: o,
            onDiscountClaim: u,
            onContinue: c,
            analyticsLocations: f,
            isLoading: p = !1,
            churnUserDiscountOffer: m = null,
            isDowngrade: g = !1,
            subtitleIcon: A,
            subtitleClassName: I,
        } = e,
        T = (0, d.bG)([z.default], () => {
            let e = z.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    r.useEffect(() => {
        (0, F.A)(T.id, T.getAvatarURL(null, 80));
    }, [T]);
    let S = null != m && !p;
    return (r.useEffect(() => {
        S &&
            Z.default.track(ef.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: m?.discountId,
            });
    }, [S, f, m]),
    p)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(e_.A, { premiumType: t, onClose: o }),
                  (0, i.jsx)(_.c, {
                      children: (0, i.jsx)("div", {
                          className: ep.rf,
                          children: (0, i.jsx)(C.y, { className: ep.u1 }),
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(e_.A, { premiumType: t, onClose: o }),
                  (0, i.jsx)(_.c, {
                      children: (0, i.jsxs)("div", {
                          className: ep.rf,
                          children: [
                              (0, i.jsx)(N.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ep.DD,
                                  children: n,
                              }),
                              (0, i.jsxs)("div", {
                                  className: I,
                                  children: [A, (0, i.jsx)(E.E, { variant: "text-md/normal", children: s })],
                              }),
                              (0, i.jsx)(ew, { currentUser: T, premiumType: t, onClose: o, isDowngrade: g }),
                          ],
                      }),
                  }),
                  !S && (0, i.jsx)(h.j, { children: a }),
                  S && (0, i.jsx)(ed, { churnUserDiscountOffer: m, onDiscountClaim: u, onContinue: c }),
              ],
          });
};
