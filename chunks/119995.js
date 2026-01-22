n.d(t, { r: () => l });
var s = n(627968),
    i = n(397927),
    a = n(985018),
    r = n(991635);
function l(e) {
    let { rewardName: t } = e;
    return (0, s.jsx)(i.Text, {
        variant: "text-xs/medium",
        className: r.tI,
        children: a.intl.format(a.t.loyTil, {
            rewardName: (e, n) =>
                (0, s.jsx)(
                    i.Text,
                    {
                        variant: "text-xs/medium",
                        className: r.Ht,
                        children: t,
                    },
                    n,
                ),
            verticalDivider: (e, t) => (0, s.jsx)("div", { className: r.yF }, t),
        }),
    });
}
