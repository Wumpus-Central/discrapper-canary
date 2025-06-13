n.d(t, { Z: () => L }), n(953529);
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(706454),
    d = n(63063),
    m = n(930153),
    x = n(617136),
    g = n(113434),
    p = n(569984),
    h = n(497505),
    j = n(918701),
    f = n(467628),
    b = n(75137),
    C = n(373370),
    v = n(566078),
    y = n(65443),
    O = n(340100),
    T = n(644646),
    N = n(667105),
    E = n(341907),
    q = n(128535),
    S = n(87894),
    P = n(2660),
    w = n(46140),
    R = n(981631),
    _ = n(388032),
    D = n(717735);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = (e, t, n) => ((0, S.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function k(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: i } = e;
    return 'xs' === t
        ? (0, r.jsx)(l.P3F, {
              tabIndex: i,
              className: D.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, r.jsx)(l.zxk, {
              tabIndex: i,
              wrapperClassName: D.ctaButtonWrapper,
              color: l.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function Z(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: i, questContentPosition: o, inGiftInventory: u } = e,
        d = n >= g.OH.COMPLETED,
        m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        x = (0, a.e7)([p.Z], () => p.Z.isEnrolling(t.id)),
        h = (0, j.q8)(t),
        f = (0, j.Vl)(t),
        b = (0, N.Ks)({
            progressState: n,
            quest: t,
            location: i,
            isCollectibleQuest: s,
            questContentPosition: o,
            inGiftInventory: u,
            isVideoQuest: h,
            inGameQuest: f
        }),
        C = d && !m ? l.gtL : l.zxk;
    return (0, r.jsx)(
        l.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: D.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    C,
                    M(I({}, e), {
                        wrapperClassName: D.ctaButtonWrapper,
                        color: l.Ttl.BRAND,
                        disabled: null == b.onClick,
                        submitting: x,
                        onClick: null != (t = b.onClick) ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: D.ctaButtonInner,
                            children: b.text
                        })
                    })
                );
            }
        },
        b.tooltipText
    );
}
let L = (e) => {
    var t;
    let { quest: n, location: i, size: c, isFocused: N, isQuestExpired: L, isExpanded: B, isAnimating: U, contentPosition: Q } = e,
        W = (0, g._Q)(n),
        z = (0, g.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        G = W >= g.OH.ACCEPTED,
        F = W >= g.OH.COMPLETED,
        H = W >= g.OH.CLAIMED,
        X = (0, j.Xv)(n.config),
        Y = (0, S.uq)(i),
        V = i === h.jn.QUESTS_EMBED,
        K = B || U,
        J = G && !H && Y,
        $ = (0, g.t5)(n, w.dr.QUESTS_CARD, i),
        { xboxAndPlaystationAccounts: ee } = (0, g.z6)(),
        et = (0, x.O5)(),
        en = (0, f.j)({ location: w.dr.QUESTS_BAR_MOBILE }),
        er = s.useMemo(() => v.r.build(n.config), [n.config]),
        es = (0, g.Rf)(n),
        ei = (0, C.DD)({
            quest: n,
            taskDetails: es,
            location: w.dr.QUESTS_CARD,
            questContent: h.jn.QUESTS_EMBED
        }),
        eo = (0, a.e7)([p.Z], () => null != p.Z.questEnrollmentBlockedUntil, []),
        ea = (0, a.e7)([u.default], () => u.default.locale),
        el = (0, g.z)(n),
        ec = Y && X,
        eu = L && !F,
        ed = ee.length > 0 && Y && (0, j.$J)(n) && G && !F && !el,
        em = (0, r.jsx)(T.Z, {
            autoplay: N,
            className: o()(D.gridImg, {
                [D.questRewardGiftInventory]: Y && 'lg' === c,
                [D.questRewardEmbed]: V && 'lg' === c,
                [D.questRewardEmbedSm]: 'sm' === c,
                [D.questRewardEmbedXs]: 'xs' === c
            }),
            learnMoreStyle: Y ? null : 'text',
            location: w.dr.QUESTS_CARD,
            quest: n,
            questContent: i,
            questContentPosition: Q
        });
    return (0, r.jsxs)('div', {
        className: D.root,
        children: [
            (0, r.jsxs)('div', {
                className: o()(D.outerContainer, {
                    [D.outerContainerSm]: 'sm' === c,
                    [D.outerContainerXs]: 'xs' === c,
                    [D.outerContainerNoProgress]: !J
                }),
                style: { visibility: K ? 'inherit' : 'hidden' },
                'aria-hidden': !K,
                children: [
                    (0, r.jsx)(l.ua7, {
                        text: eu ? _.intl.string(_.t['04MTGR']) : null,
                        tooltipContentClassName: D.rewardTileExpirationTooltip,
                        shouldShow: eu,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                M(I({ className: D.rewardTileWrapper }, e), {
                                    children: [
                                        L &&
                                            (0, r.jsx)('div', {
                                                className: D.rewardTileExpired,
                                                children: (0, r.jsx)(l.P4T, { color: l.TVs.colors.WHITE })
                                            }),
                                        ec
                                            ? (0, r.jsx)(P.Z, {
                                                  questConfig: n.config,
                                                  fallback: em,
                                                  isFocused: N
                                              })
                                            : em
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(D.gridText, D.taskDetails),
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: A(i, c, G),
                                className: D.taskInstructions,
                                children: L ? _.intl.formatToPlainString(_.t['ge+AJi'], { questName: n.config.messages.questName }) : $
                            }),
                            en
                                ? (0, r.jsx)(y.Z, {
                                      textColor: 'text-muted',
                                      quest: n,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(l.Text, {
                                      variant: 'lg' === c ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, i;
                                          let { quest: o, locale: a, isQuestExpired: l, sharedQuestFields: c, withCopySimplification: u, collectibleQuestRewardDescription: x, formattedCompletionDate: g } = e,
                                              p = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
                                              h = p && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
                                              f = (0, j.oo)({ quest: o }),
                                              C = c.defaultReward.messages.nameWithArticle,
                                              v = c.defaultReward.messages.nameWithArticle,
                                              y = u ? v : C,
                                              O = (0, j.Kr)(o.config),
                                              T = (0, j.b7)(o),
                                              N = (0, b.U)();
                                          if (h) {
                                              let e = f
                                                      ? (0, j.o9)({
                                                            quest: o,
                                                            idx: null == (r = o.userStatus) ? void 0 : r.claimedTier
                                                        })
                                                      : null,
                                                  t = null != (s = null == e ? void 0 : e.messages.nameWithArticle) ? s : null;
                                              return null != t
                                                  ? _.intl.formatToPlainString(_.t.RrxtPT, {
                                                        reward: t,
                                                        date: g
                                                    })
                                                  : _.intl.formatToPlainString(_.t.zNoqRU, {
                                                        reward: y,
                                                        date: g
                                                    });
                                          }
                                          if (p)
                                              return f
                                                  ? _.intl.formatToPlainString(_.t.l1jCMz, { date: g })
                                                  : _.intl.formatToPlainString(_.t.zNoqRU, {
                                                        reward: y,
                                                        date: g
                                                    });
                                          let E = f
                                              ? (0, j.o9)({
                                                    quest: o,
                                                    idx: 0
                                                })
                                              : null;
                                          return l
                                              ? _.intl.formatToPlainString(_.t.DT3aub, { reward: null != (i = null == E ? void 0 : E.messages.nameWithArticle) ? i : y })
                                              : null != E && null != E.approximateCount
                                                ? _.intl.format(_.t['4bMK19'], {
                                                      maxReward: E.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(E.approximateCount, a),
                                                      helpCenterLink: d.Z.getArticleURL(R.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : N
                                                  ? x
                                                  : null != O
                                                    ? _.intl.formatToPlainString(_.t.Pu5eyM, {
                                                          reward: y,
                                                          duration: O
                                                      })
                                                    : null != T
                                                      ? T.description
                                                      : _.intl.formatToPlainString(_.t.ttFsLi, { reward: y });
                                      })({
                                          quest: n,
                                          locale: ea,
                                          isQuestExpired: L,
                                          sharedQuestFields: er,
                                          withCopySimplification: en,
                                          collectibleQuestRewardDescription: ei,
                                          formattedCompletionDate: z
                                      })
                                  })
                        ]
                    }),
                    eo
                        ? (0, r.jsxs)('div', {
                              className: o()(D.ctaButtonContainer, D.gridCtaButtons),
                              children: [
                                  (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      disabled: !0,
                                      className: D.questEnrollmentBlockedButton,
                                      children: _.intl.string(_.t.V293qq)
                                  }),
                                  (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.BRAND,
                                      onClick: () => (0, E.openQuestMinorEnrollmentBlockModal)(n, i),
                                      className: D.questEnrollmentBlockedButton,
                                      children: _.intl.string(_.t.vY9GgI)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: o()(D.ctaButtonContainer, D.gridCtaButtons),
                              children: [
                                  !Y &&
                                      (0, r.jsx)(k, {
                                          containerSize: c,
                                          onClick: () => {
                                              (0, E.navigateToQuestHome)({
                                                  fromContent: i,
                                                  questId: n.id
                                              }),
                                                  et({
                                                      questId: n.id,
                                                      questContent: i,
                                                      questContentPosition: Q,
                                                      questContentCTA: x.jZ.LEARN_MORE
                                                  });
                                          },
                                          children: _.intl.string(_.t.LLLLPD)
                                      }),
                                  L && !F
                                      ? null
                                      : (0, r.jsx)(Z, {
                                            quest: n,
                                            progressState: W,
                                            isCollectibleQuest: X,
                                            location: i,
                                            inGiftInventory: Y
                                        })
                              ]
                          }),
                    J &&
                        (0, r.jsx)(O.Z, {
                            className: D.gridProgressBar,
                            color: F ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.BG_BRAND,
                            quest: n,
                            isInventory: Y
                        })
                ]
            }),
            ed &&
                (0, r.jsxs)('div', {
                    className: D.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: D.separator }),
                        (0, r.jsx)(q.Z, {
                            quest: n,
                            location: i
                        })
                    ]
                })
        ]
    });
};
