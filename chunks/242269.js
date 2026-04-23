n.r(t), n.d(t, { default: () => tp });
var r = n(627968),
    l = n(64700),
    i = n(110259),
    s = n(17928),
    a = n(688810),
    o = n(139286),
    d = n(736056),
    u = n(976860),
    c = n(71393),
    _ = n(363487);
n(321073), n(323874), n(14289), n(35956);
var p = n(503698),
    m = n.n(p),
    g = n(554146),
    x = n(192308),
    f = n(104510),
    A = n(364522),
    h = n(534514),
    v = n(834730),
    E = n(793574),
    S = n(932001),
    I = n(742589),
    b = n(488803),
    j = n(289704),
    C = n(821609),
    L = n(369174),
    w = n(661531);
function y(e) {
    return e
        ? { textColor: "text-default", iconColor: w.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: w.A.colors.TEXT_MUTED };
}
var N = n(522055),
    R = n(881756),
    k = n(904629);
function T(e) {
    let t = (0, s.bG)([N.A], () => N.A.getStateForGuild(e));
    return l.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, k.k)(e);
    }, [t?.entitlements]);
}
var P = n(853513),
    O = n(985018),
    G = n(843095),
    D = n(568065),
    U = n(800007),
    V = n(576709),
    M = n(989177),
    B = n(313124);
function W(e) {
    let t,
        n,
        { guildId: i } = e,
        a = l.useRef(null),
        { state: o, lowestGameServerCost: d } = (0, s.cf)([N.A], () => ({
            state: N.A.getStateForGuild(i),
            lowestGameServerCost: N.A.getLowestGameCostForGuild(i),
        })),
        u =
            ((t = (0, s.bG)([N.A], () => N.A.getStateForGuild(i)?.entitlements, [i])),
            (n = T(i)),
            l.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return n.length > 0
                        ? { type: "expiring", expiringAt: n[0].ends_at }
                        : { type: "active", statusText: O.intl.string(P.default.FFLkmx) };
            }, [n, t])),
        { gameName: c, gameName2: _ } = (0, R.A)(),
        { textColor: p } = y(u?.type === "active");
    return null == o
        ? null
        : (0, r.jsxs)(L.NI, {
              label: O.intl.string(V.default["B3OfL/"]),
              badge: D.ys[U.W5],
              isActive: u?.type === "active",
              isWarning: u?.type === "expiring",
              onClick: () => (0, G.A)({ guildId: i, analyticsLocation: E.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: m()(B.ZS, M.Sl),
                      children: (0, r.jsx)(j.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: a,
                          className: B.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(L.Ft, {
                      title: O.intl.string(V.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, r.jsx)(L.$L, { cost: d ?? 0, costDecorator: "+", status: u }),
                      children: (0, r.jsx)(v.E, {
                          className: M.h_,
                          color: p,
                          variant: "text-sm/medium",
                          children: O.intl.format(V.default["+UqyGU"], { gameName: c, gameName2: _ }),
                      }),
                  }),
                  (0, r.jsx)(L.kd, {
                      children: (0, r.jsx)(C.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(o.entitlements).length > 0
                                  ? O.intl.string(V.default.PuvU5b)
                                  : O.intl.string(V.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, G.A)({ guildId: i, analyticsLocation: E.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
var F = n(645619),
    K = n(941030),
    z = n(665171),
    J = n(942975);
n(667532);
var $ = n(512750);
let H = { guildTagsBadgePacks: [$.tv, $.OJ, $.Ht, $.jF] },
    X = Object.entries(H).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {}),
    Q = [D.o9.LEVEL, D.o9.PERK];
var q = n(182859),
    Y = n(210273),
    Z = n(998418),
    ee = n(722523),
    et = n(172218),
    en = n(294384),
    er = n(813847),
    el = n(43105),
    ei = n(186111),
    es = n(621466),
    ea = n(49999);
function eo(e) {
    let { powerup: t, targetRef: n, isCardVisible: i } = e,
        a = (0, s.bG)([ei.A], () => ei.A.hasLayers()),
        o = (0, x.useHasAnyModalOpen)(),
        d =
            t.skuId === $.FB
                ? {
                      title: O.intl.string(P.default.YWo6VL),
                      body: O.intl.string(P.default.gXVvKc),
                      dismissibleContentType: g.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        u = [];
    null == d || a || !i || o || u.push(d.dismissibleContentType);
    let [c, _] = (0, S.kn)(u);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: n, topThreshold: r = 40, bottomThreshold: i = 60, enabled: s = !0 } = e;
        l.useEffect(() => {
            if (!s || t?.current == null) return;
            let e = null,
                l = (l) => {
                    if (t?.current == null || !(0, es.vq)(l.target, HTMLElement)) return;
                    let s = l.target;
                    if (!s.contains(t.current)) return;
                    let a = s.scrollTop;
                    if (null === e) {
                        e = a;
                        return;
                    }
                    let o = a - e,
                        d = Math.abs(o);
                    ((o < 0 && d > r) || (o > 0 && d > i)) && n();
                };
            return (
                document.addEventListener("scroll", l, { passive: !0, capture: !0 }),
                () => {
                    document.removeEventListener("scroll", l, { capture: !0 });
                }
            );
        }, [s, t, n, r, i]);
    })({
        targetRef: n,
        onShouldClose: l.useCallback(() => {
            _(ea.i.INDIRECT_ACTION);
        }, [_]),
        enabled: null != c,
    }),
    null == d || null == c)
        ? null
        : (0, r.jsx)(el.A, {
              targetElementRef: n,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: d.title,
              body: d.body,
              onRequestClose: () => {
                  _(ea.i.USER_DISMISS);
              },
          });
}
var ed = n(224331);
function eu(e) {
    let { guildId: t, powerup: n, className: l } = e,
        i = (0, Z.Ay)(t, n),
        s = i.type !== D.b_.LEVEL_ACTIVATED,
        a = (0, en.A)(t, n, "GuildPowerupCardBodyFooter"),
        o = (0, er.e)(n, i, a);
    return (0, r.jsx)(L.$L, { status: o, cost: s ? n.cost : void 0, className: l });
}
function ec(e) {
    let { guildId: t, powerup: n, badge: i, className: s, onHover: a, children: o } = e,
        d = (0, _.A)(t),
        u = (0, Z.Ay)(t, n),
        c = u.type !== D.b_.INACTIVE,
        p = u.sourceEntitlement?.ends_at != null,
        m = (0, en.A)(t, n, "GuildPowerupCard"),
        g = l.useRef(null),
        x = (0, ed.A)(t, n),
        [f, A] = l.useState(!1),
        h = (0, et.K)(A, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.NI, {
                label: n.title,
                isActive: c,
                isWarning: p,
                badge: i,
                canRollback: m,
                onClick: x,
                onMouseOver: () => a?.(!0),
                onMouseLeave: () => a?.(!1),
                className: s,
                ref: (e) => {
                    (g.current = e), (h.current = e);
                },
                children: o,
            }),
            !m && d && (0, r.jsx)(eo, { powerup: n, targetRef: g, isCardVisible: f }),
        ],
    });
}
var e_ = n(867060),
    ep = n(652215),
    em = n(508155),
    eg = n(31823);
function ex(e) {
    let t,
        { active: n, nextActive: l, position: i } = e;
    return (
        (t = n && !1 !== l ? D.z0.FULL : n && !1 === l ? D.z0.HALF : D.z0.NONE),
        (0, r.jsxs)("div", {
            className: eg.progressContainer,
            children: [
                (0, r.jsx)("div", { className: m()(eg.progress, eg[i], eg[t]) }),
                (0, r.jsx)("div", {
                    className: m()(eg.boostContainer, M.JD, { [eg.boostContainerActive]: n, [M.vu]: n }),
                    children: (0, r.jsx)(f._, { size: "sm", color: w.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function ef(e) {
    let { isActive: t, index: n } = e,
        { textColor: i, iconColor: s } = y(t),
        a = l.useMemo(() => {
            let e = em.t[n];
            if (null == e) return [];
            let t = e.tier === ep.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let l = (0, Y.X)(e.perkIcon);
                return (0, r.jsxs)(
                    "div",
                    {
                        className: eg.perkRow,
                        children: [
                            (0, r.jsx)(l, { color: s, size: "sm" }),
                            (0, r.jsx)(v.E, {
                                className: eg.perkText,
                                color: i,
                                variant: "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${n}-${t}`,
                );
            });
        }, [n, s, i]);
    return (0, r.jsxs)("div", {
        className: eg.perkRowContainer,
        children: [
            a,
            (0, r.jsx)("div", {
                className: eg.perkRow,
                children: (0, r.jsx)(v.E, {
                    color: i,
                    variant: "text-sm/medium",
                    children: O.intl.string(P.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eA(e) {
    let t,
        { guildId: n, index: i, powerup: s, nextPowerup: a } = e,
        o = (0, Z.Ay)(n, s),
        d = (0, Z.Ay)(n, a),
        u = o.type !== D.b_.INACTIVE,
        c = d.type !== D.b_.INACTIVE,
        _ = o.type === D.b_.TIER_OVERRIDE_ACTIVATED,
        [p, m] = l.useState(void 0);
    (0, e_.A)(p), (t = 0 === i ? D.At.START : null == a ? D.At.END : D.At.MIDDLE);
    let { textColor: g } = y(u);
    return (0, r.jsxs)(ec, {
        guildId: n,
        powerup: s,
        className: eg.card,
        children: [
            (0, r.jsx)(ex, { position: t, active: u, nextActive: null != a ? c : void 0 }),
            (0, r.jsx)(L.Ft, {
                title: s.title,
                textColor: g,
                footer: !_ && (0, r.jsx)(eu, { className: eg.footer, guildId: n, powerup: s }),
                children: (0, r.jsx)(ef, { isActive: u, index: i }),
            }),
            !_ && (0, r.jsx)(L.kd, { children: (0, r.jsx)(ee.Ay, { guildId: n, powerup: s, onError: m }) }),
        ],
    });
}
var eh = n(990078),
    ev = n(775602),
    eE = n(997509),
    eS = n(915667);
function eI(e, t) {
    let i = (0, _.A)(t) ?? !1,
        a = (0, s.bG)([F.A], () => F.A.getStateForGuild(t)?.allPowerups),
        o = (0, s.bG)([F.A], () => F.A.getStateForGuild(t)?.unlockedPowerups);
    return l.useMemo(() => {
        let l = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: l, allPowerups: i, unlockedPowerups: s } = e,
                              a = O.intl.string(P.default.KC9HRW),
                              o = O.intl.string(P.default.GJiSmP),
                              d = i?.[$.SL],
                              u = s?.[$.SL] != null,
                              c = O.intl.string(P.default["/egwJA"]),
                              _ = u ? void 0 : O.intl.string(P.default.W6Vwn3),
                              p = u ? void 0 : O.intl.string(P.default.lvk1Gc),
                              m = u ? O.intl.string(P.default["9CfkLO"]) : O.intl.string(O.t["+7XY31"]),
                              g = u ? "secondary" : "expressive",
                              A = l
                                  ? () => {
                                        u
                                            ? eE.A.open(t, ep.BEX.TAG, ep.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != d && (0, eS.A)(t, d),
                                            (0, x.closeAllModals)();
                                    }
                                  : void 0,
                              h = D.m_;
                          return {
                              title: a,
                              description: o,
                              openModal: function (e) {
                                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, x.openModalLazy)(
                                      async () => {
                                          let { default: i } = await n.e("75295").then(n.bind(n, 289634));
                                          return (n) =>
                                              (0, r.jsx)(i, {
                                                  guildId: t,
                                                  title: a,
                                                  description: O.intl.string(P.default.BBRFRd),
                                                  powerups: e,
                                                  newPowerupSkuIdSet: h,
                                                  forceStaticImages: !0,
                                                  footerInfoText: p,
                                                  footerAction:
                                                      l && null != A && null != m
                                                          ? {
                                                                variant: g,
                                                                text: m,
                                                                icon: "expressive" === g ? f._ : void 0,
                                                                onClick: A,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: i?.onModalClose },
                                  );
                              },
                              viewCta: c,
                              viewCtaTooltip: _,
                              badge: "new",
                              newPowerupSkuIdSet: h,
                              image: {
                                  staticUrl:
                                      "https://cdn.discordapp.com/assets/content/8dd1f75ba9ef2e0587c9963de0964edc7577f98385e85372e9dc600d353dd3b1.png",
                                  animatedUrl:
                                      "https://cdn.discordapp.com/assets/content/54f74ffad2a1a6c57dd4284f05d14cdeffaf68b38d0543003a4f6a4ba74c9096.png",
                              },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: i, allPowerups: a, unlockedPowerups: o })
                    : void 0,
            s = {};
        for (let t of e) {
            let e = l(t);
            null != e && (s[t] = e);
        }
        return s;
    }, [e, t, i, a, o]);
}
var eb = n(401996);
function ej(e) {
    let { guildId: t, group: n, powerups: i } = e,
        [a, o] = l.useState(!1),
        d = (0, s.bG)([ev.A], () => ev.A.useReducedMotion),
        u = eI([n], t)[n],
        c = !d && a ? u?.image?.animatedUrl : u?.image?.staticUrl,
        _ = (function (e) {
            let t,
                { guildId: n, powerups: r } = e,
                l = (0, Z.jJ)(n, r),
                i = l.some((e) => e.type !== D.b_.INACTIVE);
            if (r.length <= 0) return null;
            let s = l.reduce(
                (e, t) => {
                    let { sourceEntitlement: n } = t,
                        r = n?.ends_at;
                    return null == r ? e : null == e || r < e ? r : e;
                },
                void 0,
            );
            null != s
                ? (t = { type: "expiring", expiringAt: s })
                : i && (t = { type: "active", statusText: O.intl.string(P.default.FFLkmx) });
            let a = l.reduce((e, t) => {
                    let { type: n, powerup: r } = t;
                    return n === D.b_.POWERUP_ACTIVATED ? e + r.cost : e;
                }, 0),
                o = l.reduce((e, t) => {
                    let { powerup: n } = t;
                    return e < (n?.cost ?? 0) ? e : (n?.cost ?? 0);
                }, l[0]?.powerup?.cost ?? 0),
                d = l.reduce((e, t) => {
                    let { powerup: n } = t;
                    return e + (n?.cost ?? 0);
                }, 0),
                u = i ? a : o;
            return {
                isActive: i,
                status: t,
                cost: u,
                costDecorator: !i && d > u ? "+" : void 0,
                expiringAt: s,
                activeCost: a,
                minCost: o,
                totalCost: d,
            };
        })({ guildId: t, powerups: i }),
        { textColor: p } = y(_?.isActive ?? !1);
    if (null == _ || null == u) return null;
    let { status: m, cost: g, costDecorator: x } = _;
    return (0, r.jsxs)(L.NI, {
        label: u.title,
        isActive: m?.type === "active",
        isWarning: m?.type === "expiring",
        badge: u.badge,
        onClick: () => u.openModal(i),
        onMouseOver: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, r.jsx)("img", { alt: "", src: c, className: eb.S }),
            (0, r.jsx)(L.Ft, {
                title: u.title,
                textColor: p,
                footer: (0, r.jsx)(L.$L, { status: m, cost: g, costDecorator: x }),
                children: (0, r.jsx)(v.E, {
                    className: eb.h,
                    color: p,
                    variant: "text-sm/medium",
                    children: u.description,
                }),
            }),
            (0, r.jsx)(L.kd, {
                children:
                    u?.viewCtaTooltip != null
                        ? (0, r.jsx)(eh.m, {
                              asContainer: !0,
                              text: u.viewCtaTooltip,
                              delay: 100,
                              children: (0, r.jsx)(C.$, { text: u.viewCta, fullWidth: !0 }),
                          })
                        : (0, r.jsx)(C.$, { text: u.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eC = n(490557);
function eL(e) {
    let { guildId: t, powerup: n, badge: i } = e,
        [s, a] = l.useState(void 0);
    (0, e_.A)(s);
    let [o, d] = l.useState(!1),
        { textColor: u } = y((0, Z.Ay)(t, n).type !== D.b_.INACTIVE);
    return (0, r.jsxs)(ec, {
        onHover: (e) => d(e),
        guildId: t,
        powerup: n,
        badge: i,
        children: [
            (0, r.jsx)(eC.l, { className: M.Sl, powerup: n, isHovering: o }),
            (0, r.jsx)(L.Ft, {
                title: n.title,
                textColor: u,
                footer: (0, r.jsx)(eu, { guildId: t, powerup: n }),
                children: (0, r.jsx)(v.E, {
                    className: M.h_,
                    color: u,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(L.kd, { children: (0, r.jsx)(ee.Ay, { guildId: t, powerup: n, onError: a }) }),
        ],
    });
}
var ew = n(862482),
    ey = n(721923),
    eN = n(975571),
    eR = n(864310),
    ek = n(403362),
    eT = n(408278),
    eP = n(789645),
    eO = n(818905);
function eG(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, r.jsx)("img", { alt: "", className: eO.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, r.jsx)(v.E, {
                color: "always-white",
                variant: "text-md/semibold",
                children: O.intl.string(P.default.diMhWc),
            }),
            (0, r.jsx)(v.E, {
                color: "always-white",
                variant: "text-sm/medium",
                children: O.intl.string(P.default.pycxTr),
            }),
            (0, r.jsx)("div", {
                className: eO.VN,
                children: (0, r.jsx)(eT.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": O.intl.string(O.t.cpT0Cq),
                    onClick: () => {
                        t(ea.i.USER_DISMISS);
                    },
                    icon: eP.P,
                }),
            }),
        ],
    });
}
var eD = n(972213),
    eU = n(695366),
    eV = n(689568),
    eM = n(859241),
    eB = n(676908);
function eW(e) {
    let { guildId: t, powerupNames: n, warnings: i } = e,
        {
            shouldShow: a,
            title: o,
            description: d,
        } = (function (e, t) {
            let { spent: n } = (0, eR.A)(e),
                r = (0, s.bG)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(e), [e]),
                i = n - l.useMemo(() => r?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [r]);
            return l.useMemo(
                () =>
                    i <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: O.intl.string(P.default.n5hQhc),
                              description: O.intl.formatToPlainString(P.default.iAaAiG, {
                                  boostCount: i,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: i,
                          },
                [i, t],
            );
        })(t, n);
    return a
        ? (0, r.jsxs)("div", {
              className: eB.kL,
              children: [
                  (0, r.jsx)(eU.E, { color: w.A.colors.TEXT_FEEDBACK_WARNING, className: eB.Kk }),
                  (0, r.jsx)(v.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: o }),
                  (0, r.jsxs)(v.E, {
                      variant: "text-sm/medium",
                      children: [
                          d,
                          i?.map((e, t) =>
                              (0, r.jsx)(
                                  v.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: eB.$e,
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
var eF = n(472485);
function eK(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: eF.ac,
        children: (0, r.jsx)(v.E, { variant: "text-sm/medium", children: t }),
    });
}
function ez(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([c.A], () => c.A.getGuild(t)?.features.has(ep.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: O.intl.string(P.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        i = (function (e) {
            let t,
                n =
                    ((t = (0, s.bG)([F.A], () => F.A.getStateForGuild(e))),
                    l.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: n } = t;
                        return (0, k.k)(Object.values(n))
                            .map((t) => e[t.sku_id])
                            .filter(ek.Vq);
                    }, [t])),
                r = T(e),
                i = n.length > 0 || r.length > 0;
            if (!i) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let a = r.length > 0 ? O.intl.string(V.default["B3OfL/"]) : void 0,
                o = [...n.map((e) => e.title), ...(null != a ? [a] : [])],
                d = [];
            return (
                n.some((e) => e.skuId === $.FB) && d.push(O.intl.string(P.default.Sfr0Jw)),
                r.length > 0 && d.push(O.intl.string(V.default.wiungr)),
                { shouldShow: i, expiringPowerups: n, expiringPowerupNames: o, warnings: d }
            );
        })(t),
        a = [g.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [o, d] = (0, S.kn)(a),
        u = o === g.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        _ = (function (e) {
            let t = [];
            e || t.push(g.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [n, r] = (0, S.kn)(t);
            return { shouldShow: null != n && n === g.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: r };
        })(i.shouldShow || u);
    return n.shouldShow || i.shouldShow || _.shouldShow || u
        ? (0, r.jsxs)("div", {
              className: eF.kL,
              children: [
                  (0, r.jsx)(v.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: O.intl.string(P.default["3FRirU"]),
                  }),
                  n.shouldShow && (0, r.jsx)(eK, { text: n.text }),
                  i.shouldShow &&
                      (0, r.jsx)(eW, { guildId: t, powerupNames: i.expiringPowerupNames, warnings: i.warnings }),
                  !1,
                  _.shouldShow && (0, r.jsx)(eG, { markAsDismissed: _.markAsDismissed }),
                  u &&
                      (0, r.jsx)(q.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: ep.ZSU.CARD,
                          },
                          onDismiss: () => d(ea.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
var eJ = n(697311);
function e$(e) {
    let { count: t, type: n } = e;
    return (0, r.jsxs)("div", {
        className: eJ.k,
        children: [
            (0, r.jsxs)("div", {
                className: eJ.N,
                children: [
                    (0, r.jsx)(f._, {
                        size: "sm",
                        color: n !== D.yG.AVAILABLE ? w.A.colors.TEXT_MUTED : w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, r.jsx)(h.D, {
                        color: n !== D.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(v.E, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: (function (e, t) {
                    switch (t) {
                        case D.yG.AVAILABLE:
                            return O.intl.formatToPlainString(P.default.BdRXZA, { boostCount: e });
                        case D.yG.SPENT:
                            return O.intl.formatToPlainString(P.default.xvgIVG, { boostCount: e });
                        case D.yG.TOTAL:
                            return O.intl.string(P.default["/F7Z2y"]);
                    }
                })(t, n),
            }),
        ],
    });
}
var eH = n(685293);
function eX(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([c.A], () => c.A.getGuild(t)),
        { available: l, spent: i, total: a } = (0, eR.A)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: eH.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: eH.N1,
                    children: [
                        (0, r.jsx)(v.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: O.intl.string(P.default.hjvcLO),
                        }),
                        (0, r.jsx)(v.E, {
                            className: eH.C2,
                            variant: "text-xs/semibold",
                            children: O.intl.format(P.default.fXE30d, {
                                helpDeskArticle: eN.A.getArticleURL(ep.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: eH.hQ,
                    children: [
                        (0, r.jsx)(e$, { count: l, type: D.yG.AVAILABLE }),
                        (0, r.jsx)(e$, { count: i, type: D.yG.SPENT }),
                        (0, r.jsx)(e$, { count: a, type: D.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(ey.A, {
                    className: eH.S6,
                    guild: n,
                    analyticsLocation: {
                        page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: ew.XD.CUSTOM,
                    size: ew.lO.LARGE,
                    icon: (0, r.jsx)(f._, {
                        className: eH.Ng,
                        size: "sm",
                        color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(ez, { guildId: t }),
            ],
        });
}
var eQ = n(97808),
    eq = n(778712),
    eY = n(463930),
    eZ = n(730134),
    e0 = n(509536),
    e5 = n(319756),
    e1 = n(854627),
    e6 = n(696451),
    e8 = n(317525),
    e3 = n(287809),
    e9 = n(562153),
    e2 = n(19575),
    e7 = n(32746);
let e4 = e2.Ay.getEnableHardwareAcceleration() ? eQ.Js : eZ.A;
function te(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([c.A], () => c.A.getGuild(t)),
        l = (0, s.bG)([e8.A], () => e8.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        i = (0, s.bG)([e3.default], () => e3.default.getCurrentUser()),
        a = i?.id,
        o = (0, s.bG)([e6.Ay], () => (null != a ? e6.Ay.getMember(t, a) : void 0), [a, t]),
        d = o?.premiumSince != null,
        u = (0, s.bG)([ev.A], () => ev.A.useReducedMotion),
        {
            avatarDecorationSrc: _,
            avatarSrc: p,
            eventHandlers: g,
        } = (0, e1.A)({ userId: i?.id, guildId: t, size: eq._3.SIZE_40, animateOnHover: !u });
    return null == n || null == o || null == i
        ? null
        : (0, r.jsxs)("div", {
              className: e7.ft,
              children: [
                  (0, r.jsxs)("div", {
                      className: e7.FS,
                      children: [
                          (0, r.jsx)(v.E, {
                              variant: "text-md/semibold",
                              children: O.intl.string(d ? P.default.KSWK1U : P.default.XXXX5l),
                          }),
                          (0, r.jsx)(v.E, {
                              variant: "text-sm/medium",
                              children: O.intl.format(d ? P.default["7fWTg4"] : P.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, e0.K4)({
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
                  null != l &&
                      !d &&
                      (0, r.jsx)(e5.V, {
                          avatar: (0, r.jsx)(e4, {
                              ...g,
                              user: i,
                              src: p,
                              avatarDecoration: _,
                              size: eq._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, r.jsx)(eY.g, {
                              variant: "text-md/semibold",
                              name: e9.Ay.getName(t, null, i),
                              colorString: l.colorString,
                              colorStrings: l.colorStrings,
                          }),
                          className: m()(e7.Qs, e7.cX),
                          message: O.intl.string(O.t["6OSasb"]),
                          decorations: (0, r.jsx)(f._, {
                              color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: e7.$J,
                          }),
                      }),
                  (0, r.jsx)(ey.A, {
                      guild: n,
                      className: e7.Qs,
                      analyticsLocation: {
                          page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: ew.XD.BRAND,
                      size: ew.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, r.jsx)(f._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tt = n(820739),
    tn = n(80682),
    tr = n(860071),
    tl = n(935208),
    ti = n(606049),
    ts = n(967144),
    ta = n(168642);
function to(e) {
    let { boost: t } = e,
        {
            timestamp: n,
            username: l,
            roleColor: i,
            roleColorStrings: a,
        } = (function (e) {
            let t = new Date(tl.default.extractTimestamp(e.id)),
                {
                    username: n,
                    roleColor: r,
                    roleColorStrings: l,
                } = (0, s.cf)([e6.Ay], () => {
                    let t = e6.Ay.getMember(e.guildId, e.userId);
                    return {
                        username: e6.Ay.getNick(e.guildId, e.userId) ?? e.user?.username,
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: n, roleColor: r, roleColorStrings: l };
        })(t),
        o = (0, ts.gn)(t.guildId, t.userId, a ?? null);
    return (0, r.jsxs)("div", {
        className: ta.og,
        children: [
            (0, r.jsx)(f._, { className: ta.Kk, color: "currentColor", size: "sm" }),
            (0, r.jsx)("span", {
                className: ta.x$,
                children: (0, r.jsxs)(v.E, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(eh.m, {
                            text: l,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, r.jsx)(eY.g, {
                                className: ta.IP,
                                variant: "text-md/semibold",
                                name: l,
                                colorString: i ?? null,
                                colorStrings: o,
                            }),
                        }),
                        O.intl.string(P.default.plwH8d),
                    ],
                }),
            }),
            (0, r.jsx)(ti.A, { timestamp: n, timestampFormat: "L", className: ta.vE }),
        ],
    });
}
var td = n(639796);
function tu(e) {
    let t,
        n,
        i,
        a,
        o,
        { guildId: d } = e,
        u =
            ((t = (0, s.yK)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(d) ?? [], [d])),
            (n = l.useMemo(
                () =>
                    [...t]
                        .sort((e, t) =>
                            tl.default.extractTimestamp(e.id) < tl.default.extractTimestamp(t.id) ? 1 : -1,
                        )
                        .slice(0, void 0),
                [t, void 0],
            )),
            (i = (0, s.yK)([e6.Ay], () => {
                let e = new Set();
                return (
                    n.forEach((t) => {
                        null == e6.Ay.getMember(d, t.userId) && e.add(t.userId);
                    }),
                    Array.from(e)
                );
            }, [d, n])),
            l.useEffect(() => {
                i.length > 0 && i.forEach((e) => tr.A.requestMember(d, e));
            }, [d, i]),
            (a = l.useMemo(() => {
                let e = i.slice(0, tn.JM / 2);
                return e.length > 0 ? { [d]: e } : {};
            }, [d, i])),
            (0, tn.Eq)(a, "GuildPowerupsRecentActivity"),
            (o = (0, s.bG)([c.A], () => c.A.getGuild(d)?.premiumSubscriberCount)),
            l.useEffect(() => {
                o !== t.length && (0, tt.VU)(d);
            }, [d, o, t.length]),
            n);
    return 0 === u.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h.D, {
                      className: td.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: O.intl.string(O.t.yM9Krm),
                  }),
                  (0, r.jsx)(A.Ip, {
                      className: td.k,
                      fade: !0,
                      children: u.map((e, t) => (0, r.jsx)(to, { boost: e }, `boost-activity-${t}`)),
                  }),
              ],
          });
}
var tc = n(502525);
function t_(e) {
    let t,
        i,
        { guildId: a, powerupListingId: o } = e;
    (t = (0, b.C$)(a, "useLoadGuildPowerups")),
        l.useEffect(() => {
            t && (0, z.z9)(a);
        }, [a, t]),
        l.useEffect(() => {
            (0, J.AK)(a), (0, J.Xd)(a);
        }, [a]);
    let d = (0, b.C$)(a, "GuildPowerupsOverview");
    (0, K.Pq)(a);
    let c = (0, s.bG)([F.A], () => F.A.getStateForGuild(a)),
        p = (0, _.A)(a),
        j = l.useRef(!1),
        { shouldShow: C, modalConfig: L } = { shouldShow: !1, modalConfig: null },
        w = null == o && null != L,
        y = [];
    C && w && y.push(g.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [N, R] = (0, S.kn)(y),
        k =
            ((i = (0, s.bG)([F.A], () => F.A.getStateForGuild(a))),
            l.useMemo(
                () =>
                    Q.reduce((e, t) => {
                        let n = i?.powerupCatalog[t];
                        if (null == n) return e;
                        let r = (function (e, t, n) {
                            let r = [],
                                l = t.reduce((e, t) => {
                                    if (t.type !== D.o9.PERK) return e;
                                    let n = X[t.skuId];
                                    return null == n || ((e[n] ??= []), e[n].push(t)), e;
                                }, {});
                            for (let e of t) {
                                if (e.type === D.o9.LEVEL) {
                                    r.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = X[e.skuId];
                                if (null != t) {
                                    let e = l[t];
                                    if (void 0 !== e) {
                                        let n = H[t];
                                        e.sort((e, t) => n.indexOf(e.skuId) - n.indexOf(t.skuId)),
                                            r.push({ type: "multiPerk", group: t, powerups: e }),
                                            (l[t] = void 0);
                                    }
                                    continue;
                                }
                                r.push({ type: "singlePerk", powerup: e, badge: D.ys[e.skuId] });
                            }
                            return (
                                n && e === D.o9.PERK && r.unshift({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL),
                                        n = e.findIndex(
                                            (e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group,
                                        );
                                    if (-1 !== t && -1 !== n && n !== t + 1) {
                                        let t = [...e],
                                            [r] = t.splice(n, 1),
                                            l = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL);
                                        return t.splice(l + 1, 0, r), t;
                                    }
                                    return e;
                                })(r)
                            );
                        })(t, n, d);
                        return e.push({ type: t, listings: r }), e;
                    }, []),
                [i?.powerupCatalog, d],
            )),
        T = eI(
            k
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            a,
        );
    return (l.useEffect(() => {
        if (null != o && !j.current)
            for (let e of k)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === o) {
                        (0, eS.A)(a, t.powerup), (j.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === o || t.powerups.some((e) => e.skuId === o))) {
                        j.current = !0;
                        let e = T[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(D.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, u.bG)(t), (j.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && o === U.W5) {
                        (0, G.A)({ guildId: a, analyticsLocation: E.A.GUILD_POWERUPS_OVERVIEW }), (j.current = !0);
                        return;
                    }
                }
    }, [a, o, k, T]),
    l.useEffect(() => {
        if (null != N && null != L) {
            let e = {
                onCloseCallback: () => {
                    R(ea.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${N}`,
            };
            (0, x.openModalLazy)(async () => {
                let { default: e } = await n.e("86618").then(n.bind(n, 442241));
                return (t) => (0, r.jsx)(e, { modalConfig: L, markAsDismissed: R, ...t });
            }, e);
        }
    }, [a, N, R, L]),
    c?.powerupCatalog == null)
        ? null
        : (0, r.jsxs)("div", {
              className: tc.kL,
              children: [
                  (0, r.jsxs)(I.A, {
                      className: tc.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(I.A.Icon, { icon: f._, "aria-label": "" }),
                          (0, r.jsx)(I.A.Title, { children: O.intl.string(P.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: tc.hQ,
                      children: [
                          (0, r.jsx)(A.Ip, {
                              className: tc.DO,
                              children: k.map((e) => {
                                  let { type: t, listings: n } = e,
                                      { title: l, description: i } = (function (e) {
                                          switch (e) {
                                              case D.o9.LEVEL:
                                                  return {
                                                      title: O.intl.string(P.default["TXY/b0"]),
                                                      description: O.intl.string(P.default.aJv4PB),
                                                  };
                                              case D.o9.PERK:
                                                  return {
                                                      title: O.intl.string(P.default.TV3Vm8),
                                                      description: O.intl.string(P.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      s = t === D.o9.LEVEL ? A.Ip : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: tc.lt,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: tc.kn,
                                                  children: [
                                                      (0, r.jsx)(h.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: l,
                                                      }),
                                                      (0, r.jsx)(v.E, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: i,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(s, {
                                                  orientation: "horizontal",
                                                  className: m()(tc.qJ, tc.kn, { [tc.dU]: t === D.o9.LEVEL }),
                                                  fade: !0,
                                                  children: n.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, r.jsx)(
                                                                  eA,
                                                                  {
                                                                      guildId: a,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: n[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, r.jsx)(
                                                                  eL,
                                                                  { guildId: a, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  ej,
                                                                  { guildId: a, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  W,
                                                                  { guildId: a },
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
                          (0, r.jsxs)("div", {
                              className: tc.so,
                              children: [
                                  p
                                      ? (0, r.jsx)(eX, { guildId: a })
                                      : (0, r.jsxs)("div", {
                                            className: tc.CG,
                                            children: [
                                                (0, r.jsx)(q.A, {
                                                    guildId: a,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: ep.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: ep.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: ep.ZSU.CARD,
                                                    },
                                                }),
                                                (0, r.jsx)(te, { guildId: a }),
                                            ],
                                        }),
                                  (0, r.jsx)(tu, { guildId: a }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tp(e) {
    let { guildId: t, powerupListingId: n } = e,
        l = (0, s.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, s.bG)([d.A], () => d.A.hasLoadedExperiments),
        m = (0, _.A)(t),
        g = (0, u.PR)(),
        x = !p || null == m || null == l,
        f = (0, a.Ay)(null != g ? g : []);
    return ((0, o.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: f.analyticsLocations },
        },
        { disableTrack: x },
    ),
    x)
        ? null
        : (0, r.jsx)(t_, { guildId: t, powerupListingId: n });
}
