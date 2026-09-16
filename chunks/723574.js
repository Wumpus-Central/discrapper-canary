(l.r(t), l.d(t, { default: () => tU }));
var n = l(477900),
    i = l(582128),
    s = l(562708),
    r = l(17928),
    o = l(688810),
    a = l(139286),
    u = l(736056),
    d = l(976860),
    c = l(71393),
    m = l(363487);
(l(321073), l(323874), l(14289), l(35956));
var p = l(503698),
    g = l.n(p),
    x = l(192308),
    f = l(104510),
    A = l(364522),
    h = l(297264),
    I = l(834730),
    E = l(942857),
    v = l(793574),
    b = l(37537),
    j = l(131607),
    _ = l(831617),
    S = l(289704),
    w = l(821609),
    y = l(612400),
    C = l(661531);
function N(e) {
    return e
        ? { textColor: "text-default", iconColor: C.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: C.A.colors.TEXT_MUTED };
}
var T = l(475669),
    R = l(948134),
    G = l(904629);
function L(e) {
    let t = (0, r.bG)([T.A], () => T.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, G.k)(e);
    }, [t?.entitlements]);
}
var P = l(375708),
    k = l(25525),
    D = l(144977),
    O = l(628049),
    U = l(568065),
    V = l(394107),
    B = l(929729),
    M = l(517826);
function W(e) {
    let t,
        l,
        { guildId: s } = e,
        o = i.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, r.cf)([T.A], () => ({
            state: T.A.getStateForGuild(s),
            lowestGameServerCost: T.A.getLowestGameCostForGuild(s),
        })),
        d =
            ((t = (0, r.bG)([T.A], () => T.A.getStateForGuild(s)?.entitlements, [s])),
            (l = L(s)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: P.intl.string(k.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: m } = (0, R.A)(),
        { textColor: p } = N(d?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(y.NI, {
              label: P.intl.string(V.default["B3OfL/"]),
              badge: U.ys[O.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: s, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, n.jsx)("div", {
                      className: g()(B.ZS, M.Sl),
                      children: (0, n.jsx)(S.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: B.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, n.jsx)(y.Ft, {
                      title: P.intl.string(V.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, n.jsx)(y.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, n.jsx)(I.E, {
                          className: M.h_,
                          color: p,
                          variant: "text-sm/medium",
                          children: P.intl.format(V.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, n.jsx)(y.kd, {
                      children: (0, n.jsx)(w.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? P.intl.string(V.default.PuvU5b)
                                  : P.intl.string(V.default.b62EHM),
                          onClick: (e) => {
                              (e.stopPropagation(),
                                  (0, D.A)({ guildId: s, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }));
                          },
                      }),
                  }),
              ],
          });
}
var F = l(742589),
    K = l(645619),
    z = l(512750),
    $ = l(554146),
    X = l(545445),
    J = l(939981),
    H = l(914732),
    Q = l(498480),
    Z = l(868652);
l(667532);
let q = { guildTagsBadgePacks: [z.tv, z.OJ, z.Ht, z.jF] },
    Y = Object.entries(q).reduce((e, t) => {
        let [l, n] = t;
        for (let t of n) e[t] = l;
        return e;
    }, {}),
    ee = [U.o9.LEVEL, U.o9.PERK];
var et = l(877624),
    el = l(408278),
    en = l(789645),
    ei = l(406810),
    es = l(28863),
    er = l(807098),
    eo = l(637706),
    ea = l(788883),
    eu = l(7667),
    ed = l(705982);
function ec(e) {
    let { componentId: t, promotionId: l, banner: i, onDismiss: s } = e,
        r = (0, er.T)(i.asset),
        { countdownText: o, terms: a } = (0, eu.A)(l),
        u = (0, eo.C)(i.helpArticle, ""),
        d = [i.body, a].filter((e) => "" !== e).join(" ");
    return (0, n.jsxs)("div", {
        className: ed.kL,
        children: [
            (0, n.jsx)(ea.A, {
                componentType: et.C.GUILD_BOOST_TAB_BANNER,
                componentId: t,
                promotionId: l,
                dismissibleContent: $.M.GUILD_BOOST_TAB_BANNER,
            }),
            (0, n.jsx)("div", {
                className: g()(ed.X8, "theme-dark"),
                children: (0, n.jsx)(el.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": P.intl.string(P.t.WAI6xu),
                    onClick: s,
                    icon: en.P,
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
                                (0, n.jsx)(ei.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: ed.y,
                                }),
                                (0, n.jsx)(I.E, { variant: "text-xs/semibold", color: "text-default", children: o }),
                            ],
                        }),
                    (0, n.jsx)(I.E, { variant: "text-md/semibold", color: "text-default", children: i.header }),
                    (0, n.jsxs)(I.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [
                            d,
                            null != u &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        "" !== d && " ",
                                        (0, n.jsx)(es.Anchor, { className: ed.nf, href: u.url, children: u.linkText }),
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
let eg = { page: ep.liQ.GUILD_POWERUPS_OVERVIEW, section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR, object: ep.ZSU.CARD };
function ex(e) {
    let { slot: t, guildId: l } = e,
        { content: i, variant: s } = t;
    if (null == i) return null;
    switch (i.kind) {
        case "banner":
            return (0, n.jsx)(ec, {
                componentId: i.componentId,
                promotionId: i.promotionId,
                banner: i.banner,
                onDismiss: i.onDismiss,
            });
        case "video":
            return (0, n.jsx)(em.A, {
                guildId: l,
                variant: s,
                analyticsLocation: eg,
                onDismiss: i.onDismiss ?? void 0,
            });
    }
}
var ef = l(210273),
    eA = l(998418),
    eh = l(722523),
    eI = l(172218),
    eE = l(294384),
    ev = l(813847),
    eb = l(43105),
    ej = l(186111),
    e_ = l(621466),
    eS = l(49999);
function ew(e) {
    let { powerup: t, targetRef: l, isCardVisible: s } = e,
        o = (0, r.bG)([ej.A], () => ej.A.hasLayers()),
        a = (0, x.useHasAnyModalOpen)(),
        u =
            t.skuId === z.FB
                ? {
                      title: P.intl.string(k.default.YWo6VL),
                      body: P.intl.string(k.default.gXVvKc),
                      dismissibleContentType: $.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || o || !s || a || d.push(u.dismissibleContentType);
    let [c, m] = (0, j.kn)(d);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: l, topThreshold: n = 40, bottomThreshold: s = 60, enabled: r = !0 } = e;
        i.useEffect(() => {
            if (!r || t?.current == null) return;
            let e = null;
            function i(i) {
                if (t?.current == null || !(0, e_.vq)(i.target, HTMLElement)) return;
                let r = i.target;
                if (!r.contains(t.current)) return;
                let o = r.scrollTop;
                if (null === e) {
                    e = o;
                    return;
                }
                let a = o - e,
                    u = Math.abs(a);
                ((a < 0 && u > n) || (a > 0 && u > s)) && l();
            }
            return (
                document.addEventListener("scroll", i, { passive: !0, capture: !0 }),
                () => {
                    document.removeEventListener("scroll", i, { capture: !0 });
                }
            );
        }, [r, t, l, n, s]);
    })({
        targetRef: l,
        onShouldClose: i.useCallback(() => {
            m(eS.i.INDIRECT_ACTION);
        }, [m]),
        enabled: null != c,
    }),
    null == u || null == c)
        ? null
        : (0, n.jsx)(eb.A, {
              targetElementRef: l,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: u.title,
              body: u.body,
              onRequestClose: () => {
                  m(eS.i.USER_DISMISS);
              },
          });
}
var ey = l(224331);
function eC(e) {
    let { guildId: t, powerup: l, className: i } = e,
        s = (0, eA.Ay)(t, l),
        r = s.type !== U.b_.LEVEL_ACTIVATED,
        o = (0, eE.A)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, ev.e)(l, s, o);
    return (0, n.jsx)(y.$L, { status: a, cost: r ? l.cost : void 0, className: i });
}
function eN(e) {
    let { guildId: t, powerup: l, badge: s, className: r, onHover: o, children: a } = e,
        u = (0, m.A)(t),
        d = (0, eA.Ay)(t, l),
        c = d.type !== U.b_.INACTIVE,
        p = d.sourceEntitlement?.ends_at != null,
        g = (0, eE.A)(t, l, "GuildPowerupCard"),
        x = i.useRef(null),
        f = (0, ey.A)(t, l),
        [A, h] = i.useState(!1),
        I = (0, eI.K)(h, 1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(y.NI, {
                label: l.title,
                isActive: c,
                isWarning: p,
                badge: s,
                canRollback: g,
                onClick: f,
                onMouseOver: () => o?.(!0),
                onMouseLeave: () => o?.(!1),
                className: r,
                ref: (e) => {
                    ((x.current = e), (I.current = e));
                },
                children: a,
            }),
            !g && u && (0, n.jsx)(ew, { powerup: l, targetRef: x, isCardVisible: A }),
        ],
    });
}
var eT = l(867060),
    eR = l(508155),
    eG = l(695578);
function eL(e) {
    let t,
        { active: l, nextActive: i, position: s } = e;
    return (
        (t = l && !1 !== i ? U.z0.FULL : l && !1 === i ? U.z0.HALF : U.z0.NONE),
        (0, n.jsxs)("div", {
            className: eG.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(eG.progress, eG[s], eG[t]) }),
                (0, n.jsx)("div", {
                    className: g()(eG.boostContainer, M.JD, { [eG.boostContainerActive]: l, [M.vu]: l }),
                    children: (0, n.jsx)(f._, { size: "sm", color: C.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function eP(e) {
    let { isActive: t, index: l } = e,
        { textColor: s, iconColor: r } = N(t),
        o = (0, b.c)("GuildPowerupLevelBody"),
        a = i.useMemo(() => {
            let e = eR.t[l];
            if (null == e) return [];
            let t = e.tier === ep.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, ef.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: eG.perkRow,
                        children: [
                            (0, n.jsx)(i, { color: r, size: "sm" }),
                            (0, n.jsx)(I.E, {
                                className: eG.perkText,
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
    return (0, n.jsxs)("div", {
        className: eG.perkRowContainer,
        children: [
            a,
            (0, n.jsx)("div", {
                className: eG.perkRow,
                children: (0, n.jsx)(I.E, {
                    color: s,
                    variant: o ? "text-sm/normal" : "text-sm/medium",
                    children: P.intl.string(k.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function ek(e) {
    let t,
        { guildId: l, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, eA.Ay)(l, r),
        u = (0, eA.Ay)(l, o),
        d = a.type !== U.b_.INACTIVE,
        c = u.type !== U.b_.INACTIVE,
        m = a.type === U.b_.TIER_OVERRIDE_ACTIVATED,
        [p, g] = i.useState(void 0);
    ((0, eT.A)(p), (t = 0 === s ? U.At.START : null == o ? U.At.END : U.At.MIDDLE));
    let { textColor: x } = N(d);
    return (0, n.jsxs)(eN, {
        guildId: l,
        powerup: r,
        className: eG.card,
        children: [
            (0, n.jsx)(eL, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(y.Ft, {
                title: r.title,
                textColor: x,
                footer: !m && (0, n.jsx)(eC, { className: eG.footer, guildId: l, powerup: r }),
                children: (0, n.jsx)(eP, { isActive: d, index: s }),
            }),
            !m && (0, n.jsx)(y.kd, { children: (0, n.jsx)(eh.Ay, { guildId: l, powerup: r, onError: g }) }),
        ],
    });
}
var eD = l(866665),
    eO = l(775602),
    eU = l(468689),
    eV = l(685073),
    eB = l(915667);
function eM(e, t) {
    let s = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([K.A], () => K.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, eV.Rg)(e);
        });
    return i.useMemo(() => {
        let i = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, hasServerTags: r } = e,
                              o = P.intl.string(k.default.KC9HRW),
                              a = P.intl.string(k.default.GJiSmP),
                              u = s?.[z.SL],
                              d = P.intl.string(k.default["/egwJA"]),
                              c = r ? void 0 : P.intl.string(k.default.W6Vwn3),
                              m = r ? void 0 : P.intl.string(k.default.lvk1Gc),
                              p = r ? P.intl.string(k.default["9CfkLO"]) : P.intl.string(P.t["+7XY31"]),
                              g = r ? "secondary" : "expressive",
                              A = i
                                  ? () => {
                                        (r
                                            ? eU.A.open(t, ep.BEX.TAG, ep.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, eB.A)(t, u),
                                            (0, x.closeAllModals)());
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, x.openModalLazy)(
                                      async () => {
                                          let { default: s } = await Promise.all([l.e("991051"), l.e("875295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: P.intl.string(k.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      i && null != A && null != p
                                                          ? {
                                                                variant: g,
                                                                text: p,
                                                                icon: "expressive" === g ? f._ : void 0,
                                                                onClick: A,
                                                            }
                                                          : void 0,
                                                  ...l,
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
var eW = l(625361);
function eF(e) {
    let { guildId: t, group: l, powerups: s } = e,
        [o, a] = i.useState(!1),
        u = (0, r.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        d = eM([l], t)[l],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                i = (0, eA.jJ)(l, n),
                s = i.some((e) => e.type !== U.b_.INACTIVE);
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
                : s && (t = { type: "active", statusText: P.intl.string(k.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === U.b_.POWERUP_ACTIVATED ? e + n.cost : e;
                }, 0),
                a = i.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, i[0]?.powerup?.cost ?? 0),
                u = i.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e + (l?.cost ?? 0);
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
        { textColor: p } = N(m?.isActive ?? !1),
        g = (0, b.c)("GuildPowerupMultiPerkCard");
    if (null == m || null == d) return null;
    let { status: x, cost: f, costDecorator: A } = m;
    return (0, n.jsxs)(y.NI, {
        label: d.title,
        isActive: x?.type === "active",
        isWarning: x?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(s),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, n.jsx)("img", { alt: "", src: c, className: eW.S }),
            (0, n.jsx)(y.Ft, {
                title: d.title,
                textColor: p,
                footer: (0, n.jsx)(y.$L, { status: x, cost: f, costDecorator: A }),
                children: (0, n.jsx)(I.E, {
                    className: eW.h,
                    color: p,
                    variant: g ? "text-sm/normal" : "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, n.jsx)(y.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, n.jsx)(eD.m, {
                              asContainer: !0,
                              text: d.viewCtaTooltip,
                              delay: 100,
                              children: (0, n.jsx)(w.$, { text: d.viewCta, fullWidth: !0 }),
                          })
                        : (0, n.jsx)(w.$, { text: d.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eK = l(403362),
    ez = l(639060),
    e$ = l(425138);
function eX(e) {
    let { markAsDismissed: t } = e,
        l = (0, b.c)("GuildPowerupInfoCard");
    return (0, n.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: e$.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(I.E, {
                color: "text-overlay-light",
                variant: "text-md/semibold",
                children: P.intl.string(k.default.diMhWc),
            }),
            (0, n.jsx)(I.E, {
                color: "text-overlay-light",
                variant: l ? "text-sm/normal" : "text-sm/medium",
                children: P.intl.string(k.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: e$.VN,
                children: (0, n.jsx)(el.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": P.intl.string(P.t.cpT0Cq),
                    onClick: () => {
                        t(eS.i.USER_DISMISS);
                    },
                    icon: en.P,
                }),
            }),
        ],
    });
}
var eJ = l(972213),
    eH = l(695366),
    eQ = l(168691);
function eZ(e) {
    let { notificationConfig: t, markAsDismissed: l } = e,
        i = (0, b.c)("GuildPowerupRollbackNotification");
    return (0, n.jsxs)("div", {
        className: eQ.kL,
        children: [
            (0, n.jsx)("div", {
                className: eQ.VN,
                children: (0, n.jsx)(el.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": P.intl.string(P.t.cpT0Cq),
                    onClick: () => {
                        l(eS.i.USER_DISMISS);
                    },
                    icon: eJ.XLargeIcon,
                }),
            }),
            (0, n.jsx)(eH.E, { color: C.A.colors.TEXT_FEEDBACK_WARNING, className: eQ.Kk }),
            (0, n.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, n.jsx)(I.E, { variant: i ? "text-sm/normal" : "text-sm/medium", children: t.description }),
        ],
    });
}
var eq = l(859241),
    eY = l(864310),
    e0 = l(620019);
function e1(e) {
    let { guildId: t, powerupNames: l, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eY.A)(e),
                n = (0, r.bG)([eq.A], () => eq.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = l - i.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return i.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: P.intl.string(k.default.n5hQhc),
                              description: P.intl.formatToPlainString(k.default.iAaAiG, {
                                  boostCount: s,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: s,
                          },
                [s, t],
            );
        })(t, l),
        d = (0, b.c)("GuildPowerupsWarning");
    return o
        ? (0, n.jsxs)("div", {
              className: e0.kL,
              children: [
                  (0, n.jsx)(eH.E, { color: C.A.colors.TEXT_FEEDBACK_WARNING, className: e0.Kk }),
                  (0, n.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, n.jsxs)(I.E, {
                      variant: d ? "text-sm/normal" : "text-sm/medium",
                      children: [
                          u,
                          s?.map((e, t) =>
                              (0, n.jsx)(
                                  I.E,
                                  {
                                      variant: d ? "text-sm/normal" : "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: e0.$e,
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
var e8 = l(826673),
    e6 = l(549996),
    e5 = l(412260);
function e9(e) {
    let t = (function () {
            let e = (0, e6.c)(et.C.GUILD_BOOST_TAB_BANNER),
                t =
                    null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind
                        ? e.properties.properties.guildBoostTabBanner
                        : null,
                [l, n] = (0, j.Cc)(null != t ? $.M.GUILD_BOOST_TAB_BANNER : null, e?.promotionId ?? "", void 0, !0),
                s = i.useCallback(() => {
                    n(eS.i.USER_DISMISS);
                }, [n]),
                { isDismissed: r } = (0, e8.u$)($.M.GUILD_BOOST_TAB_BANNER, e?.promotionId ?? "");
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
        l = (0, r.bG)([e5.A], () => e5.A.isFetchingActivePromotions),
        n = "admin" !== e || t.isBannerEligible || l ? [] : [$.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [s, o] = (0, j.kn)(n),
        a = i.useCallback(() => {
            o(eS.i.USER_DISMISS);
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
        : "member" !== e || t.isBannerEligible || l
          ? s === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD && (u = { kind: "video", onDismiss: a })
          : (u = { kind: "video", onDismiss: null });
    let d = l || t.isBannerEligible || u?.kind === "video";
    return { variant: e, content: u, isReserved: d };
}
var e2 = l(463080);
function e7(e) {
    let { text: t } = e,
        l = (0, b.c)("Tier3OverrideNotice");
    return (0, n.jsx)("div", {
        className: e2.ac,
        children: (0, n.jsx)(I.E, { variant: l ? "text-sm/normal" : "text-sm/medium", children: t }),
    });
}
function e3(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(ep.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: P.intl.string(k.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                l =
                    ((t = (0, r.bG)([K.A], () => K.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, G.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eK.Vq);
                    }, [t])),
                n = L(e),
                s = l.length > 0 || n.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? P.intl.string(V.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === z.FB) && u.push(P.intl.string(k.default.Sfr0Jw)),
                n.length > 0 && u.push(P.intl.string(V.default.wiungr)),
                { shouldShow: s, expiringPowerups: l, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = (function (e) {
            let t = (0, ez.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [n, i] = (0, j.ww)(l, e);
            return { shouldShow: null != t && n === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = e9("admin"),
        u = (function (e) {
            let t = [];
            e || t.push($.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, j.kn)(t);
            return { shouldShow: null != l && l === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: n };
        })(s.shouldShow || o.shouldShow || a.isReserved),
        d = (0, b.c)("GuildPowerupNotificationContainer");
    return l.shouldShow || s.shouldShow || o.shouldShow || u.shouldShow || null != a.content
        ? (0, n.jsxs)("div", {
              className: e2.kL,
              children: [
                  (0, n.jsx)(I.E, {
                      variant: d ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: d ? "text-strong" : "text-subtle",
                      children: P.intl.string(k.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(e7, { text: l.text }),
                  s.shouldShow &&
                      (0, n.jsx)(e1, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, n.jsx)(eZ, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  (0, n.jsx)(ex, { slot: a, guildId: t }),
                  u.shouldShow && (0, n.jsx)(eX, { markAsDismissed: u.markAsDismissed }),
              ],
          })
        : null;
}
var e4 = l(490557);
function te(e) {
    let { guildId: t, powerup: l, badge: s } = e,
        [r, o] = i.useState(void 0);
    (0, eT.A)(r);
    let [a, u] = i.useState(!1),
        { textColor: d } = N((0, eA.Ay)(t, l).type !== U.b_.INACTIVE),
        c = (0, b.c)("GuildPowerupPerkCard");
    return (0, n.jsxs)(eN, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: s,
        children: [
            (0, n.jsx)(e4.l, { className: M.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(y.Ft, {
                title: l.title,
                textColor: d,
                footer: (0, n.jsx)(eC, { guildId: t, powerup: l }),
                children: (0, n.jsx)(I.E, {
                    className: M.h_,
                    color: d,
                    variant: c ? "text-sm/normal" : "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, n.jsx)(y.kd, { children: (0, n.jsx)(eh.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var tt = l(862482),
    tl = l(944304),
    tn = l(975571),
    ti = l(380572);
function ts(e) {
    let { count: t, type: l } = e,
        i = (0, b.c)("GuildPowerupsBoostInfo"),
        s = (function (e, t) {
            switch (t) {
                case U.yG.AVAILABLE:
                    return P.intl.formatToPlainString(k.default.BdRXZA, { boostCount: e });
                case U.yG.SPENT:
                    return P.intl.formatToPlainString(k.default.xvgIVG, { boostCount: e });
                case U.yG.TOTAL:
                    return P.intl.string(k.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: ti.k,
        role: "img",
        "aria-label": `${t}, ${s}`,
        children: [
            (0, n.jsxs)("div", {
                className: ti.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(f._, {
                        size: "sm",
                        color: l !== U.yG.AVAILABLE ? C.A.colors.TEXT_MUTED : C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, n.jsx)(h.D, {
                        color: l !== U.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: i ? "experimental/body-lg/semibold" : "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(I.E, {
                "aria-hidden": "true",
                color: "text-muted",
                variant: i ? "text-sm/normal" : "text-sm/medium",
                children: s,
            }),
        ],
    });
}
var tr = l(690118);
function to(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: s, total: o } = (0, eY.A)(t),
        a = (0, b.c)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != l)
        return (0, n.jsxs)("div", {
            className: tr.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: tr.N1,
                    children: [
                        (0, n.jsx)(I.E, {
                            variant: a ? "experimental/heading-sm/semibold" : "eyebrow",
                            color: a ? "text-strong" : "text-subtle",
                            children: P.intl.string(k.default.hjvcLO),
                        }),
                        (0, n.jsx)(I.E, {
                            className: tr.C2,
                            variant: a ? "experimental/body-sm/medium" : "text-xs/semibold",
                            children: P.intl.format(k.default.fXE30d, {
                                helpDeskArticle: tn.A.getArticleURL(ep.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tr.hQ,
                    children: [
                        (0, n.jsx)(ts, { count: i, type: U.yG.AVAILABLE }),
                        (0, n.jsx)(ts, { count: s, type: U.yG.SPENT }),
                        (0, n.jsx)(ts, { count: o, type: U.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(tl.A, {
                    className: tr.S6,
                    guild: l,
                    analyticsLocation: {
                        page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: tt.XD.CUSTOM,
                    size: tt.lO.LARGE,
                    icon: (0, n.jsx)(f._, {
                        className: tr.Ng,
                        size: "sm",
                        color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
            ],
        });
}
var ta = l(97808),
    tu = l(778712),
    td = l(463930),
    tc = l(730134),
    tm = l(878678),
    tp = l(483625),
    tg = l(854627),
    tx = l(696451),
    tf = l(317525),
    tA = l(287809),
    th = l(562153),
    tI = l(19575),
    tE = l(985827);
let tv = tI.Ay.getEnableHardwareAcceleration() ? ta.Js : tc.A;
function tb(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, r.bG)([tf.A], () => tf.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([tA.default], () => tA.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([tx.Ay], () => (null != o ? tx.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, r.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: x,
        } = (0, tg.A)({ userId: s?.id, guildId: t, size: tu._3.SIZE_40, animateOnHover: !d }),
        A = (0, b.c)("GuildPowerupsBoostInfoContainerMember");
    return null == l || null == a || null == s
        ? null
        : (0, n.jsxs)("div", {
              className: tE.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: tE.FS,
                      children: [
                          (0, n.jsx)(I.E, {
                              variant: "text-md/semibold",
                              color: A ? "text-strong" : void 0,
                              children: P.intl.string(u ? k.default.KSWK1U : k.default.XXXX5l),
                          }),
                          (0, n.jsx)(I.E, {
                              variant: A ? "text-sm/normal" : "text-sm/medium",
                              children: P.intl.format(u ? k.default["7fWTg4"] : k.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, tm.K4)({
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
                      (0, n.jsx)(tp.V, {
                          avatar: (0, n.jsx)(tv, {
                              ...x,
                              user: s,
                              src: p,
                              avatarDecoration: m,
                              size: tu._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(td.g, {
                              variant: "text-md/semibold",
                              name: th.Ay.getName(t, null, s),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: g()(tE.Qs, tE.cX),
                          message: P.intl.string(P.t["6OSasb"]),
                          decorations: (0, n.jsx)(f._, {
                              color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: tE.$J,
                          }),
                      }),
                  (0, n.jsx)(tl.A, {
                      guild: l,
                      className: tE.Qs,
                      analyticsLocation: {
                          page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: tt.XD.BRAND,
                      size: tt.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(f._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tj = l(820739),
    t_ = l(860071),
    tS = l(935208),
    tw = l(492349),
    ty = l(606049),
    tC = l(58703),
    tN = l(967144),
    tT = l(262001),
    tR = l(736541);
function tG(e) {
    let t,
        { boost: l, phase: i, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(tS.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: i,
                } = (0, r.cf)(
                    [tx.Ay],
                    () => {
                        let t = tx.Ay.getMember(e.guildId, e.userId);
                        return {
                            username:
                                tx.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? P.intl.string(P.t["30mdIx"]),
                            roleColor: t?.colorString ?? null,
                            roleColorStrings: t?.colorStrings ?? null,
                        };
                    },
                    [e],
                );
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: i };
        })(l),
        d = (0, tN.gn)(l.guildId, l.userId, u ?? null),
        c = (0, b.c)("GuildPowerupsRecentActivityRow"),
        m = new Date(s),
        { Icon: p, color: x } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: f._, color: C.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tw.x, color: C.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tw.x, color: C.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i);
    return (0, n.jsxs)("div", {
        className: tT.og,
        children: [
            (0, n.jsx)(p, { color: x, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tT.x$,
                children: [
                    (0, n.jsx)(I.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tT.IP,
                        children: (0, n.jsx)(eD.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(td.g, {
                                variant: "text-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: d,
                            }),
                        }),
                    }),
                    (0, n.jsx)(I.E, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: c ? void 0 : "text-muted",
                        className: tT.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return P.intl.string(k.default.plwH8d);
                                case "expiring":
                                    return P.intl.formatToPlainString(k.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return P.intl.string(k.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(ty.A, {
                timestamp: m,
                timestampFormat:
                    0 === (t = (0, tC.m_)(m, new Date()))
                        ? `[${P.intl.string(P.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${P.intl.string(P.t.ZdDLO0)}]`
                          : "L",
                className: g()(tR[c ? "text-xs/medium" : "text-xs/semibold"], tT.vE),
            }),
        ],
    });
}
var tL = l(834205);
function tP(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, r.yK)([eq.A], () => eq.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
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
                                                return tS.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tS.default.extractTimestamp(e.id);
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
                    [tx.Ay],
                    () => {
                        let t = new Set();
                        return (
                            n.forEach((l) => {
                                let { boost: n } = l;
                                null == tx.Ay.getMember(e, n.userId) && t.add(n.userId);
                            }),
                            Array.from(t)
                        );
                    },
                    [e, n],
                );
            i.useEffect(() => {
                s.length > 0 && s.forEach((t) => t_.A.requestMember(e, t));
            }, [e, s]);
            let o = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = i.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                u = (0, r.bG)([eq.A], () => null != eq.A.getLastFetchedAtForGuild(e), [e]);
            return (
                i.useEffect(() => {
                    (o === a && u) || (0, tj.VU)(e, { includeEnded: !0 });
                }, [e, o, a, u]),
                n
            );
        })(t),
        s = (0, b.c)("GuildPowerupsRecentActivity");
    return 0 === l.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, {
                      className: tL.w,
                      variant: s ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: s ? "text-strong" : "text-subtle",
                      children: P.intl.string(P.t.yM9Krm),
                  }),
                  (0, n.jsx)(A.Ip, {
                      className: tL.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(tG, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tk = l(726724);
function tD(e) {
    let { guildId: t } = e,
        l = e9("member");
    return (0, n.jsxs)("div", {
        className: tk.CG,
        children: [(0, n.jsx)(ex, { slot: l, guildId: t }), (0, n.jsx)(tb, { guildId: t })],
    });
}
function tO(e) {
    let t,
        s,
        o,
        a,
        u,
        p,
        S,
        w,
        y,
        C,
        { guildId: N, powerupListingId: T } = e;
    ((t = (0, _.C$)(N, "useLoadGuildPowerups")),
        i.useEffect(() => {
            t && (0, Q.z9)(N);
        }, [N, t]),
        i.useEffect(() => {
            ((0, Z.AK)(N), (0, Z.Xd)(N));
        }, [N]));
    let R = (0, _.C$)(N, "GuildPowerupsOverview"),
        G = (0, b.c)("GuildPowerupsOverview");
    (0, H.Pq)(N);
    let L = (0, r.bG)([K.A], () => K.A.getStateForGuild(N)),
        V = (0, m.A)(N),
        B = i.useRef(!1),
        { shouldShow: M, modalConfig: et } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(N))),
            (o = (0, m.A)(N) ?? !1),
            (a = (0, r.bG)([K.A], () => K.A.getStateForGuild(N))),
            (u = a?.allPowerups?.[z.zY]),
            (p = u?.storeRemovalDate),
            (S = (0, X.p)(N, "GuildPowerupsOverview")),
            (w = o && S && null != s),
            (y = i.useMemo(() => {
                if (!w || null == u || null == p) return null;
                let e = (0, J.A)(p);
                return {
                    dismissibleContent: $.M.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL,
                    header: `${u.title} ${P.intl.formatToPlainString(k.default["6e2ry1"], { dateString: e })}`,
                    bodies: [
                        P.intl.formatToPlainString(k.default.jd8fki, {
                            startDate: e,
                            endDate: e,
                            perkName: u.title,
                            boostCount: u.cost,
                        }),
                    ],
                    hasCancelButton: !1,
                };
            }, [w, u, p])),
            { shouldShow: w, modalConfig: y }),
        el = (0, E.A)(),
        en = null == T && !el && null != et,
        ei = [];
    M && en && ei.push(et.dismissibleContent);
    let [es, er] = (0, j.kn)(ei),
        eo =
            ((C = (0, r.bG)([K.A], () => K.A.getStateForGuild(N))),
            i.useMemo(
                () =>
                    ee.reduce((e, t) => {
                        let l = C?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== U.o9.PERK) return e;
                                    let l = Y[t.skuId];
                                    return (null == l || ((e[l] ??= []), e[l].push(t)), e);
                                }, {});
                            for (let e of t) {
                                if (e.type === U.o9.LEVEL) {
                                    n.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = Y[e.skuId];
                                if (null != t) {
                                    let e = i[t];
                                    if (void 0 !== e) {
                                        let l = q[t];
                                        (e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0));
                                    }
                                    continue;
                                }
                                n.push({ type: "singlePerk", powerup: e, badge: U.ys[e.skuId] });
                            }
                            return (
                                l && e === U.o9.PERK && n.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === z.SL),
                                        l = e.findIndex(
                                            (e) =>
                                                "multiPerk" === e.type &&
                                                ("guildTagsBadgePacks" === e.group || (e.group, !1)),
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [n] = t.splice(l, 1),
                                            i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === z.SL);
                                        return (t.splice(i + 1, 0, n), t);
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === z.d0);
                                        if (t <= 0) return e;
                                        let l = [...e],
                                            [n] = l.splice(t, 1);
                                        return (l.unshift(n), l);
                                    })(n),
                                )
                            );
                        })(t, l, R);
                        return (e.push({ type: t, listings: n }), e);
                    }, []),
                [C?.powerupCatalog, R],
            )),
        ea = eM(
            eo
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            N,
        );
    return (i.useEffect(() => {
        if (null != T && !B.current)
            for (let e of eo)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === T) {
                        ((0, eB.A)(N, t.powerup), (B.current = !0));
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === T || t.powerups.some((e) => e.skuId === T))) {
                        B.current = !0;
                        let e = ea[t.group];
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
                    if ("gameServer" === t.type && T === O.W5) {
                        ((0, D.A)({ guildId: N, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }), (B.current = !0));
                        return;
                    }
                }
    }, [N, T, eo, ea]),
    i.useEffect(() => {
        if (null != es && null != et) {
            let e = {
                onCloseCallback: () => {
                    er(eS.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${es}`,
            };
            (0, x.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("239592"), l.e("586618")]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: et, markAsDismissed: er, ...t });
            }, e);
        }
    }, [N, es, er, et]),
    L?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tk.kL,
              children: [
                  (0, n.jsxs)(F.A, {
                      className: tk.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(F.A.Icon, { icon: f._, "aria-label": "" }),
                          (0, n.jsx)(F.A.Title, { children: P.intl.string(k.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tk.hQ,
                      children: [
                          (0, n.jsx)(A.Ip, {
                              className: tk.DO,
                              children: eo.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case U.o9.LEVEL:
                                                  return {
                                                      title: P.intl.string(k.default["TXY/b0"]),
                                                      description: P.intl.string(k.default.aJv4PB),
                                                  };
                                              case U.o9.PERK:
                                                  return {
                                                      title: P.intl.string(k.default.TV3Vm8),
                                                      description: P.intl.string(k.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = t === U.o9.LEVEL ? A.Ip : "div";
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tk.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tk.kn,
                                                  children: [
                                                      (0, n.jsx)(h.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, n.jsx)(I.E, {
                                                          color: G ? void 0 : "text-muted",
                                                          variant: G ? "text-sm/normal" : "text-sm/medium",
                                                          children: s,
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(r, {
                                                  orientation: "horizontal",
                                                  className: g()(tk.qJ, tk.kn, { [tk.dU]: t === U.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, n.jsx)(
                                                                  ek,
                                                                  {
                                                                      guildId: N,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: l[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, n.jsx)(
                                                                  te,
                                                                  { guildId: N, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, n.jsx)(
                                                                  eF,
                                                                  { guildId: N, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, n.jsx)(
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
                          (0, n.jsxs)("div", {
                              className: tk.so,
                              children: [
                                  V
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)(to, { guildId: N }), (0, n.jsx)(e3, { guildId: N })],
                                        })
                                      : (0, n.jsx)(tD, { guildId: N }),
                                  (0, n.jsx)(tP, { guildId: N }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tU(e) {
    let { guildId: t, powerupListingId: l } = e,
        i = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, m.A)(t),
        x = (0, d.PR)(),
        f = !p || null == g || null == i,
        A = (0, o.Ay)(null != x ? x : []);
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
        : (0, n.jsx)(tO, { guildId: t, powerupListingId: l });
}
