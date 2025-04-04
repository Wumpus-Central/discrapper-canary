n.d(t, { Z: () => k }), n(266796);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    i = n.n(o),
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
    N = n(566078),
    v = n(65443),
    y = n(340100),
    O = n(644646),
    T = n(667105),
    E = n(341907),
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
function W(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: o } = e;
    return 'xs' === t
        ? (0, r.jsx)(l.P3F, {
              tabIndex: o,
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
              tabIndex: o,
              wrapperClassName: I.ctaButtonWrapper,
              color: l.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function Z(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: o, questContentPosition: i, inGiftInventory: u } = e,
        d = n >= x.OH.COMPLETED,
        m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        p = (0, a.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        h = (0, f.q8)(t),
        j = (0, f.Vl)(t),
        b = (0, T.Ks)({
            progressState: n,
            quest: t,
            location: o,
            isCollectibleQuest: s,
            questContentPosition: i,
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
let k = (e) => {
    let { quest: t, location: n, size: o, isFocused: c, isQuestExpired: g, isExpanded: T, isAnimating: k, contentPosition: L } = e,
        B = (0, x._Q)(t),
        U = B >= x.OH.ACCEPTED,
        Q = B >= x.OH.COMPLETED,
        F = B >= x.OH.CLAIMED,
        z = (0, f.Xv)(t.config),
        G = (0, S.uq)(n),
        H = n === h.jn.QUESTS_EMBED,
        X = T || k,
        V = U && !F && G,
        Y = (0, x.t5)(t, w.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: K } = (0, x.z6)(),
        J = (0, p.O5)(),
        $ = (0, j.j)({ location: w.dr.QUESTS_BAR_MOBILE }),
        ee = s.useMemo(() => N.r.build(t.config), [t.config]),
        et = (0, x.Rf)(t),
        en = (0, C.DD)({
            quest: t,
            taskDetails: et,
            location: w.dr.QUESTS_CARD,
            questContent: h.jn.QUESTS_EMBED
        }),
        er = (0, a.e7)([u.default], () => u.default.locale),
        es = (0, x.z)(t),
        eo = G && z,
        ei = g && !Q,
        ea = K.length > 0 && G && (0, f.$J)(t) && U && !Q && !es,
        el = (0, r.jsx)(O.Z, {
            autoplay: c,
            className: i()(I.gridImg, {
                [I.questRewardGiftInventory]: G && 'lg' === o,
                [I.questRewardEmbed]: H && 'lg' === o,
                [I.questRewardEmbedSm]: 'sm' === o,
                [I.questRewardEmbedXs]: 'xs' === o
            }),
            learnMoreStyle: G ? null : 'text',
            location: w.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: L
        });
    return (0, r.jsxs)('div', {
        className: I.root,
        children: [
            (0, r.jsxs)('div', {
                className: i()(I.outerContainer, {
                    [I.outerContainerSm]: 'sm' === o,
                    [I.outerContainerXs]: 'xs' === o,
                    [I.outerContainerNoProgress]: !V
                }),
                style: { visibility: X ? 'inherit' : 'hidden' },
                'aria-hidden': !X,
                children: [
                    (0, r.jsx)(l.ua7, {
                        text: ei ? _.NW.string(_.t['04MTGR']) : null,
                        tooltipContentClassName: I.rewardTileExpirationTooltip,
                        shouldShow: ei,
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
                                        eo
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
                        className: i()(I.gridText, I.taskDetails),
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: M(n, o, U),
                                className: I.taskInstructions,
                                children: g ? _.NW.formatToPlainString(_.t['ge+AJi'], { questName: t.config.messages.questName }) : Y
                            }),
                            $
                                ? (0, r.jsx)(v.Z, {
                                      textColor: 'text-muted',
                                      quest: t,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(l.Text, {
                                      variant: 'lg' === o ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, o, i;
                                          let { quest: a, locale: l, isQuestExpired: c, sharedQuestFields: u, withCopySimplification: p, collectibleQuestRewardDescription: g } = e,
                                              h = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
                                              j = h && (null == (n = a.userStatus) ? void 0 : n.claimedAt) != null,
                                              C = (0, x.B6)(null == (r = a.userStatus) ? void 0 : r.completedAt, {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric'
                                              }),
                                              N = (0, f.oo)({ quest: a }),
                                              v = u.defaultReward.messages.nameWithArticle,
                                              y = u.defaultReward.messages.nameWithArticle,
                                              O = p ? y : v,
                                              T = (0, f.Kr)(a.config),
                                              E = (0, f.b7)(a),
                                              q = (0, b.U)();
                                          if (j) {
                                              let e = N
                                                      ? (0, f.o9)({
                                                            quest: a,
                                                            idx: null == (s = a.userStatus) ? void 0 : s.claimedTier
                                                        })
                                                      : null,
                                                  t = null != (o = null == e ? void 0 : e.messages.nameWithArticle) ? o : null;
                                              return null != t
                                                  ? _.NW.formatToPlainString(_.t.RrxtPT, {
                                                        reward: t,
                                                        date: C
                                                    })
                                                  : _.NW.formatToPlainString(_.t.zNoqRU, {
                                                        reward: O,
                                                        date: C
                                                    });
                                          }
                                          if (h)
                                              return N
                                                  ? _.NW.formatToPlainString(_.t.l1jCMz, { date: C })
                                                  : _.NW.formatToPlainString(_.t.zNoqRU, {
                                                        reward: O,
                                                        date: C
                                                    });
                                          let S = N
                                              ? (0, f.o9)({
                                                    quest: a,
                                                    idx: 0
                                                })
                                              : null;
                                          return c
                                              ? _.NW.formatToPlainString(_.t.DT3aub, { reward: null != (i = null == S ? void 0 : S.messages.nameWithArticle) ? i : O })
                                              : null != S && null != S.approximateCount
                                                ? _.NW.format(_.t['4bMK19'], {
                                                      maxReward: S.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(S.approximateCount, l),
                                                      helpCenterLink: d.Z.getArticleURL(R.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : q
                                                  ? g
                                                  : null != T
                                                    ? _.NW.formatToPlainString(_.t.Pu5eyM, {
                                                          reward: O,
                                                          duration: T
                                                      })
                                                    : null != E
                                                      ? E.description
                                                      : _.NW.formatToPlainString(_.t.ttFsLi, { reward: O });
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
                        className: i()(I.ctaButtonContainer, I.gridCtaButtons),
                        children: [
                            !G &&
                                (0, r.jsx)(W, {
                                    containerSize: o,
                                    onClick: () => {
                                        (0, E.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            J({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: L,
                                                questContentCTA: p.jZ.LEARN_MORE
                                            });
                                    },
                                    children: _.NW.string(_.t.LLLLPD)
                                }),
                            g && !Q
                                ? null
                                : (0, r.jsx)(Z, {
                                      quest: t,
                                      progressState: B,
                                      isCollectibleQuest: z,
                                      location: n,
                                      inGiftInventory: G
                                  })
                        ]
                    }),
                    V &&
                        (0, r.jsx)(y.Z, {
                            className: I.gridProgressBar,
                            color: Q ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.BG_BRAND,
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
