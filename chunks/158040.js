n.d(t, { T: () => o });
var a = n(54381),
    r = n(481060),
    i = n(388032),
    s = n(675853);
function o(e) {
    let { rewardName: t } = e;
    return (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        className: s.rewardPill,
        children: i.intl.format(i.t.loyTil, {
            rewardName: (e, n) =>
                (0, a.jsx)(
                    r.Text,
                    {
                        variant: "text-xs/medium",
                        className: s.rewardName,
                        children: t,
                    },
                    n,
                ),
            verticalDivider: (e, t) => (0, a.jsx)("div", { className: s.divider }, t),
        }),
    });
}
