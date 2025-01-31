n.d(t, { Z: () => c }), n(571269), n(298267);
var s = n(200651);
n(192379);
var r = n(481060),
    a = n(113434),
    o = n(388032),
    i = n(597924);
function l(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)('div', {
        className: i.card,
        children: [
            (0, s.jsxs)('div', {
                className: i.header,
                children: [
                    (0, s.jsx)(r.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: i.icon,
                        width: 16,
                        height: 16
                    }),
                    (0, s.jsx)(r.X6q, {
                        color: 'text-normal',
                        variant: 'heading-sm/medium',
                        children: t
                    })
                ]
            }),
            (0, s.jsx)(r.Text, {
                color: 'text-muted',
                variant: 'text-xs/normal',
                className: i.warningBody,
                children: n
            })
        ]
    });
}
let c = function (e) {
    let { quest: t } = e,
        n = (0, a.qb)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === o.intl.string(o.t.BV6xDg)
        ? (0, s.jsx)(l, {
              header: o.intl.string(o.t.onh6cn),
              children: o.intl.string(o.t.arVHRE)
          })
        : r === o.intl.string(o.t.MFGxFB)
          ? (0, s.jsx)(l, {
                header: o.intl.string(o.t.JPihZG),
                children: o.intl.string(o.t.MFGxFB)
            })
          : null;
};
