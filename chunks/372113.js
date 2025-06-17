n.d(t, { Z: () => Z });
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
    p = n(113434),
    h = n(569984),
    g = n(497505),
    j = n(918701),
    f = n(467628),
    b = n(373370),
    C = n(566078),
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
    let { containerSize: t, onClick: n, children: s, tabIndex: i } = e;
    return 'xs' === t
        ? (0, r.jsx)(l.P3F, {
              tabIndex: i,
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
              tabIndex: i,
              wrapperClassName: _.ctaButtonWrapper,
              color: l.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function k(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: i, questContentPosition: o, inGiftInventory: u } = e,
        d = n >= p.OH.COMPLETED,
        m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        x = (0, a.e7)([h.Z], () => h.Z.isEnrolling(t.id)),
        g = (0, j.q8)(t),
        f = (0, j.Vl)(t),
        b = (0, O.Ks)({
            progressState: n,
            quest: t,
            location: i,
            isCollectibleQuest: s,
            questContentPosition: o,
            inGiftInventory: u,
            isVideoQuest: g,
            inGameQuest: f
        }),
        C = d && !m ? l.gtL : l.zxk;
    return (0, r.jsx)(
        l.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: _.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    C,
                    I(D({}, e), {
                        wrapperClassName: _.ctaButtonWrapper,
                        color: l.Ttl.BRAND,
                        disabled: null == b.onClick,
                        submitting: x,
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
let Z = (e) => {
    var t;
    let { quest: n, location: i, size: c, isFocused: O, isQuestExpired: Z, isExpanded: L, isAnimating: B, contentPosition: U } = e,
        Q = (0, p._Q)(n),
        W = (0, p.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        z = Q >= p.OH.ACCEPTED,
        G = Q >= p.OH.COMPLETED,
        F = Q >= p.OH.CLAIMED,
        H = (0, j.Xv)(n.config),
        X = (0, q.uq)(i),
        Y = i === g.jn.QUESTS_EMBED,
        V = L || B,
        K = z && !F && X,
        J = (0, p.t5)(n, P.dr.QUESTS_CARD, i),
        { xboxAndPlaystationAccounts: $ } = (0, p.z6)(),
        ee = (0, x.O5)(),
        et = (0, f.j)({ location: P.dr.QUESTS_BAR_MOBILE }),
        en = s.useMemo(() => C.r.build(n.config), [n.config]),
        er = (0, p.Rf)(n),
        es = (0, b.DD)({
            quest: n,
            taskDetails: er,
            location: P.dr.QUESTS_CARD,
            questContent: g.jn.QUESTS_EMBED
        }),
        ei = (0, a.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        eo = (0, a.e7)([u.default], () => u.default.locale),
        ea = (0, p.z)(n),
        el = X && H,
        ec = Z && !G,
        eu = $.length > 0 && X && (0, j.$J)(n) && z && !G && !ea,
        ed = (0, r.jsx)(N.Z, {
            autoplay: O,
            className: o()(_.gridImg, {
                [_.questRewardGiftInventory]: X && 'lg' === c,
                [_.questRewardEmbed]: Y && 'lg' === c,
                [_.questRewardEmbedSm]: 'sm' === c,
                [_.questRewardEmbedXs]: 'xs' === c
            }),
            learnMoreStyle: X ? null : 'text',
            location: P.dr.QUESTS_CARD,
            quest: n,
            questContent: i,
            questContentPosition: U
        });
    return (0, r.jsxs)('div', {
        className: _.root,
        children: [
            (0, r.jsxs)('div', {
                className: o()(_.outerContainer, {
                    [_.outerContainerSm]: 'sm' === c,
                    [_.outerContainerXs]: 'xs' === c,
                    [_.outerContainerNoProgress]: !K
                }),
                style: { visibility: V ? 'inherit' : 'hidden' },
                'aria-hidden': !V,
                children: [
                    (0, r.jsx)(l.ua7, {
                        text: ec ? R.intl.string(R.t['04MTGR']) : null,
                        tooltipContentClassName: _.rewardTileExpirationTooltip,
                        shouldShow: ec,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                I(D({ className: _.rewardTileWrapper }, e), {
                                    children: [
                                        Z &&
                                            (0, r.jsx)('div', {
                                                className: _.rewardTileExpired,
                                                children: (0, r.jsx)(l.P4T, { color: l.TVs.colors.WHITE })
                                            }),
                                        el
                                            ? (0, r.jsx)(S.Z, {
                                                  questConfig: n.config,
                                                  fallback: ed,
                                                  isFocused: O
                                              })
                                            : ed
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(_.gridText, _.taskDetails),
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: M(i, c, z),
                                className: _.taskInstructions,
                                children: Z ? R.intl.formatToPlainString(R.t['ge+AJi'], { questName: n.config.messages.questName }) : J
                            }),
                            et
                                ? (0, r.jsx)(v.Z, {
                                      textColor: 'text-muted',
                                      quest: n,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(l.Text, {
                                      variant: 'lg' === c ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, i;
                                          let { quest: o, locale: a, isQuestExpired: l, sharedQuestFields: c, withCopySimplification: u, collectibleQuestRewardDescription: x, formattedCompletionDate: p } = e,
                                              h = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
                                              g = h && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
                                              f = (0, j.oo)({ quest: o }),
                                              b = c.defaultRewardNameWithArticle,
                                              C = c.defaultRewardName,
                                              v = u ? C : b;
                                          if (g) {
                                              let e = f
                                                      ? (0, j.o9)({
                                                            quest: o,
                                                            idx: null == (r = o.userStatus) ? void 0 : r.claimedTier
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
                                                    quest: o,
                                                    idx: 0
                                                })
                                              : null;
                                          return l
                                              ? R.intl.formatToPlainString(R.t.DT3aub, { reward: null != (i = null == y ? void 0 : y.messages.nameWithArticle) ? i : v })
                                              : null != y && null != y.approximateCount
                                                ? R.intl.format(R.t['4bMK19'], {
                                                      maxReward: y.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(y.approximateCount, a),
                                                      helpCenterLink: d.Z.getArticleURL(w.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : x;
                                      })({
                                          quest: n,
                                          locale: eo,
                                          isQuestExpired: Z,
                                          sharedQuestFields: en,
                                          withCopySimplification: et,
                                          collectibleQuestRewardDescription: es,
                                          formattedCompletionDate: W
                                      })
                                  })
                        ]
                    }),
                    ei
                        ? (0, r.jsxs)('div', {
                              className: o()(_.ctaButtonContainer, _.gridCtaButtons),
                              children: [
                                  (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.PRIMARY,
                                      disabled: !0,
                                      className: _.questEnrollmentBlockedButton,
                                      children: R.intl.string(R.t.V293qq)
                                  }),
                                  (0, r.jsx)(l.zxk, {
                                      color: l.Ttl.BRAND,
                                      onClick: () => (0, T.openQuestMinorEnrollmentBlockModal)(n, i),
                                      className: _.questEnrollmentBlockedButton,
                                      children: R.intl.string(R.t.vY9GgI)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: o()(_.ctaButtonContainer, _.gridCtaButtons),
                              children: [
                                  !X &&
                                      (0, r.jsx)(A, {
                                          containerSize: c,
                                          onClick: () => {
                                              (0, T.navigateToQuestHome)({
                                                  fromContent: i,
                                                  questId: n.id
                                              }),
                                                  ee({
                                                      questId: n.id,
                                                      questContent: i,
                                                      questContentPosition: U,
                                                      questContentCTA: x.jZ.LEARN_MORE
                                                  });
                                          },
                                          children: R.intl.string(R.t.LLLLPD)
                                      }),
                                  Z && !G
                                      ? null
                                      : (0, r.jsx)(k, {
                                            quest: n,
                                            progressState: Q,
                                            isCollectibleQuest: H,
                                            location: i,
                                            inGiftInventory: X
                                        })
                              ]
                          }),
                    K &&
                        (0, r.jsx)(y.Z, {
                            className: _.gridProgressBar,
                            color: G ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.BG_BRAND,
                            quest: n,
                            isInventory: X
                        })
                ]
            }),
            eu &&
                (0, r.jsxs)('div', {
                    className: _.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: _.separator }),
                        (0, r.jsx)(E.Z, {
                            quest: n,
                            location: i
                        })
                    ]
                })
        ]
    });
};
