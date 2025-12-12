n.d(t, { A: () => s });
var r = n(54381),
    i = n(481060),
    a = n(388032),
    o = n(724825);
function s(e) {
    let { rewardName: t } = e;
    return (0, r.jsx)(i.Text, {
        variant: "text-xs/medium",
        className: o.rewardPill,
        children: a.intl.format(a.t.loyTil, {
            rewardName: (e, n) =>
                (0, r.jsx)(
                    i.Text,
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
