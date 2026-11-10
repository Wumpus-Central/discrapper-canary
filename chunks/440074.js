(n.r(t), n.d(t, { default: () => tD }));
var l = n(477900),
    s = n(582128),
    i = n(613412),
    r = n(855986),
    o = n(688810),
    a = n(139286),
    d = n(343446),
    u = n(976860),
    c = n(71393),
    m = n(363487);
(n(321073), n(323874), n(14289), n(35956));
var p = n(503698),
    g = n.n(p),
    f = n(95362),
    h = n(192308),
    x = n(104510),
    A = n(534514),
    I = n(834730),
    v = n(942857),
    E = n(793574),
    b = n(263775),
    j = n(831617),
    y = n(828334),
    S = n(821609),
    _ = n(577930),
    N = n(646514);
function w(e) {
    return e
        ? { textColor: "text-default", iconColor: N.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: N.A.colors.TEXT_MUTED };
}
var C = n(475669),
    G = n(948134),
    T = n(904629);
function R(e) {
    let t = (0, r.bG)([C.A], () => C.A.getStateForGuild(e));
    return s.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, T.k)(e);
    }, [t?.entitlements]);
}
var k = n(792996),
    L = n(586428),
    D = n(144977);
n(628049);
var P = n(568065),
    O = n(105518),
    U = n(929729),
    B = n(517826);
function V(e) {
    let t,
        n,
        { guildId: i } = e,
        o = s.useRef(null),
        { state: a, lowestGameServerCost: d } = (0, r.cf)([C.A], () => ({
            state: C.A.getStateForGuild(i),
            lowestGameServerCost: C.A.getLowestGameCostForGuild(i),
        })),
        u =
            ((t = (0, r.bG)([C.A], () => C.A.getStateForGuild(i)?.entitlements, [i])),
            (n = R(i)),
            s.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return n.length > 0
                        ? { type: "expiring", expiringAt: n[0].ends_at }
                        : { type: "active", statusText: k.intl.string(L.default.FFLkmx) };
            }, [n, t])),
        { gameName: c, gameName2: m } = (0, G.A)(),
        { textColor: p } = w(u?.type === "active");
    return null == a
        ? null
        : (0, l.jsxs)(_.NI, {
              label: k.intl.string(O.default["B3OfL/"]),
              badge: P.ys["0"],
              isActive: u?.type === "active",
              isWarning: u?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: i, analyticsLocation: E.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, l.jsx)("div", {
                      className: g()(U.ZS, B.Sl),
                      children: (0, l.jsx)(y.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: U.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, l.jsx)(_.Ft, {
                      title: k.intl.string(O.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, l.jsx)(_.$L, { cost: d ?? 0, costDecorator: "+", status: u }),
                      children: (0, l.jsx)(I.E, {
                          className: B.h_,
                          color: p,
                          variant: "body-sm/medium",
                          children: k.intl.format(O.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, l.jsx)(_.kd, {
                      children: (0, l.jsx)(S.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? k.intl.string(O.default.PuvU5b)
                                  : k.intl.string(O.default.b62EHM),
                          onClick: (e) => {
                              (e.stopPropagation(),
                                  (0, D.A)({ guildId: i, analyticsLocation: E.A.GUILD_POWERUPS_OVERVIEW }));
                          },
                      }),
                  }),
              ],
          });
}
var M = n(742589),
    W = n(645619),
    F = n(512750),
    $ = n(554146),
    K = n(939981),
    X = n(456124),
    z = n(836944),
    H = n(940456),
    J = n(533993);
n(667532);
let Q = { guildTagsBadgePacks: [F.tv, F.OJ, F.Ht, F.jF] },
    Z = Object.entries(Q).reduce((e, t) => {
        let [n, l] = t;
        for (let t of l) e[t] = n;
        return e;
    }, {}),
    q = [P.o9.LEVEL, P.o9.PERK];
var Y = n(408278),
    ee = n(789645),
    et = n(406810),
    en = n(28863),
    el = n(807098),
    es = n(637706),
    ei = n(788883),
    er = n(7667),
    eo = n(705982);
function ea(e) {
    let { componentId: t, componentType: n, promotionId: s, banner: i, onDismiss: r } = e,
        o = (0, el.T)(i.asset),
        { countdownText: a, terms: d } = (0, er.A)(s),
        u = (0, es.C)(i.helpArticle, ""),
        c = [i.body, d].filter((e) => "" !== e).join(" ");
    return (0, l.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, l.jsx)(ei.A, {
                componentType: n,
                componentId: t,
                promotionId: s,
                dismissibleContent: $.M.GUILD_BOOST_TAB_BANNER,
            }),
            (0, l.jsx)("div", {
                className: g()(eo.X8, "theme-dark"),
                children: (0, l.jsx)(Y.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.WAI6xu),
                    onClick: r,
                    icon: ee.XSmallIcon,
                }),
            }),
            null != o && "" !== o && (0, l.jsx)("img", { src: o, className: eo.LY, alt: "" }),
            (0, l.jsxs)("div", {
                className: eo.FS,
                children: [
                    null != a &&
                        (0, l.jsxs)("div", {
                            className: eo.qW,
                            children: [
                                (0, l.jsx)(et.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: eo.y,
                                }),
                                (0, l.jsx)(I.E, { variant: "body-xs/semibold", color: "text-default", children: a }),
                            ],
                        }),
                    (0, l.jsx)(I.E, { variant: "body-md/semibold", color: "text-default", children: i.header }),
                    (0, l.jsxs)(I.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [
                            c,
                            null != u &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        "" !== c && " ",
                                        (0, l.jsx)(en.Anchor, { className: eo.nf, href: u.url, children: u.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ed = n(182859),
    eu = n(652215);
let ec = { page: eu.liQ.GUILD_POWERUPS_OVERVIEW, section: eu.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR, object: eu.ZSU.CARD };
function em(e) {
    let { slot: t, guildId: n } = e,
        { content: s, variant: i } = t;
    if (null == s) return null;
    switch (s.kind) {
        case "banner":
            return (0, l.jsx)(ea, {
                componentId: s.componentId,
                componentType: s.componentType,
                promotionId: s.promotionId,
                banner: s.banner,
                onDismiss: s.onDismiss,
            });
        case "video":
            return (0, l.jsx)(ed.A, {
                guildId: n,
                variant: i,
                analyticsLocation: ec,
                onDismiss: s.onDismiss ?? void 0,
            });
    }
}
var ep = n(568548),
    eg = n(573650),
    ef = n(149971),
    eh = n(210273),
    ex = n(998418),
    eA = n(722523),
    eI = n(294384),
    ev = n(813847),
    eE = n(224331);
function eb(e) {
    let { guildId: t, powerup: n, className: s } = e,
        i = (0, ex.Ay)(t, n),
        r = i.type !== P.b_.LEVEL_ACTIVATED,
        o = (0, eI.Ay)(t, n, "GuildPowerupCardBodyFooter"),
        a = (0, ev.e)(n, i, o);
    return (0, l.jsx)(_.$L, { status: a, cost: r ? n.cost : void 0, className: s });
}
function ej(e) {
    let { guildId: t, powerup: n, badge: s, className: i, onHover: r, children: o } = e,
        a = (0, ex.Ay)(t, n),
        d = a.type !== P.b_.INACTIVE,
        u = a.sourceEntitlement?.ends_at != null,
        c = (0, eI.Ay)(t, n, "GuildPowerupCard"),
        m = (0, eE.A)(t, n);
    return (0, l.jsx)(_.NI, {
        label: n.title,
        isActive: d,
        isWarning: u,
        badge: s,
        canRollback: c,
        onClick: m,
        onMouseOver: () => r?.(!0),
        onMouseLeave: () => r?.(!1),
        className: i,
        children: o,
    });
}
var ey = n(867060),
    eS = n(508155),
    e_ = n(695578);
function eN(e) {
    let t,
        { active: n, nextActive: s, position: i, index: r } = e,
        o = [ep.v, eg.w, ef.H][r] ?? ep.v;
    return (
        (t = n && !1 !== s ? P.z0.FULL : n && !1 === s ? P.z0.HALF : P.z0.NONE),
        (0, l.jsxs)("div", {
            className: e_.progressContainer,
            children: [
                (0, l.jsx)("div", { className: g()(e_.progress, e_[i], e_[t]) }),
                (0, l.jsx)("div", {
                    className: g()(e_.boostContainer, B.JD, { [e_.boostContainerActive]: n, [B.vu]: n }),
                    children: (0, l.jsx)(o, { alt: "", ariaHidden: !0, size: 24 }),
                }),
            ],
        })
    );
}
function ew(e) {
    let { isActive: t, index: n } = e,
        { textColor: i, iconColor: r } = w(t),
        o = s.useMemo(() => {
            let e = eS.t[n];
            if (null == e) return [];
            let t = e.tier === eu.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let s = (0, eh.X)(e.perkIcon);
                return (0, l.jsxs)(
                    "div",
                    {
                        className: e_.perkRow,
                        children: [
                            (0, l.jsx)(s, { color: r, size: "sm" }),
                            (0, l.jsx)(I.E, {
                                className: e_.perkText,
                                color: i,
                                variant: "body-sm/normal",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${n}-${t}`,
                );
            });
        }, [n, r, i]);
    return (0, l.jsxs)("div", {
        className: e_.perkRowContainer,
        children: [
            o,
            (0, l.jsx)("div", {
                className: e_.perkRow,
                children: (0, l.jsx)(I.E, {
                    color: i,
                    variant: "body-sm/normal",
                    children: k.intl.string(L.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eC(e) {
    let t,
        { guildId: n, index: i, powerup: r, nextPowerup: o } = e,
        a = (0, ex.Ay)(n, r),
        d = (0, ex.Ay)(n, o),
        u = a.type !== P.b_.INACTIVE,
        c = d.type !== P.b_.INACTIVE,
        m = a.type === P.b_.TIER_OVERRIDE_ACTIVATED,
        [p, g] = s.useState(void 0);
    ((0, ey.A)(p), (t = 0 === i ? P.At.START : null == o ? P.At.END : P.At.MIDDLE));
    let { textColor: f } = w(u);
    return (0, l.jsxs)(ej, {
        guildId: n,
        powerup: r,
        className: e_.card,
        children: [
            (0, l.jsx)(eN, { index: i, position: t, active: u, nextActive: null != o ? c : void 0 }),
            (0, l.jsx)(_.Ft, {
                title: r.title,
                textColor: f,
                footer: !m && (0, l.jsx)(eb, { className: e_.footer, guildId: n, powerup: r }),
                children: (0, l.jsx)(ew, { isActive: u, index: i }),
            }),
            !m && (0, l.jsx)(_.kd, { children: (0, l.jsx)(eA.Ay, { guildId: n, powerup: r, onError: g }) }),
        ],
    });
}
var eG = n(866665),
    eT = n(775602),
    eR = n(727419),
    ek = n(685073),
    eL = n(915667);
function eD(e, t) {
    let i = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([W.A], () => W.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, ek.Rg)(e);
        });
    return s.useMemo(() => {
        let s = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: s, allPowerups: i, hasServerTags: r } = e,
                              o = k.intl.string(L.default.KC9HRW),
                              a = k.intl.string(L.default.GJiSmP),
                              d = i?.[F.SL],
                              u = k.intl.string(L.default["/egwJA"]),
                              c = r ? void 0 : k.intl.string(L.default.W6Vwn3),
                              m = r ? void 0 : k.intl.string(L.default.lvk1Gc),
                              p = r ? k.intl.string(L.default["9CfkLO"]) : k.intl.string(k.t["+7XY31"]),
                              g = r ? "secondary" : "expressive",
                              f = s
                                  ? () => {
                                        (r
                                            ? eR.A.open(t, eu.BEX.TAG, eu.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != d && (0, eL.A)(t, d),
                                            (0, h.s7)());
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, h.mM)(
                                      async () => {
                                          let { default: i } = await Promise.all([n.e(991051), n.e(837712)]).then(
                                              n.bind(n, 789267),
                                          );
                                          return (n) =>
                                              (0, l.jsx)(i, {
                                                  guildId: t,
                                                  title: o,
                                                  description: k.intl.string(L.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      s && null != f && null != p
                                                          ? {
                                                                variant: g,
                                                                text: p,
                                                                icon: "expressive" === g ? x.BoostGemIcon : void 0,
                                                                onClick: f,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: i?.onModalClose },
                                  );
                              },
                              viewCta: u,
                              viewCtaTooltip: c,
                              image: {
                                  staticUrl:
                                      "https://cdn.discordapp.com/assets/content/8dd1f75ba9ef2e0587c9963de0964edc7577f98385e85372e9dc600d353dd3b1.png",
                                  animatedUrl:
                                      "https://cdn.discordapp.com/assets/content/54f74ffad2a1a6c57dd4284f05d14cdeffaf68b38d0543003a4f6a4ba74c9096.png",
                              },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: i, allPowerups: o, hasServerTags: a })
                    : void 0;
            null != e && (s[r] = e);
        }
        return s;
    }, [e, t, i, o, a]);
}
var eP = n(625361);
function eO(e) {
    let { guildId: t, group: n, powerups: i } = e,
        [o, a] = s.useState(!1),
        d = (0, r.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        u = eD([n], t)[n],
        c = !d && o ? u?.image?.animatedUrl : u?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: n, powerups: l } = e,
                s = (0, ex.jJ)(n, l),
                i = s.some((e) => e.type !== P.b_.INACTIVE);
            if (l.length <= 0) return null;
            let r = s.reduce(
                (e, t) => {
                    let { sourceEntitlement: n } = t,
                        l = n?.ends_at;
                    return null == l ? e : null == e || l < e ? l : e;
                },
                void 0,
            );
            null != r
                ? (t = { type: "expiring", expiringAt: r })
                : i && (t = { type: "active", statusText: k.intl.string(L.default.FFLkmx) });
            let o = s.reduce((e, t) => {
                    let { type: n, powerup: l } = t;
                    return n === P.b_.POWERUP_ACTIVATED ? e + l.cost : e;
                }, 0),
                a = s.reduce((e, t) => {
                    let { powerup: n } = t;
                    return e < (n?.cost ?? 0) ? e : (n?.cost ?? 0);
                }, s[0]?.powerup?.cost ?? 0),
                d = s.reduce((e, t) => {
                    let { powerup: n } = t;
                    return e + (n?.cost ?? 0);
                }, 0),
                u = i ? o : a;
            return {
                isActive: i,
                status: t,
                cost: u,
                costDecorator: !i && d > u ? "+" : void 0,
                expiringAt: r,
                activeCost: o,
                minCost: a,
                totalCost: d,
            };
        })({ guildId: t, powerups: i }),
        { textColor: p } = w(m?.isActive ?? !1);
    if (null == m || null == u) return null;
    let { status: g, cost: f, costDecorator: h } = m;
    return (0, l.jsxs)(_.NI, {
        label: u.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: u.badge,
        onClick: () => u.openModal(i),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, l.jsx)("img", { alt: "", src: c, className: eP.S }),
            (0, l.jsx)(_.Ft, {
                title: u.title,
                textColor: p,
                footer: (0, l.jsx)(_.$L, { status: g, cost: f, costDecorator: h }),
                children: (0, l.jsx)(I.E, {
                    className: eP.h,
                    color: p,
                    variant: "body-sm/normal",
                    children: u.description,
                }),
            }),
            (0, l.jsx)(_.kd, {
                children:
                    u?.viewCtaTooltip != null
                        ? (0, l.jsx)(eG.m, {
                              asContainer: !0,
                              text: u.viewCtaTooltip,
                              delay: 100,
                              children: (0, l.jsx)(S.$, { text: u.viewCta, fullWidth: !0 }),
                          })
                        : (0, l.jsx)(S.$, { text: u.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eU = n(403362),
    eB = n(639060),
    eV = n(49999),
    eM = n(425138);
function eW(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: eM.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, l.jsx)(I.E, {
                color: "text-overlay-light",
                variant: "body-md/semibold",
                children: k.intl.string(L.default.diMhWc),
            }),
            (0, l.jsx)(I.E, {
                color: "text-overlay-light",
                variant: "body-sm/normal",
                children: k.intl.string(L.default.pycxTr),
            }),
            (0, l.jsx)("div", {
                className: eM.VN,
                children: (0, l.jsx)(Y.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        t(eV.i.USER_DISMISS);
                    },
                    icon: ee.XSmallIcon,
                }),
            }),
        ],
    });
}
var eF = n(972213),
    e$ = n(695366),
    eK = n(168691);
function eX(e) {
    let { notificationConfig: t, markAsDismissed: n } = e;
    return (0, l.jsxs)("div", {
        className: eK.kL,
        children: [
            (0, l.jsx)("div", {
                className: eK.VN,
                children: (0, l.jsx)(Y.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        n(eV.i.USER_DISMISS);
                    },
                    icon: eF.XLargeIcon,
                }),
            }),
            (0, l.jsx)(e$.CircleErrorIcon, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eK.Kk }),
            (0, l.jsx)(I.E, { variant: "body-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, l.jsx)(I.E, { variant: "body-sm/normal", children: t.description }),
        ],
    });
}
var ez = n(859241),
    eH = n(864310),
    eJ = n(620019);
function eQ(e) {
    let { guildId: t, powerupNames: n, warnings: i } = e,
        {
            shouldShow: o,
            title: a,
            description: d,
        } = (function (e, t) {
            let { spent: n } = (0, eH.A)(e),
                l = (0, r.bG)([ez.A], () => ez.A.getAppliedGuildBoostsForGuild(e), [e]),
                i = n - s.useMemo(() => l?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [l]);
            return s.useMemo(
                () =>
                    i <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: k.intl.string(L.default.n5hQhc),
                              description: k.intl.formatToPlainString(L.default.iAaAiG, {
                                  boostCount: i,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: i,
                          },
                [i, t],
            );
        })(t, n);
    return o
        ? (0, l.jsxs)("div", {
              className: eJ.kL,
              children: [
                  (0, l.jsx)(e$.CircleErrorIcon, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eJ.Kk }),
                  (0, l.jsx)(I.E, { variant: "body-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, l.jsxs)(I.E, {
                      variant: "body-sm/normal",
                      children: [
                          d,
                          i?.map((e, t) =>
                              (0, l.jsx)(
                                  I.E,
                                  {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      className: eJ.$e,
                                      children: e,
                                  },
                                  `warning-${t}`,
                              ),
                          ),
                      ],
                  }),
              ],
          })
        : null;
}
var eZ = n(517352),
    eq = n(826673),
    eY = n(641436),
    e0 = n(412260);
function e1(e) {
    let t = (function () {
            let e = (0, eY.u)(eZ.oW.GUILD_BOOST_TAB_BANNER),
                [t, n] = (0, b.Cc)(null != e ? $.M.GUILD_BOOST_TAB_BANNER : null, e?.promotionId ?? "", void 0, !0),
                l = s.useCallback(() => {
                    n(eV.i.USER_DISMISS);
                }, [n]),
                { isDismissed: i } = (0, eq.u$)($.M.GUILD_BOOST_TAB_BANNER, e?.promotionId ?? ""),
                r = null != e && !i;
            if (null == e || t !== $.M.GUILD_BOOST_TAB_BANNER) return { isBannerEligible: r, shouldShow: !1 };
            let { surface: o, id: a, promotionId: d, componentType: u } = e;
            return {
                isBannerEligible: !0,
                shouldShow: !0,
                componentId: a,
                componentType: u,
                promotionId: d,
                banner: o,
                markAsDismissed: l,
            };
        })(),
        n = (0, r.bG)([e0.A], () => e0.A.isFetchingActivePromotions),
        l = "admin" !== e || t.isBannerEligible || n ? [] : [$.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [i, o] = (0, b.kn)(l),
        a = s.useCallback(() => {
            o(eV.i.USER_DISMISS);
        }, [o]),
        d = null;
    t.shouldShow
        ? (d = {
              kind: "banner",
              componentId: t.componentId,
              componentType: t.componentType,
              promotionId: t.promotionId,
              banner: t.banner,
              onDismiss: t.markAsDismissed,
          })
        : "member" !== e || t.isBannerEligible || n
          ? i === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD && (d = { kind: "video", onDismiss: a })
          : (d = { kind: "video", onDismiss: null });
    let u = n || t.isBannerEligible || d?.kind === "video";
    return { variant: e, content: d, isReserved: u };
}
var e9 = n(463080);
function e6(e) {
    let { text: t } = e;
    return (0, l.jsx)("div", {
        className: e9.ac,
        children: (0, l.jsx)(I.E, { variant: "body-sm/normal", children: t }),
    });
}
function e8(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(eu.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: k.intl.string(L.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        i = (function (e) {
            let t,
                n =
                    ((t = (0, r.bG)([W.A], () => W.A.getStateForGuild(e))),
                    s.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: n } = t;
                        return (0, T.k)(Object.values(n))
                            .map((t) => e[t.sku_id])
                            .filter(eU.Vq);
                    }, [t])),
                l = R(e),
                i = n.length > 0 || l.length > 0;
            if (!i) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = l.length > 0 ? k.intl.string(O.default["B3OfL/"]) : void 0,
                a = [...n.map((e) => e.title), ...(null != o ? [o] : [])],
                d = [];
            return (
                n.some((e) => e.skuId === F.FB) && d.push(k.intl.string(L.default.Sfr0Jw)),
                l.length > 0 && d.push(k.intl.string(O.default.wiungr)),
                { shouldShow: i, expiringPowerups: n, expiringPowerupNames: a, warnings: d }
            );
        })(t),
        o = (function (e) {
            let t = (0, eB.A)(e, "GuildPowerupNotificationContainer"),
                n = [];
            null != t && n.push(t.dismissibleContent);
            let [l, s] = (0, b.ww)(n, e);
            return { shouldShow: null != t && l === t.dismissibleContent, notificationConfig: t, markAsDismissed: s };
        })(t),
        a = e1("admin"),
        d = (function (e) {
            let t = [];
            e || t.push($.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [n, l] = (0, b.kn)(t);
            return { shouldShow: null != n && n === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: l };
        })(i.shouldShow || o.shouldShow || a.isReserved);
    return n.shouldShow || i.shouldShow || o.shouldShow || d.shouldShow || null != a.content
        ? (0, l.jsxs)("div", {
              className: e9.kL,
              children: [
                  (0, l.jsx)(I.E, {
                      tag: "div",
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: k.intl.string(L.default["3FRirU"]),
                  }),
                  n.shouldShow && (0, l.jsx)(e6, { text: n.text }),
                  i.shouldShow &&
                      (0, l.jsx)(eQ, { guildId: t, powerupNames: i.expiringPowerupNames, warnings: i.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, l.jsx)(eX, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  (0, l.jsx)(em, { slot: a, guildId: t }),
                  d.shouldShow && (0, l.jsx)(eW, { markAsDismissed: d.markAsDismissed }),
              ],
          })
        : null;
}
var e4 = n(652242);
function e5(e) {
    let { guildId: t, powerup: n, badge: i } = e,
        [r, o] = s.useState(void 0);
    (0, ey.A)(r);
    let [a, d] = s.useState(!1),
        { textColor: u } = w((0, ex.Ay)(t, n).type !== P.b_.INACTIVE);
    return (0, l.jsxs)(ej, {
        onHover: (e) => d(e),
        guildId: t,
        powerup: n,
        badge: i,
        children: [
            (0, l.jsx)(e4.l, { className: B.Sl, powerup: n, isHovering: a }),
            (0, l.jsx)(_.Ft, {
                title: n.title,
                textColor: u,
                footer: (0, l.jsx)(eb, { guildId: t, powerup: n }),
                children: (0, l.jsx)(I.E, {
                    className: B.h_,
                    color: u,
                    variant: "body-sm/normal",
                    children: n.description,
                }),
            }),
            (0, l.jsx)(_.kd, { children: (0, l.jsx)(eA.Ay, { guildId: t, powerup: n, onError: o }) }),
        ],
    });
}
var e3 = n(862482),
    e2 = n(944304),
    e7 = n(975571),
    te = n(380572);
function tt(e) {
    let { count: t, type: n } = e,
        s = (function (e, t) {
            switch (t) {
                case P.yG.AVAILABLE:
                    return k.intl.formatToPlainString(L.default.BdRXZA, { boostCount: e });
                case P.yG.SPENT:
                    return k.intl.formatToPlainString(L.default.xvgIVG, { boostCount: e });
                case P.yG.TOTAL:
                    return k.intl.string(L.default["/F7Z2y"]);
            }
        })(t, n);
    return (0, l.jsxs)("div", {
        className: te.k,
        role: "img",
        "aria-label": `${t}, ${s}`,
        children: [
            (0, l.jsxs)("div", {
                className: te.N,
                "aria-hidden": "true",
                children: [
                    (0, l.jsx)(x.BoostGemIcon, {
                        size: "sm",
                        color:
                            n !== P.yG.AVAILABLE
                                ? N.A.colors.TEXT_MUTED
                                : N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                    }),
                    (0, l.jsx)(A.D, {
                        color: n !== P.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "body-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, l.jsx)(I.E, { "aria-hidden": "true", color: "text-muted", variant: "body-sm/normal", children: s }),
        ],
    });
}
var tn = n(690118);
function tl(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: s, spent: i, total: o } = (0, eH.A)(t);
    if (null != n)
        return (0, l.jsxs)("div", {
            className: tn.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tn.N1,
                    children: [
                        (0, l.jsx)(I.E, {
                            tag: "div",
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: k.intl.string(L.default.hjvcLO),
                        }),
                        (0, l.jsx)(I.E, {
                            className: tn.C2,
                            variant: "body-sm/medium",
                            children: k.intl.format(L.default.fXE30d, {
                                helpDeskArticle: e7.A.getArticleURL(eu.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tn.hQ,
                    children: [
                        (0, l.jsx)(tt, { count: s, type: P.yG.AVAILABLE }),
                        (0, l.jsx)(tt, { count: i, type: P.yG.SPENT }),
                        (0, l.jsx)(tt, { count: o, type: P.yG.TOTAL }),
                    ],
                }),
                (0, l.jsx)(e2.A, {
                    className: tn.S6,
                    guild: n,
                    analyticsLocation: {
                        page: eu.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: eu.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: e3.XD.CUSTOM,
                    size: e3.lO.LARGE,
                    icon: (0, l.jsx)(x.BoostGemIcon, {
                        className: tn.Ng,
                        size: "sm",
                        color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                    }),
                }),
            ],
        });
}
var ts = n(97808),
    ti = n(778712),
    tr = n(463930),
    to = n(730134),
    ta = n(233824),
    td = n(191663),
    tu = n(854627),
    tc = n(696451),
    tm = n(317525),
    tp = n(287809),
    tg = n(562153),
    tf = n(253400),
    th = n(985827);
let tx = tf.Ay.getEnableHardwareAcceleration() ? ts.Js : to.A;
function tA(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        s = (0, r.bG)([tm.A], () => tm.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        i = (0, r.bG)([tp.default], () => tp.default.getCurrentUser()),
        o = i?.id,
        a = (0, r.bG)([tc.Ay], () => (null != o ? tc.Ay.getMember(t, o) : void 0), [o, t]),
        d = a?.premiumSince != null,
        u = (0, r.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: f,
        } = (0, tu.A)({ userId: i?.id, guildId: t, size: ti._3.SIZE_40, animateOnHover: !u });
    return null == n || null == a || null == i
        ? null
        : (0, l.jsxs)("div", {
              className: th.ft,
              children: [
                  (0, l.jsxs)("div", {
                      className: th.FS,
                      children: [
                          (0, l.jsx)(I.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              children: k.intl.string(d ? L.default.KSWK1U : L.default.XXXX5l),
                          }),
                          (0, l.jsx)(I.E, {
                              variant: "body-sm/normal",
                              children: k.intl.format(d ? L.default["7fWTg4"] : L.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, ta.K4)({
                                          guildId: t,
                                          location: {
                                              section: eu.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: eu.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != s &&
                      !d &&
                      (0, l.jsx)(td.V, {
                          avatar: (0, l.jsx)(tx, {
                              ...f,
                              user: i,
                              src: p,
                              avatarDecoration: m,
                              size: ti._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, l.jsx)(tr.g, {
                              variant: "body-md/semibold",
                              name: tg.Ay.getName(t, null, i),
                              colorString: s.colorString,
                              colorStrings: s.colorStrings,
                          }),
                          className: g()(th.Qs, th.cX),
                          message: k.intl.string(k.t["6OSasb"]),
                          decorations: (0, l.jsx)(x.BoostGemIcon, {
                              color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                              className: th.$J,
                          }),
                      }),
                  (0, l.jsx)(e2.A, {
                      guild: n,
                      className: th.Qs,
                      analyticsLocation: {
                          page: eu.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: eu.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: e3.XD.BRAND,
                      size: e3.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, l.jsx)(x.BoostGemIcon, { className: th.Ng, color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tI = n(559201),
    tv = n(949744),
    tE = n(811091),
    tb = n(492349),
    tj = n(776579),
    ty = n(5377),
    tS = n(967144),
    t_ = n(262001),
    tN = n(736541);
function tw(e) {
    let t,
        { boost: n, phase: s, sortKey: i } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: d,
        } = (function (e) {
            let t = new Date(tE.default.extractTimestamp(e.id)),
                {
                    username: n,
                    roleColor: l,
                    roleColorStrings: s,
                } = (0, r.cf)(
                    [tc.Ay],
                    () => {
                        let t = tc.Ay.getMember(e.guildId, e.userId);
                        return {
                            username:
                                tc.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? k.intl.string(k.t["30mdIx"]),
                            roleColor: t?.colorString ?? null,
                            roleColorStrings: t?.colorStrings ?? null,
                        };
                    },
                    [e],
                );
            return { timestamp: t, username: n, roleColor: l, roleColorStrings: s };
        })(n),
        u = (0, tS.gn)(n.guildId, n.userId, d ?? null),
        c = new Date(i),
        { Icon: m, color: p } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: x.BoostGemIcon, color: N.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tb.BoostGemSlashIcon, color: N.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tb.BoostGemSlashIcon, color: N.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(s);
    return (0, l.jsxs)("div", {
        className: t_.og,
        children: [
            (0, l.jsx)(m, { color: p, size: "sm" }),
            (0, l.jsxs)("span", {
                className: t_.x$,
                children: [
                    (0, l.jsx)(I.E, {
                        tag: "span",
                        variant: "body-md/medium",
                        lineClamp: 1,
                        className: t_.IP,
                        children: (0, l.jsx)(eG.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, l.jsx)(tr.g, {
                                variant: "body-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: u,
                            }),
                        }),
                    }),
                    (0, l.jsx)(I.E, {
                        tag: "span",
                        variant: "body-md/normal",
                        className: t_.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return k.intl.string(L.default.plwH8d);
                                case "expiring":
                                    return k.intl.formatToPlainString(L.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return k.intl.string(L.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, l.jsx)(tj.A, {
                timestamp: c,
                timestampFormat:
                    0 === (t = (0, ty.m_)(c, new Date()))
                        ? `[${k.intl.string(k.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${k.intl.string(k.t.ZdDLO0)}]`
                          : "L",
                className: g()(tN["body-xs/medium"], t_.vE),
            }),
        ],
    });
}
var tC = n(834205);
function tG(e) {
    let { guildId: t } = e,
        n = (function (e) {
            let t = (0, r.yK)([ez.A], () => ez.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [n] = s.useState(() => Date.now()),
                l = s.useMemo(
                    () =>
                        t
                            .map((e) => {
                                let t =
                                        e.ended || (null != e.endsAt && e.endsAt.getTime() <= n)
                                            ? { phase: "expired" }
                                            : null != e.endsAt && e.endsAt.getTime() - n <= 2592e5
                                              ? { phase: "expiring", endsAt: e.endsAt }
                                              : { phase: "gave" },
                                    l = (function (e, t) {
                                        switch (t.phase) {
                                            case "gave":
                                                return tE.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tE.default.extractTimestamp(e.id);
                                        }
                                    })(e, t);
                                return "expiring" === t.phase
                                    ? { boost: e, phase: "expiring", sortKey: l, endsAt: t.endsAt }
                                    : { boost: e, phase: t.phase, sortKey: l };
                            })
                            .sort((e, t) => t.sortKey - e.sortKey)
                            .slice(0, void 0),
                    [t, void 0, n],
                ),
                i = (0, r.yK)(
                    [tc.Ay],
                    () => {
                        let t = new Set();
                        return (
                            l.forEach((n) => {
                                let { boost: l } = n;
                                null == tc.Ay.getMember(e, l.userId) && t.add(l.userId);
                            }),
                            Array.from(t)
                        );
                    },
                    [e, l],
                );
            s.useEffect(() => {
                i.length > 0 && i.forEach((t) => tv.A.requestMember(e, t));
            }, [e, i]);
            let o = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = s.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                d = (0, r.bG)([ez.A], () => null != ez.A.getLastFetchedAtForGuild(e), [e]);
            return (
                s.useEffect(() => {
                    (o === a && d) || (0, tI.VU)(e, { includeEnded: !0 });
                }, [e, o, a, d]),
                l
            );
        })(t);
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(A.D, {
                      className: tC.w,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: k.intl.string(k.t.yM9Krm),
                  }),
                  (0, l.jsx)(f.Ip, {
                      className: tC.k,
                      fade: !0,
                      children: n.map((e) => (0, l.jsx)(tw, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tT = n(726724);
function tR(e) {
    let { guildId: t } = e,
        n = e1("member");
    return (0, l.jsxs)("div", {
        className: tT.CG,
        children: [(0, l.jsx)(em, { slot: n, guildId: t }), (0, l.jsx)(tA, { guildId: t })],
    });
}
function tk(e) {
    let { children: t, title: n } = e,
        i = s.useRef(null),
        r = s.useRef(null),
        [o, a] = s.useState({ left: !1, right: !1 });
    return (
        s.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let t = 0;
            function n() {
                let n = Math.abs(e.scrollLeft);
                i.current?.style.setProperty("--custom-level-scroll-offset", `${-e.scrollLeft}px`);
                let l = t > 1,
                    s = l && n > 1,
                    r = l && n < t - 1;
                a((e) => (e.left === s && e.right === r ? e : { left: s, right: r }));
            }
            function l() {
                ((t = e.scrollWidth - e.clientWidth),
                    i.current?.style.setProperty(
                        "--custom-level-scrollbar-height",
                        `${e.offsetHeight - e.clientHeight}px`,
                    ),
                    n());
            }
            let s = new ResizeObserver(l);
            return (
                s.observe(e),
                e.addEventListener("scroll", n, { passive: !0 }),
                l(),
                () => {
                    (s.disconnect(), e.removeEventListener("scroll", n));
                }
            );
        }, []),
        (0, l.jsxs)("div", {
            ref: i,
            className: g()(tT.SE, { [tT.j$]: o.left, [tT.QQ]: o.right }),
            children: [
                (0, l.jsx)(f.Ip, {
                    ref: r,
                    className: tT.dU,
                    orientation: "auto",
                    scrollbarGutter: !1,
                    fade: !0,
                    disableFocusRingScope: !0,
                    role: "region",
                    "aria-label": n,
                    tabIndex: 0,
                    children: t,
                }),
                (0, l.jsx)("div", {
                    className: tT.YP,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", {
                        className: tT.pw,
                        children: s.Children.map(t, () => (0, l.jsx)("div", { className: tT.GX })),
                    }),
                }),
            ],
        })
    );
}
function tL(e) {
    let t,
        i,
        o,
        a,
        d,
        p,
        y,
        S,
        _,
        { guildId: N, powerupListingId: w } = e;
    ((t = (0, j.C$)(N, "useLoadGuildPowerups")),
        s.useEffect(() => {
            t && (0, H.z9)(N);
        }, [N, t]),
        s.useEffect(() => {
            ((0, J.AK)(N), (0, J.Xd)(N));
        }, [N]));
    let C = (0, j.C$)(N, "GuildPowerupsOverview");
    (0, z.Pq)(N);
    let G = (0, r.bG)([W.A], () => W.A.getStateForGuild(N)),
        T = (0, m.A)(N),
        R = s.useRef(!1),
        { shouldShow: O, modalConfig: U } =
            ((i = (0, r.bG)([c.A], () => c.A.getGuild(N))),
            (o = (0, m.A)(N) ?? !1),
            (a = (0, r.bG)([W.A], () => W.A.getStateForGuild(N))),
            (d = a?.allPowerups?.[F.d0]),
            (p = (0, X.E)(N, "GuildPowerupsOverview")),
            (y = o && p && null != i),
            (S = s.useMemo(
                () =>
                    y
                        ? (function (e) {
                              let t = e?.storeRemovalDate;
                              if (null == e || null == t) return null;
                              let n = (0, K.A)(t);
                              return {
                                  dismissibleContent: $.M.GUILD_THEME_POWERUP_ROLLBACK_MODAL,
                                  header: `${e.title} ${k.intl.formatToPlainString(L.default["6e2ry1"], { dateString: n })}`,
                                  bodies: [
                                      k.intl.formatToPlainString(L.default.jd8fki, {
                                          startDate: n,
                                          endDate: n,
                                          perkName: e.title,
                                          boostCount: e.cost,
                                      }),
                                  ],
                                  hasCancelButton: !1,
                              };
                          })(d)
                        : null,
                [y, d],
            )),
            { shouldShow: y, modalConfig: S }),
        B = (0, v.A)(),
        Y = null == w && !B && null != U,
        ee = [];
    O && Y && ee.push(U.dismissibleContent);
    let [et, en] = (0, b.kn)(ee),
        el =
            ((_ = (0, r.bG)([W.A], () => W.A.getStateForGuild(N))),
            s.useMemo(
                () =>
                    q.reduce((e, t) => {
                        let n = _?.powerupCatalog[t];
                        if (null == n) return e;
                        let l = (function (e, t, n) {
                            let l = [],
                                s = t.reduce((e, t) => {
                                    if (t.type !== P.o9.PERK) return e;
                                    let n = Z[t.skuId];
                                    return (null == n || ((e[n] ??= []), e[n].push(t)), e);
                                }, {});
                            for (let e of t) {
                                if (e.type === P.o9.LEVEL) {
                                    l.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = Z[e.skuId];
                                if (null != t) {
                                    let e = s[t];
                                    if (void 0 !== e) {
                                        let n = Q[t];
                                        (e.sort((e, t) => n.indexOf(e.skuId) - n.indexOf(t.skuId)),
                                            l.push({ type: "multiPerk", group: t, powerups: e }),
                                            (s[t] = void 0));
                                    }
                                    continue;
                                }
                                l.push({ type: "singlePerk", powerup: e, badge: P.ys[e.skuId] });
                            }
                            return (
                                n && e === P.o9.PERK && l.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === F.SL),
                                        n = e.findIndex(
                                            (e) =>
                                                "multiPerk" === e.type &&
                                                ("guildTagsBadgePacks" === e.group || (e.group, !1)),
                                        );
                                    if (-1 !== t && -1 !== n && n !== t + 1) {
                                        let t = [...e],
                                            [l] = t.splice(n, 1),
                                            s = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === F.SL);
                                        return (t.splice(s + 1, 0, l), t);
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === F.d0);
                                        if (t <= 0) return e;
                                        let n = [...e],
                                            [l] = n.splice(t, 1);
                                        return (n.unshift(l), n);
                                    })(l),
                                )
                            );
                        })(t, n, C);
                        return (e.push({ type: t, listings: l }), e);
                    }, []),
                [_?.powerupCatalog, C],
            )),
        es = eD(
            el
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            N,
        );
    return (s.useEffect(() => {
        if (null != w && !R.current)
            for (let e of el)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === w) {
                        ((0, eL.A)(N, t.powerup), (R.current = !0));
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === w || t.powerups.some((e) => e.skuId === w))) {
                        R.current = !0;
                        let e = es[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(P.G0);
                                let t = e.pathname + e.search + e.hash;
                                ((0, u.bG)(t), (R.current = !1));
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && "0" === w) {
                        ((0, D.A)({ guildId: N, analyticsLocation: E.A.GUILD_POWERUPS_OVERVIEW }), (R.current = !0));
                        return;
                    }
                }
    }, [N, w, el, es]),
    s.useEffect(() => {
        if (null != et && null != U) {
            let e = {
                onCloseCallback: () => {
                    en(eV.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${et}`,
            };
            (0, h.mM)(async () => {
                let { default: e } = await Promise.all([n.e(239592), n.e(586618)]).then(n.bind(n, 442241));
                return (t) => (0, l.jsx)(e, { modalConfig: U, markAsDismissed: en, ...t });
            }, e);
        }
    }, [N, et, en, U]),
    G?.powerupCatalog == null)
        ? null
        : (0, l.jsxs)("div", {
              className: tT.kL,
              children: [
                  (0, l.jsxs)(M.A, {
                      className: tT.KE,
                      hideSearch: !0,
                      toolbar: (0, l.jsx)("div", {}),
                      children: [
                          (0, l.jsx)(M.A.ChannelIcon, { icon: x.BoostGemIcon, "aria-hidden": !0 }),
                          (0, l.jsx)(M.A.Title, { children: k.intl.string(L.default.yv3DJJ) }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: tT.hQ,
                      children: [
                          (0, l.jsx)(f.Ip, {
                              className: tT.DO,
                              fade: !0,
                              children: el.map((e) => {
                                  let { type: t, listings: n } = e,
                                      { title: s, description: i } = (function (e) {
                                          switch (e) {
                                              case P.o9.LEVEL:
                                                  return {
                                                      title: k.intl.string(L.default["TXY/b0"]),
                                                      description: k.intl.string(L.default.aJv4PB),
                                                  };
                                              case P.o9.PERK:
                                                  return {
                                                      title: k.intl.string(L.default.TV3Vm8),
                                                      description: k.intl.string(L.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = n.map((e, t) => {
                                          switch (e.type) {
                                              case "singleLevel":
                                                  return (0, l.jsx)(
                                                      "div",
                                                      {
                                                          className: tT.lQ,
                                                          role: "group",
                                                          "aria-label": e.powerup.title,
                                                          children: (0, l.jsx)(eC, {
                                                              guildId: N,
                                                              index: t,
                                                              powerup: e.powerup,
                                                              nextPowerup: n[t + 1]?.powerup,
                                                          }),
                                                      },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "singlePerk":
                                                  return (0, l.jsx)(
                                                      e5,
                                                      { guildId: N, powerup: e.powerup, badge: e.badge },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "multiPerk":
                                                  return (0, l.jsx)(
                                                      eO,
                                                      { guildId: N, group: e.group, powerups: e.powerups },
                                                      `powerup-group-${e.group}`,
                                                  );
                                              case "gameServer":
                                                  return (0, l.jsx)(V, { guildId: N }, "powerup-game-server");
                                          }
                                      });
                                  return (0, l.jsxs)(
                                      "div",
                                      {
                                          className: tT.lt,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tT.kn,
                                                  children: [
                                                      (0, l.jsx)(A.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: s,
                                                      }),
                                                      (0, l.jsx)(I.E, { variant: "body-sm/normal", children: i }),
                                                  ],
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: g()(tT.qJ, tT.kn),
                                                  children:
                                                      t === P.o9.LEVEL ? (0, l.jsx)(tk, { title: s, children: r }) : r,
                                              }),
                                          ],
                                      },
                                      `section-${t}`,
                                  );
                              }),
                          }),
                          (0, l.jsxs)("div", {
                              className: tT.so,
                              children: [
                                  T
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(tl, { guildId: N }), (0, l.jsx)(e8, { guildId: N })],
                                        })
                                      : (0, l.jsx)(tR, { guildId: N }),
                                  (0, l.jsx)(tG, { guildId: N }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tD(e) {
    let { guildId: t, powerupListingId: n } = e,
        s = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, r.bG)([d.A], () => d.A.hasLoadedExperiments),
        g = (0, m.A)(t),
        f = (0, u.PR)(),
        h = !p || null == g || null == s,
        x = (0, o.Ay)(null != f ? f : []);
    return ((0, a.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: x.analyticsLocations },
        },
        { disableTrack: h },
    ),
    h)
        ? null
        : (0, l.jsx)(tL, { guildId: t, powerupListingId: n });
}
