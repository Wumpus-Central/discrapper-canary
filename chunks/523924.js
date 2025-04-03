n.d(t, { Z: () => u });
var o = n(200651),
    r = n(192379),
    i = n(442837),
    c = n(481060),
    a = n(693546),
    l = n(937111),
    d = n(388032),
    s = n(916199);
let u = (e) => {
    let { headerId: t, reapplyText: n, onReapply: u, confirmText: b, onWithdrawApplication: _, rejectionReason: f = null, guild: m = null } = e,
        p = (0, i.e7)([l.Z], () => {
            var e;
            return l.Z.getCooldown(null != (e = null == m ? void 0 : m.id) ? e : '0');
        });
    r.useEffect(() => {
        null == p && null != m && a.Z.fetchJoinRequestCooldown(m.id);
    }, [p, m]);
    let g = (null != p ? p : 0) > 0,
        I = g && null != p ? Math.ceil((1000 * p - Date.now()) / 86400000) : 0;
    return (0, o.jsxs)('div', {
        className: s.confirmation,
        children: [
            (0, o.jsx)('div', {
                className: s.iconWrapper,
                children: (0, o.jsx)(c.P$X, {
                    size: 'md',
                    color: c.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, o.jsxs)('div', {
                className: s.statusTextContainer,
                children: [
                    (0, o.jsx)(c.X6q, {
                        id: t,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: (null == m ? void 0 : m.name) != null ? d.NW.formatToPlainString(d.t['P+/gzM'], { guildName: m.name }) : d.NW.string(d.t.gBPcuL)
                    }),
                    null != f && '' !== f
                        ? (0, o.jsxs)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: [
                                  (0, o.jsx)('span', {
                                      className: s.rejectionReasonLabel,
                                      children: d.NW.string(d.t.cf1psb)
                                  }),
                                  (0, o.jsx)('span', { children: f })
                              ]
                          })
                        : null
                ]
            }),
            (0, o.jsxs)('div', {
                className: s.confirmationButtonRow,
                children: [
                    (0, o.jsx)(c.DY3, {
                        className: s.confirmationButton,
                        text: g ? d.NW.formatToPlainString(d.t.A0f0Pz, { days: I }) : null,
                        'aria-label': g ? d.NW.formatToPlainString(d.t.A0f0Pz, { days: I }) : void 0,
                        children: (0, o.jsx)(c.zxk, {
                            className: s.confirmationTooltipContents,
                            onClick: u,
                            color: c.zxk.Colors.PRIMARY,
                            size: c.zxk.Sizes.LARGE,
                            submitting: null == p,
                            disabled: g,
                            children: n
                        })
                    }),
                    (0, o.jsx)(c.zxk, {
                        onClick: _,
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
