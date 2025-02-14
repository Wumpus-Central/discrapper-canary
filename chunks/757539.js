n.d(t, { Y: () => u });
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n(793030),
    s = n(481060),
    o = n(393903),
    d = n(388032),
    c = n(442199);
function u(e) {
    let { hasInvites: t, setHeight: n, onShowDisableInvites: u, onShowInviteModal: m, hasInviteDisabledPermission: h, invitesDisabled: x, canCreateInvites: g } = e,
        p = l.useMemo(() => (0, a.debounce)(n, 100), [n]),
        f = l.useCallback(
            (e) => {
                let t = null == e ? void 0 : e.getBoundingClientRect();
                null != t && p(t.height);
            },
            [p]
        ),
        b = (0, o.y)(f);
    return (0, i.jsxs)('div', {
        ref: b,
        className: c.actions,
        children: [
            (0, i.jsx)(r.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: c.eyebrow,
                children: t ? d.intl.string(d.t.DjWsyc) : d.intl.string(d.t.AmwmLi)
            }),
            (0, i.jsxs)('div', {
                className: c.inviteButtons,
                children: [
                    (0, i.jsx)(s.zxk, {
                        size: s.zxk.Sizes.MEDIUM,
                        color: x ? s.zxk.Colors.BRAND : s.zxk.Colors.RED,
                        look: s.zxk.Looks.OUTLINED,
                        disabled: !h,
                        onClick: u,
                        children: x ? d.intl.string(d.t['/dbw3N']) : d.intl.string(d.t.Uwsjn5)
                    }),
                    !0 === g
                        ? (0, i.jsx)(s.zxk, {
                              size: s.zxk.Sizes.MEDIUM,
                              color: s.zxk.Colors.BRAND,
                              onClick: m,
                              children: d.intl.string(d.t.KmK3q6)
                          })
                        : null
                ]
            })
        ]
    });
}
