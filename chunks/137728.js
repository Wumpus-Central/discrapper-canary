n.d(t, { l: () => eR, A: () => eM }), n(321073);
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
    p = n(364840),
    f = n(462887),
    x = n(97808),
    v = n(834730),
    g = n(123292),
    C = n(602853),
    h = n(661531),
    L = n(403581),
    I = n(778712),
    T = n(315629),
    E = n(104510),
    j = n(289873),
    A = n(297264),
    N = n(228366),
    b = n(820739),
    S = n(736653),
    y = n(775602),
    P = n(793574),
    _ = n(688810),
    R = n(822123),
    M = n(770335),
    D = n(548118),
    U = n(931959),
    w = n(148355),
    O = n(591179),
    k = n(999291),
    W = n(903209),
    F = n(270574),
    H = n(975732),
    B = n(915614),
    G = n(946356),
    V = n(939496),
    z = n(780964),
    Y = n(766075),
    K = n(71393),
    Z = n(287809),
    q = n(178368),
    X = n(174459),
    $ = n(486020),
    J = n(975571),
    Q = n(158045),
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
    eo = n(516003);
let ed = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: n, onContinue: r } = e,
        i = (0, S.Ay)(),
        a = (0, f.M)(i) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
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
                                      (0, s.jsx)(v.E, {
                                          variant: "text-md/medium",
                                          className: eo.PU,
                                          children: ec.intl.format(ec.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.intervalCount,
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
                                                      (0, s.jsx)(L.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eo.Fl,
                                                      }),
                                                      (0, s.jsx)(v.E, {
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
    ep = n(202541),
    ef = n(652215),
    ex = n(518144);
let ev = "/assets/34c8999cfe272b23.svg",
    eg = "/assets/893dc4a04464a54a.svg",
    eC = "/assets/b3a9ce9d2cf3ff2f.svg",
    eh = ee.Ay.getEnableHardwareAcceleration() ? x.Js : x.eu,
    eL = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eg,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: ev,
        TR: eC,
    },
    eI = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eg,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: ev,
        TR: eC,
    };
function eT() {
    let e = (0, S.Ay)();
    return (0, f.M)(e) ? eI : eL;
}
function eE(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        l = r.useContext(e_).isPremiumRebrand;
    return (0, s.jsxs)("div", {
        className: a()(ex.Kw, { [ex.u0]: l }),
        children: [
            (0, s.jsxs)("div", {
                className: a()(ex.p3, { [ex.u0]: l }),
                children: [
                    (0, s.jsx)(v.E, { variant: "text-md/normal", children: t }),
                    (0, s.jsx)(g.Q, { onClick: n, text: ec.intl.string(ec.t.hvVgAZ) }),
                ],
            }),
            (0, s.jsx)("div", { className: a()(ex.aS, { [ex.u0]: l }), children: i() }),
        ],
    });
}
function ej(e) {
    let { ...t } = e,
        { theme: n } = (0, V.E)(),
        r = (0, C.r)(h.A.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, s.jsx)(L.t, { size: "md", ...t, color: r });
}
function eA(e) {
    let t,
        { currentUser: n, premiumType: r, onClose: i } = e,
        a = (0, k.Ay)(n.id),
        l = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        u = (0, O.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = r === ep.PremiumTypes.TIER_1;
    return (
        (t =
            a?.premiumType === ep.PremiumTypes.TIER_2
                ? (0, s.jsxs)(G.A, {
                      user: n,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ex.Kq,
                      children: [
                          (0, s.jsx)(B.o, {
                              user: n,
                              displayProfile: a,
                              avatarSize: I._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, s.jsx)(eh, {
                              className: ex.jU,
                              src: n.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, s.jsxs)("div", {
                              className: ex.b$,
                              children: [
                                  (0, s.jsx)(F.A, { className: ex.Bj, usernameClass: ex.TE, name: n.toString() }),
                                  (0, s.jsx)(ej, { className: ex.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, s.jsxs)("div", {
                      className: ex.xl,
                      children: [
                          (0, s.jsx)(eh, {
                              className: ex.wK,
                              src: n.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, s.jsxs)("div", {
                              className: ex.Un,
                              children: [
                                  (0, s.jsx)(F.A, { className: ex.Bj, usernameClass: ex.TE, name: n.toString() }),
                                  (0, s.jsx)(L.t, { size: "md", color: "currentColor", className: ex.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, s.jsx)(eE, {
            description: c ? ec.intl.format(ec.t.xCaYwE, {}) : ec.intl.format(ec.t["gpqr+n"], {}),
            onLearnMore: function () {
                i(),
                    u ? (0, H.openUserProfileModal)({ userId: n.id }) : (0, Y.openUserSettings)(z.X.PROFILE_PANEL),
                    X.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => t,
        })
    );
}
function eN(e) {
    let { currentUser: t, onClose: n } = e,
        r = (0, et.$F)(),
        { analyticsLocations: i } = (0, _.Ay)(P.A.PREMIUM_UNCANCEL_MODAL),
        a = (0, et.Xb)(),
        l = (0, en.t)(),
        u = r?.id ?? ep.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, es.A)(u);
    if (!(0, Q.YE)(t, ep.PremiumTypes.TIER_2) || null == a) return null;
    let o = r?.status ?? et.Wo.UPCOMING,
        d = r?.nameUnformatted ?? ep.VD[ep.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, er.I)(u).standard,
        p = ec.intl.string(d),
        f = o === et.Wo.EARNED,
        x = l?.days ?? 1,
        v = ec.t.pwkxYF;
    if (f) {
        let e = Math.max((0, Q.To)(a), 1);
        e >= 365 ? ((x = Math.floor(e / 365)), (v = ec.t["/ojPfi"])) : ((x = e), (v = ec.t.IItWYo));
    }
    return (0, s.jsx)(eE, {
        description: ec.intl.format(v, { time: x }),
        onLearnMore: function () {
            n(),
                (0, ei.D)({ analyticsLocations: i, displayProfile: null }),
                X.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, s.jsx)(T.h, {
                className: ex.nc,
                color: c,
                children: (0, s.jsx)("img", { alt: p, src: m, className: ex.pq }),
            }),
    });
}
function eb(e) {
    let { premiumType: t } = e,
        n = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        r = (0, R.Fj)(null)
            .filter((e) => e.type === M.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, d.yK)([U.A], () => U.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        a = eT().emojiStickersVisual,
        l = t === ep.PremiumTypes.TIER_1;
    return (0, s.jsx)(eE, {
        description: l ? ec.intl.format(ec.t.couiKJ, {}) : ec.intl.format(ec.t["0hUHi6"], {}),
        onLearnMore: function () {
            window.open(J.A.getArticleURL(ef.MVz.PREMIUM_DETAILS)),
                X.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
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
                                      : $.Ay.getEmojiURL({ id: e.id, animated: !n && e.animated, size: 58 }),
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
                                        w.A,
                                        { disableAnimation: n, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, s.jsx)("img", { className: ex.OP, alt: "", src: a }),
    });
}
function eS(e) {
    let { premiumType: t, onClose: n } = e;
    r.useEffect(() => N.h.wait(() => (0, b.CD)()), []);
    let i = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [l, u] = (0, d.yK)([q.A, K.A], () => {
            let e = q.A.boostSlots,
                t = new Map();
            o()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != K.A.getGuild(e)) {
                        let n = t.get(e) ?? 0;
                        t.set(e, n + 1);
                    }
                });
            let n = null,
                s = 0;
            return (
                t.size > 0 && ([n, s] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [K.A.getGuild(n), s]
            );
        }),
        c = null != l && u > 0,
        m = eT().boostItemVisual;
    return (0, s.jsx)(eE, {
        description: t === ep.PremiumTypes.TIER_1 ? ec.intl.format(ec.t.K4Hv69, {}) : ec.intl.format(ec.t.wRxEDW, {}),
        onLearnMore: function () {
            n(),
                (0, Y.openUserSettings)(z.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                X.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, s.jsx)("div", {
                      className: ex.Ht,
                      children: (0, s.jsxs)("div", {
                          className: ex.W5,
                          children: [
                              (0, s.jsx)(D.Ay, { guild: l, size: D.Ay.Sizes.MEDIUM, animate: !i, className: ex.Hc }),
                              (0, s.jsxs)("div", {
                                  className: ex.IA,
                                  children: [
                                      (0, s.jsx)(v.E, {
                                          variant: "text-md/normal",
                                          className: a()(ex.v, ex.e0),
                                          children: l.name,
                                      }),
                                      (0, s.jsxs)("div", {
                                          className: ex.i$,
                                          children: [
                                              (0, s.jsx)(E._, {
                                                  color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ex.jZ,
                                              }),
                                              (0, s.jsx)(v.E, {
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
function ey() {
    let e = eT().screenShareItemVisual;
    return (0, s.jsx)(eE, {
        description: ec.intl.format(ec.t.wK04T1, {}),
        onLearnMore: function () {
            window.open(J.A.getArticleURL(ef.MVz.STREAM_QUALITY_SETTINGS)),
                X.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, s.jsx)("img", { alt: "", src: e }),
    });
}
function eP(e) {
    let { premiumType: t } = e,
        n = eT().uploadsMessagesItemVisual;
    return (0, s.jsx)(eE, {
        description: t === ep.PremiumTypes.TIER_2 ? ec.intl.format(ec.t.GsOFRJ, {}) : ec.intl.format(ec.t.wFWO6D, {}),
        onLearnMore: function () {
            window.open(J.A.getArticleURL(ef.MVz.PREMIUM_DETAILS)),
                X.default.track(ef.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, s.jsx)("img", { alt: "", src: n }),
    });
}
let e_ = r.createContext({ isPremiumRebrand: !1 });
function eR(e) {
    let { currentUser: t, premiumType: n, onClose: i, isDowngrade: l = !1, isPremiumRebrand: u = !1 } = e,
        c = r.useMemo(() => {
            let e = [];
            switch (n) {
                case ep.PremiumTypes.TIER_0:
                    e.push((0, s.jsx)(eb, { premiumType: n }), (0, s.jsx)(eP, { premiumType: n }));
                    break;
                case ep.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, s.jsx)(eA, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(ey, {}, "screen-share-item"),
                              (0, s.jsx)(eS, { premiumType: n, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, s.jsx)(eA, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(eb, { premiumType: n }, "emoji-stickers-item"),
                              (0, s.jsx)(ey, {}, "screen-share-item"),
                              (0, s.jsx)(eP, { premiumType: n }, "uploads-item"),
                              (0, s.jsx)(eS, { premiumType: n, onClose: i }, "boost-item"),
                          );
                    break;
                case ep.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, s.jsx)(eA, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(eS, { premiumType: n, onClose: i }, "boost-item"),
                              (0, s.jsx)(ey, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, s.jsx)(eN, { currentUser: t, onClose: i }, "badge-item"),
                              (0, s.jsx)(eA, { currentUser: t, premiumType: n, onClose: i }, "profile-item"),
                              (0, s.jsx)(eb, { premiumType: n }, "emoji-stickers-item"),
                              (0, s.jsx)(eS, { premiumType: n, onClose: i }, "boost-item"),
                              (0, s.jsx)(ey, {}, "screen-share-item"),
                              (0, s.jsx)(eP, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, i, l]);
    return (0, s.jsx)(e_.Provider, {
        value: { isPremiumRebrand: u },
        children: (0, s.jsx)("div", {
            className: a()(ex.xP, { [ex.u0]: u, [ex.mK]: u && c.length <= 2 }),
            children: c,
        }),
    });
}
let eM = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: i,
            footer: a,
            onClose: l,
            onDiscountClaim: c,
            onContinue: o,
            analyticsLocations: f,
            isLoading: x = !1,
            churnUserDiscountOffer: g = null,
            isDowngrade: C = !1,
            subtitleIcon: h,
            subtitleClassName: L,
        } = e,
        I = (0, d.bG)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return u()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    r.useEffect(() => {
        (0, W.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != g && !x;
    return (r.useEffect(() => {
        T &&
            X.default.track(ef.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: g?.discountId,
            });
    }, [T, f, g]),
    x)
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, s.jsx)(m.c, {
                      children: (0, s.jsx)("div", {
                          className: ex.rf,
                          children: (0, s.jsx)(j.y, { className: ex.u1 }),
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
                              (0, s.jsx)(A.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ex.DD,
                                  children: n,
                              }),
                              (0, s.jsxs)("div", {
                                  className: L,
                                  children: [h, (0, s.jsx)(v.E, { variant: "text-md/normal", children: i })],
                              }),
                              (0, s.jsx)(eR, { currentUser: I, premiumType: t, onClose: l, isDowngrade: C }),
                          ],
                      }),
                  }),
                  !T && (0, s.jsx)(p.j, { children: a }),
                  T && (0, s.jsx)(ed, { churnUserDiscountOffer: g, onDiscountClaim: c, onContinue: o }),
              ],
          });
};
