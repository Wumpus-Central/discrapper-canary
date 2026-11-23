(s.d(t, { l: () => eO, A: () => eD }), s(321073));
var n = s(477900),
    r = s(582128),
    a = s(503698),
    i = s.n(a),
    l = s(284009),
    o = s.n(l),
    c = s(435558),
    u = s.n(c),
    d = s(855986),
    m = s(430993),
    E = s(364840),
    p = s(462887),
    _ = s(97808),
    L = s(834730),
    A = s(123292),
    h = s(602853),
    N = s(646514),
    S = s(403581),
    I = s(778712),
    T = s(315629),
    f = s(104510),
    C = s(289873),
    x = s(534514),
    g = s(559201),
    y = s(736653),
    j = s(775602),
    R = s(793574),
    O = s(688810),
    D = s(822123),
    P = s(770335),
    v = s(682163),
    M = s(931959),
    b = s(148355),
    w = s(527212),
    U = s(917445),
    B = s(270574),
    F = s(100663),
    G = s(915614),
    k = s(946356),
    W = s(939496),
    V = s(780964),
    H = s(766075),
    Y = s(71393),
    z = s(287809),
    K = s(178368),
    Z = s(129230),
    X = s(486020),
    q = s(975571),
    Q = s(448645),
    $ = s(253400),
    J = s(105909),
    ee = s(627380),
    et = s(704640),
    es = s(208223),
    en = s(30084),
    er = s(862482),
    ea = s(930861),
    ei = s(821609),
    el = s(792996),
    eo = s(516003);
let ec = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: s, onContinue: r } = e,
        a = (0, y.Ay)(),
        i = (0, p.M)(a) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
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
                                      (0, n.jsx)(L.E, {
                                          variant: "body-md/medium",
                                          className: eo.PU,
                                          children: el.intl.format(el.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.intervalCount,
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eo.$t,
                                          children: [
                                              (0, n.jsxs)(ea.wL, {
                                                  "data-migration-pending": !0,
                                                  className: eo.Oy,
                                                  innerClassName: eo.iO,
                                                  look: er.pR.OUTLINED,
                                                  color: er.XD.CUSTOM,
                                                  onClick: () => s?.(),
                                                  children: [
                                                      (0, n.jsx)(S.NitroWheelIcon, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: eo.Fl,
                                                      }),
                                                      (0, n.jsx)(L.E, {
                                                          variant: "body-sm/semibold",
                                                          className: eo.H0,
                                                          children: el.intl.string(el.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(ei.$, {
                                                  variant: "primary",
                                                  text: el.intl.string(el.t["3PatSz"]),
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
var eu = s(683166),
    ed = s(682901),
    em = s(652215),
    eE = s(518144);
let ep = "/assets/34c8999cfe272b23.svg",
    e_ = "/assets/893dc4a04464a54a.svg",
    eL = "/assets/b3a9ce9d2cf3ff2f.svg",
    eA = $.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    eh = {
        boostItemVisual: "/assets/f30ca678d7e3549e.svg",
        emojiStickersVisual: "/assets/27244382f9e8cc5f.svg",
        screenShareItemVisual: e_,
        uploadsMessagesItemVisual: "/assets/b8183e94e7ff0020.svg",
        uploadsMessagesItemVisualV2: "/assets/17f762a38d0747e7.svg",
        PL: ep,
        TR: eL,
    },
    eN = {
        boostItemVisual: "/assets/b5a84c68f2051c39.svg",
        emojiStickersVisual: "/assets/d403174a2d73fc48.svg",
        screenShareItemVisual: e_,
        uploadsMessagesItemVisual: "/assets/351b85bf9e59346f.svg",
        uploadsMessagesItemVisualV2: "/assets/cd3b44e57a5e6597.svg",
        PL: ep,
        TR: eL,
    };
function eS() {
    let e = (0, y.Ay)();
    return (0, p.M)(e) ? eN : eh;
}
function eI(e) {
    let { description: t, onLearnMore: s, renderVisual: a } = e,
        l = r.useContext(eR).isPremiumRebrand;
    return (0, n.jsxs)("div", {
        className: i()(eE.Kw, { [eE.u0]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: i()(eE.p3, { [eE.u0]: l }),
                children: [
                    (0, n.jsx)(L.E, { variant: "body-md/normal", children: t }),
                    (0, n.jsx)(A.Q, { onClick: s, text: el.intl.string(el.t.hvVgAZ) }),
                ],
            }),
            (0, n.jsx)("div", { className: i()(eE.aS, { [eE.u0]: l }), children: a() }),
        ],
    });
}
function eT(e) {
    let { ...t } = e,
        { theme: s } = (0, W.E)(),
        r = (0, h.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE, s).hex();
    return (0, n.jsx)(S.NitroWheelIcon, { size: "md", ...t, color: r });
}
function ef(e) {
    let t,
        { currentUser: s, premiumType: r, onClose: a } = e,
        i = (0, w.Ay)(s.id),
        l = (0, d.bG)([j.Ay], () => j.Ay.useReducedMotion),
        o = r === ed.PremiumTypes.TIER_1;
    return (
        (t =
            i?.premiumType === ed.PremiumTypes.TIER_2
                ? (0, n.jsxs)(k.A, {
                      user: s,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: eE.Kq,
                      children: [
                          (0, n.jsx)(G.o, {
                              user: s,
                              displayProfile: i,
                              avatarSize: I._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, n.jsx)(eA, {
                              className: eE.jU,
                              src: s.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: eE.b$,
                              children: [
                                  (0, n.jsx)(B.A, { className: eE.Bj, usernameClass: eE.TE, name: s.toString() }),
                                  (0, n.jsx)(eT, { className: eE.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: eE.xl,
                      children: [
                          (0, n.jsx)(eA, {
                              className: eE.wK,
                              src: s.getAvatarURL(void 0, (0, I.FT)(I._3.SIZE_56), !l),
                              size: I._3.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, n.jsxs)("div", {
                              className: eE.Un,
                              children: [
                                  (0, n.jsx)(B.A, { className: eE.Bj, usernameClass: eE.TE, name: s.toString() }),
                                  (0, n.jsx)(S.NitroWheelIcon, { size: "md", color: "currentColor", className: eE.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, n.jsx)(eI, {
            description: o ? el.intl.format(el.t.xCaYwE, {}) : el.intl.format(el.t["gpqr+n"], {}),
            onLearnMore: function () {
                (a(),
                    (0, F.openUserProfileModal)({ userId: s.id }),
                    Z.default.track(em.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    }));
            },
            renderVisual: () => t,
        })
    );
}
function eC(e) {
    let { currentUser: t, onClose: s } = e,
        r = (0, J.$F)(),
        { analyticsLocations: a } = (0, O.Ay)(R.A.PREMIUM_UNCANCEL_MODAL),
        i = (0, J.Xb)(),
        l = (0, ee.t)(),
        o = r?.id ?? ed.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, et.A)(o);
    if (!(0, Q.YE)(t, ed.PremiumTypes.TIER_2) || null == i) return null;
    let u = r?.status ?? J.Wo.UPCOMING,
        d = r?.nameUnformatted ?? ed.VD[ed.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, es.I)(o).standard,
        E = el.intl.string(d),
        p = u === J.Wo.EARNED || u === J.Wo.WITHHELD,
        _ = l?.days ?? 1,
        L = el.t.pwkxYF;
    if (p) {
        let e = Math.max((0, Q.To)(i), 1);
        e >= 365 ? ((_ = Math.floor(e / 365)), (L = el.t["/ojPfi"])) : ((_ = e), (L = el.t.IItWYo));
    }
    return (0, n.jsx)(eI, {
        description: el.intl.format(L, { time: _ }),
        onLearnMore: function () {
            (s(),
                (0, en.D)({ analyticsLocations: a, displayProfile: null }),
                Z.default.track(em.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" }));
        },
        renderVisual: () =>
            (0, n.jsx)(T.h, {
                className: eE.nc,
                color: c,
                children: (0, n.jsx)("img", { alt: E, src: m, className: eE.pq }),
            }),
    });
}
function ex(e) {
    let { premiumType: t } = e,
        s = (0, d.bG)([j.Ay], () => j.Ay.useReducedMotion),
        r = (0, D.Fj)(null)
            .filter((e) => e.type === P.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, d.yK)([M.A], () => M.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        i = eS().emojiStickersVisual,
        l = t === ed.PremiumTypes.TIER_1;
    return (0, n.jsx)(eI, {
        description: l ? el.intl.format(el.t.couiKJ, {}) : el.intl.format(el.t["0hUHi6"], {}),
        onLearnMore: function () {
            (window.open(q.A.getArticleURL(em.MVz.PREMIUM_DETAILS)),
                Z.default.track(em.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" }));
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!l && null != a && a.length > 0)
                ? (0, n.jsxs)("div", {
                      className: eE.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : X.Ay.getEmojiURL({ id: e.id, animated: !s && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, n.jsx)("img", { className: eE.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : a.map((e) =>
                                    (0, n.jsx)(
                                        b.A,
                                        { disableAnimation: s, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, n.jsx)("img", { className: eE.OP, alt: "", src: i }),
    });
}
function eg(e) {
    let { premiumType: t, onClose: s } = e;
    r.useEffect(() => {
        (0, g.CD)();
    }, []);
    let a = (0, d.bG)([j.Ay], () => j.Ay.useReducedMotion),
        [l, o] = (0, d.yK)([K.A, Y.A], () => {
            let e = K.A.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != Y.A.getGuild(e)) {
                        let s = t.get(e) ?? 0;
                        t.set(e, s + 1);
                    }
                });
            let s = null,
                n = 0;
            return (
                t.size > 0 && ([s, n] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [Y.A.getGuild(s), n]
            );
        }),
        c = null != l && o > 0,
        m = eS().boostItemVisual;
    return (0, n.jsx)(eI, {
        description: t === ed.PremiumTypes.TIER_1 ? el.intl.format(el.t.K4Hv69, {}) : el.intl.format(el.t.wRxEDW, {}),
        onLearnMore: function () {
            (s(),
                (0, H.openUserSettings)(V.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                Z.default.track(em.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" }));
        },
        renderVisual: () =>
            c
                ? (0, n.jsx)("div", {
                      className: eE.Ht,
                      children: (0, n.jsxs)("div", {
                          className: eE.W5,
                          children: [
                              (0, n.jsx)(v.Ay, { guild: l, size: v.Ay.Sizes.MEDIUM, animate: !a, className: eE.Hc }),
                              (0, n.jsxs)("div", {
                                  className: eE.IA,
                                  children: [
                                      (0, n.jsx)(L.E, {
                                          variant: "body-md/normal",
                                          className: i()(eE.v, eE.e0),
                                          children: l.name,
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: eE.i$,
                                          children: [
                                              (0, n.jsx)(f.BoostGemIcon, {
                                                  color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: eE.jZ,
                                              }),
                                              (0, n.jsx)(L.E, {
                                                  variant: "body-xs/normal",
                                                  className: i()(eE.v, eE.x2),
                                                  children: el.intl.format(el.t["Ou/g/P"], { boostCount: o }),
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
    let e = eS().screenShareItemVisual;
    return (0, n.jsx)(eI, {
        description: el.intl.format(el.t.wK04T1, {}),
        onLearnMore: function () {
            (window.open(q.A.getArticleURL(em.MVz.STREAM_QUALITY_SETTINGS)),
                Z.default.track(em.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" }));
        },
        renderVisual: () => (0, n.jsx)("img", { className: eE.OP, alt: "", src: e }),
    });
}
function ej(e) {
    let { premiumType: t } = e,
        s = eS().uploadsMessagesItemVisual;
    return (0, n.jsx)(eI, {
        description: t === ed.PremiumTypes.TIER_2 ? el.intl.format(el.t.GsOFRJ, {}) : el.intl.format(el.t.wFWO6D, {}),
        onLearnMore: function () {
            (window.open(q.A.getArticleURL(em.MVz.PREMIUM_DETAILS)),
                Z.default.track(em.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" }));
        },
        renderVisual: () => (0, n.jsx)("img", { className: eE.OP, alt: "", src: s }),
    });
}
let eR = r.createContext({ isPremiumRebrand: !1 });
function eO(e) {
    let { currentUser: t, premiumType: s, onClose: a, isDowngrade: l = !1, isPremiumRebrand: o = !1 } = e,
        c = r.useMemo(() => {
            let e = [];
            switch (s) {
                case ed.PremiumTypes.TIER_0:
                    e.push((0, n.jsx)(ex, { premiumType: s }), (0, n.jsx)(ej, { premiumType: s }));
                    break;
                case ed.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(eg, { premiumType: s, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(ex, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(ej, { premiumType: s }, "uploads-item"),
                              (0, n.jsx)(eg, { premiumType: s, onClose: a }, "boost-item"),
                          );
                    break;
                case ed.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(eg, { premiumType: s, onClose: a }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, n.jsx)(eC, { currentUser: t, onClose: a }, "badge-item"),
                              (0, n.jsx)(ef, { currentUser: t, premiumType: s, onClose: a }, "profile-item"),
                              (0, n.jsx)(ex, { premiumType: s }, "emoji-stickers-item"),
                              (0, n.jsx)(eg, { premiumType: s, onClose: a }, "boost-item"),
                              (0, n.jsx)(ey, {}, "screen-share-item"),
                              (0, n.jsx)(ej, { premiumType: s }, "uploads-item"),
                          );
            }
            return e;
        }, [s, t, a, l]),
        u = r.useMemo(() => ({ isPremiumRebrand: o }), [o]);
    return (0, n.jsx)(eR.Provider, {
        value: u,
        children: (0, n.jsx)("div", {
            className: i()(eE.xP, { [eE.u0]: o, [eE.mK]: o && c.length <= 2 }),
            children: c,
        }),
    });
}
let eD = function (e) {
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
        I = (0, d.bG)([z.default], () => {
            let e = z.default.getCurrentUser();
            return (o()(null != e, "ProfileItem: currentUser cannot be undefined"), e);
        });
    r.useEffect(() => {
        (0, U.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != A && !_;
    return (r.useEffect(() => {
        T &&
            Z.default.track(em.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: p,
                discount_id: A?.discountId,
            });
    }, [T, p, A]),
    _)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(eu.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsx)("div", {
                          className: eE.rf,
                          children: (0, n.jsx)(C.y, { className: eE.u1 }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(eu.A, { premiumType: t, onClose: l }),
                  (0, n.jsx)(m.c, {
                      children: (0, n.jsxs)("div", {
                          className: eE.rf,
                          children: [
                              (0, n.jsx)(x.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: eE.DD,
                                  children: s,
                              }),
                              (0, n.jsxs)("div", {
                                  className: S,
                                  children: [N, (0, n.jsx)(L.E, { variant: "body-md/normal", children: a })],
                              }),
                              (0, n.jsx)(eO, { currentUser: I, premiumType: t, onClose: l, isDowngrade: h }),
                          ],
                      }),
                  }),
                  !T && (0, n.jsx)(E.j, { children: i }),
                  T && (0, n.jsx)(ec, { churnUserDiscountOffer: A, onDiscountClaim: c, onContinue: u }),
              ],
          });
};
