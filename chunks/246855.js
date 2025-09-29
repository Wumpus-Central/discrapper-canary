n.d(t, { default: () => v }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(481060),
    l = n(100527),
    s = n(335131),
    o = n(70097),
    c = n(507808),
    d = n(43747),
    u = n(960919),
    _ = n(509212),
    h = n(272008),
    m = n(497505),
    C = n(515108),
    p = n(291967),
    f = n(46140),
    g = n(981631),
    E = n(215023),
    R = n(388032),
    b = n(651353),
    y = n(201284);
function A(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.Z, {
        className: t,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        children: (0, r.jsx)("source", {
            src: y.Z,
            type: "video/webm",
        }),
    });
}
function N() {
    return (0, r.jsxs)("div", {
        className: b.orbsContainer,
        children: [
            (0, r.jsx)(A, { className: b.centerOrb }),
            (0, r.jsxs)("div", {
                className: b.smallOrbContainer,
                children: [
                    (0, r.jsx)(A, { className: b.smallOrb }),
                    (0, r.jsx)(A, { className: b.smallOrb }),
                    (0, r.jsx)(A, { className: b.smallOrb }),
                    (0, r.jsx)(A, { className: b.smallOrb }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { onClose: t, orbsEarned: n, orbsBalance: a } = e,
        o = async () => {
            (0, c.Y)({
                pageType: g.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: g.jXE.ORBS_REWARD_MODAL,
                ctaObject: g.qAy.CTA_TO_ORBS_SHOP,
            }),
                await t(),
                (0, s.mK)({
                    openInLayer: !1,
                    tab: E.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: l.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, r.jsxs)("div", {
        className: b.contentContainer,
        children: [
            (0, r.jsx)(N, {}),
            (0, r.jsxs)("div", {
                className: b.copyContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.heading,
                        children: [
                            (0, r.jsx)(u.M, {
                                shouldUseThemeColor: !0,
                                className: b.orbsIcon,
                            }),
                            (0, r.jsx)(i.X6q, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: R.intl.format(R.t["/UTD6e"], { orbsEarned: n }),
                            }),
                        ],
                    }),
                    null != a
                        ? (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: R.intl.format(R.t.g4t9a2, { orbsBalance: a }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(i.zxk, {
                variant: "secondary",
                size: "sm",
                text: R.intl.string(R.t.WYchdX),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function v(e) {
    var t;
    let { quest: n, onClose: i, transitionState: l, sourceQuestContent: s, location: o } = e,
        c = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null,
        { balance: u, error: g } = (0, d.A)(),
        E = (0, _.LM)(n.config),
        [b, y] = a.useState(c ? "success" : "loading");
    a.useEffect(() => {
        c ||
            "loading" !== b ||
            (0, h.QB)(n.id, m.y$.CROSS_PLATFORM, o)
                .then(() => y("success"))
                .catch(() => y("error"));
    }, [n.id, c, b, o]);
    let A = "error" === b || null == E || (null == u && null != g);
    return (0, r.jsx)(C.Z, {
        onClose: i,
        transitionState: l,
        quest: n,
        sourceQuestContent: s,
        location: f.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: "loading" === b || (null == u && null == g),
        rewardContentHasError: A,
        rewardContent: A
            ? null
            : (0, r.jsx)(p.Z, {
                  rewardName: R.intl.string(R.t.Lmysvb),
                  children: (0, r.jsx)(x, {
                      onClose: i,
                      orbsEarned: E,
                      orbsBalance: u,
                  }),
              }),
    });
}
