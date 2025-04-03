n.d(t, { Y: () => u });
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n(793030),
    a = n(481060),
    s = n(393903),
    c = n(388032),
    d = n(351462);
function u(e) {
    let { hasInvites: t, setHeight: n, onShowDisableInvites: u, onShowInviteModal: p, hasInviteDisabledPermission: m, invitesDisabled: b, canCreateInvites: g } = e,
        f = i.useMemo(() => (0, l.debounce)(n, 100), [n]),
        h = i.useCallback(
            (e) => {
                let t = null == e ? void 0 : e.getBoundingClientRect();
                null != t && f(t.height);
            },
            [f]
        ),
        x = (0, s.y)(h);
    return (0, r.jsxs)('div', {
        ref: x,
        className: d.actions,
        children: [
            (0, r.jsx)(o.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: d.eyebrow,
                children: t ? c.NW.string(c.t.DjWsyc) : c.NW.string(c.t.AmwmLi)
            }),
            (0, r.jsxs)('div', {
                className: d.inviteButtons,
                children: [
                    (0, r.jsx)(a.zxk, {
                        size: a.zxk.Sizes.MEDIUM,
                        color: b ? a.zxk.Colors.BRAND : a.zxk.Colors.RED,
                        look: a.zxk.Looks.OUTLINED,
                        disabled: !m,
                        onClick: u,
                        children: b ? c.NW.string(c.t['/dbw3N']) : c.NW.string(c.t.Uwsjn5)
                    }),
                    !0 === g
                        ? (0, r.jsx)(a.zxk, {
                              size: a.zxk.Sizes.MEDIUM,
                              color: a.zxk.Colors.BRAND,
                              onClick: p,
                              children: c.NW.string(c.t.KmK3q6)
                          })
                        : null
                ]
            })
        ]
    });
}
