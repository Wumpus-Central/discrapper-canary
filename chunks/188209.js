n.d(t, { default: () => g });
var a = n(951288),
    r = n(647438),
    i = n(442837),
    s = n(481060),
    o = n(110924),
    l = n(448986),
    c = n(475271),
    d = n(569984),
    u = n(497505),
    f = n(804127),
    h = n(566078),
    C = n(602667),
    m = n(652380),
    p = n(644646),
    v = n(515108),
    _ = n(291967),
    x = n(46140),
    j = n(388032),
    w = n(238905);
function y(e) {
    let { quest: t, questContent: n, sourceQuestContent: r, impressionRef: i } = e;
    return (0, a.jsxs)("div", {
        className: w.contentContainer,
        ref: (e) => {
            i.current = e;
        },
        children: [
            (0, a.jsx)("div", {
                className: w.rewardTileContainer,
                children: (0, a.jsx)(p.Z, {
                    className: w.rewardTileAsset,
                    quest: t,
                    questContent: n,
                    location: x.dr.REWARD_CODE_MODAL,
                    sourceQuestContent: r,
                }),
            }),
            (0, a.jsxs)("div", {
                className: w.copyContainer,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: w.heading,
                        children: j.intl.string(j.t["5j/Zys"]),
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: w.text,
                        children: j.intl.format(j.t.ESmp29, {
                            onClaimInstructions: () => {},
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: w.codeInputContainer }),
        ],
    });
}
function g(e) {
    let { quest: t, onClose: n, transitionState: s, preview: p, sourceQuestContent: x } = e,
        j = h.r.build(t.config),
        w = j.rewardPlatforms,
        g = u.jn.REWARD_MODAL,
        {
            questStoreRewardCode: q,
            isFetchingRewardCode: b,
            isClaimingReward: N,
        } = (0, i.cj)([d.Z], () => ({
            questStoreRewardCode: d.Z.getRewardCode(t.id),
            isFetchingRewardCode: d.Z.isFetchingRewardCode(t.id),
            isClaimingReward: d.Z.isClaimingReward(t.id),
        })),
        A = !0 === p ? (0, m.b)(t) : q,
        { hasError: E, setHasError: Z } = (0, f.u)({
            isClaimingReward: N,
            isFetchingRewardCode: b,
            quest: t,
            questContent: g,
            requiresPlatformSelection: !1,
            rewardCode: A,
            selectedPlatformType: w[0],
            preview: p,
        });
    !(function (e) {
        let t = (0, l.Z)(e),
            n = c.default.useIsCaptchaModalOpen(),
            a = (0, o.Z)(n),
            i = !!(!n && a);
        r.useEffect(() => {
            i && t();
        }, [i, t]);
    })(() => {
        Z(!0);
    });
    let R = null == A && (b || N),
        P = E && !N && !b;
    return R || P
        ? null
        : (0, a.jsx)(C.A, {
              questOrQuests: t,
              questContent: g,
              sourceQuestContent: x,
              children: (e) =>
                  (0, a.jsx)(v.Z, {
                      onClose: n,
                      transitionState: s,
                      quest: t,
                      rewardContent: (0, a.jsx)(_.Z, {
                          rewardName: j.defaultRewardName,
                          children: (0, a.jsx)(y, {
                              quest: t,
                              questContent: g,
                              sourceQuestContent: x,
                              impressionRef: e,
                          }),
                      }),
                  }),
          });
}
