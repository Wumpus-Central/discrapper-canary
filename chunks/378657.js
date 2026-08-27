l.r(t), l.d(t, { default: () => tj });
var n = l(477900),
    i = l(582128),
    r = l(562708),
    s = l(17928),
    o = l(688810),
    a = l(139286),
    u = l(736056),
    d = l(976860),
    c = l(71393),
    m = l(363487);
l(321073), l(323874), l(14289), l(35956);
var p = l(503698),
    g = l.n(p),
    x = l(192308),
    f = l(104510),
    A = l(364522),
    h = l(297264),
    E = l(834730),
    v = l(942857),
    I = l(793574),
    j = l(37537),
    b = l(131607),
    _ = l(831617),
    S = l(289704),
    w = l(821609),
    y = l(612400),
    C = l(661531);
function P(e) {
    return e
        ? { textColor: "text-default", iconColor: C.A.colors.TEXT_DEFAULT }
        : { textColor: "text-muted", iconColor: C.A.colors.TEXT_MUTED };
}
var R = l(475669),
    N = l(948134),
    L = l(904629);
function G(e) {
    let t = (0, s.bG)([R.A], () => R.A.getStateForGuild(e));
    return i.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, L.k)(e);
    }, [t?.entitlements]);
}
var T = l(375708),
    k = l(641641),
    D = l(144977),
    O = l(628049),
    V = l(568065),
    U = l(632847),
    M = l(929729),
    W = l(517826);
function B(e) {
    let t,
        l,
        { guildId: r } = e,
        o = i.useRef(null),
        { state: a, lowestGameServerCost: u } = (0, s.cf)([R.A], () => ({
            state: R.A.getStateForGuild(r),
            lowestGameServerCost: R.A.getLowestGameCostForGuild(r),
        })),
        d =
            ((t = (0, s.bG)([R.A], () => R.A.getStateForGuild(r)?.entitlements, [r])),
            (l = G(r)),
            i.useMemo(() => {
                if (0 !== Object.values(t ?? {}).length)
                    return l.length > 0
                        ? { type: "expiring", expiringAt: l[0].ends_at }
                        : { type: "active", statusText: T.intl.string(k.default.FFLkmx) };
            }, [l, t])),
        { gameName: c, gameName2: m } = (0, N.A)(),
        { textColor: p } = P(d?.type === "active");
    return null == a
        ? null
        : (0, n.jsxs)(y.NI, {
              label: T.intl.string(U.default["B3OfL/"]),
              badge: V.ys[O.W5],
              isActive: d?.type === "active",
              isWarning: d?.type === "expiring",
              onClick: () => (0, D.A)({ guildId: r, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, n.jsx)("div", {
                      className: g()(M.ZS, W.Sl),
                      children: (0, n.jsx)(S.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: o,
                          className: M.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, n.jsx)(y.Ft, {
                      title: T.intl.string(U.default["B3OfL/"]),
                      textColor: p,
                      footer: (0, n.jsx)(y.$L, { cost: u ?? 0, costDecorator: "+", status: d }),
                      children: (0, n.jsx)(E.E, {
                          className: W.h_,
                          color: p,
                          variant: "text-sm/medium",
                          children: T.intl.format(U.default["+UqyGU"], { gameName: c, gameName2: m }),
                      }),
                  }),
                  (0, n.jsx)(y.kd, {
                      children: (0, n.jsx)(w.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(a.entitlements).length > 0
                                  ? T.intl.string(U.default.PuvU5b)
                                  : T.intl.string(U.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, D.A)({ guildId: r, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW });
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
    J = l(545445),
    X = l(939981),
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
    ee = [V.o9.LEVEL, V.o9.PERK];
var et = l(182859),
    el = l(210273),
    en = l(998418),
    ei = l(722523),
    er = l(172218),
    es = l(294384),
    eo = l(813847),
    ea = l(43105),
    eu = l(186111),
    ed = l(621466),
    ec = l(49999);
function em(e) {
    let { powerup: t, targetRef: l, isCardVisible: r } = e,
        o = (0, s.bG)([eu.A], () => eu.A.hasLayers()),
        a = (0, x.useHasAnyModalOpen)(),
        u =
            t.skuId === z.FB
                ? {
                      title: T.intl.string(k.default.YWo6VL),
                      body: T.intl.string(k.default.gXVvKc),
                      dismissibleContentType: $.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        d = [];
    null == u || o || !r || a || d.push(u.dismissibleContentType);
    let [c, m] = (0, b.kn)(d);
    return (!(function (e) {
        let { targetRef: t, onShouldClose: l, topThreshold: n = 40, bottomThreshold: r = 60, enabled: s = !0 } = e;
        i.useEffect(() => {
            if (!s || t?.current == null) return;
            let e = null;
            function i(i) {
                if (t?.current == null || !(0, ed.vq)(i.target, HTMLElement)) return;
                let s = i.target;
                if (!s.contains(t.current)) return;
                let o = s.scrollTop;
                if (null === e) {
                    e = o;
                    return;
                }
                let a = o - e,
                    u = Math.abs(a);
                ((a < 0 && u > n) || (a > 0 && u > r)) && l();
            }
            return (
                document.addEventListener("scroll", i, { passive: !0, capture: !0 }),
                () => {
                    document.removeEventListener("scroll", i, { capture: !0 });
                }
            );
        }, [s, t, l, n, r]);
    })({
        targetRef: l,
        onShouldClose: i.useCallback(() => {
            m(ec.i.INDIRECT_ACTION);
        }, [m]),
        enabled: null != c,
    }),
    null == u || null == c)
        ? null
        : (0, n.jsx)(ea.A, {
              targetElementRef: l,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: u.title,
              body: u.body,
              onRequestClose: () => {
                  m(ec.i.USER_DISMISS);
              },
          });
}
var ep = l(224331);
function eg(e) {
    let { guildId: t, powerup: l, className: i } = e,
        r = (0, en.Ay)(t, l),
        s = r.type !== V.b_.LEVEL_ACTIVATED,
        o = (0, es.A)(t, l, "GuildPowerupCardBodyFooter"),
        a = (0, eo.e)(l, r, o);
    return (0, n.jsx)(y.$L, { status: a, cost: s ? l.cost : void 0, className: i });
}
function ex(e) {
    let { guildId: t, powerup: l, badge: r, className: s, onHover: o, children: a } = e,
        u = (0, m.A)(t),
        d = (0, en.Ay)(t, l),
        c = d.type !== V.b_.INACTIVE,
        p = d.sourceEntitlement?.ends_at != null,
        g = (0, es.A)(t, l, "GuildPowerupCard"),
        x = i.useRef(null),
        f = (0, ep.A)(t, l),
        [A, h] = i.useState(!1),
        E = (0, er.K)(h, 1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(y.NI, {
                label: l.title,
                isActive: c,
                isWarning: p,
                badge: r,
                canRollback: g,
                onClick: f,
                onMouseOver: () => o?.(!0),
                onMouseLeave: () => o?.(!1),
                className: s,
                ref: (e) => {
                    (x.current = e), (E.current = e);
                },
                children: a,
            }),
            !g && u && (0, n.jsx)(em, { powerup: l, targetRef: x, isCardVisible: A }),
        ],
    });
}
var ef = l(867060),
    eA = l(652215),
    eh = l(508155),
    eE = l(695578);
function ev(e) {
    let t,
        { active: l, nextActive: i, position: r } = e;
    return (
        (t = l && !1 !== i ? V.z0.FULL : l && !1 === i ? V.z0.HALF : V.z0.NONE),
        (0, n.jsxs)("div", {
            className: eE.progressContainer,
            children: [
                (0, n.jsx)("div", { className: g()(eE.progress, eE[r], eE[t]) }),
                (0, n.jsx)("div", {
                    className: g()(eE.boostContainer, W.JD, { [eE.boostContainerActive]: l, [W.vu]: l }),
                    children: (0, n.jsx)(f._, { size: "sm", color: C.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function eI(e) {
    let { isActive: t, index: l } = e,
        { textColor: r, iconColor: s } = P(t),
        o = (0, j.c)("GuildPowerupLevelBody"),
        a = i.useMemo(() => {
            let e = eh.t[l];
            if (null == e) return [];
            let t = e.tier === eA.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, el.X)(e.perkIcon);
                return (0, n.jsxs)(
                    "div",
                    {
                        className: eE.perkRow,
                        children: [
                            (0, n.jsx)(i, { color: s, size: "sm" }),
                            (0, n.jsx)(E.E, {
                                className: eE.perkText,
                                color: r,
                                variant: o ? "text-sm/normal" : "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${l}-${t}`,
                );
            });
        }, [l, s, o, r]);
    return (0, n.jsxs)("div", {
        className: eE.perkRowContainer,
        children: [
            a,
            (0, n.jsx)("div", {
                className: eE.perkRow,
                children: (0, n.jsx)(E.E, {
                    color: r,
                    variant: o ? "text-sm/normal" : "text-sm/medium",
                    children: T.intl.string(k.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function ej(e) {
    let t,
        { guildId: l, index: r, powerup: s, nextPowerup: o } = e,
        a = (0, en.Ay)(l, s),
        u = (0, en.Ay)(l, o),
        d = a.type !== V.b_.INACTIVE,
        c = u.type !== V.b_.INACTIVE,
        m = a.type === V.b_.TIER_OVERRIDE_ACTIVATED,
        [p, g] = i.useState(void 0);
    (0, ef.A)(p), (t = 0 === r ? V.At.START : null == o ? V.At.END : V.At.MIDDLE);
    let { textColor: x } = P(d);
    return (0, n.jsxs)(ex, {
        guildId: l,
        powerup: s,
        className: eE.card,
        children: [
            (0, n.jsx)(ev, { position: t, active: d, nextActive: null != o ? c : void 0 }),
            (0, n.jsx)(y.Ft, {
                title: s.title,
                textColor: x,
                footer: !m && (0, n.jsx)(eg, { className: eE.footer, guildId: l, powerup: s }),
                children: (0, n.jsx)(eI, { isActive: d, index: r }),
            }),
            !m && (0, n.jsx)(y.kd, { children: (0, n.jsx)(ei.Ay, { guildId: l, powerup: s, onError: g }) }),
        ],
    });
}
var eb = l(866665),
    e_ = l(775602),
    eS = l(468689),
    ew = l(685073),
    ey = l(915667);
function eC(e, t) {
    let r = (0, m.A)(t) ?? !1,
        o = (0, s.bG)([K.A], () => K.A.getStateForGuild(t)?.allPowerups),
        a = (0, s.bG)([c.A], () => {
            let e = c.A.getGuild(t);
            return null != e && (0, ew.Rg)(e);
        });
    return i.useMemo(() => {
        let i = {};
        for (let s of e) {
            let e =
                "guildTagsBadgePacks" === s
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: r, hasServerTags: s } = e,
                              o = T.intl.string(k.default.KC9HRW),
                              a = T.intl.string(k.default.GJiSmP),
                              u = r?.[z.SL],
                              d = T.intl.string(k.default["/egwJA"]),
                              c = s ? void 0 : T.intl.string(k.default.W6Vwn3),
                              m = s ? void 0 : T.intl.string(k.default.lvk1Gc),
                              p = s ? T.intl.string(k.default["9CfkLO"]) : T.intl.string(T.t["+7XY31"]),
                              g = s ? "secondary" : "expressive",
                              A = i
                                  ? () => {
                                        s
                                            ? eS.A.open(t, eA.BEX.TAG, eA.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != u && (0, ey.A)(t, u),
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
                                          let { default: r } = await Promise.all([l.e("991051"), l.e("875295")]).then(
                                              l.bind(l, 289634),
                                          );
                                          return (l) =>
                                              (0, n.jsx)(r, {
                                                  guildId: t,
                                                  title: o,
                                                  description: T.intl.string(k.default.BBRFRd),
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
                                      { onCloseCallback: r?.onModalClose },
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
                      })({ guildId: t, canUseBoosts: r, allPowerups: o, hasServerTags: a })
                    : void 0;
            null != e && (i[s] = e);
        }
        return i;
    }, [e, t, r, o, a]);
}
var eP = l(625361);
function eR(e) {
    let { guildId: t, group: l, powerups: r } = e,
        [o, a] = i.useState(!1),
        u = (0, s.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        d = eC([l], t)[l],
        c = !u && o ? d?.image?.animatedUrl : d?.image?.staticUrl,
        m = (function (e) {
            let t,
                { guildId: l, powerups: n } = e,
                i = (0, en.jJ)(l, n),
                r = i.some((e) => e.type !== V.b_.INACTIVE);
            if (n.length <= 0) return null;
            let s = i.reduce(
                (e, t) => {
                    let { sourceEntitlement: l } = t,
                        n = l?.ends_at;
                    return null == n ? e : null == e || n < e ? n : e;
                },
                void 0,
            );
            null != s
                ? (t = { type: "expiring", expiringAt: s })
                : r && (t = { type: "active", statusText: T.intl.string(k.default.FFLkmx) });
            let o = i.reduce((e, t) => {
                    let { type: l, powerup: n } = t;
                    return l === V.b_.POWERUP_ACTIVATED ? e + n.cost : e;
                }, 0),
                a = i.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e < (l?.cost ?? 0) ? e : (l?.cost ?? 0);
                }, i[0]?.powerup?.cost ?? 0),
                u = i.reduce((e, t) => {
                    let { powerup: l } = t;
                    return e + (l?.cost ?? 0);
                }, 0),
                d = r ? o : a;
            return {
                isActive: r,
                status: t,
                cost: d,
                costDecorator: !r && u > d ? "+" : void 0,
                expiringAt: s,
                activeCost: o,
                minCost: a,
                totalCost: u,
            };
        })({ guildId: t, powerups: r }),
        { textColor: p } = P(m?.isActive ?? !1),
        g = (0, j.c)("GuildPowerupMultiPerkCard");
    if (null == m || null == d) return null;
    let { status: x, cost: f, costDecorator: A } = m;
    return (0, n.jsxs)(y.NI, {
        label: d.title,
        isActive: x?.type === "active",
        isWarning: x?.type === "expiring",
        badge: d.badge,
        onClick: () => d.openModal(r),
        onMouseOver: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, n.jsx)("img", { alt: "", src: c, className: eP.S }),
            (0, n.jsx)(y.Ft, {
                title: d.title,
                textColor: p,
                footer: (0, n.jsx)(y.$L, { status: x, cost: f, costDecorator: A }),
                children: (0, n.jsx)(E.E, {
                    className: eP.h,
                    color: p,
                    variant: g ? "text-sm/normal" : "text-sm/medium",
                    children: d.description,
                }),
            }),
            (0, n.jsx)(y.kd, {
                children:
                    d?.viewCtaTooltip != null
                        ? (0, n.jsx)(eb.m, {
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
var eN = l(403362),
    eL = l(639060),
    eG = l(408278),
    eT = l(789645),
    ek = l(425138);
function eD(e) {
    let { markAsDismissed: t } = e,
        l = (0, j.c)("GuildPowerupInfoCard");
    return (0, n.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, n.jsx)("img", { alt: "", className: ek.Sl, src: "/assets/73b70c7aab95c776.svg" }),
            (0, n.jsx)(E.E, {
                color: "text-overlay-light",
                variant: "text-md/semibold",
                children: T.intl.string(k.default.diMhWc),
            }),
            (0, n.jsx)(E.E, {
                color: "text-overlay-light",
                variant: l ? "text-sm/normal" : "text-sm/medium",
                children: T.intl.string(k.default.pycxTr),
            }),
            (0, n.jsx)("div", {
                className: ek.VN,
                children: (0, n.jsx)(eG.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": T.intl.string(T.t.cpT0Cq),
                    onClick: () => {
                        t(ec.i.USER_DISMISS);
                    },
                    icon: eT.P,
                }),
            }),
        ],
    });
}
var eO = l(972213),
    eV = l(695366),
    eU = l(168691);
function eM(e) {
    let { notificationConfig: t, markAsDismissed: l } = e,
        i = (0, j.c)("GuildPowerupRollbackNotification");
    return (0, n.jsxs)("div", {
        className: eU.kL,
        children: [
            (0, n.jsx)("div", {
                className: eU.VN,
                children: (0, n.jsx)(eG.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": T.intl.string(T.t.cpT0Cq),
                    onClick: () => {
                        l(ec.i.USER_DISMISS);
                    },
                    icon: eO.XLargeIcon,
                }),
            }),
            (0, n.jsx)(eV.E, { color: C.A.colors.TEXT_FEEDBACK_WARNING, className: eU.Kk }),
            (0, n.jsx)(E.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, n.jsx)(E.E, { variant: i ? "text-sm/normal" : "text-sm/medium", children: t.description }),
        ],
    });
}
var eW = l(859241),
    eB = l(864310),
    eF = l(620019);
function eK(e) {
    let { guildId: t, powerupNames: l, warnings: r } = e,
        {
            shouldShow: o,
            title: a,
            description: u,
        } = (function (e, t) {
            let { spent: l } = (0, eB.A)(e),
                n = (0, s.bG)([eW.A], () => eW.A.getAppliedGuildBoostsForGuild(e), [e]),
                r = l - i.useMemo(() => n?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [n]);
            return i.useMemo(
                () =>
                    r <= 0
                        ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                        : {
                              shouldShow: !0,
                              title: T.intl.string(k.default.n5hQhc),
                              description: T.intl.formatToPlainString(k.default.iAaAiG, {
                                  boostCount: r,
                                  perksString: t.join(", "),
                              }),
                              requiredBoostCount: r,
                          },
                [r, t],
            );
        })(t, l),
        d = (0, j.c)("GuildPowerupsWarning");
    return o
        ? (0, n.jsxs)("div", {
              className: eF.kL,
              children: [
                  (0, n.jsx)(eV.E, { color: C.A.colors.TEXT_FEEDBACK_WARNING, className: eF.Kk }),
                  (0, n.jsx)(E.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: a }),
                  (0, n.jsxs)(E.E, {
                      variant: d ? "text-sm/normal" : "text-sm/medium",
                      children: [
                          u,
                          r?.map((e, t) =>
                              (0, n.jsx)(
                                  E.E,
                                  {
                                      variant: d ? "text-sm/normal" : "text-sm/medium",
                                      color: "text-feedback-warning",
                                      className: eF.$e,
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
var ez = l(463080);
function e$(e) {
    let { text: t } = e,
        l = (0, j.c)("Tier3OverrideNotice");
    return (0, n.jsx)("div", {
        className: ez.ac,
        children: (0, n.jsx)(E.E, { variant: l ? "text-sm/normal" : "text-sm/medium", children: t }),
    });
}
function eJ(e) {
    let { guildId: t } = e,
        l = (0, s.bG)([c.A], () => c.A.getGuild(t)?.features.has(eA.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0)
            ? { shouldShow: !0, text: T.intl.string(k.default.l9n4QZ) }
            : { shouldShow: !1, text: "" },
        r = (function (e) {
            let t,
                l =
                    ((t = (0, s.bG)([K.A], () => K.A.getStateForGuild(e))),
                    i.useMemo(() => {
                        if (null == t) return [];
                        let { allPowerups: e, unlockedPowerups: l } = t;
                        return (0, L.k)(Object.values(l))
                            .map((t) => e[t.sku_id])
                            .filter(eN.Vq);
                    }, [t])),
                n = G(e),
                r = l.length > 0 || n.length > 0;
            if (!r) return { shouldShow: !1, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
            let o = n.length > 0 ? T.intl.string(U.default["B3OfL/"]) : void 0,
                a = [...l.map((e) => e.title), ...(null != o ? [o] : [])],
                u = [];
            return (
                l.some((e) => e.skuId === z.FB) && u.push(T.intl.string(k.default.Sfr0Jw)),
                n.length > 0 && u.push(T.intl.string(U.default.wiungr)),
                { shouldShow: r, expiringPowerups: l, expiringPowerupNames: a, warnings: u }
            );
        })(t),
        o = (function (e) {
            let t = (0, eL.A)(e, "GuildPowerupNotificationContainer"),
                l = [];
            null != t && l.push(t.dismissibleContent);
            let [n, i] = (0, b.ww)(l, e);
            return { shouldShow: null != t && n === t.dismissibleContent, notificationConfig: t, markAsDismissed: i };
        })(t),
        a = [$.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [u, d] = (0, b.kn)(a),
        m = u === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        p = (function (e) {
            let t = [];
            e || t.push($.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
            let [l, n] = (0, b.kn)(t);
            return { shouldShow: null != l && l === $.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, markAsDismissed: n };
        })(r.shouldShow || o.shouldShow || m),
        g = (0, j.c)("GuildPowerupNotificationContainer");
    return l.shouldShow || r.shouldShow || o.shouldShow || p.shouldShow || m
        ? (0, n.jsxs)("div", {
              className: ez.kL,
              children: [
                  (0, n.jsx)(E.E, {
                      variant: g ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: g ? "text-strong" : "text-subtle",
                      children: T.intl.string(k.default["3FRirU"]),
                  }),
                  l.shouldShow && (0, n.jsx)(e$, { text: l.text }),
                  r.shouldShow &&
                      (0, n.jsx)(eK, { guildId: t, powerupNames: r.expiringPowerupNames, warnings: r.warnings }),
                  o.shouldShow &&
                      null != o.notificationConfig &&
                      (0, n.jsx)(eM, { notificationConfig: o.notificationConfig, markAsDismissed: o.markAsDismissed }),
                  p.shouldShow && (0, n.jsx)(eD, { markAsDismissed: p.markAsDismissed }),
                  m &&
                      (0, n.jsx)(et.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: eA.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: eA.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: eA.ZSU.CARD,
                          },
                          onDismiss: () => d(ec.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
var eX = l(490557);
function eH(e) {
    let { guildId: t, powerup: l, badge: r } = e,
        [s, o] = i.useState(void 0);
    (0, ef.A)(s);
    let [a, u] = i.useState(!1),
        { textColor: d } = P((0, en.Ay)(t, l).type !== V.b_.INACTIVE),
        c = (0, j.c)("GuildPowerupPerkCard");
    return (0, n.jsxs)(ex, {
        onHover: (e) => u(e),
        guildId: t,
        powerup: l,
        badge: r,
        children: [
            (0, n.jsx)(eX.l, { className: W.Sl, powerup: l, isHovering: a }),
            (0, n.jsx)(y.Ft, {
                title: l.title,
                textColor: d,
                footer: (0, n.jsx)(eg, { guildId: t, powerup: l }),
                children: (0, n.jsx)(E.E, {
                    className: W.h_,
                    color: d,
                    variant: c ? "text-sm/normal" : "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, n.jsx)(y.kd, { children: (0, n.jsx)(ei.Ay, { guildId: t, powerup: l, onError: o }) }),
        ],
    });
}
var eQ = l(862482),
    eZ = l(944304),
    eq = l(975571),
    eY = l(380572);
function e0(e) {
    let { count: t, type: l } = e,
        i = (0, j.c)("GuildPowerupsBoostInfo"),
        r = (function (e, t) {
            switch (t) {
                case V.yG.AVAILABLE:
                    return T.intl.formatToPlainString(k.default.BdRXZA, { boostCount: e });
                case V.yG.SPENT:
                    return T.intl.formatToPlainString(k.default.xvgIVG, { boostCount: e });
                case V.yG.TOTAL:
                    return T.intl.string(k.default["/F7Z2y"]);
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: eY.k,
        role: "img",
        "aria-label": `${t}, ${r}`,
        children: [
            (0, n.jsxs)("div", {
                className: eY.N,
                "aria-hidden": "true",
                children: [
                    (0, n.jsx)(f._, {
                        size: "sm",
                        color: l !== V.yG.AVAILABLE ? C.A.colors.TEXT_MUTED : C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, n.jsx)(h.D, {
                        color: l !== V.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: i ? "experimental/body-lg/semibold" : "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, n.jsx)(E.E, {
                "aria-hidden": "true",
                color: "text-muted",
                variant: i ? "text-sm/normal" : "text-sm/medium",
                children: r,
            }),
        ],
    });
}
var e1 = l(690118);
function e6(e) {
    let { guildId: t } = e,
        l = (0, s.bG)([c.A], () => c.A.getGuild(t)),
        { available: i, spent: r, total: o } = (0, eB.A)(t),
        a = (0, j.c)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != l)
        return (0, n.jsxs)("div", {
            className: e1.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: e1.N1,
                    children: [
                        (0, n.jsx)(E.E, {
                            variant: a ? "experimental/heading-sm/semibold" : "eyebrow",
                            color: a ? "text-strong" : "text-subtle",
                            children: T.intl.string(k.default.hjvcLO),
                        }),
                        (0, n.jsx)(E.E, {
                            className: e1.C2,
                            variant: a ? "experimental/body-sm/medium" : "text-xs/semibold",
                            children: T.intl.format(k.default.fXE30d, {
                                helpDeskArticle: eq.A.getArticleURL(eA.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: e1.hQ,
                    children: [
                        (0, n.jsx)(e0, { count: i, type: V.yG.AVAILABLE }),
                        (0, n.jsx)(e0, { count: r, type: V.yG.SPENT }),
                        (0, n.jsx)(e0, { count: o, type: V.yG.TOTAL }),
                    ],
                }),
                (0, n.jsx)(eZ.A, {
                    className: e1.S6,
                    guild: l,
                    analyticsLocation: {
                        page: eA.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: eA.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: eQ.XD.CUSTOM,
                    size: eQ.lO.LARGE,
                    icon: (0, n.jsx)(f._, {
                        className: e1.Ng,
                        size: "sm",
                        color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
            ],
        });
}
var e9 = l(97808),
    e8 = l(778712),
    e5 = l(463930),
    e3 = l(730134),
    e4 = l(906199),
    e2 = l(483625),
    e7 = l(854627),
    te = l(696451),
    tt = l(317525),
    tl = l(287809),
    tn = l(562153),
    ti = l(19575),
    tr = l(985827);
let ts = ti.Ay.getEnableHardwareAcceleration() ? e9.Js : e3.A;
function to(e) {
    let { guildId: t } = e,
        l = (0, s.bG)([c.A], () => c.A.getGuild(t)),
        i = (0, s.bG)([tt.A], () => tt.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        r = (0, s.bG)([tl.default], () => tl.default.getCurrentUser()),
        o = r?.id,
        a = (0, s.bG)([te.Ay], () => (null != o ? te.Ay.getMember(t, o) : void 0), [o, t]),
        u = a?.premiumSince != null,
        d = (0, s.bG)([e_.Ay], () => e_.Ay.useReducedMotion),
        {
            avatarDecorationSrc: m,
            avatarSrc: p,
            eventHandlers: x,
        } = (0, e7.A)({ userId: r?.id, guildId: t, size: e8._3.SIZE_40, animateOnHover: !d }),
        A = (0, j.c)("GuildPowerupsBoostInfoContainerMember");
    return null == l || null == a || null == r
        ? null
        : (0, n.jsxs)("div", {
              className: tr.ft,
              children: [
                  (0, n.jsxs)("div", {
                      className: tr.FS,
                      children: [
                          (0, n.jsx)(E.E, {
                              variant: "text-md/semibold",
                              color: A ? "text-strong" : void 0,
                              children: T.intl.string(u ? k.default.KSWK1U : k.default.XXXX5l),
                          }),
                          (0, n.jsx)(E.E, {
                              variant: A ? "text-sm/normal" : "text-sm/medium",
                              children: T.intl.format(u ? k.default["7fWTg4"] : k.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, e4.K4)({
                                          guildId: t,
                                          location: {
                                              section: eA.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: eA.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != i &&
                      !u &&
                      (0, n.jsx)(e2.V, {
                          avatar: (0, n.jsx)(ts, {
                              ...x,
                              user: r,
                              src: p,
                              avatarDecoration: m,
                              size: e8._3.SIZE_40,
                              "aria-hidden": !0,
                              animate: !0,
                          }),
                          username: (0, n.jsx)(e5.g, {
                              variant: "text-md/semibold",
                              name: tn.Ay.getName(t, null, r),
                              colorString: i.colorString,
                              colorStrings: i.colorStrings,
                          }),
                          className: g()(tr.Qs, tr.cX),
                          message: T.intl.string(T.t["6OSasb"]),
                          decorations: (0, n.jsx)(f._, {
                              color: C.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: tr.$J,
                          }),
                      }),
                  (0, n.jsx)(eZ.A, {
                      guild: l,
                      className: tr.Qs,
                      analyticsLocation: {
                          page: eA.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: eA.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: eQ.XD.BRAND,
                      size: eQ.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, n.jsx)(f._, { color: "currentColor", size: "sm" }),
                  }),
              ],
          });
}
var ta = l(820739),
    tu = l(860071),
    td = l(935208),
    tc = l(492349),
    tm = l(606049),
    tp = l(58703),
    tg = l(967144),
    tx = l(262001),
    tf = l(736541);
function tA(e) {
    let t,
        { boost: l, phase: i, sortKey: r } = e,
        {
            username: o,
            roleColor: a,
            roleColorStrings: u,
        } = (function (e) {
            let t = new Date(td.default.extractTimestamp(e.id)),
                {
                    username: l,
                    roleColor: n,
                    roleColorStrings: i,
                } = (0, s.cf)([te.Ay], () => {
                    let t = te.Ay.getMember(e.guildId, e.userId);
                    return {
                        username:
                            te.Ay.getNick(e.guildId, e.userId) ?? e.user?.username ?? T.intl.string(T.t["30mdIx"]),
                        roleColor: t?.colorString ?? null,
                        roleColorStrings: t?.colorStrings ?? null,
                    };
                }, [e]);
            return { timestamp: t, username: l, roleColor: n, roleColorStrings: i };
        })(l),
        d = (0, tg.gn)(l.guildId, l.userId, u ?? null),
        c = (0, j.c)("GuildPowerupsRecentActivityRow"),
        m = new Date(r),
        { Icon: p, color: x } = (function (e) {
            switch (e) {
                case "gave":
                    return { Icon: f._, color: C.A.colors.ICON_MUTED };
                case "expiring":
                    return { Icon: tc.x, color: C.A.colors.ICON_FEEDBACK_WARNING };
                case "expired":
                    return { Icon: tc.x, color: C.A.colors.ICON_FEEDBACK_CRITICAL };
            }
        })(i);
    return (0, n.jsxs)("div", {
        className: tx.og,
        children: [
            (0, n.jsx)(p, { color: x, size: "sm" }),
            (0, n.jsxs)("span", {
                className: tx.x$,
                children: [
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        className: tx.IP,
                        children: (0, n.jsx)(eb.m, {
                            text: o,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, n.jsx)(e5.g, {
                                variant: "text-md/semibold",
                                name: o,
                                colorString: a ?? null,
                                colorStrings: d,
                            }),
                        }),
                    }),
                    (0, n.jsx)(E.E, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: c ? void 0 : "text-muted",
                        className: tx.CC,
                        children: (function (e) {
                            switch (e.phase) {
                                case "gave":
                                    return T.intl.string(k.default.plwH8d);
                                case "expiring":
                                    return T.intl.formatToPlainString(k.default.vct4l8, { date: e.endsAt.valueOf() });
                                case "expired":
                                    return T.intl.string(k.default.hSXjlI);
                            }
                        })(e),
                    }),
                ],
            }),
            (0, n.jsx)(tm.A, {
                timestamp: m,
                timestampFormat:
                    0 === (t = (0, tp.m_)(m, new Date()))
                        ? `[${T.intl.string(T.t.mbs4NX)}]`
                        : -1 === t
                          ? `[${T.intl.string(T.t.ZdDLO0)}]`
                          : "L",
                className: g()(tf[c ? "text-xs/medium" : "text-xs/semibold"], tx.vE),
            }),
        ],
    });
}
var th = l(834205);
function tE(e) {
    let { guildId: t } = e,
        l = (function (e) {
            let t = (0, s.yK)([eW.A], () => eW.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
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
                                                return td.default.extractTimestamp(e.id);
                                            case "expiring":
                                                return t.endsAt.getTime() - 2592e5;
                                            case "expired":
                                                return e.endsAt?.getTime() ?? td.default.extractTimestamp(e.id);
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
                r = (0, s.yK)([te.Ay], () => {
                    let t = new Set();
                    return (
                        n.forEach((l) => {
                            let { boost: n } = l;
                            null == te.Ay.getMember(e, n.userId) && t.add(n.userId);
                        }),
                        Array.from(t)
                    );
                }, [e, n]);
            i.useEffect(() => {
                r.length > 0 && r.forEach((t) => tu.A.requestMember(e, t));
            }, [e, r]);
            let o = (0, s.bG)([c.A], () => c.A.getGuild(e)?.premiumSubscriberCount),
                a = i.useMemo(() => t.filter((e) => !e.ended).length, [t]),
                u = (0, s.bG)([eW.A], () => null != eW.A.getLastFetchedAtForGuild(e), [e]);
            return (
                i.useEffect(() => {
                    (o === a && u) || (0, ta.VU)(e, { includeEnded: !0 });
                }, [e, o, a, u]),
                n
            );
        })(t),
        r = (0, j.c)("GuildPowerupsRecentActivity");
    return 0 === l.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, {
                      className: th.w,
                      variant: r ? "experimental/heading-sm/semibold" : "eyebrow",
                      color: r ? "text-strong" : "text-subtle",
                      children: T.intl.string(T.t.yM9Krm),
                  }),
                  (0, n.jsx)(A.Ip, {
                      className: th.k,
                      fade: !0,
                      children: l.map((e) => (0, n.jsx)(tA, { ...e }, `boost-${e.boost.id}`)),
                  }),
              ],
          });
}
var tv = l(726724);
function tI(e) {
    let t,
        r,
        o,
        a,
        u,
        p,
        S,
        w,
        y,
        C,
        { guildId: P, powerupListingId: R } = e;
    (t = (0, _.C$)(P, "useLoadGuildPowerups")),
        i.useEffect(() => {
            t && (0, Q.z9)(P);
        }, [P, t]),
        i.useEffect(() => {
            (0, Z.AK)(P), (0, Z.Xd)(P);
        }, [P]);
    let N = (0, _.C$)(P, "GuildPowerupsOverview"),
        L = (0, j.c)("GuildPowerupsOverview");
    (0, H.Pq)(P);
    let G = (0, s.bG)([K.A], () => K.A.getStateForGuild(P)),
        U = (0, m.A)(P),
        M = i.useRef(!1),
        { shouldShow: W, modalConfig: el } =
            ((r = (0, s.bG)([c.A], () => c.A.getGuild(P))),
            (o = (0, m.A)(P) ?? !1),
            (a = (0, s.bG)([K.A], () => K.A.getStateForGuild(P))),
            (u = a?.allPowerups?.[z.zY]),
            (p = u?.storeRemovalDate),
            (S = (0, J.p)(P, "GuildPowerupsOverview")),
            (w = o && S && null != r),
            (y = i.useMemo(() => {
                if (!w || null == u || null == p) return null;
                let e = (0, X.A)(p);
                return {
                    dismissibleContent: $.M.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL,
                    header: `${u.title} ${T.intl.formatToPlainString(k.default["6e2ry1"], { dateString: e })}`,
                    bodies: [
                        T.intl.formatToPlainString(k.default.jd8fki, {
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
        en = (0, v.A)(),
        ei = null == R && !en && null != el,
        er = [];
    W && ei && er.push(el.dismissibleContent);
    let [es, eo] = (0, b.kn)(er),
        ea =
            ((C = (0, s.bG)([K.A], () => K.A.getStateForGuild(P))),
            i.useMemo(
                () =>
                    ee.reduce((e, t) => {
                        let l = C?.powerupCatalog[t];
                        if (null == l) return e;
                        let n = (function (e, t, l) {
                            let n = [],
                                i = t.reduce((e, t) => {
                                    if (t.type !== V.o9.PERK) return e;
                                    let l = Y[t.skuId];
                                    return null == l || ((e[l] ??= []), e[l].push(t)), e;
                                }, {});
                            for (let e of t) {
                                if (e.type === V.o9.LEVEL) {
                                    n.push({ type: "singleLevel", powerup: e });
                                    continue;
                                }
                                let t = Y[e.skuId];
                                if (null != t) {
                                    let e = i[t];
                                    if (void 0 !== e) {
                                        let l = q[t];
                                        e.sort((e, t) => l.indexOf(e.skuId) - l.indexOf(t.skuId)),
                                            n.push({ type: "multiPerk", group: t, powerups: e }),
                                            (i[t] = void 0);
                                    }
                                    continue;
                                }
                                n.push({ type: "singlePerk", powerup: e, badge: V.ys[e.skuId] });
                            }
                            return (
                                l && e === V.o9.PERK && n.push({ type: "gameServer" }),
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
                                        return t.splice(i + 1, 0, n), t;
                                    }
                                    return e;
                                })(
                                    (function (e) {
                                        let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === z.d0);
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
        eu = eC(
            ea
                .flatMap((e) => e.listings)
                .filter((e) => "multiPerk" === e.type)
                .map((e) => e.group),
            P,
        );
    return (i.useEffect(() => {
        if (null != R && !M.current)
            for (let e of ea)
                for (let t of e.listings) {
                    if (("singleLevel" === t.type || "singlePerk" === t.type) && t.powerup.skuId === R) {
                        (0, ey.A)(P, t.powerup), (M.current = !0);
                        return;
                    }
                    if ("multiPerk" === t.type && (t.group === R || t.powerups.some((e) => e.skuId === R))) {
                        M.current = !0;
                        let e = eu[t.group];
                        if (null == e) return;
                        e.openModal(t.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(V.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, d.bG)(t), (M.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === t.type && R === O.W5) {
                        (0, D.A)({ guildId: P, analyticsLocation: I.A.GUILD_POWERUPS_OVERVIEW }), (M.current = !0);
                        return;
                    }
                }
    }, [P, R, ea, eu]),
    i.useEffect(() => {
        if (null != es && null != el) {
            let e = {
                onCloseCallback: () => {
                    eo(ec.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${es}`,
            };
            (0, x.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("239592"), l.e("586618")]).then(l.bind(l, 442241));
                return (t) => (0, n.jsx)(e, { modalConfig: el, markAsDismissed: eo, ...t });
            }, e);
        }
    }, [P, es, eo, el]),
    G?.powerupCatalog == null)
        ? null
        : (0, n.jsxs)("div", {
              className: tv.kL,
              children: [
                  (0, n.jsxs)(F.A, {
                      className: tv.KE,
                      hideSearch: !0,
                      toolbar: (0, n.jsx)("div", {}),
                      children: [
                          (0, n.jsx)(F.A.Icon, { icon: f._, "aria-label": "" }),
                          (0, n.jsx)(F.A.Title, { children: T.intl.string(k.default.yv3DJJ) }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tv.hQ,
                      children: [
                          (0, n.jsx)(A.Ip, {
                              className: tv.DO,
                              children: ea.map((e) => {
                                  let { type: t, listings: l } = e,
                                      { title: i, description: r } = (function (e) {
                                          switch (e) {
                                              case V.o9.LEVEL:
                                                  return {
                                                      title: T.intl.string(k.default["TXY/b0"]),
                                                      description: T.intl.string(k.default.aJv4PB),
                                                  };
                                              case V.o9.PERK:
                                                  return {
                                                      title: T.intl.string(k.default.TV3Vm8),
                                                      description: T.intl.string(k.default.STx9hp),
                                                  };
                                          }
                                      })(t),
                                      s = t === V.o9.LEVEL ? A.Ip : "div";
                                  return (0, n.jsxs)(
                                      "div",
                                      {
                                          className: tv.lt,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tv.kn,
                                                  children: [
                                                      (0, n.jsx)(h.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, n.jsx)(E.E, {
                                                          color: L ? void 0 : "text-muted",
                                                          variant: L ? "text-sm/normal" : "text-sm/medium",
                                                          children: r,
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)(s, {
                                                  orientation: "horizontal",
                                                  className: g()(tv.qJ, tv.kn, { [tv.dU]: t === V.o9.LEVEL }),
                                                  fade: !0,
                                                  children: l.map((e, t) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, n.jsx)(
                                                                  ej,
                                                                  {
                                                                      guildId: P,
                                                                      index: t,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: l[t + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, n.jsx)(
                                                                  eH,
                                                                  { guildId: P, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, n.jsx)(
                                                                  eR,
                                                                  { guildId: P, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, n.jsx)(
                                                                  B,
                                                                  { guildId: P },
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
                              className: tv.so,
                              children: [
                                  U
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)(e6, { guildId: P }), (0, n.jsx)(eJ, { guildId: P })],
                                        })
                                      : (0, n.jsxs)("div", {
                                            className: tv.CG,
                                            children: [
                                                (0, n.jsx)(et.A, {
                                                    guildId: P,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: eA.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: eA.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: eA.ZSU.CARD,
                                                    },
                                                }),
                                                (0, n.jsx)(to, { guildId: P }),
                                            ],
                                        }),
                                  (0, n.jsx)(tE, { guildId: P }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function tj(e) {
    let { guildId: t, powerupListingId: l } = e,
        i = (0, s.bG)([c.A], () => c.A.getGuild(t)),
        p = (0, s.bG)([u.A], () => u.A.hasLoadedExperiments),
        g = (0, m.A)(t),
        x = (0, d.PR)(),
        f = !p || null == g || null == i,
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
        : (0, n.jsx)(tI, { guildId: t, powerupListingId: l });
}
