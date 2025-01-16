n(571269), n(298267);
var o = n(200651);
n(192379);
var r = n(481060),
    s = n(113434),
    a = n(665430),
    i = n(26650),
    l = n(46140),
    c = n(388032),
    d = n(597924);
function u(e) {
    let { header: t, children: n } = e;
    return (0, o.jsxs)('div', {
        className: d.card,
        children: [
            (0, o.jsxs)('div', {
                className: d.header,
                children: [
                    (0, o.jsx)(r.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: d.icon,
                        width: 16,
                        height: 16
                    }),
                    (0, o.jsx)(r.Heading, {
                        color: 'text-normal',
                        variant: 'heading-sm/medium',
                        children: t
                    })
                ]
            }),
            (0, o.jsx)(r.Text, {
                color: 'text-muted',
                variant: 'text-xs/normal',
                className: d.warningBody,
                children: n
            })
        ]
    });
}
t.Z = function (e) {
    let { quest: t } = e,
        n = (0, a.pF)({ location: l.dr.QUESTS_BAR }),
        r = (0, s.qb)(t);
    if (0 === r.length) return null;
    let d = r.at(0);
    return n
        ? d === c.intl.string(c.t.BV6xDg)
            ? (0, o.jsx)(u, {
                  header: c.intl.string(c.t.onh6cn),
                  children: c.intl.string(c.t.arVHRE)
              })
            : d === c.intl.string(c.t.MFGxFB)
              ? (0, o.jsx)(u, {
                    header: c.intl.string(c.t.JPihZG),
                    children: c.intl.string(c.t.MFGxFB)
                })
              : null
        : (0, o.jsx)(i.Z, { children: d });
};
