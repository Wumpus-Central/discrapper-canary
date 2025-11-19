n.d(t, { T: () => s });
var r = n(54381),
    a = n(481060),
    i = n(388032),
    o = n(675853);
function s(e) {
    let { rewardName: t } = e;
    return (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: o.rewardPill,
        children: i.intl.format(i.t.loyTil, {
            rewardName: (e, n) =>
                (0, r.jsx)(
                    a.Text,
                    {
                        variant: "text-xs/medium",
                        className: o.rewardName,
                        children: t,
                    },
                    n,
                ),
            verticalDivider: (e, t) => (0, r.jsx)("div", { className: o.divider }, t),
        }),
    });
}
