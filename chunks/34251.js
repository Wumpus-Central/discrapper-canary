n.d(t, { default: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(22095),
    s = n(509212),
    l = n(113434),
    c = n(497505),
    d = n(566078),
    u = n(644646),
    m = n(515108),
    f = n(291967),
    p = n(46140),
    x = n(388032),
    h = n(258910);
function C(e) {
    let { quest: t, rewardName: n, location: i, sourceQuestContent: o } = e;
    return (0, r.jsxs)("div", {
        className: h.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: h.rewardTileContainer,
                children: (0, r.jsx)(u.Z, {
                    autoplay: !0,
                    className: h.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: i,
                    location: p.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: o,
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.copyContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: h.heading,
                        children: x.intl.string(x.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: x.intl.format(x.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(x.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function g(e) {
    var t, n;
    let { initialQuest: a, onClose: u, transitionState: x, location: h, sourceQuestContent: g } = e,
        _ = null != (n = (0, l.B4)(a.id)) ? n : a,
        j = i.useMemo(() => (0, s.K)(_.config), [_]),
        v = (null == (t = _.userStatus) ? void 0 : t.claimedAt) != null,
        y = !_.preview && !v,
        [N, b] = i.useState(y ? "loading" : "claimed");
    i.useEffect(() => {
        if (y) {
            let e = d.r.build(_.config),
                t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : c.y$.CROSS_PLATFORM;
            (0, o.QB)(_.id, t, h)
                .then(() => b("claimed"))
                .catch(() => b("error"));
        }
    }, [_, h, y]);
    let w = "error" === N || null == j;
    return (0, r.jsx)(m.Z, {
        onClose: u,
        transitionState: x,
        quest: _,
        sourceQuestContent: g,
        location: p.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === N,
        rewardContentHasError: w,
        rewardContent: w
            ? null
            : (0, r.jsx)(f.Z, {
                  rewardName: j.messages.name,
                  children: (0, r.jsx)(C, {
                      quest: _,
                      rewardName: j.messages.name,
                      location: h,
                      sourceQuestContent: g,
                  }),
              }),
    });
}
