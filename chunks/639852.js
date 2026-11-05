n.d(t, { default: () => P });
var s = n(477900),
    r = n(582128),
    a = n(323889),
    i = n(855986),
    o = n(189213),
    d = n(862482),
    l = n(834730),
    u = n(534514),
    c = n(192308),
    C = n(416052),
    m = n(475743),
    p = n(765548),
    A = n(438457),
    E = n(144779),
    R = n(165508),
    h = n(46054),
    x = n(351906),
    f = n(287809),
    I = n(957565),
    g = n(240248),
    v = n(859703),
    j = n(506988),
    w = n(870273),
    y = n(61387),
    N = n(975807),
    _ = n(343559),
    q = n(590202),
    D = n(971649),
    L = n(417404),
    k = n(280905),
    T = n(639701),
    O = n(280249),
    b = n(670092),
    S = n(221596),
    Q = n(792996),
    M = n(50026);
function F(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: o, className: l, inputClassName: u } = e,
        c = (0, i.bG)([x.A], () => x.A.hidePersonalInformation),
        m = (0, D.wW)();
    return null == t
        ? null
        : (0, s.jsx)(C.A, {
              className: l,
              inputClassName: u,
              value: c ? Q.intl.string(Q.t["0n2u0k"]) : t.code,
              buttonColor: d.XD.PRIMARY,
              onCopy: () => {
                  (c && (0, I.C)(t.code),
                      (0, A.r)({
                          type: E.F.CLICK_INTERNAL,
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
            rewardCode: d,
            onClose: u,
            transitionState: c,
            impressionRef: C,
        } = e,
        m = (0, w.XR)({ quest: t, rewardCode: d }) ?? "",
        p = r.useMemo(() => {
            let e = (0, L.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, g.uJ)(e)) return null;
            let n = d?.code;
            return (0, g.uJ)(n) ? e : e.replace(S.mg, encodeURIComponent(n));
        }, [t, d?.code]),
        R = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: o } = e,
                d = (0, D.wW)();
            return r.useCallback(() => {
                null != n &&
                    ((0, A.r)({
                        type: E.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: t.id,
                        questContentCTA: q.Cy.REDEEM_REWARD,
                        surfaceId: s,
                        sourceQuestContent: o,
                        impressionId: d(),
                        questContentPosition: i,
                    }),
                    (0, A.r)({
                        type: E.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: t.id,
                        questContentCTA: q.Cy.VISIT_REDEMPTION_LINK,
                        surfaceId: s,
                        sourceQuestContent: o,
                        impressionId: d(),
                        questContentPosition: i,
                    }),
                    (0, N.A)(n));
            }, [t.id, s, i, o, d, n]);
        })({ quest: t, questContent: n, redemptionLink: p, sourceQuestContent: i });
    return (0, s.jsx)("div", {
        ref: C,
        children: (0, s.jsx)(o.a, {
            size: "md",
            title: Q.intl.string(Q.t.NkZ7OU),
            actions: [
                null != p
                    ? { variant: "primary", text: Q.intl.string(Q.t["+zx47d"]), onClick: R }
                    : { variant: "primary", text: Q.intl.string(Q.t["/g10LC"]), onClick: u },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(l.E, {
                        variant: "body-sm/medium",
                        color: "interactive-text-default",
                        className: M.V6,
                        children: Q.intl.string(Q.t.srzsU2),
                    }),
                    (0, s.jsx)(F, { rewardCode: d, questContent: n, questId: t.id, sourceQuestContent: i }),
                ],
            }),
            onClose: u,
            transitionState: c,
            children: (0, s.jsx)(l.E, {
                variant: "body-sm/medium",
                color: "text-default",
                className: M.tG,
                children: h.A.parse(m, !1, { allowLinks: !0 }),
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
                    location: S.rE.REWARD_CODE_MODAL,
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
                        children: Q.intl.string(Q.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(l.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: Q.intl.format(Q.t["ESmp2+"], { onClaimInstructions: i }),
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
        { initialQuest: d, onClose: l, transitionState: u, sourceQuestContent: C } = e,
        A = (0, y.C5)(d.id) ?? d,
        E = j.uF.REWARD_MODAL,
        h = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        {
            rewardCode: x,
            isFetchingRewardCode: I,
            isClaimingReward: g,
        } = (0, i.cf)([v.A], () => ({
            rewardCode: v.A.getRewardCode(A.id),
            isFetchingRewardCode: v.A.isFetchingRewardCode(A.id),
            isClaimingReward: v.A.isClaimingReward(A.id),
        })),
        { hasError: w, setHasError: N } = (function (e) {
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
                        (c(!0), await (0, _.Oq)(e, t, n), l(!1), c(!1));
                    } catch (e) {
                        (l(!0), c(!1));
                    }
                }, []),
                m = r.useCallback((e) => {
                    try {
                        (0, _.jh)(e);
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
                            ? C(a.id, j.pY.CROSS_PLATFORM, s)
                            : a.userStatus?.claimedAt != null && m(a.id));
                }, [C, m, d, t, u, n, s, a, i, o]),
                { claimCode: C, fetchCode: m, hasError: d, setHasError: l }
            );
        })({ isClaimingReward: g, isFetchingRewardCode: I, quest: A, questContent: E, rewardCode: x });
    ((t = (0, p.A)(() => {
        N(!0);
    })),
        (n = R.default.useIsCaptchaModalOpen()),
        (a = (0, m.Ay)(n)),
        (o = !!(!n && a)),
        r.useEffect(() => {
            o && t();
        }, [o, t]));
    let q = null == x && (I || g),
        D = w && !g && !I;
    return (0, s.jsx)(b.A, {
        onClose: l,
        transitionState: u,
        quest: A,
        sourceQuestContent: C,
        location: S.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: D,
        rewardContent: D
            ? null
            : (0, s.jsx)(O.A, {
                  rewardName: (0, L.mq)(A.config, h),
                  children: (0, s.jsx)(W, {
                      quest: A,
                      questContent: E,
                      rewardCode: x,
                      sourceQuestContent: C,
                      onClaimInstructions: () => {
                          (0, c.mM)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(k.R, {
                                          questOrQuests: A,
                                          questContent: E,
                                          sourceQuestContent: C,
                                          children: (t) =>
                                              (0, s.jsx)(U, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: A,
                                                  questContent: E,
                                                  sourceQuestContent: C,
                                                  rewardCode: x,
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
