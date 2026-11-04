(l.r(t), l.d(t, { default: () => tG }));
var n = l(477900),
    i = l(582128),
    s = l(613412),
    r = l(855986),
    o = l(688810),
    a = l(139286),
    d = l(343446),
    u = l(976860),
    c = l(71393),
    m = l(363487);
(l(321073), l(323874), l(14289), l(35956));
var p = l(503698),
    g = l.n(p),
    f = l(95362),
    h = l(192308),
    x = l(104510),
    A = l(534514),
    E = l(834730),
    v = l(942857),
    I = l(793574),
    b = l(263775),
    j = l(831617),
    y = l(828334),
    _ = l(821609),
    S = l(577930),
    N = l(646514);
function w(e) {
    return e
        ? { textColor: "text-default", iconColor: N.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: N.A.colors.TEXT_MUTED };
}
var C = l(475669),
    R = l(948134),
    T = l(904629);
function k(e) {
    let t = (0, r.bG)([C.A], () => C.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, T.k)(e);
    }, [t?.entitlements]);
}
var L = l(792996),
    D = l(586428),
    G = l(144977);
l(628049);
var P = l(568065),
    O = l(105518),
    U = l(929729),
    V = l(517826);
function B(e) {
    let t,
        l,
        { guildId: s } = e,
        o = i.useRef(null),
        { state: a, lowestGameServerCost: d } = (0, r.cf)([C.A], () => ({
            state: C.A.getStateForGuild(s),
            lowestGameServerCost: C.A.getLowestGameCostForGuild(s),
        })),
        u =
            ((t = (0, r.bG)([C.A], () => C.A.getStateForGuild(s)?.entitlements, [s])),
            (l = k(s)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: L.intl.string(D.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: m } = (0, R.A)(),
        { textColor: p } = w(u?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(S.NI, {
              label: L.intl.string(O.default["B3OfL/"]),
              badge: P.ys["0"],
              isActive: u?.type === "active",
              isWarning: u?.type === "expiring",
              onClick: () => (0, G.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, n.jsx)("div", {
                      className: g()(U.ZS, V.Sl),
                      children: (0, n.jsx)(y.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: U.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, n.jsx)(S.Ft, {
                      title: L.intl.string(O.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, n.jsx)(S.$L, { cost: d ?? 0, costDecorator: "+", status: u }),
                      children: (0, n.jsx)(E.E, {
                          className: V.h_,
                          color: p,
                          variant: "body-sm/medium",
                          children: L.intl.format(O.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, n.jsx)(S.kd, {
                      children: (0, n.jsx)(_.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? L.intl.string(O.default.PuvU5b)
                                  : L.intl.string(O.default.b62EHM),
                          onClick: (e) => {
                              (e.stopPropagation(),
                                  (0, G.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }));
                          },
                      }),
                  }),
              ],
          });
}
var M = l(742589),
    W = l(645619),
    F = l(512750),
    K = l(554146),
    $ = l(939981),
    z = l(456124),
    H = l(836944),
    X = l(940456),
    J = l(533993);
l(667532);
let Q = { guildTagsBadgePacks: [F.tv, F.OJ, F.Ht, F.jF] },
    Z = Object.entries(Q).reduce((e, t) => {
        let [l, n] = t;
        for (let t of n) e[t] = l;
        return e;
    }, {}),
    q = [P.o9.LEVEL, P.o9.PERK];
var Y = l(877624),
    ee = l(408278),
    et = l(789645),
    el = l(406810),
    en = l(28863),
    ei = l(807098),
    es = l(637706),
    er = l(788883),
    eo = l(7667),
    ea = l(705982);
function ed(e) {
    let { componentId: t, promotionId: l, banner: i, onDismiss: s } = e,
        r = (0, ei.T)(i.asset),
        { countdownText: o, terms: a } = (0, eo.A)(l),
        d = (0, es.C)(i.helpArticle, ""),
        u = [i.body, a].filter((e) => "" !== e).join(" ");
    return (0, n.jsxs)("div", {
        className: ea.kL,
        children: [
            (0, n.jsx)(er.A, {
                componentType: Y.C.GUILD_BOOST_TAB_BANNER,
                componentId: t,
                promotionId: l,
                dismissibleContent: K.M.GUILD_BOOST_TAB_BANNER,
            }),
            (0, n.jsx)("div", {
                className: g()(ea.X8, "theme-dark"),
                children: (0, n.jsx)(ee.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": L.intl.string(L.t.WAI6xu),
                    onClick: s,
                    icon: et.P,
                }),
            }),
            null != r && "" !== r && (0, n.jsx)("img", { src: r, className: ea.LY, alt: "" }),
            (0, n.jsxs)("div", {
                className: ea.FS,
                children: [
                    null != o &&
                        (0, n.jsxs)("div", {
                            className: ea.qW,
                            children: [
                                (0, n.jsx)(el.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: ea.y,
                                }),
                                (0, n.jsx)(E.E, { variant: "body-xs/semibold", color: "text-default", children: o }),
                            ],
                        }),
                    (0, n.jsx)(E.E, { variant: "body-md/semibold", color: "text-default", children: i.header }),
                    (0, n.jsxs)(E.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [
                            u,
                            null != d &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        "" !== u && " ",
                                        (0, n.jsx)(en.Anchor, { className: ea.nf, href: d.url, children: d.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eu = l(182859),
    ec = l(652215);
let em = { page: ec.liQ.GUILD_POWERUPS_OVERVIEW, section: ec.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR, object: ec.ZSU.CARD };
function ep(e) {
    let { slot: t, guildId: l } = e,
        { content: i, variant: s } = t;
    if (null == i) return null;
    switch (i.kind) {
        case "banner":
            return (0, n.jsx)(ed, {
                componentId: i.componentId,
                promotionId: i.promotionId,
                banner: i.banner,
                onDismiss: i.onDismiss,
            });
        case "video":
            return (0, n.jsx)(eu.A, {
                guildId: l,
                variant: s,
                analyticsLocation: em,
                onDismiss: i.onDismiss ?? void 0,
            });
    }
}
var eg = l(568548),
    ef = l(573650),
    eh = l(149971),
    ex = l(210273),
    eA = l(998418),
    eE = l(722523),
    ev = l(294384),
    eI = l(813847),
    eb = l(224331);
function ej(e) {
    let { guildId: t, powerup: l, className: i } = e,
        s = (0, eA.Ay)(t, l),
        r = s.type !== P.b_.LEVEL_ACTIVATED,
        o = (0, ev.Ay)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, eI.e)(l, s, o);
    return (0, n.jsx)(S.$L, { status: a, cost: r ? l.cost : void 0, className: i });
}
function ey(e) {
    let { guildId: t, powerup: l, badge: i, className: s, onHover: r, children: o } = e,
        a = (0, eA.Ay)(t, l),
        d = a.type !== P.b_.INACTIVE,
        u = a.sourceEntitlement?.ends_at != null,
        c = (0, ev.Ay)(t, l, "GuildPowerupCard"),
        m = (0, eb.A)(t, l);
    return (0, n.jsx)(S.NI, {
        label: l.title,
        isActive: d,
        isWarning: u,
        badge: i,
        canRollback: c,
        onClick: m,
        onMouseOver: () => r?.(!0),
        onMouseLeave: () => r?.(!1),
        className: s,
        children: o,
    });
}
var e_ = l(867060),
    eS = l(508155),
    eN = l(695578);
function ew(e) {
    let t,
        { active: l, nextActive: i, position: s, index: r } = e,
        o = [eg.v, ef.w, eh.H][r] ?? eg.v;
    return (
        (t = l && !1 !== i ? P.z0.FULL : l && !1 === i ? P.z0.HALF : P.z0.NONE),
        (0, n.jsxs)("div", {
            className: eN.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(eN.progress, eN[s], eN[t]) }),
                (0, n.jsx)("div", {
                    className: g()(eN.boostContainer, V.JD, { [eN.boostContainerActive]: l, [V.vu]: l }),
                    children: (0, n.jsx)(o, { alt: "", ariaHidden: !0, size: 24 }),
                }),
            ],
        })
    );
}
function eC(e) {
    let { isActive: t, index: l } = e,
        { textColor: s, iconColor: r } = w(t),
        o = i.useMemo(() => {
            let e = eS.t[l];
            if (null == e) return [];
            let t = e.tier === ec.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, ex.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: eN.perkRow,
                        children: [
                            (0, n.jsx)(i, { color: r, size: "sm" }),
                            (0, n.jsx)(E.E, {
                                className: eN.perkText,
                                color: s,
                                variant: "body-sm/normal",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${l}-${t}`,
                );
            });
        }, [l, r, s]);
    return (0, n.jsxs)("div", {
        className: eN.perkRowContainer,
        children: [
            o,
            (0, n.jsx)("div", {
                className: eN.perkRow,
                children: (0, n.jsx)(E.E, {
                    color: s,
                    variant: "body-sm/normal",
                    children: L.intl.string(D.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eR(e) {
    let t,
        { guildId: l, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, eA.Ay)(l, r),
        d = (0, eA.Ay)(l, o),
        u = a.type !== P.b_.INACTIVE,
        c = d.type !== P.b_.INACTIVE,
        m = a.type === P.b_.TIER_OVERRIDE_ACTIVATED,
        [p, g] = i.useState(void 0);
    ((0, e_.A)(p), (t = 0 === s ? P.At.START : null == o ? P.At.END : P.At.MIDDLE));
    let { textColor: f } = w(u);
    return (0, n.jsxs)(ey, {
        guildId: l,
        powerup: r,
        className: eN.card,
        children: [
            (0, n.jsx)(ew, { index: s, position: t, active: u, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(S.Ft, {
                title: r.title,
                textColor: f,
                footer: !m && (0, n.jsx)(ej, { className: eN.footer, guildId: l, powerup: r }),
                children: (0, n.jsx)(eC, { isActive: u, index: s }),
            }),
            !m && (0, n.jsx)(S.kd, { children: (0, n.jsx)(eE.Ay, { guildId: l, powerup: r, onError: g }) }),
        ],
    });
}
var eT = l(866665),
    ek = l(775602),
    eL = l(727419),
    eD = l(685073),
    eG = l(915667);
function eP(e, t) {
    let s = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([W.A], () => W.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, eD.Rg)(e);
        });
    return i.useMemo(() => {
        let i = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, hasServerTags: r } = e,
                              o = L.intl.string(D.default.KC9HRW),
                              a = L.intl.string(D.default.GJiSmP),
                              d = s?.[F.SL],
                              u = L.intl.string(D.default["/egwJA"]),
                              c = r ? void 0 : L.intl.string(D.default.W6Vwn3),
                              m = r ? void 0 : L.intl.string(D.default.lvk1Gc),
                              p = r ? L.intl.string(D.default["9CfkLO"]) : L.intl.string(L.t["+7XY31"]),
                              g = r ? "secondary" : "expressive",
                              f = i
                                  ? () => {
                                        (r
                                            ? eL.A.open(t, ec.BEX.TAG, ec.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != d && (0, eG.A)(t, d),
                                            (0, h.s7)());
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, h.mM)(
                                      async () => {
                                          let { default: s } = await Promise.all([l.e(991051), l.e(837712)]).then(
                                              l.bind(l, 789267),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: L.intl.string(D.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      i && null != f && null != p
                                                          ? {
                                                                variant: g,
                                                                text: p,
                                                                icon: "expressive" === g ? x._ : void 0,
                                                                onClick: f,
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
            null != e && (i[r] = e);
        }
        return i;
    }, [e, t, s, o, a]);
}
var eO = l(625361);
function eU(e) {
    let { guildId: t, group: l, powerups: s } = e,
        [o, a] = i.useState(!1),
        d = (0, r.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        u = eP([l], t)[l],
        c = !d && o ? u?.image?.animatedUrl : u?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                i = (0, eA.jJ)(l, n),
                s = i.some((e) => e.type !== P.b_.INACTIVE);
            if (n.length <= 0) return null;
            let r = i.reduce(
                (e, t) => {
                    let { sourceEntitlement: l } = t,
                        n = l?.ends_at;
                    return null == n ? e : null == e || n < e ? n : e;
                },
                void 0,
            );
            null != r
                ? (t = { type: "expiring", expiringAt: r })
                : s && (t = { type: "active", statusText: L.intl.string(D.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === P.b_.POWERUP_ACTIVATED ? e + n.cost : e;
                }, 0),
                a = i.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, i[0]?.powerup?.cost ?? 0),
                d = i.reduce((e, t) => {
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
        { textColor: p } = w(m?.isActive ?? !1);
    if (null == m || null == u) return null;
    let { status: g, cost: f, costDecorator: h } = m;
    return (0, n.jsxs)(S.NI, {
        label: u.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: u.badge,
        onClick: () => u.openModal(s),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, n.jsx)("img", { alt: "", src: c, className: eO.S }),
            (0, n.jsx)(S.Ft, {
                title: u.title,
                textColor: p,
                footer: (0, n.jsx)(S.$L, { status: g, cost: f, costDecorator: h }),
                children: (0, n.jsx)(E.E, {
                    className: eO.h,
                    color: p,
                    variant: "body-sm/normal",
                    children: u.description,
                }),
            }),
            (0, n.jsx)(S.kd, {
                children:
                    u?.viewCtaTooltip != null
                        ? (0, n.jsx)(eT.m, {
                              asContainer: !0,
                              text: u.viewCtaTooltip,
                              delay: 100,
                              children: (0, n.jsx)(_.$, { text: u.viewCta, fullWidth: !0 }),
                          })
                        : (0, n.jsx)(_.$, { text: u.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eV = l(403362),
    eB = l(639060),
    eM = l(49999),
    eW = l(425138);
function eF(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsxs)("div", {
        className: eW.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: eW.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(E.E, {
                color: "text-overlay-light",
                variant: "body-md/semibold",
                children: L.intl.string(D.default.diMhWc),
            }),
            (0, n.jsx)(E.E, {
                color: "text-overlay-light",
                variant: "body-sm/normal",
                children: L.intl.string(D.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: eW.VN,
                children: (0, n.jsx)(ee.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": L.intl.string(L.t.cpT0Cq),
                    onClick: () => {
                        t(eM.i.USER_DISMISS);
                    },
                    icon: et.P,
                }),
            }),
        ],
    });
}
var eK = l(972213),
    e$ = l(695366),
    ez = l(168691);
function eH(e) {
    let { notificationConfig: t, markAsDismissed: l } = e;
    return (0, n.jsxs)("div", {
        className: ez.kL,
        children: [
            (0, n.jsx)("div", {
                className: ez.VN,
                children: (0, n.jsx)(ee.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": L.intl.string(L.t.cpT0Cq),
                    onClick: () => {
                        l(eM.i.USER_DISMISS);
                    },
                    icon: eK.XLargeIcon,
                }),
            }),
            (0, n.jsx)(e$.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: ez.Kk }),
            (0, n.jsx)(E.E, { variant: "body-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, n.jsx)(E.E, { variant: "body-sm/normal", children: t.description }),
        ],
    });
}
var eX = l(859241),
    eJ = l(864310),
    eQ = l(620019);
function eZ(e) {
    let { guildId: t, powerupNames: l, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: d,
        } = (function (e, t) {
            let { spent: l } = (0, eJ.A)(e),
                n = (0, r.bG)([eX.A], () => eX.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = l - i.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return i.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: L.intl.string(D.default.n5hQhc),
                              description: L.intl.formatToPlainString(D.default.iAaAiG, {
                                  boostCount: s,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: s,
                          },
                [s, t],
            );
        })(t, l);
    return o
        ? (0, n.jsxs)("div", {
              className: eQ.kL,
              children: [
                  (0, n.jsx)(e$.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eQ.Kk }),
                  (0, n.jsx)(E.E, { variant: "body-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, n.jsxs)(E.E, {
                      variant: "body-sm/normal",
                      children: [
                          d,
                          s?.map((e, t) =>
                              (0, n.jsx)(
                                  E.E,
                                  {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      className: eQ.$e,
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
var eq = l(826673),
    eY = l(549996),
    e0 = l(412260);
function e1(e) {
    let t = (function () {
            let e = (0, eY.c)(Y.C.GUILD_BOOST_TAB_BANNER),
                t =
                    null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind
                        ? e.properties.properties.guildBoostTabBanner
                        : null,
                [l, n] = (0, b.Cc)(null != t ? K.M.GUILD_BOOST_TAB_BANNER : null, e?.promotionId ?? "", void 0, !0),
                s = i.useCallback(() => {
                    n(eM.i.USER_DISMISS);
                }, [n]),
                { isDismissed: r } = (0, eq.u$)(K.M.GUILD_BOOST_TAB_BANNER, e?.promotionId ?? "");
            return null == e || null == t || l !== K.M.GUILD_BOOST_TAB_BANNER
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
        l = (0, r.bG)([e0.A], () => e0.A.isFetchingActivePromotions),
        n = "admin" !== e || t.isBannerEligible || l ? [] : [K.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [s, o] = (0, b.kn)(n),
        a = i.useCallback(() => {
            o(eM.i.USER_DISMISS);
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
          ? s === K.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD && (d = { kind: "video", onDismiss: a })
          : (d = { kind: "video", onDismiss: null });
    let u = l || t.isBannerEligible || d?.kind === "video";
    return { variant: e, content: d, isReserved: u };
}
var e9 = l(463080);
function e6(e) {
    let { text: t } = e;
    return (0, n.jsx)("div", {
        className: e9.ac,
        children: (0, n.jsx)(E.E, { variant: "body-sm/normal", children: t }),
    });
}
function e8(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(ec.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: L.intl.string(D.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                l =
                    ((t = (0, r.bG)([W.A], () => W.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, T.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eV.Vq);
                    }, [t])),
                n = k(e),
                s = l.length > 0 || n.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? L.intl.string(O.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                d = [];
            return (
                l.some((e) => e.skuId === F.FB) && d.push(L.intl.string(D.default.Sfr0Jw)),
                n.length > 0 && d.push(L.intl.string(O.default.wiungr)),
                { shouldShow: s, expiringPowerups: l, expiringPowerupNames: a, warnings: d }
            );
        })(t),
        o = (function (e) {
            let t = (0, eB.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [n, i] = (0, b.ww)(l, e);
            return { shouldShow: null != t && n === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = e1("admin"),
        d = (function (e) {
            let t = [];
            e || t.push(K.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, b.kn)(t);
            return { shouldShow: null != l && l === K.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: n };
        })(s.shouldShow || o.shouldShow || a.isReserved);
    return l.shouldShow || s.shouldShow || o.shouldShow || d.shouldShow || null != a.content
        ? (0, n.jsxs)("div", {
              className: e9.kL,
              children: [
                  (0, n.jsx)(E.E, {
                      tag: "div",
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: L.intl.string(D.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(e6, { text: l.text }),
                  s.shouldShow &&
                      (0, n.jsx)(eZ, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, n.jsx)(eH, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  (0, n.jsx)(ep, { slot: a, guildId: t }),
                  d.shouldShow && (0, n.jsx)(eF, { markAsDismissed: d.markAsDismissed }),
              ],
          })
        : null;
}
var e4 = l(652242);
function e5(e) {
    let { guildId: t, powerup: l, badge: s } = e,
        [r, o] = i.useState(void 0);
    (0, e_.A)(r);
    let [a, d] = i.useState(!1),
        { textColor: u } = w((0, eA.Ay)(t, l).type !== P.b_.INACTIVE);
    return (0, n.jsxs)(ey, {
        onHover: (e) => d(e),
        guildId: t,
        powerup: l,
        badge: s,
        children: [
            (0, n.jsx)(e4.l, { className: V.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(S.Ft, {
                title: l.title,
                textColor: u,
                footer: (0, n.jsx)(ej, { guildId: t, powerup: l }),
                children: (0, n.jsx)(E.E, {
                    className: V.h_,
                    color: u,
                    variant: "body-sm/normal",
                    children: l.description,
                }),
            }),
            (0, n.jsx)(S.kd, { children: (0, n.jsx)(eE.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var e3 = l(862482),
    e2 = l(944304),
    e7 = l(975571),
    te = l(380572);
function tt(e) {
    let { count: t, type: l } = e,
        i = (function (e, t) {
            switch (t) {
                case P.yG.AVAILABLE:
                    return L.intl.formatToPlainString(D.default.BdRXZA, { boostCount: e });
                case P.yG.SPENT:
                    return L.intl.formatToPlainString(D.default.xvgIVG, { boostCount: e });
                case P.yG.TOTAL:
                    return L.intl.string(D.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: te.k,
        role: "img",
        "aria-label": `${t}, ${i}`,
        children: [
            (0, n.jsxs)("div", {
                className: te.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(x._, {
                        size: "sm",
                        color:
                            l !== P.yG.AVAILABLE
                                ? N.A.colors.TEXT_MUTED
                                : N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                    }),
                    (0, n.jsx)(A.D, {
                        color: l !== P.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "body-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(E.E, { "aria-hidden": "true", color: "text-muted", variant: "body-sm/normal", children: i }),
        ],
    });
}
var tl = l(690118);
function tn(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: s, total: o } = (0, eJ.A)(t);
    if (null != l)
        return (0, n.jsxs)("div", {
            className: tl.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: tl.N1,
                    children: [
                        (0, n.jsx)(E.E, {
                            tag: "div",
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: L.intl.string(D.default.hjvcLO),
                        }),
                        (0, n.jsx)(E.E, {
                            className: tl.C2,
                            variant: "body-sm/medium",
                            children: L.intl.format(D.default.fXE30d, {
                                helpDeskArticle: e7.A.getArticleURL(ec.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tl.hQ,
                    children: [
                        (0, n.jsx)(tt, { count: i, type: P.yG.AVAILABLE }),
                        (0, n.jsx)(tt, { count: s, type: P.yG.SPENT }),
                        (0, n.jsx)(tt, { count: o, type: P.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(e2.A, {
                    className: tl.S6,
                    guild: l,
                    analyticsLocation: {
                        page: ec.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: ec.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: e3.XD.CUSTOM,
                    size: e3.lO.LARGE,
                    icon: (0, n.jsx)(x._, {
                        className: tl.Ng,
                        size: "sm",
                        color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                    }),
                }),
            ],
        });
}
var ti = l(97808),
    ts = l(778712),
    tr = l(463930),
    to = l(730134),
    ta = l(233824),
    td = l(191663),
    tu = l(854627),
    tc = l(696451),
    tm = l(317525),
    tp = l(287809),
    tg = l(562153),
    tf = l(253400),
    th = l(985827);
let tx = tf.Ay.getEnableHardwareAcceleration() ? ti.Js : to.A;
function tA(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, r.bG)([tm.A], () => tm.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([tp.default], () => tp.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([tc.Ay], () => (null != o ? tc.Ay.getMember(t, o) : void 0), [o, t]),
        d = a?.premiumSince != null,
        u = (0, r.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: f,
        } = (0, tu.A)({ userId: s?.id, guildId: t, size: ts._3.SIZE_40, animateOnHover: !u });
    return null == l || null == a || null == s
        ? null
        : (0, n.jsxs)("div", {
              className: th.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: th.FS,
                      children: [
                          (0, n.jsx)(E.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              children: L.intl.string(d ? D.default.KSWK1U : D.default.XXXX5l),
                          }),
                          (0, n.jsx)(E.E, {
                              variant: "body-sm/normal",
                              children: L.intl.format(d ? D.default["7fWTg4"] : D.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, ta.K4)({
                                          guildId: t,
                                          location: {
                                              section: ec.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: ec.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !d &&
                      (0, n.jsx)(td.V, {
                          avatar: (0, n.jsx)(tx, {
                              ...f,
                              user: s,
                              src: p,
                              avatarDecoration: m,
                              size: ts._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(tr.g, {
                              variant: "body-md/semibold",
                              name: tg.Ay.getName(t, null, s),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: g()(th.Qs, th.cX),
                          message: L.intl.string(L.t["6OSasb"]),
                          decorations: (0, n.jsx)(x._, {
                              color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                              className: th.$J,
                          }),
                      }),
                  (0, n.jsx)(e2.A, {
                      guild: l,
                      className: th.Qs,
                      analyticsLocation: {
                          page: ec.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: ec.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: e3.XD.BRAND,
                      size: e3.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(x._, { className: th.Ng, color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tE = l(559201),
    tv = l(949744),
    tI = l(811091),
    tb = l(492349),
    tj = l(776579),
    ty = l(5377),
    t_ = l(967144),
    tS = l(262001),
    tN = l(736541);
function tw(e) {
    let t,
        { boost: l, phase: i, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: d,
        } = (function (e) {
            let t = new Date(tI.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: i,
                } = (0, r.cf)(
                    [tc.Ay],
                    () => {
                        let t = tc.Ay.getMember(e.guildId, e.userId);
                        return {
                            username:
                                tc.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? L.intl.string(L.t["30mdIx"]),
                            roleColor: t?.colorString ?? null,
                            roleColorStrings: t?.colorStrings ?? null,
                        };
                    },
                    [e],
                );
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: i };
        })(l),
        u = (0, t_.gn)(l.guildId, l.userId, d ?? null),
        c = new Date(s),
        { Icon: m, color: p } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: x._, color: N.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tb.x, color: N.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tb.x, color: N.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i);
    return (0, n.jsxs)("div", {
        className: tS.og,
        children: [
            (0, n.jsx)(m, { color: p, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tS.x$,
                children: [
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: "body-md/medium",
                        lineClamp: 1,
                        className: tS.IP,
                        children: (0, n.jsx)(eT.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(tr.g, {
                                variant: "body-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: u,
                            }),
                        }),
                    }),
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: "body-md/normal",
                        className: tS.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return L.intl.string(D.default.plwH8d);
                                case "expiring":
                                    return L.intl.formatToPlainString(D.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return L.intl.string(D.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(tj.A, {
                timestamp: c,
                timestampFormat:
                    0 === (t = (0, ty.m_)(c, new Date()))
                        ? `[${L.intl.string(L.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${L.intl.string(L.t.ZdDLO0)}]`
                          : "L",
                className: g()(tN["body-xs/medium"], tS.vE),
            }),
        ],
    });
}
var tC = l(834205);
function tR(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, r.yK)([eX.A], () => eX.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [l] = i.useState(() => Date.now()),
                n = i.useMemo(
                    () =>
                        t
                            .map((e) => {
                                let t =
                                        e.ended || (null != e.endsAt && e.endsAt.getTime() <= l)
                                            ? { phase: "expired" }
                                            : null != e.endsAt && e.endsAt.getTime() - l <= 2592e5
                                              ? { phase: "expiring", endsAt: e.endsAt }
                                              : { phase: "gave" },
                                    n = (function (e, t) {
                                        switch (t.phase) {
                                            case "gave":
                                                return tI.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tI.default.extractTimestamp(e.id);
                                        }
                                    })(e, t);
                                return "expiring" === t.phase
                                    ? { boost: e, phase: "expiring", sortKey: n, endsAt: t.endsAt }
                                    : { boost: e, phase: t.phase, sortKey: n };
                            })
                            .sort((e, t) => t.sortKey - e.sortKey)
                            .slice(0, void 0),
                    [t, void 0, l],
                ),
                s = (0, r.yK)(
                    [tc.Ay],
                    () => {
                        let t = new Set();
                        return (
                            n.forEach((l) => {
                                let { boost: n } = l;
                                null == tc.Ay.getMember(e, n.userId) && t.add(n.userId);
                            }),
                            Array.from(t)
                        );
                    },
                    [e, n],
                );
            i.useEffect(() => {
                s.length > 0 && s.forEach((t) => tv.A.requestMember(e, t));
            }, [e, s]);
            let o = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = i.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                d = (0, r.bG)([eX.A], () => null != eX.A.getLastFetchedAtForGuild(e), [e]);
            return (
                i.useEffect(() => {
                    (o === a && d) || (0, tE.VU)(e, { includeEnded: !0 });
                }, [e, o, a, d]),
                n
            );
        })(t);
    return 0 === l.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(A.D, {
                      className: tC.w,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: L.intl.string(L.t.yM9Krm),
                  }),
                  (0, n.jsx)(f.Ip, {
                      className: tC.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(tw, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tT = l(726724);
function tk(e) {
    let { guildId: t } = e,
        l = e1("member");
    return (0, n.jsxs)("div", {
        className: tT.CG,
        children: [(0, n.jsx)(ep, { slot: l, guildId: t }), (0, n.jsx)(tA, { guildId: t })],
    });
}
function tL(e) {
    let { children: t, title: l } = e,
        s = i.useRef(null),
        r = i.useRef(null),
        [o, a] = i.useState({ left: !1, right: !1 });
    return (
        i.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let t = 0;
            function l() {
                let l = Math.abs(e.scrollLeft);
                s.current?.style.setProperty("--custom-level-scroll-offset", `${-e.scrollLeft}px`);
                let n = t > 1,
                    i = n && l > 1,
                    r = n && l < t - 1;
                a((e) => (e.left === i && e.right === r ? e : { left: i, right: r }));
            }
            function n() {
                ((t = e.scrollWidth - e.clientWidth),
                    s.current?.style.setProperty(
                        "--custom-level-scrollbar-height",
                        `${e.offsetHeight - e.clientHeight}px`,
                    ),
                    l());
            }
            let i = new ResizeObserver(n);
            return (
                i.observe(e),
                e.addEventListener("scroll", l, { passive: !0 }),
                n(),
                () => {
                    (i.disconnect(), e.removeEventListener("scroll", l));
                }
            );
        }, []),
        (0, n.jsxs)("div", {
            ref: s,
            className: g()(tT.SE, { [tT.j$]: o.left, [tT.QQ]: o.right }),
            children: [
                (0, n.jsx)(f.Ip, {
                    ref: r,
                    className: tT.dU,
                    orientation: "auto",
                    scrollbarGutter: !1,
                    fade: !0,
                    disableFocusRingScope: !0,
                    role: "region",
                    "aria-label": l,
                    tabIndex: 0,
                    children: t,
                }),
                (0, n.jsx)("div", {
                    className: tT.YP,
                    "aria-hidden": !0,
                    children: (0, n.jsx)("div", {
                        className: tT.pw,
                        children: i.Children.map(t, () => (0, n.jsx)("div", { className: tT.GX })),
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
        y,
        _,
        S,
        { guildId: N, powerupListingId: w } = e;
    ((t = (0, j.C$)(N, "useLoadGuildPowerups")),
        i.useEffect(() => {
            t && (0, X.z9)(N);
        }, [N, t]),
        i.useEffect(() => {
            ((0, J.AK)(N), (0, J.Xd)(N));
        }, [N]));
    let C = (0, j.C$)(N, "GuildPowerupsOverview");
    (0, H.Pq)(N);
    let R = (0, r.bG)([W.A], () => W.A.getStateForGuild(N)),
        T = (0, m.A)(N),
        k = i.useRef(!1),
        { shouldShow: O, modalConfig: U } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(N))),
            (o = (0, m.A)(N) ?? !1),
            (a = (0, r.bG)([W.A], () => W.A.getStateForGuild(N))),
            (d = a?.allPowerups?.[F.d0]),
            (p = (0, z.E)(N, "GuildPowerupsOverview")),
            (y = o && p && null != s),
            (_ = i.useMemo(
                () =>
                    y
                        ? (function (e) {
                              let t = e?.storeRemovalDate;
                              if (null == e || null == t) return null;
                              let l = (0, $.A)(t);
                              return {
                                  dismissibleContent: K.M.GUILD_THEME_POWERUP_ROLLBACK_MODAL,
                                  header: `${e.title} ${L.intl.formatToPlainString(D.default["6e2ry1"], { dateString: l })}`,
                                  bodies: [
                                      L.intl.formatToPlainString(D.default.jd8fki, {
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
                [y, d],
            )),
            { shouldShow: y, modalConfig: _ }),
        V = (0, v.A)(),
        Y = null == w && !V && null != U,
        ee = [];
    O && Y && ee.push(U.dismissibleContent);
    let [et, el] = (0, b.kn)(ee),
        en =
            ((S = (0, r.bG)([W.A], () => W.A.getStateForGuild(N))),
            i.useMemo(
                () =>
                    q.reduce((e, t) => {
                        let l = S?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== P.o9.PERK) return e;
                                    let l = Z[t.skuId];
                                    return (null == l || ((e[l] ??= []), e[l].push(t)), e);
                                }, {});
                            for (let e of t) {
                                if (e.type === P.o9.LEVEL) {
                                    n.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = Z[e.skuId];
                                if (null != t) {
                                    let e = i[t];
                                    if (void 0 !== e) {
                                        let l = Q[t];
                                        (e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0));
                                    }
                                    continue;
                                }
                                n.push({ type: "singlePerk", powerup: e, badge: P.ys[e.skuId] });
                            }
                            return (
                                l && e === P.o9.PERK && n.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === F.SL),
                                        l = e.findIndex(
                                            (e) =>
                                                "multiPerk" === e.type &&
                                                ("guildTagsBadgePacks" === e.group || (e.group, !1)),
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [n] = t.splice(l, 1),
                                            i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === F.SL);
                                        return (t.splice(i + 1, 0, n), t);
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === F.d0);
                                        if (t <= 0) return e;
                                        let l = [...e],
                                            [n] = l.splice(t, 1);
                                        return (l.unshift(n), l);
                                    })(n),
                                )
                            );
                        })(t, l, C);
                        return (e.push({ type: t, listings: n }), e);
                    }, []),
                [S?.powerupCatalog, C],
            )),
        ei = eP(
            en
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            N,
        );
    return (i.useEffect(() => {
        if (null != w && !k.current)
            for (let e of en)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === w) {
                        ((0, eG.A)(N, t.powerup), (k.current = !0));
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === w || t.powerups.some((e) => e.skuId === w))) {
                        k.current = !0;
                        let e = ei[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(P.G0);
                                let t = e.pathname + e.search + e.hash;
                                ((0, u.bG)(t), (k.current = !1));
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && "0" === w) {
                        ((0, G.A)({ guildId: N, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }), (k.current = !0));
                        return;
                    }
                }
    }, [N, w, en, ei]),
    i.useEffect(() => {
        if (null != et && null != U) {
            let e = {
                onCloseCallback: () => {
                    el(eM.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${et}`,
            };
            (0, h.mM)(async () => {
                let { default: e } = await Promise.all([l.e(239592), l.e(586618)]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: U, markAsDismissed: el, ...t });
            }, e);
        }
    }, [N, et, el, U]),
    R?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tT.kL,
              children: [
                  (0, n.jsxs)(M.A, {
                      className: tT.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(M.A.ChannelIcon, { icon: x._, "aria-hidden": !0 }),
                          (0, n.jsx)(M.A.Title, { children: L.intl.string(D.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tT.hQ,
                      children: [
                          (0, n.jsx)(f.Ip, {
                              className: tT.DO,
                              fade: !0,
                              children: en.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case P.o9.LEVEL:
                                                  return {
                                                      title: L.intl.string(D.default["TXY/b0"]),
                                                      description: L.intl.string(D.default.aJv4PB),
                                                  };
                                              case P.o9.PERK:
                                                  return {
                                                      title: L.intl.string(D.default.TV3Vm8),
                                                      description: L.intl.string(D.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = l.map((e, t) => {
                                          switch (e.type) {
                                              case "singleLevel":
                                                  return (0, n.jsx)(
                                                      "div",
                                                      {
                                                          className: tT.lQ,
                                                          role: "group",
                                                          "aria-label": e.powerup.title,
                                                          children: (0, n.jsx)(eR, {
                                                              guildId: N,
                                                              index: t,
                                                              powerup: e.powerup,
                                                              nextPowerup: l[t + 1]?.powerup,
                                                          }),
                                                      },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "singlePerk":
                                                  return (0, n.jsx)(
                                                      e5,
                                                      { guildId: N, powerup: e.powerup, badge: e.badge },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "multiPerk":
                                                  return (0, n.jsx)(
                                                      eU,
                                                      { guildId: N, group: e.group, powerups: e.powerups },
                                                      `powerup-group-${e.group}`,
                                                  );
                                              case "gameServer":
                                                  return (0, n.jsx)(B, { guildId: N }, "powerup-game-server");
                                          }
                                      });
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tT.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tT.kn,
                                                  children: [
                                                      (0, n.jsx)(A.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, n.jsx)(E.E, { variant: "body-sm/normal", children: s }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: g()(tT.qJ, tT.kn),
                                                  children:
                                                      t === P.o9.LEVEL ? (0, n.jsx)(tL, { title: i, children: r }) : r,
                                              }),
                                          ],
                                      },
                                      `section-${t}`,
                                  );
                              }),
                          }),
                          (0, n.jsxs)("div", {
                              className: tT.so,
                              children: [
                                  T
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)(tn, { guildId: N }), (0, n.jsx)(e8, { guildId: N })],
                                        })
                                      : (0, n.jsx)(tk, { guildId: N }),
                                  (0, n.jsx)(tR, { guildId: N }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tG(e) {
    let { guildId: t, powerupListingId: l } = e,
        i = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, r.bG)([d.A], () => d.A.hasLoadedExperiments),
        g = (0, m.A)(t),
        f = (0, u.PR)(),
        h = !p || null == g || null == i,
        x = (0, o.Ay)(null != f ? f : []);
    return ((0, a.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: x.analyticsLocations },
        },
        { disableTrack: h },
    ),
    h)
        ? null
        : (0, n.jsx)(tD, { guildId: t, powerupListingId: l });
}
