n.d(t, { Z: () => c }), n(571269), n(298267);
var r = n(200651);
n(192379);
var o = n(481060),
    s = n(113434),
    a = n(388032),
    i = n(686166);
function l(e) {
    let { header: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: i.card,
        children: [
            (0, r.jsxs)('div', {
                className: i.header,
                children: [
                    (0, r.jsx)(o.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: i.icon,
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(o.X6q, {
                        color: 'text-normal',
                        variant: 'heading-sm/medium',
                        children: t
                    })
                ]
            }),
            (0, r.jsx)(o.Text, {
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
        n = (0, s.qb)(t);
    if (0 === n.length) return null;
    let o = n.at(0);
    return o === a.NW.string(a.t.BV6xDg)
        ? (0, r.jsx)(l, {
              header: a.NW.string(a.t.onh6cn),
              children: a.NW.string(a.t.arVHRE)
          })
        : o === a.NW.string(a.t.MFGxFB)
          ? (0, r.jsx)(l, {
                header: a.NW.string(a.t.JPihZG),
                children: a.NW.string(a.t.MFGxFB)
            })
          : null;
};
