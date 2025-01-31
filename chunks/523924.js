o.d(e, { Z: () => u });
var t = o(200651),
    i = o(192379),
    l = o(442837),
    c = o(481060),
    d = o(693546),
    a = o(937111),
    r = o(388032),
    s = o(832311);
let u = (n) => {
    let { headerId: e, reapplyText: o, onReapply: u, confirmText: b, onWithdrawApplication: m, rejectionReason: p = null, guild: _ = null } = n,
        f = (0, l.e7)([a.Z], () => {
            var n;
            return a.Z.getCooldown(null !== (n = null == _ ? void 0 : _.id) && void 0 !== n ? n : '0');
        });
    i.useEffect(() => {
        null == f && null != _ && d.Z.fetchJoinRequestCooldown(_.id);
    }, [f, _]);
    let g = (null != f ? f : 0) > 0,
        h = g && null != f ? Math.ceil((1000 * f - Date.now()) / 86400000) : 0;
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
                className: s.rejectText,
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
                        text: g ? r.intl.formatToPlainString(r.t.A0f0Pz, { days: h }) : null,
                        'aria-label': g ? r.intl.formatToPlainString(r.t.A0f0Pz, { days: h }) : void 0,
                        children: (0, t.jsx)(c.zxk, {
                            className: s.confirmationTooltipContents,
                            onClick: u,
                            color: c.zxk.Colors.PRIMARY,
                            size: c.zxk.Sizes.LARGE,
                            submitting: null == f,
                            disabled: g,
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
