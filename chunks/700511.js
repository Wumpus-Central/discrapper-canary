n.d(t, { e: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    s = n(82554),
    a = n(432510),
    l = n(388032),
    o = n(597604);
let c = (e) => {
    let { showBackButton: t, onBack: n, renderFooter: c, onReopen: u } = e,
        d = (0, a.l)(s.BM.MEDIA_TAKEDOWN, u),
        h = (0, r.jsxs)(i.ButtonGroup, {
            fullWidth: !0,
            children: [
                t &&
                    null != n &&
                    (0, r.jsx)(i.Button, {
                        variant: "secondary",
                        text: l.intl.string(l.t["13/7kX"]),
                        onClick: n,
                    }),
                (0, r.jsx)(i.Button, {
                    text: l.intl.string(l.t.D5Czbu),
                    variant: "primary",
                    onClick: d,
                }),
            ],
        });
    return (0, r.jsxs)(i.Kqy, {
        gap: 8,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: l.intl.string(l.t.jMSjZL),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                className: o.tidaDescription,
                children: l.intl.format(l.t.SenKQA, {}),
            }),
            null == c ? void 0 : c(h),
        ],
    });
};
