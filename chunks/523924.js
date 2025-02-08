o.d(e, { Z: () => u });
var t = o(200651),
    i = o(192379),
    l = o(442837),
    c = o(481060),
    a = o(693546),
    d = o(937111),
    r = o(388032),
    s = o(832311);
let u = (n) => {
    let { headerId: e, reapplyText: o, onReapply: u, confirmText: b, onWithdrawApplication: m, rejectionReason: p = null, guild: _ = null } = n,
        f = (0, l.e7)([d.Z], () => {
            var n;
            return d.Z.getCooldown(null !== (n = null == _ ? void 0 : _.id) && void 0 !== n ? n : '0');
        });
    i.useEffect(() => {
        null == f && null != _ && a.Z.fetchJoinRequestCooldown(_.id);
    }, [f, _]);
    let C = (null != f ? f : 0) > 0,
        g = C && null != f ? Math.ceil((1000 * f - Date.now()) / 86400000) : 0;
    return (0, t.jsxs)('div', {
        className: s.confirmation,
        children: [
            (0, t.jsx)('div', {
                className: s.iconWrapper,
                children: (0, t.jsx)(c.P$X, {
                    size: 'md',
                    color: c.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, t.jsxs)('div', {
                className: s.statusTextContainer,
                children: [
                    (0, t.jsx)(c.X6q, {
                        id: e,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: (null == _ ? void 0 : _.name) != null ? r.intl.formatToPlainString(r.t['P+/gzM'], { guildName: _.name }) : r.intl.string(r.t.gBPcuL)
                    }),
                    null != p && '' !== p
                        ? (0, t.jsxs)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: [
                                  (0, t.jsx)('span', {
                                      className: s.rejectionReasonLabel,
                                      children: r.intl.string(r.t.cf1psb)
                                  }),
                                  (0, t.jsx)('span', { children: p })
                              ]
                          })
                        : null
                ]
            }),
            (0, t.jsxs)('div', {
                className: s.confirmationButtonRow,
                children: [
                    (0, t.jsx)(c.DY3, {
                        className: s.confirmationButton,
                        text: C ? r.intl.formatToPlainString(r.t.A0f0Pz, { days: g }) : null,
                        'aria-label': C ? r.intl.formatToPlainString(r.t.A0f0Pz, { days: g }) : void 0,
                        children: (0, t.jsx)(c.zxk, {
                            className: s.confirmationTooltipContents,
                            onClick: u,
                            color: c.zxk.Colors.PRIMARY,
                            size: c.zxk.Sizes.LARGE,
                            submitting: null == f,
                            disabled: C,
                            children: o
                        })
                    }),
                    (0, t.jsx)(c.zxk, {
                        onClick: m,
                        size: c.zxk.Sizes.LARGE,
                        color: c.zxk.Colors.RED,
                        className: s.confirmationButton,
                        children: b
                    })
                ]
            })
        ]
    });
};
