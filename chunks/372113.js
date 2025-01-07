var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    a = n(607070),
    u = n(706454),
    c = n(63063),
    d = n(930153),
    m = n(617136),
    x = n(113434),
    h = n(569984),
    C = n(497505),
    p = n(918701),
    g = n(566078),
    E = n(340100),
    j = n(644646),
    T = n(667105),
    f = n(341907),
    v = n(128535),
    S = n(87894),
    N = n(2660),
    q = n(46140),
    _ = n(981631),
    A = n(388032),
    R = n(441347);
let b = (e, t, n) => ((0, S.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function I(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: l } = e;
    return 'xs' === t
        ? (0, i.jsx)(o.Clickable, {
              tabIndex: l,
              className: R.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, i.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, i.jsx)(o.Button, {
              tabIndex: l,
              wrapperClassName: R.ctaButtonWrapper,
              color: o.ButtonColors.PRIMARY,
              onClick: n,
              children: s
          });
}
function M(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: l, questContentPosition: u, inGiftInventory: c } = e,
        d = n >= x.OH.COMPLETED,
        m = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        C = (0, r.e7)([h.Z], () => h.Z.isEnrolling(t.id)),
        g = (0, p.q8)(t),
        E = (0, T.Ks)({
            progressState: n,
            quest: t,
            location: l,
            isCollectibleQuest: s,
            questContentPosition: u,
            inGiftInventory: c,
            isVideoQuest: g
        }),
        j = d && !m ? o.ShinyButton : o.Button;
    return (0, i.jsx)(
        o.Tooltip,
        {
            text: E.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, i.jsx)(j, {
                    ...e,
                    wrapperClassName: R.ctaButtonWrapper,
                    color: o.ButtonColors.BRAND,
                    disabled: null == E.onClick,
                    submitting: C,
                    onClick: null !== (t = E.onClick) && void 0 !== t ? t : () => {},
                    children: (0, i.jsx)('div', {
                        className: R.ctaButtonInner,
                        children: E.text
                    })
                });
            }
        },
        E.tooltipText
    );
}
t.Z = (e) => {
    let { quest: t, location: n, size: s, isFocused: a, isQuestExpired: h, isExpanded: T, isAnimating: L, contentPosition: Z } = e,
        y = (0, x._Q)(t),
        P = y >= x.OH.ACCEPTED,
        B = y >= x.OH.COMPLETED,
        D = y >= x.OH.CLAIMED,
        w = (0, p.Xv)(t.config),
        U = (0, S.uq)(n),
        O = n === C.jn.QUESTS_EMBED,
        Q = T || L,
        k = P && !D && U,
        H = (0, x.t5)(t, q.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: W } = (0, x.z6)(),
        G = (0, r.e7)([u.default], () => u.default.locale),
        F = (0, x.z)(t),
        z = U && w,
        V = h && !B,
        X = W.length > 0 && U && (0, p.$J)(t) && P && !B && !F,
        Y = (0, i.jsx)(j.Z, {
            autoplay: a,
            className: l()(R.gridImg, {
                [R.questRewardGiftInventory]: U && 'lg' === s,
                [R.questRewardEmbed]: O && 'lg' === s,
                [R.questRewardEmbedSm]: 'sm' === s,
                [R.questRewardEmbedXs]: 'xs' === s
            }),
            learnMoreStyle: U ? null : 'text',
            location: q.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: Z
        });
    return (0, i.jsxs)('div', {
        className: R.root,
        children: [
            (0, i.jsxs)('div', {
                className: l()(R.outerContainer, {
                    [R.outerContainerSm]: 'sm' === s,
                    [R.outerContainerXs]: 'xs' === s,
                    [R.outerContainerNoProgress]: !k
                }),
                style: { visibility: Q ? 'inherit' : 'hidden' },
                'aria-hidden': !Q,
                children: [
                    (0, i.jsx)(o.Tooltip, {
                        text: V ? A.intl.string(A.t['04MTGR']) : null,
                        tooltipContentClassName: R.rewardTileExpirationTooltip,
                        shouldShow: V,
                        children: (e) =>
                            (0, i.jsxs)('div', {
                                className: R.rewardTileWrapper,
                                ...e,
                                children: [
                                    h &&
                                        (0, i.jsx)('div', {
                                            className: R.rewardTileExpired,
                                            children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.WHITE })
                                        }),
                                    z
                                        ? (0, i.jsx)(N.Z, {
                                              questConfig: t.config,
                                              fallback: Y,
                                              isFocused: a
                                          })
                                        : Y
                                ]
                            })
                    }),
                    (0, i.jsxs)('div', {
                        className: l()(R.gridText, R.taskDetails),
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: b(n, s, P),
                                className: R.taskInstructions,
                                children: h ? A.intl.formatToPlainString(A.t['ge+AJi'], { questName: t.config.messages.questName }) : H
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'lg' === s ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: (function (e) {
                                    var t, n, i, s, l, r;
                                    let { quest: o, locale: a, isQuestExpired: u } = e,
                                        m = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                        h = m && (null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                        C = (0, x.B6)(null === (i = o.userStatus) || void 0 === i ? void 0 : i.completedAt, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                                        E = (0, p.oo)({ quest: o }),
                                        j = g.r.build(o.config).defaultReward.messages.nameWithArticle,
                                        T = (0, p.Kr)(o.config),
                                        f = (0, p.b7)(o);
                                    if (h) {
                                        let e = E
                                                ? (0, p.o9)({
                                                      quest: o,
                                                      idx: null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedTier
                                                  })
                                                : null,
                                            t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
                                        return null != t
                                            ? A.intl.formatToPlainString(A.t.RrxtPT, {
                                                  reward: t,
                                                  date: C
                                              })
                                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                                  reward: j,
                                                  date: C
                                              });
                                    }
                                    if (m)
                                        return E
                                            ? A.intl.formatToPlainString(A.t.l1jCMz, { date: C })
                                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                                  reward: j,
                                                  date: C
                                              });
                                    let v = E
                                        ? (0, p.o9)({
                                              quest: o,
                                              idx: 0
                                          })
                                        : null;
                                    if (u) return A.intl.formatToPlainString(A.t.DT3aub, { reward: null !== (r = null == v ? void 0 : v.messages.nameWithArticle) && void 0 !== r ? r : j });
                                    if (null != v && null != v.approximateCount)
                                        return A.intl.format(A.t['4bMK19'], {
                                            maxReward: v.messages.nameWithArticle,
                                            maxRewardCount: (0, d.Bs)(v.approximateCount, a),
                                            helpCenterLink: c.Z.getArticleURL(_.BhN.QUESTS_LEARN_MORE)
                                        });
                                    if (null != T) {
                                        let e = (0, p.f$)(o.config) ? A.t.YWnLFx : A.t.Pu5eyM;
                                        return A.intl.formatToPlainString(e, {
                                            reward: j,
                                            duration: T
                                        });
                                    }
                                    return null != f ? f.description : A.intl.formatToPlainString(A.t.ttFsLi, { reward: j });
                                })({
                                    quest: t,
                                    locale: G,
                                    isQuestExpired: h
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: l()(R.ctaButtonContainer, R.gridCtaButtons),
                        children: [
                            !U &&
                                (0, i.jsx)(I, {
                                    containerSize: s,
                                    onClick: () => {
                                        (0, f.navigateToQuestHome)(q.dr.QUESTS_CARD, n, t.id),
                                            (0, m._3)({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: Z,
                                                questContentCTA: m.jZ.LEARN_MORE
                                            });
                                    },
                                    children: A.intl.string(A.t.LLLLPD)
                                }),
                            h && !B
                                ? null
                                : (0, i.jsx)(M, {
                                      quest: t,
                                      progressState: y,
                                      isCollectibleQuest: w,
                                      location: n,
                                      inGiftInventory: U
                                  })
                        ]
                    }),
                    k &&
                        (0, i.jsx)(E.Z, {
                            className: R.gridProgressBar,
                            color: B ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
                            quest: t,
                            isInventory: U
                        })
                ]
            }),
            X &&
                (0, i.jsxs)('div', {
                    className: R.microphoneContainer,
                    children: [
                        (0, i.jsx)('div', { className: R.separator }),
                        (0, i.jsx)(v.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
