n.d(t, { Z: () => B });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    f = n(63063),
    _ = n(930153),
    p = n(617136),
    h = n(509212),
    m = n(113434),
    g = n(569984),
    E = n(497505),
    b = n(373370),
    y = n(566078),
    O = n(340100),
    v = n(644646),
    I = n(110560),
    T = n(667105),
    S = n(128535),
    A = n(87894),
    N = n(2660),
    C = n(46140),
    w = n(981631),
    R = n(388032),
    P = n(717735);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
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
                D(e, t, n[t]);
            }));
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (e, t, n) => ((0, A.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function M(e) {
    let { containerSize: t, onClick: n, children: i, tabIndex: a } = e;
    return 'xs' === t
        ? (0, r.jsx)(c.P3F, {
              tabIndex: a,
              className: P.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(c.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: i
              })
          })
        : (0, r.jsx)(l.zx, {
              tabIndex: a,
              wrapperClassName: P.ctaButtonWrapper,
              color: l.Tt.PRIMARY,
              onClick: n,
              children: i
          });
}
function U(e) {
    var t, n, r, i, a;
    let { quest: o, locale: s, isQuestExpired: l, sharedQuestFields: c, collectibleQuestRewardDescription: u, formattedCompletionDate: d } = e,
        p = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
        m = p && (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null,
        g = (0, h.oo)({ quest: o }),
        E = c.defaultRewardNameWithArticle;
    if (m) {
        let e = g
                ? (0, h.o9)({
                      quest: o,
                      idx: null == (r = o.userStatus) ? void 0 : r.claimedTier
                  })
                : null,
            t = null != (i = null == e ? void 0 : e.messages.nameWithArticle) ? i : null;
        return null != t
            ? R.intl.formatToPlainString(R.t.RrxtPT, {
                  reward: t,
                  date: d
              })
            : R.intl.formatToPlainString(R.t.zNoqRU, {
                  reward: E,
                  date: d
              });
    }
    if (p)
        return g
            ? R.intl.formatToPlainString(R.t.l1jCMz, { date: d })
            : R.intl.formatToPlainString(R.t.zNoqRU, {
                  reward: E,
                  date: d
              });
    let b = g
        ? (0, h.o9)({
              quest: o,
              idx: 0
          })
        : null;
    return l
        ? R.intl.formatToPlainString(R.t.DT3aub, { reward: null != (a = null == b ? void 0 : b.messages.nameWithArticle) ? a : E })
        : null != b && null != b.approximateCount
          ? R.intl.format(R.t['4bMK19'], {
                maxReward: b.messages.nameWithArticle,
                maxRewardCount: (0, _.Bs)(b.approximateCount, s),
                helpCenterLink: f.Z.getArticleURL(w.BhN.QUESTS_LEARN_MORE)
            })
          : u;
}
function G(e) {
    let { quest: t, progressState: n, isCollectibleQuest: i, questContent: a, questContentPosition: o, inGiftInventory: d, sourceQuestContent: f } = e,
        _ = n >= m.OH.COMPLETED,
        p = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        E = (0, s.e7)([g.Z], () => g.Z.isEnrolling(t.id)),
        b = (0, h.q8)(t),
        y = (0, h.Vl)(t),
        O = (0, T.Ks)({
            progressState: n,
            quest: t,
            questContent: a,
            isCollectibleQuest: i,
            questContentPosition: o,
            inGiftInventory: d,
            isVideoQuest: b,
            inGameQuest: y,
            sourceQuestContent: f
        }),
        v = _ && !p ? c.gtL : l.zx;
    return (0, r.jsx)(
        c.ua7,
        {
            text: O.tooltipText,
            tooltipContentClassName: P.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(
                    v,
                    k(L({}, e), {
                        wrapperClassName: P.ctaButtonWrapper,
                        color: l.Tt.BRAND,
                        disabled: null == O.onClick,
                        submitting: E,
                        onClick: null != (t = O.onClick) ? t : () => {},
                        children: (0, r.jsx)('div', {
                            className: P.ctaButtonInner,
                            children: O.text
                        })
                    })
                );
            }
        },
        O.tooltipText
    );
}
let B = (e) => {
    var t;
    let { quest: n, location: a, size: u, isFocused: f, isQuestExpired: _, isExpanded: T, isAnimating: w, contentPosition: D, sourceQuestContent: x } = e,
        B = (0, m._Q)(n),
        Z = (0, m.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        F = B >= m.OH.ACCEPTED,
        V = B >= m.OH.COMPLETED,
        H = B >= m.OH.CLAIMED,
        Y = (0, h.Xv)(n.config),
        W = (0, A.uq)(a),
        K = a === E.jn.QUESTS_EMBED,
        z = T || w,
        q = F && !H && W,
        $ = (0, m.t5)(n, C.dr.QUESTS_CARD, a, x),
        { xboxAndPlaystationAccounts: X } = (0, m.z6)(),
        Q = (0, p.O5)(),
        J = i.useMemo(() => y.r.build(n.config), [n.config]),
        ee = (0, m.Rf)(n),
        et = (0, b.DD)({
            quest: n,
            taskDetails: ee,
            location: C.dr.QUESTS_CARD,
            questContent: E.jn.QUESTS_EMBED,
            sourceQuestContent: x
        }),
        en = (0, s.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []),
        er = () => {
            ((0, I.navigateToQuestHome)({
                fromContent: a,
                questId: n.id
            }),
                Q({
                    questId: n.id,
                    questContent: a,
                    questContentPosition: D,
                    questContentCTA: p.jZ.LEARN_MORE,
                    sourceQuestContent: x
                }));
        },
        ei = (0, s.e7)([d.default], () => d.default.locale),
        ea = (0, m.z)(n),
        eo = W && Y,
        es = _ && !V,
        el = X.length > 0 && W && (0, h.$J)(n) && F && !V && !ea,
        ec = (0, r.jsx)(v.Z, {
            autoplay: f,
            className: o()(P.gridImg, {
                [P.questRewardGiftInventory]: W && 'lg' === u,
                [P.questRewardEmbed]: K && 'lg' === u,
                [P.questRewardEmbedSm]: 'sm' === u,
                [P.questRewardEmbedXs]: 'xs' === u
            }),
            learnMoreStyle: W ? null : 'text',
            location: C.dr.QUESTS_CARD,
            quest: n,
            questContent: a,
            questContentPosition: D,
            sourceQuestContent: x
        }),
        eu = () =>
            _ && !V
                ? null
                : (0, r.jsx)(G, {
                      quest: n,
                      progressState: B,
                      isCollectibleQuest: Y,
                      questContent: a,
                      inGiftInventory: W,
                      sourceQuestContent: x
                  });
    return (0, r.jsxs)('div', {
        className: P.root,
        children: [
            (0, r.jsxs)('div', {
                className: o()(P.outerContainer, {
                    [P.outerContainerSm]: 'sm' === u,
                    [P.outerContainerXs]: 'xs' === u,
                    [P.outerContainerNoProgress]: !q
                }),
                style: { visibility: z ? 'inherit' : 'hidden' },
                'aria-hidden': !z,
                children: [
                    (0, r.jsx)(c.ua7, {
                        text: es ? R.intl.string(R.t['04MTGR']) : null,
                        tooltipContentClassName: P.rewardTileExpirationTooltip,
                        shouldShow: es,
                        children: (e) =>
                            (0, r.jsxs)(
                                'div',
                                k(L({ className: P.rewardTileWrapper }, e), {
                                    children: [
                                        _ &&
                                            (0, r.jsx)('div', {
                                                className: P.rewardTileExpired,
                                                children: (0, r.jsx)(c.Mgn, { color: c.TVs.colors.WHITE })
                                            }),
                                        eo
                                            ? (0, r.jsx)(N.Z, {
                                                  questConfig: n.config,
                                                  fallback: ec,
                                                  isFocused: f
                                              })
                                            : ec
                                    ]
                                })
                            )
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(P.gridText, P.taskDetails),
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: j(a, u, F),
                                className: P.taskInstructions,
                                children: _ ? R.intl.formatToPlainString(R.t['ge+AJi'], { questName: n.config.messages.questName }) : $
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'lg' === u ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: U({
                                    quest: n,
                                    locale: ei,
                                    isQuestExpired: _,
                                    sharedQuestFields: J,
                                    collectibleQuestRewardDescription: et,
                                    formattedCompletionDate: Z
                                })
                            })
                        ]
                    }),
                    en
                        ? (0, r.jsxs)('div', {
                              className: o()(P.ctaButtonContainer, P.gridCtaButtons),
                              children: [
                                  (0, r.jsx)(l.zx, {
                                      color: l.Tt.PRIMARY,
                                      disabled: !0,
                                      className: P.questEnrollmentBlockedButton,
                                      children: R.intl.string(R.t.V293qq)
                                  }),
                                  (0, r.jsx)(l.zx, {
                                      color: l.Tt.BRAND,
                                      onClick: () => (0, I.openQuestMinorEnrollmentBlockModal)(n, a, x),
                                      className: P.questEnrollmentBlockedButton,
                                      children: R.intl.string(R.t.vY9GgI)
                                  })
                              ]
                          })
                        : (0, r.jsxs)('div', {
                              className: o()(P.ctaButtonContainer, P.gridCtaButtons),
                              children: [
                                  !W &&
                                      (0, r.jsx)(M, {
                                          containerSize: u,
                                          onClick: er,
                                          children: R.intl.string(R.t.LLLLPD)
                                      }),
                                  eu()
                              ]
                          }),
                    q &&
                        (0, r.jsx)(O.Z, {
                            className: P.gridProgressBar,
                            color: V ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : c.TVs.colors.BG_BRAND,
                            quest: n,
                            isInventory: W
                        })
                ]
            }),
            el &&
                (0, r.jsxs)('div', {
                    className: P.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: P.separator }),
                        (0, r.jsx)(S.Z, {
                            quest: n,
                            location: a,
                            sourceQuestContent: x
                        })
                    ]
                })
        ]
    });
};
