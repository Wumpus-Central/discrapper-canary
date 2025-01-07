var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(17845),
    h = n(374939),
    m = n(233374),
    p = n(611928),
    g = n(283293),
    f = n(63063),
    _ = n(113434),
    E = n(833435),
    I = n(150560),
    C = n(558652),
    N = n(736683),
    v = n(452081),
    S = n(46140),
    T = n(981631),
    A = n(388032),
    b = n(359643);
t.Z = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, v.z)(),
        { onScroll: Z, scrollPosition: x } = (0, c.M)(),
        L = I.Z.getState().getUtmCurrentContext(),
        P = (0, E._)({ location: S.dr.QUEST_HOME_DESKTOP }) ? N.Z : N.j;
    r.useEffect(() => {
        (0, s.h)({
            name: l.ImpressionNames.QUEST_HOME,
            type: l.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: L.utmSourceCurrent,
                utm_medium_current: L.utmMediumCurrent,
                utm_campaign_current: L.utmCampaignCurrent,
                utm_content_current: L.utmContentCurrent,
                tab: e
            }
        });
    }, [e]);
    let O = r.useCallback(() => {
        window.open(f.Z.getArticleURL(T.BhN.QUESTS_LEARN_MORE));
    }, []);
    return (
        (0, o.Tt)({ location: A.intl.string(A.t.JALI2N) }),
        (0, i.jsxs)('div', {
            className: b.container,
            children: [
                (0, i.jsxs)(p.ZP, {
                    variant: p._6.OVERLAY,
                    children: [(0, i.jsx)('div', { className: b.dragRegion }), (0, i.jsx)(p.z6, { scrollPosition: x }), (0, i.jsx)(p.aV, { icon: a.QuestsIcon })]
                }),
                (0, i.jsxs)(g.Z, {
                    onScroll: Z,
                    children: [
                        (0, i.jsx)(u.Z, {
                            title: A.intl.format(A.t.lmMBf3, {}),
                            description: A.intl.string(A.t.oWCrBg),
                            button: (0, i.jsx)(d.u, {
                                text: A.intl.string(A.t.hvVgAQ),
                                onClick: O
                            }),
                            className: b.bannerContainer,
                            children: (0, i.jsx)('div', {
                                className: b.bannerImage,
                                children: (0, i.jsx)('div', { className: b.bannerGradient })
                            })
                        }),
                        (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsx)(m.Z, {
                                    tabs: n,
                                    selectedTab: e,
                                    onTabSelect: t,
                                    className: b.tabs
                                }),
                                e === _.e5.CLAIMED ? (0, i.jsx)(P, { onSelectTab: t }) : (0, i.jsx)(C.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
