n.d(t, { Z: () => k });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    i = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(607070),
    u = n(706454),
    d = n(63063),
    m = n(930153),
    p = n(617136),
    h = n(113434),
    x = n(569984),
    g = n(497505),
    j = n(918701),
    C = n(373370),
    f = n(566078),
    b = n(340100),
    v = n(644646),
    y = n(667105),
    O = n(341907),
    N = n(128535),
    T = n(87894),
    E = n(2660),
    q = n(46140),
    S = n(981631),
    P = n(388032),
    w = n(717735);
function R(e) {
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
function _(e, t) {
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
let I = (e, t, n) => ((0, T.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function D(e) {
    let { containerSize: t, onClick: n, children: s, tabIndex: o } = e;
    return 'xs' === t
        ? (0, r.jsx)(a.P3F, {
              tabIndex: o,
              className: w.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(a.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: s
              })
          })
        : (0, r.jsx)(a.zxk, {
              tabIndex: o,
              wrapperClassName: w.ctaButtonWrapper,
              color: a.Ttl.PRIMARY,
              onClick: n,
              children: s
          });
}
function M(e) {
    let { quest: t, progressState: n, isCollectibleQuest: s, questContent: o, questContentPosition: i, inGiftInventory: u, sourceQuestContent: d } = e,
        m = n >= h.OH.COMPLETED,
        p = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        g = (0, l.e7)([x.Z], () => x.Z.isEnrolling(t.id)),
        C = (0, j.q8)(t),
        f = (0, j.Vl)(t),
        b = (0, y.Ks)({
            progressState: n,
            quest: t,
            questContent: o,
            isCollectibleQuest: s,
            questContentPosition: i,
            inGiftInventory: u,
            isVideoQuest: C,
            inGameQuest: f,
            sourceQuestContent: d
        }),
        v = m && !p ? a.gtL : a.zxk;
    return (0, r.jsx)(
        a.ua7,
        {
            text: b.tooltipText,
            tooltipContentClassName: w.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    v,
                    _(R({}, e), {
                        wrapperClassName: w.ctaButtonWrapper,
                        color: a.Ttl.BRAND,
                        disabled: null == b.onClick,
                        submitting: g,
                        onClick: null != (t = b.onClick) ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: w.ctaButtonInner,
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
    var t;
    let { quest: n, location: o, size: c, isFocused: y, isQuestExpired: k, isExpanded: A, isAnimating: Q, contentPosition: Z, sourceQuestContent: L } = e,
        B = (0, h._Q)(n),
        U = (0, h.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        G = B >= h.OH.ACCEPTED,
        W = B >= h.OH.COMPLETED,
        F = B >= h.OH.CLAIMED,
        z = (0, j.Xv)(n.config),
        X = (0, T.uq)(o),
        H = o === g.jn.QUESTS_EMBED,
        Y = A || Q,
        V = G && !F && X,
        J = (0, h.t5)(n, q.dr.QUESTS_CARD, o, L),
        { xboxAndPlaystationAccounts: K } = (0, h.z6)(),
        $ = (0, p.O5)(),
        ee = s.useMemo(() => f.r.build(n.config), [n.config]),
        et = (0, h.Rf)(n),
        en = (0, C.DD)({
            quest: n,
            taskDetails: et,
            location: q.dr.QUESTS_CARD,
            questContent: g.jn.QUESTS_EMBED,
            sourceQuestContent: L
        }),
        er = (0, l.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil, []),
        es = (0, l.e7)([u.default], () => u.default.locale),
        eo = (0, h.z)(n),
        ei = X && z,
        el = k && !W,
        ea = K.length > 0 && X && (0, j.$J)(n) && G && !W && !eo,
        ec = (0, r.jsx)(v.Z, {
            autoplay: y,
            className: i()(w.gridImg, {
                [w.questRewardGiftInventory]: X && 'lg' === c,
                [w.questRewardEmbed]: H && 'lg' === c,
                [w.questRewardEmbedSm]: 'sm' === c,
                [w.questRewardEmbedXs]: 'xs' === c
            }),
            learnMoreStyle: X ? null : 'text',
            location: q.dr.QUESTS_CARD,
            quest: n,
            questContent: o,
            questContentPosition: Z,
            sourceQuestContent: L
        });
    return (0, r.jsxs)('div', {
        className: w.root,
        children: [
            (0, r.jsxs)('div', {
                className: i()(w.outerContainer, {
                    [w.outerContainerSm]: 'sm' === c,
                    [w.outerContainerXs]: 'xs' === c,
                    [w.outerContainerNoProgress]: !V
                }),
                style: { visibility: Y ? 'inherit' : 'hidden' },
                'aria-hidden': !Y,
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: el ? P.intl.string(P.t['04MTGR']) : null,
                        tooltipContentClassName: w.rewardTileExpirationTooltip,
                        shouldShow: el,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                _(R({ className: w.rewardTileWrapper }, e), {
                                    children: [
                                        k &&
                                            (0, r.jsx)('div', {
                                                className: w.rewardTileExpired,
                                                children: (0, r.jsx)(a.P4T, { color: a.TVs.colors.WHITE })
                                            }),
                                        ei
                                            ? (0, r.jsx)(E.Z, {
                                                  questConfig: n.config,
                                                  fallback: ec,
                                                  isFocused: y
                                              })
                                            : ec
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(w.gridText, w.taskDetails),
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: I(o, c, G),
                                className: w.taskInstructions,
                                children: k ? P.intl.formatToPlainString(P.t['ge+AJi'], { questName: n.config.messages.questName }) : J
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'lg' === c ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: (function (e) {
                                    var t, n, r, s, o;
                                    let { quest: i, locale: l, isQuestExpired: a, sharedQuestFields: c, collectibleQuestRewardDescription: u, formattedCompletionDate: p } = e,
                                        h = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null,
                                        x = h && (null == (n = i.userStatus) ? void 0 : n.claimedAt) != null,
                                        g = (0, j.oo)({ quest: i }),
                                        C = c.defaultRewardNameWithArticle;
                                    if (x) {
                                        let e = g
                                                ? (0, j.o9)({
                                                      quest: i,
                                                      idx: null == (r = i.userStatus) ? void 0 : r.claimedTier
                                                  })
                                                : null,
                                            t = null != (s = null == e ? void 0 : e.messages.nameWithArticle) ? s : null;
                                        return null != t
                                            ? P.intl.formatToPlainString(P.t.RrxtPT, {
                                                  reward: t,
                                                  date: p
                                              })
                                            : P.intl.formatToPlainString(P.t.zNoqRU, {
                                                  reward: C,
                                                  date: p
                                              });
                                    }
                                    if (h)
                                        return g
                                            ? P.intl.formatToPlainString(P.t.l1jCMz, { date: p })
                                            : P.intl.formatToPlainString(P.t.zNoqRU, {
                                                  reward: C,
                                                  date: p
                                              });
                                    let f = g
                                        ? (0, j.o9)({
                                              quest: i,
                                              idx: 0
                                          })
                                        : null;
                                    return a
                                        ? P.intl.formatToPlainString(P.t.DT3aub, { reward: null != (o = null == f ? void 0 : f.messages.nameWithArticle) ? o : C })
                                        : null != f && null != f.approximateCount
                                          ? P.intl.format(P.t['4bMK19'], {
                                                maxReward: f.messages.nameWithArticle,
                                                maxRewardCount: (0, m.Bs)(f.approximateCount, l),
                                                helpCenterLink: d.Z.getArticleURL(S.BhN.QUESTS_LEARN_MORE)
                                            })
                                          : u;
                                })({
                                    quest: n,
                                    locale: es,
                                    isQuestExpired: k,
                                    sharedQuestFields: ee,
                                    collectibleQuestRewardDescription: en,
                                    formattedCompletionDate: U
                                })
                            })
                        ]
                    }),
                    er
                        ? (0, r.jsxs)('div', {
                              className: i()(w.ctaButtonContainer, w.gridCtaButtons),
                              children: [
                                  (0, r.jsx)(a.zxk, {
                                      color: a.Ttl.PRIMARY,
                                      disabled: !0,
                                      className: w.questEnrollmentBlockedButton,
                                      children: P.intl.string(P.t.V293qq)
                                  }),
                                  (0, r.jsx)(a.zxk, {
                                      color: a.Ttl.BRAND,
                                      onClick: () => (0, O.openQuestMinorEnrollmentBlockModal)(n, o, L),
                                      className: w.questEnrollmentBlockedButton,
                                      children: P.intl.string(P.t.vY9GgI)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: i()(w.ctaButtonContainer, w.gridCtaButtons),
                              children: [
                                  !X &&
                                      (0, r.jsx)(D, {
                                          containerSize: c,
                                          onClick: () => {
                                              ((0, O.navigateToQuestHome)({
                                                  fromContent: o,
                                                  questId: n.id
                                              }),
                                                  $({
                                                      questId: n.id,
                                                      questContent: o,
                                                      questContentPosition: Z,
                                                      questContentCTA: p.jZ.LEARN_MORE,
                                                      sourceQuestContent: L
                                                  }));
                                          },
                                          children: P.intl.string(P.t.LLLLPD)
                                      }),
                                  k && !W
                                      ? null
                                      : (0, r.jsx)(M, {
                                            quest: n,
                                            progressState: B,
                                            isCollectibleQuest: z,
                                            questContent: o,
                                            inGiftInventory: X,
                                            sourceQuestContent: L
                                        })
                              ]
                          }),
                    V &&
                        (0, r.jsx)(b.Z, {
                            className: w.gridProgressBar,
                            color: W ? a.TVs.colors.TEXT_FEEDBACK_POSITIVE : a.TVs.colors.BG_BRAND,
                            quest: n,
                            isInventory: X
                        })
                ]
            }),
            ea &&
                (0, r.jsxs)('div', {
                    className: w.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: w.separator }),
                        (0, r.jsx)(N.Z, {
                            quest: n,
                            location: o,
                            sourceQuestContent: L
                        })
                    ]
                })
        ]
    });
};
