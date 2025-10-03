n.d(t, { default: () => g }), n(388685);
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
    C = n(258910);
function x(e) {
    let { quest: t, rewardName: n, location: a, sourceQuestContent: s } = e;
    return (0, r.jsxs)("div", {
        className: C.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: C.rewardTileContainer,
                children: (0, r.jsx)(d.Z, {
                    autoplay: !0,
                    className: C.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: a,
                    location: p.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: s,
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.copyContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: C.heading,
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
function g(e) {
    var t;
    let { quest: n, onClose: i, transitionState: d, location: f, sourceQuestContent: C } = e,
        g = a.useMemo(() => (0, s.K)(n.config), [n]),
        h = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null,
        _ = !n.preview && !h,
        [j, v] = a.useState(_ ? "loading" : "claimed");
    a.useEffect(() => {
        if (_) {
            let e = c.r.build(n.config),
                t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : l.y$.CROSS_PLATFORM;
            (0, o.QB)(n.id, t, f)
                .then(() => v("claimed"))
                .catch(() => v("error"));
        }
    }, [n, f, _]);
    let y = "error" === j || null == g;
    return (0, r.jsx)(u.Z, {
        onClose: i,
        transitionState: d,
        quest: n,
        sourceQuestContent: C,
        location: p.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === j,
        rewardContentHasError: y,
        rewardContent: y
            ? null
            : (0, r.jsx)(m.Z, {
                  rewardName: g.messages.name,
                  children: (0, r.jsx)(x, {
                      quest: n,
                      rewardName: g.messages.name,
                      location: f,
                      sourceQuestContent: C,
                  }),
              }),
    });
}
