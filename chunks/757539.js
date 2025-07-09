n.d(t, { Y: () => p });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n(793030),
    a = n(755721),
    s = n(481060),
    c = n(393903),
    d = n(388032),
    u = n(351462);
function p(e) {
    let { hasInvites: t, setHeight: n, onShowDisableInvites: p, onShowInviteModal: m, hasInviteDisabledPermission: b, invitesDisabled: g, canCreateInvites: f } = e,
        h = i.useMemo(() => (0, l.debounce)(n, 100), [n]),
        x = i.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && h(t.height);
            },
            [h]
        ),
        j = (0, c.y)(x);
    return (0, r.jsxs)('div', {
        ref: j,
        className: u.actions,
        children: [
            (0, r.jsx)(o.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: u.eyebrow,
                children: t ? d.intl.string(d.t.DjWsyc) : d.intl.string(d.t.AmwmLi)
            }),
            (0, r.jsxs)('div', {
                className: u.inviteButtons,
                children: [
                    (0, r.jsx)(a.zx, {
                        size: a.zx.Sizes.MEDIUM,
                        color: g ? a.zx.Colors.BRAND : a.zx.Colors.RED,
                        look: a.zx.Looks.OUTLINED,
                        disabled: !b,
                        onClick: p,
                        children: g ? d.intl.string(d.t['/dbw3N']) : d.intl.string(d.t.Uwsjn5)
                    }),
                    !0 === f
                        ? (0, r.jsx)(s.zxk, {
                              variant: 'primary',
                              text: d.intl.string(d.t.KmK3q6),
                              onClick: m
                          })
                        : null
                ]
            })
        ]
    });
}
