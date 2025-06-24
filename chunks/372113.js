n.d(t, { Z: () => Q });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(706454),
    d = n(63063),
    m = n(930153),
    x = n(617136),
    p = n(113434),
    h = n(569984),
    g = n(497505),
    j = n(918701),
    f = n(467628),
    C = n(373370),
    b = n(566078),
    v = n(65443),
    y = n(340100),
    N = n(644646),
    O = n(667105),
    T = n(341907),
    E = n(128535),
    q = n(87894),
    S = n(2660),
    P = n(46140),
    w = n(981631),
    R = n(388032),
    _ = n(717735);
function D(e) {
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
function I(e, t) {
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
let M = (e, t, n) => ((0, q.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function A(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: o } = e;
    return 'xs' === t
        ? (0, r.jsx)(l.P3F, {
              tabIndex: o,
              className: _.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, r.jsx)(l.zxk, {
              tabIndex: o,
              wrapperClassName: _.ctaButtonWrapper,
              color: l.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function k(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, questContent: o, questContentPosition: i, inGiftInventory: u, sourceQuestContent: d } = e,
        m = n >= p.OH.COMPLETED,
        x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        g = (0, a.e7)([h.Z], () => h.Z.isEnrolling(t.id)),
        f = (0, j.q8)(t),
        C = (0, j.Vl)(t),
        b = (0, O.Ks)({
            progressState: n,
            quest: t,
            questContent: o,
            isCollectibleQuest: s,
            questContentPosition: i,
            inGiftInventory: u,
            isVideoQuest: f,
            inGameQuest: C,
            sourceQuestContent: d
        }),
        v = m && !x ? l.gtL : l.zxk;
    return (0, r.jsx)(
        l.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: _.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    v,
                    I(D({}, e), {
                        wrapperClassName: _.ctaButtonWrapper,
                        color: l.Ttl.BRAND,
                        disabled: null == b.onClick,
                        submitting: g,
                        onClick: null != (t = b.onClick) ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: _.ctaButtonInner,
                            children: b.text
                        })
                    })
                );
            }
        },
        b.tooltipText
    );
}
let Q = (e) => {
    var t;
    let { quest: n, location: o, size: c, isFocused: O, isQuestExpired: Q, isExpanded: Z, isAnimating: L, contentPosition: B, sourceQuestContent: U } = e,
        W = (0, p._Q)(n),
        z = (0, p.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        G = W >= p.OH.ACCEPTED,
        F = W >= p.OH.COMPLETED,
        H = W >= p.OH.CLAIMED,
        X = (0, j.Xv)(n.config),
        Y = (0, q.uq)(o),
        V = o === g.jn.QUESTS_EMBED,
        K = Z || L,
        J = G && !H && Y,
        $ = (0, p.t5)(n, P.dr.QUESTS_CARD, o, U),
        { xboxAndPlaystationAccounts: ee } = (0, p.z6)(),
        et = (0, x.O5)(),
        en = (0, f.j)({ location: P.dr.QUESTS_BAR_MOBILE }),
        er = s.useMemo(() => b.r.build(n.config), [n.config]),
        es = (0, p.Rf)(n),
        eo = (0, C.DD)({
            quest: n,
            taskDetails: es,
            location: P.dr.QUESTS_CARD,
            questContent: g.jn.QUESTS_EMBED,
            sourceQuestContent: U
        }),
        ei = (0, a.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        ea = (0, a.e7)([u.default], () => u.default.locale),
        el = (0, p.z)(n),
        ec = Y && X,
        eu = Q && !F,
        ed = ee.length > 0 && Y && (0, j.$J)(n) && G && !F && !el,
        em = (0, r.jsx)(N.Z, {
            autoplay: O,
            className: i()(_.gridImg, {
                [_.questRewardGiftInventory]: Y && 'lg' === c,
                [_.questRewardEmbed]: V && 'lg' === c,
                [_.questRewardEmbedSm]: 'sm' === c,
                [_.questRewardEmbedXs]: 'xs' === c
            }),
            learnMoreStyle: Y ? null : 'text',
            location: P.dr.QUESTS_CARD,
            quest: n,
            questContent: o,
            questContentPosition: B,
            sourceQuestContent: U
        });
    return (0, r.jsxs)('div', {
        className: _.root,
        children: [
            (0, r.jsxs)('div', {
                className: i()(_.outerContainer, {
                    [_.outerContainerSm]: 'sm' === c,
                    [_.outerContainerXs]: 'xs' === c,
                    [_.outerContainerNoProgress]: !J
                }),
                style: { visibility: K ? 'inherit' : 'hidden' },
                'aria-hidden': !K,
                children: [
                    (0, r.jsx)(l.ua7, {
                        text: eu ? R.intl.string(R.t['04MTGR']) : null,
                        tooltipContentClassName: _.rewardTileExpirationTooltip,
                        shouldShow: eu,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                I(D({ className: _.rewardTileWrapper }, e), {
                                    children: [
                                        Q &&
                                            (0, r.jsx)('div', {
                                                className: _.rewardTileExpired,
                                                children: (0, r.jsx)(l.P4T, { color: l.TVs.colors.WHITE })
                                            }),
                                        ec
                                            ? (0, r.jsx)(S.Z, {
                                                  questConfig: n.config,
                                                  fallback: em,
                                                  isFocused: O
                                              })
                                            : em
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(_.gridText, _.taskDetails),
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: M(o, c, G),
                                className: _.taskInstructions,
                                children: Q ? R.intl.formatToPlainString(R.t['ge+AJi'], { questName: n.config.messages.questName }) : $
                            }),
                            en
                                ? (0, r.jsx)(v.Z, {
                                      textColor: 'text-muted',
                                      quest: n,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(l.Text, {
                                      variant: 'lg' === c ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, o;
                                          let { quest: i, locale: a, isQuestExpired: l, sharedQuestFields: c, withCopySimplification: u, collectibleQuestRewardDescription: x, formattedCompletionDate: p } = e,
                                              h = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
                                              g = h && (null == (n = i.userStatus) ? void 0 : n.claimedAt) != null,
                                              f = (0, j.oo)({ quest: i }),
                                              C = c.defaultRewardNameWithArticle,
                                              b = c.defaultRewardName,
                                              v = u ? b : C;
                                          if (g) {
                                              let e = f
                                                      ? (0, j.o9)({
                                                            quest: i,
                                                            idx: null == (r = i.userStatus) ? void 0 : r.claimedTier
                                                        })
                                                      : null,
                                                  t = null != (s = null == e ? void 0 : e.messages.nameWithArticle) ? s : null;
                                              return null != t
                                                  ? R.intl.formatToPlainString(R.t.RrxtPT, {
                                                        reward: t,
                                                        date: p
                                                    })
                                                  : R.intl.formatToPlainString(R.t.zNoqRU, {
                                                        reward: v,
                                                        date: p
                                                    });
                                          }
                                          if (h)
                                              return f
                                                  ? R.intl.formatToPlainString(R.t.l1jCMz, { date: p })
                                                  : R.intl.formatToPlainString(R.t.zNoqRU, {
                                                        reward: v,
                                                        date: p
                                                    });
                                          let y = f
                                              ? (0, j.o9)({
                                                    quest: i,
                                                    idx: 0
                                                })
                                              : null;
                                          return l
                                              ? R.intl.formatToPlainString(R.t.DT3aub, { reward: null != (o = null == y ? void 0 : y.messages.nameWithArticle) ? o : v })
                                              : null != y && null != y.approximateCount
                                                ? R.intl.format(R.t['4bMK19'], {
                                                      maxReward: y.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(y.approximateCount, a),
                                                      helpCenterLink: d.Z.getArticleURL(w.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : x;
                                      })({
                                          quest: n,
                                          locale: ea,
                                          isQuestExpired: Q,
                                          sharedQuestFields: er,
                                          withCopySimplification: en,
                                          collectibleQuestRewardDescription: eo,
                                          formattedCompletionDate: z
                                      })
                                  })
                        ]
                    }),
                    ei
                        ? (0, r.jsxs)('div', {
                              className: i()(_.ctaButtonContainer, _.gridCtaButtons),
                              children: [
                                  (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      disabled: !0,
                                      className: _.questEnrollmentBlockedButton,
                                      children: R.intl.string(R.t.V293qq)
                                  }),
                                  (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.BRAND,
                                      onClick: () => (0, T.openQuestMinorEnrollmentBlockModal)(n, o, U),
                                      className: _.questEnrollmentBlockedButton,
                                      children: R.intl.string(R.t.vY9GgI)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: i()(_.ctaButtonContainer, _.gridCtaButtons),
                              children: [
                                  !Y &&
                                      (0, r.jsx)(A, {
                                          containerSize: c,
                                          onClick: () => {
                                              (0, T.navigateToQuestHome)({
                                                  fromContent: o,
                                                  questId: n.id
                                              }),
                                                  et({
                                                      questId: n.id,
                                                      questContent: o,
                                                      questContentPosition: B,
                                                      questContentCTA: x.jZ.LEARN_MORE,
                                                      sourceQuestContent: U
                                                  });
                                          },
                                          children: R.intl.string(R.t.LLLLPD)
                                      }),
                                  Q && !F
                                      ? null
                                      : (0, r.jsx)(k, {
                                            quest: n,
                                            progressState: W,
                                            isCollectibleQuest: X,
                                            questContent: o,
                                            inGiftInventory: Y,
                                            sourceQuestContent: U
                                        })
                              ]
                          }),
                    J &&
                        (0, r.jsx)(y.Z, {
                            className: _.gridProgressBar,
                            color: F ? l.TVs.colors.TEXT_FEEDBACK_POSITIVE : l.TVs.colors.BG_BRAND,
                            quest: n,
                            isInventory: Y
                        })
                ]
            }),
            ed &&
                (0, r.jsxs)('div', {
                    className: _.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: _.separator }),
                        (0, r.jsx)(E.Z, {
                            quest: n,
                            location: o,
                            sourceQuestContent: U
                        })
                    ]
                })
        ]
    });
};
