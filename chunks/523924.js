n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(693546),
    s = n(937111),
    c = n(388032),
    u = n(568410);
let d = (e) => {
    let { headerId: t, reapplyText: n, onReapply: d, confirmText: p, onWithdrawApplication: h, rejectionReason: f = null, guild: g = null } = e,
        m = (0, l.e7)([s.Z], () => {
            var e;
            return s.Z.getCooldown(null != (e = null == g ? void 0 : g.id) ? e : '0');
        });
    i.useEffect(() => {
        null == m && null != g && o.Z.fetchJoinRequestCooldown(g.id);
    }, [m, g]);
    let b = (null != m ? m : 0) > 0,
        _ = b && null != m ? Math.ceil((1000 * m - Date.now()) / 86400000) : 0;
    return (0, r.jsxs)('div', {
        className: u.confirmation,
        children: [
            (0, r.jsx)('div', {
                className: u.iconWrapper,
                children: (0, r.jsx)(a.P$X, {
                    size: 'md',
                    color: a.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, r.jsxs)('div', {
                className: u.statusTextContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        id: t,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: (null == g ? void 0 : g.name) != null ? c.intl.formatToPlainString(c.t['P+/gzM'], { guildName: g.name }) : c.intl.string(c.t.gBPcuL)
                    }),
                    null != f && '' !== f
                        ? (0, r.jsxs)(a.Text, {
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: [
                                  (0, r.jsx)('span', {
                                      className: u.rejectionReasonLabel,
                                      children: c.intl.string(c.t.cf1psb)
                                  }),
                                  (0, r.jsx)('span', { children: f })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: u.confirmationButtonRow,
                children: [
                    (0, r.jsx)(a.DY3, {
                        className: u.confirmationButton,
                        text: b ? c.intl.formatToPlainString(c.t.A0f0Pz, { days: _ }) : null,
                        'aria-label': b ? c.intl.formatToPlainString(c.t.A0f0Pz, { days: _ }) : void 0,
                        children: (0, r.jsx)(a.zxk, {
                            className: u.confirmationTooltipContents,
                            onClick: d,
                            color: a.zxk.Colors.PRIMARY,
                            size: a.zxk.Sizes.LARGE,
                            submitting: null == m,
                            disabled: b,
                            children: n
                        })
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: h,
                        size: a.zxk.Sizes.LARGE,
                        color: a.zxk.Colors.RED,
                        className: u.confirmationButton,
                        children: p
                    })
                ]
            })
        ]
    });
};
