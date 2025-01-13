n.d(t, {
    e: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(765400),
    a = n(937615),
    o = n(817460),
    s = n(290348),
    c = n(367719),
    d = n(882101),
    u = n(388032),
    m = n(870057);
let h = (e) => {
    let { listingId: t, isListingPublished: n, expanded: h, onToggleExpanded: f } = e,
        p = (0, c.Z)(),
        [_] = s._T(t),
        [g] = s.d9(t, p),
        [E] = s.H9(t);
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(d.BM, { image: g }),
            (0, i.jsxs)('div', {
                className: m.tierTextInfoContainer,
                children: [
                    (0, i.jsx)(d.Ey, { listingName: _ }),
                    (0, i.jsxs)('div', {
                        className: m.tierPriceContainer,
                        children: [
                            !n && (0, i.jsx)(l.v, {}),
                            (0, i.jsxs)(r.Text, {
                                variant: 'text-xs/normal',
                                className: m.tierPrice,
                                children: [
                                    (0, a.T4)(E.price, E.currency),
                                    ' ',
                                    u.intl.format(u.t.isLGyc, {
                                        period: (0, o.JE)({
                                            interval: E.interval,
                                            interval_count: E.interval_count
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(r.Clickable, {
                onClick: f,
                children: h
                    ? (0, i.jsx)(r.ChevronSmallUpIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.toggleButton
                      })
                    : (0, i.jsx)(r.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.toggleButton
                      })
            })
        ]
    });
};
