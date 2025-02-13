n.d(t, { Z: () => w });
var i = n(200651),
    l = n(192379),
    r = n(990547),
    a = n(442837),
    s = n(481060),
    o = n(100527),
    c = n(213609),
    d = n(335131),
    u = n(252618),
    h = n(979233),
    m = n(175307),
    p = n(17845),
    g = n(374939),
    _ = n(233374),
    f = n(611928),
    E = n(283293),
    I = n(822857),
    C = n(775451),
    N = n(63063),
    v = n(113434),
    T = n(569984),
    S = n(833435),
    b = n(918701),
    A = n(150560),
    Z = n(558652),
    x = n(736683),
    L = n(452081),
    y = n(46140),
    P = n(642145),
    O = n(981631),
    R = n(215023),
    j = n(388032),
    D = n(144411);
let w = function () {
    var e;
    let { selectedTab: t, onSelectTab: n, tabs: w } = (0, L.z)(),
        { onScroll: k, scrollPosition: M } = (0, h.M)(),
        U = A.Z.getState().getUtmCurrentContext(),
        G = (0, S._)({ location: y.dr.QUEST_HOME_DESKTOP }) ? x.Z : x.j,
        B = l.useRef(U);
    l.useEffect(() => {
        B.current = U;
    }),
        l.useEffect(() => {
            let { current: e } = B;
            (0, c.h)({
                name: r.ImpressionNames.QUEST_HOME,
                type: r.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: t
                }
            });
        }, [t]);
    let { enabled: V } = (0, I.W)({ location: y.dr.QUEST_HOME_DESKTOP }),
        H = null !== (e = (0, a.e7)([T.Z], () => T.Z.getQuest(P.V), [])) && void 0 !== e ? e : null,
        F = null !== H && !(0, b.zi)(H),
        z = l.useCallback(() => {
            !F && window.open(N.Z.getArticleURL(O.BhN.QUESTS_LEARN_MORE));
        }, [F]);
    (0, u.Tt)({ location: j.intl.string(j.t.JALI2N) });
    let W = F ? j.intl.format(j.t.BCBIlp, {}) : j.intl.format(j.t.lmMBf3, {}),
        Y = F ? j.intl.format(j.t.U9FY0N, {}) : j.intl.string(j.t.oWCrBg);
    return (0, i.jsxs)('div', {
        className: D.container,
        children: [
            (0, i.jsxs)(f.ZP, {
                variant: f._6.OVERLAY,
                children: [(0, i.jsx)('div', { className: D.dragRegion }), (0, i.jsx)(f.z6, { scrollPosition: M }), (0, i.jsx)(f.aV, { icon: s.qDn })]
            }),
            (0, i.jsxs)(E.Z, {
                onScroll: k,
                children: [
                    (0, i.jsx)(p.Z, {
                        title: W,
                        description: Y,
                        button: (0, i.jsx)(m.u, {
                            text: j.intl.string(j.t.hvVgAQ),
                            onClick: z
                        }),
                        className: D.bannerContainer,
                        children: (0, i.jsx)('div', {
                            className: D.bannerImage,
                            children: (0, i.jsx)('div', { className: D.bannerGradient })
                        })
                    }),
                    (0, i.jsxs)(g.Z, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.tabs,
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        tabs: w,
                                        selectedTab: t,
                                        onTabSelect: n
                                    }),
                                    V &&
                                        (0, i.jsx)(C.V9, {
                                            cardAlignment: C.ek.END,
                                            ctaText: j.intl.string(j.t.iEw2Nz),
                                            ctaOnClick: () => {
                                                (0, d.mK)({
                                                    openInLayer: !1,
                                                    tab: R.AW.ORBS,
                                                    analyticsLocations: [],
                                                    analyticsSource: o.Z.QUEST_HOME_PAGE
                                                });
                                            }
                                        })
                                ]
                            }),
                            t === v.e5.CLAIMED ? (0, i.jsx)(G, { onSelectTab: n }) : (0, i.jsx)(Z.Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
