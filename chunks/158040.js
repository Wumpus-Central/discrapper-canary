n.d(t, { T: () => o });
var r = n(951288),
    a = n(481060),
    i = n(388032),
    s = n(675853);
function o(e) {
    let { rewardName: t } = e;
    return (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: s.rewardPill,
        children: i.intl.format(i.t.loyTil, {
            rewardName: (e, n) =>
                (0, r.jsx)(
                    a.Text,
                    {
                        variant: "text-xs/medium",
                        className: s.rewardName,
                        children: t,
                    },
                    n,
                ),
            verticalDivider: (e, t) => (0, r.jsx)("div", { className: s.divider }, t),
        }),
    });
}
