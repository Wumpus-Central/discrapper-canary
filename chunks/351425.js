l.r(t), l.d(t, { default: () => tx });
var n = l(627968),
    s = l(64700),
    r = l(562708),
    i = l(17928),
    o = l(688810),
    a = l(139286),
    u = l(736056),
    d = l(976860),
    c = l(71393),
    p = l(363487);
l(321073), l(323874), l(14289), l(35956);
var m = l(503698),
    g = l.n(m),
    f = l(554146),
    x = l(192308),
    A = l(104510),
    h = l(364522),
    E = l(534514),
    I = l(834730),
    v = l(793574),
    _ = l(131607),
    j = l(742589),
    y = l(488803),
    S = l(289704),
    b = l(821609),
    w = l(146793),
    R = l(661531);
function C(e) {
    return e
        ? { textColor: "text-default", iconColor: R.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: R.A.colors.TEXT_MUTED };
}
var L = l(522055),
    N = l(881756),
    P = l(904629);
function T(e) {
    let t = (0, i.bG)([L.A], () => L.A.getStateForGuild(e));
    return s.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, P.k)(e);
    }, [t?.entitlements]);
}
var G = l(853513),
    O = l(375708),
    D = l(843095),
    k = l(568065),
    V = l(800007),
    U = l(576709),
    M = l(989177),
    W = l(313124);
function F(e) {
    let t,
        l,
        { guildId: r } = e,
        o = s.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, i.cf)([L.A], () => ({
            state: L.A.getStateForGuild(r),
            lowestGameServerCost: L.A.getLowestGameCostForGuild(r),
        })),
        d =
            ((t = (0, i.bG)([L.A], () => L.A.getStateForGuild(r)?.entitlements, [r])),
            (l = T(r)),
            s.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: O.intl.string(G.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: p } = (0, N.A)(),
        { textColor: m } = C(d?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(w.NI, {
              label: O.intl.string(U.default["B3OfL/"]),
              badge: k.ys[V.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: r, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, n.jsx)("div", {
                      className: g()(W.ZS, M.Sl),
                      children: (0, n.jsx)(S.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: W.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, n.jsx)(w.Ft, {
                      title: O.intl.string(U.default["B3OfL/"]),
                      textColor: m,
                      footer: (0, n.jsx)(w.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, n.jsx)(I.E, {
                          className: M.h_,
                          color: m,
                          variant: "text-sm/medium",
                          children: O.intl.format(U.default["+UqyGU"], { gameName: c, gameName2: p }),
                      }),
                  }),
                  (0, n.jsx)(w.kd, {
                      children: (0, n.jsx)(b.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? O.intl.string(U.default.PuvU5b)
                                  : O.intl.string(U.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, D.A)({ guildId: r, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
var B = l(645619),
    K = l(842846),
    z = l(396748),
    $ = l(868652);
l(667532);
var J = l(512750);
let H = { guildTagsBadgePacks: [J.tv, J.OJ, J.Ht, J.jF] },
    X = Object.entries(H).reduce((e, t) => {
        let [l, n] = t;
        for (let t of n) e[t] = l;
        return e;
    }, {}),
    Q = [k.o9.LEVEL, k.o9.PERK];
var Z = l(182859),
    q = l(210273),
    Y = l(998418),
    ee = l(722523),
    et = l(172218),
    el = l(294384),
    en = l(813847),
    es = l(43105),
    er = l(186111),
    ei = l(621466),
    eo = l(49999);
function ea(e) {
    let { powerup: t, targetRef: l, isCardVisible: r } = e,
        o = (0, i.bG)([er.A], () => er.A.hasLayers()),
        a = (0, x.useHasAnyModalOpen)(),
        u =
            t.skuId === J.FB
                ? {
                      title: O.intl.string(G.default.YWo6VL),
                      body: O.intl.string(G.default.gXVvKc),
                      dismissibleContentType: f.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || o || !r || a || d.push(u.dismissibleContentType);
    let [c, p] = (0, _.kn)(d);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: l, topThreshold: n = 40, bottomThreshold: r = 60, enabled: i = !0 } = e;
        s.useEffect(() => {
            if (!i || t?.current == null) return;
            let e = null,
                s = (s) => {
                    if (t?.current == null || !(0, ei.vq)(s.target, HTMLElement)) return;
                    let i = s.target;
                    if (!i.contains(t.current)) return;
                    let o = i.scrollTop;
                    if (null === e) {
                        e = o;
                        return;
                    }
                    let a = o - e,
                        u = Math.abs(a);
                    ((a < 0 && u > n) || (a > 0 && u > r)) && l();
                };
            return (
                document.addEventListener("scroll", s, { passive: !0, capture: !0 }),
                () => {
                    document.removeEventListener("scroll", s, { capture: !0 });
                }
            );
        }, [i, t, l, n, r]);
    })({
        targetRef: l,
        onShouldClose: s.useCallback(() => {
            p(eo.i.INDIRECT_ACTION);
        }, [p]),
        enabled: null != c,
    }),
    null == u || null == c)
        ? null
        : (0, n.jsx)(es.A, {
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
    let { guildId: t, powerup: l, className: s } = e,
        r = (0, Y.Ay)(t, l),
        i = r.type !== k.b_.LEVEL_ACTIVATED,
        o = (0, el.A)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, en.e)(l, r, o);
    return (0, n.jsx)(w.$L, { status: a, cost: i ? l.cost : void 0, className: s });
}
function ec(e) {
    let { guildId: t, powerup: l, badge: r, className: i, onHover: o, children: a } = e,
        u = (0, p.A)(t),
        d = (0, Y.Ay)(t, l),
        c = d.type !== k.b_.INACTIVE,
        m = d.sourceEntitlement?.ends_at != null,
        g = (0, el.A)(t, l, "GuildPowerupCard"),
        f = s.useRef(null),
        x = (0, eu.A)(t, l),
        [A, h] = s.useState(!1),
        E = (0, et.K)(h, 1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(w.NI, {
                label: l.title,
                isActive: c,
                isWarning: m,
                badge: r,
                canRollback: g,
                onClick: x,
                onMouseOver: () => o?.(!0),
                onMouseLeave: () => o?.(!1),
                className: i,
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
    ef = l(254204);
function ex(e) {
    let t,
        { active: l, nextActive: s, position: r } = e;
    return (
        (t = l && !1 !== s ? k.z0.FULL : l && !1 === s ? k.z0.HALF : k.z0.NONE),
        (0, n.jsxs)("div", {
            className: ef.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(ef.progress, ef[r], ef[t]) }),
                (0, n.jsx)("div", {
                    className: g()(ef.boostContainer, M.JD, { [ef.boostContainerActive]: l, [M.vu]: l }),
                    children: (0, n.jsx)(A._, { size: "sm", color: R.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function eA(e) {
    let { isActive: t, index: l } = e,
        { textColor: r, iconColor: i } = C(t),
        o = s.useMemo(() => {
            let e = eg.t[l];
            if (null == e) return [];
            let t = e.tier === em.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let s = (0, q.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: ef.perkRow,
                        children: [
                            (0, n.jsx)(s, { color: i, size: "sm" }),
                            (0, n.jsx)(I.E, {
                                className: ef.perkText,
                                color: r,
                                variant: "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${l}-${t}`,
                );
            });
        }, [l, i, r]);
    return (0, n.jsxs)("div", {
        className: ef.perkRowContainer,
        children: [
            o,
            (0, n.jsx)("div", {
                className: ef.perkRow,
                children: (0, n.jsx)(I.E, {
                    color: r,
                    variant: "text-sm/medium",
                    children: O.intl.string(G.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eh(e) {
    let t,
        { guildId: l, index: r, powerup: i, nextPowerup: o } = e,
        a = (0, Y.Ay)(l, i),
        u = (0, Y.Ay)(l, o),
        d = a.type !== k.b_.INACTIVE,
        c = u.type !== k.b_.INACTIVE,
        p = a.type === k.b_.TIER_OVERRIDE_ACTIVATED,
        [m, g] = s.useState(void 0);
    (0, ep.A)(m), (t = 0 === r ? k.At.START : null == o ? k.At.END : k.At.MIDDLE);
    let { textColor: f } = C(d);
    return (0, n.jsxs)(ec, {
        guildId: l,
        powerup: i,
        className: ef.card,
        children: [
            (0, n.jsx)(ex, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(w.Ft, {
                title: i.title,
                textColor: f,
                footer: !p && (0, n.jsx)(ed, { className: ef.footer, guildId: l, powerup: i }),
                children: (0, n.jsx)(eA, { isActive: d, index: r }),
            }),
            !p && (0, n.jsx)(w.kd, { children: (0, n.jsx)(ee.Ay, { guildId: l, powerup: i, onError: g }) }),
        ],
    });
}
var eE = l(990078),
    eI = l(775602),
    ev = l(468689),
    e_ = l(915667);
function ej(e, t) {
    let r = (0, p.A)(t) ?? !1,
        o = (0, i.bG)([B.A], () => B.A.getStateForGuild(t)?.allPowerups),
        a = (0, i.bG)([B.A], () => B.A.getStateForGuild(t)?.unlockedPowerups);
    return s.useMemo(() => {
        let s = {};
        for (let i of e) {
            let e =
                "guildTagsBadgePacks" === i
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: s, allPowerups: r, unlockedPowerups: i } = e,
                              o = O.intl.string(G.default.KC9HRW),
                              a = O.intl.string(G.default.GJiSmP),
                              u = r?.[J.SL],
                              d = i?.[J.SL] != null,
                              c = O.intl.string(G.default["/egwJA"]),
                              p = d ? void 0 : O.intl.string(G.default.W6Vwn3),
                              m = d ? void 0 : O.intl.string(G.default.lvk1Gc),
                              g = d ? O.intl.string(G.default["9CfkLO"]) : O.intl.string(O.t["+7XY31"]),
                              f = d ? "secondary" : "expressive",
                              h = s
                                  ? () => {
                                        d
                                            ? ev.A.open(t, em.BEX.TAG, em.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, e_.A)(t, u),
                                            (0, x.closeAllModals)();
                                    }
                                  : void 0;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, x.openModalLazy)(
                                      async () => {
                                          let { default: r } = await Promise.all([l.e("7255"), l.e("75295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(r, {
                                                  guildId: t,
                                                  title: o,
                                                  description: O.intl.string(G.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      s && null != h && null != g
                                                          ? {
                                                                variant: f,
                                                                text: g,
                                                                icon: "expressive" === f ? A._ : void 0,
                                                                onClick: h,
                                                            }
                                                          : void 0,
                                                  ...l,
                                              });
                                      },
                                      { onCloseCallback: r?.onModalClose },
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
                      })({ guildId: t, canUseBoosts: r, allPowerups: o, unlockedPowerups: a })
                    : void 0;
            null != e && (s[i] = e);
        }
        return s;
    }, [e, t, r, o, a]);
}
var ey = l(401996);
function eS(e) {
    let { guildId: t, group: l, powerups: r } = e,
        [o, a] = s.useState(!1),
        u = (0, i.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        d = ej([l], t)[l],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        p = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                s = (0, Y.jJ)(l, n),
                r = s.some((e) => e.type !== k.b_.INACTIVE);
            if (n.length <= 0) return null;
            let i = s.reduce(
                (e, t) => {
                    let { sourceEntitlement: l } = t,
                        n = l?.ends_at;
                    return null == n ? e : null == e || n < e ? n : e;
                },
                void 0,
            );
            null != i
                ? (t = { type: "expiring", expiringAt: i })
                : r && (t = { type: "active", statusText: O.intl.string(G.default.FFLkmx) });
            let o = s.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === k.b_.POWERUP_ACTIVATED ? e + n.cost : e;
                }, 0),
                a = s.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, s[0]?.powerup?.cost ?? 0),
                u = s.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e + (l?.cost ?? 0);
                }, 0),
                d = r ? o : a;
            return {
                isActive: r,
                status: t,
                cost: d,
                costDecorator: !r && u > d ? "+" : void 0,
                expiringAt: i,
                activeCost: o,
                minCost: a,
                totalCost: u,
            };
        })({ guildId: t, powerups: r }),
        { textColor: m } = C(p?.isActive ?? !1);
    if (null == p || null == d) return null;
    let { status: g, cost: f, costDecorator: x } = p;
    return (0, n.jsxs)(w.NI, {
        label: d.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(r),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, n.jsx)("img", { alt: "", src: c, className: ey.S }),
            (0, n.jsx)(w.Ft, {
                title: d.title,
                textColor: m,
                footer: (0, n.jsx)(w.$L, { status: g, cost: f, costDecorator: x }),
                children: (0, n.jsx)(I.E, {
                    className: ey.h,
                    color: m,
                    variant: "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, n.jsx)(w.kd, {
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
var eb = l(490557);
function ew(e) {
    let { guildId: t, powerup: l, badge: r } = e,
        [i, o] = s.useState(void 0);
    (0, ep.A)(i);
    let [a, u] = s.useState(!1),
        { textColor: d } = C((0, Y.Ay)(t, l).type !== k.b_.INACTIVE);
    return (0, n.jsxs)(ec, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: r,
        children: [
            (0, n.jsx)(eb.l, { className: M.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(w.Ft, {
                title: l.title,
                textColor: d,
                footer: (0, n.jsx)(ed, { guildId: t, powerup: l }),
                children: (0, n.jsx)(I.E, {
                    className: M.h_,
                    color: d,
                    variant: "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, n.jsx)(w.kd, { children: (0, n.jsx)(ee.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var eR = l(862482),
    eC = l(944304),
    eL = l(975571),
    eN = l(864310),
    eP = l(403362),
    eT = l(408278),
    eG = l(789645),
    eO = l(818905);
function eD(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: eO.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(I.E, {
                color: "always-white",
                variant: "text-md/semibold",
                children: O.intl.string(G.default.diMhWc),
            }),
            (0, n.jsx)(I.E, {
                color: "always-white",
                variant: "text-sm/medium",
                children: O.intl.string(G.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: eO.VN,
                children: (0, n.jsx)(eT.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": O.intl.string(O.t.cpT0Cq),
                    onClick: () => {
                        t(eo.i.USER_DISMISS);
                    },
                    icon: eG.P,
                }),
            }),
        ],
    });
}
var ek = l(972213),
    eV = l(695366),
    eU = l(689568),
    eM = l(859241),
    eW = l(676908);
function eF(e) {
    let { guildId: t, powerupNames: l, warnings: r } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eN.A)(e),
                n = (0, i.bG)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(e), [e]),
                r = l - s.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return s.useMemo(
                () =>
                    r <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: O.intl.string(G.default.n5hQhc),
                              description: O.intl.formatToPlainString(G.default.iAaAiG, {
                                  boostCount: r,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: r,
                          },
                [r, t],
            );
        })(t, l);
    return o
        ? (0, n.jsxs)("div", {
              className: eW.kL,
              children: [
                  (0, n.jsx)(eV.E, { color: R.A.colors.TEXT_FEEDBACK_WARNING, className: eW.Kk }),
                  (0, n.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, n.jsxs)(I.E, {
                      variant: "text-sm/medium",
                      children: [
                          u,
                          r?.map((e, t) =>
                              (0, n.jsx)(
                                  I.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: eW.$e,
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
var eB = l(472485);
function eK(e) {
    let { text: t } = e;
    return (0, n.jsx)("div", {
        className: eB.ac,
        children: (0, n.jsx)(I.E, { variant: "text-sm/medium", children: t }),
    });
}
function ez(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)?.features.has(em.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: O.intl.string(G.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        r = (function (e) {
            let t,
                l =
                    ((t = (0, i.bG)([B.A], () => B.A.getStateForGuild(e))),
                    s.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, P.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eP.Vq);
                    }, [t])),
                n = T(e),
                r = l.length > 0 || n.length > 0;
            if (!r) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? O.intl.string(U.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === J.FB) && u.push(O.intl.string(G.default.Sfr0Jw)),
                n.length > 0 && u.push(O.intl.string(U.default.wiungr)),
                { shouldShow: r, expiringPowerups: l, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = [f.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [a, u] = (0, _.kn)(o),
        d = a === f.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        p = (function (e) {
            let t = [];
            e || t.push(f.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, _.kn)(t);
            return { shouldShow: null != l && l === f.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: n };
        })(r.shouldShow || d);
    return l.shouldShow || r.shouldShow || p.shouldShow || d
        ? (0, n.jsxs)("div", {
              className: eB.kL,
              children: [
                  (0, n.jsx)(I.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: O.intl.string(G.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(eK, { text: l.text }),
                  r.shouldShow &&
                      (0, n.jsx)(eF, { guildId: t, powerupNames: r.expiringPowerupNames, warnings: r.warnings }),
                  !1,
                  p.shouldShow && (0, n.jsx)(eD, { markAsDismissed: p.markAsDismissed }),
                  d &&
                      (0, n.jsx)(Z.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: em.ZSU.CARD,
                          },
                          onDismiss: () => u(eo.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
var e$ = l(697311);
function eJ(e) {
    let { count: t, type: l } = e,
        s = (function (e, t) {
            switch (t) {
                case k.yG.AVAILABLE:
                    return O.intl.formatToPlainString(G.default.BdRXZA, { boostCount: e });
                case k.yG.SPENT:
                    return O.intl.formatToPlainString(G.default.xvgIVG, { boostCount: e });
                case k.yG.TOTAL:
                    return O.intl.string(G.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: e$.k,
        role: "img",
        "aria-label": `${t}, ${s}`,
        children: [
            (0, n.jsxs)("div", {
                className: e$.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(A._, {
                        size: "sm",
                        color: l !== k.yG.AVAILABLE ? R.A.colors.TEXT_MUTED : R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, n.jsx)(E.D, {
                        color: l !== k.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(I.E, { "aria-hidden": "true", color: "text-muted", variant: "text-sm/medium", children: s }),
        ],
    });
}
var eH = l(685293);
function eX(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        { available: s, spent: r, total: o } = (0, eN.A)(t);
    if (null != l)
        return (0, n.jsxs)("div", {
            className: eH.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: eH.N1,
                    children: [
                        (0, n.jsx)(I.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: O.intl.string(G.default.hjvcLO),
                        }),
                        (0, n.jsx)(I.E, {
                            className: eH.C2,
                            variant: "text-xs/semibold",
                            children: O.intl.format(G.default.fXE30d, {
                                helpDeskArticle: eL.A.getArticleURL(em.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eH.hQ,
                    children: [
                        (0, n.jsx)(eJ, { count: s, type: k.yG.AVAILABLE }),
                        (0, n.jsx)(eJ, { count: r, type: k.yG.SPENT }),
                        (0, n.jsx)(eJ, { count: o, type: k.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(eC.A, {
                    className: eH.S6,
                    guild: l,
                    analyticsLocation: {
                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: eR.XD.CUSTOM,
                    size: eR.lO.LARGE,
                    icon: (0, n.jsx)(A._, {
                        className: eH.Ng,
                        size: "sm",
                        color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, n.jsx)(ez, { guildId: t }),
            ],
        });
}
var eQ = l(97808),
    eZ = l(778712),
    eq = l(463930),
    eY = l(730134),
    e0 = l(85829),
    e1 = l(319756),
    e9 = l(854627),
    e6 = l(696451),
    e5 = l(317525),
    e3 = l(287809),
    e8 = l(562153),
    e4 = l(19575),
    e7 = l(32746);
let e2 = e4.Ay.getEnableHardwareAcceleration() ? eQ.Js : eY.A;
function te(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        s = (0, i.bG)([e5.A], () => e5.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        r = (0, i.bG)([e3.default], () => e3.default.getCurrentUser()),
        o = r?.id,
        a = (0, i.bG)([e6.Ay], () => (null != o ? e6.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, i.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        {
            avatarDecorationSrc: p,
            avatarSrc: m,
            eventHandlers: f,
        } = (0, e9.A)({ userId: r?.id, guildId: t, size: eZ._3.SIZE_40, animateOnHover: !d });
    return null == l || null == a || null == r
        ? null
        : (0, n.jsxs)("div", {
              className: e7.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: e7.FS,
                      children: [
                          (0, n.jsx)(I.E, {
                              variant: "text-md/semibold",
                              children: O.intl.string(u ? G.default.KSWK1U : G.default.XXXX5l),
                          }),
                          (0, n.jsx)(I.E, {
                              variant: "text-sm/medium",
                              children: O.intl.format(u ? G.default["7fWTg4"] : G.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, e0.K4)({
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
                  null != s &&
                      !u &&
                      (0, n.jsx)(e1.V, {
                          avatar: (0, n.jsx)(e2, {
                              ...f,
                              user: r,
                              src: m,
                              avatarDecoration: p,
                              size: eZ._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(eq.g, {
                              variant: "text-md/semibold",
                              name: e8.Ay.getName(t, null, r),
                              colorString: s.colorString,
                              colorStrings: s.colorStrings,
                          }),
                          className: g()(e7.Qs, e7.cX),
                          message: O.intl.string(O.t["6OSasb"]),
                          decorations: (0, n.jsx)(A._, {
                              color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: e7.$J,
                          }),
                      }),
                  (0, n.jsx)(eC.A, {
                      guild: l,
                      className: e7.Qs,
                      analyticsLocation: {
                          page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: eR.XD.BRAND,
                      size: eR.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(A._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tt = l(820739),
    tl = l(860071),
    tn = l(935208),
    ts = l(323472),
    tr = l(492349),
    ti = l(606049),
    to = l(58703),
    ta = l(967144),
    tu = l(168642),
    td = l(198964);
function tc(e) {
    let t,
        { boost: l, phase: s, sortKey: r } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(tn.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: s,
                } = (0, i.cf)([e6.Ay], () => {
                    let t = e6.Ay.getMember(e.guildId, e.userId);
                    return {
                        username:
                            e6.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? O.intl.string(O.t["30mdIx"]),
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: s };
        })(l),
        d = (0, ta.gn)(l.guildId, l.userId, u ?? null),
        c = (0, ts.H)("GuildPowerupsRecentActivityRow"),
        p = new Date(r),
        { Icon: m, color: f } = (function (e, t) {
            if (!t) return { Icon: A._, color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK };
            switch (e) {
                case "gave":
                    return { Icon: A._, color: R.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tr.x, color: R.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tr.x, color: R.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(s, c);
    return (0, n.jsxs)("div", {
        className: tu.og,
        children: [
            (0, n.jsx)(m, { color: f, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tu.x$,
                children: [
                    (0, n.jsx)(I.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tu.IP,
                        children: (0, n.jsx)(eE.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(eq.g, {
                                variant: "text-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: d,
                            }),
                        }),
                    }),
                    (0, n.jsx)(I.E, {
                        tag: "span",
                        variant: c ? "text-md/normal" : "text-md/medium",
                        color: c ? "text-muted" : void 0,
                        className: tu.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return O.intl.string(G.default.plwH8d);
                                case "expiring":
                                    return O.intl.formatToPlainString(G.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return O.intl.string(G.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(ti.A, {
                timestamp: p,
                timestampFormat: c
                    ? 0 === (t = (0, to.m_)(p, new Date()))
                        ? `[${O.intl.string(O.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${O.intl.string(O.t.ZdDLO0)}]`
                          : "L"
                    : "L",
                className: c ? g()(td["text-xs/semibold"], tu.vE) : tu.iE,
            }),
        ],
    });
}
var tp = l(639796);
function tm(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, ts.H)("GuildPowerupsRecentActivity"),
                l = (0, i.yK)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [n] = s.useState(() => Date.now()),
                r = s.useMemo(
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
                                    s = (function (e, t) {
                                        switch (t.phase) {
                                            case "gave":
                                                return tn.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tn.default.extractTimestamp(e.id);
                                        }
                                    })(e, l);
                                return "expiring" === l.phase
                                    ? { boost: e, phase: "expiring", sortKey: s, endsAt: l.endsAt }
                                    : { boost: e, phase: l.phase, sortKey: s };
                            })
                            .sort((e, t) => t.sortKey - e.sortKey)
                            .slice(0, void 0),
                    [l, void 0, n, t],
                ),
                o = (0, i.yK)([e6.Ay], () => {
                    let t = new Set();
                    return (
                        r.forEach((l) => {
                            let { boost: n } = l;
                            null == e6.Ay.getMember(e, n.userId) && t.add(n.userId);
                        }),
                        Array.from(t)
                    );
                }, [e, r]);
            s.useEffect(() => {
                o.length > 0 && o.forEach((t) => tl.A.requestMember(e, t));
            }, [e, o]);
            let a = (0, i.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                u = s.useMemo(() => l.filter((e) => !e.ended).length, [l]),
                d = (0, i.bG)([eM.A], () => null != eM.A.getLastFetchedAtForGuild(e), [e]);
            return (
                s.useEffect(() => {
                    (a !== u || (t && !d)) && (0, tt.VU)(e, { includeEnded: t });
                }, [e, a, u, t, d]),
                r
            );
        })(t);
    return 0 === l.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(E.D, {
                      className: tp.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: O.intl.string(O.t.yM9Krm),
                  }),
                  (0, n.jsx)(h.Ip, {
                      className: tp.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(tc, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tg = l(502525);
function tf(e) {
    let t,
        r,
        { guildId: o, powerupListingId: a } = e;
    (t = (0, y.C$)(o, "useLoadGuildPowerups")),
        s.useEffect(() => {
            t && (0, z.z9)(o);
        }, [o, t]),
        s.useEffect(() => {
            (0, $.AK)(o), (0, $.Xd)(o);
        }, [o]);
    let u = (0, y.C$)(o, "GuildPowerupsOverview");
    (0, K.Pq)(o);
    let c = (0, i.bG)([B.A], () => B.A.getStateForGuild(o)),
        m = (0, p.A)(o),
        S = s.useRef(!1),
        { shouldShow: b, modalConfig: w } = { shouldShow: !1, modalConfig: null },
        R = null == a && null != w,
        C = [];
    b && R && C.push(f.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [L, N] = (0, _.kn)(C),
        P =
            ((r = (0, i.bG)([B.A], () => B.A.getStateForGuild(o))),
            s.useMemo(
                () =>
                    Q.reduce((e, t) => {
                        let l = r?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                s = t.reduce((e, t) => {
                                    if (t.type !== k.o9.PERK) return e;
                                    let l = X[t.skuId];
                                    return null == l || ((e[l] ??= []), e[l].push(t)), e;
                                }, {});
                            for (let e of t) {
                                if (e.type === k.o9.LEVEL) {
                                    n.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = X[e.skuId];
                                if (null != t) {
                                    let e = s[t];
                                    if (void 0 !== e) {
                                        let l = H[t];
                                        e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (s[t] = void 0);
                                    }
                                    continue;
                                }
                                n.push({ type: "singlePerk", powerup: e, badge: k.ys[e.skuId] });
                            }
                            return (
                                l && e === k.o9.PERK && n.unshift({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === J.SL),
                                        l = e.findIndex(
                                            (e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group,
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [n] = t.splice(l, 1),
                                            s = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === J.SL);
                                        return t.splice(s + 1, 0, n), t;
                                    }
                                    return e;
                                })(n)
                            );
                        })(t, l, u);
                        return e.push({ type: t, listings: n }), e;
                    }, []),
                [r?.powerupCatalog, u],
            )),
        T = ej(
            P.flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            o,
        );
    return (s.useEffect(() => {
        if (null != a && !S.current)
            for (let e of P)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === a) {
                        (0, e_.A)(o, t.powerup), (S.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === a || t.powerups.some((e) => e.skuId === a))) {
                        S.current = !0;
                        let e = T[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(k.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, d.bG)(t), (S.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && a === V.W5) {
                        (0, D.A)({ guildId: o, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }), (S.current = !0);
                        return;
                    }
                }
    }, [o, a, P, T]),
    s.useEffect(() => {
        if (null != L && null != w) {
            let e = {
                onCloseCallback: () => {
                    N(eo.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${L}`,
            };
            (0, x.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("98887"), l.e("86618")]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: w, markAsDismissed: N, ...t });
            }, e);
        }
    }, [o, L, N, w]),
    c?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tg.kL,
              children: [
                  (0, n.jsxs)(j.A, {
                      className: tg.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(j.A.Icon, { icon: A._, "aria-label": "" }),
                          (0, n.jsx)(j.A.Title, { children: O.intl.string(G.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tg.hQ,
                      children: [
                          (0, n.jsx)(h.Ip, {
                              className: tg.DO,
                              children: P.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: s, description: r } = (function (e) {
                                          switch (e) {
                                              case k.o9.LEVEL:
                                                  return {
                                                      title: O.intl.string(G.default["TXY/b0"]),
                                                      description: O.intl.string(G.default.aJv4PB),
                                                  };
                                              case k.o9.PERK:
                                                  return {
                                                      title: O.intl.string(G.default.TV3Vm8),
                                                      description: O.intl.string(G.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      i = t === k.o9.LEVEL ? h.Ip : "div";
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tg.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tg.kn,
                                                  children: [
                                                      (0, n.jsx)(E.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: s,
                                                      }),
                                                      (0, n.jsx)(I.E, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: r,
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(i, {
                                                  orientation: "horizontal",
                                                  className: g()(tg.qJ, tg.kn, { [tg.dU]: t === k.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, n.jsx)(
                                                                  eh,
                                                                  {
                                                                      guildId: o,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: l[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, n.jsx)(
                                                                  ew,
                                                                  { guildId: o, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, n.jsx)(
                                                                  eS,
                                                                  { guildId: o, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, n.jsx)(
                                                                  F,
                                                                  { guildId: o },
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
                              className: tg.so,
                              children: [
                                  m
                                      ? (0, n.jsx)(eX, { guildId: o })
                                      : (0, n.jsxs)("div", {
                                            className: tg.CG,
                                            children: [
                                                (0, n.jsx)(Z.A, {
                                                    guildId: o,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: em.ZSU.CARD,
                                                    },
                                                }),
                                                (0, n.jsx)(te, { guildId: o }),
                                            ],
                                        }),
                                  (0, n.jsx)(tm, { guildId: o }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tx(e) {
    let { guildId: t, powerupListingId: l } = e,
        s = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        m = (0, i.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, p.A)(t),
        f = (0, d.PR)(),
        x = !m || null == g || null == s,
        A = (0, o.Ay)(null != f ? f : []);
    return ((0, a.A)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: A.analyticsLocations },
        },
        { disableTrack: x },
    ),
    x)
        ? null
        : (0, n.jsx)(tf, { guildId: t, powerupListingId: l });
}
