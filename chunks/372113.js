n.d(t, { Z: () => D }), n(266796);
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
    v = n(566078),
    b = n(65443),
    C = n(160766),
    N = n(340100),
    E = n(644646),
    T = n(667105),
    y = n(341907),
    S = n(128535),
    O = n(87894),
    q = n(2660),
    P = n(46140),
    w = n(981631),
    A = n(388032),
    R = n(470069);
function _(e) {
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
function Z(e, t) {
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
let I = (e, t, n) => ((0, O.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function M(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: i } = e;
    return 'xs' === t
        ? (0, r.jsx)(a.P3F, {
              tabIndex: i,
              className: R.learnMoreLink,
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
              wrapperClassName: R.ctaButtonWrapper,
              color: a.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function L(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, location: i, questContentPosition: o, inGiftInventory: u } = e,
        d = n >= x.OH.COMPLETED,
        m = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        p = (0, l.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        h = (0, f.q8)(t),
        j = (0, T.Ks)({
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
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    v,
                    Z(_({}, e), {
                        wrapperClassName: R.ctaButtonWrapper,
                        color: a.Ttl.BRAND,
                        disabled: null == j.onClick,
                        submitting: p,
                        onClick: null !== (t = j.onClick) && void 0 !== t ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: R.ctaButtonInner,
                            children: j.text
                        })
                    })
                );
            }
        },
        j.tooltipText
    );
}
let D = (e) => {
    let { quest: t, location: n, size: i, isFocused: c, isQuestExpired: g, isExpanded: T, isAnimating: D, contentPosition: k } = e,
        W = (0, x._Q)(t),
        U = W >= x.OH.ACCEPTED,
        Q = W >= x.OH.COMPLETED,
        B = W >= x.OH.CLAIMED,
        z = (0, f.Xv)(t.config),
        F = (0, O.uq)(n),
        G = n === h.jn.QUESTS_EMBED,
        H = T || D,
        V = U && !B && F,
        X = (0, x.t5)(t, P.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: Y } = (0, x.z6)(),
        K = (0, p.O5)(),
        J = (0, j.j)({ location: P.dr.QUESTS_BAR_MOBILE }),
        $ = s.useMemo(() => v.r.build(t.config), [t.config]),
        ee = (0, l.e7)([u.default], () => u.default.locale),
        et = (0, x.z)(t),
        en = F && z,
        er = g && !Q,
        es = Y.length > 0 && F && (0, f.$J)(t) && U && !Q && !et,
        ei = (0, r.jsx)(C.Z, {
            quest: t,
            children: (0, r.jsx)(E.Z, {
                autoplay: c,
                className: o()(R.gridImg, {
                    [R.questRewardGiftInventory]: F && 'lg' === i,
                    [R.questRewardEmbed]: G && 'lg' === i,
                    [R.questRewardEmbedSm]: 'sm' === i,
                    [R.questRewardEmbedXs]: 'xs' === i
                }),
                learnMoreStyle: F ? null : 'text',
                location: P.dr.QUESTS_CARD,
                quest: t,
                questContent: n,
                questContentPosition: k
            })
        });
    return (0, r.jsxs)('div', {
        className: R.root,
        children: [
            (0, r.jsxs)('div', {
                className: o()(R.outerContainer, {
                    [R.outerContainerSm]: 'sm' === i,
                    [R.outerContainerXs]: 'xs' === i,
                    [R.outerContainerNoProgress]: !V
                }),
                style: { visibility: H ? 'inherit' : 'hidden' },
                'aria-hidden': !H,
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: er ? A.NW.string(A.t['04MTGR']) : null,
                        tooltipContentClassName: R.rewardTileExpirationTooltip,
                        shouldShow: er,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                Z(_({ className: R.rewardTileWrapper }, e), {
                                    children: [
                                        g &&
                                            (0, r.jsx)('div', {
                                                className: R.rewardTileExpired,
                                                children: (0, r.jsx)(a.P4T, { color: a.TVs.colors.WHITE })
                                            }),
                                        en
                                            ? (0, r.jsx)(q.Z, {
                                                  questConfig: t.config,
                                                  fallback: ei,
                                                  isFocused: c
                                              })
                                            : ei
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(R.gridText, R.taskDetails),
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: I(n, i, U),
                                className: R.taskInstructions,
                                children: g ? A.NW.formatToPlainString(A.t['ge+AJi'], { questName: t.config.messages.questName }) : X
                            }),
                            J
                                ? (0, r.jsx)(b.Z, {
                                      textColor: 'text-muted',
                                      quest: t,
                                      withRewardName: !0
                                  })
                                : (0, r.jsx)(a.Text, {
                                      variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                                      color: 'text-muted',
                                      children: (function (e) {
                                          var t, n, r, s, i, o;
                                          let { quest: l, locale: a, isQuestExpired: c, sharedQuestFields: u, withCopySimplification: p } = e,
                                              g = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                              h = g && (null === (n = l.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                              j = (0, x.B6)(null === (r = l.userStatus) || void 0 === r ? void 0 : r.completedAt, {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric'
                                              }),
                                              v = (0, f.oo)({ quest: l }),
                                              b = u.defaultReward.messages.nameWithArticle,
                                              C = u.defaultReward.messages.nameWithArticle,
                                              N = p ? C : b,
                                              E = (0, f.Kr)(l.config),
                                              T = (0, f.b7)(l);
                                          if (h) {
                                              let e = v
                                                      ? (0, f.o9)({
                                                            quest: l,
                                                            idx: null === (s = l.userStatus) || void 0 === s ? void 0 : s.claimedTier
                                                        })
                                                      : null,
                                                  t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
                                              return null != t
                                                  ? A.NW.formatToPlainString(A.t.RrxtPT, {
                                                        reward: t,
                                                        date: j
                                                    })
                                                  : A.NW.formatToPlainString(A.t.zNoqRU, {
                                                        reward: N,
                                                        date: j
                                                    });
                                          }
                                          if (g)
                                              return v
                                                  ? A.NW.formatToPlainString(A.t.l1jCMz, { date: j })
                                                  : A.NW.formatToPlainString(A.t.zNoqRU, {
                                                        reward: N,
                                                        date: j
                                                    });
                                          let y = v
                                              ? (0, f.o9)({
                                                    quest: l,
                                                    idx: 0
                                                })
                                              : null;
                                          if (c) return A.NW.formatToPlainString(A.t.DT3aub, { reward: null !== (o = null == y ? void 0 : y.messages.nameWithArticle) && void 0 !== o ? o : N });
                                          if (null != y && null != y.approximateCount)
                                              return A.NW.format(A.t['4bMK19'], {
                                                  maxReward: y.messages.nameWithArticle,
                                                  maxRewardCount: (0, m.Bs)(y.approximateCount, a),
                                                  helpCenterLink: d.Z.getArticleURL(w.BhN.QUESTS_LEARN_MORE)
                                              });
                                          if (null != E) {
                                              let e = (0, f.f$)(l.config) ? A.t.YWnLFx : A.t.Pu5eyM;
                                              return A.NW.formatToPlainString(e, {
                                                  reward: N,
                                                  duration: E
                                              });
                                          }
                                          return null != T ? T.description : A.NW.formatToPlainString(A.t.ttFsLi, { reward: N });
                                      })({
                                          quest: t,
                                          locale: ee,
                                          isQuestExpired: g,
                                          sharedQuestFields: $,
                                          withCopySimplification: J
                                      })
                                  })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(R.ctaButtonContainer, R.gridCtaButtons),
                        children: [
                            !F &&
                                (0, r.jsx)(M, {
                                    containerSize: i,
                                    onClick: () => {
                                        (0, y.navigateToQuestHome)({
                                            fromContent: n,
                                            questId: t.id
                                        }),
                                            K({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: k,
                                                questContentCTA: p.jZ.LEARN_MORE
                                            });
                                    },
                                    children: A.NW.string(A.t.LLLLPD)
                                }),
                            g && !Q
                                ? null
                                : (0, r.jsx)(L, {
                                      quest: t,
                                      progressState: W,
                                      isCollectibleQuest: z,
                                      location: n,
                                      inGiftInventory: F
                                  })
                        ]
                    }),
                    V &&
                        (0, r.jsx)(N.Z, {
                            className: R.gridProgressBar,
                            color: Q ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.BG_BRAND,
                            quest: t,
                            isInventory: F
                        })
                ]
            }),
            es &&
                (0, r.jsxs)('div', {
                    className: R.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: R.separator }),
                        (0, r.jsx)(S.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
