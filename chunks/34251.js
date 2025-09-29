n.d(t, { default: () => h }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(481060),
    s = n(509212),
    o = n(272008),
    l = n(497505),
    c = n(566078),
    d = n(644646),
    u = n(515108),
    m = n(291967),
    p = n(46140),
    f = n(388032),
    x = n(522144);
function C(e) {
    let { quest: t, rewardName: n, location: a, sourceQuestContent: s } = e;
    return (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: x.rewardTileContainer,
                children: (0, r.jsx)(d.Z, {
                    autoplay: !0,
                    className: x.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: a,
                    location: p.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: s,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.copyContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: x.heading,
                        children: f.intl.string(f.t["0/Yz+f"]),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: f.intl.format(f.t["v1u/zs"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(i.zxk, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t.OD6Tvb),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function h(e) {
    var t;
    let { quest: n, onClose: i, transitionState: d, location: f, sourceQuestContent: x } = e,
        h = a.useMemo(() => (0, s.K)(n.config), [n]),
        g = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null,
        j = !n.preview && !g,
        [_, v] = a.useState(j ? "loading" : "claimed");
    a.useEffect(() => {
        if (j) {
            let e = c.r.build(n.config),
                t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : l.y$.CROSS_PLATFORM;
            (0, o.QB)(n.id, t, f)
                .then(() => v("claimed"))
                .catch(() => v("error"));
        }
    }, [n, f, j]);
    let y = "error" === _ || null == h;
    return (0, r.jsx)(u.Z, {
        onClose: i,
        transitionState: d,
        quest: n,
        sourceQuestContent: x,
        location: p.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === _,
        rewardContentHasError: y,
        rewardContent: y
            ? null
            : (0, r.jsx)(m.Z, {
                  rewardName: h.messages.name,
                  children: (0, r.jsx)(C, {
                      quest: n,
                      rewardName: h.messages.name,
                      location: f,
                      sourceQuestContent: x,
                  }),
              }),
    });
}
