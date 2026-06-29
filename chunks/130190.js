n.d(t, { default: () => z });
var s = n(627968),
    r = n(64700),
    a = n(323889),
    i = n(189213),
    o = n(17928),
    d = n(862482),
    u = n(834730),
    l = n(534514),
    C = n(192308),
    c = n(416052),
    E = n(475743),
    m = n(765548),
    A = n(274670),
    p = n(144779),
    R = n(165508),
    _ = n(46054),
    I = n(351906),
    x = n(287809),
    h = n(957565),
    q = n(240248),
    N = n(859703),
    f = n(24001),
    g = n(104886),
    T = n(3738),
    y = n(347135),
    v = n(975807),
    w = n(340124),
    j = n(18437),
    D = n(590202),
    L = n(971649),
    k = n(801365),
    S = n(73473),
    O = n(646764),
    M = n(801870),
    Q = n(586035),
    b = n(190107),
    P = n(375708),
    U = n(75193);
function F(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: i, className: u, inputClassName: l } = e,
        C = (0, o.bG)([I.A], () => I.A.hidePersonalInformation),
        E = (0, j.Ut)(),
        m = (0, L.go)();
    return null == t
        ? null
        : (0, s.jsx)(c.A, {
              className: u,
              inputClassName: l,
              value: C ? P.intl.string(P.t["0n2u0k"]) : t.code,
              buttonColor: d.XD.PRIMARY,
              onCopy: () => {
                  C && (0, h.C)(t.code),
                      (0, g.E5)(g.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_code_copy_input")
                          ? (0, A.r)({
                                type: p.F.CLICK_INTERNAL,
                                adCreativeType: a.p.QUEST,
                                adCreativeId: r,
                                questContentCTA: D.Cy.COPY_REWARD_CODE,
                                surfaceId: n,
                                sourceQuestContent: i,
                                impressionId: m,
                            })
                          : E({
                                questId: r,
                                questContent: n,
                                questContentCTA: D.Cy.COPY_REWARD_CODE,
                                sourceQuestContent: i,
                            });
              },
          });
}
function K(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: o,
            rewardCode: d,
            onClose: l,
            transitionState: C,
            impressionRef: c,
        } = e,
        E = (0, T.XR)({ quest: t, rewardCode: d }) ?? "",
        m = r.useMemo(() => {
            let e = (0, k.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, q.uJ)(e)) return null;
            let n = d?.code;
            return (0, q.uJ)(n) ? e : e.replace(b.mg, encodeURIComponent(n));
        }, [t, d?.code]),
        R = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: o } = e,
                d = (0, j.Ut)(),
                u = (0, L.go)();
            return r.useCallback(() => {
                null != n &&
                    ((0, g.E5)(g.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")
                        ? ((0, A.r)({
                              type: p.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: D.Cy.REDEEM_REWARD,
                              surfaceId: s,
                              sourceQuestContent: o,
                              impressionId: u,
                              questContentPosition: i,
                          }),
                          (0, A.r)({
                              type: p.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: D.Cy.VISIT_REDEMPTION_LINK,
                              surfaceId: s,
                              sourceQuestContent: o,
                              impressionId: u,
                              questContentPosition: i,
                          }))
                        : (d({
                              questId: t.id,
                              questContent: s,
                              questContentCTA: D.Cy.REDEEM_REWARD,
                              questContentPosition: i,
                              sourceQuestContent: o,
                          }),
                          d({
                              questId: t.id,
                              questContent: s,
                              questContentCTA: D.Cy.VISIT_REDEMPTION_LINK,
                              questContentPosition: i,
                              sourceQuestContent: o,
                          })),
                    (0, v.A)(n));
            }, [t.id, s, i, o, d, u, n]);
        })({ quest: t, questContent: n, redemptionLink: m, sourceQuestContent: o });
    return (0, s.jsx)("div", {
        ref: c,
        children: (0, s.jsx)(i.Modal, {
            size: "md",
            title: P.intl.string(P.t.NkZ7OU),
            actions: [
                null != m
                    ? { variant: "primary", text: P.intl.string(P.t["+zx47d"]), onClick: R }
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
                    (0, s.jsx)(F, { rewardCode: d, questContent: n, questId: t.id, sourceQuestContent: o }),
                ],
            }),
            onClose: l,
            transitionState: C,
            children: (0, s.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: U.tG,
                children: _.A.parse(E, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function W(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: a, onClaimInstructions: i } = e;
    return (0, s.jsxs)("div", {
        className: U.hQ,
        children: [
            (0, s.jsx)("div", {
                className: U.tE,
                children: (0, s.jsx)(O.A, { className: U.Ag, quest: t, questContent: n, sourceQuestContent: a }),
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
            (0, s.jsx)(F, {
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
        i,
        { initialQuest: d, onClose: u, transitionState: l, sourceQuestContent: c } = e,
        A = (0, y.C5)(d.id) ?? d,
        p = f.uF.REWARD_MODAL,
        _ = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        {
            rewardCode: I,
            isFetchingRewardCode: h,
            isClaimingReward: q,
        } = (0, o.cf)([N.A], () => ({
            rewardCode: N.A.getRewardCode(A.id),
            isFetchingRewardCode: N.A.isFetchingRewardCode(A.id),
            isClaimingReward: N.A.isClaimingReward(A.id),
        })),
        { hasError: g, setHasError: T } = (function (e) {
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
                        C(!0), await (0, w.Oq)(e, t, n), u(!1), C(!1);
                    } catch (e) {
                        u(!0), C(!1);
                    }
                }, []),
                E = r.useCallback((e) => {
                    try {
                        (0, w.jh)(e);
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
        })({ isClaimingReward: q, isFetchingRewardCode: h, quest: A, questContent: p, rewardCode: I });
    (t = (0, m.A)(() => {
        T(!0);
    })),
        (n = R.default.useIsCaptchaModalOpen()),
        (a = (0, E.A)(n)),
        (i = !!(!n && a)),
        r.useEffect(() => {
            i && t();
        }, [i, t]);
    let v = null == I && (h || q),
        j = g && !q && !h;
    return (0, s.jsx)(Q.A, {
        onClose: u,
        transitionState: l,
        quest: A,
        sourceQuestContent: c,
        location: b.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: v,
        rewardContentHasError: j,
        rewardContent: j
            ? null
            : (0, s.jsx)(M.A, {
                  rewardName: (0, k.mq)(A.config, _),
                  children: (0, s.jsx)(W, {
                      quest: A,
                      questContent: p,
                      rewardCode: I,
                      sourceQuestContent: c,
                      onClaimInstructions: () => {
                          (0, C.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(S.R, {
                                          questOrQuests: A,
                                          questContent: p,
                                          sourceQuestContent: c,
                                          children: (t) =>
                                              (0, s.jsx)(K, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: A,
                                                  questContent: p,
                                                  sourceQuestContent: c,
                                                  rewardCode: I,
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
