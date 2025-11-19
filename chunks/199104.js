n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(410575),
    u = n(100527),
    d = n(906732),
    p = n(313201),
    f = n(243778),
    h = n(365113),
    g = n(352455),
    m = n(480294),
    _ = n(791359),
    b = n(981631),
    E = n(388032),
    O = n(321286);
function y(e) {
    let { isStandalone: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(u.Z.ACTIVE_NOW_COLUMN),
        i = (0, a.e7)([m.Z], () => m.Z.hasConsented(b.pjP.PERSONALIZATION)) ? [] : [s.z.NOW_PLAYING_CONSENT_CARD],
        y = h.o.useConfig({ location: "nowplaying" }).demureActivityCards,
        v = h.o.useConfig({ location: "nowplaying" }).friendsTab,
        I = (0, p.Dt)();
    return (0, r.jsx)(d.Gt, {
        value: n,
        children: (0, r.jsx)(c.Z, {
            section: b.jXE.ACTIVE_NOW_COLUMN,
            children: (0, r.jsx)("aside", {
                className: l()(O.container, {
                    [O.refreshActiveNow]: y,
                    "refresh-active-now": y,
                }),
                "aria-labelledby": I,
                children: (0, r.jsx)(o.Ttm, {
                    className: l()(O.scroller, { [O.standalone]: t }),
                    children: (0, r.jsxs)("div", {
                        className: l()({ [O.standaloneContainer]: t }),
                        children: [
                            v
                                ? null
                                : (0, r.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: O.header,
                                      id: I,
                                      children: E.intl.string(E.t.F4Zggw),
                                  }),
                            (0, r.jsx)(f.ZP, {
                                contentTypes: i,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === s.z.NOW_PLAYING_CONSENT_CARD)
                                        return (0, r.jsx)(g.Z, {
                                            className: O.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, r.jsx)(_.Z, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
