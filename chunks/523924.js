t.d(n, { Z: () => u });
var o = t(200651),
    i = t(192379),
    r = t(442837),
    c = t(481060),
    l = t(693546),
    a = t(937111),
    d = t(388032),
    s = t(92850);
let u = (e) => {
    let { headerId: n, reapplyText: t, onReapply: u, confirmText: b, onWithdrawApplication: m, rejectionReason: p = null, guild: f = null } = e,
        g = (0, r.e7)([a.Z], () => {
            var e;
            return a.Z.getCooldown(null !== (e = null == f ? void 0 : f.id) && void 0 !== e ? e : '0');
        });
    i.useEffect(() => {
        null == g && null != f && l.Z.fetchJoinRequestCooldown(f.id);
    }, [g, f]);
    let _ = (null != g ? g : 0) > 0,
        j = _ && null != g ? Math.ceil((1000 * g - Date.now()) / 86400000) : 0;
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
                        id: n,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: (null == f ? void 0 : f.name) != null ? d.NW.formatToPlainString(d.t['P+/gzM'], { guildName: f.name }) : d.NW.string(d.t.gBPcuL)
                    }),
                    null != p && '' !== p
                        ? (0, o.jsxs)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: [
                                  (0, o.jsx)('span', {
                                      className: s.rejectionReasonLabel,
                                      children: d.NW.string(d.t.cf1psb)
                                  }),
                                  (0, o.jsx)('span', { children: p })
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
                        text: _ ? d.NW.formatToPlainString(d.t.A0f0Pz, { days: j }) : null,
                        'aria-label': _ ? d.NW.formatToPlainString(d.t.A0f0Pz, { days: j }) : void 0,
                        children: (0, o.jsx)(c.zxk, {
                            className: s.confirmationTooltipContents,
                            onClick: u,
                            color: c.zxk.Colors.PRIMARY,
                            size: c.zxk.Sizes.LARGE,
                            submitting: null == g,
                            disabled: _,
                            children: t
                        })
                    }),
                    (0, o.jsx)(c.zxk, {
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
