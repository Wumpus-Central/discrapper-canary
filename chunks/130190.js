n.d(t, { default: () => z });
var s = n(477900),
    r = n(582128),
    a = n(323889),
    i = n(17928),
    o = n(189213),
    d = n(862482),
    l = n(834730),
    u = n(297264),
    c = n(192308),
    C = n(416052),
    m = n(475743),
    p = n(765548),
    A = n(274670),
    E = n(144779),
    R = n(165508),
    x = n(46054),
    I = n(351906),
    h = n(287809),
    _ = n(957565),
    f = n(240248),
    w = n(859703),
    N = n(738822),
    g = n(104886),
    v = n(3738),
    y = n(77870),
    j = n(975807),
    q = n(396813),
    D = n(590202),
    L = n(971649),
    T = n(18437),
    k = n(801365),
    O = n(657792),
    S = n(62405),
    Q = n(801870),
    b = n(586035),
    M = n(190107),
    U = n(105292),
    F = n(50026);
function P(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: o, className: l, inputClassName: u } = e,
        c = (0, i.bG)([I.A], () => I.A.hidePersonalInformation),
        m = (0, T.Ut)(),
        p = (0, L.wW)();
    return null == t
        ? null
        : (0, s.jsx)(C.A, {
              className: l,
              inputClassName: u,
              value: c ? U.intl.string(U.t["0n2u0k"]) : t.code,
              buttonColor: d.XD.PRIMARY,
              onCopy: () => {
                  (c && (0, _.C)(t.code),
                      (0, g.E5)(g.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_code_copy_input")
                          ? (0, A.r)({
                                type: E.F.CLICK_INTERNAL,
                                adCreativeType: a.p.QUEST,
                                adCreativeId: r,
                                questContentCTA: D.Cy.COPY_REWARD_CODE,
                                surfaceId: n,
                                sourceQuestContent: o,
                                impressionId: p(),
                            })
                          : m({
                                questId: r,
                                questContent: n,
                                questContentCTA: D.Cy.COPY_REWARD_CODE,
                                sourceQuestContent: o,
                            }));
              },
          });
}
function W(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: i,
            rewardCode: d,
            onClose: u,
            transitionState: c,
            impressionRef: C,
        } = e,
        m = (0, v.XR)({ quest: t, rewardCode: d }) ?? "",
        p = r.useMemo(() => {
            let e = (0, k.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, f.uJ)(e)) return null;
            let n = d?.code;
            return (0, f.uJ)(n) ? e : e.replace(M.mg, encodeURIComponent(n));
        }, [t, d?.code]),
        R = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: o } = e,
                d = (0, L.wW)();
            return r.useCallback(() => {
                null != n &&
                    ((0, A.r)({
                        type: E.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: t.id,
                        questContentCTA: D.Cy.REDEEM_REWARD,
                        surfaceId: s,
                        sourceQuestContent: o,
                        impressionId: d(),
                        questContentPosition: i,
                    }),
                    (0, A.r)({
                        type: E.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: t.id,
                        questContentCTA: D.Cy.VISIT_REDEMPTION_LINK,
                        surfaceId: s,
                        sourceQuestContent: o,
                        impressionId: d(),
                        questContentPosition: i,
                    }),
                    (0, j.A)(n));
            }, [t.id, s, i, o, d, n]);
        })({ quest: t, questContent: n, redemptionLink: p, sourceQuestContent: i });
    return (0, s.jsx)("div", {
        ref: C,
        children: (0, s.jsx)(o.a, {
            size: "md",
            title: U.intl.string(U.t.NkZ7OU),
            actions: [
                null != p
                    ? { variant: "primary", text: U.intl.string(U.t["+zx47d"]), onClick: R }
                    : { variant: "primary", text: U.intl.string(U.t["/g10LC"]), onClick: u },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(l.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: F.V6,
                        children: U.intl.string(U.t.srzsU2),
                    }),
                    (0, s.jsx)(P, { rewardCode: d, questContent: n, questId: t.id, sourceQuestContent: i }),
                ],
            }),
            onClose: u,
            transitionState: c,
            children: (0, s.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: F.tG,
                children: x.A.parse(m, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function K(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: a, onClaimInstructions: i } = e;
    return (0, s.jsxs)("div", {
        className: F.hQ,
        children: [
            (0, s.jsx)("div", {
                className: F.tE,
                children: (0, s.jsx)(S.A, {
                    className: F.Ag,
                    quest: t,
                    location: M.rE.REWARD_CODE_MODAL,
                    questContent: n,
                    sourceQuestContent: a,
                }),
            }),
            (0, s.jsxs)("div", {
                className: F.dD,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: F.R_,
                        children: U.intl.string(U.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(l.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: U.intl.format(U.t["ESmp2+"], { onClaimInstructions: i }),
                    }),
                ],
            }),
            (0, s.jsx)(P, {
                className: F.DA,
                rewardCode: r,
                questContent: n,
                questId: t.id,
                sourceQuestContent: a,
                inputClassName: F.Uy,
            }),
        ],
    });
}
function z(e) {
    let t,
        n,
        a,
        o,
        { initialQuest: d, onClose: l, transitionState: u, sourceQuestContent: C } = e,
        A = (0, y.C5)(d.id) ?? d,
        E = N.uF.REWARD_MODAL,
        x = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        {
            rewardCode: I,
            isFetchingRewardCode: _,
            isClaimingReward: f,
        } = (0, i.cf)([w.A], () => ({
            rewardCode: w.A.getRewardCode(A.id),
            isFetchingRewardCode: w.A.isFetchingRewardCode(A.id),
            isClaimingReward: w.A.isClaimingReward(A.id),
        })),
        { hasError: g, setHasError: v } = (function (e) {
            let {
                    isClaimingReward: t,
                    isFetchingRewardCode: n,
                    questContent: s,
                    quest: a,
                    rewardCode: i,
                    preview: o,
                } = e,
                [d, l] = r.useState(!1),
                [u, c] = r.useState(!1),
                C = r.useCallback(async (e, t, n) => {
                    try {
                        (c(!0), await (0, q.Oq)(e, t, n), l(!1), c(!1));
                    } catch (e) {
                        (l(!0), c(!1));
                    }
                }, []),
                m = r.useCallback((e) => {
                    try {
                        (0, q.jh)(e);
                    } catch (e) {
                        l(!0);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    !0 === o ||
                        null != i ||
                        d ||
                        t ||
                        u ||
                        n ||
                        (l(!1),
                        a.userStatus?.claimedAt == null
                            ? C(a.id, N.pY.CROSS_PLATFORM, s)
                            : a.userStatus?.claimedAt != null && m(a.id));
                }, [C, m, d, t, u, n, s, a, i, o]),
                { claimCode: C, fetchCode: m, hasError: d, setHasError: l }
            );
        })({ isClaimingReward: f, isFetchingRewardCode: _, quest: A, questContent: E, rewardCode: I });
    ((t = (0, p.A)(() => {
        v(!0);
    })),
        (n = R.default.useIsCaptchaModalOpen()),
        (a = (0, m.Ay)(n)),
        (o = !!(!n && a)),
        r.useEffect(() => {
            o && t();
        }, [o, t]));
    let j = null == I && (_ || f),
        D = g && !f && !_;
    return (0, s.jsx)(b.A, {
        onClose: l,
        transitionState: u,
        quest: A,
        sourceQuestContent: C,
        location: M.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: j,
        rewardContentHasError: D,
        rewardContent: D
            ? null
            : (0, s.jsx)(Q.A, {
                  rewardName: (0, k.mq)(A.config, x),
                  children: (0, s.jsx)(K, {
                      quest: A,
                      questContent: E,
                      rewardCode: I,
                      sourceQuestContent: C,
                      onClaimInstructions: () => {
                          (0, c.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(O.R, {
                                          questOrQuests: A,
                                          questContent: E,
                                          sourceQuestContent: C,
                                          children: (t) =>
                                              (0, s.jsx)(W, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: A,
                                                  questContent: E,
                                                  sourceQuestContent: C,
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
