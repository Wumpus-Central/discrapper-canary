t.d(s, { l: () => eb, A: () => eS }), t(321073);
var a = t(627968),
    i = t(64700),
    r = t(503698),
    l = t.n(r),
    n = t(284009),
    o = t.n(n),
    c = t(735438),
    m = t.n(c),
    u = t(17928),
    d = t(430993),
    x = t(364840),
    j = t(462887),
    p = t(97808),
    f = t(834730),
    A = t(123292),
    N = t(602853),
    C = t(661531),
    E = t(403581),
    I = t(778712),
    h = t(315629),
    _ = t(104510),
    T = t(289873),
    g = t(534514),
    v = t(228366),
    M = t(820739),
    U = t(736653),
    y = t(775602),
    R = t(793574),
    P = t(688810),
    L = t(822123),
    b = t(770335),
    S = t(548118),
    w = t(931959),
    V = t(148355),
    D = t(591179),
    k = t(999291),
    O = t(903209),
    K = t(270574),
    z = t(975732),
    W = t(915614),
    F = t(946356),
    H = t(939496),
    G = t(780964),
    B = t(766075),
    X = t(71393),
    Y = t(287809),
    Z = t(178368),
    $ = t(174459),
    q = t(486020),
    J = t(975571),
    Q = t(927578),
    ee = t(19575),
    es = t(878784),
    et = t(627380),
    ea = t(704640),
    ei = t(425713),
    er = t(30084),
    el = t(862482),
    en = t(930861),
    eo = t(821609),
    ec = t(375708),
    em = t(150252);
let eu = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: i } = e,
        r = (0, U.Ay)(),
        l = (0, j.M)(r) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == s
        ? null
        : (0, a.jsxs)("div", {
              className: em.bR,
              children: [
                  (0, a.jsx)("div", { className: em.v0 }),
                  (0, a.jsx)("div", { className: em.X2 }),
                  (0, a.jsx)("div", {
                      className: em.Dg,
                      children: (0, a.jsxs)("div", {
                          className: em.xt,
                          children: [
                              (0, a.jsx)("img", { alt: "", src: l, className: em.lR }),
                              (0, a.jsxs)("div", {
                                  className: em.t2,
                                  children: [
                                      (0, a.jsx)(f.E, {
                                          variant: "text-md/medium",
                                          className: em.PU,
                                          children: ec.intl.format(ec.t["2gem05"], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.userUsageLimit,
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: em.$t,
                                          children: [
                                              (0, a.jsxs)(en.wL, {
                                                  "data-migration-pending": !0,
                                                  className: em.Oy,
                                                  innerClassName: em.iO,
                                                  look: el.pR.OUTLINED,
                                                  color: el.XD.CUSTOM,
                                                  onClick: () => t?.(),
                                                  children: [
                                                      (0, a.jsx)(E.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: em.Fl,
                                                      }),
                                                      (0, a.jsx)(f.E, {
                                                          variant: "text-sm/semibold",
                                                          className: em.H0,
                                                          children: ec.intl.string(ec.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)(eo.$, {
                                                  variant: "primary",
                                                  text: ec.intl.string(ec.t["3PatSz"]),
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
var ed = t(237412),
    ex = t(788868),
    ej = t(652215),
    ep = t(414135);
let ef = "/assets/34c8999cfe272b23.svg",
    eA = "/assets/893dc4a04464a54a.svg",
    eN = "/assets/b3a9ce9d2cf3ff2f.svg",
    eC = ee.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu,
    eE = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eA,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: ef,
        TR: eN,
    },
    eI = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eA,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: ef,
        TR: eN,
    };
function eh() {
    let e = (0, U.Ay)();
    return (0, j.M)(e) ? eI : eE;
}
function e_(e) {
    let { description: s, onLearnMore: t, renderVisual: i } = e,
        r = eL();
    return (0, a.jsxs)("div", {
        className: l()(ep.Kw, { [ep.u0]: r }),
        children: [
            (0, a.jsxs)("div", {
                className: l()(ep.p3, { [ep.u0]: r }),
                children: [
                    (0, a.jsx)(f.E, { variant: "text-md/normal", children: s }),
                    (0, a.jsx)(A.Q, { onClick: t, text: ec.intl.string(ec.t.hvVgAZ) }),
                ],
            }),
            (0, a.jsx)("div", { className: l()(ep.aS, { [ep.u0]: r }), children: i() }),
        ],
    });
}
function eT(e) {
    let { ...s } = e,
        { theme: t } = (0, H.E)(),
        i = (0, N.r)(C.A.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, a.jsx)(E.t, { size: "md", ...s, color: i });
}
function eg(e) {
    let s,
        { currentUser: t, premiumType: i, onClose: r } = e,
        l = (0, k.Ay)(t.id),
        n = (0, u.bG)([y.A], () => y.A.useReducedMotion),
        o = (0, D.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = i === ex.PremiumTypes.TIER_1;
    return (
        (s =
            l?.premiumType === ex.PremiumTypes.TIER_2
                ? (0, a.jsxs)(F.A, {
                      user: t,
                      displayProfile: l,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ep.Kq,
                      children: [
                          (0, a.jsx)(W.o, {
                              user: t,
                              displayProfile: l,
                              avatarSize: I._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, a.jsx)(eC, {
                              className: ep.jU,
                              src: t.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !n),
                              size: I._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, a.jsxs)("div", {
                              className: ep.b$,
                              children: [
                                  (0, a.jsx)(K.A, { className: ep.Bj, usernameClass: ep.TE, name: t.toString() }),
                                  (0, a.jsx)(eT, { className: ep.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsxs)("div", {
                      className: ep.xl,
                      children: [
                          (0, a.jsx)(eC, {
                              className: ep.wK,
                              src: t.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !n),
                              size: I._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, a.jsxs)("div", {
                              className: ep.Un,
                              children: [
                                  (0, a.jsx)(K.A, { className: ep.Bj, usernameClass: ep.TE, name: t.toString() }),
                                  (0, a.jsx)(E.t, { size: "md", color: "currentColor", className: ep.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, a.jsx)(e_, {
            description: c ? ec.intl.format(ec.t.xCaYwE, {}) : ec.intl.format(ec.t["gpqr+n"], {}),
            onLearnMore: () => {
                r(),
                    o ? (0, z.openUserProfileModal)({ userId: t.id }) : (0, B.openUserSettings)(G.X.PROFILE_PANEL),
                    $.default.track(ej.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function ev(e) {
    let { currentUser: s, onClose: t } = e,
        i = (0, es.$F)(),
        { analyticsLocations: r } = (0, P.Ay)(R.A.PREMIUM_UNCANCEL_MODAL),
        l = (0, es.Xb)(),
        n = (0, et.t)(),
        o = i?.id ?? ex.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, ea.A)(o);
    if (!(0, Q.YE)(s, ex.PremiumTypes.TIER_2) || null == l) return null;
    let m = i?.status ?? es.Wo.UPCOMING,
        u = i?.nameUnformatted ?? ex.VD[ex.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, ei.I)(o).standard,
        x = ec.intl.string(u),
        j = m === es.Wo.EARNED,
        p = n?.days ?? 1,
        f = ec.t.pwkxYF;
    if (j) {
        let e = Math.max((0, Q.To)(l), 1);
        e >= 365 ? ((p = Math.floor(e / 365)), (f = ec.t["/ojPfi"])) : ((p = e), (f = ec.t.IItWYo));
    }
    return (0, a.jsx)(e_, {
        description: ec.intl.format(f, { time: p }),
        onLearnMore: () => {
            t(),
                (0, er.D)({ analyticsLocations: r, displayProfile: null }),
                $.default.track(ej.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, a.jsx)(h.h, {
                className: ep.nc,
                color: c,
                children: (0, a.jsx)("img", { alt: x, src: d, className: ep.pq }),
            }),
    });
}
function eM(e) {
    let { premiumType: s } = e,
        t = (0, u.bG)([y.A], () => y.A.useReducedMotion),
        i = (0, L.Fj)(null)
            .filter((e) => e.type === b.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        r = (0, u.yK)([w.A], () => w.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - i.length)),
        l = eh().emojiStickersVisual,
        n = s === ex.PremiumTypes.TIER_1;
    return (0, a.jsx)(e_, {
        description: n ? ec.intl.format(ec.t.couiKJ, {}) : ec.intl.format(ec.t["0hUHi6"], {}),
        onLearnMore: () => {
            window.open(J.A.getArticleURL(ej.MVz.PREMIUM_DETAILS)),
                $.default.track(ej.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != i && i.length > 0) || (!n && null != r && r.length > 0)
                ? (0, a.jsxs)("div", {
                      className: ep.iB,
                      children: [
                          i
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : q.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, a.jsx)("img", { className: ep.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          n
                              ? null
                              : r.map((e) =>
                                    (0, a.jsx)(
                                        V.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, a.jsx)("img", { className: ep.OP, alt: "", src: l }),
    });
}
function eU(e) {
    let { premiumType: s, onClose: t } = e;
    i.useEffect(() => v.h.wait(() => (0, M.CD)()), []);
    let r = (0, u.bG)([y.A], () => y.A.useReducedMotion),
        [n, o] = (0, u.yK)([Z.A, X.A], () => {
            let e = Z.A.boostSlots,
                s = new Map();
            m()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != X.A.getGuild(e)) {
                        let t = s.get(e) ?? 0;
                        s.set(e, t + 1);
                    }
                });
            let t = null,
                a = 0;
            return (
                s.size > 0 && ([t, a] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [X.A.getGuild(t), a]
            );
        }),
        c = null != n && o > 0,
        d = eh().boostItemVisual;
    return (0, a.jsx)(e_, {
        description: s === ex.PremiumTypes.TIER_1 ? ec.intl.format(ec.t.K4Hv69, {}) : ec.intl.format(ec.t.wRxEDW, {}),
        onLearnMore: () => {
            t(),
                (0, B.openUserSettings)(G.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                $.default.track(ej.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, a.jsx)("div", {
                      className: ep.Ht,
                      children: (0, a.jsxs)("div", {
                          className: ep.W5,
                          children: [
                              (0, a.jsx)(S.Ay, { guild: n, size: S.Ay.Sizes.MEDIUM, animate: !r, className: ep.Hc }),
                              (0, a.jsxs)("div", {
                                  className: ep.IA,
                                  children: [
                                      (0, a.jsx)(f.E, {
                                          variant: "text-md/normal",
                                          className: l()(ep.v, ep.e0),
                                          children: n.name,
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: ep.i$,
                                          children: [
                                              (0, a.jsx)(_._, {
                                                  color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ep.jZ,
                                              }),
                                              (0, a.jsx)(f.E, {
                                                  variant: "text-xs/normal",
                                                  className: l()(ep.v, ep.x2),
                                                  children: ec.intl.format(ec.t["Ou/g/P"], { boostCount: o }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, a.jsx)("img", { alt: "", src: d }),
    });
}
let ey = () => {
    let e = eh().screenShareItemVisual;
    return (0, a.jsx)(e_, {
        description: ec.intl.format(ec.t.wK04T1, {}),
        onLearnMore: () => {
            window.open(J.A.getArticleURL(ej.MVz.STREAM_QUALITY_SETTINGS)),
                $.default.track(ej.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, a.jsx)("img", { alt: "", src: e }),
    });
};
function eR(e) {
    let { premiumType: s } = e,
        t = eh().uploadsMessagesItemVisual;
    return (0, a.jsx)(e_, {
        description: s === ex.PremiumTypes.TIER_2 ? ec.intl.format(ec.t.GsOFRJ, {}) : ec.intl.format(ec.t.wFWO6D, {}),
        onLearnMore: () => {
            window.open(J.A.getArticleURL(ej.MVz.PREMIUM_DETAILS)),
                $.default.track(ej.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, a.jsx)("img", { alt: "", src: t }),
    });
}
let eP = i.createContext({ isPremiumRebrand: !1 }),
    eL = () => i.useContext(eP).isPremiumRebrand;
function eb(e) {
    let { currentUser: s, premiumType: t, onClose: r, isDowngrade: n = !1, isPremiumRebrand: o = !1 } = e,
        c = i.useMemo(() => {
            let e = [];
            switch (t) {
                case ex.PremiumTypes.TIER_0:
                    e.push((0, a.jsx)(eM, { premiumType: t }), (0, a.jsx)(eR, { premiumType: t }));
                    break;
                case ex.PremiumTypes.TIER_1:
                    n
                        ? e.push(
                              (0, a.jsx)(eg, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, a.jsx)(ey, {}, "screen-share-item"),
                              (0, a.jsx)(eU, { premiumType: t, onClose: r }, "boost-item"),
                          )
                        : e.push(
                              (0, a.jsx)(eg, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, a.jsx)(eM, { premiumType: t }, "emoji-stickers-item"),
                              (0, a.jsx)(ey, {}, "screen-share-item"),
                              (0, a.jsx)(eR, { premiumType: t }, "uploads-item"),
                              (0, a.jsx)(eU, { premiumType: t, onClose: r }, "boost-item"),
                          );
                    break;
                case ex.PremiumTypes.TIER_2:
                    n
                        ? e.push(
                              (0, a.jsx)(eg, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, a.jsx)(eU, { premiumType: t, onClose: r }, "boost-item"),
                              (0, a.jsx)(ey, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, a.jsx)(ev, { currentUser: s, onClose: r }, "badge-item"),
                              (0, a.jsx)(eg, { currentUser: s, premiumType: t, onClose: r }, "profile-item"),
                              (0, a.jsx)(eM, { premiumType: t }, "emoji-stickers-item"),
                              (0, a.jsx)(eU, { premiumType: t, onClose: r }, "boost-item"),
                              (0, a.jsx)(ey, {}, "screen-share-item"),
                              (0, a.jsx)(eR, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, r, n]);
    return (0, a.jsx)(eP.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, a.jsx)("div", {
            className: l()(ep.xP, { [ep.u0]: o, [ep.mK]: o && c.length <= 2 }),
            children: c,
        }),
    });
}
let eS = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: r,
            footer: l,
            onClose: n,
            onDiscountClaim: c,
            onContinue: m,
            analyticsLocations: j,
            isLoading: p = !1,
            churnUserDiscountOffer: A = null,
            isDowngrade: N = !1,
            subtitleIcon: C,
            subtitleClassName: E,
        } = e,
        I = (0, u.bG)([Y.default], () => {
            let e = Y.default.getCurrentUser();
            return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, O.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let h = null != A && !p;
    return (i.useEffect(() => {
        h &&
            $.default.track(ej.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: j,
                discount_id: A?.discountId,
            });
    }, [h, j, A]),
    p)
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ed.A, { premiumType: s, onClose: n }),
                  (0, a.jsx)(d.c, {
                      children: (0, a.jsx)("div", {
                          className: ep.rf,
                          children: (0, a.jsx)(T.y, { className: ep.u1 }),
                      }),
                  }),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ed.A, { premiumType: s, onClose: n }),
                  (0, a.jsx)(d.c, {
                      children: (0, a.jsxs)("div", {
                          className: ep.rf,
                          children: [
                              (0, a.jsx)(g.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ep.DD,
                                  children: t,
                              }),
                              (0, a.jsxs)("div", {
                                  className: E,
                                  children: [C, (0, a.jsx)(f.E, { variant: "text-md/normal", children: r })],
                              }),
                              (0, a.jsx)(eb, { currentUser: I, premiumType: s, onClose: n, isDowngrade: N }),
                          ],
                      }),
                  }),
                  !h && (0, a.jsx)(x.j, { children: l }),
                  h && (0, a.jsx)(eu, { churnUserDiscountOffer: A, onDiscountClaim: c, onContinue: m }),
              ],
          });
};
