r.d(t, { default: () => p });
var n = r(627968),
    s = r(64700),
    l = r(534514),
    a = r(834730),
    i = r(821609),
    o = r(829219),
    u = r(890687),
    c = r(92246),
    d = r(646764),
    _ = r(109174),
    f = r(524728),
    m = r(654487),
    A = r(985018),
    x = r(577777);
function h(e) {
    let { quest: t, rewardName: r, location: s, sourceQuestContent: o } = e;
    return (0, n.jsxs)("div", {
        className: x.hQ,
        children: [
            (0, n.jsx)("div", {
                className: x.tE,
                children: (0, n.jsx)(d.A, {
                    autoplay: !0,
                    className: x.Qq,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: s,
                    sourceQuestContent: o,
                }),
            }),
            (0, n.jsxs)("div", {
                className: x.dD,
                children: [
                    (0, n.jsx)(l.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: x.R_,
                        children: A.intl.string(A.t["0/Yz+Y"]),
                    }),
                    (0, n.jsx)(a.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.format(A.t["v1u/zq"], { rewardName: r }),
                    }),
                ],
            }),
            (0, n.jsx)(i.$, {
                variant: "secondary",
                size: "sm",
                text: A.intl.string(A.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function p(e) {
    let { initialQuest: t, onClose: r, transitionState: l, location: a, sourceQuestContent: i } = e,
        d = (0, u.C5)(t.id) ?? t,
        A = s.useMemo(() => (0, c.f)(d.config), [d]),
        x = d.userStatus?.claimedAt != null,
        p = !d.preview && !x,
        [C, g] = s.useState(p ? "loading" : "claimed");
    s.useEffect(() => {
        if (p) {
            let e = (0, c.$s)(d.config);
            (0, o.Oq)(d.id, e, a)
                .then(() => g("claimed"))
                .catch(() => g("error"));
        }
    }, [d, a, p]);
    let w = "error" === C || null == A;
    return (0, n.jsx)(f.A, {
        onClose: r,
        transitionState: l,
        quest: d,
        sourceQuestContent: i,
        location: m.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === C,
        rewardContentHasError: w,
        rewardContent: w
            ? null
            : (0, n.jsx)(_.A, {
                  rewardName: A.messages.name,
                  children: (0, n.jsx)(h, {
                      quest: d,
                      rewardName: A.messages.name,
                      location: a,
                      sourceQuestContent: i,
                  }),
              }),
    });
}
