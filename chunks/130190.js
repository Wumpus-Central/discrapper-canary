n.d(t, { default: () => z });
var s = n(477900),
    r = n(582128),
    a = n(323889),
    i = n(17928),
    o = n(189213),
    d = n(862482),
    u = n(834730),
    l = n(297264),
    C = n(192308),
    c = n(416052),
    E = n(475743),
    m = n(765548),
    A = n(274670),
    p = n(144779),
    I = n(165508),
    R = n(46054),
    _ = n(351906),
    x = n(287809),
    h = n(957565),
    q = n(240248),
    N = n(859703),
    f = n(738822),
    w = n(104886),
    y = n(3738),
    D = n(866157),
    T = n(975807),
    g = n(396813),
    v = n(18437),
    L = n(590202),
    j = n(971649),
    k = n(801365),
    O = n(657792),
    S = n(62405),
    M = n(801870),
    Q = n(586035),
    b = n(190107),
    P = n(375708),
    U = n(50026);
function W(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: o, className: u, inputClassName: l } = e,
        C = (0, i.bG)([_.A], () => _.A.hidePersonalInformation),
        E = (0, v.Ut)(),
        m = (0, j.wW)();
    return null == t
        ? null
        : (0, s.jsx)(c.A, {
              className: u,
              inputClassName: l,
              value: C ? P.intl.string(P.t["0n2u0k"]) : t.code,
              buttonColor: d.XD.PRIMARY,
              onCopy: () => {
                  (C && (0, h.C)(t.code),
                      (0, w.E5)(w.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_code_copy_input")
                          ? (0, A.r)({
                                type: p.F.CLICK_INTERNAL,
                                adCreativeType: a.p.QUEST,
                                adCreativeId: r,
                                questContentCTA: L.Cy.COPY_REWARD_CODE,
                                surfaceId: n,
                                sourceQuestContent: o,
                                impressionId: m(),
                            })
                          : E({
                                questId: r,
                                questContent: n,
                                questContentCTA: L.Cy.COPY_REWARD_CODE,
                                sourceQuestContent: o,
                            }));
              },
          });
}
function F(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: i,
            rewardCode: d,
            onClose: l,
            transitionState: C,
            impressionRef: c,
        } = e,
        E = (0, y.XR)({ quest: t, rewardCode: d }) ?? "",
        m = r.useMemo(() => {
            let e = (0, k.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, q.uJ)(e)) return null;
            let n = d?.code;
            return (0, q.uJ)(n) ? e : e.replace(b.mg, encodeURIComponent(n));
        }, [t, d?.code]),
        I = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: o } = e,
                d = (0, v.Ut)(),
                u = (0, j.wW)();
            return r.useCallback(() => {
                null != n &&
                    ((0, w.E5)(w.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")
                        ? ((0, A.r)({
                              type: p.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: L.Cy.REDEEM_REWARD,
                              surfaceId: s,
                              sourceQuestContent: o,
                              impressionId: u(),
                              questContentPosition: i,
                          }),
                          (0, A.r)({
                              type: p.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: L.Cy.VISIT_REDEMPTION_LINK,
                              surfaceId: s,
                              sourceQuestContent: o,
                              impressionId: u(),
                              questContentPosition: i,
                          }))
                        : (d({
                              questId: t.id,
                              questContent: s,
                              questContentCTA: L.Cy.REDEEM_REWARD,
                              questContentPosition: i,
                              sourceQuestContent: o,
                          }),
                          d({
                              questId: t.id,
                              questContent: s,
                              questContentCTA: L.Cy.VISIT_REDEMPTION_LINK,
                              questContentPosition: i,
                              sourceQuestContent: o,
                          })),
                    (0, T.A)(n));
            }, [t.id, s, i, o, d, u, n]);
        })({ quest: t, questContent: n, redemptionLink: m, sourceQuestContent: i });
    return (0, s.jsx)("div", {
        ref: c,
        children: (0, s.jsx)(o.a, {
            size: "md",
            title: P.intl.string(P.t.NkZ7OU),
            actions: [
                null != m
                    ? { variant: "primary", text: P.intl.string(P.t["+zx47d"]), onClick: I }
                    : { variant: "primary", text: P.intl.string(P.t["/g10LC"]), onClick: l },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(u.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: U.V6,
                        children: P.intl.string(P.t.srzsU2),
                    }),
                    (0, s.jsx)(W, { rewardCode: d, questContent: n, questId: t.id, sourceQuestContent: i }),
                ],
            }),
            onClose: l,
            transitionState: C,
            children: (0, s.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: U.tG,
                children: R.A.parse(E, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function K(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: a, onClaimInstructions: i } = e;
    return (0, s.jsxs)("div", {
        className: U.hQ,
        children: [
            (0, s.jsx)("div", {
                className: U.tE,
                children: (0, s.jsx)(S.A, {
                    className: U.Ag,
                    quest: t,
                    location: b.rE.REWARD_CODE_MODAL,
                    questContent: n,
                    sourceQuestContent: a,
                }),
            }),
            (0, s.jsxs)("div", {
                className: U.dD,
                children: [
                    (0, s.jsx)(l.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: U.R_,
                        children: P.intl.string(P.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: P.intl.format(P.t["ESmp2+"], { onClaimInstructions: i }),
                    }),
                ],
            }),
            (0, s.jsx)(W, {
                className: U.DA,
                rewardCode: r,
                questContent: n,
                questId: t.id,
                sourceQuestContent: a,
                inputClassName: U.Uy,
            }),
        ],
    });
}
function z(e) {
    let t,
        n,
        a,
        o,
        { initialQuest: d, onClose: u, transitionState: l, sourceQuestContent: c } = e,
        A = (0, D.C5)(d.id) ?? d,
        p = f.uF.REWARD_MODAL,
        R = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        {
            rewardCode: _,
            isFetchingRewardCode: h,
            isClaimingReward: q,
        } = (0, i.cf)([N.A], () => ({
            rewardCode: N.A.getRewardCode(A.id),
            isFetchingRewardCode: N.A.isFetchingRewardCode(A.id),
            isClaimingReward: N.A.isClaimingReward(A.id),
        })),
        { hasError: w, setHasError: y } = (function (e) {
            let {
                    isClaimingReward: t,
                    isFetchingRewardCode: n,
                    questContent: s,
                    quest: a,
                    rewardCode: i,
                    preview: o,
                } = e,
                [d, u] = r.useState(!1),
                [l, C] = r.useState(!1),
                c = r.useCallback(async (e, t, n) => {
                    try {
                        (C(!0), await (0, g.Oq)(e, t, n), u(!1), C(!1));
                    } catch (e) {
                        (u(!0), C(!1));
                    }
                }, []),
                E = r.useCallback((e) => {
                    try {
                        (0, g.jh)(e);
                    } catch (e) {
                        u(!0);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    !0 === o ||
                        null != i ||
                        d ||
                        t ||
                        l ||
                        n ||
                        (u(!1),
                        a.userStatus?.claimedAt == null
                            ? c(a.id, f.pY.CROSS_PLATFORM, s)
                            : a.userStatus?.claimedAt != null && E(a.id));
                }, [c, E, d, t, l, n, s, a, i, o]),
                { claimCode: c, fetchCode: E, hasError: d, setHasError: u }
            );
        })({ isClaimingReward: q, isFetchingRewardCode: h, quest: A, questContent: p, rewardCode: _ });
    ((t = (0, m.A)(() => {
        y(!0);
    })),
        (n = I.default.useIsCaptchaModalOpen()),
        (a = (0, E.Ay)(n)),
        (o = !!(!n && a)),
        r.useEffect(() => {
            o && t();
        }, [o, t]));
    let T = null == _ && (h || q),
        v = w && !q && !h;
    return (0, s.jsx)(Q.A, {
        onClose: u,
        transitionState: l,
        quest: A,
        sourceQuestContent: c,
        location: b.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: T,
        rewardContentHasError: v,
        rewardContent: v
            ? null
            : (0, s.jsx)(M.A, {
                  rewardName: (0, k.mq)(A.config, R),
                  children: (0, s.jsx)(K, {
                      quest: A,
                      questContent: p,
                      rewardCode: _,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, C.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(O.R, {
                                          questOrQuests: A,
                                          questContent: p,
                                          sourceQuestContent: c,
                                          children: (t) =>
                                              (0, s.jsx)(F, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: A,
                                                  questContent: p,
                                                  sourceQuestContent: c,
                                                  rewardCode: _,
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
