n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(410575),
    s = n(100527),
    c = n(906732),
    u = n(313201),
    d = n(243778),
    p = n(352455),
    h = n(480294),
    f = n(791359),
    g = n(981631),
    m = n(388032),
    b = n(135119);
function _() {
    let { analyticsLocations: e } = (0, c.ZP)(s.Z.ACTIVE_NOW_COLUMN),
        t = (0, i.e7)([h.Z], () => h.Z.hasConsented(g.pjP.PERSONALIZATION)) ? [] : [l.z.NOW_PLAYING_CONSENT_CARD],
        n = (0, u.Dt)();
    return (0, r.jsx)(c.Gt, {
        value: e,
        children: (0, r.jsx)(a.Z, {
            section: g.jXE.ACTIVE_NOW_COLUMN,
            children: (0, r.jsx)('aside', {
                className: b.container,
                'aria-labelledby': n,
                children: (0, r.jsxs)(o.Ttm, {
                    className: b.scroller,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: b.header,
                            id: n,
                            children: m.NW.string(m.t.F4Zgg4)
                        }),
                        (0, r.jsx)(d.ZP, {
                            contentTypes: t,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === l.z.NOW_PLAYING_CONSENT_CARD)
                                    return (0, r.jsx)(p.Z, {
                                        className: b.__invalid_consentCard,
                                        markAsDismissed: n
                                    });
                            }
                        }),
                        (0, r.jsx)(f.Z, {})
                    ]
                })
            })
        })
    });
}
