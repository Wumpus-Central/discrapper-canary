n.d(t, { Z: () => D });
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
    _ = n(283293),
    E = n(822857),
    O = n(775451),
    N = n(63063),
    v = n(113434),
    y = n(569984),
    I = n(833435),
    C = n(918701),
    S = n(150560),
    T = n(558652),
    P = n(736683),
    j = n(452081),
    A = n(46140),
    Z = n(642145),
    x = n(981631),
    L = n(215023),
    w = n(388032),
    R = n(941338);
let D = function () {
    var e;
    let { selectedTab: t, onSelectTab: n, tabs: D } = (0, j.z)(),
        { onScroll: k, scrollPosition: M } = (0, p.M)(),
        U = S.Z.getState().getUtmCurrentContext(),
        G = (0, I._)({ location: A.dr.QUEST_HOME_DESKTOP }) ? P.Z : P.j,
        W = i.useRef(U);
    i.useEffect(() => {
        W.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = W;
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
    let { enabled: V } = (0, E.W)({ location: A.dr.QUEST_HOME_DESKTOP }),
        B = null !== (e = (0, o.e7)([y.Z], () => y.Z.getQuest(Z.V), [])) && void 0 !== e ? e : null,
        H = null !== B && !(0, C.zi)(B),
        F = i.useCallback(() => {
            !H && window.open(N.Z.getArticleURL(x.BhN.QUESTS_LEARN_MORE));
        }, [H]);
    (0, d.Tt)({ location: w.NW.string(w.t.JALI2N) });
    let z = H ? w.NW.format(w.t.BCBIlp, {}) : w.NW.format(w.t.lmMBf3, {}),
        Y = H ? w.NW.format(w.t.U9FY0N, {}) : w.NW.string(w.t.oWCrBg);
    return (0, r.jsxs)('div', {
        className: R.container,
        children: [
            (0, r.jsxs)(b.ZP, {
                variant: b._6.OVERLAY,
                children: [(0, r.jsx)('div', { className: R.dragRegion }), (0, r.jsx)(b.z6, { scrollPosition: M }), (0, r.jsx)(b.aV, { icon: a.qDn })]
            }),
            (0, r.jsxs)(_.Z, {
                onScroll: k,
                children: [
                    (0, r.jsx)(f.Z, {
                        title: z,
                        description: Y,
                        button: (0, r.jsx)(h.u, {
                            text: w.NW.string(w.t.hvVgAQ),
                            onClick: F
                        }),
                        className: R.bannerContainer,
                        children: (0, r.jsx)('div', {
                            className: R.bannerImage,
                            children: (0, r.jsx)('div', { className: R.bannerGradient })
                        })
                    }),
                    (0, r.jsxs)(g.Z, {
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.tabs,
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        tabs: D,
                                        selectedTab: t,
                                        onTabSelect: n
                                    }),
                                    V &&
                                        (0, r.jsx)(O.V9, {
                                            cardAlignment: O.ek.END,
                                            ctaText: w.NW.string(w.t.iEw2Nz),
                                            ctaOnClick: () => {
                                                (0, u.mK)({
                                                    openInLayer: !1,
                                                    tab: L.AW.ORBS,
                                                    analyticsLocations: [],
                                                    analyticsSource: s.Z.QUEST_HOME_PAGE
                                                });
                                            }
                                        })
                                ]
                            }),
                            t === v.e5.CLAIMED ? (0, r.jsx)(G, { onSelectTab: n }) : (0, r.jsx)(T.Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
