n.d(t, { c: () => u });
var r = n(200651),
    i = n(192379),
    l = n(793030),
    s = n(481060),
    a = n(66511),
    o = n(388032),
    c = n(857742);
function u(e) {
    let { guildId: t } = e,
        n = i.useCallback(() => {
            a.Z.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, r.jsxs)(s.P3F, {
        onClick: n,
        className: c.previewButton,
        children: [
            (0, r.jsx)(l.xv, {
                tag: 'span',
                variant: 'text-sm/semibold',
                color: 'text-brand',
                children: o.intl.string(o.t.SKNnqq)
            }),
            (0, r.jsx)(s.rgF, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
