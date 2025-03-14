n.d(t, { Z: () => W }), n(266796);
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    a = n(481060),
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
    v = n(75137),
    C = n(373370),
    b = n(566078),
    N = n(65443),
    E = n(160766),
    T = n(340100),
    y = n(644646),
    S = n(667105),
    O = n(341907),
    q = n(128535),
    P = n(87894),
    w = n(2660),
    A = n(46140),
    _ = n(981631),
    R = n(388032),
    Z = n(419892);
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
let D = (e, t, n) => ((0, P.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function L(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: i } = e;
    return 'xs' === t
        ? (0, r.jsx)(a.P3F, {
              tabIndex: i,
              className: Z.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(a.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, r.jsx)(a.zxk, {
              tabIndex: i,
              wrapperClassName: Z.ctaButtonWrapper,
              color: a.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function k(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: i, questContentPosition: o, inGiftInventory: u } = e,
        d = n >= x.OH.COMPLETED,
        m = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        p = (0, l.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        h = (0, f.q8)(t),
        j = (0, S.Ks)({
            progressState: n,
            quest: t,
            location: i,
            isCollectibleQuest: s,
            questContentPosition: o,
            inGiftInventory: u,
            isVideoQuest: h
        }),
        v = d && !m ? a.gtL : a.zxk;
    return (0, r.jsx)(
        a.ua7,
        {
            text: j.tooltipText,
            tooltipContentClassName: Z.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    v,
                    M(I({}, e), {
                        wrapperClassName: Z.ctaButtonWrapper,
                        color: a.Ttl.BRAND,
                        disabled: null == j.onClick,
                        submitting: p,
                        onClick: null !== (t = j.onClick) && void 0 !== t ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: Z.ctaButtonInner,
                            children: j.text
                        })
                    })
                );
            }
        },
        j.tooltipText
    );
}
let W = (e) => {
    let { quest: t, location: n, size: i, isFocused: c, isQuestExpired: g, isExpanded: S, isAnimating: W, contentPosition: U } = e,
        Q = (0, x._Q)(t),
        B = Q >= x.OH.ACCEPTED,
        z = Q >= x.OH.COMPLETED,
        F = Q >= x.OH.CLAIMED,
        G = (0, f.Xv)(t.config),
        H = (0, P.uq)(n),
        V = n === h.jn.QUESTS_EMBED,
        X = S || W,
        K = B && !F && H,
        Y = (0, x.t5)(t, A.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: J } = (0, x.z6)(),
        $ = (0, p.O5)(),
        ee = (0, j.j)({ location: A.dr.QUESTS_BAR_MOBILE }),
        et = s.useMemo(() => b.r.build(t.config), [t.config]),
        en = (0, x.Rf)(t),
        er = (0, C.DD)({
            quest: t,
            taskDetails: en,
            location: A.dr.QUESTS_CARD,
            questContent: h.jn.QUESTS_EMBED
        }),
        es = (0, l.e7)([u.default], () => u.default.locale),
        ei = (0, x.z)(t),
        eo = H && G,
        el = g && !z,
        ea = J.length > 0 && H && (0, f.$J)(t) && B && !z && !ei,
        ec = (0, r.jsx)(E.Z, {
            quest: t,
            children: (0, r.jsx)(y.Z, {
                autoplay: c,
                className: o()(Z.gridImg, {
                    [Z.questRewardGiftInventory]: H && 'lg' === i,
                    [Z.questRewardEmbed]: V && 'lg' === i,
                    [Z.questRewardEmbedSm]: 'sm' === i,
                    [Z.questRewardEmbedXs]: 'xs' === i
                }),
                learnMoreStyle: H ? null : 'text',
                location: A.dr.QUESTS_CARD,
                quest: t,
                questContent: n,
                questContentPosition: U
            })
        });
    return (0, r.jsxs)('div', {
        className: Z.root,
        children: [
            (0, r.jsxs)('div', {
                className: o()(Z.outerContainer, {
                    [Z.outerContainerSm]: 'sm' === i,
                    [Z.outerContainerXs]: 'xs' === i,
                    [Z.outerContainerNoProgress]: !K
                }),
                style: { visibility: X ? 'inherit' : 'hidden' },
                'aria-hidden': !X,
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: el ? R.NW.string(R.t['04MTGR']) : null,
                        tooltipContentClassName: Z.rewardTileExpirationTooltip,
                        shouldShow: el,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                M(I({ className: Z.rewardTileWrapper }, e), {
                                    children: [
                                        g &&
                                            (0, r.jsx)('div', {
                                                className: Z.rewardTileExpired,
                                                children: (0, r.jsx)(a.P4T, { color: a.TVs.colors.WHITE })
                                            }),
                                        eo
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
                        className: o()(Z.gridText, Z.taskDetails),
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: D(n, i, B),
                                className: Z.taskInstructions,
                                children: g ? R.NW.formatToPlainString(R.t['ge+AJi'], { questName: t.config.messages.questName }) : Y
                            }),
                            ee
                                ? (0, r.jsx)(N.Z, {
                                      textColor: 'text-muted',
                                      quest: t,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(a.Text, {
                                      variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, i, o;
                                          let { quest: l, locale: a, isQuestExpired: c, sharedQuestFields: u, withCopySimplification: p, collectibleQuestRewardDescription: g } = e,
                                              h = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                              j = h && (null === (n = l.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                              C = (0, x.B6)(null === (r = l.userStatus) || void 0 === r ? void 0 : r.completedAt, {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric'
                                              }),
                                              b = (0, f.oo)({ quest: l }),
                                              N = u.defaultReward.messages.nameWithArticle,
                                              E = u.defaultReward.messages.nameWithArticle,
                                              T = p ? E : N,
                                              y = (0, f.Kr)(l.config),
                                              S = (0, f.b7)(l),
                                              O = (0, v.U)();
                                          if (j) {
                                              let e = b
                                                      ? (0, f.o9)({
                                                            quest: l,
                                                            idx: null === (s = l.userStatus) || void 0 === s ? void 0 : s.claimedTier
                                                        })
                                                      : null,
                                                  t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
                                              return null != t
                                                  ? R.NW.formatToPlainString(R.t.RrxtPT, {
                                                        reward: t,
                                                        date: C
                                                    })
                                                  : R.NW.formatToPlainString(R.t.zNoqRU, {
                                                        reward: T,
                                                        date: C
                                                    });
                                          }
                                          if (h)
                                              return b
                                                  ? R.NW.formatToPlainString(R.t.l1jCMz, { date: C })
                                                  : R.NW.formatToPlainString(R.t.zNoqRU, {
                                                        reward: T,
                                                        date: C
                                                    });
                                          let q = b
                                              ? (0, f.o9)({
                                                    quest: l,
                                                    idx: 0
                                                })
                                              : null;
                                          return c
                                              ? R.NW.formatToPlainString(R.t.DT3aub, { reward: null !== (o = null == q ? void 0 : q.messages.nameWithArticle) && void 0 !== o ? o : T })
                                              : null != q && null != q.approximateCount
                                                ? R.NW.format(R.t['4bMK19'], {
                                                      maxReward: q.messages.nameWithArticle,
                                                      maxRewardCount: (0, m.Bs)(q.approximateCount, a),
                                                      helpCenterLink: d.Z.getArticleURL(_.BhN.QUESTS_LEARN_MORE)
                                                  })
                                                : O
                                                  ? g
                                                  : null != y
                                                    ? R.NW.formatToPlainString(R.t.Pu5eyM, {
                                                          reward: T,
                                                          duration: y
                                                      })
                                                    : null != S
                                                      ? S.description
                                                      : R.NW.formatToPlainString(R.t.ttFsLi, { reward: T });
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
                        className: o()(Z.ctaButtonContainer, Z.gridCtaButtons),
                        children: [
                            !H &&
                                (0, r.jsx)(L, {
                                    containerSize: i,
                                    onClick: () => {
                                        (0, O.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            $({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: U,
                                                questContentCTA: p.jZ.LEARN_MORE
                                            });
                                    },
                                    children: R.NW.string(R.t.LLLLPD)
                                }),
                            g && !z
                                ? null
                                : (0, r.jsx)(k, {
                                      quest: t,
                                      progressState: Q,
                                      isCollectibleQuest: G,
                                      location: n,
                                      inGiftInventory: H
                                  })
                        ]
                    }),
                    K &&
                        (0, r.jsx)(T.Z, {
                            className: Z.gridProgressBar,
                            color: z ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: H
                        })
                ]
            }),
            ea &&
                (0, r.jsxs)('div', {
                    className: Z.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: Z.separator }),
                        (0, r.jsx)(q.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
