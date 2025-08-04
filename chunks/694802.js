(n.d(t, { Z: () => c }), n(784620), n(973216));
var r = n(255367);
n(73800);
var s = n(481060),
    o = n(113434),
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
                    (0, r.jsx)(s.Mgn, {
                        size: 'custom',
                        color: 'currentColor',
                        className: i.icon,
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(s.X6q, {
                        color: 'text-default',
                        variant: 'heading-sm/medium',
                        children: t
                    })
                ]
            }),
            (0, r.jsx)(s.Text, {
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
        n = (0, o.qb)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === a.intl.string(a.t.BV6xDg)
        ? (0, r.jsx)(l, {
              header: a.intl.string(a.t.onh6cn),
              children: a.intl.string(a.t.arVHRE)
          })
        : s === a.intl.string(a.t.MFGxFB)
          ? (0, r.jsx)(l, {
                header: a.intl.string(a.t.JPihZG),
                children: a.intl.string(a.t.MFGxFB)
            })
          : null;
};
