l.r(t), l.d(t, { default: () => tm });
var s = l(627968),
    n = l(64700),
    r = l(110259),
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
    x = l(554146),
    f = l(192308),
    A = l(104510),
    h = l(364522),
    E = l(534514),
    I = l(834730),
    v = l(793574),
    j = l(932001),
    S = l(742589),
    _ = l(488803),
    y = l(289704),
    b = l(821609),
    w = l(369174),
    R = l(661531);
function L(e) {
    return e
        ? { textColor: "text-default", iconColor: R.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: R.A.colors.TEXT_MUTED };
}
var N = l(522055),
    C = l(881756),
    P = l(904629);
function G(e) {
    let t = (0, i.bG)([N.A], () => N.A.getStateForGuild(e));
    return n.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, P.k)(e);
    }, [t?.entitlements]);
}
var O = l(853513),
    k = l(985018),
    T = l(843095),
    D = l(568065),
    V = l(800007),
    U = l(576709),
    M = l(989177),
    W = l(313124);
function B(e) {
    let t,
        l,
        { guildId: r } = e,
        o = n.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, i.cf)([N.A], () => ({
            state: N.A.getStateForGuild(r),
            lowestGameServerCost: N.A.getLowestGameCostForGuild(r),
        })),
        d =
            ((t = (0, i.bG)([N.A], () => N.A.getStateForGuild(r)?.entitlements, [r])),
            (l = G(r)),
            n.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: k.intl.string(O.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: p } = (0, C.A)(),
        { textColor: m } = L(d?.type === "active");
    return null == a
        ? null
        : (0, s.jsxs)(w.NI, {
              label: k.intl.string(U.default["B3OfL/"]),
              badge: D.ys[V.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, T.A)({ guildId: r, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, s.jsx)("div", {
                      className: g()(W.ZS, M.Sl),
                      children: (0, s.jsx)(y.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: W.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, s.jsx)(w.Ft, {
                      title: k.intl.string(U.default["B3OfL/"]),
                      textColor: m,
                      footer: (0, s.jsx)(w.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, s.jsx)(I.E, {
                          className: M.h_,
                          color: m,
                          variant: "text-sm/medium",
                          children: k.intl.format(U.default["+UqyGU"], { gameName: c, gameName2: p }),
                      }),
                  }),
                  (0, s.jsx)(w.kd, {
                      children: (0, s.jsx)(b.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? k.intl.string(U.default.PuvU5b)
                                  : k.intl.string(U.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, T.A)({ guildId: r, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
var F = l(645619),
    K = l(941030),
    J = l(665171),
    z = l(942975);
l(667532);
var X = l(512750);
let $ = { guildTagsBadgePacks: [X.tv, X.OJ, X.Ht, X.jF] },
    H = Object.entries($).reduce((e, t) => {
        let [l, s] = t;
        for (let t of s) e[t] = l;
        return e;
    }, {}),
    Q = [D.o9.LEVEL, D.o9.PERK];
var q = l(182859),
    Z = l(210273),
    Y = l(998418),
    ee = l(722523),
    et = l(172218),
    el = l(294384),
    es = l(813847),
    en = l(43105),
    er = l(186111),
    ei = l(621466),
    eo = l(49999);
function ea(e) {
    let { powerup: t, targetRef: l, isCardVisible: r } = e,
        o = (0, i.bG)([er.A], () => er.A.hasLayers()),
        a = (0, f.useHasAnyModalOpen)(),
        u =
            t.skuId === X.FB
                ? {
                      title: k.intl.string(O.default.YWo6VL),
                      body: k.intl.string(O.default.gXVvKc),
                      dismissibleContentType: x.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || o || !r || a || d.push(u.dismissibleContentType);
    let [c, p] = (0, j.kn)(d);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: l, topThreshold: s = 40, bottomThreshold: r = 60, enabled: i = !0 } = e;
        n.useEffect(() => {
            if (!i || t?.current == null) return;
            let e = null,
                n = (n) => {
                    if (t?.current == null || !(0, ei.vq)(n.target, HTMLElement)) return;
                    let i = n.target;
                    if (!i.contains(t.current)) return;
                    let o = i.scrollTop;
                    if (null === e) {
                        e = o;
                        return;
                    }
                    let a = o - e,
                        u = Math.abs(a);
                    ((a < 0 && u > s) || (a > 0 && u > r)) && l();
                };
            return (
                document.addEventListener("scroll", n, { passive: !0, capture: !0 }),
                () => {
                    document.removeEventListener("scroll", n, { capture: !0 });
                }
            );
        }, [i, t, l, s, r]);
    })({
        targetRef: l,
        onShouldClose: n.useCallback(() => {
            p(eo.i.INDIRECT_ACTION);
        }, [p]),
        enabled: null != c,
    }),
    null == u || null == c)
        ? null
        : (0, s.jsx)(en.A, {
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
    let { guildId: t, powerup: l, className: n } = e,
        r = (0, Y.Ay)(t, l),
        i = r.type !== D.b_.LEVEL_ACTIVATED,
        o = (0, el.A)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, es.e)(l, r, o);
    return (0, s.jsx)(w.$L, { status: a, cost: i ? l.cost : void 0, className: n });
}
function ec(e) {
    let { guildId: t, powerup: l, badge: r, className: i, onHover: o, children: a } = e,
        u = (0, p.A)(t),
        d = (0, Y.Ay)(t, l),
        c = d.type !== D.b_.INACTIVE,
        m = d.sourceEntitlement?.ends_at != null,
        g = (0, el.A)(t, l, "GuildPowerupCard"),
        x = n.useRef(null),
        f = (0, eu.A)(t, l),
        [A, h] = n.useState(!1),
        E = (0, et.K)(h, 1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(w.NI, {
                label: l.title,
                isActive: c,
                isWarning: m,
                badge: r,
                canRollback: g,
                onClick: f,
                onMouseOver: () => o?.(!0),
                onMouseLeave: () => o?.(!1),
                className: i,
                ref: (e) => {
                    (x.current = e), (E.current = e);
                },
                children: a,
            }),
            !g && u && (0, s.jsx)(ea, { powerup: l, targetRef: x, isCardVisible: A }),
        ],
    });
}
var ep = l(867060),
    em = l(652215),
    eg = l(508155),
    ex = l(31823);
function ef(e) {
    let t,
        { active: l, nextActive: n, position: r } = e;
    return (
        (t = l && !1 !== n ? D.z0.FULL : l && !1 === n ? D.z0.HALF : D.z0.NONE),
        (0, s.jsxs)("div", {
            className: ex.progressContainer,
            children: [
                (0, s.jsx)("div", { className: g()(ex.progress, ex[r], ex[t]) }),
                (0, s.jsx)("div", {
                    className: g()(ex.boostContainer, M.JD, { [ex.boostContainerActive]: l, [M.vu]: l }),
                    children: (0, s.jsx)(A._, { size: "sm", color: R.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function eA(e) {
    let { isActive: t, index: l } = e,
        { textColor: r, iconColor: i } = L(t),
        o = n.useMemo(() => {
            let e = eg.t[l];
            if (null == e) return [];
            let t = e.tier === em.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let n = (0, Z.X)(e.perkIcon);
                return (0, s.jsxs)(
                    "div",
                    {
                        className: ex.perkRow,
                        children: [
                            (0, s.jsx)(n, { color: i, size: "sm" }),
                            (0, s.jsx)(I.E, {
                                className: ex.perkText,
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
    return (0, s.jsxs)("div", {
        className: ex.perkRowContainer,
        children: [
            o,
            (0, s.jsx)("div", {
                className: ex.perkRow,
                children: (0, s.jsx)(I.E, {
                    color: r,
                    variant: "text-sm/medium",
                    children: k.intl.string(O.default.nIj3LZ),
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
        d = a.type !== D.b_.INACTIVE,
        c = u.type !== D.b_.INACTIVE,
        p = a.type === D.b_.TIER_OVERRIDE_ACTIVATED,
        [m, g] = n.useState(void 0);
    (0, ep.A)(m), (t = 0 === r ? D.At.START : null == o ? D.At.END : D.At.MIDDLE);
    let { textColor: x } = L(d);
    return (0, s.jsxs)(ec, {
        guildId: l,
        powerup: i,
        className: ex.card,
        children: [
            (0, s.jsx)(ef, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, s.jsx)(w.Ft, {
                title: i.title,
                textColor: x,
                footer: !p && (0, s.jsx)(ed, { className: ex.footer, guildId: l, powerup: i }),
                children: (0, s.jsx)(eA, { isActive: d, index: r }),
            }),
            !p && (0, s.jsx)(w.kd, { children: (0, s.jsx)(ee.Ay, { guildId: l, powerup: i, onError: g }) }),
        ],
    });
}
var eE = l(990078),
    eI = l(775602),
    ev = l(997509),
    ej = l(915667);
function eS(e, t) {
    let r = (0, p.A)(t) ?? !1,
        o = (0, i.bG)([F.A], () => F.A.getStateForGuild(t)?.allPowerups),
        a = (0, i.bG)([F.A], () => F.A.getStateForGuild(t)?.unlockedPowerups);
    return n.useMemo(() => {
        let n = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: n, allPowerups: r, unlockedPowerups: i } = e,
                              o = k.intl.string(O.default.KC9HRW),
                              a = k.intl.string(O.default.GJiSmP),
                              u = r?.[X.SL],
                              d = i?.[X.SL] != null,
                              c = k.intl.string(O.default["/egwJA"]),
                              p = d ? void 0 : k.intl.string(O.default.W6Vwn3),
                              m = d ? void 0 : k.intl.string(O.default.lvk1Gc),
                              g = d ? k.intl.string(O.default["9CfkLO"]) : k.intl.string(k.t["+7XY31"]),
                              x = d ? "secondary" : "expressive",
                              h = n
                                  ? () => {
                                        d
                                            ? ev.A.open(t, em.BEX.TAG, em.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, ej.A)(t, u),
                                            (0, f.closeAllModals)();
                                    }
                                  : void 0,
                              E = D.m_;
                          return {
                              title: o,
                              description: a,
                              openModal: function (e) {
                                  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, f.openModalLazy)(
                                      async () => {
                                          let { default: r } = await Promise.all([l.e("7255"), l.e("75295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, s.jsx)(r, {
                                                  guildId: t,
                                                  title: o,
                                                  description: k.intl.string(O.default.BBRFRd),
                                                  powerups: e,
                                                  newPowerupSkuIdSet: E,
                                                  forceStaticImages: !0,
                                                  footerInfoText: m,
                                                  footerAction:
                                                      n && null != h && null != g
                                                          ? {
                                                                variant: x,
                                                                text: g,
                                                                icon: "expressive" === x ? A._ : void 0,
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
                              badge: "new",
                              newPowerupSkuIdSet: E,
                              image: {
                                  staticUrl:
                                      "https://cdn.discordapp.com/assets/content/8dd1f75ba9ef2e0587c9963de0964edc7577f98385e85372e9dc600d353dd3b1.png",
                                  animatedUrl:
                                      "https://cdn.discordapp.com/assets/content/54f74ffad2a1a6c57dd4284f05d14cdeffaf68b38d0543003a4f6a4ba74c9096.png",
                              },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: r, allPowerups: o, unlockedPowerups: a })
                    : void 0,
            i = {};
        for (let t of e) {
            let e = n(t);
            null != e && (i[t] = e);
        }
        return i;
    }, [e, t, r, o, a]);
}
var e_ = l(401996);
function ey(e) {
    let { guildId: t, group: l, powerups: r } = e,
        [o, a] = n.useState(!1),
        u = (0, i.bG)([eI.A], () => eI.A.useReducedMotion),
        d = eS([l], t)[l],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        p = (function (e) {
            let t,
                { guildId: l, powerups: s } = e,
                n = (0, Y.jJ)(l, s),
                r = n.some((e) => e.type !== D.b_.INACTIVE);
            if (s.length <= 0) return null;
            let i = n.reduce(
                (e, t) => {
                    let { sourceEntitlement: l } = t,
                        s = l?.ends_at;
                    return null == s ? e : null == e || s < e ? s : e;
                },
                void 0,
            );
            null != i
                ? (t = { type: "expiring", expiringAt: i })
                : r && (t = { type: "active", statusText: k.intl.string(O.default.FFLkmx) });
            let o = n.reduce((e, t) => {
                    let { type: l, powerup: s } = t;
                    return l === D.b_.POWERUP_ACTIVATED ? e + s.cost : e;
                }, 0),
                a = n.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, n[0]?.powerup?.cost ?? 0),
                u = n.reduce((e, t) => {
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
        { textColor: m } = L(p?.isActive ?? !1);
    if (null == p || null == d) return null;
    let { status: g, cost: x, costDecorator: f } = p;
    return (0, s.jsxs)(w.NI, {
        label: d.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(r),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, s.jsx)("img", { alt: "", src: c, className: e_.S }),
            (0, s.jsx)(w.Ft, {
                title: d.title,
                textColor: m,
                footer: (0, s.jsx)(w.$L, { status: g, cost: x, costDecorator: f }),
                children: (0, s.jsx)(I.E, {
                    className: e_.h,
                    color: m,
                    variant: "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, s.jsx)(w.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, s.jsx)(eE.m, {
                              asContainer: !0,
                              text: d.viewCtaTooltip,
                              delay: 100,
                              children: (0, s.jsx)(b.$, { text: d.viewCta, fullWidth: !0 }),
                          })
                        : (0, s.jsx)(b.$, { text: d.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eb = l(490557);
function ew(e) {
    let { guildId: t, powerup: l, badge: r } = e,
        [i, o] = n.useState(void 0);
    (0, ep.A)(i);
    let [a, u] = n.useState(!1),
        { textColor: d } = L((0, Y.Ay)(t, l).type !== D.b_.INACTIVE);
    return (0, s.jsxs)(ec, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: r,
        children: [
            (0, s.jsx)(eb.l, { className: M.Sl, powerup: l, isHovering: a }),
            (0, s.jsx)(w.Ft, {
                title: l.title,
                textColor: d,
                footer: (0, s.jsx)(ed, { guildId: t, powerup: l }),
                children: (0, s.jsx)(I.E, {
                    className: M.h_,
                    color: d,
                    variant: "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, s.jsx)(w.kd, { children: (0, s.jsx)(ee.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var eR = l(862482),
    eL = l(721923),
    eN = l(975571),
    eC = l(864310),
    eP = l(403362),
    eG = l(408278),
    eO = l(789645),
    ek = l(818905);
function eT(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, s.jsx)("img", { alt: "", className: ek.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, s.jsx)(I.E, {
                color: "always-white",
                variant: "text-md/semibold",
                children: k.intl.string(O.default.diMhWc),
            }),
            (0, s.jsx)(I.E, {
                color: "always-white",
                variant: "text-sm/medium",
                children: k.intl.string(O.default.pycxTr),
            }),
            (0, s.jsx)("div", {
                className: ek.VN,
                children: (0, s.jsx)(eG.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        t(eo.i.USER_DISMISS);
                    },
                    icon: eO.P,
                }),
            }),
        ],
    });
}
var eD = l(972213),
    eV = l(695366),
    eU = l(689568),
    eM = l(859241),
    eW = l(676908);
function eB(e) {
    let { guildId: t, powerupNames: l, warnings: r } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eC.A)(e),
                s = (0, i.bG)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(e), [e]),
                r = l - n.useMemo(() => s?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [s]);
            return n.useMemo(
                () =>
                    r <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: k.intl.string(O.default.n5hQhc),
                              description: k.intl.formatToPlainString(O.default.iAaAiG, {
                                  boostCount: r,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: r,
                          },
                [r, t],
            );
        })(t, l);
    return o
        ? (0, s.jsxs)("div", {
              className: eW.kL,
              children: [
                  (0, s.jsx)(eV.E, { color: R.A.colors.TEXT_FEEDBACK_WARNING, className: eW.Kk }),
                  (0, s.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, s.jsxs)(I.E, {
                      variant: "text-sm/medium",
                      children: [
                          u,
                          r?.map((e, t) =>
                              (0, s.jsx)(
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
var eF = l(472485);
function eK(e) {
    let { text: t } = e;
    return (0, s.jsx)("div", {
        className: eF.ac,
        children: (0, s.jsx)(I.E, { variant: "text-sm/medium", children: t }),
    });
}
function eJ(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)?.features.has(em.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: k.intl.string(O.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        r = (function (e) {
            let t,
                l =
                    ((t = (0, i.bG)([F.A], () => F.A.getStateForGuild(e))),
                    n.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, P.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eP.Vq);
                    }, [t])),
                s = G(e),
                r = l.length > 0 || s.length > 0;
            if (!r) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = s.length > 0 ? k.intl.string(U.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === X.FB) && u.push(k.intl.string(O.default.Sfr0Jw)),
                s.length > 0 && u.push(k.intl.string(U.default.wiungr)),
                { shouldShow: r, expiringPowerups: l, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = [x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [a, u] = (0, j.kn)(o),
        d = a === x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        p = (function (e) {
            let t = [];
            e || t.push(x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, s] = (0, j.kn)(t);
            return { shouldShow: null != l && l === x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: s };
        })(r.shouldShow || d);
    return l.shouldShow || r.shouldShow || p.shouldShow || d
        ? (0, s.jsxs)("div", {
              className: eF.kL,
              children: [
                  (0, s.jsx)(I.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: k.intl.string(O.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, s.jsx)(eK, { text: l.text }),
                  r.shouldShow &&
                      (0, s.jsx)(eB, { guildId: t, powerupNames: r.expiringPowerupNames, warnings: r.warnings }),
                  !1,
                  p.shouldShow && (0, s.jsx)(eT, { markAsDismissed: p.markAsDismissed }),
                  d &&
                      (0, s.jsx)(q.A, {
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
var ez = l(697311);
function eX(e) {
    let { count: t, type: l } = e;
    return (0, s.jsxs)("div", {
        className: ez.k,
        children: [
            (0, s.jsxs)("div", {
                className: ez.N,
                children: [
                    (0, s.jsx)(A._, {
                        size: "sm",
                        color: l !== D.yG.AVAILABLE ? R.A.colors.TEXT_MUTED : R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, s.jsx)(E.D, {
                        color: l !== D.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, s.jsx)(I.E, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: (function (e, t) {
                    switch (t) {
                        case D.yG.AVAILABLE:
                            return k.intl.formatToPlainString(O.default.BdRXZA, { boostCount: e });
                        case D.yG.SPENT:
                            return k.intl.formatToPlainString(O.default.xvgIVG, { boostCount: e });
                        case D.yG.TOTAL:
                            return k.intl.string(O.default["/F7Z2y"]);
                    }
                })(t, l),
            }),
        ],
    });
}
var e$ = l(685293);
function eH(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        { available: n, spent: r, total: o } = (0, eC.A)(t);
    if (null != l)
        return (0, s.jsxs)("div", {
            className: e$.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: e$.N1,
                    children: [
                        (0, s.jsx)(I.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: k.intl.string(O.default.hjvcLO),
                        }),
                        (0, s.jsx)(I.E, {
                            className: e$.C2,
                            variant: "text-xs/semibold",
                            children: k.intl.format(O.default.fXE30d, {
                                helpDeskArticle: eN.A.getArticleURL(em.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: e$.hQ,
                    children: [
                        (0, s.jsx)(eX, { count: n, type: D.yG.AVAILABLE }),
                        (0, s.jsx)(eX, { count: r, type: D.yG.SPENT }),
                        (0, s.jsx)(eX, { count: o, type: D.yG.TOTAL }),
                    ],
                }),
                (0, s.jsx)(eL.A, {
                    className: e$.S6,
                    guild: l,
                    analyticsLocation: {
                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: eR.XD.CUSTOM,
                    size: eR.lO.LARGE,
                    icon: (0, s.jsx)(A._, {
                        className: e$.Ng,
                        size: "sm",
                        color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, s.jsx)(eJ, { guildId: t }),
            ],
        });
}
var eQ = l(97808),
    eq = l(778712),
    eZ = l(463930),
    eY = l(730134),
    e0 = l(509536),
    e1 = l(319756),
    e9 = l(854627),
    e5 = l(696451),
    e6 = l(317525),
    e8 = l(287809),
    e3 = l(562153),
    e7 = l(19575),
    e2 = l(32746);
let e4 = e7.Ay.getEnableHardwareAcceleration() ? eQ.Js : eY.A;
function te(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        n = (0, i.bG)([e6.A], () => e6.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        r = (0, i.bG)([e8.default], () => e8.default.getCurrentUser()),
        o = r?.id,
        a = (0, i.bG)([e5.Ay], () => (null != o ? e5.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, i.bG)([eI.A], () => eI.A.useReducedMotion),
        {
            avatarDecorationSrc: p,
            avatarSrc: m,
            eventHandlers: x,
        } = (0, e9.A)({ userId: r?.id, guildId: t, size: eq._3.SIZE_40, animateOnHover: !d });
    return null == l || null == a || null == r
        ? null
        : (0, s.jsxs)("div", {
              className: e2.ft,
              children: [
                  (0, s.jsxs)("div", {
                      className: e2.FS,
                      children: [
                          (0, s.jsx)(I.E, {
                              variant: "text-md/semibold",
                              children: k.intl.string(u ? O.default.KSWK1U : O.default.XXXX5l),
                          }),
                          (0, s.jsx)(I.E, {
                              variant: "text-sm/medium",
                              children: k.intl.format(u ? O.default["7fWTg4"] : O.default["7PXeeQ"], {
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
                  null != n &&
                      !u &&
                      (0, s.jsx)(e1.V, {
                          avatar: (0, s.jsx)(e4, {
                              ...x,
                              user: r,
                              src: m,
                              avatarDecoration: p,
                              size: eq._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, s.jsx)(eZ.g, {
                              variant: "text-md/semibold",
                              name: e3.Ay.getName(t, null, r),
                              colorString: n.colorString,
                              colorStrings: n.colorStrings,
                          }),
                          className: g()(e2.Qs, e2.cX),
                          message: k.intl.string(k.t["6OSasb"]),
                          decorations: (0, s.jsx)(A._, {
                              color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: e2.$J,
                          }),
                      }),
                  (0, s.jsx)(eL.A, {
                      guild: l,
                      className: e2.Qs,
                      analyticsLocation: {
                          page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: eR.XD.BRAND,
                      size: eR.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, s.jsx)(A._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tt = l(820739),
    tl = l(80682),
    ts = l(860071),
    tn = l(935208),
    tr = l(606049),
    ti = l(967144),
    to = l(168642);
function ta(e) {
    let { boost: t } = e,
        {
            timestamp: l,
            username: n,
            roleColor: r,
            roleColorStrings: o,
        } = (function (e) {
            let t = new Date(tn.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: s,
                    roleColorStrings: n,
                } = (0, i.cf)([e5.Ay], () => {
                    let t = e5.Ay.getMember(e.guildId, e.userId);
                    return {
                        username: e5.Ay.getNick(e.guildId, e.userId) ?? e.user?.username,
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: l, roleColor: s, roleColorStrings: n };
        })(t),
        a = (0, ti.gn)(t.guildId, t.userId, o ?? null);
    return (0, s.jsxs)("div", {
        className: to.og,
        children: [
            (0, s.jsx)(A._, { className: to.Kk, color: "currentColor", size: "sm" }),
            (0, s.jsx)("span", {
                className: to.x$,
                children: (0, s.jsxs)(I.E, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, s.jsx)(eE.m, {
                            text: n,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, s.jsx)(eZ.g, {
                                className: to.IP,
                                variant: "text-md/semibold",
                                name: n,
                                colorString: r ?? null,
                                colorStrings: a,
                            }),
                        }),
                        k.intl.string(O.default.plwH8d),
                    ],
                }),
            }),
            (0, s.jsx)(tr.A, { timestamp: l, timestampFormat: "L", className: to.vE }),
        ],
    });
}
var tu = l(639796);
function td(e) {
    let t,
        l,
        r,
        o,
        a,
        { guildId: u } = e,
        d =
            ((t = (0, i.yK)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(u) ?? [], [u])),
            (l = n.useMemo(
                () =>
                    [...t]
                        .sort((e, t) =>
                            tn.default.extractTimestamp(e.id) < tn.default.extractTimestamp(t.id) ? 1 : -1,
                        )
                        .slice(0, void 0),
                [t, void 0],
            )),
            (r = (0, i.yK)([e5.Ay], () => {
                let e = new Set();
                return (
                    l.forEach((t) => {
                        null == e5.Ay.getMember(u, t.userId) && e.add(t.userId);
                    }),
                    Array.from(e)
                );
            }, [u, l])),
            n.useEffect(() => {
                r.length > 0 && r.forEach((e) => ts.A.requestMember(u, e));
            }, [u, r]),
            (o = n.useMemo(() => {
                let e = r.slice(0, tl.JM / 2);
                return e.length > 0 ? { [u]: e } : {};
            }, [u, r])),
            (0, tl.Eq)(o, "GuildPowerupsRecentActivity"),
            (a = (0, i.bG)([c.A], () => c.A.getGuild(u)?.premiumSubscriberCount)),
            n.useEffect(() => {
                a !== t.length && (0, tt.VU)(u);
            }, [u, a, t.length]),
            l);
    return 0 === d.length
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(E.D, {
                      className: tu.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: k.intl.string(k.t.yM9Krm),
                  }),
                  (0, s.jsx)(h.Ip, {
                      className: tu.k,
                      fade: !0,
                      children: d.map((e, t) => (0, s.jsx)(ta, { boost: e }, `boost-activity-${t}`)),
                  }),
              ],
          });
}
var tc = l(502525);
function tp(e) {
    let t,
        r,
        { guildId: o, powerupListingId: a } = e;
    (t = (0, _.C$)(o, "useLoadGuildPowerups")),
        n.useEffect(() => {
            t && (0, J.z9)(o);
        }, [o, t]),
        n.useEffect(() => {
            (0, z.AK)(o), (0, z.Xd)(o);
        }, [o]);
    let u = (0, _.C$)(o, "GuildPowerupsOverview");
    (0, K.Pq)(o);
    let c = (0, i.bG)([F.A], () => F.A.getStateForGuild(o)),
        m = (0, p.A)(o),
        y = n.useRef(!1),
        { shouldShow: b, modalConfig: w } = { shouldShow: !1, modalConfig: null },
        R = null == a && null != w,
        L = [];
    b && R && L.push(x.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [N, C] = (0, j.kn)(L),
        P =
            ((r = (0, i.bG)([F.A], () => F.A.getStateForGuild(o))),
            n.useMemo(
                () =>
                    Q.reduce((e, t) => {
                        let l = r?.powerupCatalog[t];
                        if (null == l) return e;
                        let s = (function (e, t, l) {
                            let s = [],
                                n = t.reduce((e, t) => {
                                    if (t.type !== D.o9.PERK) return e;
                                    let l = H[t.skuId];
                                    return null == l || ((e[l] ??= []), e[l].push(t)), e;
                                }, {});
                            for (let e of t) {
                                if (e.type === D.o9.LEVEL) {
                                    s.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = H[e.skuId];
                                if (null != t) {
                                    let e = n[t];
                                    if (void 0 !== e) {
                                        let l = $[t];
                                        e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            s.push({ type: "multiPerk", group: t, powerups: e }),
                                            (n[t] = void 0);
                                    }
                                    continue;
                                }
                                s.push({ type: "singlePerk", powerup: e, badge: D.ys[e.skuId] });
                            }
                            return (
                                l && e === D.o9.PERK && s.unshift({ type: "gameServer" }),
                                (function (e) {
                                    let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === X.SL),
                                        l = e.findIndex(
                                            (e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group,
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [s] = t.splice(l, 1),
                                            n = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === X.SL);
                                        return t.splice(n + 1, 0, s), t;
                                    }
                                    return e;
                                })(s)
                            );
                        })(t, l, u);
                        return e.push({ type: t, listings: s }), e;
                    }, []),
                [r?.powerupCatalog, u],
            )),
        G = eS(
            P.flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            o,
        );
    return (n.useEffect(() => {
        if (null != a && !y.current)
            for (let e of P)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === a) {
                        (0, ej.A)(o, t.powerup), (y.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === a || t.powerups.some((e) => e.skuId === a))) {
                        y.current = !0;
                        let e = G[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(D.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, d.bG)(t), (y.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && a === V.W5) {
                        (0, T.A)({ guildId: o, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }), (y.current = !0);
                        return;
                    }
                }
    }, [o, a, P, G]),
    n.useEffect(() => {
        if (null != N && null != w) {
            let e = {
                onCloseCallback: () => {
                    C(eo.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${N}`,
            };
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("98887"), l.e("86618")]).then(l.bind(l, 442241));
                return (t) => (0, s.jsx)(e, { modalConfig: w, markAsDismissed: C, ...t });
            }, e);
        }
    }, [o, N, C, w]),
    c?.powerupCatalog == null)
        ? null
        : (0, s.jsxs)("div", {
              className: tc.kL,
              children: [
                  (0, s.jsxs)(S.A, {
                      className: tc.KE,
                      hideSearch: !0,
                      toolbar: (0, s.jsx)("div", {}),
                      children: [
                          (0, s.jsx)(S.A.Icon, { icon: A._, "aria-label": "" }),
                          (0, s.jsx)(S.A.Title, { children: k.intl.string(O.default.yv3DJJ) }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: tc.hQ,
                      children: [
                          (0, s.jsx)(h.Ip, {
                              className: tc.DO,
                              children: P.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: n, description: r } = (function (e) {
                                          switch (e) {
                                              case D.o9.LEVEL:
                                                  return {
                                                      title: k.intl.string(O.default["TXY/b0"]),
                                                      description: k.intl.string(O.default.aJv4PB),
                                                  };
                                              case D.o9.PERK:
                                                  return {
                                                      title: k.intl.string(O.default.TV3Vm8),
                                                      description: k.intl.string(O.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      i = t === D.o9.LEVEL ? h.Ip : "div";
                                  return (0, s.jsxs)(
                                      "div",
                                      {
                                          className: tc.lt,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: tc.kn,
                                                  children: [
                                                      (0, s.jsx)(E.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: n,
                                                      }),
                                                      (0, s.jsx)(I.E, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: r,
                                                      }),
                                                  ],
                                              }),
                                              (0, s.jsx)(i, {
                                                  orientation: "horizontal",
                                                  className: g()(tc.qJ, tc.kn, { [tc.dU]: t === D.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, s.jsx)(
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
                                                              return (0, s.jsx)(
                                                                  ew,
                                                                  { guildId: o, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, s.jsx)(
                                                                  ey,
                                                                  { guildId: o, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, s.jsx)(
                                                                  B,
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
                          (0, s.jsxs)("div", {
                              className: tc.so,
                              children: [
                                  m
                                      ? (0, s.jsx)(eH, { guildId: o })
                                      : (0, s.jsxs)("div", {
                                            className: tc.CG,
                                            children: [
                                                (0, s.jsx)(q.A, {
                                                    guildId: o,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: em.ZSU.CARD,
                                                    },
                                                }),
                                                (0, s.jsx)(te, { guildId: o }),
                                            ],
                                        }),
                                  (0, s.jsx)(td, { guildId: o }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tm(e) {
    let { guildId: t, powerupListingId: l } = e,
        n = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        m = (0, i.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, p.A)(t),
        x = (0, d.PR)(),
        f = !m || null == g || null == n,
        A = (0, o.Ay)(null != x ? x : []);
    return ((0, a.A)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: A.analyticsLocations },
        },
        { disableTrack: f },
    ),
    f)
        ? null
        : (0, s.jsx)(tp, { guildId: t, powerupListingId: l });
}
