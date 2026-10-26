n.d(t, { default: () => P });
var s = n(477900),
    r = n(582128),
    a = n(323889),
    i = n(17928),
    o = n(189213),
    l = n(862482),
    d = n(834730),
    u = n(297264),
    c = n(192308),
    C = n(416052),
    m = n(475743),
    p = n(765548),
    A = n(507395),
    x = n(144779),
    E = n(165508),
    R = n(46054),
    h = n(351906),
    f = n(287809),
    I = n(957565),
    g = n(240248),
    v = n(859703),
    w = n(738822),
    j = n(3738),
    N = n(77870),
    y = n(975807),
    _ = n(396813),
    q = n(590202),
    D = n(971649),
    L = n(801365),
    k = n(657792),
    T = n(62405),
    O = n(801870),
    S = n(586035),
    Q = n(190107),
    b = n(105292),
    M = n(50026);
function F(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: o, className: d, inputClassName: u } = e,
        c = (0, i.bG)([h.A], () => h.A.hidePersonalInformation),
        m = (0, D.wW)();
    return null == t
        ? null
        : (0, s.jsx)(C.A, {
              className: d,
              inputClassName: u,
              value: c ? b.intl.string(b.t["0n2u0k"]) : t.code,
              buttonColor: l.XD.PRIMARY,
              onCopy: () => {
                  (c && (0, I.C)(t.code),
                      (0, A.r)({
                          type: x.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: r,
                          questContentCTA: q.Cy.COPY_REWARD_CODE,
                          surfaceId: n,
                          sourceQuestContent: o,
                          impressionId: m(),
                      }));
              },
          });
}
function U(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: i,
            rewardCode: l,
            onClose: u,
            transitionState: c,
            impressionRef: C,
        } = e,
        m = (0, j.XR)({ quest: t, rewardCode: l }) ?? "",
        p = r.useMemo(() => {
            let e = (0, L.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, g.uJ)(e)) return null;
            let n = l?.code;
            return (0, g.uJ)(n) ? e : e.replace(Q.mg, encodeURIComponent(n));
        }, [t, l?.code]),
        E = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: o } = e,
                l = (0, D.wW)();
            return r.useCallback(() => {
                null != n &&
                    ((0, A.r)({
                        type: x.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: t.id,
                        questContentCTA: q.Cy.REDEEM_REWARD,
                        surfaceId: s,
                        sourceQuestContent: o,
                        impressionId: l(),
                        questContentPosition: i,
                    }),
                    (0, A.r)({
                        type: x.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: t.id,
                        questContentCTA: q.Cy.VISIT_REDEMPTION_LINK,
                        surfaceId: s,
                        sourceQuestContent: o,
                        impressionId: l(),
                        questContentPosition: i,
                    }),
                    (0, y.A)(n));
            }, [t.id, s, i, o, l, n]);
        })({ quest: t, questContent: n, redemptionLink: p, sourceQuestContent: i });
    return (0, s.jsx)("div", {
        ref: C,
        children: (0, s.jsx)(o.a, {
            size: "md",
            title: b.intl.string(b.t.NkZ7OU),
            actions: [
                null != p
                    ? { variant: "primary", text: b.intl.string(b.t["+zx47d"]), onClick: E }
                    : { variant: "primary", text: b.intl.string(b.t["/g10LC"]), onClick: u },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(d.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: M.V6,
                        children: b.intl.string(b.t.srzsU2),
                    }),
                    (0, s.jsx)(F, { rewardCode: l, questContent: n, questId: t.id, sourceQuestContent: i }),
                ],
            }),
            onClose: u,
            transitionState: c,
            children: (0, s.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: M.tG,
                children: R.A.parse(m, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function W(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: a, onClaimInstructions: i } = e;
    return (0, s.jsxs)("div", {
        className: M.hQ,
        children: [
            (0, s.jsx)("div", {
                className: M.tE,
                children: (0, s.jsx)(T.A, {
                    className: M.Ag,
                    quest: t,
                    location: Q.rE.REWARD_CODE_MODAL,
                    questContent: n,
                    sourceQuestContent: a,
                }),
            }),
            (0, s.jsxs)("div", {
                className: M.dD,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: M.R_,
                        children: b.intl.string(b.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: b.intl.format(b.t["ESmp2+"], { onClaimInstructions: i }),
                    }),
                ],
            }),
            (0, s.jsx)(F, {
                className: M.DA,
                rewardCode: r,
                questContent: n,
                questId: t.id,
                sourceQuestContent: a,
                inputClassName: M.Uy,
            }),
        ],
    });
}
function P(e) {
    let t,
        n,
        a,
        o,
        { initialQuest: l, onClose: d, transitionState: u, sourceQuestContent: C } = e,
        A = (0, N.C5)(l.id) ?? l,
        x = w.uF.REWARD_MODAL,
        R = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        {
            rewardCode: h,
            isFetchingRewardCode: I,
            isClaimingReward: g,
        } = (0, i.cf)([v.A], () => ({
            rewardCode: v.A.getRewardCode(A.id),
            isFetchingRewardCode: v.A.isFetchingRewardCode(A.id),
            isClaimingReward: v.A.isClaimingReward(A.id),
        })),
        { hasError: j, setHasError: y } = (function (e) {
            let {
                    isClaimingReward: t,
                    isFetchingRewardCode: n,
                    questContent: s,
                    quest: a,
                    rewardCode: i,
                    preview: o,
                } = e,
                [l, d] = r.useState(!1),
                [u, c] = r.useState(!1),
                C = r.useCallback(async (e, t, n) => {
                    try {
                        (c(!0), await (0, _.Oq)(e, t, n), d(!1), c(!1));
                    } catch (e) {
                        (d(!0), c(!1));
                    }
                }, []),
                m = r.useCallback((e) => {
                    try {
                        (0, _.jh)(e);
                    } catch (e) {
                        d(!0);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    !0 === o ||
                        null != i ||
                        l ||
                        t ||
                        u ||
                        n ||
                        (d(!1),
                        a.userStatus?.claimedAt == null
                            ? C(a.id, w.pY.CROSS_PLATFORM, s)
                            : a.userStatus?.claimedAt != null && m(a.id));
                }, [C, m, l, t, u, n, s, a, i, o]),
                { claimCode: C, fetchCode: m, hasError: l, setHasError: d }
            );
        })({ isClaimingReward: g, isFetchingRewardCode: I, quest: A, questContent: x, rewardCode: h });
    ((t = (0, p.A)(() => {
        y(!0);
    })),
        (n = E.default.useIsCaptchaModalOpen()),
        (a = (0, m.Ay)(n)),
        (o = !!(!n && a)),
        r.useEffect(() => {
            o && t();
        }, [o, t]));
    let q = null == h && (I || g),
        D = j && !g && !I;
    return (0, s.jsx)(S.A, {
        onClose: d,
        transitionState: u,
        quest: A,
        sourceQuestContent: C,
        location: Q.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: D,
        rewardContent: D
            ? null
            : (0, s.jsx)(O.A, {
                  rewardName: (0, L.mq)(A.config, R),
                  children: (0, s.jsx)(W, {
                      quest: A,
                      questContent: x,
                      rewardCode: h,
                      sourceQuestContent: C,
                      onClaimInstructions: () => {
                          (0, c.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(k.R, {
                                          questOrQuests: A,
                                          questContent: x,
                                          sourceQuestContent: C,
                                          children: (t) =>
                                              (0, s.jsx)(U, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: A,
                                                  questContent: x,
                                                  sourceQuestContent: C,
                                                  rewardCode: h,
                                              }),
                                      }),
                                  ),
                              { stackingBehavior: "replace" },
                          );
                      },
                  }),
              }),
    });
}
