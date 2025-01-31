n.d(t, { Z: () => P });
var s = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(442837),
    o = n(481060),
    d = n(607070),
    u = n(706454),
    c = n(63063),
    m = n(930153),
    x = n(617136),
    h = n(113434),
    g = n(569984),
    C = n(497505),
    p = n(918701),
    j = n(467628),
    T = n(566078),
    E = n(65443),
    v = n(340100),
    f = n(644646),
    N = n(667105),
    S = n(341907),
    q = n(128535),
    A = n(87894),
    _ = n(2660),
    R = n(46140),
    b = n(981631),
    L = n(388032),
    Z = n(441347);
let M = (e, t, n) => ((0, A.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function y(e) {
    let { containerSize: t, onClick: n, children: i, tabIndex: l } = e;
    return 'xs' === t
        ? (0, s.jsx)(o.P3F, {
              tabIndex: l,
              className: Z.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, s.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: i
              })
          })
        : (0, s.jsx)(o.zxk, {
              tabIndex: l,
              wrapperClassName: Z.ctaButtonWrapper,
              color: o.Ttl.PRIMARY,
              onClick: n,
              children: i
          });
}
function I(e) {
    let { quest: t, progressState: n, isCollectibleQuest: i, location: l, questContentPosition: a, inGiftInventory: u } = e,
        c = n >= h.OH.COMPLETED,
        m = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
        x = (0, r.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        C = (0, p.q8)(t),
        j = (0, N.Ks)({
            progressState: n,
            quest: t,
            location: l,
            isCollectibleQuest: i,
            questContentPosition: a,
            inGiftInventory: u,
            isVideoQuest: C
        }),
        T = c && !m ? o.gtL : o.zxk;
    return (0, s.jsx)(
        o.ua7,
        {
            text: j.tooltipText,
            tooltipContentClassName: Z.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, s.jsx)(T, {
                    ...e,
                    wrapperClassName: Z.ctaButtonWrapper,
                    color: o.Ttl.BRAND,
                    disabled: null == j.onClick,
                    submitting: x,
                    onClick: null !== (t = j.onClick) && void 0 !== t ? t : () => {},
                    children: (0, s.jsx)('div', {
                        className: Z.ctaButtonInner,
                        children: j.text
                    })
                });
            }
        },
        j.tooltipText
    );
}
let P = (e) => {
    let { quest: t, location: n, size: l, isFocused: d, isQuestExpired: g, isExpanded: N, isAnimating: P, contentPosition: w } = e,
        D = (0, h._Q)(t),
        k = D >= h.OH.ACCEPTED,
        U = D >= h.OH.COMPLETED,
        Q = D >= h.OH.CLAIMED,
        O = (0, p.Xv)(t.config),
        B = (0, A.uq)(n),
        z = n === C.jn.QUESTS_EMBED,
        W = N || P,
        H = k && !Q && B,
        F = (0, h.t5)(t, R.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: G } = (0, h.z6)(),
        V = (0, x.O5)(),
        X = (0, j.j)({ location: R.dr.QUESTS_BAR_MOBILE }),
        Y = i.useMemo(() => T.r.build(t.config), [t.config]),
        K = (0, r.e7)([u.default], () => u.default.locale),
        J = (0, h.z)(t),
        $ = B && O,
        ee = g && !U,
        et = G.length > 0 && B && (0, p.$J)(t) && k && !U && !J,
        en = (0, s.jsx)(f.Z, {
            autoplay: d,
            className: a()(Z.gridImg, {
                [Z.questRewardGiftInventory]: B && 'lg' === l,
                [Z.questRewardEmbed]: z && 'lg' === l,
                [Z.questRewardEmbedSm]: 'sm' === l,
                [Z.questRewardEmbedXs]: 'xs' === l
            }),
            learnMoreStyle: B ? null : 'text',
            location: R.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: w
        });
    return (0, s.jsxs)('div', {
        className: Z.root,
        children: [
            (0, s.jsxs)('div', {
                className: a()(Z.outerContainer, {
                    [Z.outerContainerSm]: 'sm' === l,
                    [Z.outerContainerXs]: 'xs' === l,
                    [Z.outerContainerNoProgress]: !H
                }),
                style: { visibility: W ? 'inherit' : 'hidden' },
                'aria-hidden': !W,
                children: [
                    (0, s.jsx)(o.ua7, {
                        text: ee ? L.intl.string(L.t['04MTGR']) : null,
                        tooltipContentClassName: Z.rewardTileExpirationTooltip,
                        shouldShow: ee,
                        children: (e) =>
                            (0, s.jsxs)('div', {
                                className: Z.rewardTileWrapper,
                                ...e,
                                children: [
                                    g &&
                                        (0, s.jsx)('div', {
                                            className: Z.rewardTileExpired,
                                            children: (0, s.jsx)(o.P4T, { color: o.TVs.colors.WHITE })
                                        }),
                                    $
                                        ? (0, s.jsx)(_.Z, {
                                              questConfig: t.config,
                                              fallback: en,
                                              isFocused: d
                                          })
                                        : en
                                ]
                            })
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(Z.gridText, Z.taskDetails),
                        children: [
                            (0, s.jsx)(o.Text, {
                                variant: M(n, l, k),
                                className: Z.taskInstructions,
                                children: g ? L.intl.formatToPlainString(L.t['ge+AJi'], { questName: t.config.messages.questName }) : F
                            }),
                            X
                                ? (0, s.jsx)(E.Z, {
                                      textColor: 'text-muted',
                                      quest: t,
                                      withRewardName: !0
                                  })
                                : (0, s.jsx)(o.Text, {
                                      variant: 'lg' === l ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, s, i, l, a;
                                          let { quest: r, locale: o, isQuestExpired: d, sharedQuestFields: u, withCopySimplification: x } = e,
                                              g = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                              C = g && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                              j = (0, h.B6)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric'
                                              }),
                                              T = (0, p.oo)({ quest: r }),
                                              E = u.defaultReward.messages.nameWithArticle,
                                              v = u.defaultReward.messages.nameWithArticle,
                                              f = x ? v : E,
                                              N = (0, p.Kr)(r.config),
                                              S = (0, p.b7)(r);
                                          if (C) {
                                              let e = T
                                                      ? (0, p.o9)({
                                                            quest: r,
                                                            idx: null === (i = r.userStatus) || void 0 === i ? void 0 : i.claimedTier
                                                        })
                                                      : null,
                                                  t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
                                              return null != t
                                                  ? L.intl.formatToPlainString(L.t.RrxtPT, {
                                                        reward: t,
                                                        date: j
                                                    })
                                                  : L.intl.formatToPlainString(L.t.zNoqRU, {
                                                        reward: f,
                                                        date: j
                                                    });
                                          }
                                          if (g)
                                              return T
                                                  ? L.intl.formatToPlainString(L.t.l1jCMz, { date: j })
                                                  : L.intl.formatToPlainString(L.t.zNoqRU, {
                                                        reward: f,
                                                        date: j
                                                    });
                                          let q = T
                                              ? (0, p.o9)({
                                                    quest: r,
                                                    idx: 0
                                                })
                                              : null;
                                          if (d) return L.intl.formatToPlainString(L.t.DT3aub, { reward: null !== (a = null == q ? void 0 : q.messages.nameWithArticle) && void 0 !== a ? a : f });
                                          if (null != q && null != q.approximateCount)
                                              return L.intl.format(L.t['4bMK19'], {
                                                  maxReward: q.messages.nameWithArticle,
                                                  maxRewardCount: (0, m.Bs)(q.approximateCount, o),
                                                  helpCenterLink: c.Z.getArticleURL(b.BhN.QUESTS_LEARN_MORE)
                                              });
                                          if (null != N) {
                                              let e = (0, p.f$)(r.config) ? L.t.YWnLFx : L.t.Pu5eyM;
                                              return L.intl.formatToPlainString(e, {
                                                  reward: f,
                                                  duration: N
                                              });
                                          }
                                          return null != S ? S.description : L.intl.formatToPlainString(L.t.ttFsLi, { reward: f });
                                      })({
                                          quest: t,
                                          locale: K,
                                          isQuestExpired: g,
                                          sharedQuestFields: Y,
                                          withCopySimplification: X
                                      })
                                  })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(Z.ctaButtonContainer, Z.gridCtaButtons),
                        children: [
                            !B &&
                                (0, s.jsx)(y, {
                                    containerSize: l,
                                    onClick: () => {
                                        (0, S.navigateToQuestHome)(R.dr.QUESTS_CARD, n, t.id),
                                            V({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: w,
                                                questContentCTA: x.jZ.LEARN_MORE
                                            });
                                    },
                                    children: L.intl.string(L.t.LLLLPD)
                                }),
                            g && !U
                                ? null
                                : (0, s.jsx)(I, {
                                      quest: t,
                                      progressState: D,
                                      isCollectibleQuest: O,
                                      location: n,
                                      inGiftInventory: B
                                  })
                        ]
                    }),
                    H &&
                        (0, s.jsx)(v.Z, {
                            className: Z.gridProgressBar,
                            color: U ? o.TVs.colors.TEXT_POSITIVE : o.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: B
                        })
                ]
            }),
            et &&
                (0, s.jsxs)('div', {
                    className: Z.microphoneContainer,
                    children: [
                        (0, s.jsx)('div', { className: Z.separator }),
                        (0, s.jsx)(q.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
