t.d(n, { default: () => x }), t(388685);
var a = t(951288),
    r = t(647438),
    i = t(481060),
    l = t(100527),
    s = t(335131),
    c = t(70097),
    o = t(507808),
    d = t(43747),
    u = t(960919),
    _ = t(509212),
    h = t(272008),
    m = t(497505),
    C = t(515108),
    R = t(291967),
    E = t(981631),
    p = t(215023),
    g = t(388032),
    f = t(561549),
    b = t(201284);
function y(e) {
    let { className: n } = e;
    return (0, a.jsx)(c.Z, {
        className: n,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        children: (0, a.jsx)("source", {
            src: b.Z,
            type: "video/webm",
        }),
    });
}
function A() {
    return (0, a.jsxs)("div", {
        className: f.orbsContainer,
        children: [
            (0, a.jsx)(y, { className: f.centerOrb }),
            (0, a.jsxs)("div", {
                className: f.smallOrbContainer,
                children: [
                    (0, a.jsx)(y, { className: f.smallOrb }),
                    (0, a.jsx)(y, { className: f.smallOrb }),
                    (0, a.jsx)(y, { className: f.smallOrb }),
                    (0, a.jsx)(y, { className: f.smallOrb }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { onClose: n, orbsEarned: t, orbsBalance: r } = e,
        c = async () => {
            (0, o.Y)({
                pageType: E.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: E.jXE.ORBS_REWARD_MODAL,
                ctaObject: E.qAy.CTA_TO_ORBS_SHOP,
            }),
                await n(),
                (0, s.mK)({
                    openInLayer: !1,
                    tab: p.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: l.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: f.contentContainer,
        children: [
            (0, a.jsx)(A, {}),
            (0, a.jsxs)("div", {
                className: f.copyContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: f.heading,
                        children: [
                            (0, a.jsx)(u.M, {
                                shouldUseThemeColor: !0,
                                className: f.orbsIcon,
                            }),
                            (0, a.jsx)(i.X6q, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: g.intl.format(g.t["/UTD6e"], { orbsEarned: t }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: g.intl.format(g.t.g4t9a2, { orbsBalance: r }),
                    }),
                ],
            }),
            (0, a.jsx)(i.zxk, {
                variant: "secondary",
                size: "sm",
                text: g.intl.string(g.t.WYchdX),
                onClick: c,
                fullWidth: !0,
            }),
        ],
    });
}
function x(e) {
    var n;
    let { quest: t, onClose: i, transitionState: l, sourceQuestContent: s, location: c } = e,
        o = (null == (n = t.userStatus) ? void 0 : n.claimedAt) != null,
        { balance: u, error: E } = (0, d.A)(),
        p = (0, _.LM)(t.config),
        [f, b] = r.useState(o ? "success" : "loading");
    r.useEffect(() => {
        o ||
            "loading" !== f ||
            (0, h.QB)(t.id, m.y$.CROSS_PLATFORM, c)
                .then(() => b("success"))
                .catch(() => b("error"));
    }, [t.id, o, f, c]);
    let y = "loading" === f || (null == u && null == E),
        A = "error" === f || null == p || (null == u && null != E);
    return y || A
        ? null
        : (0, a.jsx)(C.Z, {
              onClose: i,
              transitionState: l,
              quest: t,
              sourceQuestContent: s,
              rewardContent: (0, a.jsx)(R.Z, {
                  rewardName: g.intl.string(g.t.Lmysvb),
                  children: (0, a.jsx)(N, {
                      onClose: i,
                      orbsEarned: p,
                      orbsBalance: u,
                  }),
              }),
          });
}
