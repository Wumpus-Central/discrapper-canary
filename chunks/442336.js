(l.r(t), l.d(t, { default: () => tP }));
var n = l(477900),
    i = l(582128),
    s = l(131937),
    r = l(17928),
    o = l(688810),
    a = l(139286),
    d = l(736056),
    u = l(976860),
    c = l(71393),
    m = l(363487);
(l(321073), l(323874), l(14289), l(35956));
var p = l(503698),
    g = l.n(p),
    f = l(364522),
    h = l(192308),
    x = l(104510),
    A = l(534514),
    v = l(834730),
    E = l(942857),
    I = l(793574),
    b = l(131607),
    j = l(831617),
    y = l(289704),
    _ = l(821609),
    S = l(612400),
    N = l(661531);
function w(e) {
    return e
        ? { textColor: "text-default", iconColor: N.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: N.A.colors.TEXT_MUTED };
}
var C = l(475669),
    T = l(948134),
    L = l(904629);
function R(e) {
    let t = (0, r.bG)([C.A], () => C.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, L.k)(e);
    }, [t?.entitlements]);
}
var k = l(105292),
    D = l(959456),
    G = l(144977),
    P = l(628049),
    O = l(568065),
    U = l(135570),
    V = l(929729),
    B = l(517826);
function M(e) {
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
            (l = R(s)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: k.intl.string(D.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: m } = (0, T.A)(),
        { textColor: p } = w(u?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(S.NI, {
              label: k.intl.string(U.default["B3OfL/"]),
              badge: O.ys[P.W5],
              isActive: u?.type === "active",
              isWarning: u?.type === "expiring",
              onClick: () => (0, G.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, n.jsx)("div", {
                      className: g()(V.ZS, B.Sl),
                      children: (0, n.jsx)(y.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: V.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, n.jsx)(S.Ft, {
                      title: k.intl.string(U.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, n.jsx)(S.$L, { cost: d ?? 0, costDecorator: "+", status: u }),
                      children: (0, n.jsx)(v.E, {
                          className: B.h_,
                          color: p,
                          variant: "body-sm/medium",
                          children: k.intl.format(U.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, n.jsx)(S.kd, {
                      children: (0, n.jsx)(_.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? k.intl.string(U.default.PuvU5b)
                                  : k.intl.string(U.default.b62EHM),
                          onClick: (e) => {
                              (e.stopPropagation(),
                                  (0, G.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }));
                          },
                      }),
                  }),
              ],
          });
}
var W = l(742589),
    F = l(645619),
    K = l(512750),
    $ = l(554146),
    z = l(939981),
    X = l(456124),
    H = l(914732),
    J = l(498480),
    Q = l(868652);
l(667532);
let Z = { guildTagsBadgePacks: [K.tv, K.OJ, K.Ht, K.jF] },
    q = Object.entries(Z).reduce((e, t) => {
        let [l, n] = t;
        for (let t of n) e[t] = l;
        return e;
    }, {}),
    Y = [O.o9.LEVEL, O.o9.PERK];
var ee = l(877624),
    et = l(408278),
    el = l(789645),
    en = l(406810),
    ei = l(28863),
    es = l(807098),
    er = l(637706),
    eo = l(788883),
    ea = l(7667),
    ed = l(705982);
function eu(e) {
    let { componentId: t, promotionId: l, banner: i, onDismiss: s } = e,
        r = (0, es.T)(i.asset),
        { countdownText: o, terms: a } = (0, ea.A)(l),
        d = (0, er.C)(i.helpArticle, ""),
        u = [i.body, a].filter((e) => "" !== e).join(" ");
    return (0, n.jsxs)("div", {
        className: ed.kL,
        children: [
            (0, n.jsx)(eo.A, {
                componentType: ee.C.GUILD_BOOST_TAB_BANNER,
                componentId: t,
                promotionId: l,
                dismissibleContent: $.M.GUILD_BOOST_TAB_BANNER,
            }),
            (0, n.jsx)("div", {
                className: g()(ed.X8, "theme-dark"),
                children: (0, n.jsx)(et.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.WAI6xu),
                    onClick: s,
                    icon: el.P,
                }),
            }),
            null != r && "" !== r && (0, n.jsx)("img", { src: r, className: ed.LY, alt: "" }),
            (0, n.jsxs)("div", {
                className: ed.FS,
                children: [
                    null != o &&
                        (0, n.jsxs)("div", {
                            className: ed.qW,
                            children: [
                                (0, n.jsx)(en.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: ed.y,
                                }),
                                (0, n.jsx)(v.E, { variant: "body-xs/semibold", color: "text-default", children: o }),
                            ],
                        }),
                    (0, n.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: i.header }),
                    (0, n.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [
                            u,
                            null != d &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        "" !== u && " ",
                                        (0, n.jsx)(ei.Anchor, { className: ed.nf, href: d.url, children: d.linkText }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ec = l(182859),
    em = l(652215);
let ep = { page: em.liQ.GUILD_POWERUPS_OVERVIEW, section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR, object: em.ZSU.CARD };
function eg(e) {
    let { slot: t, guildId: l } = e,
        { content: i, variant: s } = t;
    if (null == i) return null;
    switch (i.kind) {
        case "banner":
            return (0, n.jsx)(eu, {
                componentId: i.componentId,
                promotionId: i.promotionId,
                banner: i.banner,
                onDismiss: i.onDismiss,
            });
        case "video":
            return (0, n.jsx)(ec.A, {
                guildId: l,
                variant: s,
                analyticsLocation: ep,
                onDismiss: i.onDismiss ?? void 0,
            });
    }
}
var ef = l(64051),
    eh = l(972919),
    ex = l(724677),
    eA = l(210273),
    ev = l(998418),
    eE = l(722523),
    eI = l(294384),
    eb = l(813847),
    ej = l(224331);
function ey(e) {
    let { guildId: t, powerup: l, className: i } = e,
        s = (0, ev.Ay)(t, l),
        r = s.type !== O.b_.LEVEL_ACTIVATED,
        o = (0, eI.Ay)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, eb.e)(l, s, o);
    return (0, n.jsx)(S.$L, { status: a, cost: r ? l.cost : void 0, className: i });
}
function e_(e) {
    let { guildId: t, powerup: l, badge: i, className: s, onHover: r, children: o } = e,
        a = (0, ev.Ay)(t, l),
        d = a.type !== O.b_.INACTIVE,
        u = a.sourceEntitlement?.ends_at != null,
        c = (0, eI.Ay)(t, l, "GuildPowerupCard"),
        m = (0, ej.A)(t, l);
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
var eS = l(867060),
    eN = l(508155),
    ew = l(695578);
function eC(e) {
    let t,
        { active: l, nextActive: i, position: s, index: r } = e,
        o = [ef.v, eh.w, ex.H][r] ?? ef.v;
    return (
        (t = l && !1 !== i ? O.z0.FULL : l && !1 === i ? O.z0.HALF : O.z0.NONE),
        (0, n.jsxs)("div", {
            className: ew.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(ew.progress, ew[s], ew[t]) }),
                (0, n.jsx)("div", {
                    className: g()(ew.boostContainer, B.JD, { [ew.boostContainerActive]: l, [B.vu]: l }),
                    children: (0, n.jsx)(o, { alt: "", ariaHidden: !0, size: 24 }),
                }),
            ],
        })
    );
}
function eT(e) {
    let { isActive: t, index: l } = e,
        { textColor: s, iconColor: r } = w(t),
        o = i.useMemo(() => {
            let e = eN.t[l];
            if (null == e) return [];
            let t = e.tier === em.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, eA.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: ew.perkRow,
                        children: [
                            (0, n.jsx)(i, { color: r, size: "sm" }),
                            (0, n.jsx)(v.E, {
                                className: ew.perkText,
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
        className: ew.perkRowContainer,
        children: [
            o,
            (0, n.jsx)("div", {
                className: ew.perkRow,
                children: (0, n.jsx)(v.E, {
                    color: s,
                    variant: "body-sm/normal",
                    children: k.intl.string(D.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eL(e) {
    let t,
        { guildId: l, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, ev.Ay)(l, r),
        d = (0, ev.Ay)(l, o),
        u = a.type !== O.b_.INACTIVE,
        c = d.type !== O.b_.INACTIVE,
        m = a.type === O.b_.TIER_OVERRIDE_ACTIVATED,
        [p, g] = i.useState(void 0);
    ((0, eS.A)(p), (t = 0 === s ? O.At.START : null == o ? O.At.END : O.At.MIDDLE));
    let { textColor: f } = w(u);
    return (0, n.jsxs)(e_, {
        guildId: l,
        powerup: r,
        className: ew.card,
        children: [
            (0, n.jsx)(eC, { index: s, position: t, active: u, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(S.Ft, {
                title: r.title,
                textColor: f,
                footer: !m && (0, n.jsx)(ey, { className: ew.footer, guildId: l, powerup: r }),
                children: (0, n.jsx)(eT, { isActive: u, index: s }),
            }),
            !m && (0, n.jsx)(S.kd, { children: (0, n.jsx)(eE.Ay, { guildId: l, powerup: r, onError: g }) }),
        ],
    });
}
var eR = l(866665),
    ek = l(775602),
    eD = l(468689),
    eG = l(685073),
    eP = l(915667);
function eO(e, t) {
    let s = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([F.A], () => F.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, eG.Rg)(e);
        });
    return i.useMemo(() => {
        let i = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, hasServerTags: r } = e,
                              o = k.intl.string(D.default.KC9HRW),
                              a = k.intl.string(D.default.GJiSmP),
                              d = s?.[K.SL],
                              u = k.intl.string(D.default["/egwJA"]),
                              c = r ? void 0 : k.intl.string(D.default.W6Vwn3),
                              m = r ? void 0 : k.intl.string(D.default.lvk1Gc),
                              p = r ? k.intl.string(D.default["9CfkLO"]) : k.intl.string(k.t["+7XY31"]),
                              g = r ? "secondary" : "expressive",
                              f = i
                                  ? () => {
                                        (r
                                            ? eD.A.open(t, em.BEX.TAG, em.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != d && (0, eP.A)(t, d),
                                            (0, h.closeAllModals)());
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, h.openModalLazy)(
                                      async () => {
                                          let { default: s } = await Promise.all([l.e("991051"), l.e("875295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: k.intl.string(D.default.BBRFRd),
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
var eU = l(625361);
function eV(e) {
    let { guildId: t, group: l, powerups: s } = e,
        [o, a] = i.useState(!1),
        d = (0, r.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        u = eO([l], t)[l],
        c = !d && o ? u?.image?.animatedUrl : u?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                i = (0, ev.jJ)(l, n),
                s = i.some((e) => e.type !== O.b_.INACTIVE);
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
                : s && (t = { type: "active", statusText: k.intl.string(D.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === O.b_.POWERUP_ACTIVATED ? e + n.cost : e;
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
            (0, n.jsx)("img", { alt: "", src: c, className: eU.S }),
            (0, n.jsx)(S.Ft, {
                title: u.title,
                textColor: p,
                footer: (0, n.jsx)(S.$L, { status: g, cost: f, costDecorator: h }),
                children: (0, n.jsx)(v.E, {
                    className: eU.h,
                    color: p,
                    variant: "body-sm/normal",
                    children: u.description,
                }),
            }),
            (0, n.jsx)(S.kd, {
                children:
                    u?.viewCtaTooltip != null
                        ? (0, n.jsx)(eR.m, {
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
var eB = l(403362),
    eM = l(639060),
    eW = l(49999),
    eF = l(425138);
function eK(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: eF.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(v.E, {
                color: "text-overlay-light",
                variant: "body-md/semibold",
                children: k.intl.string(D.default.diMhWc),
            }),
            (0, n.jsx)(v.E, {
                color: "text-overlay-light",
                variant: "body-sm/normal",
                children: k.intl.string(D.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: eF.VN,
                children: (0, n.jsx)(et.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        t(eW.i.USER_DISMISS);
                    },
                    icon: el.P,
                }),
            }),
        ],
    });
}
var e$ = l(972213),
    ez = l(695366),
    eX = l(168691);
function eH(e) {
    let { notificationConfig: t, markAsDismissed: l } = e;
    return (0, n.jsxs)("div", {
        className: eX.kL,
        children: [
            (0, n.jsx)("div", {
                className: eX.VN,
                children: (0, n.jsx)(et.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        l(eW.i.USER_DISMISS);
                    },
                    icon: e$.XLargeIcon,
                }),
            }),
            (0, n.jsx)(ez.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eX.Kk }),
            (0, n.jsx)(v.E, { variant: "body-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, n.jsx)(v.E, { variant: "body-sm/normal", children: t.description }),
        ],
    });
}
var eJ = l(859241),
    eQ = l(864310),
    eZ = l(620019);
function eq(e) {
    let { guildId: t, powerupNames: l, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: d,
        } = (function (e, t) {
            let { spent: l } = (0, eQ.A)(e),
                n = (0, r.bG)([eJ.A], () => eJ.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = l - i.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return i.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: k.intl.string(D.default.n5hQhc),
                              description: k.intl.formatToPlainString(D.default.iAaAiG, {
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
              className: eZ.kL,
              children: [
                  (0, n.jsx)(ez.E, { color: N.A.colors.TEXT_FEEDBACK_WARNING, className: eZ.Kk }),
                  (0, n.jsx)(v.E, { variant: "body-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, n.jsxs)(v.E, {
                      variant: "body-sm/normal",
                      children: [
                          d,
                          s?.map((e, t) =>
                              (0, n.jsx)(
                                  v.E,
                                  {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      className: eZ.$e,
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
var eY = l(826673),
    e0 = l(549996),
    e1 = l(412260);
function e9(e) {
    let t = (function () {
            let e = (0, e0.c)(ee.C.GUILD_BOOST_TAB_BANNER),
                t =
                    null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind
                        ? e.properties.properties.guildBoostTabBanner
                        : null,
                [l, n] = (0, b.Cc)(null != t ? $.M.GUILD_BOOST_TAB_BANNER : null, e?.promotionId ?? "", void 0, !0),
                s = i.useCallback(() => {
                    n(eW.i.USER_DISMISS);
                }, [n]),
                { isDismissed: r } = (0, eY.u$)($.M.GUILD_BOOST_TAB_BANNER, e?.promotionId ?? "");
            return null == e || null == t || l !== $.M.GUILD_BOOST_TAB_BANNER
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
        l = (0, r.bG)([e1.A], () => e1.A.isFetchingActivePromotions),
        n = "admin" !== e || t.isBannerEligible || l ? [] : [$.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [s, o] = (0, b.kn)(n),
        a = i.useCallback(() => {
            o(eW.i.USER_DISMISS);
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
          ? s === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD && (d = { kind: "video", onDismiss: a })
          : (d = { kind: "video", onDismiss: null });
    let u = l || t.isBannerEligible || d?.kind === "video";
    return { variant: e, content: d, isReserved: u };
}
var e6 = l(463080);
function e8(e) {
    let { text: t } = e;
    return (0, n.jsx)("div", {
        className: e6.ac,
        children: (0, n.jsx)(v.E, { variant: "body-sm/normal", children: t }),
    });
}
function e2(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(em.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: k.intl.string(D.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                l =
                    ((t = (0, r.bG)([F.A], () => F.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, L.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eB.Vq);
                    }, [t])),
                n = R(e),
                s = l.length > 0 || n.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? k.intl.string(U.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                d = [];
            return (
                l.some((e) => e.skuId === K.FB) && d.push(k.intl.string(D.default.Sfr0Jw)),
                n.length > 0 && d.push(k.intl.string(U.default.wiungr)),
                { shouldShow: s, expiringPowerups: l, expiringPowerupNames: a, warnings: d }
            );
        })(t),
        o = (function (e) {
            let t = (0, eM.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [n, i] = (0, b.ww)(l, e);
            return { shouldShow: null != t && n === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = e9("admin"),
        d = (function (e) {
            let t = [];
            e || t.push($.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, b.kn)(t);
            return { shouldShow: null != l && l === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: n };
        })(s.shouldShow || o.shouldShow || a.isReserved);
    return l.shouldShow || s.shouldShow || o.shouldShow || d.shouldShow || null != a.content
        ? (0, n.jsxs)("div", {
              className: e6.kL,
              children: [
                  (0, n.jsx)(v.E, {
                      tag: "div",
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: k.intl.string(D.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(e8, { text: l.text }),
                  s.shouldShow &&
                      (0, n.jsx)(eq, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, n.jsx)(eH, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  (0, n.jsx)(eg, { slot: a, guildId: t }),
                  d.shouldShow && (0, n.jsx)(eK, { markAsDismissed: d.markAsDismissed }),
              ],
          })
        : null;
}
var e5 = l(72377);
function e4(e) {
    let { guildId: t, powerup: l, badge: s } = e,
        [r, o] = i.useState(void 0);
    (0, eS.A)(r);
    let [a, d] = i.useState(!1),
        { textColor: u } = w((0, ev.Ay)(t, l).type !== O.b_.INACTIVE);
    return (0, n.jsxs)(e_, {
        onHover: (e) => d(e),
        guildId: t,
        powerup: l,
        badge: s,
        children: [
            (0, n.jsx)(e5.l, { className: B.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(S.Ft, {
                title: l.title,
                textColor: u,
                footer: (0, n.jsx)(ey, { guildId: t, powerup: l }),
                children: (0, n.jsx)(v.E, {
                    className: B.h_,
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
    e7 = l(944304),
    te = l(975571),
    tt = l(380572);
function tl(e) {
    let { count: t, type: l } = e,
        i = (function (e, t) {
            switch (t) {
                case O.yG.AVAILABLE:
                    return k.intl.formatToPlainString(D.default.BdRXZA, { boostCount: e });
                case O.yG.SPENT:
                    return k.intl.formatToPlainString(D.default.xvgIVG, { boostCount: e });
                case O.yG.TOTAL:
                    return k.intl.string(D.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: tt.k,
        role: "img",
        "aria-label": `${t}, ${i}`,
        children: [
            (0, n.jsxs)("div", {
                className: tt.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(x._, {
                        size: "sm",
                        color: l !== O.yG.AVAILABLE ? N.A.colors.TEXT_MUTED : N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, n.jsx)(A.D, {
                        color: l !== O.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "body-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(v.E, { "aria-hidden": "true", color: "text-muted", variant: "body-sm/normal", children: i }),
        ],
    });
}
var tn = l(690118);
function ti(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: s, total: o } = (0, eQ.A)(t);
    if (null != l)
        return (0, n.jsxs)("div", {
            className: tn.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: tn.N1,
                    children: [
                        (0, n.jsx)(v.E, {
                            tag: "div",
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: k.intl.string(D.default.hjvcLO),
                        }),
                        (0, n.jsx)(v.E, {
                            className: tn.C2,
                            variant: "body-sm/medium",
                            children: k.intl.format(D.default.fXE30d, {
                                helpDeskArticle: te.A.getArticleURL(em.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tn.hQ,
                    children: [
                        (0, n.jsx)(tl, { count: i, type: O.yG.AVAILABLE }),
                        (0, n.jsx)(tl, { count: s, type: O.yG.SPENT }),
                        (0, n.jsx)(tl, { count: o, type: O.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(e7.A, {
                    className: tn.S6,
                    guild: l,
                    analyticsLocation: {
                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: e3.XD.CUSTOM,
                    size: e3.lO.LARGE,
                    icon: (0, n.jsx)(x._, {
                        className: tn.Ng,
                        size: "sm",
                        color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
            ],
        });
}
var ts = l(97808),
    tr = l(778712),
    to = l(463930),
    ta = l(730134),
    td = l(464120),
    tu = l(483625),
    tc = l(854627),
    tm = l(696451),
    tp = l(317525),
    tg = l(287809),
    tf = l(562153),
    th = l(19575),
    tx = l(985827);
let tA = th.Ay.getEnableHardwareAcceleration() ? ts.Js : ta.A;
function tv(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, r.bG)([tp.A], () => tp.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([tg.default], () => tg.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([tm.Ay], () => (null != o ? tm.Ay.getMember(t, o) : void 0), [o, t]),
        d = a?.premiumSince != null,
        u = (0, r.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: f,
        } = (0, tc.A)({ userId: s?.id, guildId: t, size: tr._3.SIZE_40, animateOnHover: !u });
    return null == l || null == a || null == s
        ? null
        : (0, n.jsxs)("div", {
              className: tx.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: tx.FS,
                      children: [
                          (0, n.jsx)(v.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              children: k.intl.string(d ? D.default.KSWK1U : D.default.XXXX5l),
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "body-sm/normal",
                              children: k.intl.format(d ? D.default["7fWTg4"] : D.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, td.K4)({
                                          guildId: t,
                                          location: {
                                              section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: em.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !d &&
                      (0, n.jsx)(tu.V, {
                          avatar: (0, n.jsx)(tA, {
                              ...f,
                              user: s,
                              src: p,
                              avatarDecoration: m,
                              size: tr._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(to.g, {
                              variant: "body-md/semibold",
                              name: tf.Ay.getName(t, null, s),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: g()(tx.Qs, tx.cX),
                          message: k.intl.string(k.t["6OSasb"]),
                          decorations: (0, n.jsx)(x._, {
                              color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: tx.$J,
                          }),
                      }),
                  (0, n.jsx)(e7.A, {
                      guild: l,
                      className: tx.Qs,
                      analyticsLocation: {
                          page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: e3.XD.BRAND,
                      size: e3.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(x._, { className: tx.Ng, color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tE = l(820739),
    tI = l(860071),
    tb = l(935208),
    tj = l(492349),
    ty = l(606049),
    t_ = l(58703),
    tS = l(967144),
    tN = l(262001),
    tw = l(736541);
function tC(e) {
    let t,
        { boost: l, phase: i, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: d,
        } = (function (e) {
            let t = new Date(tb.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: i,
                } = (0, r.cf)(
                    [tm.Ay],
                    () => {
                        let t = tm.Ay.getMember(e.guildId, e.userId);
                        return {
                            username:
                                tm.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? k.intl.string(k.t["30mdIx"]),
                            roleColor: t?.colorString ?? null,
                            roleColorStrings: t?.colorStrings ?? null,
                        };
                    },
                    [e],
                );
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: i };
        })(l),
        u = (0, tS.gn)(l.guildId, l.userId, d ?? null),
        c = new Date(s),
        { Icon: m, color: p } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: x._, color: N.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tj.x, color: N.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tj.x, color: N.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i);
    return (0, n.jsxs)("div", {
        className: tN.og,
        children: [
            (0, n.jsx)(m, { color: p, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tN.x$,
                children: [
                    (0, n.jsx)(v.E, {
                        tag: "span",
                        variant: "body-md/medium",
                        lineClamp: 1,
                        className: tN.IP,
                        children: (0, n.jsx)(eR.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(to.g, {
                                variant: "body-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: u,
                            }),
                        }),
                    }),
                    (0, n.jsx)(v.E, {
                        tag: "span",
                        variant: "body-md/normal",
                        className: tN.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return k.intl.string(D.default.plwH8d);
                                case "expiring":
                                    return k.intl.formatToPlainString(D.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return k.intl.string(D.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(ty.A, {
                timestamp: c,
                timestampFormat:
                    0 === (t = (0, t_.m_)(c, new Date()))
                        ? `[${k.intl.string(k.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${k.intl.string(k.t.ZdDLO0)}]`
                          : "L",
                className: g()(tw["body-xs/medium"], tN.vE),
            }),
        ],
    });
}
var tT = l(834205);
function tL(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, r.yK)([eJ.A], () => eJ.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
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
                                                return tb.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tb.default.extractTimestamp(e.id);
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
                    [tm.Ay],
                    () => {
                        let t = new Set();
                        return (
                            n.forEach((l) => {
                                let { boost: n } = l;
                                null == tm.Ay.getMember(e, n.userId) && t.add(n.userId);
                            }),
                            Array.from(t)
                        );
                    },
                    [e, n],
                );
            i.useEffect(() => {
                s.length > 0 && s.forEach((t) => tI.A.requestMember(e, t));
            }, [e, s]);
            let o = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = i.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                d = (0, r.bG)([eJ.A], () => null != eJ.A.getLastFetchedAtForGuild(e), [e]);
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
                      className: tT.w,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: k.intl.string(k.t.yM9Krm),
                  }),
                  (0, n.jsx)(f.Ip, {
                      className: tT.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(tC, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tR = l(726724);
function tk(e) {
    let { guildId: t } = e,
        l = e9("member");
    return (0, n.jsxs)("div", {
        className: tR.CG,
        children: [(0, n.jsx)(eg, { slot: l, guildId: t }), (0, n.jsx)(tv, { guildId: t })],
    });
}
function tD(e) {
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
            className: g()(tR.SE, { [tR.j$]: o.left, [tR.QQ]: o.right }),
            children: [
                (0, n.jsx)(f.Ip, {
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
                (0, n.jsx)("div", {
                    className: tR.YP,
                    "aria-hidden": !0,
                    children: (0, n.jsx)("div", {
                        className: tR.pw,
                        children: i.Children.map(t, () => (0, n.jsx)("div", { className: tR.GX })),
                    }),
                }),
            ],
        })
    );
}
function tG(e) {
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
            t && (0, J.z9)(N);
        }, [N, t]),
        i.useEffect(() => {
            ((0, Q.AK)(N), (0, Q.Xd)(N));
        }, [N]));
    let C = (0, j.C$)(N, "GuildPowerupsOverview");
    (0, H.Pq)(N);
    let T = (0, r.bG)([F.A], () => F.A.getStateForGuild(N)),
        L = (0, m.A)(N),
        R = i.useRef(!1),
        { shouldShow: U, modalConfig: V } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(N))),
            (o = (0, m.A)(N) ?? !1),
            (a = (0, r.bG)([F.A], () => F.A.getStateForGuild(N))),
            (d = a?.allPowerups?.[K.d0]),
            (p = (0, X.E)(N, "GuildPowerupsOverview")),
            (y = o && p && null != s),
            (_ = i.useMemo(
                () =>
                    y
                        ? (function (e) {
                              let t = e?.storeRemovalDate;
                              if (null == e || null == t) return null;
                              let l = (0, z.A)(t);
                              return {
                                  dismissibleContent: $.M.GUILD_THEME_POWERUP_ROLLBACK_MODAL,
                                  header: `${e.title} ${k.intl.formatToPlainString(D.default["6e2ry1"], { dateString: l })}`,
                                  bodies: [
                                      k.intl.formatToPlainString(D.default.jd8fki, {
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
        B = (0, E.A)(),
        ee = null == w && !B && null != V,
        et = [];
    U && ee && et.push(V.dismissibleContent);
    let [el, en] = (0, b.kn)(et),
        ei =
            ((S = (0, r.bG)([F.A], () => F.A.getStateForGuild(N))),
            i.useMemo(
                () =>
                    Y.reduce((e, t) => {
                        let l = S?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== O.o9.PERK) return e;
                                    let l = q[t.skuId];
                                    return (null == l || ((e[l] ??= []), e[l].push(t)), e);
                                }, {});
                            for (let e of t) {
                                if (e.type === O.o9.LEVEL) {
                                    n.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = q[e.skuId];
                                if (null != t) {
                                    let e = i[t];
                                    if (void 0 !== e) {
                                        let l = Z[t];
                                        (e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0));
                                    }
                                    continue;
                                }
                                n.push({ type: "singlePerk", powerup: e, badge: O.ys[e.skuId] });
                            }
                            return (
                                l && e === O.o9.PERK && n.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === K.SL),
                                        l = e.findIndex(
                                            (e) =>
                                                "multiPerk" === e.type &&
                                                ("guildTagsBadgePacks" === e.group || (e.group, !1)),
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [n] = t.splice(l, 1),
                                            i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === K.SL);
                                        return (t.splice(i + 1, 0, n), t);
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === K.d0);
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
        es = eO(
            ei
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            N,
        );
    return (i.useEffect(() => {
        if (null != w && !R.current)
            for (let e of ei)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === w) {
                        ((0, eP.A)(N, t.powerup), (R.current = !0));
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === w || t.powerups.some((e) => e.skuId === w))) {
                        R.current = !0;
                        let e = es[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(O.G0);
                                let t = e.pathname + e.search + e.hash;
                                ((0, u.bG)(t), (R.current = !1));
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && w === P.W5) {
                        ((0, G.A)({ guildId: N, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }), (R.current = !0));
                        return;
                    }
                }
    }, [N, w, ei, es]),
    i.useEffect(() => {
        if (null != el && null != V) {
            let e = {
                onCloseCallback: () => {
                    en(eW.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${el}`,
            };
            (0, h.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("239592"), l.e("586618")]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: V, markAsDismissed: en, ...t });
            }, e);
        }
    }, [N, el, en, V]),
    T?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tR.kL,
              children: [
                  (0, n.jsxs)(W.A, {
                      className: tR.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(W.A.ChannelIcon, { icon: x._, "aria-hidden": !0 }),
                          (0, n.jsx)(W.A.Title, { children: k.intl.string(D.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tR.hQ,
                      children: [
                          (0, n.jsx)(f.Ip, {
                              className: tR.DO,
                              fade: !0,
                              children: ei.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case O.o9.LEVEL:
                                                  return {
                                                      title: k.intl.string(D.default["TXY/b0"]),
                                                      description: k.intl.string(D.default.aJv4PB),
                                                  };
                                              case O.o9.PERK:
                                                  return {
                                                      title: k.intl.string(D.default.TV3Vm8),
                                                      description: k.intl.string(D.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = l.map((e, t) => {
                                          switch (e.type) {
                                              case "singleLevel":
                                                  return (0, n.jsx)(
                                                      "div",
                                                      {
                                                          className: tR.lQ,
                                                          role: "group",
                                                          "aria-label": e.powerup.title,
                                                          children: (0, n.jsx)(eL, {
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
                                                      e4,
                                                      { guildId: N, powerup: e.powerup, badge: e.badge },
                                                      `powerup-${e.powerup.skuId}`,
                                                  );
                                              case "multiPerk":
                                                  return (0, n.jsx)(
                                                      eV,
                                                      { guildId: N, group: e.group, powerups: e.powerups },
                                                      `powerup-group-${e.group}`,
                                                  );
                                              case "gameServer":
                                                  return (0, n.jsx)(M, { guildId: N }, "powerup-game-server");
                                          }
                                      });
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tR.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tR.kn,
                                                  children: [
                                                      (0, n.jsx)(A.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, n.jsx)(v.E, { variant: "body-sm/normal", children: s }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: g()(tR.qJ, tR.kn),
                                                  children:
                                                      t === O.o9.LEVEL ? (0, n.jsx)(tD, { title: i, children: r }) : r,
                                              }),
                                          ],
                                      },
                                      `section-${t}`,
                                  );
                              }),
                          }),
                          (0, n.jsxs)("div", {
                              className: tR.so,
                              children: [
                                  L
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)(ti, { guildId: N }), (0, n.jsx)(e2, { guildId: N })],
                                        })
                                      : (0, n.jsx)(tk, { guildId: N }),
                                  (0, n.jsx)(tL, { guildId: N }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tP(e) {
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
        : (0, n.jsx)(tG, { guildId: t, powerupListingId: l });
}
