n.d(t, { c: () => d });
var r = n(54381),
    i = n(473749),
    l = n(793030),
    a = n(481060),
    s = n(66511),
    o = n(388032),
    c = n(300137);
function d(e) {
    let { guildId: t } = e,
        n = i.useCallback(() => {
            s.Z.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, r.jsxs)(a.P3F, {
        onClick: n,
        className: c.previewButton,
        children: [
            (0, r.jsx)(l.xvT, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "text-brand",
                children: o.intl.string(o.t.SKNnqq),
            }),
            (0, r.jsx)(a.rgF, {
                size: "xs",
                color: "currentColor",
            }),
        ],
    });
}
