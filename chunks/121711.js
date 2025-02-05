n.d(t, { Z: () => P });
var i = n(200651),
    l = n(192379),
    r = n(990547),
    a = n(481060),
    s = n(100527),
    o = n(213609),
    c = n(335131),
    d = n(252618),
    u = n(979233),
    h = n(175307),
    m = n(17845),
    p = n(374939),
    g = n(233374),
    _ = n(611928),
    f = n(283293),
    E = n(822857),
    I = n(775451),
    C = n(63063),
    v = n(113434),
    N = n(833435),
    T = n(150560),
    S = n(558652),
    Z = n(736683),
    x = n(452081),
    A = n(46140),
    b = n(981631),
    L = n(388032),
    y = n(359643);
let P = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, x.z)(),
        { onScroll: P, scrollPosition: O } = (0, u.M)(),
        R = T.Z.getState().getUtmCurrentContext(),
        j = (0, N._)({ location: A.dr.QUEST_HOME_DESKTOP }) ? Z.Z : Z.j,
        D = l.useRef(R);
    l.useEffect(() => {
        D.current = R;
    }),
        l.useEffect(() => {
            let { current: t } = D;
            (0, o.h)({
                name: r.ImpressionNames.QUEST_HOME,
                type: r.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: t.utmSourceCurrent,
                    utm_medium_current: t.utmMediumCurrent,
                    utm_campaign_current: t.utmCampaignCurrent,
                    utm_content_current: t.utmContentCurrent,
                    tab: e
                }
            });
        }, [e]);
    let w = l.useCallback(() => {
        window.open(C.Z.getArticleURL(b.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, d.Tt)({ location: L.intl.string(L.t.JALI2N) });
    let { enabled: M } = (0, E.W)({ location: A.dr.QUEST_HOME_DESKTOP });
    return (0, i.jsxs)('div', {
        className: y.container,
        children: [
            (0, i.jsxs)(_.ZP, {
                variant: _._6.OVERLAY,
                children: [(0, i.jsx)('div', { className: y.dragRegion }), (0, i.jsx)(_.z6, { scrollPosition: O }), (0, i.jsx)(_.aV, { icon: a.qDn })]
            }),
            (0, i.jsxs)(f.Z, {
                onScroll: P,
                children: [
                    (0, i.jsx)(m.Z, {
                        title: L.intl.format(L.t.lmMBf3, {}),
                        description: L.intl.string(L.t.oWCrBg),
                        button: (0, i.jsx)(h.u, {
                            text: L.intl.string(L.t.hvVgAQ),
                            onClick: w
                        }),
                        className: y.bannerContainer,
                        children: (0, i.jsx)('div', {
                            className: y.bannerImage,
                            children: (0, i.jsx)('div', { className: y.bannerGradient })
                        })
                    }),
                    (0, i.jsxs)(p.Z, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: y.tabs,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        tabs: n,
                                        selectedTab: e,
                                        onTabSelect: t
                                    }),
                                    M &&
                                        (0, i.jsx)(I.V9, {
                                            cardAlignment: I.ek.END,
                                            ctaText: L.intl.string(L.t.iEw2Nz),
                                            ctaOnClick: () => {
                                                (0, c.mK)({
                                                    openInLayer: !1,
                                                    analyticsLocations: [],
                                                    analyticsSource: s.Z.QUEST_HOME_PAGE
                                                });
                                            }
                                        })
                                ]
                            }),
                            e === v.e5.CLAIMED ? (0, i.jsx)(j, { onSelectTab: t }) : (0, i.jsx)(S.Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
