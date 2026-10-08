(s.d(t, { l: () => eP, A: () => ev }), s(321073));
var n = s(477900),
    r = s(582128),
    a = s(503698),
    i = s.n(a),
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
    g = s(73153),
    j = s(820739),
    y = s(736653),
    R = s(775602),
    O = s(793574),
    D = s(688810),
    P = s(822123),
    v = s(770335),
    M = s(548118),
    b = s(931959),
    w = s(148355),
    U = s(591179),
    B = s(999291),
    F = s(903209),
    G = s(270574),
    k = s(402860),
    V = s(915614),
    H = s(946356),
    W = s(939496),
    Y = s(780964),
    z = s(766075),
    K = s(71393),
    X = s(287809),
    Z = s(178368),
    q = s(174459),
    Q = s(486020),
    $ = s(975571),
    J = s(158045),
    ee = s(19575),
    et = s(19886),
    es = s(627380),
    en = s(704640),
    er = s(425713),
    ea = s(30084),
    ei = s(862482),
    el = s(930861),
    eo = s(821609),
    ec = s(660183),
    eu = s(516003);
let ed = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: s, onContinue: r } = e,
        a = (0, y.Ay)(),
        i = (0, p.M)(a) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: eu.bR,
              children: [
                  (0, n.jsx)("div", { className: eu.v0 }),
                  (0, n.jsx)("div", { className: eu.X2 }),
                  (0, n.jsx)("div", {
                      className: eu.Dg,
                      children: (0, n.jsxs)("div", {
                          className: eu.xt,
                          children: [
                              (0, n.jsx)("img", { alt: "", src: i, className: eu.lR }),
                              (0, n.jsxs)("div", {
                                  className: eu.t2,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/medium",
                                          className: eu.PU,
                                          children: ec.intl.format(ec.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.intervalCount,
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eu.$t,
                                          children: [
                                              (0, n.jsxs)(el.wL, {
                                                  "data-migration-pending": !0,
                                                  className: eu.Oy,
                                                  innerClassName: eu.iO,
                                                  look: ei.pR.OUTLINED,
                                                  color: ei.XD.CUSTOM,
                                                  onClick: () => s?.(),
                                                  children: [
                                                      (0, n.jsx)(S.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eu.Fl,
                                                      }),
                                                      (0, n.jsx)(L.E, {
                                                          variant: "text-sm/semibold",
                                                          className: eu.H0,
                                                          children: ec.intl.string(ec.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(eo.$, {
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
var em = s(637969),
    eE = s(202541),
    ep = s(652215),
    e_ = s(518144);
let eL = "/assets/34c8999cfe272b23.svg",
    eA = "/assets/893dc4a04464a54a.svg",
    eh = "/assets/b3a9ce9d2cf3ff2f.svg",
    eN = ee.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    eS = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: eA,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: eL,
        TR: eh,
    },
    eI = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: eA,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: eL,
        TR: eh,
    };
function eT() {
    let e = (0, y.Ay)();
    return (0, p.M)(e) ? eI : eS;
}
function eC(e) {
    let { description: t, onLearnMore: s, renderVisual: a } = e,
        l = r.useContext(eD).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: i()(e_.Kw, { [e_.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: i()(e_.p3, { [e_.u0]: l }),
                children: [
                    (0, n.jsx)(L.E, { variant: "text-md/normal", children: t }),
                    (0, n.jsx)(A.Q, { onClick: s, text: ec.intl.string(ec.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: i()(e_.aS, { [e_.u0]: l }), children: a() }),
        ],
    });
}
function ef(e) {
    let { ...t } = e,
        { theme: s } = (0, W.E)(),
        r = (0, h.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE, s).hex();
    return (0, n.jsx)(S.t, { size: "md", ...t, color: r });
}
function ex(e) {
    let t,
        { currentUser: s, premiumType: r, onClose: a } = e,
        i = (0, B.Ay)(s.id),
        l = (0, d.bG)([R.Ay], () => R.Ay.useReducedMotion),
        o = (0, U.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = r === eE.PremiumTypes.TIER_1;
    return (
        (t =
            i?.premiumType === eE.PremiumTypes.TIER_2
                ? (0, n.jsxs)(H.A, {
                      user: s,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: e_.Kq,
                      children: [
                          (0, n.jsx)(V.o, {
                              user: s,
                              displayProfile: i,
                              avatarSize: I._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(eN, {
                              className: e_.jU,
                              src: s.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: e_.b$,
                              children: [
                                  (0, n.jsx)(G.A, { className: e_.Bj, usernameClass: e_.TE, name: s.toString() }),
                                  (0, n.jsx)(ef, { className: e_.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: e_.xl,
                      children: [
                          (0, n.jsx)(eN, {
                              className: e_.wK,
                              src: s.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: e_.Un,
                              children: [
                                  (0, n.jsx)(G.A, { className: e_.Bj, usernameClass: e_.TE, name: s.toString() }),
                                  (0, n.jsx)(S.t, { size: "md", color: "currentColor", className: e_.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eC, {
            description: c ? ec.intl.format(ec.t.xCaYwE, {}) : ec.intl.format(ec.t["gpqr+n"], {}),
            onLearnMore: function () {
                (a(),
                    o ? (0, k.openUserProfileModal)({ userId: s.id }) : (0, z.openUserSettings)(Y.X.PROFILE_PANEL),
                    q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    }));
            },
            renderVisual: () => t,
        })
    );
}
function eg(e) {
    let { currentUser: t, onClose: s } = e,
        r = (0, et.$F)(),
        { analyticsLocations: a } = (0, D.Ay)(O.A.PREMIUM_UNCANCEL_MODAL),
        i = (0, et.Xb)(),
        l = (0, es.t)(),
        o = r?.id ?? eE.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, en.A)(o);
    if (!(0, J.YE)(t, eE.PremiumTypes.TIER_2) || null == i) return null;
    let u = r?.status ?? et.Wo.UPCOMING,
        d = r?.nameUnformatted ?? eE.VD[eE.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, er.I)(o).standard,
        E = ec.intl.string(d),
        p = u === et.Wo.EARNED || u === et.Wo.WITHHELD,
        _ = l?.days ?? 1,
        L = ec.t.pwkxYF;
    if (p) {
        let e = Math.max((0, J.To)(i), 1);
        e >= 365 ? ((_ = Math.floor(e / 365)), (L = ec.t["/ojPfi"])) : ((_ = e), (L = ec.t.IItWYo));
    }
    return (0, n.jsx)(eC, {
        description: ec.intl.format(L, { time: _ }),
        onLearnMore: function () {
            (s(),
                (0, ea.D)({ analyticsLocations: a, displayProfile: null }),
                q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" }));
        },
        renderVisual: () =>
            (0, n.jsx)(T.h, {
                className: e_.nc,
                color: c,
                children: (0, n.jsx)("img", { alt: E, src: m, className: e_.pq }),
            }),
    });
}
function ej(e) {
    let { premiumType: t } = e,
        s = (0, d.bG)([R.Ay], () => R.Ay.useReducedMotion),
        r = (0, P.Fj)(null)
            .filter((e) => e.type === v.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, d.yK)([b.A], () => b.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        i = eT().emojiStickersVisual,
        l = t === eE.PremiumTypes.TIER_1;
    return (0, n.jsx)(eC, {
        description: l ? ec.intl.format(ec.t.couiKJ, {}) : ec.intl.format(ec.t["0hUHi6"], {}),
        onLearnMore: function () {
            (window.open($.A.getArticleURL(ep.MVz.PREMIUM_DETAILS)),
                q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" }));
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!l && null != a && a.length > 0)
                ? (0, n.jsxs)("div", {
                      className: e_.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : Q.Ay.getEmojiURL({ id: e.id, animated: !s && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: e_.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : a.map((e) =>
                                    (0, n.jsx)(
                                        w.A,
                                        { disableAnimation: s, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: e_.OP, alt: "", src: i }),
    });
}
function ey(e) {
    let { premiumType: t, onClose: s } = e;
    r.useEffect(() => g.h.wait(() => (0, j.CD)()), []);
    let a = (0, d.bG)([R.Ay], () => R.Ay.useReducedMotion),
        [l, o] = (0, d.yK)([Z.A, K.A], () => {
            let e = Z.A.boostSlots,
                t = new Map();
            u()(e)
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
        c = null != l && o > 0,
        m = eT().boostItemVisual;
    return (0, n.jsx)(eC, {
        description: t === eE.PremiumTypes.TIER_1 ? ec.intl.format(ec.t.K4Hv69, {}) : ec.intl.format(ec.t.wRxEDW, {}),
        onLearnMore: function () {
            (s(),
                (0, z.openUserSettings)(Y.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" }));
        },
        renderVisual: () =>
            c
                ? (0, n.jsx)("div", {
                      className: e_.Ht,
                      children: (0, n.jsxs)("div", {
                          className: e_.W5,
                          children: [
                              (0, n.jsx)(M.Ay, { guild: l, size: M.Ay.Sizes.MEDIUM, animate: !a, className: e_.Hc }),
                              (0, n.jsxs)("div", {
                                  className: e_.IA,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "text-md/normal",
                                          className: i()(e_.v, e_.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: e_.i$,
                                          children: [
                                              (0, n.jsx)(C._, {
                                                  color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: e_.jZ,
                                              }),
                                              (0, n.jsx)(L.E, {
                                                  variant: "text-xs/normal",
                                                  className: i()(e_.v, e_.x2),
                                                  children: ec.intl.format(ec.t["Ou/g/P"], { boostCount: o }),
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
function eR() {
    let e = eT().screenShareItemVisual;
    return (0, n.jsx)(eC, {
        description: ec.intl.format(ec.t.wK04T1, {}),
        onLearnMore: function () {
            (window.open($.A.getArticleURL(ep.MVz.STREAM_QUALITY_SETTINGS)),
                q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" }));
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: e }),
    });
}
function eO(e) {
    let { premiumType: t } = e,
        s = eT().uploadsMessagesItemVisual;
    return (0, n.jsx)(eC, {
        description: t === eE.PremiumTypes.TIER_2 ? ec.intl.format(ec.t.GsOFRJ, {}) : ec.intl.format(ec.t.wFWO6D, {}),
        onLearnMore: function () {
            (window.open($.A.getArticleURL(ep.MVz.PREMIUM_DETAILS)),
                q.default.track(ep.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" }));
        },
        renderVisual: () => (0, n.jsx)("img", { alt: "", src: s }),
    });
}
let eD = r.createContext({ isPremiumRebrand: !1 });
function eP(e) {
    let { currentUser: t, premiumType: s, onClose: a, isDowngrade: l = !1, isPremiumRebrand: o = !1 } = e,
        c = r.useMemo(() => {
            let e = [];
            switch (s) {
                case eE.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(ej, { premiumType: s }), (0, n.jsx)(eO, { premiumType: s }));
                    break;
                case eE.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(ex, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(eR, {}, "screen-share-item"),
                              (0, n.jsx)(ey, { premiumType: s, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(ex, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(ej, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(eR, {}, "screen-share-item"),
                              (0, n.jsx)(eO, { premiumType: s }, "uploads-item"),
                              (0, n.jsx)(ey, { premiumType: s, onClose: a }, "boost-item"),
                          );
                    break;
                case eE.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(ex, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(ey, { premiumType: s, onClose: a }, "boost-item"),
                              (0, n.jsx)(eR, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eg, { currentUser: t, onClose: a }, "badge-item"),
                              (0, n.jsx)(ex, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(ej, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(ey, { premiumType: s, onClose: a }, "boost-item"),
                              (0, n.jsx)(eR, {}, "screen-share-item"),
                              (0, n.jsx)(eO, { premiumType: s }, "uploads-item"),
                          );
            }
            return e;
        }, [s, t, a, l]);
    return (0, n.jsx)(eD.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, n.jsx)("div", {
            className: i()(e_.xP, { [e_.u0]: o, [e_.mK]: o && c.length <= 2 }),
            children: c,
        }),
    });
}
let ev = function (e) {
    let {
            premiumType: t,
            titleText: s,
            subtitleText: a,
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
        I = (0, d.bG)([X.default], () => {
            let e = X.default.getCurrentUser();
            return (o()(null != e, "ProfileItem: currentUser cannot be undefined"), e);
        });
    r.useEffect(() => {
        (0, F.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != A && !_;
    return (r.useEffect(() => {
        T &&
            q.default.track(ep.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: p,
                discount_id: A?.discountId,
            });
    }, [T, p, A]),
    _)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsx)("div", {
                          className: e_.rf,
                          children: (0, n.jsx)(f.y, { className: e_.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(em.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsxs)("div", {
                          className: e_.rf,
                          children: [
                              (0, n.jsx)(x.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: e_.DD,
                                  children: s,
                              }),
                              (0, n.jsxs)("div", {
                                  className: S,
                                  children: [N, (0, n.jsx)(L.E, { variant: "text-md/normal", children: a })],
                              }),
                              (0, n.jsx)(eP, { currentUser: I, premiumType: t, onClose: l, isDowngrade: h }),
                          ],
                      }),
                  }),
                  !T && (0, n.jsx)(E.j, { children: i }),
                  T && (0, n.jsx)(ed, { churnUserDiscountOffer: A, onDiscountClaim: c, onContinue: u }),
              ],
          });
};
