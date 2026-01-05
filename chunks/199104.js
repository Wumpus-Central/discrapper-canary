n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(410575),
    u = n(100527),
    d = n(906732),
    p = n(313201),
    f = n(243778),
    g = n(352455),
    m = n(480294),
    h = n(791359),
    b = n(981631),
    _ = n(388032),
    E = n(833047);
function O() {
    let { analyticsLocations: e } = (0, d.ZP)(u.Z.ACTIVE_NOW_COLUMN),
        t = (0, a.e7)([m.Z], () => m.Z.hasConsented(b.pjP.PERSONALIZATION)) ? [] : [o.z.NOW_PLAYING_CONSENT_CARD],
        n = (0, p.Dt)();
    return (0, r.jsx)(d.Gt, {
        value: e,
        children: (0, r.jsx)(c.Z, {
            section: b.jXE.ACTIVE_NOW_COLUMN,
            children: (0, r.jsx)("aside", {
                className: l()(E.container, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, r.jsx)(s.Ttm, {
                    className: E.scroller,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                className: E.header,
                                id: n,
                                children: _.intl.string(_.t.F4Zggw),
                            }),
                            (0, r.jsx)(f.ZP, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === o.z.NOW_PLAYING_CONSENT_CARD)
                                        return (0, r.jsx)(g.Z, {
                                            className: E.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, r.jsx)(h.Z, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
