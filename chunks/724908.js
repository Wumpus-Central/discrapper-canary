n.d(t, { A: () => s });
var a = n(54381),
    r = n(481060),
    i = n(388032),
    o = n(571069);
function s(e) {
    let { rewardName: t } = e;
    return (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        className: o.rewardPill,
        children: i.intl.format(i.t.loyTil, {
            rewardName: (e, n) =>
                (0, a.jsx)(
                    r.Text,
                    {
                        variant: "text-xs/medium",
                        className: o.rewardName,
                        children: t,
                    },
                    n,
                ),
            verticalDivider: (e, t) => (0, a.jsx)("div", { className: o.divider }, t),
        }),
    });
}
