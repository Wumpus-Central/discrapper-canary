n.d(t, { Z: () => I });
var r = n(951288);
n(647438);
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
    m = n(352455),
    g = n(480294),
    _ = n(791359),
    b = n(981631),
    E = n(388032),
    O = n(708567);
function I(e) {
    let { isStandalone: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(u.Z.ACTIVE_NOW_COLUMN),
        i = (0, a.e7)([g.Z], () => g.Z.hasConsented(b.pjP.PERSONALIZATION)) ? [] : [s.z.NOW_PLAYING_CONSENT_CARD],
        I = h.o.useConfig({ location: "nowplaying" }).demureActivityCards,
        v = h.o.useConfig({ location: "nowplaying" }).friendsTab,
        y = (0, p.Dt)();
    return (0, r.jsx)(d.Gt, {
        value: n,
        children: (0, r.jsx)(c.Z, {
            section: b.jXE.ACTIVE_NOW_COLUMN,
            children: (0, r.jsx)("aside", {
                className: l()(O.container, {
                    [O.refreshActiveNow]: I,
                    "refresh-active-now": I,
                }),
                "aria-labelledby": y,
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
                                      id: y,
                                      children: E.intl.string(E.t.F4Zggw),
                                  }),
                            (0, r.jsx)(f.ZP, {
                                contentTypes: i,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === s.z.NOW_PLAYING_CONSENT_CARD)
                                        return (0, r.jsx)(m.Z, {
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
