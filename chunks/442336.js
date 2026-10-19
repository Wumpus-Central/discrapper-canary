(n.r(t), n.d(t, { default: () => tP }));
var l = n(477900),
    i = n(582128),
    s = n(562708),
    r = n(17928),
    o = n(688810),
    a = n(139286),
    u = n(736056),
    d = n(976860),
    c = n(71393),
    m = n(363487);
(n(321073), n(323874), n(14289), n(35956));
var p = n(503698),
    x = n.n(p),
    g = n(192308),
    f = n(104510),
    A = n(364522),
    h = n(297264),
    I = n(834730),
    E = n(942857),
    v = n(793574),
    j = n(37537),
    b = n(131607),
    _ = n(831617),
    S = n(289704),
    w = n(821609),
    y = n(612400),
    N = n(661531);
function C(e) {
    return e
        ? { textColor: "text-default", iconColor: N.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: N.A.colors.TEXT_MUTED };
}
var G = n(475669),
    T = n(948134),
    k = n(904629);
function P(e) {
    let t = (0, r.bG)([G.A], () => G.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, k.k)(e);
    }, [t?.entitlements]);
}
var R = n(105292),
    L = n(356863),
    D = n(144977),
    O = n(628049),
    U = n(568065),
    B = n(344045),
    V = n(929729),
    M = n(517826);
function W(e) {
    let t,
        n,
        { guildId: s } = e,
        o = i.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, r.cf)([G.A], () => ({
            state: G.A.getStateForGuild(s),
            lowestGameServerCost: G.A.getLowestGameCostForGuild(s),
        })),
        d =
            ((t = (0, r.bG)([G.A], () => G.A.getStateForGuild(s)?.entitlements, [s])),
            (n = P(s)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return n.length > 0
                        ? { type: "expiring", expiringAt: n[0].ends_at }
                        : { type: "active", statusText: R.intl.string(L.default.FFLkmx) };
            }, [n, t])),
        { gameName: c, gameName2: m } = (0, T.A)(),
        { textColor: p } = C(d?.type === "active");
    return null == a
        ? null
        : (0, l.jsxs)(y.NI, {
              label: R.intl.string(B.default["B3OfL/"]),
              badge: U.ys[O.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: s, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, l.jsx)("div", {
                      className: x()(V.ZS, M.Sl),
                      children: (0, l.jsx)(S.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: V.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, l.jsx)(y.Ft, {
                      title: R.intl.string(B.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, l.jsx)(y.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, l.jsx)(I.E, {
                          className: M.h_,
                          color: p,
                          variant: "text-sm/medium",
                          children: R.intl.format(B.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, l.jsx)(y.kd, {
                      children: (0, l.jsx)(w.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? R.intl.string(B.default.PuvU5b)
                                  : R.intl.string(B.default.b62EHM),
                          onClick: (e) => {
                              (e.stopPropagation(),
                                  (0, D.A)({ guildId: s, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }));
                          },
                      }),
                  }),
              ],
          });
}
var F = n(742589),
    K = n(645619),
    $ = n(512750),
    z = n(554146),
    X = n(939981),
    J = n(456124),
    H = n(914732),
    Q = n(498480),
    Z = n(868652);
n(667532);
let q = { guildTagsBadgePacks: [$.tv, $.OJ, $.Ht, $.jF] },
    Y = Object.entries(q).reduce((e, t) => {
        let [n, l] = t;
        for (let t of l) e[t] = n;
        return e;
    }, {}),
    ee = [U.o9.LEVEL, U.o9.PERK];
var et = n(877624),
    en = n(408278),
    el = n(789645),
    ei = n(406810),
    es = n(28863),
    er = n(807098),
    eo = n(637706),
    ea = n(788883),
    eu = n(7667),
    ed = n(705982);
function ec(e) {
    let { componentId: t, promotionId: n, banner: i, onDismiss: s } = e,
        r = (0, er.T)(i.asset),
        { countdownText: o, terms: a } = (0, eu.A)(n),
        u = (0, eo.C)(i.helpArticle, ""),
        d = [i.body, a].filter((e) => "" !== e).join(" ");
    return (0, l.jsxs)("div", {
        className: ed.kL,
        children: [
            (0, l.jsx)(ea.A, {
                componentType: et.C.GUILD_BOOST_TAB_BANNER,
                componentId: t,
                promotionId: n,
                dismissibleContent: z.M.GUILD_BOOST_TAB_BANNER,
            }),
            (0, l.jsx)("div", {
                className: x()(ed.X8, "theme-dark"),
                children: (0, l.jsx)(en.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": R.intl.string(R.t.WAI6xu),
                    onClick: s,
                    icon: el.P,
                }),
            }),
            null != r && "" !== r && (0, l.jsx)("img", { src: r, className: ed.LY, alt: "" }),
            (0, l.jsxs)("div", {
                className: ed.FS,
                children: [
                    null != o &&
                        (0, l.jsxs)("div", {
                            className: ed.qW,
                            children: [
                                (0, l.jsx)(ei.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: ed.y,
                                }),
                                (0, l.jsx)(I.E, { variant: "text-xs/semibold", color: "text-default", children: o }),
                            ],
                        }),
                    (0, l.jsx)(I.E, { variant: "text-md/semibold", color: "text-default", children: i.header }),
                    (0, l.jsxs)(I.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [
                            d,
                            null != u &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        "" !== d && " ",
                                        (0, l.jsx)(es.Anchor, { className: ed.nf, href: u.url, children: u.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var em = n(182859),
    ep = n(652215);
let ex = { page: ep.liQ.GUILD_POWERUPS_OVERVIEW, section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR, object: ep.ZSU.CARD };
function eg(e) {
    let { slot: t, guildId: n } = e,
        { content: i, variant: s } = t;
    if (null == i) return null;
    switch (i.kind) {
        case "banner":
            return (0, l.jsx)(ec, {
                componentId: i.componentId,
                promotionId: i.promotionId,
                banner: i.banner,
                onDismiss: i.onDismiss,
            });
        case "video":
            return (0, l.jsx)(em.A, {
                guildId: n,
                variant: s,
                analyticsLocation: ex,
                onDismiss: i.onDismiss ?? void 0,
            });
    }
}
var ef = n(210273),
    eA = n(998418),
    eh = n(722523),
    eI = n(294384),
    eE = n(813847),
    ev = n(224331);
function ej(e) {
    let { guildId: t, powerup: n, className: i } = e,
        s = (0, eA.Ay)(t, n),
        r = s.type !== U.b_.LEVEL_ACTIVATED,
        o = (0, eI.Ay)(t, n, "GuildPowerupCardBodyFooter"),
        a = (0, eE.e)(n, s, o);
    return (0, l.jsx)(y.$L, { status: a, cost: r ? n.cost : void 0, className: i });
}
function eb(e) {
    let { guildId: t, powerup: n, badge: i, className: s, onHover: r, children: o } = e,
        a = (0, eA.Ay)(t, n),
        u = a.type !== U.b_.INACTIVE,
        d = a.sourceEntitlement?.ends_at != null,
        c = (0, eI.Ay)(t, n, "GuildPowerupCard"),
        m = (0, ev.A)(t, n);
    return (0, l.jsx)(y.NI, {
        label: n.title,
        isActive: u,
        isWarning: d,
        badge: i,
        canRollback: c,
        onClick: m,
        onMouseOver: () => r?.(!0),
        onMouseLeave: () => r?.(!1),
        className: s,
        children: o,
    });
}
var e_ = n(867060),
    eS = n(508155),
    ew = n(695578);
function ey(e) {
    let t,
        { active: n, nextActive: i, position: s } = e;
    return (
        (t = n && !1 !== i ? U.z0.FULL : n && !1 === i ? U.z0.HALF : U.z0.NONE),
        (0, l.jsxs)("div", {
            className: ew.progressContainer,
            children: [
                (0, l.jsx)("div", { className: x()(ew.progress, ew[s], ew[t]) }),
                (0, l.jsx)("div", {
                    className: x()(ew.boostContainer, M.JD, { [ew.boostContainerActive]: n, [M.vu]: n }),
                    children: (0, l.jsx)(f._, { size: "sm", color: N.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function eN(e) {
    let { isActive: t, index: n } = e,
        { textColor: s, iconColor: r } = C(t),
        o = (0, j.c)("GuildPowerupLevelBody"),
        a = i.useMemo(() => {
            let e = eS.t[n];
            if (null == e) return [];
            let t = e.tier === ep.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, ef.X)(e.perkIcon);
                return (0, l.jsxs)(
                    "div",
                    {
                        className: ew.perkRow,
                        children: [
                            (0, l.jsx)(i, { color: r, size: "sm" }),
                            (0, l.jsx)(I.E, {
                                className: ew.perkText,
                                color: s,
                                variant: o ? "text-sm/normal" : "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${n}-${t}`,
                );
            });
        }, [n, r, o, s]);
    return (0, l.jsxs)("div", {
        className: ew.perkRowContainer,
        children: [
            a,
            (0, l.jsx)("div", {
                className: ew.perkRow,
                children: (0, l.jsx)(I.E, {
                    color: s,
                    variant: o ? "text-sm/normal" : "text-sm/medium",
                    children: R.intl.string(L.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eC(e) {
    let t,
        { guildId: n, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, eA.Ay)(n, r),
        u = (0, eA.Ay)(n, o),
        d = a.type !== U.b_.INACTIVE,
        c = u.type !== U.b_.INACTIVE,
        m = a.type === U.b_.TIER_OVERRIDE_ACTIVATED,
        [p, x] = i.useState(void 0);
    ((0, e_.A)(p), (t = 0 === s ? U.At.START : null == o ? U.At.END : U.At.MIDDLE));
    let { textColor: g } = C(d);
    return (0, l.jsxs)(eb, {
        guildId: n,
        powerup: r,
        className: ew.card,
        children: [
            (0, l.jsx)(ey, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, l.jsx)(y.Ft, {
                title: r.title,
                textColor: g,
                footer: !m && (0, l.jsx)(ej, { className: ew.footer, guildId: n, powerup: r }),
                children: (0, l.jsx)(eN, { isActive: d, index: s }),
            }),
            !m && (0, l.jsx)(y.kd, { children: (0, l.jsx)(eh.Ay, { guildId: n, powerup: r, onError: x }) }),
        ],
    });
}
var eG = n(866665),
    eT = n(775602),
    ek = n(468689),
    eP = n(685073),
    eR = n(915667);
function eL(e, t) {
    let s = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([K.A], () => K.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, eP.Rg)(e);
        });
    return i.useMemo(() => {
        let i = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, hasServerTags: r } = e,
                              o = R.intl.string(L.default.KC9HRW),
                              a = R.intl.string(L.default.GJiSmP),
                              u = s?.[$.SL],
                              d = R.intl.string(L.default["/egwJA"]),
                              c = r ? void 0 : R.intl.string(L.default.W6Vwn3),
                              m = r ? void 0 : R.intl.string(L.default.lvk1Gc),
                              p = r ? R.intl.string(L.default["9CfkLO"]) : R.intl.string(R.t["+7XY31"]),
                              x = r ? "secondary" : "expressive",
                              A = i
                                  ? () => {
                                        (r
                                            ? ek.A.open(t, ep.BEX.TAG, ep.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, eR.A)(t, u),
                                            (0, g.closeAllModals)());
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, g.openModalLazy)(
                                      async () => {
                                          let { default: s } = await Promise.all([n.e("991051"), n.e("875295")]).then(
                                              n.bind(n, 289634),
                                          );
                                          return (n) =>
                                              (0, l.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: R.intl.string(L.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      i && null != A && null != p
                                                          ? {
                                                                variant: x,
                                                                text: p,
                                                                icon: "expressive" === x ? f._ : void 0,
                                                                onClick: A,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: s?.onModalClose },
                                  );
                              },
                              viewCta: d,
                              viewCtaTooltip: c,
                              image: {
                                  staticUrl:
                                      "https://cdn.discordapp.com/assets/content/8dd1f75ba9ef2e0587c9963de0964edc7577f98385e85372e9dc600d353dd3b1.png",
                                  animatedUrl:
                                      "https://cdn.discordapp.com/assets/content/54f74ffad2a1a6c57dd4284f05d14cdeffaf68b38d0543003a4f6a4ba74c9096.png",
                              },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: s, allPowerups: o, hasServerTags: a })
                    : void 0;
            null != e && (i[r] = e);
        }
        return i;
    }, [e, t, s, o, a]);
}
var eD = n(625361);
function eO(e) {
    let { guildId: t, group: n, powerups: s } = e,
        [o, a] = i.useState(!1),
        u = (0, r.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        d = eL([n], t)[n],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: n, powerups: l } = e,
                i = (0, eA.jJ)(n, l),
                s = i.some((e) => e.type !== U.b_.INACTIVE);
            if (l.length <= 0) return null;
            let r = i.reduce(
                (e, t) => {
                    let { sourceEntitlement: n } = t,
                        l = n?.ends_at;
                    return null == l ? e : null == e || l < e ? l : e;
                },
                void 0,
            );
            null != r
                ? (t = { type: "expiring", expiringAt: r })
                : s && (t = { type: "active", statusText: R.intl.string(L.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: n, powerup: l } = t;
                    return n === U.b_.POWERUP_ACTIVATED ? e + l.cost : e;
                }, 0),
                a = i.reduce((e, t) => {
                    let { powerup: n } = t;
                    return e < (n?.cost ?? 0) ? e : (n?.cost ?? 0);
                }, i[0]?.powerup?.cost ?? 0),
                u = i.reduce((e, t) => {
                    let { powerup: n } = t;
                    return e + (n?.cost ?? 0);
                }, 0),
                d = s ? o : a;
            return {
                isActive: s,
                status: t,
                cost: d,
                costDecorator: !s && u > d ? "+" : void 0,
                expiringAt: r,
                activeCost: o,
                minCost: a,
                totalCost: u,
            };
        })({ guildId: t, powerups: s }),
        { textColor: p } = C(m?.isActive ?? !1),
        x = (0, j.c)("GuildPowerupMultiPerkCard");
    if (null == m || null == d) return null;
    let { status: g, cost: f, costDecorator: A } = m;
    return (0, l.jsxs)(y.NI, {
        label: d.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(s),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, l.jsx)("img", { alt: "", src: c, className: eD.S }),
            (0, l.jsx)(y.Ft, {
                title: d.title,
                textColor: p,
                footer: (0, l.jsx)(y.$L, { status: g, cost: f, costDecorator: A }),
                children: (0, l.jsx)(I.E, {
                    className: eD.h,
                    color: p,
                    variant: x ? "text-sm/normal" : "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, l.jsx)(y.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, l.jsx)(eG.m, {
                              asContainer: !0,
                              text: d.viewCtaTooltip,
                              delay: 100,
                              children: (0, l.jsx)(w.$, { text: d.viewCta, fullWidth: !0 }),
                          })
                        : (0, l.jsx)(w.$, { text: d.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eU = n(403362),
    eB = n(639060),
    eV = n(49999),
    eM = n(425138);
function eW(e) {
    let { markAsDismissed: t } = e,
        n = (0, j.c)("GuildPowerupInfoCard");
    return (0, l.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: eM.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, l.jsx)(I.E, {
                color: "text-overlay-light",
                variant: "text-md/semibold",
                children: R.intl.string(L.default.diMhWc),
            }),
            (0, l.jsx)(I.E, {
                color: "text-overlay-light",
                variant: n ? "text-sm/normal" : "text-sm/medium",
                children: R.intl.string(L.default.pycxTr),
            }),
            (0, l.jsx)("div", {
                className: eM.VN,
                children: (0, l.jsx)(en.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": R.intl.string(R.t.cpT0Cq),
                    onClick: () => {
                        t(eV.i.USER_DISMISS);
                    },
                    icon: el.P,
                }),
            }),
        ],
    });
}
var eF = n(972213),
    eK = n(695366),
    e$ = n(168691);
function ez(e) {
    let { notificationConfig: t, markAsDismissed: n } = e,
        i = (0, j.c)("GuildPowerupRollbackNotification");
    return (0, l.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, l.jsx)("div", {
                className: e$.VN,
                children: (0, l.jsx)(en.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": R.intl.string(R.t.cpT0Cq),
                    onClick: () => {
                        n(eV.i.USER_DISMISS);
                    },
                    icon: eF.XLargeIcon,
                }),
            }),
            (0, l.jsx)(eK.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: e$.Kk }),
            (0, l.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, l.jsx)(I.E, { variant: i ? "text-sm/normal" : "text-sm/medium", children: t.description }),
        ],
    });
}
var eX = n(859241),
    eJ = n(864310),
    eH = n(620019);
function eQ(e) {
    let { guildId: t, powerupNames: n, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: n } = (0, eJ.A)(e),
                l = (0, r.bG)([eX.A], () => eX.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = n - i.useMemo(() => l?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [l]);
            return i.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: R.intl.string(L.default.n5hQhc),
                              description: R.intl.formatToPlainString(L.default.iAaAiG, {
                                  boostCount: s,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: s,
                          },
                [s, t],
            );
        })(t, n),
        d = (0, j.c)("GuildPowerupsWarning");
    return o
        ? (0, l.jsxs)("div", {
              className: eH.kL,
              children: [
                  (0, l.jsx)(eK.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eH.Kk }),
                  (0, l.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, l.jsxs)(I.E, {
                      variant: d ? "text-sm/normal" : "text-sm/medium",
                      children: [
                          u,
                          s?.map((e, t) =>
                              (0, l.jsx)(
                                  I.E,
                                  {
                                      variant: d ? "text-sm/normal" : "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: eH.$e,
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
var eZ = n(826673),
    eq = n(549996),
    eY = n(412260);
function e0(e) {
    let t = (function () {
            let e = (0, eq.c)(et.C.GUILD_BOOST_TAB_BANNER),
                t =
                    null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind
                        ? e.properties.properties.guildBoostTabBanner
                        : null,
                [n, l] = (0, b.Cc)(null != t ? z.M.GUILD_BOOST_TAB_BANNER : null, e?.promotionId ?? "", void 0, !0),
                s = i.useCallback(() => {
                    l(eV.i.USER_DISMISS);
                }, [l]),
                { isDismissed: r } = (0, eZ.u$)(z.M.GUILD_BOOST_TAB_BANNER, e?.promotionId ?? "");
            return null == e || null == t || n !== z.M.GUILD_BOOST_TAB_BANNER
                ? { isBannerEligible: null != t && !r, shouldShow: !1 }
                : {
                      isBannerEligible: !0,
                      shouldShow: !0,
                      componentId: e.id,
                      promotionId: e.promotionId,
                      banner: t,
                      markAsDismissed: s,
                  };
        })(),
        n = (0, r.bG)([eY.A], () => eY.A.isFetchingActivePromotions),
        l = "admin" !== e || t.isBannerEligible || n ? [] : [z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [s, o] = (0, b.kn)(l),
        a = i.useCallback(() => {
            o(eV.i.USER_DISMISS);
        }, [o]),
        u = null;
    t.shouldShow
        ? (u = {
              kind: "banner",
              componentId: t.componentId,
              promotionId: t.promotionId,
              banner: t.banner,
              onDismiss: t.markAsDismissed,
          })
        : "member" !== e || t.isBannerEligible || n
          ? s === z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD && (u = { kind: "video", onDismiss: a })
          : (u = { kind: "video", onDismiss: null });
    let d = n || t.isBannerEligible || u?.kind === "video";
    return { variant: e, content: u, isReserved: d };
}
var e1 = n(463080);
function e6(e) {
    let { text: t } = e,
        n = (0, j.c)("Tier3OverrideNotice");
    return (0, l.jsx)("div", {
        className: e1.ac,
        children: (0, l.jsx)(I.E, { variant: n ? "text-sm/normal" : "text-sm/medium", children: t }),
    });
}
function e8(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(ep.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: R.intl.string(L.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                n =
                    ((t = (0, r.bG)([K.A], () => K.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: n } = t;
                        return (0, k.k)(Object.values(n))
                            .map((t) => e[t.sku_id])
                            .filter(eU.Vq);
                    }, [t])),
                l = P(e),
                s = n.length > 0 || l.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = l.length > 0 ? R.intl.string(B.default["B3OfL/"]) : void 0,
                a = [...n.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                n.some((e) => e.skuId === $.FB) && u.push(R.intl.string(L.default.Sfr0Jw)),
                l.length > 0 && u.push(R.intl.string(B.default.wiungr)),
                { shouldShow: s, expiringPowerups: n, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = (function (e) {
            let t = (0, eB.A)(e, "GuildPowerupNotificationContainer"),
                n = [];
            null != t && n.push(t.dismissibleContent);
            let [l, i] = (0, b.ww)(n, e);
            return { shouldShow: null != t && l === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = e0("admin"),
        u = (function (e) {
            let t = [];
            e || t.push(z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [n, l] = (0, b.kn)(t);
            return { shouldShow: null != n && n === z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: l };
        })(s.shouldShow || o.shouldShow || a.isReserved),
        d = (0, j.c)("GuildPowerupNotificationContainer");
    return n.shouldShow || s.shouldShow || o.shouldShow || u.shouldShow || null != a.content
        ? (0, l.jsxs)("div", {
              className: e1.kL,
              children: [
                  (0, l.jsx)(I.E, {
                      variant: d ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: d ? "text-strong" : "text-subtle",
                      children: R.intl.string(L.default["3FRirU"]),
                  }),
                  n.shouldShow && (0, l.jsx)(e6, { text: n.text }),
                  s.shouldShow &&
                      (0, l.jsx)(eQ, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, l.jsx)(ez, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  (0, l.jsx)(eg, { slot: a, guildId: t }),
                  u.shouldShow && (0, l.jsx)(eW, { markAsDismissed: u.markAsDismissed }),
              ],
          })
        : null;
}
var e9 = n(72377);
function e2(e) {
    let { guildId: t, powerup: n, badge: s } = e,
        [r, o] = i.useState(void 0);
    (0, e_.A)(r);
    let [a, u] = i.useState(!1),
        { textColor: d } = C((0, eA.Ay)(t, n).type !== U.b_.INACTIVE),
        c = (0, j.c)("GuildPowerupPerkCard");
    return (0, l.jsxs)(eb, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: n,
        badge: s,
        children: [
            (0, l.jsx)(e9.l, { className: M.Sl, powerup: n, isHovering: a }),
            (0, l.jsx)(y.Ft, {
                title: n.title,
                textColor: d,
                footer: (0, l.jsx)(ej, { guildId: t, powerup: n }),
                children: (0, l.jsx)(I.E, {
                    className: M.h_,
                    color: d,
                    variant: c ? "text-sm/normal" : "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, l.jsx)(y.kd, { children: (0, l.jsx)(eh.Ay, { guildId: t, powerup: n, onError: o }) }),
        ],
    });
}
var e3 = n(862482),
    e5 = n(944304),
    e4 = n(975571),
    e7 = n(380572);
function te(e) {
    let { count: t, type: n } = e,
        i = (0, j.c)("GuildPowerupsBoostInfo"),
        s = (function (e, t) {
            switch (t) {
                case U.yG.AVAILABLE:
                    return R.intl.formatToPlainString(L.default.BdRXZA, { boostCount: e });
                case U.yG.SPENT:
                    return R.intl.formatToPlainString(L.default.xvgIVG, { boostCount: e });
                case U.yG.TOTAL:
                    return R.intl.string(L.default["/F7Z2y"]);
            }
        })(t, n);
    return (0, l.jsxs)("div", {
        className: e7.k,
        role: "img",
        "aria-label": `${t}, ${s}`,
        children: [
            (0, l.jsxs)("div", {
                className: e7.N,
                "aria-hidden": "true",
                children: [
                    (0, l.jsx)(f._, {
                        size: "sm",
                        color: n !== U.yG.AVAILABLE ? N.A.colors.TEXT_MUTED : N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, l.jsx)(h.D, {
                        color: n !== U.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: i ? "experimental/body-lg/semibold" : "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, l.jsx)(I.E, {
                "aria-hidden": "true",
                color: "text-muted",
                variant: i ? "text-sm/normal" : "text-sm/medium",
                children: s,
            }),
        ],
    });
}
var tt = n(690118);
function tn(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: s, total: o } = (0, eJ.A)(t),
        a = (0, j.c)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != n)
        return (0, l.jsxs)("div", {
            className: tt.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tt.N1,
                    children: [
                        (0, l.jsx)(I.E, {
                            variant: a ? "experimental/heading-sm/semibold" : "eyebrow",
                            color: a ? "text-strong" : "text-subtle",
                            children: R.intl.string(L.default.hjvcLO),
                        }),
                        (0, l.jsx)(I.E, {
                            className: tt.C2,
                            variant: a ? "experimental/body-sm/medium" : "text-xs/semibold",
                            children: R.intl.format(L.default.fXE30d, {
                                helpDeskArticle: e4.A.getArticleURL(ep.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tt.hQ,
                    children: [
                        (0, l.jsx)(te, { count: i, type: U.yG.AVAILABLE }),
                        (0, l.jsx)(te, { count: s, type: U.yG.SPENT }),
                        (0, l.jsx)(te, { count: o, type: U.yG.TOTAL }),
                    ],
                }),
                (0, l.jsx)(e5.A, {
                    className: tt.S6,
                    guild: n,
                    analyticsLocation: {
                        page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: e3.XD.CUSTOM,
                    size: e3.lO.LARGE,
                    icon: (0, l.jsx)(f._, {
                        className: tt.Ng,
                        size: "sm",
                        color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
            ],
        });
}
var tl = n(97808),
    ti = n(778712),
    ts = n(463930),
    tr = n(730134),
    to = n(878678),
    ta = n(483625),
    tu = n(854627),
    td = n(696451),
    tc = n(317525),
    tm = n(287809),
    tp = n(562153),
    tx = n(19575),
    tg = n(985827);
let tf = tx.Ay.getEnableHardwareAcceleration() ? tl.Js : tr.A;
function tA(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, r.bG)([tc.A], () => tc.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([tm.default], () => tm.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([td.Ay], () => (null != o ? td.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, r.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: g,
        } = (0, tu.A)({ userId: s?.id, guildId: t, size: ti._3.SIZE_40, animateOnHover: !d }),
        A = (0, j.c)("GuildPowerupsBoostInfoContainerMember");
    return null == n || null == a || null == s
        ? null
        : (0, l.jsxs)("div", {
              className: tg.ft,
              children: [
                  (0, l.jsxs)("div", {
                      className: tg.FS,
                      children: [
                          (0, l.jsx)(I.E, {
                              variant: "text-md/semibold",
                              color: A ? "text-strong" : void 0,
                              children: R.intl.string(u ? L.default.KSWK1U : L.default.XXXX5l),
                          }),
                          (0, l.jsx)(I.E, {
                              variant: A ? "text-sm/normal" : "text-sm/medium",
                              children: R.intl.format(u ? L.default["7fWTg4"] : L.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, to.K4)({
                                          guildId: t,
                                          location: {
                                              section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: ep.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !u &&
                      (0, l.jsx)(ta.V, {
                          avatar: (0, l.jsx)(tf, {
                              ...g,
                              user: s,
                              src: p,
                              avatarDecoration: m,
                              size: ti._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, l.jsx)(ts.g, {
                              variant: "text-md/semibold",
                              name: tp.Ay.getName(t, null, s),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: x()(tg.Qs, tg.cX),
                          message: R.intl.string(R.t["6OSasb"]),
                          decorations: (0, l.jsx)(f._, {
                              color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: tg.$J,
                          }),
                      }),
                  (0, l.jsx)(e5.A, {
                      guild: n,
                      className: tg.Qs,
                      analyticsLocation: {
                          page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: e3.XD.BRAND,
                      size: e3.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, l.jsx)(f._, { className: tg.Ng, color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var th = n(820739),
    tI = n(860071),
    tE = n(935208),
    tv = n(492349),
    tj = n(606049),
    tb = n(58703),
    t_ = n(967144),
    tS = n(262001),
    tw = n(736541);
function ty(e) {
    let t,
        { boost: n, phase: i, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(tE.default.extractTimestamp(e.id)),
                {
                    username: n,
                    roleColor: l,
                    roleColorStrings: i,
                } = (0, r.cf)(
                    [td.Ay],
                    () => {
                        let t = td.Ay.getMember(e.guildId, e.userId);
                        return {
                            username:
                                td.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? R.intl.string(R.t["30mdIx"]),
                            roleColor: t?.colorString ?? null,
                            roleColorStrings: t?.colorStrings ?? null,
                        };
                    },
                    [e],
                );
            return { timestamp: t, username: n, roleColor: l, roleColorStrings: i };
        })(n),
        d = (0, t_.gn)(n.guildId, n.userId, u ?? null),
        c = (0, j.c)("GuildPowerupsRecentActivityRow"),
        m = new Date(s),
        { Icon: p, color: g } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: f._, color: N.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tv.x, color: N.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tv.x, color: N.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i);
    return (0, l.jsxs)("div", {
        className: tS.og,
        children: [
            (0, l.jsx)(p, { color: g, size: "sm" }),
            (0, l.jsxs)("span", {
                className: tS.x$,
                children: [
                    (0, l.jsx)(I.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tS.IP,
                        children: (0, l.jsx)(eG.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, l.jsx)(ts.g, {
                                variant: "text-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: d,
                            }),
                        }),
                    }),
                    (0, l.jsx)(I.E, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: c ? void 0 : "text-muted",
                        className: tS.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return R.intl.string(L.default.plwH8d);
                                case "expiring":
                                    return R.intl.formatToPlainString(L.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return R.intl.string(L.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, l.jsx)(tj.A, {
                timestamp: m,
                timestampFormat:
                    0 === (t = (0, tb.m_)(m, new Date()))
                        ? `[${R.intl.string(R.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${R.intl.string(R.t.ZdDLO0)}]`
                          : "L",
                className: x()(tw[c ? "text-xs/medium" : "text-xs/semibold"], tS.vE),
            }),
        ],
    });
}
var tN = n(834205);
function tC(e) {
    let { guildId: t } = e,
        n = (function (e) {
            let t = (0, r.yK)([eX.A], () => eX.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [n] = i.useState(() => Date.now()),
                l = i.useMemo(
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
                s = (0, r.yK)(
                    [td.Ay],
                    () => {
                        let t = new Set();
                        return (
                            l.forEach((n) => {
                                let { boost: l } = n;
                                null == td.Ay.getMember(e, l.userId) && t.add(l.userId);
                            }),
                            Array.from(t)
                        );
                    },
                    [e, l],
                );
            i.useEffect(() => {
                s.length > 0 && s.forEach((t) => tI.A.requestMember(e, t));
            }, [e, s]);
            let o = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = i.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                u = (0, r.bG)([eX.A], () => null != eX.A.getLastFetchedAtForGuild(e), [e]);
            return (
                i.useEffect(() => {
                    (o === a && u) || (0, th.VU)(e, { includeEnded: !0 });
                }, [e, o, a, u]),
                l
            );
        })(t),
        s = (0, j.c)("GuildPowerupsRecentActivity");
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(h.D, {
                      className: tN.w,
                      variant: s ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: s ? "text-strong" : "text-subtle",
                      children: R.intl.string(R.t.yM9Krm),
                  }),
                  (0, l.jsx)(A.Ip, {
                      className: tN.k,
                      fade: !0,
                      children: n.map((e) => (0, l.jsx)(ty, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tG = n(726724);
function tT(e) {
    let { guildId: t } = e,
        n = e0("member");
    return (0, l.jsxs)("div", {
        className: tG.CG,
        children: [(0, l.jsx)(eg, { slot: n, guildId: t }), (0, l.jsx)(tA, { guildId: t })],
    });
}
function tk(e) {
    let t,
        s,
        o,
        a,
        u,
        p,
        S,
        w,
        y,
        { guildId: N, powerupListingId: C } = e;
    ((t = (0, _.C$)(N, "useLoadGuildPowerups")),
        i.useEffect(() => {
            t && (0, Q.z9)(N);
        }, [N, t]),
        i.useEffect(() => {
            ((0, Z.AK)(N), (0, Z.Xd)(N));
        }, [N]));
    let G = (0, _.C$)(N, "GuildPowerupsOverview"),
        T = (0, j.c)("GuildPowerupsOverview");
    (0, H.Pq)(N);
    let k = (0, r.bG)([K.A], () => K.A.getStateForGuild(N)),
        P = (0, m.A)(N),
        B = i.useRef(!1),
        { shouldShow: V, modalConfig: M } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(N))),
            (o = (0, m.A)(N) ?? !1),
            (a = (0, r.bG)([K.A], () => K.A.getStateForGuild(N))),
            (u = a?.allPowerups?.[$.d0]),
            (p = (0, J.E)(N, "GuildPowerupsOverview")),
            (S = o && p && null != s),
            (w = i.useMemo(
                () =>
                    S
                        ? (function (e) {
                              let t = e?.storeRemovalDate;
                              if (null == e || null == t) return null;
                              let n = (0, X.A)(t);
                              return {
                                  dismissibleContent: z.M.GUILD_THEME_POWERUP_ROLLBACK_MODAL,
                                  header: `${e.title} ${R.intl.formatToPlainString(L.default["6e2ry1"], { dateString: n })}`,
                                  bodies: [
                                      R.intl.formatToPlainString(L.default.jd8fki, {
                                          startDate: n,
                                          endDate: n,
                                          perkName: e.title,
                                          boostCount: e.cost,
                                      }),
                                  ],
                                  hasCancelButton: !1,
                              };
                          })(u)
                        : null,
                [S, u],
            )),
            { shouldShow: S, modalConfig: w }),
        et = (0, E.A)(),
        en = null == C && !et && null != M,
        el = [];
    V && en && el.push(M.dismissibleContent);
    let [ei, es] = (0, b.kn)(el),
        er =
            ((y = (0, r.bG)([K.A], () => K.A.getStateForGuild(N))),
            i.useMemo(
                () =>
                    ee.reduce((e, t) => {
                        let n = y?.powerupCatalog[t];
                        if (null == n) return e;
                        let l = (function (e, t, n) {
                            let l = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== U.o9.PERK) return e;
                                    let n = Y[t.skuId];
                                    return (null == n || ((e[n] ??= []), e[n].push(t)), e);
                                }, {});
                            for (let e of t) {
                                if (e.type === U.o9.LEVEL) {
                                    l.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = Y[e.skuId];
                                if (null != t) {
                                    let e = i[t];
                                    if (void 0 !== e) {
                                        let n = q[t];
                                        (e.sort((e, t) => n.indexOf(e.skuId) - n.indexOf(t.skuId)),
                                            l.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0));
                                    }
                                    continue;
                                }
                                l.push({ type: "singlePerk", powerup: e, badge: U.ys[e.skuId] });
                            }
                            return (
                                n && e === U.o9.PERK && l.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL),
                                        n = e.findIndex(
                                            (e) =>
                                                "multiPerk" === e.type &&
                                                ("guildTagsBadgePacks" === e.group || (e.group, !1)),
                                        );
                                    if (-1 !== t && -1 !== n && n !== t + 1) {
                                        let t = [...e],
                                            [l] = t.splice(n, 1),
                                            i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL);
                                        return (t.splice(i + 1, 0, l), t);
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.d0);
                                        if (t <= 0) return e;
                                        let n = [...e],
                                            [l] = n.splice(t, 1);
                                        return (n.unshift(l), n);
                                    })(l),
                                )
                            );
                        })(t, n, G);
                        return (e.push({ type: t, listings: l }), e);
                    }, []),
                [y?.powerupCatalog, G],
            )),
        eo = eL(
            er
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            N,
        );
    return (i.useEffect(() => {
        if (null != C && !B.current)
            for (let e of er)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === C) {
                        ((0, eR.A)(N, t.powerup), (B.current = !0));
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === C || t.powerups.some((e) => e.skuId === C))) {
                        B.current = !0;
                        let e = eo[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(U.G0);
                                let t = e.pathname + e.search + e.hash;
                                ((0, d.bG)(t), (B.current = !1));
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && C === O.W5) {
                        ((0, D.A)({ guildId: N, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }), (B.current = !0));
                        return;
                    }
                }
    }, [N, C, er, eo]),
    i.useEffect(() => {
        if (null != ei && null != M) {
            let e = {
                onCloseCallback: () => {
                    es(eV.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${ei}`,
            };
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("239592"), n.e("586618")]).then(n.bind(n, 442241));
                return (t) => (0, l.jsx)(e, { modalConfig: M, markAsDismissed: es, ...t });
            }, e);
        }
    }, [N, ei, es, M]),
    k?.powerupCatalog == null)
        ? null
        : (0, l.jsxs)("div", {
              className: tG.kL,
              children: [
                  (0, l.jsxs)(F.A, {
                      className: tG.KE,
                      hideSearch: !0,
                      toolbar: (0, l.jsx)("div", {}),
                      children: [
                          (0, l.jsx)(F.A.ChannelIcon, { icon: f._, "aria-hidden": !0 }),
                          (0, l.jsx)(F.A.Title, { children: R.intl.string(L.default.yv3DJJ) }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: tG.hQ,
                      children: [
                          (0, l.jsx)(A.Ip, {
                              className: tG.DO,
                              children: er.map((e) => {
                                  let { type: t, listings: n } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case U.o9.LEVEL:
                                                  return {
                                                      title: R.intl.string(L.default["TXY/b0"]),
                                                      description: R.intl.string(L.default.aJv4PB),
                                                  };
                                              case U.o9.PERK:
                                                  return {
                                                      title: R.intl.string(L.default.TV3Vm8),
                                                      description: R.intl.string(L.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = t === U.o9.LEVEL ? A.Ip : "div";
                                  return (0, l.jsxs)(
                                      "div",
                                      {
                                          className: tG.lt,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tG.kn,
                                                  children: [
                                                      (0, l.jsx)(h.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, l.jsx)(I.E, {
                                                          color: T ? void 0 : "text-muted",
                                                          variant: T ? "text-sm/normal" : "text-sm/medium",
                                                          children: s,
                                                      }),
                                                  ],
                                              }),
                                              (0, l.jsx)(r, {
                                                  orientation: "horizontal",
                                                  className: x()(tG.qJ, tG.kn, { [tG.dU]: t === U.o9.LEVEL }),
                                                  fade: !0,
                                                  children: n.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, l.jsx)(
                                                                  eC,
                                                                  {
                                                                      guildId: N,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: n[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, l.jsx)(
                                                                  e2,
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
                                                              return (0, l.jsx)(
                                                                  W,
                                                                  { guildId: N },
                                                                  "powerup-game-server",
                                                              );
                                                      }
                                                  }),
                                              }),
                                          ],
                                      },
                                      `section-${t}`,
                                  );
                              }),
                          }),
                          (0, l.jsxs)("div", {
                              className: tG.so,
                              children: [
                                  P
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(tn, { guildId: N }), (0, l.jsx)(e8, { guildId: N })],
                                        })
                                      : (0, l.jsx)(tT, { guildId: N }),
                                  (0, l.jsx)(tC, { guildId: N }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tP(e) {
    let { guildId: t, powerupListingId: n } = e,
        i = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments),
        x = (0, m.A)(t),
        g = (0, d.PR)(),
        f = !p || null == x || null == i,
        A = (0, o.Ay)(null != g ? g : []);
    return ((0, a.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: A.analyticsLocations },
        },
        { disableTrack: f },
    ),
    f)
        ? null
        : (0, l.jsx)(tk, { guildId: t, powerupListingId: n });
}
