l.r(t), l.d(t, { default: () => tv });
var n = l(627968),
    i = l(64700),
    s = l(562708),
    r = l(17928),
    o = l(688810),
    a = l(139286),
    u = l(736056),
    d = l(976860),
    c = l(71393),
    p = l(363487);
l(321073), l(323874), l(14289), l(35956);
var m = l(503698),
    g = l.n(m),
    f = l(192308),
    x = l(104510),
    A = l(364522),
    h = l(534514),
    E = l(834730),
    I = l(793574),
    v = l(131607),
    j = l(742589),
    _ = l(488803),
    S = l(289704),
    b = l(821609),
    y = l(612400),
    w = l(661531);
function C(e) {
    return e
        ? { textColor: "text-default", iconColor: w.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: w.A.colors.TEXT_MUTED };
}
var R = l(522055),
    L = l(881756),
    N = l(904629);
function P(e) {
    let t = (0, r.bG)([R.A], () => R.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, N.k)(e);
    }, [t?.entitlements]);
}
var T = l(645704),
    G = l(375708),
    k = l(843095),
    D = l(568065),
    O = l(800007),
    V = l(76660),
    U = l(594233),
    M = l(607204);
function W(e) {
    let t,
        l,
        { guildId: s } = e,
        o = i.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, r.cf)([R.A], () => ({
            state: R.A.getStateForGuild(s),
            lowestGameServerCost: R.A.getLowestGameCostForGuild(s),
        })),
        d =
            ((t = (0, r.bG)([R.A], () => R.A.getStateForGuild(s)?.entitlements, [s])),
            (l = P(s)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: G.intl.string(T.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: p } = (0, L.A)(),
        { textColor: m } = C(d?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(y.NI, {
              label: G.intl.string(V.default["B3OfL/"]),
              badge: D.ys[O.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, k.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, n.jsx)("div", {
                      className: g()(M.ZS, U.Sl),
                      children: (0, n.jsx)(S.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: M.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, n.jsx)(y.Ft, {
                      title: G.intl.string(V.default["B3OfL/"]),
                      textColor: m,
                      footer: (0, n.jsx)(y.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, n.jsx)(E.E, {
                          className: U.h_,
                          color: m,
                          variant: "text-sm/medium",
                          children: G.intl.format(V.default["+UqyGU"], { gameName: c, gameName2: p }),
                      }),
                  }),
                  (0, n.jsx)(y.kd, {
                      children: (0, n.jsx)(b.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? G.intl.string(V.default.PuvU5b)
                                  : G.intl.string(V.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, k.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
var F = l(645619),
    B = l(289007),
    K = l(396748),
    z = l(868652);
l(667532);
var $ = l(512750);
let J = { guildTagsBadgePacks: [$.tv, $.OJ, $.Ht, $.jF] },
    X = Object.entries(J).reduce((e, t) => {
        let [l, n] = t;
        for (let t of n) e[t] = l;
        return e;
    }, {}),
    H = [D.o9.LEVEL, D.o9.PERK];
var Q = l(182859),
    Z = l(210273),
    q = l(998418),
    Y = l(722523),
    ee = l(172218),
    et = l(294384),
    el = l(813847),
    en = l(554146),
    ei = l(43105),
    es = l(186111),
    er = l(621466),
    eo = l(49999);
function ea(e) {
    let { powerup: t, targetRef: l, isCardVisible: s } = e,
        o = (0, r.bG)([es.A], () => es.A.hasLayers()),
        a = (0, f.useHasAnyModalOpen)(),
        u =
            t.skuId === $.FB
                ? {
                      title: G.intl.string(T.default.YWo6VL),
                      body: G.intl.string(T.default.gXVvKc),
                      dismissibleContentType: en.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || o || !s || a || d.push(u.dismissibleContentType);
    let [c, p] = (0, v.kn)(d);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: l, topThreshold: n = 40, bottomThreshold: s = 60, enabled: r = !0 } = e;
        i.useEffect(() => {
            if (!r || t?.current == null) return;
            let e = null,
                i = (i) => {
                    if (t?.current == null || !(0, er.vq)(i.target, HTMLElement)) return;
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
                };
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
            p(eo.i.INDIRECT_ACTION);
        }, [p]),
        enabled: null != c,
    }),
    null == u || null == c)
        ? null
        : (0, n.jsx)(ei.A, {
              targetElementRef: l,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: u.title,
              body: u.body,
              onRequestClose: () => {
                  p(eo.i.USER_DISMISS);
              },
          });
}
var eu = l(224331);
function ed(e) {
    let { guildId: t, powerup: l, className: i } = e,
        s = (0, q.Ay)(t, l),
        r = s.type !== D.b_.LEVEL_ACTIVATED,
        o = (0, et.A)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, el.e)(l, s, o);
    return (0, n.jsx)(y.$L, { status: a, cost: r ? l.cost : void 0, className: i });
}
function ec(e) {
    let { guildId: t, powerup: l, badge: s, className: r, onHover: o, children: a } = e,
        u = (0, p.A)(t),
        d = (0, q.Ay)(t, l),
        c = d.type !== D.b_.INACTIVE,
        m = d.sourceEntitlement?.ends_at != null,
        g = (0, et.A)(t, l, "GuildPowerupCard"),
        f = i.useRef(null),
        x = (0, eu.A)(t, l),
        [A, h] = i.useState(!1),
        E = (0, ee.K)(h, 1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(y.NI, {
                label: l.title,
                isActive: c,
                isWarning: m,
                badge: s,
                canRollback: g,
                onClick: x,
                onMouseOver: () => o?.(!0),
                onMouseLeave: () => o?.(!1),
                className: r,
                ref: (e) => {
                    (f.current = e), (E.current = e);
                },
                children: a,
            }),
            !g && u && (0, n.jsx)(ea, { powerup: l, targetRef: f, isCardVisible: A }),
        ],
    });
}
var ep = l(867060),
    em = l(652215),
    eg = l(508155),
    ef = l(736591);
function ex(e) {
    let t,
        { active: l, nextActive: i, position: s } = e;
    return (
        (t = l && !1 !== i ? D.z0.FULL : l && !1 === i ? D.z0.HALF : D.z0.NONE),
        (0, n.jsxs)("div", {
            className: ef.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(ef.progress, ef[s], ef[t]) }),
                (0, n.jsx)("div", {
                    className: g()(ef.boostContainer, U.JD, { [ef.boostContainerActive]: l, [U.vu]: l }),
                    children: (0, n.jsx)(x._, { size: "sm", color: w.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function eA(e) {
    let { isActive: t, index: l } = e,
        { textColor: s, iconColor: r } = C(t),
        o = i.useMemo(() => {
            let e = eg.t[l];
            if (null == e) return [];
            let t = e.tier === em.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, Z.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: ef.perkRow,
                        children: [
                            (0, n.jsx)(i, { color: r, size: "sm" }),
                            (0, n.jsx)(E.E, {
                                className: ef.perkText,
                                color: s,
                                variant: "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${l}-${t}`,
                );
            });
        }, [l, r, s]);
    return (0, n.jsxs)("div", {
        className: ef.perkRowContainer,
        children: [
            o,
            (0, n.jsx)("div", {
                className: ef.perkRow,
                children: (0, n.jsx)(E.E, {
                    color: s,
                    variant: "text-sm/medium",
                    children: G.intl.string(T.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eh(e) {
    let t,
        { guildId: l, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, q.Ay)(l, r),
        u = (0, q.Ay)(l, o),
        d = a.type !== D.b_.INACTIVE,
        c = u.type !== D.b_.INACTIVE,
        p = a.type === D.b_.TIER_OVERRIDE_ACTIVATED,
        [m, g] = i.useState(void 0);
    (0, ep.A)(m), (t = 0 === s ? D.At.START : null == o ? D.At.END : D.At.MIDDLE);
    let { textColor: f } = C(d);
    return (0, n.jsxs)(ec, {
        guildId: l,
        powerup: r,
        className: ef.card,
        children: [
            (0, n.jsx)(ex, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(y.Ft, {
                title: r.title,
                textColor: f,
                footer: !p && (0, n.jsx)(ed, { className: ef.footer, guildId: l, powerup: r }),
                children: (0, n.jsx)(eA, { isActive: d, index: s }),
            }),
            !p && (0, n.jsx)(y.kd, { children: (0, n.jsx)(Y.Ay, { guildId: l, powerup: r, onError: g }) }),
        ],
    });
}
var eE = l(990078),
    eI = l(775602),
    ev = l(468689),
    ej = l(915667);
function e_(e, t) {
    let s = (0, p.A)(t) ?? !1,
        o = (0, r.bG)([F.A], () => F.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([F.A], () => F.A.getStateForGuild(t)?.unlockedPowerups);
    return i.useMemo(() => {
        let i = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, unlockedPowerups: r } = e,
                              o = G.intl.string(T.default.KC9HRW),
                              a = G.intl.string(T.default.GJiSmP),
                              u = s?.[$.SL],
                              d = r?.[$.SL] != null,
                              c = G.intl.string(T.default["/egwJA"]),
                              p = d ? void 0 : G.intl.string(T.default.W6Vwn3),
                              m = d ? void 0 : G.intl.string(T.default.lvk1Gc),
                              g = d ? G.intl.string(T.default["9CfkLO"]) : G.intl.string(G.t["+7XY31"]),
                              A = d ? "secondary" : "expressive",
                              h = i
                                  ? () => {
                                        d
                                            ? ev.A.open(t, em.BEX.TAG, em.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, ej.A)(t, u),
                                            (0, f.closeAllModals)();
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, f.openModalLazy)(
                                      async () => {
                                          let { default: s } = await Promise.all([l.e("53803"), l.e("75295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: G.intl.string(T.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      i && null != h && null != g
                                                          ? {
                                                                variant: A,
                                                                text: g,
                                                                icon: "expressive" === A ? x._ : void 0,
                                                                onClick: h,
                                                            }
                                                          : void 0,
                                                  ...l,
                                              });
                                      },
                                      { onCloseCallback: s?.onModalClose },
                                  );
                              },
                              viewCta: c,
                              viewCtaTooltip: p,
                              image: {
                                  staticUrl:
                                      "https://cdn.discordapp.com/assets/content/8dd1f75ba9ef2e0587c9963de0964edc7577f98385e85372e9dc600d353dd3b1.png",
                                  animatedUrl:
                                      "https://cdn.discordapp.com/assets/content/54f74ffad2a1a6c57dd4284f05d14cdeffaf68b38d0543003a4f6a4ba74c9096.png",
                              },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: s, allPowerups: o, unlockedPowerups: a })
                    : void 0;
            null != e && (i[r] = e);
        }
        return i;
    }, [e, t, s, o, a]);
}
var eS = l(804300);
function eb(e) {
    let { guildId: t, group: l, powerups: s } = e,
        [o, a] = i.useState(!1),
        u = (0, r.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        d = e_([l], t)[l],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        p = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                i = (0, q.jJ)(l, n),
                s = i.some((e) => e.type !== D.b_.INACTIVE);
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
                : s && (t = { type: "active", statusText: G.intl.string(T.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === D.b_.POWERUP_ACTIVATED ? e + n.cost : e;
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
        { textColor: m } = C(p?.isActive ?? !1);
    if (null == p || null == d) return null;
    let { status: g, cost: f, costDecorator: x } = p;
    return (0, n.jsxs)(y.NI, {
        label: d.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(s),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, n.jsx)("img", { alt: "", src: c, className: eS.S }),
            (0, n.jsx)(y.Ft, {
                title: d.title,
                textColor: m,
                footer: (0, n.jsx)(y.$L, { status: g, cost: f, costDecorator: x }),
                children: (0, n.jsx)(E.E, {
                    className: eS.h,
                    color: m,
                    variant: "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, n.jsx)(y.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, n.jsx)(eE.m, {
                              asContainer: !0,
                              text: d.viewCtaTooltip,
                              delay: 100,
                              children: (0, n.jsx)(b.$, { text: d.viewCta, fullWidth: !0 }),
                          })
                        : (0, n.jsx)(b.$, { text: d.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var ey = l(490557);
function ew(e) {
    let { guildId: t, powerup: l, badge: s } = e,
        [r, o] = i.useState(void 0);
    (0, ep.A)(r);
    let [a, u] = i.useState(!1),
        { textColor: d } = C((0, q.Ay)(t, l).type !== D.b_.INACTIVE);
    return (0, n.jsxs)(ec, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: s,
        children: [
            (0, n.jsx)(ey.l, { className: U.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(y.Ft, {
                title: l.title,
                textColor: d,
                footer: (0, n.jsx)(ed, { guildId: t, powerup: l }),
                children: (0, n.jsx)(E.E, {
                    className: U.h_,
                    color: d,
                    variant: "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, n.jsx)(y.kd, { children: (0, n.jsx)(Y.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var eC = l(862482),
    eR = l(944304),
    eL = l(975571),
    eN = l(864310),
    eP = l(403362),
    eT = l(639060),
    eG = l(408278),
    ek = l(789645),
    eD = l(760665);
function eO(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsxs)("div", {
        className: eD.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: eD.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(E.E, {
                color: "always-white",
                variant: "text-md/semibold",
                children: G.intl.string(T.default.diMhWc),
            }),
            (0, n.jsx)(E.E, {
                color: "always-white",
                variant: "text-sm/medium",
                children: G.intl.string(T.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: eD.VN,
                children: (0, n.jsx)(eG.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": G.intl.string(G.t.cpT0Cq),
                    onClick: () => {
                        t(eo.i.USER_DISMISS);
                    },
                    icon: ek.P,
                }),
            }),
        ],
    });
}
var eV = l(972213),
    eU = l(695366),
    eM = l(990624);
function eW(e) {
    let { notificationConfig: t, markAsDismissed: l } = e;
    return (0, n.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, n.jsx)("div", {
                className: eM.VN,
                children: (0, n.jsx)(eG.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": G.intl.string(G.t.cpT0Cq),
                    onClick: () => {
                        l(eo.i.USER_DISMISS);
                    },
                    icon: eV.d,
                }),
            }),
            (0, n.jsx)(eU.E, { color: w.A.colors.TEXT_FEEDBACK_WARNING, className: eM.Kk }),
            (0, n.jsx)(E.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, n.jsx)(E.E, { variant: "text-sm/medium", children: t.description }),
        ],
    });
}
var eF = l(859241),
    eB = l(102316);
function eK(e) {
    let { guildId: t, powerupNames: l, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eN.A)(e),
                n = (0, r.bG)([eF.A], () => eF.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = l - i.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return i.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: G.intl.string(T.default.n5hQhc),
                              description: G.intl.formatToPlainString(T.default.iAaAiG, {
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
              className: eB.kL,
              children: [
                  (0, n.jsx)(eU.E, { color: w.A.colors.TEXT_FEEDBACK_WARNING, className: eB.Kk }),
                  (0, n.jsx)(E.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, n.jsxs)(E.E, {
                      variant: "text-sm/medium",
                      children: [
                          u,
                          s?.map((e, t) =>
                              (0, n.jsx)(
                                  E.E,
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
var ez = l(758437);
function e$(e) {
    let { text: t } = e;
    return (0, n.jsx)("div", {
        className: ez.ac,
        children: (0, n.jsx)(E.E, { variant: "text-sm/medium", children: t }),
    });
}
function eJ(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(em.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: G.intl.string(T.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                l =
                    ((t = (0, r.bG)([F.A], () => F.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, N.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eP.Vq);
                    }, [t])),
                n = P(e),
                s = l.length > 0 || n.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? G.intl.string(V.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === $.FB) && u.push(G.intl.string(T.default.Sfr0Jw)),
                n.length > 0 && u.push(G.intl.string(V.default.wiungr)),
                { shouldShow: s, expiringPowerups: l, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = (function (e) {
            let t = (0, eT.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [n, i] = (0, v.ww)(l, e);
            return { shouldShow: null != t && n === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = [en.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [u, d] = (0, v.kn)(a),
        p = u === en.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        m = (function (e) {
            let t = [];
            e || t.push(en.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, v.kn)(t);
            return {
                shouldShow: null != l && l === en.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
                markAsDismissed: n,
            };
        })(s.shouldShow || o.shouldShow || p);
    return l.shouldShow || s.shouldShow || o.shouldShow || m.shouldShow || p
        ? (0, n.jsxs)("div", {
              className: ez.kL,
              children: [
                  (0, n.jsx)(E.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: G.intl.string(T.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(e$, { text: l.text }),
                  s.shouldShow &&
                      (0, n.jsx)(eK, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, n.jsx)(eW, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  m.shouldShow && (0, n.jsx)(eO, { markAsDismissed: m.markAsDismissed }),
                  p &&
                      (0, n.jsx)(Q.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: em.ZSU.CARD,
                          },
                          onDismiss: () => d(eo.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
var eX = l(710047);
function eH(e) {
    let { count: t, type: l } = e,
        i = (function (e, t) {
            switch (t) {
                case D.yG.AVAILABLE:
                    return G.intl.formatToPlainString(T.default.BdRXZA, { boostCount: e });
                case D.yG.SPENT:
                    return G.intl.formatToPlainString(T.default.xvgIVG, { boostCount: e });
                case D.yG.TOTAL:
                    return G.intl.string(T.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: eX.k,
        role: "img",
        "aria-label": `${t}, ${i}`,
        children: [
            (0, n.jsxs)("div", {
                className: eX.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(x._, {
                        size: "sm",
                        color: l !== D.yG.AVAILABLE ? w.A.colors.TEXT_MUTED : w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, n.jsx)(h.D, {
                        color: l !== D.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(E.E, { "aria-hidden": "true", color: "text-muted", variant: "text-sm/medium", children: i }),
        ],
    });
}
var eQ = l(568877);
function eZ(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: s, total: o } = (0, eN.A)(t);
    if (null != l)
        return (0, n.jsxs)("div", {
            className: eQ.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: eQ.N1,
                    children: [
                        (0, n.jsx)(E.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: G.intl.string(T.default.hjvcLO),
                        }),
                        (0, n.jsx)(E.E, {
                            className: eQ.C2,
                            variant: "text-xs/semibold",
                            children: G.intl.format(T.default.fXE30d, {
                                helpDeskArticle: eL.A.getArticleURL(em.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eQ.hQ,
                    children: [
                        (0, n.jsx)(eH, { count: i, type: D.yG.AVAILABLE }),
                        (0, n.jsx)(eH, { count: s, type: D.yG.SPENT }),
                        (0, n.jsx)(eH, { count: o, type: D.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(eR.A, {
                    className: eQ.S6,
                    guild: l,
                    analyticsLocation: {
                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: eC.XD.CUSTOM,
                    size: eC.lO.LARGE,
                    icon: (0, n.jsx)(x._, {
                        className: eQ.Ng,
                        size: "sm",
                        color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, n.jsx)(eJ, { guildId: t }),
            ],
        });
}
var eq = l(97808),
    eY = l(778712),
    e0 = l(463930),
    e6 = l(730134),
    e1 = l(63152),
    e3 = l(319756),
    e4 = l(854627),
    e9 = l(696451),
    e5 = l(317525),
    e8 = l(287809),
    e7 = l(562153),
    e2 = l(19575),
    te = l(941610);
let tt = e2.Ay.getEnableHardwareAcceleration() ? eq.Js : e6.A;
function tl(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, r.bG)([e5.A], () => e5.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([e8.default], () => e8.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([e9.Ay], () => (null != o ? e9.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, r.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        {
            avatarDecorationSrc: p,
            avatarSrc: m,
            eventHandlers: f,
        } = (0, e4.A)({ userId: s?.id, guildId: t, size: eY._3.SIZE_40, animateOnHover: !d });
    return null == l || null == a || null == s
        ? null
        : (0, n.jsxs)("div", {
              className: te.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: te.FS,
                      children: [
                          (0, n.jsx)(E.E, {
                              variant: "text-md/semibold",
                              children: G.intl.string(u ? T.default.KSWK1U : T.default.XXXX5l),
                          }),
                          (0, n.jsx)(E.E, {
                              variant: "text-sm/medium",
                              children: G.intl.format(u ? T.default["7fWTg4"] : T.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, e1.K4)({
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
                      !u &&
                      (0, n.jsx)(e3.V, {
                          avatar: (0, n.jsx)(tt, {
                              ...f,
                              user: s,
                              src: m,
                              avatarDecoration: p,
                              size: eY._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(e0.g, {
                              variant: "text-md/semibold",
                              name: e7.Ay.getName(t, null, s),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: g()(te.Qs, te.cX),
                          message: G.intl.string(G.t["6OSasb"]),
                          decorations: (0, n.jsx)(x._, {
                              color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: te.$J,
                          }),
                      }),
                  (0, n.jsx)(eR.A, {
                      guild: l,
                      className: te.Qs,
                      analyticsLocation: {
                          page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: eC.XD.BRAND,
                      size: eC.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(x._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tn = l(820739),
    ti = l(860071),
    ts = l(935208),
    tr = l(323472),
    to = l(492349),
    ta = l(606049),
    tu = l(58703),
    td = l(967144),
    tc = l(226114),
    tp = l(788724);
function tm(e) {
    let t,
        { boost: l, phase: i, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(ts.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: i,
                } = (0, r.cf)([e9.Ay], () => {
                    let t = e9.Ay.getMember(e.guildId, e.userId);
                    return {
                        username:
                            e9.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? G.intl.string(G.t["30mdIx"]),
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: i };
        })(l),
        d = (0, td.gn)(l.guildId, l.userId, u ?? null),
        c = (0, tr.H)("GuildPowerupsRecentActivityRow"),
        p = new Date(s),
        { Icon: m, color: f } = (function (e, t) {
            if (!t) return { Icon: x._, color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK };
            switch (e) {
                case "gave":
                    return { Icon: x._, color: w.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: to.x, color: w.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: to.x, color: w.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i, c);
    return (0, n.jsxs)("div", {
        className: tc.og,
        children: [
            (0, n.jsx)(m, { color: f, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tc.x$,
                children: [
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tc.IP,
                        children: (0, n.jsx)(eE.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(e0.g, {
                                variant: "text-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: d,
                            }),
                        }),
                    }),
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: c ? "text-md/normal" : "text-md/medium",
                        color: c ? "text-muted" : void 0,
                        className: tc.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return G.intl.string(T.default.plwH8d);
                                case "expiring":
                                    return G.intl.formatToPlainString(T.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return G.intl.string(T.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(ta.A, {
                timestamp: p,
                timestampFormat: c
                    ? 0 === (t = (0, tu.m_)(p, new Date()))
                        ? `[${G.intl.string(G.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${G.intl.string(G.t.ZdDLO0)}]`
                          : "L"
                    : "L",
                className: c ? g()(tp["text-xs/semibold"], tc.vE) : tc.iE,
            }),
        ],
    });
}
var tg = l(816564);
function tf(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, tr.H)("GuildPowerupsRecentActivity"),
                l = (0, r.yK)([eF.A], () => eF.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(
                    () =>
                        l
                            .map((e) => {
                                let l = t
                                        ? e.ended || (null != e.endsAt && e.endsAt.getTime() <= n)
                                            ? { phase: "expired" }
                                            : null != e.endsAt && e.endsAt.getTime() - n <= 2592e5
                                              ? { phase: "expiring", endsAt: e.endsAt }
                                              : { phase: "gave" }
                                        : { phase: "gave" },
                                    i = (function (e, t) {
                                        switch (t.phase) {
                                            case "gave":
                                                return ts.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? ts.default.extractTimestamp(e.id);
                                        }
                                    })(e, l);
                                return "expiring" === l.phase
                                    ? { boost: e, phase: "expiring", sortKey: i, endsAt: l.endsAt }
                                    : { boost: e, phase: l.phase, sortKey: i };
                            })
                            .sort((e, t) => t.sortKey - e.sortKey)
                            .slice(0, void 0),
                    [l, void 0, n, t],
                ),
                o = (0, r.yK)([e9.Ay], () => {
                    let t = new Set();
                    return (
                        s.forEach((l) => {
                            let { boost: n } = l;
                            null == e9.Ay.getMember(e, n.userId) && t.add(n.userId);
                        }),
                        Array.from(t)
                    );
                }, [e, s]);
            i.useEffect(() => {
                o.length > 0 && o.forEach((t) => ti.A.requestMember(e, t));
            }, [e, o]);
            let a = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                u = i.useMemo(() => l.filter((e) => !e.ended).length, [l]),
                d = (0, r.bG)([eF.A], () => null != eF.A.getLastFetchedAtForGuild(e), [e]);
            return (
                i.useEffect(() => {
                    (a !== u || (t && !d)) && (0, tn.VU)(e, { includeEnded: t });
                }, [e, a, u, t, d]),
                s
            );
        })(t);
    return 0 === l.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, {
                      className: tg.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: G.intl.string(G.t.yM9Krm),
                  }),
                  (0, n.jsx)(A.Ip, {
                      className: tg.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(tm, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tx = l(942857),
    tA = l(545445),
    th = l(939981),
    tE = l(207293);
function tI(e) {
    let t,
        s,
        o,
        a,
        u,
        m,
        S,
        b,
        y,
        w,
        C,
        { guildId: R, powerupListingId: L } = e;
    (t = (0, _.C$)(R, "useLoadGuildPowerups")),
        i.useEffect(() => {
            t && (0, K.z9)(R);
        }, [R, t]),
        i.useEffect(() => {
            (0, z.AK)(R), (0, z.Xd)(R);
        }, [R]);
    let N = (0, _.C$)(R, "GuildPowerupsOverview");
    (0, B.Pq)(R);
    let P = (0, r.bG)([F.A], () => F.A.getStateForGuild(R)),
        V = (0, p.A)(R),
        U = i.useRef(!1),
        { shouldShow: M, modalConfig: Z } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(R))),
            (o = (0, tx.A)()),
            (a = (0, p.A)(R) ?? !1),
            (u = (0, r.bG)([F.A], () => F.A.getStateForGuild(R))),
            (m = u?.allPowerups?.[$.zY]),
            (S = m?.storeRemovalDate),
            (b = (0, tA.p)(R, "GuildPowerupsOverview")),
            (y = !o && a && b && null != s),
            (w = i.useMemo(() => {
                if (!y || null == m || null == S) return null;
                let e = (0, th.A)(S);
                return {
                    dismissibleContent: en.M.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL,
                    header: `${m.title} ${G.intl.formatToPlainString(T.default["6e2ry1"], { dateString: e })}`,
                    bodies: [
                        G.intl.formatToPlainString(T.default.jd8fki, {
                            startDate: e,
                            endDate: e,
                            perkName: m.title,
                            boostCount: m.cost,
                        }),
                    ],
                    primaryButtonText: G.intl.string(T.default["4A5erd"]),
                };
            }, [y, m, S])),
            { shouldShow: y, modalConfig: w }),
        q = null == L && null != Z,
        Y = [];
    M && q && Y.push(Z.dismissibleContent);
    let [ee, et] = (0, v.kn)(Y),
        el =
            ((C = (0, r.bG)([F.A], () => F.A.getStateForGuild(R))),
            i.useMemo(
                () =>
                    H.reduce((e, t) => {
                        let l = C?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== D.o9.PERK) return e;
                                    let l = X[t.skuId];
                                    return null == l || ((e[l] ??= []), e[l].push(t)), e;
                                }, {});
                            for (let e of t) {
                                if (e.type === D.o9.LEVEL) {
                                    n.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = X[e.skuId];
                                if (null != t) {
                                    let e = i[t];
                                    if (void 0 !== e) {
                                        let l = J[t];
                                        e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0);
                                    }
                                    continue;
                                }
                                n.push({ type: "singlePerk", powerup: e, badge: D.ys[e.skuId] });
                            }
                            return (
                                l && e === D.o9.PERK && n.push({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL),
                                        l = e.findIndex(
                                            (e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group,
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [n] = t.splice(l, 1),
                                            i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.SL);
                                        return t.splice(i + 1, 0, n), t;
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === $.d0);
                                        if (t <= 0) return e;
                                        let l = [...e],
                                            [n] = l.splice(t, 1);
                                        return l.unshift(n), l;
                                    })(n),
                                )
                            );
                        })(t, l, N);
                        return e.push({ type: t, listings: n }), e;
                    }, []),
                [C?.powerupCatalog, N],
            )),
        ei = e_(
            el
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            R,
        );
    return (i.useEffect(() => {
        if (null != L && !U.current)
            for (let e of el)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === L) {
                        (0, ej.A)(R, t.powerup), (U.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === L || t.powerups.some((e) => e.skuId === L))) {
                        U.current = !0;
                        let e = ei[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(D.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, d.bG)(t), (U.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && L === O.W5) {
                        (0, k.A)({ guildId: R, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }), (U.current = !0);
                        return;
                    }
                }
    }, [R, L, el, ei]),
    i.useEffect(() => {
        if (null != ee && null != Z) {
            let e = {
                onCloseCallback: () => {
                    et(eo.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${ee}`,
            };
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("24628"), l.e("86618")]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: Z, markAsDismissed: et, ...t });
            }, e);
        }
    }, [R, ee, et, Z]),
    P?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tE.kL,
              children: [
                  (0, n.jsxs)(j.A, {
                      className: tE.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(j.A.Icon, { icon: x._, "aria-label": "" }),
                          (0, n.jsx)(j.A.Title, { children: G.intl.string(T.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tE.hQ,
                      children: [
                          (0, n.jsx)(A.Ip, {
                              className: tE.DO,
                              children: el.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case D.o9.LEVEL:
                                                  return {
                                                      title: G.intl.string(T.default["TXY/b0"]),
                                                      description: G.intl.string(T.default.aJv4PB),
                                                  };
                                              case D.o9.PERK:
                                                  return {
                                                      title: G.intl.string(T.default.TV3Vm8),
                                                      description: G.intl.string(T.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = t === D.o9.LEVEL ? A.Ip : "div";
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tE.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tE.kn,
                                                  children: [
                                                      (0, n.jsx)(h.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, n.jsx)(E.E, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: s,
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(r, {
                                                  orientation: "horizontal",
                                                  className: g()(tE.qJ, tE.kn, { [tE.dU]: t === D.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, n.jsx)(
                                                                  eh,
                                                                  {
                                                                      guildId: R,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: l[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, n.jsx)(
                                                                  ew,
                                                                  { guildId: R, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, n.jsx)(
                                                                  eb,
                                                                  { guildId: R, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, n.jsx)(
                                                                  W,
                                                                  { guildId: R },
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
                              className: tE.so,
                              children: [
                                  V
                                      ? (0, n.jsx)(eZ, { guildId: R })
                                      : (0, n.jsxs)("div", {
                                            className: tE.CG,
                                            children: [
                                                (0, n.jsx)(Q.A, {
                                                    guildId: R,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: em.ZSU.CARD,
                                                    },
                                                }),
                                                (0, n.jsx)(tl, { guildId: R }),
                                            ],
                                        }),
                                  (0, n.jsx)(tf, { guildId: R }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tv(e) {
    let { guildId: t, powerupListingId: l } = e,
        i = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        m = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, p.A)(t),
        f = (0, d.PR)(),
        x = !m || null == g || null == i,
        A = (0, o.Ay)(null != f ? f : []);
    return ((0, a.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: A.analyticsLocations },
        },
        { disableTrack: x },
    ),
    x)
        ? null
        : (0, n.jsx)(tI, { guildId: t, powerupListingId: l });
}
