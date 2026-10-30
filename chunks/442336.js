(l.r(t), l.d(t, { default: () => tO }));
var i = l(477900),
    n = l(582128),
    s = l(562708),
    r = l(17928),
    o = l(688810),
    a = l(139286),
    d = l(736056),
    u = l(976860),
    c = l(71393),
    m = l(363487);
(l(321073), l(323874), l(14289), l(35956));
var p = l(503698),
    x = l.n(p),
    g = l(364522),
    f = l(192308),
    A = l(104510),
    h = l(297264),
    v = l(834730),
    E = l(942857),
    I = l(793574),
    j = l(37537),
    b = l(131607),
    _ = l(831617),
    S = l(289704),
    w = l(821609),
    y = l(612400),
    N = l(661531);
function C(e) {
    return e
        ? { textColor: "text-default", iconColor: N.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: N.A.colors.TEXT_MUTED };
}
var G = l(475669),
    T = l(948134),
    P = l(904629);
function R(e) {
    let t = (0, r.bG)([G.A], () => G.A.getStateForGuild(e));
    return n.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, P.k)(e);
    }, [t?.entitlements]);
}
var k = l(105292),
    L = l(959456),
    D = l(144977),
    O = l(628049),
    U = l(568065),
    B = l(135570),
    V = l(929729),
    M = l(517826);
function W(e) {
    let t,
        l,
        { guildId: s } = e,
        o = n.useRef(null),
        { state: a, lowestGameServerCost: d } = (0, r.cf)([G.A], () => ({
            state: G.A.getStateForGuild(s),
            lowestGameServerCost: G.A.getLowestGameCostForGuild(s),
        })),
        u =
            ((t = (0, r.bG)([G.A], () => G.A.getStateForGuild(s)?.entitlements, [s])),
            (l = R(s)),
            n.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: k.intl.string(L.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: m } = (0, T.A)(),
        { textColor: p } = C(u?.type === "active");
    return null == a
        ? null
        : (0, i.jsxs)(y.NI, {
              label: k.intl.string(B.default["B3OfL/"]),
              badge: U.ys[O.W5],
              isActive: u?.type === "active",
              isWarning: u?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, i.jsx)("div", {
                      className: x()(V.ZS, M.Sl),
                      children: (0, i.jsx)(S.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: V.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, i.jsx)(y.Ft, {
                      title: k.intl.string(B.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, i.jsx)(y.$L, { cost: d ?? 0, costDecorator: "+", status: u }),
                      children: (0, i.jsx)(v.E, {
                          className: M.h_,
                          color: p,
                          variant: "text-sm/medium",
                          children: k.intl.format(B.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, i.jsx)(y.kd, {
                      children: (0, i.jsx)(w.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? k.intl.string(B.default.PuvU5b)
                                  : k.intl.string(B.default.b62EHM),
                          onClick: (e) => {
                              (e.stopPropagation(),
                                  (0, D.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }));
                          },
                      }),
                  }),
              ],
          });
}
var F = l(742589),
    K = l(645619),
    $ = l(512750),
    z = l(554146),
    X = l(939981),
    H = l(456124),
    J = l(914732),
    Q = l(498480),
    Z = l(868652);
l(667532);
let q = { guildTagsBadgePacks: [$.tv, $.OJ, $.Ht, $.jF] },
    Y = Object.entries(q).reduce((e, t) => {
        let [l, i] = t;
        for (let t of i) e[t] = l;
        return e;
    }, {}),
    ee = [U.o9.LEVEL, U.o9.PERK];
var et = l(877624),
    el = l(408278),
    ei = l(789645),
    en = l(406810),
    es = l(28863),
    er = l(807098),
    eo = l(637706),
    ea = l(788883),
    ed = l(7667),
    eu = l(705982);
function ec(e) {
    let { componentId: t, promotionId: l, banner: n, onDismiss: s } = e,
        r = (0, er.T)(n.asset),
        { countdownText: o, terms: a } = (0, ed.A)(l),
        d = (0, eo.C)(n.helpArticle, ""),
        u = [n.body, a].filter((e) => "" !== e).join(" ");
    return (0, i.jsxs)("div", {
        className: eu.kL,
        children: [
            (0, i.jsx)(ea.A, {
                componentType: et.C.GUILD_BOOST_TAB_BANNER,
                componentId: t,
                promotionId: l,
                dismissibleContent: z.M.GUILD_BOOST_TAB_BANNER,
            }),
            (0, i.jsx)("div", {
                className: x()(eu.X8, "theme-dark"),
                children: (0, i.jsx)(el.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.WAI6xu),
                    onClick: s,
                    icon: ei.P,
                }),
            }),
            null != r && "" !== r && (0, i.jsx)("img", { src: r, className: eu.LY, alt: "" }),
            (0, i.jsxs)("div", {
                className: eu.FS,
                children: [
                    null != o &&
                        (0, i.jsxs)("div", {
                            className: eu.qW,
                            children: [
                                (0, i.jsx)(en.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: eu.y,
                                }),
                                (0, i.jsx)(v.E, { variant: "text-xs/semibold", color: "text-default", children: o }),
                            ],
                        }),
                    (0, i.jsx)(v.E, { variant: "text-md/semibold", color: "text-default", children: n.header }),
                    (0, i.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [
                            u,
                            null != d &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        "" !== u && " ",
                                        (0, i.jsx)(es.Anchor, { className: eu.nf, href: d.url, children: d.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var em = l(182859),
    ep = l(652215);
let ex = { page: ep.liQ.GUILD_POWERUPS_OVERVIEW, section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR, object: ep.ZSU.CARD };
function eg(e) {
    let { slot: t, guildId: l } = e,
        { content: n, variant: s } = t;
    if (null == n) return null;
    switch (n.kind) {
        case "banner":
            return (0, i.jsx)(ec, {
                componentId: n.componentId,
                promotionId: n.promotionId,
                banner: n.banner,
                onDismiss: n.onDismiss,
            });
        case "video":
            return (0, i.jsx)(em.A, {
                guildId: l,
                variant: s,
                analyticsLocation: ex,
                onDismiss: n.onDismiss ?? void 0,
            });
    }
}
var ef = l(64051),
    eA = l(972919),
    eh = l(724677),
    ev = l(210273),
    eE = l(998418),
    eI = l(722523),
    ej = l(294384),
    eb = l(813847),
    e_ = l(224331);
function eS(e) {
    let { guildId: t, powerup: l, className: n } = e,
        s = (0, eE.Ay)(t, l),
        r = s.type !== U.b_.LEVEL_ACTIVATED,
        o = (0, ej.Ay)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, eb.e)(l, s, o);
    return (0, i.jsx)(y.$L, { status: a, cost: r ? l.cost : void 0, className: n });
}
function ew(e) {
    let { guildId: t, powerup: l, badge: n, className: s, onHover: r, children: o } = e,
        a = (0, eE.Ay)(t, l),
        d = a.type !== U.b_.INACTIVE,
        u = a.sourceEntitlement?.ends_at != null,
        c = (0, ej.Ay)(t, l, "GuildPowerupCard"),
        m = (0, e_.A)(t, l);
    return (0, i.jsx)(y.NI, {
        label: l.title,
        isActive: d,
        isWarning: u,
        badge: n,
        canRollback: c,
        onClick: m,
        onMouseOver: () => r?.(!0),
        onMouseLeave: () => r?.(!1),
        className: s,
        children: o,
    });
}
var ey = l(867060),
    eN = l(508155),
    eC = l(695578);
function eG(e) {
    let t,
        { active: l, nextActive: n, position: s, index: r } = e,
        o = [ef.v, eA.w, eh.H][r] ?? ef.v;
    return (
        (t = l && !1 !== n ? U.z0.FULL : l && !1 === n ? U.z0.HALF : U.z0.NONE),
        (0, i.jsxs)("div", {
            className: eC.progressContainer,
            children: [
                (0, i.jsx)("div", { className: x()(eC.progress, eC[s], eC[t]) }),
                (0, i.jsx)("div", {
                    className: x()(eC.boostContainer, M.JD, { [eC.boostContainerActive]: l, [M.vu]: l }),
                    children: (0, i.jsx)(o, { alt: "", ariaHidden: !0, size: 24 }),
                }),
            ],
        })
    );
}
function eT(e) {
    let { isActive: t, index: l } = e,
        { textColor: s, iconColor: r } = C(t),
        o = (0, j.c)("GuildPowerupLevelBody"),
        a = n.useMemo(() => {
            let e = eN.t[l];
            if (null == e) return [];
            let t = e.tier === ep.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let n = (0, ev.X)(e.perkIcon);
                return (0, i.jsxs)(
                    "div",
                    {
                        className: eC.perkRow,
                        children: [
                            (0, i.jsx)(n, { color: r, size: "sm" }),
                            (0, i.jsx)(v.E, {
                                className: eC.perkText,
                                color: s,
                                variant: o ? "text-sm/normal" : "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${l}-${t}`,
                );
            });
        }, [l, r, o, s]);
    return (0, i.jsxs)("div", {
        className: eC.perkRowContainer,
        children: [
            a,
            (0, i.jsx)("div", {
                className: eC.perkRow,
                children: (0, i.jsx)(v.E, {
                    color: s,
                    variant: o ? "text-sm/normal" : "text-sm/medium",
                    children: k.intl.string(L.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eP(e) {
    let t,
        { guildId: l, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, eE.Ay)(l, r),
        d = (0, eE.Ay)(l, o),
        u = a.type !== U.b_.INACTIVE,
        c = d.type !== U.b_.INACTIVE,
        m = a.type === U.b_.TIER_OVERRIDE_ACTIVATED,
        [p, x] = n.useState(void 0);
    ((0, ey.A)(p), (t = 0 === s ? U.At.START : null == o ? U.At.END : U.At.MIDDLE));
    let { textColor: g } = C(u);
    return (0, i.jsxs)(ew, {
        guildId: l,
        powerup: r,
        className: eC.card,
        children: [
            (0, i.jsx)(eG, { index: s, position: t, active: u, nextActive: null != o ? c : void 0 }),
            (0, i.jsx)(y.Ft, {
                title: r.title,
                textColor: g,
                footer: !m && (0, i.jsx)(eS, { className: eC.footer, guildId: l, powerup: r }),
                children: (0, i.jsx)(eT, { isActive: u, index: s }),
            }),
            !m && (0, i.jsx)(y.kd, { children: (0, i.jsx)(eI.Ay, { guildId: l, powerup: r, onError: x }) }),
        ],
    });
}
var eR = l(866665),
    ek = l(775602),
    eL = l(468689),
    eD = l(685073),
    eO = l(915667);
function eU(e, t) {
    let s = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([K.A], () => K.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, eD.Rg)(e);
        });
    return n.useMemo(() => {
        let n = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: n, allPowerups: s, hasServerTags: r } = e,
                              o = k.intl.string(L.default.KC9HRW),
                              a = k.intl.string(L.default.GJiSmP),
                              d = s?.[$.SL],
                              u = k.intl.string(L.default["/egwJA"]),
                              c = r ? void 0 : k.intl.string(L.default.W6Vwn3),
                              m = r ? void 0 : k.intl.string(L.default.lvk1Gc),
                              p = r ? k.intl.string(L.default["9CfkLO"]) : k.intl.string(k.t["+7XY31"]),
                              x = r ? "secondary" : "expressive",
                              g = n
                                  ? () => {
                                        (r
                                            ? eL.A.open(t, ep.BEX.TAG, ep.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != d && (0, eO.A)(t, d),
                                            (0, f.closeAllModals)());
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, f.openModalLazy)(
                                      async () => {
                                          let { default: s } = await Promise.all([l.e("991051"), l.e("875295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, i.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: k.intl.string(L.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      n && null != g && null != p
                                                          ? {
                                                                variant: x,
                                                                text: p,
                                                                icon: "expressive" === x ? A._ : void 0,
                                                                onClick: g,
                                                            }
                                                          : void 0,
                                                  ...l,
                                              });
                                      },
                                      { onCloseCallback: s?.onModalClose },
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
                      })({ guildId: t, canUseBoosts: s, allPowerups: o, hasServerTags: a })
                    : void 0;
            null != e && (n[r] = e);
        }
        return n;
    }, [e, t, s, o, a]);
}
var eB = l(625361);
function eV(e) {
    let { guildId: t, group: l, powerups: s } = e,
        [o, a] = n.useState(!1),
        d = (0, r.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        u = eU([l], t)[l],
        c = !d && o ? u?.image?.animatedUrl : u?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: l, powerups: i } = e,
                n = (0, eE.jJ)(l, i),
                s = n.some((e) => e.type !== U.b_.INACTIVE);
            if (i.length <= 0) return null;
            let r = n.reduce(
                (e, t) => {
                    let { sourceEntitlement: l } = t,
                        i = l?.ends_at;
                    return null == i ? e : null == e || i < e ? i : e;
                },
                void 0,
            );
            null != r
                ? (t = { type: "expiring", expiringAt: r })
                : s && (t = { type: "active", statusText: k.intl.string(L.default.FFLkmx) });
            let o = n.reduce((e, t) => {
                    let { type: l, powerup: i } = t;
                    return l === U.b_.POWERUP_ACTIVATED ? e + i.cost : e;
                }, 0),
                a = n.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, n[0]?.powerup?.cost ?? 0),
                d = n.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e + (l?.cost ?? 0);
                }, 0),
                u = s ? o : a;
            return {
                isActive: s,
                status: t,
                cost: u,
                costDecorator: !s && d > u ? "+" : void 0,
                expiringAt: r,
                activeCost: o,
                minCost: a,
                totalCost: d,
            };
        })({ guildId: t, powerups: s }),
        { textColor: p } = C(m?.isActive ?? !1),
        x = (0, j.c)("GuildPowerupMultiPerkCard");
    if (null == m || null == u) return null;
    let { status: g, cost: f, costDecorator: A } = m;
    return (0, i.jsxs)(y.NI, {
        label: u.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: u.badge,
        onClick: () => u.openModal(s),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, i.jsx)("img", { alt: "", src: c, className: eB.S }),
            (0, i.jsx)(y.Ft, {
                title: u.title,
                textColor: p,
                footer: (0, i.jsx)(y.$L, { status: g, cost: f, costDecorator: A }),
                children: (0, i.jsx)(v.E, {
                    className: eB.h,
                    color: p,
                    variant: x ? "text-sm/normal" : "text-sm/medium",
                    children: u.description,
                }),
            }),
            (0, i.jsx)(y.kd, {
                children:
                    u?.viewCtaTooltip != null
                        ? (0, i.jsx)(eR.m, {
                              asContainer: !0,
                              text: u.viewCtaTooltip,
                              delay: 100,
                              children: (0, i.jsx)(w.$, { text: u.viewCta, fullWidth: !0 }),
                          })
                        : (0, i.jsx)(w.$, { text: u.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eM = l(403362),
    eW = l(639060),
    eF = l(49999),
    eK = l(425138);
function e$(e) {
    let { markAsDismissed: t } = e,
        l = (0, j.c)("GuildPowerupInfoCard");
    return (0, i.jsxs)("div", {
        className: eK.kL,
        children: [
            (0, i.jsx)("img", { alt: "", className: eK.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, i.jsx)(v.E, {
                color: "text-overlay-light",
                variant: "text-md/semibold",
                children: k.intl.string(L.default.diMhWc),
            }),
            (0, i.jsx)(v.E, {
                color: "text-overlay-light",
                variant: l ? "text-sm/normal" : "text-sm/medium",
                children: k.intl.string(L.default.pycxTr),
            }),
            (0, i.jsx)("div", {
                className: eK.VN,
                children: (0, i.jsx)(el.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        t(eF.i.USER_DISMISS);
                    },
                    icon: ei.P,
                }),
            }),
        ],
    });
}
var ez = l(972213),
    eX = l(695366),
    eH = l(168691);
function eJ(e) {
    let { notificationConfig: t, markAsDismissed: l } = e,
        n = (0, j.c)("GuildPowerupRollbackNotification");
    return (0, i.jsxs)("div", {
        className: eH.kL,
        children: [
            (0, i.jsx)("div", {
                className: eH.VN,
                children: (0, i.jsx)(el.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        l(eF.i.USER_DISMISS);
                    },
                    icon: ez.XLargeIcon,
                }),
            }),
            (0, i.jsx)(eX.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eH.Kk }),
            (0, i.jsx)(v.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, i.jsx)(v.E, { variant: n ? "text-sm/normal" : "text-sm/medium", children: t.description }),
        ],
    });
}
var eQ = l(859241),
    eZ = l(864310),
    eq = l(620019);
function eY(e) {
    let { guildId: t, powerupNames: l, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: d,
        } = (function (e, t) {
            let { spent: l } = (0, eZ.A)(e),
                i = (0, r.bG)([eQ.A], () => eQ.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = l - n.useMemo(() => i?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [i]);
            return n.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: k.intl.string(L.default.n5hQhc),
                              description: k.intl.formatToPlainString(L.default.iAaAiG, {
                                  boostCount: s,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: s,
                          },
                [s, t],
            );
        })(t, l),
        u = (0, j.c)("GuildPowerupsWarning");
    return o
        ? (0, i.jsxs)("div", {
              className: eq.kL,
              children: [
                  (0, i.jsx)(eX.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eq.Kk }),
                  (0, i.jsx)(v.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, i.jsxs)(v.E, {
                      variant: u ? "text-sm/normal" : "text-sm/medium",
                      children: [
                          d,
                          s?.map((e, t) =>
                              (0, i.jsx)(
                                  v.E,
                                  {
                                      variant: u ? "text-sm/normal" : "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: eq.$e,
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
var e0 = l(826673),
    e1 = l(549996),
    e9 = l(412260);
function e6(e) {
    let t = (function () {
            let e = (0, e1.c)(et.C.GUILD_BOOST_TAB_BANNER),
                t =
                    null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind
                        ? e.properties.properties.guildBoostTabBanner
                        : null,
                [l, i] = (0, b.Cc)(null != t ? z.M.GUILD_BOOST_TAB_BANNER : null, e?.promotionId ?? "", void 0, !0),
                s = n.useCallback(() => {
                    i(eF.i.USER_DISMISS);
                }, [i]),
                { isDismissed: r } = (0, e0.u$)(z.M.GUILD_BOOST_TAB_BANNER, e?.promotionId ?? "");
            return null == e || null == t || l !== z.M.GUILD_BOOST_TAB_BANNER
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
        l = (0, r.bG)([e9.A], () => e9.A.isFetchingActivePromotions),
        i = "admin" !== e || t.isBannerEligible || l ? [] : [z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [s, o] = (0, b.kn)(i),
        a = n.useCallback(() => {
            o(eF.i.USER_DISMISS);
        }, [o]),
        d = null;
    t.shouldShow
        ? (d = {
              kind: "banner",
              componentId: t.componentId,
              promotionId: t.promotionId,
              banner: t.banner,
              onDismiss: t.markAsDismissed,
          })
        : "member" !== e || t.isBannerEligible || l
          ? s === z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD && (d = { kind: "video", onDismiss: a })
          : (d = { kind: "video", onDismiss: null });
    let u = l || t.isBannerEligible || d?.kind === "video";
    return { variant: e, content: d, isReserved: u };
}
var e8 = l(463080);
function e2(e) {
    let { text: t } = e,
        l = (0, j.c)("Tier3OverrideNotice");
    return (0, i.jsx)("div", {
        className: e8.ac,
        children: (0, i.jsx)(v.E, { variant: l ? "text-sm/normal" : "text-sm/medium", children: t }),
    });
}
function e5(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(ep.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: k.intl.string(L.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                l =
                    ((t = (0, r.bG)([K.A], () => K.A.getStateForGuild(e))),
                    n.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, P.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eM.Vq);
                    }, [t])),
                i = R(e),
                s = l.length > 0 || i.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = i.length > 0 ? k.intl.string(B.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                d = [];
            return (
                l.some((e) => e.skuId === $.FB) && d.push(k.intl.string(L.default.Sfr0Jw)),
                i.length > 0 && d.push(k.intl.string(B.default.wiungr)),
                { shouldShow: s, expiringPowerups: l, expiringPowerupNames: a, warnings: d }
            );
        })(t),
        o = (function (e) {
            let t = (0, eW.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [i, n] = (0, b.ww)(l, e);
            return { shouldShow: null != t && i === t.dismissibleContent, notificationConfig: t, markAsDismissed: n };
        })(t),
        a = e6("admin"),
        d = (function (e) {
            let t = [];
            e || t.push(z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, i] = (0, b.kn)(t);
            return { shouldShow: null != l && l === z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: i };
        })(s.shouldShow || o.shouldShow || a.isReserved),
        u = (0, j.c)("GuildPowerupNotificationContainer");
    return l.shouldShow || s.shouldShow || o.shouldShow || d.shouldShow || null != a.content
        ? (0, i.jsxs)("div", {
              className: e8.kL,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: u ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: u ? "text-strong" : "text-subtle",
                      children: k.intl.string(L.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, i.jsx)(e2, { text: l.text }),
                  s.shouldShow &&
                      (0, i.jsx)(eY, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, i.jsx)(eJ, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  (0, i.jsx)(eg, { slot: a, guildId: t }),
                  d.shouldShow && (0, i.jsx)(e$, { markAsDismissed: d.markAsDismissed }),
              ],
          })
        : null;
}
var e4 = l(72377);
function e3(e) {
    let { guildId: t, powerup: l, badge: s } = e,
        [r, o] = n.useState(void 0);
    (0, ey.A)(r);
    let [a, d] = n.useState(!1),
        { textColor: u } = C((0, eE.Ay)(t, l).type !== U.b_.INACTIVE),
        c = (0, j.c)("GuildPowerupPerkCard");
    return (0, i.jsxs)(ew, {
        onHover: (e) => d(e),
        guildId: t,
        powerup: l,
        badge: s,
        children: [
            (0, i.jsx)(e4.l, { className: M.Sl, powerup: l, isHovering: a }),
            (0, i.jsx)(y.Ft, {
                title: l.title,
                textColor: u,
                footer: (0, i.jsx)(eS, { guildId: t, powerup: l }),
                children: (0, i.jsx)(v.E, {
                    className: M.h_,
                    color: u,
                    variant: c ? "text-sm/normal" : "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, i.jsx)(y.kd, { children: (0, i.jsx)(eI.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var e7 = l(862482),
    te = l(944304),
    tt = l(975571),
    tl = l(380572);
function ti(e) {
    let { count: t, type: l } = e,
        n = (0, j.c)("GuildPowerupsBoostInfo"),
        s = (function (e, t) {
            switch (t) {
                case U.yG.AVAILABLE:
                    return k.intl.formatToPlainString(L.default.BdRXZA, { boostCount: e });
                case U.yG.SPENT:
                    return k.intl.formatToPlainString(L.default.xvgIVG, { boostCount: e });
                case U.yG.TOTAL:
                    return k.intl.string(L.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, i.jsxs)("div", {
        className: tl.k,
        role: "img",
        "aria-label": `${t}, ${s}`,
        children: [
            (0, i.jsxs)("div", {
                className: tl.N,
                "aria-hidden": "true",
                children: [
                    (0, i.jsx)(A._, {
                        size: "sm",
                        color: l !== U.yG.AVAILABLE ? N.A.colors.TEXT_MUTED : N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, i.jsx)(h.D, {
                        color: l !== U.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: n ? "experimental/body-lg/semibold" : "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, i.jsx)(v.E, {
                "aria-hidden": "true",
                color: "text-muted",
                variant: n ? "text-sm/normal" : "text-sm/medium",
                children: s,
            }),
        ],
    });
}
var tn = l(690118);
function ts(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: n, spent: s, total: o } = (0, eZ.A)(t),
        a = (0, j.c)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != l)
        return (0, i.jsxs)("div", {
            className: tn.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: tn.N1,
                    children: [
                        (0, i.jsx)(v.E, {
                            variant: a ? "experimental/heading-sm/semibold" : "eyebrow",
                            color: a ? "text-strong" : "text-subtle",
                            children: k.intl.string(L.default.hjvcLO),
                        }),
                        (0, i.jsx)(v.E, {
                            className: tn.C2,
                            variant: a ? "experimental/body-sm/medium" : "text-xs/semibold",
                            children: k.intl.format(L.default.fXE30d, {
                                helpDeskArticle: tt.A.getArticleURL(ep.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tn.hQ,
                    children: [
                        (0, i.jsx)(ti, { count: n, type: U.yG.AVAILABLE }),
                        (0, i.jsx)(ti, { count: s, type: U.yG.SPENT }),
                        (0, i.jsx)(ti, { count: o, type: U.yG.TOTAL }),
                    ],
                }),
                (0, i.jsx)(te.A, {
                    className: tn.S6,
                    guild: l,
                    analyticsLocation: {
                        page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: e7.XD.CUSTOM,
                    size: e7.lO.LARGE,
                    icon: (0, i.jsx)(A._, {
                        className: tn.Ng,
                        size: "sm",
                        color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
            ],
        });
}
var tr = l(97808),
    to = l(778712),
    ta = l(463930),
    td = l(730134),
    tu = l(464120),
    tc = l(483625),
    tm = l(854627),
    tp = l(696451),
    tx = l(317525),
    tg = l(287809),
    tf = l(562153),
    tA = l(19575),
    th = l(985827);
let tv = tA.Ay.getEnableHardwareAcceleration() ? tr.Js : td.A;
function tE(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        n = (0, r.bG)([tx.A], () => tx.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([tg.default], () => tg.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([tp.Ay], () => (null != o ? tp.Ay.getMember(t, o) : void 0), [o, t]),
        d = a?.premiumSince != null,
        u = (0, r.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: g,
        } = (0, tm.A)({ userId: s?.id, guildId: t, size: to._3.SIZE_40, animateOnHover: !u }),
        f = (0, j.c)("GuildPowerupsBoostInfoContainerMember");
    return null == l || null == a || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: th.ft,
              children: [
                  (0, i.jsxs)("div", {
                      className: th.FS,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "text-md/semibold",
                              color: f ? "text-strong" : void 0,
                              children: k.intl.string(d ? L.default.KSWK1U : L.default.XXXX5l),
                          }),
                          (0, i.jsx)(v.E, {
                              variant: f ? "text-sm/normal" : "text-sm/medium",
                              children: k.intl.format(d ? L.default["7fWTg4"] : L.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, tu.K4)({
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
                  null != n &&
                      !d &&
                      (0, i.jsx)(tc.V, {
                          avatar: (0, i.jsx)(tv, {
                              ...g,
                              user: s,
                              src: p,
                              avatarDecoration: m,
                              size: to._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, i.jsx)(ta.g, {
                              variant: "text-md/semibold",
                              name: tf.Ay.getName(t, null, s),
                              colorString: n.colorString,
                              colorStrings: n.colorStrings,
                          }),
                          className: x()(th.Qs, th.cX),
                          message: k.intl.string(k.t["6OSasb"]),
                          decorations: (0, i.jsx)(A._, {
                              color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: th.$J,
                          }),
                      }),
                  (0, i.jsx)(te.A, {
                      guild: l,
                      className: th.Qs,
                      analyticsLocation: {
                          page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: e7.XD.BRAND,
                      size: e7.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, i.jsx)(A._, { className: th.Ng, color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tI = l(820739),
    tj = l(860071),
    tb = l(935208),
    t_ = l(492349),
    tS = l(606049),
    tw = l(58703),
    ty = l(967144),
    tN = l(262001),
    tC = l(736541);
function tG(e) {
    let t,
        { boost: l, phase: n, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: d,
        } = (function (e) {
            let t = new Date(tb.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: i,
                    roleColorStrings: n,
                } = (0, r.cf)(
                    [tp.Ay],
                    () => {
                        let t = tp.Ay.getMember(e.guildId, e.userId);
                        return {
                            username:
                                tp.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? k.intl.string(k.t["30mdIx"]),
                            roleColor: t?.colorString ?? null,
                            roleColorStrings: t?.colorStrings ?? null,
                        };
                    },
                    [e],
                );
            return { timestamp: t, username: l, roleColor: i, roleColorStrings: n };
        })(l),
        u = (0, ty.gn)(l.guildId, l.userId, d ?? null),
        c = (0, j.c)("GuildPowerupsRecentActivityRow"),
        m = new Date(s),
        { Icon: p, color: g } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: A._, color: N.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: t_.x, color: N.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: t_.x, color: N.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(n);
    return (0, i.jsxs)("div", {
        className: tN.og,
        children: [
            (0, i.jsx)(p, { color: g, size: "sm" }),
            (0, i.jsxs)("span", {
                className: tN.x$,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tN.IP,
                        children: (0, i.jsx)(eR.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, i.jsx)(ta.g, {
                                variant: "text-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: u,
                            }),
                        }),
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: c ? void 0 : "text-muted",
                        className: tN.CC,
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
            (0, i.jsx)(tS.A, {
                timestamp: m,
                timestampFormat:
                    0 === (t = (0, tw.m_)(m, new Date()))
                        ? `[${k.intl.string(k.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${k.intl.string(k.t.ZdDLO0)}]`
                          : "L",
                className: x()(tC[c ? "text-xs/medium" : "text-xs/semibold"], tN.vE),
            }),
        ],
    });
}
var tT = l(834205);
function tP(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, r.yK)([eQ.A], () => eQ.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [l] = n.useState(() => Date.now()),
                i = n.useMemo(
                    () =>
                        t
                            .map((e) => {
                                let t =
                                        e.ended || (null != e.endsAt && e.endsAt.getTime() <= l)
                                            ? { phase: "expired" }
                                            : null != e.endsAt && e.endsAt.getTime() - l <= 2592e5
                                              ? { phase: "expiring", endsAt: e.endsAt }
                                              : { phase: "gave" },
                                    i = (function (e, t) {
                                        switch (t.phase) {
                                            case "gave":
                                                return tb.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tb.default.extractTimestamp(e.id);
                                        }
                                    })(e, t);
                                return "expiring" === t.phase
                                    ? { boost: e, phase: "expiring", sortKey: i, endsAt: t.endsAt }
                                    : { boost: e, phase: t.phase, sortKey: i };
                            })
                            .sort((e, t) => t.sortKey - e.sortKey)
                            .slice(0, void 0),
                    [t, void 0, l],
                ),
                s = (0, r.yK)(
                    [tp.Ay],
                    () => {
                        let t = new Set();
                        return (
                            i.forEach((l) => {
                                let { boost: i } = l;
                                null == tp.Ay.getMember(e, i.userId) && t.add(i.userId);
                            }),
                            Array.from(t)
                        );
                    },
                    [e, i],
                );
            n.useEffect(() => {
                s.length > 0 && s.forEach((t) => tj.A.requestMember(e, t));
            }, [e, s]);
            let o = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = n.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                d = (0, r.bG)([eQ.A], () => null != eQ.A.getLastFetchedAtForGuild(e), [e]);
            return (
                n.useEffect(() => {
                    (o === a && d) || (0, tI.VU)(e, { includeEnded: !0 });
                }, [e, o, a, d]),
                i
            );
        })(t),
        s = (0, j.c)("GuildPowerupsRecentActivity");
    return 0 === l.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.D, {
                      className: tT.w,
                      variant: s ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: s ? "text-strong" : "text-subtle",
                      children: k.intl.string(k.t.yM9Krm),
                  }),
                  (0, i.jsx)(g.Ip, {
                      className: tT.k,
                      fade: !0,
                      children: l.map((e) => (0, i.jsx)(tG, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tR = l(726724);
function tk(e) {
    let { guildId: t } = e,
        l = e6("member");
    return (0, i.jsxs)("div", {
        className: tR.CG,
        children: [(0, i.jsx)(eg, { slot: l, guildId: t }), (0, i.jsx)(tE, { guildId: t })],
    });
}
function tL(e) {
    let { children: t, title: l } = e,
        s = n.useRef(null),
        r = n.useRef(null),
        [o, a] = n.useState({ left: !1, right: !1 });
    return (
        n.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let t = 0;
            function l() {
                let l = Math.abs(e.scrollLeft);
                s.current?.style.setProperty("--custom-level-scroll-offset", `${-e.scrollLeft}px`);
                let i = t > 1,
                    n = i && l > 1,
                    r = i && l < t - 1;
                a((e) => (e.left === n && e.right === r ? e : { left: n, right: r }));
            }
            function i() {
                ((t = e.scrollWidth - e.clientWidth),
                    s.current?.style.setProperty(
                        "--custom-level-scrollbar-height",
                        `${e.offsetHeight - e.clientHeight}px`,
                    ),
                    l());
            }
            let n = new ResizeObserver(i);
            return (
                n.observe(e),
                e.addEventListener("scroll", l, { passive: !0 }),
                i(),
                () => {
                    (n.disconnect(), e.removeEventListener("scroll", l));
                }
            );
        }, []),
        (0, i.jsxs)("div", {
            ref: s,
            className: x()(tR.SE, { [tR.j$]: o.left, [tR.QQ]: o.right }),
            children: [
                (0, i.jsx)(g.Ip, {
                    ref: r,
                    className: tR.dU,
                    orientation: "auto",
                    scrollbarGutter: !1,
                    fade: !0,
                    disableFocusRingScope: !0,
                    role: "region",
                    "aria-label": l,
                    tabIndex: 0,
                    children: t,
                }),
                (0, i.jsx)("div", {
                    className: tR.YP,
                    "aria-hidden": !0,
                    children: (0, i.jsx)("div", {
                        className: tR.pw,
                        children: n.Children.map(t, () => (0, i.jsx)("div", { className: tR.GX })),
                    }),
                }),
            ],
        })
    );
}
function tD(e) {
    let t,
        s,
        o,
        a,
        d,
        p,
        S,
        w,
        y,
        { guildId: N, powerupListingId: C } = e;
    ((t = (0, _.C$)(N, "useLoadGuildPowerups")),
        n.useEffect(() => {
            t && (0, Q.z9)(N);
        }, [N, t]),
        n.useEffect(() => {
            ((0, Z.AK)(N), (0, Z.Xd)(N));
        }, [N]));
    let G = (0, _.C$)(N, "GuildPowerupsOverview"),
        T = (0, j.c)("GuildPowerupsOverview");
    (0, J.Pq)(N);
    let P = (0, r.bG)([K.A], () => K.A.getStateForGuild(N)),
        R = (0, m.A)(N),
        B = n.useRef(!1),
        { shouldShow: V, modalConfig: M } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(N))),
            (o = (0, m.A)(N) ?? !1),
            (a = (0, r.bG)([K.A], () => K.A.getStateForGuild(N))),
            (d = a?.allPowerups?.[$.d0]),
            (p = (0, H.E)(N, "GuildPowerupsOverview")),
            (S = o && p && null != s),
            (w = n.useMemo(
                () =>
                    S
                        ? (function (e) {
                              let t = e?.storeRemovalDate;
                              if (null == e || null == t) return null;
                              let l = (0, X.A)(t);
                              return {
                                  dismissibleContent: z.M.GUILD_THEME_POWERUP_ROLLBACK_MODAL,
                                  header: `${e.title} ${k.intl.formatToPlainString(L.default["6e2ry1"], { dateString: l })}`,
                                  bodies: [
                                      k.intl.formatToPlainString(L.default.jd8fki, {
                                          startDate: l,
                                          endDate: l,
                                          perkName: e.title,
                                          boostCount: e.cost,
                                      }),
                                  ],
                                  hasCancelButton: !1,
                              };
                          })(d)
                        : null,
                [S, d],
            )),
            { shouldShow: S, modalConfig: w }),
        et = (0, E.A)(),
        el = null == C && !et && null != M,
        ei = [];
    V && el && ei.push(M.dismissibleContent);
    let [en, es] = (0, b.kn)(ei),
        er =
            ((y = (0, r.bG)([K.A], () => K.A.getStateForGuild(N))),
            n.useMemo(
                () =>
                    ee.reduce((e, t) => {
                        let l = y?.powerupCatalog[t];
                        if (null == l) return e;
                        let i = (function (e, t, l) {
                            let i = [],
                                n = t.reduce((e, t) => {
                                    if (t.type !== U.o9.PERK) return e;
                                    let l = Y[t.skuId];
                                    return (null == l || ((e[l] ??= []), e[l].push(t)), e);
                                }, {});
                            for (let e of t) {
                                if (e.type === U.o9.LEVEL) {
                                    i.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = Y[e.skuId];
                                if (null != t) {
                                    let e = n[t];
                                    if (void 0 !== e) {
                                        let l = q[t];
                                        (e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            i.push({ type: "multiPerk", group: t, powerups: e }),
                                            (n[t] = void 0));
                                    }
                                    continue;
                                }
                                i.push({ type: "singlePerk", powerup: e, badge: U.ys[e.skuId] });
                            }
                            return (
                                l && e === U.o9.PERK && i.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL),
                                        l = e.findIndex(
                                            (e) =>
                                                "multiPerk" === e.type &&
                                                ("guildTagsBadgePacks" === e.group || (e.group, !1)),
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [i] = t.splice(l, 1),
                                            n = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL);
                                        return (t.splice(n + 1, 0, i), t);
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.d0);
                                        if (t <= 0) return e;
                                        let l = [...e],
                                            [i] = l.splice(t, 1);
                                        return (l.unshift(i), l);
                                    })(i),
                                )
                            );
                        })(t, l, G);
                        return (e.push({ type: t, listings: i }), e);
                    }, []),
                [y?.powerupCatalog, G],
            )),
        eo = eU(
            er
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            N,
        );
    return (n.useEffect(() => {
        if (null != C && !B.current)
            for (let e of er)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === C) {
                        ((0, eO.A)(N, t.powerup), (B.current = !0));
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
                                ((0, u.bG)(t), (B.current = !1));
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && C === O.W5) {
                        ((0, D.A)({ guildId: N, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }), (B.current = !0));
                        return;
                    }
                }
    }, [N, C, er, eo]),
    n.useEffect(() => {
        if (null != en && null != M) {
            let e = {
                onCloseCallback: () => {
                    es(eF.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${en}`,
            };
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("239592"), l.e("586618")]).then(l.bind(l, 442241));
                return (t) => (0, i.jsx)(e, { modalConfig: M, markAsDismissed: es, ...t });
            }, e);
        }
    }, [N, en, es, M]),
    P?.powerupCatalog == null)
        ? null
        : (0, i.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, i.jsxs)(F.A, {
                      className: tR.KE,
                      hideSearch: !0,
                      toolbar: (0, i.jsx)("div", {}),
                      children: [
                          (0, i.jsx)(F.A.ChannelIcon, { icon: A._, "aria-hidden": !0 }),
                          (0, i.jsx)(F.A.Title, { children: k.intl.string(L.default.yv3DJJ) }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: tR.hQ,
                      children: [
                          (0, i.jsx)(g.Ip, {
                              className: tR.DO,
                              fade: !0,
                              children: er.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: n, description: s } = (function (e) {
                                          switch (e) {
                                              case U.o9.LEVEL:
                                                  return {
                                                      title: k.intl.string(L.default["TXY/b0"]),
                                                      description: k.intl.string(L.default.aJv4PB),
                                                  };
                                              case U.o9.PERK:
                                                  return {
                                                      title: k.intl.string(L.default.TV3Vm8),
                                                      description: k.intl.string(L.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = l.map((e, t) => {
                                          switch (e.type) {
                                              case "singleLevel":
                                                  return (0, i.jsx)(
                                                      "div",
                                                      {
                                                          className: tR.lQ,
                                                          role: "group",
                                                          "aria-label": e.powerup.title,
                                                          children: (0, i.jsx)(eP, {
                                                              guildId: N,
                                                              index: t,
                                                              powerup: e.powerup,
                                                              nextPowerup: l[t + 1]?.powerup,
                                                          }),
                                                      },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "singlePerk":
                                                  return (0, i.jsx)(
                                                      e3,
                                                      { guildId: N, powerup: e.powerup, badge: e.badge },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "multiPerk":
                                                  return (0, i.jsx)(
                                                      eV,
                                                      { guildId: N, group: e.group, powerups: e.powerups },
                                                      `powerup-group-${e.group}`,
                                                  );
                                              case "gameServer":
                                                  return (0, i.jsx)(W, { guildId: N }, "powerup-game-server");
                                          }
                                      });
                                  return (0, i.jsxs)(
                                      "div",
                                      {
                                          className: tR.lt,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tR.kn,
                                                  children: [
                                                      (0, i.jsx)(h.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: n,
                                                      }),
                                                      (0, i.jsx)(v.E, {
                                                          color: T ? void 0 : "text-muted",
                                                          variant: T ? "text-sm/normal" : "text-sm/medium",
                                                          children: s,
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: x()(tR.qJ, tR.kn),
                                                  children:
                                                      t === U.o9.LEVEL ? (0, i.jsx)(tL, { title: n, children: r }) : r,
                                              }),
                                          ],
                                      },
                                      `section-${t}`,
                                  );
                              }),
                          }),
                          (0, i.jsxs)("div", {
                              className: tR.so,
                              children: [
                                  R
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)(ts, { guildId: N }), (0, i.jsx)(e5, { guildId: N })],
                                        })
                                      : (0, i.jsx)(tk, { guildId: N }),
                                  (0, i.jsx)(tP, { guildId: N }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tO(e) {
    let { guildId: t, powerupListingId: l } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, r.bG)([d.A], () => d.A.hasLoadedExperiments),
        x = (0, m.A)(t),
        g = (0, u.PR)(),
        f = !p || null == x || null == n,
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
        : (0, i.jsx)(tD, { guildId: t, powerupListingId: l });
}
