n.d(t, { Z: () => c }), n(784620), n(973216);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(113434),
    o = n(388032),
    s = n(603558);
function l(e) {
    let { header: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: s.card,
        children: [
            (0, r.jsxs)("div", {
                className: s.header,
                children: [
                    (0, r.jsx)(i.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: s.icon,
                        width: 16,
                        height: 16,
                    }),
                    (0, r.jsx)(i.X6q, {
                        color: "text-default",
                        variant: "heading-sm/medium",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(i.Text, {
                color: "text-muted",
                variant: "text-xs/normal",
                className: s.warningBody,
                children: n,
            }),
        ],
    });
}
let c = function (e) {
    let { quest: t } = e,
        n = (0, a.qb)(t);
    if (0 === n.length) return null;
    let i = n.at(0);
    return i === o.intl.string(o.t.BV6xDg)
        ? (0, r.jsx)(l, {
              header: o.intl.string(o.t.onh6cn),
              children: o.intl.string(o.t.arVHRE),
          })
        : i === o.intl.string(o.t.MFGxFB)
          ? (0, r.jsx)(l, {
                header: o.intl.string(o.t.JPihZG),
                children: o.intl.string(o.t.MFGxFB),
            })
          : null;
};
