n.d(t, { default: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(22095),
    s = n(509212),
    l = n(113434),
    c = n(644646),
    d = n(515108),
    u = n(291967),
    m = n(46140),
    f = n(388032),
    x = n(522144);
function p(e) {
    let { quest: t, rewardName: n, location: i, sourceQuestContent: o } = e;
    return (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: x.rewardTileContainer,
                children: (0, r.jsx)(c.Z, {
                    autoplay: !0,
                    className: x.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: i,
                    location: m.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: o,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.copyContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: x.heading,
                        children: f.intl.string(f.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: f.intl.format(f.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    var t, n;
    let { initialQuest: a, onClose: c, transitionState: f, location: x, sourceQuestContent: C } = e,
        g = null != (n = (0, l.B4)(a.id)) ? n : a,
        h = i.useMemo(() => (0, s.K)(g.config), [g]),
        j = (null == (t = g.userStatus) ? void 0 : t.claimedAt) != null,
        _ = !g.preview && !j,
        [v, N] = i.useState(_ ? "loading" : "claimed");
    i.useEffect(() => {
        if (_) {
            let e = (0, s.zG)(g.config);
            (0, o.QB)(g.id, e, x)
                .then(() => N("claimed"))
                .catch(() => N("error"));
        }
    }, [g, x, _]);
    let y = "error" === v || null == h;
    return (0, r.jsx)(d.Z, {
        onClose: c,
        transitionState: f,
        quest: g,
        sourceQuestContent: C,
        location: m.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === v,
        rewardContentHasError: y,
        rewardContent: y
            ? null
            : (0, r.jsx)(u.Z, {
                  rewardName: h.messages.name,
                  children: (0, r.jsx)(p, {
                      quest: g,
                      rewardName: h.messages.name,
                      location: x,
                      sourceQuestContent: C,
                  }),
              }),
    });
}
