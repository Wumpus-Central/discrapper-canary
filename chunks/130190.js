n.d(t, { default: () => P });
var s = n(627968),
    r = n(64700),
    i = n(189213),
    a = n(17928),
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
    p = n(957565),
    R = n(240248),
    q = n(859703),
    f = n(507107),
    g = n(838077),
    j = n(31587),
    E = n(975807),
    w = n(340124),
    v = n(18437),
    k = n(590202),
    N = n(801365),
    D = n(73473),
    _ = n(646764),
    y = n(801870),
    I = n(448109),
    O = n(190107),
    b = n(375708),
    L = n(75193);
function M(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: i, className: l, inputClassName: u } = e,
        d = (0, a.bG)([h.A], () => h.A.hidePersonalInformation),
        C = (0, v.Ut)();
    return null == t
        ? null
        : (0, s.jsx)(c.A, {
              className: l,
              inputClassName: u,
              value: d ? b.intl.string(b.t["0n2u0k"]) : t.code,
              buttonColor: o.XD.PRIMARY,
              onCopy: () => {
                  d && (0, p.C)(t.code),
                      C({ questId: r, questContent: n, questContentCTA: k.Cy.COPY_REWARD_CODE, sourceQuestContent: i });
              },
          });
}
function S(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: a,
            rewardCode: o,
            onClose: u,
            transitionState: d,
            impressionRef: c,
        } = e,
        C = (0, g.XR)({ quest: t, rewardCode: o }) ?? "",
        m = r.useMemo(() => {
            let e = (0, N.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, R.uJ)(e)) return null;
            let n = o?.code;
            return (0, R.uJ)(n) ? e : e.replace(O.mg, encodeURIComponent(n));
        }, [t, o?.code]),
        x = (function (e) {
            let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: a } = e,
                o = (0, v.Ut)();
            return r.useCallback(() => {
                null != n &&
                    (o({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: k.Cy.REDEEM_REWARD,
                        questContentPosition: i,
                        sourceQuestContent: a,
                    }),
                    o({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: k.Cy.VISIT_REDEMPTION_LINK,
                        questContentPosition: i,
                        sourceQuestContent: a,
                    }),
                    (0, E.A)(n));
            }, [t.id, s, i, a, o, n]);
        })({ quest: t, questContent: n, redemptionLink: m, sourceQuestContent: a });
    return (0, s.jsx)("div", {
        ref: c,
        children: (0, s.jsx)(i.Modal, {
            size: "md",
            title: b.intl.string(b.t.NkZ7OU),
            actions: [
                null != m
                    ? { variant: "primary", text: b.intl.string(b.t["+zx47d"]), onClick: x }
                    : { variant: "primary", text: b.intl.string(b.t["/g10LC"]), onClick: u },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(l.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: L.V6,
                        children: b.intl.string(b.t.srzsU2),
                    }),
                    (0, s.jsx)(M, { rewardCode: o, questContent: n, questId: t.id, sourceQuestContent: a }),
                ],
            }),
            onClose: u,
            transitionState: d,
            children: (0, s.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: L.tG,
                children: A.A.parse(C, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function Q(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: i, onClaimInstructions: a } = e;
    return (0, s.jsxs)("div", {
        className: L.hQ,
        children: [
            (0, s.jsx)("div", {
                className: L.tE,
                children: (0, s.jsx)(_.A, { className: L.Ag, quest: t, questContent: n, sourceQuestContent: i }),
            }),
            (0, s.jsxs)("div", {
                className: L.dD,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: L.R_,
                        children: b.intl.string(b.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(l.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: b.intl.format(b.t["ESmp2+"], { onClaimInstructions: a }),
                    }),
                ],
            }),
            (0, s.jsx)(M, {
                className: L.DA,
                rewardCode: r,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                inputClassName: L.Uy,
            }),
        ],
    });
}
function P(e) {
    let t,
        n,
        i,
        o,
        { initialQuest: l, onClose: u, transitionState: c, sourceQuestContent: A } = e,
        h = (0, j.C5)(l.id) ?? l,
        p = f.uF.REWARD_MODAL,
        {
            rewardCode: R,
            isFetchingRewardCode: g,
            isClaimingReward: E,
        } = (0, a.cf)([q.A], () => ({
            rewardCode: q.A.getRewardCode(h.id),
            isFetchingRewardCode: q.A.isFetchingRewardCode(h.id),
            isClaimingReward: q.A.isClaimingReward(h.id),
        })),
        { hasError: v, setHasError: k } = (function (e) {
            let {
                    isClaimingReward: t,
                    isFetchingRewardCode: n,
                    questContent: s,
                    quest: i,
                    rewardCode: a,
                    preview: o,
                } = e,
                [l, u] = r.useState(!1),
                [d, c] = r.useState(!1),
                C = r.useCallback(async (e, t, n) => {
                    try {
                        c(!0), await (0, w.Oq)(e, t, n), u(!1), c(!1);
                    } catch (e) {
                        u(!0), c(!1);
                    }
                }, []),
                m = r.useCallback((e) => {
                    try {
                        (0, w.jh)(e);
                    } catch (e) {
                        u(!0);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    !0 === o ||
                        null != a ||
                        l ||
                        t ||
                        d ||
                        n ||
                        (u(!1),
                        i.userStatus?.claimedAt == null
                            ? C(i.id, f.pY.CROSS_PLATFORM, s)
                            : i.userStatus?.claimedAt != null && m(i.id));
                }, [C, m, l, t, d, n, s, i, a, o]),
                { claimCode: C, fetchCode: m, hasError: l, setHasError: u }
            );
        })({ isClaimingReward: E, isFetchingRewardCode: g, quest: h, questContent: p, rewardCode: R });
    (t = (0, m.A)(() => {
        k(!0);
    })),
        (n = x.default.useIsCaptchaModalOpen()),
        (i = (0, C.A)(n)),
        (o = !!(!n && i)),
        r.useEffect(() => {
            o && t();
        }, [o, t]);
    let _ = null == R && (g || E),
        b = v && !E && !g;
    return (0, s.jsx)(I.A, {
        onClose: u,
        transitionState: c,
        quest: h,
        sourceQuestContent: A,
        location: O.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: _,
        rewardContentHasError: b,
        rewardContent: b
            ? null
            : (0, s.jsx)(y.A, {
                  rewardName: (0, N.mq)(h.config),
                  children: (0, s.jsx)(Q, {
                      quest: h,
                      questContent: p,
                      rewardCode: R,
                      sourceQuestContent: A,
                      onClaimInstructions: () => {
                          (0, d.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(D.R, {
                                          questOrQuests: h,
                                          questContent: p,
                                          sourceQuestContent: A,
                                          children: (t) =>
                                              (0, s.jsx)(S, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: h,
                                                  questContent: p,
                                                  sourceQuestContent: A,
                                                  rewardCode: R,
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
