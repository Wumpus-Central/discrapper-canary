n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(704215),
    a = n(481060),
    s = n(410575),
    o = n(100527),
    d = n(906732),
    c = n(313201),
    u = n(243778),
    h = n(352455),
    m = n(480294),
    p = n(791359),
    g = n(981631),
    _ = n(388032),
    f = n(150737);
function E() {
    let { analyticsLocations: e } = (0, d.ZP)(o.Z.ACTIVE_NOW_COLUMN),
        t = (0, l.e7)([m.Z], () => m.Z.hasConsented(g.pjP.PERSONALIZATION)) ? [] : [r.z.NOW_PLAYING_CONSENT_CARD],
        n = (0, c.Dt)();
    return (0, i.jsx)(d.Gt, {
        value: e,
        children: (0, i.jsx)(s.Z, {
            section: g.jXE.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)('aside', {
                className: f.container,
                'aria-labelledby': n,
                children: (0, i.jsxs)(a.Ttm, {
                    className: f.scroller,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-lg/semibold',
                            className: f.header,
                            id: n,
                            children: _.intl.string(_.t.F4Zgg4)
                        }),
                        (0, i.jsx)(u.ZP, {
                            contentTypes: t,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === r.z.NOW_PLAYING_CONSENT_CARD)
                                    return (0, i.jsx)(h.Z, {
                                        className: f.__invalid_consentCard,
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
