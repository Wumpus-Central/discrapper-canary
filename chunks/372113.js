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
    v = n(65443),
    E = n(340100),
    f = n(644646),
    N = n(667105),
    S = n(341907),
    q = n(128535),
    A = n(87894),
    R = n(2660),
    _ = n(46140),
    b = n(981631),
    Z = n(388032),
    I = n(675163);
let M = (e, t, n) => ((0, A.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function y(e) {
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
function L(e) {
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
let P = (e) => {
    let { quest: t, location: n, size: l, isFocused: d, isQuestExpired: g, isExpanded: N, isAnimating: P, contentPosition: w } = e,
        D = (0, h._Q)(t),
        k = D >= h.OH.ACCEPTED,
        U = D >= h.OH.COMPLETED,
        O = D >= h.OH.CLAIMED,
        B = (0, p.Xv)(t.config),
        Q = (0, A.uq)(n),
        z = n === C.jn.QUESTS_EMBED,
        W = N || P,
        F = k && !O && Q,
        G = (0, h.t5)(t, _.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: H } = (0, h.z6)(),
        V = (0, x.O5)(),
        X = (0, j.j)({ location: _.dr.QUESTS_BAR_MOBILE }),
        Y = i.useMemo(() => T.r.build(t.config), [t.config]),
        K = (0, r.e7)([u.default], () => u.default.locale),
        J = (0, h.z)(t),
        $ = Q && B,
        ee = g && !U,
        et = H.length > 0 && Q && (0, p.$J)(t) && k && !U && !J,
        en = (0, s.jsx)(f.Z, {
            autoplay: d,
            className: a()(I.gridImg, {
                [I.questRewardGiftInventory]: Q && 'lg' === l,
                [I.questRewardEmbed]: z && 'lg' === l,
                [I.questRewardEmbedSm]: 'sm' === l,
                [I.questRewardEmbedXs]: 'xs' === l
            }),
            learnMoreStyle: Q ? null : 'text',
            location: _.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: w
        });
    return (0, s.jsxs)('div', {
        className: I.root,
        children: [
            (0, s.jsxs)('div', {
                className: a()(I.outerContainer, {
                    [I.outerContainerSm]: 'sm' === l,
                    [I.outerContainerXs]: 'xs' === l,
                    [I.outerContainerNoProgress]: !F
                }),
                style: { visibility: W ? 'inherit' : 'hidden' },
                'aria-hidden': !W,
                children: [
                    (0, s.jsx)(o.ua7, {
                        text: ee ? Z.intl.string(Z.t['04MTGR']) : null,
                        tooltipContentClassName: I.rewardTileExpirationTooltip,
                        shouldShow: ee,
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
                                    $
                                        ? (0, s.jsx)(R.Z, {
                                              questConfig: t.config,
                                              fallback: en,
                                              isFocused: d
                                          })
                                        : en
                                ]
                            })
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(I.gridText, I.taskDetails),
                        children: [
                            (0, s.jsx)(o.Text, {
                                variant: M(n, l, k),
                                className: I.taskInstructions,
                                children: g ? Z.intl.formatToPlainString(Z.t['ge+AJi'], { questName: t.config.messages.questName }) : G
                            }),
                            X
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
                                                  ? Z.intl.formatToPlainString(Z.t.RrxtPT, {
                                                        reward: t,
                                                        date: j
                                                    })
                                                  : Z.intl.formatToPlainString(Z.t.zNoqRU, {
                                                        reward: f,
                                                        date: j
                                                    });
                                          }
                                          if (g)
                                              return T
                                                  ? Z.intl.formatToPlainString(Z.t.l1jCMz, { date: j })
                                                  : Z.intl.formatToPlainString(Z.t.zNoqRU, {
                                                        reward: f,
                                                        date: j
                                                    });
                                          let q = T
                                              ? (0, p.o9)({
                                                    quest: r,
                                                    idx: 0
                                                })
                                              : null;
                                          if (d) return Z.intl.formatToPlainString(Z.t.DT3aub, { reward: null !== (a = null == q ? void 0 : q.messages.nameWithArticle) && void 0 !== a ? a : f });
                                          if (null != q && null != q.approximateCount)
                                              return Z.intl.format(Z.t['4bMK19'], {
                                                  maxReward: q.messages.nameWithArticle,
                                                  maxRewardCount: (0, m.Bs)(q.approximateCount, o),
                                                  helpCenterLink: c.Z.getArticleURL(b.BhN.QUESTS_LEARN_MORE)
                                              });
                                          if (null != N) {
                                              let e = (0, p.f$)(r.config) ? Z.t.YWnLFx : Z.t.Pu5eyM;
                                              return Z.intl.formatToPlainString(e, {
                                                  reward: f,
                                                  duration: N
                                              });
                                          }
                                          return null != S ? S.description : Z.intl.formatToPlainString(Z.t.ttFsLi, { reward: f });
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
                        className: a()(I.ctaButtonContainer, I.gridCtaButtons),
                        children: [
                            !Q &&
                                (0, s.jsx)(y, {
                                    containerSize: l,
                                    onClick: () => {
                                        (0, S.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            V({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: w,
                                                questContentCTA: x.jZ.LEARN_MORE
                                            });
                                    },
                                    children: Z.intl.string(Z.t.LLLLPD)
                                }),
                            g && !U
                                ? null
                                : (0, s.jsx)(L, {
                                      quest: t,
                                      progressState: D,
                                      isCollectibleQuest: B,
                                      location: n,
                                      inGiftInventory: Q
                                  })
                        ]
                    }),
                    F &&
                        (0, s.jsx)(E.Z, {
                            className: I.gridProgressBar,
                            color: U ? o.TVs.colors.TEXT_POSITIVE : o.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: Q
                        })
                ]
            }),
            et &&
                (0, s.jsxs)('div', {
                    className: I.microphoneContainer,
                    children: [
                        (0, s.jsx)('div', { className: I.separator }),
                        (0, s.jsx)(q.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
