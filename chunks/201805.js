n.d(t, {
    H1: () => L,
    Lk: () => F,
    TQ: () => U,
    Xf: () => x,
    _c: () => M,
    c9: () => G,
    dN: () => k,
    ix: () => D,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(432022),
    s = n(311907),
    o = n(397927),
    l = n(59520);
n(15285);
var c = n(87719),
    u = n(287809),
    d = n(166403),
    f = n(829219),
    p = n(216456),
    _ = n(906822),
    h = n(859703),
    m = n(341915),
    g = n(302654),
    E = n(677402),
    b = n(890687),
    y = n(773545),
    O = n(651892),
    A = n(710969),
    v = n(901406),
    S = n(92246),
    I = n(792620),
    T = n(814793),
    C = n(753386),
    N = n(175248),
    R = n(545986),
    w = n(654487),
    P = n(985018);
function D(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: o } = e,
        l = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        d = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        f = null == l ? void 0 : l.verified,
        _ = (0, p.Ut)();
    return i.useCallback(() => {
        null != t &&
            (_({
                questId: t.id,
                questContent: n,
                questContentCTA: p.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: o,
            }),
            (0, S.ks)(t.config) && !f
                ? (0, N.E)()
                : d
                  ? (0, S.K9)(t.config)
                      ? (0, c.x)()
                      : (0, S.tU)(t.config)
                        ? (0, R.hJ)(t, n, o)
                        : (0, S.HG)(t.config)
                          ? (0, R.cf)(t, n, o)
                          : (0, S.ks)(t.config)
                            ? (0, R.Df)(t, n, o)
                            : (0, R.rx)({
                                  quest: t,
                                  sourceQuestContent: o,
                              })
                  : (0, N.E)());
    }, [t, _, n, r, a, d, f, o]);
}
let x = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, l] = (0, o.zhh)(() => ({})),
            c = i.useRef(!1),
            u = (e) => {
                (c.current = !0),
                    l({
                        from: { rotate: "0deg" },
                        to: { rotate: "360deg" },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100,
                        },
                        loop: () => (null != e ? e : c.current),
                        immediate: t,
                    });
            },
            d = (0, a.animated)(o.fNY);
        return {
            render: () =>
                (0, r.jsx)(d, {
                    className: n,
                    style: t ? void 0 : s,
                    color: "currentColor",
                    size: "xs",
                }),
            startAnimation: u,
            stopAnimation: () => {
                c.current = !1;
            },
        };
    },
    L = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, b.UX)(),
            s = (0, p.Ut)(),
            o = (r) => {
                var i;
                let o = r.target;
                (null == o || null == (i = o.tagName) ? void 0 : i.toLowerCase()) !== "a" ||
                    s({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            o.getAttribute("href") === a
                                ? p.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : p.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", {
            onClick: o,
            children: i,
        });
    };
function j(e) {
    return e.config.features.includes(w.Li.START_QUEST_CTA)
        ? (0, I.vl)(e)
            ? e.config.features.includes(w.Li.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: P.intl.string(P.t["+qoymD"]),
                      questContentCTA: p.Cy.START_QUEST,
                  }
                : {
                      text: P.intl.string(P.t["Ie9++s"]),
                      questContentCTA: p.Cy.START_QUEST,
                  }
            : {
                  text: P.intl.string(P.t["hRIVy+"]),
                  questContentCTA: p.Cy.START_QUEST,
              }
        : {
              text: P.intl.string(P.t.l7E81v),
              questContentCTA: p.Cy.ACCEPT_QUEST,
          };
}
function M(e) {
    var t;
    let {
            quest: n,
            progressState: r,
            questContent: a,
            questContentPosition: s,
            questContentRowIndex: o,
            inGiftInventory: l,
            isVideoQuest: c,
            inGameQuest: u,
            sourceQuestContent: d,
        } = e,
        h = D({
            quest: n,
            questContent: a,
            questContentPosition: s,
            questContentRowIndex: o,
            sourceQuestContent: d,
        }),
        m = (0, b.RR)({ quest: n }),
        g = (0, b.fc)(n),
        E = null == (t = (0, _.vU)()) ? void 0 : t.getId(),
        { launchInGameActivity: y } = (0, b.zW)(n),
        O = (0, T.vA)(n);
    return i.useMemo(() => {
        switch (r) {
            case b.F3.UNACCEPTED:
                let e = P.intl.string(P.t.kUQLMJ),
                    t = p.Cy.ACCEPT_QUEST;
                return (
                    c && ((e = P.intl.string(P.t.umdNin)), (t = p.Cy.START_QUEST)),
                    (u || (0, I.vl)(n)) && ({ text: e, questContentCTA: t } = j(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, I.BS)(n)) {
                                await (0, f.Oy)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: o,
                                    sourceQuestContent: d,
                                }),
                                    (0, R.Fy)(n);
                                return;
                            }
                            c ||
                                O ||
                                (0, f.Oy)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: s,
                                    questContentRowIndex: o,
                                    sourceQuestContent: d,
                                }),
                                c
                                    ? await (0, R.e0)(n, {
                                          questContent: a,
                                          questContentCTA: t,
                                          sourceQuestContent: d,
                                          sourceQuestContentCTA: p.Cy.ACCEPT_QUEST,
                                          questContentPosition: s,
                                          questContentRowIndex: o,
                                      })
                                    : O &&
                                      (await (0, f.Oy)(n.id, {
                                          questContent: a,
                                          questContentCTA: t,
                                          questContentPosition: s,
                                          questContentRowIndex: o,
                                          sourceQuestContent: d,
                                      }),
                                      y());
                        },
                    }
                );
            case b.F3.ACCEPTED:
            case b.F3.IN_PROGRESS:
                if (m && l)
                    return {
                        text: P.intl.string(P.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, v.se)(
                                { quest: n },
                                {
                                    content: a,
                                    ctaContent: p.Cy.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o,
                                    impressionId: E,
                                    sourceQuestContent: d,
                                },
                            ),
                    };
                if ((0, I.BS)(n))
                    return {
                        text: P.intl.string(P.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, R.Fy)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, C.WM)(g),
                        tooltipText: P.intl.string(P.t.hsbwjv),
                        onClick: () =>
                            (0, R.d5)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: d,
                                sourceQuestContentCTA: p.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (O) {
                    let { text: e } = j(n);
                    return {
                        text: e,
                        tooltipText: P.intl.string(P.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(w.Li.START_QUEST_CTA) && y();
                        },
                    };
                }
                return {
                    text: P.intl.string(P.t.cfY4PE),
                    tooltipText: P.intl.string(P.t.hsbwjv),
                    onClick: null,
                };
            case b.F3.COMPLETED:
                return {
                    text: P.intl.string(P.t.cfY4PE),
                    tooltipText: null,
                    onClick: h,
                };
            case b.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: h,
                    text: (0, S.r7)(n.config) ? P.intl.string(P.t.bAGFz3) : P.intl.string(P.t.vTgCWx),
                };
        }
    }, [r, c, m, l, h, n, a, s, o, E, g, u, y, d, O]);
}
function k() {
    let { enableNewRequestBehavior: e } = g.A.useConfig({ location: "useQuestBarQuest" }),
        t = (0, y.A)(m.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, s.bG)([h.A], () => {
            var e, t;
            return null !=
                (e =
                    null != (t = h.A.questDeliveryOverride)
                        ? t
                        : (0, A.t6)(h.A.quests, h.A.questToDeliverForPlacement, m.yW.DESKTOP_ACCOUNT_PANEL_AREA))
                ? e
                : null;
        });
    return e ? t : n;
}
function U(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, E.H)({ location: n }),
        a = (0, b.LS)(r),
        { premiumSubscription: o } = (0, s.cf)([d.A], () => ({ premiumSubscription: d.A.getPremiumSubscription() })),
        l = (0, s.bG)([h.A], () => null != h.A.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, S.K9)(r.config) && (null == o ? void 0 : o.isPurchasedExternally))
        return {
            isQuestBarVisible: !1,
            reason: "premium_subscription_is_purchased_externally",
        };
    let c = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        u = !l && null != r.userStatus && (0, A.gO)(r.userStatus, m.uF.QUEST_BAR);
    return c
        ? {
              isQuestBarVisible: !1,
              reason: "quest_claimed",
          }
        : a
          ? {
                isQuestBarVisible: !1,
                reason: "quest_expired",
            }
          : i
            ? u
                ? {
                      isQuestBarVisible: !1,
                      reason: "quest_dismissed",
                  }
                : {
                      isQuestBarVisible: !0,
                      reason: "quest_bar_visible",
                  }
            : {
                  isQuestBarVisible: !1,
                  reason: "quest_not_eligible_for_quests",
              };
}
function G(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = U({
            location: t,
            quest: k(),
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, s.cf)([h.A], () => ({
            lastFetchedCurrentQuests: h.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: h.A.lastFetchedQuestToDeliver,
        }));
    return {
        isQuestBarEmpty: !n,
        hasLoadedQuestBar: 0 !== r && 0 !== i,
    };
}
let V = {
    leading: !0,
    trailing: !1,
};
function F(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, O.Xm)(n, r),
                (0, o.showToast)((0, o.createToast)(P.intl.string(P.t["+5kSoW"]), o.ToastType.SUCCESS)));
        }, [t, n, r]),
        3000,
        [],
        V,
    );
}
