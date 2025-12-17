n.d(t, { Z: () => c }), n(784620), n(973216);
var a = n(54381);
n(473749);
var r = n(481060),
    l = n(968843),
    i = n(388032),
    s = n(864983);
function o(e) {
    let { header: t, children: n } = e;
    return (0, a.jsxs)("div", {
        className: s.card,
        children: [
            (0, a.jsxs)("div", {
                className: s.header,
                children: [
                    (0, a.jsx)(r.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: s.icon,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(r.Heading, {
                        color: "text-default",
                        variant: "heading-sm/medium",
                        children: t,
                    }),
                ],
            }),
            (0, a.jsx)(r.Text, {
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
        n = (0, l.qb)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === i.intl.string(i.t.BV6xDm)
        ? (0, a.jsx)(o, {
              header: i.intl.string(i.t.onh6ct),
              children: i.intl.string(i.t.arVHRA),
          })
        : r === i.intl.string(i.t.MFGxFM)
          ? (0, a.jsx)(o, {
                header: i.intl.string(i.t.JPihZA),
                children: i.intl.string(i.t.MFGxFM),
            })
          : null;
};
