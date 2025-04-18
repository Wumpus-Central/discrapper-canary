n.d(t, { c: () => d });
var r = n(200651),
    i = n(192379),
    s = n(793030),
    l = n(481060),
    a = n(66511),
    o = n(388032),
    c = n(857742);
function d(e) {
    let { guildId: t } = e,
        n = i.useCallback(() => {
            a.Z.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, r.jsxs)(l.P3F, {
        onClick: n,
        className: c.previewButton,
        children: [
            (0, r.jsx)(s.xv, {
                tag: 'span',
                variant: 'text-sm/semibold',
                color: 'text-brand',
                children: o.NW.string(o.t.SKNnqq)
            }),
            (0, r.jsx)(l.rgF, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
