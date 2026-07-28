n.d(t, { l: () => eM, A: () => eR }), n(321073);
var s = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    l = n(284009),
    u = n.n(l),
    c = n(435558),
    o = n.n(c),
    d = n(17928),
    m = n(430993),
    f = n(364840),
    p = n(462887),
    x = n(97808),
    g = n(834730),
    h = n(123292),
    v = n(602853),
    A = n(661531),
    C = n(403581),
    L = n(778712),
    y = n(315629),
    I = n(104510),
    T = n(289873),
    b = n(297264),
    E = n(228366),
    j = n(820739),
    N = n(736653),
    S = n(775602),
    _ = n(793574),
    P = n(688810),
    M = n(822123),
    R = n(770335),
    w = n(548118),
    U = n(931959),
    D = n(148355),
    k = n(591179),
    O = n(999291),
    F = n(903209),
    W = n(270574),
    G = n(975732),
    B = n(915614),
    H = n(946356),
    Y = n(939496),
    V = n(780964),
    K = n(766075),
    z = n(71393),
    Z = n(287809),
    q = n(178368),
    Q = n(174459),
    J = n(486020),
    $ = n(975571),
    X = n(428262),
    ee = n(19575),
    et = n(878784),
    en = n(627380),
    es = n(704640),
    er = n(425713),
    ei = n(30084),
    ea = n(862482),
    el = n(930861),
    eu = n(821609),
    ec = n(375708),
    eo = n(611908);
let ed = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: n, onContinue: r } = e,
        i = (0, N.Ay)(),
        a = (0, p.M)(i) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == t
        ? null
        : (0, s.jsxs)("div", {
              className: eo.bR,
              children: [
                  (0, s.jsx)("div", { className: eo.v0 }),
                  (0, s.jsx)("div", { className: eo.X2 }),
                  (0, s.jsx)("div", {
                      className: eo.Dg,
                      children: (0, s.jsxs)("div", {
                          className: eo.xt,
                          children: [
                              (0, s.jsx)("img", { alt: "", src: a, className: eo.lR }),
                              (0, s.jsxs)("div", {
                                  className: eo.t2,
                                  children: [
                                      (0, s.jsx)(g.E, {
                                          variant: "text-md/medium",
                                          className: eo.PU,
                                          children: ec.intl.format(ec.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.userUsageLimit,
                                          }),
                                      }),
                                      (0, s.jsxs)("div", {
                                          className: eo.$t,
                                          children: [
                                              (0, s.jsxs)(el.wL, {
                                                  "data-migration-pending": !0,
                                                  className: eo.Oy,
                                                  innerClassName: eo.iO,
                                                  look: ea.pR.OUTLINED,
                                                  color: ea.XD.CUSTOM,
                                                  onClick: () => n?.(),
                                                  children: [
                                                      (0, s.jsx)(C.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eo.Fl,
                                                      }),
                                                      (0, s.jsx)(g.E, {
                                                          variant: "text-sm/semibold",
                                                          className: eo.H0,
                                                          children: ec.intl.string(ec.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, s.jsx)(eu.$, {
                                                  variant: "primary",
                                                  text: ec.intl.string(ec.t["3PatSz"]),
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
var em = n(237412),
    ef = n(202541),
    ep = n(652215),
    ex = n(145391);
let eg = "/assets/34c8999cfe272b23.svg",
    eh = "/assets/893dc4a04464a54a.svg",
    ev = "/assets/b3a9ce9d2cf3ff2f.svg",
    eA = ee.Ay.getEnableHardwareAcceleration() ? x.Js : x.eu,
    eC = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eh,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: eg,
        TR: ev,
    },
    eL = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eh,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: eg,
        TR: ev,
    };
function ey() {
    let e = (0, N.Ay)();
    return (0, p.M)(e) ? eL : eC;
}
function eI(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        l = r.useContext(eP).isPremiumRebrand;
    return (0, s.jsxs)("div", {
        className: a()(ex.Kw, { [ex.u0]: l }),
        children: [
            (0, s.jsxs)("div", {
                className: a()(ex.p3, { [ex.u0]: l }),
                children: [
                    (0, s.jsx)(g.E, { variant: "text-md/normal", children: t }),
                    (0, s.jsx)(h.Q, { onClick: n, text: ec.intl.string(ec.t.hvVgAZ) }),
                ],
            }),
            (0, s.jsx)("div", { className: a()(ex.aS, { [ex.u0]: l }), children: i() }),
        ],
    });
}
function eT(e) {
    let { ...t } = e,
        { theme: n } = (0, Y.E)(),
        r = (0, v.r)(A.A.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, s.jsx)(C.t, { size: "md", ...t, color: r });
}
function eb(e) {
    let t,
        { currentUser: n, premiumType: r, onClose: i } = e,
        a = (0, O.Ay)(n.id),
        l = (0, d.bG)([S.Ay], () => S.Ay.useReducedMotion),
        u = (0, k.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = r === ef.PremiumTypes.TIER_1;
    return (
        (t =
            a?.premiumType === ef.PremiumTypes.TIER_2
                ? (0, s.jsxs)(H.A, {
                      user: n,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ex.Kq,
                      children: [
                          (0, s.jsx)(B.o, {
                              user: n,
                              displayProfile: a,
                              avatarSize: L._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, s.jsx)(eA, {
                              className: ex.jU,
                              src: n.getAvatarURL(void 0, (0, L.FT)(L._3.SIZE_56), !l),
                              size: L._3.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, s.jsxs)("div", {
                              className: ex.b$,
                              children: [
                                  (0, s.jsx)(W.A, { className: ex.Bj, usernameClass: ex.TE, name: n.toString() }),
                                  (0, s.jsx)(eT, { className: ex.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, s.jsxs)("div", {
                      className: ex.xl,
                      children: [
                          (0, s.jsx)(eA, {
                              className: ex.wK,
                              src: n.getAvatarURL(void 0, (0, L.FT)(L._3.SIZE_56), !l),
                              size: L._3.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, s.jsxs)("div", {
                              className: ex.Un,
                              children: [
                                  (0, s.jsx)(W.A, { className: ex.Bj, usernameClass: ex.TE, name: n.toString() }),
                                  (0, s.jsx)(C.t, { size: "md", color: "currentColor", className: ex.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, s.jsx)(eI, {
            description: c ? ec.intl.format(ec.t.xCaYwE, {}) : ec.intl.format(ec.t["gpqr+n"], {}),
            onLearnMore: function () {
                i(),
                    u ? (0, G.openUserProfileModal)({ userId: n.id }) : (0, K.openUserSettings)(V.X.PROFILE_PANEL),
                    Q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => t,
        })
    );
}
function eE(e) {
    let { currentUser: t, onClose: n } = e,
        r = (0, et.$F)(),
        { analyticsLocations: i } = (0, P.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
        a = (0, et.Xb)(),
        l = (0, en.t)(),
        u = r?.id ?? ef.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, es.A)(u);
    if (!(0, X.YE)(t, ef.PremiumTypes.TIER_2) || null == a) return null;
    let o = r?.status ?? et.Wo.UPCOMING,
        d = r?.nameUnformatted ?? ef.VD[ef.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, er.I)(u).standard,
        f = ec.intl.string(d),
        p = o === et.Wo.EARNED,
        x = l?.days ?? 1,
        g = ec.t.pwkxYF;
    if (p) {
        let e = Math.max((0, X.To)(a), 1);
        e >= 365 ? ((x = Math.floor(e / 365)), (g = ec.t["/ojPfi"])) : ((x = e), (g = ec.t.IItWYo));
    }
    return (0, s.jsx)(eI, {
        description: ec.intl.format(g, { time: x }),
        onLearnMore: function () {
            n(),
                (0, ei.D)({ analyticsLocations: i, displayProfile: null }),
                Q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, s.jsx)(y.h, {
                className: ex.nc,
                color: c,
                children: (0, s.jsx)("img", { alt: f, src: m, className: ex.pq }),
            }),
    });
}
function ej(e) {
    let { premiumType: t } = e,
        n = (0, d.bG)([S.Ay], () => S.Ay.useReducedMotion),
        r = (0, M.Fj)(null)
            .filter((e) => e.type === R.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, d.yK)([U.A], () => U.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        a = ey().emojiStickersVisual,
        l = t === ef.PremiumTypes.TIER_1;
    return (0, s.jsx)(eI, {
        description: l ? ec.intl.format(ec.t.couiKJ, {}) : ec.intl.format(ec.t["0hUHi6"], {}),
        onLearnMore: function () {
            window.open($.A.getArticleURL(ep.MVz.PREMIUM_DETAILS)),
                Q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!l && null != i && i.length > 0)
                ? (0, s.jsxs)("div", {
                      className: ex.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : J.Ay.getEmojiURL({ id: e.id, animated: !n && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, s.jsx)("img", { className: ex.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : i.map((e) =>
                                    (0, s.jsx)(
                                        D.A,
                                        { disableAnimation: n, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, s.jsx)("img", { className: ex.OP, alt: "", src: a }),
    });
}
function eN(e) {
    let { premiumType: t, onClose: n } = e;
    r.useEffect(() => E.h.wait(() => (0, j.CD)()), []);
    let i = (0, d.bG)([S.Ay], () => S.Ay.useReducedMotion),
        [l, u] = (0, d.yK)([q.A, z.A], () => {
            let e = q.A.boostSlots,
                t = new Map();
            o()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != z.A.getGuild(e)) {
                        let n = t.get(e) ?? 0;
                        t.set(e, n + 1);
                    }
                });
            let n = null,
                s = 0;
            return (
                t.size > 0 && ([n, s] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [z.A.getGuild(n), s]
            );
        }),
        c = null != l && u > 0,
        m = ey().boostItemVisual;
    return (0, s.jsx)(eI, {
        description: t === ef.PremiumTypes.TIER_1 ? ec.intl.format(ec.t.K4Hv69, {}) : ec.intl.format(ec.t.wRxEDW, {}),
        onLearnMore: function () {
            n(),
                (0, K.openUserSettings)(V.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                Q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, s.jsx)("div", {
                      className: ex.Ht,
                      children: (0, s.jsxs)("div", {
                          className: ex.W5,
                          children: [
                              (0, s.jsx)(w.Ay, { guild: l, size: w.Ay.Sizes.MEDIUM, animate: !i, className: ex.Hc }),
                              (0, s.jsxs)("div", {
                                  className: ex.IA,
                                  children: [
                                      (0, s.jsx)(g.E, {
                                          variant: "text-md/normal",
                                          className: a()(ex.v, ex.e0),
                                          children: l.name,
                                      }),
                                      (0, s.jsxs)("div", {
                                          className: ex.i$,
                                          children: [
                                              (0, s.jsx)(I._, {
                                                  color: A.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ex.jZ,
                                              }),
                                              (0, s.jsx)(g.E, {
                                                  variant: "text-xs/normal",
                                                  className: a()(ex.v, ex.x2),
                                                  children: ec.intl.format(ec.t["Ou/g/P"], { boostCount: u }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, s.jsx)("img", { alt: "", src: m }),
    });
}
function eS() {
    let e = ey().screenShareItemVisual;
    return (0, s.jsx)(eI, {
        description: ec.intl.format(ec.t.wK04T1, {}),
        onLearnMore: function () {
            window.open($.A.getArticleURL(ep.MVz.STREAM_QUALITY_SETTINGS)),
                Q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, s.jsx)("img", { alt: "", src: e }),
    });
}
function e_(e) {
    let { premiumType: t } = e,
        n = ey().uploadsMessagesItemVisual;
    return (0, s.jsx)(eI, {
        description: t === ef.PremiumTypes.TIER_2 ? ec.intl.format(ec.t.GsOFRJ, {}) : ec.intl.format(ec.t.wFWO6D, {}),
        onLearnMore: function () {
            window.open($.A.getArticleURL(ep.MVz.PREMIUM_DETAILS)),
                Q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, s.jsx)("img", { alt: "", src: n }),
    });
}
let eP = r.createContext({ isPremiumRebrand: !1 });
function eM(e) {
    let { currentUser: t, premiumType: n, onClose: i, isDowngrade: l = !1, isPremiumRebrand: u = !1 } = e,
        c = r.useMemo(() => {
            let e = [];
            switch (n) {
                case ef.PremiumTypes.TIER_0:
                    e.push((0, s.jsx)(ej, { premiumType: n }), (0, s.jsx)(e_, { premiumType: n }));
                    break;
                case ef.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, s.jsx)(eb, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(eS, {}, "screen-share-item"),
                              (0, s.jsx)(eN, { premiumType: n, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, s.jsx)(eb, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(ej, { premiumType: n }, "emoji-stickers-item"),
                              (0, s.jsx)(eS, {}, "screen-share-item"),
                              (0, s.jsx)(e_, { premiumType: n }, "uploads-item"),
                              (0, s.jsx)(eN, { premiumType: n, onClose: i }, "boost-item"),
                          );
                    break;
                case ef.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, s.jsx)(eb, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(eN, { premiumType: n, onClose: i }, "boost-item"),
                              (0, s.jsx)(eS, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, s.jsx)(eE, { currentUser: t, onClose: i }, "badge-item"),
                              (0, s.jsx)(eb, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(ej, { premiumType: n }, "emoji-stickers-item"),
                              (0, s.jsx)(eN, { premiumType: n, onClose: i }, "boost-item"),
                              (0, s.jsx)(eS, {}, "screen-share-item"),
                              (0, s.jsx)(e_, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, i, l]);
    return (0, s.jsx)(eP.Provider, {
        value: { isPremiumRebrand: u },
        children: (0, s.jsx)("div", {
            className: a()(ex.xP, { [ex.u0]: u, [ex.mK]: u && c.length <= 2 }),
            children: c,
        }),
    });
}
let eR = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: i,
            footer: a,
            onClose: l,
            onDiscountClaim: c,
            onContinue: o,
            analyticsLocations: p,
            isLoading: x = !1,
            churnUserDiscountOffer: h = null,
            isDowngrade: v = !1,
            subtitleIcon: A,
            subtitleClassName: C,
        } = e,
        L = (0, d.bG)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return u()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    r.useEffect(() => {
        (0, F.A)(L.id, L.getAvatarURL(null, 80));
    }, [L]);
    let y = null != h && !x;
    return (r.useEffect(() => {
        y &&
            Q.default.track(ep.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: p,
                discount_id: h?.discountId,
            });
    }, [y, p, h]),
    x)
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, s.jsx)(m.c, {
                      children: (0, s.jsx)("div", {
                          className: ex.rf,
                          children: (0, s.jsx)(T.y, { className: ex.u1 }),
                      }),
                  }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, s.jsx)(m.c, {
                      children: (0, s.jsxs)("div", {
                          className: ex.rf,
                          children: [
                              (0, s.jsx)(b.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ex.DD,
                                  children: n,
                              }),
                              (0, s.jsxs)("div", {
                                  className: C,
                                  children: [A, (0, s.jsx)(g.E, { variant: "text-md/normal", children: i })],
                              }),
                              (0, s.jsx)(eM, { currentUser: L, premiumType: t, onClose: l, isDowngrade: v }),
                          ],
                      }),
                  }),
                  !y && (0, s.jsx)(f.j, { children: a }),
                  y && (0, s.jsx)(ed, { churnUserDiscountOffer: h, onDiscountClaim: c, onContinue: o }),
              ],
          });
};
