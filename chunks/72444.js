l.r(t), l.d(t, { default: () => tR });
var n = l(627968),
    i = l(64700),
    s = l(562708),
    r = l(17928),
    o = l(688810),
    a = l(139286),
    u = l(736056),
    d = l(976860),
    c = l(71393),
    m = l(363487);
l(321073), l(323874), l(14289), l(35956);
var p = l(503698),
    g = l.n(p),
    f = l(192308),
    x = l(104510),
    A = l(364522),
    h = l(534514),
    E = l(834730),
    v = l(942857),
    I = l(793574),
    j = l(131607),
    b = l(742589),
    _ = l(488803),
    S = l(289704),
    y = l(821609),
    w = l(612400),
    C = l(661531);
function R(e) {
    return e
        ? { textColor: "text-default", iconColor: C.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: C.A.colors.TEXT_MUTED };
}
var L = l(522055),
    N = l(881756),
    P = l(904629);
function T(e) {
    let t = (0, r.bG)([L.A], () => L.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, P.k)(e);
    }, [t?.entitlements]);
}
var G = l(853513),
    k = l(375708),
    D = l(843095),
    O = l(568065),
    U = l(800007),
    V = l(576709),
    M = l(989177),
    W = l(313124);
function F(e) {
    let t,
        l,
        { guildId: s } = e,
        o = i.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, r.cf)([L.A], () => ({
            state: L.A.getStateForGuild(s),
            lowestGameServerCost: L.A.getLowestGameCostForGuild(s),
        })),
        d =
            ((t = (0, r.bG)([L.A], () => L.A.getStateForGuild(s)?.entitlements, [s])),
            (l = T(s)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: k.intl.string(G.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: m } = (0, N.A)(),
        { textColor: p } = R(d?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(w.NI, {
              label: k.intl.string(V.default["B3OfL/"]),
              badge: O.ys[U.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }),
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
                      title: k.intl.string(V.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, n.jsx)(w.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, n.jsx)(E.E, {
                          className: M.h_,
                          color: p,
                          variant: "text-sm/medium",
                          children: k.intl.format(V.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, n.jsx)(w.kd, {
                      children: (0, n.jsx)(y.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? k.intl.string(V.default.PuvU5b)
                                  : k.intl.string(V.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, D.A)({ guildId: s, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
var B = l(645619),
    K = l(512750),
    z = l(554146),
    $ = l(545445),
    J = l(939981),
    X = l(289007),
    H = l(396748),
    Q = l(868652);
l(667532);
let Z = { guildTagsBadgePacks: [K.tv, K.OJ, K.Ht, K.jF] },
    q = Object.entries(Z).reduce((e, t) => {
        let [l, n] = t;
        for (let t of n) e[t] = l;
        return e;
    }, {}),
    Y = [O.o9.LEVEL, O.o9.PERK];
var ee = l(182859),
    et = l(210273),
    el = l(998418),
    en = l(722523),
    ei = l(172218),
    es = l(294384),
    er = l(813847),
    eo = l(43105),
    ea = l(186111),
    eu = l(621466),
    ed = l(49999);
function ec(e) {
    let { powerup: t, targetRef: l, isCardVisible: s } = e,
        o = (0, r.bG)([ea.A], () => ea.A.hasLayers()),
        a = (0, f.useHasAnyModalOpen)(),
        u =
            t.skuId === K.FB
                ? {
                      title: k.intl.string(G.default.YWo6VL),
                      body: k.intl.string(G.default.gXVvKc),
                      dismissibleContentType: z.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || o || !s || a || d.push(u.dismissibleContentType);
    let [c, m] = (0, j.kn)(d);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: l, topThreshold: n = 40, bottomThreshold: s = 60, enabled: r = !0 } = e;
        i.useEffect(() => {
            if (!r || t?.current == null) return;
            let e = null,
                i = (i) => {
                    if (t?.current == null || !(0, eu.vq)(i.target, HTMLElement)) return;
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
            m(ed.i.INDIRECT_ACTION);
        }, [m]),
        enabled: null != c,
    }),
    null == u || null == c)
        ? null
        : (0, n.jsx)(eo.A, {
              targetElementRef: l,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: u.title,
              body: u.body,
              onRequestClose: () => {
                  m(ed.i.USER_DISMISS);
              },
          });
}
var em = l(224331);
function ep(e) {
    let { guildId: t, powerup: l, className: i } = e,
        s = (0, el.Ay)(t, l),
        r = s.type !== O.b_.LEVEL_ACTIVATED,
        o = (0, es.A)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, er.e)(l, s, o);
    return (0, n.jsx)(w.$L, { status: a, cost: r ? l.cost : void 0, className: i });
}
function eg(e) {
    let { guildId: t, powerup: l, badge: s, className: r, onHover: o, children: a } = e,
        u = (0, m.A)(t),
        d = (0, el.Ay)(t, l),
        c = d.type !== O.b_.INACTIVE,
        p = d.sourceEntitlement?.ends_at != null,
        g = (0, es.A)(t, l, "GuildPowerupCard"),
        f = i.useRef(null),
        x = (0, em.A)(t, l),
        [A, h] = i.useState(!1),
        E = (0, ei.K)(h, 1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(w.NI, {
                label: l.title,
                isActive: c,
                isWarning: p,
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
            !g && u && (0, n.jsx)(ec, { powerup: l, targetRef: f, isCardVisible: A }),
        ],
    });
}
var ef = l(867060),
    ex = l(652215),
    eA = l(508155),
    eh = l(254204);
function eE(e) {
    let t,
        { active: l, nextActive: i, position: s } = e;
    return (
        (t = l && !1 !== i ? O.z0.FULL : l && !1 === i ? O.z0.HALF : O.z0.NONE),
        (0, n.jsxs)("div", {
            className: eh.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(eh.progress, eh[s], eh[t]) }),
                (0, n.jsx)("div", {
                    className: g()(eh.boostContainer, M.JD, { [eh.boostContainerActive]: l, [M.vu]: l }),
                    children: (0, n.jsx)(x._, { size: "sm", color: C.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function ev(e) {
    let { isActive: t, index: l } = e,
        { textColor: s, iconColor: r } = R(t),
        o = i.useMemo(() => {
            let e = eA.t[l];
            if (null == e) return [];
            let t = e.tier === ex.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, et.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: eh.perkRow,
                        children: [
                            (0, n.jsx)(i, { color: r, size: "sm" }),
                            (0, n.jsx)(E.E, {
                                className: eh.perkText,
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
        className: eh.perkRowContainer,
        children: [
            o,
            (0, n.jsx)("div", {
                className: eh.perkRow,
                children: (0, n.jsx)(E.E, {
                    color: s,
                    variant: "text-sm/medium",
                    children: k.intl.string(G.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function eI(e) {
    let t,
        { guildId: l, index: s, powerup: r, nextPowerup: o } = e,
        a = (0, el.Ay)(l, r),
        u = (0, el.Ay)(l, o),
        d = a.type !== O.b_.INACTIVE,
        c = u.type !== O.b_.INACTIVE,
        m = a.type === O.b_.TIER_OVERRIDE_ACTIVATED,
        [p, g] = i.useState(void 0);
    (0, ef.A)(p), (t = 0 === s ? O.At.START : null == o ? O.At.END : O.At.MIDDLE);
    let { textColor: f } = R(d);
    return (0, n.jsxs)(eg, {
        guildId: l,
        powerup: r,
        className: eh.card,
        children: [
            (0, n.jsx)(eE, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(w.Ft, {
                title: r.title,
                textColor: f,
                footer: !m && (0, n.jsx)(ep, { className: eh.footer, guildId: l, powerup: r }),
                children: (0, n.jsx)(ev, { isActive: d, index: s }),
            }),
            !m && (0, n.jsx)(w.kd, { children: (0, n.jsx)(en.Ay, { guildId: l, powerup: r, onError: g }) }),
        ],
    });
}
var ej = l(990078),
    eb = l(775602),
    e_ = l(468689),
    eS = l(915667);
function ey(e, t) {
    let s = (0, m.A)(t) ?? !1,
        o = (0, r.bG)([B.A], () => B.A.getStateForGuild(t)?.allPowerups),
        a = (0, r.bG)([B.A], () => B.A.getStateForGuild(t)?.unlockedPowerups);
    return i.useMemo(() => {
        let i = {};
        for (let r of e) {
            let e =
                "guildTagsBadgePacks" === r
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, unlockedPowerups: r } = e,
                              o = k.intl.string(G.default.KC9HRW),
                              a = k.intl.string(G.default.GJiSmP),
                              u = s?.[K.SL],
                              d = r?.[K.SL] != null,
                              c = k.intl.string(G.default["/egwJA"]),
                              m = d ? void 0 : k.intl.string(G.default.W6Vwn3),
                              p = d ? void 0 : k.intl.string(G.default.lvk1Gc),
                              g = d ? k.intl.string(G.default["9CfkLO"]) : k.intl.string(k.t["+7XY31"]),
                              A = d ? "secondary" : "expressive",
                              h = i
                                  ? () => {
                                        d
                                            ? e_.A.open(t, ex.BEX.TAG, ex.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, eS.A)(t, u),
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
                                          let { default: s } = await Promise.all([l.e("7255"), l.e("75295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(s, {
                                                  guildId: t,
                                                  title: o,
                                                  description: k.intl.string(G.default.BBRFRd),
                                                  powerups: e,
                                                  forceStaticImages: !0,
                                                  footerInfoText: p,
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
                              viewCtaTooltip: m,
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
var ew = l(401996);
function eC(e) {
    let { guildId: t, group: l, powerups: s } = e,
        [o, a] = i.useState(!1),
        u = (0, r.bG)([eb.Ay], () => eb.Ay.useReducedMotion),
        d = ey([l], t)[l],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                i = (0, el.jJ)(l, n),
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
                : s && (t = { type: "active", statusText: k.intl.string(G.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === O.b_.POWERUP_ACTIVATED ? e + n.cost : e;
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
        { textColor: p } = R(m?.isActive ?? !1);
    if (null == m || null == d) return null;
    let { status: g, cost: f, costDecorator: x } = m;
    return (0, n.jsxs)(w.NI, {
        label: d.title,
        isActive: g?.type === "active",
        isWarning: g?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(s),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, n.jsx)("img", { alt: "", src: c, className: ew.S }),
            (0, n.jsx)(w.Ft, {
                title: d.title,
                textColor: p,
                footer: (0, n.jsx)(w.$L, { status: g, cost: f, costDecorator: x }),
                children: (0, n.jsx)(E.E, {
                    className: ew.h,
                    color: p,
                    variant: "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, n.jsx)(w.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, n.jsx)(ej.m, {
                              asContainer: !0,
                              text: d.viewCtaTooltip,
                              delay: 100,
                              children: (0, n.jsx)(y.$, { text: d.viewCta, fullWidth: !0 }),
                          })
                        : (0, n.jsx)(y.$, { text: d.viewCta, fullWidth: !0 }),
            }),
        ],
    });
}
var eR = l(403362),
    eL = l(639060),
    eN = l(408278),
    eP = l(789645),
    eT = l(818905);
function eG(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: eT.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(E.E, {
                color: "text-overlay-light",
                variant: "text-md/semibold",
                children: k.intl.string(G.default.diMhWc),
            }),
            (0, n.jsx)(E.E, {
                color: "text-overlay-light",
                variant: "text-sm/medium",
                children: k.intl.string(G.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: eT.VN,
                children: (0, n.jsx)(eN.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        t(ed.i.USER_DISMISS);
                    },
                    icon: eP.P,
                }),
            }),
        ],
    });
}
var ek = l(972213),
    eD = l(695366),
    eO = l(689568);
function eU(e) {
    let { notificationConfig: t, markAsDismissed: l } = e;
    return (0, n.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, n.jsx)("div", {
                className: eO.VN,
                children: (0, n.jsx)(eN.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    onClick: () => {
                        l(ed.i.USER_DISMISS);
                    },
                    icon: ek.d,
                }),
            }),
            (0, n.jsx)(eD.E, { color: C.A.colors.TEXT_FEEDBACK_WARNING, className: eO.Kk }),
            (0, n.jsx)(E.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, n.jsx)(E.E, { variant: "text-sm/medium", children: t.description }),
        ],
    });
}
var eV = l(859241),
    eM = l(864310),
    eW = l(676908);
function eF(e) {
    let { guildId: t, powerupNames: l, warnings: s } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eM.A)(e),
                n = (0, r.bG)([eV.A], () => eV.A.getAppliedGuildBoostsForGuild(e), [e]),
                s = l - i.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return i.useMemo(
                () =>
                    s <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: k.intl.string(G.default.n5hQhc),
                              description: k.intl.formatToPlainString(G.default.iAaAiG, {
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
              className: eW.kL,
              children: [
                  (0, n.jsx)(eD.E, { color: C.A.colors.TEXT_FEEDBACK_WARNING, className: eW.Kk }),
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
        children: (0, n.jsx)(E.E, { variant: "text-sm/medium", children: t }),
    });
}
function ez(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)?.features.has(ex.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: k.intl.string(G.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        s = (function (e) {
            let t,
                l =
                    ((t = (0, r.bG)([B.A], () => B.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, P.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eR.Vq);
                    }, [t])),
                n = T(e),
                s = l.length > 0 || n.length > 0;
            if (!s) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? k.intl.string(V.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === K.FB) && u.push(k.intl.string(G.default.Sfr0Jw)),
                n.length > 0 && u.push(k.intl.string(V.default.wiungr)),
                { shouldShow: s, expiringPowerups: l, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = (function (e) {
            let t = (0, eL.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [n, i] = (0, j.ww)(l, e);
            return { shouldShow: null != t && n === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = [z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [u, d] = (0, j.kn)(a),
        m = u === z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        p = (function (e) {
            let t = [];
            e || t.push(z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, j.kn)(t);
            return { shouldShow: null != l && l === z.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: n };
        })(s.shouldShow || o.shouldShow || m);
    return l.shouldShow || s.shouldShow || o.shouldShow || p.shouldShow || m
        ? (0, n.jsxs)("div", {
              className: eB.kL,
              children: [
                  (0, n.jsx)(E.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: k.intl.string(G.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(eK, { text: l.text }),
                  s.shouldShow &&
                      (0, n.jsx)(eF, { guildId: t, powerupNames: s.expiringPowerupNames, warnings: s.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, n.jsx)(eU, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  p.shouldShow && (0, n.jsx)(eG, { markAsDismissed: p.markAsDismissed }),
                  m &&
                      (0, n.jsx)(ee.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: ex.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: ex.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: ex.ZSU.CARD,
                          },
                          onDismiss: () => d(ed.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
var e$ = l(490557);
function eJ(e) {
    let { guildId: t, powerup: l, badge: s } = e,
        [r, o] = i.useState(void 0);
    (0, ef.A)(r);
    let [a, u] = i.useState(!1),
        { textColor: d } = R((0, el.Ay)(t, l).type !== O.b_.INACTIVE);
    return (0, n.jsxs)(eg, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: s,
        children: [
            (0, n.jsx)(e$.l, { className: M.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(w.Ft, {
                title: l.title,
                textColor: d,
                footer: (0, n.jsx)(ep, { guildId: t, powerup: l }),
                children: (0, n.jsx)(E.E, {
                    className: M.h_,
                    color: d,
                    variant: "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, n.jsx)(w.kd, { children: (0, n.jsx)(en.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var eX = l(862482),
    eH = l(944304),
    eQ = l(975571),
    eZ = l(697311);
function eq(e) {
    let { count: t, type: l } = e,
        i = (function (e, t) {
            switch (t) {
                case O.yG.AVAILABLE:
                    return k.intl.formatToPlainString(G.default.BdRXZA, { boostCount: e });
                case O.yG.SPENT:
                    return k.intl.formatToPlainString(G.default.xvgIVG, { boostCount: e });
                case O.yG.TOTAL:
                    return k.intl.string(G.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: eZ.k,
        role: "img",
        "aria-label": `${t}, ${i}`,
        children: [
            (0, n.jsxs)("div", {
                className: eZ.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(x._, {
                        size: "sm",
                        color: l !== O.yG.AVAILABLE ? C.A.colors.TEXT_MUTED : C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, n.jsx)(h.D, {
                        color: l !== O.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(E.E, { "aria-hidden": "true", color: "text-muted", variant: "text-sm/medium", children: i }),
        ],
    });
}
var eY = l(685293);
function e0(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: s, total: o } = (0, eM.A)(t);
    if (null != l)
        return (0, n.jsxs)("div", {
            className: eY.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: eY.N1,
                    children: [
                        (0, n.jsx)(E.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: k.intl.string(G.default.hjvcLO),
                        }),
                        (0, n.jsx)(E.E, {
                            className: eY.C2,
                            variant: "text-xs/semibold",
                            children: k.intl.format(G.default.fXE30d, {
                                helpDeskArticle: eQ.A.getArticleURL(ex.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eY.hQ,
                    children: [
                        (0, n.jsx)(eq, { count: i, type: O.yG.AVAILABLE }),
                        (0, n.jsx)(eq, { count: s, type: O.yG.SPENT }),
                        (0, n.jsx)(eq, { count: o, type: O.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(eH.A, {
                    className: eY.S6,
                    guild: l,
                    analyticsLocation: {
                        page: ex.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: ex.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: eX.XD.CUSTOM,
                    size: eX.lO.LARGE,
                    icon: (0, n.jsx)(x._, {
                        className: eY.Ng,
                        size: "sm",
                        color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
            ],
        });
}
var e1 = l(97808),
    e9 = l(778712),
    e6 = l(463930),
    e5 = l(730134),
    e3 = l(63152),
    e4 = l(319756),
    e8 = l(854627),
    e7 = l(696451),
    e2 = l(317525),
    te = l(287809),
    tt = l(562153),
    tl = l(19575),
    tn = l(32746);
let ti = tl.Ay.getEnableHardwareAcceleration() ? e1.Js : e5.A;
function ts(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, r.bG)([e2.A], () => e2.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        s = (0, r.bG)([te.default], () => te.default.getCurrentUser()),
        o = s?.id,
        a = (0, r.bG)([e7.Ay], () => (null != o ? e7.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, r.bG)([eb.Ay], () => eb.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: f,
        } = (0, e8.A)({ userId: s?.id, guildId: t, size: e9._3.SIZE_40, animateOnHover: !d });
    return null == l || null == a || null == s
        ? null
        : (0, n.jsxs)("div", {
              className: tn.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: tn.FS,
                      children: [
                          (0, n.jsx)(E.E, {
                              variant: "text-md/semibold",
                              children: k.intl.string(u ? G.default.KSWK1U : G.default.XXXX5l),
                          }),
                          (0, n.jsx)(E.E, {
                              variant: "text-sm/medium",
                              children: k.intl.format(u ? G.default["7fWTg4"] : G.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, e3.K4)({
                                          guildId: t,
                                          location: {
                                              section: ex.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: ex.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !u &&
                      (0, n.jsx)(e4.V, {
                          avatar: (0, n.jsx)(ti, {
                              ...f,
                              user: s,
                              src: p,
                              avatarDecoration: m,
                              size: e9._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(e6.g, {
                              variant: "text-md/semibold",
                              name: tt.Ay.getName(t, null, s),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: g()(tn.Qs, tn.cX),
                          message: k.intl.string(k.t["6OSasb"]),
                          decorations: (0, n.jsx)(x._, {
                              color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: tn.$J,
                          }),
                      }),
                  (0, n.jsx)(eH.A, {
                      guild: l,
                      className: tn.Qs,
                      analyticsLocation: {
                          page: ex.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: ex.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: eX.XD.BRAND,
                      size: eX.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(x._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var tr = l(691540),
    to = l(857250),
    ta = l(97483),
    tu = l(243721),
    td = l(444927);
let tc = (0, l(945810).mj)({
    name: "2026-06-server-boost-bar-nudge",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tm = l(345549);
function tp(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t), [t]),
        s = (0, td.A)(() => l?.premiumProgressBarEnabled ?? !1),
        { enabled: o } = tc.useConfig({
            guildId: t,
            location: s ? "server_boosts_sidebar_do_not_use" : "server_boosts_sidebar",
        }),
        [a, u] = i.useState(!1),
        d = i.useCallback(
            async (e) => {
                u(e);
                try {
                    await e_.A.updateGuildPremiumProgressBar(t, e);
                } catch {
                    u(!e), (0, tr.P0)((0, to.o)(k.intl.string(k.t["rTU7/z"]), ta.Ck.FAILURE));
                }
            },
            [t],
        );
    return null == l || !o || s
        ? null
        : (0, n.jsx)("div", {
              className: tm.N,
              children: (0, n.jsx)(tu.d, {
                  label: k.intl.string(G.default.UuwXRZ),
                  description: k.intl.string(G.default.MIwlcR),
                  checked: a,
                  onChange: d,
              }),
          });
}
var tg = l(820739),
    tf = l(860071),
    tx = l(935208),
    tA = l(323472),
    th = l(492349),
    tE = l(606049),
    tv = l(58703),
    tI = l(967144),
    tj = l(168642),
    tb = l(198964);
function t_(e) {
    let t,
        { boost: l, phase: i, sortKey: s } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(tx.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: i,
                } = (0, r.cf)([e7.Ay], () => {
                    let t = e7.Ay.getMember(e.guildId, e.userId);
                    return {
                        username:
                            e7.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? k.intl.string(k.t["30mdIx"]),
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: i };
        })(l),
        d = (0, tI.gn)(l.guildId, l.userId, u ?? null),
        c = (0, tA.H)("GuildPowerupsRecentActivityRow"),
        m = new Date(s),
        { Icon: p, color: f } = (function (e, t) {
            if (!t) return { Icon: x._, color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK };
            switch (e) {
                case "gave":
                    return { Icon: x._, color: C.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: th.x, color: C.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: th.x, color: C.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i, c);
    return (0, n.jsxs)("div", {
        className: tj.og,
        children: [
            (0, n.jsx)(p, { color: f, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tj.x$,
                children: [
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tj.IP,
                        children: (0, n.jsx)(ej.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(e6.g, {
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
                        className: tj.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return k.intl.string(G.default.plwH8d);
                                case "expiring":
                                    return k.intl.formatToPlainString(G.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return k.intl.string(G.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(tE.A, {
                timestamp: m,
                timestampFormat: c
                    ? 0 === (t = (0, tv.m_)(m, new Date()))
                        ? `[${k.intl.string(k.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${k.intl.string(k.t.ZdDLO0)}]`
                          : "L"
                    : "L",
                className: c ? g()(tb["text-xs/semibold"], tj.vE) : tj.iE,
            }),
        ],
    });
}
var tS = l(639796);
function ty(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, tA.H)("GuildPowerupsRecentActivity"),
                l = (0, r.yK)([eV.A], () => eV.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
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
                                                return tx.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? tx.default.extractTimestamp(e.id);
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
                o = (0, r.yK)([e7.Ay], () => {
                    let t = new Set();
                    return (
                        s.forEach((l) => {
                            let { boost: n } = l;
                            null == e7.Ay.getMember(e, n.userId) && t.add(n.userId);
                        }),
                        Array.from(t)
                    );
                }, [e, s]);
            i.useEffect(() => {
                o.length > 0 && o.forEach((t) => tf.A.requestMember(e, t));
            }, [e, o]);
            let a = (0, r.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                u = i.useMemo(() => l.filter((e) => !e.ended).length, [l]),
                d = (0, r.bG)([eV.A], () => null != eV.A.getLastFetchedAtForGuild(e), [e]);
            return (
                i.useEffect(() => {
                    (a !== u || (t && !d)) && (0, tg.VU)(e, { includeEnded: t });
                }, [e, a, u, t, d]),
                s
            );
        })(t);
    return 0 === l.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, {
                      className: tS.w,
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: k.intl.string(k.t.yM9Krm),
                  }),
                  (0, n.jsx)(A.Ip, {
                      className: tS.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(t_, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tw = l(502525);
function tC(e) {
    let t,
        s,
        o,
        a,
        u,
        p,
        S,
        y,
        w,
        C,
        { guildId: R, powerupListingId: L } = e;
    (t = (0, _.C$)(R, "useLoadGuildPowerups")),
        i.useEffect(() => {
            t && (0, H.z9)(R);
        }, [R, t]),
        i.useEffect(() => {
            (0, Q.AK)(R), (0, Q.Xd)(R);
        }, [R]);
    let N = (0, _.C$)(R, "GuildPowerupsOverview");
    (0, X.Pq)(R);
    let P = (0, r.bG)([B.A], () => B.A.getStateForGuild(R)),
        T = (0, m.A)(R),
        V = i.useRef(!1),
        { shouldShow: M, modalConfig: W } =
            ((s = (0, r.bG)([c.A], () => c.A.getGuild(R))),
            (o = (0, m.A)(R) ?? !1),
            (a = (0, r.bG)([B.A], () => B.A.getStateForGuild(R))),
            (u = a?.allPowerups?.[K.zY]),
            (p = u?.storeRemovalDate),
            (S = (0, $.p)(R, "GuildPowerupsOverview")),
            (y = o && S && null != s),
            (w = i.useMemo(() => {
                if (!y || null == u || null == p) return null;
                let e = (0, J.A)(p);
                return {
                    dismissibleContent: z.M.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL,
                    header: `${u.title} ${k.intl.formatToPlainString(G.default["6e2ry1"], { dateString: e })}`,
                    bodies: [
                        k.intl.formatToPlainString(G.default.jd8fki, {
                            startDate: e,
                            endDate: e,
                            perkName: u.title,
                            boostCount: u.cost,
                        }),
                    ],
                    hasCancelButton: !1,
                };
            }, [y, u, p])),
            { shouldShow: y, modalConfig: w }),
        et = (0, v.A)(),
        el = null == L && !et && null != W,
        en = [];
    M && el && en.push(W.dismissibleContent);
    let [ei, es] = (0, j.kn)(en),
        er =
            ((C = (0, r.bG)([B.A], () => B.A.getStateForGuild(R))),
            i.useMemo(
                () =>
                    Y.reduce((e, t) => {
                        let l = C?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== O.o9.PERK) return e;
                                    let l = q[t.skuId];
                                    return null == l || ((e[l] ??= []), e[l].push(t)), e;
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
                                        e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0);
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
                                            (e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group,
                                        );
                                    if (-1 !== t && -1 !== l && l !== t + 1) {
                                        let t = [...e],
                                            [n] = t.splice(l, 1),
                                            i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === K.SL);
                                        return t.splice(i + 1, 0, n), t;
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === K.d0);
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
        eo = ey(
            er
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            R,
        );
    return (i.useEffect(() => {
        if (null != L && !V.current)
            for (let e of er)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === L) {
                        (0, eS.A)(R, t.powerup), (V.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === L || t.powerups.some((e) => e.skuId === L))) {
                        V.current = !0;
                        let e = eo[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(O.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, d.bG)(t), (V.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && L === U.W5) {
                        (0, D.A)({ guildId: R, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }), (V.current = !0);
                        return;
                    }
                }
    }, [R, L, er, eo]),
    i.useEffect(() => {
        if (null != ei && null != W) {
            let e = {
                onCloseCallback: () => {
                    es(ed.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${ei}`,
            };
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("98887"), l.e("86618")]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: W, markAsDismissed: es, ...t });
            }, e);
        }
    }, [R, ei, es, W]),
    P?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tw.kL,
              children: [
                  (0, n.jsxs)(b.A, {
                      className: tw.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(b.A.Icon, { icon: x._, "aria-label": "" }),
                          (0, n.jsx)(b.A.Title, { children: k.intl.string(G.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tw.hQ,
                      children: [
                          (0, n.jsx)(A.Ip, {
                              className: tw.DO,
                              children: er.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case O.o9.LEVEL:
                                                  return {
                                                      title: k.intl.string(G.default["TXY/b0"]),
                                                      description: k.intl.string(G.default.aJv4PB),
                                                  };
                                              case O.o9.PERK:
                                                  return {
                                                      title: k.intl.string(G.default.TV3Vm8),
                                                      description: k.intl.string(G.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      r = t === O.o9.LEVEL ? A.Ip : "div";
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tw.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tw.kn,
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
                                                  className: g()(tw.qJ, tw.kn, { [tw.dU]: t === O.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, n.jsx)(
                                                                  eI,
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
                                                                  eJ,
                                                                  { guildId: R, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, n.jsx)(
                                                                  eC,
                                                                  { guildId: R, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, n.jsx)(
                                                                  F,
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
                              className: tw.so,
                              children: [
                                  T
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(e0, { guildId: R }),
                                                (0, n.jsx)(tp, { guildId: R }),
                                                (0, n.jsx)(ez, { guildId: R }),
                                            ],
                                        })
                                      : (0, n.jsxs)("div", {
                                            className: tw.CG,
                                            children: [
                                                (0, n.jsx)(ee.A, {
                                                    guildId: R,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: ex.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: ex.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: ex.ZSU.CARD,
                                                    },
                                                }),
                                                (0, n.jsx)(ts, { guildId: R }),
                                            ],
                                        }),
                                  (0, n.jsx)(ty, { guildId: R }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tR(e) {
    let { guildId: t, powerupListingId: l } = e,
        i = (0, r.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, r.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, m.A)(t),
        f = (0, d.PR)(),
        x = !p || null == g || null == i,
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
        : (0, n.jsx)(tC, { guildId: t, powerupListingId: l });
}
