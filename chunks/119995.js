a.d(t, {
    r: () => r,
});
var s = a(627968),
    n = a(397927),
    i = a(985018),
    c = a(991635);

function r(e) {
    let { rewardName: t } = e;
    return (0, s.jsx)(n.Text, {
        variant: "text-xs/medium",
        className: c.tI,
        children: i.intl.format(i.t.loyTil, {
            rewardName: (e, a) =>
                (0, s.jsx)(
                    n.Text,
                    {
                        variant: "text-xs/medium",
                        className: c.Ht,
                        children: t,
                    },
                    a,
                ),
            verticalDivider: (e, t) =>
                (0, s.jsx)(
                    "div",
                    {
                        className: c.yF,
                    },
                    t,
                ),
        }),
    });
}
