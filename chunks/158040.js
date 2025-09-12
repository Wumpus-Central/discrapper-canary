a.d(n, { T: () => l });
var t = a(951288),
    i = a(481060),
    r = a(388032),
    s = a(675853);
function l(e) {
    let { rewardName: n } = e;
    return (0, t.jsx)(i.Text, {
        variant: "text-xs/medium",
        className: s.rewardPill,
        children: r.intl.format(r.t.loyTio, {
            rewardName: n,
            verticalDivider: () => (0, t.jsx)("div", { className: s.divider }),
        }),
    });
}
