n.d(t, { Z: () => Q });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    m = n(63063),
    p = n(930153),
    h = n(617136),
    x = n(509212),
    g = n(113434),
    j = n(569984),
    C = n(497505),
    f = n(373370),
    b = n(566078),
    v = n(340100),
    y = n(644646),
    O = n(110560),
    N = n(667105),
    T = n(128535),
    E = n(87894),
    q = n(2660),
    S = n(46140),
    P = n(981631),
    w = n(388032),
    R = n(717735);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let D = (e, t, n) => ((0, E.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function M(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: o } = e;
    return 'xs' === t
        ? (0, r.jsx)(c.P3F, {
              tabIndex: o,
              className: R.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(c.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, r.jsx)(l.zx, {
              tabIndex: o,
              wrapperClassName: R.ctaButtonWrapper,
              color: l.Tt.PRIMARY,
              onClick: n,
              children: s
          });
}
function A(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, questContent: o, questContentPosition: i, inGiftInventory: d, sourceQuestContent: m } = e,
        p = n >= g.OH.COMPLETED,
        h = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        C = (0, a.e7)([j.Z], () => j.Z.isEnrolling(t.id)),
        f = (0, x.q8)(t),
        b = (0, x.Vl)(t),
        v = (0, N.Ks)({
            progressState: n,
            quest: t,
            questContent: o,
            isCollectibleQuest: s,
            questContentPosition: i,
            inGiftInventory: d,
            isVideoQuest: f,
            inGameQuest: b,
            sourceQuestContent: m
        }),
        y = p && !h ? c.gtL : l.zx;
    return (0, r.jsx)(
        c.ua7,
        {
            text: v.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    y,
                    I(_({}, e), {
                        wrapperClassName: R.ctaButtonWrapper,
                        color: l.Tt.BRAND,
                        disabled: null == v.onClick,
                        submitting: C,
                        onClick: null != (t = v.onClick) ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: R.ctaButtonInner,
                            children: v.text
                        })
                    })
                );
            }
        },
        v.tooltipText
    );
}
let Q = (e) => {
    var t;
    let { quest: n, location: o, size: u, isFocused: N, isQuestExpired: Q, isExpanded: Z, isAnimating: L, contentPosition: k, sourceQuestContent: B } = e,
        U = (0, g._Q)(n),
        G = (0, g.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        W = U >= g.OH.ACCEPTED,
        F = U >= g.OH.COMPLETED,
        z = U >= g.OH.CLAIMED,
        X = (0, x.Xv)(n.config),
        H = (0, E.uq)(o),
        Y = o === C.jn.QUESTS_EMBED,
        V = Z || L,
        J = W && !z && H,
        K = (0, g.t5)(n, S.dr.QUESTS_CARD, o, B),
        { xboxAndPlaystationAccounts: $ } = (0, g.z6)(),
        ee = (0, h.O5)(),
        et = s.useMemo(() => b.r.build(n.config), [n.config]),
        en = (0, g.Rf)(n),
        er = (0, f.DD)({
            quest: n,
            taskDetails: en,
            location: S.dr.QUESTS_CARD,
            questContent: C.jn.QUESTS_EMBED,
            sourceQuestContent: B
        }),
        es = (0, a.e7)([j.Z], () => null != j.Z.questEnrollmentBlockedUntil, []),
        eo = (0, a.e7)([d.default], () => d.default.locale),
        ei = (0, g.z)(n),
        ea = H && X,
        el = Q && !F,
        ec = $.length > 0 && H && (0, x.$J)(n) && W && !F && !ei,
        eu = (0, r.jsx)(y.Z, {
            autoplay: N,
            className: i()(R.gridImg, {
                [R.questRewardGiftInventory]: H && 'lg' === u,
                [R.questRewardEmbed]: Y && 'lg' === u,
                [R.questRewardEmbedSm]: 'sm' === u,
                [R.questRewardEmbedXs]: 'xs' === u
            }),
            learnMoreStyle: H ? null : 'text',
            location: S.dr.QUESTS_CARD,
            quest: n,
            questContent: o,
            questContentPosition: k,
            sourceQuestContent: B
        });
    return (0, r.jsxs)('div', {
        className: R.root,
        children: [
            (0, r.jsxs)('div', {
                className: i()(R.outerContainer, {
                    [R.outerContainerSm]: 'sm' === u,
                    [R.outerContainerXs]: 'xs' === u,
                    [R.outerContainerNoProgress]: !J
                }),
                style: { visibility: V ? 'inherit' : 'hidden' },
                'aria-hidden': !V,
                children: [
                    (0, r.jsx)(c.ua7, {
                        text: el ? w.intl.string(w.t['04MTGR']) : null,
                        tooltipContentClassName: R.rewardTileExpirationTooltip,
                        shouldShow: el,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                I(_({ className: R.rewardTileWrapper }, e), {
                                    children: [
                                        Q &&
                                            (0, r.jsx)('div', {
                                                className: R.rewardTileExpired,
                                                children: (0, r.jsx)(c.P4T, { color: c.TVs.colors.WHITE })
                                            }),
                                        ea
                                            ? (0, r.jsx)(q.Z, {
                                                  questConfig: n.config,
                                                  fallback: eu,
                                                  isFocused: N
                                              })
                                            : eu
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(R.gridText, R.taskDetails),
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: D(o, u, W),
                                className: R.taskInstructions,
                                children: Q ? w.intl.formatToPlainString(w.t['ge+AJi'], { questName: n.config.messages.questName }) : K
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'lg' === u ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: (function (e) {
                                    var t, n, r, s, o;
                                    let { quest: i, locale: a, isQuestExpired: l, sharedQuestFields: c, collectibleQuestRewardDescription: u, formattedCompletionDate: d } = e,
                                        h = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
                                        g = h && (null == (n = i.userStatus) ? void 0 : n.claimedAt) != null,
                                        j = (0, x.oo)({ quest: i }),
                                        C = c.defaultRewardNameWithArticle;
                                    if (g) {
                                        let e = j
                                                ? (0, x.o9)({
                                                      quest: i,
                                                      idx: null == (r = i.userStatus) ? void 0 : r.claimedTier
                                                  })
                                                : null,
                                            t = null != (s = null == e ? void 0 : e.messages.nameWithArticle) ? s : null;
                                        return null != t
                                            ? w.intl.formatToPlainString(w.t.RrxtPT, {
                                                  reward: t,
                                                  date: d
                                              })
                                            : w.intl.formatToPlainString(w.t.zNoqRU, {
                                                  reward: C,
                                                  date: d
                                              });
                                    }
                                    if (h)
                                        return j
                                            ? w.intl.formatToPlainString(w.t.l1jCMz, { date: d })
                                            : w.intl.formatToPlainString(w.t.zNoqRU, {
                                                  reward: C,
                                                  date: d
                                              });
                                    let f = j
                                        ? (0, x.o9)({
                                              quest: i,
                                              idx: 0
                                          })
                                        : null;
                                    return l
                                        ? w.intl.formatToPlainString(w.t.DT3aub, { reward: null != (o = null == f ? void 0 : f.messages.nameWithArticle) ? o : C })
                                        : null != f && null != f.approximateCount
                                          ? w.intl.format(w.t['4bMK19'], {
                                                maxReward: f.messages.nameWithArticle,
                                                maxRewardCount: (0, p.Bs)(f.approximateCount, a),
                                                helpCenterLink: m.Z.getArticleURL(P.BhN.QUESTS_LEARN_MORE)
                                            })
                                          : u;
                                })({
                                    quest: n,
                                    locale: eo,
                                    isQuestExpired: Q,
                                    sharedQuestFields: et,
                                    collectibleQuestRewardDescription: er,
                                    formattedCompletionDate: G
                                })
                            })
                        ]
                    }),
                    es
                        ? (0, r.jsxs)('div', {
                              className: i()(R.ctaButtonContainer, R.gridCtaButtons),
                              children: [
                                  (0, r.jsx)(l.zx, {
                                      color: l.Tt.PRIMARY,
                                      disabled: !0,
                                      className: R.questEnrollmentBlockedButton,
                                      children: w.intl.string(w.t.V293qq)
                                  }),
                                  (0, r.jsx)(l.zx, {
                                      color: l.Tt.BRAND,
                                      onClick: () => (0, O.openQuestMinorEnrollmentBlockModal)(n, o, B),
                                      className: R.questEnrollmentBlockedButton,
                                      children: w.intl.string(w.t.vY9GgI)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: i()(R.ctaButtonContainer, R.gridCtaButtons),
                              children: [
                                  !H &&
                                      (0, r.jsx)(M, {
                                          containerSize: u,
                                          onClick: () => {
                                              ((0, O.navigateToQuestHome)({
                                                  fromContent: o,
                                                  questId: n.id
                                              }),
                                                  ee({
                                                      questId: n.id,
                                                      questContent: o,
                                                      questContentPosition: k,
                                                      questContentCTA: h.jZ.LEARN_MORE,
                                                      sourceQuestContent: B
                                                  }));
                                          },
                                          children: w.intl.string(w.t.LLLLPD)
                                      }),
                                  Q && !F
                                      ? null
                                      : (0, r.jsx)(A, {
                                            quest: n,
                                            progressState: U,
                                            isCollectibleQuest: X,
                                            questContent: o,
                                            inGiftInventory: H,
                                            sourceQuestContent: B
                                        })
                              ]
                          }),
                    J &&
                        (0, r.jsx)(v.Z, {
                            className: R.gridProgressBar,
                            color: F ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : c.TVs.colors.BG_BRAND,
                            quest: n,
                            isInventory: H
                        })
                ]
            }),
            ec &&
                (0, r.jsxs)('div', {
                    className: R.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: R.separator }),
                        (0, r.jsx)(T.Z, {
                            quest: n,
                            location: o,
                            sourceQuestContent: B
                        })
                    ]
                })
        ]
    });
};
