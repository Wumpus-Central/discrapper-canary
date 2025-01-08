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
    b = n(388032),
    A = n(359643);
t.Z = function () {
    let { selectedTab: e, onSelectTab: t, tabs: n } = (0, v.z)(),
        { onScroll: Z, scrollPosition: x } = (0, c.M)(),
        L = I.Z.getState().getUtmCurrentContext(),
        P = (0, E._)({ location: S.dr.QUEST_HOME_DESKTOP }) ? N.Z : N.j,
        O = r.useRef(L);
    r.useEffect(() => {
        O.current = L;
    }),
        r.useEffect(() => {
            let { current: t } = O;
            (0, s.h)({
                name: l.ImpressionNames.QUEST_HOME,
                type: l.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: t.utmSourceCurrent,
                    utm_medium_current: t.utmMediumCurrent,
                    utm_campaign_current: t.utmCampaignCurrent,
                    utm_content_current: t.utmContentCurrent,
                    tab: e
                }
            });
        }, [e]);
    let y = r.useCallback(() => {
        window.open(f.Z.getArticleURL(T.BhN.QUESTS_LEARN_MORE));
    }, []);
    return (
        (0, o.Tt)({ location: b.intl.string(b.t.JALI2N) }),
        (0, i.jsxs)('div', {
            className: A.container,
            children: [
                (0, i.jsxs)(p.ZP, {
                    variant: p._6.OVERLAY,
                    children: [(0, i.jsx)('div', { className: A.dragRegion }), (0, i.jsx)(p.z6, { scrollPosition: x }), (0, i.jsx)(p.aV, { icon: a.QuestsIcon })]
                }),
                (0, i.jsxs)(g.Z, {
                    onScroll: Z,
                    children: [
                        (0, i.jsx)(u.Z, {
                            title: b.intl.format(b.t.lmMBf3, {}),
                            description: b.intl.string(b.t.oWCrBg),
                            button: (0, i.jsx)(d.u, {
                                text: b.intl.string(b.t.hvVgAQ),
                                onClick: y
                            }),
                            className: A.bannerContainer,
                            children: (0, i.jsx)('div', {
                                className: A.bannerImage,
                                children: (0, i.jsx)('div', { className: A.bannerGradient })
                            })
                        }),
                        (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsx)(m.Z, {
                                    tabs: n,
                                    selectedTab: e,
                                    onTabSelect: t,
                                    className: A.tabs
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
