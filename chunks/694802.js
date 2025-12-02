n.d(t, { Z: () => c }), n(784620), n(973216);
var r = n(54381);
n(473749);
var s = n(481060),
    o = n(968843),
    a = n(388032),
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
        n = (0, o.qb)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === a.intl.string(a.t.BV6xDm)
        ? (0, r.jsx)(l, {
              header: a.intl.string(a.t.onh6ct),
              children: a.intl.string(a.t.arVHRA),
          })
        : s === a.intl.string(a.t.MFGxFM)
          ? (0, r.jsx)(l, {
                header: a.intl.string(a.t.JPihZA),
                children: a.intl.string(a.t.MFGxFM),
            })
          : null;
};
