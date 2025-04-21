n.d(t, { Z: () => L }), n(953529);
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(706454),
    d = n(63063),
    m = n(930153),
    p = n(617136),
    x = n(113434),
    g = n(569984),
    h = n(497505),
    f = n(918701),
    j = n(467628),
    b = n(75137),
    C = n(373370),
    v = n(566078),
    y = n(65443),
    O = n(340100),
    T = n(644646),
    E = n(667105),
    N = n(341907),
    q = n(128535),
    S = n(87894),
    P = n(2660),
    w = n(46140),
    R = n(981631),
    _ = n(388032),
    I = n(717735);
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
function A(e, t) {
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
let M = (e, t, n) => ((0, S.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function Z(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: i } = e;
    return 'xs' === t
        ? (0, r.jsx)(l.P3F, {
              tabIndex: i,
              className: I.learnMoreLink,
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
              wrapperClassName: I.ctaButtonWrapper,
              color: l.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function k(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: i, questContentPosition: o, inGiftInventory: u } = e,
        d = n >= x.OH.COMPLETED,
        m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        p = (0, a.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        h = (0, f.q8)(t),
        j = (0, f.Vl)(t),
        b = (0, E.Ks)({
            progressState: n,
            quest: t,
            location: i,
            isCollectibleQuest: s,
            questContentPosition: o,
            inGiftInventory: u,
            isVideoQuest: h,
            inGameQuest: j
        }),
        C = d && !m ? l.gtL : l.zxk;
    return (0, r.jsx)(
        l.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: I.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    C,
                    A(D({}, e), {
                        wrapperClassName: I.ctaButtonWrapper,
                        color: l.Ttl.BRAND,
                        disabled: null == b.onClick,
                        submitting: p,
                        onClick: null != (t = b.onClick) ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: I.ctaButtonInner,
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
    let { quest: t, location: n, size: i, isFocused: c, isQuestExpired: g, isExpanded: E, isAnimating: L, contentPosition: B } = e,
        U = (0, x._Q)(t),
        Q = U >= x.OH.ACCEPTED,
        W = U >= x.OH.COMPLETED,
        F = U >= x.OH.CLAIMED,
        z = (0, f.Xv)(t.config),
        G = (0, S.uq)(n),
        H = n === h.jn.QUESTS_EMBED,
        X = E || L,
        V = Q && !F && G,
        Y = (0, x.t5)(t, w.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: K } = (0, x.z6)(),
        J = (0, p.O5)(),
        $ = (0, j.j)({ location: w.dr.QUESTS_BAR_MOBILE }),
        ee = s.useMemo(() => v.r.build(t.config), [t.config]),
        et = (0, x.Rf)(t),
        en = (0, C.DD)({
            quest: t,
            taskDetails: et,
            location: w.dr.QUESTS_CARD,
            questContent: h.jn.QUESTS_EMBED
        }),
        er = (0, a.e7)([u.default], () => u.default.locale),
        es = (0, x.z)(t),
        ei = G && z,
        eo = g && !W,
        ea = K.length > 0 && G && (0, f.$J)(t) && Q && !W && !es,
        el = (0, r.jsx)(T.Z, {
            autoplay: c,
            className: o()(I.gridImg, {
                [I.questRewardGiftInventory]: G && 'lg' === i,
                [I.questRewardEmbed]: H && 'lg' === i,
                [I.questRewardEmbedSm]: 'sm' === i,
                [I.questRewardEmbedXs]: 'xs' === i
            }),
            learnMoreStyle: G ? null : 'text',
            location: w.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: B
        });
    return (0, r.jsxs)('div', {
        className: I.root,
        children: [
            (0, r.jsxs)('div', {
                className: o()(I.outerContainer, {
                    [I.outerContainerSm]: 'sm' === i,
                    [I.outerContainerXs]: 'xs' === i,
                    [I.outerContainerNoProgress]: !V
                }),
                style: { visibility: X ? 'inherit' : 'hidden' },
                'aria-hidden': !X,
                children: [
                    (0, r.jsx)(l.ua7, {
                        text: eo ? _.intl.string(_.t['04MTGR']) : null,
                        tooltipContentClassName: I.rewardTileExpirationTooltip,
                        shouldShow: eo,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                A(D({ className: I.rewardTileWrapper }, e), {
                                    children: [
                                        g &&
                                            (0, r.jsx)('div', {
                                                className: I.rewardTileExpired,
                                                children: (0, r.jsx)(l.P4T, { color: l.TVs.colors.WHITE })
                                            }),
                                        ei
                                            ? (0, r.jsx)(P.Z, {
                                                  questConfig: t.config,
                                                  fallback: el,
                                                  isFocused: c
                                              })
                                            : el
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(I.gridText, I.taskDetails),
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: M(n, i, Q),
                                className: I.taskInstructions,
                                children: g ? _.intl.formatToPlainString(_.t['ge+AJi'], { questName: t.config.messages.questName }) : Y
                            }),
                            $
                                ? (0, r.jsx)(y.Z, {
                                      textColor: 'text-muted',
                                      quest: t,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(l.Text, {
                                      variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, i, o;
                                          let { quest: a, locale: l, isQuestExpired: c, sharedQuestFields: u, withCopySimplification: p, collectibleQuestRewardDescription: g } = e,
                                              h = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
                                              j = h && (null == (n = a.userStatus) ? void 0 : n.claimedAt) != null,
                                              C = (0, x.B6)(null == (r = a.userStatus) ? void 0 : r.completedAt, {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric'
                                              }),
                                              v = (0, f.oo)({ quest: a }),
                                              y = u.defaultReward.messages.nameWithArticle,
                                              O = u.defaultReward.messages.nameWithArticle,
                                              T = p ? O : y,
                                              E = (0, f.Kr)(a.config),
                                              N = (0, f.b7)(a),
                                              q = (0, b.U)();
                                          if (j) {
                                              let e = v
                                                      ? (0, f.o9)({
                                                            quest: a,
                                                            idx: null == (s = a.userStatus) ? void 0 : s.claimedTier
                                                        })
                                                      : null,
                                                  t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
                                              return null != t
                                                  ? _.intl.formatToPlainString(_.t.RrxtPT, {
                                                        reward: t,
                                                        date: C
                                                    })
                                                  : _.intl.formatToPlainString(_.t.zNoqRU, {
                                                        reward: T,
                                                        date: C
                                                    });
                                          }
                                          if (h)
                                              return v
                                                  ? _.intl.formatToPlainString(_.t.l1jCMz, { date: C })
                                                  : _.intl.formatToPlainString(_.t.zNoqRU, {
                                                        reward: T,
                                                        date: C
                                                    });
                                          let S = v
                                              ? (0, f.o9)({
                                                    quest: a,
                                                    idx: 0
                                                })
                                              : null;
                                          return c
                                              ? _.intl.formatToPlainString(_.t.DT3aub, { reward: null != (o = null == S ? void 0 : S.messages.nameWithArticle) ? o : T })
                                              : null != S && null != S.approximateCount
                                                ? _.intl.format(_.t['4bMK19'], {
                                                      maxReward: S.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(S.approximateCount, l),
                                                      helpCenterLink: d.Z.getArticleURL(R.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : q
                                                  ? g
                                                  : null != E
                                                    ? _.intl.formatToPlainString(_.t.Pu5eyM, {
                                                          reward: T,
                                                          duration: E
                                                      })
                                                    : null != N
                                                      ? N.description
                                                      : _.intl.formatToPlainString(_.t.ttFsLi, { reward: T });
                                      })({
                                          quest: t,
                                          locale: er,
                                          isQuestExpired: g,
                                          sharedQuestFields: ee,
                                          withCopySimplification: $,
                                          collectibleQuestRewardDescription: en
                                      })
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(I.ctaButtonContainer, I.gridCtaButtons),
                        children: [
                            !G &&
                                (0, r.jsx)(Z, {
                                    containerSize: i,
                                    onClick: () => {
                                        (0, N.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            J({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: B,
                                                questContentCTA: p.jZ.LEARN_MORE
                                            });
                                    },
                                    children: _.intl.string(_.t.LLLLPD)
                                }),
                            g && !W
                                ? null
                                : (0, r.jsx)(k, {
                                      quest: t,
                                      progressState: U,
                                      isCollectibleQuest: z,
                                      location: n,
                                      inGiftInventory: G
                                  })
                        ]
                    }),
                    V &&
                        (0, r.jsx)(O.Z, {
                            className: I.gridProgressBar,
                            color: W ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: G
                        })
                ]
            }),
            ea &&
                (0, r.jsxs)('div', {
                    className: I.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: I.separator }),
                        (0, r.jsx)(q.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
