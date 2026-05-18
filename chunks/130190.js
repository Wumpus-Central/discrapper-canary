n.d(t, { default: () => P });
var s = n(627968),
    r = n(64700),
    a = n(189213),
    i = n(17928),
    o = n(862482),
    l = n(834730),
    u = n(534514),
    d = n(192308),
    c = n(416052),
    C = n(475743),
    m = n(765548),
    x = n(165508),
    A = n(46054),
    h = n(351906),
    p = n(287809),
    R = n(957565),
    f = n(240248),
    g = n(859703),
    q = n(507107),
    j = n(838077),
    E = n(31587),
    w = n(975807),
    v = n(340124),
    k = n(18437),
    N = n(590202),
    D = n(801365),
    _ = n(73473),
    y = n(646764),
    I = n(801870),
    O = n(448109),
    b = n(190107),
    L = n(375708),
    M = n(75193);
function S(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: a, className: l, inputClassName: u } = e,
        d = (0, i.bG)([h.A], () => h.A.hidePersonalInformation),
        C = (0, k.Ut)();
    return null == t
        ? null
        : (0, s.jsx)(c.A, {
              className: l,
              inputClassName: u,
              value: d ? L.intl.string(L.t["0n2u0k"]) : t.code,
              buttonColor: o.XD.PRIMARY,
              onCopy: () => {
                  d && (0, R.C)(t.code),
                      C({ questId: r, questContent: n, questContentCTA: N.Cy.COPY_REWARD_CODE, sourceQuestContent: a });
              },
          });
}
function Q(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: i,
            rewardCode: o,
            onClose: u,
            transitionState: d,
            impressionRef: c,
        } = e,
        C = (0, j.XR)({ quest: t, rewardCode: o }) ?? "",
        m = r.useMemo(() => {
            let e = (0, D.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, f.uJ)(e)) return null;
            let n = o?.code;
            return (0, f.uJ)(n) ? e : e.replace(b.mg, encodeURIComponent(n));
        }, [t, o?.code]),
        x = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: a, sourceQuestContent: i } = e,
                o = (0, k.Ut)();
            return r.useCallback(() => {
                null != n &&
                    (o({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: N.Cy.REDEEM_REWARD,
                        questContentPosition: a,
                        sourceQuestContent: i,
                    }),
                    o({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: N.Cy.VISIT_REDEMPTION_LINK,
                        questContentPosition: a,
                        sourceQuestContent: i,
                    }),
                    (0, w.A)(n));
            }, [t.id, s, a, i, o, n]);
        })({ quest: t, questContent: n, redemptionLink: m, sourceQuestContent: i });
    return (0, s.jsx)("div", {
        ref: c,
        children: (0, s.jsx)(a.Modal, {
            size: "md",
            title: L.intl.string(L.t.NkZ7OU),
            actions: [
                null != m
                    ? { variant: "primary", text: L.intl.string(L.t["+zx47d"]), onClick: x }
                    : { variant: "primary", text: L.intl.string(L.t["/g10LC"]), onClick: u },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(l.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: M.V6,
                        children: L.intl.string(L.t.srzsU2),
                    }),
                    (0, s.jsx)(S, { rewardCode: o, questContent: n, questId: t.id, sourceQuestContent: i }),
                ],
            }),
            onClose: u,
            transitionState: d,
            children: (0, s.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: M.tG,
                children: A.A.parse(C, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function U(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: a, onClaimInstructions: i } = e;
    return (0, s.jsxs)("div", {
        className: M.hQ,
        children: [
            (0, s.jsx)("div", {
                className: M.tE,
                children: (0, s.jsx)(y.A, { className: M.Ag, quest: t, questContent: n, sourceQuestContent: a }),
            }),
            (0, s.jsxs)("div", {
                className: M.dD,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: M.R_,
                        children: L.intl.string(L.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(l.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: L.intl.format(L.t["ESmp2+"], { onClaimInstructions: i }),
                    }),
                ],
            }),
            (0, s.jsx)(S, {
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
        { initialQuest: l, onClose: u, transitionState: c, sourceQuestContent: A } = e,
        h = (0, E.C5)(l.id) ?? l,
        R = q.uF.REWARD_MODAL,
        f = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        {
            rewardCode: j,
            isFetchingRewardCode: w,
            isClaimingReward: k,
        } = (0, i.cf)([g.A], () => ({
            rewardCode: g.A.getRewardCode(h.id),
            isFetchingRewardCode: g.A.isFetchingRewardCode(h.id),
            isClaimingReward: g.A.isClaimingReward(h.id),
        })),
        { hasError: N, setHasError: y } = (function (e) {
            let {
                    isClaimingReward: t,
                    isFetchingRewardCode: n,
                    questContent: s,
                    quest: a,
                    rewardCode: i,
                    preview: o,
                } = e,
                [l, u] = r.useState(!1),
                [d, c] = r.useState(!1),
                C = r.useCallback(async (e, t, n) => {
                    try {
                        c(!0), await (0, v.Oq)(e, t, n), u(!1), c(!1);
                    } catch (e) {
                        u(!0), c(!1);
                    }
                }, []),
                m = r.useCallback((e) => {
                    try {
                        (0, v.jh)(e);
                    } catch (e) {
                        u(!0);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    !0 === o ||
                        null != i ||
                        l ||
                        t ||
                        d ||
                        n ||
                        (u(!1),
                        a.userStatus?.claimedAt == null
                            ? C(a.id, q.pY.CROSS_PLATFORM, s)
                            : a.userStatus?.claimedAt != null && m(a.id));
                }, [C, m, l, t, d, n, s, a, i, o]),
                { claimCode: C, fetchCode: m, hasError: l, setHasError: u }
            );
        })({ isClaimingReward: k, isFetchingRewardCode: w, quest: h, questContent: R, rewardCode: j });
    (t = (0, m.A)(() => {
        y(!0);
    })),
        (n = x.default.useIsCaptchaModalOpen()),
        (a = (0, C.A)(n)),
        (o = !!(!n && a)),
        r.useEffect(() => {
            o && t();
        }, [o, t]);
    let L = null == j && (w || k),
        M = N && !k && !w;
    return (0, s.jsx)(O.A, {
        onClose: u,
        transitionState: c,
        quest: h,
        sourceQuestContent: A,
        location: b.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: L,
        rewardContentHasError: M,
        rewardContent: M
            ? null
            : (0, s.jsx)(I.A, {
                  rewardName: (0, D.mq)(h.config, f),
                  children: (0, s.jsx)(U, {
                      quest: h,
                      questContent: R,
                      rewardCode: j,
                      sourceQuestContent: A,
                      onClaimInstructions: () => {
                          (0, d.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(_.R, {
                                          questOrQuests: h,
                                          questContent: R,
                                          sourceQuestContent: A,
                                          children: (t) =>
                                              (0, s.jsx)(Q, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: h,
                                                  questContent: R,
                                                  sourceQuestContent: A,
                                                  rewardCode: j,
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
