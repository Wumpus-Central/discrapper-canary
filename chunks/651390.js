n.d(t, { c: () => d });
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(481060),
    a = n(66511),
    o = n(388032),
    c = n(33813);
function d(e) {
    let { guildId: t } = e,
        n = r.useCallback(() => {
            a.Z.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, i.jsxs)(s.P3F, {
        onClick: n,
        className: c.previewButton,
        children: [
            (0, i.jsx)(l.xv, {
                tag: 'span',
                variant: 'text-sm/semibold',
                color: 'text-brand',
                children: o.intl.string(o.t.SKNnqq)
            }),
            (0, i.jsx)(s.rgF, {
                size: 'xs',
                color: 'currentColor'
            })
        ]
    });
}
