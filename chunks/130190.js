n.d(t, { default: () => U });
var a = n(627968),
    s = n(64700),
    r = n(189213),
    o = n(17928),
    i = n(862482),
    l = n(834730),
    d = n(534514),
    c = n(192308),
    u = n(416052),
    C = n(475743),
    p = n(765548),
    _ = n(165508),
    h = n(46054),
    m = n(351906),
    f = n(957565),
    y = n(240248),
    x = n(859703),
    A = n(507107),
    E = n(838077),
    R = n(890687),
    w = n(975807),
    g = n(829219),
    S = n(18437),
    j = n(590202),
    q = n(801365),
    v = n(73473),
    k = n(646764),
    L = n(801870),
    M = n(448109),
    D = n(654487),
    I = n(985018),
    b = n(75193);
function N(e) {
    let { rewardCode: t, questContent: n, questId: s, sourceQuestContent: r, className: l, inputClassName: d } = e,
        c = (0, o.bG)([m.A], () => m.A.hidePersonalInformation),
        C = (0, S.Ut)();
    return null == t
        ? null
        : (0, a.jsx)(u.A, {
              className: l,
              inputClassName: d,
              value: c ? I.intl.string(I.t["0n2u0k"]) : t.code,
              buttonColor: i.XD.PRIMARY,
              onCopy: () => {
                  c && (0, f.C)(t.code),
                      C({ questId: s, questContent: n, questContentCTA: j.Cy.COPY_REWARD_CODE, sourceQuestContent: r });
              },
          });
}
function O(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: o,
            rewardCode: i,
            onClose: d,
            transitionState: c,
            impressionRef: u,
        } = e,
        C = (0, E.XR)({ quest: t, rewardCode: i }) ?? "",
        p = s.useMemo(() => {
            let e = (0, q.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, y.uJ)(e)) return null;
            let n = i?.code;
            return (0, y.uJ)(n) ? e : e.replace(D.mg, encodeURIComponent(n));
        }, [t, i?.code]),
        _ = (function (e) {
            let { quest: t, redemptionLink: n, questContent: a, questContentPosition: r, sourceQuestContent: o } = e,
                i = (0, S.Ut)();
            return s.useCallback(() => {
                null != n &&
                    (i({
                        questId: t.id,
                        questContent: a,
                        questContentCTA: j.Cy.REDEEM_REWARD,
                        questContentPosition: r,
                        sourceQuestContent: o,
                    }),
                    i({
                        questId: t.id,
                        questContent: a,
                        questContentCTA: j.Cy.VISIT_REDEMPTION_LINK,
                        questContentPosition: r,
                        sourceQuestContent: o,
                    }),
                    (0, w.A)(n));
            }, [t.id, a, r, o, i, n]);
        })({ quest: t, questContent: n, redemptionLink: p, sourceQuestContent: o });
    return (0, a.jsx)("div", {
        ref: u,
        children: (0, a.jsx)(r.Modal, {
            size: "md",
            title: I.intl.string(I.t.NkZ7OU),
            actions: [
                null != p
                    ? { variant: "primary", text: I.intl.string(I.t["+zx47d"]), onClick: _ }
                    : { variant: "primary", text: I.intl.string(I.t["/g10LC"]), onClick: d },
            ],
            preview: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(l.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: b.V6,
                        children: I.intl.string(I.t.srzsU2),
                    }),
                    (0, a.jsx)(N, { rewardCode: i, questContent: n, questId: t.id, sourceQuestContent: o }),
                ],
            }),
            onClose: d,
            transitionState: c,
            children: (0, a.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: b.tG,
                children: h.A.parse(C, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function T(e) {
    let { quest: t, questContent: n, rewardCode: s, sourceQuestContent: r, onClaimInstructions: o } = e;
    return (0, a.jsxs)("div", {
        className: b.hQ,
        children: [
            (0, a.jsx)("div", {
                className: b.tE,
                children: (0, a.jsx)(k.A, { className: b.Ag, quest: t, questContent: n, sourceQuestContent: r }),
            }),
            (0, a.jsxs)("div", {
                className: b.dD,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: b.R_,
                        children: I.intl.string(I.t["5j/Zym"]),
                    }),
                    (0, a.jsx)(l.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.format(I.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, a.jsx)(N, {
                className: b.DA,
                rewardCode: s,
                questContent: n,
                questId: t.id,
                sourceQuestContent: r,
                inputClassName: b.Uy,
            }),
        ],
    });
}
function U(e) {
    let t,
        n,
        r,
        i,
        { initialQuest: l, onClose: d, transitionState: u, sourceQuestContent: h } = e,
        m = (0, R.C5)(l.id) ?? l,
        f = A.uF.REWARD_MODAL,
        {
            rewardCode: y,
            isFetchingRewardCode: E,
            isClaimingReward: w,
        } = (0, o.cf)([x.A], () => ({
            rewardCode: x.A.getRewardCode(m.id),
            isFetchingRewardCode: x.A.isFetchingRewardCode(m.id),
            isClaimingReward: x.A.isClaimingReward(m.id),
        })),
        { hasError: S, setHasError: j } = (function (e) {
            let {
                    isClaimingReward: t,
                    isFetchingRewardCode: n,
                    questContent: a,
                    quest: r,
                    rewardCode: o,
                    preview: i,
                } = e,
                [l, d] = s.useState(!1),
                [c, u] = s.useState(!1),
                C = s.useCallback(async (e, t, n) => {
                    try {
                        u(!0), await (0, g.Oq)(e, t, n), d(!1), u(!1);
                    } catch (e) {
                        d(!0), u(!1);
                    }
                }, []),
                p = s.useCallback((e) => {
                    try {
                        (0, g.jh)(e);
                    } catch (e) {
                        d(!0);
                    }
                }, []);
            return (
                s.useEffect(() => {
                    !0 === i ||
                        null != o ||
                        l ||
                        t ||
                        c ||
                        n ||
                        (d(!1),
                        r.userStatus?.claimedAt == null
                            ? C(r.id, A.pY.CROSS_PLATFORM, a)
                            : r.userStatus?.claimedAt != null && p(r.id));
                }, [C, p, l, t, c, n, a, r, o, i]),
                { claimCode: C, fetchCode: p, hasError: l, setHasError: d }
            );
        })({ isClaimingReward: w, isFetchingRewardCode: E, quest: m, questContent: f, rewardCode: y });
    (t = (0, p.A)(() => {
        j(!0);
    })),
        (n = _.default.useIsCaptchaModalOpen()),
        (r = (0, C.A)(n)),
        (i = !!(!n && r)),
        s.useEffect(() => {
            i && t();
        }, [i, t]);
    let k = null == y && (E || w),
        I = S && !w && !E;
    return (0, a.jsx)(M.A, {
        onClose: d,
        transitionState: u,
        quest: m,
        sourceQuestContent: h,
        location: D.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: k,
        rewardContentHasError: I,
        rewardContent: I
            ? null
            : (0, a.jsx)(L.A, {
                  rewardName: (0, q.mq)(m.config),
                  children: (0, a.jsx)(T, {
                      quest: m,
                      questContent: f,
                      rewardCode: y,
                      sourceQuestContent: h,
                      onClaimInstructions: () => {
                          (0, c.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, a.jsx)(v.R, {
                                          questOrQuests: m,
                                          questContent: f,
                                          sourceQuestContent: h,
                                          children: (t) =>
                                              (0, a.jsx)(O, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: m,
                                                  questContent: f,
                                                  sourceQuestContent: h,
                                                  rewardCode: y,
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
