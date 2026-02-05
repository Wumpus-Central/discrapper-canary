n.d(t, { default: () => h });
var s = n(627968),
    i = n(64700),
    a = n(397927),
    r = n(829219),
    l = n(890687),
    o = n(92246),
    c = n(646764),
    d = n(109174),
    u = n(524728),
    m = n(654487),
    x = n(985018),
    _ = n(322956);
function f(e) {
    let { quest: t, rewardName: n, location: i, sourceQuestContent: r } = e;
    return (0, s.jsxs)("div", {
        className: _.hQ,
        children: [
            (0, s.jsx)("div", {
                className: _.tE,
                children: (0, s.jsx)(c.A, {
                    autoplay: !0,
                    className: _.Qq,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: i,
                    sourceQuestContent: r,
                }),
            }),
            (0, s.jsxs)("div", {
                className: _.dD,
                children: [
                    (0, s.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: _.R_,
                        children: x.intl.string(x.t["0/Yz+Y"]),
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: x.intl.format(x.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, s.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(x.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function h(e) {
    let { initialQuest: t, onClose: n, transitionState: a, location: c, sourceQuestContent: x } = e,
        _ = (0, l.C5)(t.id) ?? t,
        h = i.useMemo(() => (0, o.f)(_.config), [_]),
        g = _.userStatus?.claimedAt != null,
        j = !_.preview && !g,
        [C, v] = i.useState(j ? "loading" : "claimed");
    i.useEffect(() => {
        if (j) {
            let e = (0, o.$s)(_.config);
            (0, r.Oq)(_.id, e, c)
                .then(() => v("claimed"))
                .catch(() => v("error"));
        }
    }, [_, c, j]);
    let N = "error" === C || null == h;
    return (0, s.jsx)(u.A, {
        onClose: n,
        transitionState: a,
        quest: _,
        sourceQuestContent: x,
        location: m.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === C,
        rewardContentHasError: N,
        rewardContent: N
            ? null
            : (0, s.jsx)(d.A, {
                  rewardName: h.messages.name,
                  children: (0, s.jsx)(f, {
                      quest: _,
                      rewardName: h.messages.name,
                      location: c,
                      sourceQuestContent: x,
                  }),
              }),
    });
}
