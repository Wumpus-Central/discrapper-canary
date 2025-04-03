n.d(t, { Z: () => L }), n(266796);
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
    y = n(160766),
    O = n(340100),
    T = n(644646),
    E = n(667105),
    q = n(341907),
    S = n(128535),
    P = n(87894),
    w = n(2660),
    R = n(46140),
    _ = n(981631),
    I = n(388032),
    D = n(717735);
function M(e) {
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
let W = (e, t, n) => ((0, P.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function Z(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: o } = e;
    return 'xs' === t
        ? (0, r.jsx)(l.P3F, {
              tabIndex: o,
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
              tabIndex: o,
              wrapperClassName: D.ctaButtonWrapper,
              color: l.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function k(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: o, questContentPosition: i, inGiftInventory: u } = e,
        d = n >= x.OH.COMPLETED,
        m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        p = (0, a.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        h = (0, f.q8)(t),
        j = (0, f.Vl)(t),
        b = (0, E.Ks)({
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
            tooltipContentClassName: D.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    C,
                    A(M({}, e), {
                        wrapperClassName: D.ctaButtonWrapper,
                        color: l.Ttl.BRAND,
                        disabled: null == b.onClick,
                        submitting: p,
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
    let { quest: t, location: n, size: o, isFocused: c, isQuestExpired: g, isExpanded: E, isAnimating: L, contentPosition: B } = e,
        U = (0, x._Q)(t),
        Q = U >= x.OH.ACCEPTED,
        F = U >= x.OH.COMPLETED,
        z = U >= x.OH.CLAIMED,
        G = (0, f.Xv)(t.config),
        H = (0, P.uq)(n),
        X = n === h.jn.QUESTS_EMBED,
        V = E || L,
        Y = Q && !z && H,
        K = (0, x.t5)(t, R.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: J } = (0, x.z6)(),
        $ = (0, p.O5)(),
        ee = (0, j.j)({ location: R.dr.QUESTS_BAR_MOBILE }),
        et = s.useMemo(() => N.r.build(t.config), [t.config]),
        en = (0, x.Rf)(t),
        er = (0, C.DD)({
            quest: t,
            taskDetails: en,
            location: R.dr.QUESTS_CARD,
            questContent: h.jn.QUESTS_EMBED
        }),
        es = (0, a.e7)([u.default], () => u.default.locale),
        eo = (0, x.z)(t),
        ei = H && G,
        ea = g && !F,
        el = J.length > 0 && H && (0, f.$J)(t) && Q && !F && !eo,
        ec = (0, r.jsx)(y.Z, {
            quest: t,
            children: (0, r.jsx)(T.Z, {
                autoplay: c,
                className: i()(D.gridImg, {
                    [D.questRewardGiftInventory]: H && 'lg' === o,
                    [D.questRewardEmbed]: X && 'lg' === o,
                    [D.questRewardEmbedSm]: 'sm' === o,
                    [D.questRewardEmbedXs]: 'xs' === o
                }),
                learnMoreStyle: H ? null : 'text',
                location: R.dr.QUESTS_CARD,
                quest: t,
                questContent: n,
                questContentPosition: B
            })
        });
    return (0, r.jsxs)('div', {
        className: D.root,
        children: [
            (0, r.jsxs)('div', {
                className: i()(D.outerContainer, {
                    [D.outerContainerSm]: 'sm' === o,
                    [D.outerContainerXs]: 'xs' === o,
                    [D.outerContainerNoProgress]: !Y
                }),
                style: { visibility: V ? 'inherit' : 'hidden' },
                'aria-hidden': !V,
                children: [
                    (0, r.jsx)(l.ua7, {
                        text: ea ? I.NW.string(I.t['04MTGR']) : null,
                        tooltipContentClassName: D.rewardTileExpirationTooltip,
                        shouldShow: ea,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                A(M({ className: D.rewardTileWrapper }, e), {
                                    children: [
                                        g &&
                                            (0, r.jsx)('div', {
                                                className: D.rewardTileExpired,
                                                children: (0, r.jsx)(l.P4T, { color: l.TVs.colors.WHITE })
                                            }),
                                        ei
                                            ? (0, r.jsx)(w.Z, {
                                                  questConfig: t.config,
                                                  fallback: ec,
                                                  isFocused: c
                                              })
                                            : ec
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(D.gridText, D.taskDetails),
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: W(n, o, Q),
                                className: D.taskInstructions,
                                children: g ? I.NW.formatToPlainString(I.t['ge+AJi'], { questName: t.config.messages.questName }) : K
                            }),
                            ee
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
                                                  ? I.NW.formatToPlainString(I.t.RrxtPT, {
                                                        reward: t,
                                                        date: C
                                                    })
                                                  : I.NW.formatToPlainString(I.t.zNoqRU, {
                                                        reward: O,
                                                        date: C
                                                    });
                                          }
                                          if (h)
                                              return N
                                                  ? I.NW.formatToPlainString(I.t.l1jCMz, { date: C })
                                                  : I.NW.formatToPlainString(I.t.zNoqRU, {
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
                                              ? I.NW.formatToPlainString(I.t.DT3aub, { reward: null != (i = null == S ? void 0 : S.messages.nameWithArticle) ? i : O })
                                              : null != S && null != S.approximateCount
                                                ? I.NW.format(I.t['4bMK19'], {
                                                      maxReward: S.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(S.approximateCount, l),
                                                      helpCenterLink: d.Z.getArticleURL(_.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : q
                                                  ? g
                                                  : null != T
                                                    ? I.NW.formatToPlainString(I.t.Pu5eyM, {
                                                          reward: O,
                                                          duration: T
                                                      })
                                                    : null != E
                                                      ? E.description
                                                      : I.NW.formatToPlainString(I.t.ttFsLi, { reward: O });
                                      })({
                                          quest: t,
                                          locale: es,
                                          isQuestExpired: g,
                                          sharedQuestFields: et,
                                          withCopySimplification: ee,
                                          collectibleQuestRewardDescription: er
                                      })
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(D.ctaButtonContainer, D.gridCtaButtons),
                        children: [
                            !H &&
                                (0, r.jsx)(Z, {
                                    containerSize: o,
                                    onClick: () => {
                                        (0, q.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            $({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: B,
                                                questContentCTA: p.jZ.LEARN_MORE
                                            });
                                    },
                                    children: I.NW.string(I.t.LLLLPD)
                                }),
                            g && !F
                                ? null
                                : (0, r.jsx)(k, {
                                      quest: t,
                                      progressState: U,
                                      isCollectibleQuest: G,
                                      location: n,
                                      inGiftInventory: H
                                  })
                        ]
                    }),
                    Y &&
                        (0, r.jsx)(O.Z, {
                            className: D.gridProgressBar,
                            color: F ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: H
                        })
                ]
            }),
            el &&
                (0, r.jsxs)('div', {
                    className: D.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: D.separator }),
                        (0, r.jsx)(S.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
