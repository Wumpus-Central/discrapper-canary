n.d(t, { Z: () => O });
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
    L = n(215023),
    y = n(388032),
    P = n(359643);
let O = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, x.z)(),
        { onScroll: O, scrollPosition: R } = (0, u.M)(),
        j = T.Z.getState().getUtmCurrentContext(),
        D = (0, N._)({ location: A.dr.QUEST_HOME_DESKTOP }) ? Z.Z : Z.j,
        w = l.useRef(j);
    l.useEffect(() => {
        w.current = j;
    }),
        l.useEffect(() => {
            let { current: t } = w;
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
    let M = l.useCallback(() => {
        window.open(C.Z.getArticleURL(b.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, d.Tt)({ location: y.intl.string(y.t.JALI2N) });
    let { enabled: k } = (0, E.W)({ location: A.dr.QUEST_HOME_DESKTOP });
    return (0, i.jsxs)('div', {
        className: P.container,
        children: [
            (0, i.jsxs)(_.ZP, {
                variant: _._6.OVERLAY,
                children: [(0, i.jsx)('div', { className: P.dragRegion }), (0, i.jsx)(_.z6, { scrollPosition: R }), (0, i.jsx)(_.aV, { icon: a.qDn })]
            }),
            (0, i.jsxs)(f.Z, {
                onScroll: O,
                children: [
                    (0, i.jsx)(m.Z, {
                        title: y.intl.format(y.t.lmMBf3, {}),
                        description: y.intl.string(y.t.oWCrBg),
                        button: (0, i.jsx)(h.u, {
                            text: y.intl.string(y.t.hvVgAQ),
                            onClick: M
                        }),
                        className: P.bannerContainer,
                        children: (0, i.jsx)('div', {
                            className: P.bannerImage,
                            children: (0, i.jsx)('div', { className: P.bannerGradient })
                        })
                    }),
                    (0, i.jsxs)(p.Z, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: P.tabs,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        tabs: n,
                                        selectedTab: e,
                                        onTabSelect: t
                                    }),
                                    k &&
                                        (0, i.jsx)(I.V9, {
                                            cardAlignment: I.ek.END,
                                            ctaText: y.intl.string(y.t.iEw2Nz),
                                            ctaOnClick: () => {
                                                (0, c.mK)({
                                                    openInLayer: !1,
                                                    tab: L.AW.ORBS,
                                                    analyticsLocations: [],
                                                    analyticsSource: s.Z.QUEST_HOME_PAGE
                                                });
                                            }
                                        })
                                ]
                            }),
                            e === v.e5.CLAIMED ? (0, i.jsx)(D, { onSelectTab: t }) : (0, i.jsx)(S.Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
