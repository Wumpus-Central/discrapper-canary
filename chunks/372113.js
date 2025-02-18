n.d(t, { Z: () => w });
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
    v = n(65443),
    E = n(160766),
    f = n(340100),
    N = n(644646),
    S = n(667105),
    q = n(341907),
    A = n(128535),
    R = n(87894),
    _ = n(2660),
    b = n(46140),
    Z = n(981631),
    y = n(388032),
    I = n(675163);
let M = (e, t, n) => ((0, R.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function L(e) {
    let { containerSize: t, onClick: n, children: i, tabIndex: l } = e;
    return 'xs' === t
        ? (0, s.jsx)(o.P3F, {
              tabIndex: l,
              className: I.learnMoreLink,
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
              wrapperClassName: I.ctaButtonWrapper,
              color: o.Ttl.PRIMARY,
              onClick: n,
              children: i
          });
}
function P(e) {
    let { quest: t, progressState: n, isCollectibleQuest: i, location: l, questContentPosition: a, inGiftInventory: u } = e,
        c = n >= h.OH.COMPLETED,
        m = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
        x = (0, r.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        C = (0, p.q8)(t),
        j = (0, S.Ks)({
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
            tooltipContentClassName: I.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, s.jsx)(T, {
                    ...e,
                    wrapperClassName: I.ctaButtonWrapper,
                    color: o.Ttl.BRAND,
                    disabled: null == j.onClick,
                    submitting: x,
                    onClick: null !== (t = j.onClick) && void 0 !== t ? t : () => {},
                    children: (0, s.jsx)('div', {
                        className: I.ctaButtonInner,
                        children: j.text
                    })
                });
            }
        },
        j.tooltipText
    );
}
let w = (e) => {
    let { quest: t, location: n, size: l, isFocused: d, isQuestExpired: g, isExpanded: S, isAnimating: w, contentPosition: D } = e,
        k = (0, h._Q)(t),
        U = k >= h.OH.ACCEPTED,
        O = k >= h.OH.COMPLETED,
        Q = k >= h.OH.CLAIMED,
        B = (0, p.Xv)(t.config),
        z = (0, R.uq)(n),
        W = n === C.jn.QUESTS_EMBED,
        F = S || w,
        G = U && !Q && z,
        H = (0, h.t5)(t, b.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: V } = (0, h.z6)(),
        X = (0, x.O5)(),
        Y = (0, j.j)({ location: b.dr.QUESTS_BAR_MOBILE }),
        K = i.useMemo(() => T.r.build(t.config), [t.config]),
        J = (0, r.e7)([u.default], () => u.default.locale),
        $ = (0, h.z)(t),
        ee = z && B,
        et = g && !O,
        en = V.length > 0 && z && (0, p.$J)(t) && U && !O && !$,
        es = (0, s.jsx)(E.Z, {
            quest: t,
            children: (0, s.jsx)(N.Z, {
                autoplay: d,
                className: a()(I.gridImg, {
                    [I.questRewardGiftInventory]: z && 'lg' === l,
                    [I.questRewardEmbed]: W && 'lg' === l,
                    [I.questRewardEmbedSm]: 'sm' === l,
                    [I.questRewardEmbedXs]: 'xs' === l
                }),
                learnMoreStyle: z ? null : 'text',
                location: b.dr.QUESTS_CARD,
                quest: t,
                questContent: n,
                questContentPosition: D
            })
        });
    return (0, s.jsxs)('div', {
        className: I.root,
        children: [
            (0, s.jsxs)('div', {
                className: a()(I.outerContainer, {
                    [I.outerContainerSm]: 'sm' === l,
                    [I.outerContainerXs]: 'xs' === l,
                    [I.outerContainerNoProgress]: !G
                }),
                style: { visibility: F ? 'inherit' : 'hidden' },
                'aria-hidden': !F,
                children: [
                    (0, s.jsx)(o.ua7, {
                        text: et ? y.intl.string(y.t['04MTGR']) : null,
                        tooltipContentClassName: I.rewardTileExpirationTooltip,
                        shouldShow: et,
                        children: (e) =>
                            (0, s.jsxs)('div', {
                                className: I.rewardTileWrapper,
                                ...e,
                                children: [
                                    g &&
                                        (0, s.jsx)('div', {
                                            className: I.rewardTileExpired,
                                            children: (0, s.jsx)(o.P4T, { color: o.TVs.colors.WHITE })
                                        }),
                                    ee
                                        ? (0, s.jsx)(_.Z, {
                                              questConfig: t.config,
                                              fallback: es,
                                              isFocused: d
                                          })
                                        : es
                                ]
                            })
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(I.gridText, I.taskDetails),
                        children: [
                            (0, s.jsx)(o.Text, {
                                variant: M(n, l, U),
                                className: I.taskInstructions,
                                children: g ? y.intl.formatToPlainString(y.t['ge+AJi'], { questName: t.config.messages.questName }) : H
                            }),
                            Y
                                ? (0, s.jsx)(v.Z, {
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
                                              v = u.defaultReward.messages.nameWithArticle,
                                              E = u.defaultReward.messages.nameWithArticle,
                                              f = x ? E : v,
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
                                                  ? y.intl.formatToPlainString(y.t.RrxtPT, {
                                                        reward: t,
                                                        date: j
                                                    })
                                                  : y.intl.formatToPlainString(y.t.zNoqRU, {
                                                        reward: f,
                                                        date: j
                                                    });
                                          }
                                          if (g)
                                              return T
                                                  ? y.intl.formatToPlainString(y.t.l1jCMz, { date: j })
                                                  : y.intl.formatToPlainString(y.t.zNoqRU, {
                                                        reward: f,
                                                        date: j
                                                    });
                                          let q = T
                                              ? (0, p.o9)({
                                                    quest: r,
                                                    idx: 0
                                                })
                                              : null;
                                          if (d) return y.intl.formatToPlainString(y.t.DT3aub, { reward: null !== (a = null == q ? void 0 : q.messages.nameWithArticle) && void 0 !== a ? a : f });
                                          if (null != q && null != q.approximateCount)
                                              return y.intl.format(y.t['4bMK19'], {
                                                  maxReward: q.messages.nameWithArticle,
                                                  maxRewardCount: (0, m.Bs)(q.approximateCount, o),
                                                  helpCenterLink: c.Z.getArticleURL(Z.BhN.QUESTS_LEARN_MORE)
                                              });
                                          if (null != N) {
                                              let e = (0, p.f$)(r.config) ? y.t.YWnLFx : y.t.Pu5eyM;
                                              return y.intl.formatToPlainString(e, {
                                                  reward: f,
                                                  duration: N
                                              });
                                          }
                                          return null != S ? S.description : y.intl.formatToPlainString(y.t.ttFsLi, { reward: f });
                                      })({
                                          quest: t,
                                          locale: J,
                                          isQuestExpired: g,
                                          sharedQuestFields: K,
                                          withCopySimplification: Y
                                      })
                                  })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(I.ctaButtonContainer, I.gridCtaButtons),
                        children: [
                            !z &&
                                (0, s.jsx)(L, {
                                    containerSize: l,
                                    onClick: () => {
                                        (0, q.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            X({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: D,
                                                questContentCTA: x.jZ.LEARN_MORE
                                            });
                                    },
                                    children: y.intl.string(y.t.LLLLPD)
                                }),
                            g && !O
                                ? null
                                : (0, s.jsx)(P, {
                                      quest: t,
                                      progressState: k,
                                      isCollectibleQuest: B,
                                      location: n,
                                      inGiftInventory: z
                                  })
                        ]
                    }),
                    G &&
                        (0, s.jsx)(f.Z, {
                            className: I.gridProgressBar,
                            color: O ? o.TVs.colors.TEXT_POSITIVE : o.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: z
                        })
                ]
            }),
            en &&
                (0, s.jsxs)('div', {
                    className: I.microphoneContainer,
                    children: [
                        (0, s.jsx)('div', { className: I.separator }),
                        (0, s.jsx)(A.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
