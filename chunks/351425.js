l.r(t), l.d(t, { default: () => tf });
var s = l(627968),
    n = l(64700),
    r = l(562708),
    i = l(17928),
    a = l(688810),
    o = l(139286),
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
    j = l(131607),
    _ = l(742589),
    S = l(488803),
    w = l(289704),
    y = l(821609),
    b = l(146793),
    R = l(661531);
function L(e) {
    return e
        ? { textColor: "text-default", iconColor: R.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: R.A.colors.TEXT_MUTED };
}
var C = l(522055),
    N = l(881756),
    P = l(904629);
function G(e) {
    let t = (0, i.bG)([C.A], () => C.A.getStateForGuild(e));
    return n.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, P.k)(e);
    }, [t?.entitlements]);
}
var O = l(853513),
    T = l(375708),
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
        a = n.useRef(null),
        { state: o, lowestGameServerCost: u } = (0, i.cf)([C.A], () => ({
            state: C.A.getStateForGuild(r),
            lowestGameServerCost: C.A.getLowestGameCostForGuild(r),
        })),
        d =
            ((t = (0, i.bG)([C.A], () => C.A.getStateForGuild(r)?.entitlements, [r])),
            (l = G(r)),
            n.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: T.intl.string(O.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: p } = (0, N.A)(),
        { textColor: m } = L(d?.type === "active");
    return null == o
        ? null
        : (0, s.jsxs)(b.NI, {
              label: T.intl.string(U.default["B3OfL/"]),
              badge: k.ys[V.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: r, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, s.jsx)("div", {
                      className: g()(W.ZS, M.Sl),
                      children: (0, s.jsx)(w.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: a,
                          className: W.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, s.jsx)(b.Ft, {
                      title: T.intl.string(U.default["B3OfL/"]),
                      textColor: m,
                      footer: (0, s.jsx)(b.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, s.jsx)(I.E, {
                          className: M.h_,
                          color: m,
                          variant: "text-sm/medium",
                          children: T.intl.format(U.default["+UqyGU"], { gameName: c, gameName2: p }),
                      }),
                  }),
                  (0, s.jsx)(b.kd, {
                      children: (0, s.jsx)(y.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(o.entitlements).length > 0
                                  ? T.intl.string(U.default.PuvU5b)
                                  : T.intl.string(U.default.b62EHM),
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
    J = l(396748),
    $ = l(868652);
l(667532);
var X = l(512750);
let z = { guildTagsBadgePacks: [X.tv, X.OJ, X.Ht, X.jF] },
    H = Object.entries(z).reduce((e, t) => {
        let [l, s] = t;
        for (let t of s) e[t] = l;
        return e;
    }, {}),
    Q = [k.o9.LEVEL, k.o9.PERK];
var Z = l(182859),
    q = l(210273),
    Y = l(998418),
    ee = l(722523),
    et = l(172218),
    el = l(294384),
    es = l(813847),
    en = l(43105),
    er = l(186111),
    ei = l(621466),
    ea = l(49999);
function eo(e) {
    let { powerup: t, targetRef: l, isCardVisible: r } = e,
        a = (0, i.bG)([er.A], () => er.A.hasLayers()),
        o = (0, f.useHasAnyModalOpen)(),
        u =
            t.skuId === X.FB
                ? {
                      title: T.intl.string(O.default.YWo6VL),
                      body: T.intl.string(O.default.gXVvKc),
                      dismissibleContentType: x.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || a || !r || o || d.push(u.dismissibleContentType);
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
                    let a = i.scrollTop;
                    if (null === e) {
                        e = a;
                        return;
                    }
                    let o = a - e,
                        u = Math.abs(o);
                    ((o < 0 && u > s) || (o > 0 && u > r)) && l();
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
            p(ea.i.INDIRECT_ACTION);
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
                  p(ea.i.USER_DISMISS);
              },
          });
}
var eu = l(224331);
function ed(e) {
    let { guildId: t, powerup: l, className: n } = e,
        r = (0, Y.Ay)(t, l),
        i = r.type !== k.b_.LEVEL_ACTIVATED,
        a = (0, el.A)(t, l, "GuildPowerupCardBodyFooter"),
        o = (0, es.e)(l, r, a);
    return (0, s.jsx)(b.$L, { status: o, cost: i ? l.cost : void 0, className: n });
}
function ec(e) {
    let { guildId: t, powerup: l, badge: r, className: i, onHover: a, children: o } = e,
        u = (0, p.A)(t),
        d = (0, Y.Ay)(t, l),
        c = d.type !== k.b_.INACTIVE,
        m = d.sourceEntitlement?.ends_at != null,
        g = (0, el.A)(t, l, "GuildPowerupCard"),
        x = n.useRef(null),
        f = (0, eu.A)(t, l),
        [A, h] = n.useState(!1),
        E = (0, et.K)(h, 1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(b.NI, {
                label: l.title,
                isActive: c,
                isWarning: m,
                badge: r,
                canRollback: g,
                onClick: f,
                onMouseOver: () => a?.(!0),
                onMouseLeave: () => a?.(!1),
                className: i,
                ref: (e) => {
                    (x.current = e), (E.current = e);
                },
                children: o,
            }),
            !g && u && (0, s.jsx)(eo, { powerup: l, targetRef: x, isCardVisible: A }),
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
        (t = l && !1 !== n ? k.z0.FULL : l && !1 === n ? k.z0.HALF : k.z0.NONE),
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
        a = n.useMemo(() => {
            let e = eg.t[l];
            if (null == e) return [];
            let t = e.tier === em.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let n = (0, q.X)(e.perkIcon);
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
            a,
            (0, s.jsx)("div", {
                className: ex.perkRow,
                children: (0, s.jsx)(I.E, {
                    color: r,
                    variant: "text-sm/medium",
                    children: T.intl.string(O.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eh(e) {
    let t,
        { guildId: l, index: r, powerup: i, nextPowerup: a } = e,
        o = (0, Y.Ay)(l, i),
        u = (0, Y.Ay)(l, a),
        d = o.type !== k.b_.INACTIVE,
        c = u.type !== k.b_.INACTIVE,
        p = o.type === k.b_.TIER_OVERRIDE_ACTIVATED,
        [m, g] = n.useState(void 0);
    (0, ep.A)(m), (t = 0 === r ? k.At.START : null == a ? k.At.END : k.At.MIDDLE);
    let { textColor: x } = L(d);
    return (0, s.jsxs)(ec, {
        guildId: l,
        powerup: i,
        className: ex.card,
        children: [
            (0, s.jsx)(ef, { position: t, active: d, nextActive: null != a ? c : void 0 }),
            (0, s.jsx)(b.Ft, {
                title: i.title,
                textColor: x,
                footer: !p && (0, s.jsx)(ed, { className: ex.footer, guildId: l, powerup: i }),
                children: (0, s.jsx)(eA, { isActive: d, index: r }),
            }),
            !p && (0, s.jsx)(b.kd, { children: (0, s.jsx)(ee.Ay, { guildId: l, powerup: i, onError: g }) }),
        ],
    });
}
var eE = l(990078),
    eI = l(775602),
    ev = l(468689),
    ej = l(915667);
function e_(e, t) {
    let r = (0, p.A)(t) ?? !1,
        a = (0, i.bG)([B.A], () => B.A.getStateForGuild(t)?.allPowerups),
        o = (0, i.bG)([B.A], () => B.A.getStateForGuild(t)?.unlockedPowerups);
    return n.useMemo(() => {
        let n = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: n, allPowerups: r, unlockedPowerups: i } = e,
                              a = T.intl.string(O.default.KC9HRW),
                              o = T.intl.string(O.default.GJiSmP),
                              u = r?.[X.SL],
                              d = i?.[X.SL] != null,
                              c = T.intl.string(O.default["/egwJA"]),
                              p = d ? void 0 : T.intl.string(O.default.W6Vwn3),
                              m = d ? void 0 : T.intl.string(O.default.lvk1Gc),
                              g = d ? T.intl.string(O.default["9CfkLO"]) : T.intl.string(T.t["+7XY31"]),
                              x = d ? "secondary" : "expressive",
                              h = n
                                  ? () => {
                                        d
                                            ? ev.A.open(t, em.BEX.TAG, em.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, ej.A)(t, u),
                                            (0, f.closeAllModals)();
                                    }
                                  : void 0;
                          return {
                              title: a,
                              description: o,
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
                                                  title: a,
                                                  description: T.intl.string(O.default.BBRFRd),
                                                  powerups: e,
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
                              image: {
                                  staticUrl:
                                      "https://cdn.discordapp.com/assets/content/8dd1f75ba9ef2e0587c9963de0964edc7577f98385e85372e9dc600d353dd3b1.png",
                                  animatedUrl:
                                      "https://cdn.discordapp.com/assets/content/54f74ffad2a1a6c57dd4284f05d14cdeffaf68b38d0543003a4f6a4ba74c9096.png",
                              },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: r, allPowerups: a, unlockedPowerups: o })
                    : void 0,
            i = {};
        for (let t of e) {
            let e = n(t);
            null != e && (i[t] = e);
        }
        return i;
    }, [e, t, r, a, o]);
}
var eS = l(401996);
function ew(e) {
    let { guildId: t, group: l, powerups: r } = e,
        [a, o] = n.useState(!1),
        u = (0, i.bG)([eI.A], () => eI.A.useReducedMotion),
        d = e_([l], t)[l],
        c = !u && a ? d?.image?.animatedUrl : d?.image?.staticUrl,
        p = (function (e) {
            let t,
                { guildId: l, powerups: s } = e,
                n = (0, Y.jJ)(l, s),
                r = n.some((e) => e.type !== k.b_.INACTIVE);
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
                : r && (t = { type: "active", statusText: T.intl.string(O.default.FFLkmx) });
            let a = n.reduce((e, t) => {
                    let { type: l, powerup: s } = t;
                    return l === k.b_.POWERUP_ACTIVATED ? e + s.cost : e;
                }, 0),
                o = n.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, n[0]?.powerup?.cost ?? 0),
                u = n.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e + (l?.cost ?? 0);
                }, 0),
                d = r ? a : o;
            return {
                isActive: r,
                status: t,
                cost: d,
                costDecorator: !r && u > d ? "+" : void 0,
                expiringAt: i,
                activeCost: a,
                minCost: o,
                totalCost: u,
            };
        })({ guildId: t, powerups: r }),
        { textColor: m } = L(p?.isActive ?? !1);
    if (null == p || null == d) return null;
    let { status: g, cost: x, costDecorator: f } = p;
    return (0, s.jsxs)(b.NI, {
        label: d.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(r),
        onMouseOver: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, s.jsx)("img", { alt: "", src: c, className: eS.S }),
            (0, s.jsx)(b.Ft, {
                title: d.title,
                textColor: m,
                footer: (0, s.jsx)(b.$L, { status: g, cost: x, costDecorator: f }),
                children: (0, s.jsx)(I.E, {
                    className: eS.h,
                    color: m,
                    variant: "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, s.jsx)(b.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, s.jsx)(eE.m, {
                              asContainer: !0,
                              text: d.viewCtaTooltip,
                              delay: 100,
                              children: (0, s.jsx)(y.$, { text: d.viewCta, fullWidth: !0 }),
                          })
                        : (0, s.jsx)(y.$, { text: d.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var ey = l(490557);
function eb(e) {
    let { guildId: t, powerup: l, badge: r } = e,
        [i, a] = n.useState(void 0);
    (0, ep.A)(i);
    let [o, u] = n.useState(!1),
        { textColor: d } = L((0, Y.Ay)(t, l).type !== k.b_.INACTIVE);
    return (0, s.jsxs)(ec, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: r,
        children: [
            (0, s.jsx)(ey.l, { className: M.Sl, powerup: l, isHovering: o }),
            (0, s.jsx)(b.Ft, {
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
            (0, s.jsx)(b.kd, { children: (0, s.jsx)(ee.Ay, { guildId: t, powerup: l, onError: a }) }),
        ],
    });
}
var eR = l(862482),
    eL = l(944304),
    eC = l(975571),
    eN = l(864310),
    eP = l(403362),
    eG = l(408278),
    eO = l(789645),
    eT = l(818905);
function eD(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, s.jsx)("img", { alt: "", className: eT.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, s.jsx)(I.E, {
                color: "always-white",
                variant: "text-md/semibold",
                children: T.intl.string(O.default.diMhWc),
            }),
            (0, s.jsx)(I.E, {
                color: "always-white",
                variant: "text-sm/medium",
                children: T.intl.string(O.default.pycxTr),
            }),
            (0, s.jsx)("div", {
                className: eT.VN,
                children: (0, s.jsx)(eG.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": T.intl.string(T.t.cpT0Cq),
                    onClick: () => {
                        t(ea.i.USER_DISMISS);
                    },
                    icon: eO.P,
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
            shouldShow: a,
            title: o,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eN.A)(e),
                s = (0, i.bG)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(e), [e]),
                r = l - n.useMemo(() => s?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [s]);
            return n.useMemo(
                () =>
                    r <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: T.intl.string(O.default.n5hQhc),
                              description: T.intl.formatToPlainString(O.default.iAaAiG, {
                                  boostCount: r,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: r,
                          },
                [r, t],
            );
        })(t, l);
    return a
        ? (0, s.jsxs)("div", {
              className: eW.kL,
              children: [
                  (0, s.jsx)(eV.E, { color: R.A.colors.TEXT_FEEDBACK_WARNING, className: eW.Kk }),
                  (0, s.jsx)(I.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: o }),
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
var eB = l(472485);
function eK(e) {
    let { text: t } = e;
    return (0, s.jsx)("div", {
        className: eB.ac,
        children: (0, s.jsx)(I.E, { variant: "text-sm/medium", children: t }),
    });
}
function eJ(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)?.features.has(em.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: T.intl.string(O.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        r = (function (e) {
            let t,
                l =
                    ((t = (0, i.bG)([B.A], () => B.A.getStateForGuild(e))),
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
            let a = s.length > 0 ? T.intl.string(U.default["B3OfL/"]) : void 0,
                o = [...l.map((e) => e.title), ...(null != a ? [a] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === X.FB) && u.push(T.intl.string(O.default.Sfr0Jw)),
                s.length > 0 && u.push(T.intl.string(U.default.wiungr)),
                { shouldShow: r, expiringPowerups: l, expiringPowerupNames: o, warnings: u }
            );
        })(t),
        a = [x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [o, u] = (0, j.kn)(a),
        d = o === x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        p = (function (e) {
            let t = [];
            e || t.push(x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, s] = (0, j.kn)(t);
            return { shouldShow: null != l && l === x.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: s };
        })(r.shouldShow || d);
    return l.shouldShow || r.shouldShow || p.shouldShow || d
        ? (0, s.jsxs)("div", {
              className: eB.kL,
              children: [
                  (0, s.jsx)(I.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: T.intl.string(O.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, s.jsx)(eK, { text: l.text }),
                  r.shouldShow &&
                      (0, s.jsx)(eF, { guildId: t, powerupNames: r.expiringPowerupNames, warnings: r.warnings }),
                  !1,
                  p.shouldShow && (0, s.jsx)(eD, { markAsDismissed: p.markAsDismissed }),
                  d &&
                      (0, s.jsx)(Z.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: em.ZSU.CARD,
                          },
                          onDismiss: () => u(ea.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
var e$ = l(697311);
function eX(e) {
    let { count: t, type: l } = e,
        n = (function (e, t) {
            switch (t) {
                case k.yG.AVAILABLE:
                    return T.intl.formatToPlainString(O.default.BdRXZA, { boostCount: e });
                case k.yG.SPENT:
                    return T.intl.formatToPlainString(O.default.xvgIVG, { boostCount: e });
                case k.yG.TOTAL:
                    return T.intl.string(O.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, s.jsxs)("div", {
        className: e$.k,
        role: "img",
        "aria-label": `${t}, ${n}`,
        children: [
            (0, s.jsxs)("div", {
                className: e$.N,
                "aria-hidden": "true",
                children: [
                    (0, s.jsx)(A._, {
                        size: "sm",
                        color: l !== k.yG.AVAILABLE ? R.A.colors.TEXT_MUTED : R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, s.jsx)(E.D, {
                        color: l !== k.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, s.jsx)(I.E, { "aria-hidden": "true", color: "text-muted", variant: "text-sm/medium", children: n }),
        ],
    });
}
var ez = l(685293);
function eH(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        { available: n, spent: r, total: a } = (0, eN.A)(t);
    if (null != l)
        return (0, s.jsxs)("div", {
            className: ez.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: ez.N1,
                    children: [
                        (0, s.jsx)(I.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: T.intl.string(O.default.hjvcLO),
                        }),
                        (0, s.jsx)(I.E, {
                            className: ez.C2,
                            variant: "text-xs/semibold",
                            children: T.intl.format(O.default.fXE30d, {
                                helpDeskArticle: eC.A.getArticleURL(em.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ez.hQ,
                    children: [
                        (0, s.jsx)(eX, { count: n, type: k.yG.AVAILABLE }),
                        (0, s.jsx)(eX, { count: r, type: k.yG.SPENT }),
                        (0, s.jsx)(eX, { count: a, type: k.yG.TOTAL }),
                    ],
                }),
                (0, s.jsx)(eL.A, {
                    className: ez.S6,
                    guild: l,
                    analyticsLocation: {
                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: eR.XD.CUSTOM,
                    size: eR.lO.LARGE,
                    icon: (0, s.jsx)(A._, {
                        className: ez.Ng,
                        size: "sm",
                        color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, s.jsx)(eJ, { guildId: t }),
            ],
        });
}
var eQ = l(97808),
    eZ = l(778712),
    eq = l(463930),
    eY = l(730134),
    e0 = l(509536),
    e1 = l(319756),
    e5 = l(854627),
    e6 = l(696451),
    e8 = l(317525),
    e3 = l(287809),
    e9 = l(562153),
    e7 = l(19575),
    e4 = l(32746);
let e2 = e7.Ay.getEnableHardwareAcceleration() ? eQ.Js : eY.A;
function te(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        n = (0, i.bG)([e8.A], () => e8.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        r = (0, i.bG)([e3.default], () => e3.default.getCurrentUser()),
        a = r?.id,
        o = (0, i.bG)([e6.Ay], () => (null != a ? e6.Ay.getMember(t, a) : void 0), [a, t]),
        u = o?.premiumSince != null,
        d = (0, i.bG)([eI.A], () => eI.A.useReducedMotion),
        {
            avatarDecorationSrc: p,
            avatarSrc: m,
            eventHandlers: x,
        } = (0, e5.A)({ userId: r?.id, guildId: t, size: eZ._3.SIZE_40, animateOnHover: !d });
    return null == l || null == o || null == r
        ? null
        : (0, s.jsxs)("div", {
              className: e4.ft,
              children: [
                  (0, s.jsxs)("div", {
                      className: e4.FS,
                      children: [
                          (0, s.jsx)(I.E, {
                              variant: "text-md/semibold",
                              children: T.intl.string(u ? O.default.KSWK1U : O.default.XXXX5l),
                          }),
                          (0, s.jsx)(I.E, {
                              variant: "text-sm/medium",
                              children: T.intl.format(u ? O.default["7fWTg4"] : O.default["7PXeeQ"], {
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
                          avatar: (0, s.jsx)(e2, {
                              ...x,
                              user: r,
                              src: m,
                              avatarDecoration: p,
                              size: eZ._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, s.jsx)(eq.g, {
                              variant: "text-md/semibold",
                              name: e9.Ay.getName(t, null, r),
                              colorString: n.colorString,
                              colorStrings: n.colorStrings,
                          }),
                          className: g()(e4.Qs, e4.cX),
                          message: T.intl.string(T.t["6OSasb"]),
                          decorations: (0, s.jsx)(A._, {
                              color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: e4.$J,
                          }),
                      }),
                  (0, s.jsx)(eL.A, {
                      guild: l,
                      className: e4.Qs,
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
    tl = l(860071),
    ts = l(935208),
    tn = l(323472),
    tr = l(492349),
    ti = l(606049),
    ta = l(58703),
    to = l(967144),
    tu = l(168642),
    td = l(198964);
function tc(e) {
    let t,
        { boost: l, phase: n, sortKey: r } = e,
        {
            username: a,
            roleColor: o,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(ts.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: s,
                    roleColorStrings: n,
                } = (0, i.cf)([e6.Ay], () => {
                    let t = e6.Ay.getMember(e.guildId, e.userId);
                    return {
                        username:
                            e6.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? T.intl.string(T.t["30mdIx"]),
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: l, roleColor: s, roleColorStrings: n };
        })(l),
        d = (0, to.gn)(l.guildId, l.userId, u ?? null),
        c = (0, tn.H)("GuildPowerupsRecentActivityRow"),
        p = new Date(r),
        { Icon: m, color: x } = (function (e, t) {
            if (!t) return { Icon: A._, color: R.A.unsafe_rawColors.GUILD_BOOSTING_PINK };
            switch (e) {
                case "gave":
                    return { Icon: A._, color: R.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tr.x, color: R.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tr.x, color: R.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(n, c);
    return (0, s.jsxs)("div", {
        className: tu.og,
        children: [
            (0, s.jsx)(m, { color: x, size: "sm" }),
            (0, s.jsxs)("span", {
                className: tu.x$,
                children: [
                    (0, s.jsx)(I.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tu.IP,
                        children: (0, s.jsx)(eE.m, {
                            text: a,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, s.jsx)(eq.g, {
                                variant: "text-md/semibold",
                                name: a,
                                colorString: o ?? null,
                                colorStrings: d,
                            }),
                        }),
                    }),
                    (0, s.jsx)(I.E, {
                        tag: "span",
                        variant: c ? "text-md/normal" : "text-md/medium",
                        color: c ? "text-muted" : void 0,
                        className: tu.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return T.intl.string(O.default.plwH8d);
                                case "expiring":
                                    return T.intl.formatToPlainString(O.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return T.intl.string(O.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, s.jsx)(ti.A, {
                timestamp: p,
                timestampFormat: c
                    ? 0 === (t = (0, ta.m_)(p, new Date()))
                        ? `[${T.intl.string(T.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${T.intl.string(T.t.ZdDLO0)}]`
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
            let t = (0, tn.H)("GuildPowerupsRecentActivity"),
                l = (0, i.yK)([eM.A], () => eM.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
                [s] = n.useState(() => Date.now()),
                r = n.useMemo(
                    () =>
                        l
                            .map((e) => {
                                let l = t
                                        ? e.ended || (null != e.endsAt && e.endsAt.getTime() <= s)
                                            ? { phase: "expired" }
                                            : null != e.endsAt && e.endsAt.getTime() - s <= 2592e5
                                              ? { phase: "expiring", endsAt: e.endsAt }
                                              : { phase: "gave" }
                                        : { phase: "gave" },
                                    n = (function (e, t) {
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
                                    ? { boost: e, phase: "expiring", sortKey: n, endsAt: l.endsAt }
                                    : { boost: e, phase: l.phase, sortKey: n };
                            })
                            .sort((e, t) => t.sortKey - e.sortKey)
                            .slice(0, void 0),
                    [l, void 0, s, t],
                ),
                a = (0, i.yK)([e6.Ay], () => {
                    let t = new Set();
                    return (
                        r.forEach((l) => {
                            let { boost: s } = l;
                            null == e6.Ay.getMember(e, s.userId) && t.add(s.userId);
                        }),
                        Array.from(t)
                    );
                }, [e, r]);
            n.useEffect(() => {
                a.length > 0 && a.forEach((t) => tl.A.requestMember(e, t));
            }, [e, a]);
            let o = (0, i.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                u = n.useMemo(() => l.filter((e) => !e.ended).length, [l]),
                d = (0, i.bG)([eM.A], () => null != eM.A.getLastFetchedAtForGuild(e), [e]);
            return (
                n.useEffect(() => {
                    (o !== u || (t && !d)) && (0, tt.VU)(e, { includeEnded: t });
                }, [e, o, u, t, d]),
                r
            );
        })(t);
    return 0 === l.length
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(E.D, {
                      className: tp.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: T.intl.string(T.t.yM9Krm),
                  }),
                  (0, s.jsx)(h.Ip, {
                      className: tp.k,
                      fade: !0,
                      children: l.map((e) => (0, s.jsx)(tc, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tg = l(502525);
function tx(e) {
    let t,
        r,
        { guildId: a, powerupListingId: o } = e;
    (t = (0, S.C$)(a, "useLoadGuildPowerups")),
        n.useEffect(() => {
            t && (0, J.z9)(a);
        }, [a, t]),
        n.useEffect(() => {
            (0, $.AK)(a), (0, $.Xd)(a);
        }, [a]);
    let u = (0, S.C$)(a, "GuildPowerupsOverview");
    (0, K.Pq)(a);
    let c = (0, i.bG)([B.A], () => B.A.getStateForGuild(a)),
        m = (0, p.A)(a),
        w = n.useRef(!1),
        { shouldShow: y, modalConfig: b } = { shouldShow: !1, modalConfig: null },
        R = null == o && null != b,
        L = [];
    y && R && L.push(x.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [C, N] = (0, j.kn)(L),
        P =
            ((r = (0, i.bG)([B.A], () => B.A.getStateForGuild(a))),
            n.useMemo(
                () =>
                    Q.reduce((e, t) => {
                        let l = r?.powerupCatalog[t];
                        if (null == l) return e;
                        let s = (function (e, t, l) {
                            let s = [],
                                n = t.reduce((e, t) => {
                                    if (t.type !== k.o9.PERK) return e;
                                    let l = H[t.skuId];
                                    return null == l || ((e[l] ??= []), e[l].push(t)), e;
                                }, {});
                            for (let e of t) {
                                if (e.type === k.o9.LEVEL) {
                                    s.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = H[e.skuId];
                                if (null != t) {
                                    let e = n[t];
                                    if (void 0 !== e) {
                                        let l = z[t];
                                        e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            s.push({ type: "multiPerk", group: t, powerups: e }),
                                            (n[t] = void 0);
                                    }
                                    continue;
                                }
                                s.push({ type: "singlePerk", powerup: e, badge: k.ys[e.skuId] });
                            }
                            return (
                                l && e === k.o9.PERK && s.unshift({ type: "gameServer" }),
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
        G = e_(
            P.flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            a,
        );
    return (n.useEffect(() => {
        if (null != o && !w.current)
            for (let e of P)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === o) {
                        (0, ej.A)(a, t.powerup), (w.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === o || t.powerups.some((e) => e.skuId === o))) {
                        w.current = !0;
                        let e = G[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(k.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, d.bG)(t), (w.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && o === V.W5) {
                        (0, D.A)({ guildId: a, analyticsLocation: v.A.GUILD_POWERUPS_OVERVIEW }), (w.current = !0);
                        return;
                    }
                }
    }, [a, o, P, G]),
    n.useEffect(() => {
        if (null != C && null != b) {
            let e = {
                onCloseCallback: () => {
                    N(ea.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${C}`,
            };
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("98887"), l.e("86618")]).then(l.bind(l, 442241));
                return (t) => (0, s.jsx)(e, { modalConfig: b, markAsDismissed: N, ...t });
            }, e);
        }
    }, [a, C, N, b]),
    c?.powerupCatalog == null)
        ? null
        : (0, s.jsxs)("div", {
              className: tg.kL,
              children: [
                  (0, s.jsxs)(_.A, {
                      className: tg.KE,
                      hideSearch: !0,
                      toolbar: (0, s.jsx)("div", {}),
                      children: [
                          (0, s.jsx)(_.A.Icon, { icon: A._, "aria-label": "" }),
                          (0, s.jsx)(_.A.Title, { children: T.intl.string(O.default.yv3DJJ) }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: tg.hQ,
                      children: [
                          (0, s.jsx)(h.Ip, {
                              className: tg.DO,
                              children: P.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: n, description: r } = (function (e) {
                                          switch (e) {
                                              case k.o9.LEVEL:
                                                  return {
                                                      title: T.intl.string(O.default["TXY/b0"]),
                                                      description: T.intl.string(O.default.aJv4PB),
                                                  };
                                              case k.o9.PERK:
                                                  return {
                                                      title: T.intl.string(O.default.TV3Vm8),
                                                      description: T.intl.string(O.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      i = t === k.o9.LEVEL ? h.Ip : "div";
                                  return (0, s.jsxs)(
                                      "div",
                                      {
                                          className: tg.lt,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: tg.kn,
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
                                                  className: g()(tg.qJ, tg.kn, { [tg.dU]: t === k.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, s.jsx)(
                                                                  eh,
                                                                  {
                                                                      guildId: a,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: l[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, s.jsx)(
                                                                  eb,
                                                                  { guildId: a, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, s.jsx)(
                                                                  ew,
                                                                  { guildId: a, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, s.jsx)(
                                                                  F,
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
                          (0, s.jsxs)("div", {
                              className: tg.so,
                              children: [
                                  m
                                      ? (0, s.jsx)(eH, { guildId: a })
                                      : (0, s.jsxs)("div", {
                                            className: tg.CG,
                                            children: [
                                                (0, s.jsx)(Z.A, {
                                                    guildId: a,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: em.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: em.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: em.ZSU.CARD,
                                                    },
                                                }),
                                                (0, s.jsx)(te, { guildId: a }),
                                            ],
                                        }),
                                  (0, s.jsx)(tm, { guildId: a }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tf(e) {
    let { guildId: t, powerupListingId: l } = e,
        n = (0, i.bG)([c.A], () => c.A.getGuild(t)),
        m = (0, i.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, p.A)(t),
        x = (0, d.PR)(),
        f = !m || null == g || null == n,
        A = (0, a.Ay)(null != x ? x : []);
    return ((0, o.A)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: A.analyticsLocations },
        },
        { disableTrack: f },
    ),
    f)
        ? null
        : (0, s.jsx)(tx, { guildId: t, powerupListingId: l });
}
