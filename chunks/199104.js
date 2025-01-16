n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(704215),
    a = n(481060),
    s = n(410575),
    o = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(243778),
    h = n(352455),
    m = n(480294),
    p = n(791359),
    g = n(981631),
    f = n(388032),
    _ = n(178584);
function E() {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN),
        t = (0, r.e7)([m.Z], () => m.Z.hasConsented(g.pjP.PERSONALIZATION)) ? [] : [l.z.NOW_PLAYING_CONSENT_CARD],
        n = (0, d.Dt)();
    return (0, i.jsx)(c.Gt, {
        value: e,
        children: (0, i.jsx)(s.Z, {
            section: g.jXE.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)('aside', {
                className: _.container,
                'aria-labelledby': n,
                children: (0, i.jsxs)(a.Scroller, {
                    className: _.scroller,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-lg/semibold',
                            className: _.header,
                            id: n,
                            children: f.intl.string(f.t.F4Zgg4)
                        }),
                        (0, i.jsx)(u.ZP, {
                            contentTypes: t,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === l.z.NOW_PLAYING_CONSENT_CARD)
                                    return (0, i.jsx)(h.Z, {
                                        className: _.__invalid_consentCard,
                                        markAsDismissed: n
                                    });
                            }
                        }),
                        (0, i.jsx)(p.Z, {})
                    ]
                })
            })
        })
    });
}
