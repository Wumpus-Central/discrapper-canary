n.d(t, { Z: () => c }), n(784620), n(973216);
var r = n(951288);
n(647438);
var s = n(481060),
    a = n(113434),
    o = n(388032),
    i = n(603558);
function l(e) {
    let { header: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: i.card,
        children: [
            (0, r.jsxs)("div", {
                className: i.header,
                children: [
                    (0, r.jsx)(s.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: i.icon,
                        width: 16,
                        height: 16,
                    }),
                    (0, r.jsx)(s.Heading, {
                        color: "text-default",
                        variant: "heading-sm/medium",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(s.Text, {
                color: "text-muted",
                variant: "text-xs/normal",
                className: i.warningBody,
                children: n,
            }),
        ],
    });
}
let c = function (e) {
    let { quest: t } = e,
        n = (0, a.qb)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === o.intl.string(o.t.BV6xDg)
        ? (0, r.jsx)(l, {
              header: o.intl.string(o.t.onh6cn),
              children: o.intl.string(o.t.arVHRE),
          })
        : s === o.intl.string(o.t.MFGxFB)
          ? (0, r.jsx)(l, {
                header: o.intl.string(o.t.JPihZG),
                children: o.intl.string(o.t.MFGxFB),
            })
          : null;
};
