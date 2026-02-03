n.d(t, {
    H1: () => M,
    Lk: () => B,
    TQ: () => G,
    Xf: () => x,
    _c: () => k,
    c9: () => V,
    dN: () => U,
    ix: () => L,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(92674),
    o = n(311907),
    s = n(397927),
    l = n(59520);
n(15285);
var c = n(87719),
    u = n(287809),
    d = n(166403),
    f = n(829219),
    p = n(859703),
    _ = n(341915),
    h = n(302654),
    m = n(677402),
    g = n(890687),
    E = n(18437),
    y = n(590202),
    b = n(971649),
    O = n(773545),
    v = n(651892),
    A = n(710969),
    I = n(901406),
    S = n(92246),
    T = n(792620),
    C = n(814793),
    N = n(753386),
    w = n(175248),
    R = n(545986),
    P = n(654487),
    D = n(985018);

function L(e) {
    let { quest: t, questContent: n, questContentPosition: r, questContentRowIndex: a, sourceQuestContent: s } = e,
        l = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
        d = null == l ? void 0 : l.hasVerifiedEmailOrPhone(),
        f = null == l ? void 0 : l.verified,
        p = (0, E.Ut)();
    return i.useCallback(() => {
        null != t &&
            (p({
                questId: t.id,
                questContent: n,
                questContentCTA: y.Cy.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a,
                sourceQuestContent: s,
            }),
            (0, S.ks)(t.config) && !f
                ? (0, w.E)()
                : d
                  ? (0, S.K9)(t.config)
                      ? (0, c.x)()
                      : (0, S.tU)(t.config)
                        ? (0, R.hJ)(t, n, s)
                        : (0, S.HG)(t.config)
                          ? (0, R.cf)(t, n, s)
                          : (0, S.ks)(t.config)
                            ? (0, R.Df)(t, n, s)
                            : (0, R.rx)({
                                  quest: t,
                                  sourceQuestContent: s,
                              })
                  : (0, w.E)());
    }, [t, p, n, r, a, d, f, s]);
}
let x = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [o, l] = (0, s.zhh)(() => ({})),
            c = i.useRef(!1),
            u = (e) => {
                (c.current = !0),
                    l({
                        from: {
                            rotate: "0deg",
                        },
                        to: {
                            rotate: "360deg",
                        },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100,
                        },
                        loop: () => (null != e ? e : c.current),
                        immediate: t,
                    });
            },
            d = (0, a.animated)(s.fNY);
        return {
            render: () =>
                (0, r.jsx)(d, {
                    className: n,
                    style: t ? void 0 : o,
                    color: "currentColor",
                    size: "xs",
                }),
            startAnimation: u,
            stopAnimation: () => {
                c.current = !1;
            },
        };
    },
    M = (e, t, n) => {
        let { message: i, xboxURL: a } = (0, g.UX)(),
            o = (0, E.Ut)(),
            s = (r) => {
                var i;
                let s = r.target;
                (null == s || null == (i = s.tagName) ? void 0 : i.toLowerCase()) !== "a" ||
                    o({
                        questId: e,
                        questContent: t,
                        questContentCTA:
                            s.getAttribute("href") === a
                                ? y.Cy.HOW_TO_HELP_ARTICLE_XBOX
                                : y.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                        sourceQuestContent: n,
                    });
            };
        return (0, r.jsx)("span", {
            onClick: s,
            children: i,
        });
    };

function j(e) {
    return e.config.features.includes(P.Li.START_QUEST_CTA)
        ? (0, T.vl)(e)
            ? e.config.features.includes(P.Li.CLOUD_GAMING_ACTIVITY)
                ? {
                      text: D.intl.string(D.t["+qoymD"]),
                      questContentCTA: y.Cy.START_QUEST,
                  }
                : {
                      text: D.intl.string(D.t["Ie9++s"]),
                      questContentCTA: y.Cy.START_QUEST,
                  }
            : {
                  text: D.intl.string(D.t["hRIVy+"]),
                  questContentCTA: y.Cy.START_QUEST,
              }
        : {
              text: D.intl.string(D.t.l7E81v),
              questContentCTA: y.Cy.ACCEPT_QUEST,
          };
}

function k(e) {
    var t;
    let {
            quest: n,
            progressState: r,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            inGiftInventory: l,
            isVideoQuest: c,
            inGameQuest: u,
            sourceQuestContent: d,
        } = e,
        p = L({
            quest: n,
            questContent: a,
            questContentPosition: o,
            questContentRowIndex: s,
            sourceQuestContent: d,
        }),
        _ = (0, g.RR)({
            quest: n,
        }),
        h = (0, g.fc)(n),
        m = null == (t = (0, b.vU)()) ? void 0 : t.getId(),
        { launchInGameActivity: E } = (0, g.zW)(n),
        O = (0, C.vA)(n);
    return i.useMemo(() => {
        switch (r) {
            case g.F3.UNACCEPTED:
                let e = D.intl.string(D.t.kUQLMJ),
                    t = y.Cy.ACCEPT_QUEST;
                return (
                    c && ((e = D.intl.string(D.t.umdNin)), (t = y.Cy.START_QUEST)),
                    (u || (0, T.vl)(n)) && ({ text: e, questContentCTA: t } = j(n)),
                    {
                        text: e,
                        tooltipText: null,
                        onClick: async () => {
                            if ((0, T.BS)(n)) {
                                await (0, f.Oy)(n.id, {
                                    questContent: a,
                                    questContentCTA: t,
                                    questContentPosition: o,
                                    questContentRowIndex: s,
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
                                    questContentPosition: o,
                                    questContentRowIndex: s,
                                    sourceQuestContent: d,
                                }),
                                c
                                    ? await (0, R.e0)(n, {
                                          questContent: a,
                                          questContentCTA: t,
                                          sourceQuestContent: d,
                                          sourceQuestContentCTA: y.Cy.ACCEPT_QUEST,
                                          questContentPosition: o,
                                          questContentRowIndex: s,
                                      })
                                    : O &&
                                      (await (0, f.Oy)(n.id, {
                                          questContent: a,
                                          questContentCTA: t,
                                          questContentPosition: o,
                                          questContentRowIndex: s,
                                          sourceQuestContent: d,
                                      }),
                                      E());
                        },
                    }
                );
            case g.F3.ACCEPTED:
            case g.F3.IN_PROGRESS:
                if (_ && l)
                    return {
                        text: D.intl.string(D.t.Cfye4v),
                        tooltipText: null,
                        onClick: () =>
                            (0, I.se)(
                                {
                                    quest: n,
                                },
                                {
                                    content: a,
                                    ctaContent: y.Cy.CONNECT_CONSOLE,
                                    position: o,
                                    rowIndex: s,
                                    impressionId: m,
                                    sourceQuestContent: d,
                                },
                            ),
                    };
                if ((0, T.BS)(n))
                    return {
                        text: D.intl.string(D.t.IsH2Sp),
                        tooltipText: null,
                        onClick: () => {
                            (0, R.Fy)(n);
                        },
                    };
                if (c)
                    return {
                        text: (0, N.WM)(h),
                        tooltipText: D.intl.string(D.t.hsbwjv),
                        onClick: () =>
                            (0, R.d5)({
                                quest: n,
                                questContent: a,
                                sourceQuestContent: d,
                                sourceQuestContentCTA: y.Cy.WATCH_VIDEO,
                            }),
                    };
                else if (O) {
                    let { text: e } = j(n);
                    return {
                        text: e,
                        tooltipText: D.intl.string(D.t.hsbwjv),
                        onClick: () => {
                            n.config.features.includes(P.Li.START_QUEST_CTA) && E();
                        },
                    };
                }
                return {
                    text: D.intl.string(D.t.cfY4PE),
                    tooltipText: D.intl.string(D.t.hsbwjv),
                    onClick: null,
                };
            case g.F3.COMPLETED:
                return {
                    text: D.intl.string(D.t.cfY4PE),
                    tooltipText: null,
                    onClick: p,
                };
            case g.F3.CLAIMED:
                return {
                    tooltipText: null,
                    onClick: p,
                    text: (0, S.r7)(n.config) ? D.intl.string(D.t.bAGFz3) : D.intl.string(D.t.vTgCWx),
                };
        }
    }, [r, c, _, l, p, n, a, o, s, m, h, u, E, d, O]);
}

function U() {
    let { enableNewRequestBehavior: e } = h.A.useConfig({
            location: "useQuestBarQuest",
        }),
        t = (0, O.A)(_.yW.DESKTOP_ACCOUNT_PANEL_AREA),
        n = (0, o.bG)([p.A], () => {
            var e, t;
            return null !=
                (e =
                    null != (t = p.A.questDeliveryOverride)
                        ? t
                        : (0, A.t6)(p.A.quests, p.A.questToDeliverForPlacement, _.yW.DESKTOP_ACCOUNT_PANEL_AREA))
                ? e
                : null;
        });
    return e ? t : n;
}

function G(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, m.H)({
            location: n,
        }),
        a = (0, g.LS)(r),
        { premiumSubscription: s } = (0, o.cf)([d.A], () => ({
            premiumSubscription: d.A.getPremiumSubscription(),
        })),
        l = (0, o.bG)([p.A], () => null != p.A.questDeliveryOverride);
    if (null == r)
        return {
            isQuestBarVisible: !1,
            reason: "quest_is_null",
        };
    if ((0, S.K9)(r.config) && (null == s ? void 0 : s.isPurchasedExternally))
        return {
            isQuestBarVisible: !1,
            reason: "premium_subscription_is_purchased_externally",
        };
    let c = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null,
        u = !l && null != r.userStatus && (0, A.gO)(r.userStatus, _.uF.QUEST_BAR);
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

function V(e) {
    let { location: t } = e,
        { isQuestBarVisible: n } = G({
            location: t,
            quest: U(),
        }),
        { lastFetchedCurrentQuests: r, lastFetchedQuestToDeliver: i } = (0, o.cf)([p.A], () => ({
            lastFetchedCurrentQuests: p.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: p.A.lastFetchedQuestToDeliver,
        }));
    return {
        isQuestBarEmpty: !n,
        hasLoadedQuestBar: 0 !== r && 0 !== i,
    };
}
let F = {
    leading: !0,
    trailing: !1,
};

function B(e) {
    let { isShareable: t, questId: n, trackingCtx: r } = e;
    return (0, l.I)(
        i.useCallback(() => {
            t &&
                ((0, v.Xm)(n, r),
                (0, s.showToast)((0, s.createToast)(D.intl.string(D.t["+5kSoW"]), s.ToastType.SUCCESS)));
        }, [t, n, r]),
        3e3,
        [],
        F,
    );
}
