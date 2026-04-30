s.d(t, { default: () => j });
var n = s(627968),
    a = s(64700),
    r = s(534514),
    i = s(834730),
    l = s(821609),
    o = s(340124),
    d = s(31587),
    c = s(801365),
    u = s(646764),
    m = s(801870),
    h = s(448109),
    x = s(190107),
    f = s(375708),
    g = s(577777);
function C(e) {
    let { quest: t, rewardName: s, location: a, sourceQuestContent: o } = e;
    return (0, n.jsxs)("div", {
        className: g.hQ,
        children: [
            (0, n.jsx)("div", {
                className: g.tE,
                children: (0, n.jsx)(u.A, {
                    autoplay: !0,
                    className: g.Qq,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: a,
                    sourceQuestContent: o,
                }),
            }),
            (0, n.jsxs)("div", {
                className: g.dD,
                children: [
                    (0, n.jsx)(r.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: g.R_,
                        children: f.intl.string(f.t["0/Yz+Y"]),
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: f.intl.format(f.t["v1u/zq"], { rewardName: s }),
                    }),
                ],
            }),
            (0, n.jsx)(l.$, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function j(e) {
    let { initialQuest: t, onClose: s, transitionState: r, location: i, sourceQuestContent: l } = e,
        u = (0, d.C5)(t.id) ?? t,
        f = a.useMemo(() => (0, c.f)(u.config), [u]),
        g = u.userStatus?.claimedAt != null,
        j = !u.preview && !g,
        [v, p] = a.useState(j ? "loading" : "claimed");
    a.useEffect(() => {
        if (j) {
            let e = (0, c.$s)(u.config);
            (0, o.Oq)(u.id, e, i)
                .then(() => p("claimed"))
                .catch(() => p("error"));
        }
    }, [u, i, j]);
    let w = "error" === v || null == f;
    return (0, n.jsx)(h.A, {
        onClose: s,
        transitionState: r,
        quest: u,
        sourceQuestContent: l,
        location: x.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === v,
        rewardContentHasError: w,
        rewardContent: w
            ? null
            : (0, n.jsx)(m.A, {
                  rewardName: f.messages.name,
                  children: (0, n.jsx)(C, {
                      quest: u,
                      rewardName: f.messages.name,
                      location: i,
                      sourceQuestContent: l,
                  }),
              }),
    });
}
