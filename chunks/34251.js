n.d(t, { default: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(22095),
    s = n(968843),
    l = n(115179),
    c = n(644646),
    d = n(515108),
    u = n(291967),
    m = n(324805),
    b = n(388032),
    f = n(679789);
function x(e) {
    let { quest: t, rewardName: n, location: i, sourceQuestContent: o } = e;
    return (0, r.jsxs)("div", {
        className: f.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: f.rewardTileContainer,
                children: (0, r.jsx)(c.Z, {
                    autoplay: !0,
                    className: f.rewardTile,
                    learnMoreStyle: null,
                    quest: t,
                    questContent: i,
                    location: m.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: o,
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.copyContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: f.heading,
                        children: b.intl.string(b.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: b.intl.format(b.t["v1u/zq"], { rewardName: n }),
                    }),
                ],
            }),
            (0, r.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(b.t.OD6Tvf),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function p(e) {
    var t, n;
    let { initialQuest: a, onClose: c, transitionState: b, location: f, sourceQuestContent: p } = e,
        C = null != (n = (0, s.B4)(a.id)) ? n : a,
        g = i.useMemo(() => (0, l.K)(C.config), [C]),
        h = (null == (t = C.userStatus) ? void 0 : t.claimedAt) != null,
        j = !C.preview && !h,
        [v, N] = i.useState(j ? "loading" : "claimed");
    i.useEffect(() => {
        if (j) {
            let e = (0, l.zG)(C.config);
            (0, o.QB)(C.id, e, f)
                .then(() => N("claimed"))
                .catch(() => N("error"));
        }
    }, [C, f, j]);
    let y = "error" === v || null == g;
    return (0, r.jsx)(d.Z, {
        onClose: c,
        transitionState: b,
        quest: C,
        sourceQuestContent: p,
        location: m.dr.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === v,
        rewardContentHasError: y,
        rewardContent: y
            ? null
            : (0, r.jsx)(u.Z, {
                  rewardName: g.messages.name,
                  children: (0, r.jsx)(x, {
                      quest: C,
                      rewardName: g.messages.name,
                      location: f,
                      sourceQuestContent: p,
                  }),
              }),
    });
}
