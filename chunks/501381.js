n.d(t, {
    o: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(397927),
    a = n(415951),
    c = n(985018),
    o = n(796333);

function d(e) {
    let { guildId: t } = e,
        n = i.useCallback(() => {
            a.A.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, r.jsxs)(s.DUT, {
        onClick: n,
        className: o.j,
        children: [
            (0, r.jsx)(l.EYj, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "text-brand",
                children: c.intl.string(c.t.SKNnqq),
            }),
            (0, r.jsx)(s.tfB, {
                size: "xs",
                color: "currentColor",
            }),
        ],
    });
}
