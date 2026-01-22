n.d(t, {
    K: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(17372),
    l = n(843376),
    a = n(985018),
    o = n(101865);
let c = (e) => {
    let { showBackButton: t, onBack: n, renderFooter: c, onReopen: u } = e,
        d = (0, l.i)(s.tY.MEDIA_TAKEDOWN, u),
        h = (0, r.jsxs)(i.ButtonGroup, {
            fullWidth: !0,
            children: [
                t &&
                    null != n &&
                    (0, r.jsx)(i.Button, {
                        variant: "secondary",
                        text: a.intl.string(a.t["13/7kX"]),
                        onClick: n,
                    }),
                (0, r.jsx)(i.Button, {
                    text: a.intl.string(a.t.D5Czbu),
                    variant: "primary",
                    onClick: d,
                }),
            ],
        });
    return (0, r.jsxs)(i.BJc, {
        gap: 8,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: a.intl.string(a.t.jMSjZL),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                className: o.D,
                children: a.intl.format(a.t.SenKQA, {}),
            }),
            null == c ? void 0 : c(h),
        ],
    });
};
