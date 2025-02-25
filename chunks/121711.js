n.d(t, { Z: () => k });
var r = n(200651),
    i = n(192379),
    l = n(990547),
    o = n(442837),
    a = n(481060),
    s = n(100527),
    c = n(213609),
    u = n(335131),
    d = n(252618),
    p = n(979233),
    h = n(175307),
    f = n(17845),
    g = n(374939),
    m = n(233374),
    b = n(611928),
    _ = n(922122),
    E = n(283293),
    O = n(822857),
    N = n(775451),
    v = n(63063),
    y = n(113434),
    I = n(569984),
    C = n(833435),
    S = n(918701),
    T = n(150560),
    P = n(558652),
    j = n(736683),
    A = n(452081),
    Z = n(46140),
    x = n(642145),
    L = n(981631),
    w = n(215023),
    R = n(388032),
    D = n(941338);
let k = function () {
    var e;
    let { selectedTab: t, onSelectTab: n, tabs: k } = (0, A.z)(),
        { onScroll: M, scrollPosition: U } = (0, p.M)(),
        G = T.Z.getState().getUtmCurrentContext(),
        W = (0, C._)({ location: Z.dr.QUEST_HOME_DESKTOP }) ? j.Z : j.j,
        V = i.useRef(G);
    i.useEffect(() => {
        V.current = G;
    }),
        i.useEffect(() => {
            let { current: e } = V;
            (0, c.h)({
                name: l.ImpressionNames.QUEST_HOME,
                type: l.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: t
                }
            });
        }, [t]);
    let { enabled: B } = (0, O.W)({ location: Z.dr.QUEST_HOME_DESKTOP }),
        H = null !== (e = (0, o.e7)([I.Z], () => I.Z.getQuest(x.V), [])) && void 0 !== e ? e : null,
        F = null !== H && !(0, S.zi)(H),
        z = i.useCallback(() => {
            !F && window.open(v.Z.getArticleURL(L.BhN.QUESTS_LEARN_MORE));
        }, [F]);
    (0, d.Tt)({ location: R.NW.string(R.t.JALI2N) });
    let Y = F ? R.NW.format(R.t.BCBIlp, {}) : R.NW.format(R.t.lmMBf3, {}),
        K = F ? R.NW.format(R.t.U9FY0N, {}) : R.NW.string(R.t.oWCrBg);
    return (0, r.jsxs)('div', {
        className: D.container,
        children: [
            (0, r.jsxs)(b.ZP, {
                variant: b._6.OVERLAY,
                children: [
                    (0, r.jsx)('div', { className: D.dragRegion }),
                    (0, r.jsx)(b.z6, { scrollPosition: U }),
                    (0, r.jsx)(b.aV, { icon: a.qDn }),
                    B &&
                        (0, r.jsxs)('div', {
                            className: D.tabsExperimental,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    tabs: k,
                                    selectedTab: t,
                                    onTabSelect: n
                                }),
                                (0, r.jsx)(N.V9, {
                                    cardAlignment: N.ek.END,
                                    ctaText: R.NW.string(R.t.iEw2Nz),
                                    ctaOnClick: () => {
                                        (0, u.mK)({
                                            openInLayer: !1,
                                            tab: w.AW.ORBS,
                                            analyticsLocations: [],
                                            analyticsSource: s.Z.QUEST_HOME_PAGE
                                        });
                                    }
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsxs)(E.Z, {
                onScroll: M,
                children: [
                    (0, r.jsx)(f.Z, {
                        title: Y,
                        description: K,
                        button: (0, r.jsx)(h.u, {
                            text: R.NW.string(R.t.hvVgAQ),
                            onClick: z
                        }),
                        className: D.bannerContainer,
                        children: (0, r.jsx)('div', {
                            className: D.bannerImage,
                            children: (0, r.jsx)('div', { className: D.bannerGradient })
                        })
                    }),
                    (0, r.jsxs)(g.Z, {
                        children: [
                            !B &&
                                (0, r.jsx)('div', {
                                    className: D.tabs,
                                    children: (0, r.jsx)(m.Z, {
                                        tabs: k,
                                        selectedTab: t,
                                        onTabSelect: n
                                    })
                                }),
                            t === y.e5.CLAIMED ? (0, r.jsx)(W, { onSelectTab: n }) : (0, r.jsx)(P.Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
