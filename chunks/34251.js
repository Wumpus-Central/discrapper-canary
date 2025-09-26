t.d(n, { default: () => x }), t(388685);
var a = t(951288),
    r = t(647438),
    i = t(481060),
    s = t(509212),
    o = t(272008),
    l = t(497505),
    c = t(566078),
    d = t(644646),
    u = t(515108),
    m = t(291967),
    p = t(46140),
    C = t(388032),
    f = t(258910);
function h(e) {
    let { quest: n, rewardName: t, location: r, sourceQuestContent: s } = e;
    return (0, a.jsxs)("div", {
        className: f.contentContainer,
        children: [
            (0, a.jsx)("div", {
                className: f.rewardTileContainer,
                children: (0, a.jsx)(d.Z, {
                    autoplay: !0,
                    className: f.rewardTile,
                    learnMoreStyle: null,
                    quest: n,
                    questContent: r,
                    location: p.dr.INGAME_REWARD_MODAL,
                    sourceQuestContent: s,
                }),
            }),
            (0, a.jsxs)("div", {
                className: f.copyContainer,
                children: [
                    (0, a.jsx)(i.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: f.heading,
                        children: C.intl.string(C.t["0/Yz+f"]),
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: C.intl.format(C.t["v1u/zs"], { rewardName: t }),
                    }),
                ],
            }),
            (0, a.jsx)(i.zxk, {
                variant: "secondary",
                size: "sm",
                text: C.intl.string(C.t.OD6Tvb),
                disabled: !0,
                fullWidth: !0,
            }),
        ],
    });
}
function x(e) {
    var n;
    let { quest: t, onClose: i, transitionState: d, location: p, sourceQuestContent: C } = e,
        f = r.useMemo(() => (0, s.K)(t.config), [t]),
        x = (null == (n = t.userStatus) ? void 0 : n.claimedAt) != null,
        _ = !t.preview && !x,
        [g, v] = r.useState(_ ? "loading" : "claimed");
    r.useEffect(() => {
        if (_) {
            let e = c.r.build(t.config),
                n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : l.y$.CROSS_PLATFORM;
            (0, o.QB)(t.id, n, p)
                .then(() => v("claimed"))
                .catch(() => v("error"));
        }
    }, [t, p, _]);
    let j = "error" === g || null == f;
    return "loading" === g || j
        ? null
        : (0, a.jsx)(u.Z, {
              onClose: i,
              transitionState: d,
              quest: t,
              sourceQuestContent: C,
              rewardContent: (0, a.jsx)(m.Z, {
                  rewardName: f.messages.name,
                  children: (0, a.jsx)(h, {
                      quest: t,
                      rewardName: f.messages.name,
                      location: p,
                      sourceQuestContent: C,
                  }),
              }),
          });
}
