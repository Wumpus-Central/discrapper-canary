t.d(n, { T: () => o });
var a = t(54381),
    r = t(481060),
    i = t(388032),
    s = t(675853);
function o(e) {
    let { rewardName: n } = e;
    return (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        className: s.rewardPill,
        children: i.intl.format(i.t.loyTil, {
            rewardName: (e, t) =>
                (0, a.jsx)(
                    r.Text,
                    {
                        variant: "text-xs/medium",
                        className: s.rewardName,
                        children: n,
                    },
                    t,
                ),
            verticalDivider: (e, n) => (0, a.jsx)("div", { className: s.divider }, n),
        }),
    });
}
