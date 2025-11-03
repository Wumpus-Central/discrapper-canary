n.d(t, { default: () => h }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(481060),
    s = n(22095),
    o = n(509212),
    l = n(113434),
    d = n(497505),
    c = n(566078),
    u = n(644646),
    m = n(515108),
    p = n(291967),
    f = n(46140),
    x = n(388032),
    C = n(258910);
function g(e) {
    let { quest: t, rewardName: n, location: a, sourceQuestContent: s } = e;
    return (0, r.jsxs)("div", {
        className: C.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: C.rewardTileContainer,
                children: (0, r.jsx)(u.Z, {
                    autoplay: !0,
                    className: C.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: a,
                    location: f.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: s,
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.copyContainer,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: C.heading,
                        children: x.intl.string(x.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: x.intl.format(x.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(i.Button, {
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
    var t, n;
    let { initialQuest: i, onClose: u, transitionState: x, location: C, sourceQuestContent: h } = e,
        _ = null != (n = (0, l.B4)(i.id)) ? n : i,
        j = a.useMemo(() => (0, o.K)(_.config), [_]),
        v = (null == (t = _.userStatus) ? void 0 : t.claimedAt) != null,
        N = !_.preview && !v,
        [y, b] = a.useState(N ? "loading" : "claimed");
    a.useEffect(() => {
        if (N) {
            let e = c.r.build(_.config),
                t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : d.y$.CROSS_PLATFORM;
            (0, s.QB)(_.id, t, C)
                .then(() => b("claimed"))
                .catch(() => b("error"));
        }
    }, [_, C, N]);
    let w = "error" === y || null == j;
    return (0, r.jsx)(m.Z, {
        onClose: u,
        transitionState: x,
        quest: _,
        sourceQuestContent: h,
        location: f.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === y,
        rewardContentHasError: w,
        rewardContent: w
            ? null
            : (0, r.jsx)(p.Z, {
                  rewardName: j.messages.name,
                  children: (0, r.jsx)(g, {
                      quest: _,
                      rewardName: j.messages.name,
                      location: C,
                      sourceQuestContent: h,
                  }),
              }),
    });
}
